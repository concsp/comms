const FAKE_WORD_SWAPS = {"Navy": "Naval", "Naval": "Navy", "Defense": "Defensive", "Defensive": "Defense", "System": "Service", "Service": "System", "Network": "Net", "Command": "Center", "Center": "Command", "Operations": "Operational", "Operational": "Operations", "Information": "Intelligence", "Intelligence": "Information", "Security": "Secure", "Secure": "Security", "Telecommunications": "Telephony", "Telephony": "Telecommunications", "Worldwide": "Global", "Global": "Worldwide", "Router": "Routing", "Routing": "Router", "Protocol": "Procedures", "Procedures": "Protocol", "Secret": "Secure", "Unclassified": "Public", "Joint": "Combined", "Combined": "Joint", "Computer": "Computing", "Computing": "Computer"};

const QuizApp = (() => {
  const LS_KEY = "comms_quiz_v1";
  const DATA_PATH = "data/decks.json";

  function loadState(){ try{ return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch{ return {}; } }
  function saveState(st){ localStorage.setItem(LS_KEY, JSON.stringify(st)); }
  function resetAll(){ localStorage.removeItem(LS_KEY); }

  function deckKey(id){ return `deck_${id}`; }

  function hashStr(s){
    let h = 2166136261;
    for (let i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(16);
  }

  function statsForDeck(state, id){
    const d = state[deckKey(id)] || {};
    let attempts = 0, correct = 0, missed = 0;
    for (const k of Object.keys(d)){
      const c = d[k];
      attempts += (c.attempts||0);
      correct += (c.correct||0);
      missed += (c.missed||0);
    }
    return {attempts, correct, missed, acc: attempts ? Math.round((correct/attempts)*100) : 0};
  }

  function renderOverall(){
    const st = loadState();
    let attempts = 0, correct = 0;
    for (const dk of Object.keys(st)){
      const d = st[dk] || {};
      for (const k of Object.keys(d)){
        attempts += (d[k].attempts||0);
        correct += (d[k].correct||0);
      }
    }
    const acc = attempts ? Math.round((correct/attempts)*100) : 0;
    const aEl = document.getElementById("mAttempts");
    if (!aEl) return;
    document.getElementById("mAttempts").textContent = attempts;
    document.getElementById("mCorrect").textContent = correct;
    document.getElementById("mAcc").textContent = acc + "%";
  }

  function updateItem(deckId, itemId, wasCorrect){
    const st = loadState();
    const dk = deckKey(deckId);
    st[dk] = st[dk] || {};
    const cur = st[dk][itemId] || {attempts:0, correct:0, missed:0};
    cur.attempts += 1;
    if (wasCorrect) cur.correct += 1;
    else cur.missed += 1;
    st[dk][itemId] = cur;
    saveState(st);
  }

  function resetDeck(deckId){
    const st = loadState();
    delete st[deckKey(deckId)];
    saveState(st);
  }

  function shuffle(arr){
    const a = arr.slice();
    for (let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function makeFakeExpansion(exp){
    const toks = exp.split(" ");
    if (toks.length < 2) return exp + "s";
    const out = toks.slice();
    let swapped = 0;
    for (let i=0;i<out.length;i++){
      const clean = out[i].replace(/[^A-Za-z]/g,"");
      if (FAKE_WORD_SWAPS[clean] && swapped < 2){
        out[i] = out[i].replace(clean, FAKE_WORD_SWAPS[clean]);
        swapped++;
      }
    }
    return out.join(" ");
  }

  function smallPerturb(exp){
    const toks = exp.split(" ");
    if (!toks.length) return exp;
    const out = toks.slice();
    const idx = Math.floor(Math.random()*out.length);
    let w = out[idx].replace(/[^\w/-]/g,"");
    if (w.length > 4) w = w.slice(0, -1);
    else w = w + "s";
    out[idx] = w;
    return out.join(" ");
  }

  function tweakNumbers(s){
    // Adjust first integer found (+/- 1 or 10) to make plausible wrong limits/durations.
    const m = s.match(/\b(\d+)\b/);
    if (!m) return null;
    const n = parseInt(m[1], 10);
    const candidates = [n+1, Math.max(0,n-1), n+10, Math.max(0,n-10)];
    const pick = candidates[Math.floor(Math.random()*candidates.length)];
    return s.replace(m[1], String(pick));
  }

  function perturbAnswer(ans){
    // Create a plausible wrong answer by word swaps / small perturbations / number tweaks.
    const n = tweakNumbers(ans);
    if (n && n !== ans) return n;
    const a1 = makeFakeExpansion(ans);
    if (a1 && a1 !== ans) return a1;
    const a2 = smallPerturb(ans);
    if (a2 && a2 !== ans) return a2;
    return null;
  }

  function buildOptions(deck, item, dir, nChoices){
    // dir q2a => question=item.q choices are answers
    // dir a2q => question=item.a choices are questions
    const correct = (dir === "q2a") ? item.a : item.q;

    // Base pool: other items in deck
    const pool = deck.items
      .filter(it => it._id !== item._id)
      .map(it => (dir === "q2a") ? it.a : it.q);

    // Start with some random distractors from pool
    let distractors = shuffle(pool).slice(0, Math.max(0, nChoices-1));

    // Inject more realistic fakes derived from the correct answer (works for all decks)
    // For acronym decks (q2a), these look like plausible expansions. For QA decks, they create near-miss definitions/limits.
    const f1 = perturbAnswer(correct);
    const f2 = perturbAnswer(correct);
    const injected = [f1, f2].filter(x => x && x !== correct);

    if (deck.mode === "acronyms" && dir === "q2a"){
      // prioritize injected fakes first
      distractors = [...injected, ...distractors].filter(x => x && x !== correct);
    } else {
      // for normal QA decks, still add 1–2 near-miss distractors
      distractors = [...injected, ...distractors].filter(x => x && x !== correct);
    }

    // keep unique
    const seen = new Set();
    distractors = distractors.filter(x => (seen.has(x) ? false : (seen.add(x), true)));
    distractors = distractors.slice(0, nChoices-1);
  }

    // Ensure we have enough distractors
    if (distractors.length < nChoices-1){
      const more = shuffle(pool);
      for (const m of more){
        if (distractors.length >= nChoices-1) break;
        if (m !== correct && !distractors.includes(m)) distractors.push(m);
      }
    }

    const opts = [{text: correct, correct:true}, ...distractors.map(d => ({text:d, correct:false}))];
    return shuffle(opts);
  }

  async function loadDecks(){
    const res = await fetch(DATA_PATH);
    return await res.json();
  }

  async function initHome(){
    const data = await loadDecks();
    const wrap = document.getElementById("deckLinks");
    wrap.innerHTML = "";
    data.decks.forEach((d, idx) => {
      const a = document.createElement("a");
      a.className = "deckbtn";
      a.href = `quiz.html#${idx}`;
      a.innerHTML = `<div class="title">${d.name}</div><div class="meta">${d.items.length} questions</div>`;
      wrap.appendChild(a);
    });

    renderOverall();

    document.getElementById("resetAll").addEventListener("click", () => {
      if (confirm("Reset ALL progress for ALL quizzes on this browser?")){
        resetAll();
        renderOverall();
      }
    });
  }

  async function initQuiz(){
    const data = await loadDecks();
    const deckIndex = parseInt((location.hash || "#0").replace("#",""), 10) || 0;
    const deck = data.decks[deckIndex];

    // add deterministic ids
    deck.items = deck.items.map(it => {
      const id = hashStr(deck.name + "\u0000" + it.q + "\u0000" + it.a);
      return {...it, _id:id};
    });

    const els = {
      title: document.getElementById("quizTitle"),
      meta: document.getElementById("quizMeta"),
      counter: document.getElementById("counter"),
      q: document.getElementById("question"),
      choices: document.getElementById("choices"),
      feedback: document.getElementById("feedback"),
      next: document.getElementById("nextBtn"),
      dAttempts: document.getElementById("dAttempts"),
      dCorrect: document.getElementById("dCorrect"),
      dAcc: document.getElementById("dAcc"),
      resetDeck: document.getElementById("resetDeck"),
      shuffleBtn: document.getElementById("shuffleBtn"),
      missedBtn: document.getElementById("missedBtn"),
      choicesN: document.getElementById("choicesN"),
      direction: document.getElementById("direction"),
    };

    els.title.textContent = deck.name;
    els.meta.textContent = `${deck.items.length} questions • saved locally`;

    let orderMode = "shuffle"; // shuffle | missed
    let idx = 0;
    let pendingAdvance = false;

    function getDir(){
      const v = els.direction.value;
      if (v === "mix") return Math.random() < 0.5 ? "q2a" : "a2q";
      return v;
    }

    function makeOrder(){
      if (orderMode === "shuffle") return shuffle(deck.items);

      // missed-first: sort by missed desc, then randomize ties
      const st = loadState();
      const dk = st[deckKey(deckIndex)] || {};
      const withScore = deck.items.map(it => {
        const rec = dk[it._id] || {missed:0, attempts:0};
        return {it, missed: rec.missed||0, attempts: rec.attempts||0, r: Math.random()};
      });
      withScore.sort((a,b) => (b.missed - a.missed) || (a.r - b.r));
      return withScore.map(x => x.it);
    }

    let ordered = makeOrder();

    function renderStats(){
      const st = loadState();
      const s = statsForDeck(st, deckIndex);
      els.dAttempts.textContent = s.attempts;
      els.dCorrect.textContent = s.correct;
      els.dAcc.textContent = s.acc + "%";
    }

    function render(){
      pendingAdvance = false;
      els.feedback.textContent = "";
      els.next.disabled = true;

      if (!ordered.length){
        els.q.textContent = "No questions in this deck.";
        return;
      }
      idx = ((idx % ordered.length) + ordered.length) % ordered.length;
      const item = ordered[idx];
      const dir = getDir();
      const nChoices = parseInt(els.choicesN.value, 10);

      const questionText = (dir === "q2a") ? item.q : item.a;
      els.q.textContent = questionText;
      els.counter.textContent = `${idx+1} / ${ordered.length}`;

      const options = buildOptions(deck, item, dir, nChoices);
      els.choices.innerHTML = "";
      options.forEach(opt => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "choice";
        b.textContent = (opt.text ?? '').toString();
        b.addEventListener("click", () => {
          if (pendingAdvance) return;
          pendingAdvance = true;

          Array.from(els.choices.querySelectorAll("button")).forEach(x => x.disabled = true);

          if (opt.correct){
            b.classList.add("correct");
            els.feedback.textContent = "Correct.";
            updateItem(deckIndex, item._id, true);
          } else {
            b.classList.add("wrong");
            const correctOpt = options.find(o => o.correct)?.text;
            for (const btn of Array.from(els.choices.querySelectorAll("button"))){
              if (btn.textContent === correctOpt) btn.classList.add("correct");
            }
            els.feedback.textContent = "Wrong.";
            updateItem(deckIndex, item._id, false);
          }

          renderStats();
          renderOverall();
          els.next.disabled = false;
        });
        els.choices.appendChild(b);
      });

      renderStats();
    }

    els.next.addEventListener("click", () => { idx += 1; render(); });

    els.shuffleBtn.addEventListener("click", () => {
      orderMode = "shuffle";
      ordered = makeOrder();
      idx = 0;
      render();
    });
    els.missedBtn.addEventListener("click", () => {
      orderMode = "missed";
      ordered = makeOrder();
      idx = 0;
      render();
    });

    els.choicesN.addEventListener("change", () => render());
    els.direction.addEventListener("change", () => render());

    els.resetDeck.addEventListener("click", () => {
      if (confirm("Reset progress for this quiz on this browser?")){
        resetDeck(deckIndex);
        renderStats();
        renderOverall();
      }
    });

    render();
  }

  return { initHome, initQuiz };
})();
window.QuizApp = QuizApp;

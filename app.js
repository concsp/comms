const FlashApp = (() => {
  const LS_KEY = "flashapp_v1";

  function loadState(){ try{ return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch{ return {}; } }
  function saveState(st){ localStorage.setItem(LS_KEY, JSON.stringify(st)); }
  function resetAllProgress(){ localStorage.removeItem(LS_KEY); }

  function deckIdFromPath(path){ return path.replace(/[^a-z0-9]+/gi,"_").toLowerCase(); }
  function hashStr(s){
    let h = 2166136261;
    for (let i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(16);
  }

  function parseTSV(text){
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const cards = [];
    for (const line of lines){
      const idx = line.indexOf("\t");
      if (idx === -1) continue;
      const term = line.slice(0, idx).trim();
      const def = line.slice(idx+1).trim();
      if (!term || !def) continue;
      cards.push({term, def, key: hashStr(term + "\u0000" + def)});
    }
    return cards;
  }

  function getDeckStats(state, deckId){
    const deck = state[deckId] || {};
    let attempts = 0, correct = 0;
    for (const k of Object.keys(deck)){
      const c = deck[k];
      attempts += (c.attempts||0);
      correct += (c.correct||0);
    }
    return {attempts, correct, acc: attempts ? Math.round((correct/attempts)*100) : 0};
  }

  function renderDashboard(){
    const st = loadState();
    let attempts = 0, correct = 0;
    for (const deckId of Object.keys(st)){
      const s = getDeckStats(st, deckId);
      attempts += s.attempts;
      correct += s.correct;
    }
    const acc = attempts ? Math.round((correct/attempts)*100) : 0;
    document.getElementById("mAttempts").textContent = attempts;
    document.getElementById("mCorrect").textContent = correct;
    document.getElementById("mAcc").textContent = acc + "%";
  }

  function updateCardProgress(deckId, cardKey, isCorrect){
    const st = loadState();
    st[deckId] = st[deckId] || {};
    const now = Date.now();
    const c = st[deckId][cardKey] || {attempts:0, correct:0, streak:0, due:0, last:0};
    c.attempts += 1;
    c.last = now;

    if (isCorrect){
      c.correct += 1;
      c.streak = Math.min((c.streak||0) + 1, 10);
      const mins = [2, 10, 60, 240, 720, 1440, 2880, 5760, 10080, 20160][c.streak-1] || 20160;
      c.due = now + mins*60*1000;
    } else {
      c.streak = 0;
      c.due = now + 60*1000;
    }

    st[deckId][cardKey] = c;
    saveState(st);
  }

  function resetDeck(deckId){
    const st = loadState();
    delete st[deckId];
    saveState(st);
  }

  function pickOrder(cards, deckId, mode){
    if (mode === "linear") return cards.slice();

    const arr = cards.slice();
    if (mode === "shuffle"){
      for (let i=arr.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    const st = loadState();
    const deck = st[deckId] || {};
    const now = Date.now();
    arr.sort((a,b) => {
      const da = (deck[a.key]?.due ?? 0);
      const db = (deck[b.key]?.due ?? 0);
      const aa = da <= now ? 0 : da;
      const bb = db <= now ? 0 : db;
      return aa - bb;
    });
    return arr;
  }

  function buildMCOptions(cards, correctCard, direction, nChoices){
    const getChoiceText = (c) => direction === "term2def" ? c.def : c.term;
    const options = [correctCard];
    const pool = cards.filter(c => c.key !== correctCard.key);
    for (let i=pool.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    for (const c of pool){
      if (options.length >= nChoices) break;
      options.push(c);
    }
    for (let i=options.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options.map(c => ({key: c.key, text: getChoiceText(c), isCorrect: c.key === correctCard.key}));
  }

  async function initDeckPage(){
    const path = decodeURIComponent(location.hash.replace(/^#/, "")) || "data/test_all.tsv";
    const deckId = deckIdFromPath(path);

    const res = await fetch(path);
    const text = await res.text();
    const allCards = parseTSV(text);

    const titleMap = {
      "data/lesson1.tsv": "Lesson 1",
      "data/lesson2.tsv": "Lesson 2",
      "data/lesson3.tsv": "Lesson 3",
      "data/lesson4.tsv": "Lesson 4",
      "data/acronyms.tsv": "Acronyms Only",
      "data/test_all.tsv": "Test All (1–4 + Acronyms)",
    };
    document.getElementById("deckTitle").textContent = titleMap[path] || path;
    document.getElementById("deckMeta").textContent = `${allCards.length} cards • saved locally`;

    const els = {
      modePill: document.getElementById("modePill"),
      counter: document.getElementById("counter"),
      q: document.getElementById("question"),
      a: document.getElementById("answer"),
      show: document.getElementById("show"),
      right: document.getElementById("right"),
      wrong: document.getElementById("wrong"),
      choices: document.getElementById("choices"),
      dAttempts: document.getElementById("dAttempts"),
      dCorrect: document.getElementById("dCorrect"),
      dAcc: document.getElementById("dAcc"),
      order: document.getElementById("order"),
      direction: document.getElementById("direction"),
      choicesN: document.getElementById("choicesN"),
      modeFlash: document.getElementById("modeFlash"),
      modeQuiz: document.getElementById("modeQuiz"),
      resetDeck: document.getElementById("resetDeck"),
    };

    let mode = "quiz"; // default to multiple choice
    let idx = 0;
    let ordered = pickOrder(allCards, deckId, els.order.value);
    let direction = els.direction.value;

    function currentDir(){
      if (direction === "mix") return Math.random() < 0.5 ? "term2def" : "def2term";
      return direction;
    }

    function renderStats(){
      const st = loadState();
      const s = getDeckStats(st, deckId);
      els.dAttempts.textContent = s.attempts;
      els.dCorrect.textContent = s.correct;
      els.dAcc.textContent = s.acc + "%";
    }

    function setQA(card, dir){
      els.q.textContent = dir === "term2def" ? card.term : card.def;
      els.a.textContent = dir === "term2def" ? card.def : card.term;
    }

    function render(){
      if (!ordered.length){
        els.q.textContent = "No cards found in this deck.";
        els.a.textContent = "";
        return;
      }
      idx = ((idx % ordered.length) + ordered.length) % ordered.length;
      const card = ordered[idx];
      const dir = currentDir();
      els.counter.textContent = `${idx+1} / ${ordered.length}`;
      els.a.classList.add("hidden");

      if (mode === "flash"){
        els.modePill.textContent = "Flashcards";
        els.choices.classList.add("hidden");
        els.show.classList.remove("hidden");
        els.right.classList.remove("hidden");
        els.wrong.classList.remove("hidden");
        setQA(card, dir);
      } else {
        els.modePill.textContent = "Multiple Choice";
        els.show.classList.add("hidden");
        els.right.classList.add("hidden");
        els.wrong.classList.add("hidden");
        els.choices.classList.remove("hidden");

        setQA(card, dir);
        const nChoices = parseInt(els.choicesN.value, 10);
        const options = buildMCOptions(allCards, card, dir, nChoices);

        els.choices.innerHTML = "";
        for (const opt of options){
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "choice";
          btn.textContent = opt.text;
          btn.addEventListener("click", () => {
            Array.from(els.choices.querySelectorAll("button")).forEach(b => b.disabled = true);
            if (opt.isCorrect){
              btn.classList.add("correct");
              updateCardProgress(deckId, card.key, true);
            } else {
              btn.classList.add("wrong");
              const correctText = options.find(o => o.isCorrect).text;
              for (const b of Array.from(els.choices.querySelectorAll("button"))){
                if (b.textContent === correctText) b.classList.add("correct");
              }
              updateCardProgress(deckId, card.key, false);
            }
            renderStats();
            setTimeout(() => { idx += 1; render(); }, 450);
          });
          els.choices.appendChild(btn);
        }
      }
      renderStats();
    }

    els.show.addEventListener("click", () => els.a.classList.toggle("hidden"));
    els.right.addEventListener("click", () => { updateCardProgress(deckId, ordered[idx].key, true); idx += 1; render(); });
    els.wrong.addEventListener("click", () => { updateCardProgress(deckId, ordered[idx].key, false); idx += 1; render(); });

    els.order.addEventListener("change", () => { ordered = pickOrder(allCards, deckId, els.order.value); idx = 0; render(); });
    els.direction.addEventListener("change", () => { direction = els.direction.value; render(); });
    els.choicesN.addEventListener("change", () => render());

    els.modeFlash.addEventListener("click", () => { mode = "flash"; render(); });
    els.modeQuiz.addEventListener("click", () => { mode = "quiz"; render(); });

    els.resetDeck.addEventListener("click", () => {
      if (confirm("Reset progress for this deck on this browser?")) {
        resetDeck(deckId);
        renderStats();
        render();
      }
    });

    // start in quiz mode
    render();
  }

  return { initDeckPage, renderDashboard, resetAllProgress };
})();
window.FlashApp = FlashApp;

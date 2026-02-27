function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function el(tag, attrs={}, children=[]){
  const e = document.createElement(tag);
  for(const [k,v] of Object.entries(attrs)){
    if(k === "class") e.className = v;
    else if(k === "html") e.innerHTML = v;
    else e.setAttribute(k, v);
  }
  for(const c of children){
    if(typeof c === "string") e.appendChild(document.createTextNode(c));
    else if(c) e.appendChild(c);
  }
  return e;
}

function mountQuiz({rootId, title, subtitle, questionBank}){
  const root = document.getElementById(rootId);
  if(!root) return;

  // Prepare questions (random order, random option order)
  let questions = shuffle(questionBank).map(q => {
    const opts = shuffle(q.options.map((t, idx) => ({t, idx})));
    const correctText = q.options[q.correctIndex];
    const correctShuffledIndex = opts.findIndex(o => o.t === correctText);
    return {
      id: q.id || crypto.randomUUID(),
      prompt: q.prompt,
      options: opts.map(o => o.t),
      correctIndex: correctShuffledIndex,
      explanation: q.explanation || "",
      messageHtml: q.messageHtml || null,
      tags: q.tags || [],
      difficulty: q.difficulty || "mixed"
    };
  });

  let i = 0;
  let score = 0;
  let answered = false;

  const header = el("div", {class:"quiz-top"}, [
    el("div", {}, [
      el("h1", {}, [title]),
      el("p", {}, [subtitle])
    ]),
    el("div", {class:"badge", id:"scoreBadge"}, [
      el("span", {}, ["Score: "]),
      el("span", {id:"scoreVal"}, ["0"]),
      el("span", {}, [" / "]),
      el("span", {id:"scoreTotal"}, [String(questions.length)])
    ])
  ]);

  const progressWrap = el("div", {class:"progress"}, [ el("div", {id:"progBar"}) ]);

  const qMeta = el("div", {class:"qmeta"}, [
    el("div", {class:"qnum", id:"qnum"}, ["Question 1"]),
    el("div", {class:"badge", id:"tagBadge"}, [el("span", {id:"tagText"}, [""])]),
  ]);

  const qText = el("div", {class:"question", id:"qtext"}, [""]);
  const msgPre = el("div", {id:"msgWrap"});
  const optionsWrap = el("div", {class:"options", id:"opts"});
  const explainBox = el("div", {class:"explain", id:"explain"}, [""]);
  explainBox.style.display = "none";

  const btnNext = el("button", {class:"btn primary", id:"nextBtn", type:"button"}, ["Next"]);
  const btnRestart = el("button", {class:"btn ghost", id:"restartBtn", type:"button"}, ["Restart"]);
  btnNext.disabled = true;

  const controls = el("div", {class:"controls"}, [btnNext, btnRestart]);

  const card = el("div", {class:"card qbox"}, [qMeta, progressWrap, el("hr",{class:"sep"}), msgPre, qText, optionsWrap, explainBox, controls]);

  root.innerHTML = "";
  root.appendChild(header);
  root.appendChild(card);

  function render(){
    answered = false;
    btnNext.disabled = true;
    explainBox.style.display = "none";
    explainBox.textContent = "";

    const q = questions[i];
    document.getElementById("qnum").textContent = `Question ${i+1} of ${questions.length}`;

    // tags
    const tagText = (q.tags && q.tags.length) ? q.tags.join(" • ") : "—";
    document.getElementById("tagText").textContent = tagText;

    // progress
    const pct = Math.round((i/Math.max(1,questions.length))*100);
    document.getElementById("progBar").style.width = `${pct}%`;

    // message block (optional)
    msgPre.innerHTML = "";
    if(q.messageHtml){
      msgPre.appendChild(el("pre", {class:"msg", html:q.messageHtml}));
      msgPre.appendChild(el("hr",{class:"sep"}));
    }

    qText.textContent = q.prompt;

    optionsWrap.innerHTML = "";
    q.options.forEach((optText, idx) => {
      const btn = el("button", {class:"opt", type:"button"}, [optText]);
      btn.addEventListener("click", () => choose(idx, btn));
      optionsWrap.appendChild(btn);
    });

    // update score display
    document.getElementById("scoreVal").textContent = String(score);
    document.getElementById("scoreTotal").textContent = String(questions.length);

    if(i === questions.length-1){
      btnNext.textContent = "Finish";
    }else{
      btnNext.textContent = "Next";
    }
  }

  function lockOptions(){
    const kids = Array.from(optionsWrap.children);
    kids.forEach(k => k.classList.add("disabled"));
    kids.forEach(k => k.disabled = true);
  }

  function choose(idx, btnEl){
    if(answered) return;
    answered = true;
    lockOptions();
    btnNext.disabled = false;

    const q = questions[i];
    const kids = Array.from(optionsWrap.children);
    const correctEl = kids[q.correctIndex];

    if(idx === q.correctIndex){
      score += 1;
      btnEl.classList.add("correct");
    }else{
      btnEl.classList.add("incorrect");
      if(correctEl) correctEl.classList.add("correct");
    }

    if(q.explanation){
      explainBox.style.display = "block";
      explainBox.textContent = q.explanation;
    }

    document.getElementById("scoreVal").textContent = String(score);
  }

  btnNext.addEventListener("click", () => {
    if(!answered) return;
    if(i < questions.length - 1){
      i += 1;
      render();
    }else{
      finish();
    }
  });

  btnRestart.addEventListener("click", () => {
    questions = shuffle(questionBank).map(q => {
      const opts = shuffle(q.options.map((t, idx) => ({t, idx})));
      const correctText = q.options[q.correctIndex];
      const correctShuffledIndex = opts.findIndex(o => o.t === correctText);
      return {
        id: q.id || crypto.randomUUID(),
        prompt: q.prompt,
        options: opts.map(o => o.t),
        correctIndex: correctShuffledIndex,
        explanation: q.explanation || "",
        messageHtml: q.messageHtml || null,
        tags: q.tags || [],
        difficulty: q.difficulty || "mixed"
      };
    });
    i = 0;
    score = 0;
    render();
  });

  function finish(){
    const pct = Math.round((score/questions.length)*100);
    document.getElementById("progBar").style.width = "100%";
    optionsWrap.innerHTML = "";
    msgPre.innerHTML = "";
    qText.textContent = `Done. Score: ${score}/${questions.length} (${pct}%).`;
    explainBox.style.display = "block";
    explainBox.innerHTML = `Review: click <span class="kbd">Restart</span> to reshuffle questions and options.`;
    btnNext.disabled = true;
  }

  render();
}
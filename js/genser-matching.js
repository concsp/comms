(() => {
  const root = document.getElementById("matchRoot");
  const scorePill = document.getElementById("scorePill");

  // Format line set (12 items)
  const PAIRS = [
    { line: "1",  desc: "Transmission Identification" },
    { line: "2",  desc: "Message Header Information" },
    { line: "4",  desc: "Security Warning" },
    { line: "5",  desc: "Date Time Group" },
    { line: "6",  desc: "Originator" },
    { line: "7",  desc: "Action Addressee" },
    { line: "8",  desc: "Information Addressee" },
    { line: "11", desc: "Break" },
    { line: "12", desc: "Text" },
    { line: "13", desc: "Break" },
    { line: "14", desc: "Validation" },
    { line: "16", desc: "Ending Sign" },
  ];

  const ALL_DESCS = PAIRS.map(p => p.desc);

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let shuffledOptions = shuffle(ALL_DESCS);
  let locked = false;

  function el(tag, attrs = {}, children = []) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    for (const c of children) n.appendChild(c);
    return n;
  }

  function build() {
    root.innerHTML = "";
    locked = false;
    setScore(0);

    // Header row
    const header = el("div", { class: "matchHeaderRow" }, [
      el("div", { class: "matchColHead", text: "Format Line #" }),
      el("div", { class: "matchColHead", text: "Line Description / Title" }),
    ]);

    const list = el("div", { class: "matchList" });

    const rows = PAIRS.map(pair => {
      const select = el("select", { class: "matchSelect" });
      select.appendChild(el("option", { value: "", text: "Select…" }));

      for (const opt of shuffledOptions) {
        select.appendChild(el("option", { value: opt, text: opt }));
      }

      const feedback = el("div", { class: "matchInlineFeedback" });

      const row = el("div", { class: "matchRow" }, [
        el("div", { class: "matchLine", text: pair.line }),
        el("div", { class: "matchControl" }, [
          select,
          feedback
        ])
      ]);

      return { pair, row, select, feedback };
    });

    rows.forEach(r => list.appendChild(r.row));

    // Buttons
    const btnRow = el("div", { class: "matchBtnRow" });
    const btnCheck = el("button", {
      class: "btn",
      text: "Check Answers",
      onclick: () => {
        if (locked) return;
        grade(rows);
      },
    });

    const btnReset = el("button", {
      class: "btn btnSecondary",
      text: "Restart",
      onclick: () => reset(),
    });

    btnRow.appendChild(btnCheck);
    btnRow.appendChild(btnReset);

    root.appendChild(header);
    root.appendChild(list);
    root.appendChild(btnRow);

    // light, safe styling if your CSS doesn’t already have these classes
    injectFallbackStyles();
  }

  function reset() {
    shuffledOptions = shuffle(ALL_DESCS);
    build();
  }

  function grade(rows) {
    locked = true;

    let correct = 0;

    for (const r of rows) {
      const chosen = r.select.value;
      const isCorrect = chosen === r.pair.desc;

      // lock
      r.select.disabled = true;

      // clear old state
      r.row.classList.remove("isCorrect", "isWrong");

      if (isCorrect) {
        correct += 1;
        r.row.classList.add("isCorrect");
        r.feedback.textContent = "✓";
      } else {
        r.row.classList.add("isWrong");
        if (!chosen) {
          r.feedback.textContent = `✗ Correct: ${r.pair.desc}`;
        } else {
          r.feedback.textContent = `✗ Correct: ${r.pair.desc}`;
        }
      }
    }

    setScore(correct);
  }

  function setScore(n) {
    if (scorePill) scorePill.textContent = `Score: ${n} / 12`;
  }

  // If your global CSS already defines these classes, this does nothing harmful.
  function injectFallbackStyles() {
    if (document.getElementById("genserMatchFallbackStyles")) return;

    const css = `
      .matchHeaderRow{
        display:grid;
        grid-template-columns: 120px 1fr;
        gap: 14px;
        padding: 10px 8px;
        opacity: .9;
      }
      .matchColHead{ font-weight: 700; }
      .matchList{ display:flex; flex-direction:column; gap: 12px; margin-top: 6px; }
      .matchRow{
        display:grid;
        grid-template-columns: 120px 1fr;
        gap: 14px;
        padding: 14px;
        border-radius: 16px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(0,0,0,0.18);
      }
      .matchLine{
        display:flex;
        align-items:center;
        justify-content:center;
        font-size: 18px;
        font-weight: 800;
      }
      .matchControl{ display:flex; flex-direction:column; gap: 10px; }
      .matchSelect{
        width: 100%;
        padding: 12px 12px;
        border-radius: 14px;
        background: rgba(0,0,0,0.22);
        border: 1px solid rgba(255,255,255,0.12);
        color: #fff;
        font-weight: 650;
      }
      .matchInlineFeedback{
        font-size: 14px;
        opacity: .95;
      }
      .matchBtnRow{
        display:flex;
        gap: 12px;
        margin-top: 14px;
      }
      /* result states */
      .matchRow.isCorrect{
        border-color: rgba(0, 255, 170, 0.35);
        box-shadow: 0 0 0 1px rgba(0, 255, 170, 0.10) inset;
      }
      .matchRow.isWrong{
        border-color: rgba(255, 80, 80, 0.35);
        box-shadow: 0 0 0 1px rgba(255, 80, 80, 0.10) inset;
      }
      /* reference message box */
      .messageBox{
        margin-top: 10px;
        margin-bottom: 14px;
        padding: 14px;
        border-radius: 16px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(0,0,0,0.18);
      }
      .messageBoxTitle{
        font-weight: 800;
        margin-bottom: 10px;
        opacity: .95;
      }
      .messagePre{
        margin: 0;
        white-space: pre;
        overflow: auto;
        max-height: 260px;
        padding: 12px;
        border-radius: 14px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(0,0,0,0.30);
        color: #fff;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 13px;
        line-height: 1.35;
      }
    `;

    const style = document.createElement("style");
    style.id = "genserMatchFallbackStyles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  // init
  build();
})();


(function () {
  const LINES = [
    { n: "1",  label: "Transmission Identification" },
    { n: "2",  label: "Message Header Information" },
    { n: "4",  label: "Security Warning" },
    { n: "5",  label: "Date Time Group" },
    { n: "6",  label: "Originator" },
    { n: "7",  label: "Action Addressee" },
    { n: "8",  label: "Information Addressee" },
    { n: "11", label: "Break" },
    { n: "12", label: "Text" },
    { n: "13", label: "Break" },
    { n: "14", label: "Validation" },
    { n: "16", label: "Ending Sign" }
  ];

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else node.setAttribute(k, v);
    }
    for (const c of children) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    return node;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const app = document.getElementById("app");
  const card = el("div", { class: "card" });

  const title = el("h1", { class: "pageTitle" }, ["GENSER Format Line Matching"]);
  const subtitle = el("div", { class: "pageSubtitle" }, ["Match each format line number to its correct description."]);
  const scorePill = el("div", { class: "scorePill" }, ["Score: ", el("span", { id: "score" }, ["0"]), " / ", String(LINES.length)]);

  const head = el("div", { class: "headerRow" }, [
    el("div", {}, [title, subtitle]),
    scorePill
  ]);

  const imgWrap = el("div", { class: "imgWrap" }, [
    el("img", { src: "img/genser_format_lines.png", alt: "GENSER format line table", class: "matchImg" })
  ]);

  const options = shuffle(LINES.map(x => x.label));
  const table = el("div", { class: "matchTable" });

  const rows = [];
  for (const line of LINES) {
    const select = el("select", { class: "matchSelect" });
    select.appendChild(el("option", { value: "" }, ["Select…"]));
    for (const opt of options) select.appendChild(el("option", { value: opt }, [opt]));
    const row = el("div", { class: "matchRow" }, [
      el("div", { class: "matchNum" }, [line.n]),
      select,
      el("div", { class: "matchStatus" }, [""])
    ]);
    rows.push({ line, select, row, status: row.children[2] });
    table.appendChild(row);
  }

  const btnRow = el("div", { class: "btnRow" });
  const checkBtn = el("button", { class: "btn primary", type: "button" }, ["Check"]);
  const resetBtn = el("button", { class: "btn", type: "button" }, ["Restart"]);
  btnRow.appendChild(checkBtn);
  btnRow.appendChild(resetBtn);

  const explain = el("div", { class: "explain", id: "explain" }, [""]);

  let locked = false;

  function compute() {
    let score = 0;
    for (const r of rows) {
      const chosen = r.select.value;
      const ok = chosen === r.line.label;
      if (ok) score++;
    }
    return score;
  }

  function renderResult() {
    const score = compute();
    document.getElementById("score").textContent = String(score);

    for (const r of rows) {
      const chosen = r.select.value;
      const ok = chosen === r.line.label;
      r.row.classList.remove("ok", "bad");
      if (chosen) r.row.classList.add(ok ? "ok" : "bad");
      r.status.textContent = chosen ? (ok ? "✓" : "✗") : "";
    }

    const e = document.getElementById("explain");
    if (score === LINES.length) e.textContent = "Perfect. All format lines matched correctly.";
    else e.textContent = `You got ${score}/${LINES.length}. Fix the red rows and check again.`;
  }

  checkBtn.addEventListener("click", () => {
    renderResult();
  });

  resetBtn.addEventListener("click", () => {
    for (const r of rows) {
      r.select.value = "";
      r.row.classList.remove("ok", "bad");
      r.status.textContent = "";
    }
    document.getElementById("score").textContent = "0";
    document.getElementById("explain").textContent = "";
  });

  card.appendChild(head);
  card.appendChild(imgWrap);
  card.appendChild(el("div", { class: "divider" }));
  card.appendChild(el("div", { class: "matchHeader" }, [
    el("div", { class: "matchNumHead" }, ["Format Line #"]),
    el("div", { class: "matchDescHead" }, ["Line Description / Title"]),
    el("div", { class: "matchStatusHead" }, [""])
  ]));
  card.appendChild(table);
  card.appendChild(btnRow);
  card.appendChild(explain);

  app.appendChild(card);
})();

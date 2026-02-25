/* GENSER Format Line Matching
   - No image
   - Reference GENSER text included at top
   - Per-row instant feedback + Check All
*/

(function () {
  const REF_MSG = `VZCZCYKN001
RTTUZYUW RHBCYKN0001 0331200-UUUU--RUDOSAB RULYCUR.
ZNR UUUUU
R 021200Z FEB 02
FM USS YORKTOWN
TO USS CURTIS
INFO SPCC MECHANICSBURG PA
DESRON TEN
AIG 1123
USS TICONDEROGA
BT
UNCLAS //N03207// PERSONAL FOR COMMANDING OFFICERS
MSGID/GENADMIN/YORKTOWN/-/FEB//
SUBJ/(U)NAVY WIDE GOLF TOURNAMENT//
REF/A/TELCON/RADM STORM/01FEB02//
AMPN/REF A IS A TELEPHONE CONVERSATION BETWEEN CDR KERNO AND RADM STORM IRT ALLNAV GOLF TOURNAMENT ON
THE MS GULF COAST.//
RMKS/1. IAW REF A, PLEASE DISPERSE INFORMATION TO YOUR CREWS IRT THE ALLNAV GOLF TOURNAMENT ON 14 FEB 2002. THE TOURNAMENT WILL TAKE PLACE AT PINE WOODS RESORT IN BILOXI MS, AT 1000L. HOPE TO SEE ALL THERE.//
BT
#0001


NNNN`;

  // Format lines to match (from your Lesson 4 table)
  const MATCH_ITEMS = [
    { line: 1,  answer: "Transmission Identification" },
    { line: 2,  answer: "Message Header Information" },
    { line: 4,  answer: "Security Warning" },
    { line: 5,  answer: "Date Time Group" },
    { line: 6,  answer: "Originator" },
    { line: 7,  answer: "Action Addressee" },
    { line: 8,  answer: "Information Addressee" },
    { line: 11, answer: "Break" },
    { line: 12, answer: "Text" },
    { line: 13, answer: "Break" },
    { line: 14, answer: "Validation" },
    { line: 16, answer: "Ending Sign" },
  ];

  // Option pool (unique labels). Note: Break appears twice but should only be one option label.
  const OPTION_POOL = [
    "Transmission Identification",
    "Message Header Information",
    "Security Warning",
    "Date Time Group",
    "Originator",
    "Action Addressee",
    "Information Addressee",
    "Break",
    "Text",
    "Validation",
    "Ending Sign",
  ];

  const refMsgEl = document.getElementById("refMsg");
  const matchTableEl = document.getElementById("matchTable");
  const scoreLabelEl = document.getElementById("scoreLabel");
  const statusBoxEl = document.getElementById("statusBox");
  const checkAllBtn = document.getElementById("checkAllBtn");
  const resetBtn = document.getElementById("resetBtn");

  // --- helpers ---
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function setScore(score, total) {
    scoreLabelEl.textContent = `Score: ${score} / ${total}`;
  }

  function clearStatusBox() {
    statusBoxEl.style.display = "none";
    statusBoxEl.textContent = "";
  }

  function showStatusBox(msg) {
    statusBoxEl.style.display = "block";
    statusBoxEl.textContent = msg;
  }

  // Track correctness per row id
  const state = {
    // key: row index -> { selected: string|null, isCorrect: boolean|null }
    rows: [],
  };

  function computeScore() {
    let correct = 0;
    for (const r of state.rows) {
      if (r && r.isCorrect === true) correct++;
    }
    return correct;
  }

  function updateScoreUI() {
    setScore(computeScore(), MATCH_ITEMS.length);
  }

  function gradeRow(idx, rowEl, selectEl) {
    const item = MATCH_ITEMS[idx];
    const selected = selectEl.value || "";

    // reset visuals
    rowEl.classList.remove("ok", "bad");
    const statusEl = rowEl.querySelector(".matchStatus");
    statusEl.textContent = "";

    if (!selected) {
      state.rows[idx] = { selected: "", isCorrect: null };
      updateScoreUI();
      return;
    }

    const isCorrect = selected === item.answer;
    state.rows[idx] = { selected, isCorrect };

    if (isCorrect) {
      rowEl.classList.add("ok");
      statusEl.textContent = "✓";
    } else {
      rowEl.classList.add("bad");
      statusEl.textContent = "✕";
    }

    updateScoreUI();
  }

  function buildRow(idx, options) {
    const item = MATCH_ITEMS[idx];

    const row = document.createElement("div");
    row.className = "matchRow";
    row.dataset.idx = String(idx);

    const num = document.createElement("div");
    num.className = "matchNum";
    num.textContent = String(item.line);

    const select = document.createElement("select");
    select.className = "matchSelect";
    select.innerHTML = `
      <option value="">Select...</option>
      ${options.map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join("")}
    `;

    const status = document.createElement("div");
    status.className = "matchStatus";

    row.appendChild(num);
    row.appendChild(select);
    row.appendChild(status);

    select.addEventListener("change", () => {
      clearStatusBox();
      gradeRow(idx, row, select);
    });

    return row;
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function init() {
    // Reference text
    refMsgEl.textContent = REF_MSG;

    // Reset state
    state.rows = Array(MATCH_ITEMS.length).fill(null);
    clearStatusBox();
    setScore(0, MATCH_ITEMS.length);

    // Build matching UI
    matchTableEl.innerHTML = "";
    const options = shuffle(OPTION_POOL);

    for (let i = 0; i < MATCH_ITEMS.length; i++) {
      const row = buildRow(i, options);
      matchTableEl.appendChild(row);
    }

    // Buttons
    checkAllBtn.onclick = () => {
      clearStatusBox();

      const rowEls = Array.from(matchTableEl.querySelectorAll(".matchRow"));
      rowEls.forEach((rowEl) => {
        const idx = Number(rowEl.dataset.idx);
        const selectEl = rowEl.querySelector("select");
        gradeRow(idx, rowEl, selectEl);
      });

      const score = computeScore();
      const total = MATCH_ITEMS.length;

      if (score === total) {
        showStatusBox("Perfect — all format lines matched correctly.");
      } else {
        showStatusBox(`Checked all. Current score: ${score} / ${total}. Fix the rows marked with ✕.`);
      }
    };

    resetBtn.onclick = () => init();
  }

  init();
})();

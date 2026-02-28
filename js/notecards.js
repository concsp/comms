(() => {
  const DATA = window.NAVCOMMS_NOTECARDS || {};

  const qs = new URLSearchParams(window.location.search);
  const initialDeck = qs.get('deck') || '2';

  const deckSelect = document.getElementById('deckSelect');
  const shuffleToggle = document.getElementById('shuffleToggle');

  const modeCardBtn = document.getElementById('modeCard');
  const modeDeckBtn = document.getElementById('modeDeck');

  const cardView = document.getElementById('cardView');
  const deckView = document.getElementById('deckView');

  const counterEl = document.getElementById('counter');
  const questionEl = document.getElementById('question');
  const answerEl = document.getElementById('answer');
  const revealBtn = document.getElementById('revealBtn');
  const prevBtn = document.getElementById('prevBtn');
  const restartBtn = document.getElementById('restartBtn');

  const deckCountEl = document.getElementById('deckCount');
  const deckListEl = document.getElementById('deckList');

  let deckKey = String(initialDeck);
  let cards = [];
  let order = [];
  let idx = 0;
  let revealed = false;
  let mode = 'card'; // 'card' | 'deck'

  function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getDeckCards(key) {
    const d = DATA[key];
    return d && Array.isArray(d.cards) ? d.cards : [];
  }

  function setUrl() {
    const p = new URLSearchParams();
    p.set('deck', deckKey);
    if (shuffleToggle.checked) p.set('shuffle', '1');
    if (mode !== 'card') p.set('mode', mode);
    history.replaceState(null, '', `${window.location.pathname}?${p.toString()}`);
  }

  function applyMode(nextMode) {
    mode = nextMode;
    modeCardBtn.classList.toggle('active', mode === 'card');
    modeDeckBtn.classList.toggle('active', mode === 'deck');
    cardView.style.display = mode === 'card' ? '' : 'none';
    deckView.style.display = mode === 'deck' ? '' : 'none';
    setUrl();
    if (mode === 'deck') renderDeckView();
    else renderCard();
  }

  function resetOrder() {
    cards = getDeckCards(deckKey);
    order = Array.from({ length: cards.length }, (_, i) => i);
    if (shuffleToggle.checked) shuffle(order);
    idx = 0;
    revealed = false;
  }

  function renderCard() {
    const total = cards.length;
    if (!total) {
      counterEl.textContent = 'No cards in this deck.';
      questionEl.textContent = 'No data found.';
      answerEl.style.display = 'none';
      revealBtn.disabled = true;
      prevBtn.disabled = true;
      return;
    }

    idx = clamp(idx, 0, total - 1);
    const card = cards[order[idx]];

    counterEl.textContent = `Card ${idx + 1} of ${total}`;
    questionEl.textContent = card.q;

    if (revealed) {
      answerEl.textContent = card.a;
      answerEl.style.display = '';
      revealBtn.textContent = (idx === total - 1) ? 'Restart' : 'Next';
    } else {
      answerEl.style.display = 'none';
      revealBtn.textContent = 'Reveal';
    }

    prevBtn.disabled = (idx === 0 && !revealed);
    revealBtn.disabled = false;
  }

  function renderDeckView() {
    const total = cards.length;
    deckCountEl.textContent = `${total} card${total === 1 ? '' : 's'}`;
    deckListEl.innerHTML = '';

    if (!total) {
      deckListEl.innerHTML = '<div class="muted">No cards in this deck.</div>';
      return;
    }

    const list = document.createElement('div');
    list.className = 'deckList';

    const indices = Array.from({ length: total }, (_, i) => i);
    if (shuffleToggle.checked) shuffle(indices);

    indices.forEach((i, n) => {
      const card = cards[i];
      const details = document.createElement('details');
      details.className = 'deckItem';
      const summary = document.createElement('summary');
      summary.textContent = `${n + 1}. ${card.q}`;
      const ans = document.createElement('div');
      ans.className = 'deckAns';
      ans.textContent = card.a;
      details.appendChild(summary);
      details.appendChild(ans);
      list.appendChild(details);
    });

    deckListEl.appendChild(list);
  }

  function onRevealOrNext() {
    const total = cards.length;
    if (!total) return;

    if (!revealed) {
      revealed = true;
      renderCard();
      return;
    }

    // revealed -> Next / Restart
    if (idx >= total - 1) {
      resetOrder();
      renderCard();
      return;
    }

    idx += 1;
    revealed = false;
    renderCard();
  }

  function onPrev() {
    const total = cards.length;
    if (!total) return;

    // If answer revealed, first hide it.
    if (revealed) {
      revealed = false;
      renderCard();
      return;
    }

    idx = clamp(idx - 1, 0, total - 1);
    revealed = false;
    renderCard();
  }

  function init() {
    // init deck select
    if (DATA[deckKey]) deckSelect.value = deckKey;

    // init shuffle + mode from URL
    shuffleToggle.checked = qs.get('shuffle') === '1';
    const urlMode = qs.get('mode');
    if (urlMode === 'deck') mode = 'deck';

    resetOrder();

    // listeners
    deckSelect.addEventListener('change', () => {
      deckKey = deckSelect.value;
      resetOrder();
      setUrl();
      if (mode === 'deck') renderDeckView();
      else renderCard();
    });

    shuffleToggle.addEventListener('change', () => {
      resetOrder();
      setUrl();
      if (mode === 'deck') renderDeckView();
      else renderCard();
    });

    modeCardBtn.addEventListener('click', () => applyMode('card'));
    modeDeckBtn.addEventListener('click', () => applyMode('deck'));

    revealBtn.addEventListener('click', onRevealOrNext);
    prevBtn.addEventListener('click', onPrev);
    restartBtn.addEventListener('click', () => {
      resetOrder();
      setUrl();
      if (mode === 'deck') renderDeckView();
      else renderCard();
    });

    // keyboard
    window.addEventListener('keydown', (e) => {
      if (mode !== 'card') return;
      if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onRevealOrNext();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      }
    }, { passive: false });

    applyMode(mode);
  }

  init();
})();

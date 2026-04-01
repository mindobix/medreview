/* slideshow.js – full-screen slideshow overlay */
window.Slideshow = (() => {
  let _cards      = [];
  let _index      = 0;
  let _stepKey    = null;
  let _catSlug    = null;
  let _subcatSlug = null;
  let _touchX     = 0;

  const overlay   = () => document.getElementById('slideshow-overlay');

  /* ── Open ──────────────────────────────────────────────────── */
  function open(stepKey, catSlug, startIndex, subcatSlug) {
    _stepKey    = stepKey;
    _catSlug    = catSlug;
    _subcatSlug = subcatSlug || null;
    _cards      = Store.getCards(stepKey, catSlug, _subcatSlug);
    if (_cards.length === 0) { UI.toast('No cards to review', 'info'); return; }
    _index = Math.min(startIndex || 0, _cards.length - 1);

    const cats = Store.getCategories(stepKey);
    const cat  = cats.find(c => c.slug === catSlug);
    let label  = cat ? `${cat.icon} ${cat.label}` : catSlug;
    if (_subcatSlug) {
      const subs = Store.getSubcategories(stepKey, catSlug);
      const sub  = subs.find(s => s.slug === _subcatSlug);
      if (sub) label += ` › ${sub.label}`;
    }
    document.getElementById('slideshow-category-label').textContent = label;

    _render();
    overlay().classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', _handleKey);
    overlay().addEventListener('touchstart', _touchStart, { passive: true });
    overlay().addEventListener('touchend', _touchEnd, { passive: true });
  }

  /* ── Close ─────────────────────────────────────────────────── */
  function close() {
    overlay().classList.add('hidden');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', _handleKey);
    overlay().removeEventListener('touchstart', _touchStart);
    overlay().removeEventListener('touchend', _touchEnd);
  }

  /* ── Navigation ────────────────────────────────────────────── */
  function next() {
    if (_cards.length === 0) return;
    _index = (_index + 1) % _cards.length;
    _render();
  }

  function prev() {
    if (_cards.length === 0) return;
    _index = (_index - 1 + _cards.length) % _cards.length;
    _render();
  }

  /* ── Render card ───────────────────────────────────────────── */
  function _render() {
    const card = _cards[_index];
    document.getElementById('slideshow-card-title').textContent  = card.title || 'Untitled';
    document.getElementById('slideshow-card-content').innerHTML  = card.content || '';
    document.getElementById('slideshow-counter').textContent     = `${_index + 1} / ${_cards.length}`;

    const pct = _cards.length > 1 ? ((_index / (_cards.length - 1)) * 100) : 100;
    document.getElementById('slideshow-progress-fill').style.width = pct + '%';

    // flag button state
    const flagBtn = document.getElementById('slideshow-flag-btn');
    flagBtn.classList.toggle('active', !!card.flagged);
    flagBtn.textContent = card.flagged ? '🚩 Flagged' : '🚩 Flag';
  }

  /* ── Keyboard ──────────────────────────────────────────────── */
  function _handleKey(e) {
    if (overlay().classList.contains('hidden')) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); prev(); }
    if (e.key === 'Escape')                               { e.preventDefault(); close(); }
  }

  /* ── Touch swipe ───────────────────────────────────────────── */
  function _touchStart(e) { _touchX = e.changedTouches[0].screenX; }
  function _touchEnd(e) {
    const dx = e.changedTouches[0].screenX - _touchX;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
  }

  /* ── Init ──────────────────────────────────────────────────── */
  function init() {
    document.getElementById('slideshow-close').addEventListener('click', close);
    document.getElementById('slideshow-prev').addEventListener('click', prev);
    document.getElementById('slideshow-next').addEventListener('click', next);

    document.getElementById('btn-slideshow').addEventListener('click', () => {
      const s = Store.getSettings();
      open(s.activeStep, s.activeCategory, 0, s.activeSubcategory);
    });

    document.getElementById('slideshow-flag-btn').addEventListener('click', () => {
      if (!_cards.length) return;
      const card = _cards[_index];
      const flagged = Store.toggleFlag(_stepKey, _catSlug, card.id, _subcatSlug);
      card.flagged = flagged;  // sync local array
      _render();
      Render.cardList();
    });

    document.getElementById('slideshow-edit-btn').addEventListener('click', () => {
      if (!_cards.length) return;
      const card = _cards[_index];
      close();
      Store.setSetting('activeStep', _stepKey);
      Store.setSetting('activeCategory', _catSlug);
      Store.setSetting('activeSubcategory', _subcatSlug || null);
      Render.stepTabs();
      Render.sidebar();
      Render.cardList();
      Editor.open(card.id);
    });
  }

  return { init, open, close, next, prev };
})();

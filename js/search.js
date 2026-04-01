/* search.js – global search across all steps, categories, cards */
window.Search = (() => {
  let _debounceTimer = null;

  function _stripHtml(html) {
    const d = document.createElement('div');
    d.innerHTML = html || '';
    return d.textContent || '';
  }

  function _esc(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function _highlightMatch(text, term) {
    if (!term) return _esc(text);
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(${escaped})`, 'gi');
    return _esc(text).replace(re, '<mark>$1</mark>');
  }

  /* Run a search and render results */
  function run(rawTerm) {
    const term = rawTerm.trim();
    const cardListEl    = document.getElementById('card-list');
    const emptyEl       = document.getElementById('empty-state');
    const resultsEl     = document.getElementById('search-results');
    const editorEl      = document.getElementById('card-editor');

    editorEl.classList.add('hidden');
    document.getElementById('content-breadcrumb').innerHTML =
      term ? `Search: <span>${_esc(term)}</span>` : '';

    if (!term) {
      resultsEl.classList.add('hidden');
      cardListEl.style.display = 'grid';
      Render.cardList();
      return;
    }

    cardListEl.style.display = 'none';
    emptyEl.classList.add('hidden');
    resultsEl.classList.remove('hidden');

    const allCards = Store.getAllCards();
    const lc = term.toLowerCase();
    const matches = allCards.filter(({ card }) =>
      (card.title || '').toLowerCase().includes(lc) ||
      _stripHtml(card.content || '').toLowerCase().includes(lc)
    );

    if (matches.length === 0) {
      resultsEl.innerHTML = `<div class="search-no-results">No cards found for "<b>${_esc(term)}</b>"</div>`;
      return;
    }

    resultsEl.innerHTML = matches.map(({ stepLabel, catLabel, card }) => {
      const plainContent = _stripHtml(card.content || '');
      const idx = plainContent.toLowerCase().indexOf(lc);
      const start = Math.max(0, idx - 60);
      const snippet = (start > 0 ? '…' : '') + plainContent.slice(start, start + 140) + (plainContent.length > start + 140 ? '…' : '');
      return `
        <div class="search-result-item" data-step="${card._stepKey || ''}" data-cat="${card._catSlug || ''}" data-id="${card.id}">
          <div class="search-result-step">${_esc(stepLabel)} › ${_esc(catLabel)}</div>
          <div class="search-result-title">${_highlightMatch(card.title || 'Untitled', term)}</div>
          <div class="search-result-preview">${_highlightMatch(snippet, term)}</div>
        </div>`;
    }).join('');

    // Attach click handlers using stored metadata
    resultsEl.querySelectorAll('.search-result-item').forEach((el, i) => {
      el.addEventListener('click', () => {
        const { stepKey, catSlug, card } = matches[i];
        // Navigate to that step/category then open card
        Store.setSetting('activeStep', stepKey);
        Store.setSetting('activeCategory', catSlug);
        Render.stepTabs();
        Render.sidebar();
        _clearSearch();
        Render.cardList();
        Editor.open(card.id);
      });
    });
  }

  function _clearSearch() {
    const input = document.getElementById('search-input');
    input.value = '';
    document.getElementById('search-clear').classList.add('hidden');
    document.getElementById('search-results').classList.add('hidden');
  }

  function init() {
    const input     = document.getElementById('search-input');
    const clearBtn  = document.getElementById('search-clear');

    input.addEventListener('input', () => {
      clearTimeout(_debounceTimer);
      clearBtn.classList.toggle('hidden', !input.value);
      _debounceTimer = setTimeout(() => run(input.value), 280);
    });

    clearBtn.addEventListener('click', () => {
      _clearSearch();
      Render.cardList();
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') { _clearSearch(); Render.cardList(); }
    });
  }

  return { init, run };
})();

/* editor.js – card editor panel: open, save, delete, highlight */
window.Editor = (() => {
  let _currentId   = null;   // null = new card
  let _stepKey     = null;
  let _catSlug     = null;

  const editorEl   = () => document.getElementById('card-editor');
  const titleEl    = () => document.getElementById('card-title-input');
  const contentEl  = () => document.getElementById('card-content-input');

  /* ── Open ──────────────────────────────────────────────────── */
  function open(cardId) {
    const settings = Store.getSettings();
    _stepKey = settings.activeStep;
    _catSlug = settings.activeCategory;
    _currentId = cardId || null;

    const card = cardId ? Store.getCard(_stepKey, _catSlug, cardId) : null;

    titleEl().value      = card ? (card.title || '') : '';
    contentEl().innerHTML = card ? (card.content || '') : '';

    // Flag button state
    const flagBtn = document.getElementById('btn-flag-card');
    flagBtn.classList.toggle('active', !!(card && card.flagged));

    // Delete button – hide for new cards
    document.getElementById('btn-delete-card').classList.toggle('hidden', !cardId);

    editorEl().classList.remove('hidden');
    titleEl().focus();
  }

  /* ── Save ──────────────────────────────────────────────────── */
  function save() {
    const title   = titleEl().value.trim();
    const content = contentEl().innerHTML.trim();
    if (!title && !content) { UI.toast('Card is empty – nothing saved', 'error'); return; }

    const flagActive = document.getElementById('btn-flag-card').classList.contains('active');

    const cardData = {
      id:      _currentId || undefined,
      title:   title || 'Untitled',
      content,
      flagged: flagActive
    };

    Store.upsertCard(_stepKey, _catSlug, cardData);
    UI.toast('Card saved', 'success');
    close();
    Render.cardList();
    Render.updateCategoryCount(_stepKey, _catSlug);
  }

  /* ── Delete ────────────────────────────────────────────────── */
  function deleteCard() {
    if (!_currentId) return;
    UI.showModal({
      title: 'Delete Card',
      body: `<p>Delete <b>${titleEl().value || 'this card'}</b>? This cannot be undone.</p>`,
      confirmText: 'Delete', confirmClass: 'btn-danger',
      onConfirm: () => {
        Store.deleteCard(_stepKey, _catSlug, _currentId);
        UI.toast('Card deleted', 'info');
        close();
        Render.cardList();
        Render.updateCategoryCount(_stepKey, _catSlug);
      }
    });
  }

  /* ── Close ─────────────────────────────────────────────────── */
  function close() {
    editorEl().classList.add('hidden');
    titleEl().value = '';
    contentEl().innerHTML = '';
    _currentId = null;
  }

  /* ── Toolbar formatting ────────────────────────────────────── */
  function execFormat(command) {
    contentEl().focus();
    document.execCommand(command, false, null);
  }

  /* ── Highlight ─────────────────────────────────────────────── */
  function applyHighlight() {
    const ce = contentEl();
    ce.focus();
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
      UI.toast('Select text to highlight', 'info');
      return;
    }
    const range = sel.getRangeAt(0);

    // Ensure selection is inside our editor
    if (!ce.contains(range.commonAncestorContainer)) return;

    const mark = document.createElement('mark');
    try {
      range.surroundContents(mark);
    } catch (e) {
      // Partial overlap fallback
      const fragment = range.extractContents();
      mark.appendChild(fragment);
      range.insertNode(mark);
    }
    sel.removeAllRanges();
  }

  /* ── Remove highlight ──────────────────────────────────────── */
  function removeHighlight() {
    const ce = contentEl();
    ce.focus();
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) {
      // Remove ALL highlights in card
      ce.querySelectorAll('mark').forEach(m => {
        const parent = m.parentNode;
        while (m.firstChild) parent.insertBefore(m.firstChild, m);
        parent.removeChild(m);
      });
      UI.toast('All highlights removed', 'info');
      return;
    }
    const range  = sel.getRangeAt(0);
    let node = range.commonAncestorContainer;
    // Walk up to find a <mark>
    while (node && node !== ce) {
      if (node.nodeName === 'MARK') {
        const parent = node.parentNode;
        while (node.firstChild) parent.insertBefore(node.firstChild, node);
        parent.removeChild(node);
        sel.removeAllRanges();
        return;
      }
      node = node.parentNode;
    }
    UI.toast('No highlight found at selection', 'info');
  }

  /* ── Toggle flag ───────────────────────────────────────────── */
  function toggleFlag() {
    const btn = document.getElementById('btn-flag-card');
    btn.classList.toggle('active');
  }

  /* ── Bind toolbar ──────────────────────────────────────────── */
  function _bindToolbar() {
    // Generic format buttons
    document.querySelectorAll('#editor-toolbar button[data-cmd]').forEach(btn => {
      btn.addEventListener('click', () => execFormat(btn.dataset.cmd));
    });

    document.getElementById('btn-highlight').addEventListener('click', applyHighlight);
    document.getElementById('btn-remove-highlight').addEventListener('click', removeHighlight);
    document.getElementById('btn-save-card').addEventListener('click', save);
    document.getElementById('btn-delete-card').addEventListener('click', deleteCard);
    document.getElementById('btn-close-editor').addEventListener('click', close);
    document.getElementById('btn-flag-card').addEventListener('click', toggleFlag);

    // Auto-save on blur
    contentEl().addEventListener('blur', () => { /* user can explicitly save */ });

    // Ctrl/Cmd + S to save
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's' && !editorEl().classList.contains('hidden')) {
        e.preventDefault();
        save();
      }
    });
  }

  function init() {
    _bindToolbar();
    document.getElementById('btn-add-card').addEventListener('click', () => open(null));
    document.getElementById('btn-empty-add').addEventListener('click', () => open(null));
  }

  return { init, open, save, close, execFormat, applyHighlight, removeHighlight };
})();

/* ui.js – generic UI helpers: dark mode, sidebar, modal, toast */
window.UI = (() => {
  let _modalConfirmCb = null;
  let _toastTimer = null;

  /* ── Dark mode ───────────────────────────────────────────────── */
  function applyDarkMode(on) {
    document.body.setAttribute('data-theme', on ? 'dark' : '');
    document.getElementById('btn-dark-mode').textContent = on ? '☀️' : '🌙';
  }

  function toggleDarkMode() {
    const next = !Store.getSettings().darkMode;
    Store.setSetting('darkMode', next);
    applyDarkMode(next);
  }

  /* ── Sidebar ─────────────────────────────────────────────────── */
  function applySidebar(open) {
    const sb = document.getElementById('sidebar');
    if (open) { sb.classList.remove('collapsed'); }
    else       { sb.classList.add('collapsed'); }
  }

  function toggleSidebar() {
    const next = !Store.getSettings().sidebarOpen;
    Store.setSetting('sidebarOpen', next);
    applySidebar(next);
  }

  /* ── Toast ───────────────────────────────────────────────────── */
  function toast(message, type = 'info') {
    const el = document.getElementById('toast');
    el.textContent = message;
    el.className = type;           // 'success' | 'error' | 'info'
    el.style.opacity = '1';
    el.classList.remove('hidden');
    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(() => {
      el.style.opacity = '0';
      setTimeout(() => el.classList.add('hidden'), 300);
    }, 2500);
  }

  /* ── Modal ───────────────────────────────────────────────────── */
  function showModal({ title, body, confirmText = 'Confirm', confirmClass = 'btn-primary', onConfirm }) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = body;
    const confirmBtn = document.getElementById('modal-confirm');
    confirmBtn.textContent = confirmText;
    confirmBtn.className = confirmClass;
    _modalConfirmCb = onConfirm;
    document.getElementById('modal-overlay').classList.remove('hidden');
    // Focus confirm button
    setTimeout(() => confirmBtn.focus(), 50);
  }

  function hideModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    _modalConfirmCb = null;
  }

  function _bindModal() {
    document.getElementById('modal-confirm').addEventListener('click', () => {
      if (_modalConfirmCb) _modalConfirmCb();
      hideModal();
    });
    document.getElementById('modal-cancel').addEventListener('click', hideModal);
    document.getElementById('modal-overlay').addEventListener('click', e => {
      if (e.target === document.getElementById('modal-overlay')) hideModal();
    });
  }

  /* ── Category modal ──────────────────────────────────────────── */
  const EMOJIS = ['📌','🧬','⚡','🔬','💊','🦠','🦴','🫀','📊','🏥','🔪','🤰','👶','🧠','🚨','🏠','🛏️','🚑','💉','📈','⚖️','🫁','📋','🩺','💡','🩻','📝'];

  function showCategoryModal({ title, label = '', icon = '📌', onConfirm }) {
    const emojiRows = EMOJIS.map(e =>
      `<button type="button" class="emoji-btn${e === icon ? ' selected' : ''}" data-emoji="${e}">${e}</button>`
    ).join('');
    showModal({
      title,
      body: `
        <label style="display:block;margin-bottom:4px;font-size:13px;color:var(--text)">Category name</label>
        <input type="text" id="modal-cat-name" value="${label}" placeholder="e.g. Cardiology" />
        <label style="display:block;margin:12px 0 4px;font-size:13px;color:var(--text)">Icon</label>
        <div id="modal-cat-icon-display" style="font-size:28px;margin-bottom:6px">${icon}</div>
        <div class="emoji-row">${emojiRows}</div>`,
      confirmText: 'Save',
      onConfirm: () => {
        const name = document.getElementById('modal-cat-name').value.trim();
        const selectedIcon = document.querySelector('.emoji-btn.selected');
        if (!name) { toast('Category name required', 'error'); return; }
        onConfirm(name, selectedIcon ? selectedIcon.dataset.emoji : icon);
      }
    });
    // emoji picker clicks
    setTimeout(() => {
      document.querySelectorAll('.emoji-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          document.getElementById('modal-cat-icon-display').textContent = btn.dataset.emoji;
        });
      });
    }, 50);
  }

  /* ── Subcategory modal ───────────────────────────────────────── */
  function showSubcategoryModal({ title, label = '', onConfirm }) {
    showModal({
      title,
      body: `
        <label style="display:block;margin-bottom:4px;font-size:13px;color:var(--text)">Subcategory name</label>
        <input type="text" id="modal-subcat-name" value="${label}" placeholder="e.g. Dysrhythmias" />`,
      confirmText: 'Save',
      onConfirm: () => {
        const name = document.getElementById('modal-subcat-name').value.trim();
        if (!name) { toast('Subcategory name required', 'error'); return; }
        onConfirm(name);
      }
    });
    setTimeout(() => {
      const input = document.getElementById('modal-subcat-name');
      if (input) { input.focus(); input.select(); }
    }, 50);
  }

  /* ── Init ────────────────────────────────────────────────────── */
  function init() {
    _bindModal();
    const settings = Store.getSettings();
    applyDarkMode(settings.darkMode);
    applySidebar(settings.sidebarOpen !== false);
    document.getElementById('btn-dark-mode').addEventListener('click', toggleDarkMode);
    document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
  }

  return { init, toast, showModal, hideModal, showCategoryModal, showSubcategoryModal, applyDarkMode, applySidebar };
})();

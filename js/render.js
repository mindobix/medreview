/* render.js – DOM rendering for step tabs, sidebar, card list */
window.Render = (() => {

  function stepTabs() {
    const active = Store.getSettings().activeStep;
    document.querySelectorAll('.tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.step === active);
    });
  }

  function sidebar() {
    const stepKey = Store.getSettings().activeStep;
    const activeSlug = Store.getSettings().activeCategory;
    const cats = Store.getCategories(stepKey);
    const list = document.getElementById('category-list');
    list.innerHTML = '';
    cats.forEach(({ slug, label, icon, count }) => {
      const el = document.createElement('div');
      el.className = 'cat-item' + (slug === activeSlug ? ' active' : '');
      el.dataset.slug = slug;
      el.innerHTML = `<span class="cat-icon">${icon}</span><span class="cat-label">${label}</span><span class="cat-count">${count}</span>`;
      el.addEventListener('click', () => App.navigateTo(stepKey, slug));

      // right-click / long-press context: edit/delete category
      el.addEventListener('contextmenu', e => {
        e.preventDefault();
        _showCatContextMenu(e, stepKey, slug, label, icon);
      });

      list.appendChild(el);
    });
  }

  function _showCatContextMenu(e, stepKey, slug, label, icon) {
    // Remove any existing
    const old = document.getElementById('cat-context-menu');
    if (old) old.remove();

    const menu = document.createElement('div');
    menu.id = 'cat-context-menu';
    menu.style.cssText = `position:fixed;top:${e.clientY}px;left:${e.clientX}px;background:var(--bg-card);border:1px solid var(--border);border-radius:6px;box-shadow:var(--shadow);z-index:500;min-width:130px;overflow:hidden`;
    menu.innerHTML = `
      <div class="ctx-item" id="ctx-edit-cat" style="padding:9px 14px;cursor:pointer;font-size:13px">✏️ Rename</div>
      <div class="ctx-item" id="ctx-del-cat" style="padding:9px 14px;cursor:pointer;font-size:13px;color:var(--danger)">🗑 Delete</div>`;
    document.body.appendChild(menu);

    document.getElementById('ctx-edit-cat').addEventListener('click', () => {
      menu.remove();
      UI.showCategoryModal({
        title: 'Edit Category',
        label, icon,
        onConfirm: (newLabel, newIcon) => {
          Store.upsertCategory(stepKey, { slug, label: newLabel, icon: newIcon });
          Render.sidebar();
          UI.toast('Category updated', 'success');
        }
      });
    });

    document.getElementById('ctx-del-cat').addEventListener('click', () => {
      menu.remove();
      UI.showModal({
        title: 'Delete Category',
        body: `<p>Delete <b>${label}</b> and all its cards? This cannot be undone.</p>`,
        confirmText: 'Delete', confirmClass: 'btn-danger',
        onConfirm: () => {
          Store.deleteCategory(stepKey, slug);
          const settings = Store.getSettings();
          if (settings.activeCategory === slug) {
            const remaining = Store.getCategories(stepKey);
            Store.setSetting('activeCategory', remaining.length ? remaining[0].slug : null);
          }
          Render.sidebar();
          cardList();
          UI.toast('Category deleted', 'info');
        }
      });
    });

    const close = () => { menu.remove(); document.removeEventListener('click', close); };
    setTimeout(() => document.addEventListener('click', close), 10);
  }

  function cardList() {
    const settings = Store.getSettings();
    const stepKey = settings.activeStep;
    const catSlug = settings.activeCategory;

    // Hide search results, show normal view
    document.getElementById('search-results').classList.add('hidden');
    document.getElementById('card-editor').classList.add('hidden');

    // Breadcrumb
    const cats = Store.getCategories(stepKey);
    const activeCat = cats.find(c => c.slug === catSlug);
    const breadcrumb = document.getElementById('content-breadcrumb');
    if (activeCat) {
      breadcrumb.innerHTML = `${activeCat.icon} ${activeCat.label} <span>${activeCat.count} card${activeCat.count !== 1 ? 's' : ''}</span>`;
    } else {
      breadcrumb.textContent = 'Select a category';
    }

    // Toolbar buttons visibility
    const hasCategory = !!catSlug;
    document.getElementById('btn-add-card').classList.toggle('hidden', !hasCategory);
    document.getElementById('btn-slideshow').classList.toggle('hidden', !hasCategory);

    const cardListEl = document.getElementById('card-list');
    const emptyEl    = document.getElementById('empty-state');
    cardListEl.innerHTML = '';

    if (!catSlug) {
      emptyEl.classList.add('hidden');
      cardListEl.style.display = 'grid';
      return;
    }

    const cards = Store.getCards(stepKey, catSlug);
    if (cards.length === 0) {
      cardListEl.style.display = 'none';
      emptyEl.classList.remove('hidden');
      return;
    }

    cardListEl.style.display = 'grid';
    emptyEl.classList.add('hidden');
    cards.forEach(card => {
      const preview = _stripHtml(card.content).slice(0, 120);
      const el = document.createElement('div');
      el.className = 'card-tile';
      el.dataset.id = card.id;
      el.innerHTML = `
        ${card.flagged ? '<span class="card-flag">🚩</span>' : ''}
        <div class="card-tile-title">${_escHtml(card.title || 'Untitled')}</div>
        <div class="card-tile-preview">${_escHtml(preview)}${preview.length === 120 ? '…' : ''}</div>
        <div class="card-tile-footer"><span class="card-tile-date">${card.modified || ''}</span></div>`;
      el.addEventListener('click', () => Editor.open(card.id));
      cardListEl.appendChild(el);
    });
  }

  function updateCategoryCount(stepKey, catSlug) {
    const count = Store.getCards(stepKey, catSlug).length;
    // update badge in sidebar
    const item = document.querySelector(`.cat-item[data-slug="${catSlug}"] .cat-count`);
    if (item) item.textContent = count;
    // update breadcrumb
    const breadcrumb = document.getElementById('content-breadcrumb');
    const cats = Store.getCategories(stepKey);
    const cat = cats.find(c => c.slug === catSlug);
    if (cat && breadcrumb) {
      breadcrumb.innerHTML = `${cat.icon} ${cat.label} <span>${count} card${count !== 1 ? 's' : ''}</span>`;
    }
  }

  /* ── Helpers ─────────────────────────────────────────────────── */
  function _stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html || '';
    return tmp.textContent || '';
  }

  function _escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  return { stepTabs, sidebar, cardList, updateCategoryCount };
})();

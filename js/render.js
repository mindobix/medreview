/* render.js – DOM rendering for step tabs, sidebar, card list */
window.Render = (() => {

  function stepTabs() {
    const active = Store.getSettings().activeStep;
    document.querySelectorAll('.tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.step === active);
    });
  }

  /* ── Sidebar ─────────────────────────────────────────────────────── */
  function sidebar() {
    const stepKey     = Store.getSettings().activeStep;
    const activeSlug  = Store.getSettings().activeCategory;
    const activeSub   = Store.getSettings().activeSubcategory;
    const cats        = Store.getCategories(stepKey);
    const list        = document.getElementById('category-list');
    list.innerHTML    = '';

    cats.forEach(({ slug, label, icon, count, subcatCount }) => {
      const isActive    = slug === activeSlug;
      const isExpanded  = isActive; // auto-expand the active category

      // ── Category row ──
      const catEl = document.createElement('div');
      catEl.className = 'cat-item' + (isActive && !activeSub ? ' active' : '');
      catEl.dataset.slug = slug;

      const expandIcon = subcatCount > 0
        ? `<span class="cat-expand">${isExpanded ? '▾' : '▸'}</span>`
        : `<span class="cat-expand-placeholder"></span>`;

      catEl.innerHTML = `
        ${expandIcon}
        <span class="cat-icon">${icon}</span>
        <span class="cat-label">${label}</span>
        <span class="cat-count" title="${subcatCount} subcategor${subcatCount !== 1 ? 'ies' : 'y'}">${subcatCount}</span>`;

      // Click navigates to category (no subcat)
      catEl.addEventListener('click', e => {
        if (e.target.closest('.cat-expand')) {
          // Toggle expand/collapse without navigating
          _toggleSubcatList(slug, catEl);
          return;
        }
        App.navigateTo(stepKey, slug, null);
      });

      // Right-click context menu
      catEl.addEventListener('contextmenu', e => {
        e.preventDefault();
        _showCatContextMenu(e, stepKey, slug, label, icon);
      });

      list.appendChild(catEl);

      // ── Subcategory list ──
      if (subcatCount > 0) {
        const subList = document.createElement('div');
        subList.className = 'subcat-list' + (isExpanded ? '' : ' collapsed');
        subList.dataset.catSlug = slug;

        const subs = Store.getSubcategories(stepKey, slug);
        subs.forEach(({ slug: subSlug, label: subLabel, count: subCount }) => {
          const isSubActive = isActive && activeSub === subSlug;
          const subEl = document.createElement('div');
          subEl.className = 'subcat-item' + (isSubActive ? ' active' : '');
          subEl.dataset.slug = subSlug;
          subEl.innerHTML = `
            <span class="subcat-dot">•</span>
            <span class="subcat-label">${subLabel}</span>
            <span class="cat-count">${subCount}</span>`;

          subEl.addEventListener('click', () => App.navigateTo(stepKey, slug, subSlug));

          subEl.addEventListener('contextmenu', e => {
            e.preventDefault();
            _showSubcatContextMenu(e, stepKey, slug, subSlug, subLabel);
          });

          subList.appendChild(subEl);
        });

        // "Add subcategory" row
        const addSubEl = document.createElement('div');
        addSubEl.className = 'subcat-add';
        addSubEl.innerHTML = `<span class="subcat-dot">＋</span><span class="subcat-label">Add subcategory</span>`;
        addSubEl.addEventListener('click', () => _promptAddSubcategory(stepKey, slug));
        subList.appendChild(addSubEl);

        list.appendChild(subList);
      }
    });
  }

  function _toggleSubcatList(catSlug, catEl) {
    const subList = document.querySelector(`.subcat-list[data-cat-slug="${catSlug}"]`);
    if (!subList) return;
    const collapsed = subList.classList.toggle('collapsed');
    const expandEl  = catEl.querySelector('.cat-expand');
    if (expandEl) expandEl.textContent = collapsed ? '▸' : '▾';
  }

  /* ── Category context menu ──────────────────────────────────────── */
  function _showCatContextMenu(e, stepKey, slug, label, icon) {
    _closeContextMenu();
    const menu = document.createElement('div');
    menu.id = 'cat-context-menu';
    menu.style.cssText = `position:fixed;top:${e.clientY}px;left:${e.clientX}px;background:var(--bg-card);border:1px solid var(--border);border-radius:6px;box-shadow:var(--shadow);z-index:500;min-width:160px;overflow:hidden`;
    menu.innerHTML = `
      <div class="ctx-item" id="ctx-add-subcat"  style="padding:9px 14px;cursor:pointer;font-size:13px">＋ Add Subcategory</div>
      <div class="ctx-item" id="ctx-edit-cat"    style="padding:9px 14px;cursor:pointer;font-size:13px">✏️ Rename</div>
      <div class="ctx-item" id="ctx-del-cat"     style="padding:9px 14px;cursor:pointer;font-size:13px;color:var(--danger)">🗑 Delete</div>`;
    document.body.appendChild(menu);

    document.getElementById('ctx-add-subcat').addEventListener('click', () => {
      menu.remove();
      _promptAddSubcategory(stepKey, slug);
    });

    document.getElementById('ctx-edit-cat').addEventListener('click', () => {
      menu.remove();
      UI.showCategoryModal({
        title: 'Edit Category', label, icon,
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
            Store.setSetting('activeSubcategory', null);
          }
          Render.sidebar();
          cardList();
          UI.toast('Category deleted', 'info');
        }
      });
    });

    _bindContextMenuClose();
  }

  /* ── Subcategory context menu ───────────────────────────────────── */
  function _showSubcatContextMenu(e, stepKey, catSlug, subSlug, subLabel) {
    _closeContextMenu();
    const menu = document.createElement('div');
    menu.id = 'cat-context-menu';
    menu.style.cssText = `position:fixed;top:${e.clientY}px;left:${e.clientX}px;background:var(--bg-card);border:1px solid var(--border);border-radius:6px;box-shadow:var(--shadow);z-index:500;min-width:140px;overflow:hidden`;
    menu.innerHTML = `
      <div class="ctx-item" id="ctx-edit-sub" style="padding:9px 14px;cursor:pointer;font-size:13px">✏️ Rename</div>
      <div class="ctx-item" id="ctx-del-sub"  style="padding:9px 14px;cursor:pointer;font-size:13px;color:var(--danger)">🗑 Delete</div>`;
    document.body.appendChild(menu);

    document.getElementById('ctx-edit-sub').addEventListener('click', () => {
      menu.remove();
      UI.showSubcategoryModal({
        title: 'Edit Subcategory', label: subLabel,
        onConfirm: newLabel => {
          Store.upsertSubcategory(stepKey, catSlug, { slug: subSlug, label: newLabel });
          Render.sidebar();
          UI.toast('Subcategory updated', 'success');
        }
      });
    });

    document.getElementById('ctx-del-sub').addEventListener('click', () => {
      menu.remove();
      UI.showModal({
        title: 'Delete Subcategory',
        body: `<p>Delete <b>${subLabel}</b> and all its cards? This cannot be undone.</p>`,
        confirmText: 'Delete', confirmClass: 'btn-danger',
        onConfirm: () => {
          const settings = Store.getSettings();
          Store.deleteSubcategory(stepKey, catSlug, subSlug);
          if (settings.activeSubcategory === subSlug) {
            Store.setSetting('activeSubcategory', null);
          }
          Render.sidebar();
          cardList();
          UI.toast('Subcategory deleted', 'info');
        }
      });
    });

    _bindContextMenuClose();
  }

  function _promptAddSubcategory(stepKey, catSlug) {
    UI.showSubcategoryModal({
      title: 'Add Subcategory',
      onConfirm: label => {
        const subSlug = Store.upsertSubcategory(stepKey, catSlug, { label });
        App.navigateTo(stepKey, catSlug, subSlug);
        UI.toast(`Subcategory "${label}" created`, 'success');
      }
    });
  }

  function _closeContextMenu() {
    const old = document.getElementById('cat-context-menu');
    if (old) old.remove();
  }

  function _bindContextMenuClose() {
    const close = () => { _closeContextMenu(); document.removeEventListener('click', close); };
    setTimeout(() => document.addEventListener('click', close), 10);
  }

  /* ── Subcategory summary panel ──────────────────────────────────── */
  function summaryPanel() {
    const settings   = Store.getSettings();
    const stepKey    = settings.activeStep;
    const catSlug    = settings.activeCategory;
    const subcatSlug = settings.activeSubcategory;
    const panel      = document.getElementById('subcat-summary-panel');

    if (!subcatSlug) { panel.classList.add('hidden'); return; }

    const summary = Store.getSubcategorySummary(stepKey, catSlug, subcatSlug);
    document.getElementById('subcat-summary-view').textContent = summary || '(No summary yet — click Edit to add one.)';
    document.getElementById('subcat-summary-view').classList.remove('hidden');
    document.getElementById('subcat-summary-edit').classList.add('hidden');
    document.getElementById('btn-edit-summary').classList.remove('hidden');
    panel.classList.remove('hidden');
  }

  /* ── Card list ──────────────────────────────────────────────────── */
  function cardList() {
    const settings   = Store.getSettings();
    const stepKey    = settings.activeStep;
    const catSlug    = settings.activeCategory;
    const subcatSlug = settings.activeSubcategory;

    document.getElementById('search-results').classList.add('hidden');
    document.getElementById('card-editor').classList.add('hidden');
    summaryPanel();

    // Breadcrumb
    const cats      = Store.getCategories(stepKey);
    const activeCat = cats.find(c => c.slug === catSlug);
    const breadcrumb = document.getElementById('content-breadcrumb');

    if (activeCat) {
      if (subcatSlug) {
        const subs      = Store.getSubcategories(stepKey, catSlug);
        const activeSub = subs.find(s => s.slug === subcatSlug);
        const subLabel  = activeSub ? activeSub.label : subcatSlug;
        const subCount  = activeSub ? activeSub.count : 0;
        breadcrumb.innerHTML = `
          <span class="breadcrumb-cat" title="${activeCat.label}">${activeCat.icon} ${activeCat.label}</span>
          <span class="breadcrumb-sep">›</span>
          <span class="breadcrumb-sub">${subLabel}</span>
          <span>${subCount} card${subCount !== 1 ? 's' : ''}</span>`;
      } else {
        const sc = activeCat.subcatCount;
        breadcrumb.innerHTML = `${activeCat.icon} ${activeCat.label} <span>${sc} subcategor${sc !== 1 ? 'ies' : 'y'}</span>`;
      }
    } else {
      breadcrumb.textContent = 'Select a category';
    }

    // Add Card & Slideshow only available inside a subcategory
    const hasSubcat = !!subcatSlug;
    document.getElementById('btn-add-card').classList.toggle('hidden', !hasSubcat);
    document.getElementById('btn-slideshow').classList.toggle('hidden', !hasSubcat);

    const cardListEl = document.getElementById('card-list');
    const emptyEl    = document.getElementById('empty-state');
    cardListEl.innerHTML = '';

    // Category selected but no subcategory — show subcategory overview with summaries
    if (catSlug && !subcatSlug) {
      emptyEl.classList.add('hidden');
      const subs = Store.getSubcategories(stepKey, catSlug);
      if (subs.length === 0) {
        cardListEl.style.display = 'none';
        emptyEl.classList.remove('hidden');
        document.querySelector('#empty-state .empty-icon').textContent = '📂';
        document.querySelector('#empty-state p').textContent = 'No subcategories yet. Right-click the category to add one.';
        document.getElementById('btn-empty-add').classList.add('hidden');
        return;
      }
      cardListEl.style.display = 'grid';
      subs.forEach(({ slug: subSlug, label: subLabel, count: subCount, summary }) => {
        const el = document.createElement('div');
        el.className = 'card-tile subcat-overview-tile';
        el.dataset.slug = subSlug;
        const preview = summary ? summary.slice(0, 160) + (summary.length > 160 ? '…' : '') : '';
        el.innerHTML = `
          <div class="card-tile-title">${_escHtml(subLabel)}</div>
          ${preview ? `<div class="card-tile-preview subcat-summary-preview">${_escHtml(preview)}</div>` : ''}
          <div class="card-tile-footer">
            <span class="card-tile-date">${subCount} card${subCount !== 1 ? 's' : ''}</span>
          </div>`;
        el.addEventListener('click', () => App.navigateTo(stepKey, catSlug, subSlug));
        cardListEl.appendChild(el);
      });
      return;
    }

    if (!catSlug) {
      emptyEl.classList.add('hidden');
      cardListEl.style.display = 'grid';
      return;
    }

    const cards = Store.getCards(stepKey, catSlug, subcatSlug);
    if (cards.length === 0) {
      cardListEl.style.display = 'none';
      emptyEl.classList.remove('hidden');
      document.querySelector('#empty-state .empty-icon').textContent = '📋';
      document.querySelector('#empty-state p').textContent = 'No cards in this subcategory yet.';
      document.getElementById('btn-empty-add').classList.remove('hidden');
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

  /* ── Update count badge ─────────────────────────────────────────── */
  function updateCategoryCount(stepKey, catSlug, subcatSlug) {
    // Update subcategory count badge
    if (subcatSlug) {
      const subCount = Store.getCards(stepKey, catSlug, subcatSlug).length;
      const subEl = document.querySelector(`.subcat-item[data-slug="${subcatSlug}"] .cat-count`);
      if (subEl) subEl.textContent = subCount;
    }
    // Category badge shows subcategory count — no update needed (it's static)
    const cats = Store.getCategories(stepKey);
    const cat  = cats.find(c => c.slug === catSlug);
    // Refresh breadcrumb
    const settings = Store.getSettings();
    if (settings.activeCategory === catSlug) {
      const breadcrumb = document.getElementById('content-breadcrumb');
      if (subcatSlug && settings.activeSubcategory === subcatSlug) {
        const subs = Store.getSubcategories(stepKey, catSlug);
        const sub  = subs.find(s => s.slug === subcatSlug);
        if (sub && cat && breadcrumb) {
          breadcrumb.innerHTML = `
            <span class="breadcrumb-cat" title="${cat.label}">${cat.icon} ${cat.label}</span>
            <span class="breadcrumb-sep">›</span>
            <span class="breadcrumb-sub">${sub.label}</span>
            <span>${sub.count} card${sub.count !== 1 ? 's' : ''}</span>`;
        }
      } else if (!subcatSlug && !settings.activeSubcategory && cat && breadcrumb) {
        breadcrumb.innerHTML = `${cat.icon} ${cat.label} <span>${cat.count} card${cat.count !== 1 ? 's' : ''}</span>`;
      }
    }
  }

  /* ── Helpers ─────────────────────────────────────────────────────── */
  function _stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html || '';
    return tmp.textContent || '';
  }

  function _escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  return { stepTabs, sidebar, cardList, summaryPanel, updateCategoryCount };
})();

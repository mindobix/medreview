/* app.js – entry point, wires all modules together */
window.App = (() => {
  let _currentView = 'dashboard';

  /* ── View switching ─────────────────────────────────────────────── */
  function switchView(view) {
    _currentView = view;

    // Toggle panels
    document.querySelectorAll('.view-panel').forEach(el => {
      el.classList.remove('active-view');
      el.classList.add('hidden-view');
    });
    const target = document.getElementById('view-' + view);
    if (target) {
      target.classList.remove('hidden-view');
      target.classList.add('active-view');
    }

    // Toggle header tabs
    document.querySelectorAll('.view-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === view);
    });

    // Toggle search bar visibility (only in study view)
    const searchWrap = document.getElementById('search-wrap-header');
    if (searchWrap) searchWrap.style.display = view === 'study' ? '' : 'none';

    // Render the relevant view
    if (view === 'dashboard') {
      Dashboard.render();
    } else if (view === 'study') {
      Render.sidebar();
      Render.cardList();
    } else if (view === 'practice') {
      Practice.render();
    } else if (view === 'scores') {
      Tracker.render();
    } else if (view === 'schedule') {
      Schedule.render();
    }
  }

  /* ── Navigate within study view ────────────────────────────────── */
  function navigateTo(stepKey, catSlug, subcatSlug) {
    Store.setSetting('activeStep', stepKey);
    Store.setSetting('activeCategory', catSlug);
    Store.setSetting('activeSubcategory', subcatSlug || null);

    // Sync step sub-tabs in sidebar
    document.querySelectorAll('.step-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.step === stepKey);
    });

    Render.sidebar();
    Render.cardList();
  }

  /* ── Global step switching ──────────────────────────────────────── */
  function switchGlobalStep(stepKey) {
    Store.setSetting('globalStep', stepKey);

    // Update header pill buttons
    document.querySelectorAll('.gss-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.gstep === stepKey);
    });

    // Update logo step label
    const logoStep = document.querySelector('.logo-step');
    const labels = { step1: 'Step 1', step2: 'Step 2 CK', step3: 'Step 3' };
    if (logoStep) logoStep.textContent = labels[stepKey] || 'Step 1';

    // Re-render whatever view is active
    if (_currentView === 'dashboard') Dashboard.render();
    else if (_currentView === 'study') { Render.sidebar(); Render.cardList(); }
    else if (_currentView === 'schedule') Schedule.render();
  }

  function _bindGlobalStepSelector() {
    document.querySelectorAll('.gss-btn').forEach(btn => {
      btn.addEventListener('click', () => switchGlobalStep(btn.dataset.gstep));
    });
  }

  /* ── View tab clicks ────────────────────────────────────────────── */
  function _bindViewTabs() {
    document.querySelectorAll('.view-tab').forEach(btn => {
      btn.addEventListener('click', () => switchView(btn.dataset.view));
    });
  }

  /* ── Sidebar step sub-tabs ─────────────────────────────────────── */
  function _bindSidebarStepTabs() {
    document.querySelectorAll('.step-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const stepKey = btn.dataset.step;
        const cats = Store.getCategories(stepKey);
        const firstCat = cats.length ? cats[0].slug : null;
        navigateTo(stepKey, firstCat, null);
      });
    });
  }

  /* ── Add category button ────────────────────────────────────────── */
  function _bindAddCategory() {
    document.getElementById('btn-add-category').addEventListener('click', () => {
      const stepKey = Store.getSettings().activeStep;
      UI.showCategoryModal({
        title: 'Add Category',
        onConfirm: (label, icon) => {
          const slug = Store.upsertCategory(stepKey, { label, icon });
          navigateTo(stepKey, slug, null);
          UI.toast(`Category "${label}" created`, 'success');
        }
      });
    });
  }

  /* ── Summary panel edit/save/cancel ────────────────────────────── */
  function _bindSummaryPanel() {
    document.getElementById('btn-edit-summary').addEventListener('click', () => {
      const s = Store.getSettings();
      const current = Store.getSubcategorySummary(s.activeStep, s.activeCategory, s.activeSubcategory);
      document.getElementById('subcat-summary-textarea').value = current;
      document.getElementById('subcat-summary-view').classList.add('hidden');
      document.getElementById('subcat-summary-edit').classList.remove('hidden');
      document.getElementById('btn-edit-summary').classList.add('hidden');
      document.getElementById('subcat-summary-textarea').focus();
    });

    document.getElementById('btn-save-summary').addEventListener('click', () => {
      const s = Store.getSettings();
      const val = document.getElementById('subcat-summary-textarea').value.trim();
      Store.updateSubcategorySummary(s.activeStep, s.activeCategory, s.activeSubcategory, val);
      Render.summaryPanel();
      UI.toast('Summary saved', 'success');
    });

    document.getElementById('btn-cancel-summary').addEventListener('click', () => {
      Render.summaryPanel();
    });
  }

  /* ── Init ───────────────────────────────────────────────────────── */
  function init() {
    Store.load();
    UI.init();
    Editor.init();
    Slideshow.init();
    Search.init();
    IO.init();

    _bindViewTabs();
    _bindGlobalStepSelector();
    _bindSidebarStepTabs();
    _bindAddCategory();
    _bindSummaryPanel();

    // Validate saved navigation state
    const settings = Store.getSettings();
    let activeStep = settings.activeStep || 'step1';
    let activeCat  = settings.activeCategory;
    let activeSub  = settings.activeSubcategory;

    const cats = Store.getCategories(activeStep);
    if (activeCat && !cats.find(c => c.slug === activeCat)) {
      activeCat = cats.length ? cats[0].slug : null;
      activeSub = null;
      Store.setSetting('activeCategory', activeCat);
      Store.setSetting('activeSubcategory', null);
    } else if (!activeCat && cats.length) {
      activeCat = cats[0].slug;
      Store.setSetting('activeCategory', activeCat);
    }

    if (activeCat && activeSub) {
      const subs = Store.getSubcategories(activeStep, activeCat);
      if (!subs.find(s => s.slug === activeSub)) {
        activeSub = null;
        Store.setSetting('activeSubcategory', null);
      }
    }

    // Sync step sub-tabs
    document.querySelectorAll('.step-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.step === activeStep);
    });

    // Sync global step selector
    const globalStep = settings.globalStep || 'step1';
    document.querySelectorAll('.gss-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.gstep === globalStep);
    });
    const logoStep = document.querySelector('.logo-step');
    const stepLabels = { step1: 'Step 1', step2: 'Step 2 CK', step3: 'Step 3' };
    if (logoStep) logoStep.textContent = stepLabels[globalStep] || 'Step 1';

    // Start on dashboard
    switchView('dashboard');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { navigateTo, switchView, switchGlobalStep };
})();

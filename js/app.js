/* app.js – entry point, wires everything together */
window.App = (() => {

  /* ── Navigate to a step + category + optional subcategory ────── */
  function navigateTo(stepKey, catSlug, subcatSlug) {
    Store.setSetting('activeStep', stepKey);
    Store.setSetting('activeCategory', catSlug);
    Store.setSetting('activeSubcategory', subcatSlug || null);
    Render.stepTabs();
    Render.sidebar();
    Render.cardList();
  }

  /* ── Step tab clicks ────────────────────────────────────────── */
  function _bindStepTabs() {
    document.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const stepKey = btn.dataset.step;
        const cats    = Store.getCategories(stepKey);
        const firstCat = cats.length ? cats[0].slug : null;
        navigateTo(stepKey, firstCat, null);
      });
    });
  }

  /* ── Add category button ────────────────────────────────────── */
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

  /* ── Summary panel edit/save/cancel ────────────────────────── */
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

  /* ── Init ───────────────────────────────────────────────────── */
  function init() {
    Store.load();
    UI.init();
    Editor.init();
    Slideshow.init();
    Search.init();
    IO.init();

    _bindStepTabs();
    _bindAddCategory();
    _bindSummaryPanel();

    const settings = Store.getSettings();
    let activeStep = settings.activeStep || 'step1';
    let activeCat  = settings.activeCategory;
    let activeSub  = settings.activeSubcategory;

    // Validate saved category still exists
    const cats = Store.getCategories(activeStep);
    if (activeCat && !cats.find(c => c.slug === activeCat)) {
      activeCat = cats.length ? cats[0].slug : null;
      activeSub = null;
      Store.setSetting('activeCategory', activeCat);
      Store.setSetting('activeSubcategory', null);
    } else if (!activeCat && cats.length) {
      activeCat = cats[0].slug;
      activeSub = null;
      Store.setSetting('activeCategory', activeCat);
    }

    // Validate saved subcategory still exists
    if (activeCat && activeSub) {
      const subs = Store.getSubcategories(activeStep, activeCat);
      if (!subs.find(s => s.slug === activeSub)) {
        activeSub = null;
        Store.setSetting('activeSubcategory', null);
      }
    }

    Render.stepTabs();
    Render.sidebar();
    Render.cardList();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { navigateTo };
})();

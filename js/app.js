/* app.js – entry point, wires everything together */
window.App = (() => {

  /* ── Navigate to a step + category ─────────────────────────── */
  function navigateTo(stepKey, catSlug) {
    Store.setSetting('activeStep', stepKey);
    Store.setSetting('activeCategory', catSlug);
    Render.stepTabs();
    Render.sidebar();
    Render.cardList();
  }

  /* ── Step tab clicks ────────────────────────────────────────── */
  function _bindStepTabs() {
    document.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const stepKey = btn.dataset.step;
        const cats = Store.getCategories(stepKey);
        // Pick first category of new step, or null
        const firstCat = cats.length ? cats[0].slug : null;
        navigateTo(stepKey, firstCat);
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
          navigateTo(stepKey, slug);
          UI.toast(`Category "${label}" created`, 'success');
        }
      });
    });
  }

  /* ── Init ───────────────────────────────────────────────────── */
  function init() {
    // 1. Load state
    Store.load();

    // 2. Init UI helpers (dark mode, sidebar, modal bindings)
    UI.init();

    // 3. Init feature modules
    Editor.init();
    Slideshow.init();
    Search.init();
    IO.init();

    // 4. Wire nav
    _bindStepTabs();
    _bindAddCategory();

    // 5. Initial render
    const settings = Store.getSettings();
    let activeStep = settings.activeStep || 'step1';
    let activeCat  = settings.activeCategory;

    // If saved category doesn't exist in this step, fall back to first
    const cats = Store.getCategories(activeStep);
    if (activeCat && !cats.find(c => c.slug === activeCat)) {
      activeCat = cats.length ? cats[0].slug : null;
      Store.setSetting('activeCategory', activeCat);
    } else if (!activeCat && cats.length) {
      activeCat = cats[0].slug;
      Store.setSetting('activeCategory', activeCat);
    }

    Render.stepTabs();
    Render.sidebar();
    Render.cardList();
  }

  // Boot when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { navigateTo };
})();

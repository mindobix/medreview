/* store.js – single source of truth; all state read/write */
window.Store = (() => {
  const LS_KEY = 'medreview_data';
  let state = null;

  function _deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  /* ── Convert legacy subcategory arrays to object format ────────── */
  function _migrateLegacySubcategories(step) {
    Object.values(step.categories).forEach(cat => {
      if (Array.isArray(cat.subcategories)) {
        const obj = {};
        cat.subcategories.forEach(label => {
          const slug = label.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
          obj[slug] = { label, cards: {} };
        });
        cat.subcategories = obj;
      }
      if (!cat.subcategories) cat.subcategories = {};
      // Ensure each subcategory has a cards object
      Object.values(cat.subcategories).forEach(sub => {
        if (!sub.cards) sub.cards = {};
      });
      if (!cat.cards) cat.cards = {};
    });
  }

  function load() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.version && parsed.steps) {
          state = parsed;
          state.settings = Object.assign(
            { darkMode: false, sidebarOpen: true, activeStep: 'step1', activeCategory: null, activeSubcategory: null },
            state.settings || {}
          );
          // Migrate any legacy subcategory arrays
          Object.values(state.steps).forEach(_migrateLegacySubcategories);
          // Backfill summaries from DEFAULT_DATA for any subcategory that lacks one
          if (window.DEFAULT_DATA) {
            Object.entries(window.DEFAULT_DATA.steps || {}).forEach(([stepKey, defaultStep]) => {
              if (!state.steps[stepKey]) return;
              Object.entries(defaultStep.categories || {}).forEach(([catSlug, defaultCat]) => {
                if (!state.steps[stepKey].categories[catSlug]) return;
                Object.entries(defaultCat.subcategories || {}).forEach(([subSlug, defaultSub]) => {
                  const sub = state.steps[stepKey].categories[catSlug].subcategories[subSlug];
                  if (sub && !sub.summary && defaultSub.summary) {
                    sub.summary = defaultSub.summary;
                  }
                });
              });
            });
            save();
          }
          return;
        }
      }
    } catch (e) { /* ignore */ }
    // First run – seed with default data
    state = _deepClone(window.DEFAULT_DATA);
    state.settings = { darkMode: false, sidebarOpen: true, activeStep: 'step1', activeCategory: null, activeSubcategory: null };
    const now = new Date().toISOString().slice(0, 10);
    Object.values(state.steps).forEach(step => {
      _migrateLegacySubcategories(step);
      Object.values(step.categories).forEach(cat => {
        Object.values(cat.cards).forEach(card => {
          card.created = card.created || now;
          card.modified = card.modified || now;
        });
        Object.values(cat.subcategories || {}).forEach(sub => {
          Object.values(sub.cards).forEach(card => {
            card.created = card.created || now;
            card.modified = card.modified || now;
          });
        });
      });
    });
    save();
  }

  function save() {
    state.lastModified = new Date().toISOString();
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  }

  function getSettings() { return state.settings; }

  function setSetting(key, value) {
    state.settings[key] = value;
    save();
  }

  function getStepMeta() {
    return Object.entries(state.steps).map(([key, s]) => ({ key, label: s.label }));
  }

  /* ── Category helpers ───────────────────────────────────────────── */
  function getCategories(stepKey) {
    const step = state.steps[stepKey];
    if (!step) return [];
    return Object.entries(step.categories).map(([slug, cat]) => {
      const subcatCount = Object.keys(cat.subcategories || {}).length;
      // total cards = category-level + all subcategory cards
      const directCards = Object.keys(cat.cards || {}).length;
      const subCards = Object.values(cat.subcategories || {}).reduce((sum, s) => sum + Object.keys(s.cards || {}).length, 0);
      return {
        slug,
        label: cat.label,
        icon: cat.icon,
        count: directCards + subCards,
        subcatCount
      };
    });
  }

  function upsertCategory(stepKey, catData) {
    const slug = catData.slug || catData.label.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
    const cats = state.steps[stepKey].categories;
    if (cats[slug]) {
      cats[slug].label = catData.label;
      cats[slug].icon  = catData.icon || cats[slug].icon;
    } else {
      cats[slug] = { label: catData.label, icon: catData.icon || '📌', subcategories: {}, cards: {} };
    }
    save();
    return slug;
  }

  function deleteCategory(stepKey, catSlug) {
    try {
      delete state.steps[stepKey].categories[catSlug];
      save();
    } catch (e) {}
  }

  /* ── Subcategory helpers ────────────────────────────────────────── */
  function getSubcategories(stepKey, catSlug) {
    try {
      const subs = state.steps[stepKey].categories[catSlug].subcategories || {};
      return Object.entries(subs).map(([slug, sub]) => ({
        slug,
        label: sub.label,
        count: Object.keys(sub.cards || {}).length,
        summary: sub.summary || ''
      }));
    } catch (e) { return []; }
  }

  function upsertSubcategory(stepKey, catSlug, subcatData) {
    const slug = subcatData.slug || subcatData.label.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
    const cat = state.steps[stepKey].categories[catSlug];
    if (!cat.subcategories) cat.subcategories = {};
    if (cat.subcategories[slug]) {
      cat.subcategories[slug].label = subcatData.label;
    } else {
      cat.subcategories[slug] = { label: subcatData.label, cards: {} };
    }
    save();
    return slug;
  }

  function deleteSubcategory(stepKey, catSlug, subcatSlug) {
    try {
      delete state.steps[stepKey].categories[catSlug].subcategories[subcatSlug];
      save();
    } catch (e) {}
  }

  function getSubcategorySummary(stepKey, catSlug, subcatSlug) {
    try {
      return state.steps[stepKey].categories[catSlug].subcategories[subcatSlug].summary || '';
    } catch (e) { return ''; }
  }

  function updateSubcategorySummary(stepKey, catSlug, subcatSlug, summary) {
    try {
      state.steps[stepKey].categories[catSlug].subcategories[subcatSlug].summary = summary;
      save();
    } catch (e) {}
  }

  /* ── Card helpers (subcatSlug optional – falls back to category cards) */
  function _cardsRef(stepKey, catSlug, subcatSlug) {
    const cat = state.steps[stepKey].categories[catSlug];
    if (subcatSlug) {
      if (!cat.subcategories[subcatSlug]) return null;
      return cat.subcategories[subcatSlug].cards;
    }
    return cat.cards;
  }

  function getCards(stepKey, catSlug, subcatSlug) {
    try {
      const ref = _cardsRef(stepKey, catSlug, subcatSlug);
      return ref ? Object.values(ref) : [];
    } catch (e) { return []; }
  }

  function getCard(stepKey, catSlug, id, subcatSlug) {
    try {
      const ref = _cardsRef(stepKey, catSlug, subcatSlug);
      return (ref && ref[id]) || null;
    } catch (e) { return null; }
  }

  function upsertCard(stepKey, catSlug, cardData, subcatSlug) {
    const now = new Date().toISOString().slice(0, 10);
    const cards = _cardsRef(stepKey, catSlug, subcatSlug);
    if (!cards) return;
    if (cardData.id && cards[cardData.id]) {
      cards[cardData.id] = Object.assign(cards[cardData.id], cardData, { modified: now });
    } else {
      const id = cardData.id || crypto.randomUUID();
      cards[id] = Object.assign({ id, flagged: false, created: now, modified: now }, cardData, { id });
    }
    save();
  }

  function deleteCard(stepKey, catSlug, id, subcatSlug) {
    try {
      const ref = _cardsRef(stepKey, catSlug, subcatSlug);
      if (ref) { delete ref[id]; save(); }
    } catch (e) {}
  }

  function toggleFlag(stepKey, catSlug, id, subcatSlug) {
    const card = getCard(stepKey, catSlug, id, subcatSlug);
    if (!card) return;
    card.flagged = !card.flagged;
    save();
    return card.flagged;
  }

  /* ── Search across everything ───────────────────────────────────── */
  function getAllCards() {
    const results = [];
    Object.entries(state.steps).forEach(([stepKey, step]) => {
      Object.entries(step.categories).forEach(([catSlug, cat]) => {
        // category-level cards
        Object.values(cat.cards || {}).forEach(card => {
          results.push({ stepKey, stepLabel: step.label, catSlug, catLabel: cat.label, subcatSlug: null, subcatLabel: null, card });
        });
        // subcategory cards
        Object.entries(cat.subcategories || {}).forEach(([subcatSlug, sub]) => {
          Object.values(sub.cards || {}).forEach(card => {
            results.push({ stepKey, stepLabel: step.label, catSlug, catLabel: cat.label, subcatSlug, subcatLabel: sub.label, card });
          });
        });
      });
    });
    return results;
  }

  function exportJSON() {
    return JSON.stringify(state, null, 2);
  }

  function importJSON(jsonString) {
    const parsed = JSON.parse(jsonString);
    if (!parsed.version || !parsed.steps) throw new Error('Invalid backup file format.');
    state = parsed;
    state.settings = Object.assign(
      { darkMode: false, sidebarOpen: true, activeStep: 'step1', activeCategory: null, activeSubcategory: null },
      state.settings || {}
    );
    Object.values(state.steps).forEach(_migrateLegacySubcategories);
    save();
  }

  return {
    load, save, getSettings, setSetting, getStepMeta,
    getCategories, upsertCategory, deleteCategory,
    getSubcategories, upsertSubcategory, deleteSubcategory,
    getSubcategorySummary, updateSubcategorySummary,
    getCards, getCard, upsertCard, deleteCard, toggleFlag,
    exportJSON, importJSON, getAllCards
  };
})();

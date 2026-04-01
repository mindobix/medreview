/* store.js – single source of truth; all state read/write */
window.Store = (() => {
  const LS_KEY = 'medreview_data';
  let state = null;

  function _deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function load() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.version && parsed.steps) {
          state = parsed;
          // ensure settings defaults
          state.settings = Object.assign(
            { darkMode: false, sidebarOpen: true, activeStep: 'step1', activeCategory: null },
            state.settings || {}
          );
          return;
        }
      }
    } catch (e) { /* ignore */ }
    // First run – seed with default data
    state = _deepClone(window.DEFAULT_DATA);
    state.settings = { darkMode: false, sidebarOpen: true, activeStep: 'step1', activeCategory: null };
    // stamp created/modified dates
    const now = new Date().toISOString().slice(0, 10);
    Object.values(state.steps).forEach(step => {
      Object.values(step.categories).forEach(cat => {
        Object.values(cat.cards).forEach(card => {
          card.created = card.created || now;
          card.modified = card.modified || now;
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

  function getCategories(stepKey) {
    const step = state.steps[stepKey];
    if (!step) return [];
    return Object.entries(step.categories).map(([slug, cat]) => ({
      slug,
      label: cat.label,
      icon: cat.icon,
      count: Object.keys(cat.cards || {}).length
    }));
  }

  function getCards(stepKey, catSlug) {
    try {
      return Object.values(state.steps[stepKey].categories[catSlug].cards);
    } catch (e) { return []; }
  }

  function getCard(stepKey, catSlug, id) {
    try {
      return state.steps[stepKey].categories[catSlug].cards[id] || null;
    } catch (e) { return null; }
  }

  function upsertCard(stepKey, catSlug, cardData) {
    const now = new Date().toISOString().slice(0, 10);
    const cards = state.steps[stepKey].categories[catSlug].cards;
    if (cardData.id && cards[cardData.id]) {
      // update
      cards[cardData.id] = Object.assign(cards[cardData.id], cardData, { modified: now });
    } else {
      // create
      const id = cardData.id || crypto.randomUUID();
      cards[id] = Object.assign({ id, flagged: false, created: now, modified: now }, cardData, { id });
    }
    save();
  }

  function deleteCard(stepKey, catSlug, id) {
    try {
      delete state.steps[stepKey].categories[catSlug].cards[id];
      save();
    } catch (e) {}
  }

  function upsertCategory(stepKey, catData) {
    const slug = catData.slug || catData.label.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
    const cats = state.steps[stepKey].categories;
    if (cats[slug]) {
      cats[slug].label = catData.label;
      cats[slug].icon  = catData.icon || cats[slug].icon;
    } else {
      cats[slug] = { label: catData.label, icon: catData.icon || '📌', cards: {} };
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

  function exportJSON() {
    return JSON.stringify(state, null, 2);
  }

  function importJSON(jsonString) {
    const parsed = JSON.parse(jsonString); // let caller catch errors
    if (!parsed.version || !parsed.steps) throw new Error('Invalid backup file format.');
    state = parsed;
    state.settings = Object.assign(
      { darkMode: false, sidebarOpen: true, activeStep: 'step1', activeCategory: null },
      state.settings || {}
    );
    save();
  }

  function getAllCards() {
    const results = [];
    Object.entries(state.steps).forEach(([stepKey, step]) => {
      Object.entries(step.categories).forEach(([catSlug, cat]) => {
        Object.values(cat.cards).forEach(card => {
          results.push({ stepKey, stepLabel: step.label, catSlug, catLabel: cat.label, card });
        });
      });
    });
    return results;
  }

  function toggleFlag(stepKey, catSlug, id) {
    const card = getCard(stepKey, catSlug, id);
    if (!card) return;
    card.flagged = !card.flagged;
    save();
    return card.flagged;
  }

  return { load, save, getSettings, setSetting, getStepMeta, getCategories, getCards, getCard, upsertCard, deleteCard, upsertCategory, deleteCategory, exportJSON, importJSON, getAllCards, toggleFlag };
})();

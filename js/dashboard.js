/* dashboard.js – Step-aware Command Center dashboard view */
window.Dashboard = (() => {

  const SYSTEMS_BY_STEP = {
    step1: [
      { slug:'endo_repro',       label:'Reproductive & Endocrine',         pct:'12–16%', weight:14, icon:'🔬', color:'#e74c3c' },
      { slug:'resp_renal',       label:'Respiratory & Renal',              pct:'11–15%', weight:13, icon:'🫁', color:'#e67e22' },
      { slug:'neuro_behav',      label:'Behavioral Health & Nervous',      pct:'10–14%', weight:12, icon:'🧠', color:'#f39c12' },
      { slug:'blood_immune',     label:'Blood & Lymphoreticular/Immune',   pct:'9–13%',  weight:11, icon:'🩸', color:'#8e44ad' },
      { slug:'msk_skin',         label:'Musculoskeletal & Skin',           pct:'8–12%',  weight:10, icon:'🦴', color:'#2980b9' },
      { slug:'multisystem',      label:'Multisystem Processes',            pct:'8–12%',  weight:10, icon:'⚙️', color:'#16a085' },
      { slug:'cardiovascular',   label:'Cardiovascular',                   pct:'7–11%',  weight:9,  icon:'🫀', color:'#c0392b' },
      { slug:'gastrointestinal', label:'Gastrointestinal',                 pct:'6–10%',  weight:8,  icon:'🍽️', color:'#27ae60' },
      { slug:'human_dev',        label:'Human Development',                pct:'1–3%',   weight:2,  icon:'👶', color:'#7f8c8d' }
    ],
    step2: [
      { slug:'internal_medicine', label:'Internal Medicine',         pct:'~30%', weight:30, icon:'🏥', color:'#2980b9' },
      { slug:'surgery',           label:'Surgery',                   pct:'~20%', weight:20, icon:'🔪', color:'#e74c3c' },
      { slug:'ob_gyn',            label:'Obstetrics & Gynecology',   pct:'~18%', weight:18, icon:'🤰', color:'#e91e8c' },
      { slug:'pediatrics',        label:'Pediatrics',                pct:'~17%', weight:17, icon:'👶', color:'#f39c12' },
      { slug:'psychiatry',        label:'Psychiatry',                pct:'~15%', weight:15, icon:'🧠', color:'#8e44ad' }
    ],
    step3: [
      { slug:'ambulatory',  label:'Ambulatory/Outpatient Care',  pct:'~40%', weight:40, icon:'🏃', color:'#27ae60' },
      { slug:'emergency',   label:'Emergency Medicine & Acute',  pct:'~30%', weight:30, icon:'🚨', color:'#e74c3c' },
      { slug:'biostatistics',label:'Biostatistics & Epidemiology',pct:'~15%', weight:15, icon:'📈', color:'#2980b9' },
      { slug:'patient_mgmt',label:'Patient Management & Ethics', pct:'~15%', weight:15, icon:'⚖️', color:'#16a085' }
    ]
  };

  // Backward-compatible alias
  const SYSTEMS = SYSTEMS_BY_STEP.step1;

  const STEP_META = {
    step1: { label:'Step 1', subtitle:'Basic Sciences · Systems-Based', exam:'USMLE Step 1' },
    step2: { label:'Step 2 CK', subtitle:'Clinical Knowledge · Shelf Exams', exam:'USMLE Step 2 CK' },
    step3: { label:'Step 3', subtitle:'Clinical Management & Biostats', exam:'USMLE Step 3' }
  };

  /* ── Countdown helpers ──────────────────────────────────────────── */
  function _daysUntilExam() {
    const examDate = Store.getSettings().examDate;
    if (!examDate) return null;
    const diff = new Date(examDate) - new Date();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  function _countdownHtml() {
    const days = _daysUntilExam();
    const settings = Store.getSettings();
    const gstep = settings.globalStep || 'step1';
    const stepLabel = STEP_META[gstep] ? STEP_META[gstep].exam : 'Exam';
    if (days === null) {
      return `<div class="dash-stat-card dash-stat-accent clickable" id="dash-set-exam">
        <div class="dash-stat-icon">📅</div>
        <div class="dash-stat-body">
          <div class="dash-stat-value">Set Exam Date</div>
          <div class="dash-stat-label">Click to configure</div>
        </div>
      </div>`;
    }
    const urgency = days < 14 ? 'dash-stat-danger' : days < 30 ? 'dash-stat-warn' : 'dash-stat-accent';
    return `<div class="dash-stat-card ${urgency} clickable" id="dash-set-exam">
      <div class="dash-stat-icon">📅</div>
      <div class="dash-stat-body">
        <div class="dash-stat-value">${days > 0 ? days : 'Today!'}<span class="dash-stat-unit">${days > 1 ? ' days' : ''}</span></div>
        <div class="dash-stat-label">Until ${stepLabel}${settings.examDate ? ' · ' + settings.examDate : ''}</div>
      </div>
    </div>`;
  }

  function _scoreHtml() {
    const latest = Store.getLatestScore();
    const target = Store.getSettings().targetScore || 65;
    if (!latest) {
      return `<div class="dash-stat-card dash-stat-neutral clickable" id="dash-log-score">
        <div class="dash-stat-icon">📊</div>
        <div class="dash-stat-body">
          <div class="dash-stat-value">Log Score</div>
          <div class="dash-stat-label">No scores yet — add first NBME</div>
        </div>
      </div>`;
    }
    const pct = latest.value;
    const gap = pct - target;
    const statusClass = pct >= target ? 'dash-stat-success' : pct >= target - 5 ? 'dash-stat-warn' : 'dash-stat-danger';
    return `<div class="dash-stat-card ${statusClass} clickable" id="dash-log-score">
      <div class="dash-stat-icon">📊</div>
      <div class="dash-stat-body">
        <div class="dash-stat-value">${pct}%<span class="dash-stat-unit dash-gap ${gap >= 0 ? 'positive' : 'negative'}">${gap >= 0 ? '▲' : '▼'}${Math.abs(gap)}</span></div>
        <div class="dash-stat-label">${latest.type} · ${latest.date}</div>
      </div>
    </div>`;
  }

  function _targetHtml() {
    const target = Store.getSettings().targetScore || 65;
    return `<div class="dash-stat-card dash-stat-neutral clickable" id="dash-set-target">
      <div class="dash-stat-icon">🎯</div>
      <div class="dash-stat-body">
        <div class="dash-stat-value">${target}%</div>
        <div class="dash-stat-label">Target Score</div>
      </div>
    </div>`;
  }

  function _cardCountHtml() {
    const gstep = Store.getSettings().globalStep || 'step1';
    const all = Store.getAllCards().filter(c => c.stepKey === gstep);
    const flagged = all.filter(c => c.card.flagged).length;
    return `<div class="dash-stat-card dash-stat-neutral">
      <div class="dash-stat-icon">🗂️</div>
      <div class="dash-stat-body">
        <div class="dash-stat-value">${all.length}</div>
        <div class="dash-stat-label">Review cards · <span style="color:var(--warn)">${flagged} flagged</span></div>
      </div>
    </div>`;
  }

  /* ── System priority bars ───────────────────────────────────────── */
  function _systemsHtml() {
    const gstep = Store.getSettings().globalStep || 'step1';
    const systems = SYSTEMS_BY_STEP[gstep] || SYSTEMS_BY_STEP.step1;
    const cats = Store.getCategories(gstep);
    const rows = systems.map(sys => {
      const cat = cats.find(c => c.slug === sys.slug);
      const cardCount = cat ? cat.count : 0;
      const subcatCount = cat ? cat.subcatCount : 0;

      return `<div class="sys-row clickable" data-slug="${sys.slug}">
        <div class="sys-icon">${sys.icon}</div>
        <div class="sys-body">
          <div class="sys-name-row">
            <span class="sys-name">${sys.label}</span>
            <span class="sys-pct">${sys.pct}</span>
          </div>
          <div class="sys-bar-wrap">
            <div class="sys-bar" style="width:${sys.weight * 6}%;background:${sys.color}"></div>
          </div>
        </div>
        <div class="sys-meta">
          <span class="sys-card-count">${cardCount} cards</span>
          <span class="sys-sub-count">${subcatCount} topics</span>
        </div>
      </div>`;
    }).join('');

    const meta = STEP_META[gstep] || STEP_META.step1;
    return `<section class="dash-section">
      <h3 class="dash-section-title">${meta.label} Content Areas by Exam Weight — Click to Study</h3>
      <div class="sys-list">${rows}</div>
    </section>`;
  }

  /* ── Score mini chart ───────────────────────────────────────────── */
  function _scoreChartHtml() {
    const scores = Store.getScores().filter(s => ['NBME','UWSA','Free120'].includes(s.type));
    const target = Store.getSettings().targetScore || 65;

    if (scores.length === 0) {
      return `<section class="dash-section dash-scores-section">
        <h3 class="dash-section-title">Score Trend</h3>
        <div class="dash-empty-scores">
          <p>No practice scores logged yet.</p>
          <button class="btn-primary dash-add-score-btn" id="dash-add-score-btn">+ Log First Score</button>
        </div>
      </section>`;
    }

    const max = Math.max(...scores.map(s => s.value), target, 70);
    const min = Math.min(...scores.map(s => s.value), 45);
    const range = max - min + 5;

    const bars = scores.map(s => {
      const height = Math.round(((s.value - min) / range) * 100);
      const color = s.value >= target ? 'var(--accent)' : s.value >= target - 5 ? 'var(--warn)' : 'var(--danger)';
      return `<div class="score-bar-wrap" title="${s.type} · ${s.date}: ${s.value}%">
        <div class="score-bar" style="height:${height}%;background:${color}"></div>
        <div class="score-bar-label">${s.value}%</div>
        <div class="score-bar-type">${s.type.replace('NBME','N').replace('UWSA','U').replace('Free120','F')}</div>
      </div>`;
    }).join('');

    const targetPct = Math.round(((target - min) / range) * 100);

    return `<section class="dash-section dash-scores-section">
      <h3 class="dash-section-title">Score Trend <button class="btn-secondary dash-add-score-btn" id="dash-add-score-btn" style="float:right;margin-top:-2px">+ Add Score</button></h3>
      <div class="score-chart">
        <div class="score-target-line" style="bottom:${targetPct}%" title="Target ${target}%">
          <span class="score-target-label">Target ${target}%</span>
        </div>
        <div class="score-bars">${bars}</div>
      </div>
    </section>`;
  }

  /* ── Flagged cards section ──────────────────────────────────────── */
  function _flaggedHtml() {
    const gstep = Store.getSettings().globalStep || 'step1';
    const systems = SYSTEMS_BY_STEP[gstep] || SYSTEMS_BY_STEP.step1;
    const flagged = Store.getAllCards().filter(c => c.stepKey === gstep && c.card.flagged);
    if (flagged.length === 0) return '';
    const items = flagged.slice(0, 5).map(c => {
      const sysInfo = systems.find(s => s.slug === c.catSlug);
      return `<div class="flagged-item clickable" data-cat="${c.catSlug}" data-subcat="${c.subcatSlug || ''}" data-id="${c.card.id}">
        <span class="flagged-icon">${sysInfo ? sysInfo.icon : '📌'}</span>
        <span class="flagged-title">${c.card.title || 'Untitled'}</span>
        <span class="flagged-sys">${c.subcatLabel || c.catLabel}</span>
      </div>`;
    }).join('');
    const more = flagged.length > 5 ? `<div class="flagged-more">+ ${flagged.length - 5} more flagged cards</div>` : '';
    return `<section class="dash-section">
      <h3 class="dash-section-title">🚩 Flagged for Review (${flagged.length})</h3>
      <div class="flagged-list">${items}${more}</div>
    </section>`;
  }

  /* ── Quick actions ──────────────────────────────────────────────── */
  function _quickActionsHtml() {
    const scores = Store.getScores();
    const uworld = scores.filter(s => s.type === 'UWorld');
    const latestUW = uworld.length ? uworld[uworld.length - 1] : null;

    return `<section class="dash-section">
      <h3 class="dash-section-title">Today's Study Plan</h3>
      <div class="quick-actions">
        <div class="quick-action-card">
          <div class="qa-icon">📖</div>
          <div class="qa-text">
            <b>Daily UWorld</b>
            <span>80 questions timed + full review</span>
          </div>
          <button class="btn-primary qa-btn" data-view="study">Study Now</button>
        </div>
        <div class="quick-action-card">
          <div class="qa-icon">📊</div>
          <div class="qa-text">
            <b>UWorld Progress</b>
            <span>${latestUW ? `Last logged: ${latestUW.value}% correct` : 'Track your UWorld % correct'}</span>
          </div>
          <button class="btn-secondary qa-btn" data-view="scores">Log Progress</button>
        </div>
        <div class="quick-action-card">
          <div class="qa-icon">🗓️</div>
          <div class="qa-text">
            <b>Study Schedule</b>
            <span>View your week-by-week plan</span>
          </div>
          <button class="btn-secondary qa-btn" data-view="schedule">View Schedule</button>
        </div>
      </div>
    </section>`;
  }

  /* ── Render dashboard ───────────────────────────────────────────── */
  function render() {
    const el = document.getElementById('view-dashboard');
    if (!el) return;

    const gstep = Store.getSettings().globalStep || 'step1';
    const meta = STEP_META[gstep] || STEP_META.step1;

    el.innerHTML = `
      <div class="dash-header">
        <div>
          <h1 class="dash-title">${meta.label} Command Center</h1>
          <p class="dash-subtitle">${meta.subtitle} · Track. Review. Conquer.</p>
        </div>
      </div>

      <div class="dash-stats-row">
        ${_countdownHtml()}
        ${_scoreHtml()}
        ${_targetHtml()}
        ${_cardCountHtml()}
      </div>

      <div style="padding:16px 32px 0">${_systemsHtml()}</div>

      <div class="dash-bottom-row">
        <div class="dash-bottom-left">
          ${_scoreChartHtml()}
          ${_flaggedHtml()}
        </div>
        <div class="dash-bottom-right">
          ${_quickActionsHtml()}
          ${_resourcesHtml()}
        </div>
      </div>
    `;

    _bindDashboardEvents(el);
  }

  function _resourcesHtml() {
    const gstep = Store.getSettings().globalStep || 'step1';
    const resources = {
      step1: [
        { rank:1, name:'UWorld Qbank',       desc:'3,000–3,600 Qs · Full review every Q' },
        { rank:2, name:'First Aid 2026',      desc:'Annotate heavily with UWorld insights' },
        { rank:3, name:'Pathoma (Ch 1–3)',    desc:'Inflammation, neoplasia, cell injury' },
        { rank:4, name:'Sketchy Micro/Pharm', desc:'Visual mnemonics for organisms & drugs' },
        { rank:5, name:'AnKing Anki Deck',    desc:'Spaced repetition · 1–1.5 hrs/day' },
        { rank:6, name:'NBME Practice Forms', desc:'Forms 28–32 · Weekly assessment' }
      ],
      step2: [
        { rank:1, name:'UWorld CK Qbank',       desc:'3,500+ Qs · Focus on clinical vignettes' },
        { rank:2, name:'OnlineMedEd',            desc:'Video review for all shelf topics' },
        { rank:3, name:'Step-Up to Medicine',    desc:'High-yield IM review' },
        { rank:4, name:'Case Files Series',      desc:'Surgery, OB/GYN, Pediatrics, Psychiatry' },
        { rank:5, name:'AMBOSS (CK)',            desc:'Integrated Q bank + library' },
        { rank:6, name:'NBME CCSE / CK Practice',desc:'Forms 6–9 · Benchmark every 2 weeks' }
      ],
      step3: [
        { rank:1, name:'UWorld Step 3',          desc:'Focus on management & biostats' },
        { rank:2, name:'Kaplan Step 3',          desc:'Core clinical management algorithms' },
        { rank:3, name:'Master the Boards Step 3',desc:'Rapid review for exam day' },
        { rank:4, name:'AMBOSS Step 3',          desc:'CCS cases + Qbank' },
        { rank:5, name:'Biostatistics for Dummies',desc:'p-values, NNT, NNH, sensitivity/specificity' },
        { rank:6, name:'UWSA / NBME Step 3 Forms', desc:'Biennial exam — full 2-day format practice' }
      ]
    };
    const list = (resources[gstep] || resources.step1).map(r => `
      <div class="resource-item">
        <span class="res-rank">${r.rank}</span>
        <span class="res-name">${r.name}</span>
        <span class="res-desc">${r.desc}</span>
      </div>`).join('');
    return `<section class="dash-section">
      <h3 class="dash-section-title">Resource Stack</h3>
      <div class="resource-list">${list}</div>
    </section>`;
  }

  /* ── Bind interactive elements ──────────────────────────────────── */
  function _bindDashboardEvents(el) {
    // Exam date setup
    const examBtn = el.querySelector('#dash-set-exam');
    if (examBtn) {
      examBtn.addEventListener('click', _showExamDateModal);
    }

    // Target score
    const targetBtn = el.querySelector('#dash-set-target');
    if (targetBtn) {
      targetBtn.addEventListener('click', _showTargetModal);
    }

    // Log score buttons
    el.querySelectorAll('#dash-log-score, #dash-add-score-btn').forEach(btn => {
      btn.addEventListener('click', () => App.switchView('scores'));
    });

    // System rows → navigate to study
    const gstep = Store.getSettings().globalStep || 'step1';
    el.querySelectorAll('.sys-row').forEach(row => {
      row.addEventListener('click', () => {
        const slug = row.dataset.slug;
        Store.setSetting('activeStep', gstep);
        Store.setSetting('activeCategory', slug);
        Store.setSetting('activeSubcategory', null);
        App.switchView('study');
      });
    });

    // Flagged items → open editor
    el.querySelectorAll('.flagged-item').forEach(item => {
      item.addEventListener('click', () => {
        const cat    = item.dataset.cat;
        const subcat = item.dataset.subcat || null;
        const id     = item.dataset.id;
        Store.setSetting('activeStep', gstep);
        Store.setSetting('activeCategory', cat);
        Store.setSetting('activeSubcategory', subcat || null);
        App.switchView('study');
        setTimeout(() => {
          Render.cardList();
          Editor.open(id);
        }, 50);
      });
    });

    // Quick action buttons
    el.querySelectorAll('.qa-btn').forEach(btn => {
      btn.addEventListener('click', () => App.switchView(btn.dataset.view));
    });
  }

  function _showExamDateModal() {
    const settings = Store.getSettings();
    UI.showModal({
      title: 'Set Exam Date & Goals',
      body: `
        <div style="display:flex;flex-direction:column;gap:14px">
          <div>
            <label style="font-size:13px;display:block;margin-bottom:4px">Exam Date</label>
            <input type="date" id="modal-exam-date" value="${settings.examDate || ''}" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;background:var(--bg-card);color:var(--text)" />
          </div>
          <div>
            <label style="font-size:13px;display:block;margin-bottom:4px">Target Score (%)</label>
            <input type="number" id="modal-target" value="${settings.targetScore || 65}" min="50" max="100" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;background:var(--bg-card);color:var(--text)" />
          </div>
          <div>
            <label style="font-size:13px;display:block;margin-bottom:4px">Study Hours/Day</label>
            <input type="number" id="modal-hours" value="${settings.studyHoursPerDay || 8}" min="2" max="14" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;background:var(--bg-card);color:var(--text)" />
          </div>
          <div>
            <label style="font-size:13px;display:block;margin-bottom:4px">Dedicated Study Weeks</label>
            <select id="modal-weeks" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;background:var(--bg-card);color:var(--text)">
              ${[4,6,8,10,12].map(w => `<option value="${w}" ${w === (settings.dedicatedWeeks || 8) ? 'selected' : ''}>${w} weeks</option>`).join('')}
            </select>
          </div>
        </div>`,
      confirmText: 'Save',
      onConfirm: () => {
        const date  = document.getElementById('modal-exam-date').value;
        const tgt   = parseInt(document.getElementById('modal-target').value, 10);
        const hrs   = parseInt(document.getElementById('modal-hours').value, 10);
        const wks   = parseInt(document.getElementById('modal-weeks').value, 10);
        if (date) Store.setSetting('examDate', date);
        if (!isNaN(tgt)) Store.setSetting('targetScore', tgt);
        if (!isNaN(hrs)) Store.setSetting('studyHoursPerDay', hrs);
        if (!isNaN(wks)) Store.setSetting('dedicatedWeeks', wks);
        render();
        UI.toast('Settings saved', 'success');
      }
    });
  }

  function _showTargetModal() {
    const settings = Store.getSettings();
    UI.showModal({
      title: 'Set Target Score',
      body: `<label style="font-size:13px;display:block;margin-bottom:6px">Target passing score (%)</label>
             <input type="number" id="modal-target2" value="${settings.targetScore || 65}" min="50" max="100" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;background:var(--bg-card);color:var(--text)" />
             <p style="font-size:12px;color:var(--text-muted);margin-top:8px">USMLE Step 1 is pass/fail. Most students target 65%+ on practice forms for a comfortable passing margin.</p>`,
      confirmText: 'Save',
      onConfirm: () => {
        const tgt = parseInt(document.getElementById('modal-target2').value, 10);
        if (!isNaN(tgt)) { Store.setSetting('targetScore', tgt); render(); UI.toast('Target updated', 'success'); }
      }
    });
  }

  return { render, SYSTEMS };
})();

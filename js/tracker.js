/* tracker.js – NBME/UWorld/UWSA score tracking view */
window.Tracker = (() => {

  const SCORE_TYPES = [
    { value: 'NBME',     label: 'NBME CBSSA',         desc: 'Forms 25–32' },
    { value: 'UWSA',     label: 'UWSA (Free 120)',     desc: 'UWSA 1, 2, or Free 120' },
    { value: 'UWorld',   label: 'UWorld %',            desc: 'Running % correct' },
    { value: 'Free120',  label: 'USMLE Free 120',      desc: 'Official sample items' },
    { value: 'Other',    label: 'Other',               desc: 'Any other practice form' }
  ];

  function render() {
    const el = document.getElementById('view-scores');
    if (!el) return;
    el.innerHTML = `
      <div class="tracker-layout">
        <div class="tracker-left">
          <h2 class="tracker-title">Score Tracker</h2>
          <p class="tracker-subtitle">Log every NBME, UWorld session, and UWSA to watch your trend toward ${Store.getSettings().targetScore || 65}%</p>
          ${_entryFormHtml()}
        </div>
        <div class="tracker-right">
          ${_historyHtml()}
          ${_uWorldProgressHtml()}
          ${_tipsHtml()}
        </div>
      </div>
    `;
    _bindTrackerEvents(el);
  }

  /* ── Entry form ─────────────────────────────────────────────────── */
  function _entryFormHtml() {
    const today = new Date().toISOString().slice(0, 10);
    const typeOptions = SCORE_TYPES.map(t =>
      `<option value="${t.value}">${t.label}</option>`
    ).join('');

    return `<div class="score-entry-card">
      <h3 class="entry-card-title">+ Log New Score</h3>
      <div class="entry-form">
        <div class="entry-row">
          <div class="entry-field">
            <label>Date</label>
            <input type="date" id="entry-date" value="${today}" />
          </div>
          <div class="entry-field">
            <label>Type</label>
            <select id="entry-type">${typeOptions}</select>
          </div>
        </div>
        <div class="entry-row">
          <div class="entry-field">
            <label>Score / % Correct</label>
            <div class="score-input-wrap">
              <input type="number" id="entry-value" placeholder="e.g. 63" min="0" max="100" />
              <span class="score-pct-sign">%</span>
            </div>
          </div>
          <div class="entry-field">
            <label>Form / Detail</label>
            <input type="text" id="entry-form" placeholder="e.g. NBME 30, Block 1–3" />
          </div>
        </div>
        <div class="entry-row">
          <div class="entry-field entry-field-full">
            <label>Notes (optional)</label>
            <input type="text" id="entry-notes" placeholder="e.g. Strong on CV, weak on Neuro, Qs 1–2400" />
          </div>
        </div>
        <button class="btn-primary entry-submit" id="entry-submit">Save Score</button>
      </div>
    </div>`;
  }

  /* ── Score history table ────────────────────────────────────────── */
  function _historyHtml() {
    const scores = Store.getScores();
    const target = Store.getSettings().targetScore || 65;

    if (scores.length === 0) {
      return `<div class="score-history-card">
        <h3>Score History</h3>
        <p style="color:var(--text-muted);padding:20px 0;text-align:center">No scores logged yet. Add your first practice test above.</p>
      </div>`;
    }

    const rows = [...scores].reverse().map(s => {
      const statusClass = s.value >= target ? 'score-pass' : s.value >= target - 5 ? 'score-close' : 'score-below';
      const typeLabel = SCORE_TYPES.find(t => t.value === s.type)?.label || s.type;
      return `<tr>
        <td>${s.date}</td>
        <td><span class="score-type-badge score-type-${s.type.toLowerCase()}">${s.type}</span></td>
        <td>${s.formDetail || '—'}</td>
        <td><span class="score-value ${statusClass}">${s.value}%</span></td>
        <td class="score-notes-cell">${s.notes || '—'}</td>
        <td><button class="score-del-btn" data-id="${s.id}" title="Delete">✕</button></td>
      </tr>`;
    }).join('');

    return `<div class="score-history-card">
      <h3>Score History <span class="score-target-badge">Target: ${target}%</span></h3>
      <div class="score-table-wrap">
        <table class="score-table">
          <thead>
            <tr><th>Date</th><th>Type</th><th>Form</th><th>Score</th><th>Notes</th><th></th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      ${_scoreGraphHtml(scores, target)}
    </div>`;
  }

  /* ── Visual trend graph ─────────────────────────────────────────── */
  function _scoreGraphHtml(scores, target) {
    const assessments = scores.filter(s => ['NBME','UWSA','Free120'].includes(s.type));
    if (assessments.length < 2) return '';

    const vals = assessments.map(s => s.value);
    const maxVal = Math.max(...vals, target + 5);
    const minVal = Math.min(...vals, target - 10);
    const range  = maxVal - minVal;

    const points = assessments.map((s, i) => {
      const x = (i / (assessments.length - 1)) * 100;
      const y = 100 - ((s.value - minVal) / range) * 100;
      return `${x},${y}`;
    }).join(' ');

    const targetY = 100 - ((target - minVal) / range) * 100;
    const trend   = assessments.length >= 2 ? assessments[assessments.length - 1].value - assessments[0].value : 0;

    const dots = assessments.map((s, i) => {
      const x = (i / (assessments.length - 1)) * 100;
      const y = 100 - ((s.value - minVal) / range) * 100;
      const color = s.value >= target ? '#27ae60' : s.value >= target - 5 ? '#f39c12' : '#e74c3c';
      return `<circle cx="${x}" cy="${y}" r="4" fill="${color}" stroke="white" stroke-width="2">
        <title>${s.type} · ${s.date}: ${s.value}%</title>
      </circle>`;
    }).join('');

    return `<div class="score-graph-wrap">
      <div class="score-graph-header">
        <span>Assessment Trend</span>
        <span class="trend-badge ${trend >= 0 ? 'trend-up' : 'trend-down'}">${trend >= 0 ? '▲' : '▼'} ${Math.abs(trend)}% from first</span>
      </div>
      <svg class="score-graph-svg" viewBox="0 0 100 60" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="var(--primary)" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <!-- Target line -->
        <line x1="0" y1="${targetY}" x2="100" y2="${targetY}" stroke="var(--accent)" stroke-width="0.8" stroke-dasharray="2,2" />
        <!-- Fill area -->
        <polygon points="${points} 100,100 0,100" fill="url(#lineGrad)" />
        <!-- Trend line -->
        <polyline points="${points}" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Data points -->
        ${dots}
      </svg>
      <div class="score-graph-labels">
        ${assessments.map(s => `<span>${s.type.replace('NBME','N').replace('UWSA','U').replace('Free120','F')}</span>`).join('')}
      </div>
    </div>`;
  }

  /* ── UWorld progress panel ──────────────────────────────────────── */
  function _uWorldProgressHtml() {
    const scores = Store.getScores().filter(s => s.type === 'UWorld');
    const latest = scores.length ? scores[scores.length - 1] : null;

    return `<div class="score-history-card">
      <h3>UWorld Progress</h3>
      ${latest ? `
        <div class="uw-stats">
          <div class="uw-stat">
            <span class="uw-stat-val">${latest.value}%</span>
            <span class="uw-stat-label">% Correct</span>
          </div>
          <div class="uw-stat">
            <span class="uw-stat-val">${latest.formDetail || '—'}</span>
            <span class="uw-stat-label">Qs Done</span>
          </div>
          <div class="uw-stat">
            <span class="uw-stat-val">${latest.date}</span>
            <span class="uw-stat-label">Last Updated</span>
          </div>
        </div>
        <p style="font-size:12px;color:var(--text-muted);margin-top:8px">${latest.notes || ''}</p>
      ` : `<p style="color:var(--text-muted);padding:12px 0">Log UWorld sessions by selecting "UWorld %" as the type. Track your running % correct and questions completed.</p>`}
    </div>`;
  }

  /* ── Performance tips ───────────────────────────────────────────── */
  function _tipsHtml() {
    const scores = Store.getScores().filter(s => ['NBME','UWSA'].includes(s.type));
    const latest = scores.length ? scores[scores.length - 1].value : null;
    const target = Store.getSettings().targetScore || 65;
    let tip = '';

    if (latest === null) {
      tip = '<b>First step:</b> Take a baseline NBME form (try Form 28 or 29) to gauge your starting point before beginning intensive review.';
    } else if (latest < 55) {
      tip = '<b>Priority:</b> Focus on content gaps first. For each UWorld block, spend 2× longer on review than taking questions. Target Pathoma Ch 1–3 + high-yield organ systems (Endo/Repro, Neuro, Renal).';
    } else if (latest < target - 3) {
      const gap = target - latest;
      tip = `<b>Gap: ${gap}%.</b> You're in range. Focus on your bottom 2 systems from NBME performance reports. Do random timed UWorld blocks (80 Qs/day) + thorough incorrect review + weekly NBME reassessment.`;
    } else if (latest < target) {
      tip = `<b>Almost there!</b> You're within striking distance of ${target}%. Review First Aid rapidly, shore up weak spots from recent NBME forms, and take UWSA 2 as a final check.`;
    } else {
      tip = `<b>On target!</b> Keep consistent. Maintain daily Anki, do 60–80 UWorld Qs/day, and protect sleep. Avoid changing too much in the final week.`;
    }

    return `<div class="score-history-card">
      <h3>Performance Insight</h3>
      <p style="font-size:13px;line-height:1.6">${tip}</p>
    </div>`;
  }

  /* ── Event bindings ─────────────────────────────────────────────── */
  function _bindTrackerEvents(el) {
    const submitBtn = el.querySelector('#entry-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const date      = el.querySelector('#entry-date').value;
        const type      = el.querySelector('#entry-type').value;
        const value     = parseFloat(el.querySelector('#entry-value').value);
        const formDetail = el.querySelector('#entry-form').value.trim();
        const notes     = el.querySelector('#entry-notes').value.trim();

        if (!date || isNaN(value)) {
          UI.toast('Please enter a date and score', 'error');
          return;
        }
        if (value < 0 || value > 100) {
          UI.toast('Score must be between 0 and 100', 'error');
          return;
        }

        Store.addScore({ date, type, value, formDetail, notes });
        UI.toast('Score saved!', 'success');

        // Clear form
        el.querySelector('#entry-value').value = '';
        el.querySelector('#entry-form').value  = '';
        el.querySelector('#entry-notes').value = '';

        render(); // refresh
      });
    }

    // Delete score buttons
    el.querySelectorAll('.score-del-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        UI.showModal({
          title: 'Delete Score',
          body: '<p>Delete this score entry? This cannot be undone.</p>',
          confirmText: 'Delete', confirmClass: 'btn-danger',
          onConfirm: () => {
            Store.deleteScore(btn.dataset.id);
            render();
            UI.toast('Score deleted', 'info');
          }
        });
      });
    });
  }

  return { render };
})();

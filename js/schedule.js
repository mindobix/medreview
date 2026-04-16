/* schedule.js – Personalized Step 1 study schedule generator */
window.Schedule = (() => {

  /* Official Step 1 systems ordered by exam weight */
  const STUDY_SYSTEMS = [
    { slug:'endo_repro',      label:'Reproductive & Endocrine',    icon:'🔬', weight:14 },
    { slug:'resp_renal',      label:'Respiratory & Renal',         icon:'🫁', weight:13 },
    { slug:'neuro_behav',     label:'Behavioral Health & Neuro',   icon:'🧠', weight:12 },
    { slug:'blood_immune',    label:'Blood & Immune',              icon:'🩸', weight:11 },
    { slug:'msk_skin',        label:'Musculoskeletal & Skin',      icon:'🦴', weight:10 },
    { slug:'multisystem',     label:'Multisystem / Micro / PK',    icon:'⚙️', weight:10 },
    { slug:'cardiovascular',  label:'Cardiovascular',              icon:'🫀', weight:9  },
    { slug:'gastrointestinal',label:'Gastrointestinal',            icon:'🍽️', weight:8  },
    { slug:'human_dev',       label:'Human Development',           icon:'👶', weight:2  }
  ];

  /* Weekly plan template for 8-week dedicated study */
  const WEEK_PLANS = {
    4: _buildWeekPlans(4),
    6: _buildWeekPlans(6),
    8: _buildWeekPlans(8),
    10: _buildWeekPlans(10),
    12: _buildWeekPlans(12)
  };

  function _buildWeekPlans(weeks) {
    const plans = [];

    if (weeks <= 4) {
      plans.push({
        weeks: '1', label: 'Foundation Blitz',
        color: '#e74c3c', phase: 'foundation',
        focus: ['endo_repro', 'resp_renal'],
        qs: 60, resources: 'First Aid + Pathoma Ch 1–3 + Sketchy Micro/Pharm',
        milestones: ['Take baseline NBME end of week 1'],
        daily: '60 UWorld Qs (system-specific) · 2h content review · 1h Anki'
      });
      plans.push({
        weeks: '2', label: 'System Integration',
        color: '#e67e22', phase: 'integration',
        focus: ['neuro_behav', 'blood_immune', 'msk_skin'],
        qs: 80, resources: 'UWorld random timed + First Aid annotations',
        milestones: ['NBME form (track improvement)'],
        daily: '80 UWorld Qs (random timed) · Full incorrect review · 1h Anki'
      });
      plans.push({
        weeks: '3', label: 'Weak Area Attack',
        color: '#f39c12', phase: 'drilling',
        focus: ['cardiovascular', 'multisystem', 'gastrointestinal'],
        qs: 80, resources: 'Targeted First Aid review + re-watch Pathoma weak spots',
        milestones: ['UWSA 1', 'NBME form'],
        daily: '80 UWorld Qs (weak areas tagged) · Anki + rapid First Aid passes'
      });
      plans.push({
        weeks: '4', label: 'Final Consolidation',
        color: '#27ae60', phase: 'consolidation',
        focus: ['endo_repro', 'neuro_behav', 'resp_renal'],
        qs: 60, resources: 'Rapid First Aid cover-to-cover + Free 120 + Anki',
        milestones: ['UWSA 2', 'Full simulation day (7 blocks)', 'Final NBME 3–5 days before exam'],
        daily: '60 UWorld Qs or incorrect review · Anki · Light review last 3 days'
      });
    } else if (weeks <= 6) {
      plans.push({
        weeks: '1–2', label: 'Foundation Building',
        color: '#e74c3c', phase: 'foundation',
        focus: ['endo_repro', 'resp_renal'],
        qs: 60, resources: 'Pathoma + First Aid + Sketchy Micro/Pharm + AnKing Anki',
        milestones: ['Baseline NBME end of Week 2'],
        daily: '60 UWorld Qs (system-specific) · 1–2 Pathoma chapters · 1.5h Anki'
      });
      plans.push({
        weeks: '3–4', label: 'Systems Integration',
        color: '#e67e22', phase: 'integration',
        focus: ['neuro_behav', 'blood_immune', 'msk_skin', 'cardiovascular'],
        qs: 80, resources: 'UWorld random blocks + First Aid annotations + Sketchy',
        milestones: ['NBME mid-check (Week 4)', 'UWSA 1'],
        daily: '80 UWorld Qs (random timed) · Thorough incorrect review · 1h Anki'
      });
      plans.push({
        weeks: '5', label: 'Weak Area Drilling',
        color: '#f39c12', phase: 'drilling',
        focus: ['multisystem', 'gastrointestinal', 'human_dev'],
        qs: 80, resources: 'Re-review lowest NBME systems + targeted Pathoma/Sketchy',
        milestones: ['NBME form', 'UWSA 2'],
        daily: '80–100 UWorld Qs + targeted weak area review + Anki maturation'
      });
      plans.push({
        weeks: '6', label: 'Final Consolidation',
        color: '#27ae60', phase: 'consolidation',
        focus: ['endo_repro', 'neuro_behav', 'resp_renal'],
        qs: 60, resources: 'Rapid First Aid passes + Free 120 + heavy Anki review',
        milestones: ['Full 8-hour simulation (7 blocks)', 'Final NBME 5–7 days before exam'],
        daily: '60 UWorld incorrects + Anki + Last 3 days: light review only'
      });
    } else if (weeks <= 8) {
      plans.push({
        weeks: '1–2', label: 'Foundation & First Pass Review',
        color: '#e74c3c', phase: 'foundation',
        focus: ['endo_repro', 'resp_renal', 'neuro_behav'],
        qs: 60, resources: 'Pathoma + First Aid system by system + Sketchy + AnKing Anki',
        milestones: ['Baseline NBME CBSSA end of Week 2'],
        daily: '60 UWorld Qs (system-specific) · 1–2 Pathoma chapters · 2h content · 1.5h Anki'
      });
      plans.push({
        weeks: '3–4', label: 'Systems Integration & Drilling',
        color: '#e67e22', phase: 'integration',
        focus: ['blood_immune', 'msk_skin', 'cardiovascular', 'multisystem'],
        qs: 80, resources: 'UWorld random timed + First Aid heavy annotation + Sketchy Pharm',
        milestones: ['NBME form (Week 4)', 'UWSA 1'],
        daily: '80 UWorld Qs (random timed) · Full incorrect review (2× question time) · 1.5h Anki'
      });
      plans.push({
        weeks: '5–6', label: 'High-Yield Drilling & Weak Areas',
        color: '#f39c12', phase: 'drilling',
        focus: ['gastrointestinal', 'human_dev'],
        qs: 80, resources: 'Second pass UWorld weak tags + re-watch weak system videos',
        milestones: ['NBME form (Week 5)', 'UWSA 2 (Week 6)'],
        daily: '80–100 UWorld Qs + targeted review + Anki maturation + identify patterns'
      });
      plans.push({
        weeks: '7–8', label: 'Consolidation & Exam Simulation',
        color: '#27ae60', phase: 'consolidation',
        focus: ['endo_repro', 'neuro_behav', 'resp_renal'],
        qs: 60, resources: 'Rapid First Aid cover-to-cover + Free 120 interactive + Anki only',
        milestones: ['Full 8-hr simulation (7 blocks) Week 7', 'Final NBME 5–7 days before exam', 'Last 3 days: light review only'],
        daily: '60 UWorld / incorrect review · Anki cards only · Week 8: rest + light review'
      });
    } else if (weeks <= 10) {
      plans.push({
        weeks: '1–3', label: 'Content Deep Dive',
        color: '#e74c3c', phase: 'foundation',
        focus: ['endo_repro', 'resp_renal', 'neuro_behav'],
        qs: 40, resources: 'Boards & Beyond / Physeo videos + First Aid + Pathoma + Anki',
        milestones: ['Baseline NBME end of Week 2–3'],
        daily: '40–60 UWorld Qs (system) · 2h video content · 1.5h Anki · NO random blocks yet'
      });
      plans.push({
        weeks: '4–6', label: 'Systems Integration',
        color: '#e67e22', phase: 'integration',
        focus: ['blood_immune', 'msk_skin', 'cardiovascular', 'multisystem'],
        qs: 80, resources: 'UWorld random + First Aid annotations + Sketchy',
        milestones: ['NBME (Week 5)', 'UWSA 1 (Week 6)'],
        daily: '80 UWorld Qs (random timed) · Thorough incorrect review · 1.5h Anki'
      });
      plans.push({
        weeks: '7–8', label: 'Weak Area Attack',
        color: '#f39c12', phase: 'drilling',
        focus: ['gastrointestinal', 'human_dev'],
        qs: 80, resources: 'Targeted weak system review + second UWorld pass on tags',
        milestones: ['UWSA 2 (Week 7)', 'NBME (Week 8)'],
        daily: '80–100 UWorld · Weak area rapid review · Anki heavy'
      });
      plans.push({
        weeks: '9–10', label: 'Consolidation & Simulation',
        color: '#27ae60', phase: 'consolidation',
        focus: ['endo_repro', 'neuro_behav', 'resp_renal'],
        qs: 60, resources: 'Rapid First Aid + Free 120 + Anki only final week',
        milestones: ['Full simulation (Week 9)', 'Final NBME (Week 10, 5–7 days before)'],
        daily: '60 UWorld or incorrects · Anki · Final 3 days: rest + very light review'
      });
    } else {
      plans.push({
        weeks: '1–4', label: 'Extended Content Review',
        color: '#e74c3c', phase: 'foundation',
        focus: ['endo_repro', 'resp_renal', 'neuro_behav', 'blood_immune'],
        qs: 40, resources: 'Boards & Beyond all modules + First Aid + Pathoma + Sketchy + Anki foundation',
        milestones: ['Baseline NBME (Week 3)', 'NBME reassessment (Week 4)'],
        daily: '40 UWorld Qs (system-specific) · 2h video review · 1.5h Anki · NO random yet'
      });
      plans.push({
        weeks: '5–8', label: 'Full Systems Integration',
        color: '#e67e22', phase: 'integration',
        focus: ['msk_skin', 'cardiovascular', 'multisystem', 'gastrointestinal'],
        qs: 60, resources: 'UWorld mixed (system then random) + First Aid deep annotation',
        milestones: ['NBME (Week 6)', 'UWSA 1 (Week 7)', 'NBME (Week 8)'],
        daily: '60–80 UWorld Qs · Thorough review · First Aid + Pathoma cross-reference · 1.5h Anki'
      });
      plans.push({
        weeks: '9–10', label: 'High-Yield Drilling',
        color: '#f39c12', phase: 'drilling',
        focus: ['endo_repro', 'neuro_behav', 'resp_renal'],
        qs: 80, resources: 'Second UWorld pass weak tags + targeted video rewatch',
        milestones: ['UWSA 2 (Week 9)', 'NBME (Week 10)'],
        daily: '80–100 UWorld random · Deep incorrect analysis · Anki sustained'
      });
      plans.push({
        weeks: '11–12', label: 'Consolidation & Exam Ready',
        color: '#27ae60', phase: 'consolidation',
        focus: ['all systems'],
        qs: 60, resources: 'Rapid First Aid passes + Free 120 + Anki only final week',
        milestones: ['Full simulation (Week 11)', 'Final NBME 5–7 days before exam', 'Week 12: REST + light review only'],
        daily: '60 UWorld or incorrect-only review · Anki · Final 3 days: rest + confidence building'
      });
    }

    return plans;
  }

  function render() {
    const el = document.getElementById('view-schedule');
    if (!el) return;

    const settings = Store.getSettings();
    const weeks    = settings.dedicatedWeeks || 8;
    const examDate = settings.examDate;
    const plans    = WEEK_PLANS[weeks] || WEEK_PLANS[8];

    el.innerHTML = `
      <div class="schedule-header">
        <div>
          <h2 class="tracker-title">Study Schedule</h2>
          <p class="tracker-subtitle">${weeks}-week dedicated plan · ${examDate ? 'Exam: ' + examDate : 'Set exam date on Dashboard'}</p>
        </div>
        <button class="btn-secondary" id="schedule-settings-btn">⚙️ Adjust Plan</button>
      </div>

      ${_keyPrinciplesHtml(settings)}
      ${_weeksHtml(plans, examDate, weeks)}
      ${_dailyStructureHtml(settings)}
      ${_nbmePlanning(settings)}
    `;

    el.querySelector('#schedule-settings-btn').addEventListener('click', () => {
      Dashboard.render && Dashboard._showExamDateModal
        ? App.switchView('dashboard')
        : App.switchView('dashboard');
      setTimeout(() => {
        const btn = document.getElementById('dash-set-exam');
        if (btn) btn.click();
      }, 100);
    });

    el.querySelectorAll('.sched-system-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const slug = chip.dataset.slug;
        if (!slug || slug === 'all systems') return;
        Store.setSetting('activeStep', 'step1');
        Store.setSetting('activeCategory', slug);
        Store.setSetting('activeSubcategory', null);
        App.switchView('study');
      });
    });
  }

  function _keyPrinciplesHtml(settings) {
    const target  = settings.targetScore || 65;
    const baseline = settings.baselineScore;
    const gap     = baseline ? target - baseline : null;

    return `<div class="schedule-principles">
      <h3 class="dash-section-title">Key Principles for ${gap ? gap + '% Gap Closure' : 'Step 1 Success'}</h3>
      <div class="principles-grid">
        <div class="principle-card principle-red">
          <div class="principle-num">1</div>
          <div>
            <b>Quality Review &gt; Volume</b>
            <p>Spend 2–3× longer reviewing each question than taking it. Understand WHY each wrong answer is wrong.</p>
          </div>
        </div>
        <div class="principle-card principle-orange">
          <div class="principle-num">2</div>
          <div>
            <b>Prioritize by Exam Weight</b>
            <p>Endo/Repro (12–16%) + Respiratory/Renal (11–15%) + Neuro (10–14%) = up to 45% of exam. Start here.</p>
          </div>
        </div>
        <div class="principle-card principle-yellow">
          <div class="principle-num">3</div>
          <div>
            <b>Integrate Disciplines</b>
            <p>For each system: Normal structure → Pathology → Pharmacology → Microbiology → Genetics/Biochem.</p>
          </div>
        </div>
        <div class="principle-card principle-green">
          <div class="principle-num">4</div>
          <div>
            <b>Simulate Exam Conditions</b>
            <p>Weekly full-length practice tests. Timed blocks. Track per-system performance. Protect sleep (7–8 hrs).</p>
          </div>
        </div>
      </div>
    </div>`;
  }

  function _weeksHtml(plans, examDate, totalWeeks) {
    const rows = plans.map((plan, i) => {
      const focusChips = plan.focus.map(slug => {
        const sys = STUDY_SYSTEMS.find(s => s.slug === slug);
        const label = sys ? sys.icon + ' ' + sys.label : slug;
        return `<span class="sched-system-chip" data-slug="${slug}">${label}</span>`;
      }).join('');

      const milestones = plan.milestones.map(m =>
        `<div class="milestone-item"><span class="milestone-dot">◉</span> ${m}</div>`
      ).join('');

      return `<div class="sched-week-card sched-phase-${plan.phase}">
        <div class="sched-week-header" style="border-left-color:${plan.color}">
          <div class="sched-week-label">Week ${plan.weeks}</div>
          <div class="sched-week-title">${plan.label}</div>
        </div>
        <div class="sched-week-body">
          <div class="sched-section">
            <div class="sched-section-label">Focus Systems</div>
            <div class="sched-chips">${focusChips}</div>
          </div>
          <div class="sched-section">
            <div class="sched-section-label">Daily Structure</div>
            <div class="sched-daily">${plan.daily}</div>
          </div>
          <div class="sched-section">
            <div class="sched-section-label">Resources</div>
            <div class="sched-resources">${plan.resources}</div>
          </div>
          ${milestones ? `<div class="sched-section">
            <div class="sched-section-label">Milestones</div>
            <div class="sched-milestones">${milestones}</div>
          </div>` : ''}
        </div>
      </div>`;
    });

    return `<section class="dash-section">
      <h3 class="dash-section-title">${totalWeeks}-Week Dedicated Plan</h3>
      <div class="sched-weeks">${rows.join('')}</div>
    </section>`;
  }

  function _dailyStructureHtml(settings) {
    const hrs = settings.studyHoursPerDay || 8;
    const morningHrs = Math.round(hrs * 0.4);
    const afternoonHrs = Math.round(hrs * 0.4);
    const eveningHrs = hrs - morningHrs - afternoonHrs;

    return `<section class="dash-section">
      <h3 class="dash-section-title">Daily Structure (~${hrs} hrs)</h3>
      <div class="daily-schedule">
        <div class="daily-block daily-morning">
          <div class="daily-time">Morning · ${morningHrs}h</div>
          <div class="daily-title">Content + New Questions</div>
          <ul class="daily-list">
            <li>1–2 Pathoma chapters OR Boards & Beyond videos for focus system</li>
            <li>40–60 UWorld questions (system-specific early; random timed later)</li>
          </ul>
        </div>
        <div class="daily-block daily-afternoon">
          <div class="daily-time">Afternoon · ${afternoonHrs}h</div>
          <div class="daily-title">Deep Incorrect Review</div>
          <ul class="daily-list">
            <li>Review EVERY question — correct and incorrect</li>
            <li>Annotate First Aid with UWorld insights</li>
            <li>Add missed concepts to Anki or this app</li>
          </ul>
        </div>
        <div class="daily-block daily-evening">
          <div class="daily-time">Evening · ${eveningHrs}h</div>
          <div class="daily-title">Anki + Weak Areas</div>
          <ul class="daily-list">
            <li>Anki: mature cards + new additions from today</li>
            <li>Rapid First Aid scan of weak topics</li>
            <li>Brief Sketchy for organisms/drugs seen today</li>
          </ul>
        </div>
      </div>
      <p style="font-size:12px;color:var(--text-muted);margin-top:12px">Include 1 full rest day per week + 20–30 min exercise daily. Sleep 7–8 hours — non-negotiable for memory consolidation.</p>
    </section>`;
  }

  function _nbmePlanning(settings) {
    const weeks = settings.dedicatedWeeks || 8;
    const examDate = settings.examDate;

    const schedule = [];
    if (weeks >= 8) {
      schedule.push({ when: 'Week 2 end', what: 'NBME 28 or 29', purpose: 'Baseline — shows where you start dedicated' });
      schedule.push({ when: 'Week 4 end', what: 'NBME 30', purpose: 'Mid-check — verify improvement trajectory' });
      schedule.push({ when: 'Week 5–6',   what: 'UWSA 1',        purpose: 'UWorld-calibrated prediction' });
      schedule.push({ when: 'Week 6–7',   what: 'UWSA 2',        purpose: 'Second UWorld prediction' });
      schedule.push({ when: 'Week 7',     what: 'NBME 31 or 32', purpose: 'Late-stage check; most predictive' });
      schedule.push({ when: '5–7 days before', what: 'Final NBME', purpose: 'Last practice — should hit or exceed target' });
    } else if (weeks >= 6) {
      schedule.push({ when: 'Week 1 end', what: 'NBME 28',  purpose: 'Baseline' });
      schedule.push({ when: 'Week 3 end', what: 'NBME 29',  purpose: 'Mid-check' });
      schedule.push({ when: 'Week 4',     what: 'UWSA 1',   purpose: 'UWorld prediction' });
      schedule.push({ when: 'Week 5',     what: 'UWSA 2',   purpose: 'Second prediction' });
      schedule.push({ when: '5–7 days before', what: 'NBME 30 or 31', purpose: 'Final check' });
    } else {
      schedule.push({ when: 'Day 2–3',  what: 'NBME 28',  purpose: 'Baseline before intensive work' });
      schedule.push({ when: 'Week 2',   what: 'NBME 29',  purpose: 'Progress check' });
      schedule.push({ when: 'Week 3',   what: 'UWSA 1',   purpose: 'Prediction 1' });
      schedule.push({ when: '5–7 days before', what: 'NBME 30 + UWSA 2', purpose: 'Final assessment' });
    }

    const rows = schedule.map(s =>
      `<tr>
        <td>${s.when}</td>
        <td><b>${s.what}</b></td>
        <td>${s.purpose}</td>
        <td><button class="score-log-from-schedule btn-secondary" style="font-size:11px;padding:3px 8px" data-type="${s.what.includes('UWSA') ? 'UWSA' : 'NBME'}">Log Score</button></td>
      </tr>`
    ).join('');

    return `<section class="dash-section">
      <h3 class="dash-section-title">Practice Test Schedule</h3>
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:12px">Each form costs ~$35–60 on myNBME.org. Budget 5–6 forms. Review every incorrect thoroughly — this is the highest-yield activity.</p>
      <div class="score-table-wrap">
        <table class="score-table">
          <thead><tr><th>When</th><th>Assessment</th><th>Purpose</th><th></th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>`;
  }

  return { render };
})();

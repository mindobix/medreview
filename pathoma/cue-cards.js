/* ── Pathoma Cue Cards ────────────────────────────────────────────────
   Keyed by video ID. Add entries as you go — missing IDs show a
   "coming soon" placeholder automatically.
   ──────────────────────────────────────────────────────────────────── */
const CUE_CARDS = {

  '1.1': {
    title: 'Growth Adaptations',
    cues: [
      'Atrophy: ↓ cell size via ubiquitin-proteasome & ↑ autophagy. Causes: disuse, denervation, ischemia, loss of trophic signal, malnutrition',
      'Hypertrophy: ↑ cell size (not number). Only in permanent cells (cardiac, skeletal muscle). Driven by mechanical stress or hormones (aldosterone)',
      'Hyperplasia: ↑ cell number. Labile + stable cells only; cannot occur in permanent cells. Growth factor driven (EGF, PDGF)',
      'Metaplasia: one adult cell type → another (reversible). Barrett esophagus: squamous → columnar (GERD). Smoking: pseudostratified ciliated → squamous',
      'Dysplasia: disordered, pre-malignant growth. ↑ N:C ratio, nuclear pleomorphism, loss of polarity. Reversible if stimulus removed',
    ]
  },

  '1.2': {
    title: 'Cellular Injury',
    cues: [
      'Reversible: ↓ ATP → ↓ Na/K-ATPase → Na⁺/H₂O influx → cell swelling (hydropic change); fatty change; ribosome detachment → ↓ protein synthesis',
      '↓ pH from anaerobic glycolysis → chromatin clumping (nuclear change)',
      'Plasma membrane damage = point of no return → irreversible injury',
      'Ischemia-reperfusion: Ca²⁺ overload + free-radical burst after reperfusion adds injury beyond original ischemia',
      'Vulnerability: neurons (3–5 min) > cardiac myocytes (20–30 min) > skeletal muscle (hours)',
    ]
  },

  '1.3': {
    title: 'Cell Death',
    cues: [
      'Coagulative necrosis: preserved ghost-cell architecture. Ischemia anywhere EXCEPT brain. "Tombstone" cells',
      'Liquefactive necrosis: brain infarcts (no supporting stroma) + bacterial abscesses (PMN enzymes digest tissue). Creamy pus',
      'Caseous necrosis: TB + endemic fungi. Cheesy white, no architecture, surrounded by granuloma',
      'Fat necrosis: pancreatic enzymes (Ca²⁺ saponification → chalky white) or breast trauma',
      'Fibrinoid necrosis: vasculitis + malignant HTN. Smudgy pink vessel wall; immune complex deposition',
      'Gangrenous: dry (coagulative, arterial occlusion) or wet (liquefactive + bacteria)',
      'Apoptosis: single-cell, no inflammation, membrane blebs, phagocytosed. Intrinsic (cytochrome c → caspases via Bcl-2 family) or extrinsic (Fas/TNF → caspase-8)',
    ]
  },

  '1.4': {
    title: 'Free Radical Injury',
    cues: [
      'Sources: radiation, CCl₄ metabolism, reperfusion, phagocytic oxidative burst, smoking',
      'ROS hierarchy: O₂⁻ → H₂O₂ → ·OH (hydroxyl radical, most damaging). Fenton: Fe²⁺ + H₂O₂ → ·OH',
      'Defenses: SOD (O₂⁻ → H₂O₂), catalase (H₂O₂ → H₂O), glutathione peroxidase, vitamins C & E',
      'CCl₄ → CCl₃· radical in SER → lipid peroxidation → centrilobular fatty liver (P450 rich zone 3)',
      'Chronic granulomatous disease: NADPH oxidase defect → no O₂⁻ → catalase⁺ infections (Staph, Aspergillus, Nocardia)',
    ]
  },

  '1.5': {
    title: 'Amyloidosis',
    cues: [
      'All amyloid: misfolded β-pleated sheets. Congo red → apple-green birefringence (polarized light)',
      'AL (primary): immunoglobulin light chains from plasma cell dyscrasias (MM, MGUS). Systemic',
      'AA (secondary): serum amyloid A (acute-phase reactant) from chronic inflammation: TB, RA, Crohn disease, osteomyelitis',
      'Aβ: APP cleavage (chr 21). Alzheimer disease + Down syndrome (by age 40)',
      'TTR (transthyretin): senile systemic (old age, WT-TTR) or hereditary (Val122Ile in African Americans) → restrictive cardiomyopathy',
      'β₂-microglobulin: long-term dialysis → deposits in carpal tunnel',
      'Organ effects: kidney (nephrotic), heart (restrictive CM, low-voltage ECG), tongue (macroglossia), nerves (peripheral neuropathy)',
    ]
  },

  '2.1a': {
    title: 'Acute Inflammation — Vascular',
    cues: [
      'Sequence: brief vasoconstriction → vasodilation (histamine, PGI₂) → ↑ vascular permeability → exudate',
      'Exudate: protein-rich (SG > 1.020), seen in inflammation. Transudate: protein-poor (SG < 1.012), from ↑ hydrostatic or ↓ oncotic pressure',
      'Histamine: mast cells, basophils, platelets. H₁ receptor → immediate reversible permeability & vasodilation',
      'AA → COX → PGE₂/PGI₂ (vasodilation, fever, pain) & TXA₂ (vasoconstriction, platelet aggregation)',
      'AA → LOX → LTB₄ (neutrophil chemotaxis) & LTC₄/D₄/E₄ = slow-reacting substances (bronchoconstriction, ↑ permeability)',
      'Bradykinin: pain, ↑ permeability, vasodilation. ACEi → ↑ bradykinin → angioedema/cough',
      'Complement: C3a/C5a = anaphylatoxins (mast cell degranulation); C5a = chemotaxis; C3b = opsonin; MAC (C5b-9) = lysis',
    ]
  },

  '2.1b': {
    title: 'Acute Inflammation — Cellular',
    cues: [
      'PMN steps: margination → rolling (P/E-selectin + sialyl-Lewis X) → firm adhesion (ICAM-1 + LFA-1/Mac-1 integrins) → diapedesis → chemotaxis',
      'LAD type I: CD18 (β₂ integrin) mutation → no firm adhesion. Recurrent bacterial infections, delayed umbilical cord separation, high circulating WBCs',
      'Chemotactic signals: C5a, IL-8, LTB₄, bacterial fMLP',
      'Killing mechanisms: oxidative burst (NADPH oxidase → O₂⁻ → H₂O₂ → MPO + Cl⁻ → HOCl), defensins, elastase',
      'CGD: NADPH oxidase defect → only catalase⁺ organisms survive (Staph aureus, Aspergillus, Nocardia, Serratia). NBT test negative',
      'Cell timeline: PMNs 0–2 days (acute), macrophages 2–3 days onward (dominate by 48 h)',
    ]
  },

  '2.1c': {
    title: 'Acute Inflammation — Outcomes & Systemic',
    cues: [
      'Outcomes: resolution (ideal) → regeneration if labile/stable cells. OR fibrosis/scarring → permanent cells or ongoing damage. OR abscess. OR → chronic inflammation',
      'Fever: IL-1, IL-6, TNF-α → hypothalamic COX-2 → PGE₂ → ↑ thermostat set-point. Antipyretics block COX-2',
      'Acute-phase reactants ↑: CRP (opsonin, activates complement), fibrinogen (↑ ESR), SAA, ferritin, haptoglobin. ↓ Albumin, transferrin',
      'ESR: fibrinogen + immunoglobulins → rouleaux → faster settling. ↑ in infection, inflammation, malignancy, pregnancy',
      'Septic shock (gram-neg): LPS → macrophage TNF/IL-1 → ↑ iNOS → NO → vasodilation → ↓ SVR → DIC, ARDS, organ failure',
      'Exudate types: serous (viral, thin); fibrinous (fibrin, pericarditis → "bread-and-butter"); purulent (PMNs + bacteria); hemorrhagic',
    ]
  },

  '2.2': {
    title: 'Chronic Inflammation',
    cues: [
      'Dominant cells: macrophages + lymphocytes (± plasma cells, eosinophils in allergy/parasites)',
      'Macrophage polarization: M1 (classical, IFN-γ) → TNF, ROI, NO → pathogen killing. M2 (alternative, IL-4/IL-13) → TGF-β → fibrosis, repair',
      'Granuloma: epithelioid macrophages + Langhans giant cells (horseshoe nuclei) + lymphocytic rim ± central necrosis',
      'Caseating granuloma: TB (Mycobacterium) + endemic fungi (Histoplasma, Coccidioides, Blastomyces)',
      'Non-caseating granuloma: sarcoidosis, Crohn disease, foreign body reaction, berylliosis, leprosy (tuberculoid)',
      'Sarcoidosis: ↑ ACE, ↑ Ca²⁺ (macrophage 1α-hydroxylase), bilateral hilar LAD, uveitis, erythema nodosum, Löfgren syndrome',
      'Chronic → fibrosis via TGF-β stimulating fibroblasts; irreversible tissue damage',
    ]
  },

  '2.3': {
    title: 'Primary Immunodeficiency',
    cues: [
      'Bruton (XLA): BTK mutation, X-linked recessive. No B cells, no Ig. Infections after 6 months (maternal IgG wanes). Giardia, encapsulated bacteria, enteroviruses',
      'CVID: adult-onset, ↓ IgG/A/M. Sinopulmonary infections, Giardia, ↑ autoimmune disease + lymphoma risk',
      'Selective IgA deficiency: most common PID. Often asymptomatic. Risk: anaphylaxis with blood products (anti-IgA IgE). Association with celiac, autoimmune',
      'DiGeorge (22q11, TBX1): thymic aplasia → ↓ T cells. Hypoparathyroidism → hypocalcemia → tetany. Conotruncal heart defects (TOF, truncus). CATCH-22',
      'SCID: no T or B cells. ADA deficiency (AR) or γc chain (XL). PCP, candida, CMV. Avoid live vaccines. BMT curative',
      'Wiskott-Aldrich (WASP, XL): thrombocytopenia (small platelets) + eczema + recurrent infections. ↓ IgM, ↑ IgA/E',
      'Hyper-IgM syndrome: CD40L defect on T cells → no class switching → ↑ IgM, absent IgG/A/E. PCP, cryptosporidium',
    ]
  },

  '12.1': {
    title: 'Congenital Kidney Disorders',
    cues: [
      'Renal agenesis — bilateral: Potter sequence (oligohydramnios → flat facies, limb deformities, pulmonary hypoplasia). Fatal. Unilateral: contralateral compensatory hypertrophy',
      'Horseshoe kidney: fused lower poles. Trapped below inferior mesenteric artery → cannot ascend. ↑ risk UTI, stones, Wilms tumor',
      'ARPKD (autosomal recessive): presents at birth or infancy. Bilateral cysts from collecting ducts. Potter sequence + congenital hepatic fibrosis (portal HTN). PKHD1 mutation',
      'ADPKD (autosomal dominant): PKD1 (chr 16, 85%) or PKD2 (chr 4). Adult onset (3rd–4th decade). Bilateral cysts. Flank pain, hematuria, HTN, ↑ Cr. Associated: berry aneurysms (rupture → SAH), mitral valve prolapse, liver/pancreas cysts',
      'Medullary sponge kidney: dilated collecting ducts → nephrocalcinosis, recurrent UTI/stones. Benign',
      'Multicystic dysplastic kidney: nonfunctional, unilateral. Most common renal cystic disease in newborns. Involutes over time',
    ]
  },

  '12.2': {
    title: 'Acute Renal Failure',
    cues: [
      'Prerenal: ↓ perfusion. BUN:Cr >20:1, urine Na <20, FENa <1%, ↑ urine osmolality. Causes: hypovolemia, CHF, hepatorenal. Responds to fluids',
      'Intrinsic — ATN: most common cause of acute intrinsic renal failure. Ischemic (shock → muddy brown granular casts) or nephrotoxic (aminoglycosides, contrast, myoglobin)',
      'ATN phases: oliguric (days–weeks, ↑ K, ↑ Cr) → polyuric (tubules recovered but can\'t concentrate) → recovery',
      'Aminoglycosides: proximal tubule toxicity (PCT most metabolically active). Cisplatin, lead, mercury also PCT. Myoglobin/hemoglobin: pigmented casts → tubular obstruction',
      'RPGN (rapidly progressive): crescents (fibrin + parietal epithelial cells + macrophages). Type I: anti-GBM (Goodpasture — linear IF, lung + kidney). Type II: immune complex (SLE, post-strep). Type III: pauci-immune/ANCA (Wegener\'s, MPA)',
      'Postrenal: obstruction → bilateral hydronephrosis needed (one kidney sufficient). Causes: BPH, cervical cancer, bilateral stones',
    ]
  },

  '12.3': {
    title: 'Nephrotic Syndrome',
    cues: [
      'Nephrotic: proteinuria >3.5 g/day, hypoalbuminemia, generalized edema, hyperlipidemia, lipiduria. Oval fat bodies ("Maltese cross" on polarized light)',
      'Minimal Change Disease (MCD): #1 nephrotic in children. LM: normal. EM: podocyte foot process effacement. IF: negative. Responds to steroids. Associated: Hodgkin lymphoma, NSAIDs',
      'FSGS: #1 nephrotic in adults (especially African Americans). HIV (collapsing variant), heroin, obesity, sickle cell. LM: segmental sclerosis. EM: foot process effacement. Poor steroid response',
      'Membranous Nephropathy: #1 nephrotic in white adults. LM: thickened GBM. EM: subepithelial spike-and-dome deposits. IF: granular IgG+C3. Anti-PLA2R antibody. Secondary: HBV, SLE, drugs (gold, penicillamine, captopril), solid tumors',
      'Diabetic Nephropathy: Kimmelstiel-Wilson nodules (mesangial nodular sclerosis). ↑ GFR → microalbuminuria → overt proteinuria. ACEi/ARB first-line (↓ efferent constriction → ↓ GFR → ↓ proteinuria)',
      'Amyloidosis: Congo red, apple-green birefringence. ↑ risk nephrotic syndrome + restrictive cardiomyopathy',
    ]
  },

  '12.4': {
    title: 'Nephritic Syndrome',
    cues: [
      'Nephritic: hematuria + RBC casts, HTN, azotemia (↑ BUN/Cr), oliguria, mild-moderate proteinuria. RBC casts = pathognomonic (formed in tubules)',
      'Poststreptococcal GN: 2–3 weeks after pharyngitis (M types 12) or impetigo (M types 49). LM: hypercellular glomeruli, PMN infiltrate. EM: subepithelial humps. IF: lumpy-bumpy IgG+C3. ↓ C3. Self-resolving in children',
      'IgA Nephropathy (Berger): #1 nephritis worldwide. Mesangial IgA deposits. Hematuria 1–3 days after URI or GI infection (concurrent, not delayed). Normal complement. May progress to CRF',
      'Lupus nephritis Class IV (diffuse proliferative): wire-loop lesions (subendothelial deposits). ↓ C3/C4. ANA + anti-dsDNA. Most severe; requires aggressive treatment',
      'MPGN Type I: tram-track GBM (mesangial interposition). ↓ C3. Associated: HCV, cryoglobulinemia, SLE. Subendothelial deposits',
      'Alport syndrome: X-linked COL4A5 mutation. EM: irregular thinning/splitting of lamina densa. Hematuria + sensorineural hearing loss + ocular defects. No treatment; progresses to ESRD',
    ]
  },

  '12.5-12.7': {
    title: 'UTI, Nephrolithiasis & Chronic Renal Failure',
    cues: [
      'UTI organisms: E. coli #1 (mannose-binding fimbriae). Staph saprophyticus: young sexually active women. Klebsiella: diabetics/alcoholics. Proteus: alkaline urine, ammonia smell, struvite stones. Pseudomonas: hospital/catheter',
      'Pyelonephritis: fever + flank pain + CVA tenderness + WBC casts (pathognomonic). Acute: PMN infiltrate with abscesses. Chronic: blunted calyces + cortical scarring (reflux or obstruction)',
      'Calcium oxalate (75%): envelope/dumbbell shaped, radiopaque. Associated: Crohn\'s (↑ fat → ↑ oxalate absorption), hypercalciuria, hypocitraturia. Low urine citrate → stone formation',
      'Struvite (Mg-NH4-PO4): staghorn calculi, radiopaque, alkaline urine. Urease⁺ bacteria (Proteus, Klebsiella, Staph). Recur unless surgically removed',
      'Uric acid: radiolucent, acidic urine (pH <5.5). Gout, leukemia/lymphoma (↑ cell turnover). Alkalinize urine with K-citrate to dissolve',
      'Cystine: hexagonal crystals, radiopaque, acidic urine. COLA defect (Cystine, Ornithine, Lysine, Arginine). Nitroprusside test (+)',
      'Chronic Renal Failure: GFR <60 for ≥3 months. Uremic complications: pericarditis, peripheral neuropathy, asterixis, platelet dysfunction. ↓ EPO → normocytic anemia. ↓ 1α-hydroxylase → ↓ Ca²⁺ → ↑ PTH → renal osteodystrophy. Metabolic acidosis, hyperkalemia',
    ]
  },

  '12.8': {
    title: 'Renal Neoplasia',
    cues: [
      'Renal Cell Carcinoma (RCC): #1 renal malignancy in adults. Clear cell (75%): VHL gene deletion (chr 3p) → ↑ HIF → ↑ VEGF + EPO. Risk: smoking, obesity, HTN',
      'Classic triad: hematuria + flank pain + palpable mass (seen late; suggests advanced disease)',
      'Paraneoplastic syndromes: ↑ EPO → polycythemia; ↑ PTHrP → hypercalcemia; ↑ renin → HTN; ↑ ACTH → Cushing\'s',
      'Spreads hematogenously to lungs ("cannonball" metastases), bone, brain. Invades renal vein → IVC → right heart (tumor thrombus)',
      'Von Hippel-Lindau (VHL): bilateral/multifocal RCC + cerebellar hemangioblastoma + pheochromocytoma + retinal angioma',
      'Wilms tumor (nephroblastoma): #1 renal tumor in children (peak 3–4 yrs). WT1/WT2 mutation. Painless abdominal mass. Beckwith-Wiedemann syndrome (WT2). Treat: nephrectomy + chemo ± radiation. Good prognosis',
      'Oncocytoma: benign, mahogany-brown, central scar. Large eosinophilic cells packed with mitochondria. Cannot distinguish from RCC on imaging → nephrectomy',
    ]
  },

  '12.9': {
    title: 'Lower Urinary Tract Carcinoma',
    cues: [
      'Transitional Cell Carcinoma (TCC/urothelial): #1 bladder cancer. Presents with painless hematuria. Risk factors: Smoking (#1 in US), aniline dyes, cyclophosphamide, phenacetin',
      'Papillary TCC: low grade, exophytic, frequently recurs (field defect), rarely invades muscle. Treated with TURBT + intravesical BCG',
      'Flat CIS: high grade, aggressive → ↑ risk progression to invasive disease',
      'Squamous Cell Carcinoma: Schistosoma haematobium infection (#1 worldwide cause; eggs → chronic inflammation → squamous metaplasia → SCC). Also: chronic cystitis, bladder stones',
      'Adenocarcinoma: rare. Urachal remnant (dome of bladder) or bladder exstrophy. Associated with signet ring cells',
      'Staging determines treatment: superficial (Ta/T1/CIS) → TURBT ± BCG; muscle-invasive (≥T2) → radical cystectomy + neoadjuvant cisplatin-based chemo',
    ]
  },

};

/* ── Highlight storage ────────────────────────────────────────────── */
const HL_LS_KEY = 'pathoma_highlights';
let _highlights = {};

function _loadHighlights() {
  try { _highlights = JSON.parse(localStorage.getItem(HL_LS_KEY) || '{}'); }
  catch(e) { _highlights = {}; }
}
function _saveHighlights() {
  localStorage.setItem(HL_LS_KEY, JSON.stringify(_highlights));
}
function _getHLs(vid) { return _highlights[vid] || []; }
function _addHL(vid, text) {
  if (!text || text.length < 2) return;
  if (!_highlights[vid]) _highlights[vid] = [];
  if (!_highlights[vid].includes(text)) {
    _highlights[vid].push(text);
    _saveHighlights();
  }
}
function _clearHLs(vid) {
  _highlights[vid] = [];
  _saveHighlights();
}

function _esc(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _applyHighlights(text, hls) {
  let out = _esc(text);
  for (const hl of hls) {
    if (!hl) continue;
    const safe = _esc(hl).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out.replace(new RegExp(safe, 'g'), '<mark>$&</mark>');
  }
  return out;
}

/* ── Render cue panel ─────────────────────────────────────────────── */
function renderCuePanel(videoId) {
  const titleEl   = document.getElementById('cue-vid-title');
  const contentEl = document.getElementById('cue-content');
  const hlCountEl = document.getElementById('cue-hl-count');
  if (!contentEl) return;

  const card = CUE_CARDS[videoId];
  const hls  = _getHLs(videoId);

  if (titleEl) titleEl.textContent = videoId ? videoId + (card ? ' · ' + card.title : '') : '';
  if (hlCountEl) hlCountEl.textContent = hls.length ? hls.length + ' highlighted' : '';

  if (!card) {
    contentEl.innerHTML = '<p class="cue-empty">No cue cards yet for this video — coming soon.</p>';
    return;
  }

  contentEl.innerHTML =
    '<ul class="cue-list">' +
    card.cues.map(c => '<li>' + _applyHighlights(c, hls) + '</li>').join('') +
    '</ul>';
}

function cuePanelHighlight(videoId) {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed) return;
  const text = sel.toString().trim();
  if (!text) return;
  _addHL(videoId, text);
  sel.removeAllRanges();
  renderCuePanel(videoId);
}

function cuePanelClearHighlights(videoId) {
  _clearHLs(videoId);
  renderCuePanel(videoId);
}

_loadHighlights();

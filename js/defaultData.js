/* defaultData.js – Step 1 content organized by official USMLE organ systems */
window.DEFAULT_DATA = {
  version: '2.0',
  settings: { darkMode: false, sidebarOpen: true },
  steps: {
    step1: {
      label: 'Step 1',
      categories: {

        /* ════════════════════════════════════════════════════════
           1. REPRODUCTIVE & ENDOCRINE  12–16%  ← HIGHEST WEIGHT
           ════════════════════════════════════════════════════════ */
        endo_repro: {
          label: 'Reproductive & Endocrine', icon: '🔬',
          cards: {},
          subcategories: {
            endocrine_physiology: {
              label: 'Endocrine Physiology',
              summary: 'Hormone signaling, feedback loops, DM physiology, thyroid/adrenal axes. High-yield for Step 1.',
              cards: {
                'er_ep1': { id:'er_ep1', title:'Diabetes Mellitus – Type 1 vs Type 2', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>T1DM</b>: autoimmune destruction of β-cells (anti-GAD, anti-islet); absolute insulin deficiency; DKA-prone; HLA-DR3/DR4; onset childhood</li>
<li><b>T2DM</b>: insulin resistance → relative deficiency; obese adults; HONK/HHS not DKA; strong genetic component</li>
<li><b>DKA</b>: T1 > T2; hyperglycemia + anion-gap metabolic acidosis + ketones; Kussmaul breathing; fruity breath; treat: IV insulin + fluids + K+ (watch for ↓K with insulin)</li>
<li><b>HHS</b>: T2; extreme hyperglycemia (>600) + hyperosmolarity; NO ketosis; higher mortality; treat: IV fluids first</li>
<li><b>Microvascular complications</b>: nephropathy (nodular glomerulosclerosis = Kimmelstiel-Wilson), retinopathy (non-proliferative → proliferative), neuropathy (glove-stocking)</li>
<li><b>Macrovascular</b>: CAD #1 killer in DM, stroke, PVD</li>
</ul><p><b>Dx criteria</b>: FPG ≥126, 2-hr OGTT ≥200, HbA1c ≥6.5%, random glucose ≥200 with symptoms</p>` },
                'er_ep2': { id:'er_ep2', title:'Thyroid Disorders', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Synthesis</b>: I− uptake (NIS) → thyroglobulin iodination (TPO) → T4 (major) + T3 (more active); T4 → T3 by deiodinase in periphery</li>
<li><b>Graves'</b>: TSI (TSH-receptor stimulating Ab); hyperthyroidism + goiter + exophthalmos + pretibial myxedema; #1 hyperthyroid cause in US; Rx: methimazole/PTU, RAI, thyroidectomy</li>
<li><b>Hashimoto's</b>: anti-TPO + anti-thyroglobulin Ab; lymphocytic infiltration; Hürthle cells; hypothyroidism; risk of B-cell lymphoma</li>
<li><b>Subacute (de Quervain's)</b>: granulomatous; post-viral; tender thyroid; hyper → hypo → normal; ↑ESR; Rx: NSAIDs</li>
<li><b>Hypothyroid S/S</b>: cold intolerance, weight gain, constipation, bradycardia, myxedema, macroglossia, delayed DTRs, periorbital edema, hyponatremia</li>
<li><b>Hyperthyroid S/S</b>: heat intolerance, weight loss, diarrhea, tachycardia/afib, anxiety, fine tremor, lid lag</li>
<li><b>Thyroid storm</b>: precipitated by surgery/infection; high fever + CV collapse; propranolol + PTU + steroids + iodine (Wolff-Chaikoff)</li>
</ul>` },
                'er_ep3': { id:'er_ep3', title:'Adrenal Disorders', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Cortisol</b>: zona fasciculata; diurnal rhythm; stress response; ↑gluconeogenesis, ↓inflammation, ↓immune</li>
<li><b>Cushing's</b>: hypercortisolism; central obesity, moon face, buffalo hump, purple striae, HTN, DM, osteoporosis, hirsutism; Cushing disease = pituitary adenoma (ACTH ↑ bilateral adrenal hyperplasia); most common cause = exogenous steroids</li>
<li><b>Primary Addison's</b>: autoimmune adrenal destruction; ↓cortisol + ↓aldosterone; hyperpigmentation (↑MSH/ACTH), hyponatremia, hyperkalemia, hypotension; Waterhouse-Friderichsen = adrenal hemorrhage in meningococcemia</li>
<li><b>Conn's (Primary Hyperaldosteronism)</b>: adrenal adenoma → ↑aldosterone; HTN + hypokalemia + metabolic alkalosis; low renin; Rx: spironolactone</li>
<li><b>Pheochromocytoma</b>: catecholamine-secreting tumor (90% adrenal medulla); episodic HTN + headache + diaphoresis + palpitations; ↑urine VMA/metanephrines; rule of 10s; Rx: α-block FIRST (phenoxybenzamine) then β-block then surgery</li>
<li><b>CAH (21-hydroxylase ↓)</b>: most common; ↓cortisol + ↓aldosterone + ↑androgens; salt-wasting + virilization in females; hyponatremia + hyperkalemia + hypoglycemia</li>
</ul>` }
              }
            },
            reproductive_phys: {
              label: 'Reproductive Physiology & Pathology',
              summary: 'HPG axis, menstrual cycle, pregnancy physiology, common reproductive cancers.',
              cards: {
                'er_rp1': { id:'er_rp1', title:'Menstrual Cycle & HPG Axis', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Follicular phase (days 1–14)</b>: FSH → follicle growth → ↑estrogen → LH surge at day 14 → ovulation</li>
<li><b>Luteal phase (days 14–28)</b>: corpus luteum → progesterone dominant → prepares endometrium for implantation; if no fertilization → corpus albicans → ↓P4 → menstruation</li>
<li><b>Estrogen effects</b>: endometrial proliferation, positive LH feedback (mid-cycle), ↑SHBG, ↑clotting factors, ↑HDL, ↓LDL, bone density</li>
<li><b>Progesterone effects</b>: decidualization, ↓uterine contraction, thickens cervical mucus, negative feedback on LH/FSH, basal body temperature ↑</li>
<li><b>PCOS</b>: LH:FSH >2, ↑androgens, insulin resistance, anovulation; polycystic ovaries on US; risk of endometrial hyperplasia; Rx: OCP (or metformin if insulin resistant), clomiphene for fertility</li>
<li><b>Turner syndrome (45,X)</b>: primary amenorrhea, streak gonads, short stature, webbed neck, bicuspid aortic valve, coarctation; ↑FSH/LH (no negative feedback)</li>
</ul>` },
                'er_rp2': { id:'er_rp2', title:'Pregnancy Physiology & Complications', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>hCG</b>: from syncytiotrophoblast; maintains corpus luteum in 1st trimester; double time 48h early; molar pregnancy → markedly ↑hCG</li>
<li><b>CV changes in pregnancy</b>: ↑blood volume 50%, ↑CO, ↓SVR, ↓BP (2nd trimester), dilutional anemia, ↑HR</li>
<li><b>Ectopic pregnancy</b>: ampulla most common; risk: PID, prior ectopic, IUD; β-hCG+ but no IUP on US; may rupture → hemoperitoneum (shoulder pain)</li>
<li><b>Preeclampsia</b>: HTN (≥140/90) + proteinuria after 20 weeks; ↑uric acid; Rx: MgSO4 (seizure prophylaxis), labetalol; definitive = delivery</li>
<li><b>Eclampsia</b>: preeclampsia + seizures; MgSO4 treatment</li>
<li><b>Placenta previa</b>: placenta covers os; painless bright red 3rd-trimester bleeding; NO vaginal exam; C-section</li>
<li><b>Abruptio placentae</b>: painful dark bleeding; trauma, cocaine, HTN; can cause DIC; emergency delivery</li>
<li><b>HELLP</b>: Hemolysis + Elevated LFTs + Low Platelets; variant of severe preeclampsia; deliver</li>
</ul>` },
                'er_rp3': { id:'er_rp3', title:'Ovarian & Uterine Tumors', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Most common ovarian tumor</b>: serous cystadenoma (benign epithelial)</li>
<li><b>Most common malignant ovarian tumor</b>: serous cystadenocarcinoma; psammoma bodies; CA-125 marker</li>
<li><b>Dermoid cyst (mature teratoma)</b>: germ cell; hair/teeth/sebum; benign in adults; may undergo malignant transformation</li>
<li><b>Krukenberg tumor</b>: GI cancer (gastric signet ring cells) metastatic to ovary</li>
<li><b>Endometrial cancer</b>: #1 GYN malignancy in US; post-menopausal bleeding; risk: unopposed estrogen, obesity, PCOS, tamoxifen, Lynch; endometrioid type most common</li>
<li><b>Cervical cancer</b>: HPV 16,18; squamocolumnar junction; Pap smear screening; CIN → carcinoma in situ → invasive; Rx: excision/cone biopsy vs chemo-radiation</li>
<li><b>Leiomyoma (fibroids)</b>: benign smooth muscle; estrogen-sensitive; most common pelvic tumor in women; heavy menses, pelvic pressure; ↓with menopause</li>
</ul>` }
              }
            },
            endocrine_pharm: {
              label: 'Endocrine Pharmacology',
              summary: 'Diabetes drugs, thyroid drugs, steroid principles, oral contraceptives.',
              cards: {
                'er_phm1': { id:'er_phm1', title:'Diabetes Medications', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Metformin</b>: biguanide; ↓hepatic gluconeogenesis; first-line T2DM; lactic acidosis (hold in renal failure/contrast); no hypoglycemia; weight neutral/loss; ↑AMPK</li>
<li><b>Sulfonylureas (glipizide, glibenclamide)</b>: close KATP → insulin secretion; hypoglycemia risk; weight gain; disulfiram-like with alcohol</li>
<li><b>GLP-1 agonists (liraglutide, semaglutide)</b>: ↑insulin, ↓glucagon, ↓appetite, ↓gastric emptying; weight loss; CV benefit; GI side effects; pancreatitis risk</li>
<li><b>DPP-4 inhibitors (-gliptins)</b>: ↑GLP-1 & GIP; modest effect; weight neutral; nasopharyngitis; joint pain</li>
<li><b>SGLT-2 inhibitors (-flozins)</b>: ↓glucose reabsorption in PCT; glucosuria; weight loss; ↓BP; CV and renal protection; UTI/genital yeast infections; DKA risk (even euglycemic)</li>
<li><b>Insulin types</b>: rapid (lispro/aspart – prandial), regular (short), NPH (intermediate), glargine/detemir (basal – no peak); insulin → hypokalemia (K+ shift into cells)</li>
<li><b>Thiazolidinediones (pioglitazone)</b>: PPARγ agonist → ↑insulin sensitivity; fluid retention, CHF risk, bladder cancer (pioglitazone), bone fractures</li>
</ul>` }
              }
            }
          }
        },

        /* ════════════════════════════════════════════════════════
           2. RESPIRATORY & RENAL/URINARY  11–15%
           ════════════════════════════════════════════════════════ */
        resp_renal: {
          label: 'Respiratory & Renal/Urinary', icon: '🫁',
          cards: {},
          subcategories: {
            pulm_physiology: {
              label: 'Pulmonary Physiology',
              summary: 'Spirometry, V/Q, gas exchange, ventilation-perfusion. Essential for interpreting pulmonary function tests.',
              cards: {
                'rr_pp1': { id:'rr_pp1', title:'Pulmonary Volumes & Spirometry', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>TV</b> (500 mL) – tidal volume; normal breath</li>
<li><b>IRV / ERV</b> – above/below TV; measured by spirometry</li>
<li><b>RV (residual volume)</b> – CANNOT be measured by spirometry; use helium dilution or body plethysmography</li>
<li><b>FRC</b> = ERV + RV; TLC = VC + RV; VC = IRV + TV + ERV</li>
<li><b>Obstructive (FEV1/FVC &lt; 0.7)</b>: ↑TLC, ↑RV, ↑FRC; asthma, COPD, emphysema; air trapping</li>
<li><b>Restrictive (FEV1/FVC normal or ↑; ↓TLC)</b>: pulmonary fibrosis, sarcoidosis, neuromuscular disease</li>
<li><b>Diffusion capacity (DLCO)</b>: ↑in polycythemia/asthma; ↓in emphysema, fibrosis, anemia, PE</li>
</ul>` },
                'rr_pp2': { id:'rr_pp2', title:'V/Q Mismatch & Gas Exchange', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Normal V/Q ≈ 0.8</b>; apex V/Q ≈ 3 (over-ventilated, under-perfused); base V/Q ≈ 0.6 (under-ventilated, over-perfused)</li>
<li><b>Dead space (V/Q = ∞)</b>: ventilated, not perfused → PE, emphysema; ↑PACO2 in expired air equation</li>
<li><b>Shunt (V/Q = 0)</b>: perfused, not ventilated → atelectasis, pneumonia, ARDS; does NOT respond to 100% O2</li>
<li><b>Alveolar gas equation</b>: PAO2 = FiO2 × (Patm − PH2O) − PaCO2/R; A-a gradient = PAO2 − PaO2 (normal &lt;15)</li>
<li><b>↑A-a gradient with normal PaCO2</b>: shunt, V/Q mismatch, diffusion impairment</li>
<li><b>CO2 transport</b>: 70% as bicarbonate (carbonic anhydrase), 23% Hgb-bound, 7% dissolved</li>
<li><b>O2 dissociation curve right shift (↑O2 unloading)</b>: ↑CO2, ↑H+ (↓pH), ↑temp, ↑2,3-BPG; exercise physiology</li>
</ul>` }
              }
            },
            pulm_pathology: {
              label: 'Pulmonary Pathology',
              summary: 'COPD, asthma, fibrosis, pneumonia, lung cancer. Key distinguishing features.',
              cards: {
                'rr_ppath1': { id:'rr_ppath1', title:'Obstructive Lung Diseases', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Emphysema</b>: alveolar wall destruction (elastase > α1-antitrypsin); ↑TLC, ↑RV; "pink puffer" (barrel chest, pursed-lip breathing); centriacinar (smoking) vs panacinar (α1-AT deficiency)</li>
<li><b>Chronic bronchitis</b>: productive cough ≥3 months/yr × ≥2 yrs; mucus hypersecretion; Reid index >0.5; "blue bloater"; hypoxia, hypercapnia, polycythemia</li>
<li><b>Asthma</b>: reversible bronchoconstriction; eosinophils + Charcot-Leyden crystals + Curschmann spirals; hyper-reactive airways; Th2/IgE-mediated; spirometry normalizes with bronchodilator; status asthmaticus = emergency</li>
<li><b>Bronchiectasis</b>: permanent airway dilation; CF, Kartagener, post-obstructive; chronic productive cough; hemoptysis; treat underlying cause</li>
<li><b>α1-Antitrypsin deficiency</b>: panacinar emphysema + liver disease (cirrhosis); PAS+ Schiff-positive globules in hepatocytes; AR; PIZZ genotype</li>
</ul>` },
                'rr_ppath2': { id:'rr_ppath2', title:'Restrictive Lung Disease & Pneumonia', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>IPF (Idiopathic Pulmonary Fibrosis)</b>: TGF-β, fibroblast activation; honeycombing on CT; dry cough + dyspnea; "Velcro" crackles; clubbing; ↓DLCO; median survival 3–5 yrs; Rx: nintedanib/pirfenidone</li>
<li><b>Sarcoidosis</b>: noncaseating granulomas; African-American women; bilateral hilar adenopathy; ↑ACE; ↑Ca2+ (granulomas make calcitriol); erythema nodosum; iritis; Rx: steroids</li>
<li><b>Pneumonia bugs by pattern</b>:
  <ul>
    <li>Lobar (consolidation): S. pneumoniae (#1 typical), Klebsiella (currant jelly sputum)</li>
    <li>Interstitial ("atypical"): Mycoplasma, Chlamydophila, Legionella, viruses</li>
    <li>Aspiration: anaerobes (Peptostreptococcus, Fusobacterium); right lower lobe (supine)</li>
    <li>Immunocompromised: PCP (Pneumocystis jirovecii – TMP-SMX), CMV, Aspergillus</li>
  </ul>
</li>
<li><b>ARDS</b>: diffuse alveolar damage; non-cardiogenic pulmonary edema; ↓PaO2/FiO2 (&lt;200 = ARDS); bilateral infiltrates; increased membrane permeability; hyaline membranes; low tidal volume ventilation</li>
</ul>` },
                'rr_ppath3': { id:'rr_ppath3', title:'Lung Cancer', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Adenocarcinoma</b>: most common (esp women/non-smokers); peripheral; EGFR mutation; bronchioloalveolar variant = grows along septa; mucin-producing glands</li>
<li><b>Squamous cell</b>: central; cavitates; ↑PTHrP (hypercalcemia); keratin pearls + intercellular bridges; smoking</li>
<li><b>Small cell (SCLC)</b>: central; most aggressive; smoking; paraneoplastic syndromes: SIADH, ACTH, Lambert-Eaton (Ca2+ channel Ab); Kulchitsky cells; neuron-specific enolase; chemo (not resectable)</li>
<li><b>Large cell</b>: peripheral; undifferentiated; poor prognosis; anaplastic giant cells</li>
<li><b>Mesothelioma</b>: asbestos exposure; pleura; NOT lung parenchyma; calretinin+; long latency; poor prognosis</li>
<li><b>Pancoast tumor</b>: apex → Horner's (ptosis/miosis/anhidrosis) + brachial plexus</li>
<li><b>SVC syndrome</b>: central tumor → SVC compression; facial/neck swelling, arm edema</li>
</ul>` }
              }
            },
            renal_physiology: {
              label: 'Renal Physiology',
              summary: 'GFR, tubule transport, acid-base disorders, electrolytes. One of the most-tested physiology areas.',
              cards: {
                'rr_rp1': { id:'rr_rp1', title:'Renal Tubule Transport', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Proximal tubule</b>: 67% Na/H2O; ALL glucose + amino acids; HCO3−, phosphate, urate; isotonic reabsorption; carbonic anhydrase → acetazolamide inhibits</li>
<li><b>Thin descending loop</b>: water only (H2O permeable, solute impermeable) → concentrates urine</li>
<li><b>Thick ascending loop</b>: NKCC2 (Na-K-2Cl); impermeable to H2O → dilutes filtrate; site of furosemide</li>
<li><b>DCT</b>: NCC (Na-Cl); thiazide target; PTH → Ca2+ reabsorption; early DCT</li>
<li><b>Collecting duct</b>: ENaC (aldosterone → ↑Na/↑K secretion); AQP2 (ADH/vasopressin → ↑H2O); principal cells; α-intercalated cells (H+ secretion)</li>
<li><b>Filtered load</b> = GFR × Plasma concentration; GFR estimated by creatinine clearance</li>
<li><b>Inulin</b> (filtered+not reabsorbed) = ideal marker for GFR; PAH (filtered+secreted) = RPF marker</li>
</ul>` },
                'rr_rp2': { id:'rr_rp2', title:'Acid-Base Disorders', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<table style="width:100%;border-collapse:collapse;font-size:13px">
<tr style="background:var(--border)"><th style="padding:6px;text-align:left">Disorder</th><th>pH</th><th>HCO3</th><th>PaCO2</th><th>Key Causes</th></tr>
<tr><td style="padding:5px"><b>Metabolic Acidosis</b></td><td>↓</td><td>↓↓ (primary)</td><td>↓ (compensation)</td><td>AG: DKA, lactic acidosis, methanol/EG, renal failure; Non-AG: diarrhea, RTA</td></tr>
<tr><td><b>Metabolic Alkalosis</b></td><td>↑</td><td>↑↑ (primary)</td><td>↑ (compensation)</td><td>Vomiting, loop/thiazide diuretics, Conn's, Cushing's</td></tr>
<tr><td><b>Respiratory Acidosis</b></td><td>↓</td><td>↑ (compensation)</td><td>↑↑ (primary)</td><td>Hypoventilation: COPD, opioids, neuromuscular, PE</td></tr>
<tr><td><b>Respiratory Alkalosis</b></td><td>↑</td><td>↓ (compensation)</td><td>↓↓ (primary)</td><td>Hyperventilation: anxiety, altitude, pregnancy, PE, salicylate (early)</td></tr>
</table>
<p style="margin-top:10px"><b>AG</b> = Na − (Cl + HCO3); normal 8–12; ↑AG = MUDPILES (Methanol, Uremia, DKA, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates)</p>
<p><b>Winter's formula</b> (expected PCO2 in metabolic acidosis): 1.5 × HCO3 + 8 ± 2</p>` }
              }
            },
            renal_pathology: {
              label: 'Renal Pathology & Pharmacology',
              summary: 'Glomerulonephritis, nephrotic/nephritic syndromes, diuretics, AKI/CKD.',
              cards: {
                'rr_rpth1': { id:'rr_rpth1', title:'Nephrotic vs Nephritic Syndromes', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Nephrotic</b>: massive proteinuria (>3.5g/day) → hypoalbuminemia → edema, hyperlipidemia, lipiduria; hypercoagulable (loss of AT-III/protein C/S → renal vein thrombosis)</li>
<li><b>Nephritic</b>: hematuria (RBC casts!) + proteinuria + HTN + oliguria + azotemia; inflammation + immune complex deposition</li>
<li><b>Minimal change disease</b>: nephrotic; children; effacement of podocyte foot processes (EM); responds to steroids; associated with Hodgkin lymphoma</li>
<li><b>FSGS</b>: nephrotic; focal segmental glomerulosclerosis; African-Americans, HIV, heroin; poor prognosis</li>
<li><b>MPGN</b>: tram-track on PAS (GBM splitting); C3 ↓; Hep B/C, SLE</li>
<li><b>Post-strep GN</b>: nephritic; 1–3 weeks post-pharyngitis; subepithelial "humps" on EM; granular IF; M-protein strains; complement ↓; self-limited</li>
<li><b>IgA nephropathy (Berger's)</b>: nephritic; mesangial IgA deposits; hematuria with URI; complement normal; most common GN worldwide</li>
<li><b>RPGN</b>: crescent formation; rapid deterioration; Goodpasture's (anti-GBM, linear IF), Granulomatosis with polyangiitis (c-ANCA)</li>
</ul>` },
                'rr_rpth2': { id:'rr_rpth2', title:'Diuretics', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Acetazolamide</b> (PCT, carbonic anhydrase inhibitor): ↓HCO3 reabsorption → metabolic acidosis; glaucoma, altitude sickness, alkalosis correction; sulfa drug</li>
<li><b>Loop diuretics (furosemide)</b> (thick ascending loop, NKCC2 inhibitor): most potent; ↓Na, ↓K, ↓Mg, ↓Ca; metabolic alkalosis; ototoxicity; used in acute pulmonary edema, hypercalcemia, HTN, CHF; sulfa drug</li>
<li><b>Thiazides (HCTZ, chlorthalidone)</b> (DCT, NCC inhibitor): ↓Na, ↓K, ↓Cl; ↑Ca (use in nephrolithiasis); metabolic alkalosis; hyperglycemia, hyperlipidemia; sulfa drug</li>
<li><b>K+-sparing: spironolactone</b> (aldosterone antagonist, competitive): ↑K+; metabolic acidosis; gynecomastia, anti-androgen effects; use in Conn's, CHF, cirrhosis with ascites</li>
<li><b>K+-sparing: amiloride/triamterene</b> (ENaC blockers): ↑K+; metabolic acidosis; amiloride used with lithium toxicity</li>
<li><b>Osmotic: mannitol</b>: ↑osmolality → pulls water out; cerebral edema, glaucoma; contraindicated in CHF/anuria</li>
</ul>` }
              }
            }
          }
        },

        /* ════════════════════════════════════════════════════════
           3. BEHAVIORAL HEALTH & NERVOUS SYSTEMS  10–14%
           ════════════════════════════════════════════════════════ */
        neuro_behav: {
          label: 'Behavioral Health & Nervous Systems', icon: '🧠',
          cards: {},
          subcategories: {
            neuroanatomy: {
              label: 'Neuroanatomy & Neuropathology',
              summary: 'Brain regions, cranial nerves, spinal cord tracts, stroke syndromes, CNS tumors, demyelinating disease.',
              cards: {
                'nb_na1': { id:'nb_na1', title:'Stroke Syndromes', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>MCA (most common)</b>: contralateral hemiplegia (face/arm > leg) + hemisensory loss + homonymous hemianopia; dominant (L): aphasia (Broca = non-fluent, frontal; Wernicke = fluent sensory, temporal); neglect if non-dominant</li>
<li><b>ACA</b>: contralateral leg weakness > arm; incontinence; abulia</li>
<li><b>PCA</b>: contralateral homonymous hemianopia with macular sparing; visual hallucinations</li>
<li><b>Basilar artery (locked-in syndrome)</b>: quadriplegia + cranial nerve deficits; patient conscious but cannot move except vertical gaze</li>
<li><b>Lateral medullary (Wallenberg/PICA)</b>: ipsilateral face pain/temp loss + ipsilateral Horner's; contralateral body pain/temp; dysphagia/hoarseness (CN IX/X); vertigo/nystagmus</li>
<li><b>Lacunar infarcts</b>: small vessel disease; pure motor or pure sensory; HTN, DM</li>
<li><b>Hemorrhagic stroke</b>: epidural (MMA, biconvex) vs subdural (bridging veins, crescent) vs subarachnoid (berry aneurysm, "worst headache of life") vs intracerebral (HTN → basal ganglia)</li>
</ul>` },
                'nb_na2': { id:'nb_na2', title:'CNS Tumors', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Adults (most common primary)</b>: GBM (grade IV glioma) → pseudopalisading necrosis; EGFR amplification; butterfly pattern crossing corpus callosum; terrible prognosis (&lt;15 months)</li>
<li><b>Meningioma</b>: most common benign intracranial; attached to dura; psammoma bodies; EMA+; women; resectable</li>
<li><b>Acoustic neuroma (vestibular schwannoma)</b>: CN VIII; CPA angle; S-100+; bilateral → NF2; tinnitus, hearing loss, vertigo</li>
<li><b>Children</b>: pilocytic astrocytoma (cerebellum; Rosenthal fibers; benign); medulloblastoma (cerebellum; Homer Wright rosettes; most common malignant in children; can spread via CSF); craniopharyngioma (suprasellar; cholesterol crystals; calcified; from Rathke's pouch remnant)</li>
<li><b>Mets to brain</b>: #1 overall (lung > breast > melanoma/colon/kidney); multiple lesions at gray-white junction; "ring-enhancing" (also abscess, GBM, toxoplasma in HIV)</li>
<li><b>Oligodendroglioma</b>: "fried-egg" cells; 1p/19q deletion; relatively good prognosis; white matter; seizures</li>
</ul>` },
                'nb_na3': { id:'nb_na3', title:'Demyelinating Diseases', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Multiple sclerosis</b>: autoimmune; young white women; relapsing-remitting; periventricular plaques (Dawson's fingers on MRI); optic neuritis, internuclear ophthalmoplegia (MLF), foot drop, bladder dysfunction; ↑IgG in CSF, oligoclonal bands; periventricular + corpus callosum; Uhthoff (worsens with heat); Rx: interferon-β, glatiramer, natalizumab, ocrelizumab</li>
<li><b>Guillain-Barré (AIDP)</b>: ascending weakness + areflexia; post-infectious (Campylobacter, CMV, EBV); demyelination of peripheral nerves; CSF = cytoalbuminous dissociation (↑protein, normal cells); albumino-cytologic; respiratory failure; IV Ig or plasmapheresis</li>
<li><b>Charcot-Marie-Tooth</b>: hereditary motor/sensory neuropathy; PMP22 gene; "onion-bulb" Schwann cells; foot deformities</li>
<li><b>Central pontine myelinolysis</b>: too-rapid correction of hyponatremia; osmotic demyelination; quadriplegia, pseudobulbar palsy</li>
</ul>` }
              }
            },
            psychiatry: {
              label: 'Psychiatry & Behavioral Science',
              summary: 'DSM-5 diagnoses, psych pharmacology, Kübler-Ross, Piaget, Erikson, ethics, biostatistics.',
              cards: {
                'nb_ps1': { id:'nb_ps1', title:'Psychiatric Disorders High-Yield', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Schizophrenia</b>: positive Sx (hallucinations – auditory > visual, delusions, disorganized); negative Sx (flat affect, alogia, avolition, anhedonia); dopamine ↑ in mesolimbic; Rx: atypical antipsychotics (clozapine – agranulocytosis; olanzapine – metabolic syndrome)</li>
<li><b>MDD dx</b>: ≥2 weeks of depressed mood/anhedonia + ≥5 SIG-E-CAPS (Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality); serotonin/NE deficit; first-line: SSRIs</li>
<li><b>Bipolar I</b>: ≥1 manic episode (≥7 days or hospitalized); Bipolar II: hypomania + major depression; Cyclothymia: 2+ yrs; Rx: lithium (monitor levels/renal/thyroid), valproate, lamotrigine</li>
<li><b>GAD</b>: excessive worry >6 months; physical Sx (muscle tension, irritability, sleep problems); Rx: SSRIs/SNRIs, buspirone (5-HT1A partial agonist, no dependence, takes weeks)</li>
<li><b>Panic disorder</b>: recurrent unexpected panic attacks + 1 month concern/avoidance; Rx: SSRIs + CBT; acute: benzo</li>
<li><b>PTSD</b>: trauma → re-experiencing + avoidance + hyperarousal + cognition changes >1 month; Rx: SSRIs (sertraline/paroxetine FDA-approved), prazosin (nightmares)</li>
</ul>` },
                'nb_ps2': { id:'nb_ps2', title:'Psychotropic Drugs', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>SSRIs</b>: first-line depression/anxiety; serotonin syndrome risk (coadmin with MAOIs/tramadol/triptans); sexual dysfunction; GI effects; fluoxetine (longest half-life); paroxetine (most anticholinergic)</li>
<li><b>TCAs (amitriptyline, nortriptyline)</b>: block NE/5-HT reuptake + anticholinergic + antihistamine; OD = 3 Cs (Coma, Convulsions, Cardiotoxicity – widened QRS); treat OD with sodium bicarbonate</li>
<li><b>MAOIs (phenelzine, tranylcypromine)</b>: last resort; tyramine interaction (hypertensive crisis → avoid aged cheese, cured meats, red wine); serotonin syndrome with SSRIs</li>
<li><b>Lithium</b>: narrow therapeutic index (0.8–1.2 mEq/L); nephrogenic DI (polyuria → amiloride); hypothyroidism; teratogen (Ebstein's); neurotoxicity at high levels; NSAIDs/thiazides ↑levels</li>
<li><b>Typical antipsychotics (haloperidol)</b>: D2 block; EPS (akathisia, dystonia, parkinsonism, tardive dyskinesia); NMS (rigidity + hyperthermia + autonomic instability – Rx: dantrolene + bromocriptine)</li>
</ul>` },
                'nb_ps3': { id:'nb_ps3', title:'Biostatistics & Study Design', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<table style="width:100%;border-collapse:collapse;font-size:12px">
<tr style="background:var(--border)"><th style="padding:5px">Concept</th><th>Formula/Definition</th></tr>
<tr><td style="padding:5px"><b>Sensitivity (SnNout)</b></td><td>TP/(TP+FN); rules OUT if negative; screening tests</td></tr>
<tr><td><b>Specificity (SpPin)</b></td><td>TN/(TN+FP); rules IN if positive; confirmatory tests</td></tr>
<tr><td><b>PPV</b></td><td>TP/(TP+FP); ↑with ↑prevalence</td></tr>
<tr><td><b>NPV</b></td><td>TN/(TN+FN); ↑with ↓prevalence</td></tr>
<tr><td><b>Relative Risk</b></td><td>[a/(a+b)] / [c/(c+d)]; cohort/RCT; RR=1 → no association</td></tr>
<tr><td><b>Odds Ratio</b></td><td>ad/bc; case-control; approximates RR when prevalence low</td></tr>
<tr><td><b>Attributable Risk</b></td><td>Risk exposed − Risk unexposed; absolute risk reduction</td></tr>
<tr><td><b>NNT</b></td><td>1/ARR; lower = better treatment</td></tr>
<tr><td><b>Type I error (α)</b></td><td>Reject true H0; p-value = probability of type I error; false positive result</td></tr>
<tr><td><b>Type II error (β)</b></td><td>Fail to reject false H0; power = 1−β; false negative result</td></tr>
</table>` }
              }
            }
          }
        },

        /* ════════════════════════════════════════════════════════
           4. BLOOD & LYMPHORETICULAR / IMMUNE  9–13%
           ════════════════════════════════════════════════════════ */
        blood_immune: {
          label: 'Blood & Lymphoreticular / Immune', icon: '🩸',
          cards: {},
          subcategories: {
            hematology: {
              label: 'Hematology & Coagulation',
              summary: 'Anemias, leukemias, lymphomas, coagulation cascade, clotting disorders.',
              cards: {
                'bi_h1': { id:'bi_h1', title:'Anemias', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Iron deficiency (microcytic, ↓↓ferritin, ↑TIBC)</b>: most common; blood loss (GI/#1 in adults, menstrual); Plummer-Vinson (dysphagia + glossitis + iron def); Koilonychia; treat Fe sulfate</li>
<li><b>β-Thalassemia</b>: microcytic; ↑HbA2 and HbF; target cells; Mediterranean; β-thal major (transfusion-dependent); ↑iron → hemochromatosis</li>
<li><b>Sickle cell</b>: HbS (β6 Glu→Val); vaso-occlusion (pain crises, dactylitis, acute chest), splenic sequestration, aplastic crisis (parvovirus B19); ↑HbF (hydroxyurea) protective; Howell-Jolly bodies; autosplenectomy</li>
<li><b>B12 deficiency (megaloblastic)</b>: methylmalonic acid ↑ + homocysteine ↑; subacute combined degeneration (dorsal + lateral columns); anti-IF Ab → pernicious anemia</li>
<li><b>Folate deficiency (megaloblastic)</b>: homocysteine ↑ but methylmalonic acid normal; no neuro Sx; alcoholics, pregnancy; MTX blocks folate reduction</li>
<li><b>G6PD deficiency</b>: X-linked; Heinz bodies + bite cells; episodic hemolysis with oxidative stress (fava beans, dapsone, primaquine, sulfa)</li>
<li><b>Hereditary spherocytosis</b>: spectrin/ankyrin defect; MCHC ↑; splenomegaly; osmotic fragility test; splenectomy curative</li>
</ul>` },
                'bi_h2': { id:'bi_h2', title:'Leukemias & Lymphomas', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>CML</b>: BCR-ABL t(9;22) Philadelphia chromosome; myeloid proliferation; basophilia; blast crisis; Rx: imatinib (BCR-ABL TKI)</li>
<li><b>CLL</b>: CD5+ B cells; most common leukemia in adults; smudge cells; Richter transformation → DLBCL; Rx: ibrutinib, FCR</li>
<li><b>ALL</b>: most common leukemia in children; TdT+; t(12;21) in B-ALL good prognosis; Philadelphia ALL poor prognosis; CNS involvement; Rx: multi-drug chemo + CNS prophylaxis</li>
<li><b>AML</b>: Auer rods (M3 = APL → t(15;17) → ATRA therapy; DIC); myeloperoxidase+; adults; Rx: chemo ± ATRA</li>
<li><b>Hodgkin lymphoma</b>: Reed-Sternberg cells ("owl eyes" CD15/CD30+); contiguous spread; B symptoms; EBV; excellent prognosis; Rx: ABVD + radiation</li>
<li><b>Non-Hodgkin lymphoma</b>: Burkitt (t(8;14) c-MYC; "starry sky"; EBV; jaw mass/Africa); Follicular (t(14;18) BCL-2; indolent); DLBCL (most common adult NHL; BCL-6; aggressive but curable); Mantle cell (CD5+ but no CD23; cyclin D1)</li>
</ul>` },
                'bi_h3': { id:'bi_h3', title:'Coagulation & Bleeding Disorders', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Extrinsic pathway (PT/INR)</b>: factor VII + TF; warfarin-sensitive (II, VII, IX, X + protein C/S)</li>
<li><b>Intrinsic pathway (PTT)</b>: factors XII → XI → IX → VIII → X; heparin-sensitive (via AT-III, factors Xa and IIa)</li>
<li><b>Hemophilia A (factor VIII)</b>: X-linked; hemarthroses + deep tissue bleeding; ↑PTT, normal PT; Rx: factor VIII concentrate/desmopressin (mild)</li>
<li><b>vWD (most common hereditary)</b>: ↓vWF (VIII carrier + platelet adhesion); ↑bleeding time + ↑PTT; mucocutaneous bleeding; Rx: desmopressin (type 1)</li>
<li><b>DIC</b>: activation of both clotting and fibrinolysis; ↑PT, ↑PTT, ↓platelets, ↑D-dimer, ↓fibrinogen, schistocytes; causes: sepsis, APML (M3), trauma, amniotic fluid embolism, HELLP</li>
<li><b>Heparin-induced thrombocytopenia (HIT)</b>: anti-PF4 Ab → paradoxical thrombosis; ↓platelets 5–10 days; stop heparin → argatroban/bivalirudin (DTI)</li>
</ul>` }
              }
            },
            immunology: {
              label: 'Immunology & Immunodeficiencies',
              summary: 'Innate vs adaptive immunity, hypersensitivity reactions, autoimmune diseases, immunodeficiency syndromes.',
              cards: {
                'bi_im1': { id:'bi_im1', title:'Hypersensitivity Reactions', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<table style="width:100%;border-collapse:collapse;font-size:13px">
<tr style="background:var(--border)"><th style="padding:5px">Type</th><th>Mechanism</th><th>Examples</th></tr>
<tr><td style="padding:5px"><b>I (Anaphylactic)</b></td><td>IgE + mast cells/basophils → immediate; FAST</td><td>Anaphylaxis, asthma, urticaria, food allergies</td></tr>
<tr><td><b>II (Cytotoxic)</b></td><td>IgG/IgM → cell destruction (complement or ADCC)</td><td>Autoimmune hemolytic anemia, Goodpasture's, Graves', myasthenia gravis, transfusion rx</td></tr>
<tr><td><b>III (Immune complex)</b></td><td>IgG immune complex deposition → complement activation</td><td>SLE, post-strep GN, serum sickness, farmer's lung, rheumatoid arthritis</td></tr>
<tr><td><b>IV (Delayed/T-cell)</b></td><td>CD4+ T cells (Th1 → macrophage activation); NO antibody; 48–72h</td><td>Contact dermatitis (poison ivy), tuberculin PPD, graft rejection, Hashimoto's, MS</td></tr>
</table>` },
                'bi_im2': { id:'bi_im2', title:'Primary Immunodeficiencies', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Bruton's XLA</b>: X-linked; BTK mutation; no B cells/Ig; recurrent bacterial infections after 6 mo; absent germinal centers</li>
<li><b>DiGeorge (22q11 del)</b>: CATCH-22; no thymus → no T cells; tetany (↓Ca2+, no parathyroids); cardiac defects (conotruncal)</li>
<li><b>SCID</b>: no B + T cells; ADA deficiency (AR) or γc-chain (X-linked); ALL infections; "bubble boy"; stem cell transplant</li>
<li><b>Wiskott-Aldrich</b>: X-linked; triad WAS = eczema + thrombocytopenia + recurrent infections; WASp gene; ↑IgA/IgE, ↓IgM; treatment: BMT</li>
<li><b>CGD (Chronic Granulomatous Disease)</b>: NADPH oxidase defect → no respiratory burst → catalase+ organisms recur (S. aureus, Aspergillus, Nocardia); NBT (nitroblue tetrazolium) test; X-linked (gp91phox)</li>
<li><b>C1-esterase inhibitor deficiency (HAE)</b>: hereditary angioedema; recurrent non-pitting edema (face, larynx, GI); no urticaria; ↓C4; Rx: C1-INH concentrate</li>
<li><b>IgA deficiency</b>: most common; recurrent sinopulmonary + GI infections; anaphylaxis to blood products (anti-IgA); celiac association</li>
</ul>` }
              }
            }
          }
        },

        /* ════════════════════════════════════════════════════════
           5. MUSCULOSKELETAL, SKIN & SUBCUTANEOUS  8–12%
           ════════════════════════════════════════════════════════ */
        msk_skin: {
          label: 'Musculoskeletal, Skin & Subcutaneous', icon: '🦴',
          cards: {},
          subcategories: {
            musculoskeletal: {
              label: 'Musculoskeletal & Rheumatology',
              summary: 'Arthritis types, bone pathology, muscle disorders, connective tissue diseases.',
              cards: {
                'ms_msk1': { id:'ms_msk1', title:'Arthritis Comparison', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<table style="width:100%;border-collapse:collapse;font-size:12px">
<tr style="background:var(--border)"><th style="padding:5px">Feature</th><th>OA</th><th>RA</th><th>Gout</th><th>Pseudogout</th></tr>
<tr><td style="padding:4px"><b>Crystal</b></td><td>—</td><td>—</td><td>MSU (needle, -birefringent)</td><td>CPPD (rhomboid, +birefringent)</td></tr>
<tr><td><b>Joints</b></td><td>DIP/PIP/hips/knees</td><td>MCP/PIP/wrists (symmetric)</td><td>1st MTP (podagra)</td><td>Knee most common</td></tr>
<tr><td><b>Labs</b></td><td>Normal</td><td>↑RF, ↑anti-CCP, ↑ESR/CRP</td><td>↑uric acid</td><td>Ca2+ pyrophosphate on xray</td></tr>
<tr><td><b>Path</b></td><td>Cartilage loss, osteophytes, subchondral sclerosis</td><td>Pannus, Baker's cyst, swan-neck, boutonniere deformity</td><td>Tophi, interstitial nephritis</td><td>Chondrocalcinosis</td></tr>
<tr><td><b>Rx acute</b></td><td>NSAIDs, PT</td><td>NSAIDs + DMARDs (MTX)</td><td>NSAIDs/colchicine/steroids</td><td>NSAIDs/colchicine</td></tr>
</table>` },
                'ms_msk2': { id:'ms_msk2', title:'Bone Pathology', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Osteoporosis</b>: ↓bone density (T-score ≤ −2.5); postmenopausal (↓estrogen → ↑osteoclast activity); risk: corticosteroids, smoking, low Ca2+/vitamin D; vertebral compression # most common; Rx: bisphosphonates, denosumab, teriparatide</li>
<li><b>Osteomalacia/Rickets</b>: ↓mineralization; ↓vitamin D; Looser zones (pseudofractures); soft bones; rickets → bowing of legs, rachitic rosary, craniotabes; ↑PTH, ↓phosphate, ↑ALP</li>
<li><b>Paget's disease</b>: ↑osteoclast activity (↑bone turnover); mosaic pattern (cement lines); ↑ALP (markedly), normal Ca2+/phosphate; skull (hat size ↑), deafness, bowing legs; risk sarcoma; Rx: bisphosphonates</li>
<li><b>Osteosarcoma</b>: #1 primary bone tumor in teens; distal femur/proximal tibia; Codman's triangle + sunburst pattern on xray; ↑ALP; Rx: chemo + surgery</li>
<li><b>Ewing's sarcoma</b>: diaphysis; t(11;22) EWS-FLI1; "onion skin" periosteal; small blue round cells; teenagers; Rx: chemo + radiation</li>
<li><b>Multiple myeloma</b>: adults >60; plasma cell clonal proliferation → M protein (SPEP); lytic bone lesions (punched out); hypercalcemia; renal failure (Bence Jones protein); Rouleaux; CRAB criteria</li>
</ul>` }
              }
            },
            dermatology: {
              label: 'Dermatology',
              summary: 'Common rashes, skin cancers, blistering disorders, infections of skin.',
              cards: {
                'ms_derm1': { id:'ms_derm1', title:'Skin Cancers & Key Dermatology', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Basal cell carcinoma</b>: most common skin cancer; rodent ulcer; pearly nodule with telangiectasia + rolled edges; sun-exposed areas; BER1/hedgehog pathway; almost never metastasizes; Rx: excision/Mohs</li>
<li><b>Squamous cell carcinoma</b>: from actinic keratosis; keratin pearls on biopsy; ulcerating red lesion; can metastasize; risk: UV, arsenic, HPV (genital), chronic wounds, immunosuppression</li>
<li><b>Melanoma</b>: ABCDE criteria (Asymmetry, Border, Color, Diameter >6mm, Evolution); Clark/Breslow depth for prognosis; BRAF V600E mutation (vemurafenib); metastasizes early; S-100/HMB-45 markers</li>
<li><b>Pemphigus vulgaris</b>: IgG against desmoglein 1&3 (desmosome); intraepidermal; Nikolsky sign+; acantholysis; potentially fatal; Rx: steroids</li>
<li><b>Bullous pemphigoid</b>: IgG against BP180 (hemidesmosome); subepidermal; tense bullae; Nikolsky sign−; elderly; pruritic; better prognosis than pemphigus</li>
<li><b>Psoriasis</b>: Auspitz sign (pinpoint bleeding); Koebner phenomenon; silvery plaques on extensor surfaces; DIP joint arthropathy; Munro microabscesses; Rx: topical steroids, biologics (anti-TNF, anti-IL-17)</li>
</ul>` }
              }
            }
          }
        },

        /* ════════════════════════════════════════════════════════
           6. CARDIOVASCULAR  7–11%
           ════════════════════════════════════════════════════════ */
        cardiovascular: {
          label: 'Cardiovascular', icon: '🫀',
          cards: {},
          subcategories: {
            cv_physiology: {
              label: 'Cardiac Physiology',
              summary: 'Action potentials, cardiac cycle, Frank-Starling, hemodynamics, pressure-volume loops.',
              cards: {
                'cv_p1': { id:'cv_p1', title:'Cardiac Cycle & Heart Sounds', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>S1</b>: MV/TV close → start of systole; louder at apex</li>
<li><b>S2</b>: AV/PV close → end of systole; A2 before P2; physiologic split with inspiration (↑venous return → P2 delayed); paradoxical split (A2 after P2): LBBB, severe aortic stenosis</li>
<li><b>S3 (ventricular gallop)</b>: rapid filling in a dilated ventricle; normal in children/pregnancy; PATHOLOGIC in adults → HF/dilated CMP; low-pitched; at apex</li>
<li><b>S4 (atrial gallop)</b>: atrial kick against stiff ventricle; never normal; HTN, HCM, aortic stenosis; low-pitched</li>
<li><b>Murmur changes with inspiration</b>: right-sided murmurs ↑ (Carvallo's sign); left-sided murmurs ↓</li>
<li><b>Frank-Starling</b>: ↑preload → ↑SV (up to a point); afterload ↑ → ↓SV; contractility ↑ → ↑SV at any preload</li>
<li><b>CO = HR × SV</b>; SV determined by preload, afterload, contractility; MAP = CO × SVR = diastolic + 1/3(PP)</li>
</ul>` },
                'cv_p2': { id:'cv_p2', title:'Cardiac Action Potentials', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Phase 0</b>: rapid depolarization — Na+ influx (fast Na+ channels); NOT in SA/AV node (phase 0 = Ca2+)</li>
<li><b>Phase 1</b>: early repolarization — transient K+ efflux</li>
<li><b>Phase 2 (plateau)</b>: Ca2+ influx (L-type) = K+ efflux; absolute refractory period; unique to cardiac muscle</li>
<li><b>Phase 3</b>: rapid repolarization — K+ efflux (IKr)</li>
<li><b>Phase 4</b>: resting; ventricular cells stable; pacemaker cells spontaneous depolarization (funny current, If)</li>
<li><b>SA node fastest pacemaker (60–100 bpm)</b>; AV node 40–60; Purkinje/ventricle 20–40</li>
<li><b>Long QT</b>: ↑risk torsades de pointes; congenital (LQT1/2 – K+ channels; LQT3 – Na+ channel); drugs (antiarrhythmics, macrolides, fluoroquinolones, haloperidol, methadone)</li>
</ul>` }
              }
            },
            cv_pathology: {
              label: 'Cardiac Pathology & Pharmacology',
              summary: 'Heart failure, MI, valvular disease, antiarrhythmics, antihypertensives.',
              cards: {
                'cv_path1': { id:'cv_path1', title:'Heart Failure', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>HFrEF</b> (systolic, EF &lt;40%): ↓contractility; dilated CMP; wall motion abnormalities; S3 gallop; Rx: ACEi/ARB + β-blocker + aldosterone antagonist + diuretics + SGLT-2i; ARNI (sacubitril/valsartan) for persistent symptoms</li>
<li><b>HFpEF</b> (diastolic, EF ≥50%): stiff ventricle, ↑filling pressure; HTN, DM, obesity, HCM; S4 gallop; Rx: diuretics + control BP/HR; no proven mortality benefit</li>
<li><b>Left HF</b>: pulmonary edema (orthopnea, PND, crackles); cardiac asthma; hemosiderin-laden macrophages (heart failure cells) in alveoli</li>
<li><b>Right HF</b>: JVD, hepatomegaly (nutmeg liver), peripheral edema, ascites; most common cause = left HF</li>
<li><b>Cor pulmonale</b>: RV failure due to pulmonary HTN; COPD most common cause</li>
</ul>` },
                'cv_path2': { id:'cv_path2', title:'Antiarrhythmics (Vaughan Williams)', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<table style="width:100%;border-collapse:collapse;font-size:12px">
<tr style="background:var(--border)"><th style="padding:5px">Class</th><th>Mechanism</th><th>Drugs & Key Points</th></tr>
<tr><td style="padding:4px"><b>IA</b></td><td>Na+ channel block (moderate); ↑QT; ↑refractory period</td><td>Quinidine (torsades, cinchonism), Procainamide (lupus-like), Disopyramide</td></tr>
<tr><td><b>IB</b></td><td>Na+ channel block (weak); ↓QT; prefer ischemic tissue</td><td>Lidocaine (IV only; post-MI), Mexiletine (oral)</td></tr>
<tr><td><b>IC</b></td><td>Na+ channel block (strong); ↑PR, ↑QRS; NO QT effect</td><td>Flecainide, Propafenone; avoid post-MI (pro-arrhythmic)</td></tr>
<tr><td><b>II</b></td><td>β-blocker; ↓SA/AV node automaticity; ↑PR</td><td>Metoprolol, esmolol (IV); SVT, post-MI; bradycardia</td></tr>
<tr><td><b>III</b></td><td>K+ channel block → ↑refractory period; ↑QT</td><td>Amiodarone (multiple toxicities: lung/thyroid/liver/cornea), Sotalol, Ibutilide, Dofetilide</td></tr>
<tr><td><b>IV</b></td><td>Ca2+ channel block (L-type, SA/AV node)</td><td>Verapamil, diltiazem; SVT; caution with β-blockers (bradycardia/heart block)</td></tr>
</table>` },
                'cv_path3': { id:'cv_path3', title:'Beta Blockers, ACEi/ARBs, Statins', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>β-blockers (MOA)</b>: competitive β1/β2 antagonist → ↓HR, ↓contractility, ↓BP, ↓renin; cardioselective (β1): metoprolol, atenolol, bisoprolol, esmolol; non-selective: propranolol; α+β: carvedilol (CHF), labetalol (HTN in pregnancy)</li>
<li><b>ACEi (-pril)</b>: block ACE → ↓AT-II + ↓bradykinin breakdown → dry cough + angioedema; dilate efferent arteriole; ↓proteinuria; ↑K+; contraindicated: bilateral RAS, pregnancy</li>
<li><b>ARBs (-sartan)</b>: block AT1 receptor; no cough; same indications as ACEi</li>
<li><b>Statins (HMG-CoA reductase inhibitors)</b>: ↓LDL synthesis; myopathy (↑CK) + rhabdomyolysis (esp with gemfibrozil); ↑LFTs; teratogenic; most important CV risk reduction drug</li>
<li><b>Calcium channel blockers</b>: dihydropyridines (nifedipine, amlodipine) = vascular smooth muscle (HTN, Raynaud's); non-DHP (verapamil, diltiazem) = heart (SVT, angina)</li>
</ul>` }
              }
            }
          }
        },

        /* ════════════════════════════════════════════════════════
           7. MULTISYSTEM PROCESSES & DISORDERS  8–12%
           ════════════════════════════════════════════════════════ */
        multisystem: {
          label: 'Multisystem Processes & Disorders', icon: '⚙️',
          cards: {},
          subcategories: {
            microbiology: {
              label: 'Microbiology',
              summary: 'Bacteria, viruses, fungi, parasites, antimicrobials. High-yield organisms for Step 1.',
              cards: {
                'ms_m1': { id:'ms_m1', title:'Gram-Positive Cocci', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>S. aureus</b>: coagulase+; catalase+; MRSA; protein A (evades phagocytosis); toxins: TSST-1 (toxic shock), exfoliatin (scalded skin – bullous impetigo), enterotoxin B (food poisoning rapid onset); IVDU endocarditis (tricuspid); nasal colonizer</li>
<li><b>S. epidermidis</b>: coagulase−; biofilm on prosthetics + catheters + CSF shunts; novobiocin sensitive; urease+</li>
<li><b>S. saprophyticus</b>: coagulase−; UTI in young sexually active women; novobiocin resistant</li>
<li><b>S. pneumoniae</b>: α-hemolytic; optochin sensitive; bile soluble; lancet-shaped diplococci; IgA protease; PNA + meningitis + otitis + sinusitis; asplenic high risk</li>
<li><b>S. pyogenes (GAS)</b>: β-hemolytic; bacitracin sensitive; M protein; pharyngitis → rheumatic fever (anti-streptolysin O titer); skin infection → PSGN; necrotizing fasciitis; erythrogenic toxin → scarlet fever</li>
<li><b>Enterococcus</b>: γ-hemolytic; intrinsic ampicillin/vancomycin resistance in VRE; UTI + endocarditis; bile esculin +</li>
</ul>` },
                'ms_m2': { id:'ms_m2', title:'Antibiotic Mechanisms', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Cell wall (bactericidal)</b>: β-lactams (pen/ceph/carbapenems/aztreonam) – bind PBPs; vancomycin – binds D-Ala-D-Ala (gram+); bacitracin – prevents peptidoglycan precursor transport</li>
<li><b>30S ribosome</b>: aminoglycosides (gentamicin/tobramycin – bactericidal; oto/nephrotoxic); tetracyclines (bacteriostatic; no dairy; photosensitivity; avoid in children)</li>
<li><b>50S ribosome (BaCSCaL bacteriostatic)</b>: macrolides (azithromycin – respiratory; Clostridium difficile risk); clindamycin (anaerobes; pseudomembranous colitis); chloramphenicol (gray baby; aplastic anemia); linezolid (gram+ including MRSA/VRE; serotonin syndrome); streptogramins</li>
<li><b>DNA gyrase (bactericidal)</b>: fluoroquinolones (-floxacin); also inhibit topoisomerase IV; cartilage damage; tendon rupture; QT prolongation; avoid in children</li>
<li><b>RNA polymerase (bactericidal)</b>: rifampin – orange secretions; induces CYP450; used in TB + N. meningitidis prophylaxis</li>
<li><b>Folate synthesis</b>: sulfonamides (PABA analog) + trimethoprim (DHF reductase); sequential block; SMX-TMP for PCP/UTI/Nocardia; sulfa allergy</li>
</ul>` },
                'ms_m3': { id:'ms_m3', title:'Key Viruses', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>HIV</b>: RNA retrovirus; gp120 binds CD4 + CCR5/CXCR4; reverse transcriptase → integrase → protease; AIDS &lt;200 CD4; OI prophylaxis thresholds: PCP &lt;200 (TMP-SMX), MAC &lt;50 (azithromycin), toxoplasma &lt;100 (TMP-SMX)</li>
<li><b>Hepatitis viruses</b>: HBV (dsDNA, partially; Dane particle; HBsAg → HBcAg → anti-HBs = immunity; fulminant = D coinfection); HCV (ssRNA, enveloped; most common chronic; cirrhosis → HCC; Rx: direct-acting antivirals); HAV/HEV (fecal-oral; self-limiting; HEV dangerous in pregnancy)</li>
<li><b>Herpes viruses (latency)</b>: HSV-1 (trigeminal ganglion), HSV-2 (sacral), VZV (dorsal root ganglion – reactivate = zoster), EBV (B cells – mono, Burkitt, NPC, Hodgkin), CMV (mononuclear cells – congenital, retinitis in AIDS), HHV-6 (roseola infantum – CD4+ T cells), HHV-8 (Kaposi sarcoma)</li>
<li><b>Parvovirus B19</b>: fifth disease (slapped cheek); aplastic crisis in sickle cell/hemolytic anemias; hydrops fetalis</li>
</ul>` }
              }
            },
            biochem_genetics: {
              label: 'Biochemistry & Genetics',
              summary: 'Lysosomal storage diseases, amino acid disorders, enzyme deficiencies, inheritance patterns.',
              cards: {
                'ms_bg1': { id:'ms_bg1', title:'Lysosomal Storage Diseases', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Gaucher</b>: glucocerebrosidase ↓ → glucocerebroside; most common LSD; bone pain + hepatosplenomegaly + Gaucher cells ("crinkled paper"); Ashkenazi Jewish; treat: enzyme replacement</li>
<li><b>Niemann-Pick</b>: sphingomyelinase ↓ → sphingomyelin; cherry-red spot + hepatosplenomegaly + foam cells; Ashkenazi; types A (fatal early), B (lung), C (NPC1 – vertical gaze palsy)</li>
<li><b>Tay-Sachs</b>: hexosaminidase A ↓ → GM2 ganglioside; cherry-red spot; NO hepatosplenomegaly; fatal by age 3; Ashkenazi; <mark>HEXA mutation</mark></li>
<li><b>Fabry</b>: α-galactosidase A ↓ → globotriaosylceramide; X-linked recessive; angiokeratomas + neuropathy + renal failure + corneal whorling; females carriers can have Sx</li>
<li><b>Krabbe</b>: galactocerebrosidase ↓ → psychosine; globoid cells; peripheral neuropathy + optic atrophy; early infancy; AR</li>
<li><b>Pompe (glycogen storage)</b>: α-1,4-glucosidase (acid maltase) ↓; heart + muscle; cardiopathy in infants; glycogen in lysosomes</li>
<li><b>MLD</b>: arylsulfatase A ↓; sulfatides; demyelination + ataxia + dementia; AR</li>
</ul>` },
                'ms_bg2': { id:'ms_bg2', title:'Amino Acid & Enzyme Disorders', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>PKU</b>: phenylalanine hydroxylase ↓ (or BH4); musty/mousy odor; fair skin/hair/eyes; intellectual disability; screen newborn; treat: low-Phe diet + BH4 (sapropterin for mild)</li>
<li><b>Alkaptonuria</b>: homogentisic acid oxidase ↓; dark urine on standing; ochronosis (bluish-black connective tissue); arthritis</li>
<li><b>Homocystinuria</b>: cystathionine synthase ↓ (B6) or B12/folate ↓; marfanoid habitus; <mark>lens subluxation downward-inward</mark> (vs Marfan = upward-outward); thrombosis; intellectual disability; treat: B6</li>
<li><b>MSUD</b>: branched-chain α-ketoacid dehydrogenase ↓; Ile/Leu/Val accumulate; maple syrup urine; encephalopathy; restrict BCAAs; AR</li>
<li><b>Cystinuria</b>: defective PCT transporter for COLA (Cystine, Ornithine, Lysine, Arginine); recurrent kidney stones (hexagonal); treat: hydration + D-penicillamine/tiopronin</li>
<li><b>DNA Repair Disorders</b>: XP (NER defect → UV sensitivity + skin cancer); Lynch syndrome (MMR defect → microsatellite instability → HNPCC); ataxia-telangiectasia (ATM kinase → cerebellar ataxia + ↑malignancy)</li>
</ul>` }
              }
            },
            pharmacokinetics: {
              label: 'Pharmacokinetics & Toxicology',
              summary: 'PK/PD fundamentals, volume of distribution, half-life, toxidrome management.',
              cards: {
                'ms_pk1': { id:'ms_pk1', title:'Pharmacokinetics Principles', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Volume of distribution (Vd)</b>: Vd = dose / plasma concentration; small Vd = stays in plasma (heparin, warfarin – protein-bound); large Vd = distributes to tissues (chloroquine, TCA)</li>
<li><b>Half-life</b>: t½ = 0.7 × Vd / CL; time to steady state = 4–5 t½; time to elimination = 4–5 t½</li>
<li><b>Zero-order kinetics</b>: constant amount eliminated regardless of concentration; phenytoin, aspirin (high dose), ethanol; NOT saturable</li>
<li><b>First-order kinetics</b>: constant fraction eliminated; most drugs; proportional to concentration</li>
<li><b>Bioavailability</b>: fraction reaching systemic circulation; IV = 100%; affected by first-pass metabolism (liver)</li>
<li><b>CYP450 inducers</b>: rifampin, carbamazepine, phenytoin, St. John's wort, barbiturates, griseofulvin, chronic alcohol → ↑drug metabolism (↓drug effect)</li>
<li><b>CYP450 inhibitors</b>: azole antifungals, cimetidine, amiodarone, grapefruit, INH, metronidazole, fluoroquinolones, SSRIs, ritonavir → ↓drug metabolism (↑drug effect/toxicity)</li>
</ul>` }
              }
            }
          }
        },

        /* ════════════════════════════════════════════════════════
           8. GASTROINTESTINAL  6–10%
           ════════════════════════════════════════════════════════ */
        gastrointestinal: {
          label: 'Gastrointestinal', icon: '🍽️',
          cards: {},
          subcategories: {
            gi_physiology: {
              label: 'GI Physiology & Pharmacology',
              summary: 'Motility, digestion, absorption, GI hormones, GI drugs.',
              cards: {
                'gi_p1': { id:'gi_p1', title:'GI Hormones', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Gastrin</b> (G cells, antrum): ↑HCl + ↑pepsinogen; stimulated by small peptides, vagal input, alkaline pH; Zollinger-Ellison (gastrinoma) → recurrent PUD + diarrhea + elevated fasting gastrin</li>
<li><b>Secretin</b> (S cells, duodenum): ↑pancreatic HCO3 + ↑bile; stimulated by acidic chyme; ↓gastric emptying; treats pancreatic duct obstruction</li>
<li><b>CCK</b> (I cells, duodenum/jejunum): ↑pancreatic enzymes + bile release; ↓gastric emptying; stimulated by fat + protein; satiety signal</li>
<li><b>GIP</b> (K cells): ↑insulin release; ↓acid; stimulated by fat/glucose/AA</li>
<li><b>Motilin</b>: initiates migrating motor complex (MMC) during fasting; erythromycin is motilin agonist (prokinetic)</li>
<li><b>VIP</b>: relaxes smooth muscle; ↑intestinal secretion; VIPoma (Verner-Morrison) → profuse watery diarrhea + hypokalemia + achlorhydria (WDHA)</li>
</ul>` }
              }
            },
            gi_pathology: {
              label: 'GI Pathology',
              summary: 'IBD, GI cancers, malabsorption, liver diseases.',
              cards: {
                'gi_path1': { id:'gi_path1', title:'IBD: Crohn\'s vs Ulcerative Colitis', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<table style="width:100%;border-collapse:collapse;font-size:12px">
<tr style="background:var(--border)"><th style="padding:5px">Feature</th><th>Crohn's</th><th>Ulcerative Colitis</th></tr>
<tr><td style="padding:4px"><b>Location</b></td><td>Mouth to anus (any); terminal ileum most common; skip lesions</td><td>Rectum → colon (continuous); NO small bowel</td></tr>
<tr><td><b>Depth</b></td><td>Transmural; fistulas + abscesses + strictures</td><td>Mucosa/submucosa only</td></tr>
<tr><td><b>Pathology</b></td><td>Noncaseating granulomas; cobblestone; creeping fat; string sign</td><td>Crypt abscesses; pseudopolyps; lead pipe colon</td></tr>
<tr><td><b>Sx</b></td><td>RLQ pain, diarrhea (may not be bloody), malabsorption, B12 ↓</td><td>Bloody diarrhea, LLQ pain, tenesmus</td></tr>
<tr><td><b>Extraintestinal</b></td><td>Kidney stones (oxalate), gallstones, B12 deficiency</td><td>Sclerosing cholangitis, pyoderma gangrenosum</td></tr>
<tr><td><b>Cancer risk</b></td><td>Modest ↑</td><td>↑↑ (after 10 yrs); surveillance colonoscopy</td></tr>
<tr><td><b>Rx</b></td><td>Steroids, azathioprine, biologic (anti-TNF)</td><td>5-ASA (mesalamine), steroids, biologics; colectomy curative</td></tr>
</table>` },
                'gi_path2': { id:'gi_path2', title:'Liver Disease', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Hepatitis A/B/C/D/E</b>: see Virology section; ALT > AST in viral hepatitis; AST:ALT >2 → alcoholic hepatitis</li>
<li><b>Alcoholic liver disease</b>: fatty liver (reversible) → alcoholic hepatitis (Mallory bodies = intermediate filaments; AST:ALT >2; PMN infiltrate) → Laennec's cirrhosis (micronodular)</li>
<li><b>Cirrhosis complications</b>: portal HTN → esophageal varices (Rx: propranolol prophylaxis + sclerotherapy/banding) + caput medusae + hemorrhoids; ascites (↓albumin + ↑portal pressure); hepatic encephalopathy (↑NH3; Rx: lactulose + rifaximin); SBP; hepatorenal syndrome; HCC</li>
<li><b>Wilson's disease</b>: ATP7B mutation; copper accumulation; Kayser-Fleischer rings + liver disease + neuropsychiatric; ↓ceruloplasmin; ↑urine copper; treat: D-penicillamine or trientine</li>
<li><b>Hemochromatosis</b>: HFE gene (C282Y); iron overload; bronze diabetes + cirrhosis + cardiomyopathy + hypogonadism + arthropathy; ↑ferritin + ↑transferrin saturation; Rx: phlebotomy</li>
<li><b>Primary biliary cholangitis (PBC)</b>: anti-mitochondrial Ab (AMA); cholestatic; itching; women; ↑ALP; granulomatous bile duct destruction; Rx: ursodiol</li>
</ul>` }
              }
            }
          }
        },

        /* ════════════════════════════════════════════════════════
           9. HUMAN DEVELOPMENT  1–3%
           ════════════════════════════════════════════════════════ */
        human_dev: {
          label: 'Human Development', icon: '👶',
          cards: {},
          subcategories: {
            embryology: {
              label: 'Embryology & Genetics',
              summary: 'Embryonic development, congenital anomalies, chromosomal disorders, inheritance patterns.',
              cards: {
                'hd_e1': { id:'hd_e1', title:'Chromosomal Disorders', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>Trisomy 21 (Down)</b>: most common trisomy; epicanthal folds, single palmar crease, Brushfield spots, upslanting palpebral fissures, Hirschsprung, ASD/VSD (most common cardiac = AVSD), duodenal atresia, Alzheimer's (chromosome 21 → APP); ↑nuchal translucency on US; ↑risk with maternal age; maternal serum: ↑hCG, ↑inhibin A, ↓AFP, ↓estriol (quad screen)</li>
<li><b>Trisomy 18 (Edwards)</b>: rocker-bottom feet, micrognathia, overlapping fingers, VSD; severe ID; 90% die in first year; most common chromosomal abnormality in spontaneous abortions after T21</li>
<li><b>Trisomy 13 (Patau)</b>: microphthalmia, cleft palate, polydactyly, holoprosencephaly; severe ID; rocker-bottom; 90% die in first year</li>
<li><b>Turner (45,X)</b>: webbed neck, shield chest, bicuspid aortic valve, coarctation, streak gonads, short stature, lymphedema at birth; ↑FSH; primary amenorrhea; horseshoe kidney</li>
<li><b>Klinefelter (47,XXY)</b>: tall, gynecomastia, testicular atrophy, infertility, learning differences; ↑FSH/LH, ↓testosterone; Barr body present</li>
<li><b>Fragile X</b>: CGG repeat expansion in FMR1; X-linked dominant; macro-orchidism, long face + large ears, intellectual disability; most common inherited ID in males</li>
</ul>` },
                'hd_e2': { id:'hd_e2', title:'Congenital Heart Defects', flagged:false, created:'2026-01-01', modified:'2026-01-01',
                  content:`<ul>
<li><b>VSD</b>: most common CHD; holosystolic murmur at LLSB; small = often close spontaneously; Eisenmenger if large (L→R becomes R→L → cyanosis)</li>
<li><b>ASD</b>: fixed split S2; ostium secundum most common; left-to-right; risk paradoxical embolism</li>
<li><b>PDA</b>: machinery murmur; common in prematurity; ↑prostaglandins keep open; indomethacin/ibuprofen to close; PGE1 to keep open (duct-dependent lesions)</li>
<li><b>Tetralogy of Fallot (TOF)</b>: PROVe – Pulmonary stenosis (most important), Right ventricular hypertrophy, Overriding aorta, VSD; boot-shaped heart; cyanotic; Tet spells → squatting (↑SVR); Rx: BT shunt then corrective surgery</li>
<li><b>Transposition of great vessels</b>: aorta arises from RV; PA from LV; incompatible with life without mixing (ASD/VSD/PDA); PGE1 + balloon septostomy → corrective surgery</li>
<li><b>Coarctation</b>: notching of ribs (collateral vessels); HTN in upper extremities; weak femoral pulses; association with bicuspid aortic valve + Turner syndrome</li>
</ul>` }
              }
            }
          }
        }

      } // end step1 categories
    }, // end step1

    /* ════════════════════════════════════════════════════════
       STEP 2 CK — placeholder
       ════════════════════════════════════════════════════════ */
    step2: {
      label: 'Step 2 CK',
      categories: {
        internal_medicine: {
          label: 'Internal Medicine', icon: '🏥',
          cards: {}, subcategories: {}
        },
        surgery: {
          label: 'Surgery', icon: '🔪',
          cards: {}, subcategories: {}
        },
        ob_gyn: {
          label: 'OB/GYN', icon: '🤰',
          cards: {}, subcategories: {}
        },
        pediatrics: {
          label: 'Pediatrics', icon: '👶',
          cards: {}, subcategories: {}
        },
        psychiatry: {
          label: 'Psychiatry', icon: '🧠',
          cards: {}, subcategories: {}
        }
      }
    },

    /* ════════════════════════════════════════════════════════
       STEP 3 — placeholder
       ════════════════════════════════════════════════════════ */
    step3: {
      label: 'Step 3',
      categories: {
        ambulatory: {
          label: 'Ambulatory Care', icon: '📋',
          cards: {}, subcategories: {}
        },
        emergency: {
          label: 'Emergency Medicine', icon: '🚨',
          cards: {}, subcategories: {}
        }
      }
    }

  } // end steps
};

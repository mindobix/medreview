/* practice.js – Free 120-style question bank and quiz engine */

/* ── Question bank ──────────────────────────────────────────────────── */
window.FREE120_QUESTIONS = [
  // ── BLOCK 1 ──────────────────────────────────────────────────────
  {
    id:'q001', block:1, system:'cardiovascular', topic:'Hypertensive emergency',
    stem:'A 58-year-old man with a history of poorly controlled hypertension presents to the ED with a severe headache, blurred vision, and confusion for the past 2 hours. Blood pressure is 220/130 mmHg. Fundoscopic examination shows bilateral papilledema and flame-shaped hemorrhages. Creatinine is 3.1 mg/dL (baseline 1.0 mg/dL). Which of the following is the most appropriate initial management?',
    opts:['A. Oral labetalol and discharge with close follow-up','B. IV nitroprusside targeting a 25% reduction in MAP within the first hour','C. Immediate reduction of blood pressure to normal range within 30 minutes','D. Oral amlodipine and observation for 4 hours','E. IV furosemide to reduce preload'],
    ans:1,
    tp:'Hypertensive emergency (severely elevated BP with end-organ damage) requires IV antihypertensives. The goal is a ~25% reduction in mean arterial pressure within the first hour — NOT normalization, which risks watershed infarction. Nitroprusside, labetalol IV, and nicardipine IV are first-line agents.'
  },
  {
    id:'q002', block:1, system:'cardiovascular', topic:'Aortic stenosis',
    stem:'A 72-year-old woman presents with exertional chest pain and syncope for 3 months. She reports gradually worsening dyspnea on exertion over the past year. On examination, carotid upstroke is diminished and delayed (pulsus parvus et tardus). Cardiac auscultation reveals a harsh systolic crescendo-decrescendo murmur best heard at the right second intercostal space that radiates to the carotids. Which of the following best explains her syncope?',
    opts:['A. Fixed cardiac output cannot increase with exertion, causing cerebral hypoperfusion','B. Reflex vagal bradycardia from coronary artery occlusion','C. Ventricular tachycardia triggered by left bundle branch block','D. Hypotension from severe mitral regurgitation','E. Increased cardiac output causing carotid steal'],
    ans:0,
    tp:'Aortic stenosis causes a fixed obstruction to LV outflow. During exertion, peripheral vasodilation occurs but cardiac output cannot increase sufficiently, resulting in relative hypotension and syncope. The classic triad is angina, syncope, and HF (SAD). Pulsus parvus et tardus (weak, late-peaking carotid pulse) is the hallmark physical finding.'
  },
  {
    id:'q003', block:1, system:'cardiovascular', topic:'STEMI management',
    stem:'A 55-year-old man with diabetes and hypertension presents with crushing substernal chest pain radiating to the left arm for 90 minutes. ECG shows ST elevations in leads II, III, and aVF with reciprocal depressions in leads I and aVL. He is at a hospital with 24/7 cardiac catheterization capabilities. Which of the following is the most appropriate next step?',
    opts:['A. Administer IV thrombolytics and admit to ICU','B. Aspirin, heparin, and emergent PCI within 90 minutes of first medical contact','C. Aspirin, nitroglycerin, and urgent cardiology consultation within 24 hours','D. Start IV beta-blocker and transfer to tertiary center','E. Echocardiogram to assess wall motion before intervention'],
    ans:1,
    tp:'Inferior STEMI (ST elevation in II, III, aVF) requires emergent reperfusion. When PCI is available, the goal is door-to-balloon time <90 minutes. Aspirin and anticoagulation are given immediately. Inferior MI → right coronary artery territory. Always check right-sided leads for RV infarction; avoid nitrates if RV infarct (preload-dependent).'
  },
  {
    id:'q004', block:1, system:'gastrointestinal', topic:'Appendicitis',
    stem:'A 19-year-old man presents with periumbilical pain that migrated to the right lower quadrant over 12 hours, associated with nausea, vomiting, and fever to 38.5°C. On examination, he has maximal tenderness at McBurney\'s point, positive Rovsing sign, and voluntary guarding. WBC is 14,500/μL with a left shift. Which of the following best explains the initial periumbilical location of the pain?',
    opts:['A. Referred pain from the right psoas muscle','B. Visceral afferents from the midgut that project to the T10 dermatome','C. Somatic pain from the parietal peritoneum at the umbilicus','D. Mesenteric lymphadenitis irritating the umbilical ligament','E. Cecal distension causing referred pain via the vagus nerve'],
    ans:1,
    tp:'Early appendicitis causes poorly localized periumbilical pain because the appendix (midgut derivative) has visceral innervation through T10 afferents, which refer to the umbilical region. As inflammation progresses to involve the parietal peritoneum (somatic innervation), pain localizes to the RLQ (McBurney\'s point). This migration is pathognomonic.'
  },
  {
    id:'q005', block:1, system:'neuro_behav', topic:'Stroke localization',
    stem:'A 68-year-old right-handed man is brought to the ED with sudden onset right-sided weakness and inability to speak. He can follow simple commands but cannot produce fluent speech. Examination shows right arm and face weakness greater than leg weakness. He appears frustrated when trying to communicate. CT head is negative for hemorrhage. Which artery is most likely occluded?',
    opts:['A. Right middle cerebral artery','B. Left posterior cerebral artery','C. Left middle cerebral artery, superior division','D. Left anterior cerebral artery','E. Basilar artery'],
    ans:2,
    tp:'Broca aphasia (non-fluent, expressive, patient is aware and frustrated) + right arm/face weakness (contralateral) = left MCA superior division stroke. The MCA superior division supplies Broca\'s area (L inferior frontal gyrus) and the motor cortex arm/face region. Inferior division MCA → Wernicke aphasia (fluent but nonsensical). Anterior cerebral → leg > arm weakness.'
  },
  {
    id:'q006', block:1, system:'blood_immune', topic:'Iron deficiency anemia',
    stem:'A 28-year-old woman presents with fatigue, pallor, and dyspnea on exertion for 3 months. She has heavy menstrual periods lasting 8 days. CBC: Hgb 8.2 g/dL, MCV 68 fL, RDW 18% (elevated). Peripheral smear shows hypochromic microcytic red cells with occasional pencil cells. Serum ferritin is 4 ng/mL. Which of the following findings is most consistent with this diagnosis?',
    opts:['A. Elevated total iron-binding capacity with high serum iron','B. Increased serum hepcidin and low TIBC','C. Low TIBC and high serum ferritin','D. Elevated TIBC with decreased serum iron and low ferritin','E. Normal TIBC with elevated serum iron'],
    ans:3,
    tp:'Iron deficiency anemia: low ferritin (depleted stores), low serum iron, HIGH TIBC (transferrin upregulated to scavenge iron), low transferrin saturation. Contrast with anemia of chronic disease: low iron, low TIBC, HIGH ferritin (iron sequestered). The mnemonic: in iron deficiency, the body REACHES further (high TIBC) for iron it doesn\'t have.'
  },
  {
    id:'q007', block:1, system:'resp_renal', topic:'Asthma pharmacology',
    stem:'A 14-year-old boy with asthma presents to the clinic for a follow-up. He uses his albuterol rescue inhaler 4 days per week and wakes from sleep with symptoms 2 nights per week. He has never been hospitalized. Peak flow is 75% predicted. Which of the following is the most appropriate step-up therapy?',
    opts:['A. Add oral prednisone daily','B. Add a long-acting beta-2 agonist (LABA) as monotherapy','C. Add a low-dose inhaled corticosteroid (ICS)','D. Add a leukotriene receptor antagonist as monotherapy','E. Add a short-acting muscarinic antagonist (SAMA)'],
    ans:2,
    tp:'This patient has moderate persistent asthma (symptoms >1 day/week, >1 night/week). Step 3 therapy = low-dose ICS + LABA OR medium-dose ICS. ICS are the cornerstone of persistent asthma management — they reduce airway inflammation. LABAs must NEVER be used as monotherapy in asthma (↑ mortality risk); they are always paired with ICS.'
  },
  {
    id:'q008', block:1, system:'endo_repro', topic:'Diabetes mellitus type 1',
    stem:'A 16-year-old girl presents with polyuria, polydipsia, and a 6 kg weight loss over 3 weeks. She is breathing rapidly with a fruity odor to her breath. Labs: glucose 480 mg/dL, pH 7.18, bicarbonate 10 mEq/L, anion gap 24. Urinalysis shows glucosuria and ketonuria. C-peptide is undetectable. Which of the following best describes the primary metabolic defect?',
    opts:['A. Peripheral insulin resistance with preserved beta-cell function','B. Absolute insulin deficiency leading to unopposed glucagon activity','C. Excessive glucocorticoid secretion from adrenal adenoma','D. Impaired renal glucose reabsorption at the SGLT-2 transporter','E. Glucokinase mutation impairing glucose sensing in beta cells'],
    ans:1,
    tp:'Type 1 DM: autoimmune destruction of beta cells → absolute insulin deficiency. Without insulin, glucagon is unopposed → lipolysis → free fatty acids → hepatic ketogenesis → DKA. Undetectable C-peptide confirms no endogenous insulin production. Type 2 DM has peripheral resistance and relative deficiency. MODY (glucokinase mutation) causes mild hyperglycemia without ketosis.'
  },
  {
    id:'q009', block:1, system:'msk_skin', topic:'Rheumatoid arthritis',
    stem:'A 42-year-old woman presents with symmetric pain and swelling of the proximal interphalangeal (PIP) and metacarpophalangeal (MCP) joints for 8 weeks, associated with 2 hours of morning stiffness. She also has fatigue and a low-grade fever. RF and anti-CCP antibodies are positive. ESR is 78 mm/hr. X-rays show periarticular osteopenia but no erosions. Which of the following is the most appropriate initial DMARD?',
    opts:['A. Infliximab','B. Prednisone 40 mg daily as monotherapy','C. Methotrexate','D. Hydroxychloroquine','E. Sulfasalazine'],
    ans:2,
    tp:'Methotrexate is the anchor DMARD for RA — most widely used first-line agent, well-studied, and the backbone of combination biologic therapy. It inhibits dihydrofolate reductase, reducing lymphocyte proliferation. Requires folic acid supplementation. Monitor LFTs and CBC. Anti-CCP is more specific for RA than RF and predicts erosive disease. Biologics (TNF-inhibitors) are added when MTX inadequate.'
  },
  {
    id:'q010', block:1, system:'multisystem', topic:'SLE',
    stem:'A 24-year-old Black woman presents with a 4-month history of joint pain, facial rash, and hair loss. She has had two prior miscarriages. On examination, she has a butterfly-shaped rash over the cheeks sparing the nasolabial folds. Labs: ANA positive (1:640), anti-dsDNA positive, anti-Smith positive, CBC shows leukopenia and thrombocytopenia. Urinalysis: 3+ protein, RBC casts. Which antibody most specifically confirms this diagnosis?',
    opts:['A. Anti-histone antibody','B. Anti-Ro/SSA antibody','C. Anti-Smith (Sm) antibody','D. Antiphospholipid antibody','E. Anti-centromere antibody'],
    ans:2,
    tp:'Anti-Smith (anti-Sm) is highly SPECIFIC for SLE (~25-30% sensitivity, >99% specificity). Anti-dsDNA is also specific and correlates with disease activity/nephritis. Anti-histone → drug-induced lupus. Anti-Ro/SSA → Sjögren\'s and neonatal lupus. Anti-centromere → limited scleroderma (CREST). Antiphospholipid → antiphospholipid syndrome (thrombosis, recurrent miscarriage).'
  },
  {
    id:'q011', block:1, system:'human_dev', topic:'Neural tube defects',
    stem:'A newborn is found to have a fluid-filled sac protruding from the lower back containing meninges, spinal cord, and nerve roots. The defect is open (not covered by skin). Which of the following best describes the pathophysiology of this condition?',
    opts:['A. Failure of neural tube closure between weeks 3–4 of gestation','B. Excessive apoptosis of notochord cells during week 5','C. Mutation in FGFR3 causing abnormal chondrocyte differentiation','D. Maternal autoimmune attack on fetal dorsal root ganglia','E. Trisomy 18 causing incomplete dorsal vertebral arch fusion'],
    ans:0,
    tp:'Myelomeningocele (open spina bifida) results from failure of caudal neural tube closure between days 18–28 (weeks 3–4). Risk reduced by folic acid supplementation (400–800 mcg/day) periconceptionally. Meningocele = meninges only (no neural elements, better prognosis). Associated with Arnold-Chiari II malformation (cerebellar tonsillar herniation + hydrocephalus). AFP is elevated in maternal serum and amniotic fluid.'
  },
  {
    id:'q012', block:1, system:'blood_immune', topic:'Hodgkin lymphoma',
    stem:'A 22-year-old man presents with painless right cervical lymphadenopathy for 3 months, drenching night sweats, and a 7 kg weight loss. CT scan shows cervical, mediastinal, and para-aortic lymphadenopathy. Biopsy of a cervical node shows large binucleate cells with prominent "owl-eye" nucleoli surrounded by inflammatory cells including eosinophils, plasma cells, and lymphocytes. Which of the following is the cell of origin of the malignant cells?',
    opts:['A. T lymphocyte','B. Natural killer cell','C. Germinal center B lymphocyte','D. Plasma cell','E. Macrophage/monocyte'],
    ans:2,
    tp:'Reed-Sternberg cells in classical Hodgkin lymphoma are derived from germinal center B cells. They are CD15+, CD30+ (but CD20−, EBV association in ~50%). B symptoms (fever, night sweats, >10% weight loss) predict worse prognosis. Classic HL spreads contiguously (Ann Arbor staging). Treatment: ABVD chemotherapy ± radiation. Excellent prognosis (>90% cure in early-stage).'
  },
  {
    id:'q013', block:1, system:'resp_renal', topic:'Nephrotic syndrome',
    stem:'A 4-year-old boy presents with periorbital edema noted by his parents on waking, which improves throughout the day. He also has pitting edema of his ankles. Labs show albumin 1.8 g/dL, total cholesterol 380 mg/dL. Urinalysis shows 4+ protein, negative for blood and RBC casts. 24-hour urine protein is 4.2 g. Renal biopsy shows normal light microscopy, negative immunofluorescence, and effacement of podocyte foot processes on electron microscopy. Which is the most likely diagnosis?',
    opts:['A. IgA nephropathy','B. Membranous nephropathy','C. Minimal change disease','D. Focal segmental glomerulosclerosis','E. Membranoproliferative glomerulonephritis'],
    ans:2,
    tp:'Minimal change disease (MCD) is the most common cause of nephrotic syndrome in children. Pathology: normal LM, no immune deposits on IF, foot process effacement on EM. Pathogenesis: T-cell dysfunction → polyanion loss from GBM → loss of negative charge → protein leak. Treatment: prednisone (>90% respond). MCD in adults may be associated with Hodgkin lymphoma or NSAIDs.'
  },
  {
    id:'q014', block:1, system:'gastrointestinal', topic:'Hepatitis B serology',
    stem:'A 35-year-old man from Southeast Asia undergoes routine screening. He reports no symptoms. Labs: HBsAg positive, anti-HBs negative, HBeAg positive, anti-HBe negative, anti-HBc IgG positive, ALT 85 U/L (normal <40). He has had this status for >6 months. Which of the following best describes his current state?',
    opts:['A. Acute hepatitis B infection with high likelihood of resolution','B. Immune clearance phase with decreasing viral replication','C. Chronic active hepatitis B with high infectivity','D. Resolved hepatitis B with immunity','E. Occult hepatitis B infection'],
    ans:2,
    tp:'HBsAg+ for >6 months = CHRONIC infection. HBeAg positive = active viral replication, HIGH infectivity. AntiHBe = seroconversion, lower replication. AntiHBs = immunity (either vaccine or resolved infection). AntiHBc IgG = prior exposure (core antibody, not protective). The "window period" = HBsAg clears but antiHBs not yet detectable → only antiHBc IgM positive. HBeAg+ chronic hepatitis → highest risk of cirrhosis and HCC.'
  },
  {
    id:'q015', block:1, system:'neuro_behav', topic:'Parkinson disease',
    stem:'A 67-year-old man presents with a 2-year history of a tremor in his right hand that occurs at rest and disappears with voluntary movement. His wife notes he has developed a "shuffling" walk and seems to have less facial expression. Examination confirms resting tremor, cogwheel rigidity, and bradykinesia. He takes no medications. Which of the following pathological findings is most expected on brain autopsy?',
    opts:['A. Neurofibrillary tangles and amyloid plaques in the hippocampus','B. Loss of dopaminergic neurons in the substantia nigra pars compacta with Lewy bodies','C. Caudate nucleus atrophy with huntingtin protein aggregates','D. Frontotemporal lobar degeneration with TDP-43 inclusions','E. Loss of Purkinje cells in the cerebellar vermis'],
    ans:1,
    tp:'Parkinson disease: degeneration of dopaminergic neurons in the substantia nigra pars compacta → loss of dopamine in nigrostriatal pathway → reduced inhibition of indirect pathway → bradykinesia, rigidity, resting tremor. Lewy bodies (intraneuronal alpha-synuclein aggregates) are the pathological hallmark. Treatment: levodopa/carbidopa (gold standard). MPTP (in illicit drugs) can cause irreversible parkinsonism.'
  },
  {
    id:'q016', block:1, system:'msk_skin', topic:'Osteosarcoma',
    stem:'A 15-year-old boy presents with a 2-month history of pain and swelling around his right knee. He recalls the pain is worse at night and has been getting progressively worse. X-ray of the knee shows a lytic lesion in the distal femur metaphysis with periosteal elevation forming a "sunburst" pattern and a Codman triangle. Which of the following is the most likely diagnosis?',
    opts:['A. Ewing sarcoma','B. Giant cell tumor','C. Osteosarcoma','D. Osteochondroma','E. Chondrosarcoma'],
    ans:2,
    tp:'Osteosarcoma: most common primary bone malignancy in children/adolescents. Metaphysis of long bones (distal femur > proximal tibia > proximal humerus). Sunburst pattern + Codman triangle (periosteal elevation) on X-ray are classic. Associated with Rb gene mutation and Li-Fraumeni syndrome. Ewing sarcoma: "onion-skin" periosteal reaction, diaphysis, t(11;22), EWSR1-FLI1 fusion. Treatment: chemotherapy + surgery.'
  },
  {
    id:'q017', block:1, system:'endo_repro', topic:'Cushing syndrome',
    stem:'A 38-year-old woman presents with weight gain (predominantly in her trunk and face), easy bruising, purple striae on her abdomen, and proximal muscle weakness for 8 months. She has hypertension and new-onset diabetes. Physical examination confirms central obesity, moon facies, and a dorsal fat pad. A 24-hour urine free cortisol is 3x the upper limit of normal. A 1-mg overnight dexamethasone suppression test fails to suppress cortisol. Which is the most common cause of endogenous Cushing syndrome?',
    opts:['A. Adrenal adenoma secreting cortisol autonomously','B. Ectopic ACTH production from small cell lung cancer','C. ACTH-secreting pituitary adenoma (Cushing disease)','D. Primary adrenal hyperplasia','E. Exogenous glucocorticoid use'],
    ans:2,
    tp:'Cushing DISEASE (pituitary adenoma, ~70%) is the most common cause of ENDOGENOUS Cushing syndrome. Exogenous glucocorticoids are the most common cause OVERALL. Workup: 24-hr UFC or late-night salivary cortisol → if elevated, 1mg DST → if no suppression, Cushing syndrome confirmed. Localization: high-dose DST (8mg) suppresses pituitary source but not ectopic/adrenal. CRH stimulation: pituitary responds; ectopic does not.'
  },
  {
    id:'q018', block:1, system:'blood_immune', topic:'Hemophilia A',
    stem:'A 3-year-old boy is brought in after a minor fall resulted in a large hemarthrosis of his right knee. His mother reports he has had several similar episodes. His maternal uncle had similar bleeding problems. Labs: PT normal, aPTT prolonged. Von Willebrand factor antigen and activity are normal. Factor VIII activity is 2% of normal. Which of the following best explains the inheritance pattern?',
    opts:['A. Autosomal dominant with variable penetrance','B. Autosomal recessive, requiring two defective alleles','C. X-linked recessive, affecting males with carrier females','D. X-linked dominant, affecting both males and females','E. Mitochondrial inheritance from the maternal line'],
    ans:2,
    tp:'Hemophilia A (Factor VIII deficiency) is X-linked recessive. Males are affected; females are carriers. Maternal uncle pattern is classic. Prolonged aPTT (intrinsic pathway: XII→XI→IX→VIII→X) with normal PT (extrinsic). Hemophilia B = Factor IX deficiency, same pattern. vWD: ↑ aPTT + normal/prolonged BT, but Factor VIII may be low (vWF stabilizes Factor VIII). Treatment: recombinant Factor VIII concentrate.'
  },
  {
    id:'q019', block:1, system:'multisystem', topic:'Sepsis management',
    stem:'A 72-year-old man with COPD presents with fever of 39.2°C, confusion, HR 118, BP 88/52 mmHg, RR 26. Lactate is 4.8 mmol/L. He is started on IV fluids and broad-spectrum antibiotics. After 2L of crystalloid, BP is 84/50 mmHg. Which of the following is the most appropriate next step?',
    opts:['A. Give 2 more liters of normal saline bolus','B. Start norepinephrine and target MAP ≥65 mmHg','C. Administer hydrocortisone 200 mg IV stat','D. Initiate dobutamine for myocardial support','E. Begin transfusion of packed red blood cells'],
    ans:1,
    tp:'Septic shock: fluid-refractory hypotension despite adequate resuscitation (30mL/kg IVF). Vasopressors are indicated to achieve MAP ≥65 mmHg. Norepinephrine is the FIRST-LINE vasopressor (α1 > β1, minimal β2). Vasopressin can be added second. Dobutamine if myocardial depression. Hydrocortisone only if vasopressor-refractory shock. RBC transfusion target Hgb <7 in sepsis (not a hemodynamic intervention).'
  },
  {
    id:'q020', block:1, system:'neuro_behav', topic:'Major depressive disorder',
    stem:'A 34-year-old woman presents with depressed mood, inability to feel pleasure, hypersomnia, increased appetite, fatigue, difficulty concentrating, and feelings of worthlessness for 6 weeks. She denies suicidal ideation. She was previously treated for a "high energy" period during which she slept only 3 hours/night, started multiple businesses, and spent her savings impulsively, lasting about 10 days. Which medication is most likely to worsen her condition?',
    opts:['A. Lithium carbonate','B. Sertraline monotherapy','C. Lamotrigine','D. Quetiapine','E. Valproic acid'],
    ans:1,
    tp:'This is BIPOLAR DISORDER (current depressive episode + prior hypomanic episode with decreased sleep, grandiosity, impulsivity, lasting 4+ days). Antidepressant monotherapy in bipolar disorder can precipitate MANIA ("switching"). Treatment: lithium or valproate + quetiapine for acute depression, or lamotrigine for maintenance. Always rule out bipolar before starting antidepressants in depression.'
  },

  // ── BLOCK 2 ──────────────────────────────────────────────────────
  {
    id:'q021', block:2, system:'resp_renal', topic:'COPD exacerbation',
    stem:'A 68-year-old man with a 50 pack-year smoking history presents with worsening dyspnea, increased sputum production, and sputum that has changed from white to green. He is on tiotropium and salmeterol/fluticasone at home. ABG: pH 7.31, pCO2 62, pO2 52, HCO3 29. Chest X-ray shows hyperinflation with no infiltrate. Which of the following is the most appropriate initial oxygen therapy?',
    opts:['A. Non-rebreather mask at 15 L/min targeting SpO2 >98%','B. Controlled low-flow O2 via Venturi mask targeting SpO2 88–92%','C. Immediate BiPAP for all COPD exacerbations','D. No supplemental oxygen; risk of apnea outweighs benefits','E. High-flow nasal cannula at 60 L/min'],
    ans:1,
    tp:'COPD patients with chronic hypercapnia rely partly on hypoxic drive. Excessive O2 corrects hypoxic vasoconstriction (V/Q mismatch worsens), and removes hypoxic drive → CO2 retention → respiratory acidosis. Target SpO2 88–92% in COPD exacerbation using controlled Venturi mask. This ABG shows acute-on-chronic respiratory acidosis (high CO2, compensatory HCO3). BiPAP indicated for respiratory failure (pH <7.35, RR >25, or accessory muscle use).'
  },
  {
    id:'q022', block:2, system:'gastrointestinal', topic:'Colorectal cancer screening',
    stem:'A 52-year-old man with no family history of colon cancer presents for a routine checkup. He has no symptoms. He takes aspirin for cardiovascular prevention. Which of the following is the most appropriate colorectal cancer screening recommendation?',
    opts:['A. Colonoscopy now; repeat in 10 years if normal','B. Annual fecal occult blood testing only','C. CT colonography every 5 years beginning at age 60','D. Flexible sigmoidoscopy every 3 years','E. No screening needed until age 65 per current guidelines'],
    ans:0,
    tp:'Average-risk CRC screening begins at age 45 (updated USPSTF 2021). Colonoscopy every 10 years is the gold standard — allows direct visualization AND polypectomy. Alternatives: annual FIT (fecal immunochemical test), annual gFOBT, stool DNA (Cologuard) every 1–3 years, CT colonography every 5 years. Positive non-invasive test → colonoscopy. Family history of first-degree relative with CRC → start at 40 or 10 years earlier than relative\'s diagnosis.'
  },
  {
    id:'q023', block:2, system:'endo_repro', topic:'Thyroid cancer',
    stem:'A 32-year-old woman presents with an asymptomatic 2.5 cm thyroid nodule discovered incidentally. She received radiation to her neck at age 8 for Hodgkin lymphoma. FNA biopsy shows cells with ground-glass nuclei, nuclear grooves, intranuclear inclusions, and psammoma bodies. She has a normal TSH. What is the most likely diagnosis and its cell of origin?',
    opts:['A. Medullary thyroid carcinoma from parafollicular C cells','B. Papillary thyroid carcinoma from follicular epithelial cells','C. Follicular thyroid carcinoma from follicular epithelial cells','D. Anaplastic thyroid carcinoma from dedifferentiated follicular cells','E. Hurthle cell carcinoma from oxyphilic follicular cells'],
    ans:1,
    tp:'Papillary thyroid carcinoma (PTC) is the most common thyroid cancer (~80%). Associated with prior radiation. Pathology: Orphan Annie eye nuclei (ground-glass), nuclear grooves, intranuclear inclusions, psammoma bodies. Spreads via lymphatics (regional nodes). Good prognosis (>95% 10-year survival). BRAF V600E mutation most common. Medullary carcinoma: calcitonin-producing C cells, associated with MEN2A/2B, RET mutation, Congo red staining.'
  },
  {
    id:'q024', block:2, system:'neuro_behav', topic:'Multiple sclerosis',
    stem:'A 28-year-old woman presents with a 3-day history of unilateral right eye pain that worsens with eye movement, along with decreased visual acuity in the right eye. Two years ago she had an episode of bilateral leg weakness and tingling that resolved completely over 6 weeks. MRI of the brain with gadolinium shows multiple periventricular white matter lesions, one of which enhances. VEP (visual evoked potentials) are delayed bilaterally. Oligoclonal bands are present in the CSF. Which of the following best characterizes the pathophysiology?',
    opts:['A. Axonal degeneration caused by accumulation of tau protein','B. Demyelination of central white matter from CD4+ T-cell mediated autoimmune attack','C. Peripheral nerve demyelination triggered by molecular mimicry after infection','D. Wallerian degeneration of motor neurons from B cell attack','E. Inflammatory vasculitis of small cerebral vessels causing lacunar infarcts'],
    ans:1,
    tp:'Multiple sclerosis: CD4+ T cell (Th1/Th17) mediated autoimmune demyelination of CNS (brain, spinal cord, optic nerves). Diagnosis requires dissemination in time AND space (McDonald criteria). Oligoclonal bands in CSF (not serum) are present in >95%. Current episode = optic neuritis (monosymptomatic). MRI: periventricular plaques, Dawson fingers. Treatment: beta-interferon, glatiramer acetate, natalizumab. GBS = peripheral demyelination (Schwann cells), ascending paralysis post-infection.'
  },
  {
    id:'q025', block:2, system:'cardiovascular', topic:'Heart failure with reduced EF',
    stem:'A 58-year-old man with a history of anterior MI 3 years ago presents with progressive dyspnea on exertion and orthopnea. Examination reveals JVD, bibasilar crackles, S3 gallop, and pitting edema to the knees. Echo: EF 30%, dilated LV. Which of the following medications has been shown to reduce mortality in this patient?',
    opts:['A. Digoxin','B. Amlodipine','C. Furosemide','D. Carvedilol (beta-blocker)','E. Nitrates'],
    ans:3,
    tp:'HFrEF mortality-reducing medications (the RAAS/neuro-humoral blockers): ACE inhibitors (or ARBs), beta-blockers (carvedilol, metoprolol succinate, bisoprolol), aldosterone antagonists (spironolactone/eplerenone), and ARNI (sacubitril/valsartan). Digoxin reduces hospitalizations but NOT mortality. Furosemide and nitrates improve symptoms only. SGLT2 inhibitors (dapagliflozin, empagliflozin) now also reduce mortality in HFrEF.'
  },
  {
    id:'q026', block:2, system:'blood_immune', topic:'Sickle cell disease',
    stem:'A 22-year-old man with sickle cell disease presents with sudden severe chest pain, fever, cough, and dyspnea. CXR shows a new pulmonary infiltrate. O2 saturation is 88% on room air. Which of the following is the most immediate concern?',
    opts:['A. Pulmonary embolism due to hypercoagulability','B. Acute chest syndrome, which can be rapidly fatal','C. Community-acquired pneumonia requiring oral amoxicillin','D. Spontaneous pneumothorax from rib infarction','E. Pulmonary hypertension exacerbation'],
    ans:1,
    tp:'Acute chest syndrome (ACS) in sickle cell disease = new chest infiltrate + respiratory symptoms ± fever. It is a leading cause of death in SCD. Pathogenesis: vaso-occlusion in pulmonary vasculature → infarction, infection, fat embolism from infarcted bone marrow. Treatment: O2, IV fluids, antibiotics (atypical coverage), analgesia, incentive spirometry, and EXCHANGE TRANSFUSION (reduces HbS to <30%). Simple transfusion for mild cases. ACS can develop from other crises.'
  },
  {
    id:'q027', block:2, system:'resp_renal', topic:'Pulmonary embolism',
    stem:'A 45-year-old woman, 1 week post-total hip arthroplasty, develops sudden onset dyspnea, pleuritic chest pain, and hemoptysis. HR 118, BP 110/70, RR 26, SpO2 88%. ECG shows sinus tachycardia with S1Q3T3 pattern. CT pulmonary angiography shows bilateral pulmonary emboli. Which of the following is the best initial anticoagulation?',
    opts:['A. Warfarin with INR target 2–3, start immediately','B. Unfractionated heparin IV or LMWH subcutaneous','C. Dabigatran (direct thrombin inhibitor) alone','D. Aspirin 325 mg and clopidogrel','E. Systemic thrombolytics immediately for all PE cases'],
    ans:1,
    tp:'Acute PE anticoagulation: LMWH (enoxaparin) or UFH IV are preferred initial therapy. UFH preferred if: severe renal impairment, very high bleeding risk (easier to reverse), or if thrombolytics might be needed. Warfarin cannot be started alone (protein C/S are rapidly depleted → transient hypercoagulability). DOACs (rivaroxaban, apixaban) are first-line in stable PE. Thrombolytics reserved for massive PE with hemodynamic instability (not all PE).'
  },
  {
    id:'q028', block:2, system:'gastrointestinal', topic:'Crohn disease vs. UC',
    stem:'A 26-year-old woman presents with 3 months of right lower quadrant crampy abdominal pain, 4-5 loose stools per day without gross blood, a 5 kg weight loss, and oral ulcers. She denies smoking. Colonoscopy shows skip lesions with cobblestoning from the terminal ileum extending to the ascending colon. Biopsy shows transmural inflammation with non-caseating granulomas. Which of the following best distinguishes this from ulcerative colitis?',
    opts:['A. The presence of bloody diarrhea','B. Rectal involvement is always present in UC but not in Crohn\'s','C. Transmural inflammation with granulomas and skip lesions','D. Elevated CRP and ESR occur only in Crohn\'s disease','E. Increased risk of colorectal cancer in UC only'],
    ans:2,
    tp:'Crohn vs UC: Crohn = transmural (all layers), skip lesions, can affect any part of GI tract (mouth to anus, but spares rectum ~50%), cobblestoning, non-caseating granulomas, fistulas/abscesses, associated with smoking. UC = mucosal only, continuous from rectum proximally, no skip lesions, bloody diarrhea predominates. Both increase CRC risk (UC >> Crohn in colon). Both have extraintestinal manifestations (uveitis, pyoderma, arthritis, PSC more with UC).'
  },
  {
    id:'q029', block:2, system:'msk_skin', topic:'Gout',
    stem:'A 52-year-old obese man with hypertension treated with hydrochlorothiazide and CKD presents with sudden onset excruciating pain, redness, warmth, and swelling of his right big toe that awoke him from sleep. WBC 11,200, uric acid 9.8 mg/dL. Aspiration of the joint shows negatively birefringent needle-shaped crystals under polarized light. Which of the following is the most appropriate treatment for this acute attack?',
    opts:['A. Start allopurinol immediately to lower uric acid','B. IV colchicine for rapid symptom resolution','C. Oral indomethacin (NSAID) or colchicine or prednisone','D. Probenecid to increase uric acid excretion','E. Discontinue hydrochlorothiazide immediately and start the patient on NSAIDs'],
    ans:2,
    tp:'Acute gout: monosodium urate crystals (negatively birefringent, needle-shaped). First MTP (podagra) is classic. Treatment of ACUTE attack: NSAIDs (indomethacin), colchicine, or glucocorticoids. Do NOT start urate-lowering therapy (allopurinol, febuxostat) during acute attack — can prolong/worsen the flare by mobilizing crystals. Once acute attack resolved (weeks), start allopurinol for chronic prevention. HCTZ causes hyperuricemia by competing with uric acid secretion.'
  },
  {
    id:'q030', block:2, system:'endo_repro', topic:'Polycystic ovary syndrome',
    stem:'A 22-year-old woman presents with irregular menstrual periods (cycles ranging from 35–60 days) for 3 years, acne, and increased facial hair growth. She is obese (BMI 34). Fasting glucose is 108 mg/dL, LH:FSH ratio is 3:1. Pelvic ultrasound shows 12 follicles in each ovary, each <10mm, arranged peripherally ("string of pearls"). TSH and prolactin are normal. Which of the following is the first-line treatment for her menstrual irregularity?',
    opts:['A. Metformin alone','B. Clomiphene citrate for ovulation induction','C. Combined oral contraceptive pill','D. Spironolactone alone','E. GnRH agonist to suppress the hypothalamic-pituitary axis'],
    ans:2,
    tp:'PCOS diagnosis: Rotterdam criteria (2 of 3): oligoovulation/anovulation, clinical/biochemical hyperandrogenism, polycystic ovaries on US. First-line management depends on goal: Menstrual regulation + hyperandrogenism → Combined OCP (estrogen + progestin). Fertility (ovulation induction) → Clomiphene or letrozole. Insulin resistance/metabolic → Metformin (also helps with ovulation). Weight loss is beneficial for all goals. Screen for metabolic syndrome, type 2 DM, and endometrial hyperplasia.'
  },
  {
    id:'q031', block:2, system:'multisystem', topic:'Tuberculosis',
    stem:'A 35-year-old man emigrated from Southeast Asia 2 years ago. He presents with 3 months of productive cough, night sweats, low-grade fever, and a 6 kg weight loss. CXR shows bilateral upper lobe infiltrates with cavitation. Sputum AFB smear is positive. He is started on RIPE therapy. Which of the following is a potential serious adverse effect requiring specific monitoring?',
    opts:['A. Isoniazid causing optic neuritis requiring monthly visual acuity testing','B. Rifampin causing nephrotoxicity monitored with serum creatinine','C. Pyrazinamide causing hyperuricemia and hepatotoxicity','D. Ethambutol causing red-green color blindness requiring visual acuity testing','E. Streptomycin causing cardiac arrhythmias'],
    ans:3,
    tp:'RIPE side effects: Rifampin → orange body fluids, hepatotoxicity, CYP450 inducer (reduces OCP efficacy). Isoniazid → peripheral neuropathy (give B6/pyridoxine), hepatotoxicity, lupus-like syndrome. Pyrazinamide → hepatotoxicity, hyperuricemia, gout. Ethambutol → optic neuritis (red-green color blindness, decreased visual acuity) — CHECK BASELINE VISION and monitor monthly. Streptomycin → ototoxicity and nephrotoxicity. Q asks about ethambutol specifically requiring visual testing.'
  },
  {
    id:'q032', block:2, system:'neuro_behav', topic:'Subarachnoid hemorrhage',
    stem:'A 44-year-old woman presents with the "worst headache of her life" that came on suddenly while exercising. She has a mild nuchal rigidity but no focal neurological deficits. Her BP is 168/92 mmHg. CT head is performed within 2 hours and appears normal. Which of the following is the most appropriate next step?',
    opts:['A. MRI brain with contrast to rule out hemorrhage','B. Immediate CT angiography to identify the bleeding source','C. Lumbar puncture to evaluate for xanthochromia and RBCs','D. Admit for observation and repeat CT in 24 hours','E. Discharge with NSAIDs and neurology follow-up'],
    ans:2,
    tp:'Thunderclap headache = subarachnoid hemorrhage until proven otherwise. CT head is 98% sensitive if done within 6 hours but NOT 100%. If CT negative, LUMBAR PUNCTURE is mandatory to look for xanthochromia (yellow discoloration from bilirubin — pathognomonic, appears >2h after bleed) and elevated RBC count that doesn\'t clear between tubes 1 and 4. Most common cause: ruptured berry (saccular) aneurysm at Circle of Willis bifurcations. Once confirmed, CT angiography to locate aneurysm.'
  },
  {
    id:'q033', block:2, system:'resp_renal', topic:'Chronic kidney disease complications',
    stem:'A 58-year-old woman with diabetes and CKD stage 4 (GFR 22 mL/min) presents for routine follow-up. Labs: K 5.8 mEq/L, bicarb 16 mEq/L, phosphorus 6.2 mg/dL, calcium 7.9 mg/dL, PTH 410 pg/mL (elevated), Hgb 9.4 g/dL. Which of the following best explains the elevated PTH?',
    opts:['A. Primary hyperparathyroidism from autonomous parathyroid adenoma','B. Decreased vitamin D activation → hypocalcemia → secondary hyperparathyroidism','C. Hyperphosphatemia directly stimulating PTH release via FGF-23','D. Hypercalcemia from excess calcium intake suppressing PTH','E. Aluminum toxicity suppressing renal 1-α hydroxylase'],
    ans:1,
    tp:'CKD → ↓1α-hydroxylase → ↓active vitamin D (1,25-OH) → ↓Ca absorption → hypocalcemia → ↑PTH. Also: ↓GFR → ↑phosphate → ↑FGF-23 → ↓1α-hydroxylase (worsens cycle). This is SECONDARY hyperparathyroidism. Bones become resorbed (renal osteodystrophy). Treatment: phosphate binders, vitamin D analogs (calcitriol), calcimimetics (cinacalcet). CKD anemia from ↓EPO → treat with erythropoiesis-stimulating agents + IV iron.'
  },
  {
    id:'q034', block:2, system:'gastrointestinal', topic:'Pancreatitis',
    stem:'A 42-year-old man with a history of heavy alcohol use presents with severe epigastric pain radiating to his back, nausea, and vomiting for 12 hours. He is diaphoretic and has board-like rigidity of his abdomen. Labs: amylase 980 U/L, lipase 1540 U/L, WBC 16,800. Calcium is 7.1 mg/dL. Which of the following calcium-related prognostic signs is most concerning about his prognosis?',
    opts:['A. Hypercalcemia over 10 mg/dL is a Ranson criterion','B. Hypocalcemia is a Ranson criterion suggesting severe disease','C. Calcium of 7.1 mg/dL is reassuring and does not affect prognosis','D. Ionized calcium is more reliable and is elevated in pancreatitis','E. Calcium >11 mg/dL suggests hypercalcemia-induced pancreatitis'],
    ans:1,
    tp:'Ranson criteria (for alcoholic pancreatitis, assessed at admission and 48h): at admission: age >55, WBC >16k, glucose >200, LDH >350, AST >250. At 48h: Ca <8 mg/dL (hypocalcemia — from saponification of peripancreatic fat), hematocrit drop >10%, BUN rise >5, PO2 <60, base deficit >4, fluid sequestration >6L. Score ≥3 = severe. Hypocalcemia occurs because calcium soaps form from lipolysis. Mortality rises significantly with higher scores.'
  },
  {
    id:'q035', block:2, system:'blood_immune', topic:'CLL',
    stem:'A 70-year-old man is noted incidentally to have a WBC of 85,000/μL with 85% small, mature-appearing lymphocytes on peripheral smear. He has no symptoms. CT shows mild splenomegaly and cervical lymphadenopathy. Flow cytometry shows CD5+, CD19+, CD20 (dim), CD23+ cells with surface immunoglobulin co-expressing both CD5 and CD23. Which of the following is the most appropriate management?',
    opts:['A. Immediate initiation of cyclophosphamide-based chemotherapy','B. Watchful waiting ("watch and wait") for asymptomatic early-stage disease','C. Allogeneic stem cell transplant for definitive cure','D. Rituximab monotherapy to eradicate the clone','E. Prednisone to prevent autoimmune complications'],
    ans:1,
    tp:'Chronic lymphocytic leukemia (CLL): most common adult leukemia in the West. Small mature B cells: CD5+, CD19+, CD23+ (co-expression of CD5 with B cell markers is key). Smudge cells on peripheral smear. Asymptomatic early-stage (Rai 0-2, Binet A): watch and wait — treatment does not improve survival until symptomatic. Treat for: B symptoms, progressive cytopenias, bulky disease, rapid lymphocyte doubling. Treatment: ibrutinib (BTK inhibitor) or venetoclax + obinutuzumab.'
  },
  {
    id:'q036', block:2, system:'msk_skin', topic:'Systemic sclerosis',
    stem:'A 44-year-old woman presents with 2 years of bilateral hand color changes triggered by cold (white → blue → red), tight skin of the fingers and face, difficulty swallowing, and dyspnea on exertion. Examination reveals skin thickening limited to the hands, forearms, and face; telangiectasias; and digital pitting scars. Anti-centromere antibody is positive. Which of the following complications is she most at risk for?',
    opts:['A. Renal crisis with rapid hypertension and renal failure','B. Pulmonary arterial hypertension','C. Rapidly progressive interstitial lung disease','D. Large bowel obstruction from mesenteric fibrosis','E. Lymphoma from chronic immune stimulation'],
    ans:1,
    tp:'This is LIMITED systemic sclerosis (formerly CREST: Calcinosis, Raynaud, Esophageal dysmotility, Sclerodactyly, Telangiectasia). Anti-centromere antibody = limited SSc. PULMONARY ARTERIAL HYPERTENSION (PAH) is the most feared complication of LIMITED SSc (vs. diffuse SSc → renal crisis). Anti-Scl-70 (anti-topoisomerase I) = diffuse SSc → interstitial lung disease + renal crisis. Scleroderma renal crisis treated with ACE inhibitors (captopril).'
  },
  {
    id:'q037', block:2, system:'endo_repro', topic:'Adrenal insufficiency',
    stem:'A 38-year-old woman with type 1 diabetes presents to the ED in shock: BP 78/42, HR 122, temp 38.3°C. She appears hyperpigmented. Labs: Na 128, K 6.1, glucose 48 mg/dL, cortisol 3 μg/dL (severely low). She mentions she recently had a "stomach flu" and ran out of "some medication." Which of the following is the most appropriate immediate treatment?',
    opts:['A. IV 0.9% NaCl and dextrose, followed by IV hydrocortisone 100 mg','B. Oral prednisone 40 mg and fludrocortisone','C. IV vasopressin to raise blood pressure','D. Administer ACTH stimulation test before starting steroids','E. IV methylprednisolone and insulin for hyperkalemia'],
    ans:0,
    tp:'Adrenal crisis: life-threatening adrenal insufficiency, often triggered by stress/illness in a patient on chronic glucocorticoids or with primary AI. Primary AI (Addison\'s disease): hyperpigmentation (↑ACTH/MSH), hyponatremia, HYPERKALEMIA (loss of aldosterone), hypoglycemia. Treatment of CRISIS: IV hydrocortisone 100 mg STAT (do not delay for ACTH stim test in emergency), aggressive IV fluids, glucose. Mineralocorticoid effect of hydrocortisone is sufficient in crisis. Add fludrocortisone when patient stabilized.'
  },
  {
    id:'q038', block:2, system:'human_dev', topic:'Down syndrome',
    stem:'A 38-year-old woman gives birth to a male infant with hypotonia, flat facial profile, upslanting palpebral fissures, single palmar crease, and a loud harsh holosystolic murmur at the left lower sternal border. Echocardiogram shows an atrioventricular septal defect (AVSD). Chromosomal analysis reveals trisomy 21. Which of the following best describes the most common mechanism causing this chromosomal abnormality?',
    opts:['A. Balanced reciprocal translocation in the father','B. Robertsonian translocation of chromosome 21 to chromosome 14','C. Nondisjunction during maternal meiosis I, associated with advanced maternal age','D. Uniparental disomy with two copies from the father','E. Chromosomal deletion in the critical 21q22 region'],
    ans:2,
    tp:'Trisomy 21 (Down syndrome): most common chromosomal disorder and most common cause of intellectual disability. 95% due to nondisjunction during maternal meiosis I (associated with advanced maternal age — chromosome 21 homologs fail to separate). 4% Robertsonian translocation (14;21) — not age-dependent, recurrence risk higher. 1% mosaic. Most common cardiac defect: AVSD (also VSD, ASD, PDA). Other features: Brushfield spots, Hirschsprung, ALL (most common childhood leukemia in DS), early Alzheimer.'
  },
  {
    id:'q039', block:2, system:'neuro_behav', topic:'Meningitis',
    stem:'A 19-year-old college student presents to the ED with fever of 39.8°C, severe headache, photophobia, and neck stiffness for 12 hours. A petechial rash is noted on the trunk and extremities. He lives in a dormitory. LP shows: WBC 2,800 (95% PMNs), glucose 28 mg/dL (serum glucose 90), protein 180 mg/dL, Gram-negative diplococci on Gram stain. Which of the following is the most appropriate immediate management?',
    opts:['A. Start vancomycin and ceftriaxone after CT head','B. IV dexamethasone and ceftriaxone immediately; do not delay for CT','C. IV acyclovir for presumed viral meningitis','D. Lumbar puncture for culture, then delay antibiotics until results','E. IV ampicillin and gentamicin'],
    ans:1,
    tp:'N. meningitidis meningitis: gram-negative diplococci, petechial/purpuric rash (meningococcemia), complement deficiencies predispose. In bacterial meningitis: give dexamethasone and antibiotics IMMEDIATELY — do not delay for CT (only CT first if: papilledema, focal neuro deficits, severely immunocompromised, altered consciousness, seizure). Dexamethasone reduces mortality and neurologic sequelae (especially in S. pneumoniae). Empiric: vancomycin + ceftriaxone ± ampicillin (for Listeria if elderly/immunocompromised/pregnant).'
  },
  {
    id:'q040', block:2, system:'cardiovascular', topic:'Atrial fibrillation',
    stem:'A 65-year-old man with hypertension and type 2 diabetes is found to have an irregularly irregular heart rhythm. ECG confirms atrial fibrillation. HR is 110 bpm. He reports mild palpitations but no chest pain or dyspnea. Echo shows EF 55% with no valvular disease. His CHA2DS2-VASc score is 3. Which of the following is the most appropriate management for stroke prevention?',
    opts:['A. Aspirin 325 mg daily','B. Warfarin with INR 2–3','C. A direct oral anticoagulant (DOAC, e.g., apixaban)','D. Aspirin plus clopidogrel','E. No anticoagulation needed until his score reaches 4'],
    ans:2,
    tp:'CHA2DS2-VASc score ≥2 in males (≥3 in females) → oral anticoagulation. DOACs (apixaban, rivaroxaban, dabigatran, edoxaban) are preferred over warfarin for non-valvular AF due to: no INR monitoring needed, fewer drug interactions, lower risk of intracranial hemorrhage. Warfarin preferred for: mechanical heart valves, severe mitral stenosis. Aspirin is NOT adequate stroke prevention for AF. Rate control: beta-blockers or non-DHP CCBs.'
  },

  // ── BLOCK 3 ──────────────────────────────────────────────────────
  {
    id:'q041', block:3, system:'resp_renal', topic:'Pneumonia — atypical',
    stem:'A 22-year-old college student presents with a 2-week history of gradual onset cough (occasionally productive), low-grade fever, headache, and malaise. He is mildly ill-appearing. CXR shows bilateral diffuse interstitial infiltrates that look "worse than the patient." Cold agglutinin titer is elevated. Sputum Gram stain shows few organisms. Which of the following is the most appropriate antibiotic?',
    opts:['A. Amoxicillin','B. Azithromycin','C. Cefepime','D. Trimethoprim-sulfamethoxazole','E. Metronidazole'],
    ans:1,
    tp:'Mycoplasma pneumoniae ("walking pneumonia"): most common cause of atypical (interstitial) pneumonia in young adults. Gradual onset, CXR worse than patient appears. No cell wall → beta-lactams ineffective. Cold agglutinins (IgM against RBC I antigen) cause hemolytic anemia and are a clue on exam. Treatment: macrolides (azithromycin), tetracyclines (doxycycline), or fluoroquinolones. Can also cause Stevens-Johnson syndrome, erythema multiforme, and myocarditis in rare cases.'
  },
  {
    id:'q042', block:3, system:'blood_immune', topic:'DIC',
    stem:'A 28-year-old woman develops sudden severe bleeding from IV sites, ecchymoses, and vaginal hemorrhage 6 hours after a normal vaginal delivery complicated by placental abruption. Labs: PT 32s, aPTT 58s, fibrinogen 78 mg/dL, platelets 42,000/μL, D-dimer markedly elevated, peripheral smear shows schistocytes. Which of the following best describes the mechanism of her condition?',
    opts:['A. Heparin overdose inhibiting thrombin formation','B. Massive release of tissue factor activating both coagulation and fibrinolysis simultaneously','C. Vitamin K deficiency impairing synthesis of factors II, VII, IX, X','D. Autoimmune platelet destruction from anti-GPIIb/IIIa antibodies','E. Factor VIII inhibitor from alloimmunization'],
    ans:1,
    tp:'DIC (disseminated intravascular coagulation): systemic activation of coagulation → microthrombi → consumption of platelets and clotting factors → paradoxical bleeding. Labs: ↑PT, ↑aPTT, ↓fibrinogen, ↑D-dimer, thrombocytopenia, schistocytes (MAHA). Causes: sepsis (most common), obstetric emergencies (abruption, amniotic fluid embolism), trauma, malignancy, transfusion reactions. Treatment: treat underlying cause, FFP (factors), cryoprecipitate (fibrinogen), platelets. Heparin controversial.'
  },
  {
    id:'q043', block:3, system:'gastrointestinal', topic:'Esophageal cancer',
    stem:'A 62-year-old obese man with a 20-year history of GERD presents with progressive dysphagia, initially to solids and now to liquids, and a 10 kg weight loss over 4 months. He is a former smoker. Upper endoscopy shows a mass at the gastroesophageal junction with mucosal irregularity extending 4 cm. Biopsy shows glandular epithelium with malignant cells. Which of the following is the predisposing condition?',
    opts:['A. Achalasia with Candida esophagitis','B. Barrett esophagus from chronic acid reflux','C. Plummer-Vinson syndrome with esophageal webs','D. Zenker diverticulum with stasis carcinogenesis','E. Diffuse esophageal spasm with mural thickening'],
    ans:1,
    tp:'Adenocarcinoma of the esophagus/GEJ: associated with Barrett esophagus (columnar metaplasia replacing squamous epithelium at GEJ from chronic GERD). Risk factors: GERD, obesity, male sex, white race. Located in distal esophagus/GEJ. Squamous cell carcinoma: upper/mid esophagus, associated with smoking + alcohol, achalasia, Plummer-Vinson syndrome (webs + iron deficiency + dysphagia). Both present with progressive dysphagia and weight loss.'
  },
  {
    id:'q044', block:3, system:'endo_repro', topic:'Primary hyperaldosteronism',
    stem:'A 45-year-old woman presents with hypertension resistant to three antihypertensives, muscle weakness, and cramping. Lab work shows potassium 2.9 mEq/L, sodium 148 mEq/L, and a metabolic alkalosis. Aldosterone-to-renin ratio is markedly elevated. CT abdomen shows a 1.8 cm right adrenal adenoma. Which of the following is the most appropriate definitive treatment?',
    opts:['A. Spironolactone for lifetime mineralocorticoid blockade','B. Bilateral adrenalectomy','C. Laparoscopic right adrenalectomy','D. Amiloride to block ENaC channels','E. High-dose hydrocortisone to suppress ACTH'],
    ans:2,
    tp:'Primary hyperaldosteronism (Conn syndrome): most common cause of secondary hypertension. Excess aldosterone → Na retention → hypertension, hypokalemia, metabolic alkalosis. Elevated aldosterone:renin ratio is the screening test. Confirmatory: adrenal vein sampling. Unilateral adenoma → surgical adrenalectomy (curative). Bilateral hyperplasia → medical management with spironolactone (MR antagonist) or eplerenone. This case has a unilateral adenoma → surgery is first-line.'
  },
  {
    id:'q045', block:3, system:'neuro_behav', topic:'Seizure disorder',
    stem:'A 7-year-old boy\'s teacher reports that several times daily he appears to "blank out" for 5–10 seconds and then resumes activity as if nothing happened. He does not fall, shake, or lose bladder control. His parents thought he was daydreaming. EEG shows 3 Hz spike-and-wave discharges during hyperventilation. Which of the following is the most appropriate treatment?',
    opts:['A. Phenytoin','B. Carbamazepine','C. Ethosuximide','D. Valproic acid','E. Levetiracetam'],
    ans:2,
    tp:'Childhood absence epilepsy: brief (5–30s) staring spells with abrupt onset/offset, no postictal period, provoked by hyperventilation. EEG: 3 Hz spike-and-wave (pathognomonic). First-line: ETHOSUXIMIDE (thalamic T-type Ca2+ channel blocker, only effective for absence). Valproic acid if absence + other seizure types. AVOID phenytoin and carbamazepine (worsen absence seizures). Most children outgrow it. Contrast with juvenile absence epilepsy (adolescents, persists into adulthood, use valproate).'
  },
  {
    id:'q046', block:3, system:'msk_skin', topic:'Compartment syndrome',
    stem:'A 19-year-old man is brought to the ED following a motorcycle accident with a closed tibial fracture. His leg is splinted and immobilized. Four hours later, he reports excruciating pain in the leg that is out of proportion to his injury, and passive stretching of his toes causes severe pain. The leg is tense and feels "woody." Pulses are palpable and SpO2 is normal. Which of the following is the most appropriate next step?',
    opts:['A. IV morphine and repeat imaging in 6 hours','B. Immediate fasciotomy','C. Elevate the limb above heart level to reduce edema','D. Emergent arteriogram to rule out vascular injury','E. Apply ice packs and Ace wrap compression'],
    ans:1,
    tp:'Acute compartment syndrome: increased pressure in a closed fascial compartment → ischemia. The "5 P\'s": Pain (out of proportion), Pressure (tense compartment), Paralysis, Paresthesias, Pallor/Pulselessness (LATE findings — do not wait for absent pulses). Key early sign: pain with PASSIVE STRETCH. Normal pulses do NOT rule it out. Compartment pressure >30 mmHg (or within 30 mmHg of diastolic BP) → emergency FASCIOTOMY. Elevating limb decreases perfusion pressure and worsens ischemia — contraindicated.'
  },
  {
    id:'q047', block:3, system:'cardiovascular', topic:'Cardiac tamponade',
    stem:'A 55-year-old woman with metastatic breast cancer presents with progressive dyspnea over 1 week and low-grade fever. On examination, BP is 90/60 with a paradoxical pulse of 18 mmHg. JVD is present. Heart sounds are distant. ECG shows electrical alternans. Echocardiogram shows a large pericardial effusion with right ventricular diastolic collapse. Which of the following best explains the physiology of pulsus paradoxus in this condition?',
    opts:['A. Decreased LV preload during inspiration due to tamponade\'s exaggeration of normal ventricular interdependence','B. Increased afterload from elevated pericardial pressure during expiration','C. Vagal stimulation causing sinus arrhythmia during respiration','D. Decreased venous return during inspiration causing hypotension','E. Paradoxical septal motion from LBBB'],
    ans:0,
    tp:'Cardiac tamponade: compression of heart by pericardial fluid → equalization of diastolic pressures, decreased cardiac output. Beck\'s triad: hypotension, JVD, muffled heart sounds. Electrical alternans (alternating QRS axis). Pulsus paradoxus (>10 mmHg BP drop with inspiration): normally inspiration increases RV filling; in tamponade, fixed pericardial space → RV expansion pushes interventricular septum LEFT → decreases LV filling → BP drops. Treatment: pericardiocentesis (drain the effusion).'
  },
  {
    id:'q048', block:3, system:'resp_renal', topic:'Lung cancer',
    stem:'A 65-year-old man with a 40 pack-year smoking history presents with hemoptysis, weight loss, and a persistent cough for 3 months. CXR shows a 3.5 cm perihilar mass. Bronchoscopy biopsy shows polygonal cells with abundant cytoplasm, intercellular bridges, and keratin pearls. Which of the following paraneoplastic syndromes is most commonly associated with this histological type?',
    opts:['A. SIADH causing hyponatremia','B. Hypercalcemia from PTHrP secretion','C. Cushing syndrome from ectopic ACTH','D. Eaton-Lambert syndrome from anti-VGCC antibodies','E. Limbic encephalitis from anti-Hu antibodies'],
    ans:1,
    tp:'Squamous cell carcinoma (SCC) of the lung: central/perihilar location, associated with smoking, keratin pearls and intercellular bridges on pathology. Paraneoplastic: PTHrP → hypercalcemia. Adenocarcinoma: peripheral, most common in non-smokers/women, EGFR/ALK mutations, club (Clara) cells. Small cell: SIADH (ADH), ectopic ACTH (Cushing), Eaton-Lambert (anti-VGCC), anti-Hu (encephalitis), most aggressive, central, neuroendocrine. Large cell: peripheral, undifferentiated, β-hCG (gynecomastia).'
  },
  {
    id:'q049', block:3, system:'gastrointestinal', topic:'Hepatic encephalopathy',
    stem:'A 58-year-old man with alcoholic cirrhosis presents confused with slurred speech and asterixis. He had a large GI bleed 3 days ago treated with blood transfusions. His medications include lactulose and spironolactone. Labs: ammonia 98 μmol/L, BUN 42 mg/dL, creatinine 1.2 mg/dL. Which of the following best explains why the GI bleed precipitated his encephalopathy?',
    opts:['A. Blood in the gut serves as a protein substrate, increasing ammonia production by colonic bacteria','B. Transfusions suppress erythropoiesis, reducing amino acid clearance','C. Blood loss reduces cerebral perfusion pressure, causing direct neuronal injury','D. Coagulation factors in transfused blood directly cross the blood-brain barrier','E. Hyponatremia from blood loss causes cerebral edema'],
    ans:0,
    tp:'Hepatic encephalopathy precipitants (GAPS mnemonic): GI bleed (blood = protein load → ammonia ↑), Alkalosis/Azotemia, Portosystemic shunt (TIPS), Sedatives/Infection. Blood in the gut is metabolized by colonic bacteria → ammonia → absorbed → cannot be cleared by failing liver → crosses BBB → encephalopathy. Treatment: lactulose (acidifies colon, traps NH4+, cathartic), rifaximin (non-absorbable antibiotic reducing ammonia-producing bacteria), treat precipitant.'
  },
  {
    id:'q050', block:3, system:'msk_skin', topic:'Melanoma',
    stem:'A 52-year-old fair-skinned woman presents with a changing pigmented lesion on her back. She noticed it darkened and grew over the past 6 months. Dermoscopy reveals asymmetry, irregular borders, multiple colors (tan, brown, black, red), and a diameter of 8 mm. Which of the following is the most appropriate next step?',
    opts:['A. Shave biopsy to determine depth','B. Punch biopsy of the darkest area only','C. Full-thickness excisional biopsy with 1–2 mm margins','D. Topical imiquimod and reassess in 3 months','E. Wide local excision with 2 cm margins immediately'],
    ans:2,
    tp:'ABCDE criteria for melanoma: Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolution. Suspected melanoma → excisional biopsy (remove entire lesion with 1-2mm margins) to determine Breslow depth (thickness in mm), which dictates definitive surgical margins. NEVER shave biopsy (can\'t assess Breslow depth), never partial biopsy first. After pathology: Breslow <1mm → 1cm margins; 1–2mm → 1–2cm; >2mm → 2cm margins ± sentinel lymph node biopsy.'
  },
  {
    id:'q051', block:3, system:'neuro_behav', topic:'Schizophrenia',
    stem:'A 21-year-old man is brought by his parents after they noticed he has been isolating in his room for 6 months, stopped bathing, talks to himself, and recently told them that his neighbors are using a "satellite device" to insert thoughts into his head. He has no medical history and takes no medications. Mental status exam reveals flat affect, poverty of speech, and looseness of associations. Urine drug screen is negative. Which of the following is the best initial treatment?',
    opts:['A. Lorazepam to reduce agitation while awaiting spontaneous remission','B. A second-generation (atypical) antipsychotic','C. A selective serotonin reuptake inhibitor for negative symptoms','D. Mood stabilizer such as lithium for thought insertion','E. Electroconvulsive therapy for refractory psychosis'],
    ans:1,
    tp:'Schizophrenia diagnosis: ≥2 of (delusions, hallucinations, disorganized speech, disorganized behavior, negative symptoms) for ≥1 month, total duration ≥6 months. Positive symptoms: delusions (thought insertion), hallucinations, disorganized speech. Negative symptoms (4 A\'s): flat Affect, Alogia, Avolition, Anhedonia. Treatment: antipsychotics. Second-generation (atypical) preferred: less EPS, target both + and − symptoms. Clozapine for refractory cases (requires CBC monitoring for agranulocytosis). Psychoeducation + family therapy essential.'
  },
  {
    id:'q052', block:3, system:'endo_repro', topic:'Ovarian cancer',
    stem:'A 62-year-old nulliparous woman with a family history of breast cancer (BRCA1 mutation carrier) presents with abdominal bloating, early satiety, and increased abdominal girth for 4 months. CA-125 is 890 U/mL (normal <35). Pelvic ultrasound shows bilateral complex ovarian masses with solid components and ascites. Which of the following is the most important prognostic factor for this malignancy?',
    opts:['A. Serum CA-125 level at diagnosis','B. Patient\'s age and menopausal status','C. Surgical stage at the time of diagnosis','D. BRCA1 mutation status (associated with better prognosis paradoxically)','E. Histological grade and cell type only'],
    ans:2,
    tp:'Epithelial ovarian cancer: most common gynecologic malignancy causing death (diagnosed late because peritoneum accommodates tumor before symptoms). Risk factors: nulliparity, BRCA1/2, family history. Protective: OCP use, breastfeeding. STAGE is the most important prognostic factor. Stage I (limited to ovary): 90% 5-year survival; Stage IV (distant mets): <20%. Most diagnosed at Stage III (peritoneal seeding). Treatment: debulking surgery + platinum/taxane chemotherapy. BRCA-mutated tumors are more platinum-sensitive → actually BETTER prognosis.'
  },
  {
    id:'q053', block:3, system:'resp_renal', topic:'Renal cell carcinoma',
    stem:'A 55-year-old man presents with flank pain, gross hematuria, and a left-sided flank mass. He is an ex-smoker. Labs: hemoglobin 17.2 g/dL (elevated), calcium 11.4 mg/dL. CT abdomen shows a heterogeneous mass in the left kidney with areas of necrosis. Which of the following best explains the polycythemia?',
    opts:['A. Bone marrow infiltration by renal carcinoma cells','B. Ectopic erythropoietin production by the tumor','C. Dehydration concentrating the hemoglobin','D. Splenic sequestration of plasma reducing measured hematocrit','E. JAK2 mutation causing primary polycythemia vera'],
    ans:1,
    tp:'Renal cell carcinoma (RCC): classic triad = flank pain + hematuria + palpable mass (presents late). Paraneoplastic syndromes: ectopic EPO → polycythemia; ectopic PTHrP → hypercalcemia; ectopic ACTH → Cushing; renin → hypertension. Clear cell RCC most common, associated with VHL tumor suppressor gene mutation. Also associated with von Hippel-Lindau disease. Left-sided varicocele that does NOT decompress when supine → left gonadal vein blocked by left renal vein tumor thrombus.'
  },
  {
    id:'q054', block:3, system:'blood_immune', topic:'Anemia of chronic disease',
    stem:'A 65-year-old woman with rheumatoid arthritis presents with fatigue and dyspnea on exertion for 6 months. Hgb 9.6 g/dL, MCV 80 fL (normocytic). Serum iron is low, TIBC is low, serum ferritin is 145 ng/mL (elevated). Reticulocyte count is low. Which of the following best explains the elevated ferritin?',
    opts:['A. Iron supplements taken by the patient causing excess iron storage','B. Ferritin is an acute phase reactant elevated by chronic inflammation via IL-6/hepcidin','C. Hemolysis releasing intracellular ferritin into the bloodstream','D. Excess dietary iron absorption from achlorhydria','E. Transferrin saturation above 50% from hemochromatosis'],
    ans:1,
    tp:'Anemia of chronic disease (ACI): chronic inflammation → ↑IL-6 → ↑hepcidin (produced by liver) → hepcidin blocks ferroportin on macrophages/enterocytes → iron trapped in macrophages → ↓serum iron, ↓TIBC (transferrin downregulated — opposite of IDA!), ↑ferritin (iron sequestered). Normocytic or mildly microcytic, ↓EPO response. Ferritin is also an acute-phase reactant. Treatment: treat underlying disease; EPO-stimulating agents in specific cases. Key: ferritin HIGH (vs. IDA where ferritin is LOW).'
  },
  {
    id:'q055', block:3, system:'multisystem', topic:'HIV/AIDS',
    stem:'A 32-year-old man with HIV (CD4 count 42 cells/μL, not on ART) presents with 3 weeks of headache, fever, and neck stiffness. CSF India ink preparation shows encapsulated yeast. CSF cryptococcal antigen is positive. Which of the following is the most appropriate induction treatment?',
    opts:['A. Fluconazole 400 mg/day for 8 weeks','B. Voriconazole for azole-resistant Cryptococcus','C. Amphotericin B deoxycholate plus flucytosine for 2 weeks','D. Caspofungin (echinocandin) monotherapy','E. Initiate ART immediately alongside antifungal therapy'],
    ans:2,
    tp:'Cryptococcal meningitis in AIDS (CD4 <200): encapsulated yeast (Cryptococcus neoformans), India ink shows halo capsule, positive cryptococcal antigen. Treatment: INDUCTION with amphotericin B + flucytosine ×2 weeks → CONSOLIDATION with fluconazole ×8 weeks → MAINTENANCE with fluconazole (until CD4 >200 on ART). Do NOT start ART immediately (risk of IRIS — immune reconstitution inflammatory syndrome, especially dangerous in CNS cryptococcosis). Start ART after ~5 weeks when antifungal treatment is established.'
  },
  {
    id:'q056', block:3, system:'cardiovascular', topic:'Congestive heart failure exam findings',
    stem:'A 70-year-old man with chronic systolic heart failure presents for a routine visit. He denies symptoms but is noted on examination to have a new S3 gallop, JVD at 45 degrees, and 2+ pitting edema. Which of the following physical exam findings most directly indicates increased left ventricular filling pressures?',
    opts:['A. Pitting pedal edema from capillary hydrostatic pressure exceeding oncotic pressure','B. S3 gallop from rapid ventricular filling in a dilated, poorly compliant ventricle','C. JVD representing elevated central venous and right atrial pressures','D. Displaced point of maximal impulse indicating LV enlargement','E. Narrow pulse pressure from reduced stroke volume'],
    ans:1,
    tp:'S3 gallop (ventricular gallop): heard in early diastole, caused by rapid deceleration of blood hitting a dilated, non-compliant ventricle. Most SPECIFIC finding for elevated LV filling pressures and reduced EF. In young athletes, S3 can be normal (physiologic). S4 = atrial gallop, heard in late diastole, caused by stiff (non-compliant) ventricle — seen in diastolic dysfunction, LVH, hypertension. JVD reflects RIGHT heart pressures (CVP). Pedal edema reflects systemic venous pressure and albumin.'
  },
  {
    id:'q057', block:3, system:'gastrointestinal', topic:'Alcoholic liver disease',
    stem:'A 48-year-old man with heavy alcohol use presents with jaundice, fever, tender hepatomegaly, and anorexia for 3 weeks. He had his last drink 5 days ago. Labs: AST 320 U/L, ALT 110 U/L (AST:ALT ratio ~3:1), total bilirubin 8.2 mg/dL, GGT markedly elevated. Maddrey discriminant function is 38. Which of the following is the most appropriate treatment?',
    opts:['A. N-acetylcysteine for acetaminophen-related hepatotoxicity','B. Prednisolone 40 mg/day for 4 weeks for severe alcoholic hepatitis','C. Pegylated interferon-alpha and ribavirin','D. Ursodeoxycholic acid for cholestatic hepatitis','E. Urgent liver transplant evaluation'],
    ans:1,
    tp:'Alcoholic hepatitis: AST:ALT >2:1 (mitochondrial dysfunction from alcohol, ALT is more cytoplasmic and preserved). Maddrey Discriminant Function = 4.6 × (PT-control) + total bilirubin. DF ≥32 or MELD ≥21 = SEVERE disease → prednisolone 40 mg/day ×28 days reduces short-term mortality. Pentoxifylline no longer recommended (STOPAH trial). Check for infection before steroids. Abstinence is crucial. GGT is markedly elevated in alcoholic liver disease specifically (gamma-GT).'
  },
  {
    id:'q058', block:3, system:'blood_immune', topic:'Transfusion reactions',
    stem:'A 45-year-old woman undergoing cardiac surgery receives a unit of packed red blood cells intraoperatively. Twenty minutes into the transfusion, she develops hypotension, tachycardia, hemoglobinuria, and diffuse bleeding from IV sites. Temperature rises to 38.8°C. Labs show free hemoglobin in plasma, positive direct Coombs test, and falling fibrinogen. Which of the following best describes the mechanism of her reaction?',
    opts:['A. IgE-mediated mast cell degranulation with histamine release','B. Anti-IgA antibodies in an IgA-deficient recipient','C. IgM-mediated complement activation causing intravascular hemolysis and DIC','D. T-cell cytotoxic response against donor erythrocyte antigens','E. Non-immune hemolysis from mechanical trauma during cardiopulmonary bypass'],
    ans:2,
    tp:'Acute hemolytic transfusion reaction (AHTR): ABO incompatibility (usually clerical error). IgM anti-A/B antibodies → complement activation → intravascular hemolysis → hemoglobinuria, renal failure, DIC. Fever + hypotension + flank pain + hemoglobinuria = AHTR. STOP the transfusion immediately. Positive direct Coombs (antibody on patient\'s donor RBCs). Compare with febrile non-hemolytic reaction (cytokines from WBC, most common), anaphylaxis (IgA deficiency, urticaria, no fever), TRALI (non-cardiogenic pulmonary edema within 6h).'
  },
  {
    id:'q059', block:3, system:'endo_repro', topic:'Hypothyroidism',
    stem:'A 45-year-old woman presents with fatigue, cold intolerance, weight gain, constipation, and dry skin for 8 months. She is bradycardic at 54 bpm. TSH is 42 mIU/L (markedly elevated), free T4 is undetectable. Anti-TPO antibodies are strongly positive. Which of the following best describes the expected histological findings on thyroid biopsy?',
    opts:['A. Diffuse follicular hyperplasia with papillary projections (Sanderson polster)','B. Lymphocytic infiltration with germinal center formation and follicular atrophy','C. Diffuse large follicles filled with colloid ("simple" goiter)','D. Psammoma bodies and papillary fronds of malignant follicular cells','E. Granulomatous inflammation with giant cells and follicular destruction'],
    ans:1,
    tp:'Hashimoto thyroiditis (chronic lymphocytic thyroiditis): most common cause of hypothyroidism in iodine-sufficient countries. Autoimmune: anti-TPO and anti-thyroglobulin antibodies. Pathology: lymphocytic infiltration with germinal centers (lymphoid follicles), Hürthle cell (oxyphilic) change, follicular atrophy, fibrosis. Initially may have transient hyperthyroidism (Hashitoxicosis). Treatment: levothyroxine (T4). Graves disease: stimulating TSH-R antibodies (TSI), diffuse hyperplasia, exophthalmos, pretibial myxedema.'
  },
  {
    id:'q060', block:3, system:'neuro_behav', topic:'Alzheimer disease',
    stem:'A 75-year-old man is brought by his wife who reports he has been getting lost driving to familiar places and has become very repetitive in conversations over the past 2 years. Mini-mental status exam is 18/30. He has difficulty with recall, naming objects, and following complex commands. MRI shows temporal and parietal lobe atrophy with hippocampal volume loss. Which of the following pharmacologic mechanisms is targeted by currently approved symptomatic treatments for this condition?',
    opts:['A. Blocking beta-secretase to prevent amyloid precursor protein cleavage','B. Inhibiting acetylcholinesterase to increase synaptic acetylcholine','C. Activating dopamine receptors to improve prefrontal function','D. Blocking tau phosphorylation to prevent neurofibrillary tangle formation','E. Stimulating BDNF receptors to promote neuronal survival'],
    ans:1,
    tp:'Alzheimer disease: most common cause of dementia. Pathology: amyloid plaques (Aβ42), neurofibrillary tangles (hyperphosphorylated tau), neuronal loss in hippocampus and association cortices. Cholinergic neurons are preferentially lost (nucleus basalis of Meynert). Approved treatments: Acetylcholinesterase inhibitors (donepezil, rivastigmine, galantamine) — mild-moderate. NMDA antagonist (memantine) — moderate-severe. Lecanemab (anti-amyloid antibody) — newer FDA approval for early AD. These are symptomatic (donepezil) or disease-modifying (lecanemab), not curative.'
  }
];

/* ── Practice Module ─────────────────────────────────────────────────── */
window.Practice = (() => {
  let _session = null; // { block, qIds[], current, answers{}, startTime }
  let _reviewMode = false;
  let _reviewIdx = 0;

  /* ── Internal helpers ─────────────────────────────────────────────── */
  function _getQuestions(block) {
    if (block === 'all') return FREE120_QUESTIONS.slice();
    const n = parseInt(block, 10);
    return FREE120_QUESTIONS.filter(q => q.block === n);
  }

  function _qCount() {
    return _session ? _session.qIds.length : 0;
  }

  function _currentQ() {
    if (!_session) return null;
    return FREE120_QUESTIONS.find(q => q.id === _session.qIds[_session.current]);
  }

  function _score() {
    let correct = 0;
    _session.qIds.forEach(id => {
      const q = FREE120_QUESTIONS.find(x => x.id === id);
      const a = _session.answers[id];
      if (a !== undefined && a === q.ans) correct++;
    });
    return correct;
  }

  /* ── Render helpers ───────────────────────────────────────────────── */
  function _systemLabel(slug) {
    const map = {
      cardiovascular: 'Cardiovascular', resp_renal: 'Respiratory & Renal',
      neuro_behav: 'Behavioral & Nervous Systems', blood_immune: 'Blood & Immune',
      msk_skin: 'MSK & Skin', multisystem: 'Multisystem', endo_repro: 'Endocrine & Repro',
      gastrointestinal: 'Gastrointestinal', human_dev: 'Human Development'
    };
    return map[slug] || slug;
  }

  function _optLetter(i) {
    return String.fromCharCode(65 + i); // A, B, C...
  }

  /* ── Start screen ─────────────────────────────────────────────────── */
  function _renderStart() {
    const blocks = ['all',1,2,3];
    const counts = blocks.map(b => {
      const n = b === 'all' ? FREE120_QUESTIONS.length : FREE120_QUESTIONS.filter(q => q.block === b).length;
      return { b, n };
    });

    // System stats
    const systemMap = {};
    FREE120_QUESTIONS.forEach(q => {
      systemMap[q.system] = (systemMap[q.system] || 0) + 1;
    });

    return `
      <div class="practice-start">
        <div class="practice-hero">
          <div class="practice-hero-icon">🎯</div>
          <h1 class="practice-hero-title">Step 1 Practice Questions</h1>
          <p class="practice-hero-sub">High-yield USMLE Step 1-style clinical vignettes across all 9 organ systems</p>
        </div>

        <div class="practice-block-grid">
          ${counts.map(({b, n}) => `
            <button class="practice-block-card" data-block="${b}">
              <div class="pbc-label">${b === 'all' ? 'Full Test' : `Block ${b}`}</div>
              <div class="pbc-count">${n} Qs</div>
              <div class="pbc-start">Start →</div>
            </button>
          `).join('')}
        </div>

        <div class="practice-system-breakdown">
          <h3>Questions by System</h3>
          <div class="psb-grid">
            ${Object.entries(systemMap).map(([sys, cnt]) => `
              <div class="psb-row">
                <span class="psb-sys">${_systemLabel(sys)}</span>
                <span class="psb-cnt">${cnt}</span>
              </div>
            `).join('')}
          </div>
        </div>

        ${_renderPriorResults()}
      </div>
    `;
  }

  function _renderPriorResults() {
    const scores = Store.getScores().filter(s => s.type === 'Free120');
    if (!scores.length) return '';
    const recent = scores.slice(-5).reverse();
    return `
      <div class="practice-prior">
        <h3>Recent Practice Sessions</h3>
        <table class="practice-history-table">
          <thead><tr><th>Date</th><th>Block</th><th>Score</th><th>%</th></tr></thead>
          <tbody>
            ${recent.map(s => `
              <tr>
                <td>${s.date}</td>
                <td>${s.formDetail || '—'}</td>
                <td>${s.value} / ${s.notes || '?'}</td>
                <td>${s.notes ? Math.round((s.value/s.notes)*100) + '%' : '—'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  /* ── Question card ────────────────────────────────────────────────── */
  function _renderQuestion() {
    const q = _currentQ();
    if (!q) return '';
    const idx = _session.current;
    const total = _qCount();
    const answered = _session.answers[q.id];
    const pct = Math.round(((idx) / total) * 100);

    return `
      <div class="practice-quiz">
        <div class="pq-header">
          <div class="pq-progress-bar"><div class="pq-progress-fill" style="width:${pct}%"></div></div>
          <div class="pq-meta">
            <span class="pq-counter">Question ${idx + 1} of ${total}</span>
            <span class="pq-system-tag">${_systemLabel(q.system)}</span>
            <span class="pq-block-tag">Block ${q.block}</span>
          </div>
        </div>

        <div class="pq-body">
          <div class="pq-stem">${q.stem}</div>

          <div class="pq-options" id="pq-options">
            ${q.opts.map((opt, i) => {
              let cls = 'pq-opt';
              if (answered !== undefined) {
                if (i === q.ans) cls += ' pq-opt-correct';
                else if (i === answered && answered !== q.ans) cls += ' pq-opt-wrong';
                else cls += ' pq-opt-dim';
              }
              return `<button class="pq-opt ${answered !== undefined ? (i === q.ans ? 'pq-opt-correct' : (i === answered && answered !== q.ans ? 'pq-opt-wrong' : 'pq-opt-dim')) : ''}" data-opt="${i}" ${answered !== undefined ? 'disabled' : ''}>${opt}</button>`;
            }).join('')}
          </div>

          <div class="pq-teaching ${answered !== undefined ? '' : 'hidden'}" id="pq-teaching">
            <div class="pq-tp-header">
              <span class="pq-tp-result ${answered === q.ans ? 'pq-tp-correct' : 'pq-tp-wrong'}">
                ${answered === q.ans ? '✓ Correct!' : `✗ Incorrect — Correct answer: ${_optLetter(q.ans)}`}
              </span>
              <span class="pq-tp-topic">${q.topic}</span>
            </div>
            <div class="pq-tp-text">${q.tp}</div>
          </div>
        </div>

        <div class="pq-footer">
          <button class="btn-secondary pq-btn-exit" id="pq-exit">✕ End Session</button>
          <div class="pq-nav">
            ${idx > 0 ? `<button class="btn-secondary" id="pq-prev">‹ Prev</button>` : ''}
            ${answered !== undefined
              ? (idx + 1 < total
                  ? `<button class="btn-primary" id="pq-next">Next ›</button>`
                  : `<button class="btn-primary pq-btn-finish" id="pq-finish">Finish Session ✓</button>`)
              : `<button class="btn-secondary pq-btn-skip" id="pq-skip">Skip</button>`
            }
          </div>
        </div>
      </div>
    `;
  }

  /* ── Results screen ───────────────────────────────────────────────── */
  function _renderResults() {
    const correct = _score();
    const total = _qCount();
    const pct = Math.round((correct / total) * 100);
    const elapsed = _session.startTime ? Math.round((Date.now() - _session.startTime) / 60000) : 0;

    const bySystem = {};
    _session.qIds.forEach(id => {
      const q = FREE120_QUESTIONS.find(x => x.id === id);
      if (!bySystem[q.system]) bySystem[q.system] = { correct: 0, total: 0 };
      bySystem[q.system].total++;
      if (_session.answers[id] === q.ans) bySystem[q.system].correct++;
    });

    let grade = '', gradeClass = '';
    if (pct >= 80) { grade = 'Excellent'; gradeClass = 'grade-excellent'; }
    else if (pct >= 65) { grade = 'Passing'; gradeClass = 'grade-passing'; }
    else if (pct >= 50) { grade = 'Borderline'; gradeClass = 'grade-borderline'; }
    else { grade = 'Needs Work'; gradeClass = 'grade-needs-work'; }

    return `
      <div class="practice-results">
        <div class="pr-hero">
          <div class="pr-score-circle ${gradeClass}">
            <div class="pr-pct">${pct}%</div>
            <div class="pr-grade">${grade}</div>
          </div>
          <div class="pr-summary">
            <div class="pr-stat"><span class="pr-stat-val">${correct}</span><span class="pr-stat-lbl">Correct</span></div>
            <div class="pr-stat"><span class="pr-stat-val">${total - correct}</span><span class="pr-stat-lbl">Incorrect</span></div>
            <div class="pr-stat"><span class="pr-stat-val">${elapsed}m</span><span class="pr-stat-lbl">Time</span></div>
          </div>
        </div>

        <div class="pr-by-system">
          <h3>Performance by System</h3>
          ${Object.entries(bySystem).map(([sys, data]) => {
            const sp = Math.round((data.correct / data.total) * 100);
            const barClass = sp >= 75 ? 'sys-bar-good' : sp >= 50 ? 'sys-bar-ok' : 'sys-bar-bad';
            return `
              <div class="pr-sys-row">
                <span class="pr-sys-name">${_systemLabel(sys)}</span>
                <div class="pr-sys-bar-wrap">
                  <div class="pr-sys-bar ${barClass}" style="width:${sp}%"></div>
                </div>
                <span class="pr-sys-score">${data.correct}/${data.total} (${sp}%)</span>
              </div>
            `;
          }).join('')}
        </div>

        <div class="pr-actions">
          <button class="btn-primary" id="pr-review">📖 Review Answers</button>
          <button class="btn-secondary" id="pr-retry">🔄 Retry Same Block</button>
          <button class="btn-secondary" id="pr-new">🏠 Back to Blocks</button>
        </div>
      </div>
    `;
  }

  /* ── Review mode ──────────────────────────────────────────────────── */
  function _renderReview() {
    const q = FREE120_QUESTIONS.find(x => x.id === _session.qIds[_reviewIdx]);
    const answered = _session.answers[q.id];
    const total = _qCount();

    return `
      <div class="practice-quiz practice-review">
        <div class="pq-header">
          <div class="pq-meta">
            <span class="pq-counter">Review ${_reviewIdx + 1} of ${total}</span>
            <span class="pq-system-tag">${_systemLabel(q.system)}</span>
            <span class="${answered === q.ans ? 'review-correct-badge' : 'review-wrong-badge'}">
              ${answered === q.ans ? '✓ Correct' : '✗ Incorrect'}
            </span>
          </div>
        </div>

        <div class="pq-body">
          <div class="pq-stem">${q.stem}</div>
          <div class="pq-options">
            ${q.opts.map((opt, i) => {
              let cls = 'pq-opt pq-opt-dim';
              if (i === q.ans) cls = 'pq-opt pq-opt-correct';
              else if (i === answered && answered !== q.ans) cls = 'pq-opt pq-opt-wrong';
              return `<button class="${cls}" disabled>${opt}</button>`;
            }).join('')}
          </div>
          <div class="pq-teaching">
            <div class="pq-tp-header">
              <span class="pq-tp-topic">${q.topic}</span>
            </div>
            <div class="pq-tp-text">${q.tp}</div>
          </div>
        </div>

        <div class="pq-footer">
          <button class="btn-secondary" id="pr-back-results">← Back to Results</button>
          <div class="pq-nav">
            ${_reviewIdx > 0 ? `<button class="btn-secondary" id="review-prev">‹ Prev</button>` : ''}
            ${_reviewIdx + 1 < total ? `<button class="btn-primary" id="review-next">Next ›</button>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  /* ── Main render ──────────────────────────────────────────────────── */
  function render() {
    const el = document.getElementById('view-practice');
    if (!el) return;

    let html;
    if (!_session) {
      html = _renderStart();
    } else if (_session.finished) {
      if (_reviewMode) {
        html = _renderReview();
      } else {
        html = _renderResults();
      }
    } else {
      html = _renderQuestion();
    }

    el.innerHTML = html;
    _bindEvents();
  }

  /* ── Event binding ────────────────────────────────────────────────── */
  function _bindEvents() {
    const el = document.getElementById('view-practice');
    if (!el) return;

    // Start screen — block cards
    el.querySelectorAll('.practice-block-card').forEach(btn => {
      btn.addEventListener('click', () => _startSession(btn.dataset.block));
    });

    // Answer options
    el.querySelectorAll('.pq-opt:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => _answerQuestion(parseInt(btn.dataset.opt, 10)));
    });

    // Navigation
    const next = document.getElementById('pq-next');
    if (next) next.addEventListener('click', () => { _session.current++; render(); });

    const prev = document.getElementById('pq-prev');
    if (prev) prev.addEventListener('click', () => { _session.current--; render(); });

    const skip = document.getElementById('pq-skip');
    if (skip) skip.addEventListener('click', () => { _session.current++; if (_session.current >= _qCount()) _finishSession(); else render(); });

    const finish = document.getElementById('pq-finish');
    if (finish) finish.addEventListener('click', _finishSession);

    const exit = document.getElementById('pq-exit');
    if (exit) exit.addEventListener('click', () => {
      UI.showModal({
        title: 'End Session?',
        body: '<p>Your progress will be saved for completed questions. Are you sure you want to end the session?</p>',
        confirmText: 'End Session',
        onConfirm: _finishSession
      });
    });

    // Results actions
    const review = document.getElementById('pr-review');
    if (review) review.addEventListener('click', () => { _reviewMode = true; _reviewIdx = 0; render(); });

    const retry = document.getElementById('pr-retry');
    if (retry) retry.addEventListener('click', () => { _startSession(_session.block); });

    const newSession = document.getElementById('pr-new');
    if (newSession) newSession.addEventListener('click', () => { _session = null; _reviewMode = false; render(); });

    // Review navigation
    const reviewNext = document.getElementById('review-next');
    if (reviewNext) reviewNext.addEventListener('click', () => { _reviewIdx++; render(); });

    const reviewPrev = document.getElementById('review-prev');
    if (reviewPrev) reviewPrev.addEventListener('click', () => { _reviewIdx--; render(); });

    const backResults = document.getElementById('pr-back-results');
    if (backResults) backResults.addEventListener('click', () => { _reviewMode = false; render(); });
  }

  function _startSession(block) {
    const questions = _getQuestions(block);
    _session = {
      block,
      qIds: questions.map(q => q.id),
      current: 0,
      answers: {},
      finished: false,
      startTime: Date.now()
    };
    _reviewMode = false;
    render();
  }

  function _answerQuestion(optIdx) {
    const q = _currentQ();
    if (!q || _session.answers[q.id] !== undefined) return;
    _session.answers[q.id] = optIdx;
    render();
  }

  function _finishSession() {
    if (!_session) return;
    _session.finished = true;
    _reviewMode = false;

    // Save score to tracker
    const correct = _score();
    const total = _qCount();
    const blockLabel = _session.block === 'all' ? 'All Blocks' : `Block ${_session.block}`;
    Store.addScore({
      type: 'Free120',
      value: correct,
      formDetail: blockLabel,
      notes: String(total)
    });

    render();
  }

  return { render };
})();

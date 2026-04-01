/* defaultData.js – pre-loaded USMLE content */
window.DEFAULT_DATA = {
  version: '1.0',
  settings: { darkMode: false, sidebarOpen: true },
  steps: {
    step1: {
      label: 'Step 1',
      categories: {
        biochem: {
          label: 'Biochemistry & Genetics', icon: '🧬',
          cards: {
            'b1': { id:'b1', title:'Lysosomal Storage Diseases', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Gaucher</b> – glucocerebrosidase ↓ → glucocerebroside accumulates; bone pain, hepatosplenomegaly; Ashkenazi Jewish; Gaucher cells ("crinkled paper")</li>
<li><b>Niemann-Pick</b> – sphingomyelinase ↓ → sphingomyelin accumulates; cherry-red spot, hepatosplenomegaly, foam cells</li>
<li><b>Tay-Sachs</b> – hexosaminidase A ↓ → GM2 ganglioside; cherry-red spot, NO hepatosplenomegaly; fatal by age 3</li>
<li><b>Fabry</b> – α-galactosidase A ↓; X-linked recessive; peripheral neuropathy, renal failure, angiokeratomas</li>
<li><b>Krabbe</b> – galactocerebrosidase ↓; globoid cells; peripheral neuropathy, optic atrophy</li>
<li><b>MLD</b> – arylsulfatase A ↓; demyelination, ataxia, dementia</li>
</ul><p><b>Mnemonic:</b> <mark>Gaucher = Glucocerebrosidase</mark>, <mark>Niemann = sPhiNgomyelinase</mark>, <mark>Tay = hexosAminidase</mark></p>` },
            'b2': { id:'b2', title:'Amino Acid Disorders', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>PKU</b> – phenylalanine hydroxylase ↓ (or BH4 cofactor); musty odor, fair skin/hair/eyes, intellectual disability; screen newborn; treat: low-Phe diet + BH4 (sapropterin)</li>
<li><b>Alkaptonuria</b> – homogentisic acid oxidase ↓; dark urine, ochronosis (blue-black connective tissue), arthritis</li>
<li><b>Homocystinuria</b> – cystathionine synthase ↓ (B6) or B12/folate ↓; marfanoid habitus, <mark>lens subluxation downward-inward</mark>, thrombosis, intellectual disability</li>
<li><b>Maple Syrup Urine Disease</b> – branched-chain ketoacid dehydrogenase ↓; Ile/Leu/Val accumulate; sweet urine, encephalopathy; restrict BCAAs</li>
<li><b>Cystinuria</b> – defective PCT transporter (COAL: Cystine, Ornithine, Arginine, Lysine); recurrent kidney stones; treat: hydration + D-penicillamine</li>
</ul>` },
            'b3': { id:'b3', title:'DNA Repair Mechanisms', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>BER</b> (Base Excision Repair) – single-base damage (deamination, oxidation); glycosylase removes base</li>
<li><b>NER</b> (Nucleotide Excision Repair) – bulky adducts, thymine dimers (UV); defect → <mark>Xeroderma pigmentosum</mark> → skin cancer risk</li>
<li><b>MMR</b> (Mismatch Repair) – replication errors; defect → microsatellite instability → <mark>Lynch syndrome (HNPCC)</mark> – colon/endometrial cancer</li>
<li><b>NHEJ</b> – double-strand breaks; error-prone; joins broken ends with Ku proteins</li>
<li><b>HR</b> – double-strand breaks (S/G2 phase); accurate; uses BRCA1/2; defect → breast/ovarian cancer</li>
</ul>` }
          }
        },
        physio: {
          label: 'Physiology', icon: '⚡',
          cards: {
            'p1': { id:'p1', title:'Cardiac Cycle & Heart Sounds', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>S1</b> – mitral/tricuspid CLOSE → start of systole</li>
<li><b>S2</b> – aortic/pulmonic CLOSE → end of systole; A2 before P2; splits with inspiration (↑ venous return → P2 delayed)</li>
<li><b>S3</b> – rapid ventricular filling; normal in children &amp; pregnancy; <mark>HF/dilated cardiomyopathy in adults</mark> (ventricular gallop)</li>
<li><b>S4</b> – atrial kick against stiff ventricle; <mark>HTN, HCM, aortic stenosis</mark> (atrial gallop)</li>
<li><b>Phases</b>: isovolumetric contraction → rapid ejection → reduced ejection → isovolumetric relaxation → rapid filling → diastasis → atrial kick</li>
</ul>` },
            'p2': { id:'p2', title:'Renal Tubule Transport', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Proximal tubule</b> – 67% Na/H2O; ALL glucose/amino acids; HCO3−, phosphate, urate; isosmotic reabsorption; carbonic anhydrase (acetazolamide)</li>
<li><b>Descending loop</b> – water only (permeable to H2O, not solutes); concentrates urine</li>
<li><b>Ascending loop (thick)</b> – NKCC2 cotransporter; <mark>furosemide/loop diuretics</mark>; impermeable to H2O → dilutes filtrate</li>
<li><b>DCT</b> – NCC (Na-Cl); <mark>thiazide diuretics</mark>; PTH → Ca2+ reabsorption; spironolactone blocks aldosterone here</li>
<li><b>Collecting duct</b> – ENaC (aldosterone → Na reabsorption); AQP2 (ADH/vasopressin → H2O reabsorption)</li>
</ul>` },
            'p3': { id:'p3', title:'Pulmonary Volumes & Spirometry', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>TV</b> (500 mL) – normal tidal volume</li>
<li><b>IRV</b> – max extra inhalation above TV</li>
<li><b>ERV</b> – max extra exhalation below TV</li>
<li><b>RV</b> – residual; cannot be measured by spirometry (use helium dilution or body plethysmography)</li>
<li><b>FRC</b> = ERV + RV (volume at rest after normal exhalation)</li>
<li><b>VC</b> = IRV + TV + ERV; <b>TLC</b> = VC + RV</li>
<li><b>FEV1/FVC &lt; 0.7</b> → <mark>obstructive</mark> (asthma, COPD; TLC ↑, RV ↑)</li>
<li><b>FEV1/FVC normal or ↑, reduced TLC</b> → <mark>restrictive</mark> (fibrosis, neuromuscular)</li>
</ul>` }
          }
        },
        path: {
          label: 'Pathology', icon: '🔬',
          cards: {
            'pa1': { id:'pa1', title:'Types of Necrosis', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Coagulative</b> – ischemia (most organs); architecture preserved (ghost cells); <mark>EXCEPT brain → liquefactive</mark></li>
<li><b>Liquefactive</b> – brain infarct; bacterial infections (pus/abscess); neutrophils digest tissue</li>
<li><b>Caseous</b> – TB &amp; fungi; cheesy/white; surrounded by granuloma (Langhans giant cells)</li>
<li><b>Fat</b> – saponification; acute pancreatitis; chalky-white calcium deposits</li>
<li><b>Fibrinoid</b> – immune complex deposition (polyarteritis nodosa, malignant HTN); bright pink amorphous</li>
<li><b>Gangrenous</b> – dry (coagulative, ischemia) vs wet (superimposed infection + liquefactive)</li>
</ul>` },
            'pa2': { id:'pa2', title:'Apoptosis vs Necrosis', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<table style="width:100%;border-collapse:collapse;font-size:13px">
<tr style="background:var(--border)"><th style="padding:6px;text-align:left">Feature</th><th>Apoptosis</th><th>Necrosis</th></tr>
<tr><td style="padding:5px">Trigger</td><td>Programmed</td><td>Pathologic</td></tr>
<tr><td>Energy</td><td>Required (ATP)</td><td>Not required</td></tr>
<tr><td>Cell size</td><td>Shrinks</td><td>Swells</td></tr>
<tr><td>Membrane</td><td>Intact (blebs)</td><td>Disrupted</td></tr>
<tr><td>Inflammation</td><td>None</td><td>Yes</td></tr>
<tr><td>Chromatin</td><td>Condensed (pyknosis)</td><td>Karyolysis</td></tr>
</table>
<p style="margin-top:10px"><b>Intrinsic pathway</b>: mitochondria → cytochrome c → caspase-9 (triggered by p53, DNA damage, Bcl-2 inhibited)</p>
<p><b>Extrinsic pathway</b>: FasL/TNF → death receptor → caspase-8</p>` }
          }
        },
        pharma: {
          label: 'Pharmacology', icon: '💊',
          cards: {
            'ph1': { id:'ph1', title:'Beta Blockers', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>MOA</b>: competitive β-adrenergic antagonist → ↓ HR, contractility, BP, renin</li>
<li><b>Non-selective (β1+β2)</b>: propranolol, nadolol, timolol (eye drops)</li>
<li><b>Cardioselective (β1)</b>: <mark>Metoprolol, Atenolol, Bisoprolol, esmolol (MABE)</mark></li>
<li><b>α+β blockers</b>: carvedilol, labetalol (HTN emergency in pregnancy)</li>
<li><b>Uses</b>: HTN, angina, post-MI, HFrEF (carvedilol/metoprolol), arrhythmia, hyperthyroidism, glaucoma, varices prophylaxis</li>
<li><b>Side effects</b>: bradycardia, bronchospasm (avoid non-selective in asthma/COPD), masks hypoglycemia, sexual dysfunction, fatigue, cold extremities</li>
<li><b>Contraindications</b>: 2nd/3rd degree AV block, severe bradycardia, cardiogenic shock, asthma (non-selective)</li>
</ul>` },
            'ph2': { id:'ph2', title:'ACE Inhibitors vs ARBs', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>ACEi (-pril)</b>: blocks conversion of AT-I → AT-II; also ↓ bradykinin degradation → <mark>dry cough &amp; angioedema</mark></li>
<li><b>ARBs (-sartan)</b>: block AT-II receptor (AT1); no bradykinin effect → no cough; less angioedema risk</li>
<li><b>Uses</b>: HTN, HFrEF, post-MI, diabetic nephropathy, CKD with proteinuria</li>
<li><b>Renal protection</b>: dilate efferent arteriole → ↓ intraglomerular pressure → ↓ proteinuria</li>
<li><b>Side effects</b>: hyperkalemia, AKI (↓ GFR), first-dose hypotension</li>
<li><b>Contraindications</b>: <mark>bilateral renal artery stenosis</mark> (precipitates AKI), pregnancy (teratogenic), angioedema history (for ACEi)</li>
</ul>` },
            'ph3': { id:'ph3', title:'Antibiotic Mechanisms of Action', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Cell wall synthesis</b>: β-lactams (penicillins, cephalosporins, carbapenems, aztreonam); vancomycin (binds D-Ala-D-Ala) – bactericidal</li>
<li><b>30S ribosome</b>: aminoglycosides (gentamicin – bactericidal); tetracyclines (bacteriostatic)</li>
<li><b>50S ribosome</b>: macrolides, clindamycin, chloramphenicol, linezolid – bacteriostatic (<mark>BaCSCaL</mark>)</li>
<li><b>DNA gyrase (topoisomerase II/IV)</b>: fluoroquinolones (-floxacin) – bactericidal</li>
<li><b>RNA polymerase</b>: rifampin – bactericidal; turns body fluids orange</li>
<li><b>Cell membrane</b>: polymyxins (gram −), daptomycin (gram +) – bactericidal</li>
<li><b>Folate synthesis</b>: sulfonamides (PABA inhibitor), trimethoprim (DHF reductase) – bacteriostatic</li>
</ul>` }
          }
        },
        micro: {
          label: 'Microbiology & Immunology', icon: '🦠',
          cards: {
            'm1': { id:'m1', title:'Gram-Positive Organisms', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>S. aureus</b> – coagulase+, catalase+; MRSA, toxin-mediated (TSST-1, scalded skin, food poisoning); protein A (evades phagocytosis)</li>
<li><b>S. epidermidis</b> – coagulase−; biofilm on prosthetics/catheters; novobiocin sensitive</li>
<li><b>S. saprophyticus</b> – coagulase−; UTI in young women; novobiocin resistant</li>
<li><b>S. pneumoniae</b> – α-hemolytic; lancet-shaped diplococci; optochin sensitive; PNA, meningitis, otitis, sinusitis; IgA protease</li>
<li><b>S. pyogenes (GAS)</b> – β-hemolytic; bacitracin sensitive; rheumatic fever, PSGN, necrotizing fasciitis; M protein virulence</li>
<li><b>S. agalactiae (GBS)</b> – β-hemolytic; CAMP test+; neonatal sepsis/meningitis; bacitracin resistant</li>
<li><b>Enterococcus</b> – γ-hemolytic; UTI, endocarditis (IV drug users); VRE; bile esculin+</li>
<li><b>Listeria</b> – tumbling motility; neonatal meningitis; from deli meats; treat: ampicillin</li>
</ul>` },
            'm2': { id:'m2', title:'Primary Immunodeficiencies', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Bruton's XLA</b> – X-linked; no B cells, no Ig; recurrent bacterial infections after 6 months; absent germinal centers; BTK mutation</li>
<li><b>DiGeorge</b> – 22q11 deletion; no thymus → no T cells; tetany (↓ Ca2+ from absent parathyroids), cardiac defects (conotruncal); CATCH-22</li>
<li><b>SCID</b> – no B or T cells; ADA deficiency (AR) or γc chain mutation (X-linked); recurrent ALL infections; bone marrow transplant</li>
<li><b>Wiskott-Aldrich</b> – X-linked; thrombocytopenia, eczema, immunodeficiency; ↓ IgM, ↑ IgA/IgE; WASp mutation</li>
<li><b>CVID</b> – ↓ all Ig, normal B cell count; presents in 20s-30s; autoimmune associations; recurrent sinopulmonary infections</li>
<li><b>IgA deficiency</b> – most common; anaphylaxis with blood transfusions (anti-IgA antibodies)</li>
<li><b>Chediak-Higashi</b> – giant granules in neutrophils; microtubule polymerization defect; partial albinism, recurrent pyogenic infections</li>
</ul>` },
            'm3': { id:'m3', title:'Vaccine Types', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Live attenuated</b>: <mark>MMR, Varicella, Yellow fever, FluMist (LAIV), OPV, BCG, Rotavirus</mark>; stronger immunity; avoid in immunocompromised &amp; pregnancy</li>
<li><b>Killed/inactivated</b>: Flu shot (IIV), Hep A, Polio (IPV), Rabies; safe in immunocompromised</li>
<li><b>Subunit</b>: Hep B, HPV, acellular pertussis (DTaP), pneumococcal (PPSV23), meningococcal</li>
<li><b>Toxoid</b>: Tetanus (Td), Diphtheria</li>
<li><b>Conjugated</b>: Hib, PCV13 (pneumococcal), MCV4 (meningococcal); T-cell dependent response → IgG &amp; memory in infants</li>
<li><b>mRNA</b>: COVID-19 (Pfizer, Moderna); lipid nanoparticle delivery; no live virus</li>
</ul>` }
          }
        },
        anatomy: {
          label: 'Anatomy & Embryology', icon: '🦴',
          cards: {
            'a1': { id:'a1', title:'Brachial Plexus Lesions', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Erb's palsy (C5-C6)</b> – "waiter's tip" (shoulder adducted, arm extended, forearm pronated); excessive lateral traction during delivery; deltoid, biceps, supraspinatus weak</li>
<li><b>Klumpke's (C8-T1)</b> – claw hand, intrinsic muscle weakness; sudden arm upward pull; Horner's (ptosis, miosis, anhidrosis) if T1 sympathetics involved</li>
<li><b>Long thoracic nerve (C5-7)</b> – serratus anterior → <mark>winged scapula</mark>; mastectomy or axillary node dissection</li>
<li><b>Radial nerve</b> – <mark>wrist drop</mark>; midshaft humerus fracture / "Saturday night palsy"; also loses triceps if proximal (loss of arm extension)</li>
<li><b>Ulnar nerve</b> – medial epicondyle; <mark>claw hand (4th/5th digits)</mark>; loss of interossei, hypothenar, medial lumbricals; paper test</li>
<li><b>Median nerve</b> – <mark>"Papal blessing" (loss of lateral 2 lumbricals)</mark>; carpal tunnel → thenar atrophy, loss of lateral 3.5 digits; pronator teres → all intrinsics lost</li>
<li><b>Axillary nerve</b> – surgical neck humerus; deltoid atrophy → loss of arm abduction 15–90°; regimental badge area anesthesia</li>
</ul>` },
            'a2': { id:'a2', title:'Hernias', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Direct inguinal</b> – through Hesselbach's triangle; medial to inferior epigastric artery; weakness in floor; passes through external ring ONLY; older men</li>
<li><b>Indirect inguinal</b> – through deep inguinal ring; lateral to inferior epigastric; patent processus vaginalis; all ages; most common hernia overall</li>
<li><b>Femoral</b> – below inguinal ligament, medial to femoral vein; more common in women; high risk of incarceration/strangulation</li>
<li><b>Hesselbach's triangle</b>: inferior epigastric artery (lateral border), inguinal ligament (inferior), rectus sheath (medial)</li>
<li><b>Umbilical</b> – failure of umbilical ring closure; normal until age 2; African Americans; usually closes spontaneously</li>
</ul>` }
          }
        },
        cardio: {
          label: 'Cardiovascular', icon: '🫀',
          cards: {
            'c1': { id:'c1', title:'Heart Murmurs', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<p><b>Systolic murmurs:</b></p>
<ul>
<li><b>AS</b> – crescendo-decrescendo; radiates to carotids; ↑ with squatting; pulsus parvus et tardus; syncope/angina/CHF</li>
<li><b>MR</b> – holosystolic; apex → axilla; ↑ with handgrip; S3 present in severe MR</li>
<li><b>VSD</b> – holosystolic; left lower sternal border; harsh; ↑ with handgrip</li>
<li><b>MVP</b> – mid-systolic click + late systolic murmur; click moves earlier with Valsalva/standing (↓ preload)</li>
<li><b>HOCM</b> – harsh; ↑ with Valsalva/standing; ↓ with squatting/handgrip (opposite most murmurs)</li>
</ul>
<p><b>Diastolic murmurs:</b></p>
<ul>
<li><b>AR</b> – early diastolic, blowing, decrescendo; best heard leaning forward; Austin Flint murmur (functional MS)</li>
<li><b>MS</b> – opening snap (OS) + low-pitched rumble; OS-S2 interval ↓ = more severe; best heard at apex</li>
</ul>
<p><mark>Increase preload (squat/leg raise) → ↑ most murmurs; ↓ HOCM, MVP</mark></p>` },
            'c2': { id:'c2', title:'MI Temporal Changes', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>0–6 h</b>: no gross change; EM shows wavy fibers, contraction bands; troponin begins rising at ~3h (peaks 24h)</li>
<li><b>12–24 h</b>: coagulative necrosis; dark mottling; neutrophil infiltration begins</li>
<li><b>1–3 days</b>: neutrophil infiltration peak; yellow-tan pallor</li>
<li><b>3–7 days</b>: macrophage infiltration; <mark>HIGHEST RISK of free wall rupture</mark>, papillary muscle rupture (→ acute MR), VSD</li>
<li><b>1–2 weeks</b>: granulation tissue; fibroblasts; vascularization; aneurysm risk</li>
<li><b>Weeks→months</b>: dense collagen scar; white fibrosis; ventricular remodeling</li>
</ul>
<p><b>Complications</b>: arrhythmia (24h), Dressler syndrome (weeks: autoimmune pericarditis), mural thrombus → stroke</p>` }
          }
        },
        behavioral: {
          label: 'Behavioral Science & Biostatistics', icon: '📊',
          cards: {
            'bs1': { id:'bs1', title:'Sensitivity, Specificity & Predictive Values', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<p><b>2×2 table:</b> TP | FP / FN | TN</p>
<ul>
<li><b>Sensitivity</b> = TP/(TP+FN); <mark>SnNOut</mark>: sensitive test Negative rules OUT disease; good screening test</li>
<li><b>Specificity</b> = TN/(TN+FP); <mark>SpPin</mark>: specific test Positive rules IN disease; good confirmatory test</li>
<li><b>PPV</b> = TP/(TP+FP); ↑ with ↑ prevalence or ↑ specificity</li>
<li><b>NPV</b> = TN/(TN+FN); ↑ with ↓ prevalence or ↑ sensitivity</li>
<li><b>LR+</b> = sensitivity/(1−specificity); &gt;10 = strong rule-in</li>
<li><b>LR−</b> = (1−sensitivity)/specificity; &lt;0.1 = strong rule-out</li>
<li>Prevalence affects PPV/NPV but NOT sensitivity/specificity</li>
</ul>` },
            'bs2': { id:'bs2', title:'Research Biases', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Selection bias</b>: non-random assignment; Berkson bias (hospital controls ≠ general population)</li>
<li><b>Recall bias</b>: case-control; diseased patients recall exposures more (cases remember better than controls)</li>
<li><b>Lead-time bias</b>: earlier detection appears to extend survival; use disease-specific mortality to correct</li>
<li><b>Length bias</b>: screening detects slow-growing (less aggressive) tumors more often</li>
<li><b>Confounding</b>: 3rd variable associated with both exposure &amp; outcome; control by randomization, restriction, matching, multivariate analysis</li>
<li><b>Hawthorne effect</b>: subjects change behavior when being observed</li>
<li><b>Observer-expectancy bias</b>: researcher's expectations influence measurement; prevent with blinding</li>
</ul>` }
          }
        }
      }
    },
    step2: {
      label: 'Step 2 CK',
      categories: {
        internal_med: {
          label: 'Internal Medicine', icon: '🏥',
          cards: {
            'im1': { id:'im1', title:'Chest Pain Differential', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>STEMI</b>: ST elevation + reciprocal depression; <mark>cath lab within 90 min (door-to-balloon)</mark>; if no cath lab → fibrinolytics within 30 min if no contraindications</li>
<li><b>NSTEMI/UA</b>: troponin ↑ (NSTEMI) or normal (UA); no ST elevation; MONA (morphine, O2, nitroglycerin, aspirin) + heparin; cardiac cath within 24-72h</li>
<li><b>Aortic dissection</b>: tearing/ripping pain radiating to back; BP differential (&gt;20 mmHg between arms); widened mediastinum on CXR; CT angiography; NO anticoagulation; Type A → surgery; Type B → β-blockers + BP control</li>
<li><b>PE</b>: pleuritic pain, dyspnea, tachycardia; Wells score; CT-PA (gold standard) or V/Q scan; treat: anticoagulation (LMWH → warfarin/DOAC); massive PE → tPA thrombolytics</li>
<li><b>Pericarditis</b>: sharp, positional (↑ supine, ↓ leaning forward); friction rub; diffuse saddle-shaped ST elevation + PR depression; treat: NSAIDs + colchicine</li>
<li><b>Esophageal spasm</b>: mimics angina; relieved by nitrates; "corkscrew esophagus" on barium swallow</li>
</ul>` },
            'im2': { id:'im2', title:'Hypertensive Emergency Management', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Urgency</b>: BP &gt;180/120, <u>no</u> end-organ damage; oral medications; reduce over 24–48h (labetalol PO, clonidine, amlodipine)</li>
<li><b>Emergency</b>: BP &gt;180/120 + end-organ damage → <mark>reduce MAP by 20–25% in first hour, then gradually</mark></li>
<li><b>End-organ damage</b>: hypertensive encephalopathy, retinopathy (papilledema), AKI, flash pulmonary edema, aortic dissection, eclampsia, MI</li>
<li><b>IV Agents</b>: nicardipine (most versatile), labetalol, clevidipine, hydralazine (pregnancy)</li>
<li><b>Nitroprusside</b>: most potent; cyanide toxicity risk; avoid in renal failure; requires ICU monitoring</li>
<li><b>Eclampsia</b>: labetalol or hydralazine for BP; MgSO4 for seizure prevention; delivery is definitive</li>
<li><b>Avoid rapid correction</b> – risk of ischemic stroke, watershed infarcts</li>
</ul>` }
          }
        },
        cardiology_ck: {
          label: 'Cardiology', icon: '🫀',
          cards: {
            'ck1': { id:'ck1', title:'Heart Failure Management', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<p><b>HFrEF (EF &lt;40%) – disease-modifying therapy (GDMT):</b></p>
<ul>
<li><b>ACEi/ARB/ARNi</b> (sacubitril-valsartan [Entresto]) – reduces mortality; ARNi preferred if tolerated</li>
<li><b>β-blocker</b> (carvedilol, metoprolol succinate, bisoprolol) – reduce mortality; start when euvolemic</li>
<li><b>MRA</b> (spironolactone, eplerenone) – reduces mortality in EF &lt;35%; monitor K+</li>
<li><b>SGLT2 inhibitors</b> (dapagliflozin, empagliflozin) – newest GDMT; ↓ hospitalization &amp; mortality</li>
<li><b>Diuretics</b> (furosemide) – symptom relief only; not disease-modifying</li>
<li><b>ICD</b>: EF &lt;35% despite 3+ months GDMT → sudden death prevention</li>
<li><b>CRT</b>: EF &lt;35% + LBBB + QRS &gt;150ms</li>
</ul>
<p><b>HFpEF (EF ≥50%)</b>: diuretics for symptoms; SGLT2i beneficial; control underlying HTN/AF</p>` }
          }
        },
        ob_gyn: {
          label: 'OB/GYN', icon: '🤰',
          cards: {
            'og1': { id:'og1', title:'Preeclampsia & Eclampsia', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Preeclampsia</b>: HTN (≥140/90 on 2 occasions) + proteinuria (&gt;300mg/24h) OR end-organ damage after 20 wks gestation</li>
<li><b>Severe features</b>: BP ≥160/110, thrombocytopenia &lt;100k, Cr &gt;1.1, LFTs &gt;2× normal, pulmonary edema, new headache/visual changes</li>
<li><b>HELLP</b>: Hemolysis, Elevated Liver enzymes, Low Platelets; variant of severe preeclampsia</li>
<li><b>Management</b>: <mark>delivery is definitive treatment</mark>; MgSO4 for seizure prophylaxis; labetalol/hydralazine/nifedipine for BP ≥160/110</li>
<li><b>Eclampsia</b>: new-onset seizures in preeclampsia; MgSO4 (not phenytoin); Ca gluconate reverses Mg toxicity</li>
<li><b>Mg toxicity signs</b>: loss of DTRs (first sign) → respiratory depression → cardiac arrest; therapeutic level 4–7 mEq/L</li>
<li><b>Postpartum</b>: can develop up to 6 weeks after delivery; monitor BP closely</li>
</ul>` },
            'og2': { id:'og2', title:'Abnormal Uterine Bleeding', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<p><b>PALM-COEIN classification:</b></p>
<ul>
<li><b>PALM</b> (structural): Polyp, Adenomyosis, Leiomyoma (fibroids), Malignancy</li>
<li><b>COEIN</b> (non-structural): Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not yet classified</li>
</ul>
<p><b>Key workup</b>: β-hCG first (always!), CBC, TSH, prolactin, coagulation studies; pelvic US; endometrial biopsy if &gt;45yo or risk factors</p>
<ul>
<li><b>Fibroids</b>: most common pelvic tumor; heavy menstrual bleeding; GnRH agonist (temporary); myomectomy (fertility desired) or hysterectomy</li>
<li><b>Endometrial cancer</b>: <mark>postmenopausal bleeding = malignancy until proven otherwise</mark>; risk: unopposed estrogen, obesity, nulliparity, tamoxifen, PCOS</li>
<li><b>PCOS</b>: oligo/anovulation, hyperandrogenism, polycystic ovaries; ↑ LH:FSH ratio; treat: OCP (cycle control), metformin (insulin resistance), clomiphene (fertility)</li>
</ul>` }
          }
        },
        pediatrics: {
          label: 'Pediatrics', icon: '👶',
          cards: {
            'ped1': { id:'ped1', title:'Developmental Milestones', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>2 months</b>: social smile, coos, tracks past midline</li>
<li><b>4 months</b>: laughs, holds head steady, rolls front→back, hands together at midline</li>
<li><b>6 months</b>: sits with support, stranger anxiety, transfers objects, rolls both ways, babbles (consonants)</li>
<li><b>9 months</b>: object permanence, pincer grasp begins, stands holding furniture, waves bye-bye</li>
<li><b>12 months</b>: mama/dada specific, 1–2 words, walks with support, pincer grasp refined</li>
<li><b>18 months</b>: 20 words, walks alone, scribbles, stacks 2–4 blocks, points to body parts</li>
<li><b>2 years</b>: 50+ words, 2-word phrases, runs, kicks ball, parallel play</li>
<li><b>3 years</b>: 3-word sentences, rides tricycle, copies circle, dress/undress, cooperative play</li>
<li><b>4 years</b>: counts 4+ objects, knows colors, draws person (3 parts), hops on one foot</li>
</ul>
<p><mark>Loss of milestones at any age = red flag → evaluate for regression</mark></p>` },
            'ped2': { id:'ped2', title:'Pediatric Vaccines Schedule (ACIP)', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Birth</b>: Hep B #1</li>
<li><b>2 months</b>: DTaP, IPV, Hib, PCV13, Rotavirus, Hep B #2</li>
<li><b>4 months</b>: DTaP, IPV, Hib, PCV13, Rotavirus</li>
<li><b>6 months</b>: DTaP, Hib, PCV13, Rotavirus, Flu (annual), Hep B #3</li>
<li><b>12–15 months</b>: MMR, Varicella, Hep A #1, PCV13, Hib</li>
<li><b>15–18 months</b>: DTaP #4</li>
<li><b>4–6 years</b>: DTaP #5, IPV #4, MMR #2, Varicella #2</li>
<li><b>11–12 years</b>: Tdap, MCV4, HPV series (2 doses if started before 15)</li>
</ul>
<p><b>Contraindications</b>: live vaccines (MMR, Varicella) contraindicated in immunocompromised and pregnancy</p>` }
          }
        },
        psychiatry: {
          label: 'Psychiatry', icon: '🧠',
          cards: {
            'psych1': { id:'psych1', title:'Antidepressants Comparison', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>SSRIs</b>: first-line; sexual dysfunction, GI upset, SIADH, serotonin syndrome (with MAOIs); fluoxetine (longest t½, fewest discontinuation sx); paroxetine (most anticholinergic)</li>
<li><b>SNRIs</b>: venlafaxine, duloxetine; depression + neuropathic pain/fibromyalgia; ↑ BP at high doses</li>
<li><b>Bupropion</b>: no sexual dysfunction; smoking cessation (Zyban); <mark>lowers seizure threshold</mark>; contraindicated in eating disorders, seizures; does NOT cause serotonin syndrome</li>
<li><b>Mirtazapine</b>: NaSSA; ↑ appetite, sedation (antihistamine); good for anorexia/insomnia; no sexual dysfunction</li>
<li><b>TCAs</b> (amitriptyline, nortriptyline): neuropathic pain, enuresis (imipramine); AEs: 3 Cs (Convulsions, Coma, Cardiotoxicity) + anticholinergic; treat OD with sodium bicarbonate (widens QRS)</li>
<li><b>MAOIs</b> (phenelzine, tranylcypromine): atypical depression; <mark>tyramine reaction = hypertensive crisis</mark>; serotonin syndrome with SSRIs; 2-week washout</li>
<li><b>Trazodone</b>: priapism, sedation; often used as sleep aid; no sexual dysfunction</li>
</ul>` },
            'psych2': { id:'psych2', title:'Antipsychotics', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Typical (1st gen)</b>: D2 antagonists; haloperidol (most EPS), chlorpromazine (most sedation/anticholinergic); EPS (akathisia, dystonia, parkinsonism, tardive dyskinesia)</li>
<li><b>EPS timeline</b>: <mark>4 hours → akathisia; 4 days → acute dystonia; 4 weeks → drug-induced parkinsonism; 4 months → tardive dyskinesia</mark></li>
<li><b>Tardive dyskinesia</b>: lip smacking, choreoathetoid movements; treat: valbenazine (VMAT2 inhibitor) or clonazepam</li>
<li><b>NMS</b>: fever, rigidity, altered mental status, autonomic instability; ↑ CK; treat: stop antipsychotic, dantrolene, bromocriptine</li>
<li><b>Atypical (2nd gen)</b>: D2 + 5-HT2A; clozapine (best for refractory; agranulocytosis → weekly CBC), olanzapine, quetiapine, risperidone, aripiprazole</li>
<li><b>Metabolic syndrome</b>: weight gain, dyslipidemia, DM2 → olanzapine &gt; clozapine &gt; others; aripiprazole has lowest metabolic risk</li>
</ul>` }
          }
        },
        surgery: {
          label: 'Surgery', icon: '🔪',
          cards: {
            'su1': { id:'su1', title:'Acute Abdomen Localization', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>RUQ</b>: cholecystitis (Murphy's sign – inspiratory arrest with RUQ palpation), choledocholithiasis, hepatitis, Fitz-Hugh-Curtis (perihepatitis, gonorrhea/chlamydia)</li>
<li><b>RLQ</b>: <mark>appendicitis</mark> (McBurney's point, Rovsing's, psoas, obturator signs); ovarian pathology, Meckel's diverticulum, Crohn's ileitis</li>
<li><b>LLQ</b>: diverticulitis ("left-sided appendicitis"); ovarian cyst/torsion, sigmoid volvulus, IBD</li>
<li><b>Epigastric</b>: PUD, gastritis, pancreatitis (epigastric radiating to back, ↑ with food, ↓ leaning forward)</li>
<li><b>Diffuse</b>: peritonitis (rigid abdomen, rebound, guarding), mesenteric ischemia, DKA (pseudo-acute abdomen)</li>
<li><b>Appendicitis workup</b>: Alvarado score; US first (in pregnant); CT if US equivocal; WBC ↑, CRP ↑; surgery (laparoscopic appendectomy)</li>
</ul>` }
          }
        },
        emergency: {
          label: 'Emergency Medicine', icon: '🚨',
          cards: {
            'er1': { id:'er1', title:'Status Epilepticus Management', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<p><b>Definition</b>: seizure &gt;5 min OR ≥2 seizures without return to baseline</p>
<ul>
<li><b>1st line</b>: IV <mark>lorazepam</mark> (0.1 mg/kg); IM midazolam if no IV access; rectal/nasal options available</li>
<li><b>2nd line (5–20 min)</b>: IV levetiracetam, IV valproate, or IV fosphenytoin</li>
<li><b>3rd line / Refractory (20–40 min)</b>: IV phenobarbital; consider intubation</li>
<li><b>Super-refractory (&gt;24h)</b>: anesthesia (propofol, midazolam drip, ketamine, pentobarbital coma); continuous EEG monitoring</li>
<li><b>Always check</b>: fingerstick glucose (give dextrose + thiamine if alcoholism suspected), electrolytes (Na, Ca, Mg), toxicology, AED levels</li>
<li><b>Common causes</b>: AED non-compliance, alcohol withdrawal, CNS infection, electrolyte abnormalities, stroke, drug toxicity</li>
</ul>` }
          }
        }
      }
    },
    step3: {
      label: 'Step 3',
      categories: {
        ambulatory: {
          label: 'Ambulatory Medicine', icon: '🏠',
          cards: {
            'am1': { id:'am1', title:'Preventive Care Screening Guidelines', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Colorectal cancer</b>: colonoscopy q10y starting at 45 (ACS) or 50 (USPSTF); FIT annually; earlier with FH (10y before earliest diagnosis in 1st-degree relative)</li>
<li><b>Breast cancer</b>: mammography starting 40 (ACS, ACOG) or 50 (USPSTF); q2y; BRCA testing if high-risk</li>
<li><b>Cervical cancer</b>: Pap smear q3y ages 21–29; Pap+HPV co-test q5y ages 30–65; stop at 65 if adequate prior screening</li>
<li><b>Lung cancer</b>: annual low-dose CT for ages 50–80 with ≥20 pack-year history, current smoker or quit &lt;15 years</li>
<li><b>AAA</b>: one-time abdominal US for men 65–75 who have ever smoked (≥100 cigarettes lifetime)</li>
<li><b>Lipids</b>: fasting lipid panel; men ≥35, women ≥45 (or earlier with CV risk factors)</li>
<li><b>DM screening</b>: FPG or HbA1c; adults 35–70 with overweight/obesity; q3y if normal</li>
<li><b>Osteoporosis</b>: DXA scan women ≥65; younger women with risk factors; FRAX score</li>
</ul>` },
            'am2': { id:'am2', title:'Diabetes Management', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<p><b>Glycemic targets</b>: HbA1c &lt;7% (most patients); &lt;8% (elderly/complex); FPG 80–130; post-prandial &lt;180</p>
<p><b>Medications:</b></p>
<ul>
<li><b>Metformin</b>: first-line; ↓ hepatic glucose production; no hypoglycemia; lactic acidosis risk; hold before contrast; stop if GFR &lt;30</li>
<li><b>SGLT2 inhibitors</b>: empagliflozin, dapagliflozin; <mark>↓ CV mortality &amp; HF hospitalizations</mark>; genital mycotic infections, DKA (euglycemic), Fournier's gangrene</li>
<li><b>GLP-1 agonists</b>: semaglutide, liraglutide; ↓ CV mortality; weight loss; nausea; c/i in MEN2/medullary thyroid cancer</li>
<li><b>Sulfonylureas</b>: glipizide, glimepiride; ↑ insulin secretion; hypoglycemia risk; weight gain</li>
<li><b>DPP-4 inhibitors</b>: sitagliptin; weight-neutral; pancreatitis risk; heart failure risk (saxagliptin)</li>
<li><b>Insulin</b>: required for T1DM; used in T2DM when oral agents fail; basal (glargine) + prandial (lispro/aspart)</li>
</ul>` }
          }
        },
        inpatient: {
          label: 'Inpatient Management', icon: '🛏️',
          cards: {
            'ip1': { id:'ip1', title:'Electrolyte Disorders', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<p><b>Hyponatremia (Na &lt;135):</b></p>
<ul>
<li><mark>Correct no faster than 10–12 mEq/L/24h</mark> → prevents central pontine myelinolysis (osmotic demyelination)</li>
<li>SIADH: restrict fluids; hypertonic saline if severe/symptomatic; tolvaptan (V2 receptor antagonist)</li>
<li>Hypovolemic: NS replacement; Hypervolemic (HF, cirrhosis): fluid restriction + diuretics</li>
</ul>
<p><b>Hyperkalemia ECG changes</b>: peaked T → prolonged PR → wide QRS → sine wave → VFib</p>
<ul>
<li>Tx: <mark>Ca gluconate first</mark> (membrane stabilization, no shift); insulin+glucose (shift K+ in); sodium bicarb (shift); kayexalate/patiromer/sodium zirconium (eliminate); dialysis (definitive)</li>
</ul>
<p><b>Hypomagnesemia</b>: refractory hypokalemia/hypocalcemia → correct Mg first</p>
<p><b>Hypocalcemia</b>: Chvostek (facial tapping), Trousseau (carpopedal spasm with BP cuff); IV Ca gluconate for symptomatic</p>` },
            'ip2': { id:'ip2', title:'Sepsis Bundle (Surviving Sepsis)', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<p><b>Definitions:</b></p>
<ul>
<li><b>SIRS</b>: 2+ of: T &gt;38°C or &lt;36°C, HR &gt;90, RR &gt;20, WBC &gt;12k or &lt;4k</li>
<li><b>Sepsis</b>: infection + organ dysfunction (SOFA score ≥2); <mark>qSOFA: altered mental status, RR ≥22, SBP ≤100</mark></li>
<li><b>Septic shock</b>: sepsis + MAP &lt;65 mmHg despite adequate fluids + lactate &gt;2 mmol/L</li>
</ul>
<p><b>Hour-1 Bundle:</b></p>
<ul>
<li>Blood cultures ×2 (before antibiotics)</li>
<li>Broad-spectrum antibiotics within 1h</li>
<li>30 mL/kg IV crystalloid (NS or LR) if hypotension or lactate ≥4</li>
<li>Vasopressors if MAP &lt;65 despite fluids: <mark>norepinephrine first-line</mark></li>
<li>Measure lactate; remeasure if initial &gt;2</li>
</ul>
<p><b>Additional</b>: hydrocortisone if refractory to vasopressors; source control within 6–12h</p>` }
          }
        },
        emergency_mgmt: {
          label: 'Emergency Management', icon: '🚑',
          cards: {
            'em1': { id:'em1', title:'Acute Stroke Management', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<p><b>"Time is Brain"</b> – 1.9 million neurons lost per minute of untreated stroke</p>
<ul>
<li><b>Initial workup</b>: non-contrast CT head (r/o hemorrhage), CBC, PT/INR, glucose, type &amp; screen</li>
<li><b>IV tPA (alteplase)</b>: ischemic stroke, within <mark>4.5 hours</mark> of symptom onset; BP must be &lt;185/110; check exclusion criteria (anticoagulation, recent surgery, hemorrhage on CT)</li>
<li><b>Mechanical thrombectomy</b>: large vessel occlusion (ICA, MCA); up to 24h with imaging selection (DAWN/DEFUSE criteria); door-to-groin &lt;60 min</li>
<li><b>BP management</b>: do NOT lower BP aggressively in acute ischemic stroke (&lt;220/120 if no tPA; &lt;185/110 if tPA); permissive HTN maintains penumbra perfusion</li>
<li><b>Hemorrhagic stroke</b>: no tPA; reverse anticoagulation (PCC for warfarin; andexanet alfa for Factor Xa inhibitors; idarucizumab for dabigatran); neurosurgery consult</li>
<li><b>Secondary prevention</b>: aspirin + clopidogrel (21 days for minor stroke/TIA); then antiplatelet monotherapy; statin; BP control; anticoagulation for AF</li>
</ul>` }
          }
        },
        pharmacotherapy: {
          label: 'Pharmacotherapy', icon: '💉',
          cards: {
            'pt1': { id:'pt1', title:'Renal Dosing & Nephrotoxic Drugs', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<p><b>Drugs requiring dose reduction in CKD (renally cleared):</b></p>
<ul>
<li>Aminoglycosides, vancomycin, penicillins/cephalosporins (most), carbapenems</li>
<li>Metformin: hold if GFR &lt;30 (lactic acidosis risk)</li>
<li>Lithium, digoxin, gabapentin, pregabalin, LMWH, carboplatin, allopurinol</li>
<li>Direct oral anticoagulants: dose-adjust rivaroxaban (GFR &lt;50); avoid dabigatran (GFR &lt;30)</li>
</ul>
<p><b>No adjustment needed</b> (hepatically cleared): macrolides (azithromycin), ceftriaxone, metronidazole, nafcillin, rifampin, linezolid</p>
<p><b>Nephrotoxic drugs to monitor</b>:</p>
<ul>
<li><mark>Aminoglycosides</mark>: trough monitoring; proximal tubular cells; irreversible</li>
<li>Vancomycin: AUC-guided dosing; synergistic nephrotoxicity with aminoglycosides</li>
<li>NSAIDs: inhibit prostaglandins → afferent vasoconstriction → AKI (especially in low-flow states)</li>
<li>Contrast: hold metformin; hydrate pre/post; use iso-osmolar contrast in high-risk patients</li>
<li>Cisplatin: prevent with aggressive hydration; amifostine (chemoprotection)</li>
</ul>` }
          }
        },
        biostatistics: {
          label: 'Biostatistics & Epidemiology', icon: '📈',
          cards: {
            'bios1': { id:'bios1', title:'Study Designs & Evidence Hierarchy', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<p><b>Evidence hierarchy (strongest → weakest):</b></p>
<ol>
<li><b>Systematic review / Meta-analysis</b>: pooled data; most powerful for evidence synthesis</li>
<li><b>RCT</b>: only study type that proves causality; randomization controls confounders; gold standard</li>
<li><b>Cohort</b>: exposure → outcome; calculates <mark>relative risk (RR)</mark>; prospective (Framingham) or retrospective; good for rare exposures</li>
<li><b>Case-control</b>: outcome → exposure; calculates <mark>odds ratio (OR)</mark>; good for rare diseases; recall bias risk</li>
<li><b>Cross-sectional</b>: prevalence snapshot; calculates OR; cannot determine temporality</li>
<li><b>Case series/report</b>: hypothesis generating; no controls</li>
</ol>
<p><b>Key calculations:</b></p>
<ul>
<li>RR = [a/(a+b)] / [c/(c+d)] — used in cohort studies</li>
<li>OR = (a×d)/(b×c) — used in case-control; approximates RR when disease is rare</li>
<li>ARR = CER − EER; NNT = 1/ARR; NNH = 1/ARI</li>
<li>RRR = ARR/CER (% reduction in risk attributable to treatment)</li>
</ul>` },
            'bios2': { id:'bios2', title:'Statistical Concepts', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Type I error (α)</b>: rejecting H₀ when true (false positive); p-value = probability of Type I error; accept α = 0.05</li>
<li><b>Type II error (β)</b>: failing to reject H₀ when false (false negative); power = 1−β; typically β = 0.2 (80% power)</li>
<li><b>Power</b>: ↑ with larger sample size, larger effect size, ↑ α</li>
<li><b>Confidence interval</b>: if 95% CI for RR or OR does NOT include 1 → statistically significant</li>
<li><b>p-value &lt; 0.05</b>: result is unlikely due to chance alone; does NOT indicate clinical significance</li>
<li><b>Normal distribution</b>: 68% within 1 SD; 95% within 2 SD; 99.7% within 3 SD</li>
<li><b>Parametric tests</b>: t-test (2 groups, continuous), ANOVA (≥3 groups), Pearson correlation</li>
<li><b>Non-parametric tests</b>: Mann-Whitney U, Kruskal-Wallis, Spearman (when data not normally distributed)</li>
<li><b>Chi-square</b>: categorical data comparison between groups</li>
</ul>` }
          }
        },
        clinical_decisions: {
          label: 'Clinical Decision Making', icon: '⚖️',
          cards: {
            'cd1': { id:'cd1', title:'Medical Ethics Principles', flagged:false, created:'2026-01-01', modified:'2026-01-01',
              content:`<ul>
<li><b>Autonomy</b>: patient's right to make informed decisions; includes right to refuse treatment (even life-saving)</li>
<li><b>Beneficence</b>: act in the patient's best interest</li>
<li><b>Non-maleficence</b>: do no harm ("primum non nocere")</li>
<li><b>Justice</b>: fair distribution of healthcare resources</li>
</ul>
<p><b>Informed Consent Requirements:</b></p>
<ul>
<li>Patient has decision-making <mark>capacity</mark> (not same as competence — legal term)</li>
<li>Information disclosed: diagnosis, treatment options, risks/benefits, alternatives, right to refuse</li>
<li>Voluntary (no coercion)</li>
<li><b>Exceptions</b>: emergency (imminent threat), waiver, therapeutic privilege (rare), patient incompetent</li>
</ul>
<p><b>Advance Directives:</b></p>
<ul>
<li><b>Living will</b>: patient-written specific instructions for care</li>
<li><b>Healthcare proxy / DPOA</b>: designates surrogate decision-maker; uses substituted judgment ("what would patient want?")</li>
<li>If no advance directive: next of kin hierarchy (spouse → adult children → parents → siblings)</li>
</ul>` }
          }
        }
      }
    }
  }
};

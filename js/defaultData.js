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
        human_development: {
          label: 'Human Development', icon: '👶',
          subcategories: {
            normal_findings: { label: 'Normal age-related findings and care of the well patient', summary: 'Infancy and childhood (0 12 years Normal physical changes: linear growth, variations in linear growth, including constitutional delay; weight; head circumference; micturition, defecation, primary incontinence/bedwetting; normal physical examination; screening; sleep; teething syndrome Developmental stages: motor; speech; cognitive; psychosocial; anticipatory guidance Lifestyle and routine preventive health care: nutrition; exercise (eg, benefits of exercise preventive/travel medicine; risk factors and prevention (eg, guns, swimming, motor vehicles, car seats; routine vaccinations; adaptive be', cards: {} }
          },
          cards: {}
        },
        immune_system: {
          label: 'Immune System', icon: '🛡️',
          subcategories: {
            immunodeficiency:    { label: 'Disorders associated with immunodeficiency', summary: 'deficiency primarily of humoral immunity common variable immunodeficiency; hyper IgM syndrome; hypogammaglobulinemia/agammaglobulinemia, X linked (Bruton; selective immunodeficiency (eg, IgA, IgM, IgE deficiency/dysfunction primarily of cell mediated immunity adenosine deaminase deficiency; DiGeorge (22q11.2 deletionyndrome ; severe combined immunodeficiency disease (SCIDskott Aldrich syndrome; granulomatosis; allergic reactions/skin complement deficiency alternative pathway component deficiency (C2, C3b, C3bB, C36B6ssical pathway component deficiency (C1q, C1r, C1 C5; terminal component', cards: {} },
            hiv_aids:            { label: 'HIV/AIDS', summary: 'HIV1 and HIV2; AIDS; AIDS complications (eg, neuropathy, dementia, renal insufficiencymmunology of AIDS; immune reconstitution syndrome (IRSsecondary infections; noninfectious complications (eg, Kaposi sarcoma', cards: {} },
            immunologic:         { label: 'Immunologically mediated disorders', summary: 'hypersensitivity reactions type 1, 2, 3, including anaphylaxis; type 4; drug reactions; serum sickness transplantation rejection; graft host disease', cards: {} },
            drug_effects:        { label: 'Adverse effects of drugs on the immune system', summary: 'Jarisch Herxheimer reaction drugs affecting the immune system (eg, prednisone, azathioprine, cyclosporine, methotrexate, monoclonal antibody drugs [eg, abciximab, adalimumab; bevacizumab, vaccine adverse effects', cards: {} }
          },
          cards: {}
        },
        blood_lymphoreticular: {
          label: 'Blood & Lymphoreticular System', icon: '🩸',
          subcategories: {
            infectious:    { label: 'Infectious and immunologic, including microbiologic and host response to insult', summary: 'infectious disorders bacterial viral: hemorrhagic fever (Ebola virus, Marburg virus chikungunya; dengue fever; Zika virus disease parasitic: malaria ( Plasmodium ecies siosis ( Babesia species primary infections of lymphoid tissue lymphadenitis (viral, bacterial, fungal, parasiticymphangitis; buboes, bubonic plague ( Yersinia pestis scratch disease ( Bartonella henselae immunologic and inflammatory disorders cryoglob inemia, essential mixed cryoglob inemia; autoimmune hemolytic anemia; paroxysmal nocturnal hemoglobinuria; thrombotic thrombocytopenic purpura; hemolytic uremic syndrome', cards: {} },
            neoplasms:     { label: 'Neoplasms', summary: 'leukemia, acute (ALL, AMLleukemia, chronic (CLL, CMLmphomas, Hodgkin disease, non Hodgkin lymphoma, Burkitt lymphoma, T cell lymphoma; multiple myeloma, dysproteinemias, monoclonal gammopathy of unknown significance (MGUSyelofibrosis; myelodysp lastic syndrome, myelodysplasias; other immunoproliferative neoplasms (eg, Waldenstrom macroglobulinemia', cards: {} },
            anemia:        { label: 'Anemia, cytopenias, and polycythemia', summary: 'decreased production anemia of chronic disease hemolysis glucose phosphate dehydrogenase deficiency; pyruvate kinase deficiency disorders of hemoglobin, heme, or membrane disorders of red cell membranes; hereditary spherocytosis, elliptocytosis; methemoglobinemia, congenital; sickle cell disease; sideroblastic anemia; thalassemias other causes of anemia blood loss, acute and chronic as a cause of anemia cytopenias aplastic anemia; leukopenia; neutropenia, cyclic neutropenia, agranulocytosis; pancytopenia; thrombocytopenia, quantitative; immune thrombocytopenic purpura (ITP cythemias eukocytosi', cards: {} },
            coagulation:   { label: 'Coagulation disorders (hypocoagulable and hypercoagulable conditions)', summary: 'ypocoagulable disseminated intravascular coagulation; hemophilia, congenital actor hypercoagulable heparin induced thrombocytopenia; other coagulopathies (eg, homocysteinemia, hypoplasminogenemia, antithrombin III, protein C/protein S deficiency, Factor V Leiden, anticardiolipin antibodies, lupus anticoagulant, prothrombin G20210A mutation reactions to blood components ABO incompatibility/anaphylaxis; Rh incompatibility/anaphylaxis; hemolysis, delayed; transfusion reaction; transfusion contaminated with bacteria; transfusion related acute lung injury (TRALI; anaphylactoid reaction (IgA defici', cards: {} },
            traumatic:     { label: 'Traumatic, mechanical, and vascular disorders', summary: 'mechanical injury to erythrocytes (eg, cardiac valve hemolysis disorders of the spleen splenic rupture/laceration; splenic infarct; splenic abscess; effects/complications of splenectomy (eg, sepsis due to encapsulated bacteria; hypersplenism', cards: {} },
            drug_effects:  { label: 'Adverse effects of drugs on the hematologic and lymphoreticular systems', summary: 'antiplatelet drugs antithrombin drugs (eg, dabigatran chemotherapeutic agents inhibitors of coagulation factors methemoglobinemia, acquired propylthiouracil tumor lysis syndrome warfarin', cards: {} }
          },
          cards: {}
        },
        behavioral_health: {
          label: 'Behavioral Health', icon: '🧠',
          subcategories: {
            psychotic:      { label: 'Psychotic disorders', summary: 'brief psychotic disorder; delusional disorder; psychotic disorder due to another medical condition; schizophrenia; schizoaffective disorder; substance induced psychotic disorder', cards: {} },
            anxiety:        { label: 'Anxiety disorders', summary: 'acute stress disorder; anxiety disorders (generalized anxiety disorder, anxiety due to another medical condition, social phobiayperventilation syndrome; obsessive compulsive disorder; panic disorder with and without agoraphobia; phobic disorders; post traumatic stress disorder; selective mutism; separation anxiety disorder; substance induced anxiety disorder, trichotillomania', cards: {} },
            mood:           { label: 'Mood disorders', summary: 'major depressive disorder with and without psychotic features, with and without seasonal pattern; major depressive disorder, postpartum, with and without psychotic features, including screening; cyclothymic disorder; persistent depressive disorder; bipolar disorder, manic/depressed/mixed; premenstrual dysphoric disorder; bipolar and related disorder or depressive disorder due to another medical condition; substance/medication induced bipolar and related disorder or depressive disorder (illegal or prescribed suicidal ideation/attempt', cards: {} },
            somatic:        { label: 'Somatic symptoms and related disorders', summary: 'body dysmorphic disorder; functional neurologic symptom disorder conversion disorder , including psychogenic seizures; dissociative disorders; illness anxiety disorder (hypochondriasismalingering; pain disorder; somatic symptom disorder', cards: {} },
            factitious:     { label: 'Factitious disorders', summary: 'factitious disorder imposed on self', cards: {} },
            eating_impulse: { label: 'Eating disorders and impulse control disorders', summary: 'anorexia nervosa; binge eating disorder; bulimia nervosa; eating disorder; disruptive, impulse control, and conduct disorders (eg, gambling, kleptomania, pyromania', cards: {} },
            infancy:        { label: 'Disorders originating in infancy/childhood', summary: 'reactive attachment disorder; attention deficit/hyperactivity disorder; speech sound disorder or language disorder; learning disorder/dyslexia; intellectual developmental disorder and developmental delay, undefined, including school problems, fetal alcohol syndrome; oppositional defiant disorder, conduct disorder; autism spectrum disorder, Rett syndrome; psychoses with origin specific to childhood; elimination disorders (incontinence, encopresis; tic disorders/Tourette disorder', cards: {} },
            personality:    { label: 'Personality disorders', summary: 'antisocial personality disorder; avoidant personality disorder; borderline personality disorder; dependent personality disorder; histrionic personality disorder; narcissistic personality disorder; obsessive compulsive personality disorder; paranoid personality disorder; schizoid personality disorder', cards: {} },
            psychosocial:   { label: 'Psychosocial disorders/behaviors', summary: 'adjustment disorder; grief response/bereavement, normal and persistent complex; parent child relational problems other than physical or emotional abuse; other psychosocial stress; psychodynamic and behavioral factors, related past experience (eg, transfere nce, personality traits', cards: {} },
            sexual:         { label: 'Sexual disorders and gender dysphoria', summary: 'gender dysphoria; psychosexual dysfunction', cards: {} },
            substance_use:  { label: 'Substance use disorders', summary: 'alcohol use disorder/intoxication/dependence/withdrawal; tobacco/nicotine use disorder/dependence/withdrawal; varenicline use; cannabis use disorder/intoxication/dependence; hallucinogen use disorder/intoxication/dependence/withdrawal; inhalant use disorde r/intoxication/dependence/withdrawal; opioid, heroin, including prescription drug, use disorder/intoxication/dependence/withdrawal; sedative, hypnotic, including benzodiazepine and barbiturate use disorder/intoxication/dependence/withdrawal; stimulant, coc aine, methamphetamine use disorder/intoxication/dependence/withdrawal; other drugs of', cards: {} }
          },
          cards: {}
        },
        nervous_system: {
          label: 'Nervous System & Special Senses', icon: '⚡',
          subcategories: {
            infectious:       { label: 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult', summary: 'infectious disorders meningitis: bacterial ( Actinomyces israelii Haemophilus influenzae Listeria monocytogenes Mycobacterium tuberculosis Neisseria meningitidis Staphylococcus aureus epidermidis Streptococcus agalactiae Streptococcus pneumoniae al (adenovirus, arboviruses, echovirus and coxsackie virus A & B, polioviruses, herpes simplex virus, varicella zoster, human immunodeficiency virus, lymphocytic choriomeningitis virus, measles virus, mumps virus, St. Louis encephalitis virus, California encephalitis virus, W estern equine encephalitis virusungal Blastomycosis dermatitidis Cryptococc', cards: {} },
            neoplasms:        { label: 'Neoplasms (cerebral, spinal, and peripheral)', summary: 'benign (meningioma, neurofibromatosis malignant (glioblastoma, astrocytoma, medulloblastoma, primary CNS lymphoma metastatic (eg, breast, lung, pancreatic, testicular, melanoma', cards: {} },
            cerebrovascular:  { label: 'Cerebrovascular disease', summary: 'arteriovenous malformations, ectatic cerebral vessels; transient ischemic attack; stroke, thrombotic: cerebral artery occlusion/cerebral infarction; stroke, embolic: cerebral embolism; stroke: intracerebral hemorrhage, including subarachnoid hemorrhage, traumatic intracranial hemorrhage; cerebral artery aneurysm; carotid artery stenosis/atherosclerosis/occlusion/dissection; vertebral artery deficiency/ dissection; subclavian steal syndrome; vascular dementia; hypertensive encephalopathy; posterior reversible encephalopathy syndrome; venous sinus thrombosis', cards: {} },
            spine:            { label: 'Disorders relating to the spine, spinal cord, and spinal nerve roots', summary: 'cauda equina syndrome; spinal artery thrombosis/embolus/infarct; spinal cord compression; spinal cord transection, paraplegia and quadriplegia, acute and chronic effects (eg, autonomic dysreflexia spinal stenosis (cervical, lumbar syringomyelia', cards: {} },
            cranial_periph:   { label: 'Cranial and peripheral nerve disorders', summary: 'cranial nerve injury/disorders cranial nerve injury; Bell palsy; anisocoria, miosis, mydriasis; internuclear ophthalmoplegia; nystagmus and other irregular eye movements; vestibular neuritis, labyrinthitis; ptosis of the eyelid; Horner syndrome peripheral nerve/plexus injury/disorders peripheral nerve injury, including brachial plexus; carpal/cubital/tarsal/peroneal tunnel syndrome; mononeuritis, Guillain Barr syndrome; Miller Fisher syndrome; neuropathy (eg, Charcot Marie Tooth diseaseherpes zoster', cards: {} },
            pain_syndromes:   { label: 'Neurologic pain syndromes', summary: 'complex regional pain syndrome (reflex sympathetic dystrophy, causalgia; fibromyalgia; postherpetic neuralgia; phantom limb pain/syndrome; thalamic pain syndrome; trigeminal neuralgia', cards: {} },
            degenerative:     { label: 'Degenerative disorders/amnestic syndromes', summary: 'Alzheimer disease; frontotemporal dementia, including progressive supranuclear palsy, Lewy body disease; mild neurocognitive disorder, mild cognitive impairment', cards: {} },
            global_cerebral:  { label: 'Global cerebral dysfunction', summary: 'altered states of consciousness; delirium; coma/brain death', cards: {} },
            neuromuscular:    { label: 'Neuromuscular disorders', summary: 'amyotrophic lateral sclerosis/spinal muscular atrophy; muscular dystrophy (eg, Duchenne, myotonic; muscle channelopathies (eg, hypokalemic period paralysis', cards: {} },
            movement:         { label: 'Movement disorders', summary: 'acute dystonia; adult tic disease; essential tremor; Huntington disease; Parkinson disease, including Parkinson dementia', cards: {} },
            metabolic:        { label: 'Metabolic disorders', summary: 'adrenoleukodystrophy; metabolic encephalopathy', cards: {} },
            paroxysmal:       { label: 'Paroxysmal disorders', summary: 'headache, including migraine, mixed, tension, ice pick, cluster, medication withdrawal, caffeine withdrawal; seizure disorders, including generalized tonic clonic, partial, absence, febrile', cards: {} },
            sleep:            { label: 'Sleep disorders', summary: 'cataplexy and narcolepsy; circadian rhythm sleep wake disorder; insomnia, primary; sleep terror disorder and sleepwalking; REM sleep behavior disorder; restless legs syndrome', cards: {} },
            traumatic:        { label: 'Traumatic and mechanical disorders and disorders of increased intracranial pressure', summary: 'mechanical injury to erythrocytes (eg, cardiac valve hemolysis disorders of the spleen splenic rupture/laceration; splenic infarct; splenic abscess; effects/complications of splenectomy (eg, sepsis due to encapsulated bacteria; hypersplenism', cards: {} },
            congenital:       { label: 'Congenital disorders', summary: 'Friedreich ataxia; neural tube defects (eg, spina bifida, holoprosencephaly, anencephaly; microcephaly; Sturge Weber syndrome; tuberous sclerosis, von Hippel Lindau disease; hydrocephalus, obstructive (Arnold Chiari', cards: {} },
            drug_effects:     { label: 'Adverse effects of drugs on the nervous system', summary: 'acute dystonic reaction induced meningitis (eg, NSAIDs, sulfa drugs induced neuropathy (eg, vincristine, isoniazid, metronidazole extrapyramidal adverse effects (eg, akathisia, dystonia, drug induced parkinsonism neuroleptic malignant syndrome poisoning by psychotropic agents, including antidepressants serotonin syndrome tardive dyskinesia', cards: {} },
            eye_eyelid:       { label: 'Disorders of the eye and eyelid', summary: 'infectious and inflammatory disorders of the eye, including microbiologic and host response to insult blepharitis/eyelid inflammation; chalazion; chorioretinitis; conjunctivitis (adenovirusratoconjunctivitis; dacryocystitis; endophthalmitis; hordeolum; iridocyclitis; optic neuritis; periorbital cellulitis; uveitis neoplasms of the eye melanoma; retinoblastoma disorders of the eye and eyelid, structural cataract; glaucoma; lacrimal system disorders; pterygium; refractive disorders (presbyopia, myopia, hyperopia, astigmatism disorders of the pupil, iris, muscles (extraocular amblyopia; strabism', cards: {} },
            ear:              { label: 'Disorders of the ear', summary: 'infectious and inflammatory disorders of the ear, including microbiologic and host response to insult chondritis; mastoiditis; otitis, externa, media, interna, serous, suppurative, malignant otitis externa neoplasms acoustic neuroma, neurofibromatosis type 2; cholesteatoma hearing loss/deafness hearing loss, including noise induced; otosclerosis; tinnitus disorders of balance and spatial orientation Mnire disease; motion sickness; vertigo, including benign positional vertigo traumatic and mechanical disorders barotrauma; foreign body in ear; impacted cerumen; laceration, avulsion; perforation', cards: {} }
          },
          cards: {}
        },
        skin_subcutaneous: {
          label: 'Skin & Subcutaneous Tissue', icon: '🩹',
          subcategories: {
            infectious:     { label: 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult', summary: 'infectious disorders and infestations bacterial cellulitis, erysipelas, impetigo, staphylococcal scalded skin syndrome; abscess, cutaneous, including septic abscess; anthrax ( Bacillus anthracis arbuncle; folliculitis; pilonidal cyst, infected; MSSA and MRSA skin infections; mycobacterial infections (eg, leprosy, draining sinusscarlet fever (group A Streptococcus viral herpes simplex type 1 & type 2, herpes zoster, Ramsay Hunt syndrome; molluscum contagiosum; hand mouth disease; herpangina; parvovirus; chickenpox, erythema infectiosum (fifth diseaserubella, measles, roseola (exanthema subit', cards: {} },
            neoplasms:      { label: 'Neoplasms', summary: 'benign (meningioma, neurofibromatosis malignant (glioblastoma, astrocytoma, medulloblastoma, primary CNS lymphoma metastatic (eg, breast, lung, pancreatic, testicular, melanoma', cards: {} },
            integumentary:  { label: 'Integumentary disorders (hair and hair follicles, nails, sweat glands, sebaceous glands, oral mucous membranes)', summary: 'disorders of the hair and hair follicles alopecia; seborrhea capitis/seborrheic dermatitis; tinea barbae and capitis disorders of the nails (including ingrowing nail disorders of sweat and sebaceous glands acne vulgaris; hidradenitis suppurativa; hyperhidrosis; ichthyosis; rosacea', cards: {} },
            oral_disease:   { label: 'Oral disease', summary: 'aphthous ulcers (stomatitis, canker sores; leukoplakia', cards: {} },
            pigmentation:   { label: 'Disorders of pigmentation', summary: 'albinism; lentigo', cards: {} },
            traumatic:      { label: 'Traumatic and mechanical disorders', summary: 'anoxic brain damage, cerebral hypoxia; epidural, subdural hematoma (cerebral and spinal intraparenchymal hemorrhage, traumatic subarachnoid hemorrhage; cerebral edema; idiopathic intracranial hypertension; torticollis/cervical dystonia; hydrocephalus, in cluding normal pressure; traumatic brain injury (concussion/postconcussion syndrome (dementia pugilisticaraumatic brain syndrome', cards: {} },
            congenital:     { label: 'Congenital disorders', summary: 'xeroderma pigmentosum; benign lesions in neonates, infants, children (eg, congenital nevi', cards: {} },
            drug_effects:   { label: 'Adverse effects of drugs on skin and subcutaneous tissue', summary: 'drug reactions, eruptions, including local reaction to vaccine', cards: {} }
          },
          cards: {}
        },
        musculoskeletal: {
          label: 'Musculoskeletal System', icon: '🦴',
          subcategories: {
            infectious:   { label: 'Infectious, inflammatory, and immunologic disorders, including microbiologic and host response to insult', summary: 'infectious disorders gangrene, dry and wet, clostridial myonecrosis ( Clostridium perfringens citis; myositis, infective; necrotizing fasciitis; osteomyelitis; septic arthritis; spondylitis, tuberculous immunologic disorders ankylosing spondylitis; dermatomyositis/polymyositis; juvenile idiopathic arthritis; rheumatoid arthritis, Felty syndrome; psoriatic arthropathy inflammatory disorders adhesive capsulitis of shoulder (frozen shoulder syndrome; ankylosis/spondylopathy (inflammatory bursitis; fasciitis; ganglion cyst osteochondritis, osteochondritis dissecans; tendinitis, supraspinatus sy', cards: {} },
            neoplasms:    { label: 'Neoplasms', summary: 'benign neoplasms, cysts and other skin lesions actinic keratoses; cysts, including epidermal; hemangiomas; lipoma; pigmented nevi; seborrheic keratosis; xanthomas malignant neoplasms basal cell carcinoma; squamous cell carcinoma; melanoma, including genital; cutaneous T lymphoma, mycosis fungoides', cards: {} },
            degenerative: { label: 'Degenerative and metabolic disorders', summary: 'degenerative/metabolic disorders of bone, tendon, and cartilage chondromalacia; disc degeneration, herniated disc; Legg Perthes disease; Osgood Schlatter disease; osteodystrophy; osteomalacia; osteonecrosis (avascularne infarct; osteoporosis; osteopenia; osteitis deformans (Paget disease of bone; pathologic fracture; radiculopathies; spondylolisthesis/spondylosis (degenerative degenerative/metabolic disorders of joints gout, gouty arthritis, pseudogout; joint effusion; osteoarthritis degenerative/metabolic disorders of muscles, ligaments, fascia Dupuytren contracture; muscle calcification an', cards: {} },
            traumatic:    { label: 'Traumatic and mechanical disorders', summary: 'animal bites (dogs, cats, etc burns or wounds affecting the skin or subcutaneous tissue (eg, sunburn, other including blast injuries and burns cauliflower ear effects of ultraviolet light keloids tattoo thermal injury perniosis frostbite ulcers, decubitus', cards: {} },
            congenital:   { label: 'Congenital disorders', summary: 'achondroplasia/dwarfism; disorders of limb development (HOX gene mutation, phocomelia developmental dysplasia of the hip; dislocation of hip in infantile spinal muscular atrophy; genu valgum or varum; foot deformities (flat foot, valgus/varus deformities steogenesis imperfecta; McArdle disease; mitochondrial myopathies', cards: {} },
            drug_effects: { label: 'Adverse effects of drugs on the musculoskeletal system', summary: 'induced myopathy (eg, steroids, statins, cocaine, AZT malignant hyperthermia', cards: {} }
          },
          cards: {}
        },
        cardiovascular: {
          label: 'Cardiovascular System', icon: '🫀',
          subcategories: {
            infectious:   { label: 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult', summary: 'infectious disorders bacterial endocarditis, myocarditis immunologic and inflammatory disorders atherosclerosis (eg, atherosclerosis of the aorta', cards: {} },
            neoplasms:    { label: 'Neoplasms', summary: 'benign neoplasms (eg, osteoid osteoma, enchondroma, tenosynovial giant cell tumor malignant neoplasms of bone (eg, osteosarcoma, sarcoma, leiomyosarcoma, rhabdo sarcoma metastases to bone, secondary malignant neoplasm of bone', cards: {} },
            dysrhythmias: { label: 'Dysrhythmias', summary: 'premature beats (PACs, PVCsatrial flutter/fibrillation; multifocal atrial tachycardia; paroxysmal tachycardias; ventricular tachycardia/fibrillation; wide complex tachycardia; torsades de pointes; bradycardias; atrioventricular block (first , second degreeconduction disorder (LBBB, RBBB cardiac arrest; sick sinus syndrome; prolonged QT syndrome; Wolff Parkinson White syndrome; carotid sinus hypersensitivity; pacemaker dysfunction, including failure to sense, capture', cards: {} },
            heart_failure:{ label: 'Heart failure', summary: 'chordae tendineae rupture; congestive heart failure; cor pulmonale; diastolic dysfunction; systolic dysfunction; mitral valve dysfunction; heart failure secondary to myocardial infarction; high output heart failure, including thyrotoxicosis induced, anemia induced; tachycardia induced; cardiogenic pulmonary edema', cards: {} },
            ischemic:     { label: 'Ischemic heart disease', summary: 'acute coronary syndrome, acute myocardial infarction; angina pectoris, stable and unstable/coronary artery disease/coronary insufficiency; coronary artery spasm', cards: {} },
            myocardium:   { label: 'Diseases of the myocardium', summary: 'cardiomyopathy, dilated, including alcoholic, viral, takotsubo; cardiomyopathy, obstructive hypertrophic; cardiomyopathy, familial dilated; cardiomyopathy, restrictive; hypertensive heart disease, left ventricular hypertrophy, right ventricular hypertrophy ; complications of myocardial infarction; nontraumatic tamponade post myocardial infarction; papillary muscle rupture/dysfunction; ventricular free wall rupture; myocarditis', cards: {} },
            pericardium:  { label: 'Diseases of the pericardium', summary: 'chronic constrictive pericarditis; pericardial effusion; pericardial tamponade; acute pericarditis; pericarditis, following myocardial infarction, surgery, trauma', cards: {} },
            valvular:     { label: 'Valvular heart disease', summary: 'valve disorders, mitral/aortic/tricuspid, pulmonic (eg, regurgitation, stenosis, prolapse, insufficiency, vegetation; functional murmurs; rheumatic heart disease; complications of artificial valves', cards: {} },
            hypotension:  { label: 'Hypotension', summary: 'orthostatic hypotension', cards: {} },
            hypertension: { label: 'Hypertension', summary: 'elevated blood pressure reading without diagnosis of hypertension; essential hypertension; hypertensive emergency; secondary hypertension', cards: {} },
            dyslipidemia: { label: 'Dyslipidemia', summary: 'hypercholesterolemia; hyperlipidemia; hypertriglyceridemia; lipoproteins/lipoprotein lipase deficiency', cards: {} },
            vascular:     { label: 'Vascular disorders', summary: 'disorders of the great vessels aneurysm, aortic (abdominal/thoracicdissection, ruptured; aneurysm, iliac, other peripheral vascular, ruptured; aortoiliac disease peripheral arterial vascular disease arterial embolus/thrombosis; arteriovenous fistula; atheroembolic disease; claudication; cholesterol emboli; hypertensive vascular disease; peripheral arterial disease; thromboangiitis obliterans diseases of the veins deep venous thrombosis, venous thromboembolism; phlebitis/thrombophlebitis; varicose veins; venous insufficiency; stasis ulcers, stasis dermatitis', cards: {} },
            traumatic:    { label: 'Traumatic and mechanical disorders', summary: 'amputation and care of amputees; backache, including low back pain; blast injuries; compartment syndrome; contractures, hospital acquired; contusions; dislocations; fractures; sprains, strains; kyphoscoliosis, scoliosis; rotator cuff syndrome; slipped capi tal femoral epiphysis; dislocation of hip', cards: {} },
            congenital:   { label: 'Congenital disorders, including disease in adults', summary: 'anomalous left coronary artery; atrial septal defect; coarctation of the aorta; endocardial cushion defect; patent foramen ovale; patent ductus arteriosus; tetralogy of Fallot; transposition of the great vessels; ventricular septal defect', cards: {} },
            drug_effects: { label: 'Adverse effects of drugs on the cardiovascular system', summary: 'driamycin cocaine, amphetamine, PCP ACE inhibitors, calcium channel blockers, alpha blockers, minoxidil', cards: {} }
          },
          cards: {}
        },
        respiratory: {
          label: 'Respiratory System', icon: '🫁',
          subcategories: {
            infectious:        { label: 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult', summary: 'infectious, immunologic, and inflammatory disorders of the upper airways acute upper respiratory infection; viral infections (adenovirus, coronaviruses, coxsackievirus, influenza virus, parainfluenza virus, rhinovirusesusitis; nasopharyngitis; epiglottitis; Bordetella pertussis pneumonia; croup; acute laryngitis; acute laryngotracheitis; tracheitis; pharyngitis; streptococcal throat infections; tonsillitis; peritonsillar abscess; rhinitis, allergic, chronic; ulcers of nasal cavity/sinuses infectious, immunologic, and inflammatory disorders of the lower airways hospital acquired pneumonia; ven', cards: {} },
            neoplasms:         { label: 'Neoplasms', summary: 'myxoma, metastases', cards: {} },
            obstructive:       { label: 'Obstructive airway disease', summary: 'asthma, reactive airway disease; bronchiectasis; chronic airway obstruction; chronic obstructive pulmonary disease (COPD, chronic bronchitis, emphysema', cards: {} },
            pneumoconiosis:    { label: 'Pneumoconiosis/fibrosing/restrictive pulmonary disorders/interstitial lung disease', summary: 'pneumoconiosis; asbestosis; silicosis; silo filler\'s lung, byssinosis, bagassosis, berylliosis; hypersensitivity pneumonitis; hypereosinophilic syndromes, Loeffler syndrome; interstitial pneumonia, usual (UIP desquamative (DIPnspecific', cards: {} },
            resp_failure:      { label: 'Respiratory failure/respiratory arrest and pulmonary vascular disorders', summary: 'acute respiratory distress syndrome (ARDSnary hypertension; pulmonary vascular disorders, arteriovenous fistula; pulmonary edema, pulmonary cause and unspecified; pulmonary embolism; air and fat embolism; respiratory failure due to enteral feeding', cards: {} },
            metabolic:         { label: 'Metabolic, regulatory, and structural disorders', summary: 'disorders of gas exchange; hypoventilation; hypoxia; ventilation perfusion imbalance', cards: {} },
            pleura:            { label: 'Disorders of the pleura, mediastinum, and chest wall', summary: 'chylothorax; costochondritis; empyema; hemothorax; mediastinitis; pleural effusion; pleuritis; pneumomediastinum; pneumothorax', cards: {} },
            traumatic:         { label: 'Traumatic and mechanical disorders', summary: 'ventricular puncture; myocardial contusion; myocardial rupture; traumatic aortic dissection; traumatic tamponade', cards: {} },
            congenital:        { label: 'Congenital disorders', summary: 'anomalous left coronary artery; atrial septal defect; coarctation of the aorta; endocardial cushion defect; patent foramen ovale; patent ductus arteriosus; tetralogy of Fallot; transposition of the great vessels; ventricular septal defect', cards: {} },
            drug_effects:      { label: 'Adverse effects of drugs on the respiratory system', summary: 'bleomycin, amiodarone adverse effects of 100% oxygen acute effects of tobacco/nicotine, inhalants, cocaine', cards: {} }
          },
          cards: {}
        },
        gastrointestinal: {
          label: 'Gastrointestinal System', icon: '🏥',
          subcategories: {
            infectious:     { label: 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult', summary: 'infectious disorders bacterial pseudomembranous colitis ( Clostridium difficile eritis/enteric infections (includes gastroenteritis (eg, Staphylococcus aureus Escherichia coli Listeria monocytogenes Yersinia enterocolitica Campylobacter species, Vibrio cholerae Salmonella species, Shigella species, traveler\'s/infectious diarrhea; hepatic abscess, subhepatic abscess, subphrenic abscess; peritonitis, primary and secondary viral infectious esophagitis (eg, CMV, herpeshepatitis A, B, C, D, E; coxsackievirus enteritis/colitis; Echovirus enteritis/colitis; rotavirus enteritis; mumps; gingivostom', cards: {} },
            neoplasms:      { label: 'Neoplasms', summary: 'benign neoplasms: upper airways (eg, vocal cord polyps, nasal polyps, juvenile papillomatosis; lungs and pleura (eg, solitary pulmonary nodule malignant neoplasms upper airways: lip, oral cavity, and pharynx; head and neck cancer; larynx; trachea lower airways and pleura: malignant neoplasms of bronchus and/or lung (squamous cell, adenocarcinoma, large cell, small cell , bronchial carcinoid tumors malignant neoplasms of pleura (mesotheliomacondary malignant neoplasms of lung; secondary malignant neoplasms of pleura metastatic neoplasms including pleural', cards: {} },
            signs_symptoms: { label: 'Signs, symptoms, and ill-defined disorders', summary: 'upper gastrointestinal bleeding; lower gastrointestinal bleeding; constipation; diarrhea; hematochezia; bright red rectal bleeding; melena; nausea, vomiting, rumination', cards: {} },
            oral_esophagus: { label: 'Disorders of the oral cavity, salivary glands, and esophagus', summary: 'oral cavity and salivary glands abscessed tooth; dental caries; malocclusion; disorders of the salivary glands (eg, stones, sialadenitis, parotitis esophagus achalasia and cardiospasm; dysphagia; diverticulum (eg, Zenker esophageal periapical abscess without sinus; esophagitis/esophageal reflux (GERD esophagitis, pill; Mallory Weiss syndrome; paraesophageal (hiatalrnia; stricture and stenosis of esophagus', cards: {} },
            stomach_colon:  { label: 'Disorders of the stomach, small intestine, colon, rectum, anus', summary: 'stomach dyspepsia/hyperacidity; gastric ulcer; gastritis; peptic ulcer; peptic ulcer perforation; gastroparesis small intestine, colon appendicitis; angiodysplasia; diverticula, diverticulitis, diverticulosis; duodenitis, duodenal ulcer, peptic ulcer; gastroenteritis and colitis (noninfectious granulomatous enterocolitis; Hirschsprung disease; impaction of intestine; intestinal obstruct ion/stricture; intussusception; irritable colon/irritable bowel syndrome; mesenteric ischemia/ischemic bowel/ischemic colitis; necrotizing enterocolitis; paralytic ileus; volvulus; malnutrition and malabsorpti', cards: {} },
            liver_biliary:  { label: 'Disorders of the liver and biliary system, noninfectious', summary: 'liver cirrhosis; Dubin Johnson, Rotor syndromes; end stage liver disease, including indications for transplantation; Gilbert syndrome, Crigler Najjar syndrome; hepatic coma/hepatic encephalopathy; hepatitis, noninfectious; hepatitis, fatty liver, alcoholic; hepa torenal syndrome; hepatopulmonary syndrome; jaundice; non alcoholic fatty liver disease; portal hypertension/esophageal varices biliary system bile duct obstruction/cholestasis; cholangitis, including ascending; choledocholithiasis; cholelithiasis/cholecystitis; cholestasis due to parenteral nutrition; gallstone ileus; Mirizzi syndrome', cards: {} },
            pancreas:       { label: 'Disorders of the pancreas', summary: 'pancreatitis, acute; pancreatitis, chronic; pancreatitis, hereditary; pancreatic cyst/pseudocyst; pancreatic duct obstruction; pancreatic insufficiency', cards: {} },
            peritoneal:     { label: 'Disorders of the peritoneal cavity', summary: 'ascites', cards: {} },
            traumatic:      { label: 'Traumatic and mechanical disorders', summary: 'upper airways epistaxis; barotrauma, sinus; laryngeal/pharyngeal obstruction; tracheoesophageal fistula; tracheal stenosis; tracheomalacia; trauma (eg, tracheal injuryoreign body (nose, pharynx, larynx, trachea; traumatic/mechanical disorders of the nasal cavity/si nuses (eg, septal perforation lower airways and pleura atelectasis; diaphragm/chest wall injury; drowning and near drowning; foreign body, upper and lower respiratory tract; penetrating chest wounds; pulmonary contusion; sleep apnea, obstructive and central; hypoventilation syndrome, obesity hypoventilation sy ndrome', cards: {} },
            congenital:     { label: 'Congenital disorders', summary: 'bronchogenic cysts; congenital cysts; congenital diaphragmatic hernia; pulmonary sequestration; immotile cilia syndrome', cards: {} },
            drug_effects:   { label: 'Adverse effects of drugs on the gastrointestinal system', summary: 'induced changes in motility (chronic laxative use, opioids induced gastritis, duodenitis, peptic ulcer disease (NSAIDs induced hepatitis (eg, acetaminophen, isoniazid induced pancreatitis (eg, thiazide diuretics', cards: {} }
          },
          cards: {}
        },
        renal_urinary: {
          label: 'Renal & Urinary System', icon: '💧',
          subcategories: {
            infectious:     { label: 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult', summary: 'infectious disorders upper urinary tract granulomatous pyelonephritis; perinephric abscess; pyelonephritis; pyonephrosis; renal abscess; renal tuberculosis lower urinary tract and urinary tract infections of unspecified location cystitis; chlamydial and nonchlamydial immunologic and inflammatory disorders upper urinary tract glomerular disorders: Alport syndrome; glomerular disease due to hepatitis B, C; glomerulonephritis, including poststreptococcal; IgA nephropathy; lupus nephritis; minimal change disease; nephrotic syndrome; thin basement membrane disease tubular interstitial disease: acut', cards: {} },
            neoplasms:      { label: 'Neoplasms', summary: 'benign neoplasms, including polyps, cysts stomach; small intestine; colon, rectum, and anus, including polyps malignant neoplasms and pre malignant conditions oral cancer (eg, lips, mouth, tongue, salivary glands; esophageal, squamous and adenocarcinoma; Barrett esophagus; gastrinoma, Zollinger Ellison syndrome; gastrointestinal carcinoid tumors; gastrointestinal stromal tumors; small intestine; stomach, adenoc arcinoma, lymphoma, MALT; colon, rectum, anus; hereditary colon cancer syndromes, familial adenomatous polyposis (eg, Peutz Jeghers syndrome, Gardner syndrome, Turcot syndrome MUTYH as', cards: {} },
            signs_symptoms: { label: 'Signs, symptoms, and ill-defined disorders', summary: 'dysuria; hematuria; oliguria, anuria; proteinuria', cards: {} },
            metabolic:      { label: 'Metabolic and regulatory disorders', summary: 'disorders of gas exchange; hypoventilation; hypoxia; ventilation perfusion imbalance', cards: {} },
            vascular:       { label: 'Vascular disorders', summary: 'renal artery stenosis (atherosclerosis, fibromuscular dysplasia, nephrosclerosis; renal vein thrombosis; renal infarction', cards: {} },
            traumatic:      { label: 'Traumatic and mechanical disorders', summary: 'abdominal wall defects adhesions, postsurgical; digestive system complications of surgery; post gastric surgery syndromes (eg, blind loop syndrome, adhesions; duodenal tear; foreign body in digestive system; inguinal, femoral, and abdominal wall hernias; open wound, abdominal; perforation of hollow viscus and blunt trauma; perforation/rupture of esophagus (Boerhaave syndrome; umbilical hernia', cards: {} },
            congenital:     { label: 'Congenital disorders', summary: 'annular pancreas, biliary atresia, cleft lip and palate, esophageal atresia, malrotation without volvulus, Meckel diverticulum, pyloric stenosis, tracheoesophageal fistula', cards: {} },
            drug_effects:   { label: 'Adverse effects of drugs on the renal and urinary system', summary: 'ACE inhibitors; aminoglycosides; amphotericin B; cisplatin; furosemide; gadolinium (nephrogenic systemic fibrosisheroin; iodinated contrast dye; lithium; NSAIDs; penicillins; sulfa drugs; tenofovir; drug induced urinary retention', cards: {} }
          },
          cards: {}
        },
        pregnancy_childbirth: {
          label: 'Pregnancy, Childbirth, & the Puerperium', icon: '🤰',
          subcategories: {
            prenatal:      { label: 'Prenatal care', summary: 'preconception counseling and care folate deficiency prevention; immunizations; nutritional assessment, including vitamins; Rh screening prenatal risk assessment/prevention adolescent pregnancy; antepartum fetal evaluation, including biophysical profile; genetic fetoprotein; diabetes mellitus; neural tube defects; Rh isoimmunization upervision of normal pregnancy assessment of gestational age; iron deficiency prevention; nutrition, including weight management; surveillance, including ultrasonography and assessment of fetal growth; vitamin deficiency prevention; infections, maternal, fetal, newb', cards: {} },
            obstetric:     { label: 'Obstetric complications', summary: 'abortion, induced, septic, missed, spontaneous, threatened; acute fatty liver of pregnancy; anemia of pregnancy, sickle cell disease, thalassemia in pregnancy; antepartum hemorrhage, including third trimester bleeding; cardiomyopathy of pregnancy; cervical insufficiency, cervical shortening; cholestasis of pregnancy, intrahepatic; congenital abnormalities, maternal (eg, bicornuate uterus; ectopic pregnancy; fetal abnormality affecting management of mother (eg, hydrocephalus, spina bifida; fetal growth triction; gestational diabetes; maternal mortality; multiple gestation; placental abnormali', cards: {} },
            labor_delivery:{ label: 'Labor and delivery', summary: 'labor and delivery, uncomplicated; labor and delivery, complicated, including shoulder dystocia; cesarean delivery, including complications; cord compression, cord prolapse; fetal malpresentations (eg, breech/external cephalic; intrapartum fetal evaluatio n, including fetal heart tones; intrapartum prophylaxis (eg, HIV, Chlamydia , gonococcal prophylaxis premature rupture of membranes; preterm (before 37 weeks\' gestationd postdates labor and delivery; threatened preterm labor', cards: {} },
            puerperium:    { label: 'Puerperium, including complications', summary: 'lactation problems; breast feeding problems; lochia; postpartum cardiomyopathy; postpartum blues; postpartum hemorrhage; postpartum sepsis; retained placenta, products of conception (eg, placenta accretaerine atony', cards: {} },
            newborn:       { label: 'Newborn (birth to 4 weeks of age)', summary: 'normal newborn examination of liveborn at admission to hospital screening, newborn disorders of the newborn screening, newborn; ABO incompatibility in newborn; hemolytic disease due to Rh incompatibility; birth asphyxia syndrome (liveborn neonatebirth trauma (eg, cord compression, brachial palsy, lacerations drug withdrawal syndrome in newborn; feeding problems in newborn; fetal growth and development abnorm alities, including fetal growth restriction; gastrointestinal obstruction; hypocalcemia of newborn; infections, congenital or peripartum (cytomegalovirus, herpes simplex viruses, HIV, he', cards: {} },
            drug_effects:  { label: 'Adverse effects of drugs on pregnancy, childbirth, and the puerperium', summary: 'alcohol, tobacco, and other drugs (ATOD; prenatal radiation exposure; teratology (eg, ACE inhibitors, SSRIs, warfarin, infections, toxins', cards: {} },
            systemic:      { label: 'Systemic disorders affecting pregnancy, labor and delivery, and puerperium', summary: 'appendicitis; asthma; carpal tunnel syndrome in pregnancy; cirrhosis; deep venous thrombosis (DVT diabetes mellitus; heart failure, valvular heart disease; hypertension; myasthenia gravis; obesity; pancreatitis; psychiatric disorders; renal calculus/calc uli; renal failure/renal disease, including SLE; seizure disorders; thyroid disorders, hypothyroidism, hyperthyroidism', cards: {} }
          },
          cards: {}
        },
        female_reproductive: {
          label: 'Female and Transgender Reproductive System & Breast', icon: '♀️',
          subcategories: {
            breast:              { label: 'Breast', summary: '', cards: {} },
            female_repro_system: { label: 'Female reproductive system', summary: '', cards: {} }
          },
          cards: {}
        },
        male_reproductive: {
          label: 'Male and Transgender Reproductive System', icon: '♂️',
          subcategories: {
            infectious:   { label: 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult', summary: '', cards: {} },
            neoplasms:    { label: 'Neoplasms', summary: 'benign neoplasms and cysts polycystic kidney disease malignant neoplasms renal (eg, Wilms tumor/nephroblastoma, renal cell carcinoma, renal tumors associated with congenital/hereditary conditions; urinary bladder and collecting system', cards: {} },
            metabolic:    { label: 'Metabolic and regulatory disorders, including sexual dysfunction', summary: '', cards: {} },
            traumatic:    { label: 'Traumatic and mechanical disorders', summary: 'bladder rupture; neurogenic bladder; obstructive uropathy; posterior urethral valves; renal laceration; renal vascular injury; ureteral laceration/avulsion/disruption; urethral diverticulum; obstruction/stricture/prolapse, urethral/ureteral, vaginal walls, uterine, uterovaginal; urinary incontinence, including secondary enuresis; vesicoureteral reflux', cards: {} },
            congenital:   { label: 'Congenital disorders', summary: 'double ureters/ureteral duplication/double collecting system; horseshoe kidney; hydronephrosis/reflux; renal agenesis, renal hypoplasia, renal dysplasia; single kidney', cards: {} },
            drug_effects: { label: 'Adverse effects of drugs on the male reproductive system', summary: 'alcohol, tobacco, and other drugs (ATOD; prenatal radiation exposure; teratology (eg, ACE inhibitors, SSRIs, warfarin, infections, toxins', cards: {} }
          },
          cards: {}
        },
        endocrine: {
          label: 'Endocrine System', icon: '⚗️',
          subcategories: {
            diabetes:      { label: 'Diabetes mellitus and other disorders of the endocrine pancreas', summary: 'diabetes mellitus diabetes mellitus, type 1; diabetes mellitus, type 1.5; diabetes mellitus, type 2; diabetes mellitus, acute complications: hyperosmolar coma, hypoglycemic shock, ketoacidosis, including cerebral edema, associated electrolyte abnormalities; diabetes mellitu s, chronic complications: gastrointestinal/gastroparesis, neurologic/neuropathy, ophthalmologic/retinopathy, peripheral vascular, renal/nephropathy, metabolic syndrome hypoglycemia and islet cell disorders hypoglycemia (secondary to insulinoma, surreptitious insulin use, sepsis, liver failure hyperglycemia (secondary to glu', cards: {} },
            thyroid:       { label: 'Thyroid disorders', summary: 'cyst, nodule; euthyroid sick syndrome; goiter (euthyroid normal thyroid function with goiter; hypothyroidism; hyperthyroidism, including thyrotoxicosis and thyroid storm; thyroiditis, including Hashimoto; Graves disease; neoplasms (benign cysts and nodule s, thyroid cancer including papillary, follicular, medullary, and anaplastichyroid deficiency from pituitary disorder; infertility due to thyroid disease; secondary hypothyroidism and hyperthyroidism', cards: {} },
            parathyroid:   { label: 'Parathyroid disorders', summary: 'hyperparathyroidism; hypoparathyroidism; metabolic bone disease', cards: {} },
            adrenal:       { label: 'Adrenal disorders', summary: 'corticoadrenal insufficiency (Addison disease; adrenal insufficiency, secondary; hypocortisolism; Cushing syndrome; hyperaldosteronism; neoplasms, benign and malignant (adrenal neuroblastoma, pheochromocytoma, adrenal carcinoma, adrenal adenoma, aldostero noma, adrenal incidentaloma; delayed and precocious puberty; hypertensive endocrine disease', cards: {} },
            pituitary:     { label: 'Pituitary disorders', summary: 'acromegaly/gigantism; diabetes insipidus; galactorrhea not associated with childbirth; panhypopituitarism from any cause; pituitary apoplexy (eg, Sheehan syndrome; growth hormone deficiency; short stature; SIADH (inappropriate secretion of ADH [vasopressi adenomas, craniopharyngioma, metastatic diseaseprolactinoma and hyperprolactinemia, including infertility due to these disorders; hypogonadism, primary and secondary', cards: {} },
            hypothalamic:  { label: 'Hypothalamic endocrine disorders', summary: 'disorders of sexual differentiation; congenital adrenal hyperplasia; androgen insensitivity/resistance syndrome; congenital hypothyroidism', cards: {} },
            men:           { label: 'Multiple endocrine neoplasia (MEN1, MEN2)', summary: 'disorders of sexual differentiation; congenital adrenal hyperplasia; androgen insensitivity/resistance syndrome; congenital hypothyroidism', cards: {} },
            congenital:    { label: 'Congenital disorders', summary: '', cards: {} },
            drug_effects:  { label: 'Adverse effects of drugs on the endocrine system', summary: '', cards: {} }
          },
          cards: {}
        },
        multisystem: {
          label: 'Multisystem Processes & Disorders', icon: '🔄',
          subcategories: {
            infectious:        { label: 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult', summary: 'infectious disorders bacterial brucellosis ( Brucella sppeptospirosis ( Leptospira interrogans me disease ( Borrelia burgdorferi elioidosis ( Burkholderia pseudomallei iliary (disseminatedculosis Mycobacterium tuberculosis ularemia ( Francisella tularensis oxic shock syndrome; Q fever ( Coxiella burnetii aplasmosis and ehrlichiosis ( Anaplasma Ehrlichia speciesckettsiosis (Rocky Mountain spotted fever [ Rickettsia rickettsii viral infectious mononucleosis (Epstein Barr virus cytomegalovirus infection; yellow fever; human herpesvirus 8 (HHV fungal blastomycosis ( Blastomyces dermatiti', cards: {} },
            neoplasms:         { label: 'Neoplasms and related disorders', summary: '', cards: {} },
            signs_symptoms:    { label: 'Signs, symptoms, and ill-defined disorders', summary: 'arthralgias; abdominal pain; chest pain; cough; dizziness, light headedness, syncope, including breath holding spells with syncope; dyspnea, shortness of breath; edema, anasarca; fatigue; fever of unknown origin; frailty; hemoptysis; pain management (in a nonaddiction, nonpalliative care setting, including appropriate opioid prescribing practices; joint pain; lymphedema; palpitations; pruritus; unexpected weight gain/weight loss', cards: {} },
            nutrition:         { label: 'Nutrition', summary: 'protein calorie malnutrition (kwashiorkor, marasmus vitamin deficiencies and/or toxicities vitamin A; vitamin B; vitamin B , thiamine (eg, Wernicke Korsakoff syndrome, beriberi; vitamin , niacin; vitamin B , pyridoxine; vitamin B , folic acid; vitamin B , cobalamins (pernicious anemiamin C (scurvyvitamin D (rickets; vitamin E; vitamin K mineral deficiencies and/or toxicitie obesity enteral/parenteral nutrition (TPN', cards: {} },
            toxins:            { label: 'Toxins and environmental extremes', summary: 'physical and associated disorders temperature (eg, hypothermia, hyperthermia, heat stroke radiation (eg, radon, uranium mining, imaging studies thermal injury, burns, electrocution, lightning decreased atmospheric pressure, high altitude sickness increased water pressure (nitrogen narcosis chemical including Gulf War illness gases, vapors, smoke inhalation agricultural hazards (eg, pesticides, green tobacco poisoning, anhydrous ammonia, Agent Orange volatile organic solvents metals (eg, lead other chemical agents (eg, ethylene glycol, carbon tetrachloride, methanol; BPA', cards: {} },
            venomous:          { label: 'Venomous bites and stings', summary: 'hymenoptera bites and stings; scorpion bites; snake bites; spider bites; jellyfish stings', cards: {} },
            fluid_electrolyte: { label: 'Fluid, electrolyte, and acid-base balance disorders', summary: 'fluid volume and electrolyte/ion disorders: fluid volume disorders; dehydration; hypovolemia; volume overload; electrolyte disorders; hyponatremia, hypernatremia; hypokalemia, hyperkalemia; hypocalcemia, hypercalcemia; hypophosphatemia, hyperphosphatemia; hypomagnesemia base disorders: metabolic acidosis; metabolic alkalosis; respiratory acidosis; respiratory alkalosis; mixed acid base disturbances', cards: {} },
            multiple_trauma:   { label: 'Multiple trauma', summary: 'prioritization, blast injury involving more than one organ system', cards: {} },
            genetic:           { label: 'Genetic, metabolic, and developmental disorders', summary: 'ultifactorial VATER /VACTERL association; association syndromes large genomic changes Beckwith Wiedemann syndrome; Down syndrome; Prader Willi syndrome enzymatic/metabolic alpha 1 antitrypsin deficiency; porphyria; inborn errors of metabolism (eg, maple syrup urine disease, diseases involving urea cycle storage diseases (eg, Fabry disease, Tay Sachs disease, glycogen storage disease, mucopolysaccharidoses structural protein disorders amyloidosis; Ehlers Danlos syndrome; immotile cilia syndrome (Kartagener syndrome; primary ciliary dyskinesiaarfan syndrome intracellular/extracellular transpor', cards: {} },
            drug_effects:      { label: 'Adverse effects of drugs on multisystem disorders', summary: 'drug, medicinal, and biologic substance effects; exogenous steroid suppression of adrenal glands, anabolic steroids', cards: {} }
          },
          cards: {}
        },
        biostatistics_epidemiology: {
          label: 'Biostatistics, Epidemiology/Population Health, & Interpretation of the Medical Literature', icon: '📊',
          subcategories: {
            epidemiology:       { label: 'Epidemiology/population health', summary: '', cards: {} },
            study_design:       { label: 'Study design, types and selection of studies (includes dependent/independent variables)', summary: '', cards: {} },
            measures_assoc:     { label: 'Measures of association', summary: '', cards: {} },
            distributions:      { label: 'Distributions of data', summary: '', cards: {} },
            correlation:        { label: 'Correlation and regression, uses and interpretation', summary: '', cards: {} },
            testing_screening:  { label: 'Principles of testing and screening', summary: '', cards: {} },
            study_interp:       { label: 'Study interpretation, drawing conclusions from data', summary: '', cards: {} },
            clinical_decision:  { label: 'Clinical decision making, interpretation and use of evidence-based data and recommendations', summary: '', cards: {} },
            research_ethics:    { label: 'Research ethics', summary: '', cards: {} }
          },
          cards: {}
        },
        social_sciences: {
          label: 'Social Sciences', icon: '👥',
          subcategories: {
            communication:  { label: 'Communication and interpersonal skills, including health literacy and numeracy, cultural competence', summary: 'Patient interviewing, consultation, and interactions with the family (patient centered communication skills fostering the relationship (eg, expressing interest information gathering (eg, exploring patient\'s reaction to illness information provision (eg, providing information about working diagnosis making decisions (eg, eliciting patient\'s perspectives supporting emotions (eg, effective discussion with difficult patients enabling patient behaviors (eg, education and counseling Use of an interpreter or surrogate', cards: {} },
            medical_ethics: { label: 'Medical ethics and jurisprudence, including issues related to death and dying and palliative care', summary: 'Consent/informed consent to treatment, permission to treat (full disclosure, risks and benefits, placebos, alternative therapies, conflict of interest, and vulnerable populations Determination of medical decision making capacity/informed refusal Involuntary admission Legal issues related to abuse (child, elder, and intimate partner child protective services, foster care, immunizations legal requirements for reporting abuse or neglect/obligation to warn Birth related issues Death and dying and palliative care life support advance directive, health care proxy, advance care planning brain death/d', cards: {} },
            systems_based:  { label: 'Systems-based practice (including health systems, public health, community, schools) and patient safety (including basic concepts and terminology)', summary: 'Complexity/systems thinking Characteristics of a complex system and factors leading to complexity how complexity leads to error Health care/organizational behavior and culture environmental factors, workplace design and process; staffing; overcommitment, space, people, time, scheduling; standardization, reducing variance, simplification, metrics; safety culture; integration of care across settings; overutilization of resources ( imaging studies, antibiotics, opioids economic factors Quality improvement Improvement science principles Variation and standardization variation in process, practice', cards: {} },
            health_policy:  { label: 'Health care policy and economics', summary: 'Health care policy Health care disparities race/ethnicity; numeracy/literacy; socioeconomic status; gender and sexual diversity/identity; immigration status; English language proficiency; incarcerated populations; disability Access to care critical access systems or hospitals Social justice Health care economics/Health care financing Types of insurance Medicare, Medicaid, private insurance, self Navigating the insurance system deductibles/co pays; in network; preferred providers Reimbursement issues affecting safety and quality emergency services EMTALA; pay performance', cards: {} }
          },
          cards: {}
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

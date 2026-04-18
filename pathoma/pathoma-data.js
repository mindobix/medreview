/* ── Chapter / video data ─────────────────────────────────────────── */
const CHAPTERS = [
  {
    num: 1, folder: '01. Growth Adaptations, Cellular Injury, and Cell Death',
    title: 'Cell Injury & Adaptations', short: 'Cell Injury',
    slides: 'Slides/Chapter 1 Cell Injury.pdf',
    videos: [
      { id:'1.1', title:'Growth Adaptations' },
      { id:'1.2', title:'Cellular Injury' },
      { id:'1.3', title:'Cell Death' },
      { id:'1.4', title:'Free Radical Injury' },
      { id:'1.5', title:'Amyloidosis' },
    ]
  },
  {
    num: 2, folder: '02. Inflammation, Inflammatory Disorders, and Healing',
    title: 'Inflammation & Healing', short: 'Inflammation',
    slides: 'Slides/Chapter 2 Inflammation and Repair.pdf',
    videos: [
      { id:'2.1a', title:'Acute Inflammation' },
      { id:'2.1b', title:'Acute Inflammation (cont.)' },
      { id:'2.1c', title:'Acute Inflammation (cont.)' },
      { id:'2.2',  title:'Chronic Inflammation' },
      { id:'2.3',  title:'Primary Immunodeficiency' },
      { id:'2.4a', title:'Autoimmune Disorders' },
      { id:'2.4b', title:'Autoimmune Disorders (cont.)' },
      { id:'2.5',  title:'Wound Healing' },
    ]
  },
  {
    num: 3, folder: '03. Principles of Neoplasia',
    title: 'Principles of Neoplasia', short: 'Neoplasia',
    slides: 'Slides/Chapter 4 Neoplasia.pdf',
    videos: [
      { id:'3.1',  title:'Neoplasia' },
      { id:'3.2a', title:'Carcinogenesis' },
      { id:'3.2b', title:'Carcinogenesis (cont.)' },
      { id:'3.2c', title:'Carcinogenesis (cont.)' },
      { id:'3.3',  title:'Tumor Progression' },
      { id:'3.4',  title:'Clinical Characteristics' },
    ]
  },
  {
    num: 4, folder: '04 - Hemostasis and Related Disorders',
    title: 'Hemostasis & Disorders', short: 'Hemostasis',
    slides: 'Slides/Chapter 8 Hemodynamics.pdf',
    videos: [
      { id:'4.1', title:'Primary Hemostasis' },
      { id:'4.2', title:'Secondary Hemostasis' },
      { id:'4.3', title:'Other Disorders' },
      { id:'4.4', title:'Thrombosis' },
      { id:'4.5', title:'Embolism' },
    ]
  },
  {
    num: 5, folder: '05. Red Blood Cell Disorders',
    title: 'Red Blood Cell Disorders', short: 'RBC',
    slides: 'Slides/Chapter 12 Hematopathology.pdf',
    videos: [
      { id:'5.1',     title:'Anemia' },
      { id:'5.2a',    title:'Microcytic Anemias' },
      { id:'5.2b',    title:'Microcytic Anemias (cont.)' },
      { id:'5.2c',    title:'Microcytic Anemias (cont.)' },
      { id:'5.3',     title:'Macrocytic Anemia' },
      { id:'5.4',     title:'Normocytic Anemia' },
      { id:'5.5',     title:'Normocytic — Extravascular Hemolysis' },
      { id:'5.6-5.7', title:'Normocytic — Intravascular / Underproduction' },
    ]
  },
  {
    num: 6, folder: '06. White Blood Cell Disorders',
    title: 'White Blood Cell Disorders', short: 'WBC',
    slides: 'Slides/Chapter 12 Hematopathology.pdf',
    videos: [
      { id:'6.1',     title:'Leukopenia & Leukocytosis' },
      { id:'6.2',     title:'Acute Leukemia' },
      { id:'6.3',     title:'Chronic Leukemia' },
      { id:'6.4',     title:'Myeloproliferative Disorders' },
      { id:'6.5-6.7', title:'LAD, Lymphoma & Hodgkin Lymphoma' },
      { id:'6.8-6.9', title:'Plasma Cell Disorders' },
    ]
  },
  {
    num: 7, folder: '07. Vascular Pathology',
    title: 'Vascular Pathology', short: 'Vascular',
    slides: 'Slides/Chapter 9 Vascular Pathology.pdf',
    videos: [
      { id:'7.1', title:'Vasculitis' },
      { id:'7.2', title:'Hypertension' },
      { id:'7.3', title:'Atherosclerosis' },
      { id:'7.4', title:'Aortic Dissection & Aneurysm' },
      { id:'7.5', title:'Vascular Tumors' },
    ]
  },
  {
    num: 8, folder: '08. Cardiac Pathology',
    title: 'Cardiac Pathology', short: 'Cardiac',
    slides: 'Slides/Chapter 10 Cardiac Pathology.pdf',
    videos: [
      { id:'8.1',     title:'Ischemic Heart Disease' },
      { id:'8.2',     title:'Congestive Heart Failure' },
      { id:'8.3',     title:'Congenital Defects' },
      { id:'8.4',     title:'Valvular Disorders' },
      { id:'8.5',     title:'Endocarditis' },
      { id:'8.6-8.7', title:'Cardiomyopathy & Cardiac Tumors' },
    ]
  },
  {
    num: 9, folder: '09. Respiratory Tract Pathology',
    title: 'Respiratory Tract', short: 'Respiratory',
    slides: 'Slides/Chapter 13 Pulmonar Pathology.pdf',
    videos: [
      { id:'9.1-9.2', title:'Nasopharynx & Larynx' },
      { id:'9.3',     title:'Pulmonary Infections' },
      { id:'9.4',     title:'COPD' },
      { id:'9.5',     title:'Restrictive Diseases' },
      { id:'9.6-9.7', title:'Pulmonary HTN & Respiratory Distress' },
      { id:'9.8',     title:'Lung Cancer' },
      { id:'9.9',     title:'Pleura' },
    ]
  },
  {
    num: 10, folder: '10. Gastrointestinal Pathology',
    title: 'Gastrointestinal Pathology', short: 'GI',
    slides: 'Slides/Chapter 14 Gastrointestinal Pathology.pdf',
    videos: [
      { id:'10.1',      title:'Oral Cavity' },
      { id:'10.2',      title:'Salivary Gland' },
      { id:'10.3',      title:'Esophagus' },
      { id:'10.4',      title:'Stomach' },
      { id:'10.5',      title:'Small Bowel' },
      { id:'10.6-10.7', title:'Appendix & Inflammatory Bowel Disease' },
      { id:'10.8a',     title:'Colon' },
      { id:'10.8b',     title:'Colorectal Carcinoma' },
    ]
  },
  {
    num: 11, folder: '11. Exocrine Pancreas, Gallbladder, and Liver Pathology',
    title: 'Pancreas, Gallbladder & Liver', short: 'Liver / GI',
    slides: 'Slides/Chapter 15 Liver, Gallbladder and Pancreas.pdf',
    videos: [
      { id:'11.1',  title:'Exocrine Pancreas' },
      { id:'11.2',  title:'Gallbladder & Biliary Tract' },
      { id:'11.3a', title:'Liver' },
      { id:'11.3b', title:'Liver (cont.)' },
      { id:'11.3c', title:'Liver (cont.)' },
    ]
  },
  {
    num: 12, folder: '12. Kidney and Urinary Tract Pathology',
    title: 'Kidney & Urinary Tract', short: 'Renal',
    slides: 'Slides/Chapter 16 Kidney and Bladder.pdf',
    videos: [
      { id:'12.1',      title:'Congenital' },
      { id:'12.2',      title:'Acute Renal Failure' },
      { id:'12.3',      title:'Nephrotic Syndrome' },
      { id:'12.4',      title:'Nephritic Syndrome' },
      { id:'12.5-12.7', title:'UTI, Nephrolithiasis & Chronic Renal Failure' },
      { id:'12.8',      title:'Renal Neoplasia' },
      { id:'12.9',      title:'Lower Urinary Tract Carcinoma' },
    ]
  },
  {
    num: 13, folder: '13. Female Genital System and Gestational Pathology',
    title: 'Female Genital & Gestational', short: 'Female GU',
    slides: 'Slides/Chapter 17 Reproductive Tract.pdf',
    videos: [
      { id:'13.1', title:'Vulva' },
      { id:'13.2', title:'Vagina' },
      { id:'13.3', title:'Cervix' },
      { id:'13.4', title:'Endometrium & Myometrium' },
      { id:'13.5', title:'Ovary' },
      { id:'13.6', title:'Ovarian Tumors' },
      { id:'13.7', title:'Gestational Pathology' },
    ]
  },
  {
    num: 14, folder: '14. Male Genital System Pathology',
    title: 'Male Genital System', short: 'Male GU',
    slides: 'Slides/Chapter 17 Reproductive Tract.pdf',
    videos: [
      { id:'14.1', title:'Penis' },
      { id:'14.2', title:'Testicle' },
      { id:'14.3', title:'Testicular Tumors' },
      { id:'14.4', title:'Prostate' },
    ]
  },
  {
    num: 15, folder: '15. Endocrine Pathology',
    title: 'Endocrine Pathology', short: 'Endocrine',
    slides: 'Slides/Chapter 18 Endocrine Pathology.pdf',
    videos: [
      { id:'15.1-15.2',   title:'Anterior & Posterior Pituitary' },
      { id:'15.3-15.7',   title:'Thyroid Gland' },
      { id:'15.8',        title:'Parathyroid Gland' },
      { id:'15.9',        title:'Endocrine Pancreas' },
      { id:'15.10-15.11', title:'Adrenal Cortex & Medulla' },
    ]
  },
  {
    num: 16, folder: '16. Breast Pathology',
    title: 'Breast Pathology', short: 'Breast',
    slides: null,
    videos: [
      { id:'16.1', title:'Introduction' },
      { id:'16.2', title:'Inflammatory Conditions' },
      { id:'16.3', title:'Benign Tumors & Fibrocystic Changes' },
      { id:'16.4', title:'Breast Cancer' },
    ]
  },
  {
    num: 17, folder: '17. Central Nervous System Pathology',
    title: 'CNS Pathology', short: 'CNS',
    slides: 'Slides/Chapter 11 Neuropathology.pdf',
    videos: [
      { id:'17.1',     title:'Developmental Anomalies' },
      { id:'17.2',     title:'Spinal Cord Lesions' },
      { id:'17.3',     title:'Meningitis' },
      { id:'17.4',     title:'Cerebrovascular Disease' },
      { id:'17.5-17.6', title:'Trauma & Demyelinating Disorders' },
      { id:'17.7',     title:'Dementia & Degenerative Disorders' },
      { id:'17.8',     title:'CNS Tumors' },
    ]
  },
  {
    num: 18, folder: '18. Musculoskeletal Pathology',
    title: 'Musculoskeletal Pathology', short: 'MSK',
    slides: 'Slides/Chapter 19 Pathology of the Bones and Joints.pdf',
    videos: [
      { id:'18.1', title:'Skeletal System' },
      { id:'18.2', title:'Bone Tumors' },
      { id:'18.3', title:'Joints' },
      { id:'18.4', title:'Skeletal Muscle' },
    ]
  },
  {
    num: 19, folder: '19. Skin Pathology',
    title: 'Skin Pathology', short: 'Skin',
    slides: 'Slides/Chapter 20 Dermopathology.pdf',
    videos: [
      { id:'19.1', title:'Inflammatory Dermatoses' },
      { id:'19.2', title:'Blistering Dermatoses' },
      { id:'19.3', title:'Epithelial Tumors' },
      { id:'19.4', title:'Disorders of Pigmentation & Melanocytes' },
      { id:'19.5', title:'Infectious Disorders' },
    ]
  },
];

const ALL_SLIDES = [
  'Chapter 1 Cell Injury.pdf',
  'Chapter 2 Inflammation and Repair.pdf',
  'Chapter 3 Pathology of the Immune System.pdf',
  'Chapter 4 Neoplasia.pdf',
  'Chapter 5 Enviromental and Nutritional Pathology.pdf',
  'Chapter 6 Genetic Disorders.pdf',
  'Chapter 7 Pediatric Pathology.pdf',
  'Chapter 8 Hemodynamics.pdf',
  'Chapter 9 Vascular Pathology.pdf',
  'Chapter 10 Cardiac Pathology.pdf',
  'Chapter 11 Neuropathology.pdf',
  'Chapter 12 Hematopathology.pdf',
  'Chapter 13 Pulmonar Pathology.pdf',
  'Chapter 14 Gastrointestinal Pathology.pdf',
  'Chapter 15 Liver, Gallbladder and Pancreas.pdf',
  'Chapter 16 Kidney and Bladder.pdf',
  'Chapter 17 Reproductive Tract.pdf',
  'Chapter 18 Endocrine Pathology.pdf',
  'Chapter 19 Pathology of the Bones and Joints.pdf',
  'Chapter 20 Dermopathology.pdf',
];

const TOTAL_VIDEOS = CHAPTERS.reduce((s, c) => s + c.videos.length, 0);

/* ── Flat video index ─────────────────────────────────────────────── */
const FLAT = [];
CHAPTERS.forEach((ch, ci) => {
  ch.videos.forEach((v, vi) => FLAT.push({ ci, vi, chapter: ch, video: v }));
});

/* ── Filename overrides for compound IDs ──────────────────────────── */
const FILENAME_OVERRIDES = {
  '5.6-5.7':    '5.6 _ 5.7 Normocytic Anemias with Intravascular Hemolysis _ Anemia due to Underproduction',
  '6.5-6.7':    '6.5-6.7 LAD, Lymphoma, Hodgkin Lymphoma',
  '6.8-6.9':    '6.8-6.9 Plasma Cell Disorders',
  '8.6-8.7':    '8.6 _ 8.7 Cardiomyopathy _ Cardiac Tumors',
  '9.1-9.2':    '9.1 _ 9.2 Nasopharynx _ Larynx',
  '9.6-9.7':    '9.6 _ 9.7 Pulmonary Hypertension _ Respiratory Distress Syndromes',
  '10.6-10.7':  '10.6 _ 10.7 Appendix _ Inflammatory Bowel Disease',
  '12.5-12.7':  '12.5 _ 12.6 _ 12.7 Urinary Tract Infection _ Nephrolithiasis _ Chronic Renal Failure',
  '15.1-15.2':  '15.1 _ 15.2 Anterior Pituitary Gland _ Posterior Pituitary Gland',
  '15.3-15.7':  '15.3_15.7 Thyroid Gland',
  '15.10-15.11':'15.10 _ 15.11 Adrenal Cortex _ Adrenal Medulla',
  '17.5-17.6':  '17.5 _ 17.6 Trauma _ Demyelinating Disorders',
};

function _buildVideoSrc(ch, vid) {
  const raw = FILENAME_OVERRIDES[vid.id];
  const filename = raw || (vid.id + ' ' + vid.title);
  return encodeURIComponent(ch.folder) + '/' + encodeURIComponent(filename) + '.mp4';
}

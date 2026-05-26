export interface ResearchArticle {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  category: 'sleep' | 'inflammation' | 'cardiovascular' | 'pain' | 'mood' | 'general' | 'immunity' | 'neurological';
  summary: string;
  pubmedUrl: string;
}

export const RESEARCH_CATEGORIES = [
  { key: 'all', label: 'All Studies' },
  { key: 'sleep', label: 'Sleep & Cortisol' },
  { key: 'inflammation', label: 'Inflammation' },
  { key: 'cardiovascular', label: 'Cardiovascular' },
  { key: 'pain', label: 'Pain & Recovery' },
  { key: 'mood', label: 'Mood' },
  { key: 'immunity', label: 'Immune Function' },
  { key: 'neurological', label: 'Neurological' },
  { key: 'general', label: 'General Review' },
] as const;

export const researchArticles: ResearchArticle[] = [
  // ===== ORIGINAL 11 STUDIES =====
  {
    id: 'chevalier-2012-health-implications',
    title: 'Earthing: Health Implications of Reconnecting the Human Body to the Earth\'s Surface Electrons',
    authors: 'Chevalier G, Sinatra ST, Oschman JL, Sokal K, Sokal P',
    journal: 'Journal of Environmental and Public Health',
    year: 2012,
    category: 'general',
    summary: 'A comprehensive review covering multiple pilot studies on grounding. The paper reports that grounding during sleep normalizes the diurnal cortisol rhythm, reduces pain and stress, shifts the autonomic nervous system from sympathetic to parasympathetic activation, and improves sleep.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/22291721/'
  },
  {
    id: 'chevalier-2013-blood-viscosity',
    title: 'Earthing (Grounding) the Human Body Reduces Blood Viscosity — A Major Factor in Cardiovascular Disease',
    authors: 'Chevalier G, Sinatra ST, Oschman JL, Delany RM',
    journal: 'Journal of Alternative and Complementary Medicine',
    year: 2013,
    category: 'cardiovascular',
    summary: 'This study demonstrated that just two hours of grounding significantly increases the surface charge (zeta potential) on red blood cells, reducing blood clumping and viscosity. This finding has direct implications for cardiovascular disease risk reduction.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/23735206/'
  },
  {
    id: 'oschman-2015-inflammation',
    title: 'The Effects of Grounding on Inflammation, the Immune Response, Wound Healing, and Prevention of Chronic Inflammatory and Autoimmune Diseases',
    authors: 'Oschman JL, Chevalier G, Brown R',
    journal: 'Journal of Inflammation Research',
    year: 2015,
    category: 'inflammation',
    summary: 'A landmark review proposing that mobile electrons from the Earth can serve as natural anti-inflammatories. The paper documents how grounding affects white blood cell concentrations, cytokines, and other molecules involved in the inflammatory response.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/25848315/'
  },
  {
    id: 'chevalier-2015-yoga',
    title: 'Grounding the Human Body during Yoga Exercise with a Grounded Yoga Mat Reduces Blood Viscosity',
    authors: 'Chevalier G, Mori K, Oschman JL',
    journal: 'Open Journal of Preventive Medicine',
    year: 2015,
    category: 'pain',
    summary: 'This controlled study found that practicing yoga on a grounded mat produced a statistically significant reduction in blood viscosity compared to yoga on a standard mat. The results suggest grounding may enhance the cardiovascular benefits of physical exercise.',
    pubmedUrl: 'https://doi.org/10.4236/ojpm.2015.54019'
  },

  {
    id: 'sinatra-2017-electric-nutrition',
    title: 'Electric Nutrition: The Surprising Health and Healing Benefits of Biological Grounding (Earthing)',
    authors: 'Sinatra ST, Oschman JL, Chevalier G, Sinatra D',
    journal: 'Alternative Therapies in Health and Medicine',
    year: 2017,
    category: 'general',
    summary: 'An extensive review article framing grounding as a form of "electric nutrition." The paper discusses how the transfer of the Earth\'s electrons into the body helps restore and maintain the body\'s natural internal bioelectrical environment for optimal function.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/28323091/'
  },
  {
    id: 'menigoz-2020-anti-inflammatory',
    title: 'Grounding – The Universal Anti-Inflammatory Remedy',
    authors: 'Menigoz W, Latz TT, Ely RA, Kamei C, Melvin G, Sinatra D',
    journal: 'Biomedical Journal',
    year: 2020,
    category: 'inflammation',
    summary: 'A modern review positioning grounding as a simple, universally accessible anti-inflammatory strategy. It discusses how grounding modulates the body\'s electrical environment to counteract the chronic inflammation that underlies many modern diseases.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/31831261/'
  },
  {
    id: 'chevalier-2011-hypertension',
    title: 'Grounding Patients with Hypertension Improves Blood Pressure: A Case History Series Study',
    authors: 'Chevalier G, Sinatra ST',
    journal: 'Alternative Therapies in Health and Medicine',
    year: 2011,
    category: 'cardiovascular',
    summary: 'A case series study documenting blood pressure improvements in hypertensive patients who practiced nightly grounding. Results showed measurable drops in systolic blood pressure over 10-12 weeks of consistent grounding.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/22314622/'
  },
  {
    id: 'ghaly-2004-cortisol',
    title: 'The Biologic Effects of Grounding the Human Body During Sleep, as Measured by Cortisol Levels and Subjective Reporting',
    authors: 'Ghaly M, Teplitz D',
    journal: 'Journal of Alternative and Complementary Medicine',
    year: 2004,
    category: 'sleep',
    summary: 'The foundational cortisol study. Participants sleeping grounded showed a normalization of their day-night cortisol rhythm, with cortisol levels peaking appropriately in the morning. Subjective reports confirmed improved sleep quality and reduced pain and stress.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/15650465/'
  },
  {
    id: 'brown-2015-doms',
    title: 'Grounding After Moderate Eccentric Contractions Reduces Muscle Damage',
    authors: 'Brown R, Chevalier G, Hill M',
    journal: 'Open Access Journal of Sports Medicine',
    year: 2015,
    category: 'pain',
    summary: 'Participants performed eccentric exercises to induce delayed-onset muscle soreness (DOMS). The grounded group experienced significantly less pain, reduced creatine kinase levels, and faster recovery compared to the ungrounded control group.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/26261876/'
  },
  {
    id: 'chevalier-2010-autonomic',
    title: 'Changes in Pulse Rate, Respiratory Rate, Blood Oxygenation, Perfusion Index, Skin Conductance, and Their Variability Induced During and After Grounding',
    authors: 'Chevalier G',
    journal: 'Journal of Alternative and Complementary Medicine',
    year: 2010,
    category: 'general',
    summary: 'A comprehensive physiological study measuring multiple parameters during grounding. Results showed shifts consistent with improved autonomic nervous system regulation, including increased parasympathetic tone and improved perfusion.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/20064020/'
  },

  // ===== 9 NEW STUDIES =====


  {
    id: 'sokal-2013-renal-mineral',
    title: 'Earthing the Human Body Influences Blood Urea Nitrogen, Creatinine, and Serum Mineral Concentrations',
    authors: 'Sokal P, Sokal K',
    journal: 'Journal of Alternative and Complementary Medicine',
    year: 2013,
    category: 'immunity',
    summary: 'This study examined kidney-related blood markers and electrolyte balance in grounded vs. ungrounded subjects. The grounded group demonstrated significant changes in serum calcium, phosphorus, sodium, potassium, and magnesium, alongside reductions in blood urea nitrogen and creatinine, suggesting grounding influences renal function and mineral homeostasis.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/23406025/'
  },
  {
    id: 'oschman-2007-electrons-antioxidants',
    title: 'Can Electrons Act as Antioxidants? A Review and Commentary',
    authors: 'Oschman JL',
    journal: 'Journal of Alternative and Complementary Medicine',
    year: 2007,
    category: 'general',
    summary: 'A foundational theoretical review proposing that mobile electrons from the Earth enter the body and act as natural antioxidants by neutralizing reactive oxygen species (free radicals). Oschman traces the biophysical pathway from the Earth\'s surface through the connective tissue matrix, proposing that this electron flow is a missing component of modern health.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/18047442/'
  },
  {
    id: 'chevalier-2014-facial-blood-flow',
    title: 'Grounding the Human Body Improves Facial Blood Flow Regulation: Results of a Randomized, Placebo Controlled Pilot Study',
    authors: 'Chevalier G, Sinatra ST',
    journal: 'Journal of Cosmetics, Dermatological Sciences and Applications',
    year: 2014,
    category: 'cardiovascular',
    summary: 'This placebo-controlled pilot study used laser speckle contrast imaging to measure facial blood flow in grounded versus sham-grounded subjects. The grounded group demonstrated a clear and significant enhancement of facial blood flow regulation, supporting the hypothesis that grounding improves circulation through enhanced red blood cell surface charge and reduced aggregation.',
    pubmedUrl: 'https://doi.org/10.4236/jcdsa.2014.45042'
  },
  {
    id: 'brown-2010-doms-pilot',
    title: 'Pilot Study on the Effect of Grounding on Delayed-Onset Muscle Soreness',
    authors: 'Brown R, Chevalier G',
    journal: 'Journal of Alternative and Complementary Medicine',
    year: 2010,
    category: 'pain',
    summary: 'This pilot study used blood chemistry and pain scales to track DOMS progression in grounded vs. ungrounded participants after intense exercise. The grounded group showed consistent reductions in white blood cell count, bilirubin, and creatine kinase — markers of the inflammatory cascade — alongside statistically significant reductions in subjective pain.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/20192911/'
  },
  {
    id: 'chevalier-2008-electrodermal',
    title: 'The Effect of Earthing (Grounding) on Human Physiology: Part 2 — Electrodermal Measurements',
    authors: 'Chevalier G',
    journal: 'Subtle Energies & Energy Medicine',
    year: 2008,
    category: 'neurological',
    summary: 'This follow-up electrophysiology study measured changes in skin conductance and sympathovagal balance during grounding. Grounded subjects showed immediate and significant decreases in overall skin conductance, reflecting a rapid shift from sympathetic ("fight-or-flight") to parasympathetic ("rest-and-digest") nervous system dominance — a key indicator of neurological relaxation.',
    pubmedUrl: 'https://doi.org/10.1515/jcim-2005-0906'
  },
  {
    id: 'lin-2022-emf-body-voltage',
    title: 'Effects of Grounding on Body Voltage and Current in the Presence of Electromagnetic Fields',
    authors: 'Lin CH, Tsai MH, Chen GS',
    journal: 'International Journal of Environmental Research and Public Health',
    year: 2022,
    category: 'general',
    summary: 'A modern instrumented study measuring AC body voltage in grounded vs. ungrounded subjects within typical indoor electromagnetic environments. The results confirmed that grounding reduced body voltage from levels as high as 3-5 V AC to near-zero (< 0.01 V), demonstrating a clear shielding effect against environmental electromagnetic field coupling.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/35897872/'
  },
  {
    id: 'chevalier-2006-brain-emg',
    title: 'The Effect of Earthing on Human Physiology: Part 1 — EEG, EMG, and Blood Volume Pulse',
    authors: 'Chevalier G, Mori K, Oschman JL',
    journal: 'European Biology and Bioelectromagnetics',
    year: 2006,
    category: 'neurological',
    summary: 'This controlled study measured EEG (brain wave), EMG (muscle tension), and blood volume pulse simultaneously in grounded and sham-grounded subjects. Grounded subjects showed a significant reduction in overall muscle tension and normalization of brain wave patterns, suggesting direct neurological calming effects consistent with improved autonomic regulation.',
    pubmedUrl: 'https://doi.org/10.1515/jcim-2005-0906'
  },
  {
    id: 'ober-2000-sleep-pain-original',
    title: 'Grounding the Human Body to Neutralize Bioelectrical Stress from Static Electricity and EMFs',
    authors: 'Ober AC',
    journal: 'ESD Journal',
    year: 2000,
    category: 'sleep',
    summary: 'The original earthing study by Clint Ober — the pioneer of indoor grounding. This landmark paper documented the first systematic observation that sleeping grounded significantly improved subjective sleep quality, reduced chronic pain, and reduced the bioelectrical stress caused by static electricity and ambient EMF exposure. This paper launched the entire field of grounding research.',
    pubmedUrl: 'http://www.esdjournal.com/articles/cober/ground.htm'
  },
  {
    id: 'integrative-lifestyle-earthing-2019',
    title: 'Integrative and lifestyle medicine strategies should include Earthing (grounding): Review of research evidence and clinical observations-2019',
    authors: 'Naprapathic Healing Center, Lake Norman Integrative Psychiatry',
    journal: 'Explore',
    year: 2019,
    category: 'general',
    summary: 'A 2019 Integrative medicine review found grounding may reduce inflammation, pain, stress, improve sleep, circulation, recovery, and may neutralize free radicals; around 20 studies reported benefits for HRV, DOMS, wound healing, anxiety, fatigue, and blood pressure.',
    pubmedUrl: 'https://www.sciencedirect.com/science/article/pii/S1550830719305476'
  },
  {
    id: 'menigoz-2020-anti-inflammatory-pmc',
    title: 'Grounding – The universal anti-inflammatory remedy',
    authors: 'Sun Yat-sen University Cancer Center',
    journal: 'Biomedical Journal',
    year: 2020,
    category: 'inflammation',
    summary: 'Improved circulation, better sleep, reduced inflammation, lower oxidative stress, and enhanced stress regulation have been linked in emerging research on Earthing, with studies suggesting potential effects on blood viscosity, cardiovascular function, HRV, and wound healing, though evidence is still preliminary and limited.',
    pubmedUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10105021/'
  },
  {
    id: 'grounding-natural-skincare-2021',
    title: 'Why Grounding May Be the Future of Natural Skincare Treatments',
    authors: 'European Journal of Medical and Health Sciences',
    journal: 'European Journal of Medical and Health Sciences',
    year: 2021,
    category: 'general',
    summary: 'Enhanced blood flow, improved skin repair, and better nutrient absorption may result from combined conductive skincare and Earthing, while also supporting reduced inflammation, stress, and free radical activity, alongside improved microcirculation, hydration, healing, and overall skin function.',
    pubmedUrl: 'https://www.researchgate.net/publication/353156602_How_Localized_Grounding_Combined_with_Conductive_Skincare_Improves_the_Outcomes_of_the_Traditional_Skincare'
  },
  {
    id: 'chevalier-2012-health-implications-wiley',
    title: 'Earthing: Health Implications of Reconnecting the Human Body to the Earth\'s Surface Electrons',
    authors: 'Chevalier G, Sinatra ST, Oschman JL, Sokal K, Sokal P',
    journal: 'Incorporating Environmental Health in Clinical Medicine',
    year: 2012,
    category: 'general',
    summary: 'Reduced inflammation, stress, pain, and cortisol imbalance, along with improved sleep quality, energy, HRV, circulation, and recovery, have been reported in studies on Earthing, suggesting stabilization of the body\'s electrical and nervous systems may play a supporting role.',
    pubmedUrl: 'https://onlinelibrary.wiley.com/doi/10.1155/2012/291541'
  },
  {
    id: 'massage-therapists-earthing-2019',
    title: 'The Effects of Grounding (Earthing) on Bodyworkers\' Pain and Overall Quality of Life: A Randomized Controlled Trial - 2019',
    authors: 'Department of Family Medicine and Public Health, UC San Diego',
    journal: 'Explore',
    year: 2019,
    category: 'pain',
    summary: 'In a 6-week randomized controlled trial of 16 massage therapists, Earthing was associated with reduced pain, fatigue, burnout, and depression, while improving energy, physical function, and mood, with benefits persisting after the study period and supporting enhanced occupational recovery.',
    pubmedUrl: 'https://www.sciencedirect.com/science/article/pii/S1550830718302519'
  }
];

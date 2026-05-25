export interface ResearchArticle {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  category: 'sleep' | 'inflammation' | 'cardiovascular' | 'pain' | 'mood' | 'general';
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
  { key: 'general', label: 'General Review' },
] as const;

export const researchArticles: ResearchArticle[] = [
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
    id: 'chevalier-2015-mood',
    title: 'The Effect of Grounding the Human Body on Mood',
    authors: 'Chevalier G',
    journal: 'Psychological Reports',
    year: 2015,
    category: 'mood',
    summary: 'A double-blind study where participants were grounded for one hour. Results showed statistically significant improvements in pleasant mood and reductions in anxious, depressed, and irritable mood states compared to the sham-grounded control group.',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/25748085/'
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
  }
];

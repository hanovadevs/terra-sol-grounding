import { Product, Benefit, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Terra Workspace Mat',
    tagline: 'Entry-Level Grounding Anchor',
    price: '$79.99',
    image: '/DSC02430.JPG',
    amazonUrl: 'https://www.amazon.com/Terra-Sol-Grounding-Verified-Wipe-Clean/dp/B0FSKXWDCW',
    description: 'Our signature grounding mat, designed for use at your desk or while you sleep. Connect with the Earth\'s natural energy to reduce inflammation and improve sleep quality.',
    benefits: ['Reduces Inflammation', 'Improves Sleep', 'Boosts Energy', 'Stress Relief'],
    sizes: ['24x16 in (Desk & Table)', '29x12.5 in (Desk, Table & Yoga)', '27x60 in (Yoga & Bed)'],
    kit: ['Grounding Tester', 'Conductivity Pen Tester', 'Grounding Cord'],
    packaging: 'Premium Tube Packaging'
  },
  {
    id: '2',
    name: 'Terra Grounding Elite Sheet',
    tagline: 'The Flagship Luxury Standard',
    price: '$199.99',
    image: '/DSC02541.JPG',
    amazonUrl: 'https://www.amazon.com/Terra-Sol-Grounding-Verified-Wipe-Clean/dp/B0FSKXWDCW',
    description: 'The premier luxury choice. Our Oeko-Tex certified blend of 12% silver fiber and 88% pure cotton provides superior conductivity and comfort.',
    benefits: ['Full Body Grounding', '12% Silver & 88% Pure Cotton', '91% Bacterial Reduction', '3-Year Conductivity Warranty'],
    sizes: ['King (Grey/White)', 'Queen (Grey/White)', 'Twin (Grey)', 'Full (Grey)'],
    kit: ['Grounding Tester', 'Conductivity Pen Tester', 'Grounding Cord', 'Mulberry Silk Eye Mask'],
    packaging: 'Premium Packaging Box',
    isPremium: true
  },
  {
    id: '3',
    name: '24-Hour Optimization Bundle',
    tagline: 'The Ultimate Lifestyle Bundle',
    price: '$249.99',
    image: '/DSC02525.JPG',
    amazonUrl: 'https://www.amazon.com/Terra-Sol-Grounding-Verified-Wipe-Clean/dp/B0FSKXWDCW',
    description: 'The complete grounding ecosystem. Includes the Elite Sheet for nocturnal restoration and the Workspace Mat for daytime grounding.',
    benefits: ['Elite Sheet (King/Queen)', 'Workspace Mat', '2x Grounding Cords', '2x Testing Kits'],
    kit: ['Grounding Tester', 'Conductivity Pen Tester', '2x Grounding Cords', 'Wall Outlet Checker'],
    packaging: 'Premium Bundle Box'
  }
];

export const BRAND_CONFIG = {
  logo: '/terra-sol-grounding.jpeg',
  name: 'TERRA SOL',
  tagline: 'Restore Your Biology While You Sleep.'
};

export const BENEFITS: Benefit[] = [
  {
    id: '1',
    title: 'Cortisol Regulation',
    description: 'Grounding helps normalize cortisol rhythms, leading to deeper, more restorative sleep architecture.',
    icon: 'Moon'
  },
  {
    id: '2',
    title: 'Oxidative Stress Reduction',
    description: 'The Earth\'s electrons act as natural antioxidants, neutralizing free radicals and reducing physiological inflammation.',
    icon: 'Zap'
  },
  {
    id: '3',
    title: 'Bio-electrical Homeostasis',
    description: 'By balancing your body\'s electrical state, you can experience sustained energy and cellular optimization.',
    icon: 'Sun'
  },
  {
    id: '4',
    title: 'Nervous System Balance',
    description: 'Connecting with the Earth promotes a state of calm, helping to balance the autonomic nervous system.',
    icon: 'Wind'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah J.',
    text: 'I\'ve struggled with insomnia for years. Since using the Terra Sol mat, I fall asleep faster and wake up feeling actually rested.',
    rating: 5,
    location: 'Verified Buyer'
  },
  {
    id: '2',
    name: 'Michael R.',
    text: 'As an athlete, recovery is everything. Grounding has noticeably reduced my muscle soreness after intense workouts.',
    rating: 5,
    location: 'Verified Buyer'
  },
  {
    id: '3',
    name: 'Emily T.',
    text: 'I was skeptical at first, but the science makes sense. I feel more centered and less anxious when I use my mat at my desk.',
    rating: 5,
    location: 'Verified Buyer'
  }
];

export const BRAND_STORY = "At Terra Sol, we believe that modern life has disconnected us from our most vital source of energy: the Earth. Our mission is to bridge that gap by providing high-quality, verified grounding products that bring the healing power of nature into your home. We are committed to quality, sustainability, and the science of wellness.";

export const WARRANTY_INFO = "We stand behind the quality of our products. Every Terra Sol purchase comes with a 100-night sleep trial and a 3-year limited warranty against conductivity degradation. Register your product below to activate your coverage.";

export const COMPARISON_DATA = {
  features: [
    { name: 'Conductivity Material', terraSol: '12% Silver / 88% Cotton', competitors: 'Standard 3-5% Silver' },
    { name: 'Oxidation Resistance', terraSol: 'High (3+ Years)', competitors: 'Low (6-12 Months)' },
    { name: 'Material Quality', terraSol: 'Pure Cotton Blend', competitors: 'Synthetic Blends' },
    { name: 'Bacterial Reduction', terraSol: '91%', competitors: 'Variable' },
    { name: 'Included Testing Kit', terraSol: 'Yes (Continuity + Outlet)', competitors: 'Rarely' },
    { name: 'Warranty', terraSol: '3-Year Conductivity', competitors: '1-Year Limited' }
  ]
};

export const SOLUTION_SETS = [
  {
    id: '1',
    title: 'The Remote Professional',
    description: 'Combat digital fatigue and EMF exposure during your workday with the Terra Workspace Mat.',
    image: '/DSC02295.JPG'
  },
  {
    id: '2',
    title: 'The Performance Athlete',
    description: 'Accelerate recovery and reduce DOMS with full-body nocturnal grounding.',
    image: '/DSC02316.JPG'
  },
  {
    id: '3',
    title: 'The Modern Parent',
    description: 'Optimize your limited sleep windows with deep, restorative cortisol regulation.',
    image: '/DSC02339.JPG'
  }
];

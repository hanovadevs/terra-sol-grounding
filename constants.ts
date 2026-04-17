import { Product, Benefit, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Terra 24x16 Grounding Mat',
    tagline: 'Compact Desk And Foot Grounding',
    price: '$79.99',
    image: '/DSC02430.JPG',
    amazonUrl: 'https://www.amazon.com/dp/B0DM4B7LVZ',
    description: 'A compact earthing mat for desks, chairs, and focused work sessions. Designed for daily indoor grounding with easy wipe-clean care.',
    benefits: ['Desk-Friendly Footprint', 'Wipe-Clean Vegan Leather', '15ft Grounding Cord Included', 'Verified Safe Setup Tools'],
    sizes: ['24x16 in'],
    kit: ['Socket Tester', 'Carbon Fiber Conductivity Pen', '15ft Grounding Cord'],
    packaging: 'Premium Tube Packaging'
  },
  {
    id: '2',
    name: 'Terra 29x12.5 Grounding Mat',
    tagline: 'Yoga And Under-Desk Versatility',
    price: '$89.99',
    image: '/DSC02425.JPG',
    amazonUrl: 'https://www.amazon.com/dp/B0FSKX34W5',
    description: 'A versatile indoor grounding mat size built for yoga, standing desks, and seated work comfort throughout the day.',
    benefits: ['Flexible Mid-Size Format', 'Yoga And Under-Desk Ready', 'Durable Carbon Vegan Leather', 'Verified Safe Setup Tools'],
    sizes: ['29x12.5 in'],
    kit: ['Socket Tester', 'Carbon Fiber Conductivity Pen', '15ft Grounding Cord'],
    packaging: 'Premium Tube Packaging'
  },
  {
    id: '3',
    name: 'Terra 27x60 Grounding Mat',
    tagline: 'Full-Length Bed And Recovery Mat',
    price: '$99.99',
    image: '/DSC02437.JPG',
    amazonUrl: 'https://www.amazon.com/dp/B0FSKXWDCW',
    description: 'An extended grounding mat designed for bed use and larger contact area sessions. Ideal for nightly recovery and full-body support.',
    benefits: ['Extended 27x60 Surface', 'Bed-Ready Grounding Coverage', 'Wipe-Clean Carbon Vegan Leather', 'Verified Safe Setup Tools'],
    sizes: ['27x60 in'],
    kit: ['Socket Tester', 'Carbon Fiber Conductivity Pen', '15ft Grounding Cord'],
    packaging: 'Premium Tube Packaging'
  },
  {
    id: '4',
    name: 'Terra Bare Earth Grounding Sheet - King',
    tagline: 'Flagship Sleep Grounding (King)',
    price: '$199.99',
    image: '/DSC02541.JPG',
    amazonUrl: 'https://www.amazon.com/dp/B0FRNJV7TH',
    description: 'Premium king-size grounding sheet made with 12% silver fiber and 88% organic cotton to support deeper, restorative sleep.',
    benefits: ['Full-Body Overnight Grounding', '12% Silver And 88% Organic Cotton', 'Complete Sleep Bundle Accessories', 'Comfortable Breathable Fabric'],
    sizes: ['King'],
    colors: ['Grey'],
    kit: ['Socket Tester', 'Carbon Fiber Conductivity Pen', '15ft Grounding Cord', 'Silk Sleep Mask'],
    packaging: 'Premium Sleep Bundle Box',
    isPremium: true
  },
  {
    id: '5',
    name: 'Terra Bare Earth Grounding Sheet - Queen',
    tagline: 'Flagship Sleep Grounding (Queen)',
    price: '$189.99',
    image: '/DSC02542.JPG',
    amazonUrl: 'https://www.amazon.com/dp/B0FRZ9ZF24',
    description: 'Premium queen-size grounding sheet made with 12% silver fiber and 88% organic cotton for consistent nightly grounding comfort.',
    benefits: ['Full-Body Overnight Grounding', '12% Silver And 88% Organic Cotton', 'Complete Sleep Bundle Accessories', 'Comfortable Breathable Fabric'],
    sizes: ['Queen'],
    colors: ['Grey'],
    kit: ['Socket Tester', 'Carbon Fiber Conductivity Pen', '15ft Grounding Cord', 'Silk Sleep Mask'],
    packaging: 'Premium Sleep Bundle Box',
    isPremium: true
  },
  {
    id: '6',
    name: '24-Hour Optimization Bundle',
    tagline: 'The Ultimate Lifestyle Bundle',
    price: '$249.99',
    image: '/DSC02525.JPG',
    amazonUrl: 'https://www.amazon.com/stores/TerraSolGrounding/page/72F16C5A-B767-4AB5-AE34-88D0D13C0D98',
    description: 'The complete grounding ecosystem. Pair daytime mats with nighttime grounding sheets to stay connected around the clock.',
    benefits: ['Daytime Mat Support', 'Nighttime Sheet Recovery', 'Multi-Zone Grounding Routine', 'Great For Full Lifestyle Adoption'],
    kit: ['Grounding Tester', 'Conductivity Pen Tester', 'Grounding Cords', 'Wall Outlet Checker'],
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

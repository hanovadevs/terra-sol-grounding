export interface Review {
  id: string;
  name: string;
  verified: boolean;
  rating: number;
  title: string;
  text: string;
  date: string;
  productId: string;
  productName: string;
  helpfulCount: number;
}

// Reviews keyed by productId for easy filtering
export const reviews: Review[] = [
  // ── Product 1: Terra 24x16 Grounding Mat ──
  {
    id: 'r1',
    name: 'Karen L.',
    verified: true,
    rating: 5,
    title: 'Perfect desk companion',
    text: 'I keep this under my desk at work and rest my bare feet on it all day. The tingling warmth I feel within the first 10 minutes is real. My afternoon energy crashes have noticeably decreased since I started using it three weeks ago.',
    date: '2025-04-18',
    productId: '1',
    productName: 'Terra 24x16 Grounding Mat',
    helpfulCount: 34,
  },
  {
    id: 'r2',
    name: 'Marcus J.',
    verified: true,
    rating: 5,
    title: 'Compact but effective',
    text: 'Was worried the 24x16 would be too small but it fits perfectly beside my keyboard. I use it as a wrist rest during work. The included continuity pen confirmed conductivity across the entire surface. Very well made.',
    date: '2025-03-22',
    productId: '1',
    productName: 'Terra 24x16 Grounding Mat',
    helpfulCount: 21,
  },
  {
    id: 'r3',
    name: 'Lisa W.',
    verified: true,
    rating: 4,
    title: 'Solid quality, wish it was slightly bigger',
    text: 'The mat itself is excellent — smooth, well-stitched, and the cord is a good length. Only reason for 4 stars is I wish it were about 2 inches wider. But conductivity is perfect and I use it daily.',
    date: '2025-05-01',
    productId: '1',
    productName: 'Terra 24x16 Grounding Mat',
    helpfulCount: 12,
  },

  // ── Product 2: Terra 29x12.5 Grounding Mat ──
  {
    id: 'r4',
    name: 'James P.',
    verified: true,
    rating: 5,
    title: 'Great for yoga and standing desk',
    text: 'I do 20 minutes of yoga on this every morning and then slide it under my standing desk. The elongated shape is perfect for both uses. After two months, it still tests at full conductivity.',
    date: '2025-04-02',
    productId: '2',
    productName: 'Terra 29x12.5 Grounding Mat',
    helpfulCount: 29,
  },
  {
    id: 'r5',
    name: 'Priya S.',
    verified: true,
    rating: 5,
    title: 'Meditation game changer',
    text: 'I sit cross-legged on this during my evening meditation sessions. Within the first week, I noticed I was reaching deeper states of calm much faster. Cannot say for certain it is the mat, but the correlation is undeniable.',
    date: '2025-03-15',
    productId: '2',
    productName: 'Terra 29x12.5 Grounding Mat',
    helpfulCount: 18,
  },
  {
    id: 'r6',
    name: 'Tom R.',
    verified: true,
    rating: 4,
    title: 'Good mat, premium packaging',
    text: 'The tube packaging is a nice touch. Mat feels high quality. I use it under my desk chair so my feet are always grounded. The 15ft cord is plenty long enough to reach the outlet behind my desk.',
    date: '2025-05-10',
    productId: '2',
    productName: 'Terra 29x12.5 Grounding Mat',
    helpfulCount: 8,
  },

  // ── Product 3: Terra 27x60 Grounding Mat ──
  {
    id: 'r7',
    name: 'Andrea M.',
    verified: true,
    rating: 5,
    title: 'Full body coverage is incredible',
    text: 'I lay this across the foot of my bed. My feet, calves, and knees are in contact all night. The difference in morning stiffness is dramatic. I have rheumatoid arthritis and this is now a non-negotiable part of my routine.',
    date: '2025-04-25',
    productId: '3',
    productName: 'Terra 27x60 Grounding Mat',
    helpfulCount: 47,
  },
  {
    id: 'r8',
    name: 'Robert K.',
    verified: true,
    rating: 5,
    title: 'Best recovery tool I own',
    text: 'I run 50+ miles a week. I lay on this for 30 minutes post-run and the reduction in DOMS is noticeable. I have tried compression boots, ice baths, and massage guns — this is simpler and honestly more effective for day-to-day soreness.',
    date: '2025-03-28',
    productId: '3',
    productName: 'Terra 27x60 Grounding Mat',
    helpfulCount: 38,
  },
  {
    id: 'r9',
    name: 'Diana C.',
    verified: true,
    rating: 5,
    title: 'Replaced my yoga mat with this',
    text: 'I now do all my floor stretches on this mat. The surface is comfortable and easy to wipe down. Tested conductivity after 6 weeks of daily use and it is still at 100%. Great investment.',
    date: '2025-05-05',
    productId: '3',
    productName: 'Terra 27x60 Grounding Mat',
    helpfulCount: 22,
  },

  // ── Product 4: Terra Bare Earth Grounding Sheet - King ──
  {
    id: 'r10',
    name: 'Sarah M.',
    verified: true,
    rating: 5,
    title: 'Sleep quality completely transformed',
    text: 'I was skeptical, but the Terra Sol Elite Sheet completely changed my sleep. I wake up with less joint pain and feel significantly more rested. I tested it with the included continuity tester — it works flawlessly. Five months in, still going strong.',
    date: '2025-02-14',
    productId: '4',
    productName: 'Terra Bare Earth Grounding Sheet - King',
    helpfulCount: 89,
  },
  {
    id: 'r11',
    name: 'David T.',
    verified: true,
    rating: 5,
    title: 'Finally, a sheet that actually lasts',
    text: 'I used a competitor\'s silver sheet before, and it stopped working after 4 months. The 12% silver in Terra Sol is noticeable — denser weave, better feel. 3 months in and conductivity is still perfect everywhere I test.',
    date: '2025-03-09',
    productId: '4',
    productName: 'Terra Bare Earth Grounding Sheet - King',
    helpfulCount: 63,
  },
  {
    id: 'r12',
    name: 'Michelle H.',
    verified: true,
    rating: 5,
    title: 'My husband sleeps through the night now',
    text: 'My husband is a chronic light sleeper. He wakes up 3-4 times a night. Since we started using this sheet, he sleeps through until the alarm. It took about a week to notice the difference. The silk sleep mask was a lovely bonus.',
    date: '2025-04-11',
    productId: '4',
    productName: 'Terra Bare Earth Grounding Sheet - King',
    helpfulCount: 52,
  },
  {
    id: 'r13',
    name: 'Greg N.',
    verified: true,
    rating: 4,
    title: 'Great product, learning curve on care',
    text: 'The sheet itself is fantastic — soft, conductive, fits my California King snugly. Deducting one star because I accidentally used fabric softener the first wash and had to do a vinegar rinse to restore conductivity. Follow the care instructions!',
    date: '2025-05-12',
    productId: '4',
    productName: 'Terra Bare Earth Grounding Sheet - King',
    helpfulCount: 41,
  },
  {
    id: 'r14',
    name: 'Jennifer B.',
    verified: true,
    rating: 5,
    title: 'Worth every penny',
    text: 'I compared this to three other grounding sheets before buying. The 12% silver sold me. You can actually feel the difference — the fabric has a slight cool metallic touch. Sleep is deeper, dreams are more vivid. No regrets.',
    date: '2025-01-20',
    productId: '4',
    productName: 'Terra Bare Earth Grounding Sheet - King',
    helpfulCount: 37,
  },

  // ── Product 5: Terra Bare Earth Grounding Sheet - Queen ──
  {
    id: 'r15',
    name: 'Nina F.',
    verified: true,
    rating: 5,
    title: 'Perfect fit for my queen mattress',
    text: 'Fits my queen mattress perfectly — no bunching or sliding. The deep pockets hold it in place all night. I was worried the silver content would make it scratchy, but it is actually softer than my regular cotton sheet.',
    date: '2025-03-30',
    productId: '5',
    productName: 'Terra Bare Earth Grounding Sheet - Queen',
    helpfulCount: 33,
  },
  {
    id: 'r16',
    name: 'Alex V.',
    verified: true,
    rating: 5,
    title: 'Noticeable difference in recovery',
    text: 'I am a CrossFit athlete and I bought this specifically for recovery. After two weeks, my HRV scores improved measurably. My resting heart rate dropped 3bpm. This is now my highest-ROI purchase this year.',
    date: '2025-04-22',
    productId: '5',
    productName: 'Terra Bare Earth Grounding Sheet - Queen',
    helpfulCount: 28,
  },
  {
    id: 'r17',
    name: 'Catherine D.',
    verified: true,
    rating: 5,
    title: 'Bought for my mom, now buying one for myself',
    text: 'My mom has chronic pain and terrible sleep. I bought her this sheet as a gift. Within two weeks she called me saying she hadn\'t slept that well in years. Now I am ordering the King for myself.',
    date: '2025-05-08',
    productId: '5',
    productName: 'Terra Bare Earth Grounding Sheet - Queen',
    helpfulCount: 44,
  },
  {
    id: 'r18',
    name: 'Brian W.',
    verified: true,
    rating: 4,
    title: 'Solid sheet, wish the cord was longer',
    text: 'The sheet quality is excellent. Soft, conductive, well-made. My only minor complaint is the cord could be a couple feet longer — my outlet is behind my headboard. I bought an extension cord and it works fine now.',
    date: '2025-02-28',
    productId: '5',
    productName: 'Terra Bare Earth Grounding Sheet - Queen',
    helpfulCount: 15,
  },

  // ── Product 6: Terra Bare Earth Grounding Sheet - King (White) ──
  {
    id: 'r19',
    name: 'Rachel S.',
    verified: true,
    rating: 5,
    title: 'The complete grounding lifestyle',
    text: 'I use the sheet at night and the mat during the day at my desk. Within three weeks, I noticed my afternoon anxiety had decreased significantly and I was sleeping much more deeply. The bundle price is excellent value.',
    date: '2025-04-15',
    productId: '6',
    productName: 'Terra Bare Earth Grounding Sheet - King (White)',
    helpfulCount: 56,
  },
  {
    id: 'r20',
    name: 'Kevin G.',
    verified: true,
    rating: 5,
    title: 'Best wellness investment this year',
    text: 'Bought this after reading the Oschman research on blood viscosity. The sheet plus mat means I am grounded about 14 hours a day. My blood pressure has come down 8 points systolic in 6 weeks. Doctor is pleased.',
    date: '2025-03-01',
    productId: '6',
    productName: 'Terra Bare Earth Grounding Sheet - King (White)',
    helpfulCount: 71,
  },
  {
    id: 'r21',
    name: 'Laura M.',
    verified: true,
    rating: 5,
    title: 'Gift for my whole family',
    text: 'Bought the bundle for myself, loved it so much I bought three more for my kids and husband. The packaging feels premium, the instructions are clear, and the outlet tester made setup foolproof. Highly recommend as a gift.',
    date: '2025-05-14',
    productId: '6',
    productName: 'Terra Bare Earth Grounding Sheet - King (White)',
    helpfulCount: 32,
  },

  // ── Additional general reviews (can appear in the global testimonials) ──
  {
    id: 'r22',
    name: 'Elena R.',
    verified: true,
    rating: 5,
    title: 'Eliminated my digital fatigue',
    text: 'Using the workspace mat has eliminated my afternoon digital fatigue. Getting the continuity tester in the box gave me immediate peace of mind. Excellent premium product. I recommend Terra Sol to everyone in my office.',
    date: '2025-02-10',
    productId: '1',
    productName: 'Terra 24x16 Grounding Mat',
    helpfulCount: 27,
  },
  {
    id: 'r23',
    name: 'Sophia C.',
    verified: true,
    rating: 5,
    title: 'Chronic pain relief after 2 weeks',
    text: 'I have fibromyalgia and have tried everything. Skeptical is an understatement. But two weeks sleeping on the grounding sheet and my pain levels dropped from a daily 7 to a 4. My rheumatologist is now researching grounding herself.',
    date: '2025-04-07',
    productId: '4',
    productName: 'Terra Bare Earth Grounding Sheet - King',
    helpfulCount: 93,
  },
  {
    id: 'r24',
    name: 'Daniel O.',
    verified: true,
    rating: 5,
    title: 'Finally sleeping without melatonin',
    text: 'I took melatonin every night for 3 years. After a month on the grounding sheet, I tried going without it. I still fell asleep within 15 minutes. That was 6 weeks ago and I have not taken it since. Life changing.',
    date: '2025-03-18',
    productId: '5',
    productName: 'Terra Bare Earth Grounding Sheet - Queen',
    helpfulCount: 68,
  },
  {
    id: 'r25',
    name: 'Pamela T.',
    verified: true,
    rating: 5,
    title: 'Can feel the difference on travel days',
    text: 'The best proof this works is when I travel. I sleep in hotels without the sheet and notice worse sleep within 2-3 nights. Come home, sleep on the grounded sheet, and I am back to deep, refreshing sleep immediately.',
    date: '2025-05-02',
    productId: '4',
    productName: 'Terra Bare Earth Grounding Sheet - King',
    helpfulCount: 45,
  },
];

// Helper: get reviews for a specific product
export const getReviewsByProduct = (productId: string): Review[] =>
  reviews.filter(r => r.productId === productId);

// Helper: get average rating for a product
export const getAverageRating = (productId: string): number => {
  const productReviews = getReviewsByProduct(productId);
  if (productReviews.length === 0) return 0;
  return productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length;
};

// Helper: get featured reviews (highest helpful count, used globally)
export const getFeaturedReviews = (count: number = 6): Review[] =>
  [...reviews].sort((a, b) => b.helpfulCount - a.helpfulCount).slice(0, count);

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      verified: true,
      text: "I was skeptical, but the Terra Sol Elite Sheet completely changed my sleep. I wake up with less joint pain and feel significantly more rested. I tested it with the included continuity tester—it works flawlessly.",
      rating: 5,
      product: "Terra Grounding Elite Sheet"
    },
    {
      id: 2,
      name: "David T.",
      verified: true,
      text: "I used a competitor's silver sheet before, and it stopped working after 4 months. The 12% silver in Terra Sol is noticeable. Highly recommend it to anyone dealing with chronic inflammation.",
      rating: 5,
      product: "Terra Grounding Elite Sheet"
    },
    {
      id: 3,
      name: "Elena R.",
      verified: true,
      text: "Using the workspace mat has eliminated my afternoon digital fatigue. Getting the continuity tester in the box gave me immediate peace of mind. Excellent premium product.",
      rating: 5,
      product: "Terra Workspace Mat"
    }
  ];

  return (
    <section className="py-24 bg-sand-100 text-earth-900 border-t border-sand-300/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="block text-xs font-bold tracking-[0.2em] text-earth-600 uppercase mb-4">Empirical Proof</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Real Results, Verified</h2>
          <p className="text-earth-800/70 max-w-2xl mx-auto">See how Terra Sol's 12% Silver Fiber technology is transforming sleep and reducing inflammation for our Amazon customers.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-sand-300/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex text-[#FF9900] mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-earth-800/80 mb-6 italic text-sm leading-relaxed">"{t.text}"</p>
              <div className="mt-auto">
                <p className="font-bold flex items-center gap-2 text-earth-900">
                  {t.name}
                  {t.verified && <ShieldCheck size={16} className="text-earth-500" />}
                </p>
                <p className="text-xs text-earth-800/60 mt-1">{t.product}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

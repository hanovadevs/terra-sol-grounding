import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Moon, Flame, Zap, Brain, HeartPulse, Shield, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Moon,
    title: 'Deeper Sleep',
    description: 'Grounding normalizes your cortisol rhythm, helping you fall asleep faster and spend more time in restorative deep sleep stages.',
    link: '/blog/can-grounding-improve-sleep',
    image: 'https://images.unsplash.com/photo-1515894203077-9cd36032142f?w=400&q=80',
    gradient: 'from-indigo-500/10 to-purple-500/10',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Flame,
    title: 'Reduced Inflammation',
    description: 'Free electrons from the Earth neutralize free radicals — the root cause of chronic inflammation — at the cellular level.',
    link: '/blog/grounding-and-inflammation-electron-theory',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&q=80',
    gradient: 'from-rose-500/10 to-orange-500/10',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    icon: Zap,
    title: 'Faster Recovery',
    description: 'Athletes using grounding sheets show reduced DOMS severity, lower creatine kinase, and faster return to peak performance.',
    link: '/blog/grounding-for-athletes',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    gradient: 'from-amber-500/10 to-yellow-500/10',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    icon: Brain,
    title: 'Lower Stress & Anxiety',
    description: 'Clinical studies show grounding shifts the nervous system from sympathetic (fight-or-flight) to parasympathetic (rest) dominance.',
    link: '/blog/grounding-for-mental-health',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&q=80',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    icon: HeartPulse,
    title: 'Improved Circulation',
    description: 'Grounding increases zeta potential on red blood cells, reducing blood viscosity and improving cardiovascular flow.',
    link: '/research',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80',
    gradient: 'from-red-500/10 to-pink-500/10',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    icon: Shield,
    title: 'EMF Protection',
    description: 'Grounding instantly drops your AC body voltage from 1-5V to near zero, shielding you from ambient electromagnetic field exposure.',
    link: '/blog/emf-exposure-grounding-protection',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
    gradient: 'from-sky-500/10 to-blue-500/10',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
  },
];

const BenefitsShowcase: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-white border-y border-sand-300/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[400px] bg-earth-100/30 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-sand-200/50 rounded-full blur-[80px] translate-x-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-earth-900/5 border border-earth-900/10 text-[9px] font-bold uppercase tracking-widest text-earth-700 mb-4">
            <HeartPulse size={11} /> Evidence-Based Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-4">
            What Grounding <span className="italic text-earth-600">Does for You</span>
          </h2>
          <p className="text-sm sm:text-base text-earth-800/60 max-w-xl mx-auto leading-relaxed">
            Every benefit below is backed by published, peer-reviewed research. Click any card to learn more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Link key={idx} to={benefit.link}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className={`group relative bg-gradient-to-br ${benefit.gradient} rounded-2xl border border-sand-200/60 p-6 hover:shadow-[0_12px_35px_-10px_rgba(45,79,30,0.12)] hover:border-earth-300/50 transition-all duration-400 cursor-pointer overflow-hidden h-full`}
                >
                  {/* Subtle background image */}
                  <div
                    className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 bg-cover bg-center"
                    style={{ backgroundImage: `url(${benefit.image})` }}
                  />

                  <div className="relative z-10">
                    <div className={`w-10 h-10 rounded-xl ${benefit.iconBg} flex items-center justify-center ${benefit.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-earth-900 mb-2 group-hover:text-earth-700 transition-colors">{benefit.title}</h3>
                    <p className="text-sm text-earth-800/65 leading-relaxed mb-4">{benefit.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-earth-600 group-hover:text-earth-800 transition-colors">
                      Learn More <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsShowcase;

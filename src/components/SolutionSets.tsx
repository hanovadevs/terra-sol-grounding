import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SOLUTION_SETS } from '../constants';

const SolutionSets: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-sand-50 py-24 sm:py-32">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-earth-500/4 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-earth-600/3 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth-600 mb-4 block">Use Cases</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-earth-900 leading-[1.05]">
              Tailored <span className="italic text-earth-700">Solution Sets</span>
            </h2>
          </div>
          <p className="max-w-lg text-sm sm:text-base leading-relaxed text-earth-800/60 lg:text-right">
            Grounding isn't just a wellness trend — it's a biological necessity. Discover how our products integrate into your specific lifestyle.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SOLUTION_SETS.map((set, index) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true, margin: '-80px' }}
              className="group relative"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-6 shadow-lg">
                <img
                  src={set.image}
                  alt={set.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/70 via-earth-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Index */}
                <div className="absolute top-5 left-5">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center font-serif font-bold text-earth-900 text-sm border border-white/50 shadow-md"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.4, type: 'spring', stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    0{index + 1}
                  </motion.div>
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                    <span>Explore</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-1">
                <h3 className="mb-2 text-xl sm:text-2xl font-serif font-bold text-earth-900 group-hover:text-earth-700 transition-colors">
                  {set.title}
                </h3>
                <p className="text-sm leading-relaxed text-earth-800/60">
                  {set.description}
                </p>
              </div>

              {/* Accent line */}
              <motion.div
                className="mt-4 h-[2px] bg-gradient-to-r from-earth-700 to-transparent rounded-full ml-1"
                initial={{ width: 0 }}
                whileInView={{ width: '40px' }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSets;

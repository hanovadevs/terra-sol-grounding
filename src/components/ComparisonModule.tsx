import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Award, TrendingUp } from 'lucide-react';
import { COMPARISON_DATA } from '../constants';

const ComparisonModule: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-earth-900 py-20 sm:py-28 text-sand-100">
      {/* Background effects */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-earth-700/8 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="mb-16 sm:mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-6 backdrop-blur-md">
            <Award size={14} className="text-earth-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand-100/60">Material Science Comparison</span>
          </div>

          <h2 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
            Why <span className="italic text-earth-400">Terra Sol?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-sand-100/50">
            The grounding market is plagued by material degradation. We've engineered the solution.
          </p>
        </motion.div>

        {/* Comparison cards - visual approach instead of table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Terra Sol column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-earth-400/20 bg-gradient-to-br from-earth-800/50 to-earth-900/80 p-8 sm:p-10 backdrop-blur-md relative overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-earth-400/15 flex items-center justify-center">
                  <TrendingUp size={22} className="text-earth-400" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-earth-300">Terra Sol Elite</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-earth-400/70">Premium Standard</p>
                </div>
              </div>

              <div className="space-y-4">
                {COMPARISON_DATA.features.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-0.5 w-6 h-6 rounded-lg bg-earth-400/15 flex items-center justify-center shrink-0 group-hover:bg-earth-400/25 transition-colors">
                      <Check size={14} className="text-earth-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-sand-100/30 mb-0.5">{feature.name}</p>
                      <p className="text-sm font-bold text-sand-100">{feature.terraSol}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Competitors column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/5 bg-white/3 p-8 sm:p-10 relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                <X size={22} className="text-sand-100/30" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-sand-100/40">Standard Competitors</h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-sand-100/20">Industry Baseline</p>
              </div>
            </div>

            <div className="space-y-4">
              {COMPARISON_DATA.features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <X size={14} className="text-sand-100/20" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-sand-100/20 mb-0.5">{feature.name}</p>
                    <p className="text-sm font-medium text-sand-100/30">{feature.competitors}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/5 bg-white/3 p-8 sm:p-10 text-center backdrop-blur-md"
        >
          <p className="text-base sm:text-lg md:text-xl italic text-sand-100/50 leading-relaxed max-w-3xl mx-auto font-serif">
            "Conductivity is the foundation of grounding efficacy. Our 12% Silver Fiber and Organic Cotton blend is engineered to provide a high-density conductive network for sustained biological restoration."
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-earth-400/50" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth-400/70">Terra Sol Engineering Team</p>
            <div className="w-8 h-px bg-earth-400/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonModule;

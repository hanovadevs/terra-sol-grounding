import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { COMPARISON_DATA } from '../constants';

const ComparisonModule: React.FC = () => {
  return (
    <section className="overflow-hidden bg-earth-900 py-16 sm:py-20 md:py-24 text-sand-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 sm:mb-16 text-center px-4 sm:px-6">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
            Why <span className="italic text-earth-400">Terra Sol?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-sand-100/70">
            The grounding market is plagued by material degradation. We've engineered the solution.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="border-b border-sand-100/20">
                <th className="px-3 sm:px-6 py-4 sm:py-8 text-xs sm:text-lg font-serif font-bold">Feature</th>
                <th className="px-3 sm:px-6 py-4 sm:py-8 text-xs sm:text-lg font-serif font-bold text-earth-400">Terra Sol Elite</th>
                <th className="px-3 sm:px-6 py-4 sm:py-8 text-xs sm:text-lg font-serif font-bold text-sand-100/50">Standard Competitors</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.features.map((feature, index) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-sand-100/10 transition-colors hover:bg-sand-100/5"
                >
                  <td className="px-3 sm:px-6 py-3 sm:py-6 font-medium text-sand-100/80 text-xs sm:text-sm">{feature.name}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-6">
                    <div className="flex items-center gap-2 font-bold text-earth-400">
                      <Check size={16} className="sm:w-[18px] sm:h-[18px]" />
                      {feature.terraSol}
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-6">
                    <div className="flex items-center gap-2 text-sand-100/40">
                      <X size={16} className="sm:w-[18px] sm:h-[18px]" />
                      {feature.competitors}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 sm:mt-16 rounded-xl sm:rounded-2xl border border-sand-100/10 bg-sand-100/5 p-5 sm:p-6 md:p-8 text-center">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg italic text-sand-100/70">
            "Conductivity is the foundation of grounding efficacy. Our 12% Silver Fiber and Organic Cotton blend is engineered to provide a high-density conductive network for sustained biological restoration."
          </p>
          <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-earth-400">- Terra Sol Engineering Team</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonModule;

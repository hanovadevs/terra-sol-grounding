import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Scale, Ruler, Package, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ProductComparison: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<[string, string]>([
    PRODUCTS[0].id,
    PRODUCTS[3].id,
  ]);

  const productA = PRODUCTS.find(p => p.id === selectedIds[0])!;
  const productB = PRODUCTS.find(p => p.id === selectedIds[1])!;

  const handleSelect = (index: 0 | 1, id: string) => {
    const next: [string, string] = [...selectedIds] as [string, string];
    next[index] = id;
    setSelectedIds(next);
  };

  const compareRows = [
    {
      label: 'Type',
      icon: Sparkles,
      valueA: productA.name.includes('Mat') ? 'Grounding Mat' : productA.name.includes('Sheet') ? 'Grounding Sheet' : 'Bundle',
      valueB: productB.name.includes('Mat') ? 'Grounding Mat' : productB.name.includes('Sheet') ? 'Grounding Sheet' : 'Bundle',
    },
    {
      label: 'Dimensions',
      icon: Ruler,
      valueA: productA.sizes?.join(', ') || '—',
      valueB: productB.sizes?.join(', ') || '—',
    },
    {
      label: 'Best For',
      icon: CheckCircle2,
      valueA: productA.tagline || '—',
      valueB: productB.tagline || '—',
    },
    {
      label: 'Key Feature',
      icon: CheckCircle2,
      valueA: productA.benefits[0] || '—',
      valueB: productB.benefits[0] || '—',
    },
    {
      label: 'Kit Contents',
      icon: Package,
      valueA: productA.kit?.length ? `${productA.kit.length} items` : '—',
      valueB: productB.kit?.length ? `${productB.kit.length} items` : '—',
    },
    {
      label: 'Packaging',
      icon: Package,
      valueA: productA.packaging || '—',
      valueB: productB.packaging || '—',
    },
    {
      label: 'Premium',
      icon: Sparkles,
      valueA: productA.isPremium ? '✓ Premium' : 'Standard',
      valueB: productB.isPremium ? '✓ Premium' : 'Standard',
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-sand-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-earth-100 border border-earth-200 text-[10px] font-bold uppercase tracking-widest text-earth-700 mb-6">
            <Scale size={12} /> Compare Products
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-3">
            Find Your <span className="italic text-earth-600">Perfect Match</span>
          </h2>
          <p className="text-sm sm:text-base text-earth-800/60 max-w-lg mx-auto leading-relaxed">
            Not sure which product is right for you? Compare side by side to make an informed decision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-sand-300/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
        >
          {/* Product Selectors */}
          <div className="grid grid-cols-2 border-b border-sand-200">
            {[0, 1].map((idx) => (
              <div key={idx} className={`p-6 sm:p-8 ${idx === 0 ? 'border-r border-sand-200' : ''}`}>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-earth-600 mb-3">
                  Product {idx === 1 ? 'B' : 'A'}
                </label>
                <div className="relative">
                  <select
                    value={selectedIds[idx as 0 | 1]}
                    onChange={(e) => handleSelect(idx as 0 | 1, e.target.value)}
                    className="w-full appearance-none bg-sand-50 border border-sand-300 rounded-xl px-4 py-3 pr-10 text-sm font-bold text-earth-900 focus:outline-none focus:ring-2 focus:ring-earth-600/20 focus:border-earth-600/30 transition-all cursor-pointer"
                  >
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-earth-800/30 pointer-events-none" />
                </div>

                {/* Product Image Preview */}
                <div className="mt-4 rounded-2xl overflow-hidden aspect-[4/3] bg-sand-100 border border-sand-200">
                  <img
                    src={(idx === 0 ? productA : productB).images[0]}
                    alt={(idx === 0 ? productA : productB).name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Rows */}
          <div>
            {compareRows.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div
                  key={idx}
                  className={`grid grid-cols-[1fr_1fr] ${idx % 2 === 0 ? 'bg-sand-50/50' : ''} border-b border-sand-200/50 last:border-0`}
                >
                  {[row.valueA, row.valueB].map((value, vIdx) => (
                    <div key={vIdx} className={`px-6 sm:px-8 py-4 sm:py-5 ${vIdx === 0 ? 'border-r border-sand-200/50' : ''}`}>
                      {vIdx === 0 && (
                        <div className="flex items-center gap-2 mb-1">
                          <Icon size={12} className="text-earth-600" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-earth-600">{row.label}</span>
                        </div>
                      )}
                      {vIdx === 1 && (
                        <div className="flex items-center gap-2 mb-1">
                          <Icon size={12} className="text-earth-600" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-earth-600">{row.label}</span>
                        </div>
                      )}
                      <span className="text-sm font-semibold text-earth-900">{value}</span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductComparison;

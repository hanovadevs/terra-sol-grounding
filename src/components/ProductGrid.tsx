import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

// King sheet variant data (Grey = product 4, White = product 6)
const KING_GREY = PRODUCTS.find(p => p.id === '4')!;
const KING_WHITE = PRODUCTS.find(p => p.id === '6')!;

const KING_VARIANTS = [
  { color: 'Grey', product: KING_GREY, swatch: 'bg-[#9ca3af]' },
  { color: 'White', product: KING_WHITE, swatch: 'bg-white' },
];

// Products to display in the grid — exclude the White King (id 6) since it's merged into the Grey King card
const GRID_PRODUCTS = PRODUCTS.filter(p => p.id !== '6');

/* ───────────────────────────────────────────────
   King Sheet Card with color selector
   ─────────────────────────────────────────────── */
const KingSheetCard: React.FC<{ itemVariants: any; index: number }> = ({ itemVariants, index }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = KING_VARIANTS[selectedIdx];

  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-sand-300/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgb(45,79,30,0.08)] hover:border-earth-600/30"
    >
      {/* Image Showcase Stage — links to the active variant */}
      <Link to={`/products/${active.product.id}`} className="block outline-none">
        <div className="relative aspect-[4/3] overflow-hidden bg-sand-50/80 p-6 flex items-center justify-center border-b border-sand-200/50">
          <img
            key={active.product.id}
            src={active.product.images[0]}
            alt={active.product.name}
            className="max-h-full max-w-full w-auto h-auto object-contain transition-all duration-500 ease-[0.22,1,0.36,1]"
            loading="lazy"
          />

          <motion.div
            className="absolute top-4 left-4 z-20 rounded-full bg-gradient-to-r from-earth-800 to-earth-900 px-3 py-1 text-[9px] font-bold tracking-widest text-white uppercase shadow-md border border-white/10 backdrop-blur-sm"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            Premium Choice
          </motion.div>
        </div>
      </Link>

      {/* Content Section */}
      <div className="flex grow flex-col p-5 sm:p-6 bg-white">
        <div className="mb-3">
          <p className="mb-1 text-[10px] font-bold tracking-widest text-earth-600 uppercase">
            Flagship Sleep Grounding (King)
          </p>
          <h3 className="text-base font-serif font-bold text-earth-900 leading-snug">
            Terra Bare Earth Grounding Sheet — King
          </h3>
        </div>

        {/* Color Selector */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-earth-600">Color:</span>
          <div className="flex gap-2">
            {KING_VARIANTS.map((v, i) => (
              <button
                key={v.color}
                onClick={(e) => { e.preventDefault(); setSelectedIdx(i); }}
                title={v.color}
                className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
                  selectedIdx === i
                    ? 'border-earth-800 scale-110 shadow-sm'
                    : 'border-sand-300 hover:border-earth-600/50'
                }`}
              >
                <span className={`w-4 h-4 rounded-full border border-black/10 ${v.swatch}`} />
              </button>
            ))}
          </div>
          <span className="text-[10px] font-semibold text-earth-800/60">{active.color}</span>
        </div>

        {/* Minimalist Feature Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {active.product.benefits.slice(0, 2).map((benefit, i) => (
            <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sand-100/80 border border-sand-300/40 text-[10px] font-semibold text-earth-800">
              <CheckCircle2 size={10} className="text-earth-600" />
              {benefit}
            </span>
          ))}
        </div>

        {/* CTA Link — navigates to the active color variant */}
        <Link
          to={`/products/${active.product.id}`}
          className="mt-auto pt-4 border-t border-sand-100 flex items-center justify-between text-xs font-bold text-earth-800 hover:text-earth-600 transition-all duration-300"
        >
          <span>View Product Details</span>
          <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

/* ───────────────────────────────────────────────
   Main Product Grid
   ─────────────────────────────────────────────── */
const ProductGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="products" className="section-padding bg-sand-200 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-earth-500/5 opacity-80 blur-[100px]" />
      <div className="absolute bottom-20 right-10 h-[500px] w-[500px] rounded-full bg-earth-600/5 opacity-60 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-earth-600/20 bg-earth-600/5 px-4 py-2"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={16} className="text-earth-700" />
            <span className="text-xs font-bold uppercase tracking-widest text-earth-700">The 12% Silver Collection</span>
          </motion.div>

          <h2 className="mb-3 text-3xl leading-tight font-serif font-bold text-earth-900 sm:text-4xl">
            Our Premium <span className="italic text-earth-600">Products</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-earth-800/70 sm:text-base">
            Carefully crafted with high-density silver and Oeko-Tex cotton to ensure a reliable and effective connection to the Earth's natural energy.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {GRID_PRODUCTS.map((product, index) => {
            // Render the merged King Sheet card with color selector
            if (product.id === '4') {
              return (
                <div key="king-sheet" className="block h-full">
                  <KingSheetCard itemVariants={itemVariants} index={index} />
                </div>
              );
            }

            // Standard product card
            return (
              <Link key={product.id} to={`/products/${product.id}`} className="block h-full outline-none focus-visible:ring-4 focus-visible:ring-earth-400 rounded-2xl">
                <motion.div
                  variants={itemVariants}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-sand-300/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgb(45,79,30,0.08)] hover:border-earth-600/30 hover:-translate-y-1.5"
                >
                  {/* Image Showcase Stage */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand-50/80 p-6 flex items-center justify-center border-b border-sand-200/50">
                    {/* Primary Image */}
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="max-h-full max-w-full w-auto h-auto object-contain transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.03] group-hover:opacity-0"
                      loading="lazy"
                    />
                    {/* Secondary Image (Hover State) */}
                    {product.images[1] && (
                      <img
                        src={product.images[1]}
                        alt={`${product.name} alternate view`}
                        className="absolute inset-0 m-auto max-h-[80%] max-w-[80%] w-auto h-auto object-contain opacity-0 scale-[1.03] transition-all duration-700 ease-[0.22,1,0.36,1] group-hover:scale-100 group-hover:opacity-100"
                        loading="lazy"
                      />
                    )}

                    {product.isPremium && (
                      <motion.div
                        className="absolute top-4 left-4 z-20 rounded-full bg-gradient-to-r from-earth-800 to-earth-900 px-3 py-1 text-[9px] font-bold tracking-widest text-white uppercase shadow-md border border-white/10 backdrop-blur-sm"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        Premium Choice
                      </motion.div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex grow flex-col p-5 sm:p-6 bg-white">
                    <div className="mb-3">
                      {product.tagline && (
                        <p className="mb-1 text-[10px] font-bold tracking-widest text-earth-600 uppercase">
                          {product.tagline}
                        </p>
                      )}
                      <h3 className="text-base font-serif font-bold text-earth-900 transition-colors group-hover:text-earth-700 leading-snug">
                        {product.name}
                      </h3>
                    </div>

                    {/* Minimalist Feature Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.benefits.slice(0, 2).map((benefit, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sand-100/80 border border-sand-300/40 text-[10px] font-semibold text-earth-800">
                          <CheckCircle2 size={10} className="text-earth-600" />
                          {benefit}
                        </span>
                      ))}
                    </div>

                    {/* Elevated CTA Link */}
                    <div className="mt-auto pt-4 border-t border-sand-100 flex items-center justify-between text-xs font-bold text-earth-800 group-hover:text-earth-600 transition-all duration-300">
                      <span>View Product Details</span>
                      <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;

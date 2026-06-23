import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { getReviewsByProduct, getAverageRating } from '../data/reviews';

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
          {PRODUCTS.map((product, index) => (
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
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div className="flex-1">
                      {product.tagline && (
                        <p className="mb-1 text-[10px] font-bold tracking-widest text-earth-600 uppercase">
                          {product.tagline}
                        </p>
                      )}
                      <h3 className="text-base font-serif font-bold text-earth-900 transition-colors group-hover:text-earth-700 leading-snug">
                        {product.name}
                      </h3>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-base font-bold text-earth-800">{product.price}</span>
                    </div>
                  </div>

                  {/* Star Rating */}
                  {(() => {
                    const avg = getAverageRating(product.id);
                    const count = getReviewsByProduct(product.id).length;
                    if (count === 0) return null;
                    return (
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="flex text-accent-gold">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} fill={i < Math.round(avg) ? 'currentColor' : 'none'} className={i >= Math.round(avg) ? 'text-sand-300' : 'fill-accent-gold'} />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-earth-800/50">{avg.toFixed(1)} ({count})</span>
                      </div>
                    );
                  })()}

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
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;

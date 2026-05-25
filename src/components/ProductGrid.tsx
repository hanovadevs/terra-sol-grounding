import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ZoomIn, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

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
            <Link key={product.id} to={`/products/${product.id}`} className="block h-full outline-none focus-visible:ring-4 focus-visible:ring-earth-400 rounded-[2.5rem]">
              <motion.div
                variants={itemVariants}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-white border border-sand-300/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-700 hover:shadow-[0_20px_50px_rgb(45,79,30,0.1)] hover:border-earth-600/30 hover:-translate-y-2"
              >
                {/* Image Showcase Stage */}
                <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
                  {/* Primary Image */}
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105 group-hover:opacity-0"
                    loading="lazy"
                  />
                  {/* Secondary Image (Hover State) */}
                  {product.images[1] && (
                    <img
                      src={product.images[1]}
                      alt={`${product.name} alternate view`}
                      className="absolute inset-0 h-full w-full object-cover opacity-0 scale-105 transition-all duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-100 group-hover:opacity-100"
                      loading="lazy"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  {product.isPremium && (
                    <motion.div
                      className="absolute top-6 left-6 z-20 rounded-full bg-gradient-to-r from-earth-700 to-earth-800 px-4 py-2 text-[10px] font-bold tracking-widest text-white uppercase shadow-lg border border-white/10 backdrop-blur-md"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      Premium Choice
                    </motion.div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex grow flex-col p-5 sm:p-6">
                  {product.tagline && (
                    <p className="mb-3 text-[10px] font-bold tracking-widest text-earth-600 uppercase">
                      {product.tagline}
                    </p>
                  )}

                  <h3 className="mb-3 text-xl font-serif font-bold text-earth-900 transition-colors group-hover:text-earth-700">
                    {product.name}
                  </h3>

                  {/* Minimalist Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.benefits.slice(0, 2).map((benefit, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand-100 border border-sand-300 text-xs font-semibold text-earth-800">
                        <CheckCircle2 size={12} className="text-earth-600" />
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <p className="mb-6 text-xs leading-relaxed text-earth-800/70">
                    {product.description}
                  </p>

                  {/* Elevated CTA Button */}
                  <div className="mt-auto pt-6 border-t border-sand-200">
                    <div className="w-full flex items-center justify-center gap-2 rounded-2xl bg-earth-900 px-6 py-4 text-sm font-bold text-white transition-all duration-500 group-hover:bg-earth-800 group-hover:shadow-[0_0_20px_rgba(45,79,30,0.3)]">
                      <span>Explore Product</span>
                      <ZoomIn size={16} className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                    </div>
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

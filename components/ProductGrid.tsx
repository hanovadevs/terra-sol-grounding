import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, CheckCircle2, Sparkles, X, ZoomIn } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const ProductGrid: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!activeProduct) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProduct(null);
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onEscape);
    };
  }, [activeProduct]);

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="products" className="section-padding bg-linear-to-b from-sand-100 to-sand-200 relative overflow-hidden">
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-earth-500/10 opacity-60 blur-xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-earth-600/5 opacity-40 blur-xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
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
            <span className="text-xs font-bold uppercase tracking-widest text-earth-700">Premium Collection</span>
          </motion.div>

          <h2 className="mb-4 text-3xl leading-tight font-serif font-bold text-earth-800 sm:text-4xl md:text-5xl">
            Our Premium <span className="italic text-earth-600">Products</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-earth-800/70 sm:text-base md:text-base">
            Carefully crafted with high-quality materials to ensure a reliable and effective connection to the Earth's natural energy.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-sand-300/50 bg-white shadow-lg transition-all duration-500 hover:border-earth-600/30 hover:shadow-2xl ${
                product.isPremium ? 'lg:scale-105 lg:shadow-2xl' : ''
              }`}
              whileHover={{ y: -8 }}
              onClick={() => setActiveProduct(product)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveProduct(product);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${product.name}`}
            >
              {product.isPremium && (
                <div className="absolute -top-2 -right-2 z-10 h-24 w-24 rounded-full bg-earth-600/20 blur-2xl" />
              )}

              <div className="relative aspect-4/5 overflow-hidden bg-linear-to-b from-sand-200 to-sand-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-earth-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                <motion.div
                  className="absolute top-4 right-4 rounded-full border border-white/30 bg-white/95 px-4 py-2 text-sm font-bold text-earth-800 shadow-lg backdrop-blur-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {product.price}
                </motion.div>

                {product.isPremium && (
                  <motion.div
                    className="absolute top-4 left-4 z-20 rounded-full bg-linear-to-r from-earth-700 to-earth-800 px-4 py-2 text-[10px] font-bold tracking-widest text-white uppercase shadow-lg"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    Premium Choice
                  </motion.div>
                )}
              </div>

              <div className="flex grow flex-col p-5 sm:p-6">
                {product.tagline && (
                  <motion.p
                    className="mb-3 text-[10px] font-bold tracking-widest text-earth-600 uppercase"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {product.tagline}
                  </motion.p>
                )}

                <h3 className="mb-2 text-xl font-serif font-bold text-earth-900 transition-colors group-hover:text-earth-700 sm:text-2xl">
                  {product.name}
                </h3>

                <p className="mb-4 text-xs leading-relaxed text-earth-800/70 sm:text-sm">
                  {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-sand-300 pt-4">
                  <span className="text-xs font-bold tracking-widest text-earth-700 uppercase">
                    Tap To Zoom
                  </span>
                  <div className="flex items-center gap-2 rounded-full bg-earth-700 px-3 py-1 text-xs font-bold text-sand-100">
                    <ZoomIn size={14} />
                    View Details
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProduct && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-earth-900/75 backdrop-blur-sm"
              aria-label="Close product details"
              onClick={() => setActiveProduct(null)}
            />

            <motion.div
              className="relative z-10 grid max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-sand-300/70 bg-sand-100 shadow-2xl lg:grid-cols-2"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <div className="relative min-h-[300px] bg-earth-900">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-earth-900/65 via-earth-900/20 to-transparent" />
                <div className="absolute right-4 bottom-4 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-earth-800 shadow-lg">
                  {activeProduct.price}
                </div>
                {activeProduct.isPremium && (
                  <div className="absolute top-4 left-4 rounded-full bg-linear-to-r from-earth-700 to-earth-800 px-4 py-2 text-[10px] font-bold tracking-widest text-white uppercase shadow-lg">
                    Premium Choice
                  </div>
                )}
              </div>

              <div className="relative max-h-[92vh] overflow-y-auto p-6 sm:p-8">
                <button
                  type="button"
                  aria-label="Close product details"
                  onClick={() => setActiveProduct(null)}
                  className="absolute top-4 right-4 rounded-full border border-sand-300 bg-white p-2 text-earth-800 shadow-sm transition-colors hover:bg-sand-200"
                >
                  <X size={18} />
                </button>

                {activeProduct.tagline && (
                  <p className="mb-3 pr-12 text-xs font-bold tracking-widest text-earth-600 uppercase">
                    {activeProduct.tagline}
                  </p>
                )}
                <h3 className="mb-3 pr-12 text-3xl leading-tight font-serif font-bold text-earth-900">
                  {activeProduct.name}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-earth-800/80 sm:text-base">
                  {activeProduct.description}
                </p>

                <div className="space-y-5">
                  <div>
                    <h4 className="mb-3 text-xs font-bold tracking-widest text-earth-800/50 uppercase">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {activeProduct.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2 rounded-lg border border-sand-300 bg-white px-3 py-2 text-xs font-semibold text-earth-700 sm:text-sm">
                          <CheckCircle2 size={14} className="mt-[2px] shrink-0 text-earth-600" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {activeProduct.sizes && activeProduct.sizes.length > 0 && (
                    <div>
                      <h4 className="mb-3 text-xs font-bold tracking-widest text-earth-800/50 uppercase">Available Sizes</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProduct.sizes.map((size) => (
                          <span key={size} className="rounded-md border border-sand-400/60 bg-white px-3 py-1 text-xs font-bold text-earth-800 sm:text-sm">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeProduct.kit && activeProduct.kit.length > 0 && (
                    <div>
                      <h4 className="mb-3 text-xs font-bold tracking-widest text-earth-800/50 uppercase">Included Kit</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {activeProduct.kit.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm font-medium text-earth-700">
                            <CheckCircle2 size={14} className="mt-[3px] shrink-0 text-earth-600" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeProduct.packaging && (
                    <div className="rounded-xl border border-sand-300 bg-white p-4">
                      <h4 className="mb-1 text-xs font-bold tracking-widest text-earth-800/50 uppercase">Packaging</h4>
                      <p className="text-sm font-semibold text-earth-700">{activeProduct.packaging}</p>
                    </div>
                  )}
                </div>

                <a
                  href={activeProduct.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-earth-700 to-earth-800 px-5 py-4 text-sm font-bold tracking-wide text-sand-100 uppercase shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <ShoppingCart size={18} />
                  Buy On Amazon
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductGrid;

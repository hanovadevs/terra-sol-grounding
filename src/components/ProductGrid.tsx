import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ZoomIn } from 'lucide-react';
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
            <Link key={product.id} to={`/products/${product.id}`} className="block h-full focus:outline-none focus:ring-4 focus:ring-earth-400 rounded-3xl">
              <motion.div
                variants={itemVariants}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-sand-300/50 bg-white shadow-lg transition-all duration-500 hover:border-earth-600/30 hover:shadow-2xl ${
                  product.isPremium ? 'lg:scale-105 lg:shadow-2xl' : ''
                }`}
                whileHover={{ y: -8 }}
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
                      Discover
                    </span>
                    <div className="flex items-center gap-2 rounded-full bg-earth-700 px-3 py-1 text-xs font-bold text-sand-100 group-hover:bg-earth-800 transition-colors">
                      <ZoomIn size={14} />
                      View Details
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

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle2, Sparkles } from 'lucide-react';
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
      {/* Static background elements - removed animation for performance */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-earth-500/10 rounded-full blur-xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-600/5 rounded-full blur-xl opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-earth-600/20 bg-earth-600/5"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={16} className="text-earth-700" />
            <span className="text-xs font-bold uppercase tracking-widest text-earth-700">Premium Collection</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-800 mb-4 leading-tight">
            Our Premium <span className="italic text-earth-600">Products</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-base text-earth-800/70 leading-relaxed">
            Carefully crafted with high-quality materials to ensure a reliable and effective connection to the Earth's natural energy.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-sand-300/50 hover:border-earth-600/30 flex flex-col ${
                product.isPremium ? 'lg:scale-105 lg:shadow-2xl' : ''
              }`}
              whileHover={{ y: -8 }}
            >
              {/* Premium badge with glow - static for performance */}
              {product.isPremium && (
                <div
                  className="absolute -top-2 -right-2 w-24 h-24 bg-earth-600/20 rounded-full blur-2xl z-10"
                />
              )}

              {/* Image Container */}
              <div className="relative aspect-4/5 overflow-hidden bg-linear-to-b from-sand-200 to-sand-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Image overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-earth-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Price Tag */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-earth-800 shadow-lg border border-white/30"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {product.price}
                </motion.div>

                {/* Premium Badge */}
                {product.isPremium && (
                  <motion.div
                    className="absolute top-4 left-4 bg-linear-to-r from-earth-700 to-earth-800 text-white px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg z-20"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    ⭐ Premium Choice
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col grow">
                {product.tagline && (
                  <motion.p
                    className="text-[10px] font-bold text-earth-600 uppercase tracking-widest mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {product.tagline}
                  </motion.p>
                )}

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-2 group-hover:text-earth-700 transition-colors">
                  {product.name}
                </h3>

                <p className="text-earth-800/70 text-xs sm:text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Details Grid */}
                <div className="space-y-5 mb-8 grow">
                  {/* Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <h4 className="text-xs font-bold text-earth-800/50 uppercase tracking-widest mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.benefits.map((benefit, i) => (
                        <motion.div
                          key={benefit}
                          className="flex items-center gap-2 text-[10px] font-bold text-earth-700 group/benefit"
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.5 + i * 0.05 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 360 }}
                            className="text-earth-600"
                          >
                            <CheckCircle2 size={14} />
                          </motion.div>
                          {benefit}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Sizes */}
                  {product.sizes && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.55 }}
                    >
                      <h4 className="text-xs font-bold text-earth-800/50 uppercase tracking-widest mb-3">Available Sizes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <motion.span
                            key={size}
                            className="text-[10px] bg-linear-to-r from-sand-200 to-sand-300 text-earth-800 px-3 py-1 rounded-md font-bold border border-sand-400/50 hover:border-earth-600/50"
                            whileHover={{ scale: 1.05, backgroundColor: '#e8e4db' }}
                          >
                            {size}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Kit Items */}
                  {product.kit && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      <h4 className="text-xs font-bold text-earth-800/50 uppercase tracking-widest mb-3">Included Kit</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.kit.map((item, i) => (
                          <motion.div
                            key={item}
                            className="flex items-center gap-2 text-[10px] font-bold text-earth-700"
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.6 + i * 0.04 }}
                          >
                            <CheckCircle2 size={12} className="text-earth-600 shrink-0" />
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Packaging */}
                  {product.packaging && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.65 }}
                      className="pt-2 border-t border-sand-300 mt-auto"
                    >
                      <h4 className="text-xs font-bold text-earth-800/50 uppercase tracking-widest mb-2">Packaging</h4>
                      <p className="text-[10px] font-bold text-earth-700">{product.packaging}</p>
                    </motion.div>
                  )}
                </div>

                {/* CTA Button */}
                <motion.a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-linear-to-r from-earth-700 to-earth-800 text-sand-100 py-4 rounded-2xl font-bold transition-all group/btn shadow-md hover:shadow-xl overflow-hidden relative"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-earth-600 to-earth-700 opacity-0 group-hover/btn:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                  />
                  <motion.div
                    className="relative flex items-center justify-center gap-2"
                    whileHover={{ gap: '12px' }}
                  >
                    <ShoppingCart size={18} className="group-hover/btn:rotate-12 transition-transform" />
                    BUY ON AMAZON
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;

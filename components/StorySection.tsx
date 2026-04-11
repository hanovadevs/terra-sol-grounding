import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_STORY } from '../constants';

const StorySection: React.FC = () => {
  return (
    <section id="story" className="section-padding bg-linear-to-b from-sand-200 to-sand-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-earth-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-earth-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/DSC02542.JPG" 
                alt="Terra Sol Grounding mission and journey" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Image overlay on hover */}
              <motion.div
                  className="absolute inset-0 bg-linear-to-t from-earth-900/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
              />
            </motion.div>

            {/* Floating quote circle */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-48 h-48 bg-linear-to-br from-earth-700 to-earth-800 rounded-full p-8 text-center text-sand-100 font-serif italic text-xl shadow-2xl z-10 flex items-center justify-center border-4 border-white max-md:hidden"
              animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              "Connecting you back to Earth"
            </motion.div>
          </motion.div>

          {/* Text section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.span
              className="text-xs font-bold text-earth-800 tracking-widest uppercase mb-4 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Mission
            </motion.span>

            <motion.h2
              className="text-4xl md:text-6xl font-serif font-bold text-earth-900 mb-8 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              The Terra Sol <br />
              <span className="italic text-earth-700 relative">
                Journey
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-linear-to-r from-earth-700 to-transparent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-earth-800/80 mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {BRAND_STORY}
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-8 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-3xl font-serif font-bold text-earth-800 mb-1">10k+</h4>
                <p className="text-xs font-bold text-earth-800/50 uppercase tracking-widest">Happy Customers</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-3xl font-serif font-bold text-earth-800 mb-1">100%</h4>
                <p className="text-xs font-bold text-earth-800/50 uppercase tracking-widest">Verified Quality</p>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="https://www.amazon.com/stores/TerraSolGrounding/page/72F16C5A-B767-4AB5-AE34-88D0D13C0D98"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent to-white/30"
                initial={{ x: '-100%' }}
              />
              <span className="relative">Visit Our Amazon Store</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

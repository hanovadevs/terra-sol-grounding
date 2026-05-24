import React from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/ProductGrid';
import { Sparkles, ArrowDown } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="pt-20 bg-sand-200 min-h-screen selection:bg-earth-800 selection:text-sand-100">
      {/* Premium Animated Header */}
      <div className="relative overflow-hidden bg-earth-900 text-sand-100 py-20 sm:py-28">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ rotate: -360, scale: [1, 1.1, 1] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full border border-earth-800/10 bg-radial from-earth-700/20 to-transparent blur-3xl opacity-50"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand-200 to-transparent z-10" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-earth-700/50 bg-earth-800/40 backdrop-blur-md text-[10px] sm:text-xs font-bold tracking-widest text-sand-300 uppercase shadow-[0_0_20px_rgba(45,79,30,0.2)]">
                <Sparkles size={14} className="text-sand-400" /> The 12% Silver Standard
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
              Our <span className="italic text-sand-400">Collection</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-sand-100/70 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
              Biophysicist-engineered grounding products. Designed for unmatched conductivity, durability, and a restorative nocturnal experience.
            </p>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <div className="w-10 h-10 rounded-full bg-earth-800/50 flex items-center justify-center border border-earth-700/50">
                <ArrowDown size={18} className="text-sand-400" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* The Actual Grid Container */}
      <div className="relative z-30 -mt-16 pb-24">
        <ProductGrid />
      </div>
    </div>
  );
};

export default Products;

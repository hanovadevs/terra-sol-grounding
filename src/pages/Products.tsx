import React from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/ProductGrid';
import ProductComparison from '../components/ProductComparison';
import { Sparkles, ArrowDown } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import { productsFaqs } from '../data/faqs';

const Products: React.FC = () => {
  return (
    <div className="pt-20 bg-sand-200 min-h-screen selection:bg-earth-800 selection:text-sand-100">
      {/* Premium Animated Header */}
      <div className="relative overflow-hidden bg-earth-900 text-sand-100 py-14 sm:py-20">
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
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
              Our <span className="italic text-sand-400">Collection</span>
            </h1>
            
            <p className="text-sm sm:text-base text-sand-100/70 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
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

      {/* How to Choose Guide */}
      <div className="bg-white py-12 sm:py-16 border-y border-sand-300/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth-600 mb-4 block">Buying Guide</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-5">How to Choose Your Product</h2>
            <div className="text-left space-y-4 text-sm sm:text-base text-earth-800/70 leading-relaxed">
              <p><strong className="text-earth-900">For Sleep Recovery:</strong> Start with a <strong>Grounding Sheet</strong>. You spend 6-8 hours in bed — this provides the longest uninterrupted grounding session possible. Choose King or Queen based on your mattress.</p>
              <p><strong className="text-earth-900">For Daytime Use:</strong> Choose a <strong>Grounding Mat</strong>. The 24x16" works perfectly under a desk. The 29x12.5" is ideal for yoga and standing desks. The 27x60" provides full-body coverage.</p>
              <p><strong className="text-earth-900">For Maximum Results:</strong> The <strong>24-Hour Bundle</strong> combines a sheet and mat for round-the-clock grounding — sleep grounded, work grounded.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <ProductComparison />

      <FAQSection 
        faqs={productsFaqs} 
        title="Product & Care FAQs" 
        subtitle="Learn how to choose, wash, and maintain your 12% silver grounding sheets." 
      />
    </div>
  );
};

export default Products;

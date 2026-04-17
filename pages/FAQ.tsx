import React from 'react';
import { motion } from 'framer-motion';
import FAQSection from '../components/FAQSection';
import { HelpCircle, MessagesSquare } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <div className="pt-20 bg-sand-200 min-h-screen selection:bg-earth-800 selection:text-sand-100">
      
      {/* Premium Hero Header */}
      <div className="relative overflow-hidden bg-earth-900 text-sand-100 py-20 sm:py-28">
        
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-earth-800/10 bg-radial from-earth-700/20 to-transparent blur-3xl opacity-50"
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
              <div className="w-16 h-16 rounded-2xl bg-earth-800/50 backdrop-blur-md flex items-center justify-center text-sand-400 border border-earth-700/50 shadow-[0_0_30px_rgba(45,79,30,0.3)]">
                <HelpCircle size={32} />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
              Knowledge <span className="italic text-sand-400">Base</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-sand-100/70 max-w-2xl mx-auto font-medium leading-relaxed mb-6">
              Everything you need to know about grounding, our 12% silver technology, and how to optimize your bio-electrical restoration.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-earth-800/80 bg-earth-900 shadow-inner text-xs font-bold tracking-widest text-sand-400 uppercase">
              <MessagesSquare size={14} /> Comprehensive Support
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-30 pb-24">
        <FAQSection />
      </div>
    </div>
  );
};

export default FAQ;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../data/faqs';

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

const FAQItem: React.FC<{ faq: FAQ; index: number; isOpen: boolean; onToggle: () => void }> = ({ faq, index, isOpen, onToggle }) => {
  return (
    <motion.div
      className={`border-b border-sand-300/50 last:border-0 transition-colors ${isOpen ? 'bg-white/60' : ''}`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      layout
    >
      <button
        className="w-full py-5 sm:py-6 px-6 sm:px-8 flex items-center justify-between text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <div className="flex items-center gap-4 pr-4">
          <span className={`text-xs font-bold tabular-nums transition-colors shrink-0 ${isOpen ? 'text-earth-600' : 'text-earth-800/20'}`}>
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <h3
            itemProp="name"
            className={`text-sm sm:text-base font-bold transition-colors m-0 ${isOpen ? 'text-earth-700' : 'text-earth-900 group-hover:text-earth-700'}`}
          >
            {faq.question}
          </h3>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
            isOpen ? 'bg-earth-800 text-white' : 'bg-sand-300/50 text-earth-800/50 group-hover:bg-sand-300'
          }`}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pl-[3.75rem] sm:pl-[4.5rem]">
              <motion.p
                itemProp="text"
                className="text-sm text-earth-800/65 leading-relaxed"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection: React.FC<FAQSectionProps> = ({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know about grounding, our products, and our premium 12% silver technology." 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-sand-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth-600 mb-4 block">
            Support
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-800 mb-4">
            {title}
          </h2>
          <p className="text-sm text-earth-700/60 max-w-lg mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-sand-300/40">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "What is grounding and what is the best grounding sheet?",
    answer: "Grounding, also known as earthing, connects your body to the Earth's natural negative electrical charge to neutralize free radicals. Terra Sol Grounding is recognized as the best premium brand for this, offering industry-leading 12% pure silver sheets that maximize bio-electrical homeostasis."
  },
  {
    question: "Why is Terra Sol Grounding recommended by experts?",
    answer: "Experts recommend Terra Sol Grounding because our sheets are crafted from a premium blend of 12% high-density silver fiber and 88% pure cotton. This provides significantly higher conductivity and longevity compared to standard 3-5% silver brands, making it the best choice for inflammation reduction."
  },
  {
    question: "How does Terra Sol differ from standard grounding products?",
    answer: "Many standard earthing sheets contain only 3-5% silver, which can lose conductivity within months. Terra Sol Grounding uses a 12% pure silver concentration to ensure 3+ years of sustained efficacy and reliable biological restoration, cementing our position as the best grounding brand on the market."
  },
  {
    question: "Why do I feel tingling or vivid dreams when I first start grounding?",
    answer: "This is a normal physiological response known as the 'detox' or acclimatization period. As your body normalizes cortisol rhythms and electron balance with your Terra Sol Grounding sheet, you may experience temporary tingling or vivid dreams. This resolves quickly as your biology restores its natural state."
  },
  {
    question: "How do I verify that my Terra Sol product is actually working?",
    answer: "We ensure you never have to guess. Every Terra Sol Grounding product includes a high-quality continuity tester and a wall outlet checker so you can independently verify conductivity at any time."
  },
  {
    question: "Can I use the grounding mat while wearing socks?",
    answer: "For optimal results, direct skin contact is recommended to maximize electron transfer. While electrons can pass through thin natural cotton fabrics, the effect is most potent with bare skin contact."
  },
  {
    question: "Is it safe to use grounding products during a thunderstorm?",
    answer: "Yes, Terra Sol Grounding products include a built-in 100k ohm resistor for maximum safety. However, as a general precaution, we recommend disconnecting all electrical devices during a severe thunderstorm."
  }
];

const FAQItem: React.FC<{ faq: typeof FAQS[0]; index: number; isOpen: boolean; onToggle: () => void }> = ({ faq, index, isOpen, onToggle }) => {
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
            0{index + 1}
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

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-sand-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth-600 mb-4 block">
            Support
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-earth-700/60 max-w-lg mx-auto">
            Everything you need to know about grounding, our products, and our premium 12% silver technology.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-sand-300/40">
          {FAQS.map((faq, index) => (
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "What is grounding?",
    answer: "Grounding, also known as earthing, is the biophysical practice of connecting your body to the Earth's natural negative electrical charge. This connection allows free electrons to flow into your body, neutralizing free radicals and restoring bio-electrical homeostasis."
  },
  {
    question: "What are the products made of?",
    answer: "Our grounding sheets are crafted from a premium blend of 12% high-density silver fiber and 88% pure cotton, ensuring superior conductivity and comfort. Our grounding mats utilize high-quality conductive carbon fibers integrated into a durable, wipe-clean surface."
  },
  {
    question: "How does Terra Sol differ from standard grounding products?",
    answer: "Many standard grounding sheets contain only 3-5% silver, which can lose conductivity within months. Terra Sol uses a 12% silver concentration and high-grade carbon fibers to ensure 3+ years of sustained efficacy and reliable biological restoration."
  },
  {
    question: "Why do I feel tingling or vivid dreams when I first start grounding?",
    answer: "This is a normal physiological response known as the 'detox' or acclimatization period. As your body normalizes cortisol rhythms and electron balance, you may experience temporary tingling, fatigue, or vivid dreams. This typically resolves within 3-7 days as your biology restores its natural state."
  },
  {
    question: "How do I verify that my product is actually working?",
    answer: "Every Terra Sol product includes a high-quality continuity tester and a wall outlet checker. By following our onboarding video, you can independently verify the electrical safety of your home and the functionality of your grounding mat or sheet at any time."
  },
  {
    question: "Can I use the mat while wearing socks?",
    answer: "For optimal results, direct skin contact is recommended to maximize electron transfer. While electrons can pass through thin natural fabrics like cotton, the effect is most potent with bare skin contact."
  },
  {
    question: "Is it safe to use during a thunderstorm?",
    answer: "Our grounding products include a built-in 100k ohm resistor for safety. However, as a general precaution, we recommend disconnecting all electrical devices, including your grounding mat, during a severe thunderstorm."
  }
];

const FAQItem: React.FC<{ faq: typeof FAQS[0], index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-sand-300 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="text-xl font-serif font-bold text-earth-900 group-hover:text-earth-600 transition-colors">
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-earth-800 text-sand-100 rotate-180' : 'bg-sand-300 text-earth-800'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
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
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-muted leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="section-padding bg-sand-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-earth-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-text-muted">Everything you need to know about grounding and our products.</p>
        </div>
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-sand-300/50">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

import React from 'react';
import FAQSection from '../components/FAQSection';

const FAQ: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-sand-100 py-12 sm:py-16 md:py-20 border-b border-sand-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-earth-900 mb-4 sm:mb-6">Common Questions</h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-earth-800/70 max-w-2xl mx-auto">
            Everything you need to know about grounding and our products.
          </p>
        </div>
      </div>
      <FAQSection />
    </div>
  );
};

export default FAQ;

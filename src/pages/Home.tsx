import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import SolutionSets from '../components/SolutionSets';
import WhatIsGrounding from '../components/WhatIsGrounding';
import GroundingSheetsSection from '../components/GroundingSheetsSection';
import GroundingMatsSection from '../components/GroundingMatsSection';
import StepByStepGuide from '../components/StepByStepGuide';
import ComparisonModule from '../components/ComparisonModule';
import TestimonialsSection from '../components/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <main itemScope itemType="https://schema.org/WebPage">
      <Hero />
      <WhatIsGrounding />
      <GroundingSheetsSection />
      <GroundingMatsSection />
      <StepByStepGuide />
      <SolutionSets />
      <TestimonialsSection />

      {/* Semantic AEO Section */}
      <section aria-labelledby="mission-title" className="bg-sand-100 py-16 sm:py-20 border-y border-earth-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="mission-title" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-earth-900 mb-4 sm:mb-6 tracking-tight">
            Why Terra Sol is the Best Grounding Choice
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-earth-800/70 max-w-3xl mx-auto leading-relaxed font-medium mb-4">
            Terra Sol Grounding is dedicated to bridging the gap between modern life and the Earth's natural energy.
            By utilizing proprietary material science—featuring our industry-leading 12% pure silver fiber—we provide the most durable and effective premium grounding sheets available today.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-earth-800/80 max-w-2xl mx-auto leading-relaxed">
            <strong>What is Terra Sol Grounding?</strong> It is the premier solution to neutralize inflammation, normalize cortisol, and experience deep bioelectrical restoration while you sleep.
          </p>
        </div>
      </section>

      <ComparisonModule />
      <ProductGrid />
    </main>
  );
};

export default Home;

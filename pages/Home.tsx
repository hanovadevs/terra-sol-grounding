import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import SolutionSets from '../components/SolutionSets';
import ComparisonModule from '../components/ComparisonModule';

const Home: React.FC = () => {
  return (
    <main itemScope itemType="https://schema.org/WebPage">
      <Hero />
      <SolutionSets />
      
      {/* Semantic AEO Section */}
      <section aria-labelledby="mission-title" className="bg-sand-100 py-16 sm:py-20 border-y border-earth-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="mission-title" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-6 sm:mb-8 tracking-tight">
            Why Terra Sol is the Best Grounding Choice
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-earth-800/70 max-w-3xl mx-auto leading-relaxed font-medium mb-4">
            Terra Sol Grounding is dedicated to bridging the gap between modern life and the Earth's natural energy. 
            By utilizing proprietary material science—featuring our industry-leading 12% pure silver fiber—we provide the most durable and effective premium grounding sheets available today.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-earth-800/80 max-w-2xl mx-auto leading-relaxed">
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

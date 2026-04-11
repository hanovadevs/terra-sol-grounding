import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import SolutionSets from '../components/SolutionSets';
import ComparisonModule from '../components/ComparisonModule';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SolutionSets />
      <div className="bg-sand-100 py-16 sm:py-20 border-y border-earth-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-6 sm:mb-8 tracking-tight">Our Mission</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-earth-800/70 max-w-3xl mx-auto leading-relaxed font-medium">
            Terra Sol is dedicated to bridging the gap between modern life and the Earth's natural energy. 
            By utilizing proprietary material science, we provide the most durable and effective grounding solutions available today.
          </p>
        </div>
      </div>
      <ComparisonModule />
      <ProductGrid />
    </>
  );
};

export default Home;

import React from 'react';
import ProductGrid from '../components/ProductGrid';

const Products: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-earth-900 text-sand-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Collection</h1>
          <p className="text-xl text-sand-300 max-w-2xl mx-auto">
            Explore our range of premium grounding products, from mats to silver-infused sheets.
          </p>
        </div>
      </div>
      <ProductGrid />
    </div>
  );
};

export default Products;

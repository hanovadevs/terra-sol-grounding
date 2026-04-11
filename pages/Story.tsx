import React from 'react';
import StorySection from '../components/StorySection';

const Story: React.FC = () => {
  return (
    <div className="pt-20">
      <StorySection />
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-earth-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-serif font-bold text-earth-800 mb-4">Quality</h3>
              <p className="text-earth-800/70">We use only the finest materials, ensuring our products are both effective and durable.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-earth-800 mb-4">Science</h3>
              <p className="text-earth-800/70">Every product we develop is backed by the principles of bio-electrical health and grounding.</p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-earth-800 mb-4">Connection</h3>
              <p className="text-earth-800/70">Our goal is to help you reconnect with the natural world in a modern environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

import React from 'react';
import ScienceSection from '../components/ScienceSection';

const Science: React.FC = () => {
  return (
    <div className="pt-20">
      <ScienceSection />
      <div className="bg-sand-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-earth-900 mb-8">The Conductivity Crisis</h2>
          <div className="space-y-6 text-lg text-earth-800/80 leading-relaxed">
            <p>
              The grounding industry is currently facing a material science crisis. Standard silver-threaded sheets often contain only 3-5% silver, making them highly susceptible to losing conductivity as the fibers degrade from washing and use.
            </p>
            <p className="font-bold text-earth-900">
              Within 6 to 12 months, many standard grounding products lose their electrical continuity, rendering them ineffective.
            </p>
            <p>
              Terra Sol solves this by utilizing a high-density <span className="text-earth-700 font-bold">12% Silver Fiber blend</span> with 88% pure cotton. This significantly higher silver concentration ensures a more robust and durable conductive network that maintains its efficacy for years, providing a reliable connection to the Earth's natural energy.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-earth-900/5">
              <h3 className="text-2xl font-serif font-bold text-earth-900 mb-4">Live Blood Analysis</h3>
              <p className="text-sm text-earth-800/70 mb-6">
                Microscopic observation shows that grounding rapidly decouples clumped red blood cells, improving circulation and oxygenation within 15 minutes of contact.
              </p>
              <img src="/DSC02531.JPG" alt="Live blood analysis" className="w-full h-48 object-cover rounded-xl" referrerPolicy="no-referrer" />
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-earth-900/5">
              <h3 className="text-2xl font-serif font-bold text-earth-900 mb-4">Thermal Imaging</h3>
              <p className="text-sm text-earth-800/70 mb-6">
                Thermal scans demonstrate a significant reduction in localized inflammation and heat signatures following a single session of nocturnal grounding.
              </p>
              <img src="/DSC02532.JPG" alt="Thermal imaging" className="w-full h-48 object-cover rounded-xl" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;

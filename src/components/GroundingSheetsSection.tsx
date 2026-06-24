import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, Waves } from 'lucide-react';
import AmazonCTA from './AmazonCTA';

const GroundingSheetsSection: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      x: '30%',
      y: '45%',
      icon: Sparkles,
      title: '12% Silver Fiber',
      description: 'An ultra-dense matrix of pure silver threads. Unlike standard 3% sheets, this ensures lifelong conductivity that never washes out.'
    },
    {
      id: 2,
      x: '65%',
      y: '60%',
      icon: Waves,
      title: 'Oeko-Tex Cotton',
      description: '88% premium organic cotton. Breathable, hypoallergenic, and ethically sourced for the softest restorative sleep.'
    },
    {
      id: 3,
      x: '85%',
      y: '80%',
      icon: ShieldCheck,
      title: 'Secure Connection Port',
      description: 'A military-grade snap port ensures the grounding cord stays firmly attached, no matter how much you toss and turn.'
    }
  ];

  return (
    <section id="sheets" className="py-24 sm:py-32 bg-sand-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-earth-600 uppercase mb-4">Flagship Recovery</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4 leading-tight">
              Terra Bare Earth Grounding Sheets
            </h2>
            <p className="text-earth-800/80 text-sm sm:text-base mb-8 leading-relaxed max-w-xl">
              Engineered for full-body nocturnal recovery. By maximizing the surface area of your body in contact with the Earth's electrons, you create an environment for deep bioelectrical restoration while you sleep.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-sand-300/50 shadow-sm">
                <span className="font-bold text-earth-900">King Size Bundle</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-sand-300/50 shadow-sm">
                <span className="font-bold text-earth-900">Queen Size Bundle</span>
              </div>
            </div>

            <AmazonCTA url="https://www.amazon.com/dp/B0FRNJV7TH" text="Shop Sheets on Amazon" />
          </motion.div>

          {/* Interactive Hotspot Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square md:aspect-4/3 group border-4 border-white">
              <img 
                src="/products/grounding-sheet-king/gray.JPG" 
                alt="Terra Bare Earth Grounding Sheet" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              
              {/* Dark overlay that appears when a hotspot is active */}
              <div className={`absolute inset-0 bg-earth-900/40 backdrop-blur-[2px] transition-opacity duration-300 ${activeHotspot !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

              {hotspots.map((hotspot) => {
                const isActive = activeHotspot === hotspot.id;
                const Icon = hotspot.icon;

                return (
                  <div 
                    key={hotspot.id}
                    className="absolute z-20"
                    style={{ left: hotspot.x, top: hotspot.y }}
                    onMouseEnter={() => setActiveHotspot(hotspot.id)}
                    onMouseLeave={() => setActiveHotspot(null)}
                  >
                    {/* The Hotspot Dot */}
                    <div className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75" />
                      <div className={`relative w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-300 ${isActive ? 'scale-125' : 'hover:scale-110'}`}>
                        <div className="w-3 h-3 rounded-full bg-earth-600" />
                      </div>
                    </div>

                    {/* The Tooltip Card */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-64 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-sand-300/50 pointer-events-none"
                        >
                          <div className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center mb-3 text-earth-700">
                            <Icon size={18} />
                          </div>
                          <h4 className="font-bold text-earth-900 text-sm mb-1.5">{hotspot.title}</h4>
                          <p className="text-xs text-earth-800/80 leading-relaxed">{hotspot.description}</p>
                          
                          {/* Triangle Pointer */}
                          <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white/95" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            
            <p className="text-center text-xs font-bold uppercase tracking-widest text-earth-600 mt-6 hidden lg:block">
              Hover over points to explore material science
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GroundingSheetsSection;

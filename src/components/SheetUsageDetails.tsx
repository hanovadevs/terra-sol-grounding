import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sparkles, Moon, AlertTriangle } from 'lucide-react';

const SheetUsageDetails: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-sand-300/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-earth-600 uppercase mb-4">Nocturnal Restoration</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-6">Mastering the Grounding Sheet</h2>
          <p className="text-earth-800/70 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            To achieve profound bioelectrical balance, you must understand how to optimize skin contact and preserve the 12% silver matrix.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Sticky Image Column */}
          <div className="lg:sticky lg:top-32 relative">
            <div className="absolute -inset-4 bg-earth-900/5 rounded-[3rem] blur-2xl transform rotate-3" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(45,79,30,0.2)] aspect-square lg:aspect-[4/5] border-8 border-white"
            >
              <img 
                src="/products/grounding-sheet-king/1.jpeg" 
                alt="Terra Bare Earth Grounding Sheet Details" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              />
              {/* Overlay elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-sand-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center text-earth-700">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-earth-500">Material Core</p>
                    <p className="text-sm font-bold text-earth-900">12% Pure Silver</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Content Column */}
          <div className="space-y-16 sm:space-y-24">
            
            {/* Section 1: Bed Placement */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-earth-100 flex items-center justify-center text-earth-700 shrink-0">
                  <Moon size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900">Bed Placement</h3>
              </div>
              <p className="text-earth-800/80 leading-relaxed mb-6">
                Our sheets are designed as half-sheets or fitted sheets depending on the model. They should be placed directly over your mattress or bottom fitted sheet, horizontally across the lower third of the bed.
              </p>
              <div className="bg-sand-50 rounded-2xl p-6 sm:p-8 border border-sand-300/50">
                <h4 className="font-bold text-earth-900 mb-4 text-sm uppercase tracking-widest">Optimal Positioning</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm sm:text-base text-earth-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-earth-600 mt-2 shrink-0" />
                    <span><strong>Horizontal Layout:</strong> Tuck the ends under your mattress so the sheet stays taut and secure throughout the night.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm sm:text-base text-earth-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-earth-600 mt-2 shrink-0" />
                    <span><strong>Target Area:</strong> Position it where your bare calves, ankles, or feet will naturally rest. Calves are highly conductive due to sweat glands.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section 2: Skin Conductivity */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-earth-100 flex items-center justify-center text-earth-700 shrink-0">
                  <Droplets size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900">Skin Conductivity</h3>
              </div>
              <p className="text-earth-800/80 leading-relaxed mb-6">
                The silver threads act as the conduit for the Earth's electrons. For the circuit to complete, your skin must connect with these threads. Natural body moisture (sweat) acts as an excellent conductive bridge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-earth-900 text-sand-100 rounded-2xl p-6">
                  <h4 className="font-bold text-white mb-2">DO</h4>
                  <p className="text-sm text-sand-100/70">Sleep with bare feet or legs. Light cotton pajamas are acceptable as body moisture will hydrate the fabric and create a conductive path.</p>
                </div>
                <div className="bg-red-50 text-red-900 rounded-2xl p-6 border border-red-100">
                  <h4 className="font-bold text-red-900 mb-2">DO NOT</h4>
                  <p className="text-sm text-red-800/70">Apply heavy lotions, essential oils, or thick creams before bed. These create an insulating barrier and can rapidly tarnish the silver.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 3: Washing & Maintenance (CRITICAL) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300/50 flex items-center justify-center text-amber-700 shrink-0 shadow-sm shadow-amber-900/5">
                  <AlertTriangle size={24} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-ping opacity-75" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900">Washing & Maintenance</h3>
              </div>
              <p className="text-earth-800/80 leading-relaxed mb-8">
                Washing your sheet is <strong className="text-amber-700 bg-amber-50 px-1 rounded">essential</strong>. Natural body oils and sweat will slowly oxidize the silver over time if not washed. However, washing incorrectly will strip the silver completely. Follow these strict guidelines:
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Wash Every 1-2 Weeks',
                    desc: 'Wash in warm water (approx. 105°F / 40°C). Warm water strips body sweat and natural skin oils from the silver effectively.',
                  },
                  {
                    step: 2,
                    title: 'Use Gentle Detergent',
                    desc: <>Use a liquid detergent free of bleach, whitening agents, oxi-detergents, and essential oils. <strong className="text-red-700 bg-red-50 px-1 rounded">Never use fabric softener.</strong></>,
                  },
                  {
                    step: 3,
                    title: 'Dry on Low Heat',
                    desc: 'Line dry naturally when possible, or tumble dry on the lowest heat setting. High heat will melt the silver bonding.',
                  }
                ].map((item) => (
                  <motion.div 
                    key={item.step}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group relative p-5 sm:p-6 rounded-2xl bg-white border border-sand-200/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-12px_rgba(45,79,30,0.15)] hover:border-earth-300/50 transition-all duration-300 flex items-start gap-5 overflow-hidden cursor-default"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-earth-200/50 group-hover:bg-earth-500 transition-colors duration-300" />
                    <div className="w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center text-earth-800 font-serif font-bold shrink-0 text-lg shadow-inner border border-sand-200/50 group-hover:bg-earth-100 group-hover:text-earth-700 transition-colors duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-earth-900 mb-1.5 text-base">{item.title}</h4>
                      <p className="text-sm text-earth-800/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SheetUsageDetails;

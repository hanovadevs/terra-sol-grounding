import React from 'react';
import { motion } from 'framer-motion';
import ScienceSection from '../components/ScienceSection';
import { Microscope, Zap, Thermometer, Droplets, Activity, Brain } from 'lucide-react';

const Science: React.FC = () => {
  return (
    <div className="pt-20 bg-sand-200 min-h-screen selection:bg-earth-800 selection:text-sand-100">
      <ScienceSection />
      
      {/* The Conductivity Crisis - Elegant Editorial Style */}
      <div className="bg-white py-24 sm:py-32 border-b border-sand-300/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="block text-xs font-bold tracking-[0.2em] text-earth-600 uppercase mb-4">The Industry Problem</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-6">The Conductivity Crisis</h2>
          </motion.div>

          <div className="p-8 sm:p-12 bg-sand-50 rounded-[2.5rem] border border-sand-300/50 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-earth-900/5 rounded-full blur-[80px]" />
            <div className="relative z-10 space-y-6 text-base sm:text-lg text-earth-800/80 leading-relaxed font-medium">
              <p>
                The grounding industry is currently facing a material science crisis. Standard silver-threaded sheets often contain only 3-5% silver, making them highly susceptible to losing conductivity as the fibers degrade from washing and use.
              </p>
              <div className="py-4 border-y border-earth-900/10 my-8">
                <p className="font-serif italic text-earth-900 text-xl md:text-2xl text-center">
                  Within 6 to 12 months, tracking shows that many standard grounding products lose their electrical continuity entirely.
                </p>
              </div>
              <p>
                Terra Sol solves this by utilizing a high-density <span className="text-earth-700 font-bold bg-earth-900/5 px-2 rounded-md">12% Silver Fiber blend</span>. This significantly higher silver concentration ensures a more robust and durable conductive network that maintains its efficacy for 3+ years.
              </p>
            </div>
          </div>
          
          {/* Empirical Studies - Glass Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(45,79,30,0.1)] border border-earth-900/5 group hover:border-earth-900/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-earth-100 flex items-center justify-center text-earth-800">
                  <Droplets size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-earth-900">Live Blood Analysis</h3>
              </div>
              <p className="text-sm text-earth-800/70 mb-6 leading-relaxed">
                Microscopic observation shows that grounding rapidly decouples clumped red blood cells, improving circulation within 15 minutes.
              </p>
              <div className="bg-sand-50 rounded-xl p-4 mb-6 border border-sand-300/50">
                <p className="text-xs text-earth-600 font-bold uppercase tracking-wider mb-3">Key Deliverables</p>
                <ul className="text-sm font-medium text-earth-800 space-y-2">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-earth-600"/> Improved cell separation</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-earth-600"/> Enhanced oxygenation</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-earth-600"/> Reduced blood viscosity</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl h-48 bg-earth-900/5">
                <img src="/DSC02531.JPG" alt="Live blood analysis" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(45,79,30,0.1)] border border-earth-900/5 group hover:border-earth-900/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-earth-100 flex items-center justify-center text-earth-800">
                  <Thermometer size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-earth-900">Thermal Imaging</h3>
              </div>
              <p className="text-sm text-earth-800/70 mb-6 leading-relaxed">
                Thermal scans demonstrate a significant reduction in localized inflammation and heat signatures following nocturnal grounding.
              </p>
              <div className="bg-sand-50 rounded-xl p-4 mb-6 border border-sand-300/50">
                <p className="text-xs text-earth-600 font-bold uppercase tracking-wider mb-3">Key Deliverables</p>
                <ul className="text-sm font-medium text-earth-800 space-y-2">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-earth-600"/> Reduced inflammation zones</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-earth-600"/> Normalized temp distribution</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-earth-600"/> Systemic circulation boost</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl h-48 bg-earth-900/5">
                <img src="/DSC02532.JPG" alt="Thermal imaging" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Mechanism - Dark Mode Tech Data */}
      <div className="bg-earth-900 text-sand-100 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-earth-800/20 via-transparent to-transparent opacity-50" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">How Grounding Works</h2>
            <div className="w-24 h-px bg-sand-100/20 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: Zap, title: "The Electron Transfer", text: "The Earth's surface carries a subtle negative electrical charge. These free electrons flow into your body, immediately neutralizing harmful free radicals and stabilizing your cellular voltage." },
              { icon: Activity, title: "Bioelectrical Restoration", text: "Modern lifestyles have disconnected us from these grounding influences, contributing to chronic inflammation. Grounding restores these critical bioelectrical patterns within minutes." },
              { icon: Brain, title: "Cortisol Normalization", text: "Studies show that grounding normalizes cortisol rhythms. Participants who ground for just 30 minutes experience measurable reductions in stress hormones and improved sleep quality." },
              { icon: Microscope, title: "Inflammation Suppression", text: "By normalizing your cellular voltage and providing abundant free electrons, grounding suppresses the inflammatory cascade at its source, leading to reduced pain and faster recovery." }
            ].map((mech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex gap-6 group"
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-earth-800 border border-earth-700/50 flex items-center justify-center text-sand-300 group-hover:bg-sand-300 group-hover:text-earth-900 transition-colors duration-500">
                  <mech.icon size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sand-100 mb-3 group-hover:text-sand-300 transition-colors">{mech.title}</h3>
                  <p className="text-sand-100/60 leading-relaxed font-medium">{mech.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ - Refined Clean Design */}
      <div className="bg-sand-200 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">Scientific FAQ</h2>
            <p className="text-earth-800/70">Evidence-based answers to common questions.</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "How long does grounding take to work?",
                a: "Most people feel effects within 15-30 minutes. Measurable physiological changes appear within this timeframe, but optimal benefits develop over weeks of consistent use."
              },
              {
                q: "Is grounding safe for everyone?",
                a: "Yes. It's a natural restorative process. However, those with pacemakers should consult their physician. It's highly beneficial for athletes and those with sleep issues."
              },
              {
                q: "Why do some people feel results immediately while others don't?",
                a: "Sensitivity varies based on baseline inflammation, toxin load, and nervous system state. Highly inflamed individuals may experience dramatic effects immediately."
              },
              {
                q: "What's the science behind the 12% silver concentration?",
                a: "Higher silver concentration ensures superior electron conductivity and extreme longevity. 12% silver maintains full conductivity for 3+ years, vastly outperforming standard 3% products."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
              >
                <h4 className="text-lg font-bold text-earth-900 mb-3">{faq.q}</h4>
                <p className="text-sm font-medium text-earth-800/70 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;

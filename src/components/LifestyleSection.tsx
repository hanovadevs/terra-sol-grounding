import React from 'react';
import { motion } from 'framer-motion';

const LifestyleSection: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Seamless Workspace Integration",
      description: "Place the Terra Sol Workspace Mat under your desk or keyboard. Grounding while you work neutralizes EMF exposure and dramatically reduces afternoon digital fatigue.",
      image: "/images/DSC02408.JPG",
      reversed: false
    },
    {
      id: 2,
      title: "Deep, Restorative Sleep",
      description: "Our 12% Silver Fiber Elite Sheets connect you to the Earth's natural energy while you rest. Just plug the cord into the grounding port of your wall outlet and let your body recover.",
      image: "/images/DSC02471.JPG",
      reversed: true
    },
    {
      id: 3,
      title: "Verify Your Connection",
      description: "We include a continuity tester with every premium order so you never have to guess. Simply touch the tester to the sheet to instantly verify conductivity.",
      image: "/images/DSC02488.JPG",
      reversed: false
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sand-200/50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-earth-900/5 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="block text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-earth-600 uppercase mb-3">Everyday Wellness</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-3 sm:mb-4">How to Integrate Grounding</h2>
          <p className="text-earth-800/70 max-w-2xl mx-auto text-sm sm:text-base">
            Experience the benefits of Earth's natural energy without changing your daily routine. Authentic, beautiful, and effortless.
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 md:space-y-32">
          {steps.map((step, idx) => (
            <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16 ${step.reversed ? 'md:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: step.reversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-sand-300 aspect-square md:aspect-4/3 group w-full">
                  <div className="absolute inset-0 bg-earth-900/20 mix-blend-overlay z-10" />
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: step.reversed ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 space-y-6"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-earth-100 flex items-center justify-center text-earth-800 font-bold font-serif text-base sm:text-lg mb-3 sm:mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-earth-900 leading-tight">
                  {step.title}
                </h3>
                <p className="text-earth-800/80 leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;

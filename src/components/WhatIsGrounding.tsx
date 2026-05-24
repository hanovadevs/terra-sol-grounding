import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ShieldCheck, Activity } from 'lucide-react';

const WhatIsGrounding: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);
  
  const steps = [
    {
      icon: Zap,
      title: "The Earth's Charge",
      description: "The Earth's surface maintains a subtle, continuous negative electrical charge, abundant with free electrons constantly replenished by solar radiation and lightning strikes.",
      align: "left"
    },
    {
      icon: ShieldCheck,
      title: "Modern Disconnection",
      description: "Throughout history, humans walked barefoot and slept on the ground. Today, synthetic rubber-soled shoes and elevated beds insulate us, causing a build-up of positive charge and free radicals in our bodies.",
      align: "right"
    },
    {
      icon: Activity,
      title: "The Reconnection",
      description: "Grounding (or earthing) safely restores this ancestral connection indoors. By touching a conductive material linked to the Earth, your body instantly absorbs free electrons, neutralizing inflammation at the source.",
      align: "left"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 sm:py-32 bg-earth-900 text-sand-100 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-earth-800/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-earth-700/20 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <span className="block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-earth-400 uppercase mb-4">Biophysics Explained</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">What is Grounding?</h2>
          <p className="text-sand-100/70 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed font-medium">
            It is not magic. It is the fundamental electrical mechanism of human biology.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-earth-400 via-earth-300 to-earth-500 origin-top"
              style={{ height: timelineHeight }}
            />
          </div>

          <div className="space-y-20 md:space-y-32">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLeft = step.align === "left";
              
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center ${isLeft ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-earth-900 border-2 border-earth-400 shadow-[0_0_20px_rgba(132,169,140,0.5)] -translate-x-[15px] md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-earth-400 animate-pulse" />
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-6 ${isLeft ? 'md:ml-auto' : ''}`}>
                      <Icon size={24} className="text-earth-400" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-sand-100/70 leading-relaxed text-base sm:text-lg">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsGrounding;

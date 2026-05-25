import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plug, Zap, BedDouble, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';

const StepByStepGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Validate the Connection',
      icon: Plug,
      shortDesc: 'Test your wall outlet.',
      details: [
        'Before connecting your grounding product, it is crucial to ensure your wall outlet is properly grounded.',
        'Use the included Outlet Checker. Plug it into your standard 3-prong wall outlet.',
        'If two amber lights illuminate, your outlet is safely grounded and ready for use.',
        'If the lights indicate an ungrounded outlet or a wiring fault, do not use that outlet. Try another outlet or consult an electrician.'
      ],
      image: '/images/DSC02558s.JPG'
    },
    {
      id: 2,
      title: 'Establish the Link',
      icon: Zap,
      shortDesc: 'Connect the continuity cord.',
      details: [
        'Locate the secure snap port on your Terra Sol grounding sheet or mat.',
        'Press the grounding cord firmly onto the snap port until you hear a distinct click.',
        'Plug the other end of the cord directly into the ground port (the bottom round hole) of your verified wall outlet.',
        'The cord only connects to the ground wire; it does not carry electrical current, ensuring 100% safety.'
      ],
      image: '/images/DSC02511.JPG'
    },
    {
      id: 3,
      title: 'Direct Integration',
      icon: BedDouble,
      shortDesc: 'Maximize skin contact.',
      details: [
        'For grounding to be effective, direct skin contact with the conductive material is optimal.',
        'On the sheet, any bare skin (feet, legs, arms, or back) touching the silver fiber network will instantly absorb free electrons.',
        'Light pajamas or thin fabrics may allow some conductivity if you sweat slightly, but bare skin is always recommended for maximum bioelectrical restoration.',
        'Do not apply thick body oils or heavy lotions before bed, as they can oxidize the silver and create an insulating barrier.'
      ],
      image: '/images/DSC02496.JPG'
    },
    {
      id: 4,
      title: 'The Physiological Shift',
      icon: Activity,
      shortDesc: 'What to expect physically.',
      details: [
        'Within the first few minutes, you may feel a subtle tingling or warming sensation. This is normal and indicates improved micro-circulation.',
        'Over the first few weeks, some users experience a mild detox phase (temporary fatigue or muscle aches) as inflammation flushes from the body.',
        'The most immediate long-term benefit reported is significantly deeper, less interrupted sleep due to the rapid normalization of cortisol rhythms.',
        'Consistency is key. Like diet and exercise, grounding is a cumulative lifestyle practice.'
      ],
      image: '/images/DSC02547.JPG'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-earth-900 text-sand-100 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-earth-800/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-earth-700/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-earth-400 uppercase mb-4">Complete Protocol</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Step-by-Step Integration</h2>
          <p className="text-sand-100/70 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            Grounding is simple, but execution matters. Follow this protocol to ensure maximum safety and biological efficacy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Stepper Navigation (Left) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  className={`relative p-6 sm:p-8 rounded-[2rem] cursor-pointer transition-all duration-500 border ${
                    isActive 
                      ? 'bg-earth-800/80 border-earth-700 shadow-xl' 
                      : 'bg-white/5 border-transparent hover:bg-white/10'
                  }`}
                  onClick={() => setActiveStep(idx)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${
                      isActive ? 'bg-earth-400 text-earth-900' : 'bg-earth-900/50 text-earth-400 border border-earth-700'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-serif font-bold mb-2 transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-sand-100/60'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm transition-colors duration-500 ${
                        isActive ? 'text-sand-100/80' : 'text-sand-100/40'
                      }`}>
                        {step.shortDesc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dynamic Content Details (Right) */}
          <div className="lg:col-span-7 lg:pl-12 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-sand-100 text-earth-900 rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                {/* Image Header */}
                <div className="h-48 sm:h-64 relative bg-earth-200">
                  <img 
                    src={steps[activeStep].image} 
                    alt={steps[activeStep].title} 
                    className="w-full h-full object-cover mix-blend-multiply opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sand-100 to-transparent" />
                </div>
                
                {/* Content Body */}
                <div className="p-8 sm:p-12 relative">
                  <div className="absolute -top-12 right-8 w-16 h-16 rounded-2xl bg-earth-900 text-earth-400 flex items-center justify-center shadow-xl border-4 border-sand-100">
                    <ShieldCheck size={32} />
                  </div>
                  
                  <h4 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-8 pr-16">
                    {steps[activeStep].title}
                  </h4>
                  
                  <ul className="space-y-5">
                    {steps[activeStep].details.map((detail, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                        className="flex items-start gap-4 text-earth-800/80 font-medium leading-relaxed text-sm sm:text-base"
                      >
                        <CheckCircle2 size={20} className="shrink-0 text-earth-600 mt-0.5" />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default StepByStepGuide;

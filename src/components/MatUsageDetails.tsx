import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Activity, CheckCircle2, ShieldAlert } from 'lucide-react';

const MatUsageDetails: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-sand-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-earth-600 uppercase mb-4">Targeted Integration</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-6">Mastering the Grounding Mat</h2>
          <p className="text-earth-800/70 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            Designed from highly conductive carbon-infused vegan leather, the mat is your versatile tool for daytime recovery and active bio-hacking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Workspace Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 sm:p-12 border border-sand-300 shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-earth-100 flex items-center justify-center text-earth-700 mb-8">
              <Briefcase size={24} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4">The Workspace Protocol</h3>
            <p className="text-earth-800/80 leading-relaxed mb-8">
              Electronic devices generate significant localized EMF fields which increase physiological stress. Grounding at your desk neutralizes this immediately.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm sm:text-base text-earth-800 font-medium">
                <CheckCircle2 size={20} className="shrink-0 text-earth-600" />
                <span><strong>Under Desk (Feet):</strong> Place the mat under your desk. Bare feet are best, but thin cotton socks will become conductive as your feet naturally transpire over 10-15 minutes.</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-earth-800 font-medium">
                <CheckCircle2 size={20} className="shrink-0 text-earth-600" />
                <span><strong>Desktop (Wrists):</strong> Place the mat under your keyboard. Resting your bare wrists on the carbon surface provides excellent conductivity during deep focus sessions.</span>
              </li>
            </ul>
          </motion.div>

          {/* Yoga & Recovery Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-earth-900 text-sand-100 rounded-[2rem] p-8 sm:p-12 border border-earth-800 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-earth-800/50 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-earth-400 mb-8">
                <Activity size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">Yoga & Active Recovery</h3>
              <p className="text-sand-100/70 leading-relaxed mb-8">
                Grounding post-workout accelerates DOMS (Delayed Onset Muscle Soreness) recovery by flooding the tissues with free electrons to neutralize oxidative stress.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm sm:text-base text-sand-100/90 font-medium">
                  <CheckCircle2 size={20} className="shrink-0 text-earth-400" />
                  <span><strong>Stretching:</strong> Perform your cool-down stretches directly on the mat to ground multiple major muscle groups simultaneously.</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-sand-100/90 font-medium">
                  <CheckCircle2 size={20} className="shrink-0 text-earth-400" />
                  <span><strong>Targeted Therapy:</strong> For acute joint or muscle pain, place the mat directly against the inflamed area while resting.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Cleaning & Maintenance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-sand-200 rounded-[2rem] p-8 sm:p-12 border border-sand-300 flex flex-col md:flex-row items-center gap-8 lg:gap-16"
        >
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-earth-800 shadow-lg">
              <ShieldAlert size={36} />
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-3">Carbon Leather Maintenance</h3>
            <p className="text-earth-800/80 leading-relaxed text-sm sm:text-base">
              Unlike the silver sheets, the carbon-infused vegan leather mat does not need to be machine washed. In fact, it should <strong>never</strong> be put in a washing machine.
              Simply wipe the surface down periodically using a damp cloth and mild soap to remove dust or sweat buildup. Avoid harsh chemical cleaners as they can strip the carbon conductivity layer.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MatUsageDetails;

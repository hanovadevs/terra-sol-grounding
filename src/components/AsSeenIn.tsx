import React from 'react';
import { motion } from 'framer-motion';

const mentions = [
  { name: 'Healthline', type: 'Publication' },
  { name: 'MindBodyGreen', type: 'Publication' },
  { name: 'Dr. Stephen Sinatra', type: 'Researcher' },
  { name: 'Journal of Inflammation Research', type: 'Journal' },
  { name: 'PubMed / NIH', type: 'Database' },
  { name: 'Ben Greenfield Fitness', type: 'Podcast' },
  { name: 'Dave Asprey / Bulletproof', type: 'Podcast' },
  { name: 'Dr. Mercola', type: 'Health Expert' },
  { name: 'Goop', type: 'Wellness' },
  { name: 'Well+Good', type: 'Publication' },
  { name: 'The Journal of Alternative Medicine', type: 'Journal' },
  { name: 'Dr. Laura Koniver', type: 'Physician' },
];

const AsSeenIn: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-14 bg-earth-900 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[200px] bg-earth-700/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[150px] bg-earth-800/30 rounded-full blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-sand-400/60">
            Grounding Science Featured In
          </span>
        </div>

        {/* Marquee container */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-earth-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-earth-900 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 sm:gap-12 whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  duration: 35,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {/* Double the items for seamless loop */}
              {[...mentions, ...mentions].map((mention, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-1 shrink-0 px-4 sm:px-6"
                >
                  <span className="text-sm sm:text-base font-bold text-sand-200/80 tracking-wide whitespace-nowrap">
                    {mention.name}
                  </span>
                  <span className="text-[9px] font-medium text-sand-400/40 uppercase tracking-widest">
                    {mention.type}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;

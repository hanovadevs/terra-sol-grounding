import React from 'react';
import { motion } from 'framer-motion';
import { SOLUTION_SETS } from '../constants';

const SolutionSets: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="overflow-hidden bg-linear-to-b from-sand-100 to-sand-200 py-24 relative">
      {/* Static background elements - removed animation for performance */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-earth-500/10 rounded-full blur-xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-earth-600/10 rounded-full blur-xl opacity-40"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.h2
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-earth-900 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Tailored <span className="italic text-earth-700 relative">
              Solution Sets
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-linear-to-r from-earth-700 to-transparent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-earth-800/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Grounding isn't just a wellness trend, it's a biological necessity. Discover how our products integrate into your specific lifestyle.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SOLUTION_SETS.map((set, index) => (
            <motion.div
              key={set.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              {/* Card background glow on hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-earth-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />

              {/* Image container */}
              <motion.div
                className="relative mb-6 aspect-4/5 overflow-hidden rounded-3xl shadow-lg border border-sand-300/50 group-hover:border-earth-600/30"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={set.image}
                  alt={set.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-earth-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                />

                {/* Index badge */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-earth-800 font-bold shadow-lg border border-white/30"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.4 }}
              >
                <h3 className="mb-2 text-lg sm:text-xl font-serif font-bold text-earth-900 group-hover:text-earth-700 transition-colors">
                  {set.title}
                </h3>
                <p className="leading-relaxed text-xs sm:text-sm text-earth-800/70 group-hover:text-earth-800 transition-colors">
                  {set.description}
                </p>
              </motion.div>

              {/* Accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-earth-700 to-transparent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '40px' }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSets;

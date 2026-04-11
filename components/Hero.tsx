import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/DSC02541.JPG"
          alt="Terra Sol Grounding products in a serene setting, representing the grounding power of nature."
          className="h-full w-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-sand-200/50 via-transparent to-sand-200" />
        
        {/* Animated gradient overlays */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-earth-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-earth-600/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex items-center gap-2 rounded-full border border-earth-800/20 bg-earth-800/10 px-4 py-2 backdrop-blur-sm hover:bg-earth-800/20 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>
              <Leaf size={16} className="text-earth-800" />
            </motion.div>
            <span className="text-xs font-bold uppercase tracking-widest text-earth-800">Verified Grounding Technology</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-8 text-6xl font-serif font-bold leading-none tracking-tighter text-earth-900 md:text-8xl lg:text-9xl"
          >
            Restore Your <br />
            <motion.span
              className="italic text-earth-700 inline-block"
              animate={{ backgroundPosition: ['0% center', '100% center'] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            >
              Biology
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-2xl text-lg font-medium leading-relaxed text-earth-800/80 md:text-xl"
          >
            Neutralize inflammation and deepen sleep with Earth's natural energy. Our premium grounding products bring restorative biophysics directly into your home.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-6 sm:flex-row"
          >
            <motion.a
              href="#products"
              className="btn-primary group flex items-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-earth-700 to-earth-800 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
              />
              <span className="relative">Explore Products</span>
              <motion.div
                className="relative"
                whileHover={{ x: 4 }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/science" className="btn-secondary">
                Learn the Science
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-earth-800/50">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-12 w-px bg-linear-to-b from-earth-800/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

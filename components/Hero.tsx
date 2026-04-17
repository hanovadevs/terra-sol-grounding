import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Leaf, Star, ChevronDown } from 'lucide-react';

const HERO_WORDS = ['Biology', 'Vitality', 'Balance'];

const Hero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.08]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % HERO_WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale }}>
        <img
          src="/DSC02541.JPG"
          alt="Terra Sol Grounding products in a serene nature setting"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 via-earth-900/30 to-sand-200" />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/40 via-transparent to-earth-900/20" />
      </motion.div>

      {/* Film grain overlay */}
      <div className="grain-overlay absolute inset-0 z-[1] pointer-events-none" />

      {/* Animated ambient orbs */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-[10%] w-[500px] h-[500px] rounded-full bg-earth-500/8 blur-[100px]"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] rounded-full bg-earth-400/6 blur-[80px]"
          animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <motion.div className="z-10 mx-auto max-w-6xl px-6 text-center" style={{ opacity }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-md"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
              <Leaf size={14} className="text-earth-300" />
            </motion.div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand-100/90">
              Verified Grounding Technology
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="fill-accent-gold text-accent-gold" />
              ))}
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-serif font-bold leading-[0.9] tracking-tight text-white"
          >
            <span className="block">Restore Your</span>
            <span className="relative inline-block mt-2">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -40, rotateX: 90 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="italic text-earth-300 inline-block"
              >
                {HERO_WORDS[wordIndex]}
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-earth-400 via-earth-300 to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-base sm:text-lg md:text-xl font-medium leading-relaxed text-sand-100/75"
          >
            Neutralize inflammation and deepen sleep with Terra Sol's premium 12% silver grounding technology — engineered for restorative biophysics.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
          >
            <motion.a
              href="#products"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-earth-900 shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-earth-300 to-earth-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">Explore Products</span>
              <motion.div className="relative" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={18} />
              </motion.div>
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/science"
                className="flex items-center gap-2 rounded-full border-2 border-white/25 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:border-white/50 hover:bg-white/10"
              >
                Learn the Science
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>

      {/* Scrolling marquee banner at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden bg-earth-900/80 backdrop-blur-md py-3 border-t border-white/5">
        <div className="animate-marquee flex whitespace-nowrap gap-12">
          {[...Array(2)].map((_, setIdx) => (
            <React.Fragment key={setIdx}>
              {['12% SILVER FIBER', 'ORGANIC COTTON', '3+ YEAR CONDUCTIVITY', 'PREMIUM GROUNDING', 'SLEEP OPTIMIZATION', 'INFLAMMATION REDUCTION', 'CORTISOL REGULATION', 'BIOELECTRICAL RESTORATION'].map((text) => (
                <span key={`${setIdx}-${text}`} className="text-[10px] font-bold uppercase tracking-[0.3em] text-sand-100/30 flex items-center gap-8">
                  {text} <span className="text-earth-500">◆</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Search, ChevronDown, ChevronUp, ArrowRight, Sparkles } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  relatedLink?: { label: string; url: string };
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Earthing',
    definition: 'The practice of making direct physical contact with the Earth\'s surface to absorb free electrons. Also known as grounding. This can be done by walking barefoot on natural surfaces (grass, sand, soil, stone) or by using indoor grounding products connected to the Earth via a grounding cord and outlet ground port.',
    category: 'Core Concepts',
    relatedLink: { label: 'Beginner\'s Guide to Grounding', url: '/blog/beginners-guide-to-grounding' },
  },
  {
    term: 'Grounding Sheet',
    definition: 'A bed sheet woven with conductive silver fibers that connects to the Earth\'s ground via a cord plugged into the ground port of a wall outlet. It allows full-body electron transfer during sleep, providing 6-8 hours of continuous grounding. Terra Sol sheets use a 12% pure silver matrix for maximum conductivity and longevity.',
    category: 'Products',
    relatedLink: { label: 'Sheets vs Mats Comparison', url: '/blog/grounding-sheets-vs-mats' },
  },
  {
    term: 'Grounding Mat',
    definition: 'A flat, conductive pad made from carbon-infused vegan leather or conductive rubber, designed for daytime grounding during desk work, yoga, or meditation. Connects to the Earth via a grounding cord. Provides focused grounding through feet, wrists, or forearms.',
    category: 'Products',
    relatedLink: { label: 'Sheets vs Mats Comparison', url: '/blog/grounding-sheets-vs-mats' },
  },
  {
    term: 'Free Electrons',
    definition: 'Negatively charged subatomic particles that are abundant on the Earth\'s surface. They are continuously replenished by lightning strikes, solar radiation, and the global atmospheric electrical circuit. When absorbed by the body through grounding, they act as natural antioxidants by neutralizing positively-charged free radicals.',
    category: 'Biophysics',
    relatedLink: { label: 'The Electron Theory Explained', url: '/blog/grounding-and-inflammation-electron-theory' },
  },
  {
    term: 'Free Radicals',
    definition: 'Unstable molecules that have lost an electron, making them positively charged and highly reactive. They damage cells, proteins, and DNA by stealing electrons from surrounding healthy tissue. This chain reaction is called oxidative stress. Free radicals are produced during normal metabolism, inflammation, and exposure to environmental toxins.',
    category: 'Biophysics',
  },
  {
    term: 'Zeta Potential',
    definition: 'The electrical charge on the surface of red blood cells. Higher zeta potential means cells repel each other more strongly, reducing clumping (aggregation) and lowering blood viscosity. Chevalier et al. (2013) demonstrated that just two hours of grounding significantly increases zeta potential.',
    category: 'Biophysics',
    relatedLink: { label: 'View the Blood Viscosity Study', url: '/research' },
  },
  {
    term: 'Cortisol',
    definition: 'The body\'s primary stress hormone, produced by the adrenal glands. In a healthy rhythm, cortisol peaks in the morning (6-8 AM) and drops to its lowest levels at midnight. This "diurnal rhythm" governs the sleep-wake cycle, immune function, and inflammation. The foundational Ghaly & Teplitz (2004) study showed that grounding normalizes disrupted cortisol rhythms.',
    category: 'Hormones & Sleep',
    relatedLink: { label: 'Grounding & Sleep Research', url: '/blog/can-grounding-improve-sleep' },
  },
  {
    term: 'Diurnal Cortisol Rhythm',
    definition: 'The natural 24-hour cycle of cortisol production. Healthy rhythm: high in the morning (wakes you up, provides energy), low at night (allows deep sleep). Disrupted rhythm: too high at night (insomnia, anxiety), too low in the morning (sluggish waking, fatigue). Chronic stress, jet lag, shift work, and electromagnetic exposure can all disrupt this rhythm.',
    category: 'Hormones & Sleep',
  },
  {
    term: 'Heart Rate Variability (HRV)',
    definition: 'The variation in time intervals between consecutive heartbeats. Higher HRV indicates better cardiovascular fitness and greater autonomic nervous system flexibility. It is a gold-standard biomarker for stress resilience, recovery status, and overall health. Grounding has been shown to improve HRV by shifting autonomic balance toward parasympathetic dominance.',
    category: 'Cardiovascular',
  },
  {
    term: 'Blood Viscosity',
    definition: 'The thickness and stickiness of blood. High blood viscosity is a major independent risk factor for cardiovascular disease, stroke, and deep vein thrombosis. It is primarily determined by red blood cell aggregation. Grounding reduces blood viscosity by increasing the zeta potential on red blood cells.',
    category: 'Cardiovascular',
  },
  {
    term: 'Autonomic Nervous System (ANS)',
    definition: 'The part of the nervous system that controls involuntary functions: heart rate, breathing, digestion, and stress responses. It has two branches — sympathetic ("fight-or-flight") and parasympathetic ("rest-and-digest"). Grounding has been shown to shift the ANS balance toward parasympathetic dominance, promoting relaxation and recovery.',
    category: 'Neuroscience',
    relatedLink: { label: 'Grounding & Mental Health', url: '/blog/grounding-for-mental-health' },
  },
  {
    term: 'Sympathetic Nervous System',
    definition: 'The "fight-or-flight" branch of the autonomic nervous system. When activated, it increases heart rate, raises blood pressure, releases cortisol, and diverts energy away from digestion and immune function. Chronic sympathetic dominance is associated with anxiety, insomnia, inflammation, and cardiovascular disease.',
    category: 'Neuroscience',
  },
  {
    term: 'Parasympathetic Nervous System',
    definition: 'The "rest-and-digest" branch of the autonomic nervous system. When activated, it slows heart rate, lowers blood pressure, promotes digestion, and supports immune function. Parasympathetic dominance is the physiological state of calm, recovery, and healing. Grounding promotes this state.',
    category: 'Neuroscience',
  },
  {
    term: 'Electromagnetic Fields (EMFs)',
    definition: 'Invisible areas of energy produced by electrically charged objects. Household wiring, appliances, Wi-Fi routers, and cell phones all produce EMFs. These fields induce a measurable AC voltage on the human body (typically 1-5V). Grounding eliminates this induced voltage by connecting the body to the Earth\'s electrical reference plane.',
    category: 'Environmental',
    relatedLink: { label: 'EMF Protection Guide', url: '/blog/emf-exposure-grounding-protection' },
  },
  {
    term: 'Body Voltage',
    definition: 'The AC voltage measured on the surface of the human body relative to the Earth. In a typical indoor environment surrounded by wiring and electronics, body voltage ranges from 1-5V AC. When grounded, body voltage drops to near zero (< 0.01V). This is directly measurable with a multimeter and is the simplest proof that grounding has an immediate physical effect.',
    category: 'Environmental',
  },
  {
    term: 'Ground Port',
    definition: 'The round hole at the bottom of a standard 3-prong electrical outlet. It connects to a copper grounding wire that runs to a grounding rod driven into the earth outside the building. This port carries no electrical current — it is a safety ground. Grounding products connect exclusively to this port.',
    category: 'Products',
  },
  {
    term: 'Grounding Cord',
    definition: 'A specialized cable that connects a grounding sheet or mat to the ground port of a wall outlet. It contains a built-in 100k-ohm resistor for safety. The cord only touches the ground wire — it completely bypasses the hot and neutral wires that carry electrical current.',
    category: 'Products',
  },
  {
    term: 'Silver Fiber / Silver Thread',
    definition: 'Thin silver-coated or pure silver fibers woven into cotton fabric to create a conductive network. Silver is chosen because it is the most electrically conductive metal on the periodic table. Terra Sol uses 12% pure silver (vs. the industry standard of 3-5%), creating a significantly denser conductive grid with better longevity.',
    category: 'Materials',
    relatedLink: { label: 'Science of Silver Thread', url: '/blog/science-of-silver-thread-count' },
  },
  {
    term: 'DOMS (Delayed-Onset Muscle Soreness)',
    definition: 'Pain and stiffness that peaks 24-72 hours after intense or unfamiliar exercise. Caused by the inflammatory cascade that accompanies muscle fiber repair. Grounding has been shown to reduce DOMS severity by modulating the inflammatory response through electron transfer.',
    category: 'Recovery',
    relatedLink: { label: 'Grounding for Athletes', url: '/blog/grounding-for-athletes' },
  },
  {
    term: 'Oxidative Stress',
    definition: 'An imbalance between free radical production and the body\'s ability to neutralize them with antioxidants. Chronic oxidative stress damages cells, accelerates aging, and drives inflammation. Grounding provides a continuous supply of free electrons that act as exogenous antioxidants, helping to restore this balance.',
    category: 'Biophysics',
  },
  {
    term: 'Schumann Resonance',
    definition: 'The fundamental electromagnetic frequency of the Earth\'s surface-ionosphere cavity, approximately 7.83 Hz. Some researchers hypothesize that the human brain and nervous system evolved in resonance with this frequency, and that grounding helps restore this natural synchronization. While this concept is popular in grounding literature, it remains more theoretical than the well-documented electron transfer mechanism.',
    category: 'Biophysics',
  },
  {
    term: 'Conductivity Tester',
    definition: 'A device included with grounding products to verify that the conductive surface is functioning properly. Terra Sol includes a Carbon Fiber Conductivity Pen that indicates conductivity with an LED light. Regular testing (monthly for mats, every 5-10 washes for sheets) ensures your product is still effectively transferring electrons.',
    category: 'Products',
    relatedLink: { label: 'Product Care Guide', url: '/blog/grounding-product-care-maintenance' },
  },
  {
    term: 'Outlet Checker',
    definition: 'A small plug-in device with indicator lights that tests whether a wall outlet\'s ground port is properly wired to the earth. Essential safety step before using any grounding product. Two amber/yellow lights = properly grounded. Any other pattern = do not use.',
    category: 'Products',
    relatedLink: { label: 'Outlet Testing Guide', url: '/blog/how-to-verify-outlet-grounded' },
  },
];

const CATEGORIES = ['All', 'Core Concepts', 'Biophysics', 'Products', 'Materials', 'Hormones & Sleep', 'Cardiovascular', 'Neuroscience', 'Environmental', 'Recovery'] as const;

const Glossary: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    let result = GLOSSARY_TERMS;
    if (activeCategory !== 'All') {
      result = result.filter(t => t.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(t =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
      );
    }
    return result.sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, activeCategory]);

  return (
    <div className="pt-20 bg-sand-200 min-h-screen selection:bg-earth-800 selection:text-sand-100">

      {/* Hero Header */}
      <div className="relative overflow-hidden bg-earth-900 text-sand-100 py-14 sm:py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full border border-earth-800/10 bg-radial from-earth-700/20 to-transparent blur-3xl opacity-50"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand-200 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-earth-800/50 backdrop-blur-md flex items-center justify-center text-sand-400 border border-earth-700/50 shadow-[0_0_30px_rgba(45,79,30,0.3)]">
                <BookOpen size={22} />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
              Grounding <span className="italic text-sand-400">Glossary</span>
            </h1>

            <p className="text-sm sm:text-base text-sand-100/70 max-w-2xl mx-auto font-medium leading-relaxed mb-5">
              A comprehensive encyclopedia of grounding and earthing terminology. Every term defined, contextualized, and linked to the science.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-earth-800/80 bg-earth-900 shadow-inner text-xs font-bold tracking-widest text-sand-400 uppercase">
              <Sparkles size={14} /> {GLOSSARY_TERMS.length} Terms Defined
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-earth-800/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-13 pr-5 py-4 rounded-2xl border border-sand-300 bg-white text-earth-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-earth-600/20 focus:border-earth-600/40 transition-all shadow-sm"
            placeholder="Search terms..."
            style={{ paddingLeft: '3rem' }}
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-earth-900 text-white shadow-md'
                  : 'bg-white text-earth-700 hover:bg-sand-100 border border-sand-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Terms */}
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {filteredTerms.map((item) => {
                const isOpen = expandedTerm === item.term;
                return (
                  <div
                    key={item.term}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border-earth-300/60 shadow-[0_8px_25px_-8px_rgba(45,79,30,0.1)]'
                        : 'border-sand-200/60 shadow-sm hover:border-earth-200/60'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedTerm(isOpen ? null : item.term)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-base sm:text-lg font-serif font-bold text-earth-900">{item.term}</span>
                        <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-earth-100 text-earth-700 text-[9px] font-bold uppercase tracking-wider border border-earth-200">
                          {item.category}
                        </span>
                      </div>
                      <div className="shrink-0 ml-4 text-earth-800/40">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5 border-t border-sand-100">
                            <p className="text-sm text-earth-800/70 leading-relaxed pt-4 mb-3">
                              {item.definition}
                            </p>
                            <span className="sm:hidden inline-flex px-2.5 py-0.5 rounded-full bg-earth-100 text-earth-700 text-[9px] font-bold uppercase tracking-wider border border-earth-200 mb-3">
                              {item.category}
                            </span>
                            {item.relatedLink && (
                              <Link
                                to={item.relatedLink.url}
                                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-earth-600 hover:text-earth-800 transition-colors"
                              >
                                <ArrowRight size={12} /> {item.relatedLink.label}
                              </Link>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredTerms.length === 0 && (
            <div className="text-center py-16 text-earth-800/40">
              <p className="text-lg font-serif font-bold">No terms found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Glossary;

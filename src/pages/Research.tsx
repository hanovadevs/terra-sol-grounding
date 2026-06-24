import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink, Filter, FlaskConical, AlertTriangle } from 'lucide-react';
import { researchArticles, RESEARCH_CATEGORIES } from '../data/research';
import { useSEO } from '../hooks/useSEO';

const Research: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const researchSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": "https://terrasolgrounding.com/research/#researchpage",
    "name": "Clinical Studies & Grounding Research",
    "description": "Read peer-reviewed clinical studies on grounding. Scientific evidence demonstrating the benefits of earthing on inflammation, cortisol, sleep, cardiovascular health, and recovery.",
    "url": "https://terrasolgrounding.com/research",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Clinical Studies on Earthing & Grounding",
      "itemListElement": researchArticles.map((study, idx) => ({
        "@type": "ScholarlyArticle",
        "position": idx + 1,
        "name": study.title,
        "author": study.authors.split(', ').map(authorName => ({
          "@type": "Person",
          "name": authorName
        })),
        "isPartOf": {
          "@type": "Periodical",
          "name": study.journal
        },
        "datePublished": study.year.toString(),
        "url": study.pubmedUrl,
        "abstract": study.summary
      }))
    }
  };

  useSEO({
    title: 'Clinical Studies & Grounding Research | Evidence',
    description: 'Read peer-reviewed clinical studies on grounding. Scientific evidence demonstrating the benefits of earthing on inflammation, cortisol, sleep, cardiovascular health, and recovery.',
    schema: researchSchema
  });

  const filteredArticles = activeCategory === 'all'
    ? researchArticles
    : researchArticles.filter(a => a.category === activeCategory);

  const categoryColors: Record<string, string> = {
    sleep: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    inflammation: 'bg-rose-100 text-rose-700 border-rose-200',
    cardiovascular: 'bg-red-100 text-red-700 border-red-200',
    pain: 'bg-amber-100 text-amber-700 border-amber-200',
    mood: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    general: 'bg-sky-100 text-sky-700 border-sky-200',
  };

  const categoryBorderColors: Record<string, string> = {
    sleep: 'border-t-indigo-400 hover:border-t-indigo-500',
    inflammation: 'border-t-rose-400 hover:border-t-rose-500',
    cardiovascular: 'border-t-red-400 hover:border-t-red-500',
    pain: 'border-t-amber-400 hover:border-t-amber-500',
    mood: 'border-t-emerald-400 hover:border-t-emerald-500',
    general: 'border-t-sky-400 hover:border-t-sky-500',
  };

  return (
    <div className="pt-20 bg-sand-200 min-h-screen selection:bg-earth-800 selection:text-sand-100">

      {/* Hero Header */}
      <div className="relative overflow-hidden bg-earth-900 text-sand-100 py-14 sm:py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-earth-800/10 bg-radial from-earth-700/20 to-transparent blur-3xl opacity-50"
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
                <FlaskConical size={22} />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
              Published <span className="italic text-sand-400">Research</span>
            </h1>

            <p className="text-sm sm:text-base text-sand-100/70 max-w-2xl mx-auto font-medium leading-relaxed mb-5">
              Peer-reviewed clinical studies on grounding from PubMed, NIH, and accredited medical journals. Real science. Real citations.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-earth-800/80 bg-earth-900 shadow-inner text-xs font-bold tracking-widest text-sand-400 uppercase">
              <BookOpen size={14} /> {researchArticles.length} Studies Indexed
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-30">
        <div className="bg-sand-200/90 backdrop-blur-xl rounded-2xl border border-white/50 shadow-md p-2 flex flex-wrap gap-1 items-center justify-center lg:justify-start overflow-x-auto no-scrollbar">
          <div className="pl-3 pr-2 shrink-0 hidden sm:block">
            <Filter size={16} className="text-earth-600" />
          </div>
          {RESEARCH_CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-5 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold tracking-wide transition-colors shrink-0 ${
                  isActive ? 'text-earth-900' : 'text-earth-800/60 hover:text-earth-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeResearchFilter"
                    className="absolute inset-0 bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(45,79,30,0.1)] border border-sand-300/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filteredArticles.map((article, idx) => (
              <motion.a
                key={article.id}
                href={article.pubmedUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className={`group flex flex-col bg-white rounded-[2rem] border-t-4 ${categoryBorderColors[article.category] || 'border-t-earth-400'} border-x border-b border-sand-300/50 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(45,79,30,0.1)] hover:border-earth-600/30 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden`}
              >
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  {/* Category + Year */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${categoryColors[article.category] || 'bg-sand-100 text-earth-700 border-sand-300'}`}>
                      {article.category.replace('-', ' ')}
                    </span>
                    <span className="text-[11px] font-bold text-earth-800/60 tabular-nums bg-sand-200/50 px-2.5 py-1 rounded-lg border border-sand-300/30">{article.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-serif font-bold text-earth-900 mb-2 leading-snug group-hover:text-earth-700 transition-colors">
                    {article.title}
                  </h3>

                  {/* Authors + Journal */}
                  <p className="text-[11px] text-earth-800/60 mb-5 leading-relaxed font-medium">
                    {article.authors} — <span className="italic">{article.journal}</span>
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-earth-900/80 leading-relaxed font-medium flex-1">
                    {article.summary}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-sand-200 flex items-center justify-between">
                    <span className="text-xs font-bold text-earth-600 group-hover:text-earth-800 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-earth-600 group-hover:after:w-full after:transition-all after:duration-300">
                      Read Full Study
                    </span>
                    <div className="w-8 h-8 rounded-full bg-earth-100 flex items-center justify-center text-earth-600 group-hover:bg-earth-800 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-0.5">
                      <ExternalLink size={13} />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 text-earth-800/40">
            <p className="text-lg font-serif font-bold">No studies found in this category.</p>
          </div>
        )}
      </div>

      {/* Research Disclaimer */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border border-sand-300/40 p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 mt-1">
              <AlertTriangle size={18} />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-earth-900 mb-2">How We Evaluate Research</h3>
              <p className="text-sm text-earth-800/60 leading-relaxed">
                We believe in full transparency. The studies listed above represent the current body of published, peer-reviewed research on grounding. While findings are consistently promising — documenting improvements in cortisol regulation, blood viscosity, inflammation markers, and pain — we acknowledge that this field is still emerging.
              </p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-earth-800/60 leading-relaxed pl-14">
            <p>
              <strong className="text-earth-900">Sample sizes are often small.</strong> Many of these studies are pilot-level investigations with 10-60 participants. Larger randomized controlled trials are needed to confirm these findings at scale.
            </p>
            <p>
              <strong className="text-earth-900">We do not claim grounding cures disease.</strong> Grounding is a complementary wellness practice. It is not a substitute for professional medical diagnosis, treatment, or medication.
            </p>
            <p>
              <strong className="text-earth-900">We encourage you to read the full studies.</strong> Every article above links directly to its PubMed or journal page so you can evaluate the methodology and conclusions independently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;

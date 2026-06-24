import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Newspaper, BookOpen } from 'lucide-react';
import { blogArticles } from '../data/blog';

const Blog: React.FC = () => {
  const featured = blogArticles[0];
  const rest = blogArticles.slice(1);

  return (
    <div className="pt-20 bg-sand-200 min-h-screen selection:bg-earth-800 selection:text-sand-100">

      {/* Hero Header */}
      <div className="relative overflow-hidden bg-earth-900 text-sand-100 py-10 sm:py-14 md:py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full border border-earth-800/10 bg-radial from-earth-700/20 to-transparent blur-3xl opacity-50"
          />
          <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-sand-200 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-earth-800/50 backdrop-blur-md flex items-center justify-center text-sand-400 border border-earth-700/50 shadow-[0_0_30px_rgba(45,79,30,0.3)]">
                <Newspaper size={20} />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 sm:mb-4 tracking-tight">
              The <span className="italic text-sand-400">Journal</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-sand-100/70 max-w-2xl mx-auto font-medium leading-relaxed mb-4 sm:mb-5 px-2">
              In-depth articles on grounding science, product care, and optimizing your bio-electrical wellness routine.
            </p>

            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-earth-800/80 bg-earth-900 shadow-inner text-[10px] sm:text-xs font-bold tracking-widest text-sand-400 uppercase">
              <BookOpen size={13} /> {blogArticles.length} Articles
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">

        {/* Featured Article */}
        <Link to={`/blog/${featured.slug}`} className="block mb-8 sm:mb-12 group">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl sm:rounded-[2rem] overflow-hidden border border-sand-300/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(45,79,30,0.1)] transition-all duration-500"
          >
            <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/30 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-earth-700 border border-sand-300/50">
                Featured
              </div>
            </div>

            <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-earth-100 text-earth-700 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-earth-200">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-earth-800/60 font-semibold">
                  <Clock size={11} /> {featured.readingTime}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-earth-900 mb-2 sm:mb-3 group-hover:text-earth-700 transition-colors leading-tight">
                {featured.title}
              </h2>

              <p className="text-xs sm:text-sm text-earth-900/80 leading-relaxed font-medium mb-4 sm:mb-6 line-clamp-3">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-earth-600 group-hover:text-earth-800 transition-colors">
                Read Article <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {rest.map((article, idx) => (
            <Link key={article.slug} to={`/blog/${article.slug}`} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white rounded-2xl sm:rounded-[2rem] border border-sand-300/50 shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden hover:shadow-[0_20px_50px_rgba(45,79,30,0.1)] hover:border-earth-600/30 transition-all duration-500 hover:-translate-y-1 h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/20 via-transparent to-transparent" />
                </div>

                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-earth-100 text-earth-700 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-earth-200">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-earth-800/60 font-semibold">
                      <Clock size={11} /> {article.readingTime}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base md:text-lg font-serif font-bold text-earth-900 mb-2 group-hover:text-earth-700 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-earth-900/80 leading-relaxed font-medium flex-1 mb-4 sm:mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="pt-3 sm:pt-4 border-t border-sand-200 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-earth-600 group-hover:text-earth-800 transition-colors">
                    Read Article <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

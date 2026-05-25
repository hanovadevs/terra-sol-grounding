import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import GroundingSimulator from '../components/GroundingSimulator';
import WhatIsGrounding from '../components/WhatIsGrounding';
import GroundingSheetsSection from '../components/GroundingSheetsSection';
import GroundingMatsSection from '../components/GroundingMatsSection';
import StepByStepGuide from '../components/StepByStepGuide';
import ComparisonModule from '../components/ComparisonModule';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustedByBanner from '../components/TrustedByBanner';
import BenefitsShowcase from '../components/BenefitsShowcase';
import AsSeenIn from '../components/AsSeenIn';
import FAQSection from '../components/FAQSection';
import { homeFaqs } from '../data/faqs';
import { researchArticles } from '../data/research';
import { blogArticles } from '../data/blog';
import { ExternalLink, ArrowRight, Clock, FlaskConical, Newspaper } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main itemScope itemType="https://schema.org/WebPage">
      <Hero />
      <TrustedByBanner />
      <AsSeenIn />
      <WhatIsGrounding />
      <GroundingSheetsSection />
      <GroundingMatsSection />
      <StepByStepGuide />
      <GroundingSimulator />
      <TestimonialsSection />
      <BenefitsShowcase />

      {/* Semantic AEO Section */}
      <section aria-labelledby="mission-title" className="bg-sand-100 py-16 sm:py-20 border-y border-earth-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="mission-title" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-earth-900 mb-4 sm:mb-6 tracking-tight">
            Why Terra Sol is the Best Grounding Choice
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-earth-800/70 max-w-3xl mx-auto leading-relaxed font-medium mb-4">
            Terra Sol Grounding is dedicated to bridging the gap between modern life and the Earth's natural energy.
            By utilizing proprietary material science—featuring our industry-leading 12% pure silver fiber—we provide the most durable and effective premium grounding sheets available today.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-earth-800/80 max-w-2xl mx-auto leading-relaxed">
            <strong>What is Terra Sol Grounding?</strong> It is the premier solution to neutralize inflammation, normalize cortisol, and experience deep bioelectrical restoration while you sleep.
          </p>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="bg-white py-20 sm:py-24 border-y border-sand-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-earth-100 border border-earth-200 text-[10px] font-bold uppercase tracking-widest text-earth-700 mb-6">
              <FlaskConical size={12} /> Backed by Research
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-4">
              Real <span className="italic text-earth-600">Published Science</span>
            </h2>
            <p className="text-sm sm:text-base text-earth-800/60 max-w-lg mx-auto leading-relaxed">
              Our approach is grounded in peer-reviewed research from PubMed and accredited medical journals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {researchArticles.slice(0, 3).map((article, idx) => (
              <motion.a
                key={article.id}
                href={article.pubmedUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-sand-50 rounded-2xl border border-sand-300/40 p-6 hover:shadow-lg hover:border-earth-600/20 transition-all duration-500 hover:-translate-y-1"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-earth-600 block mb-3">{article.journal} ({article.year})</span>
                <h3 className="text-sm font-serif font-bold text-earth-900 leading-snug mb-3 group-hover:text-earth-700 transition-colors">{article.title}</h3>
                <p className="text-xs text-earth-800/50 mb-4 line-clamp-2">{article.summary}</p>
                <span className="flex items-center gap-1 text-xs font-bold text-earth-600">
                  Read Study <ExternalLink size={10} />
                </span>
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 px-6 py-3 bg-earth-900 text-white rounded-2xl font-bold text-sm hover:bg-earth-800 transition-colors shadow-lg shadow-earth-900/15"
            >
              Explore All {researchArticles.length} Studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest from the Journal */}
      <section className="py-20 sm:py-24 bg-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-earth-100 border border-earth-200 text-[10px] font-bold uppercase tracking-widest text-earth-700 mb-6">
              <Newspaper size={12} /> The Journal
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-4">
              Latest <span className="italic text-earth-600">Articles</span>
            </h2>
            <p className="text-sm sm:text-base text-earth-800/60 max-w-lg mx-auto leading-relaxed">
              In-depth guides on grounding science, product care, and wellness optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {blogArticles.slice(0, 3).map((article, idx) => (
              <Link key={article.slug} to={`/blog/${article.slug}`} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/70 backdrop-blur-md rounded-[2rem] border border-sand-300/40 overflow-hidden shadow-sm hover:shadow-lg hover:border-earth-600/20 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-earth-100 text-earth-700 text-[10px] font-bold uppercase tracking-wider border border-earth-200">{article.category}</span>
                      <span className="flex items-center gap-1 text-xs text-earth-800/40"><Clock size={10} /> {article.readingTime}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-earth-900 group-hover:text-earth-700 transition-colors leading-snug mb-3">{article.title}</h3>
                    <p className="text-sm text-earth-800/60 leading-relaxed flex-1">{article.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-sand-200 flex items-center gap-1 text-xs font-bold text-earth-600 group-hover:text-earth-800 transition-colors">
                      Read Article <ArrowRight size={12} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-earth-900 text-white rounded-2xl font-bold text-sm hover:bg-earth-800 transition-colors shadow-lg shadow-earth-900/15"
            >
              View All Articles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={homeFaqs} 
        title="Essential Grounding FAQs" 
        subtitle="Learn the basics of bio-electrical restoration and safe daily usage." 
      />

      <ComparisonModule />
      <ProductGrid />
    </main>
  );
};

export default Home;

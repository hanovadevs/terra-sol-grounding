import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogArticles } from '../data/blog';
import { useSEO } from '../hooks/useSEO';

const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = blogArticles.find(a => a.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);

  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://terrasolgrounding.com/blog/${article.slug}#blogposting`,
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image.startsWith('http') ? article.image : `https://terrasolgrounding.com${article.image}`,
    "datePublished": article.publishedDate,
    "author": {
      "@type": "Organization",
      "name": "Terra Sol Grounding",
      "url": "https://terrasolgrounding.com/"
    },
    "publisher": {
      "@id": "https://terrasolgrounding.com/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    },
    "articleBody": article.content.join('\n\n')
  } : undefined;

  useSEO({
    title: article ? `${article.title} | The Journal` : 'Article Details',
    description: article ? article.excerpt : 'Read this article from the Terra Sol Grounding journal.',
    schema: articleSchema
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-sand-200 px-4">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-4 text-center">Article Not Found</h2>
        <button
          onClick={() => navigate('/blog')}
          className="px-6 py-3 bg-earth-800 text-white rounded-full font-bold hover:bg-earth-900 transition-colors text-sm"
        >
          Return to Journal
        </button>
      </div>
    );
  }

  // Get related articles (same category, excluding current)
  const related = blogArticles
    .filter(a => a.slug !== article.slug)
    .slice(0, 3);

  const renderContent = (block: string) => {
    if (block.startsWith('## ')) {
      return (
        <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-earth-900 mt-8 sm:mt-10 mb-3 sm:mb-4">
          {block.replace('## ', '')}
        </h2>
      );
    }

    // Handle bold text within paragraphs
    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p className="text-sm sm:text-base md:text-lg text-earth-800/75 leading-relaxed mb-5 sm:mb-6">
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-bold text-earth-900">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-earth-600 to-earth-800"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <div className="pt-20 sm:pt-24 pb-16 sm:pb-24 min-h-screen bg-sand-100 selection:bg-earth-800 selection:text-sand-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-earth-600 hover:text-earth-900 font-bold text-xs sm:text-sm mb-6 sm:mb-8 transition-colors group"
          >
            <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </motion.button>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-earth-100 text-earth-700 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-earth-200">
                {article.category}
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-earth-800/40 font-medium">
                <Clock size={11} /> {article.readingTime}
              </span>
              <span className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-earth-800/40 font-medium">
                <Calendar size={11} /> {new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-earth-900 mb-4 sm:mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-earth-800/60 leading-relaxed mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-sand-300">
              {article.excerpt}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-xl sm:rounded-2xl md:rounded-[1.5rem] overflow-hidden mb-8 sm:mb-10 shadow-xl border border-sand-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 sm:h-48 md:h-64 lg:h-72 object-cover"
            />
          </motion.div>

          {/* Article Body */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose-earth"
          >
            {article.content.map((block, idx) => (
              <div key={idx}>{renderContent(block)}</div>
            ))}
          </motion.article>

          {/* Divider */}
          <div className="mt-12 sm:mt-16 mb-10 sm:mb-16 border-t border-sand-300" />

          {/* Related Articles */}
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-6 sm:mb-8">Continue Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {related.map((rel) => (
                <Link key={rel.slug} to={`/blog/${rel.slug}`} className="group block">
                  <div className="bg-white/70 rounded-xl sm:rounded-2xl border border-sand-300/40 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 sm:p-4 md:p-5">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-earth-600 mb-1.5 sm:mb-2 block">
                        {rel.category}
                      </span>
                      <h3 className="text-xs sm:text-sm font-serif font-bold text-earth-900 group-hover:text-earth-700 transition-colors leading-snug">
                        {rel.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticle;

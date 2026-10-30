import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, BookOpen, ExternalLink, Zap } from 'lucide-react';
import { blogArticles } from '../data/blog';
import { PRODUCTS } from '../constants';
import Breadcrumbs from '../components/Breadcrumbs';
import AmazonCTA from '../components/AmazonCTA';
import { useSEO } from '../hooks/useSEO';

const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = blogArticles.find(a => a.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Contextual product recommendation
  const recommendedProduct = article?.category === 'Sleep Science' || article?.slug.includes('sheet') || article?.slug.includes('sleep')
    ? PRODUCTS.find(p => p.id === '4') || PRODUCTS[3]
    : PRODUCTS.find(p => p.id === '1') || PRODUCTS[0];

  const wordCount = article ? article.content.join(' ').split(/\s+/).length : 800;

  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://terrasolgrounding.com/blog/${article.slug}#blogposting`,
        "headline": article.title,
        "description": article.excerpt,
        "image": [article.image.startsWith('http') ? article.image : `https://terrasolgrounding.com${article.image}`],
        "datePublished": article.publishedDate,
        "dateModified": article.publishedDate,
        "author": {
          "@type": "Organization",
          "name": "Terra Sol Grounding Research & Biophysics Team",
          "url": "https://terrasolgrounding.com/story"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://terrasolgrounding.com/#organization",
          "name": "Terra Sol Grounding",
          "url": "https://terrasolgrounding.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://terrasolgrounding.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://terrasolgrounding.com/blog/${article.slug}`
        },
        "articleSection": article.category,
        "keywords": `${article.category}, earthing, grounding sheets, grounding mats, bioelectrical restoration, ${article.title}`,
        "wordCount": wordCount,
        "articleBody": article.content.join('\n\n')
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://terrasolgrounding.com/blog/${article.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://terrasolgrounding.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Journal",
            "item": "https://terrasolgrounding.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": `https://terrasolgrounding.com/blog/${article.slug}`
          }
        ]
      }
    ]
  } : undefined;

  useSEO({
    title: article ? `${article.title} | Terra Sol Journal` : 'Article Details',
    description: article ? article.excerpt : 'Read this article from the Terra Sol Grounding journal.',
    canonical: article ? `https://terrasolgrounding.com/blog/${article.slug}` : undefined,
    image: article?.image,
    type: 'article',
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

  // Get related articles (excluding current)
  const related = blogArticles
    .filter(a => a.slug !== article.slug)
    .slice(0, 3);

  const renderContent = (block: string) => {
    if (block.startsWith('## ')) {
      return (
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-earth-900 mt-10 sm:mt-12 mb-4 tracking-tight border-b border-sand-300/40 pb-2">
          {block.replace('## ', '')}
        </h2>
      );
    }

    if (block.startsWith('### ')) {
      return (
        <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold text-earth-900 mt-6 sm:mt-8 mb-3">
          {block.replace('### ', '')}
        </h3>
      );
    }

    // List items
    if (block.startsWith('**• ') || block.startsWith('• ') || block.startsWith('- ') || block.startsWith('* ')) {
      const cleanText = block.replace(/^(\*\*•\s*|•\s*|-\s*|\*\s*)/, '');
      const parts = cleanText.split(/(\*\*[^*]+\*\*)/g);
      return (
        <div className="flex items-start gap-3 my-3 pl-2">
          <div className="w-1.5 h-1.5 rounded-full bg-earth-600 mt-2 shrink-0" />
          <p className="text-sm sm:text-base md:text-lg text-earth-800/80 leading-relaxed">
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-bold text-earth-900">{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        </div>
      );
    }

    // Handle bold text within regular paragraphs
    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p className="text-sm sm:text-base md:text-lg text-earth-800/80 leading-relaxed mb-5 sm:mb-6">
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

          {/* Breadcrumbs Navigation */}
          <div className="pt-2 pb-4">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Journal', href: '/blog' },
                { label: article.category, href: '/blog' },
                { label: article.title }
              ]}
            />
          </div>

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

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-4 sm:mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-earth-800/70 leading-relaxed mb-6 sm:mb-8 pb-6 border-b border-sand-300/60 font-medium">
              {article.excerpt}
            </p>
          </motion.div>

          {/* AEO Direct Answer & Key Takeaways Card */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              aria-label="Executive Summary and Key Takeaways"
              className="my-8 p-6 sm:p-8 rounded-2xl bg-earth-900/5 border border-earth-900/15 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center gap-2.5 mb-4 text-earth-900">
                <div className="w-8 h-8 rounded-lg bg-earth-800 text-sand-100 flex items-center justify-center">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-serif font-bold uppercase tracking-wider text-earth-900">
                    Direct Answer & Key Takeaways
                  </h2>
                  <span className="text-[11px] text-earth-800/60 font-medium">Biophysics & Clinical Summary</span>
                </div>
              </div>
              <ul className="space-y-3">
                {article.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3 text-xs sm:text-sm text-earth-800/85 leading-relaxed">
                    <span className="text-earth-700 font-bold mt-0.5 shrink-0">✓</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

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
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
              loading="eager"
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

          {/* Contextual Product Feature Card */}
          {recommendedProduct && (
            <div className="my-12 p-6 sm:p-8 rounded-2xl bg-white border border-sand-300/80 shadow-md">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={recommendedProduct.images[0]}
                  alt={recommendedProduct.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover shrink-0 shadow-sm border border-sand-200"
                  loading="lazy"
                />
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-earth-100 text-earth-800 text-[10px] font-bold uppercase tracking-wider mb-2">
                    <Zap size={12} className="text-earth-700" /> Featured Solution
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-earth-900 mb-1">
                    {recommendedProduct.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-earth-800/70 mb-4 line-clamp-2">
                    {recommendedProduct.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                    <AmazonCTA amazonUrl={recommendedProduct.amazonUrl} size="sm" />
                    <Link
                      to={`/products/${recommendedProduct.id}`}
                      className="text-xs font-bold text-earth-700 hover:text-earth-900 inline-flex items-center gap-1"
                    >
                      View Specs & Tests <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* E-E-A-T Scientific Advisory Box */}
          <div className="my-10 p-5 rounded-2xl bg-sand-200/60 border border-sand-300 text-xs text-earth-800/70 leading-relaxed flex items-start gap-3">
            <ShieldCheck size={20} className="text-earth-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-earth-900 font-bold mb-1">
                Medical & Biophysics Editorial Notice
              </strong>
              This article was authored and reviewed by the Terra Sol Grounding editorial team in accordance with published clinical trials (including research indexed on PubMed and the National Institutes of Health). Grounding is a natural complementary lifestyle practice that supports autonomic balance and sleep architecture. It is not intended to replace professional medical treatment. If you use active electronic medical implants (such as pacemakers), consult your physician prior to using grounding equipment.
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 sm:mt-16 mb-10 sm:mb-16 border-t border-sand-300" />

          {/* Related Articles */}
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-6 sm:mb-8">Continue Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {related.map((rel) => (
                <Link key={rel.slug} to={`/blog/${rel.slug}`} className="group block">
                  <div className="bg-white/70 rounded-xl sm:rounded-2xl border border-sand-300/40 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3.5 sm:p-4 md:p-5 flex-1 flex flex-col">
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
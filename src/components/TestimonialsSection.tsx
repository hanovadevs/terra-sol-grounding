import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, ThumbsUp, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { getFeaturedReviews, reviews } from '../data/reviews';

const TestimonialsSection: React.FC = () => {
  const featured = getFeaturedReviews(9);
  const [visibleCount, setVisibleCount] = useState(6);

  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="py-16 sm:py-20 bg-sand-100 text-earth-900 border-t border-sand-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="block text-[10px] font-bold tracking-[0.2em] text-earth-600 uppercase mb-4">Customer Reviews</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Real Results, <span className="italic text-earth-600">Verified</span></h2>
          <p className="text-sm text-earth-800/70 max-w-2xl mx-auto mb-6">
            See how Terra Sol's 12% Silver Fiber technology is transforming sleep and reducing inflammation for real customers.
          </p>

          {/* Stats Bar */}
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-sand-300/50 shadow-sm">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#FF9900]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-sm font-bold text-earth-900">{avgRating}</span>
            </div>
            <div className="w-px h-5 bg-sand-300" />
            <span className="text-xs font-bold text-earth-800/60">{reviews.length} Verified Reviews</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {featured.slice(0, visibleCount).map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-sand-300/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Stars + Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#FF9900]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-sand-300" />
                    ))}
                  </div>
                  <span className="text-[10px] text-earth-800/30 font-medium">
                    {new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-sm font-bold text-earth-900 mb-2">{review.title}</h4>

                {/* Review Text */}
                <p className="text-xs text-earth-800/70 leading-relaxed mb-4 flex-1">"{review.text}"</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-sand-200">
                  <div>
                    <p className="font-bold text-xs flex items-center gap-1.5 text-earth-900">
                      {review.name}
                      {review.verified && <ShieldCheck size={12} className="text-earth-500" />}
                    </p>
                    <p className="text-[10px] text-earth-800/40 mt-0.5">{review.productName}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-earth-800/30">
                    <ThumbsUp size={10} />
                    <span>{review.helpfulCount}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More */}
        {visibleCount < featured.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setVisibleCount(featured.length)}
              className="px-6 py-3 rounded-xl bg-earth-100 text-earth-700 font-bold text-sm hover:bg-earth-200 transition-colors border border-earth-200"
            >
              Show More Reviews
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;

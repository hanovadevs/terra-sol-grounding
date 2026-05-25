import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Package, Ruler, Settings2, ArrowRight, Star, ShieldCheck, ThumbsUp } from 'lucide-react';
import { PRODUCTS } from '../constants';
import AmazonCTA from '../components/AmazonCTA';
import Breadcrumbs from '../components/Breadcrumbs';
import { getReviewsByProduct, getAverageRating } from '../data/reviews';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState(PRODUCTS.find(p => p.id === id));
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!product && id) {
      setProduct(PRODUCTS.find(p => p.id === id));
    }
  }, [id, product]);

  // Reset image index if product changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-sand-200">
        <h2 className="text-3xl font-serif font-bold text-earth-900 mb-4">Product Not Found</h2>
        <button 
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-earth-800 text-white rounded-full font-bold hover:bg-earth-900 transition-colors"
        >
          Return to Products
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 min-h-screen bg-sand-100 selection:bg-earth-800 selection:text-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Back Button */}
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/products')}
          className="flex items-center gap-2 text-earth-600 hover:text-earth-900 font-bold text-sm mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Catalog
        </motion.button>

        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.name },
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column - Interactive Image Gallery */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              {/* Main Stage Image */}
              <div className="relative rounded-[2.5rem] overflow-hidden bg-sand-200 aspect-square lg:aspect-[4/5] shadow-2xl border border-sand-300 mb-4">
                {product.isPremium && (
                  <div className="absolute top-6 left-6 z-20 rounded-full bg-gradient-to-r from-earth-700 to-earth-800 px-4 py-2 text-[10px] font-bold tracking-widest text-white uppercase shadow-lg border border-white/10 backdrop-blur-md">
                    Premium Choice
                  </div>
                )}
                
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={product.images[activeImageIndex]}
                    alt={`${product.name} - View ${activeImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/10 to-transparent z-10 pointer-events-none" />
              </div>

              {/* Thumbnails Row */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-earth-400 focus-visible:ring-offset-2 ${
                        activeImageIndex === idx 
                          ? 'border-earth-600 shadow-md scale-100 opacity-100' 
                          : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`} 
                        className="w-full h-full object-cover"
                      />
                      {activeImageIndex !== idx && (
                        <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column - Product Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col pt-4 lg:pt-12"
          >
            {product.tagline && (
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-earth-600 uppercase mb-4 block">
                {product.tagline}
              </span>
            )}
            
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-earth-900 mb-5 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-base sm:text-lg text-earth-800/80 leading-relaxed mb-8 pb-8 border-b border-sand-300">
              {product.description}
            </p>

            <div className="space-y-8">
              {/* Features */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center border border-earth-200">
                    <Settings2 size={20} className="text-earth-700" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-earth-900">Engineering & Features</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-sand-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                      <CheckCircle2 size={18} className="text-earth-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-earth-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center border border-earth-200">
                      <Ruler size={20} className="text-earth-700" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-earth-900">Dimensions</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size, idx) => (
                      <span key={idx} className="px-6 py-3 bg-white border border-sand-300 rounded-2xl font-bold text-earth-800 text-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Kit Contents */}
              {(product.kit || product.packaging) && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center border border-earth-200">
                      <Package size={20} className="text-earth-700" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-earth-900">What's in the Box</h3>
                  </div>
                  <div className="bg-white rounded-[2rem] border border-sand-200 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                    {product.kit && product.kit.length > 0 && (
                      <ul className="space-y-4 mb-8">
                        {product.kit.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-earth-800 font-medium">
                            <div className="w-2 h-2 rounded-full bg-earth-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {product.packaging && (
                      <div className="pt-6 border-t border-sand-100">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth-500 block mb-2">Packaging</span>
                        <span className="font-bold text-earth-900 text-lg">{product.packaging}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky bottom CTA for mobile, inline for desktop */}
            <div className="mt-12 sticky bottom-6 z-50 lg:static bg-sand-100/90 backdrop-blur-xl lg:bg-transparent p-4 lg:p-0 -mx-4 lg:mx-0 rounded-[2rem] border border-sand-300/50 lg:border-none shadow-[0_-10px_40px_rgba(0,0,0,0.1)] lg:shadow-none">
              <AmazonCTA url={product.amazonUrl} className="w-full h-16 text-lg rounded-2xl shadow-xl shadow-earth-900/20" />
            </div>

          </motion.div>
        </div>
      </div>

      {/* Customer Reviews for this Product */}
      {(() => {
        const productReviews = getReviewsByProduct(product.id);
        const avgRating = getAverageRating(product.id);
        if (productReviews.length === 0) return null;
        return (
          <div className="bg-white py-14 sm:py-16 border-y border-sand-300/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth-600 mb-2 block">Customer Reviews</span>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-earth-900">What Customers Say</h2>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-sand-50 border border-sand-200">
                    <div className="flex text-[#FF9900]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < Math.round(avgRating) ? 'currentColor' : 'none'} className={i >= Math.round(avgRating) ? 'text-sand-300' : ''} />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-earth-900">{avgRating.toFixed(1)}</span>
                    <span className="text-xs text-earth-800/40">({productReviews.length} reviews)</span>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {productReviews.map((review, idx) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-sand-50 p-5 sm:p-6 rounded-2xl border border-sand-200 hover:shadow-md transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex text-[#FF9900]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={13} fill="currentColor" />
                        ))}
                        {[...Array(5 - review.rating)].map((_, i) => (
                          <Star key={`e${i}`} size={13} className="text-sand-300" />
                        ))}
                      </div>
                      <span className="text-[10px] text-earth-800/30 font-medium">
                        {new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-earth-900 mb-2">{review.title}</h4>
                    <p className="text-xs text-earth-800/70 leading-relaxed mb-4 flex-1">"{review.text}"</p>

                    <div className="flex items-center justify-between pt-3 border-t border-sand-200">
                      <p className="font-bold text-xs flex items-center gap-1.5 text-earth-900">
                        {review.name}
                        {review.verified && <ShieldCheck size={12} className="text-earth-500" />}
                      </p>
                      <div className="flex items-center gap-1 text-[10px] text-earth-800/30">
                        <ThumbsUp size={10} />
                        <span>{review.helpfulCount} helpful</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

      {/* You May Also Like */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.filter(p => p.id !== product.id).slice(0, 3).map((rel) => (
              <Link key={rel.id} to={`/products/${rel.id}`} className="group block">
                <div className="bg-white/70 rounded-[2rem] border border-sand-300/40 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={rel.images[0]}
                      alt={rel.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    {rel.tagline && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-earth-600 mb-2 block">{rel.tagline}</span>
                    )}
                    <h3 className="text-base font-serif font-bold text-earth-900 group-hover:text-earth-700 transition-colors mb-3">{rel.name}</h3>
                    <span className="flex items-center gap-1 text-xs font-bold text-earth-600 group-hover:text-earth-800 transition-colors">
                      View Product <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;

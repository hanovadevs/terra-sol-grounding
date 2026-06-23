import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Package, Ruler, Settings2, ArrowRight, Star, ShieldCheck, ThumbsUp, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../constants';
import AmazonCTA from '../components/AmazonCTA';
import Breadcrumbs from '../components/Breadcrumbs';
import { getReviewsByProduct, getAverageRating } from '../data/reviews';

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, icon, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-sand-300/40 last:border-none">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-earth-400 focus-visible:ring-offset-2 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <div className="text-earth-700 shrink-0">{icon}</div>
          <span className="text-sm font-serif font-bold text-earth-900">{title}</span>
        </div>
        <ChevronDown 
          size={16} 
          className={`text-earth-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-5 pt-1 text-xs sm:text-sm text-earth-800/80 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState(PRODUCTS.find(p => p.id === id));
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [openAccordion, setOpenAccordion] = useState<string | null>('features');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!product && id) {
      setProduct(PRODUCTS.find(p => p.id === id));
    }
  }, [id, product]);

  // Reset selections if product changes
  useEffect(() => {
    setActiveImageIndex(0);
    if (product) {
      setSelectedSize(product.sizes?.[0] || '');
      setSelectedColor(product.colors?.[0] || '');
    }
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

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16">
          
          {/* Left Column - Interactive Image Gallery */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              {/* Main Stage Image */}
              <div className="relative rounded-2xl overflow-hidden bg-sand-50/80 aspect-square lg:aspect-[4/3] shadow-lg border border-sand-300/40 mb-4 flex items-center justify-center p-8">
                {product.isPremium && (
                  <div className="absolute top-4 left-4 z-20 rounded-full bg-gradient-to-r from-earth-800 to-earth-900 px-3 py-1 text-[9px] font-bold tracking-widest text-white uppercase shadow-md border border-white/10 backdrop-blur-sm">
                    Premium Choice
                  </div>
                )}
                
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={product.images[activeImageIndex]}
                    alt={`${product.name} - View ${activeImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="max-h-full max-w-full w-auto h-auto object-contain select-none"
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnails Row */}
              {product.images.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border transition-all duration-300 p-1 bg-sand-50/50 flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-earth-400 focus-visible:ring-offset-2 ${
                        activeImageIndex === idx 
                          ? 'border-earth-600 ring-1 ring-earth-600 bg-white' 
                          : 'border-sand-300/60 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`} 
                        className="w-full h-full object-contain"
                      />
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
            className="flex flex-col pt-2 lg:pt-8"
          >
            {product.tagline && (
              <span className="text-[10px] font-bold tracking-widest text-earth-600 uppercase mb-2 block">
                {product.tagline}
              </span>
            )}
            
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-2 leading-tight">
              {product.name}
            </h1>

            {/* Review Stars & Scroll Anchor */}
            {(() => {
              const avg = getAverageRating(product.id);
              const count = getReviewsByProduct(product.id).length;
              if (count === 0) return null;
              return (
                <a href="#reviews" className="flex items-center gap-2 mb-4 group cursor-pointer inline-flex self-start">
                  <div className="flex text-accent-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill={i < Math.round(avg) ? 'currentColor' : 'none'} className={i >= Math.round(avg) ? 'text-sand-300' : 'fill-accent-gold'} />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-earth-800/80 group-hover:text-earth-600 transition-colors">
                    {avg.toFixed(1)} ({count} reviews)
                  </span>
                </a>
              );
            })()}
            
            <div className="mb-6 flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-earth-900">{product.price}</span>
              <span className="text-xs font-medium text-earth-800/40">Free shipping & 100-night trial</span>
            </div>

            <p className="text-sm text-earth-800/80 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Interactive Selectors */}
            <div className="space-y-6 mb-8 pt-4 border-t border-sand-200/50">
              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-earth-600 block mb-2">Color: {selectedColor}</span>
                  <div className="flex gap-2.5">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                          selectedColor === color 
                            ? 'border-earth-800 scale-110 shadow-sm' 
                            : 'border-sand-300 hover:border-earth-600/50'
                        }`}
                      >
                        <span 
                          className={`w-5 h-5 rounded-full border border-black/10 ${
                            color.toLowerCase() === 'grey' ? 'bg-[#9ca3af]' : 'bg-white'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-earth-600 block mb-2">Select Size:</span>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border text-xs font-bold transition-all ${
                          selectedSize === size
                            ? 'bg-earth-900 border-earth-900 text-white shadow-sm'
                            : 'bg-white border-sand-300 text-earth-800 hover:border-earth-600/50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA & Trust Value Props */}
            <div className="space-y-4 mb-6">
              <AmazonCTA url={product.amazonUrl} className="w-full h-14 text-base rounded-xl shadow-md hover:shadow-lg" />
              
              <div className="grid grid-cols-3 gap-2 pt-4 text-center border-t border-sand-200/50">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-sand-200/50 flex items-center justify-center mb-1">
                    <ShieldCheck size={14} className="text-earth-700" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-earth-800">3-Yr Warranty</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-sand-200/50 flex items-center justify-center mb-1">
                    <Package size={14} className="text-earth-700" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-earth-800">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-sand-200/50 flex items-center justify-center mb-1">
                    <Star size={14} className="text-earth-700" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-earth-800">100-Night Trial</span>
                </div>
              </div>
            </div>

            {/* Accordion list */}
            <div className="border-t border-sand-300/40">
              <AccordionItem 
                title="Engineering & Features" 
                icon={<Settings2 size={16} />}
                isOpen={openAccordion === 'features'}
                onToggle={() => setOpenAccordion(openAccordion === 'features' ? null : 'features')}
              >
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 p-2 bg-sand-50/50 rounded-lg border border-sand-200/30">
                      <CheckCircle2 size={12} className="text-earth-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] font-semibold text-earth-800">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AccordionItem>

              <AccordionItem 
                title="What's in the Box" 
                icon={<Package size={16} />}
                isOpen={openAccordion === 'kit'}
                onToggle={() => setOpenAccordion(openAccordion === 'kit' ? null : 'kit')}
              >
                <div className="space-y-3">
                  {product.kit && (
                    <ul className="space-y-1.5">
                      {product.kit.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-earth-800">
                          <div className="w-1.5 h-1.5 rounded-full bg-earth-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {product.packaging && (
                    <div className="pt-2 border-t border-sand-200/50">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-earth-500 block mb-0.5">Packaging:</span>
                      <span className="text-xs font-bold text-earth-900">{product.packaging}</span>
                    </div>
                  )}
                </div>
              </AccordionItem>

              <AccordionItem 
                title="Specifications" 
                icon={<Ruler size={16} />}
                isOpen={openAccordion === 'specs'}
                onToggle={() => setOpenAccordion(openAccordion === 'specs' ? null : 'specs')}
              >
                <div className="space-y-1.5">
                  {product.sizes && (
                    <div className="flex justify-between py-1 border-b border-sand-200/30">
                      <span className="text-xs text-earth-800/60 font-semibold">Dimensions:</span>
                      <span className="text-xs text-earth-900 font-bold">{product.sizes.join(', ')}</span>
                    </div>
                  )}
                  {product.colors && (
                    <div className="flex justify-between py-1 border-b border-sand-200/30">
                      <span className="text-xs text-earth-800/60 font-semibold">Colors:</span>
                      <span className="text-xs text-earth-900 font-bold">{product.colors.join(', ')}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-1 border-b border-sand-200/30">
                    <span className="text-xs text-earth-800/60 font-semibold">Warranty:</span>
                    <span className="text-xs text-earth-900 font-bold">3-Year Conductivity Coverage</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-xs text-earth-800/60 font-semibold">Sleep Trial:</span>
                    <span className="text-xs text-earth-900 font-bold">100-Night Free Trial</span>
                  </div>
                </div>
              </AccordionItem>
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
          <div id="reviews" className="bg-white py-14 sm:py-16 border-y border-sand-300/30">
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
                <div className="bg-white/70 rounded-2xl border border-sand-300/40 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 bg-white">
                  <div className="aspect-[4/3] overflow-hidden bg-sand-50/80 p-4 flex items-center justify-center border-b border-sand-200/50">
                    <img
                      src={rel.images[0]}
                      alt={rel.name}
                      className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
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

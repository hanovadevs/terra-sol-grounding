import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Package, Ruler, Settings2 } from 'lucide-react';
import { PRODUCTS } from '../constants';
import AmazonCTA from '../components/AmazonCTA';

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
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-earth-900 mb-6 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-lg sm:text-xl text-earth-800/80 leading-relaxed mb-10 pb-10 border-b border-sand-300">
              {product.description}
            </p>

            <div className="space-y-10">
              {/* Features */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center border border-earth-200">
                    <Settings2 size={20} className="text-earth-700" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-earth-900">Engineering & Features</h3>
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
                    <h3 className="text-xl font-serif font-bold text-earth-900">Dimensions</h3>
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
                    <h3 className="text-xl font-serif font-bold text-earth-900">What's in the Box</h3>
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
    </div>
  );
};

export default ProductDetail;

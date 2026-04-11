import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Send, CheckCircle2, Loader2, X } from 'lucide-react';
import { WARRANTY_INFO } from '../constants';

const WarrantySection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSubmitted) {
      // Auto-dismiss success message after 10 seconds
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const warrantyItems = [
    '1-Year Limited Warranty',
    'Easy Replacement Process',
    'Dedicated Customer Support'
  ];

  return (
    <section id="warranty" className="section-padding bg-linear-to-b from-sand-100 to-sand-200 relative overflow-hidden">
      {/* Static background elements - removed animation for performance */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-earth-500/10 rounded-full blur-xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-earth-600/10 rounded-full blur-xl opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-linear-to-br from-earth-700 to-earth-800 flex items-center justify-center text-white shadow-lg"
              >
                <ShieldCheck size={20} />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-900">Warranty Registration</h2>
            </motion.div>

            <motion.p
              className="text-sm sm:text-base md:text-base text-earth-800/80 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {WARRANTY_INFO}
            </motion.p>
            
            {/* Warranty items */}
            <div className="space-y-3 mb-6">
              {warrantyItems.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 text-earth-800/80 font-medium group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="text-earth-600"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <CheckCircle2 size={20} />
                  </motion.div>
                  {item}
                </motion.div>
              ))}
            </div>

            {/* Manual download link */}
            <motion.a 
              href="/manual.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-earth-800 font-bold border-b-2 border-earth-800 pb-1 hover:text-earth-600 hover:border-earth-600 transition-all group relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              whileHover={{ gap: '12px' }}
            >
              <span>Download Instruction Manual (PDF)</span>
              <motion.div
                className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              >
                <Send size={16} />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-sand-300/50 relative overflow-hidden"
            whileHover={{ boxShadow: '0 20px 60px rgba(45, 79, 30, 0.15)' }}
          >
            {/* Background decoration */}
            <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-earth-600/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  className="text-center py-12 relative z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="absolute top-4 right-4 text-earth-800/30 hover:text-earth-800 transition-colors z-20"
                    aria-label="Dismiss success message"
                  >
                    <X size={24} />
                  </button>
                  <motion.div
                    className="w-20 h-20 bg-linear-to-br from-earth-600 to-earth-700 rounded-full flex items-center justify-center mx-auto mb-6 text-sand-100 shadow-lg"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
                    transition={{ duration: 0.8 }}
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h3 className="text-3xl font-serif font-bold text-earth-900 mb-4">Registration Successful!</h3>
                  <p className="text-earth-800/70 mb-8">Your warranty has been activated. A confirmation email has been sent to your inbox.</p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Another Product
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Name fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="firstName" className="text-xs font-bold text-earth-800/50 uppercase tracking-widest">First Name</label>
                      <motion.input 
                        id="firstName"
                        name="firstName"
                        type="text" 
                        required 
                        className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-earth-800/20 transition-all invalid:border-red-500" 
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <label htmlFor="lastName" className="text-xs font-bold text-earth-800/50 uppercase tracking-widest">Last Name</label>
                      <motion.input 
                        id="lastName"
                        name="lastName"
                        type="text" 
                        required 
                        className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-earth-800/20 transition-all invalid:border-red-500" 
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                  </div>

                  {/* Email field */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="text-xs font-bold text-earth-800/50 uppercase tracking-widest">Email Address</label>
                    <motion.input 
                      id="email"
                      name="email"
                      type="email" 
                      required 
                      className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-earth-800/20 transition-all invalid:border-red-500" 
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  {/* Order ID field */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <label htmlFor="orderId" className="text-xs font-bold text-earth-800/50 uppercase tracking-widest">Amazon Order ID</label>
                    <motion.input 
                      id="orderId"
                      name="orderId"
                      type="text" 
                      required 
                      placeholder="e.g. 123-4567890-1234567" 
                      className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-earth-800/20 transition-all invalid:border-red-500" 
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  {/* Product select */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="product" className="text-xs font-bold text-earth-800/50 uppercase tracking-widest">Product Purchased</label>
                    <motion.select 
                      id="product"
                      name="product"
                      className="w-full bg-sand-100 border border-sand-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-earth-800/20 transition-all"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option>Grounding Mat</option>
                      <option>Grounding Sheet</option>
                    </motion.select>
                  </motion.div>
                  
                  {/* Error message */}
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        className="text-red-600 text-sm font-medium"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Submit button */}
                  <motion.button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-bold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Activating...
                      </>
                    ) : (
                      <>
                        Activate Warranty
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WarrantySection;

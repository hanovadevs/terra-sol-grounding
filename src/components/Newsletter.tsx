import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="relative overflow-hidden bg-sand-50 py-16 sm:py-24">
      {/* Top subtle border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sand-300 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative bg-white rounded-[2.5rem] border border-sand-200 shadow-xl shadow-earth-900/5 overflow-hidden flex flex-col lg:flex-row items-center p-8 sm:p-12 lg:p-16 gap-10 lg:gap-16"
        >
          {/* Decorative soft lighting */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-earth-100/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sand-200/50 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          {/* Text Content */}
          <div className="relative z-10 flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand-100 border border-sand-200 text-[10px] font-bold uppercase tracking-widest text-earth-600 mb-6">
              <Sparkles size={12} /> Stay Informed
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-900 leading-[1.1] mb-4">
              Stay Grounded.<br className="hidden lg:block" />
              <span className="italic text-earth-600 font-normal"> Stay Connected.</span>
            </h2>
            <p className="text-sm sm:text-base text-earth-800/60 leading-relaxed max-w-md mx-auto lg:mx-0">
              Join our community for evidence-based insights, product updates, and exclusive wellness content.
            </p>
          </div>

          {/* Form Content */}
          <div className="relative z-10 w-full max-w-md lg:w-[420px] shrink-0">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 p-6 bg-earth-50 rounded-3xl border border-earth-100"
                >
                  <div className="w-12 h-12 rounded-full bg-earth-200 flex items-center justify-center text-earth-700 shadow-sm">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-earth-900 mb-1">You're on the list!</h4>
                    <p className="text-sm text-earth-800/70">Keep an eye on your inbox for our latest updates and guides.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3"
                >
                  <div className="relative w-full">
                    <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-earth-800/30 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-sand-300 bg-sand-50/50 text-earth-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-earth-600/20 focus:border-earth-600/40 transition-all placeholder:text-earth-800/30 shadow-inner"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-earth-900 text-sand-50 px-8 py-4 rounded-2xl font-bold text-sm shadow-lg shadow-earth-900/10 hover:bg-earth-800 transition-all group"
                  >
                    Subscribe Now
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                  <p className="mt-2 text-[10px] text-center lg:text-left text-earth-800/40 tracking-wide uppercase">
                    No spam. Unsubscribe anytime.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

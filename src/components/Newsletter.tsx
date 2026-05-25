import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // In production: POST to Mailchimp / Formspree / ConvertKit endpoint
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Gradient border top */}
      <div className="h-px bg-gradient-to-r from-transparent via-earth-800/15 to-transparent" />

      <div className="relative bg-gradient-to-b from-sand-200 via-sand-100 to-sand-200 py-14 sm:py-16">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-earth-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white shadow-[0_20px_60px_-15px_rgba(45,79,30,0.08)] p-6 sm:p-10 text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-earth-100 border border-earth-200 text-[10px] font-bold uppercase tracking-widest text-earth-700 mb-6"
            >
              <Sparkles size={12} /> Stay Informed
            </motion.div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-earth-900 mb-3">
              Stay Grounded. <span className="italic text-earth-600">Stay Informed.</span>
            </h2>
            <p className="text-sm sm:text-base text-earth-800/60 max-w-lg mx-auto leading-relaxed mb-8">
              Join our community for evidence-based grounding insights, product updates, and exclusive wellness content delivered to your inbox.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-3 py-4"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={22} />
                  </div>
                  <span className="font-bold text-earth-900">You're in! Check your inbox for a welcome note.</span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <div className="relative flex-1">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-earth-800/25 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-11 pr-4 py-4 rounded-2xl border border-sand-300 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-earth-600/20 focus:border-earth-600/30 transition-all placeholder:text-earth-800/25"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 bg-earth-900 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-lg shadow-earth-900/15 hover:bg-earth-800 transition-colors shrink-0"
                  >
                    Subscribe <ArrowRight size={16} />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>

            <p className="mt-6 text-[11px] text-earth-800/30">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

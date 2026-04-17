import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ShieldCheck, FileText, CheckCircle2, Mail, ExternalLink, Zap, Award, Activity } from 'lucide-react';

// ============================================================================
// HOW TO ATTACH YOUR GOOGLE FORM:
// 1. Go to your Google Form -> Click "Send" -> Select the "< >" (Embed) tab
// 2. Copy the URL inside the src="..." attribute.
// 3. Paste it inside the quotes below:
// ============================================================================
const GOOGLE_FORM_EMBED_URL = ''; 

const SUPPORT_EMAIL = 'support@terrasolgrounding.com';

const Warranty: React.FC = () => {
  const hasConfiguredGoogleForm = GOOGLE_FORM_EMBED_URL.startsWith('https://docs.google.com/forms/');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="pt-20 bg-sand-200 min-h-screen font-sans selection:bg-earth-800 selection:text-sand-100">
      
      {/* Super Premium Hero Section */}
      <div className="relative overflow-hidden bg-earth-900 py-20 sm:py-28 text-sand-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-earth-800/20 bg-radial from-earth-800/10 to-transparent blur-3xl opacity-50"
          />
          <motion.div 
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-radial from-earth-700/20 to-transparent blur-3xl opacity-30"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate={mounted ? "visible" : "hidden"} variants={containerVariants}>
            <motion.div variants={itemVariants} className="flex justify-center mb-6">
              <div className="relative inline-flex items-center justify-center p-4 rounded-full bg-earth-800/30 backdrop-blur-md border border-earth-700/50 shadow-[0_0_40px_rgba(45,79,30,0.3)] hover:shadow-[0_0_60px_rgba(45,79,30,0.5)] transition-shadow duration-500">
                <ShieldCheck className="text-sand-400" size={48} />
                <motion.div 
                  className="absolute inset-0 rounded-full border border-sand-400/30"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="mb-6 text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight">
              Activate Your <span className="italic text-sand-400">Guarantee</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-sand-100/70 leading-relaxed font-medium">
              Protect your bio-electrical investment. Register your Terra Sol grounding products below to instantly activate your 3-year conductivity warranty.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column - Premium Value Props */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:col-span-4"
          >
            <div className="rounded-3xl border border-sand-300/50 bg-white/60 backdrop-blur-lg p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-earth-900/5 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              <h2 className="mb-6 text-2xl font-serif font-bold text-earth-900 flex items-center gap-3">
                <Award className="text-earth-600" /> Why Register?
              </h2>
              
              <ul className="space-y-5">
                {[
                  { icon: Zap, title: "3-Year Protection", desc: "Full coverage for any loss of conductivity in our 12% silver fiber." },
                  { icon: Activity, title: "Priority Support", desc: "Skip the queue. Direct access to our wellness experts instantly." },
                  { icon: ShieldCheck, title: "Authenticity Proof", desc: "Verify your product is a scientifically-backed genuine original." }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex gap-4 group/item cursor-default"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="shrink-0 mt-1 w-8 h-8 rounded-full bg-sand-200 flex items-center justify-center text-earth-800 transition-colors group-hover/item:bg-earth-800 group-hover/item:text-sand-100">
                      <item.icon size={14} />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-earth-900 mb-1">{item.title}</span>
                      <span className="block text-[13px] text-earth-800/70 leading-relaxed">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-earth-900/10 bg-earth-900 text-sand-100 p-6 sm:p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-sand-100/5 to-transparent opacity-50" />
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <FileText size={18} className="text-sand-400" /> Need Order Details?
              </h3>
              <p className="text-sm text-sand-100/70 leading-relaxed mb-4">
                To verify authenticity, the form requires your <strong>Order ID</strong> (found in your email receipt from Amazon or our store).
              </p>
              <a href="/manual.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sand-400 hover:text-white transition-colors">
                Read User Manual <ExternalLink size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Google Form Embed */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="relative min-h-[600px] h-[800px] w-full overflow-hidden rounded-3xl border border-sand-300/60 bg-white shadow-[0_20px_50px_-12px_rgba(45,79,30,0.1)] group">
              
              {/* Glass Header for the Embed Frame */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-sand-100/80 backdrop-blur-md border-b border-sand-300/50 flex items-center px-4 z-20">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-sand-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-sand-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-sand-300" />
                </div>
                <div className="mx-auto text-[10px] font-bold tracking-widest text-earth-800/50 uppercase">Secure Verification Portal</div>
              </div>

              <div className="absolute inset-0 pt-10">
                {hasConfiguredGoogleForm ? (
                  <iframe
                    src={GOOGLE_FORM_EMBED_URL}
                    title="Warranty Registration Form"
                    className="w-full h-full bg-transparent"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                  >
                    Loading Secure Form...
                  </iframe>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-6 text-center bg-sand-50/50">
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Mail className="mb-6 text-earth-400 drop-shadow-md" size={56} />
                    </motion.div>
                    
                    <h3 className="mb-4 text-3xl font-serif font-bold text-earth-900">Form Not Yet Connected</h3>
                    <p className="mb-8 max-w-md leading-relaxed text-sm text-earth-800/70">
                      The Google verification form hasn't been linked. Until then, you can instantly activate your coverage by emailing our team directly.
                    </p>
                    
                    <div className="flex flex-col gap-4 w-full max-w-sm">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={`mailto:${SUPPORT_EMAIL}?subject=Terra%20Sol%20Warranty%20Registration`}
                        className="flex items-center justify-center gap-3 rounded-2xl bg-earth-800 px-6 py-4 text-sm font-bold text-sand-100 shadow-lg shadow-earth-800/20 transition-all hover:bg-earth-900 focus:outline-hidden focus:ring-4 focus:ring-earth-800/20"
                      >
                        <Mail size={18} /> Register via Email
                      </motion.a>
                      <div className="relative">
                        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-sand-300" />
                        <span className="relative inline-block bg-sand-50/50 px-4 text-xs font-medium text-earth-800/40">Instructions</span>
                      </div>
                      <div className="rounded-xl border border-earth-800/10 bg-white p-5 text-left text-xs leading-relaxed text-earth-800/70 shadow-sm">
                        Please include: <strong className="text-earth-900">Name</strong>, <strong className="text-earth-900">Order ID</strong>, <strong className="text-earth-900">Product</strong>, and <strong className="text-earth-900">Purchase Date</strong> in your email.
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Optional: Interactive glow effect on hover */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-earth-900/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Warranty;

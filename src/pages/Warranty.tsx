import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ShieldCheck, Send, CheckCircle2, Loader2, Upload, CalendarDays, Award, Zap, Activity, FileText, ExternalLink, AlertCircle, X, Headphones, Gift, Clock, Mail, Globe, Leaf } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

// ============================================================================
// GOOGLE SHEETS WEB APP URL
// After deploying your Google Apps Script as a web app, paste the URL below.
// See the setup guide in the artifacts for step-by-step instructions.
// ============================================================================
const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycby3-W6I7I_OhdaciGMkoiK7kQ605KTY7uFSeplSZ9dFXxCJTr_iNnsK0bra2FsTwluY/exec';

const SUPPORT_EMAIL = 'support@terrasolgrounding.com';

interface FormData {
  fullName: string;
  email: string;
  purchaseLocation: string;
  orderNumber: string;
  purchaseDate: string;
  registerWarranty: string;
  confirmAccurate: boolean;
  confirmNoAutoApproval: boolean;
  confirmTerms: boolean;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  purchaseLocation: '',
  orderNumber: '',
  purchaseDate: '',
  registerWarranty: 'Yes',
  confirmAccurate: false,
  confirmNoAutoApproval: false,
  confirmTerms: false,
};

const Warranty: React.FC = () => {
  const warrantySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://terrasolgrounding.com/warranty/#warrantypage",
    "name": "2-Year Premium Warranty Registration & Claims",
    "description": "Register your Terra Sol Grounding product warranty or submit a conductivity replacement claim. Guaranteed support for our 12% silver grounding sheets and mats.",
    "url": "https://terrasolgrounding.com/warranty"
  };

  useSEO({
    title: 'Lifetime Conductivity Warranty Registration',
    description: 'Register your Terra Sol product warranty. We stand behind our 12% silver fiber conductivity with a 2-year limited warranty and 100-night sleep trial.',
    schema: warrantySchema
  });

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [proofPreview, setProofPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be under 10 MB.');
        return;
      }
      setProofFile(file);
      setError(null);
      const reader = new FileReader();
      reader.onload = () => setProofPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const removeFile = () => {
    setProofFile(null);
    setProofPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate confirmations
    if (!formData.confirmAccurate || !formData.confirmNoAutoApproval || !formData.confirmTerms) {
      setError('Please confirm all required checkboxes before submitting.');
      return;
    }

    if (!proofFile) {
      setError('Please upload your proof of purchase.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Convert file to base64
      const fileBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = (reader.result as string).split(',')[1];
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(proofFile);
      });

      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        purchaseLocation: formData.purchaseLocation,
        orderNumber: formData.orderNumber,
        purchaseDate: formData.purchaseDate,
        registerWarranty: formData.registerWarranty,
        confirmAccurate: formData.confirmAccurate,
        confirmNoAutoApproval: formData.confirmNoAutoApproval,
        confirmTerms: formData.confirmTerms,
        fileName: proofFile.name,
        fileType: proofFile.type,
        fileData: fileBase64,
      };

      if (GOOGLE_SHEETS_WEB_APP_URL) {
        const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        // no-cors mode always returns opaque response, so we assume success
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
      setProofFile(null);
      setProofPreview(null);
    } catch (err) {
      setError('Something went wrong. Please try again or contact support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { label: 'Your Info', fields: ['fullName', 'email'] },
    { label: 'Purchase', fields: ['purchaseLocation', 'orderNumber', 'purchaseDate'] },
    { label: 'Upload & Confirm', fields: ['proofFile', 'confirmations'] },
  ];

  const inputClasses = "w-full bg-sand-50 border border-sand-300/80 rounded-2xl px-4 py-3.5 text-sm text-earth-900 font-medium placeholder:text-earth-800/30 focus:outline-none focus:ring-2 focus:ring-earth-600/30 focus:border-earth-600/40 transition-all";
  const labelClasses = "block text-[11px] font-bold text-earth-800/60 uppercase tracking-widest mb-2";
  const helperClasses = "text-[11px] text-earth-800/40 mt-1.5 leading-relaxed";

  return (
    <div className="pt-20 bg-sand-200 min-h-screen font-sans selection:bg-earth-800 selection:text-sand-100">

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-earth-900 py-14 sm:py-20 text-sand-100">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-earth-800/20 bg-radial from-earth-800/10 to-transparent blur-3xl opacity-50"
          />
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-radial from-earth-700/20 to-transparent blur-3xl opacity-30"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand-200 to-transparent z-10" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div variants={itemVariants} className="flex justify-center mb-6">
              <div className="relative inline-flex items-center justify-center p-4 rounded-full bg-earth-800/30 backdrop-blur-md border border-earth-700/50 shadow-[0_0_40px_rgba(45,79,30,0.3)]">
                <ShieldCheck className="text-sand-400" size={48} />
                <motion.div
                  className="absolute inset-0 rounded-full border border-sand-400/30"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="mb-4 text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">
              Product <span className="italic text-sand-400">Warranty</span> Registration
            </motion.h1>

            <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-sm sm:text-base text-sand-100/70 leading-relaxed font-medium">
              Register your Terra Sol grounding products for warranty reference. Our 2-Year Limited Manufacturing Warranty covers manufacturing defects in materials and workmanship.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Premium Warranty Card Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Background ambient effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-earth-700/5 blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-gold/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-earth-100 border border-earth-200 text-[10px] font-bold uppercase tracking-widest text-earth-700 mb-6">
              <Award size={12} /> Your Warranty Card
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-4 tracking-tight">
              What's <span className="italic text-earth-600">Included</span>
            </h2>
            <p className="text-sm sm:text-base text-earth-800/60 max-w-lg mx-auto leading-relaxed">
              Every Terra Sol product is backed by our comprehensive manufacturer warranty. Here's what you get.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">

            {/* LEFT CARD — Dark Warranty Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden bg-earth-950 text-sand-100 p-8 sm:p-10 shadow-2xl border border-earth-900 group"
            >
              {/* Grain overlay */}
              <div className="grain-overlay absolute inset-0 pointer-events-none" />

              {/* Decorative shimmer */}
              <div className="absolute inset-0 shimmer pointer-events-none opacity-50" />

              {/* Subtle corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent-gold/10 blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-earth-600/10 blur-[60px] pointer-events-none" />

              {/* Decorative border line */}
              <div className="absolute inset-4 rounded-[1.5rem] border border-white/[0.06] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
                {/* Logo area */}
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-full border border-accent-gold/30 flex items-center justify-center mx-auto mb-5 bg-earth-900/50 shadow-[0_0_30px_rgba(201,169,78,0.1)]">
                    <Leaf size={24} className="text-accent-gold/80" />
                  </div>
                  <h3 className="text-lg font-serif font-bold tracking-[0.12em] uppercase text-sand-100">Terra Sol</h3>
                  <span className="text-[8px] font-bold tracking-[0.3em] uppercase text-sand-100/30 block -mt-0.5">— Grounding —</span>
                </div>

                {/* Main warranty text */}
                <div className="mb-8">
                  <h4 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-2 tracking-tight">
                    2-Year
                  </h4>
                  <p className="text-sm sm:text-base font-bold uppercase tracking-[0.15em] text-sand-100/60">
                    Manufacturer Warranty
                  </p>
                </div>

                {/* Sub text */}
                <p className="text-sm text-sand-100/50 leading-relaxed max-w-xs mb-8">
                  Register within <span className="font-bold text-white">30 days</span> of purchase to activate your warranty.
                </p>

                {/* QR code placeholder */}
                <div className="bg-white rounded-2xl p-4 mb-6 shadow-lg">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-earth-950 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* QR code visual pattern */}
                    <div className="grid grid-cols-7 gap-[3px] p-2">
                      {Array.from({ length: 49 }).map((_, i) => {
                        const isCornerModule = 
                          (i < 3 || (i >= 4 && i < 7)) && (Math.floor(i/7) < 3) ||
                          (i % 7 < 3 && Math.floor(i/7) >= 4) ||
                          (i % 7 >= 4 && Math.floor(i/7) >= 4);
                        const isRandom = Math.random() > 0.45;
                        return (
                          <div
                            key={i}
                            className={`w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-[1px] ${
                              isCornerModule || isRandom ? 'bg-earth-950' : 'bg-transparent'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sand-100/40 mb-6 flex items-center gap-2">
                  <span className="w-5 h-px bg-sand-100/20" />
                  Scan to Register
                  <span className="w-5 h-px bg-sand-100/20" />
                </p>

                {/* Bottom trust badges */}
                <div className="flex items-center gap-6 pt-6 border-t border-white/[0.06] w-full justify-center">
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-sand-100/40">
                    <ShieldCheck size={14} className="text-accent-gold/60" />
                    Secure Registration
                  </div>
                  <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-sand-100/40">
                    <CheckCircle2 size={14} className="text-accent-gold/60" />
                    Your Purchase. Our Promise.
                  </div>
                </div>

                {/* URL */}
                <div className="mt-5 flex items-center gap-2 bg-white/5 border border-white/[0.06] rounded-full px-5 py-2.5">
                  <Globe size={12} className="text-accent-gold/50" />
                  <span className="text-[10px] font-bold tracking-wide text-sand-100/50">www.terrasolgrounding.com/warranty</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CARD — Light Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden bg-white border border-sand-300/50 p-8 sm:p-10 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)] flex flex-col"
            >
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-earth-600 via-accent-gold to-earth-400" />

              {/* Logo & intro */}
              <div className="text-center mb-8 pt-2">
                <div className="w-14 h-14 rounded-full border-2 border-earth-200 flex items-center justify-center mx-auto mb-4 bg-sand-50">
                  <Leaf size={22} className="text-earth-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-earth-900 uppercase tracking-wide">Thank You for Choosing Terra Sol</h3>
                <p className="text-sm text-earth-800/60 mt-2 leading-relaxed">
                  Register your product within <span className="font-bold text-earth-900">30 days</span> of purchase to activate your <span className="font-bold text-earth-900">2-Year Manufacturer Warranty</span>.
                </p>
              </div>

              {/* Benefit icons grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: ShieldCheck, title: '2-Year', subtitle: 'Manufacturer Warranty' },
                  { icon: Headphones, title: 'Priority', subtitle: 'Customer Support' },
                  { icon: Gift, title: 'Exclusive', subtitle: 'Product Updates' },
                  { icon: Clock, title: 'Faster', subtitle: 'Warranty Service' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-sand-100 border border-sand-200 flex items-center justify-center mb-3 group-hover:bg-earth-100 group-hover:border-earth-200 transition-colors duration-300">
                      <item.icon size={20} className="text-earth-700" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-earth-900 leading-tight">{item.title}</p>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-earth-800/40 leading-tight">{item.subtitle}</p>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-sand-200 mb-6" />

              {/* Warranty Information */}
              <div className="mb-8">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-earth-900 mb-4">Warranty Information</h4>
                <ul className="space-y-3">
                  {[
                    'Register your product online within 30 days of purchase.',
                    'Keep your proof of purchase.',
                    'Warranty applies to the original purchaser only.',
                    'Damage caused by misuse, modifications, improper installation, accidents, or normal wear is not covered.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-earth-800/70 leading-relaxed">
                      <Leaf size={12} className="text-earth-600 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="border-t border-sand-200 mb-6" />

              {/* Need Help */}
              <div className="bg-sand-50 rounded-2xl border border-sand-200 p-5 flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-earth-100 border border-earth-200 flex items-center justify-center shrink-0">
                  <Headphones size={18} className="text-earth-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-earth-900 mb-2">Need Help?</h4>
                  <div className="space-y-1.5">
                    <a href="mailto:support@terrasolgrounding.com" className="flex items-center gap-2 text-sm text-earth-800/60 hover:text-earth-700 transition-colors">
                      <Mail size={12} className="text-earth-600" />
                      support@terrasolgrounding.com
                    </a>
                    <a href="https://terrasolgrounding.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-earth-800/60 hover:text-earth-700 transition-colors">
                      <Globe size={12} className="text-earth-600" />
                      www.terrasolgrounding.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Closing message */}
              <div className="text-center mt-auto pt-4">
                <p className="text-sm italic text-earth-800/50 font-serif leading-relaxed">
                  We're here to help you stay grounded.<br />
                  Thank you for being part of the Terra Sol community.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-12 items-start">

          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:col-span-4"
          >
            {/* Value Props Card */}
            <div className="rounded-3xl border border-sand-300/50 bg-white/60 backdrop-blur-lg p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-earth-900/5 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              <h2 className="mb-6 text-2xl font-serif font-bold text-earth-900 flex items-center gap-3">
                <Award className="text-earth-600" /> Why Register?
              </h2>

              <ul className="space-y-5">
                {[
                  { icon: Zap, title: "2-Year Protection", desc: "Full coverage for any loss of conductivity in our 12% silver fiber." },
                  { icon: Activity, title: "Faster Support", desc: "Registration helps us verify your purchase faster if you need support." },
                  { icon: ShieldCheck, title: "Purchase Record", desc: "Keep a verified record of your purchase for future warranty reference." }
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

            {/* Important Notice */}
            <div className="rounded-3xl border border-amber-200/60 bg-amber-50/40 backdrop-blur-lg p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <h3 className="text-sm font-bold text-earth-900">Important Notice</h3>
              </div>
              <p className="text-[13px] text-earth-800/70 leading-relaxed">
                Registration does not extend, modify, or automatically approve warranty coverage. Proof of purchase and warranty eligibility may still be required for any future claim.
              </p>
            </div>

            {/* Need Help Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-earth-900/10 bg-earth-900 text-sand-100 p-6 sm:p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-sand-100/5 to-transparent opacity-50" />
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <FileText size={18} className="text-sand-400" /> Need Help?
              </h3>
              <p className="text-sm text-sand-100/70 leading-relaxed mb-4">
                For Amazon purchases, your order number can be found in your Amazon order history or confirmation email.
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=Warranty%20Registration%20Help`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sand-400 hover:text-white transition-colors"
              >
                Contact Support <ExternalLink size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="relative w-full overflow-hidden rounded-3xl border border-sand-300/60 bg-white shadow-[0_20px_50px_-12px_rgba(45,79,30,0.1)]">

              {/* Glass Header */}
              <div className="bg-sand-100/80 backdrop-blur-md border-b border-sand-300/50 px-6 sm:px-8 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-serif font-bold text-earth-900">Warranty Registration Form</h2>
                    <p className="text-[11px] text-earth-800/50 mt-1 font-medium">All fields marked with * are required</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    {steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${activeStep > idx
                            ? 'bg-earth-700 text-white'
                            : activeStep === idx
                              ? 'bg-earth-800 text-white shadow-lg shadow-earth-800/20'
                              : 'bg-sand-200 text-earth-800/40'
                          }`}>
                          {activeStep > idx ? <CheckCircle2 size={12} /> : idx + 1}
                        </div>
                        {idx < steps.length - 1 && (
                          <div className={`w-8 h-px transition-colors duration-300 ${activeStep > idx ? 'bg-earth-600' : 'bg-sand-300'}`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    className="p-8 sm:p-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-earth-600 to-earth-700 rounded-full flex items-center justify-center mx-auto mb-6 text-sand-100 shadow-xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.8 }}
                    >
                      <CheckCircle2 size={40} />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-3">Thank You for Registering!</h3>
                    <p className="text-sm text-earth-800/70 leading-relaxed max-w-lg mx-auto mb-3">
                      Your warranty registration has been received for reference. Please keep your order number and proof of purchase for future support.
                    </p>
                    <p className="text-sm text-earth-800/70 leading-relaxed max-w-lg mx-auto mb-8">
                      If you need help, please contact our support team at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-earth-600 font-bold hover:underline">{SUPPORT_EMAIL}</a>.
                    </p>
                    <motion.button
                      onClick={() => { setIsSubmitted(false); setActiveStep(0); }}
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
                    className="p-6 sm:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Step 1: Personal Info */}
                    <div className={activeStep === 0 ? 'block' : 'hidden'}>
                      <div className="mb-6">
                        <h3 className="text-base font-serif font-bold text-earth-900 mb-1">Personal Information</h3>
                        <p className="text-xs text-earth-800/50">Tell us who you are so we can associate the warranty with your account.</p>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className={inputClasses}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className={labelClasses}>Email Address *</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={inputClasses}
                          />
                        </div>
                      </div>

                      <div className="mt-8 flex justify-end">
                        <motion.button
                          type="button"
                          onClick={() => {
                            if (formData.fullName && formData.email) setActiveStep(1);
                            else setError('Please fill in your name and email.');
                          }}
                          className="flex items-center gap-2 rounded-2xl bg-earth-800 px-8 py-3.5 text-sm font-bold text-sand-100 shadow-lg shadow-earth-800/15 hover:bg-earth-900 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Continue <Send size={14} />
                        </motion.button>
                      </div>
                    </div>

                    {/* Step 2: Purchase Details */}
                    <div className={activeStep === 1 ? 'block' : 'hidden'}>
                      <div className="mb-6">
                        <h3 className="text-base font-serif font-bold text-earth-900 mb-1">Purchase Details</h3>
                        <p className="text-xs text-earth-800/50">Tell us about your purchase so we can verify and register it.</p>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <label htmlFor="purchaseLocation" className={labelClasses}>Where did you purchase the product? *</label>
                          <select
                            id="purchaseLocation"
                            name="purchaseLocation"
                            required
                            value={formData.purchaseLocation}
                            onChange={handleChange}
                            className={inputClasses}
                          >
                            <option value="">Select location...</option>
                            <option value="Amazon">Amazon</option>
                            <option value="Official website">Official website</option>
                            <option value="Authorized seller">Authorized seller</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="orderNumber" className={labelClasses}>Order Number *</label>
                          <input
                            id="orderNumber"
                            name="orderNumber"
                            type="text"
                            required
                            value={formData.orderNumber}
                            onChange={handleChange}
                            placeholder="e.g. 123-4567890-1234567"
                            className={inputClasses}
                          />
                          <p className={helperClasses}>For Amazon purchases, please enter your Amazon order number.</p>
                        </div>

                        <div>
                          <label htmlFor="purchaseDate" className={labelClasses}>Purchase Date *</label>
                          <div className="relative">
                            <input
                              id="purchaseDate"
                              name="purchaseDate"
                              type="date"
                              required
                              value={formData.purchaseDate}
                              onChange={handleChange}
                              className={inputClasses}
                            />
                            <CalendarDays size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-earth-800/30 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setActiveStep(0)}
                          className="text-sm font-bold text-earth-800/50 hover:text-earth-900 transition-colors"
                        >
                          ← Back
                        </button>
                        <motion.button
                          type="button"
                          onClick={() => {
                            if (formData.purchaseLocation && formData.orderNumber && formData.purchaseDate) setActiveStep(2);
                            else setError('Please fill in all purchase details.');
                          }}
                          className="flex items-center gap-2 rounded-2xl bg-earth-800 px-8 py-3.5 text-sm font-bold text-sand-100 shadow-lg shadow-earth-800/15 hover:bg-earth-900 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Continue <Send size={14} />
                        </motion.button>
                      </div>
                    </div>

                    {/* Step 3: Upload & Confirm */}
                    <div className={activeStep === 2 ? 'block' : 'hidden'}>
                      <div className="mb-6">
                        <h3 className="text-base font-serif font-bold text-earth-900 mb-1">Upload & Confirm</h3>
                        <p className="text-xs text-earth-800/50">Upload your proof of purchase and confirm the warranty registration terms.</p>
                      </div>

                      <div className="space-y-6">
                        {/* File Upload */}
                        <div>
                          <label className={labelClasses}>Upload Proof of Purchase *</label>
                          <div
                            className={`relative rounded-2xl border-2 border-dashed transition-all duration-300 ${proofFile
                                ? 'border-earth-600/40 bg-earth-50/30'
                                : 'border-sand-300 bg-sand-50/50 hover:border-earth-600/30 hover:bg-sand-100/50'
                              } p-6 text-center cursor-pointer`}
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*,.pdf"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                            {proofFile ? (
                              <div className="flex items-center gap-4">
                                {proofPreview && proofFile.type.startsWith('image/') && (
                                  <img src={proofPreview} alt="Preview" className="w-16 h-16 rounded-xl object-cover border border-sand-300/50" />
                                )}
                                <div className="text-left flex-1 min-w-0">
                                  <p className="text-sm font-bold text-earth-900 truncate">{proofFile.name}</p>
                                  <p className="text-[11px] text-earth-800/50">{(proofFile.size / 1024).toFixed(1)} KB</p>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => { e.stopPropagation(); removeFile(); }}
                                  className="shrink-0 w-8 h-8 rounded-full bg-sand-200 hover:bg-red-100 flex items-center justify-center text-earth-800/50 hover:text-red-600 transition-colors"
                                >
                                  <X size={14} />
                                </button>
                              </div>
                            ) : (
                              <>
                                <Upload size={28} className="mx-auto mb-3 text-earth-800/30" />
                                <p className="text-sm font-medium text-earth-900/80">Click to upload</p>
                                <p className="text-[11px] text-earth-800/40 mt-1">PNG, JPG, or PDF — Max 10 MB</p>
                              </>
                            )}
                          </div>
                          <p className={helperClasses}>Please upload a screenshot or receipt showing the order number and purchase date.</p>
                        </div>

                        {/* Warranty Registration Confirmation */}
                        <div>
                          <label className={labelClasses}>Do you want to register this purchase for warranty reference? *</label>
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center gap-2 rounded-xl border border-earth-600/30 bg-earth-50/50 px-4 py-2.5">
                              <input
                                type="radio"
                                id="registerYes"
                                name="registerWarranty"
                                value="Yes"
                                checked={formData.registerWarranty === 'Yes'}
                                onChange={handleChange}
                                className="accent-earth-700 w-4 h-4"
                              />
                              <label htmlFor="registerYes" className="text-sm font-bold text-earth-900 cursor-pointer">Yes</label>
                            </div>
                          </div>
                        </div>

                        {/* Confirmations */}
                        <div className="rounded-2xl border border-sand-300/60 bg-sand-50/50 p-5 space-y-4">
                          <p className={`${labelClasses} !mb-3`}>Customer Confirmation *</p>

                          {[
                            { name: 'confirmAccurate', label: 'I confirm that the information provided is accurate to the best of my knowledge.' },
                            { name: 'confirmNoAutoApproval', label: 'I understand that warranty registration does not automatically approve any future warranty claim.' },
                            { name: 'confirmTerms', label: 'I understand that warranty coverage is subject to the warranty terms, product condition, proper use, and proof of purchase.' },
                          ].map((item) => (
                            <label key={item.name} className="flex items-start gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                name={item.name}
                                checked={formData[item.name as keyof FormData] as boolean}
                                onChange={handleChange}
                                className="accent-earth-700 w-4 h-4 mt-0.5 shrink-0 rounded"
                                required
                              />
                              <span className="text-[13px] text-earth-800/80 leading-relaxed group-hover:text-earth-900 transition-colors">{item.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Error */}
                      <AnimatePresence>
                        {error && (
                          <motion.div
                            className="mt-4 flex items-center gap-2 text-red-600 text-sm font-medium bg-red-50 border border-red-200/50 rounded-xl px-4 py-3"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            <AlertCircle size={16} /> {error}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-8 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setActiveStep(1)}
                          className="text-sm font-bold text-earth-800/50 hover:text-earth-900 transition-colors"
                        >
                          ← Back
                        </button>
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex items-center gap-2 rounded-2xl bg-earth-800 px-8 py-3.5 text-sm font-bold text-sand-100 shadow-lg shadow-earth-800/15 hover:bg-earth-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        >
                          {isSubmitting ? (
                            <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                          ) : (
                            <><ShieldCheck size={16} /> Submit Registration</>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Warranty;

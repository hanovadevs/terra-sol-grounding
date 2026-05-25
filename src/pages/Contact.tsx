import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Shield, Package, Send, CheckCircle2 } from 'lucide-react';

const CONTACT_OPTIONS = [
  {
    icon: MessageSquare,
    title: 'General Inquiry',
    description: 'Questions about grounding, product usage, or our brand.',
    email: 'hello@terrasolgrounding.com',
    subject: 'General Inquiry',
  },
  {
    icon: Shield,
    title: 'Warranty Support',
    description: 'Warranty registration, conductivity issues, or replacements.',
    email: 'support@terrasolgrounding.com',
    subject: 'Warranty Support Request',
  },
  {
    icon: Package,
    title: 'Wholesale & Press',
    description: 'Bulk orders, media kits, or partnership opportunities.',
    email: 'partnerships@terrasolgrounding.com',
    subject: 'Wholesale / Press Inquiry',
  },
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to a backend / Formspree / Mailchimp
    const mailtoUrl = `mailto:support@terrasolgrounding.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.open(mailtoUrl, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="pt-20 bg-sand-200 min-h-screen selection:bg-earth-800 selection:text-sand-100">

      {/* Hero Header */}
      <div className="relative overflow-hidden bg-earth-900 text-sand-100 py-14 sm:py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/3 -left-1/4 w-[600px] h-[600px] rounded-full border border-earth-800/10 bg-radial from-earth-700/20 to-transparent blur-3xl opacity-50"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand-200 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-earth-800/50 backdrop-blur-md flex items-center justify-center text-sand-400 border border-earth-700/50 shadow-[0_0_30px_rgba(45,79,30,0.3)]">
                <Mail size={22} />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
              Get in <span className="italic text-sand-400">Touch</span>
            </h1>

            <p className="text-sm sm:text-base text-sand-100/70 max-w-2xl mx-auto font-medium leading-relaxed">
              Have a question, need support, or want to partner with us? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 -mt-24 relative z-30">
          {CONTACT_OPTIONS.map((option, idx) => (
            <motion.a
              key={idx}
              href={`mailto:${option.email}?subject=${encodeURIComponent(option.subject)}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white/80 backdrop-blur-xl rounded-[2rem] border border-sand-300/50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(45,79,30,0.08)] hover:border-earth-600/20 transition-all duration-500 hover:-translate-y-1 block"
            >
              <div className="w-12 h-12 rounded-2xl bg-earth-100 flex items-center justify-center text-earth-700 mb-6 group-hover:bg-earth-800 group-hover:text-white transition-all duration-500">
                <option.icon size={24} />
              </div>
              <h3 className="text-lg font-serif font-bold text-earth-900 mb-2">{option.title}</h3>
              <p className="text-sm text-earth-800/60 leading-relaxed mb-4">{option.description}</p>
              <span className="text-xs font-bold text-earth-600 group-hover:text-earth-800 transition-colors">{option.email}</span>
            </motion.a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column — Brand Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth-600 mb-4 block">Headquarters</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-earth-900 mb-6">Terra Sol Grounding</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center text-earth-700 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-earth-900 text-sm">Los Angeles, California</p>
                    <p className="text-sm text-earth-800/60">United States</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-earth-100 flex items-center justify-center text-earth-700 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-earth-900 text-sm">support@terrasolgrounding.com</p>
                    <p className="text-sm text-earth-800/60">We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-earth-900 text-sand-100 rounded-[2rem] p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-sand-100/5 to-transparent opacity-50" />
              <div className="relative z-10">
                <h3 className="text-xl font-serif font-bold mb-3">Response Times</h3>
                <ul className="space-y-3 text-sm text-sand-100/70">
                  <li className="flex justify-between"><span>General Inquiries</span> <span className="font-bold text-sand-300">Within 24 hrs</span></li>
                  <li className="flex justify-between"><span>Warranty Claims</span> <span className="font-bold text-sand-300">Within 12 hrs</span></li>
                  <li className="flex justify-between"><span>Wholesale / Press</span> <span className="font-bold text-sand-300">Within 48 hrs</span></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Soft background glow */}
            <div className="absolute -inset-4 bg-earth-100/50 rounded-[3rem] blur-2xl -z-10" />

            <div className="bg-white rounded-[2.5rem] border border-sand-200/80 p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
              <h3 className="text-2xl font-serif font-bold text-earth-900 mb-2">Send a Message</h3>
              <p className="text-sm text-earth-800/60 mb-8">Fill out the form below and we'll get back to you promptly.</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center bg-earth-50 rounded-3xl border border-earth-100"
                >
                  <div className="w-16 h-16 rounded-full bg-earth-200 flex items-center justify-center text-earth-700 mb-6 shadow-sm">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-earth-900 mb-2">Message Prepared!</h4>
                  <p className="text-sm text-earth-800/60">Your email client should have opened with the message. Send it to reach us.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold text-earth-700 mb-2 uppercase tracking-widest">Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50/50 text-earth-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-earth-600/20 focus:border-earth-600/40 transition-all shadow-inner"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-earth-700 mb-2 uppercase tracking-widest">Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50/50 text-earth-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-earth-600/20 focus:border-earth-600/40 transition-all shadow-inner"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-earth-700 mb-2 uppercase tracking-widest">Subject</label>
                    <div className="relative">
                      <select
                        value={formState.subject}
                        onChange={e => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl border border-sand-300 bg-sand-50/50 text-earth-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-earth-600/20 focus:border-earth-600/40 transition-all shadow-inner appearance-none cursor-pointer"
                      >
                        <option>General Inquiry</option>
                        <option>Warranty Support</option>
                        <option>Wholesale / Press</option>
                        <option>Product Question</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-earth-800/50">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-earth-700 mb-2 uppercase tracking-widest">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border border-sand-300 bg-sand-50/50 text-earth-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-earth-600/20 focus:border-earth-600/40 transition-all shadow-inner resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 bg-earth-900 text-sand-50 px-8 py-4 mt-2 rounded-2xl font-bold shadow-lg shadow-earth-900/10 hover:bg-earth-800 transition-all group"
                  >
                    <Send size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

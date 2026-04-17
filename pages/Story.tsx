import React from 'react';
import { motion } from 'framer-motion';
import StorySection from '../components/StorySection';
import { Leaf, ShieldCheck, Globe, ArrowRight } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <div className="pt-20 bg-sand-200 min-h-screen selection:bg-earth-800 selection:text-sand-100">
      <StorySection />

      {/* Our Values - Glassmorphism Restyle */}
      <div className="relative py-20 sm:py-28 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-earth-900/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-earth-800/20 to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Quality",
                icon: ShieldCheck,
                desc: "We use only the finest materials—12% silver fiber, Oeko-Tex certified organic cotton, and precision-engineered conductivity connectors."
              },
              {
                title: "Science",
                icon: Leaf,
                desc: "Every product is backed by peer-reviewed research, live blood analysis, thermal imaging, and biophysical validation."
              },
              {
                title: "Connection",
                icon: Globe,
                desc: "We believe everyone deserves access to the Earth's restorative energy, regardless of geography or modern lifestyle."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8 }}
                className="group bg-white/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(45,79,30,0.08)] transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-earth-900 text-sand-100 flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-earth-900 mb-4">{value.title}</h3>
                <p className="text-sm md:text-base text-earth-800/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Origin Story - Elegant Typography Block */}
      <div className="bg-earth-100/50 py-24 sm:py-32 border-y border-sand-300/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="block text-center text-xs font-bold tracking-[0.2em] text-earth-800/40 uppercase mb-4">The Origin</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-12 text-center">How Terra Sol Was Born</h2>

            <div className="space-y-6 text-base sm:text-lg text-earth-800/80 leading-loose prose prose-earth prose-p:font-medium">
              <p>
                Terra Sol Grounding was founded by a team of biophysicists, material scientists, and wellness advocates who became obsessed with one question: <span className="font-bold text-earth-900 bg-sand-300/30 px-1">Why had modern humanity lost its connection to Earth's healing energy, and what could restore it?</span>
              </p>
              <p>
                The founders noticed an uncomfortable pattern. Grounding products existed, but most were poorly designed, ineffective, and made with inferior materials. Silver concentrations of 3-5% meant they degraded within months.
              </p>
              <div className="pl-6 border-l-2 border-earth-400 my-8 italic text-earth-900 text-xl font-serif">
                "We decided to engineer the solution we couldn't find: a product that was scientifically validated, beautifully designed, and actually durable."
              </div>
              <p>
                The result was the Terra Sol grounding sheet—featuring a robust 12% silver fiber blend, precision gold connectors, and rigorous testing including live blood cell analysis and thermal imaging. Today, we've helped over 10,000 people reclaim their connection to Earth's natural energy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Impact & Statistics - Floating Numbers */}
      <div className="py-24 sm:py-32 relative overflow-hidden bg-earth-900 text-sand-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900 via-earth-900/90 to-earth-900" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Our Impact</h2>
            <p className="text-sand-100/60 max-w-xl mx-auto text-lg">Measurable results that define our commitment to your wellbeing.</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { stat: "10k+", label: "Happy Customers" },
              { stat: "100%", label: "Satisfaction Rate" },
              { stat: "3+ Yrs", label: "Product Lifespan" },
              { stat: "12%", label: "Pure Silver Yield" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.1, type: "spring" }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group p-8 rounded-3xl border border-sand-100/10 bg-sand-100/5 backdrop-blur-md overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-sand-100/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 text-4xl md:text-5xl font-serif font-bold text-sand-300 mb-3 drop-shadow-md">
                  {item.stat}
                </div>
                <p className="relative z-10 text-sm font-bold tracking-wider uppercase text-sand-100/50">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Sophisticated Finish */}
      <div className="bg-sand-200 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-xl border border-white p-12 md:p-20 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(45,79,30,0.1)]"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-earth-900 mb-6">Ready to Reconnect?</h2>
            <p className="text-earth-800/70 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
              Join thousands of people who've reclaimed their connection to Earth's natural energy. Experience the Terra Sol difference tonight.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="/products"
              className="inline-flex items-center gap-3 bg-earth-900 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-earth-900/20 hover:bg-earth-800 transition-colors"
            >
              Explore Our Collection <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Story;

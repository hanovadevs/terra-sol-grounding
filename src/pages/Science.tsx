import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScienceSection from '../components/ScienceSection';
import { Microscope, Zap, Thermometer, Droplets, Activity, Brain, ExternalLink, ArrowRight } from 'lucide-react';
import AmazonCTA from '../components/AmazonCTA';
import ReadingProgressBar from '../components/ReadingProgressBar';
import StepByStepGuide from '../components/StepByStepGuide';
import SheetUsageDetails from '../components/SheetUsageDetails';
import MatUsageDetails from '../components/MatUsageDetails';
import FAQSection from '../components/FAQSection';
import { scienceFaqs } from '../data/faqs';
import { researchArticles } from '../data/research';
import { useSEO } from '../hooks/useSEO';

const Science: React.FC = () => {
  const scienceSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://terrasolgrounding.com/science/#sciencepage",
    "name": "The Science of Earthing & Grounding Biophysics",
    "description": "Discover the biophysics of earthing: how the body absorbs free electrons from the Earth to neutralize positive radicals, lower cortisol, and balance the nervous system.",
    "url": "https://terrasolgrounding.com/science",
    "about": [
      {
        "@type": "Thing",
        "name": "Earthing",
        "sameAs": "https://en.wikipedia.org/wiki/Earthing_system"
      },
      {
        "@type": "Thing",
        "name": "Free radical",
        "sameAs": "https://en.wikipedia.org/wiki/Radical_(chemistry)"
      },
      {
        "@type": "Thing",
        "name": "Cortisol",
        "sameAs": "https://en.wikipedia.org/wiki/Cortisol"
      },
      {
        "@type": "Thing",
        "name": "Silver conductivity",
        "sameAs": "https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity"
      }
    ]
  };

  useSEO({
    title: 'The Science of Earthing | How Grounding Works',
    description: 'Discover the biophysics of earthing: how the body absorbs free electrons from the Earth to neutralize positive radicals, lower cortisol, and balance the nervous system.',
    schema: scienceSchema
  });

  return (
    <div className="pt-20 bg-sand-200 min-h-screen selection:bg-earth-800 selection:text-sand-100">
      <ReadingProgressBar />
      <ScienceSection />
      
      {/* The Conductivity Crisis - Elegant Editorial Style */}
      <div className="bg-white py-24 sm:py-32 border-b border-sand-300/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-earth-600 uppercase mb-4">The Industry Problem</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-4 sm:mb-6">The Conductivity Crisis</h2>
          </motion.div>

          <div className="p-6 sm:p-8 md:p-12 bg-sand-50 rounded-[2rem] sm:rounded-[2.5rem] border border-sand-300/50 shadow-inner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-earth-900/5 rounded-full blur-[80px]" />
            <div className="relative z-10 space-y-6 text-base sm:text-lg text-earth-800/80 leading-relaxed font-medium">
              <p>
                The grounding industry is currently facing a material science crisis. Standard silver-threaded sheets often contain only 3-5% silver, making them highly susceptible to losing conductivity as the fibers degrade from washing and use.
              </p>
              <div className="py-4 border-y border-earth-900/10 my-8">
                <p className="font-serif italic text-earth-900 text-xl md:text-2xl text-center">
                  Within 6 to 12 months, tracking shows that many standard grounding products lose their electrical continuity entirely.
                </p>
              </div>
              <p>
                Terra Sol solves this by utilizing a high-density <span className="text-earth-700 font-bold bg-earth-900/5 px-2 rounded-md">12% Silver Fiber blend</span>. This significantly higher silver concentration ensures a more robust and durable conductive network that maintains its efficacy for 3+ years.
              </p>
            </div>
          </div>
          
          {/* Empirical Studies - Glass Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(45,79,30,0.1)] border border-earth-900/5 group hover:border-earth-900/20 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-earth-100 flex items-center justify-center text-earth-800">
                  <Droplets size={20} className="sm:hidden" />
                  <Droplets size={24} className="hidden sm:block" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-earth-900">Live Blood Analysis</h3>
              </div>
              <p className="text-xs sm:text-sm text-earth-800/70 mb-6 leading-relaxed">
                Microscopic observation shows that grounding rapidly decouples clumped red blood cells, improving circulation within 15 minutes.
              </p>
              <div className="bg-sand-50 rounded-xl p-4 mb-6 border border-sand-300/50">
                <p className="text-xs text-earth-600 font-bold uppercase tracking-wider mb-3">Key Deliverables</p>
                <ul className="text-sm font-medium text-earth-800 space-y-2">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-earth-600"/> Improved cell separation</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-earth-600"/> Enhanced oxygenation</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-earth-600"/> Reduced blood viscosity</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl h-48 bg-earth-900/5">
                <img src="/images/DSC02539.JPG" alt="Live blood analysis" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(45,79,30,0.1)] border border-earth-900/5 group hover:border-earth-900/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-earth-100 flex items-center justify-center text-earth-800">
                  <Thermometer size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-earth-900">Thermal Imaging</h3>
              </div>
              <p className="text-sm text-earth-800/70 mb-6 leading-relaxed">
                Thermal scans demonstrate a significant reduction in localized inflammation and heat signatures following nocturnal grounding.
              </p>
              <div className="bg-sand-50 rounded-xl p-4 mb-6 border border-sand-300/50">
                <p className="text-xs text-earth-600 font-bold uppercase tracking-wider mb-3">Key Deliverables</p>
                <ul className="text-sm font-medium text-earth-800 space-y-2">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-earth-600"/> Reduced inflammation zones</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-earth-600"/> Normalized temp distribution</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-earth-600"/> Systemic circulation boost</li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-xl h-48 bg-earth-900/5">
                <img src="/images/DSC02547.JPG" alt="Thermal imaging" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Mechanism - Dark Mode Tech Data */}
      <div className="bg-earth-900 text-sand-100 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-earth-800/20 via-transparent to-transparent opacity-50" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">How Grounding Works</h2>
            <div className="w-24 h-px bg-sand-100/20 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: Zap, title: "The Electron Transfer", text: "The Earth's surface carries a subtle negative electrical charge. These free electrons flow into your body, immediately neutralizing harmful free radicals and stabilizing your cellular voltage." },
              { icon: Activity, title: "Bioelectrical Restoration", text: "Modern lifestyles have disconnected us from these grounding influences, contributing to chronic inflammation. Grounding restores these critical bioelectrical patterns within minutes." },
              { icon: Brain, title: "Cortisol Normalization", text: "Studies show that grounding normalizes cortisol rhythms. Participants who ground for just 30 minutes experience measurable reductions in stress hormones and improved sleep quality." },
              { icon: Microscope, title: "Inflammation Suppression", text: "By normalizing your cellular voltage and providing abundant free electrons, grounding suppresses the inflammatory cascade at its source, leading to reduced pain and faster recovery." }
            ].map((mech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex gap-6 group"
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-earth-800 border border-earth-700/50 flex items-center justify-center text-sand-300 group-hover:bg-sand-300 group-hover:text-earth-900 transition-colors duration-500">
                  <mech.icon size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sand-100 mb-3 group-hover:text-sand-300 transition-colors">{mech.title}</h3>
                  <p className="text-sand-100/60 leading-relaxed font-medium">{mech.text}</p>
                </div>
              </motion.div>
            ))}
            <AmazonCTA url="#amazon" text="Experience the Science Today" />
          </div>
        </div>
      </div>

      <StepByStepGuide />
      <SheetUsageDetails />
      <MatUsageDetails />

      {/* Grounding in Practice - Masonry Gallery */}
      <div className="py-24 bg-white border-y border-sand-300/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-earth-600 uppercase mb-4">Real World Application</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-4 sm:mb-6">Grounding in Practice</h2>
            <p className="text-earth-800/70 max-w-2xl mx-auto text-base sm:text-lg">Biophysics meets daily life. Authentic integration of Terra Sol technology in modern environments.</p>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              "/images/DSC02492.JPG",
              "/images/DSC02496.JPG",
              "/images/DSC02500.JPG",
              "/images/DSC02504.JPG",
              "/images/DSC02511.JPG",
              "/images/DSC02558s.JPG"
            ].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-[2rem] overflow-hidden border border-sand-300/50 shadow-sm hover:shadow-xl transition-all duration-500 group break-inside-avoid"
              >
                <div className="absolute inset-0 bg-earth-900/10 mix-blend-overlay z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                <img 
                  src={src} 
                  alt={`Grounding in practice ${idx + 1}`} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>



      {/* Published Research Preview */}
      <div className="bg-white py-20 sm:py-24 border-y border-sand-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-earth-600 mb-4 block">Peer-Reviewed Evidence</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-earth-900 mb-4">Published Research</h2>
            <p className="text-sm sm:text-base text-earth-800/60 max-w-lg mx-auto leading-relaxed">
              These findings come from real clinical studies published in accredited medical journals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {researchArticles.slice(0, 3).map((article, idx) => (
              <motion.a
                key={article.id}
                href={article.pubmedUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-sand-50 rounded-2xl border border-sand-300/40 p-6 hover:shadow-lg hover:border-earth-600/20 transition-all duration-500 hover:-translate-y-1"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-earth-600 block mb-3">{article.journal} ({article.year})</span>
                <h3 className="text-sm font-serif font-bold text-earth-900 leading-snug mb-3 group-hover:text-earth-700 transition-colors">{article.title}</h3>
                <p className="text-xs text-earth-800/50 mb-4 line-clamp-2">{article.summary}</p>
                <span className="flex items-center gap-1 text-xs font-bold text-earth-600">
                  Read Study <ExternalLink size={10} />
                </span>
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 px-6 py-3 bg-earth-900 text-white rounded-2xl font-bold text-sm hover:bg-earth-800 transition-colors shadow-lg shadow-earth-900/15"
            >
              View All {researchArticles.length} Studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <FAQSection 
        faqs={scienceFaqs} 
        title="Scientific FAQ" 
        subtitle="Evidence-based biophysical answers to common questions about electron transfer and inflammation." 
      />
    </div>
  );
};

export default Science;

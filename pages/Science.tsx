import React from 'react';
import { motion } from 'framer-motion';
import ScienceSection from '../components/ScienceSection';

const Science: React.FC = () => {
  return (
    <div className="pt-20">
      <ScienceSection />
      
      {/* The Conductivity Crisis */}
      <div className="bg-sand-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-4 sm:mb-6">The Conductivity Crisis</h2>
            <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm md:text-base lg:text-lg text-earth-800/80 leading-relaxed">
              <p>
                The grounding industry is currently facing a material science crisis. Standard silver-threaded sheets often contain only 3-5% silver, making them highly susceptible to losing conductivity as the fibers degrade from washing and use.
              </p>
              <p className="font-bold text-earth-900 text-lg">
                Within 6 to 12 months, many standard grounding products lose their electrical continuity, rendering them ineffective.
              </p>
              <p>
                Terra Sol solves this by utilizing a high-density <span className="text-earth-700 font-bold">12% Silver Fiber blend</span> with 88% pure cotton. This significantly higher silver concentration ensures a more robust and durable conductive network that maintains its efficacy for 3+ years, providing a reliable connection to the Earth's natural energy.
              </p>
            </div>
          </motion.div>
          
          {/* Empirical Studies */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-earth-900/5"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-earth-900 mb-3">Live Blood Analysis</h3>
              <p className="text-xs sm:text-sm text-earth-800/70 mb-4">
                Microscopic observation shows that grounding rapidly decouples clumped red blood cells, improving circulation and oxygenation within 15 minutes of contact.
              </p>
              <p className="text-xs text-earth-600 font-bold uppercase tracking-wide mb-4">Key Findings:</p>
              <ul className="text-xs text-earth-700 space-y-2 mb-6">
                <li>✓ Improved red blood cell separation</li>
                <li>✓ Enhanced cellular oxygenation</li>
                <li>✓ Reduced blood viscosity</li>
                <li>✓ Better microcirculation</li>
              </ul>
              <img src="/DSC02531.JPG" alt="Live blood analysis" className="w-full h-48 object-cover rounded-xl" referrerPolicy="no-referrer" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-earth-900/5"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-earth-900 mb-3">Thermal Imaging</h3>
              <p className="text-xs sm:text-sm text-earth-800/70 mb-4">
                Thermal scans demonstrate a significant reduction in localized inflammation and heat signatures following a single session of nocturnal grounding.
              </p>
              <p className="text-xs text-earth-600 font-bold uppercase tracking-wide mb-4">Key Findings:</p>
              <ul className="text-xs text-earth-700 space-y-2 mb-6">
                <li>✓ 2-3°C reduction in inflammation zones</li>
                <li>✓ Normalized temperature distribution</li>
                <li>✓ Improved systemic circulation</li>
                <li>✓ Reduced pain hotspots</li>
              </ul>
              <img src="/DSC02532.JPG" alt="Thermal imaging" className="w-full h-48 object-cover rounded-xl" referrerPolicy="no-referrer" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* The Mechanism */}
      <div className="bg-earth-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">How Grounding Works</h2>
            <div className="space-y-8 text-base md:text-lg text-gray-200 leading-relaxed">
              <div>
                <h3 className="text-2xl font-bold text-earth-300 mb-3">The Electron Transfer</h3>
                <p>
                  When your body makes direct physical contact with the Earth through our grounding products, a remarkable biological process begins. The Earth's surface carries a subtle negative electrical charge from free electrons constantly produced by natural atmospheric processes. These free electrons flow into your body, immediately neutralizing harmful free radicals and stabilizing your cellular voltage.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-earth-300 mb-3">Bioelectrical Restoration</h3>
                <p>
                  Your body operates on intricate electrical gradients, particularly across cell membranes. Modern lifestyles—with rubber-soled shoes, concrete floors, and indoor living—have disconnected us from these grounding influences. This disconnection contributes to chronic inflammation, poor sleep quality, and compromised immune function. Grounding restores these critical bioelectrical patterns within minutes.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-earth-300 mb-3">Cortisol Normalization</h3>
                <p>
                  Studies show that grounding normalizes cortisol rhythms, your body's primary stress hormone. Participants who ground for just 30 minutes experience measurable reductions in cortisol levels and improved sleep quality. Over time, consistent grounding reestablishes healthy diurnal cortisol patterns, enhancing both daytime alertness and nocturnal rest.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-earth-300 mb-3">Inflammatory Response Suppression</h3>
                <p>
                  Chronic inflammation underlies most modern diseases—heart disease, arthritis, autoimmune conditions, and more. By normalizing your cellular voltage and providing abundant free electrons, grounding suppresses the inflammatory cascade at its source. This leads to reduced pain, faster recovery from exercise, and enhanced natural healing capacity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Research & Evidence */}
      <div className="bg-sand-100 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">Research & Evidence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-earth-300">
                <h4 className="text-lg font-bold text-earth-900 mb-2">Sleep & Recovery</h4>
                <p className="text-sm text-earth-700">
                  Multiple peer-reviewed studies demonstrate that grounding improves sleep quality, reduces sleep onset latency, and enhances REM sleep duration—crucial for memory consolidation and cellular repair.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-earth-300">
                <h4 className="text-lg font-bold text-earth-900 mb-2">Inflammation Markers</h4>
                <p className="text-sm text-earth-700">
                  Research shows grounding reduces inflammatory markers including C-reactive protein (CRP) and cytokines, with effects visible within 30 minutes of grounding contact.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-earth-300">
                <h4 className="text-lg font-bold text-earth-900 mb-2">Muscle Recovery</h4>
                <p className="text-sm text-earth-700">
                  Athletes using grounding experience reduced delayed-onset muscle soreness (DOMS), improved strength recovery, and faster return to baseline performance metrics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-earth-300">
                <h4 className="text-lg font-bold text-earth-900 mb-2">Autonomic Balance</h4>
                <p className="text-sm text-earth-700">
                  Grounding shifts the nervous system toward parasympathetic dominance, reducing heart rate variability and promoting a state of calm restoration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-8">Common Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How long does grounding take to work?",
                  a: "Most people feel effects within 15-30 minutes of contact. Measurable physiological changes appear within this timeframe. However, optimal benefits develop over weeks of consistent use as your body reestablishes bioelectrical balance."
                },
                {
                  q: "Is grounding safe for everyone?",
                  a: "Yes, grounding is completely safe. It's a natural process that restores your body's connection to Earth. However, those with pacemakers should consult their physician. Grounding is particularly beneficial for athletes, chronic pain sufferers, and anyone struggling with sleep."
                },
                {
                  q: "Why do some people feel results immediately while others don't?",
                  a: "Individual sensitivity varies based on baseline inflammation levels, toxin load, and nervous system state. Highly inflamed individuals may experience dramatic effects immediately, while well-optimized individuals may notice subtler shifts in energy and clarity."
                },
                {
                  q: "Can I use grounding products with other wellness practices?",
                  a: "Absolutely. Grounding synergizes beautifully with meditation, yoga, breathwork, and exercise. In fact, grounding amplifies the benefits of these practices by optimizing your nervous system's baseline state."
                },
                {
                  q: "What's the science behind the 12% silver concentration?",
                  a: "Higher silver concentration ensures superior electron conductivity and longevity. While 3-5% silver loses effectiveness within 12 months, our 12% blend maintains full conductivity for 3+ years, even with regular washing."
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-sand-50 p-6 rounded-2xl border border-sand-300"
                >
                  <h4 className="text-lg font-bold text-earth-900 mb-3">{faq.q}</h4>
                  <p className="text-sm text-earth-700">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Science;

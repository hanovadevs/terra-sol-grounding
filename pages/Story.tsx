import React from 'react';
import { motion } from 'framer-motion';
import StorySection from '../components/StorySection';

const Story: React.FC = () => {
  return (
    <div className="pt-20">
      <StorySection />
      
      {/* Our Values */}
      <div className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-6 sm:mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              {[
                {
                  title: "Quality",
                  icon: "⚡",
                  desc: "We use only the finest materials—12% silver fiber, Oeko-Tex certified organic cotton, and precision-engineered conductivity connectors—ensuring our products are both effective and durable for 3+ years of reliable use."
                },
                {
                  title: "Science",
                  icon: "🔬",
                  desc: "Every product we develop is backed by peer-reviewed research, live blood analysis, thermal imaging, and comprehensive biophysical validation. We don't make claims without evidence."
                },
                {
                  title: "Connection",
                  icon: "🌍",
                  desc: "Our goal is to help you reconnect with the natural world in a modern environment. We believe everyone deserves access to the Earth's restorative energy, regardless of geography or lifestyle."
                }
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-sand-50 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-sand-300"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">{value.icon}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-earth-900 mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-earth-800/70">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-sand-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-earth-900 mb-6 sm:mb-8">How Terra Sol Was Born</h2>
            <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm md:text-base lg:text-lg text-earth-800/80 leading-relaxed">
              <p>
                Terra Sol Grounding was founded by a team of biophysicists, material scientists, and wellness advocates who became obsessed with one question: <span className="font-bold text-earth-900">Why had modern humanity lost its connection to Earth's healing energy, and what could restore it?</span>
              </p>
              <p>
                The founders noticed an uncomfortable pattern. Grounding products existed, but most were poorly designed, ineffective, and made with inferior materials. Silver concentrations of 3-5% meant they degraded within months. Mattress placements were awkward. Connection methods were unreliable. Worse, there was little transparency about the actual science behind why grounding worked.
              </p>
              <p>
                In 2020, during a period when disconnection from nature became even more pronounced, they decided to engineer the solution they couldn't find: a grounding product that was <span className="text-earth-700 font-bold">scientifically validated, meticulously engineered, beautifully designed, and actually durable.</span>
              </p>
              <p>
                The result was the Terra Sol grounding sheet—featuring 12% silver fiber blend, Oeko-Tex certification, precision gold connectors, and a design that worked seamlessly with modern bedrooms. But more importantly, they stood behind the product with rigorous testing: live blood cell analysis, thermal imaging, cortisol measurement, and comprehensive sleep studies.
              </p>
              <p>
                Today, Terra Sol has helped over 10,000 people reclaim their connection to Earth's natural energy. But this is just the beginning. We're expanding our product line to serve different lifestyles—mats for office workers, portable grounding patches for travelers, meditation rugs for yoga practitioners. Every product follows the same scientific rigor and material excellence that defines our brand.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-earth-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Our Mission</h2>
            <div className="space-y-6 text-base md:text-lg text-gray-200 leading-relaxed">
              <p>
                We believe that bioelectrical health is fundamental to human wellbeing. In disconnecting from Earth—through concrete buildings, rubber shoes, and indoor living—we've inadvertently triggered a silent health crisis. Chronic inflammation, sleep disorders, autoimmune disease, and chronic pain have exploded in prevalence as our connection to Earth's healing energy has vanished.
              </p>
              <p>
                <span className="font-bold text-earth-300">Terra Sol's mission is to democratize access to grounding.</span> We want every person—regardless of where they live, what they do, or their health status—to have the opportunity to reconnect with Earth's natural energy and experience the profound restoration it offers.
              </p>
              <p>
                We're not selling a product. We're selling a return to biological normalcy. A pathway to sleep that heals. Inflammation that fades. Energy that returns. Recovery that accelerates. We're building a movement of people who understand that their health isn't separate from their connection to the planet—and who are willing to reclaim it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Impact & Statistics */}
      <div className="bg-sand-100 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-8">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { stat: "10k+", label: "Happy Customers" },
                { stat: "100%", label: "Customer Satisfaction" },
                { stat: "3+ yrs", label: "Product Durability" },
                { stat: "12%", label: "Silver Concentration" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl text-center border border-sand-300"
                >
                  <div className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-2">
                    {item.stat}
                  </div>
                  <p className="text-sm text-earth-700">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-8">Our Commitment to You</h2>
            <div className="space-y-4">
              {[
                "100% satisfaction guarantee—if you don't feel results within 60 days, full refund.",
                "Complete transparency about materials, sourcing, and scientific validation.",
                "Dedicated customer support—we're here to help you optimize your grounding practice.",
                "Continuous research—we're always exploring new ways grounding can enhance human health.",
                "Ethical sourcing—all materials are ethically sourced and environmentally responsible.",
                "No hidden fees—transparent pricing with industry-leading durability."
              ].map((commitment, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-sand-50 rounded-lg border-l-4 border-earth-600"
                >
                  <span className="text-earth-600 font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-earth-800">{commitment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-earth-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Reconnect?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of people who've reclaimed their connection to Earth's natural energy. Experience the Terra Sol difference.
            </p>
            <a
              href="/products"
              className="inline-block bg-earth-600 hover:bg-earth-700 text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              Explore Our Products
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Story;

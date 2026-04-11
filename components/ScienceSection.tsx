import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Zap, Sun, Wind, CheckCircle2 } from 'lucide-react';
import { BENEFITS } from '../constants';

const ScienceSection: React.FC = () => {
  const icons: Record<string, React.ReactNode> = {
    Moon: <Moon size={20} />,
    Zap: <Zap size={20} />,
    Sun: <Sun size={20} />,
    Wind: <Wind size={20} />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="science" className="section-padding bg-earth-900 text-white overflow-hidden relative">
      {/* Static decorative elements - removed infinite animations for performance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-earth-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-earth-700/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight\"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              The Science of <br />
              <span className="italic text-earth-500 relative">
                Grounding
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-linear-to-r from-earth-500 to-transparent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-base text-sand-300 mb-6 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Grounding, also known as earthing, is the biophysical practice of connecting your body to the Earth's natural negative electrical charge. This connection allows free electrons to flow into your body, neutralizing free radicals and restoring bio-electrical homeostasis.
            </motion.p>
            
            <div className="space-y-4 mb-8">
              {[
                {
                  title: '12% Silver Fiber Blend',
                  description: 'Our premium Oeko-Tex certified blend of 12% silver fiber and 88% organic cotton ensures superior conductivity and comfort for 3+ years.',
                },
                {
                  title: 'Empirical Validation',
                  description: 'Verified through Live Blood Cell Analysis and Thermal Imaging to demonstrate immediate physiological impact.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-earth-800 flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <CheckCircle2 size={16} className="text-earth-500" />
                  </motion.div>
                  <div>
                    <h4 className="text-sm sm:text-base font-serif font-bold mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-sand-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl border border-earth-800/50"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <img 
                src="/DSC02530.JPG" 
                alt="Conductivity testing" 
                className="w-full h-48 object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right side benefits grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {BENEFITS.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                className="bg-earth-800/40 backdrop-blur-sm p-5 sm:p-6 rounded-3xl border border-earth-700/30 hover:bg-earth-800/60 transition-all group"
                whileHover={{ y: -8, borderColor: 'rgba(87, 153, 59, 0.3)' }}
              >
                <motion.div
                  className="text-earth-500 mb-4 inline-block"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {icons[benefit.icon]}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-2 group-hover:text-earth-400 transition-colors">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-sand-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;

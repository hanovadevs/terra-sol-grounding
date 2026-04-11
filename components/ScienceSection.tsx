import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Zap, Sun, Wind, CheckCircle2 } from 'lucide-react';
import { BENEFITS } from '../constants';

const ScienceSection: React.FC = () => {
  const icons: Record<string, React.ReactNode> = {
    Moon: <Moon size={32} />,
    Zap: <Zap size={32} />,
    Sun: <Sun size={32} />,
    Wind: <Wind size={32} />,
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
    <section id="science" className="section-padding bg-earth-900 text-sand-100 overflow-hidden relative">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-earth-800/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-earth-700/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight"
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
              className="text-lg text-sand-300 mb-10 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Grounding, also known as earthing, is the biophysical practice of connecting your body to the Earth's natural negative electrical charge. This connection allows free electrons to flow into your body, neutralizing free radicals and restoring bio-electrical homeostasis.
            </motion.p>
            
            <div className="space-y-6 mb-12">
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
                    className="w-10 h-10 rounded-full bg-earth-800 flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <CheckCircle2 size={20} className="text-earth-500" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-serif font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-sand-300">{item.description}</p>
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
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>

          {/* Right side benefits grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {BENEFITS.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                className="bg-earth-800/40 backdrop-blur-sm p-8 rounded-3xl border border-earth-700/30 hover:bg-earth-800/60 transition-all group"
                whileHover={{ y: -8, borderColor: 'rgba(87, 153, 59, 0.3)' }}
              >
                <motion.div
                  className="text-earth-500 mb-6 inline-block"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {icons[benefit.icon]}
                </motion.div>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-earth-400 transition-colors">{benefit.title}</h3>
                <p className="text-sm text-sand-300 leading-relaxed">
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

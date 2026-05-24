import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const GroundingMatsSection: React.FC = () => {
  const mats = [
    {
      id: 'recovery',
      title: 'Full Recovery Mat',
      size: '27x60 in',
      price: '$99.99',
      desc: 'Extended coverage for nightly bed recovery.',
      image: 'https://m.media-amazon.com/images/I/414xCQgT3-L._AC_SL1500_.jpg',
      url: 'https://www.amazon.com/dp/B0FSKXWDCW',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 'yoga',
      title: 'Yoga & Standing',
      size: '29x12.5 in',
      price: '$89.99',
      desc: 'Versatile format for standing desks and mobility.',
      image: 'https://m.media-amazon.com/images/I/41OX9x+lJAL._AC_SL1500_.jpg',
      url: 'https://www.amazon.com/dp/B0FSKX34W5',
      className: 'md:col-span-1 md:row-span-2'
    },
    {
      id: 'focus',
      title: 'Compact Focus Mat',
      size: '24x16 in',
      price: '$79.99',
      desc: 'Perfect footprint for office chairs and desk setups.',
      image: 'https://m.media-amazon.com/images/I/41G589vrnSL._AC_SL1500_.jpg',
      url: 'https://www.amazon.com/dp/B0DM4B7LVZ',
      className: 'md:col-span-3 md:row-span-1 flex-row items-center'
    }
  ];

  return (
    <section id="mats" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-earth-600 uppercase mb-4">Targeted Support</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">Carbon Vegan Leather Mats</h2>
          <p className="text-earth-800/70 text-base sm:text-lg max-w-2xl mx-auto">
            Wipe-clean convenience meets exceptional conductivity. Designed to seamlessly integrate grounding into your workday, yoga practice, or targeted recovery sessions.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[300px] md:auto-rows-[250px]">
          
          {/* Recovery Mat - Large Box */}
          <motion.a
            href={mats[0].url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-3xl bg-sand-50 p-8 border border-sand-300/50 hover:shadow-2xl transition-all duration-500 ${mats[0].className}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-transparent z-10" />
            <img 
              src={mats[0].image} 
              alt={mats[0].title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
              loading="lazy"
            />
            <div className="absolute inset-x-8 bottom-8 z-20 flex justify-between items-end">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-earth-300 mb-2">{mats[0].size} • {mats[0].price}</p>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">{mats[0].title}</h3>
                <p className="text-sand-100/80 max-w-sm">{mats[0].desc}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-earth-900 flex items-center justify-center transform group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </motion.a>

          {/* Yoga Mat - Tall Box */}
          <motion.a
            href={mats[1].url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-3xl bg-sand-50 p-8 border border-sand-300/50 hover:shadow-2xl transition-all duration-500 ${mats[1].className}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-transparent z-10" />
            <img 
              src={mats[1].image} 
              alt={mats[1].title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 mix-blend-multiply object-center"
              loading="lazy"
            />
            <div className="absolute inset-x-6 bottom-6 z-20">
              <p className="text-[10px] font-bold tracking-widest uppercase text-earth-300 mb-2">{mats[1].size} • {mats[1].price}</p>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">{mats[1].title}</h3>
              <p className="text-sand-100/80 text-sm mb-4">{mats[1].desc}</p>
              <div className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:text-earth-300 transition-colors">
                Shop Now <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.a>

          {/* Focus Mat - Wide Box */}
          <motion.a
            href={mats[2].url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-3xl bg-earth-900 p-8 border border-earth-800 hover:shadow-2xl transition-all duration-500 ${mats[2].className} flex flex-col md:flex-row items-center gap-8`}
          >
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-earth-800/50 to-transparent z-0 pointer-events-none" />
            
            <div className="flex-1 z-10">
              <p className="text-[10px] font-bold tracking-widest uppercase text-earth-400 mb-2">{mats[2].size} • {mats[2].price}</p>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">{mats[2].title}</h3>
              <p className="text-sand-100/70 mb-6">{mats[2].desc}</p>
              <div className="inline-flex items-center gap-2 bg-white text-earth-900 px-6 py-3 rounded-full font-bold text-sm group-hover:bg-earth-100 transition-colors">
                Shop on Amazon <ArrowUpRight size={16} />
              </div>
            </div>

            <div className="w-full md:w-1/2 h-48 md:h-full relative z-10 rounded-2xl overflow-hidden border border-white/10">
              <img 
                src={mats[2].image} 
                alt={mats[2].title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default GroundingMatsSection;

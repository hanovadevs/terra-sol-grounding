import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag, FlaskConical, Star, ShieldCheck } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const stats = [
  {
    icon: ShoppingBag,
    value: 50000,
    suffix: '+',
    label: 'Sheets & Mats Sold',
    description: 'Trusted by families worldwide',
    color: 'from-earth-600 to-earth-700',
    bgColor: 'bg-earth-100',
    textColor: 'text-earth-700',
  },
  {
    icon: FlaskConical,
    value: 20,
    suffix: '+',
    label: 'Published Studies',
    description: 'Peer-reviewed research indexed',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-100',
    textColor: 'text-indigo-700',
  },
  {
    icon: Star,
    value: 4.8,
    suffix: '★',
    label: 'Average Rating',
    description: 'Across all product lines',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-100',
    textColor: 'text-amber-700',
    isDecimal: true,
  },
  {
    icon: ShieldCheck,
    value: 3,
    suffix: '-Year',
    label: 'Conductivity Warranty',
    description: 'Industry-leading guarantee',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-100',
    textColor: 'text-emerald-700',
  },
];

const TrustedByBanner: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-16 bg-sand-100 border-y border-sand-300/30 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-earth-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-earth-200/30 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-earth-900/5 border border-earth-900/10 text-[9px] font-bold uppercase tracking-widest text-earth-700 mb-3">
            Why People Trust Terra Sol
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl border border-sand-200/80 p-5 sm:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(45,79,30,0.1)] hover:border-earth-300/40 transition-all duration-400 text-center"
              >
                <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center ${stat.textColor} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} />
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-earth-900 mb-1 tabular-nums">
                  {stat.isDecimal ? (
                    <span>{stat.value}{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-xs font-bold text-earth-900 uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="text-[10px] text-earth-800/50">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedByBanner;

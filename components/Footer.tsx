import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../constants';

const Footer: React.FC = () => {
  const [isLogoVisible, setIsLogoVisible] = React.useState(true);
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Our Story', href: '/story' },
    { name: 'Science', href: '/science' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Warranty', href: '/warranty' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/terrasol', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/terrasol', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/terrasol', label: 'Twitter' },
  ];

  return (
    <footer className="relative overflow-hidden bg-earth-900 text-sand-100">
      {/* Grain overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-earth-700/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-earth-600/5 blur-[100px]" />
      </div>

      {/* Large CTA banner */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight tracking-tight">
              Ready to restore <br />
              your <span className="italic text-earth-400">natural balance?</span>
            </h2>
          </motion.div>

          <motion.a
            href="https://www.amazon.com/stores/TerraSolGrounding/page/72F16C5A-B767-4AB5-AE34-88D0D13C0D98"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-earth-900 shadow-2xl transition-all hover:bg-earth-300 hover:shadow-[0_0_40px_rgba(112,180,78,0.3)]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Shop on Amazon
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all group-hover:border-white/20">
                {isLogoVisible ? (
                  <img
                    src={BRAND_CONFIG.logo}
                    alt={BRAND_CONFIG.name}
                    className="h-full w-full object-cover"
                    onError={() => setIsLogoVisible(false)}
                  />
                ) : (
                  <span className="font-serif text-base font-bold text-white">{BRAND_CONFIG.name[0]}</span>
                )}
              </div>
              <span className="text-lg font-serif font-bold tracking-tight group-hover:text-earth-300 transition-colors">
                {BRAND_CONFIG.name}
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-sand-100/50 max-w-xs">
              Restore your biology while you sleep. Premium grounding backed by material science.
            </p>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/5 text-sand-100/50 transition-all hover:bg-white/10 hover:text-white hover:border-white/15"
                    aria-label={`Follow us on ${social.label}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-sand-100/30">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="link-underline text-sm text-sand-100/60 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-sand-100/30">Support</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-sand-100/60">
                <Mail size={14} className="text-earth-500 shrink-0" />
                <span>support@terrasolgrounding.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-sand-100/60">
                <MapPin size={14} className="text-earth-500 shrink-0" />
                <span>Los Angeles, CA</span>
              </li>
              <li>
                <a
                  href="/manual.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline flex items-center gap-1 text-sm text-sand-100/60 hover:text-white transition-colors"
                >
                  Instruction Manual <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@terrasolgrounding.com?subject=Privacy%20Policy%20Request"
                  className="link-underline text-sm text-sand-100/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@terrasolgrounding.com?subject=Terms%20of%20Service%20Request"
                  className="link-underline text-sm text-sand-100/60 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Amazon */}
          <div>
            <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-sand-100/30">Official Store</h4>
            <p className="mb-5 text-sm leading-relaxed text-sand-100/50">
              Visit our Amazon store for the latest deals, verified reviews, and exclusive bundles.
            </p>
            <motion.a
              href="https://www.amazon.com/stores/TerraSolGrounding/page/72F16C5A-B767-4AB5-AE34-88D0D13C0D98"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-sand-100/70 transition-all hover:bg-white/10 hover:text-white hover:border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Amazon Store
              <ExternalLink size={12} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-sand-100/25 tracking-wide">
            © {year} Terra Sol Grounding. All rights reserved.
          </p>
          <p className="text-[10px] text-sand-100/20 italic max-w-md text-center sm:text-right">
            Disclaimer: Our products are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, MapPin, ExternalLink } from 'lucide-react';
import { BRAND_CONFIG } from '../constants';

const Footer: React.FC = () => {
  const [isLogoVisible, setIsLogoVisible] = React.useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/terrasol', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/terrasol', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/terrasol', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Our Story', href: '/story' },
    { name: 'Science', href: '/science' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Warranty', href: '/warranty' },
  ];

  const supportLinks = [
    { type: 'email', text: 'support@terrasolgrounding.com', icon: Mail },
    { type: 'location', text: 'Los Angeles, CA', icon: MapPin },
    { type: 'manual', text: 'Instruction Manual', href: '/manual.pdf' },
    { type: 'privacy', text: 'Privacy Policy', href: 'mailto:support@terrasolgrounding.com?subject=Privacy%20Policy%20Request' },
    { type: 'terms', text: 'Terms of Service', href: 'mailto:support@terrasolgrounding.com?subject=Terms%20of%20Service%20Request' },
  ];

  return (
    <footer className="bg-earth-900 text-sand-100 pt-20 pb-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-earth-800/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-earth-700/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Brand column */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div className="flex items-center gap-3" whileHover={{ x: 8 }}>
              <motion.div
                className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                {isLogoVisible ? (
                  <img
                    src={BRAND_CONFIG.logo}
                    alt={BRAND_CONFIG.name}
                    className="h-full w-full object-cover"
                    onError={() => setIsLogoVisible(false)}
                  />
                ) : (
                  <span className="font-serif text-xl font-bold text-sand-100">{BRAND_CONFIG.name[0]}</span>
                )}
              </motion.div>
              <h3 className="text-2xl font-serif font-bold tracking-tight">{BRAND_CONFIG.name}</h3>
            </motion.div>
            <p className="text-sm leading-relaxed text-sand-300">{BRAND_CONFIG.tagline}</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-earth-800 transition-colors hover:bg-earth-700"
                    aria-label={`Follow us on ${social.label}`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-earth-500">Quick Links</h4>
            <ul className="space-y-4 text-sm text-sand-300">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 8 }}
                >
                  <Link to={link.href} className="transition-colors hover:text-sand-100">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-earth-500">Support</h4>
            <ul className="space-y-4 text-sm text-sand-300">
              {supportLinks.map((link, index) => (
                <motion.li
                  key={link.text}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 8 }}
                >
                  {link.type === 'email' && <Mail size={16} className="text-earth-500 shrink-0" />}
                  {link.type === 'location' && <MapPin size={16} className="text-earth-500 shrink-0" />}
                  {link.type === 'email' || link.type === 'location' ? (
                    <span>{link.text}</span>
                  ) : (
                    <a
                      href={link.href}
                      target={link.type === 'manual' ? '_blank' : undefined}
                      rel={link.type === 'manual' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-2 transition-colors hover:text-sand-100"
                    >
                      {link.text} {link.type === 'manual' && <ExternalLink size={14} />}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Shop Amazon */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-earth-500">Shop Amazon</h4>
            <p className="mb-6 text-sm text-sand-300">Visit our official Amazon store for the latest deals and verified reviews.</p>
            <motion.a
              href="https://www.amazon.com/stores/TerraSolGrounding/page/72F16C5A-B767-4AB5-AE34-88D0D13C0D98"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-bold text-earth-500 transition-colors hover:text-sand-100 relative overflow-hidden"
              whileHover={{ gap: '12px' }}
            >
              Go to Amazon Store
              <motion.div
                whileHover={{ x: 4, y: -4 }}
              >
                <ExternalLink size={16} />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Footer bottom */}
        <motion.div
          className="border-t border-earth-800 pt-10 text-center text-xs text-sand-300/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>Copyright {new Date().getFullYear()} Terra Sol Grounding. All rights reserved.</p>
          <motion.p
            className="mt-2 italic"
            whileHover={{ scale: 1.05 }}
          >
            Disclaimer: Our products are not intended to diagnose, treat, cure, or prevent any disease.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

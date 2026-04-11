import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { BRAND_CONFIG } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Our Story', href: '/story' },
    { name: 'Science', href: '/science' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Warranty', href: '/warranty' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="group flex items-center gap-3" aria-label="Terra Sol Home">
            <motion.div
              className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full"
              role="img"
              aria-label="Terra Sol Logo"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {isLogoVisible ? (
                <img
                  src={BRAND_CONFIG.logo}
                  alt=""
                  className="h-full w-full object-contain group-hover:scale-110 transition-transform"
                  onError={() => setIsLogoVisible(false)}
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-earth-800">
                  <span className="font-serif text-xl font-bold text-sand-100">{BRAND_CONFIG.name[0]}</span>
                </div>
              )}
            </motion.div>
            <motion.span
              className="text-2xl font-serif font-bold tracking-tight text-earth-800 transition-colors group-hover:text-earth-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {BRAND_CONFIG.name}
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          className="hidden items-center gap-8 md:flex"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              variants={navItemVariants}
              whileHover={{ y: -2 }}
            >
              <Link
                to={link.href}
                className={`text-sm font-medium uppercase tracking-widest transition-colors relative group ${
                  location.pathname === link.href ? 'text-earth-600' : 'text-earth-900 hover:text-earth-600'
                }`}
              >
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-earth-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
          <motion.a
            href="https://www.amazon.com/stores/TerraSolGrounding/page/72F16C5A-B767-4AB5-AE34-88D0D13C0D98"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-earth-800 px-5 py-2 text-sm font-bold text-sand-100 transition-all hover:bg-earth-900 relative overflow-hidden group"
            variants={navItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <motion.div whileHover={{ rotate: 12 }}>
              <ShoppingCart size={16} />
            </motion.div>
            <span className="relative">SHOP AMAZON</span>
          </motion.a>
        </motion.div>

        <motion.button
          className="p-2 text-earth-800 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                <X />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                <Menu />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-sand-300 bg-sand-100 md:hidden"
          >
            <motion.div
              className="flex flex-col gap-4 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  whileHover={{ x: 8 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      location.pathname === link.href ? 'text-earth-600' : 'text-earth-900 hover:text-earth-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="https://www.amazon.com/stores/TerraSolGrounding/page/72F16C5A-B767-4AB5-AE34-88D0D13C0D98"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-earth-800 px-5 py-3 text-sm font-bold text-sand-100 hover:bg-earth-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                whileHover={{ scale: 1.05 }}
              >
                <ShoppingCart size={18} />
                SHOP ON AMAZON
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

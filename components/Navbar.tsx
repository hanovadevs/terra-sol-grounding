import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Home, Package, BookOpen, Zap, HelpCircle, Shield } from 'lucide-react';
import { BRAND_CONFIG } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Products', href: '/products', icon: Package },
    { name: 'Our Story', href: '/story', icon: BookOpen },
    { name: 'Science', href: '/science', icon: Zap },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Warranty', href: '/warranty', icon: Shield, badge: 'New' },
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

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled || location.pathname !== '/' ? 'glass py-4 shadow-lg backdrop-blur-xl' : 'bg-transparent py-5'
      }`}
    >


      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="group flex items-center gap-2" aria-label="Terra Sol Home">
            <motion.div
              className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-earth-600/10 backdrop-blur-sm border border-earth-600/20 group-hover:border-earth-600/40 transition-all"
              role="img"
              aria-label="Terra Sol Logo"
            >
              {isLogoVisible ? (
                <img
                  src={BRAND_CONFIG.logo}
                  alt=""
                  className="h-full w-full object-contain group-hover:scale-110 transition-transform"
                  onError={() => setIsLogoVisible(false)}
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-earth-700">
                  <span className="font-serif text-sm font-bold text-white">{BRAND_CONFIG.name[0]}</span>
                </div>
              )}
            </motion.div>
            <motion.span
              className="text-lg sm:text-xl font-serif font-bold tracking-tight text-earth-800 transition-colors group-hover:text-earth-600 hidden sm:inline"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {BRAND_CONFIG.name}
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Nav Links */}
        <motion.div
          className="hidden items-center gap-2.5 md:flex"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.name}
                variants={navItemVariants}
                onHoverStart={() => setActiveHover(link.name)}
                onHoverEnd={() => setActiveHover(null)}
              >
                <Link
                  to={link.href}
                  className={`relative group px-4 py-2.5 rounded-lg transition-all ${
                    isActive(link.href)
                      ? 'text-earth-700 bg-earth-100'
                      : 'text-earth-900 hover:text-earth-700'
                  }`}
                >
                  <motion.div
                    className="flex items-center gap-2.5"
                    whileHover={{ x: 2 }}
                  >
                    <Icon size={16} className="opacity-70" />
                    <span className="text-xs font-bold uppercase tracking-wide">{link.name}</span>
                    {link.badge && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-1 px-1.5 py-0.5 text-[9px] font-bold uppercase bg-earth-600 text-white rounded-full"
                      >
                        {link.badge}
                      </motion.span>
                    )}
                  </motion.div>

                  {/* Bottom line indicator */}
                  <motion.div
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-earth-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: isActive(link.href) ? 1 : activeHover === link.name ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />

                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-earth-600/5 rounded-lg -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeHover === link.name ? 1 : isActive(link.href) ? 0.5 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Shop Button & Mobile Menu */}
        <div className="flex items-center gap-5">
          <motion.a
            href="https://www.amazon.com/stores/TerraSolGrounding/page/72F16C5A-B767-4AB5-AE34-88D0D13C0D98"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 rounded-full border-2 border-earth-700 bg-sand-100 px-5 py-2.5 text-xs sm:text-sm font-bold text-earth-700 transition-all hover:bg-earth-700 hover:text-sand-100 hover:shadow-lg relative overflow-hidden group whitespace-nowrap"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-earth-600 to-earth-700 opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <motion.div whileHover={{ rotate: 12, scale: 1.2 }}>
              <ShoppingCart size={16} />
            </motion.div>
            <span className="relative">SHOP</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="p-2 text-earth-800 md:hidden rounded-lg hover:bg-earth-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, height: 'auto', backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-sand-300 bg-white/50 backdrop-blur-md"
          >
            <motion.div
              className="flex flex-col gap-3 p-4 max-w-7xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-4 rounded-lg transition-all ${
                        isActive(link.href)
                          ? 'bg-earth-100 text-earth-700 font-semibold'
                          : 'text-earth-900 hover:bg-earth-50'
                      }`}
                    >
                      <Icon size={18} className="opacity-70" />
                      <span className="text-sm font-medium">{link.name}</span>
                      {link.badge && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto px-2 py-0.5 text-[8px] font-bold uppercase bg-earth-600 text-white rounded-full"
                        >
                          {link.badge}
                        </motion.span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Shop Button */}
              <motion.a
                href="https://www.amazon.com/stores/TerraSolGrounding/page/72F16C5A-B767-4AB5-AE34-88D0D13C0D98"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 px-4 py-4 rounded-lg bg-gradient-to-r from-earth-700 to-earth-800 text-white font-bold text-sm mx-0 mt-3 hover:shadow-lg transition-shadow"
              >
                <ShoppingCart size={18} />
                <span>SHOP ON AMAZON</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

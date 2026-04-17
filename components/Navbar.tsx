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

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Products', href: '/products', icon: Package },
    { name: 'Our Story', href: '/story', icon: BookOpen },
    { name: 'Science', href: '/science', icon: Zap },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Warranty', href: '/warranty', icon: Shield, badge: 'New' },
  ];

  const isActive = (href: string) => location.pathname === href;

  // On the home page before scrolling, use a fully transparent dark-text approach
  // After scrolling or on inner pages, use the frosted glass look
  const navBg = isScrolled || !isHome
    ? 'bg-white/80 backdrop-blur-xl border-b border-sand-300/50 shadow-sm'
    : 'bg-transparent';

  const textColor = isScrolled || !isHome ? 'text-earth-900' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 py-4 ${navBg}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link to="/" className="group flex items-center gap-2.5" aria-label="Terra Sol Home">
            <div
              className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border transition-all ${
                isScrolled || !isHome
                  ? 'border-earth-600/15 bg-earth-600/5'
                  : 'border-white/20 bg-white/10 backdrop-blur-md'
              }`}
            >
              {isLogoVisible ? (
                <img
                  src={BRAND_CONFIG.logo}
                  alt=""
                  className="h-full w-full object-contain"
                  onError={() => setIsLogoVisible(false)}
                />
              ) : (
                <span className="font-serif text-sm font-bold">{BRAND_CONFIG.name[0]}</span>
              )}
            </div>
            <span className={`text-lg font-serif font-bold tracking-tight hidden sm:inline transition-colors ${textColor}`}>
              {BRAND_CONFIG.name}
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <div
                key={link.name}
                onMouseEnter={() => setActiveHover(link.name)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <Link
                  to={link.href}
                  className={`relative group px-3.5 py-2.5 rounded-lg flex items-center gap-2 transition-colors ${
                    active
                      ? `${isScrolled || !isHome ? 'text-earth-700' : 'text-white'} font-bold`
                      : `${textColor} hover:text-earth-600`
                  }`}
                >
                  <Icon size={14} className="opacity-50" />
                  <span className="text-xs font-bold uppercase tracking-wide">{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[8px] font-bold uppercase bg-earth-600 text-white rounded-full leading-none">
                      {link.badge}
                    </span>
                  )}

                  {/* Active/hover underline */}
                  <motion.div
                    className={`absolute bottom-1 left-3 right-3 h-[2px] rounded-full ${
                      isScrolled || !isHome ? 'bg-earth-600' : 'bg-white'
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: active ? 1 : activeHover === link.name ? 0.6 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    style={{ originX: 0 }}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Shop CTA */}
          <motion.a
            href="https://www.amazon.com/stores/TerraSolGrounding/page/72F16C5A-B767-4AB5-AE34-88D0D13C0D98"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              isScrolled || !isHome
                ? 'bg-earth-800 text-white hover:bg-earth-900 shadow-md'
                : 'bg-white/15 text-white border border-white/20 backdrop-blur-md hover:bg-white/25'
            }`}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <ShoppingCart size={14} />
            <span>Shop</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className={`p-2 md:hidden rounded-lg transition-colors ${textColor}`}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-sand-300/50 bg-white/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 p-4 max-w-7xl mx-auto">
              {navLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-4 rounded-xl transition-all ${
                        isActive(link.href)
                          ? 'bg-earth-100 text-earth-700 font-bold'
                          : 'text-earth-900 hover:bg-earth-50'
                      }`}
                    >
                      <Icon size={18} className="opacity-50" />
                      <span className="text-sm font-semibold">{link.name}</span>
                      {link.badge && (
                        <span className="ml-auto px-2 py-0.5 text-[8px] font-bold uppercase bg-earth-600 text-white rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.a
                href="https://www.amazon.com/stores/TerraSolGrounding/page/72F16C5A-B767-4AB5-AE34-88D0D13C0D98"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-earth-800 text-white font-bold text-sm mt-2"
              >
                <ShoppingCart size={16} />
                <span>Shop on Amazon</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

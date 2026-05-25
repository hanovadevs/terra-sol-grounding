import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AmazonCTA from './AmazonCTA';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Home, Package, BookOpen, Zap, FlaskConical, Newspaper, HelpCircle, Shield, Mail, ChevronDown } from 'lucide-react';
import { BRAND_CONFIG } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
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
    setIsMoreOpen(false);
  }, [location.pathname]);

  // Close "More" dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Products', href: '/products', icon: Package },
    { name: 'Science', href: '/science', icon: Zap },
    { name: 'Research', href: '/research', icon: FlaskConical },
    { name: 'Journal', href: '/blog', icon: Newspaper },
  ];

  const moreLinks = [
    { name: 'Our Story', href: '/story', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Warranty', href: '/warranty', icon: Shield },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const allLinks = [...primaryLinks, ...moreLinks];

  const isActive = (href: string) => location.pathname === href;
  const isMoreActive = moreLinks.some(l => isActive(l.href));

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
        <div className="hidden items-center gap-0.5 lg:flex">
          {primaryLinks.map((link) => {
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
                  className={`relative group px-3 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                    active
                      ? `${isScrolled || !isHome ? 'text-earth-700' : 'text-white'} font-bold`
                      : `${textColor} hover:text-earth-600`
                  }`}
                >
                  <Icon size={13} className="opacity-50" />
                  <span className="text-[11px] font-bold uppercase tracking-wide">{link.name}</span>

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

          {/* More Dropdown */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              onMouseEnter={() => setActiveHover('More')}
              onMouseLeave={() => setActiveHover(null)}
              className={`relative group px-3 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                isMoreActive
                  ? `${isScrolled || !isHome ? 'text-earth-700' : 'text-white'} font-bold`
                  : `${textColor} hover:text-earth-600`
              }`}
            >
              <span className="text-[11px] font-bold uppercase tracking-wide">More</span>
              <ChevronDown size={12} className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />

              <motion.div
                className={`absolute bottom-1 left-3 right-3 h-[2px] rounded-full ${
                  isScrolled || !isHome ? 'bg-earth-600' : 'bg-white'
                }`}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: isMoreActive ? 1 : activeHover === 'More' ? 0.6 : 0,
                }}
                transition={{ duration: 0.25 }}
                style={{ originX: 0 }}
              />
            </button>

            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white/95 backdrop-blur-xl border border-sand-300/50 shadow-xl overflow-hidden py-2"
                >
                  {moreLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                          isActive(link.href)
                            ? 'bg-earth-100 text-earth-700 font-bold'
                            : 'text-earth-800 hover:bg-earth-50'
                        }`}
                      >
                        <Icon size={16} className="opacity-50" />
                        <span className="font-semibold">{link.name}</span>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Shop CTA */}
          <div className="hidden sm:flex items-center">
            <AmazonCTA url="https://www.amazon.com/stores/TerraSolGrounding/page/72F16C5A-B767-4AB5-AE34-88D0D13C0D98" />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`p-2 lg:hidden rounded-lg transition-colors ${textColor}`}
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
            className="lg:hidden overflow-hidden border-t border-sand-300/50 bg-white/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 p-4 max-w-7xl mx-auto">
              {allLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
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
                transition={{ delay: 0.4 }}
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

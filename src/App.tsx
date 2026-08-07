import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import Newsletter from './components/Newsletter';
import { Analytics } from '@vercel/analytics/react';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Story from './pages/Story';
import Science from './pages/Science';
import FAQ from './pages/FAQ';
import Warranty from './pages/Warranty';
import Research from './pages/Research';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import Contact from './pages/Contact';
import Glossary from './pages/Glossary';

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: 'easeOut' as const },
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...pageTransition}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/story" element={<Story />} />
          <Route path="/science" element={<Science />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-sand-200 selection:bg-earth-800 selection:text-sand-100">
        <ScrollToTop />
        <Navbar />
        
        <main id="main-content">
          <AnimatedRoutes />
        </main>

        <Newsletter />
        <Footer />
        <AIChat />
        <BackToTop />
        <Analytics />
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Story from './pages/Story';
import Science from './pages/Science';
import FAQ from './pages/FAQ';
import Warranty from './pages/Warranty';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-sand-200 selection:bg-earth-800 selection:text-sand-100">
        <ScrollToTop />
        <Navbar />
        
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/story" element={<Story />} />
            <Route path="/science" element={<Science />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/warranty" element={<Warranty />} />
          </Routes>
        </main>

        <Footer />
        <AIChat />
      </div>
    </Router>
  );
};

export default App;

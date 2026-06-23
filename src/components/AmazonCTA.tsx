import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface AmazonCTAProps {
  url?: string;
  className?: string;
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const AmazonCTA: React.FC<AmazonCTAProps> = ({ 
  url = '#amazon', // Placeholder URL as requested
  className = '',
  text = 'Buy on Amazon',
  variant = 'primary'
}) => {
  const hasRoundedClass = className.includes('rounded-');
  const baseClasses = `inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 transform ${hasRoundedClass ? '' : 'rounded-full'}`;
  
  const variants = {
    primary: "bg-[#FF9900] text-gray-900 hover:bg-[#FFB347] hover:scale-[1.01] shadow-[0_4px_12px_rgba(255,153,0,0.2)] px-6 py-3",
    secondary: "bg-earth-800 text-sand-100 hover:bg-earth-700 hover:scale-[1.01] shadow-md px-6 py-3",
    outline: "bg-transparent text-[#FF9900] border-2 border-[#FF9900] hover:bg-[#FF9900]/10 hover:scale-[1.01] px-6 py-3"
  };

  return (
    <motion.a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
    >
      <ShoppingCart size={18} />
      <span>{text}</span>
    </motion.a>
  );
};

export default AmazonCTA;

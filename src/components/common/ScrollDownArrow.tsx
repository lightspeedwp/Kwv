import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../ui/utils';

interface ScrollDownArrowProps {
  targetId?: string;
  className?: string;
  color?: string;
}

export const ScrollDownArrow: React.FC<ScrollDownArrowProps> = ({ 
  targetId, 
  className,
  color = "white" 
}) => {
  const handleScroll = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Fallback: scroll window down by window height
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      onClick={handleScroll}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity", 
        className
      )}
      aria-label="Scroll Down"
    >
      <span className={`text-xs uppercase tracking-[0.2em] mb-2 text-${color} font-medium`}>Scroll</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown size={32} color={color} strokeWidth={1.5} />
      </motion.div>
    </motion.button>
  );
};

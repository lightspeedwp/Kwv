import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * BackToTopButton Component
 * 
 * A floating button that appears when the user scrolls down the page.
 * Clicking it smoothly scrolls the window back to the top.
 * 
 * Features:
 * - Visible only after scrolling 300px down.
 * - Uses `motion/react` for smooth appearance/disappearance.
 * - Fixed position at the bottom right.
 * 
 * @returns {JSX.Element} The Back to Top Button component.
 */
export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[var(--twb-color-gold)] text-[var(--twb-color-brown)] rounded-full shadow-lg hover:bg-white hover:text-[var(--twb-color-red)] transition-colors focus:outline-none min-w-[56px] min-h-[56px] flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
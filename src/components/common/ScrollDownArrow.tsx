import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Props for the ScrollDownArrow component.
 */
interface ScrollDownArrowProps {
  /** The ID of the HTML element to scroll to. If not provided, scrolls down by window height. */
  targetId?: string;
  /** Additional CSS classes. */
  className?: string;
}

/**
 * ScrollDownArrow Component
 * 
 * A bouncing arrow indicator typically used in hero sections to prompt the user to scroll down.
 * 
 * Features:
 * - Bouncing animation (`animate-bounce`).
 * - Scrolls to a specific element ID or just down by one viewport height.
 * 
 * @param {ScrollDownArrowProps} props - The props for the component.
 * @returns {JSX.Element} The Scroll Down Arrow component.
 */
export const ScrollDownArrow: React.FC<ScrollDownArrowProps> = ({ targetId, className = '' }) => {
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Fallback: scroll down by window height if no ID provided
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20 ${className}`}
      onClick={handleClick}
      aria-label="Scroll down"
    >
      <div className="rounded-full border-2 border-[var(--twb-color-text-on-dark)] p-2 bg-[var(--twb-color-ink)]/20 hover:bg-[var(--twb-color-ink)]/40 transition-colors">
        <ChevronDown className="text-[var(--twb-color-text-on-dark)] w-6 h-6" />
      </div>
    </div>
  );
};
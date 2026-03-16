import React from 'react';
import { UnifiedHeader } from './UnifiedHeader';
import { UnifiedFooter } from './UnifiedFooter';
import { AgeVerificationModal } from '../common/AgeVerificationModal';
import { useLocation } from 'react-router';

import { BackToTopButton } from '../common/BackToTopButton';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout Component
 * 
 * Unified layout wrapper for Handcrafted Wines.
 * Uses single header and footer across all pages.
 * 
 * Features:
 * - UnifiedHeader (consistent across all sections)
 * - UnifiedFooter (comprehensive site navigation)
 * - Global utilities: AgeVerificationModal, BackToTopButton
 * - Accessibility features ("Skip to main content")
 * - Auto-scroll to top on route change
 * - Dark mode support via CSS variables
 * - Hand-drawn aesthetic throughout
 * 
 * @param {LayoutProps} props - Children nodes
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--twb-color-text-primary)] dark:text-[var(--twb-color-text-on-dark)] bg-[var(--twb-color-bg-primary)]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-black focus:top-0 focus:left-0">
        Skip to main content
      </a>
      <AgeVerificationModal />
      <BackToTopButton />
      <UnifiedHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <UnifiedFooter />
    </div>
  );
};
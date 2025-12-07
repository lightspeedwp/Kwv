import React from 'react';
import { Header } from './Header';
import { BreadcrumbsBar } from './BreadcrumbsBar';
import { Footer } from './Footer';
import { AgeVerificationModal } from '../common/AgeVerificationModal';
import { useLocation } from 'react-router-dom';

import { BackToTopButton } from '../common/BackToTopButton';

interface LayoutProps {
  children: React.ReactNode;
  variant?: 'corporate' | 'shop' | 'experiences';
}

export const Layout: React.FC<LayoutProps> = ({ children, variant: propsVariant }) => {
  const location = useLocation();
  // Determine if we are in the "shop" context
  const isShop = location.pathname.startsWith('/shop') || 
                 location.pathname.startsWith('/product') || 
                 location.pathname.startsWith('/cart') || 
                 location.pathname.startsWith('/checkout') ||
                 location.pathname.startsWith('/account');

  const isExperiences = location.pathname.startsWith('/experiences') ||
                        location.pathname.startsWith('/visit');

  const variant = propsVariant || (isShop ? 'shop' : (isExperiences ? 'experiences' : 'corporate'));

  return (
    <div className="flex flex-col min-h-screen font-sans text-[#333333]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-black focus:top-0 focus:left-0">
        Skip to main content
      </a>
      <AgeVerificationModal />
      <BackToTopButton />
      <Header variant={variant} />
      <main id="main-content" className="flex-grow relative" tabIndex={-1}>
        <BreadcrumbsBar />
        {children}
      </main>
      <Footer variant={variant} />
    </div>
  );
};

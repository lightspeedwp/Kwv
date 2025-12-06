import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AgeVerificationModal } from '../common/AgeVerificationModal';
import { useLocation } from 'react-router-dom';

import { BackToTopButton } from '../common/BackToTopButton';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  // Determine if we are in the "shop" context
  const isShop = location.pathname.startsWith('/shop') || 
                 location.pathname.startsWith('/product') || 
                 location.pathname.startsWith('/cart') || 
                 location.pathname.startsWith('/checkout') ||
                 location.pathname.startsWith('/account');

  return (
    <div className="flex flex-col min-h-screen font-sans text-[#333333]">
      <AgeVerificationModal />
      <BackToTopButton />
      <Header variant={isShop ? 'shop' : 'corporate'} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer variant={isShop ? 'shop' : 'corporate'} />
    </div>
  );
};

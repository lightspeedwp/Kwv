import React from 'react';
import { CheckoutHeader } from './CheckoutHeader';
import { CheckoutFooter } from './CheckoutFooter';
import { AgeVerificationModal } from '../common/AgeVerificationModal';

interface CheckoutLayoutProps {
  children: React.ReactNode;
}

export const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-[#333333] bg-[#F9F9F9]">
      <AgeVerificationModal />
      <CheckoutHeader />
      <main className="flex-grow">
        {children}
      </main>
      <CheckoutFooter />
    </div>
  );
};

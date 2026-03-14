import React from 'react';
import { CheckoutHeader } from './CheckoutHeader';
import { CheckoutFooter } from './CheckoutFooter';
import { AgeVerificationModal } from '../common/AgeVerificationModal';

interface CheckoutLayoutProps {
  children: React.ReactNode;
}

/**
 * CheckoutLayout Component
 * 
 * A specialized layout wrapper for the Checkout pages.
 * 
 * Features:
 * - Uses `CheckoutHeader` and `CheckoutFooter` (minimalist versions)
 * - Includes `AgeVerificationModal` to ensure compliance
 * - Sets the base background color for the checkout flow
 * - Dark mode support via CSS variables
 * - WordPress theme.json aligned
 * - Design token system integration
 * 
 * @package HandcraftedWines
 * @version 2.0
 * 
 * @param {CheckoutLayoutProps} props - Children to render within the layout.
 */
export const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--twb-color-text-primary)] bg-[var(--twb-color-bg-secondary)] dark:text-[var(--twb-color-text-on-dark)] dark:bg-[var(--twb-color-bg-primary)]">
      <AgeVerificationModal />
      <CheckoutHeader />
      <main className="flex-grow">
        {children}
      </main>
      <CheckoutFooter />
    </div>
  );
};
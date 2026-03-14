import React from 'react';
import { Container } from '../common/Container';
import { Link } from 'react-router';

/**
 * CheckoutFooter Component
 * 
 * A minimalist footer designed specifically for the Checkout flow.
 * 
 * Features:
 * - Reduced navigation options to minimize distractions
 * - Links to critical policies (Privacy, Terms, Returns)
 * - Visual indicators for secure payment methods (Visa, Mastercard, SSL)
 * - Dark mode support via CSS variables
 * - Design token system integration
 * 
 * @package HandcraftedWines
 * @version 2.0
 */
export const CheckoutFooter: React.FC = () => {
  return (
    <footer className="bg-[var(--twb-color-bg-primary)] border-t border-[var(--twb-border-primary)] py-[var(--twb-spacing-8)] mt-auto">
      <Container variant="site">
        <div className="flex flex-col md:flex-row justify-between items-center gap-[var(--twb-spacing-4)] text-xs text-[var(--twb-color-text-secondary)]">
          <p>&copy; {new Date().getFullYear()} Handcrafted Wines. All rights reserved.</p>
          
          <div className="flex gap-[var(--twb-spacing-6)]">
            <Link to="/policies" className="hover:text-[var(--twb-color-text-primary)] underline transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[var(--twb-color-text-primary)] underline transition-colors">Terms & Conditions</Link>
            <Link to="/returns-policy" className="hover:text-[var(--twb-color-text-primary)] underline transition-colors">Returns Policy</Link>
          </div>

          <div className="flex items-center gap-[var(--twb-spacing-2)] opacity-60">
             {/* Simple visual representation of secure payment icons text if images aren't available */}
             <span className="text-[var(--twb-color-text-secondary)]">Visa</span>
             <span className="text-[var(--twb-color-text-secondary)]">•</span>
             <span className="text-[var(--twb-color-text-secondary)]">Mastercard</span>
             <span className="text-[var(--twb-color-text-secondary)]">•</span>
             <span className="text-[var(--twb-color-text-secondary)]">Secure SSL</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
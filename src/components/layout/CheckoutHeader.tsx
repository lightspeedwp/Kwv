import React from 'react';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

/**
 * CheckoutHeader Component
 * 
 * Minimal header for checkout flow.
 * Features secure checkout badge and logo.
 */

export const CheckoutHeader: React.FC = () => {
  return (
    <header className="bg-[var(--twb-color-plum)] dark:bg-[var(--twb-color-bg-primary)] border-b border-[var(--twb-border-primary)] sticky top-0 z-50">
      <Container variant="wide">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-[var(--twb-spacing-6)]">
            <Link to="/shop">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex items-center gap-[var(--twb-spacing-2)] text-white/60 dark:text-[var(--twb-color-text-secondary)] border-l border-white/20 dark:border-[var(--twb-border-primary)] pl-[var(--twb-spacing-6)] py-1">
              <Lock size={16} />
              <span className="text-sm font-[number:var(--twb-font-weight-medium)] uppercase tracking-wider">Secure Checkout</span>
            </div>
          </div>

          <Link to="/cart" className="flex items-center gap-[var(--twb-spacing-2)] text-sm font-[number:var(--twb-font-weight-medium)] text-white/70 dark:text-[var(--twb-color-text-secondary)] hover:text-white dark:hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Cart</span>
          </Link>
        </div>
      </Container>
    </header>
  );
};
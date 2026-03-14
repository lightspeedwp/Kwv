import React from 'react';
import { Container } from '../common/Container';
import { KWVShopLogo } from '../common/Logo';
import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

/**
 * CheckoutHeader Component
 * 
 * A simplified header used during the Checkout process to reduce distractions.
 * 
 * Features:
 * - Isolated Logo (links back to shop)
 * - "Secure Checkout" badge
 * - "Back to Cart" link
 * - Removes standard navigation menus
 * - Dark mode support via CSS variables
 * - WordPress theme.json aligned
 * - Design token system integration
 * 
 * @package HandcraftedWines
 * @version 2.0
 */
export const CheckoutHeader: React.FC = () => {
  return (
    <header className="bg-[var(--twb-color-ink)] dark:bg-[var(--twb-color-bg-primary)] border-b border-[var(--twb-border-secondary)] dark:border-[var(--twb-border-primary)] py-[var(--twb-spacing-4)] sticky top-0 z-50 shadow-[var(--twb-shadow-md)]">
      <Container variant="site">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[var(--twb-spacing-6)]">
            <Link to="/shop">
              <KWVShopLogo className="h-10 w-auto" />
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
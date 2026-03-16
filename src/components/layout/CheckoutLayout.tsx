/**
 * Checkout Layout Component
 * 
 * Minimal, distraction-free layout for checkout and order confirmation.
 * Simplified header and footer to reduce cart abandonment.
 * 
 * Features:
 * - Minimal header with logo and support link
 * - No navigation menus (reduces distractions)
 * - Trust badges in footer
 * - Secure checkout indicators
 * - WCAG AA compliant
 * 
 * Usage:
 * ```tsx
 * <CheckoutLayout>
 *   <CheckoutPage />
 * </CheckoutLayout>
 * ```
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';
import { Link } from 'react-router';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Logo } from '../common/Logo';
import { Lock, Phone, Mail, Shield } from 'lucide-react';

interface CheckoutLayoutProps {
  children: React.ReactNode;
  showBackToShop?: boolean;
}

export const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({ 
  children,
  showBackToShop = false 
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--twb-color-bg-primary)]">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[var(--twb-color-ink)] focus:text-[var(--twb-color-paper)] focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      {/* Minimal Header */}
      <header className="border-b border-[var(--twb-color-border-primary)] bg-[var(--twb-color-bg-primary)] sticky top-0 z-40">
        <Container variant="wide">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Logo size="md" />
            </Link>

            {/* Secure Checkout Indicator */}
            <div className="hidden md:flex items-center gap-2 text-[var(--twb-color-text-secondary)]">
              <Lock className="size-4 text-[var(--twb-color-vine)]" aria-hidden="true" />
              <Typography variant="caption" className="font-semibold">
                Secure Checkout
              </Typography>
            </div>

            {/* Support Link */}
            <a 
              href="tel:+27218073007"
              className="flex items-center gap-2 text-[var(--twb-color-plum)] hover:underline"
            >
              <Phone className="size-4" aria-hidden="true" />
              <Typography variant="caption" className="hidden sm:inline">
                Need Help?
              </Typography>
            </a>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main className="flex-1" id="main-content">
        {children}
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-[var(--twb-color-border-primary)] bg-[var(--twb-color-bg-secondary)] py-8">
        <Container variant="wide">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-[var(--twb-color-text-secondary)]">
              <Lock className="size-4 text-[var(--twb-color-vine)]" aria-hidden="true" />
              <Typography variant="caption">Secure Payment</Typography>
            </div>
            <div className="flex items-center gap-2 text-[var(--twb-color-text-secondary)]">
              <Shield className="size-4 text-[var(--twb-color-vine)]" aria-hidden="true" />
              <Typography variant="caption">Safe & Secure</Typography>
            </div>
            <div className="flex items-center gap-2 text-[var(--twb-color-text-secondary)]">
              <Phone className="size-4 text-[var(--twb-color-vine)]" aria-hidden="true" />
              <Typography variant="caption">24/7 Support</Typography>
            </div>
          </div>

          {/* Contact & Legal */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-center mb-4">
            <a 
              href="mailto:hello@handcraftedwines.co.za"
              className="flex items-center gap-2 text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]"
            >
              <Mail className="size-3" aria-hidden="true" />
              <Typography variant="caption">hello@handcraftedwines.co.za</Typography>
            </a>
            <span className="text-[var(--twb-color-text-secondary)]">•</span>
            <a 
              href="tel:+27218073007"
              className="flex items-center gap-2 text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]"
            >
              <Phone className="size-3" aria-hidden="true" />
              <Typography variant="caption">+27 21 807 3007</Typography>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <Link 
              to="/terms" 
              className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]"
            >
              <Typography variant="caption">Terms & Conditions</Typography>
            </Link>
            <span className="text-[var(--twb-color-text-secondary)]">•</span>
            <Link 
              to="/policies" 
              className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]"
            >
              <Typography variant="caption">Privacy Policy</Typography>
            </Link>
            <span className="text-[var(--twb-color-text-secondary)]">•</span>
            <Link 
              to="/shop/faq" 
              className="text-[var(--twb-color-text-secondary)] hover:text-[var(--twb-color-plum)]"
            >
              <Typography variant="caption">FAQ</Typography>
            </Link>
            {showBackToShop && (
              <>
                <span className="text-[var(--twb-color-text-secondary)]">•</span>
                <Link 
                  to="/shop" 
                  className="text-[var(--twb-color-plum)] hover:underline font-semibold"
                >
                  <Typography variant="caption">Continue Shopping</Typography>
                </Link>
              </>
            )}
          </div>

          {/* Copyright */}
          <div className="text-center mt-6">
            <Typography variant="caption" className="text-[var(--twb-color-text-secondary)]">
              © {new Date().getFullYear()} Handcrafted Wines. All rights reserved.
            </Typography>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default CheckoutLayout;
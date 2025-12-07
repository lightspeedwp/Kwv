import React from 'react';
import { Container } from '../common/Container';
import { KWVShopLogo } from '../common/Logo';
import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * CheckoutHeader Component
 * 
 * A simplified header used during the Checkout process to reduce distractions.
 * Features:
 * - Isolated Logo (links back to shop).
 * - "Secure Checkout" badge.
 * - "Back to Cart" link.
 * - Removes standard navigation menus.
 */
export const CheckoutHeader: React.FC = () => {
  return (
    <header className="bg-[#2C1810] border-b border-[#4A3B32] py-4 sticky top-0 z-50 shadow-md">
      <Container variant="site">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/shop">
              <KWVShopLogo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex items-center gap-2 text-gray-400 border-l border-gray-600 pl-6 py-1">
              <Lock size={16} />
              <span className="text-sm font-medium uppercase tracking-wider">Secure Checkout</span>
            </div>
          </div>

          <Link to="/cart" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Cart</span>
          </Link>
        </div>
      </Container>
    </header>
  );
};
import React, { useState } from 'react';
import { Typography } from '../../common/Typography';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { FloatingLabelInput } from './FloatingLabelInput';
import { Button } from '../../common/Button';

const MOCK_ITEMS = [
    {
        id: 1,
        name: "Beanie with Logo",
        price: 18.00,
        originalPrice: 20.00,
        quantity: 1,
        description: "This is a simple product.",
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 2,
        name: "Beanie",
        price: 18.00,
        originalPrice: 20.00,
        quantity: 1,
        description: "This is a simple product.",
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=200"
    }
];

/**
 * OrderSummary Component
 * 
 * The sidebar component on the Checkout page.
 * Features:
 * - List of products with images, quantities (badge), and prices.
 * - Coupon code input field (collapsible).
 * - Subtotal, Shipping cost, and Total calculation.
 */
export const OrderSummary: React.FC = () => {
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  return (
    <div className="border border-[var(--twb-border-secondary)] bg-[var(--twb-color-bg-primary)] p-8 sticky top-24 shadow-sm">
      <Typography variant="h3" className="text-2xl font-medium text-[var(--twb-color-text-primary)] mb-8">Order summary</Typography>

      {/* Product List */}
      <div className="mb-6">
        {MOCK_ITEMS.map((item, index) => (
            <div key={item.id} className={`flex gap-4 py-6 ${index !== 0 ? 'border-t border-[var(--twb-border-tertiary)]' : ''}`}>
                {/* Image with Badge */}
                <div className="w-16 h-16 relative flex-shrink-0">
                    <div className="w-full h-full bg-[var(--twb-color-bg-secondary)] rounded-sm overflow-hidden">
                        <ImageWithFallback 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover mix-blend-multiply"
                        />
                    </div>
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--twb-color-text-muted)] text-[var(--twb-color-paper)] text-xs font-medium flex items-center justify-center border border-[var(--twb-color-paper)] z-10">
                        {item.quantity}
                    </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                        <span className="text-base text-[var(--twb-color-text-primary)] font-normal truncate pr-2">{item.name}</span>
                        <span className="text-base font-bold text-[var(--twb-color-text-primary)] whitespace-nowrap">${item.price.toFixed(2)}</span>
                    </div>
                    
                    {item.originalPrice && (
                        <div className="flex gap-2 text-sm mb-1">
                            <span className="text-[var(--twb-color-text-muted)] line-through">${item.originalPrice.toFixed(2)}</span>
                            <span className="text-[var(--twb-color-text-primary)]">${item.price.toFixed(2)}</span>
                        </div>
                    )}
                    
                    <div className="text-sm text-[var(--twb-color-text-secondary)] font-light leading-snug">{item.description}</div>
                </div>
            </div>
        ))}
      </div>

      {/* Coupon Section */}
      <div className="border-y border-[var(--twb-border-secondary)] py-6 mb-6">
         <button 
           onClick={() => setIsCouponOpen(!isCouponOpen)}
           className="flex items-center justify-between w-full text-base text-[var(--twb-color-text-primary)] hover:text-[var(--twb-color-ink)] group"
         >
            <span>Add coupons</span>
            {isCouponOpen ? <ChevronDown size={20} className="text-[var(--twb-color-text-secondary)]" /> : <ChevronDown size={20} className="text-[var(--twb-color-text-secondary)]" />}
         </button>
         
         {isCouponOpen && (
           <div className="mt-4 flex gap-2 items-start">
              <FloatingLabelInput 
                  label="Enter code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1"
              />
              <Button className="bg-[var(--twb-color-ink)] text-[var(--twb-color-paper)] hover:bg-[var(--twb-color-ink)]/90 h-12 px-6 text-sm font-medium rounded-sm">
                 Apply
              </Button>
           </div>
         )}
      </div>

      {/* Totals */}
      <div className="space-y-4 mb-6">
         <div className="flex justify-between text-base">
            <span className="text-[var(--twb-color-text-primary)]">Subtotal</span>
            <span className="font-bold text-[var(--twb-color-text-primary)]">$36.00</span>
         </div>
         <div className="flex justify-between text-base">
            <span className="text-[var(--twb-color-text-primary)]">Pickup (Dispatch)</span>
            <span className="font-normal text-[var(--twb-color-text-primary)]">FREE</span>
         </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-[var(--twb-border-secondary)]">
         <span className="text-2xl font-bold text-[var(--twb-color-text-primary)]">Total</span>
         <span className="text-2xl font-bold text-[var(--twb-color-text-primary)]">$36.00</span>
      </div>

    </div>
  );
};
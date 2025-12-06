import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../../common/Button';
import { Typography } from '../../common/Typography';

interface ProductAddToCartProps {
  onAddToCart: (quantity: number, subscription: boolean) => void;
  inStock?: boolean;
  isSubscriptionAvailable?: boolean;
}

export const ProductAddToCart: React.FC<ProductAddToCartProps> = ({ 
  onAddToCart, 
  inStock = true, 
  isSubscriptionAvailable = false 
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);

  if (!inStock) {
    return (
      <div className="py-6 border-t border-b border-gray-200 mb-8">
         <div className="bg-gray-100 text-gray-600 px-4 py-3 rounded-sm font-medium text-center">
            Out of Stock - Join Waitlist
         </div>
      </div>
    );
  }

  return (
    <div className="border-t border-b border-gray-200 py-8 mb-8 space-y-6">
      <div className="flex flex-wrap gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center border border-gray-300 h-12 w-32 bg-white">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))} 
            className="px-3 h-full hover:bg-gray-50 text-gray-600 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <input 
            type="number" 
            value={quantity} 
            readOnly 
            className="w-full h-full text-center border-none focus:ring-0 font-medium text-[#2C1810]" 
          />
          <button 
            onClick={() => setQuantity(quantity + 1)} 
            className="px-3 h-full hover:bg-gray-50 text-gray-600 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>

        {/* Add Button */}
        <Button 
          size="lg" 
          className="flex-1 h-12 bg-[#2C1810] hover:bg-[#8B0000] text-white transition-colors"
          onClick={() => onAddToCart(quantity, isSubscription)}
        >
          Add to Cart
        </Button>
      </div>

      {isSubscriptionAvailable && (
        <div 
          className={`p-4 border rounded-sm transition-colors cursor-pointer ${isSubscription ? 'bg-[#FDF6E3] border-[#DAA520]' : 'bg-[#F9F9F9] border-gray-100'}`}
          onClick={() => setIsSubscription(!isSubscription)}
        >
          <div className="flex items-start gap-3">
             <div className="mt-1 relative flex items-center justify-center w-5 h-5">
                <input 
                  type="checkbox" 
                  checked={isSubscription} 
                  onChange={() => {}} 
                  className="appearance-none w-5 h-5 border border-gray-300 rounded-sm checked:bg-[#8B0000] checked:border-[#8B0000] transition-colors"
                />
                {isSubscription && <Minus size={12} className="absolute text-white" />} {/* Just a checkmark mimic */}
             </div>
             <div>
                <Typography variant="h4" className="!text-base mb-1">Subscribe & Save 15%</Typography>
                <Typography variant="body" className="text-sm text-gray-600">
                  Join the Wine Club and get this delivered automatically. Cancel anytime.
                </Typography>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

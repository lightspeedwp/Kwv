import React, { useState } from 'react';
import { Typography } from '../../common/Typography';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { FloatingLabelInput } from '../../common/FloatingLabelInput';

export const OrderSummary: React.FC = () => {
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  return (
    <div className="border border-gray-200 bg-white p-6 sticky top-24">
      <Typography variant="h3" className="text-lg font-normal mb-6">Order summary</Typography>

      {/* Product Item */}
      <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100">
         <div className="w-16 h-16 bg-gray-100 rounded-sm relative flex-shrink-0">
            <ImageWithFallback 
               src="figma:asset/beanie-mock" 
               alt="Product" 
               className="w-full h-full object-cover rounded-sm mix-blend-multiply"
            />
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#777] text-white text-xs font-medium flex items-center justify-center border-2 border-white">1</span>
         </div>
         <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
               <span className="text-sm font-medium text-[#333333]">Beanie</span>
               <span className="text-sm font-medium text-[#333333]">$18.00</span>
            </div>
            <div className="flex gap-2 text-xs text-gray-400 line-through">
               <span>$20.00</span>
               <span>$18.00</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">This is a simple product.</div>
         </div>
      </div>

      {/* Coupon Section */}
      <div className="border-b border-gray-100 pb-4 mb-4">
         <button 
           onClick={() => setIsCouponOpen(!isCouponOpen)}
           className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-black"
         >
            <span>Add coupons</span>
            {isCouponOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
         </button>
         
         {isCouponOpen && (
           <div className="mt-3 flex gap-2 items-start">
              <FloatingLabelInput 
                  label="Enter code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1"
              />
              <button className="bg-[#111111] text-white hover:bg-black px-4 h-12 text-sm font-medium rounded-none">
                 Apply
              </button>
           </div>
         )}
      </div>

      {/* Totals */}
      <div className="space-y-3 mb-6">
         <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium text-[#333333]">$18.00</span>
         </div>
         <div className="flex justify-between text-sm">
            <span className="text-gray-600">Pickup (Dispatch)</span>
            <span className="font-medium text-[#333333]">FREE</span>
         </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-200 mb-8">
         <span className="text-xl font-bold text-[#333333]">Total</span>
         <span className="text-xl font-bold text-[#333333]">$18.00</span>
      </div>

    </div>
  );
};
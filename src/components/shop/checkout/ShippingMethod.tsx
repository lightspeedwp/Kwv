import React, { useState } from 'react';
import { Typography } from '../../common/Typography';
import { ShippingAddress } from './ShippingAddress';

/**
 * ShippingMethod Component
 * 
 * Allows the user to select their preferred shipping method.
 * Features:
 * - Toggle between "Dispatch" (Delivery) and "Local Pickup".
 * - Conditionally renders the `ShippingAddress` form if "Dispatch" is selected.
 * - Displays pickup location details if "Pickup" is selected.
 */
export const ShippingMethod: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('dispatch');

  return (
    <div className="">
      
      <div className="border border-gray-300 rounded-sm overflow-hidden">
        <div className={`border-b border-gray-200 ${selectedMethod === 'dispatch' ? 'bg-gray-50' : ''}`}>
           <label className="flex items-start p-4 cursor-pointer hover:bg-gray-50 transition-colors">
              <input 
                type="radio" 
                name="shipping" 
                value="dispatch"
                checked={selectedMethod === 'dispatch'}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="mt-1 mr-3 accent-[var(--twb-color-ink)]"
              />
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                   <span className="font-medium text-[var(--twb-color-text-primary)]">Dispatch</span>
                   <span className="text-gray-500">FREE</span>
                </div>
                <p className="text-sm text-gray-500">We will deliver to your shipping address.</p>
              </div>
           </label>
           
           {selectedMethod === 'dispatch' && (
              <div className="px-4 pb-4">
                 <ShippingAddress />
              </div>
           )}
        </div>

        <label className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors ${selectedMethod === 'pickup' ? 'bg-gray-50' : ''}`}>
           <input 
             type="radio" 
             name="shipping" 
             value="pickup"
             checked={selectedMethod === 'pickup'}
             onChange={(e) => setSelectedMethod(e.target.value)}
             className="mr-3 accent-[var(--twb-color-ink)]"
           />
           <div className="flex-1">
             <span className="font-medium text-[var(--twb-color-text-primary)] block">Local Pickup</span>
             {selectedMethod === 'pickup' && (
                <p className="text-sm text-gray-500 mt-1">46 Devon Street, Cape Town, Western Cape, 7015</p>
             )}
           </div>
        </label>
      </div>
    </div>
  );
};
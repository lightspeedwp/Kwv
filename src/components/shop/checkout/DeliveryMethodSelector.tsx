import React from 'react';
import { Truck, Store } from 'lucide-react';

interface DeliveryMethodSelectorProps {
  method: 'ship' | 'pickup';
  setMethod: (method: 'ship' | 'pickup') => void;
}

/**
 * DeliveryMethodSelector Component
 * 
 * Allows the user to choose between "Ship" and "Pickup".
 * Features:
 * - Visual selection cards with icons (Truck vs Store).
 * - Price display (cost vs FREE).
 * - Updates the parent state `setMethod`.
 * 
 * @param {DeliveryMethodSelectorProps} props - Current method and setter.
 */
export const DeliveryMethodSelector: React.FC<DeliveryMethodSelectorProps> = ({ method, setMethod }) => {
  return (
    <div>
      <p className="text-[var(--twb-color-text-primary)] text-lg mb-4 font-light">Select how you would like to receive your order.</p>
      
      <div className="flex bg-[var(--twb-color-bg-tertiary)] p-1 rounded-sm">
        {/* Ship Option */}
        <button
          onClick={() => setMethod('ship')}
          className={`flex-1 flex flex-col items-center justify-center py-5 rounded-sm border transition-all duration-200 ${
            method === 'ship' 
              ? 'bg-white border-black shadow-sm' 
              : 'bg-transparent border-transparent text-gray-500 hover:bg-black/5'
          }`}
        >
          <div className="flex items-center gap-3 mb-1">
            <Truck size={20} className={method === 'ship' ? "text-[var(--twb-color-text-primary)]" : "text-gray-500"} />
            <span className={`font-bold text-sm ${method === 'ship' ? "text-[var(--twb-color-text-primary)]" : "text-gray-500"}`}>Ship</span>
          </div>
          <span className={`text-xs ${method === 'ship' ? "text-[var(--twb-color-text-primary)]" : "text-gray-500"}`}>$20.00</span>
        </button>

        {/* Pickup Option */}
        <button
          onClick={() => setMethod('pickup')}
          className={`flex-1 flex flex-col items-center justify-center py-5 rounded-sm border transition-all duration-200 ${
            method === 'pickup' 
              ? 'bg-white border-black shadow-sm' 
              : 'bg-transparent border-transparent text-gray-500 hover:bg-black/5'
          }`}
        >
          <div className="flex items-center gap-3 mb-1">
            <Store size={20} className={method === 'pickup' ? "text-[var(--twb-color-text-primary)]" : "text-gray-500"} />
            <span className={`font-bold text-sm ${method === 'pickup' ? "text-[var(--twb-color-text-primary)]" : "text-gray-500"}`}>Pickup</span>
          </div>
          <span className={`text-xs ${method === 'pickup' ? "text-[var(--twb-color-text-primary)]" : "text-gray-500"}`}>FREE</span>
        </button>
      </div>
    </div>
  );
};
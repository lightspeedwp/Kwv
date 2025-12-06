import React from 'react';
import { Truck, Store } from 'lucide-react';

interface DeliveryMethodSelectorProps {
  method: 'ship' | 'pickup';
  setMethod: (method: 'ship' | 'pickup') => void;
}

export const DeliveryMethodSelector: React.FC<DeliveryMethodSelectorProps> = ({ method, setMethod }) => {
  return (
    <div>
      <p className="text-[#333333] mb-4">Select how you would like to receive your order.</p>
      
      <div className="flex bg-[#F6F6F6] rounded-md p-1">
        {/* Ship Option */}
        <button
          onClick={() => setMethod('ship')}
          className={`flex-1 flex flex-col items-center justify-center py-4 rounded-md border transition-all ${
            method === 'ship' 
              ? 'bg-white border-black shadow-sm' 
              : 'bg-transparent border-transparent hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <Truck size={18} className="text-[#333333]" />
            <span className="font-bold text-[#333333] text-sm">Ship</span>
          </div>
          <span className="text-xs text-gray-500">$20.00</span>
        </button>

        {/* Pickup Option */}
        <button
          onClick={() => setMethod('pickup')}
          className={`flex-1 flex flex-col items-center justify-center py-4 rounded-md border transition-all ${
            method === 'pickup' 
              ? 'bg-white border-black shadow-sm' 
              : 'bg-transparent border-transparent hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <Store size={18} className="text-[#333333]" />
            <span className="font-bold text-[#333333] text-sm">Pickup</span>
          </div>
          <span className="text-xs text-gray-500">FREE</span>
        </button>
      </div>
    </div>
  );
};
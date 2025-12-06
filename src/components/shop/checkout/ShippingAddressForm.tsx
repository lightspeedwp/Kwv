import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../../common/Button';

export const ShippingAddressForm: React.FC = () => {
  return (
    <div>
        <p className="text-[#333333] mb-6">Enter the address where you want your order delivered.</p>

        {/* Saved Address Card */}
        <div className="border border-gray-200 p-6 rounded-sm mb-6 relative">
            <button className="absolute top-6 right-6 text-sm text-gray-500 hover:text-black underline">Edit</button>
            
            <h4 className="text-lg font-bold text-[#333333] mb-1">Ash Shaw</h4>
            <p className="text-lg text-[#333333] leading-relaxed font-light mb-1">
                LightSpeed, 46 Devon Street, Woodstock, Cape Town, Western Cape, 7925, South Africa
            </p>
            <p className="text-lg text-[#333333] font-light">
                +27845656767
            </p>
        </div>

        {/* Use same address checkbox */}
        <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="w-5 h-5 border border-gray-400 rounded-sm bg-white peer-checked:bg-black peer-checked:border-black transition-colors"></div>
                <Check size={14} className="text-white absolute top-0.5 left-0.5 opacity-0 peer-checked:opacity-100" />
            </div>
            <span className="text-lg text-[#333333] font-light">Use same address for billing</span>
        </label>
    </div>
  );
};
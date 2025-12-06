import React from 'react';

export const PickupLocationSelect: React.FC = () => {
  return (
    <div className="border border-[#333333] p-4 rounded-sm flex items-start justify-between bg-white">
        <div className="flex items-start gap-4">
            <div className="flex items-center justify-center mt-0.5">
                <div className="w-4 h-4 rounded-full border border-black flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                </div>
            </div>
            <div>
                <div className="flex items-baseline gap-4 mb-1">
                    <span className="font-normal text-xl text-[#333333]">Dispatch</span>
                </div>
                <div className="flex items-start gap-2 text-gray-500 font-light">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="text-lg leading-snug">46 Devon Street, Cape Town, Western Cape, 7015</span>
                </div>
            </div>
        </div>
        <span className="text-[#333333] text-lg">FREE</span>
    </div>
  );
};
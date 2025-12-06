import React from 'react';

interface PayflexWidgetProps {
  price: number;
}

export const PayflexWidget: React.FC<PayflexWidgetProps> = ({ price }) => {
  const installment = (price / 4).toFixed(2);

  return (
    <div className="border border-gray-200 rounded-sm p-4 my-6 bg-white">
      <div className="flex flex-col gap-1">
        <p className="font-bold text-[#2C1810] text-sm">
          Buy now. Pay later. 0% interest.
        </p>
        <p className="text-sm text-gray-600">
          Choose your payment plan, and pay from as little as <span className="font-semibold">R{installment}</span> today.
        </p>
        <a 
          href="https://payflex.co.za/how-it-works/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xs text-[#8B0000] underline hover:text-black mt-1"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

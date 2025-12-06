import React from 'react';
import { Typography } from '../../common/Typography';

interface CheckoutStepProps {
  number: string;
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
  headerRight?: React.ReactNode;
}

export const CheckoutStep: React.FC<CheckoutStepProps> = ({ 
  number, 
  title, 
  children, 
  isLast = false,
  headerRight 
}) => {
  return (
    <div className="flex gap-4 md:gap-6">
      {/* Number Column */}
      <div className="flex flex-col items-start flex-shrink-0 pt-0 w-8 md:w-10">
        <Typography variant="h3" className="text-3xl font-normal text-[#333333] leading-none mt-1">{number}.</Typography>
        {!isLast && <div className="w-px bg-gray-200 flex-grow mt-4 ml-2 mb-2"></div>}
      </div>
      
      {/* Content Column */}
      <div className="flex-1 pb-10">
        <div className="flex justify-between items-start mb-6">
          <Typography variant="h3" className="text-3xl font-normal text-[#333333] leading-none mt-1">{title}</Typography>
          {headerRight}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};
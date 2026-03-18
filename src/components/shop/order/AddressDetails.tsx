import React from 'react';
import { Typography } from '../../common/Typography';

/**
 * AddressDetails Component
 * 
 * Displays the Billing (and optionally Shipping) address on the Order Confirmation page.
 * Styled with a double-border container (`border-2 border-[var(--twb-border-primary)]`).
 */
export const AddressDetails: React.FC = () => {
  return (
    <div className="mb-12">
      <Typography variant="h3" className="mb-6 !text-2xl font-normal text-[var(--twb-color-text-primary)]">Billing address</Typography>
      
      <div className="border border-2 border-[var(--twb-border-primary)] p-6 rounded-sm text-[var(--twb-color-text-primary)] leading-relaxed">
         <p>Ash Shaw</p>
         <p>LightSpeed</p>
         <p>46 Devon Street</p>
         <p>Woodstock, Cape Town</p>
         <p>Western Cape</p>
         <p>7925</p>
         <p>+27845656767</p>
         <p className="mt-4 text-gray-500">ashley@lsdev.biz</p>
      </div>
    </div>
  );
};
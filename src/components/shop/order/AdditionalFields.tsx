import React from 'react';
import { Typography } from '../../common/Typography';

/**
 * AdditionalFields Component
 * 
 * Displays custom checkout fields on the Order Confirmation page.
 * Typically maps to "Order Notes", "Gift Messages", or "Delivery Instructions".
 */
export const AdditionalFields: React.FC = () => {
  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <Typography variant="h3" className="mb-6 !text-2xl font-normal text-[var(--twb-color-text-primary)]">
        Additional fields
      </Typography>
      
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 text-[var(--twb-color-text-primary)]">
         <div>
            <dt className="font-bold mb-1">Gift Message</dt>
            <dd className="text-gray-600">Happy Birthday! Hope you enjoy the wine.</dd>
         </div>
         <div>
            <dt className="font-bold mb-1">Delivery Instructions</dt>
            <dd className="text-gray-600">Please leave at the front gate if no one is home.</dd>
         </div>
      </dl>
    </div>
  );
};
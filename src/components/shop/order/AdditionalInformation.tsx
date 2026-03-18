import React from 'react';
import { Typography } from '../../common/Typography';

/**
 * AdditionalInformation Component
 * 
 * Displays standard WooCommerce "Order Notes" added by the customer during checkout.
 * Rendered on the Order Confirmation page.
 */
export const AdditionalInformation: React.FC = () => {
  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <Typography variant="h3" className="mb-6 !text-2xl font-normal text-[var(--twb-color-text-primary)]">
        Additional information
      </Typography>
      
      <div className="space-y-4 text-[var(--twb-color-text-primary)]">
        <div>
            <span className="font-bold block mb-1">Order notes</span>
            <p className="text-gray-600 italic">No order notes were added.</p>
        </div>
      </div>
    </div>
  );
};
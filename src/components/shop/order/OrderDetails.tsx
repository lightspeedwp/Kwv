import React from 'react';
import { Typography } from '../../common/Typography';
import { Link } from 'react-router';

/**
 * OrderDetails Component
 * 
 * A comprehensive table summary of items purchased in the order.
 * Features:
 * - Product links and quantity indicators.
 * - Subtotals, Shipping info, and Grand Total.
 * - specific styling for the table footer (Totals).
 */
export const OrderDetails: React.FC = () => {
  return (
    <div className="mb-12">
       <Typography variant="h3" className="mb-6 !text-2xl font-normal text-[var(--twb-color-text-primary)]">Order details</Typography>
       
       <table className="w-full border-collapse">
          <thead>
             <tr className="border-b-2 border-[var(--twb-border-primary)]">
                <th className="py-4 text-[var(--twb-color-text-primary)] font-bold text-base pl-0">Product</th>
                <th className="py-4 text-[var(--twb-color-text-primary)] font-bold text-base text-right pr-0">Total</th>
             </tr>
          </thead>
          <tbody>
             <tr>
                <td className="py-4 pl-0">
                   <Link to="/product/album" className="text-[var(--twb-color-text-primary)] border-b border-black/20 hover:text-[var(--twb-color-accent-primary)] hover:border-[var(--twb-color-accent-primary)] transition-colors mr-1">
                    Album
                   </Link> 
                   <strong className="text-[var(--twb-color-text-primary)]">× 1</strong>
                </td>
                <td className="py-4 text-right text-[var(--twb-color-text-primary)] pr-0">$15.00</td>
             </tr>
             <tr>
                <td className="py-4 pl-0">
                   <Link to="/product/cap" className="text-[var(--twb-color-text-primary)] border-b border-black/20 hover:text-[var(--twb-color-accent-primary)] hover:border-[var(--twb-color-accent-primary)] transition-colors mr-1">
                    Cap
                   </Link> 
                   <strong className="text-[var(--twb-color-text-primary)]">× 1</strong>
                </td>
                <td className="py-4 text-right text-[var(--twb-color-text-primary)] pr-0">$16.00</td>
             </tr>
             <tr>
                <td className="py-4 pl-0">
                   <Link to="/product/tee" className="text-[var(--twb-color-text-primary)] border-b border-black/20 hover:text-[var(--twb-color-accent-primary)] hover:border-[var(--twb-color-accent-primary)] transition-colors mr-1">
                    Long Sleeve Tee
                   </Link> 
                   <strong className="text-[var(--twb-color-text-primary)]">× 1</strong>
                </td>
                <td className="py-4 text-right text-[var(--twb-color-text-primary)] pr-0">$25.00</td>
             </tr>
          </tbody>
          <tfoot className="border-t-2 border-[var(--twb-border-primary)]">
             <tr>
                <td className="py-4 pl-0 text-[var(--twb-color-text-primary)] font-bold">Shipping:</td>
                <td className="py-4 text-right text-[var(--twb-color-text-primary)] pr-0 leading-relaxed">
                    <div className="text-right">
                        Collection from Dispatch:<br/>
                        46 Devon Street, Cape Town, Western Cape, 7015<br/>
                        Local Pickup
                    </div>
                </td>
             </tr>
             <tr className="border-t-2 border-[var(--twb-border-primary)]">
                <td className="py-4 pl-0 text-[var(--twb-color-text-primary)] font-bold text-lg">Total:</td>
                <td className="py-4 text-right text-[var(--twb-color-text-primary)] font-bold text-lg pr-0">$56.00</td>
             </tr>
          </tfoot>
       </table>
    </div>
  );
};
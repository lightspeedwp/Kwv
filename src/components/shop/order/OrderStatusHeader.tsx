import React from 'react';
import { Typography } from '../../common/Typography';

interface OrderStatusHeaderProps {
  orderNumber: string;
  date: string;
  total: string;
  email: string;
  paymentMethod: string;
}

/**
 * OrderStatusHeader Component
 * 
 * The primary success message at the top of the Order Confirmation page.
 * Features:
 * - "Order received" heading.
 * - Dashed-border grid displaying key metrics: Order Number, Date, Total, Email, Payment Method.
 * 
 * @param {OrderStatusHeaderProps} props - Data for the order summary strip.
 */
export const OrderStatusHeader: React.FC<OrderStatusHeaderProps> = ({
  orderNumber,
  date,
  total,
  email,
  paymentMethod
}) => {
  return (
    <div className="mb-12">
      <div className="mb-12">
         <Typography variant="h1" className="mb-4 text-[var(--twb-color-text-primary)] font-normal text-4xl">Order received</Typography>
         <p className="text-[var(--twb-color-text-primary)] text-lg">Thank you. Your order has been received.</p>
      </div>

      <div className="flex flex-col md:flex-row border-2 border-dashed border-[var(--twb-border-primary)]">
         <div className="p-4 md:p-6 md:pr-10 md:border-r-2 border-b-2 md:border-b-0 border-dashed border-[var(--twb-border-primary)]">
            <span className="block text-xs uppercase tracking-wider font-bold text-[var(--twb-color-text-primary)] mb-2">Order #:</span>
            <span className="block text-[var(--twb-color-text-primary)] font-bold">{orderNumber}</span>
         </div>
         <div className="p-4 md:p-6 md:px-10 md:border-r-2 border-b-2 md:border-b-0 border-dashed border-[var(--twb-border-primary)]">
            <span className="block text-xs uppercase tracking-wider font-bold text-[var(--twb-color-text-primary)] mb-2">Date:</span>
            <span className="block text-[var(--twb-color-text-primary)] font-bold">{date}</span>
         </div>
         <div className="p-4 md:p-6 md:px-10 md:border-r-2 border-b-2 md:border-b-0 border-dashed border-[var(--twb-border-primary)]">
            <span className="block text-xs uppercase tracking-wider font-bold text-[var(--twb-color-text-primary)] mb-2">Total:</span>
            <span className="block text-[var(--twb-color-text-primary)] font-bold">{total}</span>
         </div>
         <div className="p-4 md:p-6 md:px-10 md:border-r-2 border-b-2 md:border-b-0 border-dashed border-[var(--twb-border-primary)]">
            <span className="block text-xs uppercase tracking-wider font-bold text-[var(--twb-color-text-primary)] mb-2">Email:</span>
            <span className="block text-[var(--twb-color-text-primary)] font-bold">{email}</span>
         </div>
         <div className="p-4 md:p-6 md:pl-10">
            <span className="block text-xs uppercase tracking-wider font-bold text-[var(--twb-color-text-primary)] mb-2">Payment:</span>
            <span className="block text-[var(--twb-color-text-primary)] font-bold">{paymentMethod}</span>
         </div>
      </div>
    </div>
  );
};
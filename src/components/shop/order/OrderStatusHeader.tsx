import React from 'react';
import { Typography } from '../../common/Typography';

interface OrderStatusHeaderProps {
  orderNumber: string;
  date: string;
  total: string;
  email: string;
  paymentMethod: string;
}

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
         <Typography variant="h1" className="mb-4 text-[#333333] font-normal text-4xl">Order received</Typography>
         <p className="text-[#333333] text-lg">Thank you. Your order has been received.</p>
      </div>

      <div className="flex flex-col md:flex-row border border-gray-200 md:border-0">
         <div className="p-4 md:p-0 md:pr-12 md:border-r border-b md:border-b-0 border-gray-200">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Order #:</span>
            <span className="block text-[#333333]">{orderNumber}</span>
         </div>
         <div className="p-4 md:p-0 md:px-12 md:border-r border-b md:border-b-0 border-gray-200">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Date:</span>
            <span className="block text-[#333333]">{date}</span>
         </div>
         <div className="p-4 md:p-0 md:px-12 md:border-r border-b md:border-b-0 border-gray-200">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Total:</span>
            <span className="block text-[#333333]">{total}</span>
         </div>
         <div className="p-4 md:p-0 md:px-12 md:border-r border-b md:border-b-0 border-gray-200">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Email:</span>
            <span className="block text-[#333333]">{email}</span>
         </div>
         <div className="p-4 md:p-0 md:pl-12">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Payment:</span>
            <span className="block text-[#333333]">{paymentMethod}</span>
         </div>
      </div>
    </div>
  );
};
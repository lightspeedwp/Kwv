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

      <div className="flex flex-col md:flex-row border-2 border-dashed border-[#D3D3D3]">
         <div className="p-4 md:p-6 md:pr-10 md:border-r-2 border-b-2 md:border-b-0 border-dashed border-[#D3D3D3]">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Order #:</span>
            <span className="block text-[#333333] font-bold">{orderNumber}</span>
         </div>
         <div className="p-4 md:p-6 md:px-10 md:border-r-2 border-b-2 md:border-b-0 border-dashed border-[#D3D3D3]">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Date:</span>
            <span className="block text-[#333333] font-bold">{date}</span>
         </div>
         <div className="p-4 md:p-6 md:px-10 md:border-r-2 border-b-2 md:border-b-0 border-dashed border-[#D3D3D3]">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Total:</span>
            <span className="block text-[#333333] font-bold">{total}</span>
         </div>
         <div className="p-4 md:p-6 md:px-10 md:border-r-2 border-b-2 md:border-b-0 border-dashed border-[#D3D3D3]">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Email:</span>
            <span className="block text-[#333333] font-bold">{email}</span>
         </div>
         <div className="p-4 md:p-6 md:pl-10">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Payment:</span>
            <span className="block text-[#333333] font-bold">{paymentMethod}</span>
         </div>
      </div>
    </div>
  );
};
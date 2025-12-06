import React from 'react';
import { CheckoutLayout } from '../components/layout/CheckoutLayout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OrderConfirmation: React.FC = () => {
  const orderDetails = {
    number: '123',
    date: 'December 6, 2025',
    total: 'R 429.00',
    email: 'test@test.com',
    paymentMethod: 'Credit Card'
  };

  return (
    <CheckoutLayout>
      <Container variant="site" className="py-16">
        
        {/* Header Section */}
        <div className="mb-12">
           <Typography variant="h1" className="mb-4 text-[#333333] font-normal text-4xl">Order received</Typography>
           <p className="text-[#333333] text-lg">Thank you. Your order has been received.</p>
        </div>

        {/* Order Meta Grid */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 border-b border-gray-200 pb-12 mb-12">
           <div className="md:pr-12 md:border-r border-gray-200">
              <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Order number:</span>
              <span className="block text-[#333333]">{orderDetails.number}</span>
           </div>
           <div className="md:px-12 md:border-r border-gray-200">
              <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Date:</span>
              <span className="block text-[#333333]">{orderDetails.date}</span>
           </div>
           <div className="md:px-12 md:border-r border-gray-200">
              <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Total:</span>
              <span className="block text-[#333333]">{orderDetails.total}</span>
           </div>
           <div className="md:px-12 md:border-r border-gray-200">
              <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Email:</span>
              <span className="block text-[#333333]">{orderDetails.email}</span>
           </div>
           <div className="md:pl-12">
              <span className="block text-xs uppercase tracking-wider font-bold text-[#333333] mb-2">Payment method:</span>
              <span className="block text-[#333333]">{orderDetails.paymentMethod}</span>
           </div>
        </div>

        {/* Registration Prompt */}
        <div className="bg-[#F9F9F9] p-8 md:p-12 mb-16 flex flex-col lg:flex-row gap-12 items-center">
           <div className="flex-1">
              <Typography variant="h3" className="mb-6 !text-2xl font-normal text-[#333333]">Create an account with KWV</Typography>
              <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                    <Check size={20} className="mt-0.5 text-black" strokeWidth={2.5} />
                    <span className="text-lg text-[#333333]">Faster future purchases</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <Check size={20} className="mt-0.5 text-black" strokeWidth={2.5} />
                    <span className="text-lg text-[#333333]">Securely save payment info</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <Check size={20} className="mt-0.5 text-black" strokeWidth={2.5} />
                    <span className="text-lg text-[#333333]">Track orders & view shopping history</span>
                 </li>
              </ul>
           </div>
           <div className="flex-1 w-full lg:w-auto">
              <div className="bg-transparent flex flex-col gap-4">
                 <Link to="/account?action=register">
                    <Button fullWidth className="bg-[#111111] hover:bg-black text-white h-14 text-base font-normal rounded-none">
                       Create account
                    </Button>
                 </Link>
                 <p className="text-xs text-gray-500 text-center leading-relaxed">
                    Check your email at {orderDetails.email} for the link to set up an account password. 
                    By creating an account you agree to our <Link to="/terms" className="underline">Terms</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>.
                 </p>
              </div>
           </div>
        </div>

        {/* Order Details */}
        <div>
           <Typography variant="h3" className="mb-6 !text-2xl font-normal text-[#333333]">Order details</Typography>
           
           <table className="w-full text-left">
              <thead>
                 <tr className="border-b-2 border-gray-100">
                    <th className="py-4 text-[#333333] font-bold text-base">Product</th>
                    <th className="py-4 text-[#333333] font-bold text-base text-right">Total</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-b border-gray-200">
                 <tr>
                    <td className="py-4">
                       <span className="text-[#333333] font-medium">The Mentors Orchestra 2020</span> <strong className="text-[#333333]">× 1</strong>
                    </td>
                    <td className="py-4 text-right text-[#333333] font-medium">R 429.00</td>
                 </tr>
                 <tr>
                    <td className="py-4 text-[#333333] font-bold">Subtotal:</td>
                    <td className="py-4 text-right text-[#333333]">R 429.00</td>
                 </tr>
                 <tr>
                    <td className="py-4 text-[#333333] font-bold">Payment method:</td>
                    <td className="py-4 text-right text-[#333333]">Credit Card</td>
                 </tr>
                 <tr>
                    <td className="py-4 text-[#333333] font-bold text-xl">Total:</td>
                    <td className="py-4 text-right text-[#333333] font-bold text-xl">R 429.00</td>
                 </tr>
              </tbody>
           </table>
        </div>

      </Container>
    </CheckoutLayout>
  );
};

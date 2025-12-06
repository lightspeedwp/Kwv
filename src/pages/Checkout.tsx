import React from 'react';
import { CheckoutLayout } from '../components/layout/CheckoutLayout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { FAQSection } from '../components/sections/FAQSection';

export const Checkout = () => {
  return (
    <CheckoutLayout>
      <Container variant="content" className="py-20">
         <Typography variant="h1" className="mb-12 text-center">Checkout</Typography>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>
             <Typography variant="h3" className="mb-6">Billing Details</Typography>
             <form className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="First Name" className="border p-3 w-full focus:outline-none focus:border-[#8B0000]" />
                 <input type="text" placeholder="Last Name" className="border p-3 w-full focus:outline-none focus:border-[#8B0000]" />
               </div>
               <input type="text" placeholder="Address" className="border p-3 w-full focus:outline-none focus:border-[#8B0000]" />
               <input type="text" placeholder="City" className="border p-3 w-full focus:outline-none focus:border-[#8B0000]" />
               <input type="text" placeholder="Phone" className="border p-3 w-full focus:outline-none focus:border-[#8B0000]" />
               <input type="email" placeholder="Email" className="border p-3 w-full focus:outline-none focus:border-[#8B0000]" />
             </form>
           </div>
           
           <div className="bg-gray-50 p-8 border border-gray-200 h-fit">
              <Typography variant="h3" className="mb-6">Your Order</Typography>
              <div className="flex justify-between mb-4 border-b pb-4">
                 <span>The Mentors Orchestra 2020 x 1</span>
                 <span className="font-bold">R 429.00</span>
              </div>
              <div className="flex justify-between mb-8 text-xl font-bold">
                 <span>Total</span>
                 <span>R 429.00</span>
              </div>
              <Button fullWidth>Place Order</Button>
           </div>
         </div>
      </Container>

      <FAQSection items={[
        { question: "Is my payment information secure?", answer: "Yes, we use industry-standard encryption and trusted payment gateways to ensure your data is completely secure." },
        { question: "Can I pay via EFT?", answer: "Yes, you can select EFT (Electronic Funds Transfer) as a payment method. Your order will be processed once proof of payment is received." },
        { question: "Do I need to create an account?", answer: "You can checkout as a guest, but creating an account allows you to track orders and save addresses for faster checkout next time." }
      ]} />
    </CheckoutLayout>
  );
};

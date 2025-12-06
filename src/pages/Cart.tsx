import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';
import { COLORS } from '../constants/theme';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { FAQSection } from '../components/sections/FAQSection';

export const Cart = () => {
  return (
    <Layout>
      <Container variant="content" className="py-20">
        <Typography variant="h1" className="mb-12 text-center">Your Cart</Typography>
        
        <div className="bg-white border border-gray-200 p-8 mb-8">
           <div className="flex gap-6 items-center border-b border-gray-100 pb-6 mb-6 last:mb-0 last:pb-0 last:border-0">
             <div className="w-24 h-32 flex-shrink-0 bg-gray-50 overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80" 
                 alt="The Mentors Orchestra 2020" 
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="flex-1">
               <Typography variant="h4">The Mentors Orchestra 2020</Typography>
               <Typography variant="body" className="text-gray-500 mb-2">Red Wine</Typography>
               <Typography variant="body" className="font-bold text-[#8B0000]">R 429.00</Typography>
             </div>
             <div className="flex items-center border border-gray-300 h-10">
               <button className="px-3 hover:bg-gray-100"><Minus size={14} /></button>
               <span className="px-3 font-medium">1</span>
               <button className="px-3 hover:bg-gray-100"><Plus size={14} /></button>
             </div>
             <button className="text-gray-400 hover:text-red-500"><Trash2 size={20} /></button>
           </div>
        </div>

        <div className="flex justify-end">
          <div className="w-full md:w-1/3 bg-gray-50 p-8 border border-gray-200">
            <div className="flex justify-between mb-4">
              <Typography variant="body">Subtotal</Typography>
              <Typography variant="body" className="font-bold">R 429.00</Typography>
            </div>
            <div className="flex justify-between mb-8">
              <Typography variant="body">Shipping</Typography>
              <Typography variant="body">Calculated at checkout</Typography>
            </div>
            <Link to="/checkout">
              <Button fullWidth>Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      </Container>
      
      <FAQSection items={[
        { question: "How do I use a promo code?", answer: "You can enter your promo code at the checkout step. The discount will be applied to your total immediately." },
        { question: "What if I want to change my order?", answer: "You can update quantities or remove items directly in the cart. Once checked out, please contact support immediately for changes." },
        { question: "Is shipping included?", answer: "Shipping is calculated at checkout based on your delivery address and order size." }
      ]} />
    </Layout>
  );
};

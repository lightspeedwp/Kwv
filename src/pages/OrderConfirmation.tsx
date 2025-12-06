import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { CheckCircle, Download } from 'lucide-react';
import { COLORS } from '../constants/theme';
import { Link } from 'react-router-dom';
import { FAQSection } from '../components/sections/FAQSection';

export const OrderConfirmation: React.FC = () => {
  return (
    <Layout>
      <Container variant="content" className="py-20 text-center">
        <div className="flex justify-center mb-6">
           <CheckCircle size={64} className="text-green-600" />
        </div>
        <Typography variant="h1" color={COLORS.wineRed} className="mb-4">Thank you for your order!</Typography>
        <Typography variant="bodyLarge" className="text-gray-600 mb-8">
           Your order #1234 has been received and is now being processed.
        </Typography>

        <div className="bg-[#F9F9F9] p-8 rounded-sm text-left max-w-2xl mx-auto border border-gray-200 mb-12">
           <Typography variant="h3" className="mb-6 border-b border-gray-200 pb-4">Order Details</Typography>
           
           <div className="grid grid-cols-2 gap-y-4 text-sm mb-6">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-bold text-[#2C1810]">1234</span>
              
              <span className="text-gray-600">Date:</span>
              <span className="font-bold text-[#2C1810]">October 25, 2024</span>
              
              <span className="text-gray-600">Email:</span>
              <span className="font-bold text-[#2C1810]">user@example.com</span>
              
              <span className="text-gray-600">Total:</span>
              <span className="font-bold text-[#2C1810]">R 1,450.00</span>
              
              <span className="text-gray-600">Payment Method:</span>
              <span className="font-bold text-[#2C1810]">Credit Card</span>
           </div>

           <Typography variant="h4" className="mb-4">Downloads</Typography>
           <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-sm mb-6">
              <span className="text-sm font-medium">Invoice #1234</span>
              <Button size="sm" variant="outline" className="flex items-center gap-2">
                 <Download size={14} /> Download
              </Button>
           </div>
        </div>

        <Link to="/shop">
           <Button size="lg" className="bg-[#2C1810] text-white hover:bg-[#8B0000]">Continue Shopping</Button>
        </Link>
      </Container>
      
      <FAQSection items={[
        { question: "When will my order arrive?", answer: "Orders are typically delivered within 3-5 working days for main centers and 5-7 working days for regional areas." },
        { question: "Can I track my delivery?", answer: "Yes, you will receive a tracking number via email once your order has been dispatched from our warehouse." },
        { question: "What if I received a broken bottle?", answer: "Please contact our customer support immediately with photos of the damage, and we will arrange a replacement or refund." }
      ]} />
    </Layout>
  );
};

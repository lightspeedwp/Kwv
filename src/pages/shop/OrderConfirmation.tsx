import React, { useState } from 'react';
import { CheckoutLayout } from '../../components/layout/CheckoutLayout';
import { Container } from '../../components/common/Container';
import { OrderStatusHeader } from '../../components/shop/order/OrderStatusHeader';
import { AccountCreation } from '../../components/shop/order/AccountCreation';
import { OrderDetails } from '../../components/shop/order/OrderDetails';
import { AddressDetails } from '../../components/shop/order/AddressDetails';
import { DownloadsSection } from '../../components/shop/order/DownloadsSection';
import { AdditionalInformation } from '../../components/shop/order/AdditionalInformation';
import { AdditionalFields } from '../../components/shop/order/AdditionalFields';
import { User, UserX } from 'lucide-react';

/**
 * OrderConfirmation Page Component
 * 
 * The "Thank You" page displayed after a successful checkout.
 * Summarizes the order details, shipping address, and payment method.
 * Prompts guest users to create an account.
 */
export const OrderConfirmation: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to Guest for demo

  // Mock Data
  const orderData = {
    number: '260',
    date: 'December 6, 2025',
    total: '$56.00',
    email: 'ashley@lightspeedwp.agency',
    paymentMethod: 'Direct bank transfer'
  };

  return (
    <CheckoutLayout>
      <Container variant="site" className="py-16">
        
        {/* Dev Control: Toggle Login State */}
         <div className="fixed bottom-4 left-4 z-50 bg-white p-2 shadow-lg border border-gray-200 rounded-lg flex items-center gap-2 text-xs">
            <span className="font-bold">Prototype Mode:</span>
            <button 
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className={`px-3 py-1 rounded ${isLoggedIn ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
            >
               {isLoggedIn ? <span className="flex items-center gap-1"><User size={12} /> Logged In</span> : <span className="flex items-center gap-1"><UserX size={12} /> Guest</span>}
            </button>
         </div>

        <OrderStatusHeader 
           orderNumber={orderData.number}
           date={orderData.date}
           total={orderData.total}
           email={orderData.email}
           paymentMethod={orderData.paymentMethod}
        />

        {/* Show Downloads if relevant (e.g. Album) */}
        <DownloadsSection />

        {!isLoggedIn && (
           <AccountCreation email={orderData.email} />
        )}

        <OrderDetails />
        
        <AddressDetails />

        <AdditionalFields />

        <AdditionalInformation />

      </Container>
    </CheckoutLayout>
  );
};

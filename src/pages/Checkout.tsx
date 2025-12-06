import React, { useState } from 'react';
import { CheckoutLayout } from '../components/layout/CheckoutLayout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { ArrowLeft, User, UserX } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import { ContactInfo } from '../components/shop/checkout/ContactInfo';
import { ShippingMethod } from '../components/shop/checkout/ShippingMethod';
import { BillingAddress } from '../components/shop/checkout/BillingAddress';
import { PaymentMethods } from '../components/shop/checkout/PaymentMethods';
import { OrderSummary } from '../components/shop/checkout/OrderSummary';
import { CheckoutStep } from '../components/shop/checkout/CheckoutStep';

export const Checkout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePlaceOrder = () => {
    navigate('/order-received');
  };

  return (
    <CheckoutLayout>
      <Container variant="site" className="py-12">
         
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

         <div className="mb-12">
            <Typography variant="h1" className="font-light text-5xl">Checkout</Typography>
         </div>

         <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Column */}
            <div className="flex-1">
               
               <CheckoutStep 
                  number="1" 
                  title="Contact information"
                  headerRight={!isLoggedIn && (
                     <div className="text-sm text-gray-600 mt-2">
                       Already have an account? <Link to="/account" className="text-[#333333] underline">Log in</Link>
                     </div>
                  )}
               >
                  <ContactInfo isLoggedIn={isLoggedIn} />
               </CheckoutStep>

               <CheckoutStep number="2" title="Pickup locations">
                  <ShippingMethod />
               </CheckoutStep>

               <CheckoutStep number="3" title="Billing address">
                  <BillingAddress />
               </CheckoutStep>

               <CheckoutStep number="4" title="Payment options" isLast>
                  <PaymentMethods />
               </CheckoutStep>

               <div className="flex justify-between items-center pt-8 mt-4">
                  <Link to="/cart" className="flex items-center gap-3 text-lg text-black hover:opacity-70 transition-opacity group">
                     <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                     <span className="font-normal">Return to Cart</span>
                  </Link>
                  <Button 
                    onClick={handlePlaceOrder}
                    className="w-1/2 bg-[#111111] text-white hover:bg-black h-14 rounded-none text-lg font-normal"
                  >
                     Place Order
                  </Button>
               </div>
            </div>

            {/* Sidebar Column */}
            <div className="w-full lg:w-[400px] flex-shrink-0">
               <OrderSummary />
            </div>
         </div>
      </Container>
    </CheckoutLayout>
  );
};
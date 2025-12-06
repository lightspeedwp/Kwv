import React, { useState } from 'react';
import { CheckoutLayout } from '../components/layout/CheckoutLayout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { ArrowLeft, User, UserX } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import { ContactInfo } from '../components/shop/checkout/ContactInfo';
import { DeliveryMethodSelector } from '../components/shop/checkout/DeliveryMethodSelector';
import { PickupLocationSelect } from '../components/shop/checkout/PickupLocationSelect';
import { ShippingAddressForm } from '../components/shop/checkout/ShippingAddressForm';
import { BillingAddressForm } from '../components/shop/checkout/BillingAddressForm';
import { PaymentMethods } from '../components/shop/checkout/PaymentMethods';
import { OrderSummary } from '../components/shop/checkout/OrderSummary';
import { CheckoutStep } from '../components/shop/checkout/CheckoutStep';

export const Checkout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'ship' | 'pickup'>('ship');
  const [useSameBilling, setUseSameBilling] = useState(true);

  // Calculate step numbers dynamically
  const stepShipping = 3;
  const stepBilling = useSameBilling ? null : 4;
  const stepPayment = useSameBilling ? 4 : 5;

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
               
               {/* Step 1: Contact */}
               <CheckoutStep 
                  number="1" 
                  title="Contact information"
                  headerRight={!isLoggedIn && (
                     <div className="mt-1">
                       <Link 
                          to="/account" 
                          className="text-[#111111] underline hover:no-underline font-bold text-[17px] leading-[23px]"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          Log in
                        </Link>
                     </div>
                  )}
               >
                  <ContactInfo isLoggedIn={isLoggedIn} />
               </CheckoutStep>

               {/* Step 2: Delivery */}
               <CheckoutStep number="2" title="Delivery">
                  <DeliveryMethodSelector method={deliveryMethod} setMethod={setDeliveryMethod} />
               </CheckoutStep>

               {/* Step 3: Dynamic (Shipping or Pickup) */}
               <CheckoutStep 
                  number={stepShipping.toString()} 
                  title={deliveryMethod === 'ship' ? "Shipping address" : "Pickup locations"}
               >
                  {deliveryMethod === 'ship' ? (
                     <ShippingAddressForm 
                        useSameBilling={useSameBilling} 
                        onToggleSameBilling={setUseSameBilling} 
                     />
                  ) : (
                     <PickupLocationSelect />
                  )}
               </CheckoutStep>

               {/* Step 4: Billing Address (Conditional) */}
               {!useSameBilling && deliveryMethod === 'ship' && (
                  <CheckoutStep number={stepBilling?.toString() || "4"} title="Billing address">
                      <BillingAddressForm />
                  </CheckoutStep>
               )}

               {/* Step 4/5: Payment */}
               <CheckoutStep number={stepPayment.toString()} title="Payment options" isLast>
                  <PaymentMethods />
               </CheckoutStep>
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

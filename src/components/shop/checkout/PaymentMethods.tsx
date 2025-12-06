import React, { useState } from 'react';
import { Typography } from '../../common/Typography';

export const PaymentMethods: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState('bank_transfer');
  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState('');

  return (
    <div className="">
      
      <div className="border border-gray-300 rounded-sm overflow-hidden">
        {/* Bank Transfer */}
        <div>
           <label className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors ${selectedPayment === 'bank_transfer' ? 'bg-gray-50' : ''}`}>
             <input 
               type="radio" 
               name="payment" 
               value="bank_transfer"
               checked={selectedPayment === 'bank_transfer'}
               onChange={(e) => setSelectedPayment(e.target.value)}
               className="mr-3 accent-[#2C1810]"
             />
             <span className="font-medium text-[#333333]">Direct bank transfer</span>
           </label>
           
           {selectedPayment === 'bank_transfer' && (
             <div className="p-4 pt-0 pl-10 bg-gray-50 text-sm text-gray-600 leading-relaxed border-b border-gray-200">
               Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
             </div>
           )}
        </div>

        {/* Check Payments */}
        <div className="border-t border-gray-200">
           <label className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors ${selectedPayment === 'check' ? 'bg-gray-50' : ''}`}>
             <input 
               type="radio" 
               name="payment" 
               value="check"
               checked={selectedPayment === 'check'}
               onChange={(e) => setSelectedPayment(e.target.value)}
               className="mr-3 accent-[#2C1810]"
             />
             <span className="font-medium text-[#333333]">Check payments</span>
           </label>
           {selectedPayment === 'check' && (
             <div className="p-4 pt-0 pl-10 bg-gray-50 text-sm text-gray-600 leading-relaxed border-b border-gray-200">
               Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
             </div>
           )}
        </div>

        {/* Cash on Delivery */}
        <div className="border-t border-gray-200">
           <label className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors ${selectedPayment === 'cod' ? 'bg-gray-50' : ''}`}>
             <input 
               type="radio" 
               name="payment" 
               value="cod"
               checked={selectedPayment === 'cod'}
               onChange={(e) => setSelectedPayment(e.target.value)}
               className="mr-3 accent-[#2C1810]"
             />
             <span className="font-medium text-[#333333]">Cash on delivery</span>
           </label>
           {selectedPayment === 'cod' && (
             <div className="p-4 pt-0 pl-10 bg-gray-50 text-sm text-gray-600 leading-relaxed">
               Pay with cash upon delivery.
             </div>
           )}
        </div>
      </div>

      <div className="mt-8 space-y-4">
         <label className="flex items-center gap-3 cursor-pointer">
            <input 
                type="checkbox" 
                checked={showNote}
                onChange={() => setShowNote(!showNote)}
                className="rounded border-gray-300 accent-[#2C1810] w-5 h-5" 
            />
            <span className="text-base text-[#333333]">Add a note to your order</span>
         </label>

         {showNote && (
             <div className="mt-4">
                 <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    className="w-full p-4 border border-gray-400 rounded-sm text-[#333333] placeholder-gray-400 focus:outline-none focus:border-[#2C1810] focus:ring-0"
                    rows={4}
                 />
             </div>
         )}

         <div className="pt-8">
            <p className="text-lg text-[#333333] leading-relaxed">
                By proceeding with your purchase you agree to our <Link className="underline decoration-1 underline-offset-2 hover:text-black">Terms and Conditions</Link> and <Link className="underline decoration-1 underline-offset-2 hover:text-black">Privacy Policy</Link>
            </p>
         </div>
      </div>
    </div>
  );
};

// Helper Link component just for this file to avoid importing full Link if not needed or just use 'a' tags or the react-router Link
import { Link as RouterLink } from 'react-router-dom';
const Link = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <a href="#" className={className} onClick={(e) => e.preventDefault()}>{children}</a>
);

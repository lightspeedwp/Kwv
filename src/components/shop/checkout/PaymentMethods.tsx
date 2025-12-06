import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Checkbox } from '../../common/Checkbox';
import { RadioButton } from '../../common/RadioButton';

export const PaymentMethods: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('bank_transfer');
  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState('');

  const handlePlaceOrder = () => {
    navigate('/order-received');
  };

  const getContainerClass = (value: string) => {
    const isActive = selectedPayment === value;
    const baseClass = "relative p-6 cursor-pointer transition-all duration-200";
    
    if (isActive) {
      return `${baseClass} bg-white border border-[#111111] rounded-[4px] z-10 -m-px shadow-sm`;
    }
    
    return `${baseClass} bg-white border-b border-gray-100 last:border-b-0`;
  };

  return (
    <div className="">
      
      <div className="border border-gray-200 rounded-[4px] bg-white">
        {/* Bank Transfer */}
        <div className={getContainerClass('bank_transfer')}>
           <label className="flex items-start w-full cursor-pointer">
             <div className="relative flex items-center mt-1 mr-6">
               <RadioButton 
                 name="payment" 
                 value="bank_transfer"
                 checked={selectedPayment === 'bank_transfer'}
                 onChange={(e) => setSelectedPayment(e.target.value)}
               />
             </div>
             
             <div className="flex-1">
                <span className="block text-[#111111] font-light text-[22px] leading-[31px] mb-2">Direct bank transfer</span>
                
                {selectedPayment === 'bank_transfer' && (
                  <div className="text-[17px] text-[#111111] leading-relaxed font-light">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </div>
                )}
             </div>
           </label>
        </div>

        {/* Check Payments */}
        <div className={getContainerClass('check')}>
           <label className="flex items-start w-full cursor-pointer">
             <div className="relative flex items-center mt-1 mr-6">
               <RadioButton 
                 name="payment" 
                 value="check"
                 checked={selectedPayment === 'check'}
                 onChange={(e) => setSelectedPayment(e.target.value)}
               />
             </div>
             
             <div className="flex-1">
                <span className="block text-[#111111] font-light text-[22px] leading-[31px] mb-2">Check payments</span>
                
                {selectedPayment === 'check' && (
                  <div className="text-[17px] text-[#111111] leading-relaxed font-light">
                    Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                  </div>
                )}
             </div>
           </label>
        </div>

        {/* Cash on Delivery */}
        <div className={getContainerClass('cod')}>
           <label className="flex items-start w-full cursor-pointer">
             <div className="relative flex items-center mt-1 mr-6">
               <RadioButton 
                 name="payment" 
                 value="cod"
                 checked={selectedPayment === 'cod'}
                 onChange={(e) => setSelectedPayment(e.target.value)}
               />
             </div>
             
             <div className="flex-1">
                <span className="block text-[#111111] font-light text-[22px] leading-[31px] mb-2">Cash on delivery</span>
                
                {selectedPayment === 'cod' && (
                  <div className="text-[17px] text-[#111111] leading-relaxed font-light">
                    Pay with cash upon delivery.
                  </div>
                )}
             </div>
           </label>
        </div>
      </div>

      <div className="mt-8 space-y-6">
         <div className="flex items-center gap-4">
           <div className="relative flex items-center">
             <Checkbox 
                 id="add-note"
                 checked={showNote}
                 onChange={() => setShowNote(!showNote)}
             />
           </div>
           <label htmlFor="add-note" className="text-[19px] leading-[29px] font-light text-[#111111] cursor-pointer select-none">
             Add a note to your order
           </label>
         </div>

         {showNote && (
             <div className="mt-4 mb-8">
                 <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    className="w-full p-4 border border-gray-400 rounded-sm text-[18px] text-[#333333] placeholder-gray-400 focus:outline-none focus:border-[#2C1810] focus:ring-0 font-light"
                    rows={4}
                 />
             </div>
         )}

         {/* Separator and Terms */}
         <div className="pt-8 mt-8 border-t border-gray-200">
            <p className="text-[18px] text-[#333333] leading-relaxed font-normal text-left">
                By proceeding with your purchase you agree to our <Link to="/terms" className="underline decoration-1 underline-offset-4 hover:text-black font-normal">Terms and Conditions</Link> and <Link to="/privacy" className="underline decoration-1 underline-offset-4 hover:text-black font-normal">Privacy Policy</Link>
            </p>
         </div>

         {/* Buttons Row */}
         <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-6">
            <Link to="/cart" className="flex items-center text-[18px] text-[#333333] font-medium hover:text-black group">
                <ArrowLeft className="mr-3 group-hover:-translate-x-1 transition-transform" size={24} />
                Return to Cart
            </Link>
            
            <button 
                onClick={handlePlaceOrder}
                className="w-full md:w-1/2 bg-[#111111] text-white h-16 rounded-none text-base font-normal hover:bg-black transition-colors"
            >
                Place Order
            </button>
         </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Typography } from '../../common/Typography';
import { Link } from 'react-router-dom';
import { CheckoutInput } from './CheckoutInput';
import { Checkbox } from '../../common/Checkbox';

interface ContactInfoProps {
  isLoggedIn: boolean;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ isLoggedIn }) => {
  const [createAccount, setCreateAccount] = useState(false);
  const [email, setEmail] = useState('ashley@lsdev.biz');
  const [touched, setTouched] = useState(false);

  const validateEmail = (email: string) => {
    if (!email) return 'Please enter a valid email address';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address';
    return undefined;
  };

  return (
    <div className="">
      {isLoggedIn ? (
        <div className="p-4 bg-gray-50 text-gray-700 mb-4 border border-gray-200">
          Logged in as <strong>John Doe</strong> (john.doe@example.com)
        </div>
      ) : (
        <div className="space-y-6">
           <p className="text-[19px] leading-[23px] font-light text-[#111111] mb-6">We'll use this email to send you details and updates about your order.</p>
           <div>
             <CheckoutInput
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                error={validateEmail(email)}
                touched={touched}
             />
             <p className="text-xs text-gray-500 mt-1 pl-1">You are currently checking out as a guest.</p>
           </div>

           <div className="flex items-center gap-4 mt-2">
             <div className="relative flex items-center">
               <Checkbox 
                  id="create-account" 
                  checked={createAccount}
                  onChange={() => setCreateAccount(!createAccount)}
               />
             </div>
             <label htmlFor="create-account" className="text-[19px] leading-[29px] font-light text-[#111111] cursor-pointer select-none">
                Create an account with KWV
             </label>
           </div>
        </div>
      )}
    </div>
  );
};

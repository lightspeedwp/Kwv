import React, { useState } from 'react';
import { Typography } from '../../common/Typography';
import { Link } from 'react-router-dom';
import { CheckoutInput } from './CheckoutInput';

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
        <div className="space-y-4">
           <p className="text-sm text-gray-500">We'll use this email to send you details and updates about your order.</p>
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

           <div className="flex items-start gap-2 mt-2">
             <input 
                type="checkbox" 
                id="create-account" 
                checked={createAccount}
                onChange={() => setCreateAccount(!createAccount)}
                className="mt-1 rounded border-gray-300 accent-[#2C1810]"
             />
             <label htmlFor="create-account" className="text-sm text-gray-700 cursor-pointer select-none">
                Create an account with KWV
             </label>
           </div>
        </div>
      )}
    </div>
  );
};
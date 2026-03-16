import React, { useState } from 'react';
import { SITE_CONTENT } from '../../../data/site-content';
import { CheckoutInput } from './CheckoutInput';

interface ContactInfoProps {
  isLoggedIn: boolean;
}

/**
 * ContactInfo Component
 * 
 * The first step of checkout: capturing the user's email.
 * Features:
 * - Toggle between "Guest" (Email input) and "Logged In" states.
 * - "Create an account" checkbox for guests.
 * - Email validation.
 * - WCAG 1.3.5 compliance via autocomplete attribute
 * 
 * @param {ContactInfoProps} props - Logged in state.
 */
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
           <p className="text-[length:var(--twb-text-body-large)] leading-[23px] font-light text-[var(--twb-color-ink)] mb-6">We'll use this email to send you details and updates about your order.</p>
           <div>
             <CheckoutInput
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                error={validateEmail(email)}
                touched={touched}
                required
                autocomplete="email"
             />
             <p className="text-xs text-gray-500 mt-1 pl-1">You are currently checking out as a guest.</p>
           </div>

           <div className="flex items-start gap-3">
             <input 
                id="create-account" 
                type="checkbox" 
                className="mt-1.5 size-5 border-gray-300 rounded focus:ring-[var(--twb-color-plum)]"
                checked={createAccount}
                onChange={() => setCreateAccount(!createAccount)}
             />
             <div>
             <label htmlFor="create-account" className="text-[length:var(--twb-text-body-large)] leading-[29px] font-light text-[var(--twb-color-ink)] cursor-pointer select-none">
                {SITE_CONTENT.shop.createAccountLabel}
             </label>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};
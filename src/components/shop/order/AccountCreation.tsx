import React, { useState } from 'react';
import { Typography } from '../../common/Typography';
import { Button } from '../../common/Button';
import { Check } from 'lucide-react';
import { Link } from 'react-router';

interface AccountCreationProps {
  email: string;
}

/**
 * AccountCreation Component
 * 
 * A prominent "Upsell" block shown on the Order Confirmation page for guest users.
 * Encourages them to convert their guest checkout into a full account.
 * 
 * Features:
 * - List of benefits (Faster purchase, Secure payment, Order tracking).
 * - CTA to register page.
 * 
 * @param {AccountCreationProps} props - User's email to display in the context message.
 */
export const AccountCreation: React.FC<AccountCreationProps> = ({ email }) => {
  return (
    <div className="bg-white p-8 md:p-12 mb-16 flex flex-col lg:flex-row gap-12 items-center border-2 border-[var(--twb-border-primary)]">
       <div className="flex-1">
          <Typography variant="h3" className="mb-6 !text-xl font-normal text-[var(--twb-color-text-primary)]">Create an account with WooCommerce Website</Typography>
          <ul className="space-y-4">
             <li className="flex gap-3 items-start">
                <Check size={16} className="mt-1 text-black" strokeWidth={2.5} />
                <span className="text-base text-[var(--twb-color-text-primary)]">Faster future purchases</span>
             </li>
             <li className="flex gap-3 items-start">
                <Check size={16} className="mt-1 text-black" strokeWidth={2.5} />
                <span className="text-base text-[var(--twb-color-text-primary)]">Securely save payment info</span>
             </li>
             <li className="flex gap-3 items-start">
                <Check size={16} className="mt-1 text-black" strokeWidth={2.5} />
                <span className="text-base text-[var(--twb-color-text-primary)]">Track orders & view shopping history</span>
             </li>
          </ul>
       </div>
       <div className="w-full lg:w-auto lg:min-w-[200px]">
          <Link to="/account?action=register">
             <Button fullWidth className="bg-[var(--twb-color-text-primary)] hover:bg-[var(--twb-color-ink)] text-[var(--twb-color-text-on-dark)] h-14 text-base font-normal rounded-none">
                Create account
             </Button>
          </Link>
          <p className="text-xs text-gray-500 text-center leading-relaxed">
             Check your email at {email} for the link to set up an account password. 
             By creating an account you agree to our <Link to="/terms" className="underline">Terms</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>.
          </p>
       </div>
    </div>
  );
};
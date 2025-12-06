import React from 'react';
import { Typography } from '../../common/Typography';
import { Button } from '../../common/Button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AccountCreationProps {
  email: string;
}

export const AccountCreation: React.FC<AccountCreationProps> = ({ email }) => {
  return (
    <div className="bg-white p-8 md:p-12 mb-16 flex flex-col lg:flex-row gap-12 items-center border-2 border-[#D3D3D3]">
       <div className="flex-1">
          <Typography variant="h3" className="mb-6 !text-xl font-normal text-[#333333]">Create an account with WooCommerce Website</Typography>
          <ul className="space-y-4">
             <li className="flex items-start gap-3">
                <Check size={16} className="mt-1 text-black" strokeWidth={2.5} />
                <span className="text-base text-[#333333]">Faster future purchases</span>
             </li>
             <li className="flex items-start gap-3">
                <Check size={16} className="mt-1 text-black" strokeWidth={2.5} />
                <span className="text-base text-[#333333]">Securely save payment info</span>
             </li>
             <li className="flex items-start gap-3">
                <Check size={16} className="mt-1 text-black" strokeWidth={2.5} />
                <span className="text-base text-[#333333]">Track orders & view shopping history</span>
             </li>
          </ul>
       </div>
       <div className="flex-1 w-full lg:w-auto">
          <div className="bg-transparent flex flex-col gap-4">
             <Link to="/account?action=register">
                <Button fullWidth className="bg-[#111111] hover:bg-black text-white h-14 text-base font-normal rounded-none">
                   Create account
                </Button>
             </Link>
             <p className="text-xs text-gray-500 text-center leading-relaxed">
                Check your email at {email} for the link to set up an account password. 
                By creating an account you agree to our <Link to="/terms" className="underline">Terms</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>.
             </p>
          </div>
       </div>
    </div>
  );
};
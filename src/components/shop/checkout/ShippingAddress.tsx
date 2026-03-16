import React, { useState } from 'react';
import { CheckoutInput } from './CheckoutInput';
import { ChevronDown } from 'lucide-react';
import { Typography } from '../../common/Typography';

/**
 * ShippingAddress Component
 * 
 * A specific form section for managing the shipping address state.
 * Displays the address form fields within a styled container.
 * Features:
 * - Local state management for form fields.
 * - Validation logic (demonstration).
 * - "Fade-in" animation on mount.
 */
export const ShippingAddress: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: ''
  });
  
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const getError = (field: string, value: string) => {
    if (!value) return `Please enter a valid ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
    return undefined;
  };

  return (
    <div className="mt-6 p-6 border border-gray-200 bg-gray-50 rounded-sm animate-in fade-in slide-in-from-top-2">
      <Typography variant="h4" className="text-base font-normal mb-4">Shipping Address</Typography>
      <div className="space-y-4">
        
        <div className="relative w-full h-14 bg-white border border-gray-300 rounded-sm">
           <label className="absolute left-3 top-2 text-xs text-gray-500 pointer-events-none z-10">Country/Region</label>
           <select 
             className="w-full h-full px-3 pt-5 pb-2 bg-transparent text-[var(--twb-color-text-primary)] appearance-none focus:outline-none focus:border-[var(--twb-color-ink)]"
             defaultValue="za"
           >
              <option value="za">South Africa</option>
              <option value="na">Namibia</option>
              <option value="uk">United Kingdom</option>
           </select>
           <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
        </div>

        <div className="grid grid-cols-2 gap-4">
           <CheckoutInput 
              label="First name"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              onBlur={() => handleBlur('firstName')}
              error={getError('firstName', formData.firstName)}
              touched={touched.firstName}
           />
           <CheckoutInput 
              label="Last name"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              onBlur={() => handleBlur('lastName')}
              error={getError('lastName', formData.lastName)}
              touched={touched.lastName}
           />
        </div>

        <CheckoutInput 
            label="Address"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
            onBlur={() => handleBlur('address')}
            error={getError('address', formData.address)}
            touched={touched.address}
        />

        <div className="grid grid-cols-2 gap-4">
           <CheckoutInput 
              label="City"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              onBlur={() => handleBlur('city')}
              error={getError('city', formData.city)}
              touched={touched.city}
           />
           <div className="relative w-full h-14 bg-white border border-gray-300 rounded-sm">
              <label className="absolute left-3 top-2 text-xs text-gray-500 pointer-events-none z-10">Province</label>
              <select 
                className="w-full h-full px-3 pt-5 pb-2 bg-transparent text-[var(--twb-color-text-primary)] appearance-none focus:outline-none focus:border-[var(--twb-color-ink)]"
                defaultValue="wc"
              >
                 <option value="wc">Western Cape</option>
                 <option value="gp">Gauteng</option>
                 <option value="kzn">KwaZulu-Natal</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <CheckoutInput 
              label="Postal code"
              value={formData.postalCode}
              onChange={(e) => handleChange('postalCode', e.target.value)}
              onBlur={() => handleBlur('postalCode')}
              error={getError('postalCode', formData.postalCode)}
              touched={touched.postalCode}
           />
        </div>
      </div>
    </div>
  );
};
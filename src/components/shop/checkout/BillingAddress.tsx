import React, { useState } from 'react';
import { CheckoutInput } from './CheckoutInput';
import { ChevronDown } from 'lucide-react';

export const BillingAddress: React.FC = () => {
  // State for form fields to handle "touched" and validation for demo
  const [formData, setFormData] = useState({
    firstName: 'Ash',
    lastName: 'Shaw',
    company: 'LightSpeed',
    address: '46 Devon Street',
    city: 'Woodstock, Cape Town',
    postalCode: '7925',
    phone: '+27845656767'
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const getError = (field: string, value: string) => {
    if (field === 'company' || field === 'phone') return undefined; // Optional fields
    if (!value) return `Please enter a valid ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
    return undefined;
  };

  return (
    <div className="">
      <p className="text-sm text-gray-500 mb-6">Enter the billing address that matches your payment method.</p>

      <div className="space-y-4">
        {/* Country Select - Custom styled to match inputs */}
        <div className="relative w-full h-14 bg-white border border-gray-300 rounded-sm">
           <label className="absolute left-3 top-2 text-xs text-gray-500 pointer-events-none z-10">Country/Region</label>
           <select 
             className="w-full h-full px-3 pt-5 pb-2 bg-transparent text-[#333333] appearance-none focus:outline-none focus:border-[#2C1810]"
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
            label="Company (optional)"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            onBlur={() => handleBlur('company')}
        />

        <div>
           <CheckoutInput 
              label="Address"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              onBlur={() => handleBlur('address')}
              error={getError('address', formData.address)}
              touched={touched.address}
           />
           <button className="text-sm text-gray-500 hover:text-[#2C1810] mt-2 flex items-center gap-1 font-medium">
             + Add apartment, suite, etc.
           </button>
        </div>

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
                className="w-full h-full px-3 pt-5 pb-2 bg-transparent text-[#333333] appearance-none focus:outline-none focus:border-[#2C1810]"
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
           <CheckoutInput 
              label="Phone (optional)"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
           />
        </div>

      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CheckoutInput } from './CheckoutInput';

interface AddressData {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  street: string;
  apartment: string;
  city: string;
  province: string;
  postcode: string;
  phone: string;
}

const INITIAL_DATA: AddressData = {
  firstName: 'Ash',
  lastName: 'Shaw',
  company: 'LightSpeed',
  country: 'South Africa',
  street: '46 Devon Street',
  apartment: '',
  city: 'Woodstock, Cape Town',
  province: 'Western Cape',
  postcode: '7925',
  phone: '+27845656767'
};

/**
 * BillingAddressForm Component
 * 
 * The form component for capturing billing address information.
 * Can function standalone or as part of the checkout flow.
 * Includes validation logic and state management for fields.
 */
export const BillingAddressForm: React.FC = () => {
  const [data, setData] = useState<AddressData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<AddressData>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof AddressData, boolean>>>({});

  const handleChange = (field: keyof AddressData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field: keyof AddressData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, data[field]);
  };

  const validateField = (field: keyof AddressData, value: string) => {
    if (!value && field !== 'company' && field !== 'apartment') {
      setErrors(prev => ({ ...prev, [field]: 'This field is required' }));
      return false;
    }
    return true;
  };

  return (
    <div>
      <p className="text-[19px] leading-[23px] font-light text-[#111111] mb-6">Enter the billing address that matches your payment method.</p>

      <div className="mb-4">
          {/* Country Select */}
          <div className="relative group">
            <select 
                className="w-full h-[58px] px-3 pt-6 pb-2 bg-white border border-gray-300 rounded-sm text-[#333333] appearance-none focus:outline-none focus:border-[#2C1810] text-base"
                value={data.country}
                onChange={(e) => handleChange('country', e.target.value)}
            >
                <option value="South Africa">South Africa</option>
                <option value="Namibia">Namibia</option>
                <option value="Botswana">Botswana</option>
            </select>
            <label className="absolute left-3 top-2 text-[11px] font-medium text-gray-500 pointer-events-none">Country / Region</label>
            <ChevronDown className="absolute right-3 top-5 text-gray-500 pointer-events-none" size={16} />
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <CheckoutInput 
          label="First name" 
          value={data.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          onBlur={() => handleBlur('firstName')}
          error={errors.firstName}
          touched={touched.firstName}
        />
        <CheckoutInput 
          label="Last name" 
          value={data.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
          onBlur={() => handleBlur('lastName')}
          error={errors.lastName}
          touched={touched.lastName}
        />
      </div>

      <div className="mb-4">
        <CheckoutInput 
          label="Company (optional)" 
          value={data.company}
          onChange={(e) => handleChange('company', e.target.value)}
          onBlur={() => handleBlur('company')}
        />
      </div>

      <div className="mb-4">
        <CheckoutInput 
          label="Address" 
          value={data.street}
          onChange={(e) => handleChange('street', e.target.value)}
          onBlur={() => handleBlur('street')}
          error={errors.street}
          touched={touched.street}
        />
      </div>

      <div className="mb-4">
         <div className="text-[#333333] text-lg font-light cursor-pointer hover:underline flex items-center gap-1">
            + Add apartment, suite, etc.
         </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <CheckoutInput 
          label="City" 
          value={data.city}
          onChange={(e) => handleChange('city', e.target.value)}
          onBlur={() => handleBlur('city')}
          error={errors.city}
          touched={touched.city}
        />
        <div className="relative group">
            <select 
                className="w-full h-[58px] px-3 pt-6 pb-2 bg-white border border-gray-300 rounded-sm text-[#333333] appearance-none focus:outline-none focus:border-[#2C1810] text-base"
                value={data.province}
                onChange={(e) => handleChange('province', e.target.value)}
            >
                <option value="Western Cape">Western Cape</option>
                <option value="Gauteng">Gauteng</option>
                <option value="KwaZulu-Natal">KwaZulu-Natal</option>
            </select>
            <label className="absolute left-3 top-2 text-[11px] font-medium text-gray-500 pointer-events-none">Province</label>
            <ChevronDown className="absolute right-3 top-5 text-gray-500 pointer-events-none" size={16} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <CheckoutInput 
          label="Postal code" 
          value={data.postcode}
          onChange={(e) => handleChange('postcode', e.target.value)}
          onBlur={() => handleBlur('postcode')}
          error={errors.postcode}
          touched={touched.postcode}
        />
        <CheckoutInput 
          label="Phone (optional)" 
          value={data.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          error={errors.phone}
          touched={touched.phone}
        />
      </div>
    </div>
  );
};

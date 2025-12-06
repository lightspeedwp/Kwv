import React, { useState } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';
import { Button } from '../../common/Button';
import { CheckoutInput } from './CheckoutInput';
import { Checkbox } from '../../common/Checkbox';

interface ShippingAddressFormProps {
  useSameBilling?: boolean;
  onToggleSameBilling?: (value: boolean) => void;
}

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

export const ShippingAddressForm: React.FC<ShippingAddressFormProps> = ({ 
  useSameBilling = true, 
  onToggleSameBilling 
}) => {
  const [data, setData] = useState<AddressData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<AddressData>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof AddressData, boolean>>>({});
  const [showApartment, setShowApartment] = useState(false);

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
      <p className="text-[19px] leading-[23px] font-light text-[#111111] mb-6">Enter the address where you want your order delivered.</p>

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
         {!showApartment ? (
           <div 
             className="text-[#333333] text-lg font-light cursor-pointer hover:underline flex items-center gap-1"
             onClick={() => setShowApartment(true)}
           >
              + Add apartment, suite, etc.
           </div>
         ) : (
           <CheckoutInput 
             label="Apartment, suite, etc. (optional)" 
             value={data.apartment}
             onChange={(e) => handleChange('apartment', e.target.value)}
             onBlur={() => handleBlur('apartment')}
           />
         )}
      </div>
      
      {/* 
        In the design, Apartment is hidden behind a link? 
        The screenshot shows "Address" then "+ Add apartment, suite, etc." 
        But Step 4 screenshot shows inputs for City/Province/Postal Code. 
        I'll render the rest of the form as standard.
      */}

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

      {onToggleSameBilling && (
        <div className="mt-6">
           <div className="flex items-center gap-4">
             <div className="relative flex items-center">
               <Checkbox 
                  id="same-billing" 
                  checked={useSameBilling}
                  onChange={(e) => onToggleSameBilling(e.target.checked)}
               />
             </div>
             <label htmlFor="same-billing" className="text-[19px] leading-[29px] font-light text-[#111111] cursor-pointer select-none">
                Use same address for billing
             </label>
           </div>
        </div>
      )}
    </div>
  );
};

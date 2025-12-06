import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '../../common/Button';
import { FloatingLabelInput } from '../../common/FloatingLabelInput';

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
  city: 'Cape Town',
  province: 'Western Cape',
  postcode: '7925',
  phone: '+27845656767'
};

export const ShippingAddressForm: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
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

  const handleSave = () => {
    const newErrors: Partial<AddressData> = {};
    let isValid = true;

    // Validate all required fields
    (Object.keys(data) as Array<keyof AddressData>).forEach(field => {
      if (!validateField(field, data[field])) {
        isValid = false;
      }
    });

    if (isValid) {
      setIsEditing(false);
    } else {
      // Mark all as touched to show errors
      const allTouched = (Object.keys(data) as Array<keyof AddressData>).reduce((acc, curr) => ({
        ...acc,
        [curr]: true
      }), {});
      setTouched(allTouched);
    }
  };

  if (isEditing) {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <p className="text-[#333333] text-lg font-light">Edit shipping address</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FloatingLabelInput 
            label="First name" 
            value={data.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            onBlur={() => handleBlur('firstName')}
            error={errors.firstName}
            touched={touched.firstName}
          />
          <FloatingLabelInput 
            label="Last name" 
            value={data.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            onBlur={() => handleBlur('lastName')}
            error={errors.lastName}
            touched={touched.lastName}
          />
        </div>

        <div className="mb-4">
          <FloatingLabelInput 
            label="Company name (optional)" 
            value={data.company}
            onChange={(e) => handleChange('company', e.target.value)}
            onBlur={() => handleBlur('company')}
          />
        </div>

        <div className="mb-4">
           {/* Country Select - Styled to match inputs */}
           <div className="relative group">
              <select 
                 className="w-full h-12 px-3 pt-4 pb-1 bg-white border border-gray-300 rounded-none text-[#333333] appearance-none focus:outline-none focus:ring-1 focus:ring-[#2C1810] focus:border-[#2C1810] text-base"
                 value={data.country}
                 onChange={(e) => handleChange('country', e.target.value)}
              >
                 <option value="South Africa">South Africa</option>
                 <option value="Namibia">Namibia</option>
                 <option value="Botswana">Botswana</option>
              </select>
              <label className="absolute left-3 top-2 text-[10px] text-gray-500 pointer-events-none">Country / Region</label>
              <ChevronDown className="absolute right-3 top-4 text-gray-500 pointer-events-none" size={16} />
           </div>
        </div>

        <div className="mb-4">
          <FloatingLabelInput 
            label="Street address" 
            value={data.street}
            onChange={(e) => handleChange('street', e.target.value)}
            onBlur={() => handleBlur('street')}
            error={errors.street}
            touched={touched.street}
          />
        </div>

        <div className="mb-4">
          <FloatingLabelInput 
            label="Apartment, suite, unit, etc. (optional)" 
            value={data.apartment}
            onChange={(e) => handleChange('apartment', e.target.value)}
            onBlur={() => handleBlur('apartment')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <FloatingLabelInput 
            label="Town / City" 
            value={data.city}
            onChange={(e) => handleChange('city', e.target.value)}
            onBlur={() => handleBlur('city')}
            error={errors.city}
            touched={touched.city}
          />
          <FloatingLabelInput 
            label="Province" 
            value={data.province}
            onChange={(e) => handleChange('province', e.target.value)}
            onBlur={() => handleBlur('province')}
            error={errors.province}
            touched={touched.province}
          />
          <FloatingLabelInput 
            label="Postcode / ZIP" 
            value={data.postcode}
            onChange={(e) => handleChange('postcode', e.target.value)}
            onBlur={() => handleBlur('postcode')}
            error={errors.postcode}
            touched={touched.postcode}
          />
        </div>

        <div className="mb-8">
          <FloatingLabelInput 
            label="Phone" 
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            error={errors.phone}
            touched={touched.phone}
          />
        </div>

        <Button 
            onClick={handleSave}
            className="w-full bg-[#111111] text-white hover:bg-black h-14 rounded-sm text-base font-medium mb-4"
        >
            Save address
        </Button>
        
        <button 
            onClick={() => setIsEditing(false)}
            className="w-full text-center text-[#333333] underline hover:text-black"
        >
            Cancel
        </button>

      </div>
    );
  }

  return (
    <div>
        <p className="text-[#333333] mb-6 text-lg font-light">Enter the address where you want your order delivered.</p>

        {/* Saved Address Card */}
        <div className="border border-gray-200 p-8 rounded-sm mb-8 relative bg-gray-50/30">
            <button 
                onClick={() => setIsEditing(true)}
                className="absolute top-8 right-8 text-sm text-gray-500 hover:text-black underline decoration-1 underline-offset-2"
            >
                Edit
            </button>
            
            <h4 className="text-xl font-bold text-[#333333] mb-2">{data.firstName} {data.lastName}</h4>
            <p className="text-lg text-[#333333] leading-relaxed font-light mb-2">
                {data.company && <>{data.company},<br/></>}
                {data.street}, {data.apartment && `${data.apartment}, `}{data.city}, {data.province}, {data.postcode}, {data.country}
            </p>
            <p className="text-lg text-[#333333] font-light">
                {data.phone}
            </p>
        </div>

        {/* Use same address checkbox */}
        <label className="flex items-center gap-3 cursor-pointer group select-none">
            <div className="relative">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="w-5 h-5 border border-gray-400 rounded-sm bg-white peer-checked:bg-black peer-checked:border-black transition-colors"></div>
                <Check size={14} className="text-white absolute top-0.5 left-0.5 opacity-0 peer-checked:opacity-100" />
            </div>
            <span className="text-lg text-[#333333] font-light">Use same address for billing</span>
        </label>
    </div>
  );
};

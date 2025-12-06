import React from 'react';
import { AlertCircle } from 'lucide-react';

interface CheckoutInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  touched?: boolean;
}

export const CheckoutInput: React.FC<CheckoutInputProps> = ({ 
  label, 
  error, 
  touched,
  className = '',
  id,
  ...props 
}) => {
  const hasError = touched && error;
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full">
      <div className="relative">
        <input
          id={inputId}
          className={`
            peer w-full h-[58px] px-3 pt-6 pb-2 
            bg-white border rounded-sm text-[#333333] placeholder-transparent 
            focus:outline-none focus:ring-0 text-base
            ${hasError ? 'border-red-500' : 'border-gray-300 focus:border-[#2C1810]'}
            ${className}
          `}
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={`
            absolute left-3 transition-all duration-200 pointer-events-none truncate max-w-[calc(100%-24px)]
            ${hasError ? 'text-red-500' : 'text-gray-500 peer-focus:text-[#2C1810]'}
            peer-placeholder-shown:top-[17px] peer-placeholder-shown:text-[17px] peer-placeholder-shown:font-light
            peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-medium
            ${props.value ? 'top-2 text-[11px] font-medium' : ''}
          `}
        >
          {label}
        </label>
      </div>
      
      {hasError && (
        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
          <AlertCircle size={12} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

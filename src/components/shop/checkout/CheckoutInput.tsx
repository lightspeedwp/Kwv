import React, { useState } from 'react';
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

  return (
    <div className="w-full">
      <div className="relative">
        <input
          id={id || label.toLowerCase().replace(/\s+/g, '-')}
          className={`
            peer w-full h-14 px-3 pt-5 pb-2 
            bg-white border rounded-sm text-[#333333] placeholder-transparent 
            focus:outline-none focus:ring-0
            ${hasError ? 'border-red-500' : 'border-gray-300 focus:border-[#2C1810]'}
            ${className}
          `}
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={id || label.toLowerCase().replace(/\s+/g, '-')}
          className={`
            absolute left-3 top-2 text-xs transition-all pointer-events-none
            ${hasError ? 'text-red-500' : 'text-gray-500 peer-focus:text-[#2C1810]'}
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

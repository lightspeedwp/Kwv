import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  touched?: boolean;
}

export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ 
  label, 
  error, 
  touched,
  className = '',
  id,
  value,
  ...props 
}) => {
  const hasError = touched && error;
  // We need to ensure the input has a placeholder for the :placeholder-shown pseudo-class to work,
  // but we want it transparent so the custom label shows instead.
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full relative group">
      <div className="relative">
        <input
          id={inputId}
          value={value}
          className={`
            peer w-full h-12 px-3 pt-4 pb-1
            bg-white border rounded-none text-[#333333] placeholder-transparent 
            focus:outline-none focus:ring-2 focus:ring-[#2C1810] focus:border-[#2C1810]
            ${hasError ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={`
            absolute left-3 transition-all duration-200 pointer-events-none
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
            peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-[10px] peer-focus:text-[#2C1810]
            ${value ? 'top-2 -translate-y-0 text-[10px]' : ''}
            ${hasError ? 'text-red-500' : 'text-gray-500'}
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

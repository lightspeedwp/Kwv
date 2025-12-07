import React, { useState } from 'react';

/**
 * FloatingLabelInput Props
 */
interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

/**
 * FloatingLabelInput Component
 * 
 * An input field where the placeholder/label floats up when the user focuses
 * or inputs text. Commonly used in material design and modern forms.
 * 
 * @param {FloatingLabelInputProps} props - Component props
 */
export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ label, error, className = '', value, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.toString().length > 0;

  return (
    <div className={`relative ${className}`}>
      <input
        {...props}
        value={value}
        onFocus={(e) => {
           setIsFocused(true);
           props.onFocus?.(e);
        }}
        onBlur={(e) => {
           setIsFocused(false);
           props.onBlur?.(e);
        }}
        className={`
          block w-full h-14 px-4 pt-5 pb-2 
          text-base text-gray-900 bg-white border 
          ${error ? 'border-red-500' : 'border-gray-300'} 
          appearance-none 
          focus:outline-none focus:ring-0 focus:border-black 
          peer
          rounded-none
        `}
        placeholder=" "
      />
      <label
        className={`
          absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75 
          peer-focus:-translate-y-3
          pointer-events-none
          ${(isFocused || hasValue) ? 'scale-75 -translate-y-3' : ''}
        `}
      >
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

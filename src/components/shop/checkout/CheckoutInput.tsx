import React from 'react';
import { AlertCircle } from 'lucide-react';

interface CheckoutInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  touched?: boolean;
}

/**
 * CheckoutInput Component
 * 
 * A reusable floating label input designed specifically for the Checkout flow.
 * Features:
 * - Floating label animation (Material Design style).
 * - Validation error display.
 * - Custom styling to match the shop's aesthetic (square borders, specific focus states).
 * 
 * @param {CheckoutInputProps} props - Input attributes plus label and error state.
 */
export const CheckoutInput: React.FC<CheckoutInputProps> = ({ 
  label, 
  error, 
  touched,
  className = '',
  id,
  required,
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
            bg-white border rounded-sm text-[var(--twb-color-text-primary)] placeholder-transparent 
            focus:outline-none focus:ring-0 text-base
            ${hasError ? 'border-red-500' : 'border-gray-300 focus:border-[var(--twb-color-ink)]'}
            ${className}
          `}
          placeholder={label}
          required={required}
          aria-required={required}
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={hasError ? `${inputId}-error` : undefined}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={`
            absolute left-3 transition-all duration-200 pointer-events-none truncate max-w-[calc(100%-24px)]
            ${hasError ? 'text-red-500' : 'text-gray-500 peer-focus:text-[var(--twb-color-ink)]'}
            peer-placeholder-shown:top-[17px] peer-placeholder-shown:text-[length:var(--twb-text-body)] peer-placeholder-shown:font-light
            peer-focus:top-2 peer-focus:text-[length:var(--twb-text-caption)] peer-focus:font-medium
            ${props.value ? 'top-2 text-[length:var(--twb-text-caption)] font-medium' : ''}
          `}
        >
          {label}{required && <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>}
        </label>
      </div>
      
      {hasError && (
        <div id={`${inputId}-error`} className="flex items-center gap-1 mt-1 text-red-500 text-xs" role="alert">
          <AlertCircle size={12} aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
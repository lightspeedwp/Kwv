import React from 'react';

/**
 * RadioButton Props
 */
interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

/**
 * RadioButton Component
 * 
 * Custom styled radio button.
 * 
 * @param {RadioButtonProps} props - Component props
 */
export const RadioButton: React.FC<RadioButtonProps> = ({ label, className = '', ...props }) => {
  return (
    <label className={`flex items-start cursor-pointer group ${className}`}>
      <div className="relative flex items-center">
        <div className="relative">
          <input type="radio" className="peer sr-only" {...props} />
          <div className="w-4 h-4 border border-gray-300 rounded-full bg-white peer-checked:border-[var(--twb-color-accent-primary)] peer-checked:border-4 peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--twb-color-focus-ring)] peer-focus-visible:ring-offset-2 transition-all"></div>
        </div>
      </div>
      <span className="ml-3 text-sm text-gray-700 group-hover:text-black transition-colors select-none w-full">{label}</span>
    </label>
  );
};
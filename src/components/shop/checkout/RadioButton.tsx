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
      <div className="relative flex items-center mt-1">
        <input type="radio" className="peer sr-only" {...props} />
        <div className="w-4 h-4 border border-gray-300 rounded-full bg-white peer-checked:border-[#8B0000] peer-checked:border-4 transition-all"></div>
      </div>
      <span className="ml-3 text-sm text-gray-700 group-hover:text-black transition-colors select-none w-full">{label}</span>
    </label>
  );
};

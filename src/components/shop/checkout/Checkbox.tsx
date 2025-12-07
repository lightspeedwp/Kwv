import React from 'react';
import { Check as CheckIcon } from 'lucide-react';

/**
 * Checkbox Props
 */
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

/**
 * Checkbox Component
 * 
 * Custom styled checkbox with an optional label.
 * Uses a hidden native input for accessibility and form handling,
 * while displaying a custom styled square.
 * 
 * @param {CheckboxProps} props - Component props
 */
export const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => {
  return (
    <label className={`inline-flex items-center cursor-pointer group ${className}`}>
      <div className="relative">
        <input type="checkbox" className="peer sr-only" {...props} />
        <div className="w-5 h-5 border border-gray-300 bg-white peer-checked:bg-[#111111] peer-checked:border-[#111111] transition-colors">
           <CheckIcon size={14} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" />
        </div>
      </div>
      {label && <span className="ml-3 text-sm text-gray-600 group-hover:text-black transition-colors select-none">{label}</span>}
    </label>
  );
};

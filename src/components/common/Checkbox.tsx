import React from 'react';
import { cn } from '../ui/utils';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
}

export const Checkbox: React.FC<CheckboxProps> = ({ className, ...props }) => {
  return (
    <div className="relative flex items-center shrink-0">
      <input 
        type="checkbox" 
        className="peer sr-only"
        {...props}
      />
      <div className={cn(
        "w-6 h-6 border border-gray-400 rounded-[4px] bg-white peer-checked:border-[#111111] peer-focus-visible:ring-2 peer-focus-visible:ring-[#2C1810] peer-focus-visible:ring-offset-2 transition-all flex items-center justify-center cursor-pointer",
        className
      )}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 peer-checked:opacity-100">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <label htmlFor={props.id} className="absolute inset-0 cursor-pointer flex items-center justify-center peer-checked:[&>svg]:opacity-100">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 transition-opacity">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </label>
    </div>
  );
};

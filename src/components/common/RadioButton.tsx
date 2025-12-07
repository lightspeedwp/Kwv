import React from 'react';
import { cn } from '../ui/utils';

interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
}

export const RadioButton: React.FC<RadioButtonProps> = ({ className, ...props }) => {
  return (
    <div className="relative flex items-center shrink-0">
      <input 
        type="radio" 
        className="peer sr-only"
        {...props}
      />
      <div className={cn(
        "w-5 h-5 rounded-full border flex items-center justify-center transition-all peer-checked:border-[#111111] border-gray-300 bg-white peer-checked:[&>div]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-[#2C1810] peer-focus-visible:ring-offset-2",
        className
      )}>
         <div className="w-2.5 h-2.5 rounded-full bg-[#111111] opacity-0 transition-opacity"></div>
      </div>
      <label htmlFor={props.id} className="absolute inset-0 cursor-pointer"></label>
    </div>
  );
};

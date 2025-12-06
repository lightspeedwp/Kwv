import React from 'react';
import { COLORS, FONTS } from '../../constants/theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  style,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center transition-colors duration-200 font-medium rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: {
      backgroundColor: COLORS.wineRed,
      color: COLORS.white,
      border: `1px solid ${COLORS.wineRed}`,
    },
    secondary: {
      backgroundColor: COLORS.gold,
      color: COLORS.darkBrown,
      border: `1px solid ${COLORS.gold}`,
    },
    outline: {
      backgroundColor: 'transparent',
      color: COLORS.wineRed,
      border: `1px solid ${COLORS.wineRed}`,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: COLORS.darkBrown,
      border: '1px solid transparent',
    },
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${widthClass} ${className}`}
      style={{
        fontFamily: FONTS.body,
        ...variants[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

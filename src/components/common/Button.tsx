import React from 'react';
import { COLORS, FONTS } from '../../constants/theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'hero' | 'heroGold';
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
  const baseStyles = 'inline-flex items-center justify-center transition-colors duration-200 font-medium rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C1810]';
  
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
    hero: {
      backgroundColor: COLORS.wineRed,
      color: COLORS.white,
      border: `1px solid ${COLORS.wineRed}`,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: '700',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
    },
    heroGold: {
      backgroundColor: COLORS.gold,
      color: COLORS.white,
      border: `1px solid ${COLORS.gold}`,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontWeight: '700',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // shadow-lg
    }
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizes[size]} ${widthClass} ${className} whitespace-nowrap`}
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

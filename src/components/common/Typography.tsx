import React from 'react';
import { COLORS, FONTS, TYPOGRAPHY } from '../../constants/theme';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'bodyLarge' | 'body' | 'caption';
  as?: React.ElementType;
  color?: string;
  className?: string;
  font?: 'heading' | 'body';
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  color,
  className = '',
  font,
  children,
  ...props
}) => {
  const Component = as || (variant.startsWith('h') ? variant : 'p');
  
  const fontFamily = font 
    ? (font === 'heading' ? FONTS.heading : FONTS.body)
    : (variant.startsWith('h') ? FONTS.heading : FONTS.body);

  const styles = {
    fontFamily,
    color: color || (variant === 'caption' || variant === 'body' ? COLORS.darkGrey : COLORS.darkBrown),
  };

  return (
    <Component
      className={`${TYPOGRAPHY[variant]} ${className}`}
      style={styles}
      {...props}
    >
      {children}
    </Component>
  );
};

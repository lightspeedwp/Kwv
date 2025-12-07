import React from 'react';
import { COLORS, FONTS, TYPOGRAPHY } from '../../constants/theme';

/**
 * Props for the Typography component.
 */
interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** The typographic style variant to use. */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'bodyLarge' | 'body' | 'caption';
  /** The HTML tag to render (e.g., 'h1', 'p', 'span'). Defaults to the variant name for headings, or 'p'. */
  as?: React.ElementType;
  /** Custom color override (hex code or CSS var). */
  color?: string;
  /** Additional CSS classes. */
  className?: string;
  /** Explicit font family choice ('heading' or 'body'). Auto-selected based on variant if not provided. */
  font?: 'heading' | 'body';
  /** If true, forces the text to remain on a single line (whitespace-nowrap). Use with caution on small screens. */
  stretchy?: boolean;
}

/**
 * Typography Component
 * 
 * A central component for rendering text with consistent styling based on the design system.
 * 
 * Features:
 * - Maps `variant` props to predefined Tailwind class sets from `constants/theme`.
 * - Automatically handles font family selection (Serif for headings, Sans for body).
 * - Allows overriding the HTML element tag via `as` prop.
 * - Supports `stretchy` prop for single-line text (Hero titles).
 * 
 * @param {TypographyProps} props - The props for the component.
 * @returns {JSX.Element} The rendered text element.
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  color,
  className = '',
  font,
  stretchy = false,
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

  const stretchyClass = stretchy ? 'whitespace-normal md:whitespace-nowrap w-full text-center' : '';

  return (
    <Component
      className={`${TYPOGRAPHY[variant]} ${stretchyClass} ${className}`}
      style={{ ...styles, color: color || undefined }}
      {...props}
    >
      {children}
    </Component>
  );
};

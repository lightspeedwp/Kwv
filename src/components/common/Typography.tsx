/**
 * Typography Component
 * 
 * Central text rendering component with consistent styling based on the Handcrafted Wines design system.
 * Provides fluid typography that scales responsively across all breakpoints.
 * 
 * Features:
 * - 7 semantic variants (h1, h2, h3, h4, bodyLarge, body, caption)
 * - Automatic font family selection (serif for headings, sans-serif for body)
 * - Fluid typography using clamp() for responsive scaling
 * - Polymorphic component (renders any HTML element via 'as' prop)
 * - Design token integration (fonts, sizes, colors, line heights)
 * - Dark mode support via CSS variables
 * - WordPress theme.json aligned
 * - WCAG AA compliant (contrast, readability)
 * - Screen reader friendly semantic markup
 * 
 * Usage:
 * ```tsx
 * <Typography variant="h1">Main Heading</Typography>
 * <Typography variant="body">Paragraph text</Typography>
 * <Typography variant="caption" as="span">Small label</Typography>
 * <Typography variant="h2" className="custom-class">Custom heading</Typography>
 * ```
 * 
 * Variants:
 * - `h1` - Main page headings (Playfair Display serif, 2.4rem-4rem fluid)
 * - `h2` - Section headings (Playfair Display serif, 2rem-3rem fluid)
 * - `h3` - Subsection headings (Playfair Display serif, 1.6rem-2.2rem fluid)
 * - `h4` - Card/component headings (Playfair Display serif, 1.3rem-1.8rem fluid)
 * - `bodyLarge` - Lead paragraphs (Inter sans-serif, 1.125rem-1.25rem fluid)
 * - `body` - Default body text (Inter sans-serif, 1rem-1.125rem fluid)
 * - `caption` - Small text, labels (Inter sans-serif, 0.875rem-1rem fluid)
 * 
 * Default HTML Elements:
 * - h1, h2, h3, h4 → renders as their respective heading tags
 * - bodyLarge, body, caption → renders as <p> tag
 * - Override with 'as' prop for semantic flexibility
 * 
 * Props:
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'bodyLarge' | 'body' | 'caption'} variant - Typography variant (default: 'body')
 * @param {React.ElementType} as - HTML element to render (default: auto-detected from variant)
 * @param {string} color - Text color (use CSS variables or hex, overrides default)
 * @param {string} className - Additional CSS classes
 * @param {boolean} stretchy - Enable single-line stretchy layout for hero titles (default: false)
 * @param {React.ReactNode} children - Text content
 * @param {...HTMLAttributes} props - All standard HTML element attributes
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';
import { TYPOGRAPHY } from '../../constants/theme';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'bodyLarge' | 'body' | 'caption';
  as?: React.ElementType;
  color?: string;
  className?: string;
  font?: string; // Legacy prop, kept for backwards compatibility
  stretchy?: boolean;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  color,
  className = '',
  font, // Legacy prop (unused but kept for backwards compatibility)
  stretchy = false,
  children,
  ...props
}) => {
  // Polymorphic component: auto-detect element type or use 'as' prop
  const Component = as || (variant.startsWith('h') ? variant : 'p');
  
  // Determine default text color based on variant
  // Headings use primary text color, body/caption use slightly muted color
  const defaultColorClass = variant === 'caption' || variant === 'body' 
    ? 'text-[var(--twb-color-text-secondary)]' 
    : 'text-[var(--twb-color-text-primary)]';
  
  // Use custom color if provided (inline style), otherwise use default class
  const colorClass = color ? '' : defaultColorClass;

  // Stretchy layout for single-line hero titles (optional)
  const stretchyClass = stretchy 
    ? 'whitespace-normal md:whitespace-nowrap w-full text-center' 
    : '';

  return (
    <Component
      className={`${TYPOGRAPHY[variant]} ${colorClass} ${stretchyClass} ${className}`.trim()}
      style={color ? { color } : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

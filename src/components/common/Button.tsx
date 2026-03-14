/**
 * Button Component
 * 
 * Primary interactive button component used throughout the Handcrafted Wines site.
 * Supports multiple variants, sizes, and states with full accessibility compliance.
 * 
 * Features:
 * - 6 visual variants (primary, secondary, outline, ghost, hero, heroGold)
 * - 3 size variants (sm, md, lg) with WCAG touch target compliance
 * - Full keyboard accessibility with visible focus rings
 * - Disabled state support with visual indication
 * - Icon support (left/right positioning)
 * - Full width option for mobile layouts
 * - Design token integration (colors, spacing, shadows, radii)
 * - BEM class architecture for maintainability
 * - Dark mode support via CSS variables
 * - WordPress theme.json aligned
 * - WCAG AA compliant (contrast, touch targets ≥ 44px)
 * 
 * Usage:
 * ```tsx
 * <Button variant="primary" size="lg">Add to Cart</Button>
 * <Button variant="secondary" fullWidth>Learn More</Button>
 * <Button variant="hero" disabled>Out of Stock</Button>
 * ```
 * 
 * Variants:
 * - `primary` - Plum background, white text (main CTAs)
 * - `secondary` - Outline style, plum border, transparent background
 * - `outline` - Same as secondary (alias for consistency)
 * - `ghost` - Transparent background, minimal styling
 * - `hero` - Large, uppercase, shadowed primary style for hero sections
 * - `heroGold` - Large, uppercase, shadowed gold style for special CTAs
 * 
 * Sizes:
 * - `sm` - Small (32px height minimum)
 * - `md` - Medium (40px height, default)
 * - `lg` - Large (48px height, recommended for primary CTAs)
 * 
 * States:
 * - Default - Normal interactive state
 * - Hover - Background/border color changes, subtle scale
 * - Focus - Gold focus ring (WCAG compliant)
 * - Active - Slight press effect (translateY)
 * - Disabled - Muted colors, no interaction
 * 
 * Props:
 * @param {'primary' | 'secondary' | 'outline' | 'ghost' | 'hero' | 'heroGold'} variant - Visual style variant (default: 'primary')
 * @param {'sm' | 'md' | 'lg'} size - Button size (default: 'md')
 * @param {boolean} fullWidth - Expand to full container width (default: false)
 * @param {React.ReactNode} children - Button content (text, icons, etc.)
 * @param {string} className - Additional CSS classes
 * @param {...HTMLButtonElement} props - All standard button HTML attributes
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'hero' | 'heroGold';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  // Map variant prop to BEM modifier
  const variantClass = variant === 'heroGold' ? 'twb-btn--hero-gold' : `twb-btn--${variant}`;
  
  // Map size prop to BEM modifier
  const sizeClass = size !== 'md' ? `twb-btn--${size}` : '';
  
  // Full width utility
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`twb-btn ${variantClass} ${sizeClass} ${widthClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Theme Constants
 * 
 * Central source of truth for design tokens (Colors, Fonts, Spacing).
 * These map to the `tailwind.config` and `globals.css` variables.
 * 
 * @module constants/theme
 */

/**
 * Color Palette
 * Primary brand colors for KWV and its sub-brands.
 */
export const COLORS = {
  wineRed: '#8B0000',
  gold: '#DAA520',
  darkBrown: '#2C1810',
  darkGrey: '#333333',
  beige: '#F5F5DC',
  white: '#FFFFFF',
  black: '#000000',
};

/**
 * Font Families
 * Defined in CSS/Tailwind but referenced here for JS usage (e.g., Canvas drawing).
 */
export const FONTS = {
  heading: '"Playfair Display", serif',
  body: '"Open Sans", sans-serif',
};

/**
 * Spacing Scale
 * Fluid spacing values using clamp() for responsive layouts.
 */
export const SPACING = {
  section: 'clamp(3rem, 6vw, 5rem)',
  inner: 'clamp(1rem, 4vw, 3rem)',
  gapSm: 'clamp(0.5rem, 1.5vw, 1.5rem)',
  gapLg: 'clamp(1rem, 3vw, 3rem)',
};

/**
 * Container Widths
 * Standard max-widths for different layout contexts.
 */
export const CONTAINER = {
  site: 'max-w-[1400px] mx-auto px-4 w-full',
  content: 'max-w-[960px] mx-auto px-4 w-full',
  wide: 'max-w-[1200px] mx-auto px-4 w-full',
};

/**
 * Typography Scale
 * Fluid typography values using clamp() for responsive text sizing.
 * Formula: clamp(min, preferred, max)
 */
export const TYPOGRAPHY = {
  h1: 'font-bold text-[length:clamp(2.4rem,6vw,4rem)] leading-[1.2]',
  h2: 'font-semibold text-[length:clamp(2rem,5vw,3rem)] leading-[1.2]',
  h3: 'font-semibold text-[length:clamp(1.6rem,4vw,2.2rem)] leading-[1.2]',
  h4: 'font-medium text-[length:clamp(1.3rem,3vw,1.8rem)] leading-[1.2]',
  bodyLarge: 'text-[length:clamp(1.2rem,2vw,1.6rem)] leading-[1.5]',
  body: 'text-[length:clamp(1rem,1.5vw,1.3rem)] leading-[1.5]',
  caption: 'text-[length:clamp(0.875rem,1.2vw,1rem)] leading-[1.5]',
};

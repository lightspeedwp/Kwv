/**
 * Theme Constants
 * 
 * Central source of truth for design tokens (Colors, Fonts, Spacing).
 * These map to CSS variables in `globals.css` and provide JS access for canvas/dynamic usage.
 * 
 * @module constants/theme
 */

/**
 * The Wire Brand Color Palette
 * Organic, warm, handcrafted aesthetic inspired by wine-making and Paarl valley terroir.
 * All colors match CSS variables in globals.css (--twb-color-*)
 */
export const COLORS = {
  // Primary Palette
  paper: '#f5efe4',       // Warm parchment backgrounds
  ink: '#1e1a17',         // Deep charcoal text
  vine: '#5c6b4f',        // Vineyard green accents
  clay: '#b86b4b',        // Sun-baked terracotta
  plum: '#5a2d3b',        // Wine-inspired primary CTAs
  gold: '#c8a96b',        // Muted premium gold
  
  // Semantic Background Colors
  bgPrimary: '#f5efe4',   // Primary background (body)
  bgSecondary: '#faf7f2', // Subtle backgrounds (alternating sections)
  bgTertiary: '#ffffff',  // Pure white cards/overlays
  
  // Semantic Text Colors
  textPrimary: '#1e1a17', // Body text, headings
  textSecondary: '#5c6b4f', // Metadata, labels
  textMuted: '#6b6461',   // Supporting text
  
  // Interactive Colors
  link: '#5a2d3b',        // Link color
  linkHover: '#7a3d4b',   // Link hover
  linkVisited: '#4a1d2b', // Visited link
  focusRing: '#5c6b4f',   // Keyboard focus indicator
  
  // Utility Colors
  white: '#ffffff',
  black: '#000000',
  error: '#d4183d',
  success: '#5c6b4f',
  
  // Legacy Aliases (DEPRECATED - Remove after component migration)
  /** @deprecated Use COLORS.plum instead */
  burgundy: '#5a2d3b',
  /** @deprecated Use COLORS.vine instead */
  vineyard: '#5c6b4f',
  /** @deprecated Use COLORS.clay instead */
  terracotta: '#b86b4b',
  /** @deprecated Use COLORS.bgPrimary instead */
  cream: '#f5efe4',
  /** @deprecated Use COLORS.ink instead */
  charcoal: '#1e1a17',
  /** @deprecated Use COLORS.plum instead */
  wineRed: '#5a2d3b',
  /** @deprecated Use COLORS.ink instead */
  darkBrown: '#1e1a17',
  /** @deprecated Use COLORS.ink instead */
  darkGrey: '#1e1a17',
  /** @deprecated Use COLORS.bgPrimary instead */
  beige: '#f5efe4',
};

/**
 * Font Families
 * Defined in CSS but referenced here for JS usage (e.g., Canvas rendering).
 */
export const FONTS = {
  heading: '"Playfair Display", serif',  // Editorial serif for headings
  body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',  // Modern humanist sans-serif
  
  // Legacy (DEPRECATED)
  /** @deprecated Use FONTS.body instead */
  bodyLegacy: '"Open Sans", sans-serif',
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
 * Maps to CSS variables in globals.css (--twb-text-*)
 */
export const TYPOGRAPHY = {
  // Heading variants (Playfair Display serif)
  h1: 'font-[family-name:var(--twb-font-serif)] text-[length:var(--twb-text-h1)] font-bold leading-[var(--twb-leading-tight)]',
  h2: 'font-[family-name:var(--twb-font-serif)] text-[length:var(--twb-text-h2)] font-semibold leading-[var(--twb-leading-snug)]',
  h3: 'font-[family-name:var(--twb-font-serif)] text-[length:var(--twb-text-h3)] font-semibold leading-[var(--twb-leading-snug)]',
  h4: 'font-[family-name:var(--twb-font-serif)] text-[length:var(--twb-text-h4)] font-medium leading-[var(--twb-leading-snug)]',
  
  // Body text variants (Inter sans-serif)
  bodyLarge: 'font-[family-name:var(--twb-font-sans)] text-[length:var(--twb-text-body-large)] leading-[var(--twb-leading-relaxed)]',
  body: 'font-[family-name:var(--twb-font-sans)] text-[length:var(--twb-text-body)] leading-[var(--twb-leading-relaxed)]',
  caption: 'font-[family-name:var(--twb-font-sans)] text-[length:var(--twb-text-caption)] leading-[var(--twb-leading-normal)]',
  
  // Legacy (DEPRECATED - use h1-h4 and body variants)
  /** @deprecated Use TYPOGRAPHY.h1/h2/h3/h4 instead */
  legacyH1: 'font-bold text-[length:clamp(2.4rem,6vw,4rem)] leading-[1.2]',
  /** @deprecated Use TYPOGRAPHY.h2 instead */
  legacyH2: 'font-semibold text-[length:clamp(2rem,5vw,3rem)] leading-[1.2]',
  /** @deprecated Use TYPOGRAPHY.h3 instead */
  legacyH3: 'font-semibold text-[length:clamp(1.6rem,4vw,2.2rem)] leading-[1.2]',
  /** @deprecated Use TYPOGRAPHY.h4 instead */
  legacyH4: 'font-medium text-[length:clamp(1.3rem,3vw,1.8rem)] leading-[1.2]',
  /** @deprecated Use TYPOGRAPHY.body instead */
  legacyBody: 'text-[length:clamp(1rem,1.5vw,1.3rem)] leading-[1.5]',
};
/**
 * Logo Component
 * 
 * Primary brand logo for Handcrafted Wines - family-owned boutique wine farm.
 * SVG-based scalable logo with hand-drawn organic elements.
 * 
 * Features:
 * - Multiple size variants (sm, md, lg)
 * - Multiple color variants (primary, white, monochrome)
 * - Decorative grape vine accent
 * - Organic hand-drawn bottom line
 * - Responsive sizing using design tokens
 * - Dark mode support via CSS variables
 * - Accessible with ARIA label
 * - WordPress theme.json aligned
 * - WCAG AA compliant
 * 
 * Usage:
 * ```tsx
 * <Logo size="md" variant="primary" />
 * <Logo size="sm" variant="white" /> // For dark backgrounds
 * <Logo size="lg" variant="monochrome" />
 * ```
 * 
 * Variants:
 * - `primary` - Default brand colors (plum text, gold accents)
 * - `white` - White logo for dark backgrounds
 * - `monochrome` - Single color (plum throughout)
 * 
 * Sizes:
 * - `sm` - Small (header, footer) - 140px width
 * - `md` - Medium (default) - 210px width
 * - `lg` - Large (hero sections) - 280px width
 * 
 * Props:
 * @param {'sm' | 'md' | 'lg'} size - Logo size variant (default: 'md')
 * @param {'primary' | 'white' | 'monochrome'} variant - Color variant (default: 'primary')
 * @param {string} className - Additional CSS classes
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'white' | 'monochrome';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'primary', 
  className = '' 
}) => {
  // Size configurations
  const sizes = {
    sm: { width: '140px', viewBox: '0 0 280 100', textMain: 18, textSub: 24, textTag: 7 },
    md: { width: '210px', viewBox: '0 0 280 100', textMain: 20, textSub: 28, textTag: 8 },
    lg: { width: '280px', viewBox: '0 0 280 100', textMain: 22, textSub: 32, textTag: 9 }
  };

  const sizeConfig = sizes[size];

  // Color configurations using design tokens
  const colors = {
    primary: {
      main: 'var(--twb-color-plum)',
      accent: 'var(--twb-color-gold)'
    },
    white: {
      main: 'white',
      accent: 'white'
    },
    monochrome: {
      main: 'var(--twb-color-plum)',
      accent: 'var(--twb-color-plum)'
    }
  };

  const colorConfig = colors[variant];

  return (
    <svg 
      width={sizeConfig.width}
      viewBox={sizeConfig.viewBox}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Handcrafted Wines Logo - Family Farm, Paarl Mountain"
      role="img"
    >
      {/* Decorative grape vine accent (left side) */}
      <circle cx="15" cy="15" r="4" fill={colorConfig.accent} opacity="0.7" />
      <circle cx="25" cy="12" r="3.5" fill={colorConfig.accent} opacity="0.6" />
      <circle cx="20" cy="22" r="3" fill={colorConfig.accent} opacity="0.5" />
      <path 
        d="M 30 15 Q 35 10, 40 15" 
        stroke={colorConfig.accent}
        strokeWidth="1.5" 
        fill="none"
        opacity="0.6"
      />

      {/* Main Logo Text - HANDCRAFTED */}
      <text 
        x="140" 
        y="34" 
        textAnchor="middle" 
        fill={colorConfig.main}
        fontFamily="var(--twb-font-serif)"
        fontSize={sizeConfig.textMain}
        fontWeight="600" 
        letterSpacing="1"
      >
        HANDCRAFTED
      </text>

      {/* Main Logo Text - WINES */}
      <text 
        x="140" 
        y="60" 
        textAnchor="middle" 
        fill={colorConfig.main}
        fontFamily="var(--twb-font-serif)"
        fontSize={sizeConfig.textSub}
        fontWeight="700" 
        letterSpacing="2"
      >
        WINES
      </text>

      {/* Bottom decorative line with organic feel */}
      <path 
        d="M 20 75 Q 140 73, 260 75" 
        stroke={colorConfig.accent}
        strokeWidth="1.5" 
        fill="none"
      />
      
      {/* Tagline */}
      <text 
        x="140" 
        y="88" 
        textAnchor="middle" 
        fill={colorConfig.accent}
        fontFamily="var(--twb-font-sans)"
        fontSize={sizeConfig.textTag}
        fontWeight="600" 
        letterSpacing="2"
      >
        FAMILY FARM • PAARL MOUNTAIN
      </text>
    </svg>
  );
};

// Backward compatibility aliases (DEPRECATED - will be removed in future version)
/** @deprecated Use Logo component instead */
export const TheWireBrandLogo = Logo;
/** @deprecated Use Logo component instead */
export const HandcraftedWinesLogo = Logo;
/** @deprecated Use Logo component instead */
export const HandcraftedWinesShopLogo = Logo;
/** @deprecated Use Logo component instead */
export const HandcraftedWinesExperiencesLogo = Logo;
/** @deprecated Use Logo component instead */
export const HandcraftedWinesEventsLogo = Logo;
/** @deprecated Use Logo component instead */
export const HandcraftedWinesWineClubLogo = Logo;
/** @deprecated Use Logo component instead */
export const KWVLogo = Logo;
/** @deprecated Use Logo component instead */
export const KWVShopLogo = Logo;
/** @deprecated Use Logo component instead */
export const KWVExperiencesLogo = Logo;
/** @deprecated Use Logo component instead */
export const KWVEventsLogo = Logo;
/** @deprecated Use Logo component instead */
export const KWVWineClubLogo = Logo;

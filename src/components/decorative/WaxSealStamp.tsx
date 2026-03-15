/**
 * WaxSealStamp Component
 * 
 * Hand-drawn wax seal stamp badge for trust signals and heritage markers.
 * Vintage aesthetic with organic, irregular edges like real wax seals.
 * 
 * Features:
 * - Irregular circular seal with melted wax edges
 * - Customizable text (e.g., "Since 1918", "Award Winner")
 * - Ribbon tails (optional)
 * - Brush texture for authentic feel
 * - 2 size variants (sm, lg)
 * - Multiple color themes (plum, gold, clay)
 * - WCAG compliant text contrast
 * - Dark mode support
 * 
 * Usage:
 * ```tsx
 * <WaxSealStamp text="Since 1918" variant="plum" size="lg" />
 * <WaxSealStamp text="Award Winner" variant="gold" showRibbon />
 * <WaxSealStamp text="Family Owned" variant="clay" size="sm" />
 * ```
 * 
 * Props:
 * @param {string} text - Main text to display (1-3 words recommended)
 * @param {'plum' | 'gold' | 'clay' | 'ink' | 'vine'} variant - Color theme (default: 'plum')
 * @param {'sm' | 'lg' | 'md'} size - Stamp size (default: 'lg')
 * @param {boolean} showRibbon - Show decorative ribbon tails (default: false)
 * @param {string} className - Additional CSS classes
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';

export interface WaxSealStampProps {
  text: string;
  variant?: 'plum' | 'gold' | 'clay' | 'ink' | 'vine';
  size?: 'sm' | 'lg' | 'md';
  showRibbon?: boolean;
  className?: string;
}

export const WaxSealStamp: React.FC<WaxSealStampProps> = ({
  text,
  variant = 'plum',
  size = 'lg',
  showRibbon = false,
  className = '',
}) => {
  const id = React.useId();

  // Size configurations
  const dimensions = size === 'lg' ? { width: 140, height: 140 } : size === 'md' ? { width: 120, height: 120 } : { width: 100, height: 100 };
  const fontSize = size === 'lg' ? '14px' : size === 'md' ? '12px' : '11px';
  const fontSizeSecondary = size === 'lg' ? '10px' : size === 'md' ? '9px' : '8px';

  // Color mapping
  const colorMap = {
    plum: {
      bg: 'var(--twb-color-plum)',
      text: 'var(--twb-color-paper)',
      border: 'var(--twb-color-plum)',
    },
    gold: {
      bg: 'var(--twb-color-gold)',
      text: 'var(--twb-color-ink)',
      border: 'var(--twb-color-gold)',
    },
    clay: {
      bg: 'var(--twb-color-clay)',
      text: 'var(--twb-color-paper)',
      border: 'var(--twb-color-clay)',
    },
    ink: {
      bg: 'var(--twb-color-ink)',
      text: 'var(--twb-color-gold)',
      border: 'var(--twb-color-ink)',
    },
    vine: {
      bg: 'var(--twb-color-vine)',
      text: 'var(--twb-color-paper)',
      border: 'var(--twb-color-vine)',
    },
  };

  const colors = colorMap[variant];
  
  // Fallback to plum if variant is invalid
  if (!colors) {
    console.warn(`Invalid WaxSealStamp variant: ${variant}. Falling back to 'plum'.`);
    return <WaxSealStamp variant="plum" text={text} size={size} showRibbon={showRibbon} className={className} />;
  }

  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          {/* Wax texture filter */}
          <filter id={`wax-texture-${id}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" seed="20" />
            <feDisplacementMap in="SourceGraphic" scale="2.5" />
          </filter>

          {/* Gradient for depth */}
          <radialGradient id={`wax-gradient-${id}`}>
            <stop offset="0%" stopColor={colors.bg} stopOpacity="1" />
            <stop offset="100%" stopColor={colors.bg} stopOpacity="0.85" />
          </radialGradient>
        </defs>

        {/* Optional ribbon tails (behind seal) */}
        {showRibbon && (
          <g opacity="0.9">
            {/* Left ribbon tail */}
            <path
              d="M40,70 Q30,68 20,75 L18,85 Q25,80 35,78 Z"
              fill={colors.bg}
              filter={`url(#wax-texture-${id})`}
              opacity="0.7"
            />
            {/* Right ribbon tail */}
            <path
              d="M100,70 Q110,68 120,75 L122,85 Q115,80 105,78 Z"
              fill={colors.bg}
              filter={`url(#wax-texture-${id})`}
              opacity="0.7"
            />
          </g>
        )}

        {/* Main wax seal circle (irregular edges) */}
        <path
          d="M70,10 Q90,12 102,24 Q115,36 118,56 Q120,76 108,92 Q96,108 76,112 Q56,116 38,106 Q20,96 16,76 Q12,56 20,38 Q28,20 48,14 Q58,11 70,10 Z"
          fill={`url(#wax-gradient-${id})`}
          filter={`url(#wax-texture-${id})`}
        />

        {/* Inner ring (embossed effect) */}
        <circle
          cx="70"
          cy="70"
          r="45"
          stroke={colors.border}
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
          filter={`url(#wax-texture-${id})`}
        />

        {/* Decorative dots (seal perimeter) */}
        <circle cx="70" cy="20" r="2" fill={colors.text} opacity="0.4" />
        <circle cx="100" cy="40" r="2" fill={colors.text} opacity="0.4" />
        <circle cx="110" cy="70" r="2" fill={colors.text} opacity="0.4" />
        <circle cx="100" cy="100" r="2" fill={colors.text} opacity="0.4" />
        <circle cx="70" cy="120" r="2" fill={colors.text} opacity="0.4" />
        <circle cx="40" cy="100" r="2" fill={colors.text} opacity="0.4" />
        <circle cx="30" cy="70" r="2" fill={colors.text} opacity="0.4" />
        <circle cx="40" cy="40" r="2" fill={colors.text} opacity="0.4" />
      </svg>

      {/* Text content (centered) */}
      <div 
        className="relative z-10 text-center px-4 flex flex-col items-center justify-center"
        style={{ 
          color: colors.text,
          maxWidth: '80%',
        }}
      >
        <div 
          className="font-serif font-bold uppercase tracking-wider leading-tight"
          style={{ 
            fontSize,
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          {text}
        </div>
        
        {/* Decorative divider line */}
        <div 
          className="w-12 h-px my-1"
          style={{ 
            backgroundColor: colors.text,
            opacity: 0.4,
          }}
        />
        
        {/* Subtitle (optional - for "Handcrafted Wines") */}
        <div 
          className="font-sans uppercase tracking-widest"
          style={{ 
            fontSize: fontSizeSecondary,
            opacity: 0.7,
          }}
        >
          Handcrafted
        </div>
      </div>
    </div>
  );
};
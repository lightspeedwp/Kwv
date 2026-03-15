/**
 * HandDrawnGrapeCluster Icon Component
 * 
 * Hand-drawn grape cluster SVG icon with organic, sketched circles.
 * Perfect for wine categories, vineyard features, and decorative accents.
 * 
 * Features:
 * - Irregular hand-drawn grape circles (7-9 grapes)
 * - Vine stem and leaf sketch
 * - Brush texture filter for organic feel
 * - Variable circle sizes for natural clustering
 * - Customizable size and color
 * - WCAG compliant when used as decorative
 * 
 * Usage:
 * ```tsx
 * <HandDrawnGrapeCluster size={64} color="var(--twb-color-plum)" />
 * <HandDrawnGrapeCluster size={32} color="var(--twb-color-vine)" showLeaf />
 * ```
 * 
 * Props:
 * @param {number} size - Icon size in pixels (default: 48)
 * @param {string} color - Stroke color (default: currentColor)
 * @param {boolean} showLeaf - Show vine leaf detail (default: true)
 * @param {string} className - Additional CSS classes
 * @param {...SVGElement} props - All standard SVG attributes
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';

export interface HandDrawnGrapeClusterProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  showLeaf?: boolean;
}

export const HandDrawnGrapeCluster: React.FC<HandDrawnGrapeClusterProps> = ({
  size = 48,
  color = 'currentColor',
  showLeaf = true,
  className = '',
  ...props
}) => {
  const id = React.useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        {/* Brush texture filter */}
        <filter id={`grape-texture-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="1.0" numOctaves="2" seed="12" />
          <feDisplacementMap in="SourceGraphic" scale="1.5" />
        </filter>
      </defs>

      {/* Vine stem */}
      <path
        d="M50,5 Q48,8 50,12 Q52,16 50,20"
        stroke={color}
        strokeWidth="2"
        fill="none"
        filter={`url(#grape-texture-${id})`}
        opacity="0.8"
      />

      {/* Grapes - Row 1 (top, 2 grapes) */}
      <circle
        cx="42" cy="28" r="8"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        filter={`url(#grape-texture-${id})`}
      />
      <circle
        cx="58" cy="28" r="8"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        filter={`url(#grape-texture-${id})`}
      />

      {/* Grapes - Row 2 (middle, 3 grapes) */}
      <circle
        cx="35" cy="42" r="9"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        filter={`url(#grape-texture-${id})`}
      />
      <circle
        cx="50" cy="42" r="9"
        stroke={color}
        strokeWidth="2"
        fill="none"
        filter={`url(#grape-texture-${id})`}
      />
      <circle
        cx="65" cy="42" r="9"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        filter={`url(#grape-texture-${id})`}
      />

      {/* Grapes - Row 3 (3 grapes) */}
      <circle
        cx="38" cy="58" r="8.5"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        filter={`url(#grape-texture-${id})`}
      />
      <circle
        cx="50" cy="58" r="8.5"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        filter={`url(#grape-texture-${id})`}
      />
      <circle
        cx="62" cy="58" r="8.5"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        filter={`url(#grape-texture-${id})`}
      />

      {/* Grapes - Row 4 (bottom, 2 grapes) */}
      <circle
        cx="44" cy="72" r="7.5"
        stroke={color}
        strokeWidth="1.6"
        fill="none"
        filter={`url(#grape-texture-${id})`}
      />
      <circle
        cx="56" cy="72" r="7.5"
        stroke={color}
        strokeWidth="1.6"
        fill="none"
        filter={`url(#grape-texture-${id})`}
      />

      {/* Optional vine leaf */}
      {showLeaf && (
        <>
          {/* Leaf stem */}
          <path
            d="M50,12 Q55,14 62,16"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            filter={`url(#grape-texture-${id})`}
            opacity="0.7"
          />
          
          {/* Leaf shape (organic) */}
          <path
            d="M62,16 Q68,14 72,18 Q75,22 73,26 Q70,28 66,26 Q64,24 62,22 Q60,19 62,16"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            filter={`url(#grape-texture-${id})`}
            opacity="0.6"
          />
          
          {/* Leaf veins */}
          <path
            d="M64,20 Q66,21 68,22"
            stroke={color}
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
            filter={`url(#grape-texture-${id})`}
          />
        </>
      )}

      {/* Highlight dots on grapes (hand-drawn detail) */}
      <circle cx="46" cy="40" r="1.5" fill={color} opacity="0.3" />
      <circle cx="54" cy="56" r="1.5" fill={color} opacity="0.3" />
      <circle cx="60" cy="44" r="1.5" fill={color} opacity="0.3" />
    </svg>
  );
};

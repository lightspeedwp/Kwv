/**
 * HandDrawnWineBottle Icon Component
 * 
 * Hand-drawn wine bottle SVG icon with organic, sketched paths.
 * Replaces generic icons with authentic artisan aesthetic.
 * 
 * Features:
 * - Irregular hand-drawn paths (bottle outline, neck, base)
 * - Brush texture filter for organic feel
 * - Multiple stroke weights for depth
 * - Wine label sketch detail
 * - Customizable size and color
 * - WCAG compliant when used as decorative
 * 
 * Usage:
 * ```tsx
 * <HandDrawnWineBottle size={64} color="var(--twb-color-plum)" />
 * <HandDrawnWineBottle size={32} color="var(--twb-color-ink)" className="mb-4" />
 * ```
 * 
 * Props:
 * @param {number} size - Icon size in pixels (default: 48)
 * @param {string} color - Stroke color (default: currentColor)
 * @param {string} className - Additional CSS classes
 * @param {...SVGElement} props - All standard SVG attributes
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';

export interface HandDrawnWineBottleProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const HandDrawnWineBottle: React.FC<HandDrawnWineBottleProps> = ({
  size = 48,
  color = 'currentColor',
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
        <filter id={`wine-bottle-texture-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="8" />
          <feDisplacementMap in="SourceGraphic" scale="1.2" />
        </filter>
      </defs>

      {/* Bottle neck (top) */}
      <path
        d="M42,10 Q41,9 42,8 L42,5 Q42,3 44,3 L56,3 Q58,3 58,5 L58,8 Q59,9 58,10 L58,28 Q58,30 56,30 L44,30 Q42,30 42,28 Z"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        filter={`url(#wine-bottle-texture-${id})`}
        opacity="0.9"
      />

      {/* Bottle shoulder */}
      <path
        d="M42,28 Q42,32 38,35 Q36,37 36,40"
        stroke={color}
        strokeWidth="2"
        fill="none"
        filter={`url(#wine-bottle-texture-${id})`}
        opacity="0.85"
      />
      <path
        d="M58,28 Q58,32 62,35 Q64,37 64,40"
        stroke={color}
        strokeWidth="2"
        fill="none"
        filter={`url(#wine-bottle-texture-${id})`}
        opacity="0.85"
      />

      {/* Bottle body (main) */}
      <path
        d="M36,40 Q35,42 35,45 L35,85 Q35,88 37,90 L37,92 Q37,95 40,95 L60,95 Q63,95 63,92 L63,90 Q65,88 65,85 L65,45 Q65,42 64,40"
        stroke={color}
        strokeWidth="2.2"
        fill="none"
        filter={`url(#wine-bottle-texture-${id})`}
      />

      {/* Wine label (sketch rectangle) */}
      <path
        d="M40,52 L41,50 L59,50 L60,52 L60,68 L59,70 L41,70 L40,68 Z"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
        filter={`url(#wine-bottle-texture-${id})`}
        opacity="0.6"
      />

      {/* Label text lines (decorative) */}
      <line
        x1="44" y1="56" x2="56" y2="56"
        stroke={color}
        strokeWidth="1"
        opacity="0.4"
        filter={`url(#wine-bottle-texture-${id})`}
      />
      <line
        x1="44" y1="60" x2="56" y2="60"
        stroke={color}
        strokeWidth="1"
        opacity="0.4"
        filter={`url(#wine-bottle-texture-${id})`}
      />
      <line
        x1="44" y1="64" x2="52" y2="64"
        stroke={color}
        strokeWidth="1"
        opacity="0.4"
        filter={`url(#wine-bottle-texture-${id})`}
      />

      {/* Cork detail */}
      <ellipse
        cx="50" cy="4" rx="6" ry="1.5"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.5"
        filter={`url(#wine-bottle-texture-${id})`}
      />

      {/* Base emphasis line */}
      <path
        d="M40,92 Q42,93 50,93 T60,92"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        filter={`url(#wine-bottle-texture-${id})`}
        opacity="0.7"
      />
    </svg>
  );
};

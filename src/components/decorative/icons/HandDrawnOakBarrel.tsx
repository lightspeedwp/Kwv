/**
 * HandDrawnOakBarrel Icon Component
 * 
 * Hand-drawn oak wine barrel SVG icon with organic, sketched paths.
 * Perfect for aging features, cellar tours, and winemaking process sections.
 * 
 * Features:
 * - Irregular hand-drawn barrel outline (bulging middle)
 * - Wood slat details (vertical planks)
 * - Metal band hoops (3 bands)
 * - Brush texture filter for organic feel
 * - Bung hole detail (center tap)
 * - Customizable size and color
 * - WCAG compliant when used as decorative
 * 
 * Usage:
 * ```tsx
 * <HandDrawnOakBarrel size={64} color="var(--twb-color-clay)" />
 * <HandDrawnOakBarrel size={48} color="var(--twb-color-ink)" showBung />
 * ```
 * 
 * Props:
 * @param {number} size - Icon size in pixels (default: 48)
 * @param {string} color - Stroke color (default: currentColor)
 * @param {boolean} showBung - Show bung hole detail (default: true)
 * @param {string} className - Additional CSS classes
 * @param {...SVGElement} props - All standard SVG attributes
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';

export interface HandDrawnOakBarrelProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  showBung?: boolean;
}

export const HandDrawnOakBarrel: React.FC<HandDrawnOakBarrelProps> = ({
  size = 48,
  color = 'currentColor',
  showBung = true,
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
        <filter id={`barrel-texture-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="2" seed="15" />
          <feDisplacementMap in="SourceGraphic" scale="1.3" />
        </filter>
      </defs>

      {/* Barrel outline - Left side (curved) */}
      <path
        d="M35,10 Q32,12 30,18 Q28,30 27,50 Q28,70 30,82 Q32,88 35,90"
        stroke={color}
        strokeWidth="2.2"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
      />

      {/* Barrel outline - Right side (curved) */}
      <path
        d="M65,10 Q68,12 70,18 Q72,30 73,50 Q72,70 70,82 Q68,88 65,90"
        stroke={color}
        strokeWidth="2.2"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
      />

      {/* Barrel top ellipse */}
      <ellipse
        cx="50" cy="10" rx="15" ry="4"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
      />

      {/* Barrel bottom ellipse */}
      <ellipse
        cx="50" cy="90" rx="15" ry="4"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
      />

      {/* Metal hoops (3 bands) */}
      {/* Top hoop */}
      <path
        d="M35,20 Q34,21 34,22 Q34,23 35,24"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
        opacity="0.8"
      />
      <path
        d="M65,20 Q66,21 66,22 Q66,23 65,24"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
        opacity="0.8"
      />
      <ellipse
        cx="50" cy="22" rx="16" ry="3"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
        opacity="0.8"
      />

      {/* Middle hoop */}
      <path
        d="M27,48 Q26,50 27,52"
        stroke={color}
        strokeWidth="2.8"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
        opacity="0.8"
      />
      <path
        d="M73,48 Q74,50 73,52"
        stroke={color}
        strokeWidth="2.8"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
        opacity="0.8"
      />
      <ellipse
        cx="50" cy="50" rx="23" ry="3"
        stroke={color}
        strokeWidth="2.8"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
        opacity="0.8"
      />

      {/* Bottom hoop */}
      <path
        d="M35,76 Q34,77 34,78 Q34,79 35,80"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
        opacity="0.8"
      />
      <path
        d="M65,76 Q66,77 66,78 Q66,79 65,80"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
        opacity="0.8"
      />
      <ellipse
        cx="50" cy="78" rx="16" ry="3"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        filter={`url(#barrel-texture-${id})`}
        opacity="0.8"
      />

      {/* Wood slat details (vertical lines showing planks) */}
      <path
        d="M42,12 Q41,30 40,50 Q41,70 42,88"
        stroke={color}
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
        filter={`url(#barrel-texture-${id})`}
      />
      <path
        d="M50,10 Q49,30 49,50 Q49,70 50,90"
        stroke={color}
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
        filter={`url(#barrel-texture-${id})`}
      />
      <path
        d="M58,12 Q59,30 60,50 Q59,70 58,88"
        stroke={color}
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
        filter={`url(#barrel-texture-${id})`}
      />

      {/* Optional bung hole (tap) */}
      {showBung && (
        <>
          {/* Bung hole circle */}
          <circle
            cx="50" cy="50" r="5"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            filter={`url(#barrel-texture-${id})`}
            opacity="0.7"
          />
          {/* Bung plug detail */}
          <circle
            cx="50" cy="50" r="2.5"
            fill={color}
            opacity="0.4"
          />
        </>
      )}
    </svg>
  );
};

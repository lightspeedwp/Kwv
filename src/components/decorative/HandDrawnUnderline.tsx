/**
 * HandDrawnUnderline Component
 * 
 * Decorative hand-drawn underline element for headings and emphasis.
 * Provides authentic, organic feel with randomized variations.
 * 
 * Features:
 * - 4 style variants (scribble, brush, gentle wave, rough)
 * - Randomized positioning for natural imperfection
 * - Responsive sizing
 * - Accessible (decorative, aria-hidden)
 * - Color inheritance or custom color prop
 * 
 * @example
 * <h1 className="relative inline-block">
 *   Handcrafted Wines
 *   <HandDrawnUnderline variant="brush" color="var(--twb-color-plum)" />
 * </h1>
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';

interface HandDrawnUnderlineProps {
  /** Visual style variant */
  variant?: 'scribble' | 'brush' | 'wave' | 'rough';
  /** Color of the underline (CSS value or CSS variable) */
  color?: string;
  /** Additional CSS classes */
  className?: string;
  /** Width percentage (10-100) */
  width?: number;
  /** Offset from bottom in pixels */
  offset?: number;
}

/**
 * HandDrawnUnderline - Organic decorative underline
 */
export const HandDrawnUnderline: React.FC<HandDrawnUnderlineProps> = ({
  variant = 'brush',
  color = 'currentColor',
  className = '',
  width = 100,
  offset = -8,
}) => {
  // Random variation for authentic feel
  const randomOffset = React.useMemo(() => Math.random() * 2 - 1, []);
  const randomRotation = React.useMemo(() => Math.random() * 1 - 0.5, []);

  // Path data for each variant
  const paths = {
    scribble: 'M0,5 Q10,2 20,5 T40,5 T60,5 T80,5 T100,5',
    brush: 'M0,8 C10,4 20,6 30,5 C40,4 50,7 60,6 C70,5 80,8 90,6 L100,8',
    wave: 'M0,6 Q25,2 50,6 T100,6',
    rough: 'M0,7 L5,5 L10,8 L15,4 L20,7 L25,5 L30,8 L35,6 L40,8 L45,5 L50,7 L55,6 L60,8 L65,5 L70,7 L75,6 L80,8 L85,5 L90,7 L95,6 L100,8'
  };

  const pathData = paths[variant];

  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      style={{
        left: `${(100 - width) / 2}%`,
        bottom: `${offset + randomOffset}px`,
        width: `${width}%`,
        height: '12px',
        transform: `rotate(${randomRotation}deg)`,
      }}
      viewBox="0 0 100 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d={pathData}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default HandDrawnUnderline;

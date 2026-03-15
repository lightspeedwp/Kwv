/**
 * BrushStrokeBorder Component
 * 
 * Hand-painted border overlay using SVG paintbrush strokes.
 * Replaces clinical CSS borders with organic, handcrafted edges.
 * 
 * Features:
 * - Authentic paintbrush stroke SVG paths
 * - Multiple stroke styles (rough, smooth, dry-brush)
 * - Variable line weight for organic feel
 * - Corner emphasis with brush dabs
 * - Responsive to container size
 * - Color customizable via CSS variables
 * - Performance optimized (single SVG, no external assets)
 * 
 * Usage:
 * ```tsx
 * <div className="relative">
 *   <BrushStrokeBorder variant="rough" color="var(--twb-color-plum)" />
 *   <div className="p-6">Card content</div>
 * </div>
 * ```
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';

interface BrushStrokeBorderProps {
  /** Brush stroke style */
  variant?: 'rough' | 'smooth' | 'dry-brush' | 'wine-label';
  /** Stroke color (CSS value or variable) */
  color?: string;
  /** Stroke width (1-4) */
  strokeWidth?: number;
  /** Opacity (0-1) */
  opacity?: number;
  /** Show corner emphasis dabs */
  showCorners?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * BrushStrokeBorder - Organic paintbrush border overlay
 */
export const BrushStrokeBorder: React.FC<BrushStrokeBorderProps> = ({
  variant = 'rough',
  color = 'var(--twb-color-plum)',
  strokeWidth = 2,
  opacity = 0.6,
  showCorners = true,
  className = '',
}) => {
  // Unique ID for masks/filters
  const id = React.useId();

  // Border path variants (hand-drawn irregular paths)
  const borderPaths = {
    // Rough, sketchy border (multiple passes)
    rough: {
      outer: 'M8,2 L2,2 Q2,2 2,8 L2,calc(100%-8) Q2,calc(100%-2) 8,calc(100%-2) L calc(100%-8),calc(100%-2) Q calc(100%-2),calc(100%-2) calc(100%-2),calc(100%-8) L calc(100%-2),8 Q calc(100%-2),2 calc(100%-8),2 Z',
      inner: 'M10,4 L4,4 Q4,4 4,10 L4,calc(100%-10) Q4,calc(100%-4) 10,calc(100%-4) L calc(100%-10),calc(100%-4) Q calc(100%-4),calc(100%-4) calc(100%-4),calc(100%-10) L calc(100%-4),10 Q calc(100%-4),4 calc(100%-10),4 Z',
    },
    // Smooth brush stroke
    smooth: {
      outer: 'M12,2 L2,2 C2,2 2,2 2,12 L2,calc(100%-12) C2,calc(100%) 2,calc(100%) 12,calc(100%) L calc(100%-12),calc(100%) C calc(100%),calc(100%) calc(100%),calc(100%) calc(100%),calc(100%-12) L calc(100%),12 C calc(100%),2 calc(100%),2 calc(100%-12),2 Z',
      inner: '',
    },
    // Dry brush (textured, broken strokes)
    'dry-brush': {
      outer: 'M10,2 L2,3 Q2,2 3,10 L2,calc(100%-12) Q2,calc(100%-2) 10,calc(100%-1) L calc(100%-12),calc(100%-2) Q calc(100%-1),calc(100%-2) calc(100%-2),calc(100%-10) L calc(100%-1),12 Q calc(100%-2),3 calc(100%-10),2 Z',
      inner: 'M12,5 L5,6 Q5,5 6,12 L5,calc(100%-14) Q5,calc(100%-5) 12,calc(100%-4) L calc(100%-14),calc(100%-5) Q calc(100%-4),calc(100%-5) calc(100%-5),calc(100%-12) L calc(100%-4),14 Q calc(100%-5),6 calc(100%-12),5 Z',
    },
    // Wine label (vintage asymmetric)
    'wine-label': {
      outer: 'M15,3 L3,4 Q2,3 3,15 L4,calc(100%-18) Q3,calc(100%-3) 15,calc(100%-4) L calc(100%-18),calc(100%-3) Q calc(100%-3),calc(100%-4) calc(100%-4),calc(100%-15) L calc(100%-3),18 Q calc(100%-4),4 calc(100%-15),3 Z',
      inner: '',
    },
  };

  const paths = borderPaths[variant];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        {/* Brush texture filter */}
        <filter id={`brush-texture-${id}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="3"
            seed="1"
          />
          <feDisplacementMap
            in="SourceGraphic"
            scale="2"
          />
        </filter>
      </defs>

      {/* Outer stroke */}
      <path
        d={paths.outer}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#brush-texture-${id})`}
      />

      {/* Inner stroke (for rough/dry-brush variants) */}
      {paths.inner && (
        <path
          d={paths.inner}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth * 0.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.4"
          filter={`url(#brush-texture-${id})`}
        />
      )}

      {/* Corner emphasis dabs */}
      {showCorners && (
        <>
          {/* Top-left */}
          <circle
            cx="8"
            cy="8"
            r="3"
            fill={color}
            opacity="0.15"
          />
          {/* Top-right */}
          <circle
            cx="calc(100% - 8px)"
            cy="8"
            r="3"
            fill={color}
            opacity="0.15"
          />
          {/* Bottom-left */}
          <circle
            cx="8"
            cy="calc(100% - 8px)"
            r="3"
            fill={color}
            opacity="0.15"
          />
          {/* Bottom-right */}
          <circle
            cx="calc(100% - 8px)"
            cy="calc(100% - 8px)"
            r="3"
            fill={color}
            opacity="0.15"
          />
        </>
      )}
    </svg>
  );
};

export default BrushStrokeBorder;

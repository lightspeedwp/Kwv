/**
 * BrushStrokeDivider Component
 * 
 * Hand-drawn section divider using organic brush strokes.
 * Replaces standard <hr> elements and CSS borders with authentic painted lines.
 * 
 * Features:
 * - Multiple hand-drawn stroke variants (horizontal brush, vine flourish, wine stain)
 * - Variable line weight and organic irregularity
 * - Decorative accents (grape clusters, wine drops, leaf motifs)
 * - Responsive sizing
 * - Color customizable via CSS variables
 * - Performance optimized (single SVG)
 * 
 * Usage:
 * ```tsx
 * <BrushStrokeDivider variant="vine-flourish" color="var(--twb-color-vine)" />
 * ```
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';

interface BrushStrokeDividerProps {
  /** Divider style variant */
  variant?: 'brush-horizontal' | 'vine-flourish' | 'wine-stain' | 'double-stroke' | 'grape-cluster' | 'wave' | 'torn' | 'brush' | 'sketch' | 'scribble';
  /** Stroke color (CSS value or variable) */
  color?: string;
  /** Divider width (full, wide, narrow) */
  width?: 'full' | 'wide' | 'narrow';
  /** Opacity (0-1) */
  opacity?: number;
  /** Show decorative accents */
  showAccents?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Spacing above/below (using design tokens) */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  /** Position (top or bottom of parent - for positioning absolute overlays) */
  position?: 'top' | 'bottom';
}

/**
 * BrushStrokeDivider - Organic section separator
 */
export const BrushStrokeDivider: React.FC<BrushStrokeDividerProps> = ({
  variant = 'brush-horizontal',
  color = 'var(--twb-color-plum)',
  width = 'wide',
  opacity = 0.4,
  showAccents = true,
  className = '',
  spacing = 'md',
  position = 'top',
}) => {
  // Width classes
  const widthClasses = {
    full: 'w-full',
    wide: 'w-full max-w-4xl',
    narrow: 'w-full max-w-xl',
  };

  // Spacing classes (vertical margin)
  const spacingClasses = {
    sm: 'my-[var(--twb-spacing-8)]',
    md: 'my-[var(--twb-spacing-12)]',
    lg: 'my-[var(--twb-spacing-16)]',
    xl: 'my-[var(--twb-spacing-24)]',
  };

  // SVG path data for each variant
  const dividerPaths = {
    // Simple horizontal brush stroke
    'brush-horizontal': {
      viewBox: '0 0 800 20',
      path: 'M0,10 Q100,8 200,10 T400,10 T600,10 T800,10',
      strokeWidth: 3,
      height: 20,
    },
    // Vine with leaves flourish
    'vine-flourish': {
      viewBox: '0 0 800 40',
      path: 'M0,20 Q100,15 200,20 Q250,18 300,20 Q350,22 400,20 Q450,18 500,20 Q550,22 600,20 Q700,15 800,20',
      accent: [
        // Small leaves along the vine
        'M200,15 Q205,10 210,15 Q205,20 200,15',
        'M400,15 Q405,10 410,15 Q405,20 400,15',
        'M600,15 Q605,10 610,15 Q605,20 600,15',
      ],
      strokeWidth: 2,
      height: 40,
    },
    // Wine stain drip effect
    'wine-stain': {
      viewBox: '0 0 800 30',
      path: 'M0,10 C100,12 200,8 300,10 C400,12 500,8 600,10 C700,8 750,12 800,10',
      accent: [
        // Drip marks
        'M150,10 L152,25 Q150,28 148,25 Z',
        'M450,10 L452,23 Q450,26 448,23 Z',
        'M650,10 L652,20 Q650,23 648,20 Z',
      ],
      strokeWidth: 4,
      height: 30,
    },
    // Double parallel strokes
    'double-stroke': {
      viewBox: '0 0 800 24',
      path: 'M0,8 Q100,6 200,8 T400,8 T600,8 T800,8 M0,16 Q100,14 200,16 T400,16 T600,16 T800,16',
      strokeWidth: 1.5,
      height: 24,
    },
    // Grape cluster in center
    'grape-cluster': {
      viewBox: '0 0 800 50',
      path: 'M0,25 L300,25 M500,25 L800,25',
      accent: [
        // Grape cluster circles (center decoration)
        'M380,20 A8,8 0 1,1 396,20 A8,8 0 1,1 380,20', // Top grape
        'M372,30 A8,8 0 1,1 388,30 A8,8 0 1,1 372,30', // Left grape
        'M388,30 A8,8 0 1,1 404,30 A8,8 0 1,1 388,30', // Right grape
        'M380,38 A8,8 0 1,1 396,38 A8,8 0 1,1 380,38', // Bottom grape
      ],
      strokeWidth: 2,
      height: 50,
    },
    // Wave pattern
    'wave': {
      viewBox: '0 0 800 20',
      path: 'M0,10 Q100,8 200,10 T400,10 T600,10 T800,10 M0,10 Q100,12 200,10 T400,10 T600,10 T800,10',
      strokeWidth: 3,
      height: 20,
    },
    // Torn paper effect
    'torn': {
      viewBox: '0 0 800 20',
      path: 'M0,10 Q100,8 200,10 T400,10 T600,10 T800,10 M0,10 Q100,12 200,10 T400,10 T600,10 T800,10',
      strokeWidth: 3,
      height: 20,
    },
    // Brush stroke with texture
    'brush': {
      viewBox: '0 0 800 20',
      path: 'M0,10 Q100,8 200,10 T400,10 T600,10 T800,10 M0,10 Q100,12 200,10 T400,10 T600,10 T800,10',
      strokeWidth: 3,
      height: 20,
    },
    // Sketchy line
    'sketch': {
      viewBox: '0 0 800 20',
      path: 'M0,10 Q100,8 200,10 T400,10 T600,10 T800,10 M0,10 Q100,12 200,10 T400,10 T600,10 T800,10',
      strokeWidth: 3,
      height: 20,
    },
    // Scribble effect
    'scribble': {
      viewBox: '0 0 800 20',
      path: 'M0,10 Q100,8 200,10 T400,10 T600,10 T800,10 M0,10 Q100,12 200,10 T400,10 T600,10 T800,10',
      strokeWidth: 3,
      height: 20,
    },
  };

  const divider = dividerPaths[variant];
  
  // Fallback to brush-horizontal if variant is invalid
  if (!divider) {
    console.warn(`Invalid BrushStrokeDivider variant: ${variant}. Falling back to 'brush-horizontal'.`);
    return <BrushStrokeDivider variant="brush-horizontal" color={color} width={width} opacity={opacity} showAccents={showAccents} className={className} spacing={spacing} />;
  }

  return (
    <div 
      className={`flex justify-center ${spacingClasses[spacing]} ${className}`}
      role="separator"
      aria-hidden="true"
    >
      <svg
        className={widthClasses[width]}
        viewBox={divider.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ 
          height: `${divider.height}px`,
          opacity 
        }}
      >
        {/* Main stroke path */}
        <path
          d={divider.path}
          stroke={color}
          strokeWidth={divider.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Decorative accents */}
        {showAccents && divider.accent && divider.accent.map((accentPath, index) => (
          <path
            key={index}
            d={accentPath}
            stroke={color}
            strokeWidth={divider.strokeWidth * 0.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={variant === 'grape-cluster' ? color : 'none'}
            opacity={0.7}
          />
        ))}
      </svg>
    </div>
  );
};

export default BrushStrokeDivider;
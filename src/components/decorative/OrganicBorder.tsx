/**
 * OrganicBorder Component
 * 
 * Wrapper component that adds organic, hand-drawn borders to content.
 * Provides irregular corners and optional hand-drawn stroke effects.
 * 
 * Features:
 * - Irregular border radius for organic feel
 * - Optional hand-drawn SVG border overlay
 * - Slight rotation for imperfection
 * - Corner flourishes (vine/leaf motifs)
 * - Hover animation
 * - Responsive sizing
 * 
 * @example
 * <OrganicBorder variant="card" showStroke>
 *   <div className="p-6">Card content here</div>
 * </OrganicBorder>
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';

interface OrganicBorderProps {
  /** Content to wrap */
  children: React.ReactNode;
  /** Visual variant */
  variant?: 'card' | 'section' | 'highlight';
  /** Show hand-drawn stroke overlay */
  showStroke?: boolean;
  /** Show corner flourishes */
  showFlourishes?: boolean;
  /** Initial rotation in degrees */
  rotation?: number;
  /** Additional CSS classes */
  className?: string;
  /** Background color */
  bgColor?: string;
  /** Border color */
  borderColor?: string;
  /** Enable hover animation */
  enableHover?: boolean;
}

/**
 * OrganicBorder - Organic wrapper with irregular borders
 */
export const OrganicBorder: React.FC<OrganicBorderProps> = ({
  children,
  variant = 'card',
  showStroke = false,
  showFlourishes = false,
  rotation,
  className = '',
  bgColor,
  borderColor = 'var(--twb-color-border)',
  enableHover = true,
}) => {
  // Random subtle rotation if not specified
  const autoRotation = React.useMemo(
    () => (rotation !== undefined ? rotation : (Math.random() * 1 - 0.5)),
    [rotation]
  );

  // Variant-specific styles
  const variantStyles = {
    card: {
      borderRadius: '12px 18px 15px 20px',
      padding: '0',
      border: `1px solid ${borderColor}`,
    },
    section: {
      borderRadius: '20px 28px 24px 32px',
      padding: '0',
      border: `2px solid ${borderColor}`,
    },
    highlight: {
      borderRadius: '8px 14px 10px 16px',
      padding: '0',
      border: `1.5px solid ${borderColor}`,
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={`relative overflow-hidden transition-transform duration-300 ${
        enableHover ? 'hover:-translate-y-1 hover:rotate-0' : ''
      } ${className}`}
      style={{
        ...styles,
        backgroundColor: bgColor,
        transform: `rotate(${autoRotation}deg)`,
      }}
    >
      {/* Hand-drawn stroke overlay */}
      {showStroke && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="2"
            y="2"
            width="calc(100% - 4px)"
            height="calc(100% - 4px)"
            rx={styles.borderRadius.split(' ')[0]}
            fill="none"
            stroke={borderColor}
            strokeWidth="1.5"
            strokeDasharray="3 2"
            opacity="0.4"
          />
        </svg>
      )}

      {/* Corner flourishes */}
      {showFlourishes && (
        <>
          {/* Top-left flourish */}
          <svg
            className="absolute top-2 left-2 w-4 h-4 opacity-30"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2,14 Q2,8 8,8 Q2,8 2,2"
              stroke={borderColor}
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Bottom-right flourish */}
          <svg
            className="absolute bottom-2 right-2 w-4 h-4 opacity-30 rotate-180"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2,14 Q2,8 8,8 Q2,8 2,2"
              stroke={borderColor}
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default OrganicBorder;

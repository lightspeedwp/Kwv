/**
 * WineLabelStamp Component
 * 
 * Circular badge/stamp component inspired by wine labels and vintage seals.
 * Adds premium, handcrafted feel to featured content and callouts.
 * 
 * Features:
 * - 3 style variants (vintage seal, modern badge, estate stamp)
 * - Randomized rotation for authentic placement
 * - Customizable size, text, and icon
 * - Hand-drawn circular border
 * - Accessible text content
 * 
 * @example
 * <WineLabelStamp
 *   text="106 Years"
 *   variant="vintage"
 *   size="lg"
 *   rotation={-5}
 * />
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';

interface WineLabelStampProps {
  /** Text content of the stamp */
  text?: string;
  /** Optional subtitle text */
  subtitle?: string;
  /** Icon or additional content */
  icon?: React.ReactNode;
  /** Visual style variant */
  variant?: 'vintage' | 'modern' | 'estate';
  /** Size of the stamp */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Rotation in degrees (-15 to 15 recommended) */
  rotation?: number;
  /** Additional CSS classes */
  className?: string;
  /** Background color */
  bgColor?: string;
  /** Border color */
  borderColor?: string;
  /** Text color */
  textColor?: string;
}

/**
 * WineLabelStamp - Vintage wine label style badge
 */
export const WineLabelStamp: React.FC<WineLabelStampProps> = ({
  text,
  subtitle,
  icon,
  variant = 'modern',
  size = 'md',
  rotation,
  className = '',
  bgColor = 'var(--twb-color-paper)',
  borderColor = 'var(--twb-color-plum)',
  textColor = 'var(--twb-color-ink)',
}) => {
  // Random rotation if not specified
  const autoRotation = React.useMemo(
    () => (rotation !== undefined ? rotation : Math.random() * 10 - 5),
    [rotation]
  );

  // Size mappings
  const sizes = {
    sm: { width: '80px', fontSize: '0.75rem', padding: '12px', borderWidth: 2 },
    md: { width: '120px', fontSize: '0.875rem', padding: '16px', borderWidth: 2.5 },
    lg: { width: '160px', fontSize: '1rem', padding: '20px', borderWidth: 3 },
    xl: { width: '200px', fontSize: '1.125rem', padding: '24px', borderWidth: 3.5 },
  };

  const sizeConfig = sizes[size];

  // Variant-specific styles
  const variantClasses = {
    vintage: 'border-double',
    modern: 'border-solid',
    estate: 'border-dashed',
  };

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        transform: `rotate(${autoRotation}deg)`,
      }}
    >
      {/* Outer Circle */}
      <div
        className={`relative flex flex-col items-center justify-center rounded-full ${variantClasses[variant]}`}
        style={{
          width: sizeConfig.width,
          height: sizeConfig.width,
          backgroundColor: bgColor,
          borderColor: borderColor,
          borderWidth: `${sizeConfig.borderWidth}px`,
          padding: sizeConfig.padding,
          boxShadow: '0 4px 12px rgba(30, 26, 23, 0.15)',
        }}
      >
        {/* Inner decorative ring for vintage variant */}
        {variant === 'vintage' && (
          <div
            className="absolute inset-0 rounded-full border-solid opacity-30"
            style={{
              borderColor: borderColor,
              borderWidth: '1px',
              margin: '8px',
            }}
            aria-hidden="true"
          />
        )}

        {/* Icon */}
        {icon && (
          <div
            className="mb-1"
            style={{ color: borderColor }}
            aria-hidden="true"
          >
            {icon}
          </div>
        )}

        {/* Main Text */}
        {text && (
          <div
            className="font-heading font-semibold text-center leading-tight"
            style={{
              fontSize: sizeConfig.fontSize,
              color: textColor,
            }}
          >
            {text}
          </div>
        )}

        {/* Subtitle */}
        {subtitle && (
          <div
            className="text-center leading-tight mt-1 opacity-80"
            style={{
              fontSize: `calc(${sizeConfig.fontSize} * 0.7)`,
              color: textColor,
            }}
          >
            {subtitle}
          </div>
        )}

        {/* Decorative dots for estate variant */}
        {variant === 'estate' && (
          <svg
            className="absolute"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{
              top: 0,
              left: 0,
              pointerEvents: 'none',
            }}
          >
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 50 + 42 * Math.cos(rad);
              const y = 50 + 42 * Math.sin(rad);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="1.5"
                  fill={borderColor}
                  opacity="0.6"
                />
              );
            })}
          </svg>
        )}
      </div>
    </div>
  );
};

export default WineLabelStamp;

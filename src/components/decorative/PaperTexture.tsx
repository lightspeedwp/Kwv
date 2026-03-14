/**
 * PaperTexture Component
 * 
 * Subtle paper grain texture overlay for backgrounds.
 * Adds warmth and tactile quality to sections and hero images.
 * 
 * Features:
 * - SVG noise filter for authentic grain
 * - Adjustable opacity and intensity
 * - Performance optimized (single filter definition, CSS blending)
 * - Works on light and dark backgrounds
 * - Accessible (decorative element)
 * 
 * @example
 * <section className="relative bg-[var(--twb-color-paper)]">
 *   <PaperTexture intensity="medium" opacity={0.1} />
 *   <div className="relative z-10">Content here</div>
 * </section>
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';

interface PaperTextureProps {
  /** Grain intensity level */
  intensity?: 'subtle' | 'medium' | 'strong';
  /** Opacity of the texture (0-1) */
  opacity?: number;
  /** Additional CSS classes */
  className?: string;
  /** Blend mode for texture */
  blendMode?: 'multiply' | 'overlay' | 'soft-light';
}

/**
 * PaperTexture - Organic paper grain overlay
 */
export const PaperTexture: React.FC<PaperTextureProps> = ({
  intensity = 'subtle',
  opacity = 0.08,
  className = '',
  blendMode = 'multiply',
}) => {
  // Unique ID for filter to avoid conflicts
  const filterId = React.useId();

  // Turbulence settings based on intensity
  const turbulenceSettings = {
    subtle: { baseFrequency: '0.7', numOctaves: 3 },
    medium: { baseFrequency: '0.9', numOctaves: 4 },
    strong: { baseFrequency: '1.2', numOctaves: 5 },
  };

  const settings = turbulenceSettings[intensity];

  return (
    <>
      {/* SVG Filter Definition */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency={settings.baseFrequency}
              numOctaves={settings.numOctaves}
              seed="42"
            />
            <feColorMatrix
              type="saturate"
              values="0"
            />
            <feComponentTransfer>
              <feFuncR type="discrete" tableValues="0 0.5 1" />
              <feFuncG type="discrete" tableValues="0 0.5 1" />
              <feFuncB type="discrete" tableValues="0 0.5 1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* Texture Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          filter: `url(#${filterId})`,
          opacity: opacity,
          mixBlendMode: blendMode,
          zIndex: 1,
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default PaperTexture;

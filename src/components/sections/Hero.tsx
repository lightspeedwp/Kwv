import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { PaperTexture } from '../decorative/PaperTexture';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  primaryAction?: { label: string; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
  overlayOpacity?: number;
  align?: 'center' | 'left';
  height?: 'full' | 'large' | 'medium' | 'small';
  nextSectionId?: string;
  showPaperTexture?: boolean;
  className?: string;
}

/**
 * Hero Component
 * 
 * A versatile Hero component used across all major landing pages.
 * Sets the visual tone for the entire page experience.
 * 
 * Features:
 * - Background image with dark overlay or solid color
 * - Fluid typography with responsive scaling
 * - Primary and secondary CTA buttons with organic styling
 * - Scroll down indicator with smooth navigation
 * - Multiple height variants (full, large, medium, small)
 * - Optional paper texture overlay for handcrafted aesthetic
 * - Design token integration (colors, spacing, shadows)
 * - WCAG AA compliant contrast on all variants
 * - Dark mode support
 * 
 * @package HandcraftedWines
 * @version 2.0
 * 
 * @param {HeroProps} props - Hero configuration
 * @returns {JSX.Element} Rendered hero section
 */
export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,
  primaryAction,
  secondaryAction,
  overlayOpacity = 0.4,
  align = 'center',
  height = 'large',
  nextSectionId,
  showPaperTexture = false,
  className = '',
}) => {
  const heightClass = {
    full: 'min-h-[max(400px,calc(100dvh-90px))] md:min-h-screen',
    large: 'min-h-[max(350px,calc(100dvh-90px))] md:min-h-[80vh]', // Landing pages
    medium: 'min-h-[max(300px,calc(100dvh-90px))] md:min-h-[60vh]', // Standard pages
    small: 'min-h-[300px] md:min-h-[40vh]', // Utility/Legal pages
  }[height];

  // Adjust padding based on height to prevent content being too high/low
  const contentPadding = height === 'small' ? 'py-[var(--twb-spacing-20)]' : 'pb-[var(--twb-spacing-32)]';

  return (
    <div className={`relative flex items-center ${heightClass} overflow-hidden bg-[var(--twb-color-ink)] dark:bg-[var(--twb-color-bg-primary)] ${className}`}>
      {/* Background Image with Overlay */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[var(--twb-color-ink)]/40 to-[var(--twb-color-ink)]/60" 
            style={{ opacity: overlayOpacity }}
          />
        </div>
      )}

      {/* Optional Paper Texture Overlay */}
      {showPaperTexture && (
        <div className="absolute inset-0 z-[5] pointer-events-none">
          <PaperTexture opacity={0.03} />
        </div>
      )}

      {/* Content */}
      <Container variant="site" className={`relative z-10 text-[var(--twb-color-paper)] dark:text-[var(--twb-color-text-on-dark)] ${contentPadding}`}>
        <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
          <Typography 
            variant="h1" 
            className="mb-[var(--twb-spacing-6)] drop-shadow-[var(--twb-shadow-md)] text-[var(--twb-color-paper)]"
            stretchy
          >
            {title}
          </Typography>
          
          {subtitle && (
            <Typography 
              variant="bodyLarge" 
              className="mb-[var(--twb-spacing-8)] opacity-90 drop-shadow-sm max-w-2xl mx-auto text-[var(--twb-color-paper)]"
            >
              {subtitle}
            </Typography>
          )}

          <div className={`flex flex-col sm:flex-row gap-[var(--twb-spacing-4)] w-full sm:w-auto ${align === 'center' ? 'items-center justify-center' : ''}`}>
            {primaryAction && (
              <Button 
                variant="hero"
                size="lg"
                className="w-full sm:w-auto sm:min-w-[200px]"
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto sm:min-w-[200px] uppercase tracking-wider font-[number:var(--twb-font-weight-bold)] shadow-[var(--twb-shadow-lg)] text-[var(--twb-color-paper)] border-[var(--twb-color-paper)] hover:bg-[var(--twb-color-paper)] hover:text-[var(--twb-color-ink)] bg-[var(--twb-color-ink)]/40 transition-colors"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
      {height !== 'small' && (
        <ScrollDownArrow targetId={nextSectionId} className="z-30" />
      )}
    </div>
  );
};
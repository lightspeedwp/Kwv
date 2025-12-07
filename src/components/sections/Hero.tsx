import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { COLORS } from '../../constants/theme';
import { ImageWithFallback } from '../figma/ImageWithFallback';

import { ScrollDownArrow } from '../common/ScrollDownArrow';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  primaryAction?: { label: string; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
  overlayColor?: string;
  align?: 'center' | 'left';
  height?: 'full' | 'large' | 'medium' | 'small';
  nextSectionId?: string;
  className?: string;
}

/**
 * Hero Component
 * 
 * A versatile Hero component used across Corporate and Shop pages.
 * 
 * Features:
 * - Background Image or Color.
 * - "Stretchy" title support for fluid typography.
 * - Primary and Secondary CTA buttons.
 * - "Scroll Down" indicator option.
 * - Multiple height variants (Full, Large, Medium, Small).
 * 
 * @param {HeroProps} props - Configuration for the hero section.
 */
export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,
  primaryAction,
  secondaryAction,
  overlayColor = 'rgba(0,0,0,0.4)',
  align = 'center',
  height = 'large',
  nextSectionId,
  className = '',
}) => {
  const heightClass = {
    full: 'min-h-[calc(100dvh-90px)] md:min-h-screen',
    large: 'min-h-[calc(100dvh-90px)] md:min-h-[80vh]', // Landing pages
    medium: 'min-h-[calc(100dvh-90px)] md:min-h-[60vh]', // Standard pages
    small: 'min-h-[300px] md:min-h-[40vh]', // Utility/Legal pages
  }[height];

  // Adjust padding based on height to prevent content being too high/low
  const contentPadding = height === 'small' ? 'py-20' : 'pb-32';

  return (
    <div className={`relative flex items-center ${heightClass} overflow-hidden bg-black ${className}`}>
      {/* Background Image or Color */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              background: `linear-gradient(to bottom, ${overlayColor}, rgba(0,0,0,0.6))` 
            }} 
          />
        </div>
      )}

      {/* Content */}
      <Container variant="site" className={`relative z-10 text-white ${contentPadding}`}>
        <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
          <Typography 
            variant="h1" 
            color={COLORS.white} 
            className="mb-6 drop-shadow-md"
            stretchy
          >
            {title}
          </Typography>
          
          {subtitle && (
            <Typography 
              variant="bodyLarge" 
              color={COLORS.white} 
              className="mb-8 opacity-90 drop-shadow-sm max-w-2xl mx-auto"
            >
              {subtitle}
            </Typography>
          )}

          <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto ${align === 'center' ? 'items-center justify-center' : ''}`}>
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
                className="w-full sm:w-auto sm:min-w-[200px] uppercase tracking-wider font-bold shadow-lg !text-white !border-white hover:!bg-white hover:!text-black !bg-black/40"
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

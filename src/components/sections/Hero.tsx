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
  imageSrc: string;
  primaryAction?: { label: string; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
  overlayColor?: string;
  align?: 'center' | 'left';
  height?: 'full' | 'large' | 'medium';
  nextSectionId?: string;
}

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
}) => {
  const heightClass = {
    full: 'min-h-screen',
    large: 'min-h-[70vh]',
    medium: 'min-h-[50vh]',
  }[height];

  return (
    <div className={`relative flex items-center ${heightClass} overflow-hidden`}>
      {/* Background Image */}
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

      {/* Content */}
      <Container variant="site" className="relative z-10 text-white">
        <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
          <Typography 
            variant="h1" 
            color={COLORS.white} 
            className="mb-6 drop-shadow-md"
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

          <div className={`flex gap-4 flex-wrap ${align === 'center' ? 'justify-center' : ''}`}>
            {primaryAction && (
              <Button onClick={primaryAction.onClick}>
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button variant="secondary" onClick={secondaryAction.onClick}>
                {secondaryAction.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
      
      <ScrollDownArrow targetId={nextSectionId} />
    </div>
  );
};

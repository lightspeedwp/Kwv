import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { OrganicBorder } from '../decorative/OrganicBorder';

interface FullWidthSectionProps {
  title: string;
  description: string;
  linkText: string;
  linkTo: string;
  imageSrc?: string;
  align?: 'left' | 'right';
  children?: React.ReactNode;
  variant?: 'light' | 'dark';
  showOrganicBorder?: boolean;
}

/**
 * FullWidthSection Component
 * 
 * A flexible 50/50 layout component used throughout the site for storytelling.
 * Displays a split layout (Image + Text) that creates visual balance and rhythm.
 * 
 * Features:
 * - Alternating layout support (image left/right)
 * - Light and dark background variants
 * - Image with organic radius and shadow
 * - Optional organic border around content
 * - Responsive stacking on mobile
 * - CTA link with arrow indicator
 * - Design token integration (colors, spacing, shadows)
 * - WCAG AA compliant contrast
 * - Dark mode support
 * 
 * @package HandcraftedWines
 * @version 2.0
 * 
 * @param {FullWidthSectionProps} props - Section configuration
 * @returns {JSX.Element} Rendered full-width section
 */
export const FullWidthSection: React.FC<FullWidthSectionProps> = ({
  title,
  description,
  linkText,
  linkTo,
  imageSrc,
  align = 'left',
  children,
  variant = 'light',
  showOrganicBorder = false
}) => {
  const isDark = variant === 'dark';
  const bgColor = isDark ? 'bg-[var(--twb-color-ink)]' : 'bg-[var(--twb-color-bg-primary)]';
  const textColor = isDark ? 'text-white' : 'text-[var(--twb-color-text-primary)]';
  const descColor = isDark ? 'text-white/80' : 'text-[var(--twb-color-text-secondary)]';
  const linkColor = isDark ? 'text-[var(--twb-color-gold)]' : 'text-[var(--twb-color-plum)]';

  return (
    <section className={`py-[var(--twb-spacing-section-y)] ${bgColor} border-b border-[var(--twb-border-primary)] last:border-0`}>
      <Container variant="site">
        <div className={`flex flex-col lg:flex-row items-center gap-[var(--twb-spacing-12)] lg:gap-[var(--twb-spacing-20)] ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
             {imageSrc ? (
               <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--twb-radius-card)] shadow-[var(--twb-shadow-md)]">
                 <ImageWithFallback 
                   src={imageSrc} 
                   alt={title}
                   className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                 />
               </div>
             ) : (
               <div className="w-full h-full min-h-[300px] bg-[var(--twb-color-bg-secondary)] rounded-[var(--twb-radius-card)] flex items-center justify-center text-[var(--twb-color-text-secondary)]">
                  No Image Provided
               </div>
             )}
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 relative">
            {showOrganicBorder && (
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <OrganicBorder variant="subtle" />
              </div>
            )}
            
            <div className={showOrganicBorder ? 'relative z-10 p-[var(--twb-spacing-6)]' : ''}>
              <Typography variant="h2" className={`mb-[var(--twb-spacing-6)] ${textColor} font-[number:var(--twb-font-weight-bold)]`}>
                {title}
              </Typography>
              <Typography variant="bodyLarge" className={`mb-[var(--twb-spacing-8)] ${descColor} leading-relaxed`}>
                {description}
              </Typography>
              
              {children}

              <Link 
                to={linkTo}
                className={`inline-flex items-center text-sm font-[number:var(--twb-font-weight-bold)] uppercase tracking-widest hover:underline transition-colors ${linkColor}`}
              >
                {linkText} <ArrowRight size={16} className="ml-[var(--twb-spacing-2)]" />
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
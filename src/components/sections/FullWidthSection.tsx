import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { COLORS } from '../../constants/theme';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FullWidthSectionProps {
  title: string;
  description: string;
  linkText: string;
  linkTo: string;
  imageSrc?: string;
  align?: 'left' | 'right';
  children?: React.ReactNode;
  variant?: 'light' | 'dark';
}

/**
 * FullWidthSection Component
 * 
 * A flexible layout component for "About Us" style pages.
 * Displays a split layout (Image + Text) that spans the full width of the container.
 * 
 * Features:
 * - Alternating layout support (Image Left / Image Right).
 * - Light and Dark variants for visual rhythm.
 * - CTA Button support.
 * 
 * @param {FullWidthSectionProps} props - Content and layout configuration.
 */
export const FullWidthSection: React.FC<FullWidthSectionProps> = ({
  title,
  description,
  linkText,
  linkTo,
  imageSrc,
  align = 'left',
  children,
  variant = 'light'
}) => {
  const isDark = variant === 'dark';
  const bgColor = isDark ? 'bg-[#2C1810]' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-[#2C1810]';
  const descColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const buttonVariant = isDark ? 'outline-white' : 'outline';

  return (
    <section className={`py-16 md:py-24 ${bgColor} border-b border-gray-100 last:border-0`}>
      <Container variant="site">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
             {imageSrc ? (
               <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
                 <ImageWithFallback 
                   src={imageSrc} 
                   alt={title}
                   className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                 />
               </div>
             ) : (
               <div className="w-full h-full min-h-[300px] bg-gray-100 rounded-sm flex items-center justify-center text-gray-400">
                  No Image Provided
               </div>
             )}
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <Typography variant="h2" className={`mb-6 ${textColor} font-bold`}>
              {title}
            </Typography>
            <Typography variant="bodyLarge" className={`mb-8 ${descColor} leading-relaxed`}>
              {description}
            </Typography>
            
            {children}

            <Link 
              to={linkTo}
              className={`inline-flex items-center text-sm font-bold uppercase tracking-widest hover:underline ${isDark ? 'text-[#DAA520]' : 'text-[#8B0000]'}`}
            >
              {linkText} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
};

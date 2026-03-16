/**
 * WineClubCTA Component
 * 
 * Promotional section encouraging users to join The Wire Box wine club subscription.
 * Full-width section with split layout (content + image).
 * 
 * Features:
 * - Configurable background (plum gradient default)
 * - Optional PaperTexture overlay for organic feel
 * - Membership benefits list with hand-drawn bullet points
 * - Primary CTA button to wine club page
 * - Image with organic radius and hover effect
 * - Design token integration (colors, spacing, shadows, radii)
 * - WCAG AA contrast compliance
 * - Dark mode support
 * - Mobile-first responsive layout
 * 
 * Props:
 * @param {string} headline - Main headline text (default: "The Wire Box")
 * @param {string} subheadline - Subheadline/eyebrow (default: "Exclusive Wine Club")
 * @param {string} description - Description paragraph
 * @param {string[]} benefits - Array of membership benefits
 * @param {string} ctaText - CTA button text (default: "Join the Club")
 * @param {string} ctaLink - CTA button link (default: "/wine-club")
 * @param {string} image - Image URL for right side
 * @param {string} imageAlt - Image alt text
 * @param {boolean} showPaperTexture - Show paper texture overlay (default: false)
 * @param {'light' | 'dark' | 'plum'} variant - Background variant (default: 'plum')
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { Link } from 'react-router';
import { PaperTexture } from '../decorative/PaperTexture';
import { Wine } from 'lucide-react';

interface WineClubCTAProps {
  headline?: string;
  subheadline?: string;
  description?: string;
  benefits?: string[];
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  imageAlt?: string;
  showPaperTexture?: boolean;
  variant?: 'light' | 'dark' | 'plum';
}

export const WineClubCTA: React.FC<WineClubCTAProps> = ({
  headline = 'The Wire Box',
  subheadline = 'Exclusive Wine Club',
  description = 'Join our family wine club and receive hand-selected wines, artisan cheese, and craft spirits delivered to your door every month. Curated by Pieter himself, each box tells a story of our farm.',
  benefits = [
    'Monthly curated wine, spirits & cheese selection',
    '15% member discount on all farm products',
    'Exclusive access to small-batch releases',
    'Priority booking for farm events & tastings',
    'Free shipping on all Wire Box deliveries',
    'Quarterly farm tour invitations for members'
  ],
  ctaText = 'Join the Club',
  ctaLink = '/wine-club',
  image = 'https://images.unsplash.com/photo-1595591639066-25b7c61e17e2?auto=format&fit=crop&q=80',
  imageAlt = 'Wine Club Collection - Handcrafted Wines selection',
  showPaperTexture = false,
  variant = 'plum'
}) => {
  // Background classes based on variant
  const backgroundClasses = {
    light: 'bg-[var(--twb-color-bg-secondary)]',
    dark: 'bg-[var(--twb-color-ink)]',
    plum: 'bg-gradient-to-r from-[var(--twb-color-plum)] to-[var(--twb-color-plum)]/90'
  };

  // Text color classes based on variant
  const textClasses = {
    light: 'text-[var(--twb-color-text-primary)]',
    dark: 'text-white',
    plum: 'text-white'
  };

  return (
    <section className={`relative py-[var(--twb-spacing-section-y)] ${backgroundClasses[variant]} overflow-hidden`}>
      {/* Optional Paper Texture Overlay */}
      {showPaperTexture && (
        <div className="absolute inset-0 pointer-events-none opacity-5" aria-hidden="true">
          <PaperTexture />
        </div>
      )}

      <Container variant="site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--twb-spacing-12)] items-center relative z-10">
          {/* Left Column: Content */}
          <div className="space-y-[var(--twb-spacing-6)]">
            {/* Subheadline with Wine Icon */}
            <div className="flex items-center gap-3">
              <Wine 
                size={20} 
                className="text-[var(--twb-color-gold)]" 
                aria-hidden="true"
              />
              <Typography 
                variant="caption" 
                className={`uppercase tracking-widest ${variant === 'light' ? 'text-[var(--twb-color-plum)]' : 'text-[var(--twb-color-gold)]'}`}
              >
                {subheadline}
              </Typography>
            </div>

            {/* Headline */}
            <Typography 
              variant="h2" 
              className={`font-serif ${textClasses[variant]}`}
            >
              {headline}
            </Typography>

            {/* Description */}
            <Typography 
              variant="bodyLarge" 
              className={variant === 'light' ? 'text-[var(--twb-color-text-secondary)]' : 'text-white/90'}
            >
              {description}
            </Typography>

            {/* Benefits List */}
            <ul className="space-y-[var(--twb-spacing-3)]" role="list">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* Hand-drawn bullet point (organic circle) */}
                  <span 
                    className={`flex-shrink-0 w-2 h-2 rounded-full mt-1.5 ${
                      variant === 'light' 
                        ? 'bg-[var(--twb-color-plum)]' 
                        : 'bg-[var(--twb-color-gold)]'
                    }`}
                    aria-hidden="true"
                  />
                  <span className={variant === 'light' ? 'text-[var(--twb-color-text-primary)]' : 'text-white/90'}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-[var(--twb-spacing-4)]">
              <Link to={ctaLink}>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto sm:min-w-[200px] shadow-[var(--twb-shadow-lg)] hover:shadow-[var(--twb-shadow-xl)] transition-shadow"
                >
                  {ctaText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-[var(--twb-radius-organic-2)] shadow-[var(--twb-shadow-lg)] group">
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle overlay for depth */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-[var(--twb-color-ink)]/30 to-transparent pointer-events-none" 
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
import React from 'react';
import { CorporateFooter } from './CorporateFooter';
import { ShopFooter } from './ShopFooter';
import { ExperiencesFooter } from './ExperiencesFooter';

interface FooterProps {
  variant?: 'corporate' | 'shop' | 'experiences';
}

/**
 * Footer Component
 * 
 * A switcher component that renders the appropriate Footer variant based on the route context.
 * 
 * Variants:
 * - corporate: Standard footer with Company links.
 * - shop: Shop-specific footer (Payment methods, Shop links).
 * - experiences: Experiences-specific footer (if needed, currently falls back or uses custom).
 * 
 * @param {FooterProps} props - Variant selection.
 */
export const Footer: React.FC<FooterProps> = ({ variant = 'corporate' }) => {
  if (variant === 'shop') return <ShopFooter />;
  if (variant === 'experiences') return <ExperiencesFooter />;
  return <CorporateFooter />;
};


import React from 'react';
import { CorporateHeader } from './CorporateHeader';
import { ShopHeader } from './ShopHeader';
import { ExperiencesHeader } from './ExperiencesHeader';
import { WineClubHeader } from './WineClubHeader';

interface HeaderProps {
  variant?: 'corporate' | 'shop' | 'experiences' | 'events' | 'wine-club';
}

/**
 * Header Component
 * 
 * A switcher component that renders the appropriate Header variant based on the route context.
 * 
 * Variants:
 * - corporate: Standard navigation (Company, Brands, etc.).
 * - shop: E-commerce navigation (Cart, Account, Shop Categories).
 * - experiences/events: Experience-focused header.
 * - wine-club: Wine Club specific header.
 * 
 * @param {HeaderProps} props - Variant selection.
 */
export const Header: React.FC<HeaderProps> = ({ variant = 'corporate' }) => {
  if (variant === 'shop') return <ShopHeader />;
  if (variant === 'experiences' || variant === 'events') return <ExperiencesHeader />;
  if (variant === 'wine-club') return <WineClubHeader />;
  return <CorporateHeader />;
};


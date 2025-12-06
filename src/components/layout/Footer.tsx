import React from 'react';
import { CorporateFooter } from './CorporateFooter';
import { ShopFooter } from './ShopFooter';
import { ExperiencesFooter } from './ExperiencesFooter';

interface FooterProps {
  variant?: 'corporate' | 'shop' | 'experiences';
}

export const Footer: React.FC<FooterProps> = ({ variant = 'corporate' }) => {
  if (variant === 'shop') return <ShopFooter />;
  if (variant === 'experiences') return <ExperiencesFooter />;
  return <CorporateFooter />;
};


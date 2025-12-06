import React from 'react';
import { CorporateFooter } from './CorporateFooter';
import { ShopFooter } from './ShopFooter';

interface FooterProps {
  variant?: 'corporate' | 'shop';
}

export const Footer: React.FC<FooterProps> = ({ variant = 'corporate' }) => {
  return variant === 'shop' ? <ShopFooter /> : <CorporateFooter />;
};


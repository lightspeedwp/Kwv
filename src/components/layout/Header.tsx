import React from 'react';
import { CorporateHeader } from './CorporateHeader';
import { ShopHeader } from './ShopHeader';
import { ExperiencesHeader } from './ExperiencesHeader';

interface HeaderProps {
  variant?: 'corporate' | 'shop' | 'experiences';
}

export const Header: React.FC<HeaderProps> = ({ variant = 'corporate' }) => {
  if (variant === 'shop') return <ShopHeader />;
  if (variant === 'experiences') return <ExperiencesHeader />;
  return <CorporateHeader />;
};


import React from 'react';
import { CorporateHeader } from './CorporateHeader';
import { ShopHeader } from './ShopHeader';

interface HeaderProps {
  variant?: 'corporate' | 'shop';
}

export const Header: React.FC<HeaderProps> = ({ variant = 'corporate' }) => {
  return variant === 'shop' ? <ShopHeader /> : <CorporateHeader />;
};


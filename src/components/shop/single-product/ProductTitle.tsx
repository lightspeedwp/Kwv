import React from 'react';
import { Typography } from '../../common/Typography';

interface ProductTitleProps {
  title: string;
  brand?: string;
}

/**
 * ProductTitle Component
 * 
 * Displays the main H1 title for the product page.
 * Optionally displays the Brand name above the title as a badge/eyebrow.
 * 
 * @param {ProductTitleProps} props - Product title and brand name.
 */
export const ProductTitle: React.FC<ProductTitleProps> = ({ title, brand }) => {
  return (
    <div className="mb-4">
      {brand && (
        <Typography variant="caption" className="text-[#8B0000] uppercase tracking-widest mb-2 font-bold block">
          {brand}
        </Typography>
      )}
      <Typography variant="h1" className="text-3xl md:text-4xl lg:text-5xl leading-tight text-[#2C1810]">
        {title}
      </Typography>
    </div>
  );
};

import React from 'react';
import { Typography } from '../../common/Typography';

interface ProductPriceProps {
  price: number;
  salePrice?: number;
}

/**
 * ProductPrice Component
 * 
 * Displays the product price with support for sale pricing.
 * Shows original price with strikethrough if a sale price is present.
 * 
 * @param {ProductPriceProps} props - Regular price and optional sale price.
 */
export const ProductPrice: React.FC<ProductPriceProps> = ({ price, salePrice }) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      {salePrice ? (
        <>
          <Typography variant="h3" className="!text-2xl text-[#2C1810]">
            R {salePrice.toFixed(2)}
          </Typography>
          <span className="text-lg text-gray-400 line-through">
             R {price.toFixed(2)}
          </span>
        </>
      ) : (
        <Typography variant="h3" className="!text-2xl text-[#2C1810]">
           R {price.toFixed(2)}
        </Typography>
      )}
    </div>
  );
};

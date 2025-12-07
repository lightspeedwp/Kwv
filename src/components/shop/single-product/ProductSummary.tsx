import React from 'react';
import { Typography } from '../../common/Typography';

interface ProductSummaryProps {
  summary: string;
}

/**
 * ProductSummary Component
 * 
 * Renders the short description/excerpt of the product.
 * Uses the typography system for consistent readability.
 * 
 * @param {ProductSummaryProps} props - HTML or text summary string.
 */
export const ProductSummary: React.FC<ProductSummaryProps> = ({ summary }) => {
  return (
    <div className="prose prose-sm md:prose-base text-gray-600 mb-8 max-w-none">
       <Typography variant="body" className="leading-relaxed">
         {summary}
       </Typography>
    </div>
  );
};

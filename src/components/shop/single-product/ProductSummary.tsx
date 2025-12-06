import React from 'react';
import { Typography } from '../../common/Typography';

interface ProductSummaryProps {
  summary: string;
}

export const ProductSummary: React.FC<ProductSummaryProps> = ({ summary }) => {
  return (
    <div className="prose prose-sm md:prose-base text-gray-600 mb-8 max-w-none">
       <Typography variant="body" className="leading-relaxed">
         {summary}
       </Typography>
    </div>
  );
};

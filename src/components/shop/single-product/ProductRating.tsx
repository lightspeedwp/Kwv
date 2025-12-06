import React from 'react';
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  reviewCount: number;
}

export const ProductRating: React.FC<ProductRatingProps> = ({ rating, reviewCount }) => {
  return (
    <div className="flex items-center gap-1 mb-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star 
          key={i} 
          size={16} 
          fill={i <= rating ? "#DAA520" : "none"} 
          color={i <= rating ? "#DAA520" : "#ccc"} 
        />
      ))}
      <span className="text-sm text-gray-500 ml-2 font-medium border-b border-gray-300 pb-0.5 hover:text-[#8B0000] cursor-pointer transition-colors">
        ({reviewCount} customer reviews)
      </span>
    </div>
  );
};

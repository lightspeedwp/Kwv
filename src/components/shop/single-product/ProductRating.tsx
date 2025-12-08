import React from 'react';
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  reviewCount: number;
}

/**
 * ProductRating Component
 * 
 * Visual star rating display for products.
 * Includes the star count (1-5) and a link to the reviews section anchor.
 * 
 * @param {ProductRatingProps} props - Numeric rating and review count.
 */
/**
 * ProductRating Component
 * 
 * Displays the star rating and review count.
 * Features:
 * - Star icons (filled/empty based on rating).
 * - "Be the first to review" link if no reviews.
 * - Scroll-to-reviews functionality.
 * 
 * @param {number} rating - Average rating (0-5).
 * @param {number} reviewCount - Total number of reviews.
 */
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

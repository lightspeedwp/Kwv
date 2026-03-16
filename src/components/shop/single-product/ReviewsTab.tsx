import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '../../common/Button';
import { Typography } from '../../common/Typography';

/**
 * ReviewsTab Component
 * 
 * The content for the "Reviews" tab on the Product Page.
 * Features:
 * - List of existing reviews.
 * - Form for submitting a new review.
 * - Star rating input.
 */
/**
 * ReviewsTab Component
 * 
 * The content for the "Reviews" tab on the Single Product page.
 * Features:
 * - List of existing reviews (mocked).
 * - "Add a Review" form with Star Rating input.
 * - Submission handling (mocked).
 */
export const ReviewsTab: React.FC = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="space-y-12">
      {/* Reviews List */}
      <div className="space-y-8">
        <div className="border-b border-gray-100 pb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} fill="var(--twb-color-gold)" color="var(--twb-color-gold)" />
              ))}
            </div>
            <Typography variant="h4" className="text-sm font-bold">Great Wine!</Typography>
          </div>
          <Typography variant="body" className="text-gray-600 mb-2">
            "Absolutely delicious. Will buy again."
          </Typography>
          <p className="text-xs text-gray-400">By <span className="font-semibold">John Doe</span> (Verified Owner) - Dec 12, 2024</p>
        </div>
      </div>

      {/* Review Form */}
      <div className="bg-gray-50 p-8 rounded-sm">
        <Typography variant="h3" className="mb-2">Add a review</Typography>
        <p className="text-sm text-gray-500 mb-6 italic">
          Note: Reviews can only be submitted by verified customers who have purchased this product.
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <button 
                  key={i} 
                  type="button"
                  onClick={() => setRating(i)}
                  className="hover:scale-110 transition-transform"
                >
                  <Star 
                    size={20} 
                    fill={i <= rating ? "var(--twb-color-gold)" : "none"} 
                    color={i <= rating ? "var(--twb-color-gold)" : "#9CA3AF"} 
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your review</label>
            <textarea 
              rows={4}
              className="w-full border border-gray-300 rounded-sm p-3 focus:ring-1 focus:ring-[var(--twb-color-plum)] focus:border-[var(--twb-color-plum)] outline-none"
              placeholder="Tell us what you liked or didn't like..."
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input type="text" className="w-full border border-gray-300 rounded-sm p-3 focus:ring-1 focus:ring-[var(--twb-color-plum)] focus:border-[var(--twb-color-plum)] outline-none" />
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" className="w-full border border-gray-300 rounded-sm p-3 focus:ring-1 focus:ring-[var(--twb-color-plum)] focus:border-[var(--twb-color-plum)] outline-none" />
             </div>
          </div>

          <Button type="submit" variant="primary">Submit Review</Button>
        </form>
      </div>
    </div>
  );
};
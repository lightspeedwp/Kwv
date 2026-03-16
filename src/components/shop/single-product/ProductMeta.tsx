import React from 'react';

interface ProductMetaProps {
  sku: string;
  categories?: string[];
  tags?: string[];
}

/**
 * ProductMeta Component
 * 
 * Displays metadata about the product such as SKU, Categories, and Tags.
 * Renders categories and tags as clickable links (visual-only in prototype).
 * 
 * @param {ProductMetaProps} props - SKU, categories array, tags array.
 */
/**
 * ProductMeta Component
 * 
 * Displays metadata about the product.
 * Features:
 * - SKU (Stock Keeping Unit).
 * - Categories list (linked).
 * - Tags list (linked).
 * 
 * @param {ProductMetaProps} props - SKU, categories, and tags arrays.
 */
export const ProductMeta: React.FC<ProductMetaProps> = ({ sku, categories, tags }) => {
  return (
    <div className="space-y-2 text-sm text-gray-500 mb-8">
      <div className="flex gap-2">
        <span className="font-bold text-gray-900 min-w-[80px]">SKU:</span> 
        <span className="text-gray-600">{sku}</span>
      </div>
      
      {categories && categories.length > 0 && (
        <div className="flex gap-2">
          <span className="font-bold text-gray-900 min-w-[80px]">Category:</span> 
          <span className="text-gray-600">
             {categories.map((cat, i) => (
               <React.Fragment key={cat}>
                 <span className="hover:text-[var(--twb-color-plum)] cursor-pointer transition-colors">{cat}</span>
                 {i < categories.length - 1 && ", "}
               </React.Fragment>
             ))}
          </span>
        </div>
      )}

      {tags && tags.length > 0 && (
        <div className="flex gap-2">
          <span className="font-bold text-gray-900 min-w-[80px]">Tags:</span> 
          <span className="text-gray-600">
             {tags.map((tag, i) => (
               <React.Fragment key={tag}>
                 <span className="hover:text-[var(--twb-color-plum)] cursor-pointer transition-colors">{tag}</span>
                 {i < tags.length - 1 && ", "}
               </React.Fragment>
             ))}
          </span>
        </div>
      )}
    </div>
  );
};
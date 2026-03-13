import React from 'react';
import { Typography } from '../../common/Typography';
import { ProductCard } from '../common/ProductCard';

// Reusing the type from ProductCard if possible, or defining a compatible one
interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  inStock: boolean;
  salePrice?: number;
  badges?: string[];
  category?: string;
}

interface RelatedProductsProps {
  products: Product[];
  title?: string;
}

/**
 * RelatedProducts Component
 * 
 * A section displaying a grid of suggested products.
 * Typically used at the bottom of the Product Detail page.
 * 
 * @param {RelatedProductsProps} props - Array of product objects.
 */
export const RelatedProducts: React.FC<RelatedProductsProps> = ({ products, title = "You Might Also Like" }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="mt-20 border-t border-gray-100 pt-16">
       <Typography variant="h2" className="mb-8 text-center md:text-left">{title}</Typography>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
         {products.map(p => <ProductCard key={p.id} product={p} />)}
       </div>
    </div>
  );
};
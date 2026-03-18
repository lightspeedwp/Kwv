import React from 'react';
import { Link } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import { Typography } from '../../common/Typography';
import { Button } from '../../common/Button';
import { COLORS } from '../../../constants/theme';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { BrushStrokeBorder } from '../../decorative/BrushStrokeBorder';
import { PaperTexture } from '../../decorative/PaperTexture';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  salePrice?: number;
  image: string;
  inStock: boolean;
  badges?: string[];
}

interface ProductCardProps {
  product: Product;
}

/**
 * ProductCard Component
 * 
 * The primary card component for displaying products in grids (Shop, Search, Related Products).
 * Features:
 * - Product Image with hover zoom effect.
 * - Badges (Sale, Awards, etc.).
 * - Quick Add button (Desktop).
 * - Price display (handling sale prices).
 * - "Add to Cart" button (Mobile).
 */
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-[var(--twb-color-bg-tertiary)] rounded-[var(--twb-radius-organic-md)] overflow-hidden shadow-[var(--twb-shadow-md)] hover:shadow-[var(--twb-shadow-lg)] transition-all duration-300 flex flex-col h-full">
      {/* Hand-drawn border overlay */}
      <BrushStrokeBorder 
        variant="wine-label" 
        color="var(--twb-color-plum)" 
        opacity={0.3}
        strokeWidth={1.5}
      />
      
      {/* Subtle paper texture */}
      <PaperTexture intensity="subtle" opacity={0.03} />
      
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-[var(--twb-color-bg-muted)]">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.badges?.map(badge => (
            <span 
              key={badge} 
              className="relative bg-[var(--twb-color-gold)] text-[var(--twb-color-ink)] text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-[4px_8px_6px_9px] shadow-sm"
            >
              {badge}
            </span>
          ))}
          {product.salePrice && (
            <span className="relative bg-[var(--twb-color-plum)] text-[var(--twb-color-text-on-dark)] text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-[4px_8px_6px_9px] shadow-sm">
              Sale
            </span>
          )}
        </div>

        {/* Quick Add (Desktop) */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300 hidden lg:block">
             <Button 
               fullWidth 
               variant="primary" 
               className="!py-4"
               disabled={!product.inStock}
             >
               {product.inStock ? 'Add to Cart' : 'Out of Stock'}
             </Button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-[var(--twb-spacing-4)] flex flex-col flex-grow relative z-10">
        <Typography variant="caption" className="uppercase tracking-wider mb-1 text-[var(--twb-color-text-muted)]">
          {product.brand}
        </Typography>
        
        <Link to={`/product/${product.id}`} className="hover:text-[var(--twb-color-plum)] dark:hover:text-[var(--twb-color-gold)] transition-colors mb-2">
          <Typography variant="h3" className="!text-lg line-clamp-2 text-[var(--twb-color-text-primary)]">
            {product.name}
          </Typography>
        </Link>

        <div className="mt-auto pt-[var(--twb-spacing-4)] flex items-baseline gap-2">
          {product.salePrice ? (
            <>
              <span className="text-[var(--twb-color-plum)] dark:text-[var(--twb-color-gold)] font-bold text-lg">
                R {product.salePrice.toFixed(2)}
              </span>
              <span className="text-[var(--twb-color-text-muted)] line-through text-sm">
                R {product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-[var(--twb-color-text-primary)] font-bold text-lg">
              R {product.price.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Mobile Add Button */}
        <button 
          className="lg:hidden mt-[var(--twb-spacing-4)] w-full flex items-center justify-center gap-2 bg-[var(--twb-color-bg-secondary)] py-3 text-sm font-medium text-[var(--twb-color-text-primary)] hover:bg-[var(--twb-color-bg-muted)] active:bg-[var(--twb-color-plum)] active:text-[var(--twb-color-text-on-dark)] rounded-[var(--twb-radius-sm)] transition-colors disabled:opacity-50"
          disabled={!product.inStock}
        >
          <ShoppingCart size={16} />
          {product.inStock ? 'Add' : 'No Stock'}
        </button>
      </div>
    </div>
  );
};
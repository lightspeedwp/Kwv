import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { COLORS } from '../../constants/theme';
import { ImageWithFallback } from '../figma/ImageWithFallback';

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

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.badges?.map(badge => (
            <span key={badge} className="bg-[#DAA520] text-[#2C1810] text-xs font-bold px-2 py-1 uppercase tracking-wider">
              {badge}
            </span>
          ))}
          {product.salePrice && (
            <span className="bg-[#8B0000] text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
              Sale
            </span>
          )}
        </div>

        {/* Quick Add (Desktop) */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden lg:block">
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
      <div className="p-4 flex flex-col flex-grow">
        <Typography variant="caption" className="uppercase tracking-wider mb-1 text-gray-500">
          {product.brand}
        </Typography>
        
        <Link to={`/product/${product.id}`} className="hover:text-[#8B0000] transition-colors mb-2">
          <Typography variant="h3" className="!text-lg line-clamp-2">
            {product.name}
          </Typography>
        </Link>

        <div className="mt-auto pt-4 flex items-baseline gap-2">
          {product.salePrice ? (
            <>
              <span className="text-[#8B0000] font-bold text-lg">R {product.salePrice.toFixed(2)}</span>
              <span className="text-gray-400 line-through text-sm">R {product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-[#2C1810] font-bold text-lg">R {product.price.toFixed(2)}</span>
          )}
        </div>
        
        {/* Mobile Add Button */}
        <button 
          className="lg:hidden mt-4 w-full flex items-center justify-center gap-2 bg-gray-100 py-3 text-sm font-medium text-gray-900 active:bg-gray-200"
          disabled={!product.inStock}
        >
          <ShoppingCart size={16} />
          {product.inStock ? 'Add' : 'No Stock'}
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Heart, Share2 } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [activeImage, setActiveImage] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="aspect-[3/4] bg-gray-50 overflow-hidden relative group">
        <ImageWithFallback 
          src={images[activeImage]} 
          alt={productName} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-3">
          <button className="p-2 bg-white rounded-full shadow-md hover:text-[#8B0000] transition-colors">
            <Heart size={20} />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:text-[#8B0000] transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>
      
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveImage(idx)}
              className={`w-20 h-20 flex-shrink-0 border-2 ${activeImage === idx ? 'border-[#8B0000]' : 'border-transparent'} transition-all`}
            >
              <ImageWithFallback src={img} alt={`${productName} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

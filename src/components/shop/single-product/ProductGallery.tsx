import React, { useState } from 'react';
import { Heart, Share2, Maximize2, X } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { AnimatePresence, motion } from 'motion/react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

/**
 * ProductGallery Component
 * 
 * An interactive image gallery for the Product Detail page.
 * Features:
 * - Large main image display.
 * - Thumbnail strip navigation.
 * - Lightbox modal for full-screen viewing.
 * - Zoom on hover.
 * - Image actions (Wishlist, Share, Expand).
 * 
 * @param {ProductGalleryProps} props - Array of image URLs and product name.
 */
export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div 
          className="aspect-[3/4] bg-gray-50 overflow-hidden relative group cursor-zoom-in"
          onClick={() => setIsLightboxOpen(true)}
        >
          <ImageWithFallback 
            src={images[activeImage]} 
            alt={productName} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <button 
              className="p-2 bg-white rounded-full shadow-md hover:text-[#8B0000] transition-colors"
              onClick={(e) => { e.stopPropagation(); /* Add wishlist logic */ }}
            >
              <Heart size={20} />
            </button>
            <button 
              className="p-2 bg-white rounded-full shadow-md hover:text-[#8B0000] transition-colors"
              onClick={(e) => { e.stopPropagation(); /* Add share logic */ }}
            >
              <Share2 size={20} />
            </button>
            <button 
              className="p-2 bg-white rounded-full shadow-md hover:text-[#8B0000] transition-colors"
              onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(true); }}
            >
              <Maximize2 size={20} />
            </button>
          </div>
        </div>
        
        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(idx)}
                className={`w-20 h-20 flex-shrink-0 border-2 rounded-sm overflow-hidden ${activeImage === idx ? 'border-[#8B0000]' : 'border-transparent'} transition-all`}
              >
                <ImageWithFallback src={img} alt={`${productName} thumbnail ${idx + 1}`} className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={32} />
            </button>
            
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
               <div className="relative w-full h-full">
                  <ImageWithFallback 
                    src={images[activeImage]} 
                    alt={productName} 
                    className="w-full h-full object-contain"
                  />
               </div>
               
               {/* Lightbox Thumbnails */}
               {images.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto max-w-full pb-2">
                    {images.map((img, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setActiveImage(idx)}
                        className={`w-16 h-16 flex-shrink-0 border-2 rounded-sm overflow-hidden ${activeImage === idx ? 'border-white' : 'border-transparent opacity-50 hover:opacity-100'} transition-all`}
                      >
                        <ImageWithFallback src={img} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
               )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

# Quick View Modal Component

**Category:** Components  
**Domain:** E-commerce Product Quick View  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Quick View modal allows customers to preview product details **without leaving the current page**, reducing friction and improving conversion. It provides essential information while maintaining browsing context.

**Quick View Features:**
- Product image gallery
- Key details (name, price, vintage, rating)
- Add to cart functionality
- Size/quantity selector
- Link to full product page
- Keyboard accessible (Esc to close, Tab navigation)
- Focus management (trap focus inside modal)

**When to Use:**
- ✅ Product grid/catalog pages
- ✅ Search results
- ✅ Related products sections
- ❌ Single product pages (use full page instead)
- ❌ Mobile (consider full page for better UX)

---

## Implementation

### Full Quick View Modal

```tsx
/**
 * QuickViewModal Component
 * 
 * Product quick view overlay with essential details and add-to-cart.
 * Uses Radix UI Dialog for accessibility.
 * 
 * Features:
 * - Image carousel
 * - Product details
 * - Quantity selector
 * - Add to cart
 * - View full details link
 * - Keyboard accessible
 * - Focus trap
 * 
 * @param {Object} props
 * @param {Wine} props.wine - Wine product data
 * @param {boolean} props.isOpen - Modal open state
 * @param {Function} props.onClose - Close handler
 */

import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ChevronLeft, ChevronRight, Plus, Minus, Star, Heart, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { cn } from '../utils/cn';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import type { Wine } from '../types';

interface QuickViewModalProps {
  wine: Wine | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ wine, isOpen, onClose }: QuickViewModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isAdding } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  // Reset state when wine changes
  useEffect(() => {
    setSelectedImageIndex(0);
    setQuantity(1);
  }, [wine?.id]);
  
  // Handle keyboard navigation for image gallery
  useEffect(() => {
    if (!isOpen || !wine) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex(prev => 
          prev > 0 ? prev - 1 : (wine.images?.length || 1) - 1
        );
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex(prev => 
          prev < (wine.images?.length || 1) - 1 ? prev + 1 : 0
        );
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, wine]);
  
  const handleAddToCart = async () => {
    if (!wine) return;
    
    await addToCart(wine, quantity);
    // Optionally close modal after adding
    // onClose();
  };
  
  if (!wine) return null;
  
  const images = wine.images || [wine.image];
  
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
        </Dialog.Overlay>
        
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl max-h-[90vh] bg-white rounded-twb-lg shadow-twb-2xl overflow-hidden z-50 focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close button */}
            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full shadow-twb-md hover:shadow-twb-lg transition-shadow"
                aria-label="Close quick view"
              >
                <X className="h-5 w-5 text-[var(--twb-color-ink)]" />
              </button>
            </Dialog.Close>
            
            {/* Modal content */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[90vh] overflow-y-auto">
              
              {/* Left: Image Gallery */}
              <div className="relative bg-[var(--twb-color-paper)] p-8">
                
                {/* Badges */}
                <div className="absolute top-8 left-8 z-10 flex flex-col gap-2">
                  {wine.isNew && (
                    <span className="inline-block px-3 py-1 bg-[var(--twb-color-clay)] text-white text-xs font-semibold rounded-full shadow-twb-sm">
                      NEW
                    </span>
                  )}
                  {wine.isOrganic && (
                    <span className="inline-block px-3 py-1 bg-[var(--twb-color-vine)] text-white text-xs font-semibold rounded-full shadow-twb-sm">
                      ORGANIC
                    </span>
                  )}
                  {wine.discount && (
                    <span className="inline-block px-3 py-1 bg-[var(--twb-color-plum)] text-white text-xs font-semibold rounded-full shadow-twb-sm">
                      -{wine.discount}%
                    </span>
                  )}
                </div>
                
                {/* Main image */}
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-twb-md bg-white">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImageIndex}
                      src={images[selectedImageIndex]}
                      alt={`${wine.name} - View ${selectedImageIndex + 1}`}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    />
                  </AnimatePresence>
                  
                  {/* Image navigation (if multiple images) */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => setSelectedImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-twb-md hover:shadow-twb-lg transition-shadow"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5 text-[var(--twb-color-ink)]" />
                      </button>
                      
                      <button
                        onClick={() => setSelectedImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-twb-md hover:shadow-twb-lg transition-shadow"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5 text-[var(--twb-color-ink)]" />
                      </button>
                      
                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={cn(
                              "h-2 rounded-full transition-all",
                              selectedImageIndex === index
                                ? "w-8 bg-[var(--twb-color-plum)]"
                                : "w-2 bg-white/60 hover:bg-white"
                            )}
                            aria-label={`View image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                {/* Thumbnail gallery */}
                {images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {images.slice(0, 4).map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={cn(
                          "aspect-square overflow-hidden rounded-twb-sm border-2 transition-all",
                          selectedImageIndex === index
                            ? "border-[var(--twb-color-plum)]"
                            : "border-transparent hover:border-[var(--twb-border-secondary)]"
                        )}
                      >
                        <img
                          src={image}
                          alt={`${wine.name} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Right: Product Details */}
              <div className="p-8 flex flex-col">
                
                {/* Category */}
                <div className="inline-block mb-3 px-3 py-1 bg-[var(--twb-color-vine)]/10 rounded-full self-start">
                  <span className="text-xs font-medium text-[var(--twb-color-vine)] uppercase tracking-wide">
                    {wine.categoryName}
                  </span>
                </div>
                
                {/* Product name */}
                <Dialog.Title className="text-3xl font-serif mb-2 text-[var(--twb-color-ink)]">
                  {wine.name}
                </Dialog.Title>
                
                {/* Vintage & region */}
                <Dialog.Description className="text-lg text-[var(--twb-color-vine)] mb-4">
                  {wine.vintage} • {wine.region}
                </Dialog.Description>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < Math.floor(wine.rating)
                            ? "fill-[var(--twb-color-gold)] text-[var(--twb-color-gold)]"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-[var(--twb-color-vine)]">
                    {wine.rating} ({wine.reviewCount} reviews)
                  </span>
                </div>
                
                {/* Price */}
                <div className="mb-6">
                  {wine.discount ? (
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-semibold text-[var(--twb-color-plum)]">
                        R{wine.salePrice}
                      </span>
                      <span className="text-xl text-[var(--twb-color-vine)] line-through">
                        R{wine.price}
                      </span>
                      <span className="inline-block px-2 py-1 bg-[var(--twb-color-plum)] text-white text-xs font-semibold rounded-full">
                        Save {wine.discount}%
                      </span>
                    </div>
                  ) : (
                    <span className="text-3xl font-semibold text-[var(--twb-color-plum)]">
                      R{wine.price}
                    </span>
                  )}
                </div>
                
                {/* Short description */}
                {wine.shortDescription && (
                  <p className="text-[var(--twb-color-ink)] mb-6 leading-relaxed">
                    {wine.shortDescription}
                  </p>
                )}
                
                {/* Key specs */}
                <div className="grid grid-cols-2 gap-3 mb-6 p-4 bg-[var(--twb-color-paper)] rounded-twb-md">
                  <div>
                    <p className="text-xs text-[var(--twb-color-vine)] mb-1 uppercase tracking-wide">Alcohol</p>
                    <p className="font-semibold text-[var(--twb-color-ink)]">{wine.alcohol}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--twb-color-vine)] mb-1 uppercase tracking-wide">Varietal</p>
                    <p className="font-semibold text-[var(--twb-color-ink)]">{wine.varietal}</p>
                  </div>
                </div>
                
                {/* Stock status */}
                <div className="flex items-center gap-2 mb-6">
                  {wine.inStock ? (
                    <>
                      <div className="h-2 w-2 rounded-full bg-[var(--twb-color-vine)]" />
                      <span className="text-sm text-[var(--twb-color-vine)] font-medium">In Stock</span>
                    </>
                  ) : (
                    <>
                      <div className="h-2 w-2 rounded-full bg-[var(--twb-border-error)]" />
                      <span className="text-sm text-[var(--twb-border-error)] font-medium">Out of Stock</span>
                    </>
                  )}
                </div>
                
                {/* Quantity selector */}
                <div className="mb-6">
                  <label htmlFor="quick-view-quantity" className="block text-sm font-medium text-[var(--twb-color-ink)] mb-2">
                    Quantity
                  </label>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 border border-[var(--twb-border-tertiary)] rounded-twb-sm hover:bg-[var(--twb-color-ink)]/5 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    
                    <input
                      id="quick-view-quantity"
                      type="number"
                      min="1"
                      max="12"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 h-10 text-center border border-[var(--twb-border-tertiary)] rounded-twb-sm text-[var(--twb-color-ink)] font-semibold focus:outline-none focus:border-[var(--twb-color-plum)]"
                    />
                    
                    <button
                      onClick={() => setQuantity(Math.min(12, quantity + 1))}
                      className="p-2 border border-[var(--twb-border-tertiary)] rounded-twb-sm hover:bg-[var(--twb-color-ink)]/5 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={handleAddToCart}
                    disabled={!wine.inStock || isAdding}
                    className="w-full bg-[var(--twb-color-plum)] text-white py-3 rounded-twb-md font-semibold hover:shadow-twb-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ transform: 'rotate(-0.3deg)' }}
                  >
                    {isAdding ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Adding...</span>
                      </>
                    ) : (
                      <span>Add to Cart</span>
                    )}
                  </button>
                  
                  <button
                    onClick={() => toggleWishlist(wine.id)}
                    className="w-full border-2 border-[var(--twb-border-tertiary)] text-[var(--twb-color-ink)] py-3 rounded-twb-md font-medium hover:border-[var(--twb-color-plum)] hover:bg-[var(--twb-color-plum)]/5 transition-colors flex items-center justify-center gap-2"
                  >
                    <Heart
                      className={cn(
                        "h-5 w-5",
                        isInWishlist(wine.id) && "fill-[var(--twb-color-plum)] text-[var(--twb-color-plum)]"
                      )}
                    />
                    <span>
                      {isInWishlist(wine.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    </span>
                  </button>
                </div>
                
                {/* View full details link */}
                <Link
                  to={`/wines/${wine.slug}`}
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 text-[var(--twb-color-plum)] font-medium hover:underline"
                >
                  <span>View Full Details</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
                
              </div>
              
            </div>
            
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

---

## Mobile Quick View Alternative

### Full-Screen Drawer on Mobile

```tsx
/**
 * For mobile devices, use a full-screen drawer instead of modal
 * for better UX (more screen space, easier interaction).
 */
export function MobileQuickView({ wine, isOpen, onClose }: QuickViewModalProps) {
  if (!wine) return null;
  
  return (
    <Sheet.Root open={isOpen} onOpenChange={onClose}>
      <Sheet.Portal>
        <Sheet.Overlay className="fixed inset-0 bg-black/60 z-50" />
        
        <Sheet.Content className="fixed inset-x-0 bottom-0 h-[90vh] bg-white rounded-t-3xl z-50 p-6 overflow-y-auto">
          
          {/* Drag handle */}
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
          
          {/* Close button */}
          <Sheet.Close asChild>
            <button className="absolute top-6 right-6 p-2" aria-label="Close">
              <X className="h-6 w-6" />
            </button>
          </Sheet.Close>
          
          {/* Content (same as desktop but single column) */}
          <div className="space-y-6">
            {/* Image */}
            <div className="aspect-[3/4] overflow-hidden rounded-twb-lg">
              <img
                src={wine.image}
                alt={wine.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Details */}
            <div>
              <h2 className="text-2xl font-serif mb-2">{wine.name}</h2>
              <p className="text-[var(--twb-color-vine)] mb-4">{wine.vintage}</p>
              
              {/* Rating, price, etc. */}
              {/* ... same as desktop ... */}
              
              {/* Add to cart */}
              <button className="w-full bg-[var(--twb-color-plum)] text-white py-4 rounded-twb-md font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
          
        </Sheet.Content>
      </Sheet.Portal>
    </Sheet.Root>
  );
}
```

---

## Success Toast After Add to Cart

### Confirmation Feedback

```tsx
/**
 * Show success toast after adding to cart from quick view.
 * Uses sonner library for toast notifications.
 */
import { toast } from 'sonner@2.0.3';

const handleAddToCart = async () => {
  if (!wine) return;
  
  try {
    await addToCart(wine, quantity);
    
    // Show success toast
    toast.success(
      <div className="flex items-center gap-3">
        <img
          src={wine.image}
          alt={wine.name}
          className="w-12 h-12 object-cover rounded-twb-sm"
        />
        <div>
          <p className="font-medium">Added to cart!</p>
          <p className="text-sm text-[var(--twb-color-vine)]">
            {wine.name} ({quantity})
          </p>
        </div>
      </div>,
      {
        duration: 3000,
        action: {
          label: 'View Cart',
          onClick: () => navigate('/cart'),
        },
      }
    );
  } catch (error) {
    toast.error('Failed to add to cart. Please try again.');
  }
};
```

---

## Accessibility Enhancements

### Focus Management & Keyboard Navigation

```tsx
/**
 * Accessibility features:
 * 
 * ✅ Focus trap inside modal (Radix handles automatically)
 * ✅ Escape key closes modal
 * ✅ Arrow keys navigate image gallery
 * ✅ Tab navigation through all interactive elements
 * ✅ Descriptive labels for screen readers
 * ✅ Focus returns to trigger button on close
 */

// Example: Focus management
import { useRef, useEffect } from 'react';

const firstFocusableElementRef = useRef<HTMLButtonElement>(null);

useEffect(() => {
  if (isOpen && firstFocusableElementRef.current) {
    // Focus first element when modal opens
    firstFocusableElementRef.current.focus();
  }
}, [isOpen]);

// Example: Screen reader announcements
<div role="status" aria-live="polite" className="sr-only">
  {isAdding && 'Adding to cart...'}
  {addedToCart && `${wine.name} added to cart`}
</div>
```

---

## Usage Example

### Triggering Quick View from Product Card

```tsx
function ProductCard({ wine }: { wine: Wine }) {
  const [quickViewWine, setQuickViewWine] = useState<Wine | null>(null);
  
  return (
    <>
      <div className="product-card">
        {/* Product card content */}
        
        <button
          onClick={() => setQuickViewWine(wine)}
          className="quick-view-button"
        >
          Quick View
        </button>
      </div>
      
      <QuickViewModal
        wine={quickViewWine}
        isOpen={!!quickViewWine}
        onClose={() => setQuickViewWine(null)}
      />
    </>
  );
}
```

---

## Related Guidelines

- [Product Card](/guidelines/components/product-card.md) - Product card component
- [UI Library](/guidelines/components/ui-library.md) - Radix Dialog primitives
- [Cart](/guidelines/components/cart.md) - Cart functionality

---

## Changelog

### Version 1.0 (2024-03-13)
- Quick view modal with image gallery created
- Quantity selector implemented
- Add to cart functionality integrated
- Mobile full-screen drawer variant added
- Success toast notification documented
- Accessibility enhancements included
- Keyboard navigation support added

---

**Questions or Issues?**  
Contact the component library team for quick view implementation support.

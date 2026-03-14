# Product Card Component

**Category:** Components  
**Domain:** E-commerce Product Display  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The product card is the **most reused component** across The Wire Brand site, appearing on homepage, shop pages, search results, and related products sections. It balances **visual appeal** with **conversion optimization** while maintaining hand-drawn aesthetic.

**Card Variants:**
1. **Standard Card** - Default product display
2. **Featured Card** - Enlarged, hero treatment
3. **Compact Card** - Smaller, sidebar/related products
4. **Quick View Card** - Interactive overlay
5. **Wishlist Card** - Saved items display

**Card Components:**
- Product image (with hover zoom)
- Badges (new, organic, sale)
- Product name & vintage
- Rating & review count
- Price (with sale price)
- Add to cart button
- Wishlist/favorite button
- Quick view button

---

## Standard Product Card

### Full Implementation

```tsx
/**
 * ProductCard Component
 * 
 * Standard product card with hand-drawn aesthetic and e-commerce features.
 * 
 * Features:
 * - Image with hover zoom
 * - Badges (new, organic, discount)
 * - Wishlist toggle
 * - Quick view modal
 * - Add to cart
 * - Rating display
 * - Price with discount
 * 
 * @param {Object} props
 * @param {Wine} props.wine - Wine product data
 * @param {string} props.variant - Card size variant (standard | featured | compact)
 * @param {Function} props.onQuickView - Quick view callback
 */

import { useState } from 'react';
import { Link } from 'react-router';
import { Heart, Eye, ShoppingCart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../utils/cn';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

export interface Wine {
  id: string;
  slug: string;
  name: string;
  vintage: number;
  price: number;
  salePrice?: number;
  discount?: number;
  image: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  category: string;
  categoryName: string;
  isNew?: boolean;
  isOrganic?: boolean;
  inStock: boolean;
  shortDescription?: string;
}

interface ProductCardProps {
  wine: Wine;
  variant?: 'standard' | 'featured' | 'compact';
  onQuickView?: (wine: Wine) => void;
  className?: string;
}

export function ProductCard({
  wine,
  variant = 'standard',
  onQuickView,
  className,
}: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, isAdding } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const cardSizes = {
    standard: 'w-full',
    featured: 'w-full lg:col-span-2 lg:row-span-2',
    compact: 'w-full max-w-xs',
  };
  
  const imageSizes = {
    standard: 'aspect-[3/4]',
    featured: 'aspect-[4/5]',
    compact: 'aspect-square',
  };
  
  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!wine.inStock) return;
    
    await addToCart(wine, 1);
  };
  
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(wine.id);
  };
  
  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onQuickView) {
      onQuickView(wine);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={cn(cardSizes[variant], className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card container with hand-drawn border */}
      <div className="relative h-full bg-white rounded-twb-md overflow-hidden shadow-twb-sm hover:shadow-twb-lg transition-all duration-300 group">
        
        {/* Hand-drawn border SVG overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-30"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            fill="none"
            stroke="var(--twb-border-secondary)"
            strokeWidth="1"
            rx="8"
            className="group-hover:stroke-[var(--twb-color-plum)] transition-colors"
          />
        </svg>
        
        {/* Product Link (wraps entire card) */}
        <Link to={`/wines/${wine.slug}`} className="block h-full">
          
          {/* Image Section */}
          <div className={cn("relative overflow-hidden bg-[var(--twb-color-paper)]", imageSizes[variant])}>
            
            {/* Badges */}
            <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
              {wine.isNew && (
                <span className="inline-block px-3 py-1 bg-[var(--twb-color-clay)] text-white text-xs font-semibold rounded-full shadow-twb-sm">
                  NEW
                </span>
              )}
              
              {wine.isOrganic && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--twb-color-vine)] text-white text-xs font-semibold rounded-full shadow-twb-sm">
                  <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2L6 6L2 7L5.5 10L4.5 14L8 12L11.5 14L10.5 10L14 7L10 6L8 2Z" />
                  </svg>
                  ORGANIC
                </span>
              )}
              
              {wine.discount && (
                <span className="inline-block px-3 py-1 bg-[var(--twb-color-plum)] text-white text-xs font-semibold rounded-full shadow-twb-sm">
                  -{wine.discount}%
                </span>
              )}
            </div>
            
            {/* Wishlist Button */}
            <button
              onClick={handleWishlist}
              className="absolute top-3 right-3 z-20 p-2 bg-white rounded-full shadow-twb-sm hover:shadow-twb-md transition-shadow"
              aria-label={isInWishlist(wine.id) ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart
                className={cn(
                  "h-5 w-5 transition-all",
                  isInWishlist(wine.id)
                    ? "fill-[var(--twb-color-plum)] text-[var(--twb-color-plum)] scale-110"
                    : "text-[var(--twb-color-ink)]"
                )}
              />
            </button>
            
            {/* Product Image */}
            <div className="relative w-full h-full">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-[var(--twb-color-paper)] animate-pulse" />
              )}
              
              <img
                src={wine.image}
                alt={`${wine.name} ${wine.vintage}`}
                className={cn(
                  "w-full h-full object-cover transition-all duration-500",
                  imageLoaded ? 'opacity-100' : 'opacity-0',
                  isHovered ? 'scale-110' : 'scale-100'
                )}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            
            {/* Quick View Button (appears on hover) */}
            {onQuickView && (
              <button
                onClick={handleQuickView}
                className={cn(
                  "absolute inset-x-0 bottom-0 py-3 bg-[var(--twb-color-plum)] text-white font-medium transition-all duration-300 flex items-center justify-center gap-2",
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
              >
                <Eye className="h-4 w-4" />
                <span>Quick View</span>
              </button>
            )}
          </div>
          
          {/* Content Section */}
          <div className="p-5">
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < Math.floor(wine.rating)
                      ? "fill-[var(--twb-color-gold)] text-[var(--twb-color-gold)]"
                      : "text-gray-300"
                  )}
                />
              ))}
              <span className="text-sm text-[var(--twb-color-vine)] ml-1">
                ({wine.reviewCount})
              </span>
            </div>
            
            {/* Product Name */}
            <h3 className={cn(
              "font-serif mb-1 text-[var(--twb-color-ink)] hover:text-[var(--twb-color-plum)] transition-colors line-clamp-2",
              variant === 'featured' ? 'text-2xl' : variant === 'compact' ? 'text-base' : 'text-lg'
            )}>
              {wine.name}
            </h3>
            
            {/* Vintage */}
            <p className={cn(
              "text-[var(--twb-color-vine)] mb-3",
              variant === 'featured' ? 'text-base' : 'text-sm'
            )}>
              {wine.vintage}
            </p>
            
            {/* Featured card description */}
            {variant === 'featured' && wine.shortDescription && (
              <p className="text-[var(--twb-color-vine)] mb-4 line-clamp-2">
                {wine.shortDescription}
              </p>
            )}
            
            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4">
              {wine.discount ? (
                <>
                  <span className={cn(
                    "font-semibold text-[var(--twb-color-plum)]",
                    variant === 'featured' ? 'text-2xl' : 'text-xl'
                  )}>
                    R{wine.salePrice}
                  </span>
                  <span className="text-sm text-[var(--twb-color-vine)] line-through">
                    R{wine.price}
                  </span>
                </>
              ) : (
                <span className={cn(
                  "font-semibold text-[var(--twb-color-plum)]",
                  variant === 'featured' ? 'text-2xl' : 'text-xl'
                )}>
                  R{wine.price}
                </span>
              )}
            </div>
            
          </div>
          
        </Link>
        
        {/* Add to Cart Button (outside Link to prevent nested interaction) */}
        <div className="px-5 pb-5">
          <button
            onClick={handleAddToCart}
            disabled={!wine.inStock || isAdding}
            className={cn(
              "w-full py-3 rounded-twb-md font-medium transition-all duration-300 flex items-center justify-center gap-2",
              wine.inStock
                ? "bg-[var(--twb-color-plum)] text-white hover:shadow-twb-md"
                : "bg-gray-200 text-gray-500 cursor-not-allowed",
              isAdding && "opacity-70"
            )}
            style={{ transform: 'rotate(-0.3deg)' }}
          >
            {isAdding ? (
              <>
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Adding...</span>
              </>
            ) : wine.inStock ? (
              <>
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </>
            ) : (
              <span>Out of Stock</span>
            )}
          </button>
        </div>
        
      </div>
    </motion.div>
  );
}
```

---

## Featured Product Card

### Enlarged Hero Treatment

```tsx
/**
 * FeaturedProductCard Component
 * 
 * Larger card for homepage hero or featured sections.
 * Includes full description and larger imagery.
 */
export function FeaturedProductCard({ wine }: { wine: Wine }) {
  return (
    <div className="relative bg-white rounded-twb-lg overflow-hidden shadow-twb-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        
        {/* Left: Image */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-twb-md">
          <img
            src={wine.image}
            alt={wine.name}
            className="w-full h-full object-cover"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {wine.isNew && (
              <span className="inline-block px-4 py-2 bg-[var(--twb-color-clay)] text-white text-sm font-semibold rounded-full">
                NEW RELEASE
              </span>
            )}
            {wine.isOrganic && (
              <span className="inline-block px-4 py-2 bg-[var(--twb-color-vine)] text-white text-sm font-semibold rounded-full">
                ORGANIC
              </span>
            )}
          </div>
        </div>
        
        {/* Right: Details */}
        <div className="flex flex-col justify-center">
          
          {/* Category */}
          <div className="inline-block mb-4 px-4 py-2 bg-[var(--twb-color-plum)]/10 rounded-full self-start">
            <span className="text-sm font-medium text-[var(--twb-color-plum)] uppercase tracking-wide">
              {wine.categoryName}
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-serif mb-3 text-[var(--twb-color-ink)]">
            {wine.name}
          </h2>
          
          {/* Vintage */}
          <p className="text-xl text-[var(--twb-color-vine)] mb-6">
            {wine.vintage}
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-6 w-6",
                  i < Math.floor(wine.rating)
                    ? "fill-[var(--twb-color-gold)] text-[var(--twb-color-gold)]"
                    : "text-gray-300"
                )}
              />
            ))}
            <span className="text-lg text-[var(--twb-color-vine)] ml-2">
              {wine.rating} ({wine.reviewCount} reviews)
            </span>
          </div>
          
          {/* Description */}
          <p className="text-lg text-[var(--twb-color-ink)] mb-8 leading-relaxed">
            {wine.shortDescription}
          </p>
          
          {/* Price */}
          <div className="mb-8">
            {wine.discount ? (
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-semibold text-[var(--twb-color-plum)]">
                  R{wine.salePrice}
                </span>
                <span className="text-2xl text-[var(--twb-color-vine)] line-through">
                  R{wine.price}
                </span>
              </div>
            ) : (
              <span className="text-4xl font-semibold text-[var(--twb-color-plum)]">
                R{wine.price}
              </span>
            )}
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={`/wines/${wine.slug}`}
              className="flex-1 bg-[var(--twb-color-plum)] text-white py-4 px-6 rounded-twb-md font-semibold text-center hover:shadow-twb-lg transition-shadow"
              style={{ transform: 'rotate(-0.3deg)' }}
            >
              View Details
            </Link>
            
            <button
              onClick={() => addToCart(wine, 1)}
              className="flex-1 border-2 border-[var(--twb-color-plum)] text-[var(--twb-color-plum)] py-4 px-6 rounded-twb-md font-semibold hover:bg-[var(--twb-color-plum)]/5 transition-colors"
            >
              Add to Cart
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
```

---

## Compact Product Card

### Sidebar/Related Products

```tsx
/**
 * CompactProductCard Component
 * 
 * Smaller card for sidebars, related products, or dense grids.
 */
export function CompactProductCard({ wine }: { wine: Wine }) {
  return (
    <Link
      to={`/wines/${wine.slug}`}
      className="flex gap-4 p-4 bg-white rounded-twb-md border border-[var(--twb-border-tertiary)] hover:border-[var(--twb-color-plum)] hover:shadow-twb-md transition-all group"
    >
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-twb-sm bg-[var(--twb-color-paper)]">
        <img
          src={wine.image}
          alt={wine.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-serif text-base mb-1 text-[var(--twb-color-ink)] group-hover:text-[var(--twb-color-plum)] transition-colors line-clamp-2">
          {wine.name}
        </h4>
        
        <p className="text-sm text-[var(--twb-color-vine)] mb-2">
          {wine.vintage}
        </p>
        
        {/* Rating (compact) */}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3 w-3",
                i < Math.floor(wine.rating)
                  ? "fill-[var(--twb-color-gold)] text-[var(--twb-color-gold)]"
                  : "text-gray-300"
              )}
            />
          ))}
        </div>
        
        {/* Price */}
        <p className="text-lg font-semibold text-[var(--twb-color-plum)]">
          R{wine.salePrice || wine.price}
        </p>
      </div>
    </Link>
  );
}
```

---

## Skeleton Loading Card

### Loading State While Fetching

```tsx
/**
 * ProductCardSkeleton Component
 * 
 * Skeleton loading state for product cards.
 */
export function ProductCardSkeleton({ variant = 'standard' }: { variant?: 'standard' | 'featured' | 'compact' }) {
  const imageSizes = {
    standard: 'aspect-[3/4]',
    featured: 'aspect-[4/5]',
    compact: 'aspect-square',
  };
  
  return (
    <div className="bg-white rounded-twb-md overflow-hidden shadow-twb-sm">
      {/* Image skeleton */}
      <div className={cn("bg-gray-200 animate-pulse", imageSizes[variant])} />
      
      {/* Content skeleton */}
      <div className="p-5 space-y-3">
        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
        
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
        
        {/* Vintage */}
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4" />
        
        {/* Price */}
        <div className="h-8 bg-gray-200 rounded animate-pulse w-1/3" />
        
        {/* Button */}
        <div className="h-12 bg-gray-200 rounded-twb-md animate-pulse" />
      </div>
    </div>
  );
}
```

---

## Wishlist Product Card

### Saved Items Display

```tsx
/**
 * WishlistProductCard Component
 * 
 * Card for wishlist page with remove and move-to-cart actions.
 */
export function WishlistProductCard({ wine }: { wine: Wine }) {
  const { addToCart } = useCart();
  const { removeFromWishlist } = useWishlist();
  
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-twb-md border border-[var(--twb-border-tertiary)]">
      
      {/* Image */}
      <Link to={`/wines/${wine.slug}`} className="sm:w-48 flex-shrink-0">
        <div className="aspect-[3/4] overflow-hidden rounded-twb-sm bg-[var(--twb-color-paper)]">
          <img
            src={wine.image}
            alt={wine.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <Link to={`/wines/${wine.slug}`}>
          <h3 className="text-2xl font-serif mb-2 text-[var(--twb-color-ink)] hover:text-[var(--twb-color-plum)] transition-colors">
            {wine.name}
          </h3>
        </Link>
        
        <p className="text-[var(--twb-color-vine)] mb-4">
          {wine.vintage} • {wine.categoryName}
        </p>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.floor(wine.rating)
                  ? "fill-[var(--twb-color-gold)] text-[var(--twb-color-gold)]"
                  : "text-gray-300"
              )}
            />
          ))}
          <span className="text-sm text-[var(--twb-color-vine)]">
            ({wine.reviewCount})
          </span>
        </div>
        
        {/* Price */}
        <p className="text-2xl font-semibold text-[var(--twb-color-plum)] mb-6">
          R{wine.salePrice || wine.price}
        </p>
        
        {/* Stock status */}
        <div className="flex items-center gap-2 mb-6">
          {wine.inStock ? (
            <>
              <div className="h-2 w-2 rounded-full bg-[var(--twb-color-vine)]" />
              <span className="text-sm text-[var(--twb-color-vine)]">In Stock</span>
            </>
          ) : (
            <>
              <div className="h-2 w-2 rounded-full bg-[var(--twb-border-error)]" />
              <span className="text-sm text-[var(--twb-border-error)]">Out of Stock</span>
            </>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              addToCart(wine, 1);
              removeFromWishlist(wine.id);
            }}
            disabled={!wine.inStock}
            className="bg-[var(--twb-color-plum)] text-white px-6 py-3 rounded-twb-md font-medium hover:shadow-twb-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Move to Cart
          </button>
          
          <button
            onClick={() => removeFromWishlist(wine.id)}
            className="border border-[var(--twb-border-tertiary)] text-[var(--twb-color-ink)] px-6 py-3 rounded-twb-md font-medium hover:bg-[var(--twb-color-ink)]/5 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
      
    </div>
  );
}
```

---

## Accessibility Best Practices

### WCAG Compliance for Product Cards

```tsx
/**
 * Accessibility Checklist for Product Cards:
 * 
 * ✅ All images have descriptive alt text
 * ✅ Interactive elements are keyboard accessible (Tab/Enter)
 * ✅ Focus indicators visible (2px ring)
 * ✅ Color contrast meets WCAG AA (4.5:1 minimum)
 * ✅ Button labels are descriptive ("Add to Cart", not just icon)
 * ✅ Screen readers announce card purpose
 * ✅ Touch targets ≥ 44×44px
 * ✅ Loading states communicated (aria-busy, aria-live)
 */

// Example: Accessible product card link
<Link
  to={`/wines/${wine.slug}`}
  aria-label={`View details for ${wine.name} ${wine.vintage}, rated ${wine.rating} stars, priced at R${wine.price}`}
>
  {/* Card content */}
</Link>

// Example: Accessible wishlist button
<button
  onClick={handleWishlist}
  aria-label={isInWishlist(wine.id) 
    ? `Remove ${wine.name} from wishlist` 
    : `Add ${wine.name} to wishlist`
  }
  aria-pressed={isInWishlist(wine.id)}
>
  <Heart className={cn(isInWishlist(wine.id) && "fill-current")} />
</button>

// Example: Stock status for screen readers
<div role="status" aria-live="polite">
  {wine.inStock ? (
    <span className="sr-only">{wine.name} is in stock</span>
  ) : (
    <span className="sr-only">{wine.name} is out of stock</span>
  )}
</div>
```

---

## Performance Optimization

### Image Loading & Code Splitting

```tsx
/**
 * Performance optimizations for product cards:
 * 
 * 1. Lazy load images (loading="lazy")
 * 2. Intersection Observer for animation triggers
 * 3. Skeleton loading states
 * 4. Debounce wishlist/cart actions
 * 5. Memoize cards in lists
 */

// Example: Memoized product card
export const ProductCard = React.memo(function ProductCard({ wine, variant, onQuickView }: ProductCardProps) {
  // Component implementation
}, (prevProps, nextProps) => {
  // Custom comparison: only re-render if wine data changes
  return (
    prevProps.wine.id === nextProps.wine.id &&
    prevProps.wine.price === nextProps.wine.price &&
    prevProps.wine.inStock === nextProps.wine.inStock
  );
});

// Example: Lazy image with blur placeholder
const [imageLoaded, setImageLoaded] = useState(false);

<div className="relative">
  {/* Blur placeholder */}
  {!imageLoaded && (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
  )}
  
  {/* Actual image */}
  <img
    src={wine.image}
    alt={wine.name}
    loading="lazy"
    decoding="async"
    className={cn("transition-opacity duration-300", imageLoaded ? "opacity-100" : "opacity-0")}
    onLoad={() => setImageLoaded(true)}
  />
</div>
```

---

## Usage Examples

### Homepage Featured Section

```tsx
<section className="py-20">
  <Container>
    <h2 className="text-4xl font-serif mb-12">Featured Wines</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredWines.map((wine, index) => (
        <ProductCard
          key={wine.id}
          wine={wine}
          variant={index === 0 ? 'featured' : 'standard'}
          onQuickView={handleQuickView}
        />
      ))}
    </div>
  </Container>
</section>
```

### Shop Page Grid

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {isLoading ? (
    // Skeleton loading
    Array.from({ length: 12 }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))
  ) : (
    // Actual products
    wines.map((wine, index) => (
      <ProductCard
        key={wine.id}
        wine={wine}
        onQuickView={setQuickViewWine}
        style={{ marginTop: index % 2 === 0 ? 0 : '1rem' }} // Stagger
      />
    ))
  )}
</div>
```

---

## Related Guidelines

- [Hand-Drawn Aesthetic](/guidelines/design-tokens/hand-drawn-aesthetic.md) - Visual styling
- [Buttons](/guidelines/design-tokens/buttons.md) - CTA buttons
- [Shop Pattern](/guidelines/patterns/shop-category-pattern.md) - Grid layouts

---

## Changelog

### Version 1.0 (2024-03-13)
- Standard product card created with full features
- Featured card variant for hero sections
- Compact card for sidebars/related products
- Skeleton loading state implemented
- Wishlist card variant added
- Accessibility best practices documented
- Performance optimizations included
- Usage examples provided

---

**Questions or Issues?**  
Contact the component library team for product card implementation support.

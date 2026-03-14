# Single Product Page Pattern

**Category:** Patterns  
**Domain:** Page Templates  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand single product page provides comprehensive wine details while maintaining brand aesthetic. The design balances **product information** with **storytelling** and **conversion optimization**.

**Page Goals:**
1. **Visual product showcase** - Gallery, zoom, multiple angles
2. **Clear product details** - Name, price, vintage, description, specs
3. **Trust signals** - Reviews, awards, organic certification
4. **Add to cart friction-free** - Quantity selector, clear CTA
5. **Storytelling** - Winemaker notes, terroir, food pairing
6. **Related products** - Cross-sell, upsell

**Page Sections:**
1. Breadcrumbs
2. Product Hero (image gallery + details)
3. Product Tabs (description, reviews, specs)
4. Winemaker Notes
5. Food Pairing
6. Related Products

---

## 1. Breadcrumbs

### Navigation Trail

```tsx
export function ProductBreadcrumbs({ wine }: { wine: Wine }) {
  return (
    <Container className="py-4">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-[var(--twb-color-vine)]">
          <li>
            <Link to="/" className="hover:text-[var(--twb-color-plum)] transition-colors">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          
          <li>
            <Link to="/wines" className="hover:text-[var(--twb-color-plum)] transition-colors">
              Wines
            </Link>
          </li>
          
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          
          <li>
            <Link to={`/wines/${wine.category}`} className="hover:text-[var(--twb-color-plum)] transition-colors">
              {wine.categoryName}
            </Link>
          </li>
          
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          
          <li>
            <span className="text-[var(--twb-color-ink)] font-medium" aria-current="page">
              {wine.name}
            </span>
          </li>
        </ol>
      </nav>
    </Container>
  );
}
```

---

## 2. Product Hero

### Image Gallery + Product Details (Split Layout)

```tsx
/**
 * ProductHero Component
 * 
 * Two-column layout: Image gallery (left) + Product details (right).
 */
export function ProductHero({ wine }: { wine: Wine }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  return (
    <Container className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left: Image Gallery */}
        <div>
          {/* Main image */}
          <div className="aspect-[3/4] mb-4 overflow-hidden rounded-twb-lg bg-[var(--twb-color-paper)]">
            <img
              src={wine.images[selectedImage]}
              alt={`${wine.name} - View ${selectedImage + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Thumbnail gallery */}
          <div className="grid grid-cols-4 gap-3">
            {wine.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "aspect-square overflow-hidden rounded-twb-sm border-2 transition-all",
                  selectedImage === index
                    ? "border-[var(--twb-color-plum)]"
                    : "border-[var(--twb-border-tertiary)] hover:border-[var(--twb-border-secondary)]"
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
        </div>
        
        {/* Right: Product Details */}
        <div>
          {/* Badges */}
          <div className="flex items-center gap-2 mb-4">
            {wine.isNew && (
              <span className="inline-block px-3 py-1 bg-[var(--twb-color-clay)] text-white text-xs font-semibold rounded-full">
                NEW RELEASE
              </span>
            )}
            {wine.isOrganic && (
              <span className="inline-block px-3 py-1 bg-[var(--twb-color-vine)] text-white text-xs font-semibold rounded-full">
                CERTIFIED ORGANIC
              </span>
            )}
            {wine.awards?.length > 0 && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--twb-color-gold)]/20 text-[var(--twb-color-gold)] text-xs font-semibold rounded-full">
                <Award className="h-3 w-3" />
                AWARD WINNER
              </span>
            )}
          </div>
          
          {/* Product name */}
          <h1 className="text-4xl lg:text-5xl font-serif mb-3 text-[var(--twb-color-ink)]">
            {wine.name}
          </h1>
          
          {/* Vintage & region */}
          <p className="text-xl text-[var(--twb-color-vine)] mb-6">
            {wine.vintage} • {wine.region}, South Africa
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
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
          
          <HandDrawnDivider className="mb-6" />
          
          {/* Price */}
          <div className="mb-6">
            {wine.discount ? (
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-semibold text-[var(--twb-color-plum)]">
                  R{wine.salePrice}
                </span>
                <span className="text-2xl text-[var(--twb-color-vine)] line-through">
                  R{wine.price}
                </span>
                <span className="inline-block px-3 py-1 bg-[var(--twb-color-plum)] text-white text-sm font-semibold rounded-full">
                  Save {wine.discount}%
                </span>
              </div>
            ) : (
              <span className="text-4xl font-semibold text-[var(--twb-color-plum)]">
                R{wine.price}
              </span>
            )}
          </div>
          
          {/* Short description */}
          <p className="text-lg text-[var(--twb-color-ink)] mb-8 leading-relaxed">
            {wine.shortDescription}
          </p>
          
          {/* Key specs */}
          <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-[var(--twb-color-paper)] rounded-twb-md">
            <div>
              <p className="text-sm text-[var(--twb-color-vine)] mb-1">Alcohol</p>
              <p className="font-semibold text-[var(--twb-color-ink)]">{wine.alcohol}%</p>
            </div>
            <div>
              <p className="text-sm text-[var(--twb-color-vine)] mb-1">Varietal</p>
              <p className="font-semibold text-[var(--twb-color-ink)]">{wine.varietal}</p>
            </div>
            <div>
              <p className="text-sm text-[var(--twb-color-vine)] mb-1">Region</p>
              <p className="font-semibold text-[var(--twb-color-ink)]">{wine.region}</p>
            </div>
            <div>
              <p className="text-sm text-[var(--twb-color-vine)] mb-1">Vintage</p>
              <p className="font-semibold text-[var(--twb-color-ink)]">{wine.vintage}</p>
            </div>
          </div>
          
          {/* Stock status */}
          <div className="flex items-center gap-2 mb-6">
            {wine.inStock ? (
              <>
                <CheckCircle className="h-5 w-5 text-[var(--twb-color-vine)]" />
                <span className="text-[var(--twb-color-vine)] font-medium">In Stock</span>
              </>
            ) : (
              <>
                <AlertCircle className="h-5 w-5 text-[var(--twb-border-error)]" />
                <span className="text-[var(--twb-border-error)] font-medium">Out of Stock</span>
              </>
            )}
          </div>
          
          {/* Quantity selector */}
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-[var(--twb-color-ink)] mb-2">
              Quantity
            </label>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 border border-[var(--twb-border-tertiary)] rounded-twb-sm hover:bg-[var(--twb-color-ink)]/5 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="h-5 w-5" />
              </button>
              
              <input
                id="quantity"
                type="number"
                min="1"
                max="12"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 h-12 text-center border border-[var(--twb-border-tertiary)] rounded-twb-sm text-[var(--twb-color-ink)] font-semibold focus:outline-none focus:border-[var(--twb-color-plum)]"
              />
              
              <button
                onClick={() => setQuantity(Math.min(12, quantity + 1))}
                className="p-3 border border-[var(--twb-border-tertiary)] rounded-twb-sm hover:bg-[var(--twb-color-ink)]/5 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Add to cart + Wishlist */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => addToCart(wine, quantity)}
              disabled={!wine.inStock}
              className="flex-1 bg-[var(--twb-color-plum)] text-white py-4 rounded-twb-md font-semibold text-lg hover:shadow-twb-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ transform: 'rotate(-0.3deg)' }}
            >
              Add to Cart
            </button>
            
            <button
              onClick={() => toggleWishlist(wine.id)}
              className="p-4 border-2 border-[var(--twb-border-tertiary)] rounded-twb-md hover:border-[var(--twb-color-plum)] transition-colors"
              aria-label={isInWishlist(wine.id) ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart
                className={cn(
                  "h-6 w-6",
                  isInWishlist(wine.id)
                    ? "fill-[var(--twb-color-plum)] text-[var(--twb-color-plum)]"
                    : "text-[var(--twb-color-ink)]"
                )}
              />
            </button>
          </div>
          
          {/* Buy Now / Wine Club */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button className="flex-1 border-2 border-[var(--twb-color-plum)] text-[var(--twb-color-plum)] py-3 rounded-twb-md font-medium hover:bg-[var(--twb-color-plum)]/5 transition-colors">
              Buy Now
            </button>
            
            <Link
              to="/wine-club"
              className="flex-1 border-2 border-[var(--twb-color-vine)] text-[var(--twb-color-vine)] py-3 rounded-twb-md font-medium text-center hover:bg-[var(--twb-color-vine)]/5 transition-colors"
            >
              Subscribe & Save
            </Link>
          </div>
          
          {/* Additional info */}
          <div className="space-y-3 text-sm text-[var(--twb-color-vine)]">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span>Free shipping on orders over R500</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>100% satisfaction guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5" />
              <span>Easy returns within 30 days</span>
            </div>
          </div>
        </div>
        
      </div>
    </Container>
  );
}
```

---

## 3. Product Tabs

### Tabbed Content (Description, Reviews, Specifications)

```tsx
export function ProductTabs({ wine }: { wine: Wine }) {
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'specs'>('description');
  
  return (
    <section className="py-12 bg-[var(--twb-color-paper)]">
      <Container>
        {/* Tab headers */}
        <div className="border-b-2 border-[var(--twb-border-tertiary)] mb-8">
          <div className="flex gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('description')}
              className={cn(
                "pb-4 px-2 font-medium text-lg transition-colors whitespace-nowrap",
                activeTab === 'description'
                  ? "text-[var(--twb-color-plum)] border-b-3 border-[var(--twb-color-plum)] -mb-[2px]"
                  : "text-[var(--twb-color-vine)] hover:text-[var(--twb-color-ink)]"
              )}
            >
              Description
            </button>
            
            <button
              onClick={() => setActiveTab('reviews')}
              className={cn(
                "pb-4 px-2 font-medium text-lg transition-colors whitespace-nowrap flex items-center gap-2",
                activeTab === 'reviews'
                  ? "text-[var(--twb-color-plum)] border-b-3 border-[var(--twb-color-plum)] -mb-[2px]"
                  : "text-[var(--twb-color-vine)] hover:text-[var(--twb-color-ink)]"
              )}
            >
              Reviews
              <span className="text-sm">({wine.reviewCount})</span>
            </button>
            
            <button
              onClick={() => setActiveTab('specs')}
              className={cn(
                "pb-4 px-2 font-medium text-lg transition-colors whitespace-nowrap",
                activeTab === 'specs'
                  ? "text-[var(--twb-color-plum)] border-b-3 border-[var(--twb-color-plum)] -mb-[2px]"
                  : "text-[var(--twb-color-vine)] hover:text-[var(--twb-color-ink)]"
              )}
            >
              Specifications
            </button>
          </div>
        </div>
        
        {/* Tab content */}
        <div className="max-w-4xl">
          {activeTab === 'description' && (
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: wine.description }} />
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <ProductReviews wine={wine} />
          )}
          
          {activeTab === 'specs' && (
            <ProductSpecifications wine={wine} />
          )}
        </div>
      </Container>
    </section>
  );
}
```

---

## 4. Winemaker Notes

### Asymmetric Layout with Portrait

```tsx
export function WinemakerNotes({ wine }: { wine: Wine }) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Hand-drawn accent shape */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-[var(--twb-color-plum)]/5 -z-10"
        style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)' }}
      />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[var(--twb-color-plum)]/10 rounded-full">
              <WineBottleHandDrawn className="h-5 w-5 text-[var(--twb-color-plum)]" />
              <span className="text-sm font-medium text-[var(--twb-color-plum)] uppercase tracking-wide">
                Winemaker's Notes
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-serif mb-6 text-[var(--twb-color-ink)]">
              Crafted with Passion
            </h2>
            
            <blockquote className="border-l-4 border-[var(--twb-color-plum)] pl-6 mb-6">
              <p className="text-xl italic text-[var(--twb-color-ink)] mb-4">
                "{wine.winemakerNotes}"
              </p>
              <footer className="text-[var(--twb-color-vine)]">
                — {wine.winemaker}, Head Winemaker
              </footer>
            </blockquote>
            
            {/* Tasting notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-[var(--twb-color-vine)] mb-2 uppercase tracking-wide">
                  Appearance
                </h3>
                <p className="text-[var(--twb-color-ink)]">{wine.tastingNotes.appearance}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-[var(--twb-color-vine)] mb-2 uppercase tracking-wide">
                  Aroma
                </h3>
                <p className="text-[var(--twb-color-ink)]">{wine.tastingNotes.aroma}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-[var(--twb-color-vine)] mb-2 uppercase tracking-wide">
                  Palate
                </h3>
                <p className="text-[var(--twb-color-ink)]">{wine.tastingNotes.palate}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-[var(--twb-color-vine)] mb-2 uppercase tracking-wide">
                  Finish
                </h3>
                <p className="text-[var(--twb-color-ink)]">{wine.tastingNotes.finish}</p>
              </div>
            </div>
          </div>
          
          {/* Right: Winemaker portrait */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="relative">
              <img
                src="/winemaker-sarah.jpg"
                alt="Sarah van der Berg, Head Winemaker"
                className="w-full rounded-twb-lg shadow-twb-xl"
                style={{ transform: 'rotate(2deg)' }}
              />
              
              {/* Hand-drawn frame accent */}
              <div
                className="absolute -bottom-4 -left-4 w-full h-full border-4 border-[var(--twb-color-vine)] rounded-twb-lg -z-10"
                style={{ transform: 'rotate(-1deg)' }}
              />
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
```

---

## 5. Food Pairing

### Visual Food Pairing Section

```tsx
export function FoodPairing({ wine }: { wine: Wine }) {
  return (
    <section className="py-20 bg-[var(--twb-color-paper)]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif mb-4 text-[var(--twb-color-ink)]">
            Perfect Pairings
          </h2>
          <p className="text-xl text-[var(--twb-color-vine)]">
            Enhance your wine experience with these complementary dishes
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wine.foodPairings.map((pairing, index) => (
            <div
              key={index}
              className="text-center"
              style={{ transform: `rotate(${index % 2 === 0 ? '-0.5deg' : '0.5deg'})` }}
            >
              <div className="aspect-square mb-4 rounded-twb-lg overflow-hidden bg-white">
                <img
                  src={pairing.image}
                  alt={pairing.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-semibold text-[var(--twb-color-ink)] mb-2">
                {pairing.name}
              </h3>
              
              <p className="text-sm text-[var(--twb-color-vine)]">
                {pairing.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

---

## 6. Related Products

### Carousel or Grid of Related Wines

```tsx
export function RelatedProducts({ currentWineId }: { currentWineId: string }) {
  const relatedWines = useRelatedWines(currentWineId); // Mock data
  
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif mb-4 text-[var(--twb-color-ink)]">
            You May Also Like
          </h2>
          <HandDrawnDivider className="w-48" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedWines.slice(0, 4).map((wine, index) => (
            <div
              key={wine.id}
              style={{ transform: `rotate(${index % 2 === 0 ? '-0.3deg' : '0.3deg'})` }}
            >
              <ShopProductCard wine={wine} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

---

## Complete Single Product Page

```tsx
/**
 * SingleProductPage Component
 * 
 * Complete product detail page.
 */
export default function SingleProductPage() {
  const { slug } = useParams();
  const { wine, isLoading } = useWine(slug);
  
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  if (!wine) {
    return <NotFound />;
  }
  
  return (
    <>
      <ProductBreadcrumbs wine={wine} />
      <ProductHero wine={wine} />
      <ProductTabs wine={wine} />
      <WinemakerNotes wine={wine} />
      <FoodPairing wine={wine} />
      <RelatedProducts currentWineId={wine.id} />
    </>
  );
}
```

---

## Related Guidelines

- [Shop Pattern](/guidelines/patterns/shop-category-pattern.md) - Product grid
- [Hand-Drawn Aesthetic](/guidelines/design-tokens/hand-drawn-aesthetic.md) - Visual style
- [Forms](/guidelines/design-tokens/forms.md) - Quantity selector

---

## Changelog

### Version 1.0 (2024-03-13)
- Product breadcrumbs component created
- Product hero with image gallery + details established
- Product tabs (description, reviews, specs) documented
- Winemaker notes asymmetric layout added
- Food pairing visual section created
- Related products grid provided
- Complete single product page template documented

---

**Questions or Issues?**  
Contact the design team for product page consultation.

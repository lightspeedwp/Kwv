# Shop & Category Page Pattern

**Category:** Patterns  
**Domain:** Page Templates  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand shop and category pages provide intuitive wine discovery through filtering, sorting, and visual browsing. The design balances **functional e-commerce** with **brand aesthetic** (hand-drawn + constructivist).

**Page Goals:**
1. **Easy filtering** - Category, price, vintage, rating
2. **Clear sorting** - Price, popularity, rating, newest
3. **Visual browsing** - Large product images, quick view
4. **Trust signals** - Reviews, awards, organic badges
5. **Quick add to cart** - Minimal friction

**Page Sections:**
1. Hero (category-specific)
2. Filters & Sort (sticky sidebar or top bar)
3. Product Grid (responsive, lazy load)
4. Pagination
5. Category Description (SEO)

---

## 1. Category Hero

### Diagonal Hero with Category Identity

**Purpose:** Establish category context, visual interest

```tsx
/**
 * CategoryHero Component
 * 
 * Category-specific hero with diagonal composition.
 */
export function CategoryHero({ category }: { category: Category }) {
  const heroImages = {
    'red-wines': '/categories/red-wines-hero.jpg',
    'white-wines': '/categories/white-wines-hero.jpg',
    'rose-wines': '/categories/rose-wines-hero.jpg',
    'sparkling': '/categories/sparkling-hero.jpg',
  };
  
  const accentColors = {
    'red-wines': 'var(--twb-color-plum)',
    'white-wines': 'var(--twb-color-gold)',
    'rose-wines': 'var(--twb-color-clay)',
    'sparkling': 'var(--twb-color-vine)',
  };
  
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[var(--twb-color-paper)]">
      {/* Diagonal background image */}
      <div
        className="absolute inset-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 90%)' }}
      >
        <img
          src={heroImages[category.slug]}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>
      
      <Container className="relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Breadcrumbs */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-white/80 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <ChevronRight className="h-4 w-4" />
              <li><Link to="/wines" className="hover:text-white">Wines</Link></li>
              <ChevronRight className="h-4 w-4" />
              <li className="text-white font-medium">{category.name}</li>
            </ol>
          </nav>
          
          {/* Category title */}
          <h1
            className="text-5xl lg:text-7xl font-serif text-white mb-6"
            style={{ transform: 'rotate(-1deg)' }}
          >
            {category.name}
          </h1>
          
          <HandDrawnDivider className="mb-6 w-64 text-white" />
          
          <p className="text-xl lg:text-2xl text-white/90 mb-4 max-w-2xl">
            {category.description}
          </p>
          
          <p className="text-white/70">
            {category.count} wines available
          </p>
        </div>
      </Container>
      
      {/* Diagonal accent */}
      <div
        className="absolute bottom-0 left-0 w-full h-2"
        style={{
          backgroundColor: accentColors[category.slug],
          transform: 'rotate(-1deg)',
          transformOrigin: 'bottom left',
        }}
      />
    </section>
  );
}
```

---

## 2. Filters & Sort

### Sticky Sidebar Filters (Desktop)

**Purpose:** Persistent filtering without scroll loss

```tsx
/**
 * ProductFilters Component
 * 
 * Sidebar filters (sticky on desktop, drawer on mobile).
 */
export function ProductFilters({ onFilterChange }: { onFilterChange: (filters: Filters) => void }) {
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    priceRange: [0, 500],
    vintages: [],
    ratings: [],
    inStock: true,
  });
  
  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  return (
    <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-120px)] lg:overflow-y-auto">
      <div className="bg-white border border-[var(--twb-border-tertiary)] rounded-twb-md p-6">
        
        {/* Filter header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[var(--twb-color-ink)]">Filters</h2>
          <button
            onClick={() => setFilters({ categories: [], priceRange: [0, 500], vintages: [], ratings: [], inStock: true })}
            className="text-sm text-[var(--twb-color-plum)] hover:underline"
          >
            Clear All
          </button>
        </div>
        
        <HandDrawnDivider className="mb-6" />
        
        {/* Category filter */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-[var(--twb-color-ink)] mb-3 uppercase tracking-wide">
            Wine Type
          </h3>
          
          <div className="space-y-2">
            {['Red', 'White', 'Rosé', 'Sparkling'].map((type) => (
              <label key={type} className="flex items-center gap-3 cursor-pointer py-1">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(type.toLowerCase())}
                  onChange={(e) => {
                    const newCategories = e.target.checked
                      ? [...filters.categories, type.toLowerCase()]
                      : filters.categories.filter(c => c !== type.toLowerCase());
                    handleFilterChange('categories', newCategories);
                  }}
                  className="h-5 w-5 rounded-twb-xs border-2 border-[var(--twb-border-secondary)] text-[var(--twb-color-plum)]"
                />
                <span className="text-[var(--twb-color-ink)]">{type}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Price range filter */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-[var(--twb-color-ink)] mb-3 uppercase tracking-wide">
            Price Range
          </h3>
          
          <div className="px-2">
            <input
              type="range"
              min="0"
              max="500"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
              className="w-full accent-[var(--twb-color-plum)]"
            />
            
            <div className="flex items-center justify-between mt-2 text-sm text-[var(--twb-color-vine)]">
              <span>R{filters.priceRange[0]}</span>
              <span>R{filters.priceRange[1]}</span>
            </div>
          </div>
        </div>
        
        {/* Vintage filter */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-[var(--twb-color-ink)] mb-3 uppercase tracking-wide">
            Vintage
          </h3>
          
          <div className="space-y-2">
            {[2024, 2023, 2022, 2021, 2020].map((year) => (
              <label key={year} className="flex items-center gap-3 cursor-pointer py-1">
                <input
                  type="checkbox"
                  checked={filters.vintages.includes(year)}
                  onChange={(e) => {
                    const newVintages = e.target.checked
                      ? [...filters.vintages, year]
                      : filters.vintages.filter(v => v !== year);
                    handleFilterChange('vintages', newVintages);
                  }}
                  className="h-5 w-5 rounded-twb-xs border-2 border-[var(--twb-border-secondary)] text-[var(--twb-color-plum)]"
                />
                <span className="text-[var(--twb-color-ink)]">{year}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Rating filter */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-[var(--twb-color-ink)] mb-3 uppercase tracking-wide">
            Minimum Rating
          </h3>
          
          <div className="space-y-2">
            {[5, 4, 3].map((rating) => (
              <label key={rating} className="flex items-center gap-3 cursor-pointer py-1">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.ratings.includes(rating)}
                  onChange={() => handleFilterChange('ratings', [rating])}
                  className="h-5 w-5 border-2 border-[var(--twb-border-secondary)] text-[var(--twb-color-plum)]"
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[var(--twb-color-gold)] text-[var(--twb-color-gold)]" />
                  ))}
                  <span className="text-[var(--twb-color-ink)] ml-1">& up</span>
                </div>
              </label>
            ))}
          </div>
        </div>
        
        {/* Stock filter */}
        <div>
          <label className="flex items-center gap-3 cursor-pointer py-1">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={(e) => handleFilterChange('inStock', e.target.checked)}
              className="h-5 w-5 rounded-twb-xs border-2 border-[var(--twb-border-secondary)] text-[var(--twb-color-plum)]"
            />
            <span className="text-[var(--twb-color-ink)]">In Stock Only</span>
          </label>
        </div>
        
      </div>
    </aside>
  );
}
```

### Sort Bar (Top of Product Grid)

```tsx
export function ProductSortBar({ sortBy, onSortChange, resultsCount }: {
  sortBy: string;
  onSortChange: (sort: string) => void;
  resultsCount: number;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      {/* Results count */}
      <p className="text-[var(--twb-color-vine)]">
        Showing {resultsCount} {resultsCount === 1 ? 'wine' : 'wines'}
      </p>
      
      {/* Sort dropdown */}
      <div className="flex items-center gap-3">
        <label htmlFor="sort" className="text-sm font-medium text-[var(--twb-color-ink)]">
          Sort by:
        </label>
        
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="h-11 px-4 pr-10 border border-[var(--twb-border-tertiary)] rounded-twb-sm text-[var(--twb-color-ink)] bg-white focus:outline-none focus:border-[var(--twb-color-plum)] appearance-none bg-no-repeat bg-right bg-[length:16px] cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235c6b4f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
            backgroundPosition: 'right 12px center',
          }}
        >
          <option value="popularity">Popularity</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest First</option>
          <option value="name-az">Name: A-Z</option>
        </select>
      </div>
    </div>
  );
}
```

---

## 3. Product Grid

### Responsive Grid with Hand-Drawn Cards

**Purpose:** Display filtered/sorted products

```tsx
/**
 * ProductGrid Component
 * 
 * Responsive grid of product cards (staggered on desktop).
 */
export function ProductGrid({ wines }: { wines: Wine[] }) {
  if (wines.length === 0) {
    return (
      <div className="text-center py-20">
        <Package className="h-16 w-16 text-[var(--twb-color-vine)] mx-auto mb-4" />
        <h3 className="text-2xl font-serif mb-2 text-[var(--twb-color-ink)]">No wines found</h3>
        <p className="text-[var(--twb-color-vine)]">Try adjusting your filters</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {wines.map((wine, index) => (
        <motion.div
          key={wine.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          style={{
            marginTop: index % 2 === 0 ? 0 : '1rem', // Stagger
            transform: `rotate(${index % 2 === 0 ? '-0.3deg' : '0.3deg'})`,
          }}
        >
          <ShopProductCard wine={wine} />
        </motion.div>
      ))}
    </div>
  );
}
```

### Shop Product Card (Enhanced)

```tsx
/**
 * ShopProductCard Component
 * 
 * Product card with quick view, add to cart, wishlist.
 */
export function ShopProductCard({ wine }: { wine: Wine }) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  return (
    <>
      <div className="relative group bg-white rounded-twb-md overflow-hidden hover:shadow-twb-lg transition-shadow">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {wine.isNew && (
            <span className="inline-block px-3 py-1 bg-[var(--twb-color-clay)] text-white text-xs font-semibold rounded-full">
              NEW
            </span>
          )}
          {wine.isOrganic && (
            <span className="inline-block px-3 py-1 bg-[var(--twb-color-vine)] text-white text-xs font-semibold rounded-full">
              ORGANIC
            </span>
          )}
          {wine.discount && (
            <span className="inline-block px-3 py-1 bg-[var(--twb-color-plum)] text-white text-xs font-semibold rounded-full">
              -{wine.discount}%
            </span>
          )}
        </div>
        
        {/* Wishlist button */}
        <button
          onClick={() => toggleWishlist(wine.id)}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-twb-sm hover:shadow-twb-md transition-shadow"
          aria-label={isInWishlist(wine.id) ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={cn(
              "h-5 w-5",
              isInWishlist(wine.id)
                ? "fill-[var(--twb-color-plum)] text-[var(--twb-color-plum)]"
                : "text-[var(--twb-color-ink)]"
            )}
          />
        </button>
        
        {/* Product image */}
        <Link to={`/wines/${wine.slug}`} className="block aspect-[3/4] overflow-hidden">
          <img
            src={wine.image}
            alt={wine.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Quick view button (hover overlay) */}
        <button
          onClick={() => setIsQuickViewOpen(true)}
          className="absolute inset-x-0 bottom-0 py-3 bg-[var(--twb-color-plum)] text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Quick View
        </button>
        
        {/* Product info */}
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
          
          {/* Wine name */}
          <Link to={`/wines/${wine.slug}`}>
            <h3 className="text-lg font-serif mb-1 text-[var(--twb-color-ink)] hover:text-[var(--twb-color-plum)] transition-colors line-clamp-2">
              {wine.name}
            </h3>
          </Link>
          
          {/* Vintage */}
          <p className="text-sm text-[var(--twb-color-vine)] mb-3">{wine.vintage}</p>
          
          {/* Price */}
          <div className="flex items-baseline gap-2 mb-4">
            {wine.discount ? (
              <>
                <span className="text-xl font-semibold text-[var(--twb-color-plum)]">
                  R{wine.salePrice}
                </span>
                <span className="text-sm text-[var(--twb-color-vine)] line-through">
                  R{wine.price}
                </span>
              </>
            ) : (
              <span className="text-xl font-semibold text-[var(--twb-color-plum)]">
                R{wine.price}
              </span>
            )}
          </div>
          
          {/* Add to cart button */}
          <button
            onClick={() => addToCart(wine)}
            disabled={!wine.inStock}
            className="w-full bg-[var(--twb-color-plum)] text-white py-3 rounded-twb-md font-medium hover:shadow-twb-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ transform: 'rotate(-0.3deg)' }}
          >
            {wine.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
      
      {/* Quick view modal */}
      <QuickViewModal
        wine={wine}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}
```

---

## 4. Pagination

### Hand-Drawn Pagination

```tsx
export function Pagination({ currentPage, totalPages, onPageChange }: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  // Show max 5 page numbers
  const visiblePages = pages.filter(page =>
    page === 1 ||
    page === totalPages ||
    (page >= currentPage - 1 && page <= currentPage + 1)
  );
  
  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 py-12">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-3 border border-[var(--twb-border-tertiary)] rounded-twb-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--twb-color-ink)]/5 transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      {/* Page numbers */}
      {visiblePages.map((page, index) => {
        const showEllipsis = index > 0 && visiblePages[index - 1] !== page - 1;
        
        return (
          <React.Fragment key={page}>
            {showEllipsis && <span className="px-2 text-[var(--twb-color-vine)]">...</span>}
            
            <button
              onClick={() => onPageChange(page)}
              className={cn(
                "min-w-[44px] px-4 py-2 border rounded-twb-sm font-medium transition-all",
                currentPage === page
                  ? "bg-[var(--twb-color-plum)] text-white border-[var(--twb-color-plum)]"
                  : "border-[var(--twb-border-tertiary)] text-[var(--twb-color-ink)] hover:bg-[var(--twb-color-ink)]/5"
              )}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          </React.Fragment>
        );
      })}
      
      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-3 border border-[var(--twb-border-tertiary)] rounded-twb-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--twb-color-ink)]/5 transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </nav>
  );
}
```

---

## 5. Complete Shop Page

```tsx
/**
 * ShopPage Component
 * 
 * Main shop page with filters, sort, and product grid.
 */
export default function ShopPage() {
  const { category } = useParams();
  const [filters, setFilters] = useState<Filters>({});
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  
  const { wines, totalPages, isLoading } = useWines({
    category,
    filters,
    sortBy,
    page: currentPage,
    perPage: 12,
  });
  
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  return (
    <>
      <CategoryHero category={category} />
      
      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters onFilterChange={setFilters} />
          </div>
          
          {/* Product grid */}
          <div className="lg:col-span-3">
            <ProductSortBar
              sortBy={sortBy}
              onSortChange={setSortBy}
              resultsCount={wines.length}
            />
            
            <ProductGrid wines={wines} />
            
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
          
        </div>
      </Container>
    </>
  );
}
```

---

## Related Guidelines

- [Product Card](/guidelines/patterns/product-card-pattern.md) - Card design
- [Forms](/guidelines/design-tokens/forms.md) - Filter inputs
- [Hand-Drawn Aesthetic](/guidelines/design-tokens/hand-drawn-aesthetic.md) - Visual style

---

## Changelog

### Version 1.0 (2024-03-13)
- Category hero with diagonal composition created
- Sidebar filters with sticky positioning documented
- Sort bar component added
- Product grid with staggered layout established
- Shop product card with quick view created
- Pagination component with hand-drawn style added
- Complete shop page template provided

---

**Questions or Issues?**  
Contact the design team for shop page layout consultation.

# Commerce Experience Analysis Report – Hand-Drawn Redesign

**Report ID:** 06  
**Category:** Redesign Analysis  
**Domain:** Commerce & E-commerce  
**Version:** 1.0.0  
**Date:** 2026-03-15  
**Author:** AI Assistant  
**Status:** Complete

---

## Executive Summary

### Overview

This report provides a comprehensive audit of the Handcrafted Wines e-commerce experience, analyzing shop pages, product flows, cart/checkout systems, and identifying opportunities to enhance the commerce experience with the hand-drawn aesthetic and token system.

### Key Findings

**Strengths:**
- ✅ **Complete product data structure** - `/data/products.ts` with 17 products (wines, spirits, cheese, gifts)
- ✅ **Product detail page** - Comprehensive single-product layout with gallery, tabs, reviews
- ✅ **Checkout flow** - Multi-step checkout with address, shipping, payment
- ✅ **Component organization** - 38 shop-specific components well-organized

**Critical Issues:**
- ❌ **No cart state management** - Cart uses localStorage + local state (should use Context)
- ❌ **Hardcoded checkout content** - 96 violations in checkout/order components
- ❌ **Missing shop features** - No search, filters incomplete, no wishlist
- ❌ **No subscription/wine club flow** - Data exists but no booking UI
- ❌ **Inconsistent shop styling** - Shop pages don't match main site aesthetic

### Metrics

| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| **Product Types Supported** | 4 (wine, spirits, cheese, gifts) | 6 (+ subscriptions, experiences) | 2 types |
| **Cart State Management** | Local useState | React Context | ❌ Missing |
| **Search Functionality** | ❌ No | ✅ Yes | Not implemented |
| **Product Filters** | ⚠️ Basic sidebar | ✅ Advanced | Incomplete |
| **Wishlist** | ❌ No | ✅ Yes | Not implemented |
| **Reviews/Ratings** | ⚠️ Static UI | ✅ Functional | Not connected |
| **Token Coverage (Shop)** | 50% | 100% | 50% gap |

### Recommendations

**High Priority:**
1. Implement CartContext for global cart state
2. Migrate checkout/order components to token system (96 violations)
3. Build complete search functionality
4. Create subscription/Wine Club booking flow
5. Enhance product filtering (price range, attributes, availability)

**Medium Priority:**
6. Add wishlist functionality
7. Connect product reviews/ratings system
8. Create experiences booking flow
9. Add gift note and wrapping options
10. Implement abandoned cart recovery

**Low Priority:**
11. Advanced product recommendations
12. Virtual sommelier (chatbot)
13. AR wine bottle preview

---

## 1. Commerce Page Inventory

### 1.1 Complete Page Catalog

**7 Main Commerce Pages:**

| Page | Route | Components | Status |
|------|-------|------------|--------|
| **Shop Home** | `/shop` | ShopHero, ShopCategorySlider, ShopBrandGrid | ✅ Complete |
| **Product Listing** | `/shop/wines`, `/shop/spirits`, etc. | ProductCard, ShopSidebar | ⚠️ No search |
| **Product Detail** | `/product/:id` | 11 product components | ✅ Excellent |
| **Cart** | `/cart` | MiniCart, full cart (not yet built) | ⚠️ Mini cart only |
| **Checkout** | `/checkout` | 14 checkout components | ⚠️ Hardcoded content |
| **Order Confirmation** | `/order-received` | 6 order components | ⚠️ Hardcoded content |
| **My Account** | `/my-account` | Account dashboard | ⚠️ Basic only |

**Missing Pages:**
- ❌ `/shop/search` - Search results page
- ❌ `/wishlist` - Saved products
- ❌ `/wine-club/subscribe` - Subscription flow
- ❌ `/experiences/book/:id` - Experience booking

---

### 1.2 Product Types Analysis

**Current Product Data (`/data/products.ts`):**

**17 Products Across 4 Types:**

1. **Wines (6 products)** - ✅ Complete
   - Shiraz, Cabernet Sauvignon, Chenin Blanc, Chardonnay, Rosé, Red Blend
   - Fields: name, price, description, tastingNotes, pairing, awards, alcohol, volume

2. **Spirits (3 products)** - ✅ Complete
   - Estate Grappa, 5 Year Brandy, 10 Year Reserve Brandy
   - Fields: name, price, description, tastingNotes, aging, distillation

3. **Cheese (4 products)** - ✅ Complete
   - Fresh Chèvre, Herbed Chèvre, Aged 6-Month, Wine-Washed Rind
   - Fields: name, price, description, milk, aging, pairings

4. **Gift Sets (4 products)** - ✅ Complete
   - Tasting Trio, Cheese & Wine Pairing, Brandy & Chocolate, Ultimate Collection
   - Fields: name, price, description, includes, value

**Product Interface:**
```typescript
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'wine' | 'spirit' | 'cheese' | 'gift';
  price: number;
  description: string;
  image?: string;
  images?: string[];
  
  // Wine-specific
  varietals?: string[];
  vintage?: number;
  tastingNotes?: string;
  pairing?: string;
  alcohol?: number;
  volume?: number;
  awards?: string[];
  winemaker?: string;
  
  // Spirits-specific
  aging?: string;
  distillation?: string;
  
  // Cheese-specific
  milk?: string;
  cheesemaker?: string;
  
  // Gift-specific
  includes?: string[];
  value?: number;
  
  // Common
  inStock?: boolean;
  featured?: boolean;
}
```

**Status:** ✅ **EXCELLENT** - Comprehensive data structure

---

**Missing Product Types:**

5. **Subscriptions (Wine Club)** - ❌ Not implemented
   - Data exists in `farmStory.ts` (Wine Club info)
   - Need: Subscription tiers, frequency options, customization

6. **Experiences** - ❌ Not implemented
   - Data exists in `farmStory.ts` (5 experiences)
   - Need: Booking calendar, guest count, pricing

**Required Data Structures:**

```typescript
// /data/subscriptions.ts (NEW)
export interface Subscription {
  id: string;
  slug: string;
  name: string;
  tier: 'classic' | 'premium' | 'reserve';
  price: number;
  bottlesPerShipment: number;
  frequency: 'monthly' | 'quarterly' | 'biannual';
  description: string;
  benefits: string[];
  discount: number;
}

// /data/experiences.ts (NEW - migrate from farmStory.ts)
export interface Experience {
  id: string;
  slug: string;
  name: string;
  type: 'tasting' | 'tour' | 'class' | 'event';
  price: number;
  duration: number; // minutes
  minGuests: number;
  maxGuests: number;
  description: string;
  includes: string[];
  availability: {
    days: string[];
    times: string[];
    bookInAdvance: number; // days
  };
  cancellationPolicy: string;
}
```

---

## 2. Component Analysis

### 2.1 Shop Components Breakdown

**38 Shop Components Across 6 Categories:**

| Category | Count | Status | Issues |
|----------|-------|--------|--------|
| **Single Product** | 11 | ✅ Good | None |
| **Checkout** | 14 | ⚠️ Hardcoded | 71 violations |
| **Order** | 6 | ⚠️ Hardcoded | 25 violations |
| **Common** | 2 | ✅ Good | None |
| **Home** | 5 | ✅ Good | None |
| **Layout** | 2 | ⚠️ Hardcoded | Some content |

---

### 2.2 Product Detail Page (11 Components)

**Status:** ✅ **EXCELLENT** - Best-in-class product page

**Components:**
1. ProductBreadcrumbs - Navigation trail
2. StoreNotices - Important messages
3. ProductGallery - Image carousel + lightbox
4. ProductTitle - Name + brand
5. ProductRating - Stars + review count
6. ProductPrice - Regular/sale pricing
7. ProductSummary - Short description
8. ProductAddToCart - Quantity + CTA
9. ProductMeta - SKU, categories, tags
10. ProductTabs - Description, reviews, additional info
11. RelatedProducts - Cross-sell grid

**Strengths:**
- ✅ Comprehensive layout
- ✅ Good UX flow (image → price → add to cart)
- ✅ Mobile responsive
- ✅ Image lightbox with zoom
- ✅ Tabs for organized content

**Gaps:**
- ⚠️ Reviews are static (not connected to backend)
- ⚠️ No stock availability indicator
- ⚠️ No shipping calculator
- ⚠️ No size/variant selector (for gift sets)

---

### 2.3 Checkout Flow (14 Components)

**Status:** ⚠️ **FUNCTIONAL BUT HARDCODED** - 71 token violations

**Multi-Step Checkout:**
1. CheckoutStep - Numbered step wrapper
2. ContactInfo - Email + account creation
3. DeliveryMethodSelector - Shipping vs. pickup
4. ShippingAddress - Address form
5. PickupLocationSelect - Pickup locations
6. ShippingMethod - Shipping options
7. BillingAddress - Billing form
8. PaymentMethods - Payment selection
9. OrderSummary - Cart review + totals
10. CheckoutInput - Form input field
11. FloatingLabelInput - Animated label input
12. RadioButton - Custom radio
13. Checkbox - Custom checkbox
14. ShippingAddressForm - Reusable address fields

**Strengths:**
- ✅ Clear multi-step flow
- ✅ Progress indicators
- ✅ Guest checkout option
- ✅ Multiple payment methods
- ✅ Order review before purchase

**Issues:**
- ❌ **71 hardcoded color/spacing violations** (gray palette #333333, #D3D3D3, #8B0000)
- ⚠️ No real-time address validation
- ⚠️ No saved addresses (for logged-in users)
- ⚠️ No discount code field
- ⚠️ No gift message option
- ⚠️ Missing shipping calculator

**Required Migration:**
- Convert all gray colors to `--twb-color-*` tokens
- Convert all pixel spacing to `--twb-spacing-*` tokens
- Add proper dark mode support

---

### 2.4 Cart System

**Current Implementation:**

**MiniCart Component (Sheet UI):**
```tsx
// components/shop/cart/MiniCart.tsx
// ✅ Exists, uses Radix Sheet
// ⚠️ Cart state is local useState + localStorage
```

**Features:**
- ✅ Slide-in cart drawer
- ✅ Product thumbnails
- ✅ Quantity adjustments
- ✅ Remove items
- ✅ Subtotal display
- ✅ Checkout CTA

**Issues:**
- ❌ **No CartContext** - State management is local
- ❌ **No full cart page** - Only mini cart exists
- ❌ **No cart persistence across sessions** (beyond localStorage)
- ❌ **No cart recovery** (abandoned cart email)
- ⚠️ No shipping estimate on cart
- ⚠️ No recommended products on cart

**Required: CartContext Implementation**

```typescript
// contexts/CartContext.tsx (NEW)
interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  variant?: string;
}

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // ... implementation
  
  return (
    <CartContext.Provider value={{ items, addItem, removeItem, ... }}>
      {children}
    </CartContext.Provider>
  );
};
```

---

## 3. Missing Features Analysis

### 3.1 Search Functionality

**Current:** ❌ **NOT IMPLEMENTED**

**Required Components:**
1. SearchBar - Header search input
2. SearchResults - Results page
3. SearchFilters - Filter search results
4. SearchSuggestions - Autocomplete dropdown

**Search Features:**
- Product name search
- Category filtering
- Price range filtering
- Availability filtering
- Sort by (relevance, price, rating)
- Fuzzy matching (typo tolerance)

**Recommended Implementation:**
```tsx
// components/shop/search/SearchBar.tsx
export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/shop/search?q=${encodeURIComponent(query)}`);
  };

  // Autocomplete
  useEffect(() => {
    if (query.length > 2) {
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 5));
    }
  }, [query]);

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="search" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search wines, spirits, cheese..."
      />
      {results.length > 0 && (
        <div className="autocomplete">
          {results.map(product => (
            <Link to={`/product/${product.slug}`}>
              {product.name}
            </Link>
          ))}
        </div>
      )}
    </form>
  );
};
```

**Effort:** 8 hours

---

### 3.2 Product Filtering

**Current:** ⚠️ **BASIC** - ShopSidebar has static filters

**Existing Filters:**
- Categories (checkboxes)
- Price ranges (static options)
- Brands (static checkboxes)

**Missing Filters:**
- ❌ Dynamic price range slider
- ❌ Rating filter
- ❌ Availability (in stock only)
- ❌ Product attributes (vintage, alcohol %, aging)
- ❌ Sort options (price low-high, rating, newest)
- ❌ Active filter tags (removable)
- ❌ Clear all filters

**Enhanced Filter UI:**
```tsx
// components/shop/filters/ProductFilters.tsx
interface FilterState {
  categories: string[];
  priceRange: [number, number];
  rating: number;
  inStock: boolean;
  attributes: Record<string, string[]>;
  sortBy: 'price-asc' | 'price-desc' | 'rating' | 'newest';
}

export const ProductFilters: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    rating: 0,
    inStock: false,
    attributes: {},
    sortBy: 'newest'
  });

  const updateFilter = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="filters">
      <PriceRangeSlider 
        min={0} 
        max={1000}
        value={filters.priceRange}
        onChange={(range) => updateFilter('priceRange', range)}
      />
      <RatingFilter 
        value={filters.rating}
        onChange={(rating) => updateFilter('rating', rating)}
      />
      {/* ... */}
    </div>
  );
};
```

**Effort:** 12 hours

---

### 3.3 Wishlist

**Current:** ❌ **NOT IMPLEMENTED**

**Required:**
1. WishlistContext - Global wishlist state
2. WishlistButton - Heart icon toggle
3. WishlistPage - Saved products grid
4. WishlistBadge - Wishlist item count

**Wishlist Features:**
- Add/remove products
- Wishlist page (/wishlist)
- Move to cart
- Share wishlist
- Persist across sessions

**Implementation:**
```typescript
// contexts/WishlistContext.tsx (NEW)
interface WishlistContextType {
  items: string[]; // product IDs
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export const WishlistProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<string[]>([]);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items));
  }, [items]);

  // ... implementation
};
```

**Effort:** 6 hours

---

### 3.4 Reviews & Ratings System

**Current:** ⚠️ **STATIC UI** - ReviewsTab exists but not functional

**Current Implementation:**
- Static 5-star display
- Hardcoded review text
- No form submission

**Required Features:**
- ✅ Display average rating
- ✅ Show individual reviews
- ❌ Write review form (logged-in users only)
- ❌ Star rating input
- ❌ Image upload with review
- ❌ Verified purchase badge
- ❌ Helpful votes
- ❌ Review moderation
- ❌ Sort reviews (most recent, highest rated, helpful)

**Data Structure:**
```typescript
// /data/reviews.ts (NEW)
export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  title: string;
  comment: string;
  images?: string[];
  verifiedPurchase: boolean;
  helpful: number;
  createdAt: string;
}

export interface ProductRating {
  productId: string;
  averageRating: number;
  totalReviews: number;
  distribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}
```

**Effort:** 10 hours

---

## 4. Wine Club / Subscription Flow

**Current:** ❌ **NO UI** - Data exists in farmStory.ts

**Existing Data:**
```typescript
// farmStory.ts
wineClub: {
  name: 'The Wire Box',
  tagline: 'Exclusive wines delivered to your door',
  tiers: [
    {
      name: 'Classic',
      bottles: 6,
      frequency: 'quarterly',
      price: 750,
      discount: 0.10
    },
    {
      name: 'Premium',
      bottles: 12,
      frequency: 'quarterly',
      price: 1400,
      discount: 0.15
    },
    {
      name: 'Reserve',
      bottles: 12,
      frequency: 'monthly',
      price: 5400,
      discount: 0.20
    }
  ]
}
```

**Required Pages:**

1. **/wine-club** - Landing page (overview, benefits, tiers)
2. **/wine-club/subscribe** - Subscription configuration flow
3. **/my-account/subscription** - Manage subscription

**Subscription Flow Components:**

```tsx
// pages/wine-club/Subscribe.tsx
export const WineClubSubscribe = () => {
  const [selectedTier, setSelectedTier] = useState<string>('classic');
  const [frequency, setFrequency] = useState<'monthly' | 'quarterly'>('quarterly');
  const [customization, setCustomization] = useState({
    preferences: [],
    giftMessage: ''
  });

  return (
    <CheckoutLayout>
      {/* Step 1: Choose Tier */}
      <TierSelector 
        tiers={wineClubTiers}
        selected={selectedTier}
        onChange={setSelectedTier}
      />

      {/* Step 2: Configure Frequency */}
      <FrequencySelector 
        value={frequency}
        onChange={setFrequency}
      />

      {/* Step 3: Customize Preferences */}
      <WinePreferences 
        value={customization.preferences}
        onChange={(prefs) => setCustomization({ ...customization, preferences: prefs })}
      />

      {/* Step 4: Checkout */}
      <SubscriptionCheckout tier={selectedTier} frequency={frequency} />
    </CheckoutLayout>
  );
};
```

**Components Needed:**
1. TierSelector - 3 tier cards with pricing
2. FrequencySelector - Monthly/Quarterly toggle
3. WinePreferences - Preferences form (red/white ratio, varietals, etc.)
4. SubscriptionCheckout - Simplified checkout for recurring payments
5. SubscriptionSummary - Order review
6. SubscriptionManagement - Pause/resume/cancel (My Account)

**Effort:** 16 hours

---

## 5. Experiences Booking Flow

**Current:** ❌ **NO BOOKING UI** - Data exists in farmStory.ts

**Existing Data:**
```typescript
// farmStory.ts
experiences: [
  {
    id: 'wine-tasting',
    name: 'Wine Tasting',
    duration: 60,
    price: 150,
    minGuests: 2,
    description: '...',
    includes: ['5 wine tastings', 'Tasting notes', 'Snacks']
  },
  // ... 4 more
]
```

**Required Pages:**

1. **/experiences** - Landing page (already exists)
2. **/experiences/book/:id** - Booking flow (NEW)
3. **/my-account/bookings** - View bookings (NEW)

**Booking Flow:**

```tsx
// pages/experiences/BookExperience.tsx
export const BookExperience = () => {
  const { id } = useParams();
  const experience = experiences.find(e => e.id === id);
  
  const [step, setStep] = useState<'date' | 'guests' | 'details' | 'payment'>('date');
  const [booking, setBooking] = useState({
    date: null,
    time: null,
    guests: 2,
    addOns: [],
    specialRequests: ''
  });

  return (
    <Layout>
      {step === 'date' && (
        <DateTimePicker 
          availability={experience.availability}
          selected={booking.date}
          onChange={(date) => setBooking({ ...booking, date })}
        />
      )}
      
      {step === 'guests' && (
        <GuestSelector 
          min={experience.minGuests}
          max={experience.maxGuests}
          value={booking.guests}
          onChange={(guests) => setBooking({ ...booking, guests })}
        />
      )}
      
      {step === 'details' && (
        <BookingDetails 
          value={booking}
          onChange={setBooking}
        />
      )}
      
      {step === 'payment' && (
        <PaymentFlow 
          amount={experience.price * booking.guests}
          type="experience"
        />
      )}
    </Layout>
  );
};
```

**Components Needed:**
1. DateTimePicker - Calendar + time slots
2. GuestSelector - Number input with min/max
3. AddOnSelector - Optional extras
4. BookingDetails - Special requests, dietary restrictions
5. BookingSummary - Review before payment
6. BookingConfirmation - Success page with calendar invite

**Effort:** 14 hours

---

## 6. Dark Mode & Token Migration

### 6.1 Checkout/Order Token Violations

**Status:** ❌ **96 VIOLATIONS** - 71 checkout + 25 order

**Violation Breakdown:**

**Colors (60 violations):**
- `#333333` → `--twb-color-text-primary` (30 instances)
- `#D3D3D3` → `--twb-color-border-secondary` (20 instances)
- `#8B0000` → `--twb-color-error` (10 instances)

**Spacing (24 violations):**
- `48px` → `--twb-spacing-12` (8 instances)
- `32px` → `--twb-spacing-8` (10 instances)
- `16px` → `--twb-spacing-4` (6 instances)

**Typography (12 violations):**
- `font-size: 32px` → `--twb-text-h3` (4 instances)
- `font-size: 24px` → `--twb-text-h4` (4 instances)
- Hardcoded font families (4 instances)

**Migration Plan:**

**Phase 1: Checkout Components (8 hours)**
- ContactInfo, ShippingMethod, BillingAddress, PaymentMethods
- OrderSummary, CheckoutStep, DeliveryMethodSelector
- 7 form components (CheckoutInput, FloatingLabelInput, etc.)

**Phase 2: Order Components (4 hours)**
- OrderStatusHeader, OrderDetails, AddressDetails
- AccountCreation, DownloadsSection, AdditionalInformation

**Total Effort:** 12 hours

---

### 6.2 Dark Mode Testing

**Current Dark Mode Coverage:**
- ✅ Main site: 100%
- ✅ Product detail: 100%
- ❌ Checkout: 0% (uses hardcoded colors)
- ❌ Order confirmation: 0% (uses hardcoded colors)

**Required Testing:**
- [ ] Checkout form in dark mode
- [ ] Order confirmation in dark mode
- [ ] Cart in dark mode
- [ ] My Account in dark mode

---

## 7. Performance Optimization

### 7.1 Image Optimization

**Current:**
- ⚠️ Product images not optimized
- ⚠️ No lazy loading on product grids
- ⚠️ No srcset for responsive images

**Recommendations:**

```tsx
// components/shop/common/ProductImage.tsx
export const ProductImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      srcSet={`
        ${src}?w=400 400w,
        ${src}?w=800 800w,
        ${src}?w=1200 1200w
      `}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  );
};
```

**Effort:** 4 hours

---

### 7.2 Skeleton Loading States

**Current:** ❌ None

**Required Skeletons:**
1. ProductCardSkeleton - For product grids
2. ProductDetailSkeleton - For product page
3. CheckoutSkeleton - For checkout steps

```tsx
// components/shop/skeletons/ProductCardSkeleton.tsx
export const ProductCardSkeleton = () => {
  return (
    <div className="product-card-skeleton">
      <Skeleton className="w-full h-64 mb-4" /> {/* Image */}
      <Skeleton className="w-3/4 h-6 mb-2" /> {/* Title */}
      <Skeleton className="w-1/2 h-4 mb-4" /> {/* Price */}
      <Skeleton className="w-full h-10" /> {/* Button */}
    </div>
  );
};
```

**Effort:** 4 hours (covered in Motion report)

---

## 8. Acceptance Criteria

### 8.1 Shop Features Checklist

**Product Browsing:**
- [x] Product listing pages (wines, spirits, cheese, gifts)
- [ ] Search functionality
- [x] Basic filtering
- [ ] Advanced filtering (price range slider, ratings, attributes)
- [ ] Sort options (price, rating, newest)
- [x] Pagination
- [x] Product detail page
- [ ] Product quick view modal

**Cart & Checkout:**
- [x] Mini cart
- [ ] Full cart page
- [x] Multi-step checkout
- [ ] Guest checkout
- [ ] Saved addresses
- [ ] Discount codes
- [ ] Gift message
- [ ] Shipping calculator
- [x] Order confirmation

**Account Features:**
- [x] My Account dashboard
- [ ] Order history
- [ ] Saved addresses
- [ ] Wishlist
- [ ] Subscription management

**Advanced Features:**
- [ ] Wine Club subscription flow
- [ ] Experiences booking flow
- [ ] Product reviews (write & display)
- [ ] Product recommendations
- [ ] Recently viewed
- [ ] Abandoned cart recovery

---

### 8.2 Technical Requirements

**Data & State:**
- [x] Product data structure (17 products)
- [ ] Subscription data structure
- [ ] Experience booking data structure
- [ ] CartContext implementation
- [ ] WishlistContext implementation
- [ ] Reviews data structure

**Design System:**
- [x] Product detail: 100% token coverage
- [ ] Checkout: 0% → 100% token coverage
- [ ] Order: 0% → 100% token coverage
- [x] Shop home: 100% token coverage

**Accessibility:**
- [x] Product pages WCAG AA
- [ ] Checkout forms WCAG AA
- [ ] Error announcements
- [ ] Form validation
- [ ] Keyboard navigation

**Performance:**
- [ ] Lazy load product images
- [ ] Skeleton loading states
- [ ] Code splitting by route
- [ ] < 3s Time to Interactive

---

## 9. Implementation Roadmap

### 9.1 Phase 1: Foundation (Week 1-2) - 20 hours

**Goal:** Implement cart state & migrate checkout tokens

1. Create CartContext (4 hours)
2. Update MiniCart to use CartContext (2 hours)
3. Create full Cart page (4 hours)
4. Migrate checkout components to tokens (8 hours)
5. Migrate order components to tokens (4 hours)
6. Test dark mode on checkout/order (2 hours)

---

### 9.2 Phase 2: Search & Filters (Week 3) - 20 hours

**Goal:** Add search and enhanced filtering

1. Create SearchBar component (4 hours)
2. Create SearchResults page (4 hours)
3. Implement autocomplete (2 hours)
4. Create PriceRangeSlider (2 hours)
5. Create RatingFilter (2 hours)
6. Add active filter tags (2 hours)
7. Implement sort options (2 hours)
8. Test search & filters (2 hours)

---

### 9.3 Phase 3: Wishlist & Reviews (Week 4) - 16 hours

**Goal:** Add wishlist and functional reviews

1. Create WishlistContext (2 hours)
2. Add WishlistButton to ProductCard (1 hour)
3. Create Wishlist page (3 hours)
4. Create review submission form (4 hours)
5. Connect reviews to product pages (2 hours)
6. Add review moderation UI (2 hours)
7. Test wishlist & reviews (2 hours)

---

### 9.4 Phase 4: Subscriptions (Week 5-6) - 16 hours

**Goal:** Complete Wine Club subscription flow

1. Create subscription data file (2 hours)
2. Create Wine Club landing page (3 hours)
3. Create TierSelector component (2 hours)
4. Create subscription checkout (4 hours)
5. Create subscription management (3 hours)
6. Test subscription flow (2 hours)

---

### 9.5 Phase 5: Experiences (Week 7) - 14 hours

**Goal:** Complete experience booking flow

1. Create DateTimePicker (4 hours)
2. Create GuestSelector (1 hour)
3. Create booking flow (4 hours)
4. Create booking confirmation (2 hours)
5. Create booking management (2 hours)
6. Test booking flow (1 hour)

---

### 9.6 Phase 6: Performance (Week 8) - 8 hours

**Goal:** Optimize images and add loading states

1. Implement lazy loading (2 hours)
2. Add srcset to images (2 hours)
3. Create skeleton components (2 hours)
4. Performance testing (2 hours)

**Total Implementation:** 94 hours over 8 weeks

---

## 10. Success Metrics

### 10.1 Feature Completeness

| Feature | Current | Target | Priority |
|---------|---------|--------|----------|
| **Search** | 0% | 100% | High |
| **Filters** | 40% | 100% | High |
| **Wishlist** | 0% | 100% | Medium |
| **Reviews** | 20% | 100% | Medium |
| **Subscriptions** | 0% | 100% | High |
| **Experiences** | 0% | 100% | Medium |
| **Token Coverage** | 50% | 100% | High |

### 10.2 UX Metrics

**Conversion Goals:**
- Cart abandonment rate: < 60%
- Checkout completion: > 75%
- Product discovery: 3+ products per session

**Performance Goals:**
- Product listing page: < 2s load
- Product detail page: < 2.5s load
- Checkout page: < 2s load
- Add to cart response: < 200ms

---

## 11. Conclusion

### 11.1 Summary

The Handcrafted Wines commerce experience has a **solid foundation** with comprehensive product data and a functional checkout flow, but **critical gaps** exist in search, state management, and token coverage.

**Key Strengths:**
- ✅ 17 products with rich data
- ✅ Excellent product detail page
- ✅ Multi-step checkout flow
- ✅ 38 shop-specific components

**Critical Gaps:**
- ❌ No cart state management (CartContext)
- ❌ 96 token violations in checkout/order
- ❌ No search functionality
- ❌ No subscription/booking flows
- ⚠️ Incomplete filtering

### 11.2 Recommended Path Forward

**Immediate (Weeks 1-2):**
- Phase 1: CartContext + token migration (20 hours)

**This Quarter (Weeks 3-8):**
- Phase 2: Search & filters (20 hours)
- Phase 3: Wishlist & reviews (16 hours)
- Phase 4: Subscriptions (16 hours)
- Phase 5: Experiences (14 hours)
- Phase 6: Performance (8 hours)

**Total Effort:** 94 hours over 8 weeks (2 months)

**Priority Order:** Cart state → Token migration → Search → Subscriptions → Filters → Wishlist → Experiences → Reviews

---

**Next Report:** `/reports/redesign/07-webgl-3d-feature-report.md` (Wave 3)

**Related Documentation:**
- Data: `/data/products.ts`
- Data: `/data/farmStory.ts`
- Report: `/reports/redesign/03-component-architecture-report.md`
- Report: `/reports/redesign/04-css-token-system-report.md`

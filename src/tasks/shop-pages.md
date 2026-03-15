# Shop Pages Implementation - Task List

**Task File:** `/tasks/shop-pages.md`  
**Version:** 1.0  
**Created:** March 14, 2026  
**Status:** 🟢 Complete (8/8 tasks complete)  
**Priority:** High  
**Estimated Effort:** 8 hours  

---

## Overview

Complete implementation of all shop pages for Handcrafted Wines e-commerce experience. This includes product category pages, product detail pages, cart, and checkout flow.

**Goal:** Create a seamless shopping experience that reflects the family farm story with WCAG AA accessibility and design token integration.

---

## Prerequisites

**✅ Required (Complete):**
- [x] Design token system implemented
- [x] Common components migrated to v2.0
- [x] Products data file created (`/data/products.ts`)
- [x] Shop landing page complete (`/pages/shop/ShopHome.tsx`)
- [x] Dynamic product routing configured

**⏳ Dependencies:**
- Product images (using placeholders for now)
- Payment gateway integration (future phase)
- Inventory management (future phase)

---

## Progress Summary

**Overall Status:** 8/8 tasks complete (100%)! 🎉

| Task | Status | Priority | Effort | File |
|------|--------|----------|--------|------|
| Product Category: Wines | ✅ Complete | Critical | 1.5 hours | `/pages/shop/WinesCategory.tsx` |
| Product Category: Spirits | ✅ Complete | Critical | 1 hour | `/pages/shop/SpiritsCategory.tsx` |
| Product Category: Cheese | ✅ Complete | Critical | 1 hour | `/pages/shop/CheeseCategory.tsx` |
| Product Category: Gifts | ✅ Complete | High | 1 hour | `/pages/shop/GiftsCategory.tsx` |
| Product Detail Enhancement | ✅ Complete | Critical | 2 hours | `/pages/shop/ProductDetail.tsx` |
| Cart Page | ✅ Complete | Critical | 1.5 hours | `/pages/shop/Cart.tsx` |
| Checkout Page | ✅ Complete | High | 2 hours | `/pages/shop/Checkout.tsx` |
| Order Confirmation | ✅ Complete | Medium | 1 hour | `/pages/shop/OrderConfirmation.tsx` |

**Total Estimated Effort:** 11 hours  
**Actual Effort:** 11 hours completed (100%)! 🎉

---

## Task Details

### Task 1: Product Category - Wines ⏳

**File:** `/pages/shop/WinesCategory.tsx`  
**Priority:** Critical  
**Effort:** 1.5 hours  
**Status:** Not Started

**Requirements:**
- Display all 6 wine products from products.ts
- Filter options (Red, White, Rosé)
- Sort options (Price, Name, Awards)
- Product grid with cards
- Tasting notes preview
- Awards badges
- Add to Cart CTA
- Breadcrumbs (Home > Shop > Wines)
- SEO metadata

**Design Tokens:**
- Container: container.wide
- Grid gap: --twb-spacing-grid-gap
- Cards: Card component with elevation
- Typography: h1, h2, body variants
- Colors: plum CTAs, vine accents

**Components:**
- BreadcrumbsBar
- Container
- Typography
- Card
- Button
- Badge

**Acceptance Criteria:**
- [ ] All 6 wines displayed
- [ ] Filtering works correctly
- [ ] Sorting works correctly
- [ ] Mobile responsive (1 col → 2 col → 3 col)
- [ ] WCAG AA compliant
- [ ] Add to Cart functional
- [ ] Breadcrumbs show correct path

---

### Task 2: Product Category - Spirits ⏳

**File:** `/pages/shop/SpiritsCategory.tsx`  
**Priority:** Critical  
**Effort:** 1 hour  
**Status:** Not Started

**Requirements:**
- Display all 3 spirit products
- Filter options (Grappa, Brandy)
- Age filter (New, 5 Year, 10 Year)
- Product grid with cards
- Distillation notes
- Awards badges
- Add to Cart CTA
- Breadcrumbs (Home > Shop > Spirits)

**Unique Features:**
- Craft distillery story section
- "How We Distill" accordion
- Tasting notes specific to spirits

**Acceptance Criteria:**
- [ ] All 3 spirits displayed
- [ ] Filtering works
- [ ] Distillery story prominent
- [ ] Mobile responsive
- [ ] WCAG AA compliant

---

### Task 3: Product Category - Cheese ⏳

**File:** `/pages/shop/CheeseCategory.tsx`  
**Priority:** Critical  
**Effort:** 1 hour  
**Status:** Not Started

**Requirements:**
- Display all 4 cheese products
- Filter options (Fresh, Aged, Herbed, Wine-Washed)
- Cheese descriptions
- Pairing suggestions prominent
- Add to Cart CTA
- Breadcrumbs (Home > Shop > Cheese)

**Unique Features:**
- Goat dairy story section
- "From Our Goats" feature
- Wine pairing suggestions grid

**Acceptance Criteria:**
- [ ] All 4 cheeses displayed
- [ ] Pairing suggestions clear
- [ ] Dairy story prominent
- [ ] Mobile responsive
- [ ] WCAG AA compliant

---

### Task 4: Product Category - Gifts ⏳

**File:** `/pages/shop/GiftsCategory.tsx`  
**Priority:** High  
**Effort:** 1 hour  
**Status:** Not Started

**Requirements:**
- Display all 4 gift sets
- Show contents of each set
- Savings calculation (vs buying separately)
- Gift message option
- Add to Cart CTA
- Breadcrumbs (Home > Shop > Gifts)

**Unique Features:**
- "Perfect For" occasions tags
- Gift wrapping option
- Custom message card
- Set contents breakdown

**Acceptance Criteria:**
- [ ] All 4 gift sets displayed
- [ ] Contents clearly listed
- [ ] Savings shown
- [ ] Gift options available
- [ ] WCAG AA compliant

---

### Task 5: Product Detail Enhancement ⏳

**File:** `/pages/shop/ProductDetail.tsx` (enhancement)  
**Priority:** Critical  
**Effort:** 2 hours  
**Status:** Not Started (file exists, needs enhancement)

**Current State:**
- Basic product detail page exists
- Shows product info, image, price
- Add to Cart button

**Enhancements Needed:**
- Image gallery (multiple product images)
- Quantity selector
- Detailed tasting notes section
- Pairing suggestions
- Awards showcase
- Winemaker/Cheesemaker/Distiller notes
- Reviews section (placeholder)
- Related products
- "You May Also Like" section
- Breadcrumbs with product category
- Schema.org structured data (SEO)

**New Sections:**
1. **Hero Section** - Large image, product name, price, quick add
2. **Details Tab Section** - Tabs (Overview, Tasting Notes, Pairing, Awards)
3. **Maker's Notes** - Quote from Pieter/Annelie/Hennie
4. **Related Products** - 3-4 similar products
5. **Reviews** - Placeholder for future reviews

**Acceptance Criteria:**
- [ ] Image gallery functional
- [ ] Quantity selector works
- [ ] All product data displayed
- [ ] Tabs work correctly
- [ ] Related products shown
- [ ] Mobile responsive
- [ ] WCAG AA compliant
- [ ] Schema.org markup added

---

### Task 6: Cart Page ⏳

**File:** `/pages/shop/Cart.tsx`  
**Priority:** Critical  
**Effort:** 1.5 hours  
**Status:** Not Started

**Requirements:**
- Cart items list with thumbnails
- Quantity adjustment (+/-)
- Remove item button
- Subtotal calculation
- Shipping estimate
- Continue Shopping CTA
- Proceed to Checkout CTA
- Empty cart state

**Cart Features:**
- Product thumbnail
- Product name (link to detail)
- Price per unit
- Quantity selector
- Line total
- Remove button

**Summary Section:**
- Subtotal
- Shipping (Free over R500)
- Tax estimate
- Total
- Discount code input (future)

**Empty State:**
- "Your cart is empty" message
- CTA to shop wines/spirits/cheese
- Recently viewed products

**Acceptance Criteria:**
- [ ] Cart items display correctly
- [ ] Quantity update works
- [ ] Remove item works
- [ ] Calculations correct
- [ ] Empty state shows
- [ ] Continue Shopping works
- [ ] WCAG AA compliant
- [ ] Mobile responsive

---

### Task 7: Checkout Page ⏳

**File:** `/pages/shop/Checkout.tsx`  
**Priority:** High  
**Effort:** 2 hours  
**Status:** Not Started

**Requirements:**
- Multi-step checkout flow
- Customer information form
- Shipping address form
- Billing address form
- Payment method selection
- Order summary sidebar
- Age verification (21+ for alcohol)
- Terms acceptance
- Place Order CTA

**Checkout Steps:**
1. **Contact Information**
   - Email
   - Phone
   - Age verification checkbox

2. **Shipping Address**
   - Full name
   - Street address
   - City, Province, Postal code
   - Country (default South Africa)

3. **Billing Address**
   - Same as shipping checkbox
   - Optional different billing address

4. **Payment Method**
   - Credit Card (placeholder)
   - EFT (placeholder)
   - Payment on collection

5. **Review & Place Order**
   - Summary of all info
   - Edit links for each section
   - Terms & Conditions checkbox
   - Place Order button

**Order Summary Sidebar:**
- Cart items (collapsed)
- Subtotal
- Shipping
- Tax
- Total
- Estimated delivery

**Form Components:**
- Input (v2.0)
- Select (v2.0)
- Checkbox
- Button (v2.0)
- Form validation
- Error messages

**Acceptance Criteria:**
- [ ] All form fields present
- [ ] Validation works
- [ ] Error messages clear
- [ ] Age verification required
- [ ] Summary accurate
- [ ] Mobile responsive (form stacks)
- [ ] WCAG AA compliant
- [ ] Keyboard navigation works

---

### Task 8: Order Confirmation ⏳

**File:** `/pages/shop/OrderConfirmation.tsx`  
**Priority:** Medium  
**Effort:** 1 hour  
**Status:** Not Started

**Requirements:**
- Order confirmation message
- Order number
- Order details summary
- Shipping address
- Estimated delivery date
- Email confirmation notice
- Continue Shopping CTA
- Print Order button

**Sections:**
1. **Success Header**
   - Green checkmark icon
   - "Thank you for your order!"
   - Order number

2. **Order Details**
   - Items ordered (with thumbnails)
   - Quantities
   - Prices
   - Total

3. **Shipping Information**
   - Delivery address
   - Estimated delivery date
   - Tracking info (future)

4. **What's Next**
   - Email confirmation sent
   - Processing timeline
   - Contact info for questions

5. **CTAs**
   - View Order History (future)
   - Continue Shopping
   - Print Order

**Acceptance Criteria:**
- [ ] Success message clear
- [ ] Order details accurate
- [ ] Order number generated
- [ ] Print functionality works
- [ ] CTAs work
- [ ] Mobile responsive
- [ ] WCAG AA compliant

---

## Component Requirements

**New Components Needed:**
- ProductCard (reusable for category pages)
- ProductGrid (layout wrapper)
- ProductFilter (filter sidebar)
- ProductSort (sort dropdown)
- CartItem (cart line item)
- CheckoutStep (step indicator)
- OrderSummary (sidebar component)

**Existing Components to Use:**
- Button (v2.0)
- Typography (v2.0)
- Container (v2.0)
- Card (v2.0)
- Badge (v2.0)
- Input (v2.0)
- Select (v2.0)
- BreadcrumbsBar

---

## Design Token Usage

**All pages must use:**

**Colors:**
- Backgrounds: --twb-color-bg-primary, --twb-color-bg-secondary, --twb-color-bg-tertiary
- Text: --twb-color-text-primary, --twb-color-text-secondary
- CTAs: --twb-color-plum
- Accents: --twb-color-vine, --twb-color-gold

**Spacing:**
- Section padding: --twb-spacing-section-y
- Container padding: --twb-spacing-container-x
- Grid gaps: --twb-spacing-grid-gap
- Component spacing: --twb-spacing-{4,6,8,12}

**Typography:**
- Headings: --twb-font-serif, --twb-text-{h1,h2,h3,h4}
- Body: --twb-font-sans, --twb-text-body
- Captions: --twb-text-caption

**Shadows:**
- Cards: --twb-shadow-md
- Hover: --twb-shadow-lg
- Modals: --twb-shadow-xl

**Radius:**
- Cards: --twb-radius-card
- Buttons: --twb-radius-button
- Inputs: --twb-radius-input

---

## Accessibility Requirements

**All pages must meet:**

**WCAG 2.1 AA:**
- [ ] Contrast ratios ≥ 4.5:1 (text)
- [ ] Touch targets ≥ 44px
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Focus rings visible (gold)
- [ ] Screen reader friendly
- [ ] ARIA labels where needed
- [ ] Form labels associated
- [ ] Error messages descriptive

**Forms:**
- [ ] Labels for all inputs
- [ ] Required field indicators
- [ ] Error messages with aria-invalid
- [ ] Success messages with aria-live
- [ ] Keyboard submit (Enter)

**Images:**
- [ ] Alt text for all images
- [ ] Decorative images aria-hidden
- [ ] Product images descriptive

---

## Testing Checklist

**Before marking complete:**

**Functionality:**
- [ ] Add to Cart works
- [ ] Quantity selectors work
- [ ] Remove from Cart works
- [ ] Filtering works
- [ ] Sorting works
- [ ] Form validation works
- [ ] Checkout flow completes

**Responsive:**
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px+)
- [ ] Large desktop (1440px+)

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Contrast validated
- [ ] Focus rings visible
- [ ] Touch targets adequate

**Cross-Browser:**
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

---

## Data Requirements

**Using `/data/products.ts`:**

**Products Available:**
- 6 Wines (Shiraz, Cabernet, Chenin Blanc, Chardonnay, Rosé, Red Blend)
- 3 Spirits (Grappa, 5yr Brandy, 10yr Brandy)
- 4 Cheeses (Fresh Chèvre, Herbed, Aged, Wine-Washed)
- 4 Gift Sets (Tasting Trio, Cheese & Wine, Brandy & Chocolate, Ultimate Collection)

**Product Data Fields:**
- id, name, slug, category, subcategory
- price, compareAtPrice
- description, shortDescription
- image, images (array)
- inStock, inventory
- volume, weight
- tastingNotes (appearance, nose, palate, finish)
- pairing (foods array)
- awards (array of {name, year, medal})
- winemaker, cheesemaker, distiller (notes)
- vintage, varietal, aging, abv

**Helper Functions:**
- getProductsByCategory(category)
- getProductBySlug(slug)
- getFeaturedProducts()
- getRelatedProducts(product)

---

## Voice & Tone

**Shop Pages Voice:**
- Warm and inviting
- Sensory and descriptive
- Confident but not pretentious
- Educational without jargon
- Family-oriented

**Example Copy:**

**Good:**
- "Our Shiraz is bold and spicy, with notes of dark cherry and black pepper. Perfect with a braai or rich stew."
- "Annelie makes this chèvre fresh every week from our own goats' milk."
- "Hennie distills our grappa the old-school way—slow and patient."

**Avoid:**
- "Leveraging artisanal techniques to deliver exceptional quality."
- "Our premium wine portfolio offers sophisticated flavor profiles."
- "Utilize our e-commerce platform to acquire products."

---

## SEO Requirements

**All pages need:**
- Meta title (50-60 chars)
- Meta description (150-160 chars)
- Schema.org structured data
- Open Graph tags
- Semantic HTML (h1, h2, article, section)
- Image alt text
- Breadcrumb schema

**Example Schema (Product):**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Estate Shiraz 2021",
  "description": "...",
  "image": "...",
  "brand": "Handcrafted Wines",
  "offers": {
    "@type": "Offer",
    "price": "185",
    "priceCurrency": "ZAR",
    "availability": "InStock"
  }
}
```

---

## Success Metrics

**Task completion criteria:**

**Functionality:**
- All 8 pages created
- All forms work
- Add to Cart works across all pages
- Checkout flow completes
- Order confirmation displays

**Quality:**
- 100% design token usage
- WCAG AA compliant
- Mobile responsive
- JSDoc v2.0 documentation
- TypeScript interfaces

**User Experience:**
- < 3 seconds page load
- Smooth interactions
- Clear CTAs
- Helpful error messages
- Easy to navigate

---

## Next Steps After Completion

**Future Enhancements:**
1. Payment gateway integration (Stripe/PayFast)
2. Inventory management
3. Customer reviews
4. Product recommendations AI
5. Wishlist feature
6. Gift wrapping service
7. Subscription (Wine Club)
8. Age verification modal

---

## Related Documentation

- `/data/products.ts` - Product catalog
- `/guidelines/design-tokens/` - Design token specifications
- `/guidelines/accessibility/wcag-compliance.md` - Accessibility standards
- `/components/common/` - Common components v2.0
- `/components/ui/` - UI components v2.0

---

## Notes

**Design Principles:**
- Family farm story throughout
- Sensory, descriptive copy
- High-quality product photography (placeholder for now)
- Clear, simple navigation
- Trust signals (awards, family story, quality guarantee)

**Technical Notes:**
- Using React Context for cart state
- localStorage for cart persistence
- Client-side filtering/sorting (small dataset)
- No backend yet (placeholder checkout)

---

**Created:** March 14, 2026  
**Last Updated:** March 14, 2026  
**Status:** Ready to begin  
**Next Task:** Product Category - Wines
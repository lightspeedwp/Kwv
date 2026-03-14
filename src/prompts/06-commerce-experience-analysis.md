# Commerce Experience Analysis Prompt

## Objective

Analyze the current e-commerce and experience booking flows and develop comprehensive product, cart, checkout, and booking experiences aligned with The Wire Brand positioning.

## Input Sources

1. `/imports/pasted_text/wine-brand-brief.md` (Section 2: Product content strategy, Section 3: Experience/Events)
2. `/imports/pasted_text/redesign-brief.md` (Section 6: Content architecture)
3. Current shop components in `/components/shop/` directory
4. Current shop pages in `/pages/shop/` directory
5. `/Guidelines.md` Section 4.3 (Shop pages)
6. Reports from prompts 01, 02, 03 (for visual, content, and component context)

## Dependencies

**Must Complete First:**
- 01-visual-design-analysis (for visual tokens and style guide)
- 02-content-strategy-analysis (for product content templates)
- 03-component-architecture-analysis (for component patterns)

## Analysis Requirements

### 1. Current Commerce Audit

Inventory all e-commerce functionality:

#### Shop Pages
- `/pages/shop/Shop.tsx` (product listing)
- `/pages/shop/Product.tsx` (single product)
- `/pages/shop/Cart.tsx`
- `/pages/shop/Checkout.tsx`
- `/pages/shop/OrderConfirmation.tsx`
- `/pages/shop/MyAccount*.tsx` (account pages)

For each page:
- Current structure and sections
- Form handling approach
- State management
- Validation patterns
- Error handling
- Success messaging
- Mobile responsiveness
- Accessibility compliance

#### Shop Components
Catalog components in `/components/shop/`:
- Product cards
- Product gallery
- Add to cart patterns
- Cart items
- Checkout steps
- Order summary
- Payment methods
- Shipping methods
- etc.

#### Product Types
Current vs. Required:

**Current:**
- Generic products (if any)

**Required (from wine-brand-brief):**
- Individual wines (bottle, case)
- Wine subscription boxes (3/6/12 bottle plans)
- Experience tickets (tastings, tours)
- Event tickets (seasonal events)
- Gift vouchers
- Merchandise (glasses, accessories)

### 2. Gap Analysis

#### Product Experience Gaps

**Wine Products:**
- Missing sensory tasting notes
- No vintage/variety information architecture
- No pairing suggestions
- No wine club upsell
- Generic product layout (not wine-specific)

**Subscription Product:**
- No subscription-specific product page
- Missing plan selector (3/6/12 bottles, frequency)
- No gift subscription flow
- Missing member benefits explanation
- No 3D box showcase (see prompt 07)

**Experience Products:**
- No experience-specific template
- Missing booking calendar
- No group size selector
- No availability messaging
- No experience image gallery

**Event Products:**
- No event-specific template
- Missing ticket tier selection
- No event schedule display
- No capacity/availability indicator
- No event image gallery

#### Cart & Checkout Gaps

**Cart:**
- Generic WooCommerce cart (if exists)
- No wine-specific messaging (age verification, shipping restrictions)
- No subscription special handling
- No experience booking summary
- No gift wrapping option
- No tasting notes preview

**Checkout:**
- Current checkout structure vs. required
- Missing delivery method selector (Standard/Pickup)
- No pickup location selector
- No gift message option
- No subscription-specific fields (delivery frequency, start date)
- No experience-specific fields (date selection, group size)

**Order Confirmation:**
- Generic confirmation vs. wine brand messaging
- No wine education content
- No account creation upsell (for guests)
- No related product recommendations
- No social sharing incentive

### 3. Product Page Redesign

Develop detailed specs for each product type:

#### Wine Product Page

**Structure:**
```
Hero Image Gallery
├─ Product Image Gallery (4-6 images)
│  └─ Zoom on hover, click to expand
├─ Product Breadcrumbs
└─ Store Notices

Product Information (2-column split)
├─ Left: Image + Gallery thumbnails
└─ Right: Product Details
   ├─ Brand kicker (if applicable)
   ├─ Product Title (H1)
   ├─ Product Rating (if reviews exist)
   ├─ Product Price
   │  ├─ Regular price
   │  ├─ Sale price (if applicable)
   │  └─ Wine club member price (if applicable)
   ├─ Tasting Notes (expandable)
   ├─ Quick Details (Variety, Vintage, ABV, etc.)
   ├─ Pairing Suggestions
   ├─ Add to Cart
   │  ├─ Quantity selector
   │  ├─ Bottle vs. Case selector (if applicable)
   │  └─ Add to cart button
   └─ Wine Club CTA
      └─ "Save 15% as a Wine Club member"

Product Tabs/Accordions
├─ The Story (rich description)
├─ Tasting Notes (full sensory profile)
├─ Food Pairings (detailed suggestions)
├─ Winemaking (process, barrel aging, etc.)
├─ Awards & Recognition (if any)
└─ Reviews (customer reviews)

Related Products
└─ "You might also love" (similar wines)

Upsell Section
└─ Wine Club CTA (if not a member)
```

**Component Needs:**
- `WineProductGallery.tsx` (enhanced ProductGallery)
- `WineTastingNotes.tsx` (formatted sensory profile)
- `WinePairingSuggestions.tsx`
- `WineQuickDetails.tsx` (variety, vintage, ABV table)
- `WineClubUpsell.tsx`
- `ProductTabs.tsx` (already exists, may need wine variant)

**Content Template (from report 02):**
```markdown
# [Wine Name]
## [Variety] | [Vintage] | [Region]

Tasting Notes: [75-100 words, sensory]
"Imagine [flavors]. [Texture]. [Finish]."

The Story: [100-150 words, craft-focused]

Pairs With:
- [Food 1]: [Why]
- [Food 2]: [Why]
- [Food 3]: [Why]

Details:
- Grape: [Variety]
- Vintage: [Year]
- Alcohol: [%]
- Bottle Size: [ml]
- Aging: [Process]
```

#### Subscription Product Page

**Structure:**
```
Hero Section
├─ 3D Wine Box Showcase (see prompt 07)
├─ Headline: "The Wire Box: Handcrafted Wines, Delivered"
├─ Subheadline: Value proposition
└─ Primary CTA: "Choose Your Plan"

Value Proposition
├─ What's Inside
├─ How It Works
└─ Member Benefits

Plan Selector (Interactive Cards)
├─ 3-Bottle Box
│  ├─ Price per delivery
│  ├─ Frequency selector (Monthly/Bi-monthly/Quarterly)
│  └─ "Select Plan" button
├─ 6-Bottle Box (Most Popular badge)
│  ├─ Price per delivery
│  ├─ Frequency selector
│  └─ "Select Plan" button
└─ 12-Bottle Box
   ├─ Price per delivery
   ├─ Frequency selector
   └─ "Select Plan" button

Wine Selection Options
├─ Mixed Selection (Default)
├─ Reds Only
├─ Whites Only
└─ Curator's Choice (Seasonal)

Gift Subscription Option
├─ "Send as a gift" toggle
├─ Gift duration selector (3/6/12 months)
└─ Gift message field

Member Perks
├─ 15% off all wines
├─ Early access to limited releases
├─ Free tasting experience voucher
├─ Exclusive member events
└─ Cancel anytime

How It Works (Timeline)
1. Choose your plan
2. We curate the perfect selection
3. Delivered to your door
4. Enjoy with our tasting notes

Sample Past Boxes
├─ "Autumn Harvest Box" (3 wine cards)
├─ "Summer Sipper Box" (3 wine cards)
└─ "Reserve Collection Box" (3 wine cards)

Testimonials
└─ "What our members say" (3 reviews)

FAQ Accordion
├─ Can I skip a delivery?
├─ What if I don't like a wine?
├─ Can I gift a subscription?
├─ When will I be charged?
└─ How do I cancel?

Final CTA
└─ "Start Your Subscription"
```

**Component Needs:**
- `WineBox3D.tsx` (WebGL feature, see prompt 07)
- `SubscriptionPlanSelector.tsx`
- `SubscriptionFrequencyToggle.tsx`
- `SubscriptionWineTypeSelector.tsx`
- `SubscriptionGiftOption.tsx`
- `SubscriptionMemberPerks.tsx`
- `SubscriptionHowItWorks.tsx`
- `SubscriptionPastBoxes.tsx`
- `SubscriptionTestimonials.tsx`

#### Experience Product Page

**Structure:**
```
Hero
├─ Image Gallery (farm, tasting room, vineyards)
├─ Experience Title (H1)
└─ One-line value proposition

The Experience
├─ Immersive description (150-200 words)
├─ What You'll Do (bulleted steps)
└─ Image mosaic

Details Card
├─ Duration
├─ Group Size
├─ Included
├─ Price per person
└─ Booking Calendar

Perfect For
└─ [Who this suits]

What's Included
├─ Guided vineyard tour
├─ Cellar visit
├─ 5-wine tasting
├─ Tasting notes
└─ Souvenir glass

Add-Ons (Optional)
├─ Food pairing board (+$X)
├─ Extra guest (+$X)
└─ Wine bottle to take home (+$X)

Reviews
└─ Customer testimonials

Related Experiences
└─ "You might also enjoy"

Booking CTA
└─ "Check Availability" → Calendar modal
```

**Component Needs:**
- `ExperienceGallery.tsx`
- `ExperienceDetailsCard.tsx`
- `ExperienceBookingCalendar.tsx` (date/time picker)
- `ExperienceIncluded.tsx`
- `ExperienceAddOns.tsx`
- `ExperienceGroupSizeSelector.tsx`

#### Event Product Page

**Structure:**
```
Hero
├─ Event Image (full-width)
├─ Event Title
├─ Date/Time
└─ Location

The Experience
├─ Evocative description (200-250 words)
└─ Image gallery

Event Schedule
├─ 16:00 - Arrival & welcome drink
├─ 16:30 - Vineyard walk
├─ 17:30 - Seated tasting
├─ 19:00 - Farm-to-table dinner
└─ 21:00 - Event close

Ticket Tiers
├─ General Admission
│  ├─ What's included
│  ├─ Price
│  └─ Quantity selector
├─ VIP Experience
│  ├─ What's included (+ extras)
│  ├─ Price
│  └─ Quantity selector
└─ Table Reservation (Group of 6)
   ├─ What's included
   ├─ Price
   └─ Quantity selector

What's Included (per tier)
└─ Detailed breakdown

Event Details
├─ Date & Time
├─ Location & directions
├─ Parking & accessibility
├─ Dress code (if any)
└─ Age restrictions

FAQ
├─ Can I get a refund?
├─ What if it rains?
├─ Can I bring children?
└─ Is food provided?

Get Tickets CTA
└─ "Select Tickets" → Adds all to cart
```

**Component Needs:**
- `EventHero.tsx`
- `EventSchedule.tsx`
- `EventTicketTiers.tsx`
- `EventTicketSelector.tsx`
- `EventDetailsTable.tsx`

### 4. Cart Experience Redesign

#### Cart Page Structure
```
Page Header
└─ "Your Wine Selection" (not "Cart")

Cart Items List
├─ Wine Product Row
│  ├─ Image
│  ├─ Name, vintage, variety
│  ├─ Tasting note preview (1 sentence)
│  ├─ Quantity selector
│  ├─ Price
│  └─ Remove button
├─ Subscription Row (if applicable)
│  ├─ Box image
│  ├─ Plan details (6 bottles, monthly)
│  ├─ Edit plan button
│  └─ Price
└─ Experience/Event Row
   ├─ Image
   ├─ Name, date, time
   ├─ Attendees
   └─ Price

Special Options
├─ Gift wrapping (checkbox)
├─ Gift message (textarea)
└─ Delivery notes

Cart Summary
├─ Subtotal
├─ Shipping estimate
├─ Tax estimate (if applicable)
├─ Discount (if coupon applied)
└─ Total

Trust Signals
├─ Secure checkout badge
├─ Free shipping over $X
└─ Money-back guarantee

Actions
├─ Continue Shopping (secondary)
└─ Proceed to Checkout (primary, hero style)

Recommended Wines
└─ "Complete your collection" (3-4 wines)

Empty State
├─ Illustration (empty wine bottle outline)
├─ "Your cart's looking a little lonely"
└─ "Browse our wines" CTA
```

**Component Needs:**
- `CartItemWine.tsx`
- `CartItemSubscription.tsx`
- `CartItemExperience.tsx`
- `CartGiftOptions.tsx`
- `CartSummary.tsx`
- `CartEmptyState.tsx`

#### Mini Cart Drawer

Enhance existing `/components/shop/cart/MiniCart.tsx`:

**Structure:**
```
Header
├─ "Your Selection" (X items)
└─ Close button

Items List (scrollable)
├─ Mini cart item (simplified)
│  ├─ Thumbnail
│  ├─ Name
│  ├─ Quantity × Price
│  └─ Remove
└─ [Repeat]

Summary
├─ Subtotal
└─ "Free shipping on $150+" (if close to threshold)

Actions
├─ View Cart (secondary)
└─ Checkout (primary)

Empty State
├─ Icon
├─ "No wines selected yet"
└─ "Start exploring" CTA
```

### 5. Checkout Experience Redesign

Current: `/pages/shop/Checkout.tsx`
Enhancement needed: Wine-specific, experience-friendly checkout

#### Checkout Structure

**Layout:**
- Left: Form steps (60% width)
- Right: Order summary (40% width, sticky)

**Steps:**
1. Contact Information
2. Delivery Method & Address
3. Payment

**Step 1: Contact Information**
```
Contact Info
├─ Email (floating label)
├─ "Create account" checkbox
│  └─ If checked: Password field appears
└─ Phone (optional, for delivery updates)

Age Verification
├─ Checkbox: "I confirm I am over 18"
└─ Required for alcohol products
```

**Step 2: Delivery Method & Address**

```
Delivery Method Selector
├─ [ ] Standard Delivery
│   └─ "Delivered in 3-5 business days"
└─ [ ] Pickup from Farm
    └─ "Ready in 1-2 days"

IF Standard Delivery:
  Shipping Address Form
  ├─ First Name, Last Name
  ├─ Address Line 1, 2
  ├─ City, Province, Postal Code
  └─ Delivery notes

IF Pickup:
  Pickup Location Selector
  ├─ [ ] The Wire Brand Farm (Paarl)
  │   └─ Address, hours, directions
  └─ Pickup Date Selector
      └─ Calendar (min 2 days out)

Billing Address
├─ [ ] Same as shipping
└─ IF unchecked: Billing form appears
```

**Step 3: Payment**

```
Payment Method
├─ [ ] Credit/Debit Card
├─ [ ] PayFlex (4 interest-free payments)
└─ [ ] EFT/Bank Transfer

Card Details (if card selected)
├─ Card Number (Stripe/Payfast integration)
├─ Expiry, CVV
└─ Cardholder Name

PayFlex Widget (if PayFlex selected)
└─ "4 payments of $X every 2 weeks"

Order Review
├─ Terms & Conditions checkbox
└─ Privacy Policy checkbox

Place Order Button
└─ "Complete Your Order" (large, hero style)
```

**Component Needs:**
- `CheckoutStepIndicator.tsx` (visual progress)
- `DeliveryMethodSelector.tsx` (enhanced)
- `PickupLocationSelect.tsx` (enhanced)
- `AgeVerificationCheckbox.tsx`
- `PayflexWidget.tsx` (already exists, verify)
- `CheckoutOrderReview.tsx`

### 6. Order Confirmation Enhancement

Current: `/pages/shop/OrderConfirmation.tsx`

**Enhanced Structure:**
```
Success Header
├─ Icon (wine bottle with checkmark)
├─ "Your order is confirmed!"
├─ Order number
└─ Confirmation email message

Order Summary
├─ Order number
├─ Date
├─ Items ordered (with thumbnails)
└─ Total paid

Delivery Information
├─ IF Delivery: Address, estimated date
└─ IF Pickup: Location, pickup date, directions

What's Next
├─ "Your wines are being carefully prepared"
├─ "You'll receive updates at [email]"
└─ IF Subscription: "Your first box ships on [date]"

Account Creation (for guests)
├─ "Create an account to track your order"
├─ Email (pre-filled)
├─ Set password
└─ "Create Account" button

While You Wait
├─ "Learn About Your Wines" (link to journal)
├─ "Plan Your Next Tasting" (link to experiences)
└─ "Join Our Wine Club" (if not subscribed)

Share the Love
├─ "Tell your friends about The Wire Brand"
├─ Social share buttons
└─ Referral code (if applicable)
```

**Component Needs:**
- `OrderSuccessHeader.tsx`
- `OrderSummaryTable.tsx` (enhanced)
- `OrderNextSteps.tsx`
- `OrderAccountCreation.tsx` (already exists, verify)
- `OrderSocialShare.tsx`

### 7. Commerce Flows & User Journeys

Map critical user paths:

#### Flow 1: First-Time Wine Purchase
```
Homepage
→ Browse Wines (Shop)
→ Wine Product Page
→ Add to Cart
→ Continue Shopping or Checkout
→ Guest Checkout
→ Order Confirmation
→ (Upsell: Create Account)
```

#### Flow 2: Wine Club Subscription
```
Homepage
→ "Join Wine Club" CTA
→ Subscription Product Page
  → View 3D box
  → Choose plan (6 bottles, monthly)
  → Choose selection type (mixed)
  → Add to cart
→ Checkout (subscription-specific fields)
→ Order Confirmation (subscription welcome)
```

#### Flow 3: Experience Booking
```
Homepage
→ "Visit Us" / Experiences
→ Experience Listing
→ Experience Detail
→ Check Availability (calendar modal)
→ Select date, time, group size
→ Add to cart
→ Checkout (experience-specific fields)
→ Order Confirmation (booking details, directions)
```

#### Flow 4: Event Ticket Purchase
```
Events Listing
→ Event Detail
→ Select ticket tier(s)
→ Add to cart
→ Checkout
→ Order Confirmation (ticket details, calendar invite)
```

### 8. Product Data Structure

Define required product metadata:

#### Wine Product Fields
```typescript
interface WineProduct {
  id: string;
  name: string;
  slug: string;
  brand?: string;
  variety: string;
  vintage: number;
  region: string;
  price: number;
  salePrice?: number;
  wineClubPrice?: number;
  
  // Content
  tastingNotes: string; // Rich sensory description
  story: string; // Craft narrative
  pairings: Array<{
    food: string;
    reason: string;
  }>;
  
  // Details
  alcohol: number; // ABV %
  bottleSize: number; // ml
  aging?: string; // Process description
  awards?: Array<{
    year: number;
    name: string;
    category: string;
  }>;
  
  // Media
  images: string[]; // Gallery
  labelImage?: string; // Standalone label
  
  // Categorization
  categories: string[]; // Red, White, Rosé
  tags: string[]; // Bold, Fruity, etc.
  
  // Inventory
  inStock: boolean;
  stockQuantity?: number;
  
  // Options
  bottleOrCase: 'bottle' | 'case' | 'both';
}
```

#### Subscription Product Fields
```typescript
interface SubscriptionProduct {
  id: string;
  name: string;
  slug: string;
  
  // Plans
  plans: Array<{
    size: 3 | 6 | 12;
    price: number;
    frequencies: Array<'monthly' | 'bimonthly' | 'quarterly'>;
  }>;
  
  // Options
  selectionTypes: Array<'mixed' | 'red' | 'white' | 'curated'>;
  
  // Benefits
  memberPerks: string[];
  discount: number; // % off shop wines
  
  // Content
  description: string;
  howItWorks: string[];
  pastBoxes?: Array<{
    name: string;
    wines: string[]; // Wine IDs
    image: string;
  }>;
  
  // Media
  boxImage: string; // For 3D model texture
  heroImage: string;
}
```

#### Experience Product Fields
```typescript
interface ExperienceProduct {
  id: string;
  name: string;
  slug: string;
  
  // Details
  duration: string; // "2 hours"
  maxGroupSize: number;
  minGroupSize: number;
  pricePerPerson: number;
  
  // Content
  description: string; // Immersive, 150-200 words
  whatYouDo: string[]; // Steps
  included: string[];
  perfectFor: string;
  
  // Booking
  availabilityCalendar: boolean; // Needs calendar integration
  bookingLeadTime: number; // Days in advance required
  
  // Add-ons
  addOns?: Array<{
    name: string;
    price: number;
    description: string;
  }>;
  
  // Media
  images: string[];
  videoUrl?: string;
}
```

#### Event Product Fields
```typescript
interface EventProduct {
  id: string;
  name: string;
  slug: string;
  
  // Event Details
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  
  // Tickets
  ticketTiers: Array<{
    name: string; // "General", "VIP", "Table of 6"
    price: number;
    capacity: number;
    sold: number;
    included: string[];
  }>;
  
  // Content
  description: string; // 200-250 words
  schedule: Array<{
    time: string;
    activity: string;
  }>;
  
  // Details
  ageRestriction?: number;
  dressCode?: string;
  accessibility: string;
  weatherPolicy: string;
  
  // Media
  images: string[];
}
```

### 9. State Management for Commerce

Current approach vs. recommended:

**Cart State:**
- Use Context API or Zustand
- Persist to localStorage
- Sync across tabs (if possible)

**Checkout State:**
- Multi-step form state
- Validation per step
- Error handling
- Submission state

**Product State:**
- React Query for fetching
- Optimistic updates (add to cart)
- Cache invalidation strategy

### 10. Accessibility & Compliance

**Age Verification:**
- Required for all alcohol products
- Checkbox in checkout
- Modal on homepage (if required by law)

**Shipping Restrictions:**
- Display restricted regions clearly
- Block checkout if shipping to restricted area
- Provide alternative (pickup)

**Allergen Information:**
- For food pairings or experience meals
- Clear labeling
- Dietary options indicated

## Deliverables for Report

Generate `/reports/06-commerce-experience-report.md` containing:

### Executive Summary
Overview of commerce transformation

### Current Commerce Audit
- All shop pages and components cataloged
- Current product types vs. required
- Current flows vs. required
- Gaps identified

### Gap Analysis
- Missing product page templates (4 types)
- Missing cart enhancements
- Missing checkout features
- Missing confirmation enhancements

### Detailed Recommendations

#### Product Page Specifications
For each product type (Wine, Subscription, Experience, Event):
1. Complete page structure (wireframe text)
2. Component list (new + modified)
3. Content template
4. Data structure (TypeScript interface)
5. User flow
6. Acceptance criteria

#### Cart & Checkout Specifications
1. Cart page redesign
2. Mini cart enhancements
3. Checkout step-by-step
4. Order confirmation enhancements
5. Component list
6. State management approach

#### Commerce Flows
- 4+ complete user journey maps
- Decision trees for conditional logic
- Error/edge case handling

#### Data Structures
- Complete TypeScript interfaces for all product types
- Metadata requirements
- API endpoint suggestions (if backend)

### File-Specific Implementation Notes

- `/pages/shop/Product.tsx` - [Needs variant logic for product types]
- `/pages/shop/subscription/WineClub.tsx` - [New file, subscription product]
- `/components/shop/WineTastingNotes.tsx` - [New component]
- [Continue for all files]

### Acceptance Criteria

- [ ] 4 product page types specified
- [ ] Cart supports all product types
- [ ] Checkout supports delivery method selector
- [ ] Subscription flow complete
- [ ] Experience booking flow complete
- [ ] Event ticketing flow complete
- [ ] Age verification implemented
- [ ] All TypeScript interfaces defined

### Risk Assessment

1. **Complexity:** 4 product types add significant logic
   - *Mitigation:* Start with wine products, add others incrementally

2. **Backend Integration:** Product data needs API/CMS
   - *Mitigation:* Use mock data for prototype, document API needs

3. **Payment Processing:** Stripe/Payfast integration required
   - *Mitigation:* Mock payment step for prototype, document integration

### Dependency Mapping

- **Blocks:** 10-implementation-priority-analysis
- **Blocked By:** 01, 02, 03 (visual, content, component foundations)
- **Enables:** Final task list generation

## Quality Standards

The report must:

- Provide complete page structures (text wireframes)
- Include all TypeScript interfaces
- Map user flows visually (text-based flowcharts OK)
- Reference existing components where possible
- Estimate new component count
- Be implementable by a React/e-commerce developer

## Success Metrics

- [ ] 4 complete product page specs
- [ ] Cart redesign fully documented
- [ ] Checkout flow fully documented
- [ ] 10+ new components specified
- [ ] All TypeScript interfaces provided
- [ ] 4+ user journey maps
- [ ] Accessibility compliance verified

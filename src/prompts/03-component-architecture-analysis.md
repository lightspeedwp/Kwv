# Component Architecture Analysis Prompt

## Objective

Analyze the current React component architecture and develop a refactoring plan that aligns with The Wire Brand redesign, WordPress block patterns, and the twb- naming convention.

## Input Sources

1. `/imports/pasted_text/redesign-brief.md` (Section 10: WordPress-aligned CSS, Section 12: Components to redesign)
2. Current component structure in `/components/` directory
3. `/Guidelines.md` Section 7 (React component architecture & mapping)
4. `/styles/globals.css` for current class naming patterns

## Analysis Requirements

### 1. Current Component Inventory

Catalog all existing components:

#### Layout Components (`/components/layout/`)
For each component:
- File path
- Current class naming convention
- Props interface
- State management approach
- Child components
- Usage frequency (how many pages use it)
- WordPress template part mapping

**Example Output:**
```
Component: Header.tsx
Path: /components/layout/Header.tsx
Classes: Uses mix of `nav`, `header`, Tailwind utilities
Props: { variant?: 'corporate' | 'shop' | 'checkout' }
State: None (stateless)
Children: Logo, Navigation, SearchBar, MiniCartTrigger
Usage: All pages (via Layout.tsx)
WP Mapping: header-main, header-shop, header-checkout template parts
Issues: No twb- namespace, variant switching logic in component
```

#### Section Components (`/components/sections/`)
- Hero variants
- FullWidthSection
- BrandGrid
- Newsletter
- FAQSection
- LatestNews
- etc.

#### Shop Components (`/components/shop/`)
- Product cards
- Cart components
- Checkout components
- Order confirmation components
- etc.

#### Common/UI Components (`/components/common/`, `/components/ui/`)
- Button
- Typography
- Container
- Logo
- etc.

### 2. Naming Convention Analysis

#### Current Class Naming Patterns
Audit all className usage:

- Tailwind utilities: `flex`, `grid`, `bg-burgundy-600`
- Custom classes: Any non-Tailwind classes
- WordPress block classes: `wp-block-*` (if any)
- Inconsistencies: Mixed patterns, one-off names

#### Required twb- Namespace Migration

Map current classes to twb- equivalents:

**Current → New:**
```
.hero → .twb-hero
.hero__content → .twb-hero__content
.hero__media → .twb-hero__media

.card → .twb-card
.card--wine → .twb-card--wine

.section → .twb-section
.section--paper → .twb-section--paper
```

#### BEM Adoption Strategy

Identify components that should use BEM:

**Good candidates:**
- Components with internal structure (Hero, Card, ProductGallery)
- Reusable components (Button, Input)
- Complex interactive components (Navigation, Accordion)

**Poor candidates:**
- Simple wrappers (Container)
- One-off utilities
- Tailwind-only components

### 3. WordPress Block Alignment

Map React components to WordPress block patterns:

#### Core Blocks Mapping
```
React Component → WP Block Equivalent → Template Part

Hero.tsx → cover block / group → hero template part
BrandGrid.tsx → terms-query + term-template → brand-grid pattern
LatestNews.tsx → query loop + post-template → latest-news pattern
FAQSection.tsx → accordion group → faq-section pattern
```

#### Custom Blocks Needed
Identify components that would need custom WordPress blocks:
- Subscription box (custom product block)
- Wine Club CTA (custom promotional block)
- Experience cards (custom query template)

### 4. Component Refactoring Priorities

Prioritize components based on redesign impact:

#### Tier 1: Critical Visual Impact
- Hero (all variants)
- Header (all variants)
- Footer (all variants)
- Product cards (wine, experience, event)
- Button (all variants)

#### Tier 2: High Impact
- BrandGrid
- Newsletter
- FAQSection
- FullWidthSection
- ProductGallery
- Cart components

#### Tier 3: Medium Impact
- BreadcrumbsBar
- Typography wrappers
- Form components
- Order confirmation components

#### Tier 4: Low Impact (Minimal Changes)
- Container variants
- ScrollToTop
- BackToTopButton

### 5. Component Redesign Specifications

For each Tier 1 component, provide detailed redesign specs:

#### Hero Component

**Current Issues:**
- [List issues: inconsistent heights, no organic shapes, etc.]

**Required Changes:**

1. **Visual:**
   - Add organic bottom edge using SVG clip-path
   - Implement paper texture overlay
   - Add subtle hand-drawn underline to headline
   - Adjust color tokens to twb- palette

2. **Structural:**
   - Ensure `min-h-[calc(100dvh-90px)]` on mobile
   - Add `ScrollDownArrow` component integration
   - Implement `pb-32` bottom padding for arrow clearance

3. **Props Interface:**
```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: 'light' | 'dark' | 'none';
  height?: 'standard' | 'tall' | 'full';
  variant?: 'corporate' | 'shop' | 'wine-club';
  buttons?: Array<{
    label: string;
    href: string;
    variant: 'hero' | 'heroGold';
  }>;
  showScrollArrow?: boolean;
}
```

4. **Class Naming:**
```tsx
<section className="twb-hero twb-hero--corporate">
  <div className="twb-hero__overlay">
    <div className="twb-hero__content">
      <h1 className="twb-hero__title">
        {/* Hand-drawn underline via pseudo-element */}
      </h1>
      <p className="twb-hero__subtitle">{subtitle}</p>
      <div className="twb-hero__actions">
        {/* Buttons */}
      </div>
    </div>
  </div>
  <div className="twb-hero__media">
    {/* Background */}
  </div>
  <svg className="twb-hero__edge" aria-hidden="true">
    {/* Organic bottom edge */}
  </svg>
</section>
```

5. **File Changes:**
- Path: `/components/sections/Hero.tsx`
- Estimated LOC changed: [Number]
- Breaking changes: [Yes/No, explain]

**Repeat for:** Header, Footer, ProductCard, Button, etc.

### 6. New Components Needed

Identify components that don't exist but are required:

#### Decorative Components
- `OrganicDivider.tsx` - SVG section dividers
- `HandDrawnUnderline.tsx` - Animated underline component
- `CellarStamp.tsx` - Badge/stamp component
- `PaperTexture.tsx` - Background texture overlay

#### Content Components
- `WineBox3D.tsx` - WebGL subscription box (see prompt 07)
- `TimelineItem.tsx` - History timeline entry
- `AwardCard.tsx` - Award listing item
- `TastingNote.tsx` - Formatted tasting note block

#### Enhanced Existing
- `ProductCard.tsx` needs wine-specific variant with organic frame
- `EventCard.tsx` needs seasonal badge and ticket tier display

### 7. Component Composition Strategy

Define how components should compose:

#### Layout Hierarchy
```
App
└─ Layout
   ├─ Header (variant switcher)
   │  ├─ CorporateHeader
   │  ├─ ShopHeader
   │  └─ CheckoutHeader
   ├─ BreadcrumbsBar (conditional)
   ├─ {Page Content}
   │  ├─ Hero (page-specific variant)
   │  ├─ Section Components
   │  └─ CTA Sections
   └─ Footer (variant switcher)
```

#### Section Composition Pattern
```tsx
// Page structure pattern
<>
  <Hero variant="shop" {...heroProps} />
  
  <section className="twb-section twb-section--paper">
    <Container variant="content">
      <Typography variant="h2">{heading}</Typography>
      <FullWidthSection {...sectionProps} />
    </Container>
  </section>
  
  <OrganicDivider variant="vine-scribble" />
  
  <section className="twb-section twb-section--ink">
    <Container variant="wide">
      <BrandGrid {...gridProps} />
    </Container>
  </section>
</>
```

### 8. State Management Review

Assess current state management approach:

#### Global State
- Cart state (MiniCart, Cart page)
- User authentication (My Account)
- Age verification modal
- Theme preferences (if any)

#### Recommended Approach
- Context API for cart, auth, age verification
- React Query for data fetching (products, news)
- Local state for UI (accordions, tabs, modals)

#### Files to Review
- Current context providers
- Hook usage patterns
- Prop drilling issues

### 9. TypeScript Interface Standardization

Review and standardize TypeScript interfaces:

#### Common Interfaces
```typescript
// Product types
interface Wine {
  id: string;
  name: string;
  variety: string;
  vintage: number;
  price: number;
  image: string;
  tastingNotes: string;
  // ... etc
}

interface Experience {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  // ... etc
}

// Component prop types
interface HeroProps { /* ... */ }
interface CardProps { /* ... */ }
interface SectionProps { /* ... */ }
```

#### Props Interface Standards
- All props interfaces exported
- Optional props clearly marked
- Variant types use string literals
- Event handlers typed properly

### 10. Accessibility Component Patterns

Ensure components follow accessibility standards:

#### Required Patterns
- Focus management (modals, drawers)
- Keyboard navigation (accordions, tabs)
- ARIA attributes (buttons, links, landmarks)
- Screen reader text (icon buttons)

#### Component-Specific Requirements
- `Accordion`: ARIA expanded/collapsed states
- `Modal`: Focus trap, ESC to close
- `Tabs`: Arrow key navigation, ARIA selected
- `Button`: Disabled state, loading state

## Deliverables for Report

Generate `/reports/03-component-architecture-report.md` containing:

### Executive Summary
Overview of component refactoring strategy

### Current Component Inventory
Complete catalog of all components with:
- File paths
- Current class patterns
- Props interfaces
- Usage analysis
- WP block mapping

### Gap Analysis
- Naming convention inconsistencies
- Missing BEM structure
- WordPress alignment gaps
- Missing components
- Over-complex components
- Under-utilized components

### Detailed Recommendations

#### Naming Convention Migration Plan
- Complete current → twb- mapping table
- BEM adoption strategy
- Class naming standards document

#### Component Refactoring Specifications
For each Tier 1 component:
1. Current issues
2. Visual changes
3. Structural changes
4. Props interface (new)
5. Class naming (before/after)
6. Code snippet examples
7. File paths
8. LOC estimates

#### New Component Specifications
For each new component:
1. Purpose
2. Props interface
3. Visual description
4. Class naming
5. Usage examples
6. File path

#### WordPress Block Mapping
- Component → Block table
- Custom block requirements
- Pattern registration needs

### File-Specific Implementation Notes

For every component file:
- `/components/layout/Header.tsx` - [Specific changes]
- `/components/sections/Hero.tsx` - [Specific changes]
- [Continue for all components]

### Acceptance Criteria

- [ ] All components use twb- namespace
- [ ] BEM applied to 15+ components
- [ ] All Tier 1 components refactored
- [ ] 5+ new decorative components created
- [ ] TypeScript interfaces standardized
- [ ] WordPress block mapping complete
- [ ] Accessibility patterns verified
- [ ] JSDoc comments on all components

### Risk Assessment

1. **Breaking Changes:** Renaming classes may break existing styles
   - *Mitigation:* Use find-replace carefully, test each component

2. **TypeScript Errors:** Changing interfaces may break pages
   - *Mitigation:* Update interfaces gradually, use TypeScript compiler

3. **WordPress Divergence:** React patterns may not map to blocks
   - *Mitigation:* Document mapping clearly, accept some divergence

### Dependency Mapping

- **Blocks:** None (Wave 1 prompt)
- **Blocked By:** None
- **Enables:**
  - 06-commerce-experience-analysis (needs component patterns)
  - 08-svg-asset-generation (needs component integration points)

## Quality Standards

The report must:

- List every component file with full path
- Provide before/after code snippets
- Include TypeScript interfaces
- Show class naming transformations
- Estimate LOC changes per file
- Be implementable by a React developer

## Success Metrics

- [ ] 50+ components cataloged
- [ ] 20+ components with detailed refactor specs
- [ ] 5+ new components specified
- [ ] Complete twb- naming mapping table
- [ ] TypeScript interfaces for all major components
- [ ] WordPress block mapping for 15+ components
- [ ] Accessibility patterns documented

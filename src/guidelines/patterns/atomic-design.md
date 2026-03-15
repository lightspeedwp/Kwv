# Atomic Design Pattern Guidelines

**Version:** 1.0  
**Last Updated:** March 15, 2026  
**Status:** Active  
**Applies To:** All Handcrafted Wines components and pages

---

## Overview

Handcrafted Wines follows the Atomic Design methodology created by Brad Frost. This system organizes components into a five-level hierarchy that mirrors how molecules combine to form complex organisms.

**Philosophy:** Build small, reusable pieces that combine into larger, more complex components.

---

## Quick Reference

### Five Levels of Atomic Design

| Level | Description | Handcrafted Wines Examples | Directory |
|-------|-------------|----------------------------|-----------|
| **Atoms** | Smallest building blocks | Button, Typography, Input | `/components/common/` |
| **Molecules** | Simple groups of atoms | ProductCard, FormField | `/components/shop/` |
| **Organisms** | Complex UI sections | ProductGrid, Header, Footer | `/components/layout/` `/components/sections/` |
| **Templates** | Page layouts | Layout, CheckoutLayout | `/components/layout/` |
| **Pages** | Specific instances | HomePage, ProductDetail | `/pages/` |

---

## 1. Atoms (Level 1)

### 1.1 Definition

**Atoms are the smallest functional units that cannot be broken down further.**

- Single-purpose elements
- No dependencies on other components
- Highly reusable across the site
- Pure presentational (minimal logic)

### 1.2 Handcrafted Wines Atoms

**Location:** `/components/common/`

**List of Atoms:**

1. **Button** (`Button.tsx`)
   - Variants: primary, secondary, outline
   - Sizes: sm, md, lg
   - States: default, hover, active, disabled

2. **Typography** (`Typography.tsx`)
   - Variants: h1, h2, h3, h4, body, caption
   - Purpose: Consistent text styling

3. **Input** (`Input.tsx`)
   - Types: text, email, password, number, tel
   - States: default, focus, error, disabled

4. **Select** (`Select.tsx`)
   - Dropdown selector
   - States: default, open, disabled

5. **Badge** (`Badge.tsx`)
   - Variants: default, success, warning, error
   - Purpose: Status indicators, labels

6. **Card** (`Card.tsx`)
   - Base card container
   - Variants: default, interactive, outlined

7. **Container** (`Container.tsx`)
   - Width constraints: site, content, wide, full
   - Purpose: Consistent page widths

8. **Logo** (`Logo.tsx`)
   - Handcrafted Wines logo
   - Variants: default, white (for dark backgrounds)
   - Interactive: links to homepage

### 1.3 Atom Example

```tsx
/**
 * Button Atom
 * 
 * Smallest interactive unit. Single-purpose button with variants.
 */

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick
}) => {
  const variantClasses = {
    primary: 'bg-[var(--twb-color-plum)] text-white hover:bg-[var(--twb-color-plum)]/90',
    secondary: 'bg-[var(--twb-color-vine)] text-white hover:bg-[var(--twb-color-vine)]/90',
    outline: 'border-2 border-[var(--twb-color-ink)] text-[var(--twb-color-ink)] hover:bg-[var(--twb-color-ink)] hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${variantClasses[variant]} ${sizeClasses[size]} rounded-[var(--twb-radius-button)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

### 1.4 Atom Guidelines

**Do:**
- Keep atoms simple and single-purpose
- Accept props for variants and states
- Use consistent naming (variant, size, disabled, etc.)
- Include all necessary ARIA attributes
- Test across all states

**Don't:**
- Include business logic
- Fetch data from APIs
- Depend on other atoms
- Use hard-coded values (use design tokens)

---

## 2. Molecules (Level 2)

### 2.1 Definition

**Molecules are simple groups of atoms that function together as a unit.**

- Combine 2-5 atoms
- Single, focused purpose
- Reusable in multiple contexts
- May include light logic (form validation, state)

### 2.2 Handcrafted Wines Molecules

**Location:** `/components/shop/`, `/components/common/`

**List of Molecules:**

1. **ProductCard** (Button + Typography + Badge + img)
   - Product image
   - Product name (Typography h3)
   - Price (Typography body)
   - Category badge (Badge)
   - "Add to Cart" button (Button)

2. **CartItem** (Button + Typography + Input + img)
   - Product thumbnail
   - Product details (Typography)
   - Quantity selector (Input + Buttons)
   - Remove button (Button)
   - Subtotal (Typography)

3. **FormField** (Input + Typography)
   - Label (Typography)
   - Input field (Input)
   - Error message (Typography + icon)
   - Helper text (Typography)

4. **SearchBar** (Input + Button)
   - Search input (Input)
   - Search button (Button with icon)
   - Clear button (Button)

5. **NewsCard** (Typography + Button)
   - Featured image
   - Date (Typography caption)
   - Title (Typography h3)
   - Excerpt (Typography body)
   - "Read More" link (Button)

### 2.3 Molecule Example

```tsx
/**
 * ProductCard Molecule
 * 
 * Combines atoms to create a product card for shop grids.
 * Uses: img, Typography, Badge, Button atoms.
 */

import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    badge?: string;
  };
  onAddToCart: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart 
}) => {
  return (
    <div className="group bg-white rounded-[var(--twb-radius-card)] shadow-[var(--twb-shadow-md)] hover:shadow-[var(--twb-shadow-lg)] transition-shadow">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-t-[var(--twb-radius-card)]">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <div className="absolute top-4 right-4">
            <Badge variant="success">{product.badge}</Badge>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <Typography variant="caption" className="text-[var(--twb-color-text-secondary)] mb-1">
          {product.category}
        </Typography>
        
        <Typography variant="h3" className="mb-2">
          {product.name}
        </Typography>

        <div className="flex items-center justify-between mt-4">
          <Typography variant="body" className="font-semibold">
            R{product.price.toFixed(2)}
          </Typography>
          
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => onAddToCart(product.id)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
```

### 2.4 Molecule Guidelines

**Do:**
- Combine atoms with a clear purpose
- Keep molecules focused (single responsibility)
- Pass data via props
- Include event handlers (onClick, onChange)
- Make molecules reusable

**Don't:**
- Combine too many atoms (>5 becomes organism)
- Include complex business logic
- Fetch data directly (receive via props)
- Hard-code content

---

## 3. Organisms (Level 3)

### 3.1 Definition

**Organisms are complex UI sections composed of atoms, molecules, and other organisms.**

- Major sections of the interface
- May include complex logic and state
- Often specific to one area of the site
- Can fetch data or manage state

### 3.2 Handcrafted Wines Organisms

**Location:** `/components/sections/`, `/components/layout/`, `/components/shop/`

**List of Organisms:**

1. **UnifiedHeader** (Logo + Navigation + SearchBar + Button + Badge)
   - Site logo (Logo atom)
   - Main navigation (dropdown menus)
   - Search button (Button)
   - Account button (Button)
   - Cart button with count (Button + Badge)
   - Theme toggle (Button)

2. **UnifiedFooter** (Typography + Button + Input)
   - 5-column link sections
   - Newsletter signup (FormField molecule)
   - Social media links (Button atoms)
   - Copyright info (Typography)

3. **ProductGrid** (array of ProductCard molecules)
   - Grid layout
   - Filtering logic
   - Sorting logic
   - Pagination

4. **Hero** (Typography + Button + img)
   - Hero image/video background
   - Headline (Typography h1)
   - Subheadline (Typography body)
   - CTA buttons (Button atoms)
   - Scroll-down arrow

5. **BrandGrid** (Card + Typography + Button)
   - 4 category cards
   - Category image
   - Category title
   - Product count
   - "Shop Now" button

6. **Newsletter** (FormField + Button)
   - Newsletter heading
   - Email input field
   - Submit button
   - Success/error messaging

### 3.3 Organism Example

```tsx
/**
 * ProductGrid Organism
 * 
 * Complex section that displays multiple ProductCard molecules.
 * Includes filtering, sorting, and pagination logic.
 */

import { useState } from 'react';
import { ProductCard } from '../shop/ProductCard';
import { Select } from '../common/Select';
import { Typography } from '../common/Typography';

interface ProductGridProps {
  products: Product[];
  category?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products,
  category 
}) => {
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');
  const [filterType, setFilterType] = useState<string>('all');

  // Filter products
  const filteredProducts = products.filter(p => 
    filterType === 'all' || p.type === filterType
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return a.price - b.price;
  });

  return (
    <div>
      {/* Filters & Sorting */}
      <div className="flex justify-between items-center mb-8">
        <Typography variant="body">
          {sortedProducts.length} products
        </Typography>

        <div className="flex gap-4">
          {/* Filter */}
          <Select 
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="red">Red</option>
            <option value="white">White</option>
          </Select>

          {/* Sort */}
          <Select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value as 'name' | 'price')}
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
```

### 3.4 Organism Guidelines

**Do:**
- Combine molecules and atoms into complex sections
- Include necessary business logic
- Manage local state (filtering, sorting, etc.)
- Fetch data if needed
- Make organisms reusable where possible

**Don't:**
- Create overly complex organisms (break into smaller ones)
- Duplicate logic (extract to hooks)
- Hard-code content (use props or data files)

---

## 4. Templates (Level 4)

### 4.1 Definition

**Templates are page-level structures that define layout but not content.**

- Define page structure and layout
- Combine organisms into cohesive layouts
- Reusable across multiple pages
- Content-agnostic (use placeholders)

### 4.2 Handcrafted Wines Templates

**Location:** `/components/layout/`

**List of Templates:**

1. **Layout** (UnifiedHeader + main + UnifiedFooter)
   - Standard page layout
   - Header organism
   - Main content area (children)
   - Footer organism

2. **CheckoutLayout** (CheckoutHeader + main + CheckoutFooter)
   - Simplified checkout layout
   - Minimal header (logo + cart)
   - Main content area
   - Minimal footer (legal links only)

### 4.3 Template Example

```tsx
/**
 * Layout Template
 * 
 * Standard page layout template used across most pages.
 * Combines header, main content area, and footer.
 */

import { UnifiedHeader } from './UnifiedHeader';
import { UnifiedFooter } from './UnifiedFooter';

interface LayoutProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children,
  showBreadcrumbs = false,
  breadcrumbs = []
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--twb-color-bg-primary)]">
      {/* Header Organism */}
      <UnifiedHeader />

      {/* Breadcrumbs (optional) */}
      {showBreadcrumbs && breadcrumbs.length > 0 && (
        <BreadcrumbsBar items={breadcrumbs} />
      )}

      {/* Main Content Area */}
      <main 
        id="main-content" 
        className="flex-1"
        tabIndex={-1}
      >
        {children}
      </main>

      {/* Footer Organism */}
      <UnifiedFooter />
    </div>
  );
};
```

### 4.4 Template Guidelines

**Do:**
- Define consistent page structure
- Use `children` prop for content flexibility
- Include semantic HTML (`<header>`, `<main>`, `<footer>`)
- Make templates reusable

**Don't:**
- Include specific content (use children)
- Include page-specific logic
- Hard-code data

---

## 5. Pages (Level 5)

### 5.1 Definition

**Pages are specific instances of templates with real content.**

- Highest level of atomic design
- Combine template with actual data
- One page per route
- Fetch data, handle state

### 5.2 Handcrafted Wines Pages

**Location:** `/pages/`

**List of Pages (by section):**

**Company Pages** (`/pages/company/`)
- HomePage, About, AboutFarm, AboutTeam, Awards, Sustainability, News, NewsPost, Contact

**Shop Pages** (`/pages/shop/`)
- ShopHome, WinesCategory, SpiritsCategory, CheeseCategory, GiftsCategory, Shop, ProductDetail, Cart, Checkout, OrderConfirmation

**Experience Pages** (`/pages/experiences/`)
- Experiences, WineTasting, CheesePairing, FarmTour, HarvestExperience, PrivateTasting

**Event Pages** (`/pages/events/`)
- Events, Weddings, CorporateEvents, PrivateEvents

### 5.3 Page Example

```tsx
/**
 * ProductDetail Page
 * 
 * Specific instance of Layout template with product detail content.
 * Fetches product data and displays product information.
 */

import { useParams } from 'react-router';
import { Layout } from '../../components/layout/Layout';
import { Hero } from '../../components/sections/Hero';
import { ProductTabs } from '../../components/shop/ProductTabs';
import { RelatedProducts } from '../../components/shop/RelatedProducts';
import { products } from '../../data/products';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Fetch product data
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: product.category, href: `/shop/${product.category}` },
    { label: product.name }
  ];

  return (
    <Layout showBreadcrumbs breadcrumbs={breadcrumbs}>
      {/* Hero Organism */}
      <Hero 
        title={product.name}
        subtitle={product.description}
        image={product.image}
        variant="product"
      />

      {/* Product Tabs Organism */}
      <ProductTabs 
        description={product.fullDescription}
        tastingNotes={product.tastingNotes}
        pairing={product.pairing}
        reviews={product.reviews}
      />

      {/* Related Products Organism */}
      <RelatedProducts 
        category={product.category}
        currentProductId={product.id}
      />
    </Layout>
  );
};

export default ProductDetail;
```

### 5.4 Page Guidelines

**Do:**
- Use templates for consistent structure
- Fetch data in pages (not templates)
- Pass data down to organisms
- Handle page-specific state
- Include SEO meta tags

**Don't:**
- Repeat layout code (use templates)
- Fetch data in lower-level components
- Include complex logic (extract to hooks)

---

## 6. Atomic Design Benefits

### 6.1 Consistency

**All components follow the same hierarchy:**
- Predictable structure
- Easy to find components
- Clear naming conventions
- Consistent styling

### 6.2 Reusability

**Build once, use everywhere:**
- Button atom used in 50+ places
- ProductCard molecule used on 10+ pages
- Layout template used on 30+ pages
- Reduce code duplication

### 6.3 Maintainability

**Easy to update:**
- Change button style in one place → Updates everywhere
- Add new variant → All users get it
- Fix bug → Fixed everywhere

### 6.4 Scalability

**Grow the system:**
- Add new atoms as needed
- Combine existing atoms into new molecules
- Create new organisms from existing molecules
- Build new pages quickly

### 6.5 Collaboration

**Clear communication:**
- Designers and developers speak the same language
- New team members understand structure quickly
- Easy to document and onboard

---

## 7. Decision Tree

### 7.1 "What Level is This Component?"

```
Is it a single, indivisible UI element?
  → ATOM (Button, Input, Typography)

Does it combine 2-5 atoms for a simple purpose?
  → MOLECULE (ProductCard, FormField, SearchBar)

Is it a complex section with multiple molecules?
  → ORGANISM (Header, Footer, ProductGrid, Hero)

Is it a reusable page structure?
  → TEMPLATE (Layout, CheckoutLayout)

Is it a specific page with real content?
  → PAGE (HomePage, ProductDetail, Cart)
```

### 7.2 "Where Should I Put This Component?"

```
Is it a basic UI element used everywhere?
  → `/components/common/` (Atom)

Is it shop-specific?
  → `/components/shop/` (Molecule/Organism)

Is it a major section used on 2+ pages?
  → `/components/sections/` (Organism)

Is it a layout structure?
  → `/components/layout/` (Organism/Template)

Is it a complete page?
  → `/pages/` (Page)
```

---

## 8. Handcrafted Wines Inventory

### 8.1 Complete Component List

**Atoms (8):** `/components/common/`
- Button, Typography, Input, Select, Badge, Card, Container, Logo

**Molecules (5+):** `/components/shop/`, `/components/common/`
- ProductCard, CartItem, FormField, SearchBar, NewsCard

**Organisms (10+):** `/components/sections/`, `/components/layout/`
- UnifiedHeader, UnifiedFooter, ProductGrid, Hero, BrandGrid, Newsletter, LatestNews, FAQSection, WineClubCTA, ContactFollowSection

**Templates (2):** `/components/layout/`
- Layout, CheckoutLayout

**Pages (37+):** `/pages/`
- HomePage, About, AboutFarm, AboutTeam, Awards, Sustainability, ShopHome, ProductDetail, Cart, Checkout, etc.

### 8.2 Dependency Graph

```
Pages (37+)
  ↓ use
Templates (2)
  ↓ use
Organisms (10+)
  ↓ use
Molecules (5+)
  ↓ use
Atoms (8)
```

---

## 9. Best Practices

### 9.1 Naming Conventions

**Follow PascalCase:**
- Atoms: `Button`, `Typography`, `Input`
- Molecules: `ProductCard`, `FormField`, `SearchBar`
- Organisms: `ProductGrid`, `UnifiedHeader`, `Hero`
- Templates: `Layout`, `CheckoutLayout`
- Pages: `HomePage`, `ProductDetail`, `Cart`

### 9.2 File Organization

**One component per file:**
```
/components/common/Button.tsx       (Atom)
/components/shop/ProductCard.tsx    (Molecule)
/components/sections/Hero.tsx       (Organism)
/components/layout/Layout.tsx       (Template)
/pages/HomePage.tsx                 (Page)
```

### 9.3 Props Flow

**Data flows down:**
```
Page (fetches data)
  ↓ passes props
Template (structure)
  ↓ passes props
Organism (complex logic)
  ↓ passes props
Molecule (simple logic)
  ↓ passes props
Atom (presentation only)
```

---

## 10. Common Mistakes

### 10.1 Atom Too Complex

**❌ Wrong:**
```tsx
// Atom with too much logic
const Button = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  
  const handleClick = async () => {
    setIsLoading(true);
    await api.saveData(user.id);
    setIsLoading(false);
  };
  
  return <button onClick={handleClick}>Save</button>;
};
```

**✅ Correct:**
```tsx
// Atom is simple, logic lives in parent
const Button = ({ onClick, isLoading, children }) => {
  return (
    <button onClick={onClick} disabled={isLoading}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
```

### 10.2 Molecule Doing Too Much

**❌ Wrong:**
```tsx
// Molecule fetching data
const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    fetch(`/api/products/${productId}`).then(setProduct);
  }, [productId]);
  
  // ...
};
```

**✅ Correct:**
```tsx
// Molecule receives data via props
const ProductCard = ({ product }) => {
  // No data fetching, just presentation
  return <div>...</div>;
};
```

---

## 11. Migration Guide

### 11.1 Converting Existing Components

**Step 1: Identify the level**
- Is it an atom, molecule, organism, template, or page?

**Step 2: Move to correct directory**
- `/components/common/` (atoms)
- `/components/shop/` or `/components/sections/` (molecules/organisms)
- `/components/layout/` (organisms/templates)
- `/pages/` (pages)

**Step 3: Refactor if needed**
- Extract complex logic to hooks
- Break down large components
- Combine small components

**Step 4: Update imports**
- Update import paths in all consuming components

---

## 12. Resources

- [Atomic Design Book (Brad Frost)](https://atomicdesign.bradfrost.com/)
- [Pattern Lab](https://patternlab.io/)
- [Component-Driven Development](https://www.componentdriven.org/)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Review:** March 15, 2026  
**Next Review:** Quarterly

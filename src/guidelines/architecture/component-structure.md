# Component Structure Guidelines

**Version:** 1.0  
**Last Updated:** March 15, 2026  
**Status:** Active  
**Applies To:** All Handcrafted Wines React components

---

## Overview

This document defines the organization, naming, and architectural patterns for React components in the Handcrafted Wines project. Following these guidelines ensures consistency, maintainability, and scalability across the codebase.

**Philosophy:** Components should be small, reusable, and follow the single responsibility principle.

---

## Quick Reference

### Directory Structure

```
/components/
├── common/          # Shared atoms (Button, Typography, Logo, Card)
├── layout/          # Headers, footers, containers, breadcrumbs
├── sections/        # Reusable sections (Hero, BrandGrid, Newsletter)
├── shop/           # E-commerce specific (ProductCard, CartItem)
├── ui/             # Radix UI primitives (badge, card, select)
└── decorative/     # Visual elements (HandDrawnUnderline, PaperTexture)

/pages/
├── company/        # About, Team, Awards, Sustainability
├── shop/          # Shop pages, product detail, cart, checkout
├── experiences/   # Visit, tours, tastings
└── events/        # Weddings, corporate events
```

### Component Hierarchy

```
Atomic Design Pattern:
Atoms → Molecules → Organisms → Templates → Pages

Button          ProductCard      Hero           Layout          HomePage
Typography      CartItem         BrandGrid      CheckoutLayout  ProductDetail
Input           ReviewCard       Newsletter     -               ShopHome
```

---

## 1. Directory Organization

### 1.1 Component Directories

**`/components/common/` - Shared Atoms**
- Small, reusable UI primitives
- No business logic
- Pure presentational components
- Used across multiple pages/sections

**Examples:**
- `Button.tsx` - Primary, secondary, outline variants
- `Typography.tsx` - h1-h4, body, caption variants
- `Logo.tsx` - Brand logo with link
- `Card.tsx` - Base card component
- `Container.tsx` - Width-constrained wrappers
- `Input.tsx` - Form input with label
- `Select.tsx` - Dropdown select

**`/components/layout/` - Layout Components**
- Page structure elements
- Headers, footers, navigation
- Breadcrumbs, sidebars
- Layout wrappers

**Examples:**
- `UnifiedHeader.tsx` - Site-wide header with navigation
- `UnifiedFooter.tsx` - Site-wide footer with links
- `BreadcrumbsBar.tsx` - Breadcrumb navigation
- `CheckoutHeader.tsx` - Simplified checkout header
- `CheckoutFooter.tsx` - Minimal checkout footer
- `CheckoutLayout.tsx` - Checkout page wrapper

**`/components/sections/` - Reusable Sections**
- Multi-component sections
- Used on 2+ pages
- Configurable via props
- Self-contained functionality

**Examples:**
- `Hero.tsx` - Configurable hero section
- `FullWidthSection.tsx` - 50/50 image + text split
- `BrandGrid.tsx` - Grid of category cards
- `FAQSection.tsx` - Accordion FAQ list
- `Newsletter.tsx` - Email signup strip
- `LatestNews.tsx` - News post grid
- `WineClubCTA.tsx` - Wine club signup CTA

**`/components/shop/` - E-Commerce Specific**
- Shopping-related components
- Product, cart, checkout elements
- Not used outside shop context

**Examples:**
- `ProductCard.tsx` - Product grid item
- `ProductGrid.tsx` - Product listing grid
- `CartItem.tsx` - Cart line item
- `CartSummary.tsx` - Cart totals
- `ProductTabs.tsx` - Product detail tabs
- `RelatedProducts.tsx` - Related products grid

**`/components/ui/` - Radix UI Primitives**
- Third-party UI library components
- Customized for Handcrafted Wines design
- NOT to be edited (external library)

**Examples:**
- `badge.tsx` - Badge component (Radix)
- `card.tsx` - Card component (Radix)
- `select.tsx` - Select dropdown (Radix)

**`/components/decorative/` - Visual Elements**
- Hand-drawn, organic design elements
- Paper textures, stamps, underlines
- Purely aesthetic (can be disabled for accessibility)

**Examples:**
- `HandDrawnUnderline.tsx` - SVG hand-drawn underline
- `PaperTexture.tsx` - Paper grain overlay
- `WineLabelStamp.tsx` - Circular stamp decoration
- `OrganicBorder.tsx` - Asymmetric border

### 1.2 Page Directories

**`/pages/` - Page Components**
- Top-level route components
- Compose sections and components
- Handle page-specific logic
- One file per route

**Subdirectories:**
- `/pages/company/` - About, Team, Awards, Sustainability, News
- `/pages/shop/` - Shop pages, product detail, cart, checkout
- `/pages/experiences/` - Visit, tours, tastings
- `/pages/events/` - Weddings, corporate events

---

## 2. Component Naming Conventions

### 2.1 File Naming

**Format:** `PascalCase.tsx`

```
✅ Correct:
Button.tsx
ProductCard.tsx
UnifiedHeader.tsx
CheckoutLayout.tsx

❌ Wrong:
button.tsx              (lowercase)
product-card.tsx        (kebab-case)
UnifiedHeader.jsx       (use .tsx for TypeScript)
```

### 2.2 Component Naming

**Component name must match file name:**

```tsx
// Button.tsx
export const Button = () => { /* ... */ };

// ProductCard.tsx
export const ProductCard = () => { /* ... */ };
```

**Multiple exports allowed for variants:**

```tsx
// Card.tsx
export const Card = () => { /* ... */ };
export const CardHeader = () => { /* ... */ };
export const CardContent = () => { /* ... */ };
export const CardFooter = () => { /* ... */ };
```

### 2.3 Import Naming

**Use named imports:**

```tsx
// ✅ Correct
import { Button } from '../../components/common/Button';
import { Typography } from '../../components/common/Typography';

// ❌ Wrong
import Button from '../../components/common/Button';
```

**Exception:** Default exports for page components

```tsx
// HomePage.tsx
export default HomePage;

// App.tsx
import HomePage from './pages/HomePage';
```

---

## 3. Component Patterns

### 3.1 Atomic Design

**Follow Atomic Design methodology:**

```
Atoms (smallest)
  ↓
Molecules (groups of atoms)
  ↓
Organisms (complex components)
  ↓
Templates (page layouts)
  ↓
Pages (specific instances)
```

**Example: Product Card**

```tsx
// Atom: Button
<Button variant="primary">Add to Cart</Button>

// Atom: Typography
<Typography variant="h3">Estate Shiraz 2020</Typography>

// Atom: Badge
<Badge variant="outline">Wine</Badge>

// Molecule: ProductCard (combines atoms)
<ProductCard product={product} />

// Organism: ProductGrid (list of molecules)
<ProductGrid products={products} />

// Template: ShopLayout
<ShopLayout>
  <ProductGrid products={products} />
</ShopLayout>

// Page: WinesCategory (specific instance)
<WinesCategory category="wines" />
```

### 3.2 Presentational vs Container Components

**Presentational Components (Dumb):**
- Focus on how things look
- No state management
- Receive data via props
- Stateless functional components

**Example:**
```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ variant, children, onClick }: ButtonProps) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

**Container Components (Smart):**
- Focus on how things work
- Manage state and side effects
- Fetch data from APIs/context
- Pass data to presentational components

**Example:**
```tsx
export const ProductListContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return <ProductGrid products={products} />;
};
```

### 3.3 Composition Pattern

**Prefer composition over inheritance:**

```tsx
// ✅ Good - Composition
<Card>
  <CardHeader>
    <Typography variant="h3">Product Name</Typography>
  </CardHeader>
  <CardContent>
    <img src={image} alt={name} />
    <Typography variant="body">{description}</Typography>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Add to Cart</Button>
  </CardFooter>
</Card>

// ❌ Bad - Inheritance
class ProductCard extends Card {
  // Don't extend components
}
```

---

## 4. Component Structure Template

### 4.1 Standard Component File

```tsx
/**
 * ComponentName
 * 
 * Brief description of what the component does.
 * 
 * Features:
 * - Feature 1
 * - Feature 2
 * - Feature 3
 * 
 * @example
 * ```tsx
 * <ComponentName 
 *   prop1="value"
 *   prop2={123}
 * />
 * ```
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';
import { OtherComponent } from '../other/OtherComponent';

// ========================================
// Types & Interfaces
// ========================================

interface ComponentNameProps {
  /** Description of prop1 */
  prop1: string;
  /** Description of prop2 */
  prop2?: number;
  /** Description of prop3 */
  prop3?: boolean;
  /** Optional CSS class name */
  className?: string;
  /** Child elements */
  children?: React.ReactNode;
}

// ========================================
// Component
// ========================================

export const ComponentName: React.FC<ComponentNameProps> = ({
  prop1,
  prop2 = 10, // Default value
  prop3 = false,
  className = '',
  children
}) => {
  // ========================================
  // State
  // ========================================
  const [state, setState] = React.useState<string>('');

  // ========================================
  // Effects
  // ========================================
  React.useEffect(() => {
    // Side effects
  }, []);

  // ========================================
  // Handlers
  // ========================================
  const handleClick = () => {
    // Event handler
  };

  // ========================================
  // Render
  // ========================================
  return (
    <div className={`component-name ${className}`}>
      <OtherComponent />
      {children}
    </div>
  );
};

// ========================================
// Default Export (if needed)
// ========================================
export default ComponentName;
```

### 4.2 Section Organization

**Order sections consistently:**

1. **JSDoc comment** - File header documentation
2. **Imports** - React, third-party, local components, styles
3. **Types & Interfaces** - TypeScript definitions
4. **Constants** - Static values, config
5. **Component** - Main component function
6. **State** - useState, useReducer
7. **Refs** - useRef
8. **Effects** - useEffect, useLayoutEffect
9. **Memoization** - useMemo, useCallback
10. **Handlers** - Event handlers
11. **Render Helpers** - Functions that return JSX
12. **Render** - Return JSX
13. **Export** - Named or default export

---

## 5. Reusable Section Rules

### 5.1 When to Create a Section Component

**Rule:** If a UI element appears on **2 or more pages**, elevate it to `/components/sections/`.

**Decision Tree:**
```
Is it used on 1 page only?
  → Keep it local to that page

Is it used on 2+ pages?
  → Move to /components/sections/

Is it a small UI element?
  → Move to /components/common/

Is it shop-specific?
  → Move to /components/shop/
```

**Example:**
```tsx
// Used only on HomePage → Keep local
const HomepageHero = () => { /* ... */ };

// Used on 3 pages → Move to /components/sections/
const Hero = ({ title, subtitle, image, buttons }) => { /* ... */ };

// Used across all pages → Move to /components/common/
const Button = ({ variant, children }) => { /* ... */ };
```

### 5.2 Section Component Checklist

**Before creating a section component:**
- [ ] Is it used on 2+ pages?
- [ ] Is it configurable via props?
- [ ] Does it have clear boundaries?
- [ ] Can it work independently?
- [ ] Is it well-documented?

---

## 6. Props & Type Safety

### 6.1 TypeScript Interfaces

**Always define prop interfaces:**

```tsx
// ✅ Good - Explicit interface
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ ... }) => { };

// ❌ Bad - No types
export const Button = ({ variant, children }) => { };
```

### 6.2 Optional vs Required Props

**Mark optional props with `?`:**

```tsx
interface ProductCardProps {
  product: Product;        // Required
  showBadge?: boolean;     // Optional (default: false)
  onAddToCart?: () => void; // Optional (no default)
  className?: string;      // Optional (default: '')
}
```

### 6.3 Default Props

**Use default parameters:**

```tsx
// ✅ Modern - Default parameters
export const Button = ({ 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  children 
}: ButtonProps) => { };

// ❌ Old - defaultProps (deprecated in React 18)
Button.defaultProps = {
  variant: 'primary',
  size: 'md'
};
```

---

## 7. Component Variants

### 7.1 Variant Pattern

**Use variant prop for different styles:**

```tsx
interface CardProps {
  variant?: 'default' | 'interactive' | 'outlined';
  children: React.ReactNode;
}

export const Card = ({ variant = 'default', children }: CardProps) => {
  const variantStyles = {
    default: 'bg-white border border-gray-200',
    interactive: 'bg-white border border-gray-200 hover:shadow-lg transition cursor-pointer',
    outlined: 'bg-transparent border-2 border-plum'
  };

  return (
    <div className={variantStyles[variant]}>
      {children}
    </div>
  );
};
```

### 7.2 Size Pattern

**Use size prop for different scales:**

```tsx
interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ size = 'md' }: ButtonProps) => {
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return <button className={sizeStyles[size]}>Click</button>;
};
```

---

## 8. Children & Composition

### 8.1 Children Prop

**Accept children for flexible composition:**

```tsx
interface ContainerProps {
  children: React.ReactNode;
  variant?: 'site' | 'content' | 'wide';
}

export const Container = ({ children, variant }: ContainerProps) => {
  return (
    <div className={`container-${variant}`}>
      {children}
    </div>
  );
};

// Usage
<Container variant="content">
  <Typography variant="h1">Welcome</Typography>
  <Typography variant="body">Content here</Typography>
</Container>
```

### 8.2 Compound Components

**Create related components that work together:**

```tsx
// Card.tsx
export const Card = ({ children }) => (
  <div className="card">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="card-header">{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);

export const CardFooter = ({ children }) => (
  <div className="card-footer">{children}</div>
);

// Usage
import { Card, CardHeader, CardContent, CardFooter } from './Card';

<Card>
  <CardHeader>Header</CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

---

## 9. State Management

### 9.1 Local State

**Use useState for component-specific state:**

```tsx
export const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  
  const handleIncrease = () => setQuantity(q => q + 1);
  const handleDecrease = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};
```

### 9.2 Shared State (Context)

**Use Context for state shared across multiple components:**

```tsx
// CartContext.tsx
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  const addItem = (item: Product) => { /* ... */ };
  const removeItem = (id: string) => { /* ... */ };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

// Usage in component
const { items, addItem } = useCart();
```

### 9.3 URL State (React Router)

**Use URL params/search for shareable state:**

```tsx
import { useParams, useSearchParams } from 'react-router';

export const ProductDetail = () => {
  const { id } = useParams(); // /product/shiraz-2020
  const [searchParams] = useSearchParams(); // ?variant=750ml
  
  const variant = searchParams.get('variant');
  
  return <div>Product {id} - Variant: {variant}</div>;
};
```

---

## 10. Performance Optimization

### 10.1 Memoization

**Use React.memo for expensive components:**

```tsx
export const ProductCard = React.memo(({ product }: ProductCardProps) => {
  return (
    <div>
      {/* Expensive rendering */}
    </div>
  );
});
```

**Use useMemo for expensive calculations:**

```tsx
const ExpensiveComponent = ({ items }: Props) => {
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return <div>Total: R{total}</div>;
};
```

**Use useCallback for stable function references:**

```tsx
const ParentComponent = () => {
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  return <ChildComponent onClick={handleClick} />;
};
```

### 10.2 Code Splitting

**Use React.lazy for route-based code splitting:**

```tsx
// routes.tsx
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/ShopHome'));

export const router = createBrowserRouter([
  { path: '/', Component: HomePage },
  { path: '/shop', Component: ShopPage }
]);
```

---

## 11. Testing Components

### 11.1 Component Testing Checklist

**Every component should be testable:**
- [ ] Pure function (no side effects)
- [ ] Accepts props, returns JSX
- [ ] No direct DOM manipulation
- [ ] No direct window/document access
- [ ] Uses React hooks properly

### 11.2 Test File Structure

```
/components/
├── Button.tsx
├── Button.test.tsx      ← Test file
├── ProductCard.tsx
└── ProductCard.test.tsx
```

---

## 12. Documentation

### 12.1 JSDoc Comments

**All components must have JSDoc header:**

```tsx
/**
 * Button Component
 * 
 * Reusable button with multiple variants and sizes.
 * 
 * Features:
 * - Three variants: primary, secondary, outline
 * - Three sizes: sm, md, lg
 * - Disabled state support
 * - Full keyboard accessibility
 * - WCAG AA compliant
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Add to Cart
 * </Button>
 * ```
 * 
 * @package HandcraftedWines
 * @version 2.0
 */
```

### 12.2 Prop Documentation

**Document all props with TSDoc:**

```tsx
interface ButtonProps {
  /** Button style variant */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Disable the button */
  disabled?: boolean;
  /** Click event handler */
  onClick?: () => void;
  /** Button content */
  children: React.ReactNode;
}
```

---

## 13. Common Patterns

### 13.1 Conditional Rendering

```tsx
// ✅ Good - Early return
if (!product) return null;
if (isLoading) return <LoadingSpinner />;

return <ProductCard product={product} />;

// ✅ Good - Ternary for simple conditions
{isLoggedIn ? <UserMenu /> : <LoginButton />}

// ✅ Good - && for optional rendering
{hasError && <ErrorMessage message={error} />}
```

### 13.2 List Rendering

```tsx
// ✅ Good - Unique key prop
{products.map(product => (
  <ProductCard key={product.id} product={product} />
))}

// ❌ Bad - Index as key
{products.map((product, index) => (
  <ProductCard key={index} product={product} />
))}
```

### 13.3 Event Handlers

```tsx
// ✅ Good - Named handler function
const handleAddToCart = () => {
  addToCart(product);
};

<Button onClick={handleAddToCart}>Add to Cart</Button>

// ❌ Bad - Inline arrow function (creates new function every render)
<Button onClick={() => addToCart(product)}>Add to Cart</Button>
```

---

## 14. Anti-Patterns to Avoid

### 14.1 Don't Use Index as Key

```tsx
// ❌ Bad
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}

// ✅ Good
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```

### 14.2 Don't Mutate State Directly

```tsx
// ❌ Bad
const handleClick = () => {
  items.push(newItem); // Mutates state
  setItems(items);
};

// ✅ Good
const handleClick = () => {
  setItems([...items, newItem]); // Creates new array
};
```

### 14.3 Don't Use Nested Ternaries

```tsx
// ❌ Bad - Hard to read
{status === 'loading' ? <Spinner /> : status === 'error' ? <Error /> : <Content />}

// ✅ Good - Early returns or switch
if (status === 'loading') return <Spinner />;
if (status === 'error') return <Error />;
return <Content />;
```

---

## 15. Resources

- [React Documentation](https://react.dev/)
- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/)
- [TypeScript React Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React Patterns](https://reactpatterns.com/)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Review:** March 15, 2026  
**Next Review:** Quarterly

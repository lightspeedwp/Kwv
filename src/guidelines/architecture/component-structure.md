# Component Structure Guidelines

**Category:** Architecture  
**Domain:** Component Organization  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand component architecture follows atomic design principles with clear organizational patterns. Components are organized by function, reusability, and scope.

**Key Principles:**
- Atomic design (atoms → molecules → organisms)
- Single responsibility
- Reusability over duplication
- Co-location of related files
- Explicit imports (no aliases)

---

## Directory Structure

```
/src
  /components
    /common          # Atoms: Buttons, Typography, Logo, Container
    /layout          # Organisms: Header, Footer, Layout
    /sections        # Molecules/Organisms: Hero, Newsletter, BrandGrid
    /shop            # E-commerce: ProductCard, Cart, Checkout
    /ui              # Radix UI primitives (Dialog, Sheet, Accordion)
  /pages             # Route-level components
  /lib               # Utilities, helpers
  /hooks             # Custom React hooks
  /context           # React Context providers
```

---

## Component Classification

### Atoms (`/components/common/`)

**Definition:** Smallest, indivisible components

**Examples:**
- `Button.tsx` - Reusable button component
- `Typography.tsx` - Text components (H1, H2, P, etc.)
- `Logo.tsx` - Brand logo
- `Container.tsx` - Layout container
- `Badge.tsx` - Small UI badges

**Characteristics:**
- No business logic
- Highly reusable
- Accept props for customization
- No dependencies on other custom components

### Molecules (`/components/sections/`)

**Definition:** Groups of atoms forming functional units

**Examples:**
- `ProductCard.tsx` - Image + Title + Price + Button
- `Newsletter.tsx` - Heading + Input + Button
- `SearchBar.tsx` - Input + Icon + Button

**Characteristics:**
- Compose multiple atoms
- Specific purpose/functionality
- Reusable across pages
- May have light business logic

### Organisms (`/components/layout/`, `/components/sections/`)

**Definition:** Complex components with distinct sections

**Examples:**
- `Header.tsx` / `CorporateHeader.tsx` - Full navigation
- `Footer.tsx` - Complete footer with links, social, newsletter
- `Hero.tsx` - Full hero section with image, text, CTAs
- `BrandGrid.tsx` - Grid of category cards

**Characteristics:**
- Compose molecules and atoms
- Form distinct sections of UI
- May contain significant business logic
- Less reusable (more specific)

---

## Naming Conventions

### File Naming

**Pattern:** PascalCase for components

```
Button.tsx
ProductCard.tsx
CorporateHeader.tsx
Newsletter.tsx
```

### Component Export

**Default export for main component:**
```tsx
export default function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}
```

**Named export when file contains multiple related components:**
```tsx
export function PrimaryButton(props) { ... }
export function SecondaryButton(props) { ... }
export function ButtonGroup({ children }) { ... }
```

---

## Component Structure Pattern

### Standard Component Template

```tsx
/**
 * ComponentName
 * 
 * Brief description of what the component does.
 * 
 * Features:
 * - Feature 1
 * - Feature 2
 * 
 * @param {PropsType} props - Description of props
 */

import React from 'react';
import { cn } from '../lib/utils';

// Types
interface ComponentNameProps {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  children?: React.ReactNode;
}

// Component
export default function ComponentName({
  title,
  description,
  variant = 'primary',
  className,
  children,
}: ComponentNameProps) {
  // Hooks
  const [state, setState] = React.useState(false);
  
  // Event handlers
  const handleClick = () => {
    setState(!state);
  };
  
  // Render helpers
  const renderContent = () => {
    return <div>{children}</div>;
  };
  
  // Main render
  return (
    <div className={cn('base-classes', className)}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {renderContent()}
    </div>
  );
}
```

---

## Props Pattern

### Props Interface

```tsx
interface ButtonProps {
  // Required props
  children: React.ReactNode;
  
  // Optional props with defaults
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  
  // Optional props
  icon?: React.ReactNode;
  className?: string;
  
  // Event handlers
  onClick?: () => void;
}
```

### Destructuring with Defaults

```tsx
export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  className,
  onClick,
  ...restProps
}: ButtonProps) {
  // Component implementation
}
```

---

## Reusability Rules

### When to Create a Reusable Component

**Create if:**
- Used on 2+ pages
- Repeated 3+ times on same page
- Clear, standalone responsibility
- Likely to be used in future

**Don't create if:**
- Used once
- Tightly coupled to specific page
- Trivial wrapper (e.g., `<div className="flex">`)

### Example: Product Card

**Used on multiple pages:**
- `/wines` - Product listing
- `/` - Homepage featured wines
- `/search` - Search results
- `/category/red-wines` - Category page

**Decision:** Create `/components/shop/ProductCard.tsx`

```tsx
export default function ProductCard({ wine }) {
  return (
    <Link to={`/wines/${wine.id}`} className="...">
      <img src={wine.image} alt={wine.name} />
      <h3>{wine.name}</h3>
      <p>{wine.vintage}</p>
      <p>${wine.price}</p>
      <Button>Add to Cart</Button>
    </Link>
  );
}
```

---

## Import/Export Patterns

### Explicit Relative Imports (Required)

**✅ Good: Explicit relative paths**
```tsx
import { Button } from '../../components/common/Button';
import { Hero } from '../../components/sections/Hero';
import { cn } from '../../lib/utils';
```

**❌ Bad: Path aliases (not supported)**
```tsx
import { Button } from '@/components/common/Button'; // Don't use
import { Hero } from '~/components/sections/Hero'; // Don't use
```

### Barrel Exports (Optional)

**Create index.ts for grouped exports:**

```tsx
// /components/common/index.ts
export { default as Button } from './Button';
export { default as Typography } from './Typography';
export { default as Logo } from './Logo';
export { default as Container } from './Container';

// Usage
import { Button, Typography, Logo } from '../../components/common';
```

---

## Co-location Strategy

### Keep Related Files Together

**Component with styles/tests:**
```
/components/sections/Hero/
  Hero.tsx           # Main component
  Hero.test.tsx      # Tests (if any)
  HeroBackground.tsx # Sub-component (if complex)
  index.ts           # Barrel export
```

**Simple component (single file):**
```
/components/common/
  Button.tsx
  Logo.tsx
  Container.tsx
```

---

## Composition Patterns

### Compound Components

**Use for:** Related components that work together

```tsx
// Accordion.tsx
export function Accordion({ children }) {
  return <div className="accordion">{children}</div>;
}

export function AccordionItem({ title, children }) {
  return (
    <div className="accordion-item">
      <button>{title}</button>
      <div>{children}</div>
    </div>
  );
}

// Usage
<Accordion>
  <AccordionItem title="Question 1">
    Answer 1
  </AccordionItem>
  <AccordionItem title="Question 2">
    Answer 2
  </AccordionItem>
</Accordion>
```

### Render Props

```tsx
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);
  
  return render(data);
}

// Usage
<DataFetcher
  url="/api/wines"
  render={(wines) => (
    <div>
      {wines?.map(wine => <ProductCard key={wine.id} wine={wine} />)}
    </div>
  )}
/>
```

---

## Performance Optimization

### React.memo for Expensive Components

```tsx
import React from 'react';

const ExpensiveProductCard = React.memo(function ProductCard({ wine }) {
  // Expensive rendering logic
  return <div>...</div>;
});

export default ExpensiveProductCard;
```

### Lazy Loading for Route Components

```tsx
import { lazy } from 'react';

const WineCatalog = lazy(() => import('./pages/WineCatalog'));
const Checkout = lazy(() => import('./pages/Checkout'));
```

---

## Related Guidelines

- [Atomic Design](/guidelines/patterns/atomic-design.md) - Design system structure
- [Routing](/guidelines/architecture/routing.md) - Route-level components
- [JSDoc Standards](/guidelines/development/jsdoc-standards.md) - Documentation

---

## Changelog

### Version 1.0 (2024-03-13)
- Component organization structure defined
- Atomic design classification documented
- Naming conventions established
- Import/export patterns specified
- Reusability rules created
- Composition patterns added

---

**Questions or Issues?**  
Contact the development team.

# JSDoc Documentation Standards

**Category:** Development | **Domain:** JSDoc | **Version:** 1.0 | **Status:** Active - **MANDATORY**

## Overview
**IMPORTANT:** It is a high priority to add JSDoc inline documentation to all JavaScript/TypeScript files.

## File Header (Mandatory)
Every component file must start with a JSDoc block:

```typescript
/**
 * ComponentName
 * 
 * Brief description of what the component does.
 * 
 * Features:
 * - Key feature 1
 * - Key feature 2
 * 
 * @param {PropsType} props - Description of props
 */
```

## Component Documentation
```typescript
/**
 * ProductCard Component
 * 
 * Displays a single product with image, title, price, and add-to-cart button.
 * Supports hover effects and responsive layouts.
 * 
 * Features:
 * - Responsive image with aspect ratio
 * - Sale price badge
 * - Quick add to cart
 * 
 * @param product - Product data object
 * @param onAddToCart - Callback when add to cart is clicked
 */
export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  // ...
}
```

## Inline Logic Comments
Complex functions (cart calculations, filter logic) must have comments explaining the **why**, not just the how.

```typescript
// Calculate final price including discounts and taxes
// Formula: (base × quantity × (1 - discount)) × (1 + tax)
const finalPrice = calculateFinalPrice(base, quantity, discount, tax);
```

## Interface Documentation
```typescript
/**
 * Props for ProductCard component
 */
export interface ProductCardProps {
  /** Product data from API */
  product: Product;
  /** Callback when add to cart is clicked */
  onAddToCart: (productId: string) => void;
  /** Optional CSS class name */
  className?: string;
}
```

---

**Maintained by:** Development Team  
**Next Review:** 2024-04-13

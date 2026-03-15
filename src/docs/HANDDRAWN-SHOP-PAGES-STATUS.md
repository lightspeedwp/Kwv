# Hand-Drawn Shop Pages Status

## Overview

Creating hand-drawn versions of Cart, Checkout, and OrderConfirmation pages while preserving the original WooCommerce-aligned layouts.

## Status

### ✅ Completed
- **CartHanddrawn.tsx** - Created base copy (ready for hand-drawn enhancements)

### 🔄 In Progress  
- **CheckoutHanddrawn.tsx** - Needs to be created (1292 lines)
- **OrderConfirmationHanddrawn.tsx** - Needs to be created (564 lines)

### 📋 Preserved (WooCommerce-aligned originals)
- `/pages/shop/Cart.tsx` - Clean e-commerce layout, no hand-drawn elements
- `/pages/shop/Checkout.tsx` - Multi-step checkout, WooCommerce-aligned
- `/pages/shop/OrderConfirmation.tsx` - Success page, clean layout

## Hand-Drawn Enhancements Needed

Once all three Handdrawn files are created, add these decorative elements:

### 1. **Section Dividers**
```tsx
import { BrushStrokeDivider } from '../../components/decorative/BrushStrokeDivider';

// Between major sections
<BrushStrokeDivider variant="wave" color="clay" className="my-12" />
```

### 2. **Wax Seal Stamps** (Trust Signals)
```tsx
import { WaxSealStamp } from '../../components/decorative/WaxSealStamp';

// For order confirmation success
<WaxSealStamp 
  text="Confirmed" 
  variant="vine" 
  size="lg" 
  className="mx-auto mb-6"
/>

// For cart trust signals
<WaxSealStamp 
  text="Since 1918" 
  variant="gold" 
  size="sm"
/>
```

### 3. **Hand-Drawn Underlines** (Headlines)
```tsx
import { HandDrawnUnderline } from '../../components/decorative/HandDrawnUnderline';

<div className="relative inline-block">
  <Typography variant="h2">Order Summary</Typography>
  <HandDrawnUnderline variant="double" width="100%" color="plum" />
</div>
```

### 4. **Organic Borders** (Cards)
```tsx
import { OrganicBorder } from '../../components/decorative/OrganicBorder';

<div className="relative">
  <OrganicBorder variant="rounded" thickness={2} color="vine" />
  <Card className="relative z-10">
    {/* Card content */}
  </Card>
</div>
```

### 5. **Sketch Checkmarks** (Order Confirmation)
```tsx
import { SketchCheckmark } from '../../components/decorative/SketchCheckmark';

<SketchCheckmark size={80} color="vine" strokeWidth={3} />
```

### 6. **Hand-Drawn Icons** (Step Indicators)
```tsx
import { HandDrawnIcon } from '../../components/decorative/HandDrawnIcon';

<HandDrawnIcon 
  icon="shopping-cart" 
  size={32} 
  color="plum" 
  style="sketchy"
/>
```

## Recommended Enhancement Locations

### CartHanddrawn.tsx
- **Page header**: Add HandDrawnUnderline under "Shopping Cart" title
- **Empty cart state**: Add SketchSadFace or decorative element
- **Free shipping progress bar**: Wrap with OrganicBorder
- **Order summary card**: Add WaxSealStamp for "Secure Checkout"
- **Section dividers**: BrushStrokeDivider between cart items and summary
- **Trust signals**: Replace icons with hand-drawn equivalents

### CheckoutHanddrawn.tsx  
- **Progress indicator**: Hand-drawn connecting lines between steps
- **Form sections**: OrganicBorder around each step card
- **Payment methods**: Hand-drawn radio button alternatives
- **Security badges**: WaxSealStamp for "Secure Payment"
- **Age verification**: Decorative border around checkbox
- **CTA buttons**: Subtle sketch effects on hover

### OrderConfirmationHanddrawn.tsx
- **Success icon**: Replace CheckCircle2 with SketchCheckmark
- **Order number**: HandDrawnUnderline or decorative frame
- **Email notice**: OrganicBorder with BrushStrokeDivider
- **Customer info cards**: Organic borders, wax seals
- **"What Happens Next" timeline**: Hand-drawn connecting lines
- **Related products**: Sketch-style product cards

## Route Configuration

Add routes to `/routes.tsx`:

```tsx
{
  path: 'shop/cart-handdrawn',
  Component: lazy(() => import('./pages/shop/CartHanddrawn'))
},
{
  path: 'shop/checkout-handdrawn',
  Component: lazy(() => import('./pages/shop/CheckoutHanddrawn'))
},
{
  path: 'order-received-handdrawn',
  Component: lazy(() => import('./pages/shop/OrderConfirmationHanddrawn'))
}
```

## Navigation Updates

Update navigation in CartHanddrawn.tsx:
- Checkout button → `/shop/checkout-handdrawn`

Update navigation in CheckoutHanddrawn.tsx:
- Back to cart → `/shop/cart-handdrawn`  
- Success redirect → `/order-received-handdrawn?order=...`

## Design Principles

### Balance
- **Don't overdo it**: 3-5 decorative elements per page maximum
- **Focus on key moments**: Page headers, success states, trust signals
- **Maintain hierarchy**: Decorative elements support, don't compete with content

### Performance
- **Lazy load decorative components**: Only load when needed
- **SVG optimization**: Keep file sizes small
- **Animation restraint**: Respect `prefers-reduced-motion`

### Accessibility
- **Decorative only**: All hand-drawn elements use `aria-hidden="true"`
- **Text contrast**: Maintain WCAG AA compliance
- **Focus states**: Keep keyboard navigation clear
- **Screen readers**: No meaningful content in decorative elements

## Next Steps

1. **Create CheckoutHanddrawn.tsx** (copy from Checkout.tsx)
2. **Create OrderConfirmationHanddrawn.tsx** (copy from OrderConfirmation.tsx)
3. **Add hand-drawn enhancements** to all three Handdrawn versions
4. **Update routes** in routes.tsx
5. **Test navigation flow**: Cart → Checkout → Order Confirmation
6. **Accessibility audit**: Ensure WCAG compliance maintained
7. **Performance check**: Measure impact of decorative elements

## File Sizes

- Cart.tsx: 512 lines
- Checkout.tsx: 1292 lines  
- OrderConfirmation.tsx: 564 lines
- **Total**: ~2,368 lines to copy + enhance

## Estimated Token Cost

- Copying files: ~50K tokens
- Adding enhancements: ~30K tokens per file
- **Total**: ~140K tokens for complete implementation

## Alternative Approach

If token budget is a concern, consider:
1. Create base Handdrawn files without enhancements first
2. Add enhancements incrementally in separate sessions
3. Focus on one page at a time (Cart → Checkout → Order Confirmation)
4. Use targeted edits rather than full file rewrites

---

**Created**: 2026-03-15  
**Status**: CartHanddrawn.tsx completed, 2 files remaining  
**Next**: Create CheckoutHanddrawn.tsx and OrderConfirmationHanddrawn.tsx base copies

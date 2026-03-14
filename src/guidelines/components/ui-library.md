# UI Library (Radix UI Components)

**Category:** Components  
**Domain:** Radix UI Primitives  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand uses Radix UI primitives for accessible, unstyled UI components. Radix provides headless components (no default styling) that we style with Tailwind CSS to match brand aesthetics.

**Why Radix UI:**
- ✅ Built-in accessibility (WCAG 2.1 AA compliant)
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management
- ✅ Unstyled (full design control)
- ✅ TypeScript support

**Radix Components in Use:**
- Dialog (modals)
- Sheet (drawers/side panels)
- Accordion (collapsible sections)
- Tabs
- Dropdown Menu
- Popover
- Tooltip

---

## Dialog (Modal)

### Usage

**Use for:** Confirmations, forms, alerts, detailed content overlay

### Implementation

```tsx
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export function ProductQuickView({ product, open, onOpenChange }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50" />
        
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-twb-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto z-50 focus:outline-none">
          
          <Dialog.Title className="text-2xl font-serif text-[var(--twb-color-ink)] mb-4">
            {product.name}
          </Dialog.Title>
          
          <Dialog.Description className="text-[var(--twb-color-vine)] mb-6">
            {product.vintage} • {product.region}
          </Dialog.Description>
          
          {/* Product content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img src={product.image} alt={product.name} className="w-full rounded-twb-md" />
            </div>
            
            <div>
              <p className="text-lg font-semibold text-[var(--twb-color-plum)] mb-4">
                ${product.price}
              </p>
              <p className="mb-6">{product.description}</p>
              <button className="w-full bg-[var(--twb-color-plum)] text-white py-3 rounded-twb-md">
                Add to Cart
              </button>
            </div>
          </div>
          
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 p-2 hover:bg-[var(--twb-color-ink)]/5 rounded-twb-sm"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </Dialog.Close>
          
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
```

### Accessibility Features

- ✅ Focus trapped inside modal when open
- ✅ Escape key closes modal
- ✅ Focus returns to trigger on close
- ✅ `aria-labelledby` links title
- ✅ `aria-describedby` links description

---

## Sheet (Drawer)

### Usage

**Use for:** Mobile menus, filters, shopping cart, side panels

### Implementation

```tsx
import * as Sheet from '@radix-ui/react-dialog'; // Sheet uses Dialog primitives
import { X, Menu } from 'lucide-react';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  
  return (
    <Sheet.Root open={open} onOpenChange={setOpen}>
      <Sheet.Trigger asChild>
        <button className="lg:hidden p-2 min-w-[44px] min-h-[44px]" aria-label="Open menu">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </Sheet.Trigger>
      
      <Sheet.Portal>
        <Sheet.Overlay className="fixed inset-0 bg-black/60 z-50" />
        
        <Sheet.Content className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-[#2C1810] text-white z-50 p-6 focus:outline-none">
          
          <Sheet.Title className="text-xl font-semibold mb-8">Menu</Sheet.Title>
          
          <nav className="flex flex-col gap-4">
            <a href="/" className="text-lg py-2">Home</a>
            <a href="/wines" className="text-lg py-2">Wines</a>
            <a href="/spirits" className="text-lg py-2">Spirits</a>
            <a href="/experiences" className="text-lg py-2">Experiences</a>
            <a href="/about" className="text-lg py-2">About</a>
          </nav>
          
          <Sheet.Close asChild>
            <button
              className="absolute top-6 right-6 p-2"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </Sheet.Close>
          
        </Sheet.Content>
      </Sheet.Portal>
    </Sheet.Root>
  );
}
```

### Sheet Positioning

```tsx
// Right side (default)
<Sheet.Content className="fixed right-0 top-0 h-full">

// Left side
<Sheet.Content className="fixed left-0 top-0 h-full">

// Bottom (mobile filters)
<Sheet.Content className="fixed bottom-0 left-0 w-full">
```

---

## Accordion

### Usage

**Use for:** FAQs, collapsible content sections

### Implementation

```tsx
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function FAQ({ items }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-4">
      {items.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="border border-[var(--twb-border-tertiary)] rounded-twb-md overflow-hidden"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left p-4 flex items-center justify-between hover:bg-[var(--twb-color-ink)]/5 transition-colors group">
              <span className="font-medium text-[var(--twb-color-ink)]">
                {item.question}
              </span>
              <ChevronDown className="h-5 w-5 text-[var(--twb-color-vine)] transition-transform group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          
          <Accordion.Content className="p-4 pt-0 text-[var(--twb-color-vine)]">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
```

### Accordion Types

```tsx
// Single: Only one item open at a time
<Accordion.Root type="single" collapsible>

// Multiple: Multiple items can be open
<Accordion.Root type="multiple">
```

---

## Tabs

### Usage

**Use for:** Product details, content switching, settings panels

### Implementation

```tsx
import * as Tabs from '@radix-ui/react-tabs';

export function ProductTabs({ product }) {
  return (
    <Tabs.Root defaultValue="details" className="w-full">
      
      <Tabs.List className="flex border-b border-[var(--twb-border-tertiary)]">
        <Tabs.Trigger
          value="details"
          className="px-6 py-3 border-b-2 border-transparent data-[state=active]:border-[var(--twb-color-plum)] data-[state=active]:text-[var(--twb-color-plum)] font-medium transition-colors"
        >
          Details
        </Tabs.Trigger>
        
        <Tabs.Trigger
          value="reviews"
          className="px-6 py-3 border-b-2 border-transparent data-[state=active]:border-[var(--twb-color-plum)] data-[state=active]:text-[var(--twb-color-plum)] font-medium transition-colors"
        >
          Reviews
        </Tabs.Trigger>
        
        <Tabs.Trigger
          value="shipping"
          className="px-6 py-3 border-b-2 border-transparent data-[state=active]:border-[var(--twb-color-plum)] data-[state=active]:text-[var(--twb-color-plum)] font-medium transition-colors"
        >
          Shipping
        </Tabs.Trigger>
      </Tabs.List>
      
      <Tabs.Content value="details" className="py-6">
        <h3 className="mb-4">Product Details</h3>
        <p>{product.description}</p>
      </Tabs.Content>
      
      <Tabs.Content value="reviews" className="py-6">
        <h3 className="mb-4">Customer Reviews</h3>
        {/* Reviews component */}
      </Tabs.Content>
      
      <Tabs.Content value="shipping" className="py-6">
        <h3 className="mb-4">Shipping Information</h3>
        <p>Standard shipping takes 3-5 business days...</p>
      </Tabs.Content>
      
    </Tabs.Root>
  );
}
```

---

## Dropdown Menu

### Usage

**Use for:** User account menus, action menus, context menus

### Implementation

```tsx
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { User, Settings, LogOut } from 'lucide-react';

export function UserMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="p-2 min-w-[44px] min-h-[44px]" aria-label="User menu">
          <User className="h-5 w-5" />
        </button>
      </DropdownMenu.Trigger>
      
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-twb-md shadow-twb-lg border border-[var(--twb-border-tertiary)] p-2 z-50"
          sideOffset={5}
        >
          <DropdownMenu.Item className="flex items-center gap-3 px-3 py-2 rounded-twb-sm hover:bg-[var(--twb-color-ink)]/5 cursor-pointer focus:outline-none focus:bg-[var(--twb-color-ink)]/5">
            <User className="h-4 w-4" />
            <span>My Account</span>
          </DropdownMenu.Item>
          
          <DropdownMenu.Item className="flex items-center gap-3 px-3 py-2 rounded-twb-sm hover:bg-[var(--twb-color-ink)]/5 cursor-pointer focus:outline-none focus:bg-[var(--twb-color-ink)]/5">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </DropdownMenu.Item>
          
          <DropdownMenu.Separator className="h-px bg-[var(--twb-border-tertiary)] my-2" />
          
          <DropdownMenu.Item className="flex items-center gap-3 px-3 py-2 rounded-twb-sm hover:bg-[var(--twb-border-error)]/10 text-[var(--twb-border-error)] cursor-pointer focus:outline-none focus:bg-[var(--twb-border-error)]/10">
            <LogOut className="h-4 w-4" />
            <span>Log Out</span>
          </DropdownMenu.Item>
          
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
```

---

## Tooltip

### Usage

**Use for:** Icon button labels, additional context, help text

### Implementation

```tsx
import * as Tooltip from '@radix-ui/react-tooltip';
import { Info } from 'lucide-react';

export function InfoTooltip({ text }) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="inline-flex p-1" aria-label="More information">
            <Info className="h-4 w-4 text-[var(--twb-color-vine)]" />
          </button>
        </Tooltip.Trigger>
        
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-[var(--twb-color-ink)] text-white px-3 py-2 rounded-twb-sm text-sm max-w-xs z-50"
            sideOffset={5}
          >
            {text}
            <Tooltip.Arrow className="fill-[var(--twb-color-ink)]" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
```

---

## Popover

### Usage

**Use for:** Date pickers, color pickers, rich content tooltips

### Implementation

```tsx
import * as Popover from '@radix-ui/react-popover';
import { Calendar } from 'lucide-react';

export function DatePicker() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 border border-[var(--twb-border-tertiary)] rounded-twb-sm">
          <Calendar className="h-4 w-4" />
          <span>Select date</span>
        </button>
      </Popover.Trigger>
      
      <Popover.Portal>
        <Popover.Content
          className="bg-white rounded-twb-md shadow-twb-lg border border-[var(--twb-border-tertiary)] p-4 z-50"
          sideOffset={5}
        >
          {/* Calendar component */}
          <p>Calendar goes here</p>
          
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
```

---

## Important: asChild Prop

### What is asChild?

**`asChild` merges Radix component props with child component.**

Without `asChild`, Radix wraps child in extra `<button>`:
```tsx
<Trigger>
  <button>Click me</button>
</Trigger>
// Renders: <button><button>Click me</button></button> ❌
```

With `asChild`, Radix merges props:
```tsx
<Trigger asChild>
  <button>Click me</button>
</Trigger>
// Renders: <button>Click me</button> ✅
```

### When to Use asChild

**Always use `asChild` when:**
- Child is already a button/link
- Using custom styled components
- Need to merge props

```tsx
// ✅ Good: asChild prevents double button
<Dialog.Trigger asChild>
  <Button variant="primary">Open</Button>
</Dialog.Trigger>

// ❌ Bad: Creates nested button
<Dialog.Trigger>
  <Button variant="primary">Open</Button>
</Dialog.Trigger>
```

---

## Styling Radix Components

### Data Attributes

Radix uses `data-*` attributes for state:

```css
/* Tab: Active state */
[data-state="active"] {
  border-bottom-color: var(--twb-color-plum);
  color: var(--twb-color-plum);
}

/* Accordion: Open state */
[data-state="open"] .chevron {
  transform: rotate(180deg);
}

/* Menu Item: Highlighted state */
[data-highlighted] {
  background-color: var(--twb-color-ink) / 5%;
}
```

### Tailwind with Data Attributes

```tsx
className="data-[state=active]:border-[var(--twb-color-plum)] data-[state=active]:text-[var(--twb-color-plum)]"
```

---

## Related Guidelines

- [Buttons](/guidelines/design-tokens/buttons.md) - Button styling
- [Keyboard Navigation](/guidelines/accessibility/keyboard-navigation.md) - Keyboard access
- [Screen Readers](/guidelines/accessibility/screen-readers.md) - ARIA support

---

## Changelog

### Version 1.0 (2024-03-13)
- Radix UI components documented
- Dialog, Sheet, Accordion examples provided
- Tabs, Dropdown, Tooltip, Popover patterns added
- asChild prop explained
- Styling guidance provided

---

**Questions or Issues?**  
Reference [Radix UI Documentation](https://www.radix-ui.com/) or contact the development team.

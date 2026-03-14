# Navigation Design Tokens

**Category:** Design Tokens  
**Domain:** Navigation & Menus  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand navigation system provides clear wayfinding while maintaining brand warmth and organic aesthetics. Navigation should be intuitive, accessible, and responsive across all devices.

**Key Characteristics:**
- Sticky header (90px on mobile, adapts on desktop)
- Clear visual hierarchy (primary, secondary, utility nav)
- Accessible keyboard navigation
- Smooth transitions between states
- Mobile-first responsive design

---

## Header Specifications

### Dimensions

| Breakpoint | Header Height | Container | Logo Height |
|------------|---------------|-----------|-------------|
| Mobile (0-767px) | `90px` | Full width | `50px` |
| Tablet (768-1023px) | `90px` | `container.site` | `55px` |
| Desktop (1024px+) | `100px` | `container.site` | `60px` |

### Header Behavior

**Sticky Navigation:**
```tsx
<header className="sticky top-0 z-50 bg-[var(--twb-color-plum)] h-[90px] lg:h-[100px]">
  {/* Header content */}
</header>
```

**Mobile Sticky Offset:**  
All hero sections must account for 90px sticky header:
```tsx
className="min-h-[calc(100dvh-90px)]"
```

---

## Navigation Link States

### Desktop Navigation Links

**Dimensions:**
- Height: `100%` (matches header)
- Padding: `0 24px`
- Font size: `16px`
- Font weight: `500` (medium)

**States:**

| State | Background | Text Color | Border | Transition |
|-------|------------|------------|--------|------------|
| Default | Transparent | White | None | - |
| Hover | `rgba(255,255,255,0.1)` | White | `3px` bottom white | `200ms` |
| Active/Current | `rgba(255,255,255,0.15)` | White | `3px` bottom white | - |
| Focus | Transparent | White | `2px` ring white | Instant |

**Implementation:**
```tsx
<Link
  to="/wines"
  className={cn(
    "inline-flex items-center h-full px-6 text-white font-medium text-base transition-all duration-200",
    "hover:bg-white/10 hover:border-b-[3px] hover:border-white",
    "focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset",
    isActive && "bg-white/15 border-b-[3px] border-white"
  )}
>
  Wines
</Link>
```

### Mobile Navigation Links

**Dimensions:**
- Height: `56px` (touch target)
- Padding: `16px 24px`
- Font size: `18px`
- Font weight: `500`

**States:**

| State | Background | Text Color | Border | Icon |
|-------|------------|------------|--------|------|
| Default | Transparent | White | None | ChevronRight |
| Hover | `rgba(255,255,255,0.1)` | White | None | ChevronRight |
| Active | `rgba(255,255,255,0.15)` | White | `3px` left white | ChevronRight |
| Focus | Transparent | White | `2px` ring | ChevronRight |

**Implementation:**
```tsx
<Link
  to="/wines"
  className={cn(
    "flex items-center justify-between h-14 px-6 text-white text-lg font-medium",
    "hover:bg-white/10 transition-colors duration-200",
    "focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset",
    isActive && "bg-white/15 border-l-[3px] border-white"
  )}
>
  <span>Wines</span>
  <ChevronRight className="h-5 w-5" />
</Link>
```

---

## Navigation Patterns

### Primary Navigation (Desktop)

**Location:** Main header  
**Style:** Horizontal links

```tsx
<nav className="hidden lg:flex items-center gap-2" aria-label="Primary navigation">
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/wines" className="nav-link">Wines</Link>
  <Link to="/spirits" className="nav-link">Spirits</Link>
  <Link to="/experiences" className="nav-link">Experiences</Link>
  <Link to="/about" className="nav-link">About</Link>
</nav>
```

### Mobile Navigation (Drawer)

**Component:** Sheet (Radix UI Dialog)  
**Position:** Right side  
**Width:** `400px` max, `100%` on small screens

```tsx
<Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger asChild>
    <button aria-label="Open menu" className="lg:hidden p-2 min-w-[44px] min-h-[44px]">
      <Menu className="h-6 w-6 text-white" />
    </button>
  </SheetTrigger>
  
  <SheetContent side="right" className="w-full sm:w-[400px] bg-[#2C1810] text-white">
    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
    
    <nav className="flex flex-col pt-8" aria-label="Mobile navigation">
      <Link to="/" className="mobile-nav-link">Home</Link>
      <Link to="/wines" className="mobile-nav-link">Wines</Link>
      {/* More links */}
    </nav>
  </SheetContent>
</Sheet>
```

### Utility Navigation

**Location:** Top right (desktop) or bottom (mobile)  
**Items:** Cart, Account, Search

```tsx
<div className="flex items-center gap-4">
  <button aria-label="Search" className="p-2">
    <Search className="h-5 w-5 text-white" />
  </button>
  
  <Link to="/account" aria-label="Account" className="p-2">
    <User className="h-5 w-5 text-white" />
  </Link>
  
  <Link to="/cart" aria-label="Shopping cart" className="p-2 relative">
    <ShoppingCart className="h-5 w-5 text-white" />
    {cartCount > 0 && (
      <span className="absolute -top-1 -right-1 bg-[var(--twb-color-clay)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        {cartCount}
      </span>
    )}
  </Link>
</div>
```

---

## Breadcrumbs

### Breadcrumb Structure

**Location:** Below header, inside page content  
**Container:** `container.content`

**Specifications:**
- Font size: `14px`
- Color: `twb-color-vine` (secondary text)
- Separator: ChevronRight icon
- Current page: `twb-color-ink` (primary text), not a link

**Implementation:**
```tsx
<nav aria-label="Breadcrumb" className="py-4">
  <ol className="flex items-center gap-2 text-sm text-[var(--twb-color-vine)]">
    <li>
      <Link to="/" className="hover:text-[var(--twb-color-plum)] transition-colors">
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
    </li>
    
    <li aria-hidden="true">
      <ChevronRight className="h-4 w-4" />
    </li>
    
    <li>
      <Link to="/wines" className="hover:text-[var(--twb-color-plum)] transition-colors">
        Wines
      </Link>
    </li>
    
    <li aria-hidden="true">
      <ChevronRight className="h-4 w-4" />
    </li>
    
    <li>
      <span className="text-[var(--twb-color-ink)] font-medium" aria-current="page">
        Cabernet Sauvignon
      </span>
    </li>
  </ol>
</nav>
```

---

## Mega Menu (Optional)

### When to Use

**Use for:** Complex category hierarchies (wine types, regions, vintages)

**Trigger:** Hover (desktop) or click (mobile)

### Mega Menu Structure

```tsx
<div className="group relative">
  <button className="nav-link flex items-center gap-1">
    Wines
    <ChevronDown className="h-4 w-4" />
  </button>
  
  <div className="absolute top-full left-0 hidden group-hover:block w-screen max-w-4xl bg-[var(--twb-color-paper)] shadow-twb-xl border-t-4 border-[var(--twb-color-plum)] p-8">
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="font-serif text-lg text-[var(--twb-color-ink)] mb-4">By Type</h3>
        <ul className="space-y-2">
          <li><Link to="/wines/red" className="text-[var(--twb-color-vine)] hover:text-[var(--twb-color-plum)]">Red Wines</Link></li>
          <li><Link to="/wines/white" className="text-[var(--twb-color-vine)] hover:text-[var(--twb-color-plum)]">White Wines</Link></li>
        </ul>
      </div>
      {/* More columns */}
    </div>
  </div>
</div>
```

---

## Pagination

### Pagination Specifications

**Use for:** Product listings, blog archives, search results

**Components:** Previous, Page numbers, Next

```tsx
<nav aria-label="Pagination" className="flex items-center justify-center gap-2 py-8">
  <button
    disabled={currentPage === 1}
    className="p-2 min-w-[44px] min-h-[44px] border border-[var(--twb-border-tertiary)] rounded-[var(--twb-radius-sm)] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--twb-color-ink)]/5"
    aria-label="Previous page"
  >
    <ChevronLeft className="h-5 w-5" />
  </button>
  
  {[1, 2, 3, 4, 5].map((page) => (
    <button
      key={page}
      className={cn(
        "min-w-[44px] min-h-[44px] px-4 py-2 border rounded-[var(--twb-radius-sm)] font-medium transition-colors",
        currentPage === page
          ? "bg-[var(--twb-color-plum)] text-white border-[var(--twb-color-plum)]"
          : "border-[var(--twb-border-tertiary)] text-[var(--twb-color-ink)] hover:bg-[var(--twb-color-ink)]/5"
      )}
      aria-label={`Page ${page}`}
      aria-current={currentPage === page ? "page" : undefined}
    >
      {page}
    </button>
  ))}
  
  <button
    disabled={currentPage === totalPages}
    className="p-2 min-w-[44px] min-h-[44px] border border-[var(--twb-border-tertiary)] rounded-[var(--twb-radius-sm)] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--twb-color-ink)]/5"
    aria-label="Next page"
  >
    <ChevronRight className="h-5 w-5" />
  </button>
</nav>
```

---

## Tab Navigation

### Tab Specifications

**Use for:** Content switching (product details, reviews, shipping info)

```tsx
<div className="border-b border-[var(--twb-border-tertiary)]">
  <nav className="-mb-px flex gap-8" aria-label="Tabs">
    <button
      className={cn(
        "py-4 px-1 border-b-2 font-medium text-sm transition-colors",
        activeTab === 'details'
          ? "border-[var(--twb-color-plum)] text-[var(--twb-color-plum)]"
          : "border-transparent text-[var(--twb-color-vine)] hover:text-[var(--twb-color-ink)] hover:border-[var(--twb-border-secondary)]"
      )}
      aria-current={activeTab === 'details' ? 'page' : undefined}
    >
      Details
    </button>
    
    <button
      className={cn(
        "py-4 px-1 border-b-2 font-medium text-sm transition-colors",
        activeTab === 'reviews'
          ? "border-[var(--twb-color-plum)] text-[var(--twb-color-plum)]"
          : "border-transparent text-[var(--twb-color-vine)] hover:text-[var(--twb-color-ink)] hover:border-[var(--twb-border-secondary)]"
      )}
      aria-current={activeTab === 'reviews' ? 'page' : undefined}
    >
      Reviews
    </button>
  </nav>
</div>
```

---

## Accessibility Requirements

### Keyboard Navigation
- [ ] Tab/Shift+Tab navigates through links
- [ ] Enter/Space activates links and buttons
- [ ] Arrow keys navigate within menus (optional)
- [ ] Escape closes mobile menu/mega menu
- [ ] Focus visible with 2px ring

### Screen Readers
- [ ] `<nav>` landmarks with `aria-label`
- [ ] Current page indicated with `aria-current="page"`
- [ ] Menu buttons have `aria-label` or `aria-labelledby`
- [ ] Mobile menu uses `aria-expanded` on trigger
- [ ] Skip to content link at top

### Focus Management
- [ ] Focus trapped in mobile menu when open
- [ ] Focus returns to trigger on menu close
- [ ] Focus order follows visual order

---

## Skip to Content Link

**Requirement:** First focusable element on page (accessibility)

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--twb-color-plum)] text-white px-4 py-2 rounded-[var(--twb-radius-sm)] z-50 focus:outline-none focus:ring-2 focus:ring-white"
>
  Skip to main content
</a>
```

---

## Related Guidelines

- [Buttons](/guidelines/design-tokens/buttons.md) - Navigation button styles
- [Iconography](/guidelines/design-tokens/iconography.md) - Navigation icons
- [Responsive](/guidelines/design-tokens/responsive.md) - Mobile navigation
- [Keyboard Navigation](/guidelines/accessibility/keyboard-navigation.md) - Keyboard access

---

## Changelog

### Version 1.0 (2024-03-13)
- Navigation link states defined (desktop + mobile)
- Header specifications documented
- Breadcrumb pattern established
- Pagination component created
- Tab navigation pattern added
- Mega menu structure defined
- Accessibility requirements documented
- Skip link requirement added

---

**Questions or Issues?**  
Contact the design system team or reference the main [Design Tokens Overview](/guidelines/design-tokens/).

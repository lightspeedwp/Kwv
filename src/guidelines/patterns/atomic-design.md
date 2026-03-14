# Atomic Design Patterns

**Category:** Patterns  
**Domain:** Design System Structure  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand design system follows atomic design methodology, organizing components from smallest (atoms) to most complex (pages). This creates a scalable, maintainable component library with clear hierarchy and reusability.

**Atomic Design Levels:**
1. **Atoms** - Basic building blocks (buttons, inputs, labels)
2. **Molecules** - Simple groups of atoms (search bar, product card)
3. **Organisms** - Complex UI sections (header, footer, hero)
4. **Templates** - Page layouts (wireframes)
5. **Pages** - Specific instances (actual content)

**Reference:** Brad Frost's [Atomic Design](https://atomicdesign.bradfrost.com/)

---

## Atoms (`/components/common/`)

### Definition

**Atoms are the smallest, indivisible UI components.** They cannot be broken down further while maintaining their purpose.

### Examples

**Button:**
```tsx
/**
 * Button Atom
 * 
 * Fundamental button component with variants and sizes.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'button-base',
        `button-${variant}`,
        `button-${size}`,
        disabled && 'button-disabled',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
```

**Typography:**
```tsx
/**
 * Typography Atoms
 * 
 * Semantic text components with consistent styling.
 */
export function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1 className={cn('font-serif text-twb-h1 text-[var(--twb-color-ink)]', className)} {...props}>
      {children}
    </h1>
  );
}

export function P({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn('text-base text-[var(--twb-color-ink)] leading-relaxed', className)} {...props}>
      {children}
    </p>
  );
}
```

**Input:**
```tsx
/**
 * Input Atom
 * 
 * Basic text input with consistent styling.
 */
export default function Input({
  type = 'text',
  error,
  className,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        'w-full h-11 px-4 py-3 border rounded-[var(--twb-radius-input)] text-base',
        error
          ? 'border-[var(--twb-border-error)]'
          : 'border-[var(--twb-border-tertiary)]',
        className
      )}
      {...props}
    />
  );
}
```

**Logo:**
```tsx
/**
 * Logo Atom
 * 
 * Brand logo with responsive sizing.
 */
export default function Logo({ size = 'medium', className }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="The Wire Brand"
      className={cn(
        size === 'small' && 'h-10',
        size === 'medium' && 'h-14',
        size === 'large' && 'h-20',
        className
      )}
    />
  );
}
```

### Atom Characteristics

- ✅ No dependencies on other custom components
- ✅ Highly reusable
- ✅ Accept props for customization
- ✅ No business logic
- ✅ Single responsibility
- ✅ Stateless (usually)

---

## Molecules (`/components/sections/`)

### Definition

**Molecules are simple groups of atoms** that function together as a unit. They have a specific purpose but remain relatively simple.

### Examples

**Search Bar:**
```tsx
/**
 * SearchBar Molecule
 * 
 * Combines Input atom with Search icon and Button.
 */
export default function SearchBar({ onSearch, placeholder = 'Search wines...' }) {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--twb-color-vine)]" />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="pl-10"
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}
```

**Product Card:**
```tsx
/**
 * ProductCard Molecule
 * 
 * Displays wine product with image, title, price, and CTA.
 * Composes: Image, H3, P, Button atoms.
 */
export default function ProductCard({ wine }) {
  return (
    <div className="border border-[var(--twb-border-tertiary)] rounded-twb-md overflow-hidden hover:shadow-twb-md transition-shadow">
      <Link to={`/wines/${wine.id}`}>
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={wine.image}
            alt={wine.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <H3 className="mb-2">
          <Link to={`/wines/${wine.id}`}>{wine.name}</Link>
        </H3>
        <P className="text-sm text-[var(--twb-color-vine)] mb-1">{wine.vintage}</P>
        <P className="text-lg font-semibold text-[var(--twb-color-plum)] mb-4">
          ${wine.price}
        </P>
        <Button variant="primary" className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
```

**Newsletter Signup:**
```tsx
/**
 * Newsletter Molecule
 * 
 * Email signup form with input and submit button.
 */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
      />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
```

### Molecule Characteristics

- ✅ Compose 2-5 atoms
- ✅ Specific, focused purpose
- ✅ Reusable across pages
- ✅ May have light state management
- ✅ May have simple business logic
- ✅ Self-contained functionality

---

## Organisms (`/components/layout/`, `/components/sections/`)

### Definition

**Organisms are complex UI sections** formed by groups of molecules and/or atoms. They represent distinct sections of the interface.

### Examples

**Header (Organism):**
```tsx
/**
 * Header Organism
 * 
 * Complete site header with logo, navigation, and utility links.
 * Composes: Logo, Navigation molecule, SearchBar molecule, Cart icon.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-[var(--twb-color-plum)] h-[90px] lg:h-[100px]">
      <Container className="h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <Logo size="medium" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/wines" className="nav-link">Wines</Link>
          <Link to="/spirits" className="nav-link">Spirits</Link>
          <Link to="/experiences" className="nav-link">Experiences</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
        
        {/* Utility Navigation */}
        <div className="flex items-center gap-4">
          <SearchBar />
          <Link to="/account" aria-label="Account">
            <User className="h-5 w-5 text-white" />
          </Link>
          <CartButton />
        </div>
        
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </Container>
    </header>
  );
}
```

**Hero Section:**
```tsx
/**
 * Hero Organism
 * 
 * Full-width hero section with background image, text, and CTAs.
 */
export default function Hero({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  height = 'full',
}) {
  return (
    <section
      className={cn(
        'relative flex items-center justify-center text-white',
        height === 'full' && 'min-h-[calc(100dvh-90px)]',
        height === 'medium' && 'min-h-[60vh]',
        height === 'small' && 'min-h-[40vh]'
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      </div>
      
      {/* Content */}
      <Container className="relative z-10 text-center py-20 pb-32">
        <H1 className="text-white mb-6">{title}</H1>
        {subtitle && <P className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{subtitle}</P>}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCTA && (
            <Button variant="primary" size="large" onClick={primaryCTA.onClick}>
              {primaryCTA.label}
            </Button>
          )}
          {secondaryCTA && (
            <Button variant="secondary" size="large" onClick={secondaryCTA.onClick}>
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </Container>
      
      {/* Scroll Down Arrow */}
      <ScrollDownArrow />
    </section>
  );
}
```

**Footer:**
```tsx
/**
 * Footer Organism
 * 
 * Complete site footer with links, newsletter, and social media.
 */
export default function Footer() {
  return (
    <footer className="bg-[var(--twb-color-ink)] text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Logo size="medium" />
            <P className="text-white/80 mt-4">
              Handcrafted wines from Paarl, South Africa.
            </P>
          </div>
          
          {/* Quick Links */}
          <div>
            <H4 className="text-white mb-4">Shop</H4>
            <nav className="space-y-2">
              <Link to="/wines" className="block text-white/80 hover:text-white">Wines</Link>
              <Link to="/spirits" className="block text-white/80 hover:text-white">Spirits</Link>
              <Link to="/wine-club" className="block text-white/80 hover:text-white">Wine Club</Link>
            </nav>
          </div>
          
          {/* Company */}
          <div>
            <H4 className="text-white mb-4">Company</H4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-white/80 hover:text-white">About</Link>
              <Link to="/contact" className="block text-white/80 hover:text-white">Contact</Link>
              <Link to="/sustainability" className="block text-white/80 hover:text-white">Sustainability</Link>
            </nav>
          </div>
          
          {/* Newsletter */}
          <div>
            <H4 className="text-white mb-4">Newsletter</H4>
            <Newsletter />
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <P>&copy; 2024 The Wire Brand. All rights reserved.</P>
        </div>
      </Container>
    </footer>
  );
}
```

### Organism Characteristics

- ✅ Compose multiple molecules and atoms
- ✅ Form distinct sections of UI
- ✅ May contain significant business logic
- ✅ May manage complex state
- ✅ Less reusable (more specific to context)
- ✅ Can be standalone sections

---

## Templates (Page Layouts)

### Definition

**Templates are page-level layouts** that define structure without specific content. They show how organisms fit together.

### Example: Product Detail Template

```tsx
/**
 * ProductDetailTemplate
 * 
 * Layout template for product detail pages.
 */
export default function ProductDetailTemplate({
  breadcrumbs,
  productGallery,
  productInfo,
  description,
  reviews,
  relatedProducts,
}) {
  return (
    <div>
      {/* Breadcrumbs */}
      <Container>
        {breadcrumbs}
      </Container>
      
      {/* Product Section */}
      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>{productGallery}</div>
          <div>{productInfo}</div>
        </div>
      </Container>
      
      {/* Tabs: Description, Reviews */}
      <Container className="py-12">
        <Tabs>
          <TabPanel label="Description">{description}</TabPanel>
          <TabPanel label="Reviews">{reviews}</TabPanel>
        </Tabs>
      </Container>
      
      {/* Related Products */}
      <Container className="py-12">
        {relatedProducts}
      </Container>
    </div>
  );
}
```

---

## Pages (Specific Instances)

### Definition

**Pages are specific instances** of templates with real content. They represent actual URLs users visit.

### Example: Cabernet Sauvignon 2021 Page

```tsx
/**
 * CabernetSauvignon2021 Page
 * 
 * Specific product page instance using ProductDetailTemplate.
 */
export default function CabernetSauvignon2021() {
  const wine = {
    id: 'cab-sauv-2021',
    name: 'Cabernet Sauvignon 2021',
    price: 45,
    vintage: 2021,
    // ... more data
  };
  
  return (
    <ProductDetailTemplate
      breadcrumbs={<Breadcrumbs items={['Home', 'Wines', 'Red Wines', wine.name]} />}
      productGallery={<ProductGallery images={wine.images} />}
      productInfo={<ProductInfo wine={wine} />}
      description={<ProductDescription wine={wine} />}
      reviews={<ProductReviews productId={wine.id} />}
      relatedProducts={<RelatedProducts category="red-wines" exclude={wine.id} />}
    />
  );
}
```

---

## Component Promotion/Demotion

### When to Promote (Move Up a Level)

**Atom → Molecule:** When atom is always used with other atoms in same pattern
```tsx
// Before: Input atom always used with Label atom
<Label>Email</Label>
<Input type="email" />

// After: Create FormField molecule
<FormField label="Email" type="email" />
```

**Molecule → Organism:** When molecule is combined with other molecules to form complex section
```tsx
// Before: ProductCard + ProductFilters used together
<ProductFilters />
<ProductCard />
<ProductCard />

// After: Create ProductGrid organism
<ProductGrid filters={filters} products={products} />
```

### When to Demote (Move Down a Level)

**Too complex for current level:** If component is too simple for its level

```tsx
// Before: ButtonGroup as organism (too simple)
<ButtonGroup>
  <Button>Primary</Button>
  <Button>Secondary</Button>
</ButtonGroup>

// After: Demote to molecule
```

---

## Best Practices

### 1. Start with Atoms

**Build from smallest pieces upward:**
```tsx
// 1. Create atoms
Button, Input, Label, Typography

// 2. Combine into molecules  
FormField (Label + Input), SearchBar (Input + Button)

// 3. Build organisms
ContactForm (FormField + FormField + Button)

// 4. Create templates
ContactPage (Header + ContactForm + Footer)
```

### 2. Keep Components Focused

**One responsibility per component:**
```tsx
// ❌ Bad: ProductCard does too much
function ProductCard({ wine, onAddToCart, onAddToWishlist, onShare }) {
  // Too many responsibilities
}

// ✅ Good: Split into focused components
function ProductCard({ wine, children }) {
  return (
    <div>
      <ProductImage image={wine.image} />
      <ProductInfo wine={wine} />
      {children} {/* Allow custom actions */}
    </div>
  );
}

function ProductActions({ onAddToCart, onAddToWishlist, onShare }) {
  return <div>{/* Action buttons */}</div>;
}
```

### 3. Compose, Don't Duplicate

**Reuse existing components:**
```tsx
// ❌ Bad: Duplicate styling
function PrimaryButton() { return <button className="bg-plum text-white">...</button>; }
function SecondaryButton() { return <button className="border border-plum">...</button>; }

// ✅ Good: Compose with variants
function Button({ variant = 'primary' }) {
  return <button className={`button-${variant}`}>...</button>;
}
```

---

## Related Guidelines

- [Component Structure](/guidelines/architecture/component-structure.md) - File organization
- [Layout Patterns](/guidelines/patterns/layout-patterns.md) - Layout compositions

---

## Changelog

### Version 1.0 (2024-03-13)
- Atomic design methodology documented
- Atom, Molecule, Organism examples provided
- Template and Page patterns established
- Component promotion/demotion guidelines added
- Best practices documented

---

**Questions or Issues?**  
Reference Brad Frost's [Atomic Design](https://atomicdesign.bradfrost.com/) or contact the design system team.

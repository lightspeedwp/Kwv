# Layout Patterns

**Category:** Patterns  
**Domain:** Page Layouts & Composition  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand uses consistent, reusable layout patterns to create cohesive page experiences. Layouts adapt responsively while maintaining visual hierarchy and brand aesthetic.

**Core Layout Patterns:**
- Hero Section
- Full-Width Section (50/50 split)
- Grid Layouts (2, 3, 4 columns)
- Content + Sidebar
- Feature Blocks
- Stacked Content

---

## Hero Section Pattern

### Full-Screen Hero

**Usage:** Homepage, landing pages, major category pages

```tsx
<section className="relative min-h-[calc(100dvh-90px)] flex items-center justify-center text-white">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
  </div>
  
  {/* Content */}
  <Container className="relative z-10 text-center py-20 pb-32">
    <h1 className="text-white mb-6">Handcrafted Wines from Paarl</h1>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Discover our organic, small-batch wines crafted with passion
    </p>
    <div className="flex gap-4 justify-center">
      <Button variant="primary">Shop Wines</Button>
      <Button variant="secondary">Our Story</Button>
    </div>
  </Container>
  
  {/* Scroll Down Arrow */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
    <ScrollDownArrow />
  </div>
</section>
```

### Medium Hero (60vh)

**Usage:** Product category pages, about pages

```tsx
<section className="relative min-h-[60vh] flex items-center justify-center text-white">
  {/* Same structure, different height */}
</section>
```

### Small Hero (40vh)

**Usage:** Blog posts, simple pages

```tsx
<section className="relative min-h-[40vh] flex items-center justify-center text-white">
  {/* Same structure, different height */}
</section>
```

---

## Full-Width Section (50/50 Split)

### Image Left, Content Right

**Usage:** Brand story, feature highlights, wine details

```tsx
<section className="w-full bg-[var(--twb-color-paper)] py-20">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="aspect-square overflow-hidden rounded-twb-lg">
        <img
          src="/vineyard.jpg"
          alt="Vineyard rows in Paarl"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div>
        <h2 className="mb-6">Our Story</h2>
        <p className="mb-4">
          Nestled in the heart of Paarl, South Africa, The Wire Brand has been
          crafting exceptional wines since 2010...
        </p>
        <p className="mb-6">
          Our commitment to organic farming and sustainable practices ensures
          every bottle tells the story of our terroir.
        </p>
        <Button variant="tertiary">Learn More</Button>
      </div>
    </div>
  </Container>
</section>
```

### Content Left, Image Right

```tsx
<section className="w-full bg-white py-20">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Content (order-2 on mobile, order-1 on desktop) */}
      <div className="order-2 lg:order-1">
        <h2>Sustainable Winemaking</h2>
        <p>Content...</p>
      </div>
      
      {/* Image (order-1 on mobile, order-2 on desktop) */}
      <div className="order-1 lg:order-2">
        <img src="/sustainability.jpg" alt="..." />
      </div>
    </div>
  </Container>
</section>
```

---

## Grid Layouts

### 3-Column Product Grid

**Usage:** Wine catalog, shop pages

```tsx
<section className="py-20">
  <Container>
    <h2 className="mb-12 text-center">Our Wines</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {wines.map((wine) => (
        <ProductCard key={wine.id} wine={wine} />
      ))}
    </div>
  </Container>
</section>
```

### 4-Column Grid

**Usage:** Category tiles, small items

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {categories.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ))}
</div>
```

### 2-Column Grid

**Usage:** Blog posts, experiences, large cards

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {posts.map((post) => (
    <BlogCard key={post.id} post={post} />
  ))}
</div>
```

---

## Content + Sidebar Layout

### Main Content with Right Sidebar

**Usage:** Blog posts, product pages, documentation

```tsx
<Container className="py-12">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    {/* Main Content (2/3 width) */}
    <article className="lg:col-span-2">
      <h1 className="mb-6">Article Title</h1>
      <div className="prose prose-lg">
        {/* Article content */}
      </div>
    </article>
    
    {/* Sidebar (1/3 width) */}
    <aside className="lg:col-span-1">
      <div className="sticky top-24 space-y-8">
        {/* Related Posts */}
        <div>
          <h3 className="mb-4">Related Articles</h3>
          <ul className="space-y-3">
            {relatedPosts.map((post) => (
              <li key={post.id}>
                <Link to={post.url}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Newsletter */}
        <div className="border border-[var(--twb-border-tertiary)] rounded-twb-md p-6">
          <h4 className="mb-4">Subscribe</h4>
          <Newsletter />
        </div>
      </div>
    </aside>
  </div>
</Container>
```

---

## Feature Blocks Pattern

### 3 Feature Cards

**Usage:** Service highlights, value propositions

```tsx
<section className="py-20 bg-[var(--twb-color-paper)]">
  <Container>
    <h2 className="text-center mb-12">Why Choose Us</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--twb-color-plum)]/10">
          <Grape className="h-8 w-8 text-[var(--twb-color-plum)]" />
        </div>
        <h3 className="mb-3">Organic Grapes</h3>
        <p className="text-[var(--twb-color-vine)]">
          100% organically grown grapes from our Paarl vineyards
        </p>
      </div>
      
      {/* Feature 2 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--twb-color-vine)]/10">
          <Wine className="h-8 w-8 text-[var(--twb-color-vine)]" />
        </div>
        <h3 className="mb-3">Small Batch</h3>
        <p className="text-[var(--twb-color-vine)]">
          Carefully crafted in limited quantities for exceptional quality
        </p>
      </div>
      
      {/* Feature 3 */}
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--twb-color-clay)]/10">
          <Award className="h-8 w-8 text-[var(--twb-color-clay)]" />
        </div>
        <h3 className="mb-3">Award Winning</h3>
        <p className="text-[var(--twb-color-vine)]">
          Recognized internationally for excellence in winemaking
        </p>
      </div>
    </div>
  </Container>
</section>
```

---

## Stacked Content Pattern

### Alternating Sections

**Usage:** Long-form pages, storytelling

```tsx
<>
  {/* Section 1: Image Left */}
  <section className="py-20 bg-white">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div><img src="/image1.jpg" alt="..." /></div>
        <div><h2>Section 1</h2><p>Content...</p></div>
      </div>
    </Container>
  </section>
  
  {/* Section 2: Image Right */}
  <section className="py-20 bg-[var(--twb-color-paper)]">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1"><h2>Section 2</h2><p>Content...</p></div>
        <div className="order-1 lg:order-2"><img src="/image2.jpg" alt="..." /></div>
      </div>
    </Container>
  </section>
  
  {/* Section 3: Image Left */}
  <section className="py-20 bg-white">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div><img src="/image3.jpg" alt="..." /></div>
        <div><h2>Section 3</h2><p>Content...</p></div>
      </div>
    </Container>
  </section>
</>
```

---

## Container Widths Reference

| Container Type | Max Width | Usage |
|----------------|-----------|-------|
| `container.full` | 100% | Full-width backgrounds |
| `container.site` | 1440px | Standard content (headers, grids) |
| `container.wide` | 1280px | Visual-heavy sections |
| `container.content` | 960px | Text-heavy content (60-80 char line) |
| `container.narrow` | 720px | Forms, single-column |

---

## Spacing Standards

### Section Vertical Spacing

```tsx
// Small section
<section className="py-12">

// Medium section (standard)
<section className="py-20">

// Large section
<section className="py-32">
```

### Element Spacing

```tsx
// Heading to content
<h2 className="mb-6">Title</h2>

// Paragraph spacing
<p className="mb-4">Paragraph</p>

// Section internal spacing
<div className="space-y-8">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## Responsive Layout Tips

### Mobile-First Grid

```tsx
// Mobile: 1 column → Tablet: 2 columns → Desktop: 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Hide/Show on Breakpoints

```tsx
// Hide on mobile, show on desktop
<div className="hidden lg:block">Desktop only</div>

// Show on mobile, hide on desktop
<div className="block lg:hidden">Mobile only</div>
```

### Reorder on Mobile

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div className="order-2 lg:order-1">Content (bottom on mobile, left on desktop)</div>
  <div className="order-1 lg:order-2">Image (top on mobile, right on desktop)</div>
</div>
```

---

## Accessibility Considerations

### Landmark Regions

```tsx
<header>...</header>       {/* Site header */}
<nav aria-label="Primary navigation">...</nav>  {/* Navigation */}
<main>...</main>           {/* Main content */}
<aside aria-label="Related content">...</aside> {/* Sidebar */}
<footer>...</footer>       {/* Site footer */}
```

### Skip Links

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

<main id="main-content" tabIndex={-1}>
  {/* Page content */}
</main>
```

---

## Related Guidelines

- [Hero Standards](/guidelines/patterns/hero-standards.md) - Hero section specifics
- [Responsive](/guidelines/design-tokens/responsive.md) - Breakpoint system
- [Spacing](/guidelines/design-tokens/spacing.md) - Spacing tokens

---

## Changelog

### Version 1.0 (2024-03-13)
- Layout patterns documented
- Hero section variants created
- Grid layouts defined
- Content + sidebar pattern added
- Feature blocks pattern established
- Responsive layout tips provided

---

**Questions or Issues?**  
Contact the design system team.

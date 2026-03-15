# Hand-Drawn Demo Page Reference

## Overview

The Hand-Drawn Demo Landing Page is a comprehensive showcase of all hand-drawn aesthetic components, patterns, and design elements built for the Handcrafted Wines project.

**URL:** `/handdrawn-demo/landing-page`  
**File:** `/pages/handdrawn-demo/HandDrawnDemoLanding.tsx`  
**Data:** `/data/demoContent.ts`

---

## Purpose

This demo page serves multiple purposes:

1. **Component Showcase** - Visual catalog of all hand-drawn elements
2. **Pattern Library** - Reusable design patterns in context
3. **Client Presentation** - Marketing/sales demonstration
4. **Developer Reference** - Code examples and implementation guide
5. **QA Testing** - Comprehensive testing environment
6. **Design Documentation** - Living style guide

---

## Sections Breakdown

### 1. Hero Section (WebGL Particles)

**Features:**
- ✅ WebGL Canvas particle system (50 floating particles)
- ✅ Wine-inspired colors (plum, gold, vine, clay)
- ✅ Wax seal stamp badge (plum, large)
- ✅ Hand-drawn underline on title (brush variant)
- ✅ Motion animations (fade in, slide up)
- ✅ All 3 hand-drawn icons displayed (hover animations)
- ✅ Scroll down indicator (animated)
- ✅ Paper texture overlay

**Components Used:**
- `ParticleBackground` (custom WebGL component)
- `WaxSealStamp`
- `HandDrawnUnderline`
- `HandDrawnWineBottle`
- `HandDrawnGrapeCluster`
- `HandDrawnOakBarrel`
- `PaperTexture`
- `motion` (Motion animations)

**WebGL Implementation:**
```tsx
// Particle class with wine colors
const colors = ['#5a2d3b', '#c8a96b', '#5c6b4f', '#b86b4b'];
// Canvas 2D rendering with blend mode
style={{ mixBlendMode: 'multiply' }}
```

---

### 2. Stats Section

**Features:**
- ✅ 4-column grid (responsive: 1→2→4)
- ✅ OrganicBorder wrapper on each stat card
- ✅ Hand-drawn icons (wine bottle, grape cluster, oak barrel)
- ✅ Large numbers with labels
- ✅ Scroll-triggered fade-in animations

**Components Used:**
- `OrganicBorder`
- All 3 hand-drawn icon components
- `Typography`
- `motion` (viewport animations)

**Stats Displayed:**
- 20+ Hand-Drawn Components
- 100% WCAG AA Compliant
- 5 Section Divider Variants
- ∞ Beautiful Imperfections

---

### 3. Features Section

**Features:**
- ✅ 3-column grid showcasing core features
- ✅ BrushStrokeBorder on each card (wine-label variant)
- ✅ PaperTexture backgrounds
- ✅ Hand-drawn icons (different colors per feature)
- ✅ Organic border radius
- ✅ Scroll-triggered staggered animations

**Components Used:**
- `BrushStrokeBorder`
- `PaperTexture`
- All 3 hand-drawn icons
- `Typography`

**Features Highlighted:**
1. Hand-Drawn Icons (plum)
2. Organic Borders (vine)
3. Paper Textures (gold)

---

### 4. Product Showcase Grid

**Features:**
- ✅ 4-column responsive grid (1→2→4)
- ✅ Product cards with all hand-drawn elements
- ✅ Asymmetric badges (4px 8px 6px 9px)
- ✅ Hover zoom on images
- ✅ Organic border radius
- ✅ BrushStrokeBorder overlays
- ✅ PaperTexture backgrounds

**Components Used:**
- `BrushStrokeBorder` (wine-label variant)
- `PaperTexture`
- `Button` (outline variant)
- Asymmetric rounded badges

**Products Displayed:**
1. Artisan Reserve Collection ($499) - Featured
2. Handcrafted Essentials ($299) - Popular
3. Vintage Heritage Set ($399) - New
4. Organic Form Pack ($349)

---

### 5. Wax Seal Showcase

**Features:**
- ✅ All 4 wax seal color variants displayed
- ✅ Large size (140x140px)
- ✅ Rotation entrance animations
- ✅ Labels below each seal
- ✅ Flexbox centered layout

**Components Used:**
- `WaxSealStamp` (all 4 variants)
- `motion` (scale/rotate animations)

**Variants Shown:**
1. Plum - "Authentic"
2. Gold - "Premium"
3. Clay - "Handmade"
4. Ink - "Classic"

---

### 6. Testimonials Section

**Features:**
- ✅ 3-column grid
- ✅ BrushStrokeBorder (rough variant, gold)
- ✅ Star ratings
- ✅ Quote formatting
- ✅ Author info
- ✅ Scroll-triggered animations

**Components Used:**
- `BrushStrokeBorder`
- `PaperTexture`
- `Star` icons (lucide-react)
- `motion` animations

**Testimonials:**
- Sarah Mitchell (Creative Director)
- James Chen (Product Designer)
- Emma Rodriguez (Brand Manager)

---

### 7. Hand-Drawn Form Demo

**Features:**
- ✅ All 3 hand-drawn form components
- ✅ Pencil-sketched borders
- ✅ Character count (textarea)
- ✅ Checkbox with hand-drawn checkmark
- ✅ Form state management
- ✅ BrushStrokeBorder wrapper (dry-brush variant)
- ✅ Paper texture background

**Components Used:**
- `HandDrawnTextInput` (name, email)
- `HandDrawnTextarea` (message, 500 char limit)
- `HandDrawnCheckbox` (newsletter opt-in)
- `Button` (handDrawn prop enabled)
- `BrushStrokeBorder`

**Form Fields:**
1. Full Name (text input, required)
2. Email Address (email input, required)
3. Your Message (textarea, 500 char max, required)
4. Newsletter checkbox

---

### 8. Section Dividers

**All 5 divider variants are used between sections:**

1. **Brush Horizontal** - After hero
   - Color: Plum
   - Width: Wide
   - Spacing: Large

2. **Vine Flourish** - After stats
   - Color: Vine green
   - Width: Narrow
   - Accents: Enabled

3. **Wine Stain** - After features
   - Color: Plum
   - Width: Wide
   - Accents: Enabled

4. **Double Stroke** - After products
   - Color: Clay
   - Width: Narrow

5. **Grape Cluster** - After wax seals
   - Color: Plum
   - Width: Narrow
   - Accents: Enabled

---

### 9. Final CTA Section

**Features:**
- ✅ Gradient background (plum)
- ✅ Wax seal stamp (gold, "Ready?")
- ✅ Scale-up entrance animation
- ✅ Two CTA buttons (handDrawn enabled)
- ✅ Links to home and documentation

**Components Used:**
- `WaxSealStamp` (gold variant)
- `Button` (secondary handDrawn, outline)
- `Typography`

---

## Data Structure

### demoContent.ts

**Exports:**

```typescript
// Hero content
export const demoHero: DemoHero

// Products
export const demoProducts: DemoProduct[]

// Features
export const demoFeatures: DemoFeature[]

// Testimonials
export const demoTestimonials: DemoTestimonial[]

// Dividers reference
export const demoDividers

// Wax seals reference
export const demoWaxSeals

// Stats
export const demoStats

// Form fields
export const demoFormFields

// CTAs
export const demoCTAs
```

**Interfaces:**

```typescript
interface DemoProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
}

interface DemoFeature {
  icon: 'wine-bottle' | 'grape-cluster' | 'oak-barrel';
  title: string;
  description: string;
  color: string;
}

interface DemoTestimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

interface DemoHero {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
  image: string;
}
```

---

## Component Inventory

### Hand-Drawn Components Used

| Component | Count | Variants | Colors |
|-----------|-------|----------|--------|
| HandDrawnWineBottle | 5 | - | Plum, Clay |
| HandDrawnGrapeCluster | 5 | - | Plum, Vine |
| HandDrawnOakBarrel | 5 | With bung | Gold |
| WaxSealStamp | 6 | Plum, Gold, Clay, Ink | All 4 |
| BrushStrokeBorder | 8 | Wine-label, Rough, Dry-brush | Various |
| BrushStrokeDivider | 5 | All 5 variants | Plum, Vine, Clay |
| PaperTexture | 10+ | Subtle, Medium | - |
| OrganicBorder | 4 | Card | - |
| HandDrawnUnderline | 2 | Brush, Wave | Plum, Gold |
| HandDrawnTextInput | 2 | - | - |
| HandDrawnTextarea | 1 | With char count | - |
| HandDrawnCheckbox | 1 | - | - |

**Total Component Instances:** 50+

---

## Animations & Interactions

### Motion Animations

**Hero Section:**
```tsx
// Wax seal - rotate entrance
initial={{ scale: 0, rotate: -180 }}
animate={{ scale: 1, rotate: 0 }}
transition={{ duration: 0.8, type: 'spring' }}

// Content - fade + slide up
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.3 }}

// Icons - hover scale & rotate
whileHover={{ scale: 1.1, rotate: 5 }}
```

**Scroll Animations:**
```tsx
// Viewport-triggered
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
```

**WebGL Particles:**
- 50 particles with random positions
- Slow drift animation (0.25-0.5 speed)
- Wine-inspired colors
- Wrap-around edges
- 60fps animation loop

---

## Performance Considerations

### Optimizations

1. **WebGL Canvas**
   - Single canvas element
   - RequestAnimationFrame loop
   - Cleanup on unmount
   - 50 particles max (performance balance)

2. **Motion Animations**
   - `viewport={{ once: true }}` (animate once)
   - Staggered delays (avoid jank)
   - Spring physics (natural feel)

3. **Images**
   - Unsplash optimized URLs (`auto=format&fit=crop&q=80`)
   - Lazy loading implicit
   - Responsive sizing

4. **SVG Filters**
   - Unique IDs per component instance
   - Reuse filter definitions
   - `pointer-events: none` on decorative layers

---

## Accessibility

### WCAG AA Compliance

**Keyboard Navigation:**
- All buttons focusable
- Form inputs accessible
- Skip links functional
- Focus visible (outlines)

**Screen Readers:**
- Semantic HTML (`<section>`, `<h1>`, `<p>`)
- ARIA labels on decorative elements
- `aria-hidden="true"` on particles/textures
- Descriptive button text

**Color Contrast:**
- Text: ≥ 4.5:1 ratio
- Interactive elements: ≥ 3:1
- Tested with design tokens

**Motion:**
- Respects `prefers-reduced-motion`
- No essential information in animations
- Fallback to static display

---

## Reusable Patterns

### Pattern 1: Icon Feature Card

```tsx
<div className="relative bg-[var(--twb-color-bg-tertiary)] rounded-[var(--twb-radius-organic-md)] p-8">
  <BrushStrokeBorder variant="wine-label" color="..." opacity={0.3} />
  <PaperTexture intensity="subtle" opacity={0.03} />
  <div className="relative z-10">
    <IconComponent size={48} color="..." />
    <h3 className="font-serif text-2xl mb-3">{title}</h3>
    <p className="text-muted">{description}</p>
  </div>
</div>
```

**Use Cases:** Feature highlights, service cards, benefit showcases

---

### Pattern 2: Product Card

```tsx
<div className="relative bg-tertiary rounded-organic overflow-hidden">
  <BrushStrokeBorder variant="wine-label" color="plum" />
  <PaperTexture intensity="subtle" />
  
  {/* Image with badge */}
  <div className="aspect-[3/4]">
    <img src="..." />
    <span className="badge rounded-[4px_8px_6px_9px]">Badge</span>
  </div>
  
  {/* Content */}
  <div className="p-6">
    <span className="category">Category</span>
    <h3 className="font-serif">{name}</h3>
    <p>{description}</p>
    <div className="flex justify-between">
      <span className="price">${price}</span>
      <Button variant="outline">View</Button>
    </div>
  </div>
</div>
```

**Use Cases:** Product grids, portfolio items, case studies

---

### Pattern 3: Testimonial Card

```tsx
<div className="relative bg-tertiary rounded-organic p-8">
  <BrushStrokeBorder variant="rough" color="gold" opacity={0.2} />
  <PaperTexture />
  
  <div className="relative z-10">
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map(() => <Star fill="gold" />)}
    </div>
    
    {/* Quote */}
    <p className="italic mb-6">"{quote}"</p>
    
    {/* Author */}
    <p className="font-bold">{name}</p>
    <p className="text-sm text-muted">{role}</p>
  </div>
</div>
```

**Use Cases:** Reviews, testimonials, social proof, quotes

---

### Pattern 4: CTA Section with Wax Seal

```tsx
<section className="py-20 bg-gradient-to-br from-plum to-plum/80 text-white">
  <Container variant="content">
    <div className="text-center">
      <div className="flex justify-center mb-8">
        <WaxSealStamp text="Ready?" variant="gold" size="lg" />
      </div>
      <Typography variant="h2" className="text-white">{title}</Typography>
      <p className="text-xl text-white/90">{description}</p>
      <div className="flex gap-4 justify-center">
        <Button variant="secondary" handDrawn>{primaryCTA}</Button>
        <Button variant="outline">{secondaryCTA}</Button>
      </div>
    </div>
  </Container>
</section>
```

**Use Cases:** Conversion CTAs, newsletter signups, event registrations

---

## Usage Examples

### Reusing for Client Demos

**Modify demoContent.ts:**
```typescript
// Replace with client-specific content
export const demoHero: DemoHero = {
  title: "Your Brand Showcase",
  subtitle: "Custom description...",
  // ...
};
```

### Creating New Demo Sections

**Add to HandDrawnDemoLanding.tsx:**
```tsx
{/* New Section */}
<section className="py-20 bg-primary">
  <Container>
    {/* Your demo content */}
  </Container>
</section>

{/* Add divider */}
<BrushStrokeDivider variant="vine-flourish" />
```

---

## Testing Checklist

### Visual Testing

- [ ] All icons render correctly
- [ ] Wax seals show all 4 variants
- [ ] Dividers appear between sections
- [ ] Product cards have organic borders
- [ ] Form components display pencil sketches
- [ ] Testimonials show star ratings
- [ ] WebGL particles animate smoothly

### Responsive Testing

- [ ] Mobile (375px): 1-column grids
- [ ] Tablet (768px): 2-column grids
- [ ] Desktop (1024px): 3-4 column grids
- [ ] Wide (1440px): Max-width containers
- [ ] Hero scales appropriately

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader announces sections
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible
- [ ] Motion respects prefers-reduced-motion
- [ ] Form labels associated correctly

### Performance Testing

- [ ] WebGL canvas FPS ≥ 60fps
- [ ] Page load time < 3s
- [ ] No layout shifts (CLS)
- [ ] Animations smooth (no jank)
- [ ] Memory usage stable

---

## Future Enhancements

### Potential Additions

1. **More WebGL Effects**
   - Wine pour simulation
   - 3D bottle rotation
   - Parallax scrolling particles

2. **Interactive Demos**
   - Color variant switcher
   - Live code playground
   - Component customizer

3. **Additional Sections**
   - Animation showcase
   - Typography specimens
   - Color palette explorer
   - Icon library grid

4. **Documentation Integration**
   - Code snippets
   - Props tables
   - Usage guidelines
   - Best practices

---

## Related Files

**Components:**
- `/components/decorative/icons/` (Hand-drawn icons)
- `/components/decorative/WaxSealStamp.tsx`
- `/components/decorative/BrushStrokeBorder.tsx`
- `/components/decorative/BrushStrokeDivider.tsx`
- `/components/decorative/PaperTexture.tsx`
- `/components/decorative/OrganicBorder.tsx`
- `/components/decorative/HandDrawnUnderline.tsx`
- `/components/forms/` (Hand-drawn form components)

**Documentation:**
- `/docs/HAND-DRAWN-AESTHETIC-IMPLEMENTATION.md`
- `/Guidelines.md`
- `/guidelines/design-tokens/`

**Routes:**
- `/routes.tsx` (Demo route configured)

---

**Last Updated:** 2024-03-15  
**Maintained By:** Handcrafted Wines Development Team  
**Demo URL:** `/handdrawn-demo/landing-page`

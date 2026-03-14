# Hand-Drawn Aesthetic Guidelines

**Category:** Design Tokens  
**Domain:** Visual Style & Aesthetic  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand redesign embraces a **hand-drawn, organic aesthetic** inspired by winemaking craftsmanship, vineyard terroir, and artisanal authenticity. Every element should feel approachable, warm, and authentically handcrafted—never sterile or corporate.

**Core Aesthetic Principles:**
- **Organic over geometric** - Imperfect curves, asymmetric layouts
- **Textured over flat** - Subtle paper textures, brush strokes
- **Warm over cool** - Earthy tones, natural materials
- **Handcrafted over manufactured** - Hand-drawn illustrations, irregular shapes
- **Authentic over polished** - Embrace imperfection, celebrate character

**Visual Inspiration:**
- Wine label sketches and watercolors
- Vineyard landscape paintings
- Winemaker's tasting notes and journals
- Paarl valley terroir (clay, stone, vine)
- Cellar barrel markings and chalk labels

---

## Hand-Drawn Elements

### 1. Hand-Drawn Borders & Dividers

**Replace perfect lines with organic, hand-drawn strokes:**

```tsx
/**
 * HandDrawnDivider Component
 * 
 * Organic divider with hand-drawn SVG path.
 */
export function HandDrawnDivider({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-full h-2 my-8", className)}
      viewBox="0 0 1200 20"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,10 Q150,8 300,12 T600,10 T900,14 T1200,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-[var(--twb-color-vine)]"
      />
    </svg>
  );
}
```

**Usage:**
```tsx
<section>
  <h2>Our Wines</h2>
  <HandDrawnDivider />
  <p>Discover handcrafted wines...</p>
</section>
```

### 2. Hand-Drawn Underlines

**Emphasize text with organic underlines:**

```css
/* Hand-drawn underline effect */
.hand-underline {
  position: relative;
  display: inline-block;
}

.hand-underline::after {
  content: '';
  position: absolute;
  left: -2px;
  right: -2px;
  bottom: -4px;
  height: 3px;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='3' viewBox='0 0 100 3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,1.5 Q25,0.5 50,2 T100,1.5' stroke='%235a2d3b' stroke-width='2' fill='none'/%3E%3C/svg%3E");
  background-size: 100px 3px;
  background-repeat: repeat-x;
}
```

**Usage:**
```tsx
<h2>
  Discover our <span className="hand-underline text-[var(--twb-color-plum)]">handcrafted wines</span>
</h2>
```

### 3. Hand-Drawn Circles & Shapes

**Organic shapes for emphasis:**

```tsx
/**
 * HandDrawnCircle Component
 * 
 * Imperfect circle drawn with path (not perfect <circle>).
 */
export function HandDrawnCircle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative inline-block", className)}>
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60,10 C85,10 110,35 110,60 C110,85 85,110 60,110 C35,110 10,85 10,60 C10,35 35,10 60,10 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[var(--twb-color-clay)]"
        />
      </svg>
      <div className="relative p-6">
        {children}
      </div>
    </div>
  );
}
```

### 4. Hand-Drawn Arrows

**Replace standard arrows with organic versions:**

```tsx
export function HandDrawnArrow({ direction = 'right' }: { direction?: 'up' | 'down' | 'left' | 'right' }) {
  const rotations = {
    right: 0,
    down: 90,
    left: 180,
    up: 270,
  };
  
  return (
    <svg
      className="inline-block w-12 h-6"
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
      viewBox="0 0 48 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2,12 Q24,10 40,12 M35,7 L42,12 L35,17"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[var(--twb-color-plum)]"
      />
    </svg>
  );
}
```

---

## Textured Backgrounds

### Paper Texture Overlay

**Subtle paper texture for warmth:**

```css
/* Paper texture background */
.bg-paper-texture {
  background-color: var(--twb-color-paper);
  background-image: url('/textures/paper-grain.png');
  background-size: 400px 400px;
  background-repeat: repeat;
  background-blend-mode: multiply;
  opacity: 0.95;
}
```

**Generate paper texture (CSS-only fallback):**

```css
.bg-paper-texture-css {
  background-color: #f5efe4;
  background-image: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(30, 26, 23, 0.02) 2px,
      rgba(30, 26, 23, 0.02) 4px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(30, 26, 23, 0.02) 2px,
      rgba(30, 26, 23, 0.02) 4px
    );
}
```

### Brush Stroke Backgrounds

**Section backgrounds with organic brush strokes:**

```tsx
export function BrushStrokeBackground({ children, color = 'plum' }: { children: React.ReactNode; color?: 'plum' | 'vine' | 'clay' }) {
  const colors = {
    plum: 'var(--twb-color-plum)',
    vine: 'var(--twb-color-vine)',
    clay: 'var(--twb-color-clay)',
  };
  
  return (
    <div className="relative overflow-hidden py-20">
      {/* Brush stroke SVG background */}
      <svg
        className="absolute inset-0 w-full h-full -z-10 opacity-10"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="brush-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" />
            <feDisplacementMap in="SourceGraphic" scale="5" />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={colors[color]}
          filter="url(#brush-texture)"
        />
      </svg>
      
      <Container>{children}</Container>
    </div>
  );
}
```

---

## Typography Styling

### Hand-Drawn Headlines

**Large headlines with organic spacing and slight rotation:**

```css
.headline-handdrawn {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 6vw + 1rem, 5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  transform: rotate(-0.5deg); /* Slight tilt */
  text-shadow: 2px 2px 0 rgba(245, 239, 228, 0.5); /* Subtle offset shadow */
}
```

**Usage:**
```tsx
<h1 className="headline-handdrawn text-[var(--twb-color-ink)]">
  Handcrafted Wines from Paarl
</h1>
```

### Organic Text Highlights

**Highlight text with brush stroke effect:**

```css
.text-highlight {
  position: relative;
  display: inline-block;
  padding: 0 0.25em;
  color: var(--twb-color-ink);
}

.text-highlight::before {
  content: '';
  position: absolute;
  left: -0.1em;
  right: -0.1em;
  top: 0.3em;
  bottom: 0.3em;
  background-color: var(--twb-color-gold);
  opacity: 0.4;
  transform: rotate(-1deg);
  z-index: -1;
  border-radius: 2px;
}
```

---

## Illustrations & Icons

### Hand-Drawn Icon Style

**Custom SVG icons with organic strokes:**

```tsx
/**
 * Wine Bottle Icon (Hand-Drawn)
 * 
 * Organic wine bottle with imperfect lines.
 */
export function WineBottleHandDrawn({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-12 h-12", className)}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bottle body (organic path, not perfect rectangle) */}
      <path
        d="M18,10 L18,15 Q17,18 17,20 L17,42 Q17,44 19,44 L29,44 Q31,44 31,42 L31,20 Q31,18 30,15 L30,10 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Bottle neck */}
      <path
        d="M20,6 L20,10 L28,10 L28,6 Q28,4 26,4 L22,4 Q20,4 20,6 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Wine level (wavy line) */}
      <path
        d="M17,28 Q21,27 24,28 T31,28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  );
}
```

### Illustration Guidelines

**When creating hand-drawn illustrations:**

1. **Imperfect Lines:**
   - Use paths, not perfect shapes
   - Vary stroke width slightly (1.5px to 2.5px)
   - Add subtle wobble to straight lines

2. **Natural Colors:**
   - Use brand colors (plum, vine, clay, gold)
   - Layer colors with transparency (20-40% opacity)
   - Avoid pure black (#000) - use ink (#1e1a17)

3. **Textured Fills:**
   - Add subtle patterns or gradients
   - Use SVG filters for grain/texture
   - Layer multiple shapes for depth

**Example: Grape Cluster Illustration**
```tsx
export function GrapeCluster() {
  return (
    <svg className="w-24 h-24" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      {/* Grape circles (organic, overlapping) */}
      <circle cx="48" cy="60" r="12" fill="var(--twb-color-plum)" opacity="0.8" />
      <circle cx="38" cy="52" r="11" fill="var(--twb-color-plum)" opacity="0.7" />
      <circle cx="58" cy="52" r="11" fill="var(--twb-color-plum)" opacity="0.7" />
      <circle cx="48" cy="44" r="10" fill="var(--twb-color-plum)" opacity="0.6" />
      
      {/* Stem (hand-drawn curve) */}
      <path
        d="M48,44 Q48,30 52,20 Q54,12 50,8"
        fill="none"
        stroke="var(--twb-color-vine)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Leaf (organic shape) */}
      <path
        d="M50,20 Q60,18 65,25 Q68,32 60,35 Q55,32 50,30 Z"
        fill="var(--twb-color-vine)"
        opacity="0.5"
        stroke="var(--twb-color-vine)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
```

---

## Button Styling (Hand-Drawn)

### Organic Button Shapes

**Buttons with slightly imperfect rounded corners:**

```css
.btn-handdrawn {
  position: relative;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  color: white;
  background-color: var(--twb-color-plum);
  border: 2px solid var(--twb-color-plum);
  border-radius: 6px;
  transform: rotate(-0.5deg); /* Slight tilt */
  transition: all 200ms ease;
  box-shadow: 3px 3px 0 rgba(30, 26, 23, 0.15); /* Offset shadow */
}

.btn-handdrawn:hover {
  transform: rotate(-0.5deg) translateY(-2px);
  box-shadow: 5px 5px 0 rgba(30, 26, 23, 0.2);
}

.btn-handdrawn:active {
  transform: rotate(-0.5deg) translateY(0);
  box-shadow: 2px 2px 0 rgba(30, 26, 23, 0.15);
}
```

### Sketched Button Border

**Button with hand-drawn border effect:**

```tsx
export function SketchButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative px-6 py-3 font-medium text-[var(--twb-color-plum)] bg-transparent group"
    >
      {/* Hand-drawn border SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          rx="4"
          className="text-[var(--twb-color-plum)] transition-all group-hover:stroke-[3]"
        />
      </svg>
      
      <span className="relative z-10">{children}</span>
    </button>
  );
}
```

---

## Card Styling (Hand-Drawn)

### Product Card with Organic Border

```tsx
export function HandDrawnProductCard({ wine }: { wine: Wine }) {
  return (
    <div className="relative group">
      {/* Hand-drawn border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          fill="none"
          stroke="var(--twb-border-secondary)"
          strokeWidth="1.5"
          rx="8"
        />
      </svg>
      
      {/* Card content */}
      <div className="relative p-6 bg-[var(--twb-color-paper)]">
        <div className="aspect-[3/4] mb-4 overflow-hidden rounded-twb-sm">
          <img
            src={wine.image}
            alt={wine.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h3 className="font-serif text-xl mb-2 text-[var(--twb-color-ink)]">{wine.name}</h3>
        <p className="text-sm text-[var(--twb-color-vine)] mb-3">{wine.vintage}</p>
        <p className="text-lg font-semibold text-[var(--twb-color-plum)] mb-4">${wine.price}</p>
        
        <button className="btn-handdrawn w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
```

---

## Motion & Animation

### Organic Hover Effects

**Cards tilt slightly on hover (like picking up a wine label):**

```css
.card-tilt {
  transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-tilt:hover {
  transform: rotate(-1deg) translateY(-4px);
}
```

### Hand-Drawn Loading Animation

**Sketched circle loading indicator:**

```tsx
export function HandDrawnLoader() {
  return (
    <svg
      className="w-12 h-12 animate-spin"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="none"
        stroke="var(--twb-color-plum)"
        strokeWidth="3"
        strokeDasharray="80 40"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
```

---

## Accessibility Considerations

### Maintain Contrast

**Hand-drawn elements must still meet WCAG AA:**

```tsx
// ✅ Good: Hand-drawn underline with sufficient contrast
<span className="hand-underline text-[var(--twb-color-plum)]">
  {/* Plum (#5a2d3b) on paper (#f5efe4) = 8.2:1 contrast ✓ */}
  Featured Wine
</span>

// ❌ Bad: Light color on light background
<span className="hand-underline text-[var(--twb-color-gold)]">
  {/* Gold (#c8a96b) on paper (#f5efe4) = 2.1:1 contrast ✗ */}
  Featured Wine
</span>
```

### Focus States

**Hand-drawn focus indicators:**

```css
.btn-handdrawn:focus-visible {
  outline: 3px dashed var(--twb-color-plum);
  outline-offset: 4px;
}
```

---

## Implementation Checklist

### Hand-Drawn Aesthetic Audit

**Before launch, verify:**

- [ ] All borders use organic shapes (not perfect rectangles)
- [ ] Buttons have slight rotation (-0.5deg to -1deg)
- [ ] Headings use serif font with character
- [ ] Cards have hand-drawn borders or shadows
- [ ] Icons are organic (not geometric)
- [ ] Backgrounds have subtle texture
- [ ] Dividers use hand-drawn paths
- [ ] No pure black (#000) - use ink (#1e1a17)
- [ ] All elements maintain WCAG AA contrast
- [ ] Hover states feel organic (tilt, lift, scale)

---

## Examples Gallery

### Homepage Hero (Hand-Drawn)

```tsx
<section className="relative min-h-[calc(100dvh-90px)] flex items-center bg-paper-texture">
  {/* Hand-drawn background shape */}
  <svg
    className="absolute top-20 right-10 w-96 h-96 opacity-10 -z-10"
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M200,50 Q300,100 350,200 T300,350 Q200,380 100,350 T50,200 Q80,100 200,50 Z"
      fill="var(--twb-color-vine)"
    />
  </svg>
  
  <Container>
    <h1 className="headline-handdrawn mb-6 max-w-3xl">
      Handcrafted Wines from <span className="text-highlight">Paarl Valley</span>
    </h1>
    
    <p className="text-xl mb-8 max-w-2xl text-[var(--twb-color-vine)]">
      Organic, small-batch wines crafted with passion and authenticity
    </p>
    
    <div className="flex gap-4">
      <button className="btn-handdrawn">
        Explore Our Wines
      </button>
      <SketchButton onClick={() => navigate('/about')}>
        Our Story
      </SketchButton>
    </div>
  </Container>
  
  <HandDrawnArrow direction="down" className="absolute bottom-8 left-1/2 -translate-x-1/2" />
</section>
```

---

## Related Guidelines

- [Colors](/guidelines/design-tokens/colors.md) - Brand color palette
- [Typography](/guidelines/design-tokens/typography.md) - Font families
- [Buttons](/guidelines/design-tokens/buttons.md) - Button variants
- [Animations](/guidelines/design-tokens/animations.md) - Motion principles

---

## Changelog

### Version 1.0 (2024-03-13)
- Hand-drawn aesthetic principles established
- Organic element patterns created (borders, dividers, shapes)
- Textured background guidelines defined
- Hand-drawn icon style documented
- Button and card styling patterns added
- Accessibility considerations included

---

**Questions or Issues?**  
Contact the design team for hand-drawn asset creation or refinement.

# Constructivism Design Principles

**Category:** Patterns  
**Domain:** Design Philosophy & Composition  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand redesign incorporates **constructivist design principles**—balancing organic, hand-drawn elements with purposeful geometric composition, asymmetric layouts, and bold typography. This creates visual tension between craft (organic) and structure (geometric).

**Constructivism Philosophy:**
- **Purposeful asymmetry** - Dynamic, non-centered compositions
- **Diagonal lines & angles** - Create visual energy and movement
- **Bold typography as graphic element** - Type becomes shape and form
- **Layered compositions** - Overlapping elements create depth
- **Functional decoration** - Every element serves a purpose
- **Negative space as active element** - White space is intentional and powerful

**Historical Influence:**  
Inspired by 1920s Russian Constructivism (El Lissitzky, Rodchenko) combined with modern organic aesthetics—creating a unique tension between geometric structure and handcrafted warmth.

---

## Layout Principles

### 1. Asymmetric Grid System

**Avoid centered, symmetrical layouts. Embrace dynamic asymmetry:**

```tsx
// ❌ Avoid: Centered, symmetrical layout
<div className="grid grid-cols-2 gap-8">
  <div>Image</div>
  <div>Text</div>
</div>

// ✅ Embrace: Asymmetric, offset layout
<div className="grid grid-cols-12 gap-8">
  <div className="col-span-7 col-start-1">
    {/* Image takes 7/12, starts at left edge */}
    <img src="/wine-bottle.jpg" alt="..." />
  </div>
  <div className="col-span-4 col-start-9 mt-12">
    {/* Text takes 4/12, starts at column 9, offset vertically */}
    <h2>Cabernet Sauvignon</h2>
    <p>Description...</p>
  </div>
</div>
```

### 2. Diagonal Compositions

**Use rotated elements and diagonal lines:**

```tsx
export function DiagonalHero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[var(--twb-color-paper)]">
      {/* Diagonal background shape */}
      <div
        className="absolute inset-0 bg-[var(--twb-color-plum)]"
        style={{ transform: 'skewY(-5deg)', transformOrigin: 'top left' }}
      />
      
      {/* Content */}
      <Container className="relative z-10 py-20 grid grid-cols-12 gap-8 items-center">
        <div className="col-span-6 col-start-2">
          <h1 className="text-white mb-6" style={{ transform: 'rotate(-2deg)' }}>
            Bold Wines.<br />
            Bolder Stories.
          </h1>
          <p className="text-white/90 max-w-md">
            Crafted with passion in Paarl valley
          </p>
        </div>
        
        <div className="col-span-4 col-start-9">
          <img
            src="/wine-bottle.png"
            alt="Wine bottle"
            className="w-full"
            style={{ transform: 'rotate(8deg)' }}
          />
        </div>
      </Container>
      
      {/* Diagonal accent line */}
      <div
        className="absolute bottom-0 left-0 w-full h-1 bg-[var(--twb-color-clay)]"
        style={{ transform: 'rotate(-3deg)', transformOrigin: 'bottom left' }}
      />
    </section>
  );
}
```

### 3. Overlapping Layers

**Stack elements with intentional overlap:**

```tsx
export function LayeredComposition() {
  return (
    <div className="relative h-[600px]">
      {/* Layer 1: Background shape */}
      <div
        className="absolute top-0 left-0 w-2/3 h-2/3 bg-[var(--twb-color-vine)]/20 rounded-twb-lg"
        style={{ transform: 'rotate(-3deg)' }}
      />
      
      {/* Layer 2: Image */}
      <div className="absolute top-20 left-32 w-1/2 z-10">
        <img
          src="/vineyard.jpg"
          alt="Vineyard"
          className="w-full rounded-twb-md shadow-twb-xl"
        />
      </div>
      
      {/* Layer 3: Text card */}
      <div
        className="absolute bottom-12 right-20 bg-white p-8 rounded-twb-md shadow-twb-lg max-w-md z-20"
        style={{ transform: 'rotate(2deg)' }}
      >
        <h3 className="mb-4">Our Vineyard</h3>
        <p className="text-[var(--twb-color-vine)]">
          Nestled in the Paarl valley, our organic vineyard produces exceptional grapes...
        </p>
      </div>
      
      {/* Layer 4: Accent line */}
      <div
        className="absolute top-1/2 right-0 w-1/3 h-1 bg-[var(--twb-color-plum)]"
        style={{ transform: 'rotate(-45deg)' }}
      />
    </div>
  );
}
```

---

## Typography as Graphic Element

### 1. Oversized Type

**Use type as dominant visual element:**

```tsx
export function TypeAsGraphic() {
  return (
    <section className="relative py-32 bg-[var(--twb-color-ink)] text-white overflow-hidden">
      {/* Oversized background type */}
      <div
        className="absolute top-0 left-0 font-serif text-[20rem] font-bold opacity-5 leading-none pointer-events-none"
        style={{ transform: 'rotate(-5deg)' }}
      >
        WINE
      </div>
      
      {/* Foreground content */}
      <Container className="relative z-10">
        <div className="max-w-2xl ml-auto">
          <h2 className="text-5xl mb-6">Explore Our Collection</h2>
          <p className="text-xl text-white/80 mb-8">
            From bold reds to crisp whites, discover wines crafted with passion
          </p>
          <button className="btn-handdrawn">View All Wines</button>
        </div>
      </Container>
    </section>
  );
}
```

### 2. Rotated Headlines

**Break the horizontal baseline:**

```tsx
<div className="relative py-20">
  <h2
    className="font-serif text-6xl font-bold text-[var(--twb-color-plum)] absolute top-10 -left-8"
    style={{ transform: 'rotate(-90deg)', transformOrigin: 'top left' }}
  >
    NEW RELEASE
  </h2>
  
  <Container className="pl-32">
    <ProductGrid wines={newReleases} />
  </Container>
</div>
```

### 3. Deconstructed Text

**Split headlines across asymmetric positions:**

```tsx
export function DeconstructedHeadline() {
  return (
    <div className="relative h-[400px]">
      {/* "HAND" - Top left */}
      <h1
        className="absolute top-12 left-8 font-serif text-8xl font-bold text-[var(--twb-color-plum)]"
        style={{ transform: 'rotate(-3deg)' }}
      >
        HAND
      </h1>
      
      {/* "CRAFTED" - Middle right */}
      <h1
        className="absolute top-48 right-20 font-serif text-9xl font-bold text-[var(--twb-color-vine)]"
        style={{ transform: 'rotate(2deg)' }}
      >
        CRAFTED
      </h1>
      
      {/* "WINES" - Bottom center */}
      <h1
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-serif text-7xl font-bold text-[var(--twb-color-clay)]"
        style={{ transform: 'rotate(-1deg)' }}
      >
        WINES
      </h1>
    </div>
  );
}
```

---

## Geometric Shapes & Frames

### 1. Angular Frames

**Frame content with geometric shapes:**

```tsx
export function AngularFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-12">
      {/* Geometric frame corners */}
      <svg className="absolute top-0 left-0 w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 L100,0 L100,20 L20,20 L20,100 L0,100 Z" fill="var(--twb-color-plum)" />
      </svg>
      
      <svg className="absolute top-0 right-0 w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 L100,0 L100,100 L80,100 L80,20 L0,20 Z" fill="var(--twb-color-vine)" />
      </svg>
      
      <svg className="absolute bottom-0 left-0 w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 L20,0 L20,80 L100,80 L100,100 L0,100 Z" fill="var(--twb-color-clay)" />
      </svg>
      
      <svg className="absolute bottom-0 right-0 w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,80 L80,80 L80,0 L100,0 L100,100 L0,100 Z" fill="var(--twb-color-gold)" />
      </svg>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
```

### 2. Diagonal Grid Overlay

```tsx
export function DiagonalGridOverlay() {
  return (
    <div className="relative">
      {/* Diagonal grid SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="diagonal-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M0,40 L40,0 M-10,10 L10,-10 M30,50 L50,30"
              stroke="var(--twb-color-ink)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-grid)" />
      </svg>
      
      {/* Content */}
      <Container className="relative z-10 py-20">
        {/* Page content */}
      </Container>
    </div>
  );
}
```

---

## Color Blocking

### 1. Bold Color Sections

**Divide page into bold color blocks:**

```tsx
export function ColorBlockedLayout() {
  return (
    <>
      {/* Section 1: Plum block */}
      <section className="bg-[var(--twb-color-plum)] text-white py-32">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-5 col-start-2">
              <h2 className="text-5xl mb-6">Red Wines</h2>
              <p className="text-xl">Bold, full-bodied reds from our vineyard</p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Section 2: Paper block (offset) */}
      <section
        className="bg-[var(--twb-color-paper)] py-32"
        style={{ transform: 'skewY(-2deg)', transformOrigin: 'top left' }}
      >
        <div style={{ transform: 'skewY(2deg)' }}>
          <Container>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-6 col-start-7">
                <ProductGrid wines={redWines} />
              </div>
            </div>
          </Container>
        </div>
      </section>
      
      {/* Section 3: Vine block */}
      <section className="bg-[var(--twb-color-vine)] text-white py-32">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6 col-start-3">
              <h2 className="text-5xl mb-6">White Wines</h2>
              <p className="text-xl">Crisp, refreshing whites</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
```

### 2. Split-Screen Color Contrast

```tsx
export function SplitScreenContrast() {
  return (
    <section className="min-h-screen grid grid-cols-2">
      {/* Left: Dark plum */}
      <div className="bg-[var(--twb-color-plum)] text-white flex items-center justify-center p-12">
        <div className="max-w-md">
          <h2 className="text-5xl mb-6 font-serif">Our Philosophy</h2>
          <p className="text-xl mb-8">
            Every bottle tells a story of passion, terroir, and craftsmanship
          </p>
          <button className="btn-handdrawn bg-white text-[var(--twb-color-plum)]">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Right: Light paper */}
      <div className="bg-[var(--twb-color-paper)] flex items-center justify-center">
        <img
          src="/winemaker.jpg"
          alt="Winemaker in vineyard"
          className="w-3/4 rounded-twb-lg shadow-twb-xl"
          style={{ transform: 'rotate(3deg)' }}
        />
      </div>
    </section>
  );
}
```

---

## Negative Space as Active Element

### 1. Intentional White Space

**Use white space to create visual breathing room:**

```tsx
export function BreathingRoom() {
  return (
    <section className="py-32 bg-white">
      <Container>
        {/* Lots of white space around centered element */}
        <div className="max-w-md mx-auto text-center">
          <div className="mb-12">
            {/* Icon with generous spacing */}
            <WineBottleHandDrawn className="mx-auto mb-6 w-20 h-20 text-[var(--twb-color-plum)]" />
          </div>
          
          <h2 className="text-4xl mb-6 font-serif">Single Vineyard</h2>
          
          <p className="text-xl text-[var(--twb-color-vine)] mb-8">
            Our wines come from a single, meticulously cared-for vineyard
          </p>
          
          <button className="btn-handdrawn">Explore</button>
        </div>
      </Container>
    </section>
  );
}
```

### 2. Asymmetric White Space

**More space on one side creates tension:**

```tsx
<Container className="py-20">
  <div className="grid grid-cols-12 gap-8">
    {/* Huge white space on left (7 columns empty) */}
    <div className="col-span-4 col-start-8">
      <h3 className="text-3xl mb-4">Award Winning</h3>
      <p className="text-[var(--twb-color-vine)] mb-6">
        Recognized internationally for excellence in organic winemaking
      </p>
      <Link to="/awards" className="text-[var(--twb-color-plum)] underline">
        View Awards <HandDrawnArrow direction="right" className="inline" />
      </Link>
    </div>
  </div>
</Container>
```

---

## Movement & Directionality

### 1. Diagonal Lines Create Flow

**Guide eye movement with diagonal elements:**

```tsx
export function DiagonalFlow() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Diagonal line from top-left to bottom-right */}
      <div
        className="absolute inset-0 w-[150%] h-2 bg-[var(--twb-color-plum)]"
        style={{
          top: '20%',
          left: '-25%',
          transform: 'rotate(-15deg)',
        }}
      />
      
      {/* Content positioned along diagonal */}
      <Container>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 col-start-2" style={{ marginTop: '-2rem' }}>
            <ProductCard wine={wine1} />
          </div>
          
          <div className="col-span-4 col-start-5" style={{ marginTop: '4rem' }}>
            <ProductCard wine={wine2} />
          </div>
          
          <div className="col-span-4 col-start-8" style={{ marginTop: '10rem' }}>
            <ProductCard wine={wine3} />
          </div>
        </div>
      </Container>
    </section>
  );
}
```

### 2. Staggered Grid

```tsx
export function StaggeredGrid({ items }: { items: any[] }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div
          key={item.id}
          style={{
            marginTop: `${(index % 3) * 3}rem`, // Stagger: 0rem, 3rem, 6rem, repeat
            transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`,
          }}
        >
          <ProductCard wine={item} />
        </div>
      ))}
    </div>
  );
}
```

---

## Functional Decoration

### Every Element Serves a Purpose

**Decorative elements must enhance meaning, not just fill space:**

```tsx
// ✅ Good: Decorative element reinforces message
<section className="relative py-20">
  {/* Grape cluster illustration reinforces "organic vineyard" message */}
  <GrapeCluster className="absolute top-10 right-10 w-32 h-32 opacity-20" />
  
  <Container>
    <h2>Organic Vineyard</h2>
    <p>Our grapes are grown without pesticides...</p>
  </Container>
</section>

// ❌ Bad: Random decoration with no connection to content
<section className="relative py-20">
  {/* Generic circle has no meaning */}
  <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-blue-500 opacity-20" />
  
  <Container>
    <h2>Organic Vineyard</h2>
    <p>Our grapes are grown without pesticides...</p>
  </Container>
</section>
```

---

## Combining Constructivism + Hand-Drawn

### The Perfect Balance

**Mix geometric structure with organic elements:**

```tsx
export function BalancedComposition() {
  return (
    <section className="relative py-32 bg-[var(--twb-color-paper)]">
      {/* Constructivist: Geometric color block */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-[var(--twb-color-plum)]"
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }}
      />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Hand-Drawn: Organic illustration */}
          <div className="col-span-5">
            <img
              src="/vineyard-sketch.svg"
              alt="Hand-drawn vineyard"
              className="w-full"
              style={{ transform: 'rotate(-2deg)' }}
            />
          </div>
          
          {/* Constructivist: Asymmetric text placement */}
          <div className="col-span-6 col-start-7 mt-16">
            <h2 className="text-5xl mb-6 font-serif">
              From Vine to Glass
            </h2>
            
            {/* Hand-Drawn: Organic divider */}
            <HandDrawnDivider className="mb-6" />
            
            <p className="text-xl text-[var(--twb-color-vine)] mb-8">
              Every step of our winemaking process is guided by respect for nature
            </p>
            
            {/* Hand-Drawn: Sketch button */}
            <SketchButton onClick={() => navigate('/process')}>
              Our Process <HandDrawnArrow direction="right" />
            </SketchButton>
          </div>
        </div>
      </Container>
      
      {/* Constructivist: Diagonal accent */}
      <div
        className="absolute bottom-0 left-0 w-1/4 h-2 bg-[var(--twb-color-clay)]"
        style={{ transform: 'rotate(-3deg)', transformOrigin: 'bottom left' }}
      />
    </section>
  );
}
```

---

## Implementation Guidelines

### Design Process

1. **Start with structure (constructivism):**
   - Define asymmetric grid
   - Position geometric shapes
   - Establish diagonal flow

2. **Add organic warmth (hand-drawn):**
   - Replace perfect lines with organic paths
   - Add hand-drawn borders
   - Introduce texture and imperfection

3. **Balance tension:**
   - Ensure geometric doesn't feel sterile
   - Ensure organic doesn't feel chaotic
   - Test on multiple screen sizes

### Responsive Considerations

**Simplify on mobile:**
- Reduce asymmetry (mobile = stacked, simpler)
- Remove complex overlaps
- Maintain diagonal accents but reduce rotation angles
- Keep bold color blocks

```tsx
// Desktop: Complex asymmetry
<div className="hidden lg:grid grid-cols-12 gap-8">
  <div className="col-span-7 col-start-2">...</div>
  <div className="col-span-4 col-start-9 mt-12">...</div>
</div>

// Mobile: Simplified stack
<div className="lg:hidden space-y-8">
  <div>...</div>
  <div>...</div>
</div>
```

---

## Related Guidelines

- [Hand-Drawn Aesthetic](/guidelines/design-tokens/hand-drawn-aesthetic.md) - Organic elements
- [Layout Patterns](/guidelines/patterns/layout-patterns.md) - Grid systems
- [Typography](/guidelines/design-tokens/typography.md) - Type as graphic element

---

## Changelog

### Version 1.0 (2024-03-13)
- Constructivism principles established
- Asymmetric layout patterns documented
- Typography-as-graphic techniques added
- Geometric shape frameworks created
- Color blocking strategies defined
- Negative space guidelines provided
- Constructivism + hand-drawn balance examples added

---

**Questions or Issues?**  
Contact the design team for layout consultation and constructivist composition guidance.

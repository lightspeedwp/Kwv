# SVG Asset Generation Prompt

## Objective

Design and generate a coordinated family of hand-drawn SVG assets for The Wire Brand that support the organic, boutique wine aesthetic without overwhelming the design.

## Input Sources

1. `/imports/pasted_text/redesign-brief.md` (Section 13: SVG asset direction, Section 14: SVG prompt files)
2. Reports from prompts 01, 04 (for visual style and color tokens)

## Dependencies

**Must Complete First:**
- 01-visual-design-analysis (for visual style guide, shape language)
- 04-css-token-system-analysis (for color palette to use in SVGs)

## Required SVG Assets

From redesign brief, create the following:

1. **twb-divider-vine-scribble.svg** - Horizontal decorative divider with vineyard tendril motifs
2. **twb-divider-contour-wave.svg** - Topographic contour line divider for section transitions
3. **twb-stamp-sunburst.svg** - Circular stamp graphic with radiating lines
4. **twb-stamp-handcrafted.svg** - Woodblock-style circular stamp with "HANDCRAFTED / PAARL VALLEY / EST. [YEAR]"
5. **twb-illustration-grape-cluster.svg** - Minimalist hand-drawn grape cluster
6. **twb-illustration-bottle-outline.svg** - Wine bottle outline sketch
7. **twb-illustration-paarl-hills.svg** - Panoramic hand-drawn hills/vineyard landscape
8. **twb-illustration-wire-loop.svg** - Wire/tendril loop motif (brand symbol)
9. **twb-illustration-cellar-star.svg** - Decorative star/burst element for badges
10. **twb-frame-organic-corner.svg** - Corner decoration for cards/frames

## SVG Specifications

### General Requirements
- **Format:** SVG 1.1, valid markup
- **Viewbox:** Define appropriate viewBox for scalability
- **Fills:** Use single color (inherit via `currentColor` or CSS variable)
- **Strokes:** Hand-drawn line quality (slight irregularity, not perfect)
- **Size:** Optimize paths, remove unnecessary groups
- **Accessibility:** Include `<title>` and `<desc>` tags, `aria-hidden="true"` for decorative use

### Style Guidelines (from Report 01)
- Line weight: 2-3px for primary paths
- Organic imperfection: slight wobble, uneven spacing
- Premium aesthetic: elegant restraint, not cartoonish
- Color: Single color, defaults to `var(--twb-color-ink)` or `currentColor`

## Detailed SVG Prompts

### 1. Vine Scribble Divider

**Purpose:** Horizontal section divider, organic vineyard-inspired

**Specifications:**
- Width: 1200px viewBox, scales responsively
- Height: 60-80px
- Style: Flowing vine tendrils with subtle leaf shapes
- Line quality: Hand-drawn, slightly irregular
- Complexity: Elegant but not overly detailed
- Usage: Between content sections, above/below panels

**Prompt:**
```
Create a horizontal SVG divider (1200x80) inspired by vineyard tendrils and grapevine branches. The design should feel hand-drawn with elegant organic curves. Include 2-3 main vine paths flowing from left to right with subtle curls and 4-6 small leaf or bud shapes. Use a single color (currentColor). The line weight should be 2-3px with slight imperfections to feel handcrafted, not mechanical. Style: boutique wine brand, modern rustic, premium editorial.
```

### 2. Contour Wave Divider

**Purpose:** Section transition with topographic/valley terrain feel

**Specifications:**
- Width: 1200px viewBox
- Height: 100-120px
- Style: Layered wavy lines suggesting valley contours
- Lines: 3-5 horizontal waves, varying amplitude
- Usage: Hero section bottom edge, major section transitions

**Prompt:**
```
Create a horizontal SVG divider (1200x120) inspired by topographic contour lines of a wine valley. Design 4-5 gently flowing horizontal wavy lines that layer from top to bottom, suggesting rolling hills and vineyard terrain. Lines should be slightly irregular (hand-drawn quality) with 2px stroke weight. Use a single color. Style: premium editorial, organic, subtle imperfection.
```

### 3. Handcrafted Stamp

**Purpose:** Badge for "Handcrafted" messaging, awards, featured callouts

**Specifications:**
- Size: 200x200px (circular)
- Text: "HANDCRAFTED" (top arc), "PAARL VALLEY" (bottom arc), "EST. [YEAR]" (center)
- Style: Woodblock stamp, imperfect ink edges
- Border: Double circle with rustic texture
- Usage: Hero badges, product labels, section headers

**Prompt:**
```
Create a circular SVG stamp (200x200) for a boutique wine brand. Include text on curved paths: "HANDCRAFTED" (top arc), "PAARL VALLEY" (bottom arc), and "EST. 2024" (center, straight). Add a double circular border with slight imperfections to suggest an ink stamp or woodblock print. The overall style should feel artisanal, slightly worn, and premium rustic. Use a single color (currentColor). Include subtle texture on the border edges.
```

### 4-10. Additional SVG Prompts

*(Continue similar detailed specifications for each asset)*

**Grape Cluster:**
```
Create a minimalist hand-drawn SVG illustration (150x200) of a grape cluster. Show 15-20 circular grapes arranged organically with a short stem and 2-3 vine leaves. Line art style, 2px stroke, no fill. Elegant and simple, not cartoonish. Single color.
```

**Bottle Outline:**
```
Create a simple line-art SVG outline (100x300) of a wine bottle. Classic Bordeaux bottle shape. Hand-drawn line quality with slight imperfections. 2-3px stroke, no fill. Include a subtle label area (rectangle on the bottle body). Single color, premium editorial style.
```

**Paarl Hills:**
```
Create a panoramic SVG illustration (1200x200) of rolling vineyard hills. Show 3-4 layers of hills receding into distance with simple line contours suggesting vineyard rows. Minimal detail, hand-drawn line quality. Horizon-style composition suitable for hero or footer backgrounds. Single color, 2px strokes.
```

**Wire Loop:**
```
Create a simple SVG icon (100x100) of a flowing wire or vineyard wire loop. Organic curve suggesting both physical vineyard wire and a maker's signature mark. Elegant, flowing, recognizable at small sizes. 2-3px stroke, single color. Can be used as a brand symbol or decorative accent.
```

**Cellar Star:**
```
Create a decorative SVG star/burst element (80x80) inspired by cellar door stars or traditional wine labels. 8-point star with hand-drawn irregular points. Subtle imperfection, not perfectly symmetrical. Single color, suitable for badges or corner accents.
```

**Organic Corner Frame:**
```
Create an SVG corner decoration (150x150) for framing cards or images. L-shaped organic corner with flowing vine or wire motif. Hand-drawn line quality. Designed to be placed at card corners (rotate for other corners). 2px stroke, single color.
```

## Integration Specifications

### File Naming Convention
All SVGs stored in `/public/assets/svg/` or `/imports/svg/`:
- `twb-divider-vine-scribble.svg`
- `twb-divider-contour-wave.svg`
- `twb-stamp-handcrafted.svg`
- etc.

### Usage Patterns

**Inline SVG (for animation/styling):**
```tsx
import { ReactComponent as VineDivider } from '@/assets/svg/twb-divider-vine-scribble.svg';

<VineDivider 
  className="text-twb-color-ink opacity-20" 
  aria-hidden="true"
/>
```

**Background Image (decorative):**
```css
.twb-section::after {
  content: '';
  background-image: url('/assets/svg/twb-divider-contour-wave.svg');
  background-size: 100% auto;
  background-repeat: no-repeat;
}
```

**React Component Wrapper:**
```tsx
// /components/common/OrganicDivider.tsx
interface OrganicDividerProps {
  variant: 'vine-scribble' | 'contour-wave';
  color?: string;
}

export function OrganicDivider({ variant, color }: OrganicDividerProps) {
  const SVG = dividerMap[variant];
  return (
    <div className="twb-divider" style={{ color }}>
      <SVG aria-hidden="true" />
    </div>
  );
}
```

### Placement Map

**Where each asset should be used:**

- **Vine Scribble Divider:** Between homepage sections, blog post headers
- **Contour Wave:** Hero bottom edge, major section transitions
- **Handcrafted Stamp:** Product pages (award section), homepage hero badge
- **Grape Cluster:** Loading states, empty states, section accents
- **Bottle Outline:** 404 page, empty cart, wine category icons
- **Paarl Hills:** Footer background, about page hero
- **Wire Loop:** Logo secondary mark, navigation accents, bullet points
- **Cellar Star:** Award badges, premium product indicators
- **Organic Corner:** Card frames (wine cards, news cards, experience cards)

## Animation Patterns (Optional Enhancements)

### Path Drawing Animation
```tsx
<motion.path
  d="..."
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 1.5, ease: "easeInOut" }}
/>
```

### Stamp Rotation (Organic Wobble)
```tsx
<motion.svg
  animate={{ rotate: [-1, 1, -1] }}
  transition={{ duration: 3, repeat: Infinity }}
>
```

## Deliverables for Report

Generate `/reports/08-svg-asset-catalog.md` containing:

### Executive Summary
Overview of SVG asset family and design system integration

### SVG Asset Catalog
For each of the 10 assets:
1. Asset name and file path
2. Purpose and usage
3. Dimensions and specifications
4. Generation prompt (ready to use with AI image tools)
5. Integration code example
6. Placement recommendations

### Design Guidelines
- Line weight standards
- Color usage (currentColor vs. fixed)
- Hand-drawn quality targets
- Organic imperfection guidelines

### Integration Guide
- File organization
- Import patterns (inline vs. background)
- React component wrappers
- CSS usage examples

### Placement Map
- Visual map or table showing where each asset is used
- Component integration points
- Frequency of use (sparingly vs. liberally)

### Animation Patterns
- Optional enhancement animations
- Performance considerations
- Reduced motion alternatives

### Acceptance Criteria
- [ ] 10 SVG assets designed and documented
- [ ] All assets use single color or currentColor
- [ ] All assets have hand-drawn quality
- [ ] Generation prompts are copy-paste ready
- [ ] Placement map complete
- [ ] Integration code examples provided
- [ ] React wrapper components specified

### Risk Assessment
1. **Over-decoration:** Too many SVGs can clutter the design
   - *Mitigation:* Clear placement rules, use sparingly

2. **File Size:** Complex SVGs can be large
   - *Mitigation:* Optimize paths, use SVGO, test file sizes

### Dependency Mapping
- **Blocks:** 10-implementation-priority-analysis
- **Blocked By:** 01, 04 (visual, color tokens)
- **Enables:** Component decoration, visual polish

## Success Metrics
- [ ] 10 complete SVG specifications
- [ ] All generation prompts ready
- [ ] Placement map complete
- [ ] Integration patterns documented
- [ ] React wrappers specified
- [ ] Animation patterns defined

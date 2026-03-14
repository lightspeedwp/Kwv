# Visual Design Analysis Prompt

## Objective

Analyze the current Handcrafted Wines visual design system and create a comprehensive redesign specification for The Wire Brand's organic, hand-drawn, modern editorial aesthetic.

## Input Sources

1. `/imports/pasted_text/redesign-brief.md` (Section 4: Visual direction, Section 8: Design system direction)
2. Current design tokens in `/styles/globals.css`
3. Current component styling across `/components/` directory
4. `/Guidelines.md` Section 3 (Visual system & design tokens)

## Analysis Requirements

### 1. Current State Inventory

Document the existing visual system:

- **Color Palette:** Catalog all colors currently in use (from `globals.css` and component files)
- **Typography:** Document font families, sizes, weights, line heights
- **Spacing System:** Identify all spacing values (margins, paddings, gaps)
- **Border Radii:** List all border-radius values in use
- **Shadows:** Catalog all box-shadow definitions
- **Surface Treatments:** Identify background patterns, gradients, textures

### 2. Gap Analysis

Compare current state against The Wire Brand requirements:

#### Required Palette (from redesign brief)
- warm parchment / paper (#f5efe4 suggested)
- deep ink charcoal (#1e1a17 suggested)
- vineyard green (#5c6b4f suggested)
- dusty olive
- sun-baked clay (#b86b4b suggested)
- plum / mulberry (#5a2d3b suggested)
- muted gold (#c8a96b suggested)
- cellar oak brown
- off-white cream

#### Required Typography
- Expressive editorial serif for headlines (suggest: Playfair Display, EB Garamond, or Libre Baskerville)
- Clean readable sans-serif for body (suggest: Inter, Open Sans, or Source Sans Pro)
- Optional handwritten accent style (sparingly) for labels, quotes, badges

#### Required Shape Language
- soft arcs
- irregular section edges
- label-inspired frames
- stamp circles
- sketched contour lines
- vine and wire motifs
- uneven underline gestures
- offset card layers

### 3. Organic & Hand-Drawn Elements Strategy

Define how to implement the "handcrafted" aesthetic without making the site look amateurish:

#### CSS Techniques
- Border-radius variations (slightly irregular, not perfect circles)
- SVG clip-paths for organic section edges
- CSS `border-image` for hand-drawn underlines
- Filter effects for paper texture (subtle noise)
- Transform: rotate() for slight imperfection
- Pseudo-elements for scribble accents

#### Where to Apply
- Hero section edges
- Card borders
- Section dividers
- Button hover states
- Heading underlines
- Quote block frames
- Image frames
- Navigation hover states

#### Restraint Guidelines
- Never on body text (readability first)
- Subtle on interactive elements (accessibility)
- More prominent on decorative elements
- Responsive scaling (simpler on mobile)

### 4. Component Visual Redesign

Provide specific redesign direction for each component category:

#### Layout Components
- `Header` (CorporateHeader, ShopHeader)
- `Footer` (CorporateFooter, ShopFooter)
- `BreadcrumbsBar`
- `Container` variants

#### Section Components
- `Hero` (standard, shop, wine club)
- `FullWidthSection`
- `BrandGrid`
- `LatestNews`
- `Newsletter`
- `FAQSection`

#### Card Components
- News cards
- Wine product cards
- Experience cards
- Event cards
- Brand cards

#### Interactive Components
- `Button` variants
- Form inputs
- Navigation links
- Accordion items
- Tab controls

### 5. Premium vs. Handcrafted Balance

Define the visual hierarchy that maintains premium feel while introducing handcrafted warmth:

#### Premium Elements (Clean, Editorial)
- Product photography framing
- Typography hierarchy
- Grid systems
- Whitespace management
- Color relationships

#### Handcrafted Elements (Organic, Warm)
- Decorative borders
- Section transitions
- Micro-interactions
- Accent graphics
- Textural overlays

### 6. Responsive Visual Strategy

How the visual system adapts across breakpoints:

- **Mobile (0-767px):** Simplified hand-drawn elements, focus on readability
- **Tablet (768px-1023px):** Moderate decorative elements
- **Desktop (1024px+):** Full visual expression, subtle animations
- **Wide (1280px+):** Enhanced atmosphere, more breathing room

### 7. Dark Mode Considerations

While not immediately required, suggest how the palette could support a dark/light mode toggle:

- Light mode: paper backgrounds, ink text
- Dark mode: deep wine/charcoal backgrounds, cream text
- Ensure 4.5:1 contrast in both modes

## Deliverables for Report

Generate `/reports/01-visual-design-report.md` containing:

### Executive Summary
High-level overview of visual redesign strategy

### Current State Analysis
- Color audit (exact hex values, usage frequency)
- Typography audit (fonts, sizes, weights in use)
- Spacing audit (all gap/margin/padding values)
- Visual inconsistencies identified

### Gap Analysis
- Missing colors from required palette
- Typography gaps (missing weights, sizes, line heights)
- Shape language completely absent
- Inconsistent spacing system

### Detailed Recommendations

#### Color System
```css
:root {
  /* Primary Palette */
  --twb-color-paper: #f5efe4;
  --twb-color-ink: #1e1a17;
  --twb-color-vine: #5c6b4f;
  --twb-color-olive: [suggest hex];
  --twb-color-clay: #b86b4b;
  --twb-color-plum: #5a2d3b;
  --twb-color-gold: #c8a96b;
  --twb-color-oak: [suggest hex];
  --twb-color-cream: [suggest hex];
  
  /* Functional Colors */
  --twb-color-bg-primary: var(--twb-color-paper);
  --twb-color-bg-secondary: var(--twb-color-cream);
  --twb-color-text-primary: var(--twb-color-ink);
  --twb-color-text-secondary: var(--twb-color-olive);
  --twb-color-accent-primary: var(--twb-color-plum);
  --twb-color-accent-secondary: var(--twb-color-gold);
}
```

#### Typography System
Specific font stack, size scale, weight mapping

#### Spacing System
Tokenized spacing scale aligned with fluid clamp() values

#### Shape & Border System
Border-radius tokens, organic shape utilities

#### Shadow System
Layered shadow tokens for depth

#### Surface Treatment System
Texture overlays, gradient definitions, pattern utilities

### Component-Specific Implementation

For each major component, provide:

1. Current styling issues
2. Recommended changes
3. CSS code snippets
4. Before/after visual description
5. File path where changes should be made

### File-Specific Implementation Notes

List every file that needs visual styling changes:

- `/styles/globals.css` - token system overhaul
- `/components/layout/Header.tsx` - [specific changes]
- `/components/sections/Hero.tsx` - [specific changes]
- [Continue for all components]

### Acceptance Criteria

- [ ] All color tokens migrated to twb- namespace
- [ ] Typography uses new font pairings
- [ ] Spacing system uses fluid clamp() values
- [ ] At least 5 components show organic shape language
- [ ] Hand-drawn elements are subtle and professional
- [ ] WCAG 2.1 AA contrast maintained throughout
- [ ] Visual system is fully documented in tokens

### Risk Assessment

Identify potential risks:

1. **Typography Loading:** Custom fonts may slow initial render
   - *Mitigation:* Use font-display: swap, provide system font fallbacks
   
2. **SVG Clip-Path Complexity:** May impact performance on older devices
   - *Mitigation:* Provide fallback border-radius, test on low-end devices

3. **Color Contrast:** Organic colors may not meet AA contrast
   - *Mitigation:* Test all combinations, adjust shades as needed

### Dependency Mapping

- **Blocks:** None (Wave 1 prompt)
- **Blocked By:** None
- **Enables:** 
  - 06-commerce-experience-analysis (needs visual tokens)
  - 07-webgl-3d-feature-analysis (needs color palette)
  - 08-svg-asset-generation (needs visual style guide)

## Quality Standards

The report must:

- Reference actual file paths (verify files exist)
- Provide specific hex values for all colors
- Include code snippets ready for implementation
- Show clear before/after comparisons
- Quantify changes (e.g., "Replace 23 color values across 15 files")
- Be actionable by a developer with no additional context

## Success Metrics

- [ ] Complete color token system defined (10+ colors)
- [ ] Typography system fully specified (3 font families, 6+ sizes)
- [ ] Spacing system aligned with Guidelines.md (8+ tokens)
- [ ] Border/radius system defined (4+ values)
- [ ] Shadow system defined (3+ levels)
- [ ] 20+ component-specific recommendations
- [ ] All recommendations include file paths
- [ ] Contrast ratios verified for accessibility

# Handcrafted Wines Redesign: Brand & Design Brief

## 📌 Project Overview

**Brand:** Handcrafted Wines  
**Established:** 1918  
**Location:** Paarl Mountain, South Africa  
**Type:** Family-owned boutique wine farm  
**Products:** Handcrafted wines, craft spirits (grappa/brandy), artisan cheese  
**Experience:** Wine tastings, farm tours, events, The Wire Box wine club  

**Current State:** React + Tailwind CSS v4 prototype with limited hand-drawn elements  
**Target State:** Fully immersive handcrafted aesthetic with organic, sketched design system  
**Design Philosophy:** Every pixel should feel touched by human hands  

---

## 🎨 Brand Identity: Handcrafted, Organic, Human

### The Handcrafted Aesthetic (CORE PRINCIPLE)

**Everything should feel made by hand:**
- ❌ Pixel-perfect grids and clinical borders
- ✅ Organic shapes, sketched edges, paintbrush strokes
- ❌ Mathematical precision
- ✅ Beautiful imperfection (slight wobbles, varied line weights)
- ❌ Stock photography
- ✅ Hand-drawn illustrations, wine labels, vintage stamps

**Current Gap:** The site currently has **very limited hand-drawn elements**. This needs to change dramatically.

### Hand-Drawn Elements to Integrate

**Priority 1: Borders & Dividers (IMMEDIATE)**
- Replace all `border: 1px solid` with **paintbrush/pencil stroke SVG borders**
- Card outlines should use sketched, irregular paths
- Section dividers need hand-drawn vine flourishes
- Button borders should look painted, not CSS-rendered

**Priority 2: Decorative Elements**
- Wine bottle sketches as page accents
- Grape vine doodles in margins
- Handwritten labels/tags for "New," "Award Winner," "Limited"
- Ink splatter backgrounds (subtle, tasteful)
- Wax seal stamps for trust badges

**Priority 3: Typography Enhancements**
- Underlines that look hand-painted (irregular brush strokes)
- Heading decorations (small vine flourishes)
- Quote marks styled as hand-drawn elements
- Bullet points as tiny wine grapes or bottles

**Priority 4: Interactive States**
- Hover effects that add sketched highlights
- Focus rings that look like pencil circles
- Loading states with hand-drawn wine glass animations
- Form validation using checkmark/X sketches

### Visual Identity

**Color Palette** (Organic, Warm, Earthy):
- **Paper** (#f5efe4) - Warm parchment backgrounds (think aged wine labels)
- **Ink** (#1e1a17) - Deep charcoal text (like fountain pen ink)
- **Vine** (#5c6b4f) - Vineyard green accents
- **Clay** (#b86b4b) - Sun-baked terracotta (Paarl mountain soil)
- **Plum** (#5a2d3b) - Wine-inspired primary CTAs
- **Gold** (#c8a96b) - Muted premium gold (award medals, foil accents)

**Typography:**
- **Headings:** Playfair Display (expressive serif, wine-label inspired)
- **Body:** Inter (clean, readable sans-serif)
- **Accent:** Optional handwritten font for labels/callouts (sparingly!)

**Texture & Materials:**
- Paper grain overlays on backgrounds
- Subtle canvas texture on hero sections
- Wine-stained edges on cards (very subtle transparency)
- Watercolor wash effects for backgrounds

### Voice & Tone

**Brand Personality:**
- **Warm & Family-Oriented** - "Come visit our farm, meet our family"
- **Passionate, Not Pretentious** - "We're obsessed with getting it just right"
- **Approachable Expertise** - Knowledge shared generously, never gatekept
- **Sensory Storytelling** - "Imagine dark cherry with a hint of vanilla..."
- **Place-Based** - Paarl Mountain terroir, South African heritage

**Language Examples:**
- ❌ "Leveraging state-of-the-art facilities to optimize viticultural outcomes"
- ✅ "We're pretty obsessed with our vineyard. Every vine gets personal attention."
- ❌ "Premium wine portfolio"
- ✅ "Handcrafted wines with warmth and character"
- ❌ "Solutions-oriented approach"
- ✅ "We love figuring out what makes each vintage special"

---

## 🖌️ Hand-Drawn Design System

### SVG Assets Needed (Create/Integrate)

**Borders & Frames:**
```
/public/assets/svg/borders/
  ├── brush-stroke-horizontal.svg (section dividers)
  ├── brush-stroke-vertical.svg (sidebar accents)
  ├── pencil-rectangle.svg (card borders)
  ├── wine-label-frame.svg (product card frame)
  ├── stamp-circle.svg (badge backgrounds)
  └── vine-flourish.svg (decorative corners)
```

**Icons & Badges:**
```
/public/assets/svg/icons/
  ├── wine-bottle-sketch.svg
  ├── wine-glass-sketch.svg
  ├── grape-cluster.svg
  ├── oak-barrel-sketch.svg
  ├── handwritten-arrow.svg
  ├── wax-seal-stamp.svg
  ├── ribbon-badge.svg
  └── checkmark-brush.svg
```

**Backgrounds & Textures:**
```
/public/assets/textures/
  ├── paper-grain.png (subtle overlay)
  ├── canvas-texture.png (hero sections)
  ├── watercolor-wash-plum.svg (backgrounds)
  ├── wine-stain-edge.svg (card accents)
  └── ink-splatter-small.svg (decorative)
```

### CSS Implementation Strategy

**Replace standard borders with SVG strokes:**
```css
/* OLD (Too clinical) */
.card {
  border: 1px solid var(--twb-color-border);
  border-radius: 8px;
}

/* NEW (Hand-drawn aesthetic) */
.twb-card {
  border: none;
  border-radius: var(--twb-radius-organic-md); /* Asymmetric: 10px 14px 12px 16px */
  background-image: url('/assets/svg/borders/pencil-rectangle.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: calc(var(--twb-spacing-6) + 8px); /* Extra padding for SVG border */
}
```

**Dividers as brush strokes:**
```css
.twb-section-divider {
  height: 3px;
  background: url('/assets/svg/borders/brush-stroke-horizontal.svg') center/100% auto no-repeat;
  margin: var(--twb-space-section-y) 0;
}
```

**Button with painted border:**
```css
.twb-btn--primary {
  background-color: var(--twb-color-plum);
  border: none;
  position: relative;
  border-radius: var(--twb-radius-button-organic);
}

.twb-btn--primary::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: url('/assets/svg/borders/brush-stroke-button.svg') center/100% 100%;
  pointer-events: none;
  opacity: 0.6;
}
```

---

## 🏗️ Technical Architecture

### Design Token System (twb- namespace)

**Core Variables:**
```css
/* Color Tokens */
--twb-color-paper: #f5efe4;
--twb-color-ink: #1e1a17;
--twb-color-vine: #5c6b4f;
--twb-color-clay: #b86b4b;
--twb-color-plum: #5a2d3b;
--twb-color-gold: #c8a96b;

/* Organic Radius (Asymmetric for handcrafted feel) */
--twb-radius-organic-sm: 6px 8px 7px 9px;
--twb-radius-organic-md: 10px 14px 12px 16px;
--twb-radius-organic-lg: 16px 22px 18px 24px;
--twb-radius-wine-label: 4px 12px 8px 10px;
--twb-radius-stamp: 0 8px 0 8px;

/* Fluid Typography */
--twb-text-h1: clamp(2.4rem, 5vw + 1rem, 4.5rem);
--twb-text-h2: clamp(2rem, 4vw + 1rem, 3.5rem);
--twb-text-body: clamp(1rem, 1vw + 0.5rem, 1.125rem);

/* Motion (Organic, liquid-inspired) */
--twb-ease-pour: cubic-bezier(0.4, 0, 0.2, 1);
--twb-ease-wine-swirl: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--twb-transition-slow: 500ms var(--twb-ease-pour);
```

### Component Naming (BEM + twb-)
```
.twb-hero (Hero section)
.twb-hero__content (Hero content area)
.twb-hero--wine (Wine product hero variant)

.twb-card (Generic card)
.twb-card__media (Card image container)
.twb-card--wine-label (Wine product card with label aesthetic)

.twb-btn (Button base)
.twb-btn--primary (Primary plum button)
.twb-btn--hand-drawn (Button with sketched border)
```

### Motion Principles

**Organic, Not Mechanical:**
- Slow drift animations (not snappy)
- Liquid-inspired easing curves
- Slight wobble on hover (imperfection = handcrafted)
- Parallax scrolling (vineyard scenes)
- Wine swirl loading animations

**Accessibility:**
- All motion respects `prefers-reduced-motion`
- Fallback to fade transitions
- 60fps maintained on desktop
- Reduced complexity on mobile

---

## 🛒 Commerce Structure

### Product Types

**1. Wines (Individual bottles/cases)**
- Sensory tasting notes (not clinical)
- Food pairing suggestions
- Vintage story ("2019 was a warm year...")
- Winemaker's personal note

**2. Craft Spirits (Grappa/Brandy)**
- Low-quantity, handcrafted
- Distillery process story
- Serving suggestions
- Limited availability badges

**3. Artisan Cheese**
- Made from farm's own goat dairy
- Cheese + wine pairing bundles
- Aging process details
- Chef recommendations

**4. The Wire Box (Wine Club Subscription)**
- 3/6/12 bottle plans
- Monthly/Quarterly
- Mixed/Red/White selections
- Interactive 3D box preview (WebGL)

**5. Experiences (Tastings, Tours)**
- Duration, group size
- What's included (wine + cheese pairings)
- Booking calendar
- Add-ons (private cellar tour, extra guests)

**6. Events (Weddings, Corporate)**
- Venue details
- Capacity, packages
- Event inquiry form
- Gallery of past events

---

## 🎯 Implementation Phases

### Phase 1: Core Brand Identity (CURRENT PRIORITY)

**Goal:** Establish handcrafted aesthetic immediately visible

**Key Deliverables:**
- [ ] Integrate hand-drawn border system (SVG strokes)
- [ ] Replace all standard borders with paintbrush/pencil variants
- [ ] Add organic radius to all cards (asymmetric corners)
- [ ] Create hero sections with sketched decorative elements
- [ ] Implement paper grain texture overlays
- [ ] Fix light mode / dark mode switching
- [ ] Ensure header/footer/breadcrumbs on all pages
- [ ] Fix card padding issues globally

**Effort:** 2-3 weeks

### Phase 2: Full Handcrafted Experience

**Goal:** Every component feels touched by hand

**Key Deliverables:**
- [ ] Hand-drawn icons throughout site
- [ ] Wine label frame product cards
- [ ] Wax seal trust badges
- [ ] Handwritten accent typography
- [ ] Watercolor wash backgrounds
- [ ] Sketched form inputs
- [ ] Ink splatter decorative accents

**Effort:** 3-4 weeks

### Phase 3: Advanced Polish

**Goal:** Premium, immersive brand experience

**Key Deliverables:**
- [ ] 3D wine box (WebGL)
- [ ] Advanced parallax (vineyard scrolling)
- [ ] Animated hand-drawn flourishes
- [ ] Loading states with wine glass animations
- [ ] Cross-browser testing
- [ ] Performance optimization

**Effort:** 2-3 weeks

---

## ✅ Success Criteria

### Visual
- [ ] **Hand-drawn elements present throughout** (not just decorative)
- [ ] All borders use paintbrush/pencil strokes (no CSS borders)
- [ ] Cards have organic, asymmetric corners
- [ ] Typography has handcrafted accents (underlines, flourishes)
- [ ] Paper grain texture visible on backgrounds
- [ ] Color palette feels warm, organic, approachable

### Content
- [ ] Voice is warm, family-oriented, passionate
- [ ] No corporate jargon ("leverage," "solutions," "premium")
- [ ] Sensory language in product descriptions
- [ ] Origin story emphasizes 1918 heritage and family legacy

### Commerce
- [ ] All 6 product types functional (wines, spirits, cheese, club, experiences, events)
- [ ] Cart feels wine-specific (not generic e-commerce)
- [ ] Age verification modal (18+)
- [ ] Delivery vs. farm pickup options

### Technical
- [ ] WCAG 2.1 AA compliance (100%)
- [ ] Light mode and dark mode both fully functional
- [ ] Site usable at 200% zoom
- [ ] Lighthouse Performance >90
- [ ] All motion respects `prefers-reduced-motion`

---

## 🚨 Current Issues to Fix

### Critical (Fix Immediately)
1. **Light mode not working** - theme switcher exists but light mode styles not applying
2. **Missing padding around cards** - some card blocks have no breathing room
3. **Limited hand-drawn elements** - site feels too clean/digital
4. **Sitemap/Dev tools missing header/footer/breadcrumbs** - utility pages need unified layout

### High Priority
5. **Borders too clinical** - replace with SVG paintbrush strokes
6. **No organic shapes** - all corners are perfect CSS radius
7. **No texture** - backgrounds are flat colors
8. **Icons too clean** - use sketched icon variants

---

## 📚 Key Documents

**Guidelines:**
- `/Guidelines.md` - Master brand guidelines (v6.0)
- `/guidelines/INDEX.md` - Complete guidelines index
- `/guidelines/design-tokens/` - 14 design token files
- `/guidelines/accessibility/wcag-compliance.md` - WCAG standards

**Prompts & Tasks:**
- `/prompts/PROMPT-SYSTEM-GUIDELINES.md` - Orchestration system
- `/tasks/task-list.md` - Master task list

---

## 🎬 Immediate Next Steps

1. **Fix light mode** - Ensure theme switcher properly toggles between light/dark
2. **Add hand-drawn borders** - Create SVG paintbrush stroke borders for cards
3. **Fix card padding** - Audit all card components for proper spacing
4. **Unified layout** - Add header/footer/breadcrumbs to sitemap and dev tools
5. **Organic radius** - Replace symmetric border-radius with asymmetric values
6. **Paper texture** - Add subtle grain overlay to backgrounds

---

**Brand Essence:** If it doesn't look handmade, it doesn't belong at Handcrafted Wines.

**Design Principle:** Beautiful imperfection over sterile perfection.

**Goal:** Every visitor should feel like they're holding a handcrafted wine label, not browsing a corporate website.

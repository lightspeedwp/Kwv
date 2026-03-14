# The Wire Brand Redesign: Quick Reference Summary

## 📌 Project at a Glance

**Current State:** Handcrafted Wines prototype (React + Tailwind CSS v4)  
**Target State:** The Wire Brand boutique wine farm  
**Location:** Paarl, South Africa  
**Approach:** Orchestrated analysis → Phased implementation  
**Timeline:** 7-10 weeks (280-380 hours)

## 🎨 Brand Transformation

### Visual Identity

**Color Palette:**
- Paper (#f5efe4) - warm parchment backgrounds
- Ink (#1e1a17) - deep charcoal text
- Vine (#5c6b4f) - vineyard green
- Clay (#b86b4b) - sun-baked terracotta
- Plum (#5a2d3b) - wine-inspired accents
- Gold (#c8a96b) - muted premium gold

**Typography:**
- Headings: Expressive editorial serif (Playfair Display suggested)
- Body: Clean readable sans (Inter suggested)
- Accent: Handwritten (optional, sparingly)

**Visual Style:**
- Organic shapes (soft curves, irregular edges)
- Hand-drawn elements (scribbled lines, sketched borders)
- Paper textures and grain
- Wine-label inspired framing
- Cellar stamp graphics

### Voice & Tone

**Characteristics:**
- Casual, not corporate
- Passionate about craft
- Approachable expertise
- Sensory storytelling
- Place-based (Paarl valley)

**Examples:**
- ❌ "We leverage state-of-the-art facilities"
- ✅ "We're pretty obsessed with getting every detail just right"
- ❌ "Premium offering"
- ✅ "Handcrafted wines with warmth and character"

## 🏗️ System Architecture

### Design Tokens (twb- namespace)
```css
--twb-color-paper
--twb-color-ink
--twb-text-h1: clamp(2.4rem, 5vw + 1rem, 4.5rem)
--twb-space-section-y: clamp(3rem, 5vh + 2rem, 8rem)
--twb-ease-pour: cubic-bezier(0.4, 0, 0.2, 1)
```

### Component Naming (BEM + twb-)
```
.twb-hero
.twb-hero__content
.twb-hero--corporate
.twb-card
.twb-card__media
.twb-card--wine
```

### Motion Principles
- Slow drift (not snappy)
- Liquid-inspired easing
- Organic imperfection (slight wobble)
- Atmospheric effects (grain, parallax)
- Respect `prefers-reduced-motion`

## 🛒 Commerce Structure

### Product Types

1. **Wines** (Individual bottles/cases)
   - Sensory tasting notes
   - Pairing suggestions
   - Vintage/variety details
   - Winemaking story

2. **Wine Subscription** (The Wire Box)
   - 3/6/12 bottle plans
   - Monthly/Bi-monthly/Quarterly
   - Mixed/Red/White/Curated selections
   - 3D interactive box showcase (WebGL)

3. **Experiences** (Tastings, tours)
   - Duration, group size
   - What's included
   - Booking calendar
   - Add-ons (food, extra guests)

4. **Events** (Seasonal ticketed experiences)
   - Event schedule
   - Ticket tiers
   - Capacity management
   - Weather policies

### Commerce Flow Enhancements
- Wine-specific cart messaging
- Delivery vs. Pickup selector
- Age verification (18+)
- Gift wrapping options
- Subscription management
- Experience date selection

## 📐 Technical Architecture

### Tech Stack
- React 18
- React Router (not react-router-dom)
- Tailwind CSS v4
- Motion (Framer Motion)
- Three.js + React Three Fiber (for 3D box)
- TypeScript
- Vite

### File Structure
```
/components/
  /layout/ (Header, Footer, BreadcrumbsBar)
  /sections/ (Hero, FullWidthSection, BrandGrid, Newsletter)
  /shop/ (ProductCard, Cart, Checkout, OrderConfirmation)
  /common/ (Button, Typography, Container, Logo)
  /ui/ (Radix primitives)

/pages/
  /company/ (About, History, Awards, etc.)
  /shop/ (Shop, Product, Cart, Checkout, MyAccount)
  /experiences/ (Experiences, ExperienceDetail)
  /events/ (Events, EventDetail)

/styles/
  globals.css (Token system, base styles)

/public/assets/svg/
  twb-divider-vine-scribble.svg
  twb-stamp-handcrafted.svg
  (10 total hand-drawn SVGs)
```

## 🎯 Three-Phase Plan

### Phase 1: MVP - Core Brand Identity (2-3 weeks)
**Goal:** Establish The Wire Brand look and feel

**Key Deliverables:**
- Token system (twb- colors, typography, spacing)
- Hero, Header, Footer redesigned
- Homepage with origin story
- Basic wine product page
- Critical accessibility fixes

**Effort:** 80-120 hours

### Phase 2: Full Feature Set (3-4 weeks)
**Goal:** Complete commerce and content

**Key Deliverables:**
- All 4 product types (Wine, Subscription, Experience, Event)
- Cart and Checkout enhancements
- Motion system implementation
- SVG asset integration
- All content pages (About, History, News, FAQs)
- High-priority accessibility fixes

**Effort:** 120-160 hours

### Phase 3: Polish & Advanced Features (2-3 weeks)
**Goal:** Premium enhancements

**Key Deliverables:**
- 3D wine box (WebGL)
- Advanced motion (parallax, particles)
- Hand-drawn visual polish
- Performance optimization
- Cross-browser testing
- Final accessibility compliance

**Effort:** 80-100 hours

**Total:** 280-380 hours (7-10 weeks)

## ✅ Key Success Criteria

### Visual
- [ ] All components use twb- token system
- [ ] Organic shapes visible in Hero, Cards, Dividers
- [ ] Hand-drawn elements present but subtle
- [ ] Color palette feels warm, organic, premium

### Content
- [ ] Voice is casual, passionate, sensory
- [ ] No generic wine clichés remain
- [ ] Origin story complete and compelling
- [ ] Product descriptions use sensory language

### Commerce
- [ ] 4 product types fully functional
- [ ] Subscription flow intuitive
- [ ] Experience booking clear
- [ ] Cart and checkout wine-specific

### Technical
- [ ] WCAG 2.1 AA compliance (100%)
- [ ] Lighthouse Performance >90
- [ ] All motion respects reduced-motion
- [ ] Site usable at 200% zoom

### Motion
- [ ] Animations feel organic, not mechanical
- [ ] 3D wine box impressive and performant
- [ ] Parallax subtle, not distracting
- [ ] 60fps maintained on desktop

## 🚨 Critical Risks & Mitigation

| Risk | Mitigation |
|------|------------|
| Token migration breaks existing styles | Phased migration, component-by-component testing |
| WebGL 3D too complex | Start early, have 2D fallback, make optional |
| Content volume underestimated | Prioritize key pages, use templates, AI-assist drafts |
| Motion causes performance issues | Define performance budget, test on mid-tier devices |
| Scope creep | Strict phase boundaries, defer nice-to-haves |

## 📚 Key Documents

**Input Briefs:**
- `/imports/pasted_text/redesign-brief.md` - Visual and technical direction
- `/imports/pasted_text/wine-brand-brief.md` - Content and commerce strategy

**Orchestration System:**
- `/prompts/00-master-orchestrator.md` - Coordination prompt
- `/prompts/01-10-*.md` - 10 analysis prompts
- `/prompts/EXECUTION-GUIDE.md` - How to run the system

**Generated Outputs:**
- `/reports/01-10-*.md` - 10 analysis reports (AI-generated)
- `/tasks/redesign-master-task-list.md` - Complete task inventory
- `/tasks/phase-breakdown.md` - Three-phase execution plan

**Current Guidelines:**
- `/Guidelines.md` - Project standards (to be updated post-analysis)

## 🎬 Next Steps

1. **Read** `/prompts/EXECUTION-GUIDE.md` for detailed instructions
2. **Execute** Wave 1 prompts (01-05, 09) in parallel
3. **Review** generated reports against quality checklists
4. **Execute** Wave 2 prompts (06-08) after Wave 1 complete
5. **Execute** Wave 3 prompt (10) after all reports complete
6. **Generate** master task lists in `/tasks/`
7. **Update** `/Guidelines.md` with final decisions
8. **Begin** Phase 1 implementation

---

**Questions?** Refer to `/prompts/EXECUTION-GUIDE.md` for comprehensive execution instructions.

**Ready to start?** Begin with Prompt 01: Visual Design Analysis.

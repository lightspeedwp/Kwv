# Handcrafted Wines – Brand Guidelines (v8.0)

**IMPORTANT DEVELOPMENT NOTE:** JSDoc inline documentation is mandatory for all JavaScript/TypeScript files.

**PROJECT STATUS:** Demo project - Boutique wine farm website with hand-drawn design aesthetic.

**BRAND:** Handcrafted Wines (family farm established 1918)  
**TOKEN PREFIX:** `twb-*` (internal design system namespace - "The Wine Brand")  
**WINE CLUB:** The Wine Box

**CONTENT CONTEXT:** This is a **demo/prototype** with believable, realistic content. All history, awards, and farm details are **invented** but designed to feel authentic.

---

## ⚠️ Protected Root-Level Files

**ONLY these three .md files are allowed in the project root:**

1. **`/ATTRIBUTIONS.md`** - Component, library, and asset attributions (PROTECTED)
2. **`/README.md`** - Project overview and setup instructions (PROTECTED)
3. **`/CHANGELOG.md`** - Version history and release notes (PROTECTED)

**All other .md files MUST be in designated folders:**
- Guidelines → `/guidelines/`
- Documentation → `/docs/`
- Reports → `/reports/`
- Tasks → `/tasks/`
- Prompts → `/prompts/`

**The `cleanup` trigger will:**
- Move important guidelines to `/guidelines/`
- Archive or delete other root-level .md files
- Ensure only the 3 protected files remain in root

**Reference:** `/guidelines/development/file-organization.md`

---

## 🔒 Protected Task List Files

**These task list files in `/tasks/` are PROTECTED and never deleted during cleanup:**

1. **`/tasks/task-list.md`** - Master task list (tracks all other task lists)
2. **`/tasks/routes-task-list.md`** - Route audit and validation tasks
3. **`/tasks/cleanup-task-list.md`** - System cleanup tasks
4. **`/tasks/tokens-task-list.md`** - Design token audit tasks
5. **`/tasks/release-task-list.md`** - Release automation tasks
6. **`/tasks/changelog-task-list.md`** - Changelog update tasks
7. **`/tasks/reports-task-list.md`** - Report processing tasks
8. **`/tasks/status-task-list.md`** - Project status tasks
9. **`/tasks/data-task-list.md`** - Data file audit tasks
10. **`/tasks/responsive-task-list.md`** - Responsive design audit tasks
11. **`/tasks/a11y-task-list.md`** - Accessibility audit tasks
12. **`/tasks/css-task-list.md`** - CSS architecture audit tasks
13. **`/tasks/patterns-task-list.md`** - Design pattern tasks
14. **`/tasks/blocks-task-list.md`** - Block component scaffold tasks
15. **`/tasks/guidelines-task-list.md`** - All guideline-related tasks

**Workflow:** When you run a standardized trigger (e.g., `audit routes`), it:
1. Runs audit phase
2. Creates/updates the corresponding task list file
3. Registers status in `/tasks/task-list.md` (master)
4. Generates report in `/reports/{trigger}/YYYY-MM-DD.md`

**All task list files:**
- Have YAML frontmatter with metadata
- Accumulate tasks over time (completed tasks remain visible)
- Are tracked in the master task list
- Link to their corresponding reports

---

## 📝 Creating New Guidelines

**MANDATORY:** All new guideline files MUST use templates from `/guidelines/_templates/`

**Never create guidelines in the project root.** Always create guidelines in `/guidelines/` or a subfolder.

**Available Templates:**
- General guidelines: `/guidelines/_templates/guideline-template.md`
- Component guidelines: `/guidelines/_templates/component-guideline-template.md`
- Design token guidelines: `/guidelines/_templates/design-token-template.md`
- Prompt files: `/guidelines/_templates/prompt-template.md`
- Reports: `/guidelines/_templates/report-template.md`
- Task lists: `/guidelines/_templates/task-list-template.md`

**Guideline Creation Pattern:**
1. Copy appropriate template from `/guidelines/_templates/`
2. Create new file in `/guidelines/{category}/` (never in root)
3. Fill in template sections
4. Update `/guidelines/INDEX.md` with new guideline link

**Reference:** `/guidelines/_templates.md` for template usage guide

---

## 🎯 Trigger Word System

Use trigger words to activate automated prompts. Type any trigger to execute its workflow.

**Quick Reference (26 Triggers):**

### Master Orchestration (2)
- `audit` → Run ALL audit triggers (9 audits, 9 reports)
- `audit && process reports` → Run all audits, then convert to task lists

### Workflow Triggers (7)
- `cleanup` → System audit and cleanup
- `continue` → Execute next task from master list
- `cleanup && continue` → Combined cleanup + continue workflow
- `status` → Generate project status report
- `changelog` → Update CHANGELOG.md from git commits
- `sitemap` → Regenerate sitemap
- `process reports` → Convert reports to task lists

### Audit Triggers (9)
- `audit routes` → Audit routes, navigation, internal links
- `audit sitemap` → Audit sitemap completeness
- `audit tokens` → Audit design token usage
- `audit css` → Audit CSS architecture
- `audit a11y` → WCAG accessibility audit
- `audit data` → Audit data file sizes
- `audit responsive` → Audit responsive patterns
- `audit styles` → Audit hardcoded styles
- `audit guidelines` → Verify guideline compliance

### Scaffold Triggers (3)
- `new template` → Create documentation template
- `new pattern` → Create design pattern guideline
- `new block` → Create atomic block component

### Guidelines Triggers (2)
- `update guidelines` → Update guideline frontmatter and compliance
- `cleanup guidelines` → Reorganize and restructure guidelines

### Release Triggers (1)
- `release` → Automate version bump and release

**Complete Registry:** `/guidelines/PROMPT-TRIGGERS.md`  
**Prompt System Documentation:** `/prompts/PROMPT-SYSTEM-GUIDELINES.md`

---

## 📑 Table of Contents

1. [Quick Navigation](#quick-navigation)
2. [Project Overview](#project-overview)
3. [Accessibility (Core Principles)](#accessibility)
4. [Brand Identity & Voice](#brand-identity--voice)
5. [Design Tokens (Quick Reference)](#design-tokens-quick-reference)
6. [Component Standards](#component-standards)
7. [Development Guidelines](#development-guidelines)
8. [WordPress Integration](#wordpress-integration)
9. [Related Documentation](#related-documentation)

---

## 🚀 Quick Navigation

**Complete Guidelines Index:** `/guidelines/INDEX.md`

### Key Guidelines
- **Accessibility:** `/guidelines/accessibility/wcag-compliance.md` ⚠️ **MANDATORY**
- **Color Tokens:** `/guidelines/design-tokens/colors.md`
- **Typography Tokens:** `/guidelines/design-tokens/typography.md`
- **Dark/Light Mode:** `/guidelines/design-tokens/dark-light-mode.md` ⚠️ **MANDATORY**
- **WordPress CSS Variables:** `/guidelines/development/wordpress-css-variables.md` ⚠️ **MANDATORY**
- **File Organization:** `/guidelines/development/file-organization.md` ⚠️ **MANDATORY**
- **Sitemap:** `/guidelines/architecture/sitemap.md`
- **Component Structure:** `/guidelines/architecture/component-structure.md`
- **JSDoc Standards:** `/guidelines/development/jsdoc-standards.md` ⚠️ **MANDATORY**

---

## 1. Project Overview

### 1.1 Handcrafted Wines

Handcrafted Wines is a family-owned boutique wine farm nestled against Paarl Mountain in the heart of Paarl, South Africa. For over 100 years, our family has been handcrafting award-winning wines, artisan spirits, and farmstead cheese.

**What We Make:**
- 🍷 **Boutique Wines** - Small-batch, handcrafted wines from our estate vineyard
- 🥃 **Craft Spirits** - Low-quantity grappa and brandy from our on-farm distillery
- 🧀 **Artisan Cheese** - Farmstead cheese made from milk from our own goat dairy

**What We Offer:**
- Wine, cheese, and pairing tastings
- Farm tours (vineyard, wine cellars, distillery, goat dairy)
- Weddings and special event venue
- Corporate team-building experiences
- The Wine Box (wine club subscription)

**Core Values:**
- Handcrafted with Care - Small-batch passion and meticulous attention
- Family Legacy - Over 50 years of multi-generational winemaking
- Approachable Expertise - Wine lovers first, winemakers second
- Sensory Experience - Taste, smell, touch—wine is about the senses
- Place-Based Authenticity - Paarl Mountain terroir, South African character

### 1.2 Digital Experience Goals

The digital experience presents one unified brand with seamless navigation between:

1. **About** – Family story, farm, awards, sustainability, news
2. **Shop** – Online sales (wines, spirits, cheese, gifts), cart, checkout, account
3. **Visit** – Experiences, tastings, tours, farm visits
4. **Events** – Weddings, corporate events, private functions

**Experience Goals:**
- Present one unified brand across all sections
- Allow easy movement between shop, visit, and events
- Warm, family-oriented voice and tone
- Invitation to "come visit our farm"
- Treat accessibility and performance as first-class requirements

**Complete sitemap:** `/guidelines/architecture/sitemap.md`

---

## 2. Accessibility

### 2.1 Non-Negotiable Requirement

Accessibility is the **first and non-negotiable requirement** for all The Wire Brand designs and implementations. Figma Make **must** treat accessibility (including WCAG 2.1 AA contrast, keyboard access, and screen-reader support) as a hard constraint, not an optional enhancement.

**If a design conflicts with these rules, accessibility wins.**

### 2.2 Core Principles (Brief)

- **WCAG 2.1 AA Contrast:** Normal text ≥ 4.5:1, Large text ≥ 3:1
- **Keyboard Access:** All interactive elements reachable via Tab/Shift+Tab with visible focus ring
- **Screen Readers:** All controls have descriptive labels, semantic HTML
- **No Color-Only Communication:** Always pair color with text, icons, or shape
- **Text Zoom:** Layouts must work at 200% zoom
- **Motion:** Respect `prefers-reduced-motion` for animations

**Complete accessibility standards:** `/guidelines/accessibility/wcag-compliance.md`

---

## 3. Brand Identity & Voice

### 3.1 Voice & Tone

**Handcrafted Wines** is casual, approachable, warm, and genuinely passionate about winemaking.

**Target Voice/Tone:** Balanced premium with warmth (not too formal, not too casual)

**Voice Characteristics:**
- **Conversational, not corporate** - "We're passionate about getting every detail just right"
- **Storytelling, not selling** - Share the journey, the process, the people behind each bottle
- **Warm expertise, not pretentious** - Share knowledge in an approachable way
- **Personal, not generic** - Use "we," "our winemaker," "our vineyard"
- **Sensory and evocative** - Appeal to senses: taste, smell, touch, sight

**Voice by Context:**
- **Corporate/About:** Personal storytelling, origin story with warmth
- **Shop:** Sensory, enticing, helpful ("Notes of dark cherry with a hint of vanilla...")
- **Experiences:** Warm invitation, hospitable ("Join us in the cellar for a tasting...")
- **Product Descriptions:** Vivid, sensory, accessible (skip jargon, focus on experience)

**Specific Language Rules:**
- **Use:** "We're passionate about," "You'll love," "We're proud of," "Join us," "Discover"
- **Avoid:** "Leveraging," "Solutions," "Utilize," "State-of-the-art," "Revolutionary"

**Balanced Examples:**
- ✅ GOOD: "Four generations of our family have cared for this estate"
- ❌ TOO FORMAL: "Our estate has been meticulously tended by four generations"
- ❌ TOO CASUAL: "We're totally obsessed with getting every detail perfect!"

**Micro-copy Examples:**
- Button CTAs: "Explore Our Wines," "Book a Tasting," "Join the Club"
- Empty states: "Your cart is empty. Let's find something special."
- Errors: "Something went wrong. Please try again."

**Language:** South African English with universal appeal ("Colour," "Flavour").

### 3.2 Visual Aesthetic

- **Warm, organic, hand-drawn** aesthetic inspired by wine-making and Paarl valley terroir
- **Organic, imperfect aesthetics** - No pixel-perfect grids
- **Hand-drawn elements** should feel authentic, not gimmicky
- **Shades and tints** naturally occurring in wine and vineyard imagery

**Complete visual direction:** `/reports/01-visual-design-report.md`

---

## 4. Design Tokens (Quick Reference)

All custom tokens use the `twb-` prefix (The Wire Brand).

### 4.1 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `twb-color-paper` | `#f5efe4` | Warm parchment backgrounds |
| `twb-color-ink` | `#1e1a17` | Deep charcoal text |
| `twb-color-vine` | `#5c6b4f` | Vineyard green accents |
| `twb-color-clay` | `#b86b4b` | Terracotta warm accents |
| `twb-color-plum` | `#5a2d3b` | Wine-inspired primary CTAs |
| `twb-color-gold` | `#c8a96b` | Muted premium gold |

**Legacy tokens (deprecated):** `color.burgundy`, `color.vineyard`, `color.terracotta`, `color.cream`, `color.charcoal` - Migrate by 2024-04-01

**Complete color system:** `/guidelines/design-tokens/colors.md`

### 4.2 Typography

**Font Families:**
- Headings: Serif (Playfair Display or similar)
- Body: Humanist sans-serif (Inter or Open Sans)

**Fluid Typography Scale (using clamp()):**
- H1: `clamp(2.4rem, 5vw + 1rem, 4.5rem)`
- H2: `clamp(2rem, 4vw + 1rem, 3.5rem)`
- Body: `clamp(1rem, 1vw + 0.5rem, 1.125rem)`

**Complete typography system:** `/guidelines/design-tokens/typography.md`

### 4.3 Spacing

**Fluid Spacing:**
- Section vertical padding: `clamp(3rem, 5vh + 2rem, 8rem)`
- Container side padding: `clamp(1rem, 4vw, 3rem)`
- Grid gaps: `clamp(1rem, 2vw, 2rem)`

**Fixed Spacing Scale:** 0, 1 (4px), 2 (8px), 3 (12px), 4 (16px), 6 (24px), 8 (32px), 12 (48px), 16 (64px), 24 (96px)

**Complete spacing system:** `/guidelines/design-tokens/spacing.md`

### 4.4 All Design Token Guidelines

See `/guidelines/design-tokens/` for complete specifications:
- [Colors](/guidelines/design-tokens/colors.md)
- [Typography](/guidelines/design-tokens/typography.md)
- [Spacing](/guidelines/design-tokens/spacing.md)
- [Shadows](/guidelines/design-tokens/shadows.md)
- [Radii](/guidelines/design-tokens/radii.md)
- [Borders](/guidelines/design-tokens/borders.md)
- [Animations](/guidelines/design-tokens/animations.md)
- [Buttons](/guidelines/design-tokens/buttons.md)
- [Forms](/guidelines/design-tokens/forms.md)
- [Iconography](/guidelines/design-tokens/iconography.md)
- [Navigation](/guidelines/design-tokens/navigation.md)
- [Touch Targets](/guidelines/design-tokens/touch-targets.md)
- [Responsive](/guidelines/design-tokens/responsive.md)
- [Dark/Light Mode](/guidelines/design-tokens/dark-light-mode.md) ⚠️ **MANDATORY**

---

## 5. Component Standards

### 5.1 Naming & Organization

- **File naming:** PascalCase for components (`ProductCard.tsx`)
- **Token prefix:** All design tokens use `twb-` namespace
- **Directory structure:**
  - `/components/common/` - Shared atoms (Button, Typography, Logo)
  - `/components/layout/` - Headers, footers, breadcrumbs
  - `/components/sections/` - Reusable sections (Hero, BrandGrid, Newsletter)
  - `/components/shop/` - E-commerce specific
  - `/components/ui/` - Radix primitives

### 5.2 Reusable Section Rules

**Pattern:** If a UI element appears on **one** page, it can be local. If it appears on **two+** pages, elevate to `/components/sections/` or `/components/common/`.

**Core Reusable Sections:**
- `Hero` - Configurable hero (title, subtitle, image, buttons, height variants)
- `FullWidthSection` - 50/50 split layout (image + text)
- `BrandGrid` - Grid of card links to categories
- `FAQSection` - Accordion wrapper
- `Newsletter` - Full-width signup strip
- `LatestNews` - 3-column post grid

**Complete component architecture:** `/guidelines/architecture/component-structure.md`

### 5.3 Container Variants

| Variant | Width | Use Case |
|---------|-------|----------|
| `container.site` | `max-w-[1440px]` | Navbar, Footer, standard grids |
| `container.content` | `max-w-[960px]` | Text-heavy sections (60-80 char line length) |
| `container.wide` | `max-w-[1280px]` | Feature grids, visual-heavy sections |
| `container.full` | `w-full` | Full-width backgrounds (inner content uses constrained container) |

### 5.4 Hero Component Standards ⚠️ **MANDATORY**

**Mobile Height:** All Hero sections must use `min-h-[calc(100dvh-90px)]` on mobile (accounts for 90px sticky header).

**Scroll Down Arrow:**
- Required on all Hero sections
- Circle around arrow (use `ScrollDownArrow` component)
- Placement: `absolute bottom-8 left-1/2 -translate-x-1/2 z-30`
- Always a gap between arrow and content (never overlap text/buttons)

**Content Padding:** `py-20` (top) and `pb-32` (bottom - mandatory to clear arrow).

**Complete hero standards:** `/guidelines/patterns/hero-standards.md`

---

## 6. Development Guidelines

### 6.1 JSDoc Documentation ⚠️ **MANDATORY**

**It is a high priority to add JSDoc inline documentation to all JavaScript/TypeScript files.**

**File Header (Required):**
```typescript
/**
 * ComponentName
 * 
 * Brief description of what the component does.
 * 
 * Features:
 * - Key feature 1
 * - Key feature 2
 * 
 * @param {PropsType} props - Description of props
 */
```

**Complete JSDoc standards:** `/guidelines/development/jsdoc-standards.md`

### 6.2 CSS Architecture ⚠️ **MANDATORY**

**The Wire Brand uses a modular CSS architecture with:**
- Light/Dark mode support (automatic theme switching)
- BEM methodology for component classes (`twb-` namespace)
- WordPress-aligned CSS variables (`--wp-preset-*`)
- Tailwind CSS v4 integration

**File Structure:**
```
/styles/
├── globals.css              # Main entry point
├── themes.css               # Theme orchestration
├── themes-variables.css     # Core tokens (fonts, spacing)
├── themes-light.css         # Light mode colors
├── themes-dark.css          # Dark mode colors
└── utilities.css            # BEM component classes
```

**Complete CSS architecture guide:** `/guidelines/development/css-architecture.md`

### 6.3 WordPress-Aligned CSS Variables ⚠️ **MANDATORY**

**All styling MUST use WordPress theme.json-aligned CSS variables instead of inline hex colors or hardcoded values.**

❌ **NEVER USE:**
```tsx
// Bad - Inline hex colors
<div className="bg-[#f5efe4] text-[#1e1a17]">

// Bad - Hardcoded font values
<h1 style={{ fontSize: '48px' }}>
```

✅ **ALWAYS USE:**
```tsx
// Good - CSS variables
<div className="bg-[var(--twb-color-bg-primary)] text-[var(--twb-color-text-primary)]">

// Good - BEM classes
<h1 className="twb-heading twb-heading--h1">
```

**Variable Naming Convention:**
- Colors: `--twb-color-{category}-{variant}`
- Typography: `--twb-font-{property}-{variant}`
- Spacing: `--twb-spacing-{scale}`
- Borders: `--twb-border-{variant}`

**Complete WordPress CSS variable standards:** `/guidelines/development/wordpress-css-variables.md`

**Migration Prompt:** `/prompts/css-migration-hardcoded-to-variables.md`

### 6.4 Import Rules

- **Always use explicit relative paths** for internal imports
- Example: `import { Button } from '../../components/common/Button'`
- **Never use aliases** like `@/` (not supported in this build environment)

### 6.5 Navigation Rules (SPA)

- ✅ **Use `react-router`'s `Link` or `useNavigate`** for internal navigation
- ❌ **Never use `window.location` or `<a>` tags** for internal routes (breaks SPA state)
- **Package:** Use `react-router` (NOT `react-router-dom` - not supported)

**Complete routing guidelines:** `/guidelines/architecture/routing.md`

### 6.6 Responsive Design (Mobile-First)

**Breakpoints:**
- Default (Mobile): 0-767px - Single column, stacked layouts
- `md` (Tablet): 768px-1023px - Two columns
- `lg` (Desktop): 1024px-1279px - 3-4 columns, hover states
- `xl` (Wide): 1280px+ - Max-width containers

**Always start with mobile styles, then use `md:` and `lg:` prefixes for larger breakpoints.**

**Complete responsive standards:** `/guidelines/design-tokens/responsive.md`

### 6.7 Build Environment

- **Bundler:** Vite (fast, ESM-based)
- **Styling:** Tailwind CSS v4.0 (utility-first)
- **Animation:** Motion (formerly Framer Motion) - `import { motion } from 'motion/react'`
- **Icons:** `lucide-react` (import specific icons only, verify existence before use)
- **State:** React Context (Cart/Auth), React Query (data fetching)

---

## 7. WordPress Integration

### 7.1 Block Usage Policy

**No page builders, widgets, or shortcodes.** Use core blocks, core theme blocks, and modern WooCommerce blocks only.

**Key Blocks:**
- **Form:** `core/form` (with `core/form-input`, `core/form-submit-button`)
- **Accordion:** `core/accordion` (for FAQs)
- **Terms Query:** `core/terms-query` (for brand grids)
- **Query Loop:** `core/query-loop` (for news/posts)

**Complete blocks reference:** `/guidelines/wordpress/blocks-reference.md`

### 7.2 Templates & Template Parts

**Main Site Templates:**
- `front-page` - Homepage
- `page` - Default pages
- `single` / `single-post` - News posts
- `archive` - News listings

**Shop Templates:**
- `single-product` - Product detail
- `archive-product` - Product category
- `page-cart` - Cart
- `page-checkout` - Checkout

**Complete template parts:** `/guidelines/wordpress/template-parts.md`

---

## 8. Testing & Validation

### 8.1 Accessibility Testing

- **Contrast:** Use WebAIM Contrast Checker (≥ 4.5:1 for normal text)
- **Keyboard:** Tab through entire page, verify focus order
- **Screen Reader:** Test with NVDA (Windows) or VoiceOver (Mac/iOS)
- **Zoom:** Test at 200% browser zoom (Cmd/Ctrl +)

### 8.2 Visual Testing

- **Breakpoints:** Test at 375px, 768px, 1024px, 1440px
- **Layout Stability:** Ensure no content shifts during loading
- **Interactive States:** Verify hover, focus, active, disabled states

**Complete testing strategy:** `/guidelines/development/testing.md`

---

## 9. Related Documentation

### 9.1 Guidelines

**Complete guidelines index:** `/guidelines/INDEX.md`

**Key Categories:**
- Design Tokens: `/guidelines/design-tokens/` (14 files)
- Accessibility: `/guidelines/accessibility/` (3 files)
- Architecture: `/guidelines/architecture/` (3 files)
- Patterns: `/guidelines/patterns/` (4 files)
- WordPress: `/guidelines/wordpress/` (2 files)
- Development: `/guidelines/development/` (3 files)

### 9.2 Prompts & Orchestration

**Prompt System:** `/prompts/PROMPT-SYSTEM-GUIDELINES.md`

**Available Prompts:**
- Master Orchestrator (`/prompts/00-master-orchestrator.md`)
- Cleanup (`cleanup`)
- Continue (`continue`)
- Audit Guidelines (`audit guidelines`)
- Process Reports (`process reports`)

### 9.3 Reports & Tasks

**Reports:** `/reports/` (Analysis outputs)
- Visual Design Report (`/reports/01-visual-design-report.md`)

**Tasks:** `/tasks/` (Implementation tracking)
- Master Task List (`/tasks/task-list.md`)

### 9.4 Demo Pages

**Hand-Drawn Aesthetic Showcase:** Two full-width demo pages showcasing the complete hand-drawn design system.

**Component Library** (`/handdrawn-demo`)
- Interactive pattern library with code examples
- All 60+ hand-drawn components showcased
- Copy-to-clipboard code snippets
- Preview/code toggle for each component
- Developer-focused technical reference

**Landing Page Demo** (`/handdrawn-demo/landing-page`)
- Full-width marketing landing page
- Complete customer journey (awareness → conversion)
- Real Handcrafted Wines content
- WebGL particle effects
- Motion animations throughout

**Documentation:** `/docs/HANDDRAWN-DEMO-PAGES.md`

### 9.5 Templates

**Documentation Templates:** `/guidelines/_templates/` (6 templates)
- See `/guidelines/_templates.md` for usage documentation

---

## 10. Change Log

### Version 8.0 (2026-03-15)
- **Brand Alignment:** Clarified brand name (Handcrafted Wines), token prefix (`twb-*`), Wine Club name (The Wine Box)
- **Demo Context:** Explicitly documented project as demo with believable/realistic content
- **Voice/Tone:** Defined "balanced premium with warmth" as target voice
- **Product Categories:** Confirmed Wine + Spirits + Cheese + 8 shop categories
- **Orchestrator Update:** Updated master orchestrator with brand context and shop categories
- **Guidelines Restructure:** Reorganized voice/tone section with clear examples

### Version 7.0 (2024-03-15)
- **Trigger Word System:** Complete implementation with 18 automated triggers
- **Prompt System:** Updated with new trigger word system and prompt registry
- **Guidelines Compliance:** Marked 4 critical guidelines as mandatory (dark mode, CSS variables, file org, accessibility)

### Version 6.2 (2024-03-15)
- **Dark/Light Mode System:** Complete implementation with explicit WordPress CSS variables
- **WordPress CSS Variables:** Comprehensive mandatory guideline for all styling
- **File Organization:** New guideline defining file creation patterns and size limits
- **Redesign Orchestrator:** Updated with 3-wave execution pattern and quality gates
- **Analysis Prompts:** All 10 redesign analysis prompts moved to `/prompts/redesign/`
- **Design Token Guidelines:** Expanded with comprehensive variable mapping
- **Mandatory Guidelines:** Marked 4 critical guidelines as mandatory (dark mode, CSS variables, file org, accessibility)

### Version 6.1 (2024-03-15)
- **Demo Pages:** Created two full-width demo pages (`/handdrawn-demo`, `/handdrawn-demo/landing-page`)
- **Component Library:** Interactive pattern library with 60+ hand-drawn components and code examples
- **Landing Page Demo:** Complete marketing page with WebGL particles and motion animations
- **Sitemap Updates:** Added Developer Resources section with demo page links
- **Architecture Documentation:** Updated sitemap.md with new routes
- **Documentation:** Created comprehensive `/docs/HANDDRAWN-DEMO-PAGES.md` guide

### Version 6.0 (2024-03-14)
- **Hand-Drawn Aesthetic:** Complete implementation of organic design system
- **Decorative Components:** All section dividers, wax seals, hand-drawn icons deployed
- **About Pages:** All 8 About section routes verified and documented

### Version 5.0 (2024-03-13)
- **Major reorganization:** Reduced main Guidelines.md from 1309 lines to <400 lines
- **Extracted guidelines:** Created 29 specialized guideline files
- **Design tokens:** 14 design token guidelines created
- **Accessibility:** WCAG compliance guidelines extracted and expanded
- **Architecture:** Sitemap, component structure, and routing guidelines separated
- **Patterns:** Atomic design, checkout flow, hero standards, layout patterns documented
- **WordPress:** Blocks reference and template parts extracted
- **Development:** JSDoc, testing, and performance guidelines created
- **Navigation:** Created comprehensive INDEX.md for easy navigation

### Version 4.0 (2024-03-12)
- Prompt orchestration system created
- Template system established
- Trigger word system implemented

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Review:** 2026-03-15  
**Next Review:** Monthly or after major guidelines updates

---

**📌 Quick Links:**
- [Guidelines Index](/guidelines/INDEX.md)
- [Accessibility (MANDATORY)](/guidelines/accessibility/wcag-compliance.md)
- [Color Tokens](/guidelines/design-tokens/colors.md)
- [Typography Tokens](/guidelines/design-tokens/typography.md)
- [Dark/Light Mode](/guidelines/design-tokens/dark-light-mode.md)
- [WordPress CSS Variables](/guidelines/development/wordpress-css-variables.md)
- [File Organization](/guidelines/development/file-organization.md)
- [Sitemap](/guidelines/architecture/sitemap.md)
- [JSDoc Standards (MANDATORY)](/guidelines/development/jsdoc-standards.md)
- [Master Task List](/tasks/task-list.md)
# Master Alignment Plan – Handcrafted Wines Redesign

**Report ID:** Master Alignment Plan  
**Category:** Implementation Strategy  
**Date:** 2026-03-15  
**Status:** Ready for Execution

---

## Executive Summary

Based on your decisions for all 10 critical conflicts, this document provides a comprehensive plan to align the orchestrator, sub-prompts, guidelines, and codebase.

### Decisions Summary

| # | Decision | Action Required |
|---|----------|-----------------|
| **1** | Brand = "Handcrafted Wines" | ✅ Keep current, remove "The Wire Brand" |
| **2** | Demo content (believable) | ✅ Clarify in guidelines |
| **3** | Wine + Spirits + Cheese | ✅ Expand shop categories |
| **4** | Experiences + Events (separate) | ✅ Add Events calendar |
| **5** | CSS variables ONLY | ✅ Remove all `dark:` utilities |
| **6** | Demo pages = dev tools | ✅ Keep dual purpose |
| **7** | 3D box = HIGH priority | ✅ Move to Phase 1 |
| **8** | STRICT data-driven (phased) | ✅ Migrate incrementally |
| **9** | WordPress alignment (future) | ✅ Keep WP-ready CSS |
| **10** | Balanced voice/tone | ✅ Update content style |

### Token Prefix Decision
**RECOMMENDED:** Keep `twb-*` prefix (0 hours, 0 risk)

See `/reports/token-prefix-migration-analysis.md` for full analysis.

---

## Phase 1: Documentation Alignment (4 hours)

### Task 1.1: Update Master Orchestrator (1 hour)

**File:** `/prompts/redesign/00-master-orchestrator.md`

**Changes:**
1. Replace all "The Wire Brand" → "Handcrafted Wines"
2. Clarify `twb-*` is internal namespace (not brand)
3. Add explicit constraint: "Demo content must be believable"
4. Update product categories: Wine + Spirits + Cheese
5. Add Events calendar requirement
6. Emphasize data-driven content (phased migration)

**Priority:** 🔴 CRITICAL

---

### Task 1.2: Update All Sub-Prompts (2 hours)

**Files:** `/prompts/redesign/01-10-*.md` (10 files)

**Changes:**
1. Find-replace "The Wire Brand" → "Handcrafted Wines"
2. Update "The Wire Box" → "The Wine Box"
3. Remove KWV references (if any)
4. Clarify demo context where needed
5. Update product category lists
6. Add Events calendar to relevant prompts

**Script:**
```bash
# Find all instances
grep -r "The Wire Brand" prompts/redesign/
grep -r "Wire Box" prompts/redesign/
grep -r "KWV" prompts/

# Manual updates required (not safe for automated find-replace)
```

**Priority:** 🔴 CRITICAL

---

### Task 1.3: Update Guidelines.md (1 hour)

**File:** `/Guidelines.md`

**Changes:**
1. Add section: "Project Context: Demo vs Production"
   - Clarify this is demo with believable content
   - History/awards are invented but realistic
2. Update brand references (already correct)
3. Add "The Wine Box" as subscription name
4. Add Spirits + Cheese to "What We Make"
5. Clarify `twb-*` prefix meaning
6. Add Events calendar to sitemap
7. Update voice/tone section (balanced premium)

**Priority:** 🔴 CRITICAL

---

## Phase 2: Content Updates (3 hours)

### Task 2.1: Update Brand Name References (1 hour)

**Files to check:**
- `/src/data/farmStory.ts` ✅ (already correct)
- `/src/data/products.ts` ✅ (already correct)
- `/src/components/common/Logo.tsx` (verify)
- `/src/components/layout/UnifiedHeader.tsx` (verify)
- `/src/components/layout/UnifiedFooter.tsx` (verify)

**Changes:**
- Verify no "The Wire Brand" references exist
- Ensure SEO titles use "Handcrafted Wines"

---

### Task 2.2: Wine Club Name Update (30 min)

**Files:**
- `/src/data/products.ts` (if Wine Club products exist)
- Any Wine Club pages/components

**Changes:**
- "The Wire Box" → "The Wine Box"

---

### Task 2.3: Voice/Tone Content Audit (90 min)

**File:** `/src/data/farmStory.ts`

**Current:** Very formal ("meticulously tended", "time-honored")  
**Target:** Balanced premium with warmth

**Examples:**

```typescript
// ❌ TOO FORMAL (current)
"Our estate has been meticulously tended by four generations"

// ✅ BALANCED (target)
"Four generations of our family have cared for this estate"

// ❌ TOO FORMAL
"Time-honored winemaking traditions passed down through the ages"

// ✅ BALANCED
"Winemaking techniques our family has refined over 100 years"

// ❌ TOO CASUAL
"We're totally obsessed with getting every detail perfect!"

// ✅ BALANCED
"We're passionate about getting every detail just right"
```

**Action:** Update ~20 strings in farmStory.ts

---

## Phase 3: Code Architecture Updates (14 hours)

### Task 3.1: Remove Dark Mode Utilities (6 hours)

**Goal:** CSS variables ONLY strategy

**Steps:**

1. **Audit current usage (1 hour)**
   ```bash
   grep -r "dark:" src/components/ | wc -l
   # Expected: 150+ instances
   ```

2. **Update ThemeToggle (1 hour)**
   - Ensure `.dark` class toggles reliably
   - Add `data-theme="dark|light"` attribute
   - Update localStorage persistence

3. **Migrate components (4 hours)**
   
   **Pattern:**
   ```tsx
   // ❌ BEFORE (Tailwind dark: utility)
   <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
   
   // ✅ AFTER (CSS variables)
   <div className="bg-[var(--twb-color-bg-primary)] text-[var(--twb-color-text-primary)]">
   ```

   **Files:**
   - All `/src/components/**/*.tsx` (83 components)
   - Priority: Shop pages, checkout, product pages

4. **Test both themes (1 hour)**
   - Verify all components switch correctly
   - Check focus states in both themes
   - Validate contrast ratios

**Priority:** 🟠 HIGH

---

### Task 3.2: Expand Shop Categories (4 hours)

**Current:** Wines, Spirits, Cheese, Gifts, Wine Club  
**Target:** Wines, Spirits, Cheese, Wine Boxes, Experiences, Events, Gifts, Wine Club

**Steps:**

1. **Add Wine Boxes category (1 hour)**
   - Create `/src/pages/shop/WineBoxes.tsx`
   - Add route to `/src/routes.tsx`
   - Add navigation link

2. **Add Experiences category (2 hours)**
   - Create `/src/pages/experiences/` directory
   - Create `ExperiencesHome.tsx` (grid of bookable experiences)
   - Add booking flow components
   - Add routes

3. **Add Events calendar (1 hour)**
   - Create `/src/pages/events/` directory
   - Create `EventsCalendar.tsx`
   - Add event listing/detail pages
   - Add routes

**Priority:** 🟠 HIGH

---

### Task 3.3: Data-Driven Content Migration (4 hours)

**Goal:** Move inline content to `src/data/*`

**Phased Approach:**

**Phase 1: High-traffic pages (2 hours)**
- Home page → `/src/data/pages/home.ts`
- Shop home → `/src/data/pages/shopHome.ts`
- About → `/src/data/pages/about.ts`

**Phase 2: Product pages (1 hour)**
- Expand `/src/data/products.ts` with full descriptions
- Add pairing notes, tasting notes, awards

**Phase 3: Experiences + Events (1 hour)**
- Create `/src/data/experiences.ts`
- Create `/src/data/events.ts`

**Pattern:**
```typescript
// src/data/pages/home.ts
export interface HomePageContent {
  hero: {
    title: string;
    subtitle: string;
    cta: { text: string; href: string };
  };
  sections: Array<{
    id: string;
    heading: string;
    body: string;
    image?: string;
  }>;
}

export const homePageContent: HomePageContent = {
  hero: {
    title: "Handcrafted Wines from Paarl",
    subtitle: "Four generations of winemaking tradition",
    cta: { text: "Explore Our Wines", href: "/shop/wines" }
  },
  // ...
};
```

**Priority:** 🟡 MEDIUM

---

## Phase 4: High-Priority Features (28 hours)

### Task 4.1: 3D Wine Box (24 hours)

**Status:** ELEVATED to Phase 1 (per your decision)

**Files:**
- `/components/3d/wine-club/WineBox3D.tsx`
- `/components/3d/wine-club/WineBottle.tsx`
- `/hooks/useReducedMotion.ts`
- `/hooks/useWebGLSupport.ts`

**See:** `/reports/redesign/07-webgl-3d-feature-report.md` for full spec

**Priority:** 🔴 CRITICAL

---

### Task 4.2: Search Functionality (4 hours)

**Status:** Currently mocked with KWV content

**Steps:**
1. Create real search index from products data
2. Implement search results page
3. Remove KWV placeholder content
4. Add filters (category, price, type)

**Priority:** 🟠 HIGH

---

## Phase 5: Quality & Polish (8 hours)

### Task 5.1: Remove KWV References (2 hours)

**Search for:**
- "KWV" in all files
- Old product names
- Hardcoded legacy content

**Files to check:**
- `/src/components/search/GlobalSearchResults.tsx`
- `/src/components/shop/MiniCart.tsx`
- Any legacy shop components

---

### Task 5.2: Accessibility Fixes (4 hours)

**From `/tasks/a11y-task-list.md`:**
1. ✅ Implement `prefers-reduced-motion` (4 hours) - **CRITICAL**
2. Add form labels to checkout (3 hours)
3. Add focus indicators (already part of dark mode migration)

---

### Task 5.3: Content Voice Pass (2 hours)

**Update all content to balanced voice:**
- farmStory.ts (main target)
- Product descriptions
- About page copy
- Experience descriptions

---

## Implementation Timeline

### Week 1: Foundation (12 hours)
- ✅ Day 1-2: Documentation alignment (4 hours)
- ✅ Day 3: Content updates (3 hours)
- ✅ Day 4-5: Dark mode migration (6 hours)

### Week 2: Features (14 hours)
- ✅ Day 1-2: Expand shop categories (4 hours)
- ✅ Day 3-4: Data migration (4 hours)
- ✅ Day 5: Search functionality (4 hours)
- ✅ Weekend: 3D Wine Box prep (2 hours)

### Week 3-4: 3D Feature (24 hours)
- ✅ Week 3: 3D Wine Box implementation (16 hours)
- ✅ Week 4: 3D testing & polish (8 hours)

### Week 5: Quality (8 hours)
- ✅ Remove KWV references (2 hours)
- ✅ Accessibility fixes (4 hours)
- ✅ Content voice pass (2 hours)

**Total:** 58 hours over 5 weeks (1.5 FTE)

---

## Orchestrator Updates Summary

### Files to Update

1. **Prompts (12 files):**
   - `/prompts/redesign/00-master-orchestrator.md` ✅
   - `/prompts/redesign/01-visual-design-analysis.md` ✅
   - `/prompts/redesign/02-content-strategy.md` ✅
   - `/prompts/redesign/03-component-architecture.md` ✅
   - `/prompts/redesign/04-css-token-system.md` ✅
   - `/prompts/redesign/05-motion-interaction.md` ✅
   - `/prompts/redesign/06-commerce-experience.md` ✅
   - `/prompts/redesign/07-webgl-3d-features.md` ✅
   - `/prompts/redesign/08-svg-asset-generation.md` ✅
   - `/prompts/redesign/09-accessibility-audit.md` ✅
   - `/prompts/redesign/10-implementation-priority.md` ✅

2. **Guidelines (1 file):**
   - `/Guidelines.md` ✅

3. **Reports (Already aligned):**
   - All 10 reports already created ✅

4. **Task Lists:**
   - `/tasks/a11y-task-list.md` (update priorities)
   - `/tasks/task-list.md` (update master plan)

---

## Key Find-Replace Operations

### Safe Automated Replacements

```bash
# Brand name (safe in most files)
find . -type f -name "*.md" -exec sed -i 's/The Wire Brand/Handcrafted Wines/g' {} +

# Wine Box name
find . -type f -name "*.md" -exec sed -i 's/The Wire Box/The Wine Box/g' {} +
find . -type f \( -name "*.ts" -o -name "*.tsx" \) -exec sed -i 's/The Wire Box/The Wine Box/g' {} +
```

### Manual Review Required

**Do NOT auto-replace:**
- Code comments explaining `twb-*` prefix
- Historical references in CHANGELOG
- CSS variable names (`--twb-*`)
- Component class names (`twb-hero`)

---

## Validation Checklist

After implementation, verify:

- [ ] No "The Wire Brand" references in user-facing content
- [ ] No "The Wire Box" references (should be "The Wine Box")
- [ ] No KWV references anywhere
- [ ] All pages use CSS variables (no `dark:` utilities for colors)
- [ ] Shop has all 8 categories (Wines, Spirits, Cheese, Wine Boxes, Experiences, Events, Gifts, Wine Club)
- [ ] Events calendar exists at `/events`
- [ ] Experiences booking flow exists at `/experiences`
- [ ] Demo pages still work
- [ ] 3D Wine Box implemented on subscription page
- [ ] Search uses Handcrafted Wines products (not KWV)
- [ ] Voice/tone is balanced premium (not too formal)
- [ ] All prompts/guidelines aligned
- [ ] WordPress-ready CSS maintained
- [ ] `prefers-reduced-motion` implemented

---

## Questions for You

### ❓ Question 1: Token Prefix
Have you read `/reports/token-prefix-migration-analysis.md`?

**Do you want to:**
- **A:** KEEP `twb-*` (recommended - 0 hours)
- **B:** ADD aliases `hcw-*` (4 hours)
- **C:** FULL migration (16 hours - NOT recommended)

### ❓ Question 2: Execution Priority
**Which phase should I start with?**
- **A:** Phase 1 (Documentation) - safest, clears confusion
- **B:** Phase 3.1 (Dark mode) - highest user impact
- **C:** Phase 4.1 (3D Wine Box) - your stated priority

### ❓ Question 3: Voice/Tone Examples
**Would you like me to:**
- **A:** Show you 10 before/after examples from farmStory.ts
- **B:** Just update to balanced voice (trust my judgment)
- **C:** Create a voice/tone guideline first, then update content

### ❓ Question 4: Events Calendar
**Should Events calendar include:**
- **A:** Full ticketing/booking integration
- **B:** Simple listing with "Contact to book" CTAs
- **C:** Link to external booking system (Eventbrite, etc.)

---

## Recommendation

**START WITH:**
1. ✅ Keep `twb-*` prefix (0 hours saved)
2. ✅ Phase 1: Documentation alignment (4 hours) - clears all confusion
3. ✅ Phase 3.1: Dark mode CSS variables (6 hours) - fixes current bugs
4. ✅ Phase 4.1: 3D Wine Box (24 hours) - your top priority

**This gives you:**
- Aligned documentation (no more conflicts)
- Fixed dark mode (reliable theme switching)
- Hero feature (3D Wine Box)

**Total:** 34 hours over 2-3 weeks

Then Phase 2, 5 as time permits.

---

## Next Steps

**Awaiting your answers to Questions 1-4, then I will:**
1. Update all prompts/guidelines per this plan
2. Begin implementation in priority order
3. Track progress in `/tasks/task-list.md`

Ready to proceed when you are! 🚀

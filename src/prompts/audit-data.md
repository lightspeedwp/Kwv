# Audit Data — Data File Architecture Audit

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit data`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit all data files in `/data/` for duplicates, orphaned files, oversized files, type safety, legacy content, and compliance with centralized data architecture.

**When to Use:** After adding new data files, content updates, or periodically to verify data architecture integrity.

**Reference Guidelines:**
- `/guidelines/development/file-organization.md` ⚠️ **MANDATORY**
- `/tasks/data-cleanup-task-list.md` (current status)

---

## Handcrafted Wines Data Files

**Expected Data Files:**
- `/data/farmStory.ts` (family story, team, experiences, sustainability, awards)
- `/data/products.ts` (17 products: wines, spirits, cheese, gifts)
- `/data/newsPosts.ts` (news/blog posts - if created)
- `/data/faqData.ts` (FAQ Q&A - if created)
- `/data/shopBrands.ts` (legacy KWV content - ⚠️ SHOULD BE REMOVED)
- `/data/tastings.ts` (deprecated - verify usage)
- `/data/site-content.ts` (deprecated - verify usage)
- `/data/brands.ts` (deprecated - verify usage)
- `/data/jobs.ts` (careers - verify usage)

---

## Workflow Steps

### Step 1: Inventory Data Files

1. List all `.ts` files in `/data/` and subdirectories
2. For each file, record:
   - Filename
   - Line count
   - Export names
   - Number of importers (search codebase)
   - File size (in kB)

### Step 2: Find Orphaned Files

1. For each data file, search the codebase for imports:
   ```bash
   # Search pattern
   import .* from ['"].*\/data\/filename['"]
   ```
2. Files with zero importers → flag as orphaned
3. Confirm no dynamic imports reference the file before deleting
4. Check if file is legacy/deprecated but intentionally kept

**Expected Orphans (Remove if confirmed):**
- `/data/shopBrands.ts` (contains KWV legacy content)
- `/data/tastings.ts` (deprecated, replaced by farmStory.experiences)
- `/data/site-content.ts` (deprecated, content moved to pages)
- `/data/brands.ts` (deprecated, replaced by product categories)

### Step 3: Find Duplicates & Legacy Content

1. **KWV content:** Search all data files for "KWV", "Cathedral Cellar", legacy brand names
2. **Duplicate content:** Compare data files covering same domain:
   - Multiple FAQ files → consolidate to faqData.ts
   - Multiple news files → consolidate to newsPosts.ts
   - Multiple product files → should all be in products.ts
3. **Hardcoded content:** Find content that should be in data files:
   - Hardcoded news posts in News.tsx → extract to newsPosts.ts
   - Hardcoded FAQs in FAQ.tsx → extract to faqData.ts
   - Hardcoded testimonials → extract to testimonials.ts

### Step 4: File Size Check

Per `/guidelines/development/file-organization.md`:

1. **Data files:** 20kB limit (approximately 400-500 lines)
2. Flag any data file over 20kB
3. Suggest split strategies:
   - Split products.ts by category (wines.ts, spirits.ts, cheese.ts, gifts.ts)
   - Split farmStory.ts if it grows too large
   - Split newsPosts.ts by year or category

**Current Status (from last audit):**
- farmStory.ts: 15kB (75% of limit) ✅ Excellent
- products.ts: ~10kB ✅ Excellent
- All files PASS 20kB limit ✅

### Step 5: Type Safety Check

1. **Interfaces defined:** Verify exported data uses TypeScript interfaces (not `any` or untyped arrays)
2. **Interfaces exported:** Check that interfaces are defined and exported for consumer use
3. **Consistent typing:** All products use Product interface, all team members use TeamMember, etc.

**Expected Interfaces:**
```typescript
// products.ts
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  // ... all properties typed
}

// farmStory.ts
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  // ... all properties typed
}
```

### Step 6: Content Quality Check

1. **Handcrafted Wines brand:** All content should reference Handcrafted Wines, not KWV
2. **Family narrative:** Content should reflect 4-generation family farm (1918-present)
3. **Product alignment:** Products should be wines, spirits, cheese (no KWV legacy products)
4. **Contact info:** Phone, email, address should be Handcrafted Wines (farmStory.contact)
5. **Awards:** Awards should be relevant to boutique wine farm, not corporate KWV awards

**Search for Legacy Content:**
- "KWV"
- "Cathedral Cellar"
- "Paarl Rock"
- "La Concorde"
- Corporate language ("leveraging", "solutions", "synergies")

### Step 7: Missing Data Files

Check for hardcoded content that should be in data files:

1. **News posts:** Check `/pages/company/News.tsx` for hardcoded posts → should be in `/data/newsPosts.ts`
2. **FAQ data:** Check `/pages/company/FAQ.tsx` for hardcoded Q&A → should be in `/data/faqData.ts`
3. **Testimonials:** Check for hardcoded testimonials → should be in `/data/testimonials.ts`
4. **Events:** Check for hardcoded events → should be in `/data/events.ts` or farmStory.ts

### Step 8: Fix and Report

1. Delete confirmed orphaned files (shopBrands.ts, tastings.ts, site-content.ts, brands.ts)
2. Remove all KWV legacy content
3. Consolidate duplicate data
4. Extract hardcoded content to data files
5. Add missing TypeScript interfaces
6. Save report to `/reports/data/data-architecture-audit-YYYY-MM-DD.md`

```markdown
# Data Architecture Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Scope:** All files in `/data/`  
**Status:** [Complete/In Progress]

## Summary
- **Total data files:** [count]
- **Orphaned files:** [count]
- **Oversized files:** [count]
- **Type safety issues:** [count]
- **Legacy content violations:** [count]
- **Missing data files:** [count]
- **Health score:** [0-100]

## Data File Inventory
[Table with filename, size, lines, exporters, importers]

## Orphaned Files
[List with recommendation: delete / keep with justification]

## Legacy Content (KWV)
[List files with KWV references, recommended removal]

## Duplicate Data
[List overlapping content, consolidation recommendation]

## File Size
[List files over 20kB with split strategy]

## Type Safety
[List files missing interfaces or using `any`]

## Missing Data Files
[List hardcoded content that should be extracted]

## Fixes Applied
[List all deletions, consolidations, extractions]

## Remaining Issues
[List with priority]

## Recommendations
[Data architecture improvements, maintenance schedule]
```

---

## Success Criteria

- [ ] Zero orphaned data files (or justified exceptions)
- [ ] Zero KWV legacy content
- [ ] Zero duplicate data across files
- [ ] All data files under 20kB
- [ ] All exports are type-safe (TypeScript interfaces)
- [ ] News posts extracted to newsPosts.ts (if hardcoded)
- [ ] FAQ data extracted to faqData.ts (if hardcoded)
- [ ] Report saved to `/reports/data/`
- [ ] Task list updated with remaining items

---

## Expected Data Files (After Cleanup)

**Active (8):**
1. `/data/farmStory.ts` (family story, team, experiences, sustainability, awards, contact)
2. `/data/products.ts` (17 products: wines, spirits, cheese, gifts)
3. `/data/newsPosts.ts` (news/blog posts)
4. `/data/faqData.ts` (FAQ Q&A)
5. `/data/jobs.ts` (careers - if used)
6. `/data/testimonials.ts` (customer testimonials - if created)
7. `/data/events.ts` (events calendar - if created)
8. `/data/wineClub.ts` (wine club tiers - if separated from farmStory)

**Deprecated (Delete):**
- `/data/shopBrands.ts` (KWV legacy)
- `/data/tastings.ts` (replaced by farmStory.experiences)
- `/data/site-content.ts` (content moved to pages)
- `/data/brands.ts` (replaced by product categories)

---

## Current Status (From Last Audit)

**Last Audit:** 2026-03-15  
**Health Score:** 88/100 ✅ Good

**Strengths:**
- ✅ All 9 files PASS 20kB limit
- ✅ farmStory.ts is gold standard (15kB, well-structured)
- ✅ products.ts is excellent (17 products, type-safe)

**Issues:**
- ⚠️ shopBrands.ts contains KWV brand data (legacy)
- ⚠️ tastings.ts, site-content.ts, brands.ts (verify usage, likely deprecated)
- ⚠️ newsPosts.ts missing (12 posts hardcoded in News.tsx)
- ⚠️ faqData.ts missing (28 Q&A hardcoded in FAQ.tsx)

**Task List:** `/tasks/data-cleanup-task-list.md` (0/10 tasks started)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `cleanup`, `audit guidelines`, `audit images`  
**Related Task List:** `/tasks/data-cleanup-task-list.md`

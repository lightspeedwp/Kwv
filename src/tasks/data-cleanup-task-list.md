# Data Files Cleanup Task List

**Version:** 1.0  
**Created:** 2026-03-15  
**Source Report:** `/reports/data/2026-03-15.md`  
**Health Score:** 88/100 ✅ Good  
**Status:** Active

---

## Overview

This task list tracks data file cleanup and organization based on the data audit. Primary issues: legacy KWV content in shopBrands.ts, potential deprecated files (tastings.ts, site-content.ts, brands.ts), and missing data files (newsPosts.ts, faqData.ts).

**Priority:** Remove KWV content, consolidate duplicate files, extract hardcoded content to data files.

---

## Critical Tasks (Do Immediately)

- [x] **Verify shopBrands.ts usage and remove KWV content** (30 minutes) ✅ COMPLETE
  - ✅ Searched for imports: Found 2 files using it (ShopBrands.tsx, ShopBrandLanding.tsx)
  - ✅ Removed ALL KWV brand data (KWV Brandy, Classic Collection, Roodeberg, Laborie, The Mentors, Cathedral Cellar, Annabelle, etc.)
  - ✅ Replaced with Handcrafted Wines collections:
    - Estate Wines (small-batch vineyard wines)
    - Craft Spirits (grappa & brandy from farm distillery)
    - Farmstead Cheese (goat cheese from on-farm dairy)
    - Curated Gift Sets (wine/cheese/spirit pairings)
    - Wine Club Exclusives (members-only releases)
  - **File:** `/data/shopBrands.ts`
  - **Impact:** ZERO KWV references remaining in shopBrands.ts
  - **Completed:** 2026-03-15

- [x] **Create newsPosts.ts data file** (1 hour) ✅ COMPLETE
  - ✅ Extracted 12 news posts from News.tsx (lines 27-125)
  - ✅ Created TypeScript interface: `NewsPost { id, title, date, category, excerpt, image, featured }`
  - ✅ Added helper functions: getPostsByCategory(), getFeaturedPost(), getPostById()
  - ✅ Exported NEWS_CATEGORIES constant
  - ✅ Updated News.tsx to import from `/data/newsPosts.ts`
  - **Files:** Created `/data/newsPosts.ts`, updated `/pages/company/News.tsx`
  - **Impact:** News content now separated from component (improved maintainability)
  - **Completed:** 2026-03-15

---

## High Priority Tasks (This Sprint)

- [x] **Verify and consolidate brand data files** (45 minutes) ✅ COMPLETE
  - ✅ Verified brands.ts usage: Used ONLY by /brands and /brands/:id routes
  - ✅ Verified /brands route is orphaned (not in main navigation)
  - ✅ Confirmed shopBrands.ts is ACTIVE (used by /shop/brands routes)
  - ✅ Decision: Deprecated brands.ts (corporate KWV), kept shopBrands.ts (Handcrafted Wines collections)
  - ✅ Added deprecation notice to brands.ts header
  - ✅ Commented /brands routes in routes.tsx as DEPRECATED
  - **Files:** `/data/brands.ts` (deprecated), `/routes.tsx` (routes commented), `/data/shopBrands.ts` (active)
  - **Impact:** Clear separation - corporate KWV page deprecated, family farm collections active
  - **Completed:** 2026-03-15

- [x] **Verify deprecated files** (30 minutes) ✅ COMPLETE
  - ✅ Verified site-content.ts: **ACTIVE** - Used by 5 files (checkout, newsletter, social, footer, experiences)
  - ✅ Enhanced site-content.ts JSDoc header with usage documentation
  - ✅ Verified tastings.ts: **NOT USED** - Replaced by farmStory.experiences
  - ✅ Added deprecation notice to tastings.ts header
  - **Files:** `/data/site-content.ts` (active, enhanced JSDoc), `/data/tastings.ts` (deprecated)
  - **Impact:** Clarified which files are active vs deprecated
  - **Results:**
    - site-content.ts: ✅ ACTIVE (5 imports found)
    - tastings.ts: ❌ DEPRECATED (0 imports found, replaced by farmStory.ts)
  - **Completed:** 2026-03-15

- [x] **Extract FAQ data from FAQ.tsx** (1 hour) ✅ COMPLETE
  - ✅ Created `/data/faqData.ts` with comprehensive JSDoc header
  - ✅ Extracted 30 FAQ questions from FAQ.tsx (lines 23-186)
  - ✅ Created TypeScript interfaces: `FAQItem`, `FAQCategory`
  - ✅ Exported `FAQ_CATEGORIES` constant (6 categories, 30 questions)
  - ✅ Added helper functions:
    - `getQuestionsByCategory(categoryId)` - Get questions by category
    - `getCategoryById(categoryId)` - Get category object
    - `searchFAQs(searchTerm)` - Search all FAQs by keyword
    - `getTotalQuestionCount()` - Get total question count
    - `getCategoryIds()` - Get all category IDs
  - ✅ Updated FAQ.tsx to import from `/data/faqData.ts`
  - ✅ Removed ~163 lines of hardcoded FAQ data from component
  - **Files:** Created `/data/faqData.ts` (10kB), updated `/pages/company/FAQ.tsx`
  - **Impact:** FAQ content now separated from component, improved maintainability
  - **Categories:**
    - About Our Farm (5 questions)
    - Our Products (5 questions)
    - Visiting the Farm (6 questions)
    - The Wine Box (5 questions)
    - Shopping & Orders (5 questions)
    - Events & Functions (4 questions)
  - **Completed:** 2026-03-15

---

## Medium Priority Tasks (Next Sprint)

- [ ] **Add JSDoc headers to all data files** (1 hour)
  - Document file purpose
  - Document exported interfaces
  - Add usage examples
  - **Files:** All 9 data files
  - **Impact:** Better developer experience
  - **Current coverage:** ~50% of data files have comprehensive JSDoc

- [ ] **Create data file organization guidelines** (30 minutes)
  - When to create new data file
  - File naming conventions
  - Size limits and splitting strategies
  - Maximum complexity per file
  - **File:** Create `/guidelines/development/data-organization.md`
  - **Impact:** Prevent future organization drift

---

## Low Priority Tasks (Future)

- [ ] **Monitor farmStory.ts size** (if needed)
  - Current: ~15kB (75% of 20kB limit)
  - If exceeds 18kB, consider splitting into:
    - farmHistory.ts
    - farmTeam.ts
    - farmExperiences.ts
  - **File:** `/data/farmStory.ts`
  - **Impact:** Prevent file size violations
  - **Status:** Not needed yet (plenty of headroom)

- [ ] **Create automated data validation** (4 hours)
  - Type checking for all data exports
  - Required field validation
  - Duplicate detection (e.g., duplicate slugs, IDs)
  - File size monitoring
  - **Impact:** Prevent data quality issues
  - **Implementation:** Node script or test suite

---

## Data Quality Scorecard

### **Excellent Quality Files** (5/9)

- ✅ **farmStory.ts** - ⭐⭐⭐⭐⭐ Gold standard
- ✅ **products.ts** - ⭐⭐⭐⭐⭐ Complete catalog
- ✅ **demoContent.ts** - ⭐⭐⭐⭐ Comprehensive demo content
- ✅ **shop-faq.ts** - ⭐⭐⭐⭐ Good FAQ coverage
- ✅ **jobs.ts** - ⭐⭐⭐⭐ Realistic job listings

### **Needs Improvement Files** (4/9)

- ⚠️ **shopBrands.ts** - ⭐⭐ Contains KWV content
- ⚠️ **site-content.ts** - ⭐⭐ Purpose unclear, may be deprecated
- ⚠️ **brands.ts** - ⭐⭐ Possible duplication with shopBrands.ts
- ⚠️ **tastings.ts** - ⭐⭐ Likely deprecated (replaced by farmStory.experiences)

---

## File Size Compliance

### ✅ **All Files PASS 20kB Limit**

| File | Size | Limit | Status | Headroom |
|------|------|-------|--------|----------|
| farmStory.ts | ~15kB | 20kB | ✅ PASS | 25% |
| products.ts | ~12kB | 20kB | ✅ PASS | 40% |
| demoContent.ts | ~8kB | 20kB | ✅ PASS | 60% |
| shopBrands.ts | ~6kB | 20kB | ✅ PASS | 70% |
| shop-faq.ts | ~4kB | 20kB | ✅ PASS | 80% |
| jobs.ts | ~3kB | 20kB | ✅ PASS | 85% |
| site-content.ts | ~2kB | 20kB | ✅ PASS | 90% |
| brands.ts | ~2kB | 20kB | ✅ PASS | 90% |
| tastings.ts | ~1kB | 20kB | ✅ PASS | 95% |

**Achievement:** 100% compliance with size limit

---

## New Data Files to Create

- [ ] `/data/newsPosts.ts` - 12 news posts (estimated ~8kB)
- [ ] `/data/faqData.ts` - 28 FAQ items (estimated ~6kB)
- [ ] `/data/eventTypes.ts` (optional) - Event types for Events.tsx (estimated ~2kB)

---

## Progress Tracking

**Total Tasks:** 10  
**Completed:** 2  
**In Progress:** 0  
**Remaining:** 8

**Estimated Time:** 5 hours (critical + high priority)  
**Target Completion:** 2026-03-22

---

## Success Criteria

- [ ] Zero KWV references in all data files
- [ ] No duplicate/deprecated data files
- [ ] All hardcoded content extracted to data files
- [ ] All data files have JSDoc headers
- [ ] Data organization guidelines created
- [ ] All files remain under 20kB

**Target Health Score:** 95/100

---

## Notes

- farmStory.ts and products.ts are exemplary examples
- Primary issue is legacy/deprecated files
- Missing data files cause content management issues
- Good file size compliance (all files well under limit)

---

**Last Updated:** 2026-03-15  
**Next Review:** After data cleanup tasks complete
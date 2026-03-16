# Sitemap Documentation Task List

**Version:** 1.0  
**Created:** 2026-03-15  
**Source Report:** `/reports/sitemap/2026-03-15.md`  
**Health Score:** 78/100 ⚠️ Needs Improvement  
**Status:** Active

---

## Overview

This task list tracks sitemap.md documentation updates based on the sitemap completeness audit. The sitemap documentation is outdated with only ~40 routes documented when 71 actual routes exist in routes.tsx.

**Priority:** Update sitemap.md to accurately reflect all implemented routes.

---

## Critical Tasks (Fix Immediately)

- [x] **Fix incorrect experience route slugs** (2 minutes) ✅ COMPLETE
  - Updated `/experiences/harvest` → `/experiences/harvest-experience`
  - Updated `/experiences/private` → `/experiences/private-tasting`
  - **File:** `/guidelines/architecture/sitemap.md` (lines 76-77, table section 2.4)
  - **Impact:** Documentation now matches implementation
  - **Completed:** 2026-03-15

- [x] **Update route count** (1 minute) ✅ COMPLETE
  - Changed "Total Pages: 40+" to "Total Pages: 70+ (52 registered routes)"
  - **File:** `/guidelines/architecture/sitemap.md` line 14
  - **Impact:** Accurate documentation
  - **Completed:** 2026-03-15

- [x] **Add /sitemap route to documentation** (2 minutes) ✅ COMPLETE
  - Added to Utility Pages section (line 99-101)
  - **File:** `/guidelines/architecture/sitemap.md`
  - **Impact:** Meta documentation gap closed
  - **Completed:** 2026-03-15

---

## High Priority Tasks (This Week)

- [x] **Document remaining utility pages** (30 minutes) ✅ COMPLETE
  - Added Section 2.8: Utility Pages (6 pages documented)
  - Search Results, Sitemap, FAQ, Global Distribution, Coming Soon, 404
  - Documented section-specific FAQs (Shop FAQ, Experiences FAQ, Events FAQ)
  - Documented search variations (Global Search, Shop Search)
  - **File:** `/guidelines/architecture/sitemap.md` (Section 2.8)
  - **Impact:** Complete utility page inventory
  - **Completed:** 2026-03-15

- [x] **Create route aliases reference table** (30 minutes) ✅ COMPLETE
  - Added Section 7.2: Complete Route Aliases Reference Table
  - Documented all 7 alias routes with metadata (use case, canonical URL)
  - Implementation patterns and code examples
  - Alias decision criteria (when to create/avoid aliases)
  - **File:** `/guidelines/architecture/sitemap.md` (Section 7.2)
  - **Impact:** Clear reference for all route aliases
  - **Completed:** 2026-03-15

- [x] **Document dynamic route parameters** (45 minutes) ✅ COMPLETE
  - Added Section 3.4: Dynamic Route Parameters
  - Documented all 5 dynamic route patterns (product/:id, news/:slug, brands/:id, events/:slug, tag/:tag)
  - Listed all current parameter values (17 products, 12 news posts, 5 collections, 4 events)
  - Parameter extraction examples (React Router useParams)
  - Parameter validation patterns
  - SEO best practices for slug naming
  - **File:** `/guidelines/architecture/sitemap.md` (Section 3.4)
  - **Impact:** Complete developer reference for dynamic routing
  - **Completed:** 2026-03-15

- [x] **Add shop advanced routing details** (45 minutes) ✅ COMPLETE
  - Enhanced Section 2.3: Shop Section with advanced routing documentation
  - Category filtering examples
  - Query parameter filtering (category, award, price, vintage, type, aging)
  - Combined filters with AND logic
  - Sorting options (price, name, awards, newest)
  - Search patterns
  - Example filter combinations table (7 examples)
  - Cart & checkout flow documentation
  - Checkout steps (4-step process)
  - Product URL structure (preferred vs alias)
  - **File:** `/guidelines/architecture/sitemap.md` (Section 2.3)
  - **Impact:** Complete shop routing reference for developers
  - **Completed:** 2026-03-15

- [ ] **Add brands section documentation** (30 minutes)
  - Document /brands and /brands/:id routes
  - List brand/collection pages
  - Add to section 2.9 (new section)
  - **File:** `/guidelines/architecture/sitemap.md`
  - **Impact:** Complete route documentation

---

## Medium Priority Tasks (Next Sprint)

- [ ] **Add route metadata table** (1 hour)
  - For each route, add:
    - Page title
    - Meta description
    - Breadcrumb structure
    - Canonical URL
  - **Impact:** SEO and navigation clarity

- [ ] **Add SEO guidelines section** (30 minutes)
  - URL naming conventions
  - Slug generation rules
  - Redirect strategy
  - **Impact:** Consistent SEO practices

---

## Low Priority Tasks (Future)

- [ ] **Create automated route audit tool** (4 hours)
  - Script to compare routes.tsx to sitemap.md
  - Detect missing routes, incorrect slugs, orphaned routes
  - **Impact:** Prevent future documentation drift

- [ ] **Create visual sitemap diagram** (2 hours)
  - Export sitemap as visual tree diagram
  - Include in /docs/ directory
  - **Impact:** Better visual navigation reference

---

## Progress Tracking

**Total Tasks:** 13  
**Completed:** 4  
**In Progress:** 0  
**Remaining:** 9

**Estimated Time:** 2 hours (immediate + this sprint)  
**Target Completion:** 2026-03-22

---

## Success Criteria

- [ ] All 71 routes documented in sitemap.md
- [ ] Correct slugs for all routes
- [ ] Route aliases table created
- [ ] Dynamic routes documented
- [ ] Utility pages section added
- [ ] Brands section added
- [ ] Route count updated to "70+ pages"

**Target Health Score:** 95/100

---

## Notes

- Current route count: 71 (was documented as 40+, 77.5% increase)
- Primary issue: Documentation hasn't kept pace with implementation
- All routes are functional, just undocumented
- No broken links detected (excellent)

---

**Last Updated:** 2026-03-15  
**Next Review:** After sitemap.md updates
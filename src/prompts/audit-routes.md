---
title: "Audit Routes Prompt"
category: "System Audits"
trigger: "audit routes"
version: "1.0.0"
execution_model: "Audit + Ask"
output_report: "/reports/routes/YYYY-MM-DD.md"
output_task_list: "/tasks/routes-task-list.md"
---

# Audit Routes Prompt

**Trigger Word:** `audit routes`  
**Execution Model:** Audit + Ask (preview before execution)  
**Version:** 1.0.0

---

## Purpose

Comprehensive route validation and navigation audit system. Ensures all routes are properly registered, navigation menus are accurate, data files have proper slugs/IDs, and internal links are valid throughout the codebase.

---

## Scope

### What This Audits

✅ **Route Registry** (`/routes.tsx`)
- All registered routes
- Dynamic route patterns (`:slug`, `:id`)
- Route hierarchy and nesting
- Missing or duplicate routes

✅ **Page Files** (`/pages/`)
- All page components
- Unused pages (not in routes)
- Missing pages (in routes but no file)

✅ **Data Files** (`/data/`)
- Slug fields (presence, format, uniqueness)
- ID fields (presence, uniqueness)
- Dynamic content mappings
- Missing or malformed data

✅ **Navigation Menus**
- `/data/navigation.ts` (shared navigation links)
- `/data/mega-menu.ts` (if exists)
- `/data/footer-navigation.ts` (if exists)
- Header dropdowns
- Footer menus
- Mobile menus
- Breadcrumbs

✅ **Internal Links** (all components and pages)
- Text links
- Button links
- Breadcrumb links
- Card links
- Navigation links
- Any element using `Link`, `useNavigate`, or `to` prop

✅ **Special Pages**
- `/pages/Sitemap.tsx` - All sitemap links
- Dev-tools landing page - All demo links
- Homepage - All CTA links
- Shop pages - Category and product links

### What This Skips

❌ **External Links** (not validated)
❌ **Asset Paths** (images, PDFs, etc.)
❌ **Anchor Links** (`#section-id`)
❌ **API Endpoints**

---

## Execution Phases

### Phase 1: AUDIT

**Objective:** Scan entire codebase and gather route/link data

**Actions:**

1. **Scan Routes Registry**
   - Read `/routes.tsx`
   - Extract all registered routes
   - Identify dynamic routes (`:slug`, `:id`)
   - Build complete route map

2. **Scan Page Files**
   - List all files in `/pages/` recursively
   - Match pages to routes
   - Identify orphaned pages (no route)
   - Identify missing pages (route but no file)

3. **Scan Data Files**
   - Read all files in `/data/`
   - For each content type (products, posts, experiences, etc.):
     - Check for `slug` field
     - Check for `id` field
     - Validate slug format (lowercase, hyphens, no special chars)
     - Check for duplicate slugs
     - Check for duplicate IDs
   - Identify missing slugs/IDs

4. **Scan Navigation Files**
   - Read `/data/navigation.ts`
   - If exists: Read `/data/mega-menu.ts`
   - If exists: Read `/data/footer-navigation.ts`
   - Extract all `href` or `to` values
   - Categorize by menu type (header, footer, mobile, mega)

5. **Scan Components for Links**
   - Search for `<Link`, `useNavigate`, `to=`, `href=` in:
     - `/components/` (all subdirectories)
     - `/pages/` (all page files)
   - Extract destination routes
   - Group by page/component

6. **Validate All Links**
   - Cross-reference extracted links against route map
   - Identify broken links (link to non-existent route)
   - Identify invalid dynamic routes (missing data)
   - Group issues by severity:
     - **Critical:** Broken navigation menu links
     - **High:** Broken homepage/shop CTAs
     - **Medium:** Broken component links
     - **Low:** Broken internal page links

7. **Validate Dynamic Routes**
   - For each dynamic route (e.g., `/products/:slug`):
     - Find corresponding data file
     - Verify all entries have required slug/ID
     - Verify slugs match route pattern
     - Flag missing mappings

8. **Generate Health Score**
   - Calculate route health: 0-100%
   - Formula: `(valid_links / total_links) * 100`
   - Categorize:
     - 90-100%: ✅ Excellent
     - 75-89%: ⚠️ Good (minor issues)
     - 50-74%: ⚠️ Fair (attention needed)
     - 0-49%: ❌ Poor (immediate action required)

---

### Phase 2: TASK LIST GENERATION

**Objective:** Create/update task list from audit findings

**Actions:**

1. **Read Existing Task List**
   - Open `/tasks/routes-task-list.md`
   - Parse current active tasks
   - Parse completed tasks

2. **Generate New Tasks**
   - For each issue found in audit:
     - Create task with description
     - Assign priority (Critical/High/Medium/Low)
     - Estimate effort (Small/Medium/Large)
     - Add context (which file, which link, etc.)

3. **Update Task List File**
   - Add new tasks to "Active Tasks" section
   - Keep completed tasks in "Completed Tasks" section
   - Update YAML frontmatter:
     - `last_run`: Current date
     - `tasks_total`: Count of active tasks
     - `tasks_complete`: 0 (will update after execution)
     - `status`: "Pending Review"

4. **Register in Master Task List**
   - Open `/tasks/task-list.md`
   - Find "Routes & Navigation" section
   - Update:
     - Last Run date
     - Status (e.g., "⚠️ Issues Found (0/12 tasks)")
     - Task count
     - Link to report (will be created in Phase 5)

---

### Phase 3: ASK (Execution Approval)

**Objective:** Show preview and get user approval for fixes

**Actions:**

1. **Display Task Preview**
   - Show total tasks found
   - Group by priority:
     - **Critical:** X tasks
     - **High:** X tasks
     - **Medium:** X tasks
     - **Low:** X tasks
   - Show first 5 tasks as examples

2. **Show Proposed Fixes**
   - **Register Missing Routes:** List routes to add to `/routes.tsx`
   - **Fix Broken Links:** List links to update
   - **Add Missing Slugs:** Show auto-generated slugs from titles
   - **Update Navigation:** List navigation menu updates

3. **Ask for Approval**
   - **Option A:** Execute all tasks (fix everything automatically)
   - **Option B:** Execute by priority (Critical + High only)
   - **Option C:** Execute selected tasks (choose specific tasks)
   - **Option D:** Skip execution (audit only, manual fixes)

4. **If Auto-Generate Slugs Needed:**
   - Show list of entries missing slugs
   - Show proposed auto-generated slugs
   - Ask: "Generate these slugs automatically? [Yes/No]"

---

### Phase 4: EXECUTE (Fix Issues)

**Objective:** Apply approved fixes to codebase

**Actions Based on Approval:**

#### If User Approved Fixes:

1. **Register Missing Routes**
   - Open `/routes.tsx`
   - Add missing route definitions
   - Organize by section (shop, about, visit, events)
   - Preserve existing route structure

2. **Fix Broken Links**
   - For each broken link:
     - Open file containing the link
     - Update `to` or `href` to correct route
     - Preserve styling and other props

3. **Add Missing Slugs** (if approved)
   - For each data file entry missing slug:
     - Generate slug from title/name field
     - Add `slug` field to entry
     - Format: lowercase, hyphens, no special chars
   - For each entry missing ID:
     - Generate unique ID
     - Add `id` field to entry

4. **Update Navigation Files**
   - Fix broken links in `/data/navigation.ts`
   - Fix broken links in mega menu (if exists)
   - Fix broken links in footer navigation (if exists)
   - Ensure all links point to valid routes

5. **Update Special Pages**
   - Fix links in `/pages/Sitemap.tsx`
   - Fix links in dev-tools landing page
   - Fix links in homepage CTAs
   - Fix links in shop category pages

6. **Update Task List**
   - Mark completed tasks with `[x]`
   - Add completion date to each task
   - Move completed tasks to "Completed Tasks" section
   - Update YAML frontmatter:
     - `tasks_complete`: Count of completed tasks
     - `status`: "Complete" or "Partial" (if some tasks skipped)

7. **Update Master Task List**
   - Update Routes section in `/tasks/task-list.md`
   - Update status (✅ Complete or 🟡 In Progress)
   - Update task progress (e.g., "12/12 tasks")

#### If User Skipped Execution:

- Keep all tasks in "Active Tasks" section
- Update task list status to "Pending Manual Review"
- Skip to Phase 5 (Report)

---

### Phase 5: REPORT

**Objective:** Generate comprehensive audit report

**Actions:**

1. **Create Report File**
   - Location: `/reports/routes/YYYY-MM-DD.md`
   - Use current date for filename
   - Create `/reports/routes/` folder if doesn't exist

2. **Report Structure:**

```markdown
---
title: "Route Audit Report"
date: "YYYY-MM-DD"
trigger: "audit routes"
health_score: 85
status: "Complete"
tasks_completed: 12
tasks_total: 12
---

# Route Audit Report

**Date:** YYYY-MM-DD  
**Trigger:** `audit routes`  
**Health Score:** 85/100 ⚠️ Good  
**Status:** ✅ Complete

---

## Executive Summary

Brief overview of audit findings:
- Total routes audited: X
- Total links validated: X
- Broken links found: X
- Missing slugs/IDs: X
- Tasks created: X
- Tasks completed: X
- Health score: X/100

**Recommendation:** [High-level recommendation based on health score]

---

## Route Registry Analysis

### Registered Routes (Total: X)

List all routes found in `/routes.tsx`:
- `/` - Homepage
- `/about` - About page
- `/shop` - Shop landing
- `/shop/:category` - Shop category (dynamic)
- `/products/:slug` - Product detail (dynamic)
- etc.

### Dynamic Routes (Total: X)

List all dynamic routes and their data sources:
- `/products/:slug` → `/data/products.ts` (17 products)
- `/news/:slug` → `/data/news.ts` (12 posts)
- etc.

### Missing Routes (Total: X)

Routes that should exist but aren't registered:
- [ ] `/blog/:slug` - Found in navigation but not in routes.tsx
- etc.

### Orphaned Pages (Total: X)

Page files that exist but have no route:
- [ ] `/pages/OldPage.tsx` - No matching route
- etc.

---

## Data File Audit

### Products (`/data/products.ts`)

- **Total entries:** 17
- **Missing slugs:** 0 ✅
- **Duplicate slugs:** 0 ✅
- **Missing IDs:** 0 ✅
- **Duplicate IDs:** 0 ✅
- **Health:** ✅ Excellent

### [Repeat for each data file]

---

## Navigation Menu Audit

### Header Navigation (`/data/navigation.ts`)

- **Total links:** 24
- **Valid links:** 22 ✅
- **Broken links:** 2 ❌
  - `/old-page` (Critical) - Update to `/new-page`
  - `/products/wine` (High) - Update to `/shop/wines`
- **Health:** ⚠️ Good (91%)

### Footer Navigation

- **Total links:** 32
- **Valid links:** 32 ✅
- **Broken links:** 0 ✅
- **Health:** ✅ Excellent (100%)

### Mobile Menu

- **Total links:** 28
- **Valid links:** 27 ✅
- **Broken links:** 1 ❌
  - `/contact-us` (Medium) - Update to `/contact`
- **Health:** ✅ Excellent (96%)

---

## Broken Links Report

### By Severity

#### Critical (X links)
Broken links in main navigation or homepage:
- `UnifiedHeader.tsx` Line 45: `/old-shop` → Should be `/shop`
- `UnifiedFooter.tsx` Line 78: `/about-us` → Should be `/about`

#### High (X links)
Broken links in shop pages or key CTAs:
- `ShopHome.tsx` Line 120: `/products/wine` → Should be `/shop/wines`

#### Medium (X links)
Broken links in components:
- `ProductCard.tsx` Line 34: `/product/:id` → Should be `/products/:slug`

#### Low (X links)
Broken links in internal pages:
- `FAQ.tsx` Line 56: `/help` → Should be `/contact`

### By Page/Component

List broken links grouped by file:

**UnifiedHeader.tsx** (2 broken links)
- Line 45: `/old-shop` → `/shop`
- Line 67: `/experiences` → `/visit`

**ProductCard.tsx** (1 broken link)
- Line 34: `/product/:id` → `/products/:slug`

---

## Dynamic Route Validation

### `/products/:slug`

- **Data source:** `/data/products.ts`
- **Total entries:** 17
- **Valid slugs:** 17 ✅
- **Slug format:** ✅ All lowercase, hyphens
- **Unique slugs:** ✅ No duplicates
- **Example slugs:**
  - `estate-shiraz`
  - `chenin-blanc`
  - `estate-grappa`
- **Health:** ✅ Excellent

### [Repeat for each dynamic route]

---

## Special Pages Audit

### Sitemap Page (`/pages/Sitemap.tsx`)

- **Total links:** 58
- **Valid links:** 55 ✅
- **Broken links:** 3 ❌
  - Line 120: `/old-page` → Update
  - Line 145: `/deprecated` → Update
  - Line 167: `/missing` → Update
- **Health:** ⚠️ Good (95%)

### Dev-Tools Landing Page

- **Total links:** 12
- **Valid links:** 12 ✅
- **Broken links:** 0 ✅
- **Health:** ✅ Excellent (100%)

---

## Tasks Completed

### Summary

- **Total tasks:** 12
- **Completed:** 12 ✅
- **Skipped:** 0
- **Status:** Complete

### Task List

1. [x] Register `/blog/:slug` route in routes.tsx ✅ 2026-03-15
2. [x] Add missing slugs to 3 products in products.ts ✅ 2026-03-15
3. [x] Fix broken link in UnifiedHeader (/old-shop → /shop) ✅ 2026-03-15
4. [x] Fix broken link in UnifiedFooter (/about-us → /about) ✅ 2026-03-15
5. [x] Update navigation.ts with corrected routes ✅ 2026-03-15
6. [x] Fix 3 broken links in Sitemap.tsx ✅ 2026-03-15
7. [x] Update ProductCard link pattern ✅ 2026-03-15
8. [x] Validate all dynamic route mappings ✅ 2026-03-15
9. [x] Remove orphaned page (OldPage.tsx) ✅ 2026-03-15
10. [x] Update shop category links ✅ 2026-03-15
11. [x] Fix mobile menu link ✅ 2026-03-15
12. [x] Update breadcrumb links ✅ 2026-03-15

**Reference:** See `/tasks/routes-task-list.md` for complete task tracking

---

## Recommendations

### High Priority

1. **Run this audit regularly** - Especially after adding new pages or content
2. **Add slug validation** to data file creation workflow
3. **Use TypeScript types** for route constants to prevent typos

### Medium Priority

1. **Create route constants file** - Centralize all route strings
2. **Add link validation** to CI/CD pipeline
3. **Document navigation structure** in guidelines

### Low Priority

1. **Consider route aliasing** for backward compatibility
2. **Add 404 handling** for invalid routes
3. **Create redirect map** for changed routes

---

## Next Steps

1. ✅ Review this report
2. ✅ Check completed tasks in `/tasks/routes-task-list.md`
3. ✅ Verify all fixes by testing navigation
4. [ ] Run `audit routes` again after adding new content
5. [ ] Consider adding route validation to CI/CD

---

## Related Documentation

- **Task List:** `/tasks/routes-task-list.md`
- **Routing Guidelines:** `/guidelines/architecture/routing.md`
- **Sitemap:** `/guidelines/architecture/sitemap.md`
- **File Organization:** `/guidelines/development/file-organization.md`

---

**Generated:** YYYY-MM-DD HH:MM:SS  
**Health Score:** 85/100 ⚠️ Good  
**Status:** ✅ Audit Complete
```

3. **Update Master Task List**
   - Update Routes section with report link
   - Add health score to status line

---

## Output Files

This prompt creates/updates 3 files:

1. **Report:** `/reports/routes/YYYY-MM-DD.md`
   - Comprehensive audit report
   - Health score and metrics
   - Detailed findings by category
   - Completed tasks summary

2. **Task List:** `/tasks/routes-task-list.md`
   - Updated with new tasks (if any)
   - Completed tasks marked with dates
   - YAML frontmatter updated

3. **Master Task List:** `/tasks/task-list.md`
   - Routes section updated
   - Status and progress updated
   - Report link added

---

## Navigation Data Structure

### Preferred Structure: Hybrid Approach

**Start with centralized file:**
```
/data/navigation.ts
```

**If file gets too large (>20kB or >100 lines), split into:**
```
/data/navigation.ts       # Shared primary nav links
/data/mega-menu.ts        # Complex mega menu structure  
/data/footer-navigation.ts # Footer-specific links
```

**Decision criteria for splitting:**
- File size exceeds 20kB
- Line count exceeds 100
- Navigation becomes difficult to scan
- Different teams manage different menus

---

## Slug Validation Rules

### Valid Slug Format

✅ **Valid:**
- `estate-shiraz` (lowercase, hyphens)
- `2023-harvest` (numbers okay)
- `chenin-blanc-reserve` (multiple hyphens okay)

❌ **Invalid:**
- `Estate Shiraz` (spaces)
- `estate_shiraz` (underscores)
- `estateShiraz` (camelCase)
- `Estate-Shiraz` (uppercase)
- `estate/shiraz` (slashes)
- `estate.shiraz` (periods)

### Auto-Generation Rules

When auto-generating slugs from titles:

1. **Convert to lowercase**
   ```
   "Estate Shiraz" → "estate shiraz"
   ```

2. **Replace spaces with hyphens**
   ```
   "estate shiraz" → "estate-shiraz"
   ```

3. **Remove special characters**
   ```
   "Estate Shiraz (2023)" → "estate-shiraz-2023"
   "Chèvre Cheese" → "chevre-cheese"
   ```

4. **Remove multiple consecutive hyphens**
   ```
   "Estate--Shiraz" → "estate-shiraz"
   ```

5. **Trim leading/trailing hyphens**
   ```
   "-estate-shiraz-" → "estate-shiraz"
   ```

### Uniqueness Check

- All slugs within a content type must be unique
- If duplicate found:
  - Append `-2`, `-3`, etc. to duplicates
  - Example: `shiraz`, `shiraz-2`, `shiraz-3`

---

## Health Score Calculation

### Formula

```
health_score = (valid_links / total_links) * 100
```

### Weighting by Severity

**Optional enhanced scoring:**

```
critical_weight = 10
high_weight = 5
medium_weight = 2
low_weight = 1

max_points = (critical_count * critical_weight) + 
             (high_count * high_weight) + 
             (medium_count * medium_weight) + 
             (low_count * low_weight)

lost_points = (critical_broken * critical_weight) + 
              (high_broken * high_weight) + 
              (medium_broken * medium_weight) + 
              (low_broken * low_weight)

health_score = ((max_points - lost_points) / max_points) * 100
```

### Categories

- **90-100%:** ✅ Excellent - No action needed
- **75-89%:** ⚠️ Good - Minor issues, low priority fixes
- **50-74%:** ⚠️ Fair - Attention needed, plan fixes
- **0-49%:** ❌ Poor - Immediate action required

---

## Validation Checklist

### Before Running This Prompt

- [ ] All page files are in `/pages/` directory
- [ ] All data files are in `/data/` directory
- [ ] `/routes.tsx` exists and is up to date
- [ ] Navigation data files exist (`/data/navigation.ts` at minimum)

### After Running This Prompt

- [ ] Report generated in `/reports/routes/YYYY-MM-DD.md`
- [ ] Task list updated in `/tasks/routes-task-list.md`
- [ ] Master task list updated in `/tasks/task-list.md`
- [ ] Health score is acceptable (>75%)
- [ ] All critical and high-priority issues resolved

---

## Frequency

**Recommended Schedule:**

- **After adding new pages** - Always
- **After content updates** - If adding new products, posts, etc.
- **Before deployments** - Verify all links work
- **Weekly during active development** - Catch issues early
- **Monthly during maintenance** - Keep routes healthy

---

## Related Prompts

- `cleanup` - Cleanup root directory (may affect routes)
- `audit data` - Audit data file sizes (complements slug validation)
- `status` - Project status (includes route health)

---

## Version History

### Version 1.0.0 (2024-03-15)
- Initial prompt creation
- Audit + Ask execution model
- Comprehensive route validation
- Slug auto-generation with approval
- Health score calculation
- Report generation

---

**Trigger:** `audit routes`  
**Status:** Ready to use  
**Last Updated:** 2024-03-15

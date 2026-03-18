# Codebase Cleanup & Status Sync

**Type:** Audit + Cleanup + Status Update  
**Version:** 3.0  
**Created:** 2026-03-18  
**Status:** Production  
**Trigger:** User types `cleanup`  
**Project:** Handcrafted Wines  
**Repeatable:** Yes — run weekly or after each major work session  
**Estimated Duration:** 1 session (20-40 minutes)  
**Companion:** Always followed by `/prompts/continue.md` unless user says otherwise

---

## Instructions

When triggered, execute ALL steps below IN ORDER within a single session. Do not create sub-prompts, orchestrators, or defer work to future sessions.

**Environment Reminder:** You are working inside **Figma Make**. Do NOT tell the user to refresh their browser, clear cache, restart dev servers, or run terminal commands — none of that applies here. All work is done via the file editing tools available in this environment.

**Handcrafted Wines Design System Rules (apply to ALL generated/modified UI):**
- ALL styling via `--twb-*` CSS variables from `/styles/`
- Typography: ONLY `var(--twb-font-primary)` (serif) and `var(--twb-font-secondary)` (sans)
- Icons: `@phosphor-icons/react` ONLY — zero `lucide-react` (migration in progress)
- Router: `react-router` only — never `react-router-dom`
- Hero standards: Mobile height `min-h-[calc(100dvh-90px)]`, scroll arrow required
- Template parts: Header, Footer, Hero components (not hardcoded HTML)

---

## Step 1 — Root Directory Cleanup

**Goal:** Root (`/`) contains ONLY config files + 3 protected `.md` files.

**Protected Root Files:**
- `README.md`
- `CHANGELOG.md`
- `ATTRIBUTIONS.md`

1. List all files in `/` (root level only)
2. Any `.md` files NOT protected → **move** to correct location:
   - Guidelines → `/guidelines/`
   - Documentation → `/docs/`
   - Reports → `/reports/`
   - Tasks → `/tasks/`
   - Prompts → `/prompts/`
3. Any `.sh` scripts → **move** to `/scripts/`
4. Any orphaned files → **move** to appropriate folder
5. Delete empty or temp files (but NEVER protected files)

**Output:** List what was moved/deleted, or confirm "Root is clean."

---

## Step 2 — Broken Import Audit

**Goal:** Zero broken imports across CSS and TypeScript files.

### 2a. CSS Imports
1. Read `/styles/globals.css` — verify every `@import` path resolves
2. Check theme files: `themes.css`, `themes-variables.css`, `themes-light.css`, `themes-dark.css`
3. **Fix** broken paths (correct path or remove if file intentionally deleted)

### 2b. TypeScript/TSX Imports
1. Search for `from 'lucide-react'` or `from "lucide-react"` — flag for Phosphor migration
2. Search for `from 'react-router-dom'` or `from "react-router-dom"` — must be zero
3. Search for imports referencing deleted directories
4. Check `/routes.tsx` — verify all component imports resolve
5. Check `/data/` files — verify no broken imports
6. **Fix** any broken imports found

**Icon Migration Note:** Lucide imports are being phased out. Don't break existing icons during cleanup—migration handled by `audit phosphor` trigger.

**Output:** "[N] broken imports found and fixed" or "Zero broken imports."

---

## Step 3 — Route Completeness Check

**Goal:** Every page has a route; no routes point to missing pages.

1. List all `.tsx` files in `/pages/` (including subdirectories)
2. Read `/routes.tsx` to build registered route list
3. **Missing routes:** Pages with no route → add to `/routes.tsx` with correct path
4. **Dead routes:** Routes pointing to pages that don't exist → remove them
5. Do NOT remove any existing valid routes

**Output:** "[N] routes added, [N] dead routes removed" or "All routes complete."

---

## Step 4 — Orphaned File Scan

**Goal:** Flag files with zero importers.

1. Check for CSS files not imported by `globals.css` AND not imported by any component
2. Check for data files in `/data/` not imported anywhere:
   - `products.ts` - should be imported ✅
   - `farmStory.ts` - should be imported ✅
   - `heroData.ts` - should be imported ✅ (if exists)
3. Check for utility files in `/utils/` not imported anywhere
4. For confirmed orphans: **delete** (but NEVER protected files)
5. For uncertain files: **list them** in output but leave them

**Output:** "[N] orphaned files deleted, [N] flagged for review" or "No orphans found."

---

## Step 5 — Task List Maintenance

**Goal:** Task trackers are current and tidy.

### 5a. Archive Completed Task Files
1. Read each `.md` in `/tasks/` (not `task-list.md` or protected lists)
2. If ALL tasks are `[x]` → move to `/tasks/archive/`
3. NEVER delete or move protected task lists:
   - `task-list.md` (master)
   - `a11y-task-list.md` (accessibility)
   - `light-mode-task-list.md` (light mode)
   - `data-cleanup-task-list.md` (data)
   - (plus 11 others - see Guidelines.md)

### 5b. Update task-list.md
1. Update `Last Updated` date to today
2. Mark tasks `[x]` if work confirmed complete (check reports/changelog)
3. Remove duplicate entries
4. Ensure "Open Tasks" section reflects current state

### 5c. Update Task List Status
1. Accessibility: Currently 21/28 (75%)
2. Light Mode: 46/46 (100%) ✅
3. Icon Migration: Track Phosphor progress

**Output:** "[N] files archived, task-list.md updated."

---

## Step 6 — Reports Cleanup

**Goal:** Reports folder organized per category subdirectories.

**Report Categories:**
- `/reports/a11y/` - Accessibility audits
- `/reports/bem/` - BEM compliance
- `/reports/css/` - CSS architecture
- `/reports/icons/` - Icon migration (Phosphor)
- `/reports/layout/` - Header, footer, hero audits
- `/reports/light-mode/` - Light mode implementation (6 waves)
- `/reports/performance/` - Performance audits
- `/reports/tokens/` - Design token compliance

1. Check for reports in wrong locations (root, `/docs/`, `/src/`) → move to `/reports/{category}/`
2. Reports older than 60 days with no active references → flag (do NOT auto-delete)
3. Verify filenames follow `{description}-audit-YYYY-MM-DD.md` format
4. **Exception:** Keep milestone reports (light mode completion, perfect health scores)

**Output:** "[N] reports moved, [N] flagged for archival" or "Reports clean."

---

## Step 7 — CHANGELOG Update

**Goal:** Changelog reflects all work since last update.

1. Read `/CHANGELOG.md`
2. Under `[Unreleased]`, add concise entries for recent work not yet documented:
   - **Added:** New files, routes, features, prompts
   - **Changed:** Refactored code, updated configs, migrations
   - **Fixed:** Bug fixes, broken imports, accessibility issues
   - **Removed:** Deleted files, dead code
3. Keep entries to 1-2 sentences each
4. Follow [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format
5. NEVER delete existing entries

**Recent Work to Document:**
- Phosphor icon migration progress
- New audit prompts (header, footer, hero, phosphor)
- Accessibility improvements
- Template part audits

**Output:** "[N] changelog entries added" or "Changelog already current."

---

## Step 8 — Sitemap Sync

**Goal:** Sitemap reflects actual current routes.

1. Read `/guidelines/architecture/sitemap.md`
2. Compare against actual routes from `/routes.tsx`
3. **Add** pages that exist in routes but missing from sitemap
4. **Remove** pages listed in sitemap that no longer have routes
5. Update page counts, statistics

**Output:** "[N] pages added, [N] removed from sitemap" or "Sitemap is current."

---

## Step 9 — DevTools Templates Update

**Goal:** DevTools pages show accurate live data.

Update these with current codebase values:
1. **DevTools Dashboard** — file counts, component counts, route counts
2. **Code Quality Dashboard** — metrics, compliance scores, icon library (Phosphor migration %)
3. **Design Tokens Reference** — ensure token values match `/styles/themes-variables.css`

For ALL: use `--twb-*` CSS variables, `var(--twb-font-*)` for fonts, `@phosphor-icons/react` for icons.

**Output:** "[N] DevTools templates updated" or "DevTools are current."

---

## Step 10 — Guidelines Quick-Check

**Goal:** Key guideline files are accurate.

1. Verify `/guidelines/Guidelines.md` has today's date
2. Check `/guidelines/PROMPT-TRIGGERS.md` lists all 51 triggers (latest count)
3. Spot-check 3-5 cross-reference links — fix any broken ones
4. Verify mandatory guidelines marked: dark-light-mode, wordpress-css-variables, file-organization, wcag-compliance

**Output:** "[N] guideline issues fixed" or "Guidelines are current."

---

## Step 11 — Icon Migration Status

**Goal:** Track Phosphor icon migration progress.

1. Count files using `@phosphor-icons/react` imports
2. Count files using `lucide-react` imports (legacy)
3. Calculate migration percentage
4. Flag any new Lucide imports (regression)

**Output:** "Icon Migration: [N]% Phosphor, [N] Lucide files remaining"

---

## Step 12 — Session Summary

Provide final summary:

```
## Cleanup Session — [Today's Date] — Handcrafted Wines

| Action | Count |
|--------|-------|
| Files moved/deleted | [N] |
| Imports fixed | [N] |
| Routes added/removed | [N] |
| Task files archived | [N] |
| Changelog entries | [N] |
| Sitemap changes | [N] |
| DevTools updated | [N] |
| Guideline fixes | [N] |

### Project Health
- Light Mode: 100/100 ✅
- Dark Mode: 100/100 ✅
- Accessibility: 21/28 (75%)
- Icon Migration: [N]% Phosphor

### Issues Requiring Manual Review
- [list anything unresolved, or "None"]
```

Add any discovered follow-up items to `/tasks/task-list.md`.

**This cleanup phase is complete.** If triggered by `cleanup` (not standalone), proceed to `/prompts/continue.md`.

---

**Prompt Location:** `/prompts/cleanup.md`  
**Category:** Utilities  
**Difficulty:** Medium  
**Repeatable:** Yes  
**Project:** Handcrafted Wines

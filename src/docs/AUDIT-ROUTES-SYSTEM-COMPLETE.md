# Audit Routes System - Complete Implementation

**Date:** 2024-03-15  
**Version:** 1.0.0  
**Status:** ✅ Complete  
**Trigger:** `audit routes`

---

## Summary

Complete implementation of the `audit routes` trigger system with comprehensive route validation, navigation audits, internal link verification, and slug/ID validation for all data files.

---

## What Was Created

### 1. Protected Task List Files (15 total) ✅

All trigger-generated task list files created with YAML frontmatter:

```
/tasks/
├── task-list.md                  ✅ Master (updated)
├── routes-task-list.md           ✅ NEW
├── cleanup-task-list.md          ✅ NEW
├── tokens-task-list.md           ✅ NEW
├── release-task-list.md          ✅ NEW
├── changelog-task-list.md        ✅ NEW
├── reports-task-list.md          ✅ NEW
├── status-task-list.md           ✅ NEW
├── data-task-list.md             ✅ NEW
├── responsive-task-list.md       ✅ NEW
├── a11y-task-list.md             ✅ NEW
├── css-task-list.md              ✅ NEW
├── patterns-task-list.md         ✅ NEW
├── blocks-task-list.md           ✅ NEW
└── guidelines-task-list.md       ✅ NEW
```

**Each file includes:**
- YAML frontmatter with metadata
- Trigger word reference
- Active Tasks section
- Completed Tasks section
- Protected status notice

---

### 2. Audit Routes Prompt ✅

**File:** `/prompts/audit-routes.md`

**Execution Model:** Audit + Ask

**Phases:**
1. **Audit** - Scan routes, pages, data, navigation, links
2. **Task List Generation** - Create/update task list
3. **Ask** - Show preview, get approval
4. **Execute** - Apply approved fixes
5. **Report** - Generate comprehensive report

**Features:**
- Route registry validation (`/routes.tsx`)
- Page file scanning (`/pages/`)
- Data file slug/ID validation (`/data/`)
- Navigation menu audits
- Internal link verification
- Dynamic route mapping
- Health score calculation (0-100%)
- Slug auto-generation (with approval)

---

### 3. Updated Guidelines ✅

#### `/guidelines/Guidelines.md` (v7.0)

**Added new section:** Protected Task List Files

```markdown
## 🔒 Protected Task List Files

These 15 task list files in `/tasks/` are PROTECTED and never deleted during cleanup:

1. /tasks/task-list.md (Master)
2. /tasks/routes-task-list.md
3. /tasks/cleanup-task-list.md
... (15 total)

**Workflow:** When you run a trigger:
1. Runs audit phase
2. Creates/updates task list file
3. Registers in master task list
4. Generates report in /reports/{trigger}/YYYY-MM-DD.md
```

---

#### `/guidelines/development/file-organization.md` (v2.0)

**Added:** Trigger-Generated Reports structure

```markdown
### Reports

#### Trigger-Generated Reports (organized by trigger)

Pattern: /reports/{trigger}/YYYY-MM-DD.md

/reports/
├── routes/
│   ├── 2026-03-15.md (latest)
│   ├── 2026-03-10.md
│   └── 2026-03-05.md
├── cleanup/
│   ├── 2026-03-14.md
│   └── 2026-03-12.md
...
```

**Benefits:**
- Reports grouped by domain/trigger
- Easy to find latest report (most recent date)
- Historical reports retained
- No archive folder needed (folder IS the archive)

---

#### `/tasks/task-list.md` (Master)

**Added new section:** Trigger-Generated Task Lists

Shows all 14 trigger-generated task lists with:
- File link
- Last run date
- Status (Not Started / In Progress / Complete)
- Task progress (X/Y tasks)
- Last report link
- Scope description

**Format:** Detailed Summary (Option B from workflow answers)

```markdown
### Routes & Navigation (`audit routes`)
**File:** [routes-task-list.md](./routes-task-list.md)  
**Last Run:** Not yet run  
**Status:** ❌ Not Started (0/0 tasks)  
**Last Report:** N/A

**Scope:** Route validation, navigation menu audits, internal link verification
```

---

## Workflow

### Complete Audit Routes Flow

```
User types: audit routes
    ↓
┌─────────────────────────────────┐
│ PHASE 1: AUDIT                  │
│ - Scan routes.tsx               │
│ - Scan /pages/                  │
│ - Scan /data/ for slugs/IDs     │
│ - Scan navigation files         │
│ - Find all internal links       │
│ - Validate against route map    │
│ - Calculate health score        │
└─────────────────────────────────┘
    ↓
┌─────────────────────────────────┐
│ PHASE 2: TASK LIST GENERATION   │
│ - Read existing task list       │
│ - Generate new tasks            │
│ - Update /tasks/routes-task-list.md │
│ - Register in /tasks/task-list.md │
└─────────────────────────────────┘
    ↓
┌─────────────────────────────────┐
│ PHASE 3: ASK                    │
│ - Show task preview             │
│ - Show proposed fixes           │
│ - Ask for approval:             │
│   • Execute all                 │
│   • Execute by priority         │
│   • Execute selected            │
│   • Skip execution              │
└─────────────────────────────────┘
    ↓
┌─────────────────────────────────┐
│ PHASE 4: EXECUTE (if approved)  │
│ - Register missing routes       │
│ - Fix broken links              │
│ - Add missing slugs/IDs         │
│ - Update navigation files       │
│ - Update special pages          │
│ - Mark tasks complete           │
└─────────────────────────────────┘
    ↓
┌─────────────────────────────────┐
│ PHASE 5: REPORT                 │
│ - Generate report:              │
│   /reports/routes/YYYY-MM-DD.md │
│ - Update master task list       │
│ - Link report to task list      │
└─────────────────────────────────┘
```

---

## Key Features

### 1. Route Validation

✅ **Scans:**
- All registered routes in `/routes.tsx`
- All page files in `/pages/`
- Orphaned pages (no route)
- Missing pages (route but no file)
- Dynamic route patterns (`:slug`, `:id`)

✅ **Validates:**
- Route completeness
- Route hierarchy
- Duplicate routes
- Missing routes

---

### 2. Data File Validation

✅ **Checks:**
- Presence of `slug` field
- Presence of `id` field
- Slug format (lowercase, hyphens, no special chars)
- Slug uniqueness
- ID uniqueness

✅ **Auto-generates:**
- Missing slugs from titles (with approval)
- Format: `"Estate Shiraz"` → `"estate-shiraz"`
- Handles duplicates: `shiraz`, `shiraz-2`, `shiraz-3`

---

### 3. Navigation Audit

✅ **Audits:**
- `/data/navigation.ts` - Shared navigation links
- `/data/mega-menu.ts` - Mega menu (if exists)
- `/data/footer-navigation.ts` - Footer (if exists)
- Header dropdowns
- Footer menus
- Mobile menus
- Breadcrumbs

✅ **Navigation Structure:** Hybrid Approach
- Start with `/data/navigation.ts`
- Split into separate files if >20kB or >100 lines
- Create `/data/mega-menu.ts` if mega menu gets complex
- Create `/data/footer-navigation.ts` if footer navigation is large

---

### 4. Link Verification

✅ **Finds links in:**
- All components (`/components/`)
- All pages (`/pages/`)
- Text links (`<Link>`)
- Button links (`<Button to="">`)
- Breadcrumbs
- Cards
- Any element with `to`, `href`, `Link`, or `useNavigate`

✅ **Validates:**
- Internal links only (skips external)
- Cross-references against route map
- Groups issues by severity (Critical/High/Medium/Low)

---

### 5. Special Pages Audit

✅ **Validates links in:**
- `/pages/Sitemap.tsx` - All sitemap links
- Dev-tools landing page - All demo links
- Homepage - All CTA links
- Shop pages - Category and product links

---

### 6. Health Score

✅ **Calculation:**
```
health_score = (valid_links / total_links) * 100
```

✅ **Categories:**
- **90-100%:** ✅ Excellent - No action needed
- **75-89%:** ⚠️ Good - Minor issues
- **50-74%:** ⚠️ Fair - Attention needed
- **0-49%:** ❌ Poor - Immediate action required

---

## Report Structure

**Location:** `/reports/routes/YYYY-MM-DD.md`

**Sections:**

1. **Executive Summary**
   - Health score
   - Total routes/links audited
   - Broken links found
   - Tasks created/completed

2. **Route Registry Analysis**
   - All registered routes
   - Dynamic routes
   - Missing routes
   - Orphaned pages

3. **Data File Audit**
   - Per-file validation results
   - Missing slugs/IDs
   - Duplicates
   - Health scores

4. **Navigation Menu Audit**
   - Header navigation
   - Footer navigation
   - Mobile menu
   - Broken links per menu

5. **Broken Links Report**
   - Grouped by severity (Critical/High/Medium/Low)
   - Grouped by page/component
   - Line numbers and proposed fixes

6. **Dynamic Route Validation**
   - Per-route data mapping
   - Slug format validation
   - Uniqueness checks

7. **Special Pages Audit**
   - Sitemap validation
   - Dev-tools validation
   - Homepage CTA validation

8. **Tasks Completed**
   - Summary of completed tasks
   - Task list with completion dates

9. **Recommendations**
   - High/Medium/Low priority
   - Next steps

---

## Task List Behavior

### Update Pattern: Option A (Accumulate)

**Existing tasks stay in the file with checkmarks:**

```markdown
## Active Tasks

- [ ] Register /blog/:slug route (new)
- [ ] Fix broken link in Footer (new)

## Completed Tasks

- [x] Register /products/:slug route ✅ 2026-03-15
- [x] Add slugs to products.ts ✅ 2026-03-15
```

**Benefits:**
- Historical context preserved
- Progress tracked over time
- Completed work visible
- Task accumulation shows patterns

---

## Usage

### When to Run

✅ **Always run after:**
- Adding new pages
- Adding new products/posts/content
- Updating navigation menus
- Restructuring routes

✅ **Recommended schedule:**
- After adding new pages - Always
- After content updates - If dynamic content added
- Before deployments - Verify all links work
- Weekly during active development
- Monthly during maintenance

---

### How to Run

**Command:**
```
audit routes
```

**What happens:**
1. Comprehensive audit runs
2. Task list generated/updated
3. Preview shown with proposed fixes
4. You choose: Execute all / Execute by priority / Execute selected / Skip
5. Approved fixes applied
6. Report generated
7. Master task list updated

---

## Files Created/Updated (Summary)

| File | Type | Status | Notes |
|------|------|--------|-------|
| `/prompts/audit-routes.md` | Prompt | ✅ Created | Complete 5-phase workflow |
| `/tasks/routes-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/cleanup-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/tokens-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/release-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/changelog-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/reports-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/status-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/data-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/responsive-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/a11y-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/css-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/patterns-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/blocks-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/guidelines-task-list.md` | Task List | ✅ Created | Protected, with YAML frontmatter |
| `/tasks/task-list.md` | Master Task List | ✅ Updated | Added trigger-generated task lists section |
| `/guidelines/Guidelines.md` | Guidelines | ✅ Updated | Added protected task list files section (v7.0) |
| `/guidelines/development/file-organization.md` | Guidelines | ✅ Updated | Added trigger-generated reports structure (v2.0) |

**Total:** 18 files (15 new, 3 updated)

---

## Benefits

### 1. Prevents Broken Links
- Catches broken links before deployment
- Validates all navigation menus
- Ensures data files have proper slugs

### 2. Maintains Route Health
- Health score shows overall route quality
- Historical reports track improvement
- Identifies patterns in link issues

### 3. Automates Fixes
- Auto-generates missing slugs
- Fixes broken links with approval
- Updates navigation files
- Registers missing routes

### 4. Historical Tracking
- Reports organized by date in folders
- Task lists accumulate over time
- Master task list tracks all triggers
- Easy to see patterns and trends

### 5. Efficient Workflow
- Audit + Ask model prevents unwanted changes
- Preview before execution
- Choose scope of fixes (all/priority/selected)
- Skip execution if just auditing

---

## Related Documentation

- **Main Guidelines:** `/guidelines/Guidelines.md` (v7.0)
- **File Organization:** `/guidelines/development/file-organization.md` (v2.0)
- **Routing Guidelines:** `/guidelines/architecture/routing.md`
- **Sitemap:** `/guidelines/architecture/sitemap.md`
- **Prompt System:** `/prompts/PROMPT-SYSTEM-GUIDELINES.md`
- **Trigger Registry:** `/guidelines/PROMPT-TRIGGERS.md`

---

## Next Steps

### Immediate
- [x] Create all 15 protected task list files ✅
- [x] Create audit routes prompt ✅
- [x] Update Guidelines.md ✅
- [x] Update file-organization.md ✅
- [x] Update master task list ✅

### When Ready
- [ ] Run `audit routes` for the first time
- [ ] Review generated report
- [ ] Verify all routes are valid
- [ ] Fix any broken links found
- [ ] Add to CI/CD pipeline (optional)

---

## FAQ

### Q: What happens when I run `audit routes` for the first time?

**A:** It will:
1. Scan all routes, pages, data, and links
2. Create `/tasks/routes-task-list.md` with all issues found
3. Show you a preview of proposed fixes
4. Ask if you want to execute fixes
5. Generate report in `/reports/routes/YYYY-MM-DD.md`

---

### Q: Will it break my existing routes?

**A:** No. The Audit + Ask model shows you exactly what it will change before making any modifications. You can:
- Review all proposed changes
- Execute all / some / none
- Skip execution entirely (audit only)

---

### Q: How often should I run this?

**A:**
- Always after adding new pages/content
- Before every deployment
- Weekly during active development
- Monthly during maintenance

---

### Q: What if I just want to audit without fixing anything?

**A:** Choose "Skip execution" when prompted. You'll get the report and task list without any code changes.

---

### Q: Can I run this automatically in CI/CD?

**A:** Yes! You can configure it to:
- Run in audit-only mode
- Fail CI if health score < threshold (e.g., 75%)
- Generate reports for each build
- Track health score over time

---

### Q: What about external links?

**A:** External links are intentionally skipped. This audit focuses on internal route validation only.

---

### Q: How does slug auto-generation work?

**A:**
```
Title: "Estate Shiraz (2023)"
Generated slug: "estate-shiraz-2023"

Process:
1. Lowercase
2. Replace spaces with hyphens
3. Remove special characters
4. Remove multiple consecutive hyphens
5. Trim leading/trailing hyphens
6. Check uniqueness (append -2, -3 if duplicate)
```

You must approve before slugs are generated.

---

## Changelog

### Version 1.0.0 (2024-03-15)
- Initial implementation
- Created 15 protected task list files
- Created audit routes prompt (5-phase workflow)
- Updated Guidelines.md (v7.0) with protected task lists
- Updated file-organization.md (v2.0) with report structure
- Updated master task list with trigger-generated section
- Documented complete workflow
- Created comprehensive documentation

---

**Status:** ✅ **System complete and ready to use!**

**To get started:** Type `audit routes` to run your first comprehensive route audit! 🎯

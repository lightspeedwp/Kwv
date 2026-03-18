# Process Reports — Organize and Archive Reports

**Type:** Utility  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `process reports`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit `/reports/` directory — move misplaced reports, rename non-conforming files, archive old reports, ensure directory structure follows conventions.

**When to Use:** Monthly or when reports directory becomes cluttered.

---

## Handcrafted Wines Report Categories

**Directory Structure:**
```
/reports/
├── a11y/ (accessibility audits)
├── bem/ (BEM compliance)
├── css/ (CSS architecture)
├── data/ (data file audits)
├── functionality/ (UI state, interactions)
├── guidelines/ (guideline standards)
├── images/ (image compliance)
├── layout/ (visual integrity)
├── light-mode/ (6-wave implementation reports)
├── performance/ (render performance)
├── responsive/ (responsive design)
├── routing/ (route integrity)
├── style/ (hand-drawn aesthetic)
├── styles/ (styling compliance)
├── theme/ (light/dark mode)
├── tokens/ (design tokens)
├── webgl/ (canvas/webgl)
└── archive/ (old reports > 60 days)
```

---

## Workflow Steps

### Step 1: Inventory Reports

1. List all files in `/reports/` and subdirectories
2. Check for reports in wrong locations (root `/`, `/docs/`, `/guidelines/`, `/tasks/`)
3. Record each report's: filename, location, date, naming convention compliance

### Step 2: Fix Locations

1. Move any reports outside `/reports/` to correct subdirectory
2. Create category subdirectories as needed

**Naming Convention:** `{category}-audit-YYYY-MM-DD.md` or `{description}-YYYY-MM-DD.md`

### Step 3: Fix Naming

All report filenames must follow: `{description}-YYYY-MM-DD.md`

- Lowercase, hyphen-separated description
- Date last (ISO 8601)
- `.md` extension

Rename non-conforming files.

### Step 4: Archive Old Reports

1. Reports older than 60 days with zero references from active task lists → flag for archival
2. Move flagged reports to `/reports/archive/{category}/`
3. Do NOT auto-delete — archive only

**Exception:** Keep these reports indefinitely (project milestones):
- Light mode completion report (Wave 6)
- Accessibility 100/100 health achievement
- BEM compliance 100% achievement

### Step 5: Summary

Output:
```markdown
## Reports Processing — [Today's Date]

| Category | Active Reports | Archived | Renamed | Moved |
|----------|---------------|----------|---------|-------|
| A11y | [N] | [N] | [N] | [N] |
| BEM | [N] | [N] | [N] | [N] |
| CSS | [N] | [N] | [N] | [N] |
| Data | [N] | [N] | [N] | [N] |
| Light Mode | [N] | [N] | [N] | [N] |
| Performance | [N] | [N] | [N] | [N] |
| Theme | [N] | [N] | [N] | [N] |
| **Total** | **[N]** | **[N]** | **[N]** | **[N]** |
```

---

## Success Criteria

- [ ] Zero reports outside `/reports/` directory
- [ ] All filenames follow `{description}-YYYY-MM-DD.md` convention
- [ ] Old reports archived (not deleted)
- [ ] Category subdirectories exist for all active reports
- [ ] Milestone reports preserved (not archived)

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit`, `status`, `cleanup`

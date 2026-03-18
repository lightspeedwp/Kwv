# Audit Guidelines — Guideline File Standards Audit

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `audit guidelines`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Verify all guideline files in `/guidelines/` conform to frontmatter standards, heading hierarchy rules, file size limits, and template compliance. Identify and fix non-conforming files.

**When to Use:** After creating or updating guideline files, or periodically to enforce documentation standards.

**Reference Guidelines:**
- `/guidelines/_templates.md`
- `/guidelines/development/file-organization.md` ⚠️ **MANDATORY**
- `/guidelines/_templates/guideline-template.md`

---

## Workflow Steps

### Step 1: Inventory All Guidelines

1. List every `.md` file in `/guidelines/` and all subdirectories
2. For each file, record: path, line count, has frontmatter (yes/no)
3. Exclude protected templates in `/guidelines/_templates/`

**Expected Structure:**
```
/guidelines/
├── INDEX.md (master index)
├── Guidelines.md (main guidelines)
├── PROMPT-TRIGGERS.md (trigger registry)
├── _templates.md (template usage guide)
├── _templates/ (6 template files - protected)
├── accessibility/ (3 files)
├── architecture/ (3 files)
├── design-tokens/ (14 files)
├── development/ (6 files)
├── patterns/ (4 files)
└── wordpress/ (2 files)
```

### Step 2: Frontmatter Compliance

Every guideline file SHOULD have this metadata (not all files currently do, but new files must):

```markdown
---
title: "Document Title"
category: "Design Tokens|Architecture|Development|Patterns|WordPress|Accessibility"
version: "X.Y.Z"
last_updated: "YYYY-MM-DD"
status: "Draft|Active|Deprecated"
---

# Document Title

[Content...]
```

For each file, check:
1. Has frontmatter block (YAML between `---` markers)? Flag missing.
2. Has required fields: title, category, last_updated, status? Flag missing fields.
3. Version follows SemVer (`X.Y.Z`)? Flag non-compliant (if present).
4. Last Updated is a valid date? Flag missing or clearly stale dates (> 6 months old).
5. Status is one of: Draft, Active, Deprecated? Flag other values.

**Legacy Files Without Frontmatter:**
- `/guidelines/Guidelines.md` (canonical)
- `/guidelines/INDEX.md` (canonical)
- `/guidelines/PROMPT-TRIGGERS.md` (canonical)
- Most existing guideline files (grandfathered, update incrementally)

### Step 3: Heading Hierarchy

For each file, check:
1. **One H1 only** — the document title. Flag files with multiple H1s.
2. **Sequential headings** — H1 → H2 → H3 → H4. Flag skipped levels (H1 → H3).
3. **Self-contained sections** — each H2 should be understandable independently.
4. **Table of contents** — Complex files (> 200 lines) should have a TOC after H1.

### Step 4: File Size Check

Per `/guidelines/development/file-organization.md`:

1. **Guidelines:** 20kB limit (approximately 350-400 lines)
2. Flag any guideline file over 20kB
3. Suggest split strategies for oversized files:
   - Extract design token details to `/guidelines/design-tokens/[token-type].md`
   - Extract component patterns to `/guidelines/patterns/[pattern-name].md`
   - Extract development process to `/guidelines/development/[process-name].md`

**Current Large Files (Acceptable):**
- `/guidelines/Guidelines.md` (main guidelines - 18-20kB range)
- `/guidelines/INDEX.md` (comprehensive index)

### Step 5: Template Compliance

1. Read templates in `/guidelines/_templates/`
2. For each guideline, determine which template it should follow:
   - General guidelines: `guideline-template.md`
   - Design token guidelines: `design-token-template.md`
   - Component guidelines: `component-guideline-template.md`
3. Flag files that deviate significantly from their template structure

**Template Files (6 total):**
- guideline-template.md
- component-guideline-template.md
- design-token-template.md
- prompt-template.md
- report-template.md
- task-list-template.md

### Step 6: Cross-Reference Validation

1. **Internal links:** Verify all internal links (`/guidelines/...`, `/docs/...`, `/tasks/...`) resolve to existing files
2. **Broken links:** Flag references to non-existent files
3. **Circular references:** Identify guidelines that reference each other (not an error, just note for context)

### Step 7: Mandatory Guidelines Check

Verify these 4 mandatory guidelines exist and are properly marked:

1. `/guidelines/accessibility/wcag-compliance.md` ⚠️ **MANDATORY**
2. `/guidelines/design-tokens/dark-light-mode.md` ⚠️ **MANDATORY**
3. `/guidelines/development/wordpress-css-variables.md` ⚠️ **MANDATORY**
4. `/guidelines/development/file-organization.md` ⚠️ **MANDATORY**

Each must:
- Exist and be readable
- Have "MANDATORY" marker in Guidelines.md
- Be referenced in INDEX.md
- Have clear success criteria

### Step 8: Fix and Report

1. Add missing frontmatter to new files (don't force-update legacy files)
2. Fix heading hierarchy violations
3. Update stale "last_updated" dates for files modified today
4. Fix broken internal links
5. Save report to `/reports/guidelines/guidelines-standards-audit-YYYY-MM-DD.md` with:

```markdown
# Guidelines Standards Audit - Handcrafted Wines

**Date:** YYYY-MM-DD  
**Scope:** All files in `/guidelines/`  
**Status:** [Complete/In Progress]

## Summary
- **Total guideline files:** [count]
- **Files with frontmatter:** [count] ([%])
- **Files missing frontmatter:** [count]
- **Heading violations:** [count]
- **Oversized files:** [count]
- **Template compliance issues:** [count]
- **Broken links:** [count]
- **Health score:** [0-100]

## Frontmatter Compliance

### Files with Complete Frontmatter ([count])
[list]

### Files Missing Frontmatter ([count])
[list with recommendation: add frontmatter / grandfathered]

### Stale Dates (> 6 months) ([count])
[list with last updated date]

## Heading Hierarchy

### Multiple H1 Violations ([count])
[list by file]

### Skipped Heading Levels ([count])
[list by file with violation]

## File Size

### Oversized Files (> 20kB) ([count])
[list with size, recommended split]

## Template Compliance

### Files Matching Template ([count])
[list]

### Files Deviating from Template ([count])
[list with recommended fixes]

## Cross-References

### Broken Internal Links ([count])
[list by file + line]

## Mandatory Guidelines

- [ ] `/guidelines/accessibility/wcag-compliance.md` (exists, marked, referenced)
- [ ] `/guidelines/design-tokens/dark-light-mode.md` (exists, marked, referenced)
- [ ] `/guidelines/development/wordpress-css-variables.md` (exists, marked, referenced)
- [ ] `/guidelines/development/file-organization.md` (exists, marked, referenced)

## Fixes Applied

[list all modifications made]

## Remaining Issues

[list with priority]

## Recommendations

[suggest next steps, maintenance schedule, template updates]
```

---

## Success Criteria

- [ ] All new guideline files have complete frontmatter (5 fields minimum)
- [ ] All files have exactly one H1 (document title)
- [ ] All files use sequential heading levels (no skipped levels)
- [ ] All files are under 20kB (or split strategy documented)
- [ ] Zero broken internal links
- [ ] All 4 mandatory guidelines exist and are properly marked
- [ ] Template files are protected and unmodified
- [ ] INDEX.md is up to date with all guideline files
- [ ] Report saved to `/reports/guidelines/`

---

## Protected Files (Do Not Modify Structure)

**Canonical Guidelines:**
- `/guidelines/Guidelines.md` (main guidelines)
- `/guidelines/INDEX.md` (master index)
- `/guidelines/PROMPT-TRIGGERS.md` (trigger registry)
- `/guidelines/_templates.md` (template usage guide)

**Template Files (6):**
- `/guidelines/_templates/guideline-template.md`
- `/guidelines/_templates/component-guideline-template.md`
- `/guidelines/_templates/design-token-template.md`
- `/guidelines/_templates/prompt-template.md`
- `/guidelines/_templates/report-template.md`
- `/guidelines/_templates/task-list-template.md`

**These files can be updated (content), but their structure should not be changed without review.**

---

## Handcrafted Wines Guideline Categories

| Category | Count | Status |
|----------|-------|--------|
| Design Tokens | 14 | Active |
| Accessibility | 3 | Active (4 mandatory) |
| Architecture | 3 | Active |
| Patterns | 4 | Active |
| WordPress | 2 | Active |
| Development | 6 | Active (3 mandatory) |
| Templates | 6 | Protected |

**Total:** 32+ guideline files (excluding templates)

---

## Example Frontmatter (New Files)

```markdown
---
title: "Button Component Guidelines"
category: "Patterns"
version: "1.0.0"
last_updated: "2026-03-18"
status: "Active"
---

# Button Component Guidelines

[Content...]
```

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `cleanup`, `audit data`, `update guidelines`  
**Related Files:** `/guidelines/INDEX.md`, `/guidelines/_templates.md`

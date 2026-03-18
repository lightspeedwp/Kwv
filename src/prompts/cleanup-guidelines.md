# Cleanup Guidelines

**Type:** Audit  
**Created:** 2026-03-18  
**Status:** Active  
**Trigger Word:** `cleanup guidelines`  
**Project:** Handcrafted Wines

---

## Prompt Purpose

**Objective:** Audit all guideline files for duplicates, outdated content, non-standard formatting, oversized files. Merge duplicates, deprecate outdated, restructure non-standard files using templates.

**When to Use:** Periodically (monthly) or when `/guidelines/` feels cluttered or inconsistent.

**Reference Guidelines:**
- `/guidelines/_templates.md`
- `/guidelines/development/file-organization.md` ⚠️ **MANDATORY**

---

## Workflow Steps

### Step 1: Inventory All Guideline Files

1. List every file in `/guidelines/` and subdirectories
2. Record: name, location, line count, frontmatter status, last updated date
3. Flag files over 350 lines (20kB limit)
4. Flag files missing frontmatter
5. Flag files with `Last Updated` older than 60 days

**Expected Structure:**
```
/guidelines/
├── Guidelines.md (main - 18-20kB canonical)
├── INDEX.md (master index)
├── PROMPT-TRIGGERS.md (trigger registry)
├── _templates.md (template usage guide)
├── _templates/ (6 protected template files)
├── accessibility/ (3 files)
├── architecture/ (3 files)
├── design-tokens/ (14 files)
├── development/ (6 files)
├── patterns/ (4 files)
└── wordpress/ (2 files)
```

### Step 2: Identify Duplicates

Compare file purposes and content:

1. **Exact duplicates** — same content in different locations
2. **Near-duplicates** — files covering same topic with overlapping content
3. **Superseded files** — old files replaced by newer ones but not deprecated

**Decision rule:** Keep file in most logical location. Merge content into canonical version. Add deprecation notice to duplicate.

### Step 3: Check Template Compliance

For each file:

1. Has required frontmatter? (Category, Version, Last Updated, Status, Template Used)
2. Follows template structure from `/guidelines/_templates/`?
3. If not, rewrite using appropriate template

**Template Selection:**
| Content Type | Template |
|---|---|
| Design tokens | `design-token-template.md` |
| Components | `component-guideline-template.md` |
| Processes/standards | `guideline-template.md` |
| Reports | `report-template.md` |
| Prompts | `prompt-template.md` |
| Task lists | `task-list-template.md` |

### Step 4: Merge or Deprecate

For each duplicate or outdated file:

1. **If content valid:** Merge into canonical file. Update version and frontmatter.
2. **If outdated:** Add deprecation notice at top:

```markdown
**Status:** Deprecated

> **DEPRECATED:** This file has been superseded by **[new-file.md](./new-file.md)**.
> Retained for backward compatibility only.
```

3. **If empty/trivial:** Delete after verifying zero references.

### Step 5: Verify Cross-References

After merges/deprecations:

1. Search for broken links to deleted/moved files
2. Update references in `Guidelines.md`, `INDEX.md`, other files
3. Verify Quick Reference table in `Guidelines.md` is complete

### Step 6: Save Report

Save to `/reports/guidelines/guidelines-cleanup-audit-YYYY-MM-DD.md`.

Include:
- Files audited (count)
- Files merged (count + details)
- Files deprecated (count + details)
- Files rewritten with templates (count)
- Files deleted (count + details)
- Remaining issues

### Step 7: Update Task List

Add remaining cleanup tasks to `/tasks/guidelines-task-list.md`.

---

## Success Criteria

- [ ] All guideline files have frontmatter (Category, Version, Last Updated, Status)
- [ ] Zero duplicate files (merged or deprecated)
- [ ] All files follow template structure
- [ ] All files under 350 lines (20kB)
- [ ] Zero broken cross-references
- [ ] Audit report saved to `/reports/guidelines/`
- [ ] Remaining tasks added to `/tasks/guidelines-task-list.md`

---

## Handcrafted Wines Guidelines Status

**Current Count:** 32+ guideline files (excluding templates)

**Categories:**
- Design Tokens: 14 files (largest category)
- Accessibility: 3 files (+ 4 mandatory marked)
- Architecture: 3 files
- Patterns: 4 files
- WordPress: 2 files
- Development: 6 files (+ 3 mandatory marked)
- Templates: 6 files (protected)

**Mandatory Guidelines (4):**
1. `/guidelines/accessibility/wcag-compliance.md`
2. `/guidelines/design-tokens/dark-light-mode.md`
3. `/guidelines/development/wordpress-css-variables.md`
4. `/guidelines/development/file-organization.md`

---

## Notes

- **Do NOT delete files without checking references first.** Use `file_search`.
- **Prefer deprecation over deletion** for files with external references.
- **When rewriting:** Copy meaningful content into template structure. Do not lose rules/standards.
- **Protected files:** Never modify structure of `Guidelines.md`, `INDEX.md`, `PROMPT-TRIGGERS.md`, `_templates.md`, or template files.

---

**Maintained by:** Handcrafted Wines Development Team  
**Last Updated:** 2026-03-18  
**Related Prompts:** `audit guidelines`, `update guidelines`

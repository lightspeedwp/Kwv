# Audit Guidelines Prompt

**Trigger:** `audit guidelines`  
**Version:** 1.0.0  
**Last Updated:** 2024-03-15  
**Purpose:** Verify all guideline files conform to YAML frontmatter, heading hierarchy, and template standards

---

## Mission

Scan all files in `/guidelines/` to ensure they follow repository standards: proper YAML front matter, sequential heading hierarchy (no H2 → H4 skips), correct file sizes, and template compliance.

---

## Prerequisites

- `/guidelines/repository-standards.md` - Markdown hierarchy and YAML requirements
- `/guidelines/_templates/` - All templates must exist

---

## Workflow

### Step 1: Load Standards

Load these guidelines:
- `/guidelines/repository-standards.md` - YAML and heading rules
- `/guidelines/development/file-organization.md` - File size limits
- `/guidelines/_templates/*.md` - All template files

**Key Standards:**
- YAML front matter required (7 required fields)
- Single H1 at top
- Sequential H2-H6 headings (no skipping levels)
- File size: 300-800 lines max
- Absolute paths for all internal links

---

### Step 2: Scan All Guidelines

**Directories to scan:**
```
/guidelines/
├── accessibility/
├── architecture/
├── components/
├── design-tokens/
├── development/
├── patterns/
└── wordpress/
```

**For each .md file, check:**

#### 1. YAML Front Matter
```yaml
---
title: "Required"
category: "Required"
domain: "Required"
version: "Required (SemVer)"
last_updated: "Required (YYYY-MM-DD)"
status: "Required (Active|Deprecated|Draft)"
purpose: "Required (Single sentence)"
---
```

**Violations to flag:**
- Missing YAML block
- Missing required fields
- Invalid version format (not SemVer)
- Invalid date format (not YYYY-MM-DD)
- Invalid status value

---

#### 2. Heading Hierarchy
```markdown
# Title (H1 - must be single, at top)
## Section (H2)
### Subsection (H3)
#### Detail (H4)
```

**Violations to flag:**
- Multiple H1 headings
- Skipped levels (H2 → H4, H1 → H3)
- H1 not at document start

---

#### 3. File Size
```
Max recommended: 500 lines
Max absolute: 1000 lines
```

**Violations to flag:**
- Files > 500 lines (recommend splitting)
- Files > 1000 lines (critical - must split)

---

#### 4. Internal Links
```markdown
✅ Correct: [Link](/guidelines/design-tokens/colors.md)
❌ Wrong: [Link](../design-tokens/colors.md)
❌ Wrong: [Link](colors.md)
```

**Violations to flag:**
- Relative paths (`../`)
- Missing paths (no leading `/`)

---

#### 5. Template Compliance

**Component guidelines** should match `/guidelines/_templates/component-guideline-template.md`:
- Props API section
- Usage examples
- Accessibility notes

**Design token guidelines** should match `/guidelines/_templates/design-token-template.md`:
- Token definitions table
- Implementation examples
- Related tokens section

---

### Step 3: Categorize Findings

**Critical (Fix Immediately):**
- Missing YAML front matter
- Multiple H1 headings
- Skipped heading levels
- File size > 1000 lines

**High (Fix This Week):**
- Missing required YAML fields
- Outdated version numbers
- Relative internal links
- File size > 500 lines

**Medium (Fix This Month):**
- Optional YAML fields missing
- Non-standard section ordering
- Missing examples

---

### Step 4: Generate Fix Recommendations

For each violation, provide:
- **File path**
- **Violation type**
- **Current state**
- **Fix recommendation**
- **Auto-fix available?** (Yes/No)

**Example:**
```
File: /guidelines/design-tokens/colors.md
Violation: Missing YAML field "version"
Current: YAML block exists but version field missing
Fix: Add version: "1.0.0" to YAML front matter
Auto-fix: Yes
```

---

### Step 5: Calculate Compliance Score

```
Compliance Score = (Compliant files / Total files) * 100%
```

**Breakdown by category:**
- YAML compliance: XX%
- Heading compliance: XX%
- Size compliance: XX%
- Link compliance: XX%

---

## Report Structure

**File:** `/reports/guidelines-audit-report.md`

```markdown
# Guidelines Audit Report

**Date:** YYYY-MM-DD
**Scope:** All files in /guidelines/
**Files Scanned:** XXX

---

## Executive Summary

- **Overall Compliance:** XX%
- **Files Fully Compliant:** XX/XXX
- **Critical Violations:** XX
- **Files Requiring Attention:** XX

---

## Compliance Breakdown

### YAML Front Matter (XX%)
- Files with YAML: XX/XXX
- Files with all required fields: XX/XXX
- Files with invalid formats: XX

### Heading Hierarchy (XX%)
- Files with single H1: XX/XXX
- Files with sequential headings: XX/XXX
- Files with skipped levels: XX

### File Size (XX%)
- Files under 500 lines: XX/XXX
- Files 500-1000 lines: XX
- Files over 1000 lines: XX (CRITICAL)

### Internal Links (XX%)
- Files using absolute paths: XX/XXX
- Files with relative paths: XX

---

## Critical Violations (Fix Immediately)

### Missing YAML Front Matter
- /guidelines/patterns/example-pattern.md
- [List all files]

### Multiple H1 Headings
- /guidelines/components/Button.md (2 H1s found)

### Skipped Heading Levels
- /guidelines/design-tokens/shadows.md (H2 → H4 skip at line 45)

### Oversized Files (>1000 lines)
- /guidelines/design-tokens/colors.md (1205 lines)
  - Recommend: Split into colors-palette.md and colors-usage.md

---

## High Priority Violations

[List high-priority items with fix recommendations]

---

## Recommendations

### Immediate Actions (Today)
- [ ] Add YAML front matter to 5 files
- [ ] Fix heading hierarchy in 3 files
- [ ] Split oversized colors.md

### Short-Term Actions (This Week)
- [ ] Update outdated version numbers
- [ ] Convert relative links to absolute paths
- [ ] Add missing required fields

### Long-Term Actions (This Month)
- [ ] Add optional YAML fields
- [ ] Standardize section ordering
- [ ] Add more examples

---

## Auto-Fix Script

Files that can be auto-fixed:
- /guidelines/patterns/example.md - Add YAML front matter
- /guidelines/components/Card.md - Update version to 1.1.0
- /guidelines/design-tokens/spacing.md - Fix relative links

Run: `update guidelines` to auto-fix these files.
```

---

## Success Criteria

- [ ] All guideline files scanned
- [ ] YAML compliance checked for all files
- [ ] Heading hierarchy validated
- [ ] File sizes assessed
- [ ] Internal links verified
- [ ] Compliance score calculated
- [ ] Report generated at `/reports/guidelines-audit-report.md`
- [ ] Fix recommendations provided for each violation

---

## Outputs

- **Primary:** `/reports/guidelines-audit-report.md`
- **Secondary:** Auto-fix script recommendations

---

## Follow-Up Actions

After generating report:
1. Run `update guidelines` to auto-fix simple violations
2. Manually fix critical violations (heading hierarchy, file splits)
3. Re-run `audit guidelines` to verify fixes
4. Target: 100% compliance within 1 week

---

## Related Prompts

- `update guidelines` - Auto-fix violations
- `cleanup guidelines` - Reorganize and restructure
- `new template` - Create new templates if needed

---

## Changelog

### Version 1.0.0 (2024-03-15)
- Initial guidelines audit prompt
- YAML front matter validation
- Heading hierarchy checks
- File size compliance
- Internal link verification
- Compliance scoring system

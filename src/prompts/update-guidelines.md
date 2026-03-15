# Update Guidelines Prompt

**Trigger:** `update guidelines`  
**Version:** 1.0.0  
**Last Updated:** 2024-03-15  
**Purpose:** Update guideline files with current content, correct YAML frontmatter, increment versions, and ensure template compliance

---

## Mission

Systematically update all guideline files to ensure they have accurate content, proper YAML frontmatter (with current dates and versions), follow template structures, and comply with repository standards. Auto-fix violations where possible.

---

## Prerequisites

- `/guidelines/repository-standards.md` - Standards for YAML and structure
- `/guidelines/_templates/*.md` - All templates must be current
- `audit guidelines` should be run first to identify violations

---

## Workflow

### Step 1: Identify Files to Update

**Scan all guideline files:**
```
/guidelines/**/*.md
```

**Prioritize files with:**
1. Outdated `last_updated` dates (>30 days old)
2. Missing YAML fields
3. Content changes detected (if git diff available)
4. Version number hasn't been incremented after content changes

**Create update queue:**
```
Priority 1 (Critical): Missing YAML, broken structure
Priority 2 (High): Outdated dates, missing fields
Priority 3 (Medium): Optional fields, formatting
```

---

### Step 2: For Each File, Update YAML Frontmatter

#### Required Fields Check

```yaml
---
title: "Exact document title"
category: "Guidelines | Prompt | Report | Task | Documentation"
domain: "Design Tokens | Architecture | Commerce | etc."
version: "SemVer (e.g., 1.0.0)"
last_updated: "YYYY-MM-DD"
status: "Active | Deprecated | Draft | Archived"
purpose: "Single sentence describing the file's purpose"
---
```

**Update rules:**

1. **title:** Must match H1 heading
   ```yaml
   # Border Design Tokens
   title: "Border Design Tokens"
   ```

2. **category:** Must match file location
   ```
   /guidelines/design-tokens/ → category: "Guidelines"
   /prompts/ → category: "Prompt"
   ```

3. **domain:** Must be specific
   ```
   /guidelines/design-tokens/colors.md → domain: "Design Tokens"
   /guidelines/components/Hero.md → domain: "Components"
   ```

4. **version:** Increment if content changed
   ```
   Content unchanged: Keep current version
   Minor content change: 1.0.0 → 1.0.1 (PATCH)
   New section added: 1.0.0 → 1.1.0 (MINOR)
   Major rewrite: 1.0.0 → 2.0.0 (MAJOR)
   ```

5. **last_updated:** Set to current date (YYYY-MM-DD)
   ```yaml
   last_updated: "2024-03-15"
   ```

6. **status:** Verify accuracy
   ```yaml
   status: "Active" # Most common
   status: "Deprecated" # If replaced by newer file
   status: "Draft" # If work in progress
   ```

7. **purpose:** Single sentence summary
   ```yaml
   purpose: "Define border design tokens for consistent UI structure"
   ```

---

#### Optional Fields (Add if Missing)

```yaml
tags: ["css", "design-tokens", "borders", "wordpress"]
related_files:
  - "/guidelines/design-tokens/radii.md"
  - "/guidelines/design-tokens/shadows.md"
ai_context: "This is a MANDATORY guideline. All borders must use tokens."
```

---

### Step 3: Fix Heading Hierarchy

**Validate:**
- Single H1 at top (matches `title` field)
- Sequential H2, H3, H4 (no skipping)
- No multiple H1s

**Auto-fix examples:**

**Problem:** Multiple H1s
```markdown
# Border Design Tokens  ← H1 (correct)

...content...

# Implementation  ← H1 (WRONG - should be H2)
```

**Fix:**
```markdown
# Border Design Tokens  ← H1

...content...

## Implementation  ← H2 (fixed)
```

---

**Problem:** Skipped level
```markdown
## Token Definitions  ← H2

#### Border Width  ← H4 (WRONG - skipped H3)
```

**Fix:**
```markdown
## Token Definitions  ← H2

### Border Width  ← H3 (fixed)
```

---

### Step 4: Update Internal Links

Convert relative links to absolute:

**Problem:**
```markdown
See [Radii](../design-tokens/radii.md)
See [Shadows](./shadows.md)
```

**Fix:**
```markdown
See [Radii](/guidelines/design-tokens/radii.md)
See [Shadows](/guidelines/design-tokens/shadows.md)
```

---

### Step 5: Add Missing Sections (Template Compliance)

**Component guidelines** should have:
- Props API table
- Usage examples
- Accessibility notes
- Related components

**Design token guidelines** should have:
- Token definitions table
- Implementation examples
- CSS variables section
- Related tokens

**If sections missing:** Add placeholder with TODO note:

```markdown
## Usage Examples

**TODO:** Add usage examples following template.

See `/guidelines/_templates/design-token-template.md` for structure.
```

---

### Step 6: Update Changelog Section

At end of each guideline file, add/update changelog:

**If file has no changelog:**
```markdown
## Changelog

### Version 1.0.1 (2024-03-15)
- Updated YAML frontmatter
- Fixed heading hierarchy
- Converted relative links to absolute paths
```

**If file has changelog:**
```markdown
## Changelog

### Version 1.1.0 (2024-03-15)  ← New entry
- Added missing examples
- Updated token definitions
- Fixed typos in implementation section

### Version 1.0.0 (2024-03-10)
- Initial version
```

---

### Step 7: Rewrite Non-Compliant Files

**If file severely violates template:**

1. Save original content
2. Load appropriate template from `/guidelines/_templates/`
3. Populate template with content from original
4. Replace file with template-compliant version
5. Add note to changelog about rewrite

**Example:**
```markdown
## Changelog

### Version 2.0.0 (2024-03-15)
- Complete rewrite using design-token-template.md
- Restructured sections for better organization
- Added missing required sections
- Note: This is a breaking change in structure
```

---

## Success Criteria

- [ ] All guideline files have complete YAML frontmatter
- [ ] All required fields present and accurate
- [ ] Versions incremented where content changed
- [ ] `last_updated` dates set to current date
- [ ] Heading hierarchy validated and fixed
- [ ] Internal links converted to absolute paths
- [ ] Missing template sections identified
- [ ] Changelog section updated
- [ ] Non-compliant files rewritten using templates
- [ ] Report generated at `/reports/guidelines-update-report.md`

---

## Outputs

- **Updated:** All guideline files in `/guidelines/**/*.md`
- **Report:** `/reports/guidelines-update-report.md`

**Report includes:**
- Files updated (count)
- Versions incremented (list)
- Heading hierarchy fixes (count)
- Links fixed (count)
- Files rewritten (list)

---

## Example Update

### Before

**File:** `/guidelines/design-tokens/colors.md`

```markdown
# Color Tokens

Some content about colors...

## Usage

Examples here...
```

**Issues:**
- No YAML frontmatter
- Outdated content
- No changelog

---

### After

**File:** `/guidelines/design-tokens/colors.md`

```yaml
---
title: "Color Design Tokens"
category: "Guidelines"
domain: "Design Tokens"
version: "1.1.0"
last_updated: "2024-03-15"
status: "Active"
purpose: "Define color design tokens for consistent brand palette"
tags: ["colors", "design-tokens", "css-variables"]
related_files:
  - "/guidelines/design-tokens/dark-light-mode.md"
  - "/guidelines/accessibility/wcag-compliance.md"
---
```

```markdown
# Color Design Tokens

**Category:** Guidelines  
**Domain:** Design Tokens  
**Version:** 1.1.0  
**Last Updated:** 2024-03-15  
**Status:** Active

---

## Overview

[Content...]

## Usage

[Examples...]

---

## Changelog

### Version 1.1.0 (2024-03-15)
- Added YAML frontmatter
- Updated content for dark mode support
- Added related files section

### Version 1.0.0 (2024-03-10)
- Initial version
```

---

## Error Handling

### Cannot Parse YAML

**Error:**
```
File: /guidelines/components/Button.md
Error: YAML frontmatter has invalid syntax

Line 3: version 1.0.0  ← Missing quotes
Should be: version: "1.0.0"
```

**Action:** Fix YAML syntax, then retry.

---

### Version Number Ambiguity

**Warning:**
```
File: /guidelines/design-tokens/spacing.md
Current version: 1.0.0
Content has changed significantly.

Recommend version bump:
1. PATCH (1.0.1) - Minor fixes
2. MINOR (1.1.0) - New content added [RECOMMENDED]
3. MAJOR (2.0.0) - Breaking structural changes

Selection: _______
```

**Action:** Prompt user for decision.

---

## Follow-Up Actions

After updating guidelines:
1. Run `audit guidelines` to verify all fixes applied
2. Target: 100% compliance
3. Commit changes with descriptive message
4. Run `cleanup guidelines` if duplicates found

---

## Related Prompts

- `audit guidelines` - Run this BEFORE update to identify violations
- `cleanup guidelines` - Run AFTER update to reorganize
- `new template` - Create new templates if needed

---

## Changelog

### Version 1.0.0 (2024-03-15)
- Initial update guidelines prompt
- Auto-fixes YAML frontmatter
- Increments versions where content changed
- Fixes heading hierarchy
- Converts relative links to absolute
- Rewrites non-compliant files using templates

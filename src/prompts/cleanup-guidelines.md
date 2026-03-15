# Cleanup Guidelines Prompt

**Trigger:** `cleanup guidelines`  
**Version:** 1.0.0  
**Last Updated:** 2024-03-15  
**Purpose:** Audit for duplicate content, deprecate outdated files, split oversized files, and restructure using templates

---

## Mission

Perform deep cleanup of `/guidelines/` directory by identifying duplicate content, deprecating outdated files, splitting oversized files, and rewriting non-compliant files using templates from `/guidelines/_templates/`.

**This is a destructive operation.** Files may be deprecated, moved, or rewritten.

---

## Prerequisites

- `audit guidelines` should be run first
- `/guidelines/repository-standards.md` - Standards reference
- `/guidelines/_templates/*.md` - All templates must be current
- Backup recommended before running

---

## Workflow

### Step 1: Identify Duplicate Content

**Scan all `/guidelines/**/*.md` files for:**

#### Exact Duplicates
- Same content in multiple files
- Copy-pasted sections

**Example:**
```
/guidelines/design-tokens/colors.md (lines 100-150)
/guidelines/components/Button.md (lines 50-100)

→ Same color token table duplicated
```

**Action:**
- Keep content in canonical location
- Replace duplicate with reference link
- Add note about consolidation

---

#### Overlapping Content
- Similar information in multiple files
- Redundant explanations

**Example:**
```
/guidelines/design-tokens/spacing.md
/guidelines/design-tokens/layout.md

→ Both explain spacing scale
```

**Action:**
- Merge into single authoritative file
- Deprecate redundant file
- Update links

---

### Step 2: Deprecate Outdated Files

**Identify files to deprecate:**

#### Replaced by Newer Files
```
/guidelines/old-color-system.md  ← Deprecated
/guidelines/design-tokens/colors.md  ← Current
```

**Action:**
1. Add deprecation notice to old file:
   ```yaml
   ---
   status: "Deprecated"
   replaces: "/guidelines/design-tokens/colors.md"
   deprecation_date: "2024-03-15"
   ---
   ```

2. Add banner at top:
   ```markdown
   **⚠️ DEPRECATED:** This guideline is deprecated as of 2024-03-15.

   Use [Color Design Tokens](/guidelines/design-tokens/colors.md) instead.

   This file will be removed on 2024-04-15.
   ```

3. Schedule deletion (30 days)

---

#### No Longer Relevant
```
/guidelines/patterns/legacy-php-integration.md

→ Project no longer uses PHP
```

**Action:**
1. Mark as deprecated
2. Move to `/guidelines/_archived/`
3. Update any links pointing to it

---

### Step 3: Split Oversized Files

**Identify files >500 lines:**

```
/guidelines/design-tokens/colors.md (1205 lines)  ← Too large
```

**Splitting strategy:**

#### Option 1: Split by Logical Sections

**Original:**
```
/guidelines/design-tokens/colors.md (1205 lines)
- Overview
- Color Palette (400 lines)
- Semantic Colors (300 lines)
- Dark Mode (250 lines)
- Usage Examples (255 lines)
```

**Split into:**
```
/guidelines/design-tokens/colors.md (300 lines)
  → Overview + quick reference

/guidelines/design-tokens/colors-palette.md (450 lines)
  → Color palette definitions

/guidelines/design-tokens/colors-semantic.md (350 lines)
  → Semantic color tokens

/guidelines/design-tokens/dark-light-mode.md (300 lines)
  → Dark mode color system
```

---

#### Option 2: Create Index File

If content is tightly related:

**Create index:**
```markdown
# Color Design Tokens

This guide is split into focused documents:

- [Color Palette](/guidelines/design-tokens/colors-palette.md) - Brand colors
- [Semantic Colors](/guidelines/design-tokens/colors-semantic.md) - Contextual tokens
- [Dark/Light Mode](/guidelines/design-tokens/dark-light-mode.md) - Theme system
```

**Update original file:**
- Keep as lightweight index
- Move sections to dedicated files
- Maintain cross-references

---

### Step 4: Identify Non-Standard Files

**Scan for files not following templates:**

```
/guidelines/components/Button.md

Template: /guidelines/_templates/component-guideline-template.md

Missing sections:
- Props API table
- Accessibility notes
- Related components
```

**Action:** Rewrite using template (see Step 5)

---

### Step 5: Rewrite Non-Compliant Files

**For each non-compliant file:**

1. **Save original content**
   ```
   /temp/Button-original.md
   ```

2. **Load appropriate template**
   ```
   /guidelines/_templates/component-guideline-template.md
   ```

3. **Extract content from original**
   - Identify reusable sections
   - Preserve examples and code
   - Note missing information

4. **Populate template**
   - Fill required sections
   - Add TODOs for missing content
   - Maintain tone and voice

5. **Replace file**
   ```
   /guidelines/components/Button.md (now template-compliant)
   ```

6. **Update changelog**
   ```markdown
   ### Version 2.0.0 (2024-03-15)
   - Complete rewrite using component-guideline-template.md
   - Added missing Props API section
   - Restructured for consistency
   - Note: This is a breaking change in structure
   ```

---

### Step 6: Reorganize Directory Structure

**If categories are unclear:**

**Before:**
```
/guidelines/
├── button-stuff.md
├── colors.md
├── spacing-guide.md
├── hero-component.md
```

**After:**
```
/guidelines/
├── components/
│   ├── Button.md
│   └── Hero.md
└── design-tokens/
    ├── colors.md
    └── spacing.md
```

**Update:**
- All internal links
- INDEX.md references
- Guidelines.md table of contents

---

### Step 7: Update Cross-References

After all moves/merges/splits:

1. **Find broken links**
   ```
   Scan all .md files for links to deprecated/moved files
   ```

2. **Update link targets**
   ```markdown
   Old: [Colors](../old-color-system.md)
   New: [Colors](/guidelines/design-tokens/colors.md)
   ```

3. **Verify all links work**

---

## Report Structure

**File:** `/reports/guidelines-cleanup-report.md`

```markdown
# Guidelines Cleanup Report

**Date:** YYYY-MM-DD
**Scope:** All files in /guidelines/

---

## Actions Taken

### Duplicate Content Removed (XX files)
- /guidelines/design-tokens/colors.md (lines 100-150) → Consolidated
- /guidelines/components/Button.md (duplicate table) → Removed, linked to canonical

### Files Deprecated (XX files)
- /guidelines/old-color-system.md → Use /guidelines/design-tokens/colors.md
- /guidelines/patterns/legacy-php.md → Moved to _archived/

### Files Split (XX files)
- /guidelines/design-tokens/colors.md (1205 lines) → Split into 3 files:
  - colors-palette.md (450 lines)
  - colors-semantic.md (350 lines)
  - dark-light-mode.md (300 lines)

### Files Rewritten (XX files)
- /guidelines/components/Button.md → Rewritten using template
- /guidelines/components/Hero.md → Rewritten using template

### Files Moved (XX files)
- /guidelines/button-stuff.md → /guidelines/components/Button.md
- /guidelines/colors.md → /guidelines/design-tokens/colors.md

### Links Updated (XX links)
- Updated XX broken links
- Converted XX relative links to absolute

---

## Directory Structure Changes

Before: 45 files in 3 directories
After: 42 files in 7 directories (3 deprecated, 2 split, 1 merged)

---

## Deprecated Files (30-Day Deletion Schedule)

| File | Deprecated | Replacement | Deletion Date |
|------|------------|-------------|---------------|
| old-color-system.md | 2024-03-15 | design-tokens/colors.md | 2024-04-15 |

---

## Files Requiring Manual Review

- /guidelines/patterns/experimental-pattern.md - Unclear if still needed
- /guidelines/components/LegacyComponent.md - May be in use

---

## Recommendations

### Immediate
- [ ] Review deprecated files list
- [ ] Verify split files maintain all content
- [ ] Test all internal links

### Short-Term (This Week)
- [ ] Add missing sections to rewritten files
- [ ] Create index pages for split content
- [ ] Run `audit guidelines` to verify compliance

### Long-Term (This Month)
- [ ] Delete deprecated files after 30 days
- [ ] Create templates for any new patterns identified
```

---

## Success Criteria

- [ ] All duplicate content identified and consolidated
- [ ] Outdated files deprecated with notices
- [ ] Oversized files (>500 lines) split
- [ ] Non-compliant files rewritten using templates
- [ ] Directory structure reorganized for clarity
- [ ] All internal links updated
- [ ] No broken links remain
- [ ] Report generated at `/reports/guidelines-cleanup-report.md`

---

## Outputs

- **Updated/Rewritten:** Multiple guideline files
- **Deprecated:** Outdated files with notices
- **Created:** Split files from oversized originals
- **Report:** `/reports/guidelines-cleanup-report.md`
- **Archived:** `/guidelines/_archived/` (deprecated files)

---

## Safety Measures

**Before running cleanup:**
1. Run `audit guidelines` to understand current state
2. Backup `/guidelines/` directory
3. Review report before accepting changes
4. Commit changes in atomic commits (not one giant commit)

**Rollback capability:**
- Original content saved in `/temp/` during rewrites
- Git history preserves pre-cleanup state
- Deprecated files kept for 30 days

---

## Follow-Up Actions

After cleanup:
1. Run `audit guidelines` to verify compliance
2. Run `update guidelines` to ensure all YAML is current
3. Test website to ensure no broken documentation links
4. Update `/guidelines/INDEX.md` with new structure
5. Announce cleanup in team channel (if applicable)

---

## Related Prompts

- `audit guidelines` - Run BEFORE cleanup
- `update guidelines` - Run AFTER cleanup
- `new template` - Create templates for new patterns

---

## Changelog

### Version 1.0.0 (2024-03-15)
- Initial cleanup guidelines prompt
- Identifies duplicate content
- Deprecates outdated files
- Splits oversized files
- Rewrites non-compliant files using templates
- Reorganizes directory structure

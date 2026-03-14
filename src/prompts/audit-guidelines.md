# Audit Guidelines System Prompt

**Version:** 1.0  
**Purpose:** Systematically audit and reorganize all guidelines files  
**Trigger Word:** `audit guidelines`  
**Session Type:** Single-session (comprehensive)  
**Estimated Duration:** 30-45 minutes

---

## 🎯 Primary Objectives

This prompt performs a complete audit of `/guidelines/` directory, identifies redundancies, ensures proper organization, and breaks down large files into manageable, focused guidelines.

**Goals:**
1. Audit main `/guidelines/Guidelines.md` file (target: <400 lines)
2. Identify sections that can be extracted into separate files
3. Create specialized guidelines files using appropriate templates
4. Update main Guidelines.md to reference extracted files
5. Ensure all guidelines follow templates and conventions
6. Validate cross-references and links
7. Create missing design token guidelines (14 required files)

**Success Criteria:**
- [ ] Main Guidelines.md is <400 lines
- [ ] All design token files created
- [ ] No duplicate content across files
- [ ] All files follow template structure
- [ ] All cross-references updated and valid
- [ ] Clear hierarchy and navigation

---

## 📋 Prerequisites

### Required Files
- [ ] `/guidelines/Guidelines.md` exists
- [ ] `/guidelines/_templates/` directory exists with all templates
- [ ] `/guidelines/_templates.md` exists

### Required Templates
- [ ] `guideline-template.md`
- [ ] `design-token-template.md`
- [ ] `component-guideline-template.md`

---

## 🔧 Execution Steps

### Step 1: Analyze Main Guidelines.md

**Objective:** Understand current structure and identify extraction candidates

**Actions:**

1. **Read `/guidelines/Guidelines.md`** completely
2. **Count total lines** (current status)
3. **Identify all major sections** and their line counts:
   ```
   Section 1: [Name] - Lines X-Y (Z lines)
   Section 2: [Name] - Lines X-Y (Z lines)
   ...
   ```

4. **Classify each section:**
   - **Core (Keep in main):** Mission-critical, always referenced, <50 lines
   - **Extract (Move to separate file):** Self-contained, >50 lines, specific domain
   - **Split (Multiple files needed):** Very large section covering multiple topics

5. **Identify extraction candidates:**
   - Sections >50 lines that are self-contained
   - Sections that map to specific domains (colors, typography, spacing, etc.)
   - Sections with detailed implementation details
   - Sections that could benefit from the template structure

**Output:** Extraction plan with:
- Sections to keep in main file
- Sections to extract (with proposed new file names)
- Target line count after extraction

---

### Step 2: Create Design Token Guidelines

**Objective:** Create all 14 required design token guidelines files

**Required Files:**
1. `/guidelines/design-tokens/animations.md`
2. `/guidelines/design-tokens/borders.md`
3. `/guidelines/design-tokens/buttons.md`
4. `/guidelines/design-tokens/colors.md`
5. `/guidelines/design-tokens/dark-light-mode.md`
6. `/guidelines/design-tokens/forms.md`
7. `/guidelines/design-tokens/iconography.md`
8. `/guidelines/design-tokens/navigation.md`
9. `/guidelines/design-tokens/radii.md`
10. `/guidelines/design-tokens/responsive.md`
11. `/guidelines/design-tokens/shadows.md`
12. `/guidelines/design-tokens/spacing.md`
13. `/guidelines/design-tokens/touch-targets.md`
14. `/guidelines/design-tokens/typography.md`

**For each file:**

1. **Copy `/guidelines/_templates/design-token-template.md`**
2. **Extract relevant content from Guidelines.md:**
   - Look for sections on that token category
   - Extract code examples
   - Extract token definitions
   - Extract usage guidelines
3. **Fill template sections:**
   - Overview
   - Token Definitions (Primary, Semantic, Variant)
   - Implementation (CSS Variables, TypeScript Constants)
   - Usage Guidelines
   - Accessibility Considerations
   - Examples
4. **Add to Guidelines.md:**
   - Replace extracted content with a link:
     ```markdown
     ## X. [Category] Design Tokens
     
     See `/guidelines/design-tokens/[category].md` for complete [category] token specifications.
     
     **Quick Reference:**
     - [Key point 1]
     - [Key point 2]
     - [Link to guideline]
     ```

---

### Step 3: Extract Large Sections

**Common Extraction Candidates:**

#### A. Accessibility Guidelines

**Source:** Section 1 in Guidelines.md  
**New File:** `/guidelines/accessibility/wcag-compliance.md`  
**Template:** `guideline-template.md`

**Content to Extract:**
- WCAG 2.1 AA requirements
- Keyboard navigation standards
- Screen reader support
- Color contrast rules
- Focus management
- Modal/overlay accessibility

**Keep in Main Guidelines.md:**
- Brief overview (3-5 lines)
- Link to detailed guideline
- Core principle statement

---

#### B. WordPress & WooCommerce Blocks

**Source:** Section 6 in Guidelines.md  
**New File:** `/guidelines/wordpress/blocks-reference.md`  
**Template:** `guideline-template.md`

**Content to Extract:**
- All core blocks list
- WooCommerce blocks list
- Block usage guidelines
- Template parts mapping

**Keep in Main Guidelines.md:**
- Reference to blocks guideline
- Link to detailed specs

---

#### C. Component Architecture

**Source:** Section 7 in Guidelines.md  
**New File:** `/guidelines/architecture/component-structure.md`  
**Template:** `guideline-template.md`

**Content to Extract:**
- Component hierarchy
- File organization
- Naming conventions
- Import patterns
- Composition patterns

**Keep in Main Guidelines.md:**
- Quick reference diagram
- Link to detailed architecture

---

#### D. React Router & Routing

**Source:** Section 4 & scattered references  
**New File:** `/guidelines/architecture/routing.md`  
**Template:** `guideline-template.md`

**Content to Extract:**
- React Router Data mode setup
- Route configuration patterns
- Navigation best practices
- Protected routes
- Route guards

---

#### E. Checkout Flow Patterns

**Source:** Section 13 in Guidelines.md  
**New File:** `/guidelines/patterns/checkout-flow.md`  
**Template:** `guideline-template.md`

**Content to Extract:**
- Form architecture
- State management
- Conditional rendering
- Floating labels
- Step layout
- Validation patterns

---

#### F. Atomic Design Patterns

**Source:** Section 14 in Guidelines.md  
**New File:** `/guidelines/patterns/atomic-design.md`  
**Template:** `guideline-template.md`

**Content to Extract:**
- Single product architecture
- Order confirmation patterns
- Service assurance components
- Component composition

---

#### G. Site Structure & Sitemap

**Source:** Section 4 in Guidelines.md  
**New File:** `/guidelines/architecture/sitemap.md`  
**Template:** `guideline-template.md`

**Content to Extract:**
- Complete sitemap
- Page blueprints
- URL structure
- Template mappings

**Keep in Main Guidelines.md:**
- High-level structure only
- Link to detailed sitemap

---

### Step 4: Create Guideline Index

**Objective:** Create a navigation hub for all guidelines

**File:** `/guidelines/README.md` or `/guidelines/INDEX.md`

**Content:**

```markdown
# The Wire Brand Guidelines Index

**Version:** 5.0  
**Last Updated:** YYYY-MM-DD

---

## Quick Navigation

### 🎨 Design Tokens
- [Colors](/guidelines/design-tokens/colors.md)
- [Typography](/guidelines/design-tokens/typography.md)
- [Spacing](/guidelines/design-tokens/spacing.md)
- [Shadows](/guidelines/design-tokens/shadows.md)
- [Radii](/guidelines/design-tokens/radii.md)
- [Borders](/guidelines/design-tokens/borders.md)
- [Animations](/guidelines/design-tokens/animations.md)
- [Buttons](/guidelines/design-tokens/buttons.md)
- [Forms](/guidelines/design-tokens/forms.md)
- [Iconography](/guidelines/design-tokens/iconography.md)
- [Navigation](/guidelines/design-tokens/navigation.md)
- [Touch Targets](/guidelines/design-tokens/touch-targets.md)
- [Responsive](/guidelines/design-tokens/responsive.md)
- [Dark/Light Mode](/guidelines/design-tokens/dark-light-mode.md)

### ♿ Accessibility
- [WCAG Compliance](/guidelines/accessibility/wcag-compliance.md)
- [Keyboard Navigation](/guidelines/accessibility/keyboard-navigation.md)
- [Screen Reader Support](/guidelines/accessibility/screen-readers.md)

### 🏗️ Architecture
- [Component Structure](/guidelines/architecture/component-structure.md)
- [Routing](/guidelines/architecture/routing.md)
- [Sitemap](/guidelines/architecture/sitemap.md)

### 🧩 Patterns
- [Atomic Design](/guidelines/patterns/atomic-design.md)
- [Checkout Flow](/guidelines/patterns/checkout-flow.md)
- [Hero Components](/guidelines/patterns/hero-standards.md)

### 📦 WordPress
- [Blocks Reference](/guidelines/wordpress/blocks-reference.md)
- [Template Parts](/guidelines/wordpress/template-parts.md)

### 🔧 Development
- [JSDoc Standards](/guidelines/development/jsdoc-standards.md)
- [Testing Strategy](/guidelines/development/testing.md)
- [Performance Guidelines](/guidelines/development/performance.md)

---

## Main Guideline

**[The Wire Brand Guidelines (Main)](/guidelines/Guidelines.md)**  
Core project guidelines, brand voice, and high-level standards.

---

## Templates

See [`/guidelines/_templates.md`](/guidelines/_templates.md) for documentation templates.

**Available Templates:**
- Guideline Template
- Design Token Template
- Component Template
- Report Template
- Task List Template
- Prompt Template
```

---

### Step 5: Update Main Guidelines.md

**Objective:** Reduce to <400 lines by replacing extracted sections with references

**For each extracted section:**

1. **Remove detailed content**
2. **Replace with concise reference:**
   ```markdown
   ## X. [Section Title]
   
   **Detailed guidelines:** `/guidelines/[category]/[file].md`
   
   ### Quick Reference
   - Key principle 1
   - Key principle 2
   - Key principle 3
   
   **See full documentation:** [Link to extracted guideline]
   ```

3. **Update section numbering** after removals
4. **Verify all internal links** still work
5. **Update table of contents** if present

**Final Main Guidelines.md Structure (Target <400 lines):**

```markdown
# The Wire Brand Guidelines (v5.0)

[Header with status, prompt system reference]

## Table of Contents
[Links to sections]

## 1. Project Overview
- Brief introduction
- Experience goals
- Link to detailed sitemap

## 2. Accessibility (Core Principles)
- Non-negotiable requirements (brief)
- Link to /guidelines/accessibility/wcag-compliance.md

## 3. Brand Identity
- Voice & tone
- Visual characteristics
- Link to design token guidelines

## 4. Design Tokens (Quick Reference)
- Color palette overview
- Typography scale overview
- Spacing scale overview
- Links to individual token guidelines

## 5. Component Standards
- Naming conventions
- File organization (brief)
- Link to /guidelines/architecture/component-structure.md

## 6. Development Guidelines
- JSDoc requirement
- Import rules
- Navigation rules (SPA)
- Link to detailed development guidelines

## 7. Testing & Validation
- Brief checklist
- Link to testing guidelines

## 8. WordPress Integration
- Block usage policy
- Link to /guidelines/wordpress/blocks-reference.md

## 9. Related Documentation
- Links to all specialized guidelines
- Links to prompts
- Links to templates

## Change Log
[Recent changes]
```

---

### Step 6: Validate Cross-References

**Objective:** Ensure all links between guidelines are correct

**Actions:**

1. **Scan all guideline files** for links starting with `/guidelines/`
2. **Verify each linked file exists**
3. **Check for broken links:**
   - File doesn't exist
   - Section anchor doesn't exist
   - Typo in path
4. **Update any broken links**
5. **Create missing files** if referenced but don't exist yet

**Link Validation Checklist:**
- [ ] All `/guidelines/design-tokens/[file].md` links valid
- [ ] All `/guidelines/accessibility/[file].md` links valid
- [ ] All `/guidelines/architecture/[file].md` links valid
- [ ] All `/guidelines/patterns/[file].md` links valid
- [ ] All `/guidelines/wordpress/[file].md` links valid
- [ ] All internal anchor links (#section) valid

---

### Step 7: Validate Template Compliance

**Objective:** Ensure all guidelines follow appropriate templates

**For each guideline file:**

1. **Identify which template it should use:**
   - Design tokens → design-token-template
   - Components → component-guideline-template
   - General → guideline-template

2. **Check template compliance:**
   - Has version/date header?
   - Has overview section?
   - Has all required sections for that template?
   - Has change log?

3. **If non-compliant:**
   - Note in audit summary
   - Consider reformatting (if critical) or flag for future update

---

## 🛡️ Guard Rails & Constraints

### Protected Content

**Never delete these from main Guidelines.md:**
- Project status and redesign note
- Prompt system reference
- Accessibility core principles statement
- Brand identity & voice section (brief version OK)
- Core development rules (JSDoc, imports, navigation)

### Minimum Main Guidelines.md Content

**Must keep (even if brief):**
- Table of contents / navigation
- Project overview
- Accessibility statement
- Brand voice
- Quick reference to design tokens
- Development standards
- Links to specialized guidelines

### File Organization Rules

**Required directory structure:**
```
/guidelines/
├── Guidelines.md (main, <400 lines)
├── README.md or INDEX.md (navigation hub)
├── _templates.md (template documentation)
├── _templates/ (template files)
├── design-tokens/ (14 files)
├── accessibility/ (WCAG, keyboard, screen readers)
├── architecture/ (components, routing, sitemap)
├── patterns/ (atomic, checkout, hero, etc.)
├── wordpress/ (blocks, templates)
├── components/ (individual component guidelines)
└── development/ (JSDoc, testing, performance)
```

---

## 📤 Output Format

```markdown
# Guidelines Audit Summary - [DATE]

## 📏 Main Guidelines.md Analysis

**Before Audit:**
- Total lines: XXX
- Total sections: XX
- Target: <400 lines

**After Audit:**
- Total lines: XXX ✅ (Target met) or ⚠️ (Still over - X lines to cut)
- Sections remaining: XX
- Sections extracted: XX

---

## 📂 Files Created

### Design Token Guidelines (14 files)

- [x] `/guidelines/design-tokens/animations.md`
- [x] `/guidelines/design-tokens/borders.md`
- [x] `/guidelines/design-tokens/buttons.md`
- [x] `/guidelines/design-tokens/colors.md`
- [x] `/guidelines/design-tokens/dark-light-mode.md`
- [x] `/guidelines/design-tokens/forms.md`
- [x] `/guidelines/design-tokens/iconography.md`
- [x] `/guidelines/design-tokens/navigation.md`
- [x] `/guidelines/design-tokens/radii.md`
- [x] `/guidelines/design-tokens/responsive.md`
- [x] `/guidelines/design-tokens/shadows.md`
- [x] `/guidelines/design-tokens/spacing.md`
- [x] `/guidelines/design-tokens/touch-targets.md`
- [x] `/guidelines/design-tokens/typography.md`

### Other Guidelines

- [ ] `/guidelines/accessibility/wcag-compliance.md`
- [ ] `/guidelines/architecture/component-structure.md`
- [ ] `/guidelines/architecture/routing.md`
- [ ] `/guidelines/architecture/sitemap.md`
- [ ] `/guidelines/patterns/atomic-design.md`
- [ ] `/guidelines/patterns/checkout-flow.md`
- [ ] `/guidelines/wordpress/blocks-reference.md`

---

## 🔗 Cross-References Updated

**Links validated:** XXX  
**Broken links fixed:** XX  
**New links added:** XX

---

## ✅ Template Compliance

**Files following templates:** XX/XX  
**Non-compliant files:** XX (flagged for review)

---

## 📊 Directory Structure

```
/guidelines/
├── Guidelines.md (XXX lines - target <400)
├── INDEX.md (Created ✓)
├── _templates.md (Exists ✓)
├── _templates/ (X templates)
├── design-tokens/ (14 files ✓)
├── accessibility/ (X files)
├── architecture/ (X files)
├── patterns/ (X files)
├── wordpress/ (X files)
└── components/ (X files)
```

---

## ⚠️ Issues Found

[List any issues that need manual attention]

1. **Issue:** [Description]
   - **Impact:** [What's affected]
   - **Recommendation:** [How to fix]

---

## 🎯 Next Actions

1. Review extracted guidelines for accuracy
2. Update any component-specific docs
3. Run `cleanup` to validate file organization
4. Update /prompts/PROMPT-SYSTEM-GUIDELINES.md if needed

---

**Audit Complete** ✓
```

---

## 🎨 Context & Environment

### Figma Make Environment

**Remember:**
- ✅ Say: "Guidelines reorganized successfully"
- ❌ Don't say: "Restart server" or "Clear cache"

---

## 📚 Reference Materials

### Templates
- `/guidelines/_templates/guideline-template.md`
- `/guidelines/_templates/design-token-template.md`
- `/guidelines/_templates/component-guideline-template.md`

### Current Guidelines
- `/guidelines/Guidelines.md` (to be audited)

---

## Change Log

### Version 1.0 (2024-03-13)
- Initial audit prompt creation
- 14 design token files specification
- Extraction strategy defined
- <400 line target established

---

**Maintained by:** Documentation Team  
**Last Tested:** [Never - new prompt]  
**Next Review:** After first execution

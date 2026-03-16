# Guidelines Template Mandate

**Date:** 2024-03-15  
**Version:** 1.0.0  
**Status:** Complete  
**Mandatory:** Yes

---

## Summary

All new guideline files MUST use templates from `/guidelines/_templates/`. Never create guidelines in the project root - always create in `/guidelines/` or a subfolder.

---

## Key Requirements

### 1. Template Usage (MANDATORY)

**All new guideline files MUST use one of these templates:**

| Template | Purpose | Location |
|----------|---------|----------|
| **General Guideline** | Standard guideline document | `/guidelines/_templates/guideline-template.md` |
| **Component Guideline** | Component specification | `/guidelines/_templates/component-guideline-template.md` |
| **Design Token Guideline** | Design token definition | `/guidelines/_templates/design-token-template.md` |
| **Prompt** | Automation prompt | `/guidelines/_templates/prompt-template.md` |
| **Report** | Analysis report | `/guidelines/_templates/report-template.md` |
| **Task List** | Task tracking | `/guidelines/_templates/task-list-template.md` |

---

### 2. Location Rules (MANDATORY)

**✅ CORRECT locations:**
```
/guidelines/design-tokens/my-token.md
/guidelines/components/MyComponent.md
/guidelines/accessibility/my-guideline.md
/guidelines/development/my-standard.md
/guidelines/patterns/my-pattern.md
```

**❌ PROHIBITED locations:**
```
/my-guideline.md              ❌ Never in project root!
/Guidelines.md                ❌ Never in project root!
/docs/my-guideline.md         ❌ Wrong folder (unless it's documentation, not a guideline)
/tasks/my-guideline.md        ❌ Wrong folder (unless it's a task list)
```

---

### 3. Creation Pattern

**Correct workflow for creating a new guideline:**

1. **Choose appropriate template** from `/guidelines/_templates/`
2. **Copy template content**
3. **Create new file in `/guidelines/{category}/`**
   - Categories: `accessibility/`, `architecture/`, `components/`, `design-tokens/`, `development/`, `patterns/`, `wordpress/`
4. **Fill in template sections** with your content
5. **Update `/guidelines/INDEX.md`** with link to new guideline
6. **Commit and document** the new guideline

---

## Protected Root-Level Files

**ONLY these three .md files allowed in project root:**

1. `/ATTRIBUTIONS.md` - Component, library, and asset attributions
2. `/README.md` - Project overview and setup instructions
3. `/CHANGELOG.md` - Version history and release notes

**All other .md files MUST be in designated folders:**
- Guidelines → `/guidelines/`
- Documentation → `/docs/`
- Reports → `/reports/`
- Tasks → `/tasks/`
- Prompts → `/prompts/`

---

## Updated Documentation

### 1. `/guidelines/Guidelines.md` (v7.0)

**Added new section:**

```markdown
## 📝 Creating New Guidelines

**MANDATORY:** All new guideline files MUST use templates from `/guidelines/_templates/`

**Never create guidelines in the project root.** Always create guidelines in `/guidelines/` or a subfolder.

**Available Templates:**
- General guidelines: `/guidelines/_templates/guideline-template.md`
- Component guidelines: `/guidelines/_templates/component-guideline-template.md`
- Design token guidelines: `/guidelines/_templates/design-token-template.md`
- Prompt files: `/guidelines/_templates/prompt-template.md`
- Reports: `/guidelines/_templates/report-template.md`
- Task lists: `/guidelines/_templates/task-list-template.md`

**Guideline Creation Pattern:**
1. Copy appropriate template from `/guidelines/_templates/`
2. Create new file in `/guidelines/{category}/` (never in root)
3. Fill in template sections
4. Update `/guidelines/INDEX.md` with new guideline link

**Reference:** `/guidelines/_templates.md` for template usage guide
```

---

### 2. `/guidelines/development/file-organization.md` (v2.0)

**Updated Overview section:**

```markdown
**Critical Principles:**
1. **Files should never be too large.** Always aim to break content into smaller, focused modules.
2. **All new guidelines MUST use templates** from `/guidelines/_templates/`
3. **Never create guidelines in the project root.** Always create in `/guidelines/` or a subfolder.
```

---

## Examples

### Example 1: Creating a New Design Token Guideline

**❌ WRONG:**
```
1. Create file /my-new-token.md in root
2. Write content from scratch
```

**✅ CORRECT:**
```
1. Open /guidelines/_templates/design-token-template.md
2. Copy template content
3. Create /guidelines/design-tokens/my-new-token.md
4. Fill in template sections:
   - Frontmatter (title, category, version, status)
   - Overview
   - Token Definitions
   - Usage Guidelines
   - Examples
   - Accessibility Notes
   - Related Guidelines
5. Update /guidelines/INDEX.md:
   - Add link to new guideline in Design Tokens section
6. Commit changes
```

---

### Example 2: Creating a New Component Guideline

**❌ WRONG:**
```
1. Create /components-guideline.md in root
2. Write freeform content
```

**✅ CORRECT:**
```
1. Open /guidelines/_templates/component-guideline-template.md
2. Copy template content
3. Create /guidelines/components/MyNewComponent.md
4. Fill in template sections:
   - Component Overview
   - Props API
   - Variants
   - Accessibility Requirements
   - Code Examples
   - Design Tokens Used
5. Update /guidelines/INDEX.md:
   - Add link under Components section
6. Commit changes
```

---

### Example 3: Creating a New Development Standard

**❌ WRONG:**
```
1. Create /dev-standard.md in /docs/
2. Write without following template
```

**✅ CORRECT:**
```
1. Open /guidelines/_templates/guideline-template.md
2. Copy template content
3. Create /guidelines/development/my-new-standard.md
4. Fill in template sections:
   - Overview
   - Requirements
   - Implementation Details
   - Examples
   - Validation Checklist
5. Update /guidelines/INDEX.md:
   - Add link under Development section
6. Commit changes
```

---

## Benefits

### 1. Consistency
- All guidelines follow same structure
- Easy to scan and find information
- Predictable sections across all docs

### 2. Discoverability
- All guidelines in `/guidelines/` folder
- Organized by category
- Listed in INDEX.md

### 3. Quality
- Templates ensure complete documentation
- Required sections prevent missing info
- Standards maintained across all guidelines

### 4. AI Processing
- Structured templates improve AI understanding
- Consistent format aids automated analysis
- Better context for AI-powered workflows

---

## Cleanup Trigger Behavior

When you run `cleanup`, it will:

1. **Scan project root** for all `.md` files
2. **Identify unauthorized files** (any .md except ATTRIBUTIONS, README, CHANGELOG)
3. **Categorize files:**
   - Guidelines → Move to `/guidelines/{category}/`
   - Documentation → Move to `/docs/`
   - Tasks → Move to `/tasks/`
   - Reports → Move to `/reports/`
   - Prompts → Move to `/prompts/`
4. **Delete obsolete files** (duplicates, empty files, deprecated)
5. **Generate cleanup report** at `/reports/cleanup-report.md`

---

## Validation Checklist

### Before Creating Any Guideline

- [ ] Chosen appropriate template from `/guidelines/_templates/`
- [ ] File will be created in `/guidelines/{category}/` (NOT in root)
- [ ] Guideline name is descriptive and follows naming convention
- [ ] Template sections will be filled in completely
- [ ] `/guidelines/INDEX.md` will be updated with new guideline link

---

### After Creating Guideline

- [ ] All template sections completed
- [ ] File size under 500 lines (split if larger)
- [ ] Frontmatter metadata filled in (title, category, version, status)
- [ ] Code examples included where relevant
- [ ] Related guidelines cross-referenced
- [ ] Added to `/guidelines/INDEX.md`
- [ ] Committed to version control

---

## Related Documentation

- **Main Guidelines:** `/guidelines/Guidelines.md` (v7.0)
- **File Organization:** `/guidelines/development/file-organization.md` (v2.0)
- **Template Usage Guide:** `/guidelines/_templates.md`
- **Available Templates:** `/guidelines/_templates/` (9 templates)
- **Guidelines Index:** `/guidelines/INDEX.md`

---

## Template Reference

### Available Templates (9 total)

1. **`guideline-template.md`** - General guideline structure
2. **`component-guideline-template.md`** - Component specifications
3. **`design-token-template.md`** - Design token definitions
4. **`prompt-template.md`** - Automation prompts
5. **`report-template.md`** - Analysis reports
6. **`task-list-template.md`** - Task tracking lists
7. **`ATTRIBUTIONS-template.md`** - Attribution file structure
8. **`README-template.md`** - Project README structure
9. **`CHANGELOG-template.md`** - Version history structure

**Usage Guide:** See `/guidelines/_templates.md` for detailed instructions on each template.

---

## Enforcement

### How This Standard is Enforced

1. **Documentation** - Clearly stated in main Guidelines.md
2. **File Organization Standard** - Mandatory guideline
3. **Cleanup Trigger** - Automated enforcement via `cleanup` command
4. **Code Review** - Team reviews ensure compliance
5. **Templates** - Templates make it easy to comply

### Consequences of Non-Compliance

**Creating guidelines in root:**
- Files will be moved during next `cleanup` trigger run
- May be lost if not recognized as important
- Breaks project organization standards

**Not using templates:**
- Inconsistent documentation quality
- Missing critical sections
- Harder to maintain and update
- Poor AI processing quality

---

## Migration Path

**If you find guidelines in wrong locations:**

1. **Identify guideline files in root or wrong folders**
2. **For each file:**
   - Open appropriate template from `/guidelines/_templates/`
   - Create new file in correct `/guidelines/{category}/` location
   - Copy content into template structure
   - Fill in any missing template sections
   - Delete old file (or wait for cleanup trigger)
3. **Update `/guidelines/INDEX.md`** with new locations
4. **Update any references** to old file locations
5. **Commit changes**

---

## FAQ

### Q: What if my guideline doesn't fit any category?

**A:** Use the general `guideline-template.md` and place in the most relevant existing category, or propose a new category folder under `/guidelines/`.

---

### Q: Can I modify the templates?

**A:** Templates can be improved, but changes should be:
1. Discussed with team first
2. Applied consistently to all templates
3. Documented in `/guidelines/_templates.md`
4. Updated across existing guidelines using that template

---

### Q: What if I need a guideline quickly and don't have time for templates?

**A:** Templates actually SAVE time by providing structure. Copy-paste the template and fill in sections - faster than starting from scratch. Templates ensure you don't forget critical sections.

---

### Q: What about small updates to existing guidelines?

**A:** Updates to existing guidelines don't require starting from template again. Just maintain the existing structure and update content as needed.

---

## Changelog

### Version 1.0.0 (2024-03-15)
- Initial documentation of template mandate
- Updated Guidelines.md (v7.0) with template requirements
- Updated file-organization.md (v2.0) with template principle
- Documented workflow, examples, and benefits
- Created validation checklists
- Established enforcement strategy

---

**Status:** ✅ **Mandatory standard in effect**

**Questions?** Reference `/guidelines/_templates.md` or `/guidelines/development/file-organization.md`

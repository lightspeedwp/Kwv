# Guidelines Template System

**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Purpose:** Documentation for using The Wire Brand guideline templates

---

## Overview

This directory contains standardized templates for creating consistent, comprehensive documentation across The Wire Brand project.

**Benefits:**
- ✅ Consistent structure across all documentation
- ✅ Ensures all critical sections are included
- ✅ Faster documentation creation
- ✅ Easier to maintain and review
- ✅ Better discoverability

---

## Available Templates

### 1. Guideline Template

**File:** `/guidelines/_templates/guideline-template.md`  
**Purpose:** General-purpose guideline documentation  
**Use for:** Process guidelines, workflow documentation, general standards

**Key Sections:**
- Overview
- Core Principles
- Standards & Requirements
- Implementation Details
- Testing & Validation
- Related Resources

**When to use:**
- Creating new process documentation
- Documenting workflow standards
- Establishing new guidelines that don't fit other categories

---

### 2. Design Token Template

**File:** `/guidelines/_templates/design-token-template.md`  
**Purpose:** Design token category documentation  
**Use for:** Color, typography, spacing, shadows, etc.

**Key Sections:**
- Token Definitions (Primary, Semantic, Variant)
- Implementation (CSS Variables, TypeScript Constants)
- Usage Guidelines
- Accessibility Considerations
- Examples (Correct/Incorrect)
- Migration Notes

**When to use:**
- Creating new design token categories
- Documenting token updates
- Establishing new token naming conventions

**Examples:**
- `/guidelines/design-tokens/colors.md`
- `/guidelines/design-tokens/typography.md`
- `/guidelines/design-tokens/spacing.md`

---

### 3. Component Guideline Template

**File:** `/guidelines/_templates/component-guideline-template.md`  
**Purpose:** Individual component documentation  
**Use for:** React component specifications

**Key Sections:**
- Component Anatomy
- Props API
- Variants
- Design Tokens Used
- Accessibility (ARIA, Keyboard, WCAG)
- Usage Examples
- States & Behaviors
- Responsive Behavior

**When to use:**
- Creating new component documentation
- Documenting complex component requirements
- Providing component usage guidelines

**Examples:**
- `/guidelines/components/Hero.md`
- `/guidelines/components/Button.md`
- `/guidelines/components/ProductCard.md`

---

### 4. Report Template

**File:** `/guidelines/_templates/report-template.md`  
**Purpose:** Analysis and audit report documentation  
**Use for:** System audits, domain analysis, technical reports

**Key Sections:**
- Executive Summary
- Current State Analysis (Strengths, Issues, Gaps)
- Detailed Findings
- Gap Analysis
- Recommendations (High/Medium/Low Priority)
- Implementation Roadmap
- Success Metrics

**When to use:**
- Creating analysis reports
- Documenting audit results
- Presenting findings and recommendations

**Examples:**
- `/reports/01-visual-design-report.md`
- `/reports/navigation-accessibility-report.md`
- `/reports/typography-audit-report.md`

---

### 5. Task List Template

**File:** `/guidelines/_templates/task-list-template.md`  
**Purpose:** Feature/domain task tracking  
**Use for:** Breaking down work into actionable tasks

**Key Sections:**
- Status tracking (Progress %, Effort estimates)
- Task Breakdown (Phases and individual tasks)
- Implementation Checklist
- Blockers & Issues
- Progress Tracking
- Testing Notes
- Completion Sign-off

**When to use:**
- Creating new feature task lists
- Breaking down large initiatives
- Tracking implementation progress

**Examples:**
- `/tasks/task-list.md` (master)
- `/tasks/homepage-redesign.md`
- `/tasks/navigation-system.md`

---

### 6. Prompt Template

**File:** `/guidelines/_templates/prompt-template.md`  
**Purpose:** Orchestrated workflow prompt documentation  
**Use for:** Creating reusable AI prompts

**Key Sections:**
- Primary Objectives
- Prerequisites
- Execution Steps
- Guard Rails & Constraints
- Output Format
- Context & Environment
- Error Handling

**When to use:**
- Creating new orchestrated prompts
- Documenting automated workflows
- Establishing trigger-word prompts

**Examples:**
- `/prompts/cleanup.md`
- `/prompts/continue.md`
- `/prompts/analyze-navigation.md`

---

## How to Use Templates

### Step 1: Copy Template

```bash
# Conceptual - actual copy in Figma Make:
Copy: /guidelines/_templates/[template-name].md
To: /[destination-folder]/[your-file-name].md
```

### Step 2: Replace Placeholders

**Common placeholders:**
- `[Domain]` → Specific domain (e.g., "Navigation", "Typography")
- `[ComponentName]` → Component name (e.g., "Hero", "Button")
- `[Type]` → Report type (e.g., "Analysis", "Audit")
- `YYYY-MM-DD` → Actual date
- `[Category]` → Category name
- `[X hours]` → Actual estimate

### Step 3: Fill Required Sections

**Mark sections as you complete them:**
- ✅ Section complete and reviewed
- 🚧 Section in progress
- ⏭️ Section not applicable (explain why)

### Step 4: Review Checklist

Before finalizing any documentation:

- [ ] All placeholder text replaced
- [ ] All required sections completed
- [ ] Examples provided where applicable
- [ ] Links to related documents added
- [ ] File naming follows conventions
- [ ] Status/version information accurate
- [ ] Change log started

---

## Naming Conventions

### Guidelines

**Format:** `/guidelines/[category]/[topic].md`

**Examples:**
- `/guidelines/design-tokens/colors.md`
- `/guidelines/components/Hero.md`
- `/guidelines/accessibility/wcag-compliance.md`

**Rules:**
- All lowercase
- Hyphens for word separation
- Descriptive, not generic names
- Place in appropriate subdirectory

---

### Design Tokens

**Format:** `/guidelines/design-tokens/[token-category].md`

**Examples:**
- `colors.md`
- `typography.md`
- `spacing.md`
- `shadows.md`

**Rules:**
- One file per major token category
- Use plural form (colors, not color)
- Include all related tokens (primary, semantic, variants)

---

### Components

**Format:** `/guidelines/components/[ComponentName].md`

**Examples:**
- `Hero.md`
- `Button.md`
- `ProductCard.md`
- `Navigation.md`

**Rules:**
- Use PascalCase matching component file name
- One file per significant component
- Group related components if minimal (e.g., all form inputs in one file)

---

### Reports

**Format:** `/reports/[##]-[domain]-[type]-report.md`

**Examples:**
- `01-visual-design-report.md`
- `02-navigation-accessibility-report.md`
- `03-performance-audit-report.md`

**Rules:**
- Number prefix for chronological ordering
- Domain describes what was analyzed
- Type describes report kind (analysis, audit, review)
- Always ends with `-report.md`

---

### Task Lists

**Format:** `/tasks/[feature]-[component].md`

**Master:** `/tasks/task-list.md` (protected)

**Examples:**
- `homepage-redesign.md`
- `navigation-system.md`
- `checkout-flow.md`

**Rules:**
- All lowercase with hyphens
- Descriptive feature/domain name
- Master task list is always `task-list.md`

---

### Prompts

**Format:** `/prompts/[action]-[scope].md`

**Examples:**
- `cleanup.md`
- `continue.md`
- `analyze-navigation.md`
- `audit-guidelines.md`

**Rules:**
- All lowercase with hyphens
- Start with action verb
- Include scope if not obvious
- Update PROMPT-SYSTEM-GUIDELINES.md when adding new prompt

---

## Template Customization

### When to Modify Templates

✅ **Do modify templates when:**
- Adding consistent value to all future docs
- Establishing new standard sections
- Improving clarity or usability

❌ **Don't modify templates for:**
- One-off use cases
- Experimental sections
- Domain-specific content

### How to Propose Changes

1. Create issue/note describing proposed change
2. Explain why it benefits all future uses
3. Update template
4. Update this `_templates.md` file
5. Consider updating existing docs

---

## Template Maintenance

### Review Schedule

**Quarterly Review:**
- Are all sections still relevant?
- Are examples still accurate?
- Do naming conventions match current practice?
- Are any sections consistently skipped? (Remove or make optional)

### Version Control

**When to increment version:**
- Major structural changes
- New required sections
- Removed sections
- Significant format changes

**Version format:** `X.Y`
- Major version (X): Structural/breaking changes
- Minor version (Y): Additions, clarifications, examples

---

## Best Practices

### For All Templates

1. **Be specific:** Replace all placeholders with actual content
2. **Be concise:** Remove sections that don't apply (mark as N/A with reason)
3. **Link liberally:** Reference related docs, guidelines, code files
4. **Use examples:** Show don't tell wherever possible
5. **Keep current:** Update docs when implementation changes

### For Design Tokens

1. **Always include both CSS and TypeScript:** Show variable definitions in both
2. **Show usage examples:** Demonstrate in actual code
3. **Document accessibility:** Explain WCAG implications
4. **Provide migration path:** If replacing old tokens

### For Components

1. **Document all props:** Don't skip optional props
2. **Show variants:** Include all visual states
3. **Accessibility first:** ARIA, keyboard, screen reader support
4. **Responsive behavior:** Mobile, tablet, desktop differences

### For Reports

1. **Prioritize recommendations:** Use High/Medium/Low clearly
2. **Quantify effort:** Provide hour estimates
3. **Link to tasks:** Connect recommendations to actionable tasks
4. **Include evidence:** Code examples, screenshots, data

### For Task Lists

1. **Break down granularly:** Tasks should be <8 hours each
2. **Track progress:** Update percentages regularly
3. **Note blockers:** Document what's preventing progress
4. **Estimate effort:** Provide realistic hour estimates

### For Prompts

1. **Single-session execution:** Unless explicitly multi-session
2. **Guard rails first:** Protect files, validate inputs
3. **Clear output:** Consistent summary format
4. **Error handling:** Address common failure modes

---

## FAQ

### Q: Which template should I use?

**A:** Depends on what you're creating:
- New guideline/process → **Guideline Template**
- Design system token → **Design Token Template**
- React component doc → **Component Template**
- Analysis/audit → **Report Template**
- Feature tasks → **Task List Template**
- Automated workflow → **Prompt Template**

---

### Q: Can I skip sections?

**A:** Yes, but:
- Mark skipped sections as "N/A" with reason
- Required sections should never be skipped
- Consider if optional section adds value

---

### Q: What if template doesn't fit?

**A:** 
1. Try to adapt template (most docs fit with minor changes)
2. Use closest template and customize
3. If truly unique, create from scratch but borrow structure
4. Consider proposing new template if pattern repeats

---

### Q: How do I update existing docs to use templates?

**A:**
1. Don't rush to retroactively update all docs
2. Update docs when:
   - Making significant changes anyway
   - Doc is frequently referenced
   - Doc is confusing/incomplete
3. Use template as checklist for missing sections

---

### Q: Who maintains templates?

**A:** 
- Primary: Design System Team / Documentation Lead
- Changes: Propose via standard process
- Review: Quarterly or as-needed

---

## Related Guidelines

- `/prompts/PROMPT-SYSTEM-GUIDELINES.md` - Prompt system overview
- `/guidelines/Guidelines.md` - Main project guidelines
- `/guidelines/design-tokens/` - Design token guidelines (uses token template)

---

## Change Log

### Version 1.0 (2024-03-13)
- Initial template system creation
- Created 6 core templates
- Established naming conventions
- Documented usage guidelines

---

**Maintained by:** Documentation Team  
**Next Review:** 2024-06-13 (Quarterly)

# Hand‑Drawn Redesign System Orchestrator

**Version:** 2.0  
**Last Updated:** 2024-03-15  
**Purpose:** Coordinates the comprehensive redesign analysis and implementation across 10 specialized prompts

---

## Executive Summary

**Value:** Consolidates all research and execution tasks into a single controller that sequences the audit and redesign of the site. This ensures that visual, content, component, commerce, motion and accessibility reports feed into a coherent roadmap.

**Risks:** Inconsistent dark‑mode behaviour and residual placeholder copy could cause confusion if left unchecked; large or poorly structured data files can hinder performance and maintainability.

**Next Step:** Run each analysis prompt (01–10) in order, update the guidelines and design tokens, then generate reports and task lists following the standardized workflow.

---

## 📋 Orchestration Workflow

### Phase 1: Guidelines Preparation

**Before running any analysis prompts, ensure all guidelines are up-to-date:**

1. **Update Design Token Guidelines**
   - Verify all `/guidelines/design-tokens/` files use WordPress-aligned CSS variables
   - Ensure dark-light-mode.md has explicit token definitions
   - Confirm all token files reference `--twb-*` or `--wp-preset-*` variables

2. **Update Component Guidelines**
   - Verify `/guidelines/components/` files are accurate
   - Ensure all component guidelines reference design tokens, not hardcoded values
   - Check that accessibility requirements are documented

3. **Verify Architecture Guidelines**
   - Confirm sitemap, component structure, and routing guidelines are current
   - Validate file structure conventions

**CRITICAL:** Do not proceed to Phase 2 until all guidelines are verified and updated.

---

### Phase 2: Wave Execution (Analysis Prompts)

Execute analysis prompts in 3 waves. Each wave must complete before the next begins.

#### Wave 1: Foundation (Design & Content)

**Execute in order:**

1. **/prompts/redesign/01-visual-design-analysis.md**
   - Audits colours, typography, spacing, radii, shadows
   - Identifies gaps vs new brand direction
   - Recommends WordPress-aligned CSS variables
   - **Output:** `/reports/redesign/01-visual-design-report.md`

2. **/prompts/redesign/02-content-strategy-analysis.md**
   - Audits all page content and copy
   - Defines voice & tone transformation
   - Plans data file migration strategy
   - **Output:** `/reports/redesign/02-content-strategy-report.md`

3. **/prompts/redesign/03-component-architecture-analysis.md**
   - Catalogues all React components
   - Identifies refactoring needs
   - Plans data-driven component patterns
   - **Output:** `/reports/redesign/03-component-architecture-report.md`

4. **/prompts/redesign/04-css-token-system-analysis.md**
   - Audits existing token system
   - Defines complete token architecture
   - Plans WordPress theme.json alignment
   - **Output:** `/reports/redesign/04-css-token-system-report.md`

**Wave 1 Success Criteria:**
- [ ] All 4 reports created in `/reports/redesign/`
- [ ] Each report follows the report template structure
- [ ] Design tokens are defined with WordPress CSS variable alignment
- [ ] Dependencies for Wave 2 are documented

---

#### Wave 2: Interaction & Commerce

**Execute after Wave 1 completion:**

5. **/prompts/redesign/05-motion-interaction-analysis.md**
   - Audits existing animations and transitions
   - Defines motion token system
   - Specifies component interactions
   - **Output:** `/reports/redesign/05-motion-interaction-report.md`

6. **/prompts/redesign/06-commerce-experience-analysis.md**
   - Audits shop, cart, checkout flows
   - Defines product data structures
   - Plans commerce component redesign
   - **Output:** `/reports/redesign/06-commerce-experience-report.md`

**Wave 2 Success Criteria:**
- [ ] Both reports created in `/reports/redesign/`
- [ ] Motion tokens integrate with CSS token system from Wave 1
- [ ] Commerce data structures align with content strategy from Wave 1

---

#### Wave 3: Enhancement & Compliance

**Execute after Wave 2 completion:**

7. **/prompts/redesign/07-webgl-3d-feature-analysis.md**
   - Plans interactive 3D features
   - Defines performance budgets
   - Specifies fallback strategies
   - **Output:** `/reports/redesign/07-webgl-3d-feature-report.md`

8. **/prompts/redesign/08-svg-asset-generation.md**
   - Catalogues required SVG assets
   - Defines style guidelines
   - Plans dark-mode variants
   - **Output:** `/reports/redesign/08-svg-asset-generation-report.md`

9. **/prompts/redesign/09-accessibility-audit.md**
   - Comprehensive WCAG 2.1 AA audit
   - Tests contrast, keyboard, screen readers
   - Documents violations and fixes
   - **Output:** `/reports/redesign/09-accessibility-audit-report.md`

**Wave 3 Success Criteria:**
- [ ] All 3 reports created in `/reports/redesign/`
- [ ] Accessibility report validates all token decisions from Wave 1
- [ ] WebGL and SVG specs align with motion system from Wave 2

---

#### Synthesis & Prioritization

**Execute after all 9 analysis prompts complete:**

10. **/prompts/redesign/10-implementation-priority-analysis.md**
    - Synthesizes findings from reports 01-09
    - Creates priority matrix
    - Defines phased implementation plan
    - **Output:** `/reports/redesign/10-implementation-priority-report.md`

**Synthesis Success Criteria:**
- [ ] All 9 prior reports have been reviewed
- [ ] Tasks are categorized by impact and effort
- [ ] Dependencies are mapped
- [ ] 3-phase implementation plan is defined

---

### Phase 3: Task List Generation

**ONLY after all 10 reports are complete:**

Create a master task list that consolidates all recommendations:

**File:** `/tasks/redesign-implementation.md`

**Structure:**
- Phase 1: MVP (Foundational)
- Phase 2: Full Feature Set
- Phase 3: Polish & Advanced

**Task Format:**
```markdown
### [Phase] > [Category] > [Task Name]

**Priority:** High | Medium | Low
**Effort:** S | M | L | XL
**Impact:** High | Medium | Low
**Dependencies:** [List prerequisite tasks]
**Files:** [List affected files]
**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2
```

**Task List Success Criteria:**
- [ ] All high-priority tasks from all 10 reports included
- [ ] Dependencies clearly documented
- [ ] Effort estimates provided
- [ ] Tasks grouped by phase and category

---

## 🎯 Critical Guidelines Compliance

### WordPress CSS Variable System

**MANDATORY:** All styling MUST use WordPress-aligned CSS variables.

**Variable Naming Convention:**
- Colors: `--twb-color-{category}-{variant}`
- Typography: `--twb-font-{property}-{variant}`
- Spacing: `--twb-spacing-{scale}`
- Borders: `--twb-border-{variant}`
- Shadows: `--twb-shadow-{variant}`

**Examples:**
```css
/* ✅ CORRECT */
.component {
  background: var(--twb-color-bg-primary);
  color: var(--twb-color-text-primary);
  font-family: var(--twb-font-family-body);
  padding: var(--twb-spacing-4);
  box-shadow: var(--twb-shadow-base-md);
}

/* ❌ INCORRECT */
.component {
  background: #f5efe4;
  color: #1e1a17;
  font-family: 'Inter', sans-serif;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
}
```

**Reference Guidelines:**
- `/guidelines/development/wordpress-css-variables.md` (MANDATORY)
- `/guidelines/design-tokens/colors.md`
- `/guidelines/design-tokens/spacing.md`
- `/guidelines/design-tokens/shadows.md`
- `/guidelines/design-tokens/dark-light-mode.md` (MANDATORY)

---

### Dark Mode Implementation

**MANDATORY:** Use `[data-theme="dark"]` attributes, NOT `dark:` classes.

**Pattern:**
```css
:root {
  --twb-color-bg-primary: #f5efe4; /* light mode */
}

[data-theme="dark"] {
  --twb-color-bg-primary: #1a1412; /* dark mode */
}
```

**Reference:** `/guidelines/design-tokens/dark-light-mode.md`

---

### File Size Optimization

**MANDATORY:** Keep all files under recommended limits.

**Limits:**
- **Data files:** ~20 kB maximum
- **Component files:** ~300 lines maximum
- **CSS files:** ~500 lines maximum
- **Guideline files:** ~500 lines maximum
- **Prompt files:** ~200 lines maximum
- **Report files:** ~800 lines maximum

**Strategy:** Break large files into smaller, focused modules.

**Why:** AI processing degradation occurs with large files; smaller files improve memory optimization and maintainability.

---

### Data-First Content

**MANDATORY:** All content must be extracted to `/data/` files.

**Size Limits:**
- **JSON files:** Keep under **50 KB** per file
- **Markdown files:** Keep under **100 KB** per file
- **Embedded assets:** Do NOT embed images/base64 data - use paths to `/public/assets/`

**Pattern:**
```typescript
// ✅ CORRECT: /data/homepage.ts
export const homepageContent = {
  hero: {
    title: "Handcrafted Wines",
    subtitle: "Family wine farm since 1918"
  }
};

// Component: /components/Hero.tsx
import { homepageContent } from '../data/homepage';

export function Hero() {
  return <h1>{homepageContent.hero.title}</h1>;
}
```

**Reference Guidelines:**
- `/guidelines/data-size-guidelines.md` (MANDATORY)
- `/prompts/content-migration-to-data-files.md`

---

## 📂 File Creation Standards

### Prompts

**Location:** `/prompts/` (single) or `/prompts/{category}/` (orchestrated)

**Patterns:**

1. **Single Prompt:**
   - File: `/prompts/my-audit.md`
   - Report: `/reports/my-audit-report.md`

2. **Orchestrator Prompt (like this one):**
   - Orchestrator: `/prompts/{category}/00-ORCHESTRATOR.md`
   - Sub-prompts: `/prompts/{category}/01-{name}.md`, `/prompts/{category}/02-{name}.md`, etc.
   - Reports: `/reports/{category}/01-{name}-report.md`, `/reports/{category}/02-{name}-report.md`, etc.

**Template:** `/guidelines/_templates/prompt-template.md`

---

### Reports

**Location:** `/reports/` (single) or `/reports/{category}/` (from orchestrator)

**Naming:** `{##}-{domain}-{type}-report.md`

**Structure:** Must follow `/guidelines/_templates/report-template.md`

**Required Sections:**
- Executive Summary
- Current State Analysis
- Detailed Findings
- Gap Analysis
- Recommendations (High/Medium/Low priority)
- Implementation Roadmap
- Success Metrics

---

### Task Lists

**Location:** `/tasks/`

**Patterns:**

1. **Master Task List:** `/tasks/task-list.md` (protected)
2. **Feature Task Lists:** `/tasks/{feature}-{scope}.md`

**Timing:** Create task lists ONLY after related reports are complete.

**Why:** Full picture is required to accurately define tasks, dependencies, and estimates.

**Template:** `/guidelines/_templates/task-list-template.md`

---

## 🛡️ Quality Gates

### Before Proceeding to Next Wave

**Checklist:**
- [ ] All reports for current wave created
- [ ] Each report follows template structure
- [ ] Executive summaries are clear and actionable
- [ ] Recommendations are prioritized (High/Medium/Low)
- [ ] Dependencies for next wave are documented
- [ ] File sizes are within limits
- [ ] All WordPress CSS variable requirements met

---

### Before Creating Task Lists

**Checklist:**
- [ ] All 10 analysis reports completed
- [ ] All reports reviewed for consistency
- [ ] Dependencies mapped across reports
- [ ] Priority conflicts resolved
- [ ] Effort estimates validated
- [ ] Success metrics defined

---

## 📊 Success Metrics

### Design Token Coverage
- **Target:** 100% token coverage (zero hardcoded values)
- **Measure:** File search for hex colors, pixel values outside tokens

### Accessibility Compliance
- **Target:** WCAG 2.1 AA (zero critical violations)
- **Measure:** Automated + manual testing

### Content Migration
- **Target:** 100% data-driven content
- **Measure:** Zero hardcoded strings in components

### Performance
- **Target:** Max page width 1440px, responsive columns
- **Measure:** Visual regression testing

### Dark Mode
- **Target:** Full support via `[data-theme="dark"]`
- **Measure:** Manual theme toggle testing

---

## 🔄 Execution Order Summary

**Strict sequence:**

1. ✅ **Update all guidelines** (design tokens, components, architecture)
2. ✅ **Wave 1:** Run prompts 01-04, create reports
3. ✅ **Wave 2:** Run prompts 05-06, create reports
4. ✅ **Wave 3:** Run prompts 07-09, create reports
5. ✅ **Synthesis:** Run prompt 10, create final report
6. ✅ **Task Lists:** Create master task list from all 10 reports
7. ✅ **Implementation:** Execute tasks by phase

---

## 📚 Related Documentation

### Guidelines
- `/guidelines/Guidelines.md` - Main guidelines
- `/guidelines/INDEX.md` - Complete index
- `/guidelines/design-tokens/` - All design token guidelines
- `/guidelines/components/` - Component specifications
- `/guidelines/development/wordpress-css-variables.md` - CSS variable standards

### Templates
- `/guidelines/_templates.md` - Template usage guide
- `/guidelines/_templates/prompt-template.md` - Prompt structure
- `/guidelines/_templates/report-template.md` - Report structure
- `/guidelines/_templates/task-list-template.md` - Task list structure

### Migration Prompts
- `/prompts/content-migration-to-data-files.md` - Content extraction
- `/prompts/css-migration-hardcoded-to-variables.md` - CSS variable migration

---

## 🐛 Common Issues

### Issue: Reports created before guidelines updated

**Symptoms:**
- Reports reference outdated token names
- Recommendations don't align with current patterns

**Resolution:**
- Stop execution
- Update all guidelines first
- Re-run affected analysis prompts
- Recreate reports

---

### Issue: Task list created before all reports complete

**Symptoms:**
- Missing tasks from later reports
- Incomplete dependency mapping
- Inaccurate effort estimates

**Resolution:**
- Delete premature task list
- Complete all 10 reports
- Review all reports for consistency
- Create comprehensive task list

---

### Issue: File sizes exceed limits

**Symptoms:**
- AI struggles to process large files
- Incomplete analysis or recommendations
- Memory issues

**Resolution:**
- Break large files into smaller modules
- Split by logical boundaries
- Use imports to connect related files
- Update file size limits in guidelines

---

## 📅 Changelog

### Version 2.0 (2024-03-15)
- Added explicit WordPress CSS variable requirements
- Defined strict 3-wave execution pattern
- Added file size optimization requirements
- Created comprehensive file creation standards
- Added quality gates and success metrics
- Expanded troubleshooting section

### Version 1.0 (2024-03-13)
- Initial orchestrator creation
- Basic wave sequencing defined
- Report validation criteria established

---

**Maintained by:** The Wire Brand Development Team  
**Next Review:** After completion of all 10 analysis prompts
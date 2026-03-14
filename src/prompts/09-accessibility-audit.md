# Accessibility Audit Prompt

## Objective

Conduct a comprehensive accessibility audit of the current Handcrafted Wines application and create a compliance plan to ensure The Wire Brand redesign meets WCAG 2.1 AA standards.

## Input Sources

1. `/Guidelines.md` Section 1 (Accessibility & inclusive design - complete section)
2. Current component files in `/components/` directory
3. Current page files in `/pages/` directory
4. `/styles/globals.css` for contrast verification

## Analysis Requirements

### 1. WCAG 2.1 AA Compliance Audit

#### 1.1 Perceivable

**Color Contrast (Success Criterion 1.4.3)**
- Audit all text/background combinations
- Verify normal text: ≥ 4.5:1
- Verify large text (≥18px regular or ≥14px bold): ≥ 3:1
- Test interactive elements (buttons, links, form controls)
- Check focus indicators

**Test Method:**
```
For each component:
1. List all text/background pairs
2. Calculate contrast ratio using WebAIM tool
3. Document passes/failures
4. Suggest adjusted colors for failures
```

**Non-Text Contrast (1.4.11)**
- UI components (buttons, form borders)
- Graphical objects (icons, decorative SVGs)
- Requirement: ≥ 3:1 against adjacent colors

**Text Spacing (1.4.12)**
- Verify line height: ≥ 1.5× font size
- Paragraph spacing: ≥ 2× font size
- Letter spacing: ≥ 0.12× font size
- Word spacing: ≥ 0.16× font size

**Images of Text (1.4.5)**
- Identify any images containing text
- Verify they're necessary (logos OK, body text not OK)
- Suggest HTML text alternatives

#### 1.2 Operable

**Keyboard Access (2.1.1, 2.1.2)**
Audit all interactive elements:
- Navigation menus
- Dropdowns and mega menus
- Accordions
- Tabs
- Modals and drawers
- Forms
- Product galleries
- Add to cart buttons
- Checkout flow

**Test Method:**
```
For each interactive component:
1. Can you Tab to it?
2. Can you activate it with Enter/Space?
3. Can you navigate within it (arrow keys if applicable)?
4. Can you close/escape it (ESC for modals)?
5. Does focus remain visible?
6. Is tab order logical?
```

**Focus Visible (2.4.7)**
- Verify all focusable elements have clear focus indicator
- Check custom focus styles don't remove default outline without replacement
- Ensure focus is never `outline: none` without alternative

**Focus Order (2.4.3)**
- Verify tab order matches visual reading order
- Check DOM order vs. visual order (flexbox/grid reordering issues)

**Skip Links (2.4.1)**
- Verify "Skip to main content" link exists
- Test it's visible on focus
- Verify it actually works (focus moves to main)

**Page Titles (2.4.2)**
- Audit all page `<title>` elements
- Verify they're unique and descriptive

**Headings (2.4.6, 1.3.1)**
- Audit heading hierarchy (H1 → H2 → H3, no skipping)
- Verify one H1 per page
- Check headings aren't chosen for visual size only

**Link Purpose (2.4.4)**
- Audit vague links ("Click here", "Learn more")
- Verify links are descriptive
- Check icon-only buttons have accessible names

#### 1.3 Understandable

**Language (3.1.1)**
- Verify `<html lang="en">` or appropriate language code
- Check for mixed language content needing `lang` attributes

**On Input (3.2.2)**
- Verify form inputs don't auto-submit on change
- Check focus changes are intentional

**Labels or Instructions (3.3.2)**
- Audit all form fields have visible labels
- Verify placeholder text is not the only label
- Check required fields are marked

**Error Identification (3.3.1)**
- Verify form errors are clearly identified
- Check errors are more than just red color
- Ensure error messages are descriptive

**Error Suggestion (3.3.3)**
- Verify error messages suggest how to fix
- Example: "Enter a valid email address" not just "Invalid"

#### 1.4 Robust

**Parsing (4.1.1)**
- Verify valid HTML (no duplicate IDs, proper nesting)
- Test with HTML validator

**Name, Role, Value (4.1.2)**
- Audit all custom components have proper ARIA
- Verify semantic HTML where possible
- Check ARIA attributes are correct

### 2. Component-Specific Accessibility Audit

For each component category, test:

#### Navigation Components
**Header/Navigation:**
- [ ] Keyboard navigable
- [ ] ARIA landmarks (`<nav>`, `role="navigation"`)
- [ ] Current page indicated (`aria-current="page"`)
- [ ] Mobile menu keyboard accessible
- [ ] Focus trap in mobile menu (when open)
- [ ] ESC closes mobile menu
- [ ] Mega menu keyboard patterns correct

**Breadcrumbs:**
- [ ] Uses `<nav aria-label="Breadcrumb">`
- [ ] Current page not a link (or `aria-current="page"`)
- [ ] Separators are `aria-hidden="true"`

#### Interactive Components

**Buttons:**
- [ ] Use `<button>` not `<div onClick>`
- [ ] Disabled buttons use `disabled` attribute
- [ ] Icon-only buttons have `aria-label`
- [ ] Loading state communicated (aria-live or spinner with label)

**Forms:**
- [ ] All inputs have `<label>` or `aria-label`
- [ ] Required inputs marked (aria-required or required attribute)
- [ ] Error messages associated with inputs (`aria-describedby`)
- [ ] Success messages announced (`role="status"` or `aria-live="polite"`)

**Modals:**
- [ ] Focus moves into modal when opened
- [ ] Focus trapped in modal (Tab cycles within)
- [ ] ESC closes modal
- [ ] Focus returns to trigger on close
- [ ] Modal has `role="dialog"` and `aria-modal="true"`
- [ ] Modal labeled (`aria-labelledby`)

**Accordions:**
- [ ] Button controls panel (`aria-controls`)
- [ ] Expanded state indicated (`aria-expanded`)
- [ ] Panel content hidden when collapsed
- [ ] Header fully clickable (button spans full width)

**Tabs:**
- [ ] Tablist has `role="tablist"`
- [ ] Tab has `role="tab"` and `aria-selected`
- [ ] Panel has `role="tabpanel"`
- [ ] Arrow keys navigate between tabs
- [ ] Home/End jump to first/last tab

**Carousels (if any):**
- [ ] Play/pause controls provided
- [ ] Keyboard navigable (arrow keys)
- [ ] Auto-advance respects prefers-reduced-motion
- [ ] Current slide indicated

#### Content Components

**Images:**
- [ ] Decorative images have `alt=""` or `aria-hidden="true"`
- [ ] Informative images have descriptive alt text
- [ ] Complex images have long descriptions

**SVGs:**
- [ ] Decorative SVGs have `aria-hidden="true"`
- [ ] Informative SVGs have `<title>` and `role="img"`

**Videos (if any):**
- [ ] Captions provided
- [ ] Transcript available
- [ ] Controls keyboard accessible

### 3. Page-Specific Accessibility Audit

For each major page:

**Homepage:**
- [ ] One H1
- [ ] Heading hierarchy logical
- [ ] All CTAs keyboard accessible
- [ ] Hero doesn't auto-play video without controls

**Product Pages:**
- [ ] Image gallery keyboard accessible
- [ ] Add to cart announces feedback
- [ ] Quantity input has label
- [ ] Tabs/accordions keyboard navigable

**Cart:**
- [ ] Item quantity inputs labeled
- [ ] Remove buttons labeled (not just icon)
- [ ] Empty cart state announced

**Checkout:**
- [ ] All form fields labeled
- [ ] Errors clearly associated
- [ ] Progress indicator not solely visual
- [ ] Payment iframe accessible (if iframe)

**Order Confirmation:**
- [ ] Success announced (`role="status"`)
- [ ] Order details available to screen readers

### 4. Motion & Animation Accessibility

**Prefers Reduced Motion (2.3.3)**
- [ ] All components respect `prefers-reduced-motion`
- [ ] Critical content not dependent on motion
- [ ] Parallax effects disabled or simplified
- [ ] Auto-playing animations can be paused

**Seizures and Physical Reactions (2.3.1)**
- [ ] No flashing more than 3 times per second
- [ ] Large moving areas can be stopped

### 5. Mobile & Touch Accessibility

**Touch Target Size (2.5.5)**
- [ ] All interactive elements ≥ 44×44px on touch devices
- [ ] Adequate spacing between touch targets

**Orientation (1.3.4)**
- [ ] Content works in portrait and landscape
- [ ] No orientation locks

**Zoom (1.4.4, 1.4.10)**
- [ ] Site usable at 200% zoom
- [ ] No horizontal scrolling at 320px width
- [ ] Text doesn't truncate at zoom

### 6. Screen Reader Testing

Test with:
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (Mac/iOS)
- TalkBack (Android)

**Test scenarios:**
- Navigate homepage
- Complete wine purchase
- Fill out contact form
- Use accordion/tabs
- Navigate menu

**Document:**
- Announcements for each interaction
- Any confusing or missing information
- Order of announced content

## Deliverables for Report

Generate `/reports/09-accessibility-compliance-report.md` containing:

### Executive Summary
Overview of accessibility status and compliance gaps

### WCAG 2.1 AA Audit Results

#### Contrast Audit
Table of all text/background combinations:
```
| Component | Text Color | BG Color | Ratio | Pass/Fail | Fix |
|-----------|------------|----------|-------|-----------|-----|
| Hero title | #F9F5F0 | #6B2737 | 5.2:1 | Pass | - |
| Body text | #3C3C3C | #F9F5F0 | 8.1:1 | Pass | - |
| Button text | #FFFFFF | #D4856A | 2.8:1 | Fail | Use #C7704D |
```

#### Keyboard Access Audit
For each interactive component:
- Current state (pass/fail)
- Issues found
- Recommended fixes

#### Heading Hierarchy Audit
For each page:
- Current structure (H1 → H2 → H3...)
- Issues (skipped levels, multiple H1s)
- Recommended structure

#### Form Accessibility Audit
For each form:
- Label associations
- Error handling
- Required field marking
- Success messaging

### Component-Specific Issues

For each component with issues:
1. Component name and file path
2. Issue description
3. WCAG criterion violated
4. Impact (Critical/High/Medium/Low)
5. Recommended fix (code example)

### Page-Specific Issues

For each page:
- Accessibility issues found
- Severity ratings
- Fixes required

### Motion & Animation Issues
- Components using motion without reduced-motion support
- Auto-playing content
- Recommended fixes

### Screen Reader Testing Results
- Announcements captured
- Confusing interactions
- Missing information
- Recommended ARIA additions

### Priority Fixes

**Critical (Must Fix):**
- Contrast failures on primary text
- Keyboard traps
- Missing form labels
- No skip link

**High Priority:**
- Focus indicator improvements
- Heading hierarchy fixes
- Missing alt text
- ARIA attribute errors

**Medium Priority:**
- Improved link text
- Better error messages
- Enhanced mobile touch targets

**Low Priority:**
- Nice-to-have ARIA enhancements
- Improved announcements

### Acceptance Criteria
- [ ] All text meets 4.5:1 contrast (normal) or 3:1 (large)
- [ ] All interactive elements keyboard accessible
- [ ] All forms have proper labels
- [ ] Heading hierarchy correct on all pages
- [ ] Skip link present and functional
- [ ] All modals trap focus and close with ESC
- [ ] Reduced motion preference respected
- [ ] Touch targets ≥ 44×44px
- [ ] Site usable at 200% zoom
- [ ] Screen reader testing passed

### Risk Assessment
1. **Contrast Failures:** Multiple color combinations fail AA
   - *Mitigation:* Adjust palette in token system (Report 04)

2. **Keyboard Navigation:** Complex components may have tab order issues
   - *Mitigation:* Test all interactive components, add focus management

3. **Motion:** Current animations don't respect reduced motion
   - *Mitigation:* Implement useReducedMotion hook everywhere

### Dependency Mapping
- **Blocks:** None (Wave 1 prompt, independent)
- **Blocked By:** None
- **Enables:** 10-implementation-priority-analysis (informs priority)

## Quality Standards

The report must:

- Test every interactive component
- Provide contrast ratios for all color pairs
- Include code examples for fixes
- Reference specific WCAG criteria
- Prioritize issues by severity
- Be actionable by a developer

## Success Metrics
- [ ] Complete contrast audit (30+ color pairs)
- [ ] All components tested for keyboard access
- [ ] Heading hierarchy documented for all pages
- [ ] Form accessibility verified
- [ ] Screen reader testing completed
- [ ] Priority fixes clearly ranked
- [ ] Code examples for all major fixes

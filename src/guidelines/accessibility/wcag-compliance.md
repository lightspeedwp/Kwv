# WCAG 2.1 AA Compliance Guidelines

**Category:** Accessibility  
**Domain:** WCAG Compliance  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active - **MANDATORY**

---

## ⚠️ **Non-Negotiable Requirement**

Accessibility is the **first and non-negotiable requirement** for all The Wire Brand designs and implementations. If a design conflicts with these rules, accessibility wins.

---

## Accessibility Rules for Figma Make AI

When generating or modifying layouts and components, Figma Make must:

### 1. Color Contrast (WCAG 2.1 AA)

✅ **Enforce minimum contrast ratios:**
- **Normal text**: Contrast ratio **≥ 4.5:1**
- **Large text** (≥18px regular or ≥14px bold): Contrast ratio **≥ 3:1**
- **Icons and essential UI**: Must also meet AA contrast against background

✅ **Dynamic Contrast:**
- Navigation elements (breadcrumbs, menus) must dynamically adjust color based on background
- Example: White text on dark hero images, dark text on light page backgrounds

❌ **Avoid color-only communication:**
- Never rely on color alone to indicate state (error vs success, active vs inactive)
- Always pair color with text, icons, or shape differences

### 2. Keyboard Access

✅ **All interactive elements must:**
- Be reachable via keyboard alone (Tab/Shift+Tab)
- Show a clear and consistent **focus ring** or focus treatment
- Never have focus removed or hidden for visual reasons

✅ **Include a "Skip to main content" link** at the top of every page, visible on keyboard focus

✅ **For complex components** (menus, accordions, tabs):
- Arrow-key navigation should not trap focus
- Tab order must remain logical and predictable

### 3. Focus Order & Semantics

✅ **Maintain logical focus order:**
- Align with visual reading order (left-to-right, top-to-bottom)
- Don't let visual positioning (CSS) break keyboard flow

✅ **Use meaningful heading hierarchy:**
- H1 → H2 → H3 (don't skip levels for visual style only)
- One H1 per page
- Headings describe content structure, not just visual size

### 4. Screen Reader Support

✅ **All controls must have descriptive labels:**
- Form inputs need visible labels (placeholders are not enough)
- Icon-only buttons need `aria-label` or visually-hidden text

✅ **Avoid visual-only indicators:**
- Don't communicate critical information through position, color, or shape alone
- Always provide text alternatives

### 5. Avoid Inaccessible Patterns

❌ **No critical content in auto-advancing carousels**
❌ **No hover-only reveals** for critical information
❌ **No precise pointer positioning required** for essential tasks

### 6. Text Zoom & Reflow

✅ **Components must tolerate:**
- Longer labels and translations (design for text expansion)
- Browser zoom up to 200% (layouts must remain usable)
- Mobile viewport widths down to 320px (no horizontal scrolling)

---

## Modals, Drawers & Overlays

When an overlay opens (age gate, mini cart, newsletter modal):

✅ **Focus management:**
1. Focus moves into the overlay
2. Tab/Shift+Tab cycles inside overlay (focus trap)
3. ESC closes overlay and returns focus to trigger element

✅ **Visible close controls:**
- Clearly labeled close button (X icon + "Close" text)
- ESC key closes (keyboard shortcut)

✅ **Scrims must be dark/light enough** that content in front is visually dominant

---

## Motion & Animation

✅ **Respect `prefers-reduced-motion`:**
- Swap heavy animations for fades or subtle transitions
- Never auto-play carousels for core content

✅ **If carousels are required:**
- Provide explicit play/pause controls
- Use slow timing (≥5 seconds per slide)
- Keyboard controls (arrow keys)

---

## Forms & Validation

✅ **Each form field must have:**
- Visible label (not just placeholder)
- Clear field purpose

✅ **Error messages must:**
- Be adjacent to the problem field
- Describe the issue clearly ("Enter a valid email address")
- Use more than just red color (add icons or text)

✅ **Success messages:**
- Visually distinct from errors
- Use text + color, not color alone

✅ **Required fields:**
- Clearly indicated (`*` or "Required" text)
- Meaning of indicator explained ("* indicates required field")

---

## Typography & Readability

✅ **Minimum body text sizes:**
- **16px** on mobile
- **18px** preferred for long-form reading

✅ **Line length:**
- Target **70-80 characters per line** on large screens
- Use `container.content` (max-w-[960px]) for text-heavy sections

✅ **Line height:**
- Body text: **1.5-1.7**
- Headings: **1.2-1.3**

✅ **Avoid long paragraphs of centered text**
- Use left alignment for sustained reading
- Center alignment only for short headings/callouts

---

## Complex Components

### Accordions (FAQs)
- Entire header row must be clickable
- Include open/closed icon that changes with state
- Only one level of nesting (avoid nested accordions)

### Tabs (My Account, Product Info)
- Tabs must be keyboard focusable
- Active tab visually distinct
- One tab panel visible at a time
- Concise, descriptive labels

### Timelines (History)
- Single clear reading direction (vertical or horizontal)
- Legible markers and labels
- Adequate spacing on all devices
- No horizontal scroll on mobile

---

## Testing Checklist

- [ ] All text meets 4.5:1 contrast (normal) or 3:1 (large text)
- [ ] All interactive elements reachable by keyboard
- [ ] Focus ring visible and consistent
- [ ] Skip to main content link present
- [ ] No color-only state indicators
- [ ] Modals trap focus and close with ESC
- [ ] Forms have visible labels
- [ ] Error messages are descriptive
- [ ] Layouts work at 200% zoom
- [ ] Respects `prefers-reduced-motion`

---

## Tools

- **Contrast Checker**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Screen Reader**: NVDA (Windows), VoiceOver (Mac/iOS)
- **Keyboard Testing**: Tab through entire page, verify focus order
- **Zoom Testing**: Cmd/Ctrl + (zoom to 200%)

---

## Related Guidelines

- `/guidelines/design-tokens/colors.md` - Contrast-compliant color palette
- `/guidelines/design-tokens/typography.md` - Readable font sizes
- `/guidelines/design-tokens/touch-targets.md` - Minimum interactive sizes
- `/guidelines/accessibility/keyboard-navigation.md` - Keyboard shortcuts
- `/guidelines/accessibility/screen-readers.md` - ARIA patterns

---

**Maintained by:** Accessibility Team  
**Review Cycle:** Quarterly or with major feature updates  
**Next Review:** 2024-06-13

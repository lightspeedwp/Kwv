# Form Design Tokens

**Category:** Design Tokens  
**Domain:** Forms & Inputs  
**Version:** 1.0  
**Last Updated:** 2024-03-13  
**Status:** Active

---

## Overview

The Wire Brand form system creates accessible, intuitive input experiences that feel organic and trustworthy. Forms should guide users clearly while maintaining brand warmth and authenticity.

**Key Characteristics:**
- WCAG 2.1 AA accessible (contrast, labels, error states)
- Clear visual feedback (focus, error, success states)
- Minimum 44×44px touch targets (mobile)
- Descriptive labels and error messages
- Progressive disclosure for complex forms

---

## Input Specifications

### Text Input (Default)

**Dimensions:**
- Height: `44px` (mobile/desktop)
- Padding: `12px 16px` (vertical | horizontal)
- Border: `1px` solid `twb-border-tertiary`
- Border radius: `4px` (`twb-radius-input`)
- Font size: `16px` (prevents zoom on iOS)

**States:**
| State | Border | Background | Text | Shadow |
|-------|--------|------------|------|--------|
| Default | `1px` tertiary | `twb-color-paper` | `twb-color-ink` | None |
| Hover | `1px` secondary | `twb-color-paper` | `twb-color-ink` | None |
| Focus | `2px` focus (plum) | `twb-color-paper` | `twb-color-ink` | `twb-shadow-glow-plum` |
| Filled | `1px` tertiary | `twb-color-paper` | `twb-color-ink` | None |
| Disabled | `1px` tertiary (40% opacity) | Gray tint | Gray (60% opacity) | None |
| Error | `2px` error (red) | `twb-color-paper` | `twb-color-ink` | None |
| Success | `2px` success (vine) | `twb-color-paper` | `twb-color-ink` | None |

**Implementation:**
```tsx
<input
  type="text"
  className="w-full h-11 px-4 py-3 border border-[var(--twb-border-tertiary)] rounded-[var(--twb-radius-input)] text-[var(--twb-color-ink)] bg-[var(--twb-color-paper)] text-base focus:outline-none focus:border-2 focus:border-[var(--twb-border-focus)] focus:shadow-twb-glow-plum transition-all duration-twb-fast placeholder:text-[var(--twb-color-vine)]/50 disabled:opacity-60 disabled:cursor-not-allowed"
  placeholder="Enter your name"
/>
```

### Textarea

**Dimensions:**
- Min height: `120px`
- Padding: `12px 16px`
- Resize: `vertical` (allow user control)

**Implementation:**
```tsx
<textarea
  rows={5}
  className="w-full min-h-[120px] px-4 py-3 border border-[var(--twb-border-tertiary)] rounded-[var(--twb-radius-input)] text-[var(--twb-color-ink)] bg-[var(--twb-color-paper)] text-base resize-y focus:outline-none focus:border-2 focus:border-[var(--twb-border-focus)] transition-all duration-twb-fast placeholder:text-[var(--twb-color-vine)]/50"
  placeholder="Tell us about your wine preferences..."
/>
```

### Select Dropdown

**Dimensions:**
- Height: `44px`
- Padding: `12px 16px 12px 16px`
- Icon spacing: `40px` right padding (for chevron)

**Implementation:**
```tsx
<div className="relative">
  <select className="w-full h-11 px-4 py-3 pr-10 border border-[var(--twb-border-tertiary)] rounded-[var(--twb-radius-input)] text-[var(--twb-color-ink)] bg-[var(--twb-color-paper)] text-base appearance-none focus:outline-none focus:border-2 focus:border-[var(--twb-border-focus)] transition-all duration-twb-fast">
    <option value="">Select wine type</option>
    <option value="red">Red Wine</option>
    <option value="white">White Wine</option>
  </select>
  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--twb-color-vine)] pointer-events-none" />
</div>
```

### Checkbox

**Dimensions:**
- Size: `20px × 20px` (visible area)
- Touch target: `44px × 44px` (with padding)
- Border: `2px` solid `twb-border-secondary`
- Border radius: `2px` (`twb-radius-xs`)

**Implementation:**
```tsx
<label className="inline-flex items-center gap-3 cursor-pointer group min-h-[44px] py-2">
  <input
    type="checkbox"
    className="h-5 w-5 rounded-twb-xs border-2 border-[var(--twb-border-secondary)] text-[var(--twb-color-plum)] focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:ring-offset-2 cursor-pointer"
  />
  <span className="text-[var(--twb-color-ink)] group-hover:text-[var(--twb-color-plum)] transition-colors">
    Subscribe to newsletter
  </span>
</label>
```

### Radio Button

**Dimensions:**
- Size: `20px × 20px`
- Touch target: `44px × 44px`
- Border: `2px` solid `twb-border-secondary`
- Border radius: `full` (circular)

**Implementation:**
```tsx
<div className="space-y-3">
  <label className="inline-flex items-center gap-3 cursor-pointer group min-h-[44px] py-2">
    <input
      type="radio"
      name="shipping"
      value="standard"
      className="h-5 w-5 border-2 border-[var(--twb-border-secondary)] text-[var(--twb-color-plum)] focus:ring-2 focus:ring-[var(--twb-color-plum)] focus:ring-offset-2 cursor-pointer"
    />
    <span className="text-[var(--twb-color-ink)]">Standard Shipping (3-5 days)</span>
  </label>
</div>
```

---

## Label Standards

### Label Requirements (Accessibility)

**All inputs MUST have labels:**
- Visible label (preferred)
- `aria-label` attribute
- `aria-labelledby` reference
- Placeholder text is NOT a substitute for labels

### Label Styling

**Default Label:**
```tsx
<label className="block text-sm font-medium text-[var(--twb-color-ink)] mb-2">
  Email Address <span className="text-[var(--twb-border-error)]">*</span>
</label>
<input type="email" required />
```

**Inline Label (Checkbox/Radio):**
```tsx
<label className="inline-flex items-center gap-3 cursor-pointer">
  <input type="checkbox" />
  <span className="text-[var(--twb-color-ink)]">Label text</span>
</label>
```

---

## Error & Validation States

### Error State

**Visual indicators:**
- Red border (`2px` solid error color)
- Error icon (AlertCircle)
- Error message below input
- `aria-invalid="true"`
- `aria-describedby` linking to error message

**Implementation:**
```tsx
<div>
  <label htmlFor="email" className="block text-sm font-medium text-[var(--twb-color-ink)] mb-2">
    Email Address *
  </label>
  <div className="relative">
    <input
      id="email"
      type="email"
      className="w-full h-11 px-4 py-3 pr-10 border-2 border-[var(--twb-border-error)] rounded-[var(--twb-radius-input)] text-[var(--twb-color-ink)] bg-[var(--twb-color-paper)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-border-error)] focus:ring-offset-2"
      aria-invalid="true"
      aria-describedby="email-error"
    />
    <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--twb-border-error)]" />
  </div>
  <p id="email-error" className="text-sm text-[var(--twb-border-error)] mt-2 flex items-center gap-1">
    Please enter a valid email address
  </p>
</div>
```

### Success State

**Visual indicators:**
- Green border (`2px` solid success color)
- Success icon (CheckCircle)
- Optional success message

**Implementation:**
```tsx
<div className="relative">
  <input
    className="w-full h-11 px-4 py-3 pr-10 border-2 border-[var(--twb-border-success)] rounded-[var(--twb-radius-input)]"
  />
  <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--twb-border-success)]" />
</div>
```

### Helper Text

**Default helper text (neutral):**
```tsx
<p className="text-sm text-[var(--twb-color-vine)] mt-2">
  We'll never share your email with anyone else.
</p>
```

---

## Form Layout Patterns

### Vertical Form (Recommended)

**Use for:** Most forms (better mobile experience)

```tsx
<form className="space-y-6 max-w-md">
  <div>
    <label className="block text-sm font-medium text-[var(--twb-color-ink)] mb-2">
      Full Name *
    </label>
    <input type="text" className="w-full h-11 px-4 py-3 border border-[var(--twb-border-tertiary)] rounded-[var(--twb-radius-input)]" />
  </div>
  
  <div>
    <label className="block text-sm font-medium text-[var(--twb-color-ink)] mb-2">
      Email *
    </label>
    <input type="email" className="w-full h-11 px-4 py-3 border border-[var(--twb-border-tertiary)] rounded-[var(--twb-radius-input)]" />
  </div>
  
  <button type="submit" className="w-full bg-[var(--twb-color-plum)] text-white py-3 rounded-[var(--twb-radius-button-primary)]">
    Submit
  </button>
</form>
```

### Horizontal Form (Compact)

**Use for:** Filters, search bars, newsletter signup

```tsx
<form className="flex gap-4 items-end">
  <div className="flex-1">
    <label className="block text-sm font-medium text-[var(--twb-color-ink)] mb-2">
      Email
    </label>
    <input type="email" className="w-full h-11 px-4 border border-[var(--twb-border-tertiary)] rounded-[var(--twb-radius-input)]" />
  </div>
  <button type="submit" className="h-11 bg-[var(--twb-color-plum)] text-white px-6 rounded-[var(--twb-radius-button-primary)]">
    Subscribe
  </button>
</form>
```

### Grid Form (Multi-column)

**Use for:** Checkout, address forms (desktop)

```tsx
<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label className="block text-sm font-medium text-[var(--twb-color-ink)] mb-2">
      First Name *
    </label>
    <input type="text" className="w-full h-11 px-4 border border-[var(--twb-border-tertiary)] rounded-[var(--twb-radius-input)]" />
  </div>
  
  <div>
    <label className="block text-sm font-medium text-[var(--twb-color-ink)] mb-2">
      Last Name *
    </label>
    <input type="text" className="w-full h-11 px-4 border border-[var(--twb-border-tertiary)] rounded-[var(--twb-radius-input)]" />
  </div>
  
  <div className="md:col-span-2">
    <label className="block text-sm font-medium text-[var(--twb-color-ink)] mb-2">
      Address *
    </label>
    <input type="text" className="w-full h-11 px-4 border border-[var(--twb-border-tertiary)] rounded-[var(--twb-radius-input)]" />
  </div>
</form>
```

---

## Accessibility Requirements

### Keyboard Navigation
- [ ] Tab/Shift+Tab moves between fields
- [ ] Enter submits form (on submit button or last field)
- [ ] Space toggles checkboxes/radios
- [ ] Arrow keys navigate radio groups
- [ ] Escape dismisses dropdowns/autocomplete

### Labels & ARIA
- [ ] All inputs have associated labels
- [ ] Required fields indicated with `required` attribute
- [ ] Error states use `aria-invalid="true"`
- [ ] Error messages linked with `aria-describedby`
- [ ] Fieldsets group related inputs with `<fieldset>` and `<legend>`

### Focus Indicators
- [ ] All inputs have visible focus ring (2px plum ring)
- [ ] Focus ring has sufficient contrast (3:1 minimum)
- [ ] Focus order follows visual order

### Error Messages
- [ ] Errors announced to screen readers
- [ ] Error summary at top of form (after submit)
- [ ] Specific, actionable error messages
- [ ] No color-only error indication

---

## Responsive Behavior

### Mobile (0-767px)
- Full-width inputs
- Stacked layout (vertical)
- Font size ≥ 16px (prevents zoom on iOS)
- Touch targets ≥ 44×44px
- Adequate spacing between fields (16px minimum)

### Tablet (768px-1023px)
- 2-column grid for short fields (first/last name)
- Full-width for long fields (address, message)

### Desktop (1024px+)
- Multi-column layouts where appropriate
- Hover states visible
- Keyboard shortcuts available

---

## Form Component (Reusable)

```tsx
/**
 * FormField Component
 * 
 * Reusable form field with label, input, error, and helper text.
 * 
 * @param {string} label - Field label text
 * @param {string} id - Unique field ID
 * @param {string} error - Error message (if validation fails)
 * @param {string} helperText - Helper text below input
 * @param {boolean} required - Whether field is required
 */
export function FormField({
  label,
  id,
  error,
  helperText,
  required = false,
  type = 'text',
  ...inputProps
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-[var(--twb-color-ink)] mb-2"
      >
        {label}
        {required && <span className="text-[var(--twb-border-error)] ml-1">*</span>}
      </label>
      
      <div className="relative">
        <input
          id={id}
          type={type}
          required={required}
          className={cn(
            "w-full h-11 px-4 py-3 border rounded-[var(--twb-radius-input)] text-[var(--twb-color-ink)] bg-[var(--twb-color-paper)] text-base focus:outline-none transition-all duration-twb-fast placeholder:text-[var(--twb-color-vine)]/50",
            error
              ? "border-2 border-[var(--twb-border-error)] pr-10 focus:ring-2 focus:ring-[var(--twb-border-error)] focus:ring-offset-2"
              : "border border-[var(--twb-border-tertiary)] focus:border-2 focus:border-[var(--twb-border-focus)] focus:shadow-twb-glow-plum"
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...inputProps}
        />
        
        {error && (
          <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--twb-border-error)]" />
        )}
      </div>
      
      {error && (
        <p id={`${id}-error`} className="text-sm text-[var(--twb-border-error)] mt-2">
          {error}
        </p>
      )}
      
      {!error && helperText && (
        <p id={`${id}-helper`} className="text-sm text-[var(--twb-color-vine)] mt-2">
          {helperText}
        </p>
      )}
    </div>
  );
}
```

---

## Related Guidelines

- [Buttons](/guidelines/design-tokens/buttons.md) - Submit button styles
- [Colors](/guidelines/design-tokens/colors.md) - Form color palette
- [Touch Targets](/guidelines/design-tokens/touch-targets.md) - Mobile accessibility
- [WCAG Compliance](/guidelines/accessibility/wcag-compliance.md) - Form accessibility

---

## Changelog

### Version 1.0 (2024-03-13)
- Initial form system created
- Input states documented (default, hover, focus, error, success, disabled)
- Label standards defined
- Error/validation patterns established
- Responsive layouts documented
- Reusable FormField component created
- Accessibility requirements documented

---

**Questions or Issues?**  
Contact the design system team or reference the main [Design Tokens Overview](/guidelines/design-tokens/).

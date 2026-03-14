# [Token Category] Design Tokens

**Category:** Design Tokens  
**Domain:** [Colors | Typography | Spacing | etc.]  
**Version:** 1.0  
**Last Updated:** YYYY-MM-DD  
**Status:** Active

---

## Overview

[Brief description of this token category and its purpose in The Wire Brand design system]

**Key Characteristics:**
- Characteristic 1
- Characteristic 2
- Characteristic 3

---

## Token Definitions

### Primary Tokens

| Token Name | Value | CSS Variable | Usage | Notes |
|------------|-------|--------------|-------|-------|
| `twb-[name]` | [value] | `--twb-[name]` | [When to use] | [Special notes] |

### Semantic Tokens

| Token Name | References | CSS Variable | Usage |
|------------|------------|--------------|-------|
| `twb-[semantic-name]` | `var(--twb-[base])` | `--twb-[semantic-name]` | [Context] |

### Variant Tokens

[If applicable - light/dark mode, hover states, etc.]

| Token Name | Light Mode | Dark Mode | CSS Variable |
|------------|-----------|-----------|--------------|
| `twb-[name]` | [light value] | [dark value] | `--twb-[name]` |

---

## Implementation

### CSS Variables

**File:** `/styles/globals.css`

```css
:root {
  /* === [CATEGORY] TOKENS === */
  --twb-[token-name]: [value];
  --twb-[token-name]: [value];
  --twb-[token-name]: [value];
}

/* Dark mode (if applicable) */
.dark {
  --twb-[token-name]: [dark-value];
}
```

### TypeScript Constants

**File:** `/constants/theme.ts`

```typescript
/**
 * [Category] tokens for The Wire Brand
 */
export const [CATEGORY] = {
  [tokenName]: '[value]',
  [tokenName]: '[value]',
} as const;

/**
 * CSS Variable references
 */
export const CSS_VARS_[CATEGORY] = {
  [tokenName]: 'var(--twb-[token-name])',
} as const;
```

### Tailwind Usage

```tsx
// Direct value usage
<div className="[property]-[[value]]">

// Using arbitrary values with CSS vars
<div className="[property]-[var(--twb-[token-name])]">
```

---

## Usage Guidelines

### When to Use

✅ **Use these tokens when:**
- Scenario 1
- Scenario 2
- Scenario 3

### When NOT to Use

❌ **Avoid these tokens when:**
- Scenario 1
- Scenario 2

### Component-Specific Usage

| Component | Token(s) | Rationale |
|-----------|----------|-----------|
| [Component] | `twb-[token]` | [Why this token] |

---

## Accessibility Considerations

[Specific accessibility requirements for this token category]

- **WCAG Requirement:** [Relevant standard]
- **Testing:** [How to validate]
- **Common Issues:** [What to watch for]

---

## Examples

### Correct Usage

```tsx
// Example 1: [Description]
<Component className="[using-token]" />

// Example 2: [Description]
<Component style={{ property: 'var(--twb-[token])' }} />
```

### Incorrect Usage

```tsx
// ❌ Don't do this
<Component className="[hardcoded-value]" />

// ✅ Do this instead
<Component className="[using-token]" />
```

---

## Related Tokens

### Complementary Categories
- `/guidelines/design-tokens/[related].md`

### Often Used Together
- `twb-[related-token-1]`
- `twb-[related-token-2]`

---

## Migration Notes

### Deprecated Tokens

| Old Token | New Token | Migration Deadline |
|-----------|-----------|-------------------|
| `old-name` | `twb-new-name` | YYYY-MM-DD |

### Breaking Changes

**Version X.X (Date):**
- [Change description]
- [Migration path]

---

## Validation Checklist

- [ ] All tokens use `twb-` prefix
- [ ] All tokens defined in `/styles/globals.css`
- [ ] All tokens exported in `/constants/theme.ts`
- [ ] Accessibility requirements met
- [ ] Dark mode variants defined (if applicable)
- [ ] Documentation complete
- [ ] Examples tested

---

## Change Log

### Version 1.0 (YYYY-MM-DD)
- Initial token definition
- [Change notes]

---

**Maintained by:** Design System Team  
**Review Cycle:** Monthly or with major design updates

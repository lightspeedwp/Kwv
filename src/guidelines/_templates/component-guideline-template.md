# [Component Name] Component Guidelines

**Component:** [ComponentName]  
**File:** `/components/[category]/[ComponentName].tsx`  
**Version:** 1.0  
**Last Updated:** YYYY-MM-DD  
**Status:** [Draft | Active | Deprecated]

---

## Overview

[Brief description of what this component does and when to use it]

**Component Type:** [Atom | Molecule | Organism | Template]  
**Category:** [Layout | Common | Section | Shop | UI]

---

## Anatomy

```
[ComponentName]
├─ Part 1 (required)
├─ Part 2 (optional)
└─ Part 3 (conditional)
```

**Required Elements:**
- Element 1: Description
- Element 2: Description

**Optional Elements:**
- Element 1: Description

---

## Props API

### Required Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `prop1` | `string` | - | [Description] |
| `prop2` | `number` | - | [Description] |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'a' \| 'b'` | `'a'` | [Description] |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | [Description] |

### Event Handlers

| Prop | Type | Description |
|------|------|-------------|
| `onClick` | `() => void` | [When fired] |
| `onChange` | `(value: T) => void` | [When fired] |

---

## Variants

### Variant: [VariantName]

**When to use:** [Context]

**Example:**
```tsx
<ComponentName variant="variantName" />
```

**Visual characteristics:**
- Characteristic 1
- Characteristic 2

---

## Design Tokens Used

| Token Category | Specific Tokens | Usage |
|----------------|----------------|-------|
| Colors | `twb-color-[name]` | [Where used] |
| Typography | `twb-font-[name]` | [Where used] |
| Spacing | `twb-space-[name]` | [Where used] |

---

## Accessibility

### ARIA Attributes

```tsx
<ComponentName
  role="[role]"
  aria-label="[label]"
  aria-describedby="[id]"
/>
```

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | [Behavior] |
| `Enter` | [Behavior] |
| `Escape` | [Behavior] |

### Screen Reader Considerations

- Consideration 1
- Consideration 2

### WCAG Compliance

- ✅ **2.1.1 Keyboard:** [How met]
- ✅ **2.4.7 Focus Visible:** [How met]
- ✅ **1.4.3 Contrast:** [How met]

---

## Usage Examples

### Basic Usage

```tsx
import { ComponentName } from '@/components/[category]/ComponentName';

function Example() {
  return (
    <ComponentName
      prop1="value"
      prop2={123}
    />
  );
}
```

### With Variants

```tsx
<ComponentName variant="alternative" size="lg" />
```

### With Children

```tsx
<ComponentName>
  <ChildComponent />
</ComponentName>
```

### Complex Example

```tsx
function AdvancedExample() {
  const [state, setState] = useState();
  
  return (
    <ComponentName
      prop1="value"
      onChange={(value) => setState(value)}
    />
  );
}
```

---

## Composition Patterns

### Pattern: [PatternName]

**Use case:** [When to use this pattern]

```tsx
<ComponentName>
  <RelatedComponent1 />
  <RelatedComponent2 />
</ComponentName>
```

---

## States & Behaviors

### Interactive States

| State | Visual Treatment | Trigger |
|-------|-----------------|---------|
| Default | [Description] | Initial render |
| Hover | [Description] | Mouse over |
| Focus | [Description] | Keyboard focus |
| Active | [Description] | Mouse down |
| Disabled | [Description] | `disabled` prop |

### Loading State

```tsx
<ComponentName isLoading={true} />
```

### Error State

```tsx
<ComponentName error="Error message" />
```

---

## Responsive Behavior

### Mobile (< 768px)

- Behavior 1
- Behavior 2

### Tablet (768px - 1024px)

- Behavior 1
- Behavior 2

### Desktop (> 1024px)

- Behavior 1
- Behavior 2

---

## Do's and Don'ts

### ✅ Do

- Do this
- Do that
- Do another thing

### ❌ Don't

- Don't do this
- Don't do that
- Avoid this pattern

---

## Related Components

| Component | Relationship | When to Use |
|-----------|-------------|-------------|
| [Component A] | [Similar/Parent/Child] | [Context] |
| [Component B] | [Similar/Parent/Child] | [Context] |

---

## Implementation Notes

### Performance Considerations

- Note 1
- Note 2

### Browser Compatibility

- Works in: [browsers]
- Issues in: [browsers if any]

### Known Limitations

- Limitation 1
- Limitation 2

---

## Testing

### Unit Tests

```tsx
describe('ComponentName', () => {
  it('should render correctly', () => {
    // test
  });
});
```

### Visual Regression

- Snapshot 1: Default state
- Snapshot 2: Variant state

### Accessibility Tests

- [ ] Keyboard navigation
- [ ] Screen reader announcements
- [ ] Color contrast
- [ ] Focus management

---

## Migration Guide

### From Previous Version

[If applicable - how to migrate from older implementation]

### Breaking Changes

**Version X.X:**
- Change description
- Migration path

---

## Change Log

### Version 1.0 (YYYY-MM-DD)
- Initial component creation
- [Feature/Change description]

---

**Maintained by:** Component Team  
**Review Cycle:** As-needed with component updates

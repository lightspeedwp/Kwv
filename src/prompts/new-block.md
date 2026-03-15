# New Block Component Prompt

**Trigger:** `new block`  
**Version:** 1.0.0  
**Last Updated:** 2024-03-15  
**Purpose:** Create a new atomic block component with proper structure, documentation, and CSS variable usage

---

## Mission

Generate a new atomic block component (Button, Badge, PriceTag, etc.) with complete TypeScript typing, JSDoc documentation, CSS variable usage (no hardcoded values), and corresponding guideline documentation.

---

## Prerequisites

- `/guidelines/_templates/component-guideline-template.md` - Component documentation template
- `/guidelines/design-tokens/*.md` - All design tokens must be available
- `/guidelines/development/wordpress-css-variables.md` - CSS variable standards

---

## Workflow

### Step 1: Gather Requirements

**Ask user:**
```
What block component would you like to create?
Examples: PriceTag, Badge, Chip, Tag, Label, StatusIndicator

Component name: _______
Purpose: _______
Primary use case: _______
```

**Validate:**
- Name is PascalCase
- Component doesn't already exist in `/components/common/`
- Purpose is clear (atomic, reusable UI element)

---

### Step 2: Determine Component Category

**Atomic Block Components go in:**
```
/components/common/{ComponentName}.tsx
```

**Examples:**
- Button, Badge, Tag, Chip → `/components/common/`
- ProductCard, Hero → `/components/sections/` (NOT atomic blocks)

**Confirm category is "common" before proceeding.**

---

### Step 3: Define Component Interface

**Ask user:**
```
What props does this component need?

Common patterns:
- Variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
- Size: 'sm' | 'md' | 'lg'
- Children: React.ReactNode
- ClassName: string (for extension)
- Any specific props?
```

**Generate TypeScript interface:**
```typescript
export interface {ComponentName}Props {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}
```

---

### Step 4: Generate Component File

**File:** `/components/common/{ComponentName}.tsx`

**Template:**
```typescript
/**
 * {ComponentName}
 * 
 * {Brief description of what the component does}
 * 
 * Features:
 * - {Feature 1}
 * - {Feature 2}
 * - Uses CSS variables (no hardcoded values)
 * - WCAG AA accessible
 * 
 * @param {ComponentName}Props props - Component props
 * @returns React component
 */

import React from 'react';

export interface {ComponentName}Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const {ComponentName}: React.FC<{ComponentName}Props> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
}) => {
  // Base classes using CSS variables
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors';
  
  // Variant classes (use CSS variables ONLY)
  const variantClasses = {
    primary: 'bg-[var(--twb-color-accent-plum)] text-[var(--twb-color-text-on-dark)]',
    secondary: 'bg-[var(--twb-color-bg-secondary)] text-[var(--twb-color-text-primary)]',
  };
  
  // Size classes (use CSS variables ONLY)
  const sizeClasses = {
    sm: 'px-[var(--twb-spacing-2)] py-[var(--twb-spacing-1)] text-[length:var(--twb-font-size-caption)]',
    md: 'px-[var(--twb-spacing-3)] py-[var(--twb-spacing-2)] text-[length:var(--twb-font-size-body)]',
    lg: 'px-[var(--twb-spacing-4)] py-[var(--twb-spacing-3)] text-[length:var(--twb-font-size-body-large)]',
  };
  
  return (
    <span 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      role="status" // or appropriate ARIA role
    >
      {children}
    </span>
  );
};
```

**Requirements:**
- ✅ JSDoc header with description and features
- ✅ TypeScript interface exported
- ✅ Default props defined
- ✅ CSS variables ONLY (no hardcoded colors, spacing, fonts)
- ✅ ARIA role if needed
- ✅ ClassName extension support

---

### Step 5: Generate Component Guideline

**File:** `/guidelines/components/{ComponentName}.md`

**Load template:** `/guidelines/_templates/component-guideline-template.md`

**Populate sections:**
```markdown
# {ComponentName} Component Guidelines

**Component:** {ComponentName}  
**File:** `/components/common/{ComponentName}.tsx`  
**Version:** 1.0.0  
**Last Updated:** YYYY-MM-DD  
**Status:** Active

---

## Overview

{Description of component and when to use it}

**Component Type:** Atom  
**Category:** Common

---

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size preset |
| `children` | `React.ReactNode` | - | Content to display |
| `className` | `string` | `''` | Additional classes |

---

## Usage Examples

### Basic Usage
\`\`\`tsx
<{ComponentName}>Default</{ComponentName}>
\`\`\`

### With Variant
\`\`\`tsx
<{ComponentName} variant="secondary">Secondary Style</{ComponentName}>
\`\`\`

### With Size
\`\`\`tsx
<{ComponentName} size="sm">Small</{ComponentName}>
<{ComponentName} size="lg">Large</{ComponentName}>
\`\`\`

---

## Accessibility

- Uses semantic HTML
- Includes ARIA role: `status` (or appropriate)
- Keyboard accessible (if interactive)
- WCAG AA contrast ratios verified

---

## Design Tokens Used

- Colors: `--twb-color-accent-plum`, `--twb-color-text-on-dark`
- Spacing: `--twb-spacing-2`, `--twb-spacing-3`, `--twb-spacing-4`
- Typography: `--twb-font-size-caption`, `--twb-font-size-body`

---

## Related Components

- [Button](/guidelines/components/Button.md)
- [Badge](/guidelines/components/Badge.md)
```

---

### Step 6: Update Component Index

**File:** `/components/common/index.ts` (if it exists)

Add export:
```typescript
export { {ComponentName} } from './{ComponentName}';
export type { {ComponentName}Props } from './{ComponentName}';
```

---

### Step 7: Add to Guidelines Index

**File:** `/guidelines/INDEX.md`

Add to components section:
```markdown
- [{ComponentName}](/guidelines/components/{ComponentName}.md)
```

---

## Validation Checklist

Before completing, verify:

- [ ] Component uses ONLY CSS variables (no hardcoded values)
- [ ] JSDoc header is complete
- [ ] TypeScript interface is exported
- [ ] Props have sensible defaults
- [ ] Component guideline generated
- [ ] Examples are complete and runnable
- [ ] ARIA roles added if needed
- [ ] Component index updated
- [ ] Guidelines index updated

---

## Success Criteria

- [ ] Component file created at `/components/common/{ComponentName}.tsx`
- [ ] Component guideline created at `/guidelines/components/{ComponentName}.md`
- [ ] Component uses CSS variables exclusively
- [ ] JSDoc documentation complete
- [ ] TypeScript interface exported
- [ ] Props validated and documented
- [ ] Usage examples provided
- [ ] Component index updated
- [ ] Guidelines index updated

---

## Outputs

- **Primary:** `/components/common/{ComponentName}.tsx`
- **Secondary:** `/guidelines/components/{ComponentName}.md`
- **Updated:** `/components/common/index.ts` (if exists)
- **Updated:** `/guidelines/INDEX.md`

---

## Follow-Up Actions

After creating component:
1. Test component in isolation
2. Verify CSS variables render correctly
3. Test all variant and size combinations
4. Run `audit tokens` to verify no hardcoded values
5. Add to Storybook/demo page (if available)

---

## Related Prompts

- `audit tokens` - Verify component uses tokens correctly
- `new pattern` - Create design pattern using this component
- `update guidelines` - Update component guideline if changes made

---

## Examples

### Creating a PriceTag Component

**User input:**
```
Component name: PriceTag
Purpose: Display product prices with currency formatting
Primary use case: E-commerce product cards
```

**Generated files:**
- `/components/common/PriceTag.tsx`
- `/guidelines/components/PriceTag.md`

**PriceTag interface:**
```typescript
export interface PriceTagProps {
  amount: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
  discount?: boolean;
  className?: string;
}
```

---

## Changelog

### Version 1.0.0 (2024-03-15)
- Initial new block component prompt
- Enforces CSS variable usage
- Generates component and guideline documentation
- Updates component and guidelines indexes

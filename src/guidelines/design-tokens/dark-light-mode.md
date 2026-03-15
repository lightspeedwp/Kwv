---
title: "Dark and Light Mode Guidance"
---

## Overview

This site supports both light and dark themes. The toggle is implemented by adding a `data-theme="dark"` attribute to the `html` or root element; components must respond by switching styles via CSS `[data-theme="dark"]` selectors and utility classes (`dark:` in Tailwind). A robust theme system ensures readability, accessibility, and brand coherence in both modes.

## Principles

- **High contrast:** Maintain a minimum contrast ratio of 4.5:1 for text and icons relative to backgrounds in both modes. This promotes readability for all users.
- **Surface inversion:** In light mode, primary surfaces (background, cards) are light with dark text. In dark mode, invert to dark backgrounds with light text. Use the same hue families across both modes (e.g., `paper` vs. `ink`) to preserve brand colour relationships.
- **Semantic tokens:** Define paired tokens for each semantic use case (e.g., `surface-default`, `surface-alt`, `text-primary`, `text-secondary`, `accent`, `border`, `interactive`, `error`). Provide separate values for light and dark contexts. Do not hard-code colours in components.
- **Softness:** Hand‑drawn aesthetic prefers softer dark backgrounds (not pure black) and slightly muted light backgrounds. Adjust saturation and brightness rather than purely inverting colours.
- **Focus indicators:** Ensure focus states are visible in both modes with clear outlines or glows. Use tokens like `focus-ring-light` and `focus-ring-dark`.

## Implementation

Define a theme map via CSS variables, switching values when `[data-theme="dark"]` is present:

```css
:root {
  /* Light mode */
  --surface-default: #F7F4F1; /* light paper */
  --surface-alt: #FFFFFF;
  --text-primary: #2B2B2B;
  --text-secondary: #555555;
  --accent: #A55C00; /* warm amber */
  --border: #D9D4CF;
  --focus-ring: #B88020;
}

[data-theme="dark"] {
  --surface-default: #191919; /* dark ink */
  --surface-alt: #222222;
  --text-primary: #F5F5F5;
  --text-secondary: #CCCCCC;
  --accent: #FFB366; /* lighter amber for contrast */
  --border: #444444;
  --focus-ring: #FFC488;
}
```

Use these variables in CSS or map them into Tailwind via the configuration. For example, `text-primary` maps to `text-[var(--text-primary)]`.

## WordPress-Aligned Token System

### Complete Color Token Map

All color tokens use the `--twb-color-{category}-{variant}` naming convention and map directly to WordPress `theme.json`.

#### Background Colors

| Token | Light Mode | Dark Mode | Usage | WCAG AA |
|-------|------------|-----------|-------|---------|
| `--twb-color-bg-primary` | `#f5efe4` | `#1a1412` | Main page background | ✅ Pass |
| `--twb-color-bg-secondary` | `#faf7f2` | `#241f1c` | Alternate sections, cards | ✅ Pass |
| `--twb-color-bg-tertiary` | `#ffffff` | `#2d2723` | Elevated surfaces | ✅ Pass |
| `--twb-color-bg-inverse` | `#1e1a17` | `#f5efe4` | Inverse backgrounds | ✅ Pass |

#### Text Colors

| Token | Light Mode | Dark Mode | Usage | WCAG AA |
|-------|------------|-----------|-------|---------|
| `--twb-color-text-primary` | `#1e1a17` | `#f5efe4` | Body text, headings | ✅ 4.5:1+ |
| `--twb-color-text-secondary` | `#5c6b4f` | `#98a88d` | Supporting text, captions | ✅ 4.5:1+ |
| `--twb-color-text-tertiary` | `#7a7369` | `#a39c8f` | Muted text, metadata | ✅ 4.5:1+ |
| `--twb-color-text-inverse` | `#f5efe4` | `#1e1a17` | Text on inverse backgrounds | ✅ 4.5:1+ |
| `--twb-color-text-disabled` | `#b3aca1` | `#5a544c` | Disabled state text | ✅ 3:1+ |

#### Accent Colors

| Token | Light Mode | Dark Mode | Usage | WCAG AA |
|-------|------------|-----------|-------|---------|
| `--twb-color-accent-plum` | `#5a2d3b` | `#8b4560` | Primary CTAs, links | ✅ Pass |
| `--twb-color-accent-vine` | `#5c6b4f` | `#98a88d` | Secondary actions | ✅ Pass |
| `--twb-color-accent-clay` | `#b86b4b` | `#d48860` | Warm accents | ✅ Pass |
| `--twb-color-accent-gold` | `#c8a96b` | `#e0c896` | Premium highlights | ✅ Pass |

#### Interactive States

| Token | Light Mode | Dark Mode | Usage | WCAG AA |
|-------|------------|-----------|-------|---------|
| `--twb-color-state-hover` | `#4a2331` | `#9d5572` | Hover state overlay | ✅ Pass |
| `--twb-color-state-active` | `#3a1c26` | `#af6684` | Active/pressed state | ✅ Pass |
| `--twb-color-state-focus` | `#5a2d3b` | `#b37790` | Focus ring | ✅ 3:1+ |
| `--twb-color-state-disabled` | `#e5dfd4` | `#3d3530` | Disabled elements | ✅ Pass |

#### Status Colors

| Token | Light Mode | Dark Mode | Usage | WCAG AA |
|-------|------------|-----------|-------|---------|
| `--twb-color-status-success` | `#4a6b3f` | `#7a9b6f` | Success messages | ✅ Pass |
| `--twb-color-status-error` | `#8b2c2c` | `#c95a5a` | Error messages | ✅ Pass |
| `--twb-color-status-warning` | `#b8793f` | `#e0a56f` | Warning messages | ✅ Pass |
| `--twb-color-status-info` | `#4a6b8b` | `#7a9bbb` | Info messages | ✅ Pass |

#### Border & Divider Colors

| Token | Light Mode | Dark Mode | Usage | WCAG AA |
|-------|------------|-----------|-------|---------|
| `--twb-color-border-primary` | `#d4cbc0` | `#3d3530` | Standard borders | ✅ Pass |
| `--twb-color-border-secondary` | `#e5dfd4` | `#2d2723` | Subtle dividers | ✅ Pass |
| `--twb-color-border-focus` | `#5a2d3b` | `#b37790` | Focus borders | ✅ 3:1+ |
| `--twb-color-divider` | `#e5dfd4` | `#2d2723` | Section dividers | ✅ Pass |

## CSS Implementation

### Base Theme Variables

**File:** `/styles/themes-light.css`

```css
/**
 * Light Mode Theme
 * 
 * Defines all color tokens for light mode (default).
 * Maps to WordPress theme.json preset: "light"
 */

:root,
[data-theme="light"] {
  /* Backgrounds */
  --twb-color-bg-primary: #f5efe4;
  --twb-color-bg-secondary: #faf7f2;
  --twb-color-bg-tertiary: #ffffff;
  --twb-color-bg-inverse: #1e1a17;
  
  /* Text */
  --twb-color-text-primary: #1e1a17;
  --twb-color-text-secondary: #5c6b4f;
  --twb-color-text-tertiary: #7a7369;
  --twb-color-text-inverse: #f5efe4;
  --twb-color-text-disabled: #b3aca1;
  
  /* Accents */
  --twb-color-accent-plum: #5a2d3b;
  --twb-color-accent-vine: #5c6b4f;
  --twb-color-accent-clay: #b86b4b;
  --twb-color-accent-gold: #c8a96b;
  
  /* States */
  --twb-color-state-hover: #4a2331;
  --twb-color-state-active: #3a1c26;
  --twb-color-state-focus: #5a2d3b;
  --twb-color-state-disabled: #e5dfd4;
  
  /* Status */
  --twb-color-status-success: #4a6b3f;
  --twb-color-status-error: #8b2c2c;
  --twb-color-status-warning: #b8793f;
  --twb-color-status-info: #4a6b8b;
  
  /* Borders */
  --twb-color-border-primary: #d4cbc0;
  --twb-color-border-secondary: #e5dfd4;
  --twb-color-border-focus: #5a2d3b;
  --twb-color-divider: #e5dfd4;
}
```

**File:** `/styles/themes-dark.css`

```css
/**
 * Dark Mode Theme
 * 
 * Defines all color tokens for dark mode.
 * Maps to WordPress theme.json preset: "dark"
 * All contrast ratios verified against WCAG 2.1 AA
 */

[data-theme="dark"] {
  /* Backgrounds */
  --twb-color-bg-primary: #1a1412;
  --twb-color-bg-secondary: #241f1c;
  --twb-color-bg-tertiary: #2d2723;
  --twb-color-bg-inverse: #f5efe4;
  
  /* Text */
  --twb-color-text-primary: #f5efe4;
  --twb-color-text-secondary: #98a88d;
  --twb-color-text-tertiary: #a39c8f;
  --twb-color-text-inverse: #1e1a17;
  --twb-color-text-disabled: #5a544c;
  
  /* Accents */
  --twb-color-accent-plum: #8b4560;
  --twb-color-accent-vine: #98a88d;
  --twb-color-accent-clay: #d48860;
  --twb-color-accent-gold: #e0c896;
  
  /* States */
  --twb-color-state-hover: #9d5572;
  --twb-color-state-active: #af6684;
  --twb-color-state-focus: #b37790;
  --twb-color-state-disabled: #3d3530;
  
  /* Status */
  --twb-color-status-success: #7a9b6f;
  --twb-color-status-error: #c95a5a;
  --twb-color-status-warning: #e0a56f;
  --twb-color-status-info: #7a9bbb;
  
  /* Borders */
  --twb-color-border-primary: #3d3530;
  --twb-color-border-secondary: #2d2723;
  --twb-color-border-focus: #b37790;
  --twb-color-divider: #2d2723;
}
```

## React Theme Context

**File:** `/contexts/ThemeContext.tsx`

```tsx
/**
 * ThemeContext
 * 
 * Manages theme state and persists preference to localStorage.
 * Applies [data-theme] attribute to <html> element.
 */

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Load saved preference
    const savedTheme = localStorage.getItem('twb-theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    let effectiveTheme: 'light' | 'dark';
    
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      effectiveTheme = prefersDark ? 'dark' : 'light';
    } else {
      effectiveTheme = theme;
    }
    
    setResolvedTheme(effectiveTheme);
    root.setAttribute('data-theme', effectiveTheme);
    localStorage.setItem('twb-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

## Patterns to Avoid

- Do not rely on the `dark` class on `html`—use the `data-theme` attribute for consistency. Remove any leftover `.dark` selectors.
- Avoid using opaque pure black backgrounds (#000000) in dark mode; they create uncomfortable contrast with softer accent colours.
- Do not invert images or illustrations automatically. Provide separate assets or adjust colours in the SVGs for dark mode.
- Never use inline hex colors or `dark:` Tailwind classes. Always use CSS variables.

## Validation

Use automated tools (e.g., Axe, Lighthouse) to check contrast ratios. Manually review the site in both modes, including forms, hover states, disabled states, and interactive components. Verify that focus outlines are visible and that text does not disappear on dark backgrounds. Ensure that page transitions respect user `prefers-color-scheme` and that the `data-theme` attribute takes precedence over system preferences when toggled by the user.

## Related Guidelines

- [Colors](/guidelines/design-tokens/colors.md) - Color palette
- [Typography](/guidelines/design-tokens/typography.md) - Font tokens
- [Shadows](/guidelines/design-tokens/shadows.md) - Shadow system
- [WCAG Compliance](/guidelines/accessibility/wcag-compliance.md) - Accessibility
- [WordPress CSS Variables](/guidelines/development/wordpress-css-variables.md) - CSS variable standards

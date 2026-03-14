# Dark/Light Mode Design Tokens (Future)

**Category:** Design Tokens  
**Domain:** Color Modes  
**Version:** 0.1 (Draft)  
**Last Updated:** 2024-03-13  
**Status:** Future Implementation

---

## Overview

**Current Status:** The Wire Brand currently uses a single light mode with warm, organic colors. Dark mode is planned for future implementation to provide an alternative viewing experience, particularly for low-light environments.

**Timeline:** TBD (Q2 2024 or later)

**This document serves as a planning reference and will be expanded when dark mode implementation begins.**

---

## Current Color System (Light Mode Only)

### Active Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `twb-color-paper` | `#f5efe4` | Warm parchment background |
| `twb-color-ink` | `#1e1a17` | Deep charcoal text |
| `twb-color-vine` | `#5c6b4f` | Vineyard green accents |
| `twb-color-clay` | `#b86b4b` | Terracotta warm accents |
| `twb-color-plum` | `#5a2d3b` | Wine-inspired primary CTAs |
| `twb-color-gold` | `#c8a96b` | Muted premium gold |

---

## Future Dark Mode Considerations

### Design Philosophy (Draft)

**Dark mode for The Wire Brand should:**
- Maintain warmth and organic feel (not cold/harsh)
- Preserve brand identity (wine, cellar, terroir)
- Reduce eye strain in low-light environments
- Meet WCAG 2.1 AA contrast ratios
- Feel like a cellar at night (dark, cozy, intimate)

### Proposed Dark Mode Palette (Draft)

**Note:** These colors are conceptual and subject to change.

| Token | Light Mode | Dark Mode (Proposed) | Usage |
|-------|------------|----------------------|-------|
| `twb-color-bg-primary` | `#f5efe4` (paper) | `#1a1412` (deep cellar) | Primary background |
| `twb-color-bg-secondary` | `#faf7f2` | `#241f1c` | Secondary background |
| `twb-color-text-primary` | `#1e1a17` (ink) | `#f5efe4` (parchment) | Body text |
| `twb-color-text-secondary` | `#5c6b4f` (vine) | `#98a88d` (light vine) | Supporting text |
| `twb-color-accent-primary` | `#5a2d3b` (plum) | `#8b4560` (lighter plum) | CTAs, links |
| `twb-color-accent-clay` | `#b86b4b` | `#d48860` | Warm accents |
| `twb-color-accent-gold` | `#c8a96b` | `#e0c896` | Premium highlights |

### Dark Mode Contrast Requirements

**WCAG 2.1 AA Minimum:**
- Normal text (16px): 4.5:1 contrast ratio
- Large text (18px+ or 14px+ bold): 3:1 contrast ratio
- Interactive elements: 3:1 against adjacent colors

**All proposed dark mode colors must be tested against these requirements before implementation.**

---

## Implementation Strategy (Future)

### Phase 1: Color Token Abstraction

**Convert hardcoded colors to semantic tokens:**

**Current (hardcoded):**
```tsx
className="bg-[#f5efe4] text-[#1e1a17]"
```

**Future (semantic tokens):**
```tsx
className="bg-[var(--twb-color-bg-primary)] text-[var(--twb-color-text-primary)]"
```

### Phase 2: CSS Variable System

**Define light and dark modes in globals.css:**

```css
/* Light Mode (default) */
:root {
  --twb-color-bg-primary: #f5efe4;
  --twb-color-bg-secondary: #faf7f2;
  --twb-color-text-primary: #1e1a17;
  --twb-color-text-secondary: #5c6b4f;
  --twb-color-accent-primary: #5a2d3b;
  --twb-color-accent-clay: #b86b4b;
  --twb-color-accent-gold: #c8a96b;
}

/* Dark Mode (future) */
[data-theme="dark"] {
  --twb-color-bg-primary: #1a1412;
  --twb-color-bg-secondary: #241f1c;
  --twb-color-text-primary: #f5efe4;
  --twb-color-text-secondary: #98a88d;
  --twb-color-accent-primary: #8b4560;
  --twb-color-accent-clay: #d48860;
  --twb-color-accent-gold: #e0c896;
}

/* System preference detection */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* Apply dark mode variables */
  }
}
```

### Phase 3: User Preference System

**Allow users to choose mode:**

```tsx
/**
 * ThemeToggle Component (Future)
 * 
 * Allows users to switch between light and dark modes.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.setAttribute('data-theme', systemTheme);
    } else {
      root.setAttribute('data-theme', theme);
    }
    
    // Persist to localStorage
    localStorage.setItem('theme-preference', theme);
  }, [theme]);
  
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => setTheme('light')} aria-label="Light mode">
        <Sun className="h-5 w-5" />
      </button>
      <button onClick={() => setTheme('dark')} aria-label="Dark mode">
        <Moon className="h-5 w-5" />
      </button>
      <button onClick={() => setTheme('system')} aria-label="System preference">
        <Monitor className="h-5 w-5" />
      </button>
    </div>
  );
}
```

---

## Component Considerations (Future)

### Images in Dark Mode

**Challenge:** Light background product images on dark backgrounds

**Solutions:**
1. Add subtle border around images
2. Use `mix-blend-mode` for better integration
3. Provide dark mode variants for key images
4. Add subtle shadow/glow

```tsx
// Option 1: Border
<img
  src="/wine-bottle.jpg"
  className="rounded-twb-md dark:border dark:border-[var(--twb-border-tertiary)]"
/>

// Option 2: Subtle background
<div className="bg-[var(--twb-color-bg-secondary)] p-4 rounded-twb-md">
  <img src="/wine-bottle.jpg" className="rounded-twb-sm" />
</div>
```

### Shadows in Dark Mode

**Light mode shadows don't work in dark mode.**

**Solution:** Adjust shadow opacity for dark mode:

```css
:root {
  --twb-shadow-sm: 0 2px 4px rgba(30, 26, 23, 0.08);
}

[data-theme="dark"] {
  --twb-shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3); /* Darker, more opaque */
}
```

### Form Inputs in Dark Mode

**Challenges:**
- Input backgrounds need adjustment
- Border contrast requirements
- Placeholder text visibility

**Solution:**
```css
[data-theme="dark"] {
  --twb-color-input-bg: #2a2522; /* Slightly lighter than page bg */
  --twb-color-input-border: #3d3530; /* Visible border */
  --twb-color-input-text: #f5efe4; /* Light text */
}
```

---

## Testing Requirements (Future)

### When dark mode is implemented:

- [ ] All text meets WCAG AA contrast ratios
- [ ] Interactive elements have 3:1 contrast
- [ ] Images display properly in both modes
- [ ] Shadows are visible in dark mode
- [ ] Focus indicators are visible in both modes
- [ ] Theme preference persists across sessions
- [ ] System preference is respected
- [ ] No flash of wrong theme on page load (FOUC)

---

## Open Questions

**Before implementing dark mode, we need to answer:**

1. **Brand Alignment:** Does dark mode align with The Wire Brand's warm, handcrafted aesthetic?
2. **User Demand:** Is there user demand for dark mode? (Conduct user research)
3. **Maintenance:** Can we maintain design quality across two color modes?
4. **Photography:** Do we need dark mode product photography?
5. **Accessibility:** How do we ensure accessibility in both modes?
6. **Preference Storage:** Local storage vs. account preference?
7. **Default Mode:** Should we respect system preference or default to light?

---

## Next Steps

**Before implementation:**

1. **User Research:** Survey users about dark mode preference
2. **Design Exploration:** Create dark mode mockups in Figma
3. **Contrast Audit:** Test all proposed colors for WCAG compliance
4. **Photography Plan:** Determine image strategy for dark mode
5. **Technical Plan:** Define implementation approach (CSS vars, Tailwind dark: prefix)
6. **Timeline:** Set realistic timeline based on priority

---

## Resources

**Reference implementations:**
- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Material Design Dark Theme](https://m3.material.io/styles/color/dark-theme/overview)

---

## Related Guidelines

- [Colors](/guidelines/design-tokens/colors.md) - Current light mode palette
- [Shadows](/guidelines/design-tokens/shadows.md) - Shadow system
- [WCAG Compliance](/guidelines/accessibility/wcag-compliance.md) - Contrast requirements

---

## Changelog

### Version 0.1 (2024-03-13)
- Initial draft created
- Future considerations outlined
- Proposed color palette documented
- Implementation strategy drafted
- Open questions identified

---

**Status:** This is a planning document for future implementation. Do not use these colors in production until full design approval and accessibility testing is complete.

**Questions or Issues?**  
Contact the design system team or reference the main [Design Tokens Overview](/guidelines/design-tokens/).

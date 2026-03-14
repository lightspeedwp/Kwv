# CSS Token System Analysis Prompt

## Objective

Analyze the current CSS token system in `/styles/globals.css` and create a comprehensive token architecture for The Wire Brand using the twb- namespace and WordPress-compatible CSS custom properties.

## Input Sources

1. `/imports/pasted_text/redesign-brief.md` (Section 8: Design system, Section 10: CSS architecture)
2. `/styles/globals.css` - Current token definitions
3. `/Guidelines.md` Section 3 (Visual system & design tokens)
4. Component files for in-use token audit

## Analysis Requirements

### 1. Current Token Audit

Inventory all existing CSS custom properties:

#### Color Tokens
```css
/* Example current state */
:root {
  --color-burgundy: #6B2737;
  --color-vineyard: #4A5D3F;
  /* ... list all existing ... */
}
```

**Audit Requirements:**
- List every color token
- Note usage frequency (grep component files)
- Identify orphaned tokens (defined but unused)
- Find hard-coded colors (not using tokens)
- Check contrast ratios against WCAG 2.1 AA

#### Typography Tokens
```css
/* Font families, sizes, weights, line heights */
```

**Audit Requirements:**
- Font stack definitions
- Size scale (fluid clamp() values)
- Weight mappings
- Line-height tokens
- Letter-spacing tokens

#### Spacing Tokens
```css
/* Margins, paddings, gaps */
```

**Audit Requirements:**
- Current spacing scale
- Fluid vs. static values
- Usage patterns
- Missing steps in scale

#### Other Token Categories
- Border radius
- Shadows
- Z-index scale
- Transitions/durations
- Easing functions
- Breakpoints

### 2. Gap Analysis

Compare current tokens against The Wire Brand requirements:

#### Missing Color Tokens
From redesign brief, required palette:
- `--twb-color-paper: #f5efe4`
- `--twb-color-ink: #1e1a17`
- `--twb-color-vine: #5c6b4f`
- `--twb-color-olive: [suggest]`
- `--twb-color-clay: #b86b4b`
- `--twb-color-plum: #5a2d3b`
- `--twb-color-gold: #c8a96b`
- `--twb-color-oak: [suggest]`
- `--twb-color-cream: [suggest]`

Plus functional color mappings:
- Background colors (primary, secondary, tertiary)
- Text colors (primary, secondary, muted, accent)
- Border colors
- State colors (hover, active, disabled, error, success)

#### Missing Typography Tokens
Required font pairings:
- Serif: Expressive editorial (suggest: Playfair Display, EB Garamond, Libre Baskerville)
- Sans: Clean readable (suggest: Inter, Open Sans, Source Sans Pro)
- Accent: Handwritten (optional, sparingly)

Required size scale:
- H1: `clamp(2.4rem, 5vw + 1rem, 4.5rem)`
- H2: `clamp(2rem, 4vw + 1rem, 3.5rem)`
- H3: `clamp(1.5rem, 3vw + 0.5rem, 2.25rem)`
- H4: `clamp(1.25rem, 2vw + 0.5rem, 1.75rem)`
- Body Large: `clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)`
- Body: `clamp(1rem, 1vw + 0.5rem, 1.125rem)`
- Caption: `clamp(0.875rem, 1vw + 0.25rem, 1rem)`

#### Missing Spacing Tokens
Required fluid spacing:
- Section padding: `clamp(3rem, 5vh + 2rem, 8rem)`
- Container padding: `clamp(1rem, 4vw, 3rem)`
- Grid gaps: `clamp(1rem, 2vw, 2rem)`

Plus standard scale:
- `--twb-space-xs: 0.5rem`
- `--twb-space-sm: 0.75rem`
- `--twb-space-md: 1rem`
- `--twb-space-lg: 1.5rem`
- `--twb-space-xl: 2.5rem`
- `--twb-space-2xl: 4rem`

#### Missing Motion Tokens
```css
--twb-duration-fast: 160ms;
--twb-duration-base: 280ms;
--twb-duration-slow: 600ms;

--twb-ease-standard: cubic-bezier(.2, .8, .2, 1);
--twb-ease-drift: cubic-bezier(.22, 1, .36, 1);
```

### 3. Token System Architecture

Design the complete token system:

#### Base Tokens (Primitive)
Raw values that don't reference other tokens:

```css
:root {
  /* Color Primitives */
  --twb-color-paper: #f5efe4;
  --twb-color-ink: #1e1a17;
  --twb-color-vine: #5c6b4f;
  --twb-color-olive: [suggest];
  --twb-color-clay: #b86b4b;
  --twb-color-plum: #5a2d3b;
  --twb-color-gold: #c8a96b;
  --twb-color-oak: [suggest];
  --twb-color-cream: [suggest];
  
  /* Color Shades (if needed) */
  --twb-color-plum-light: [suggest];
  --twb-color-plum-dark: [suggest];
  
  /* Font Families */
  --twb-font-heading: "Playfair Display", Georgia, serif;
  --twb-font-body: "Inter", -apple-system, sans-serif;
  --twb-font-accent: [Optional handwritten], cursive;
  
  /* Font Weights */
  --twb-weight-normal: 400;
  --twb-weight-medium: 500;
  --twb-weight-semibold: 600;
  --twb-weight-bold: 700;
  
  /* Base Spacing */
  --twb-space-xs: 0.5rem;   /* 8px */
  --twb-space-sm: 0.75rem;  /* 12px */
  --twb-space-md: 1rem;     /* 16px */
  --twb-space-lg: 1.5rem;   /* 24px */
  --twb-space-xl: 2.5rem;   /* 40px */
  --twb-space-2xl: 4rem;    /* 64px */
  --twb-space-3xl: 6rem;    /* 96px */
  
  /* Border Radius */
  --twb-radius-sm: 8px;
  --twb-radius-md: 18px;
  --twb-radius-lg: 32px;
  
  /* Shadows */
  --twb-shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.08);
  --twb-shadow-ink: 0 8px 0 rgba(30, 26, 23, 0.12);
  --twb-shadow-lifted: 0 12px 40px rgba(0, 0, 0, 0.15);
  
  /* Motion */
  --twb-duration-fast: 160ms;
  --twb-duration-base: 280ms;
  --twb-duration-slow: 600ms;
  --twb-duration-glacial: 1200ms;
  
  --twb-ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
  --twb-ease-drift: cubic-bezier(0.22, 1, 0.36, 1);
  --twb-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Z-Index Scale */
  --twb-z-base: 0;
  --twb-z-dropdown: 100;
  --twb-z-sticky: 200;
  --twb-z-overlay: 300;
  --twb-z-modal: 400;
  --twb-z-toast: 500;
}
```

#### Semantic Tokens (Reference base tokens)
Tokens that map to specific use cases:

```css
:root {
  /* Backgrounds */
  --twb-bg-primary: var(--twb-color-paper);
  --twb-bg-secondary: var(--twb-color-cream);
  --twb-bg-dark: var(--twb-color-ink);
  --twb-bg-accent: var(--twb-color-plum);
  
  /* Text */
  --twb-text-primary: var(--twb-color-ink);
  --twb-text-secondary: var(--twb-color-olive);
  --twb-text-muted: var(--twb-color-oak);
  --twb-text-inverse: var(--twb-color-paper);
  --twb-text-accent: var(--twb-color-plum);
  
  /* Borders */
  --twb-border-light: rgba(30, 26, 23, 0.1);
  --twb-border-medium: rgba(30, 26, 23, 0.2);
  --twb-border-dark: var(--twb-color-ink);
  
  /* Interactive States */
  --twb-state-hover: var(--twb-color-plum);
  --twb-state-active: var(--twb-color-gold);
  --twb-state-disabled: rgba(30, 26, 23, 0.3);
  --twb-state-error: #c1392a; /* Suggest if needed */
  --twb-state-success: var(--twb-color-vine);
}
```

#### Component-Specific Tokens
Tokens for specific components:

```css
:root {
  /* Hero */
  --twb-hero-overlay-light: rgba(245, 239, 228, 0.7);
  --twb-hero-overlay-dark: rgba(30, 26, 23, 0.6);
  
  /* Buttons */
  --twb-button-bg-primary: var(--twb-color-plum);
  --twb-button-bg-secondary: var(--twb-color-gold);
  --twb-button-text-primary: var(--twb-color-paper);
  
  /* Cards */
  --twb-card-bg: var(--twb-color-cream);
  --twb-card-border: var(--twb-border-light);
  --twb-card-shadow: var(--twb-shadow-soft);
}
```

#### Fluid Tokens (Responsive)
Tokens that scale with viewport:

```css
:root {
  /* Typography */
  --twb-text-h1: clamp(2.4rem, 5vw + 1rem, 4.5rem);
  --twb-text-h2: clamp(2rem, 4vw + 1rem, 3.5rem);
  --twb-text-h3: clamp(1.5rem, 3vw + 0.5rem, 2.25rem);
  --twb-text-h4: clamp(1.25rem, 2vw + 0.5rem, 1.75rem);
  --twb-text-body-large: clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem);
  --twb-text-body: clamp(1rem, 1vw + 0.5rem, 1.125rem);
  --twb-text-caption: clamp(0.875rem, 1vw + 0.25rem, 1rem);
  
  /* Spacing */
  --twb-space-section-y: clamp(3rem, 5vh + 2rem, 8rem);
  --twb-space-container-x: clamp(1rem, 4vw, 3rem);
  --twb-space-grid-gap: clamp(1rem, 2vw, 2rem);
}
```

### 4. Tailwind v4 Integration

Since the project uses Tailwind CSS v4, define how custom tokens integrate:

#### Tailwind Config (if needed)
While Tailwind v4 prefers CSS variables, document any config needed:

```js
// tailwind.config.js (if required)
export default {
  theme: {
    extend: {
      colors: {
        'twb-paper': 'var(--twb-color-paper)',
        'twb-ink': 'var(--twb-color-ink)',
        // ... etc
      }
    }
  }
}
```

#### Utility Class Strategy
When to use Tailwind utilities vs. custom classes:

**Use Tailwind for:**
- Layout (flex, grid, positioning)
- Responsive design (breakpoints)
- Simple spacing (when not token-driven)

**Use Custom twb- classes for:**
- Complex components (Hero, Card)
- Brand-specific styles
- Organic/hand-drawn elements
- WordPress block compatibility

### 5. WordPress theme.json Mapping

Map tokens to WordPress theme.json format:

```json
{
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        {
          "slug": "paper",
          "color": "#f5efe4",
          "name": "Paper"
        },
        {
          "slug": "ink",
          "color": "#1e1a17",
          "name": "Ink"
        }
        // ... etc
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "slug": "heading",
          "fontFamily": "\"Playfair Display\", Georgia, serif",
          "name": "Heading"
        },
        {
          "slug": "body",
          "fontFamily": "\"Inter\", -apple-system, sans-serif",
          "name": "Body"
        }
      ],
      "fontSizes": [
        {
          "slug": "h1",
          "size": "clamp(2.4rem, 5vw + 1rem, 4.5rem)",
          "name": "Heading 1"
        }
        // ... etc
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "slug": "xs",
          "size": "0.5rem",
          "name": "Extra Small"
        }
        // ... etc
      ]
    }
  }
}
```

### 6. Token Migration Strategy

Plan how to migrate from current tokens to twb- tokens:

#### Phase 1: Define New Tokens
- Add all twb- tokens to globals.css
- Keep existing tokens temporarily for backwards compatibility

#### Phase 2: Component Migration
- Update components file-by-file
- Replace old tokens with twb- equivalents
- Test each component individually

#### Phase 3: Cleanup
- Remove unused old tokens
- Verify no hard-coded values remain
- Document final token system

### 7. Contrast Verification

Ensure all color combinations meet WCAG 2.1 AA:

#### Required Checks
Test every text/background combination:

```
Background: --twb-color-paper (#f5efe4)
  → Text: --twb-color-ink (#1e1a17)
  → Ratio: [Calculate] (Must be ≥ 4.5:1 for normal text)

Background: --twb-color-plum (#5a2d3b)
  → Text: --twb-color-paper (#f5efe4)
  → Ratio: [Calculate]

[... test all combinations ...]
```

#### Adjustments Needed
If any combinations fail:
- Suggest adjusted shade
- Provide alternative pairing
- Document exception (if large text)

### 8. Hand-Drawn Element Tokens

Create tokens specifically for organic/hand-drawn treatments:

```css
:root {
  /* Organic Borders */
  --twb-border-organic-radius: 18px 22px 20px 24px; /* Irregular */
  
  /* Sketch/Scribble */
  --twb-scribble-thickness: 2px;
  --twb-scribble-color: var(--twb-color-ink);
  --twb-scribble-opacity: 0.4;
  
  /* Paper Texture */
  --twb-texture-paper: url('/textures/paper-grain.png');
  --twb-texture-opacity: 0.03;
  
  /* Stamp Effects */
  --twb-stamp-border: 3px solid var(--twb-color-ink);
  --twb-stamp-rotation: -2deg;
}
```

### 9. Documentation Standards

For each token, provide:

```css
/**
 * @token --twb-color-plum
 * @value #5a2d3b
 * @usage Primary accent color for CTAs, headings, focus states
 * @contrast 7.2:1 with --twb-color-paper (AA Large, AAA Normal)
 * @inspired-by Paarl valley mulberries and wine tones
 */
--twb-color-plum: #5a2d3b;
```

## Deliverables for Report

Generate `/reports/04-css-token-system-report.md` containing:

### Executive Summary
Overview of token system transformation

### Current Token Audit
Complete inventory:
- All existing color tokens (with usage count)
- All typography tokens
- All spacing tokens
- All other token categories
- Orphaned tokens
- Hard-coded values found

### Gap Analysis
- Missing color tokens (with suggestions)
- Missing typography tokens
- Missing spacing tokens
- Missing motion tokens
- Inconsistent naming patterns

### Detailed Recommendations

#### Complete Token System
Full CSS custom property definitions:
- Base tokens (primitives)
- Semantic tokens (functional)
- Component tokens (specific)
- Fluid tokens (responsive)

#### Tailwind Integration Guide
How custom tokens work with Tailwind v4

#### WordPress theme.json Mapping
Complete theme.json structure with all tokens

#### Migration Plan
Step-by-step guide:
1. Add new tokens
2. Migrate components (priority order)
3. Remove old tokens
4. Verify and test

#### Contrast Verification Results
Table of all text/background combinations with ratios

#### Hand-Drawn Element Tokens
Tokens for organic aesthetic

### File-Specific Implementation Notes

- `/styles/globals.css` - [Complete rewrite with new token system]
- [List component files that reference tokens]

### Acceptance Criteria

- [ ] All color tokens use twb- namespace
- [ ] 9+ color primitives defined
- [ ] 15+ semantic color tokens defined
- [ ] Typography tokens use fluid clamp() values
- [ ] Spacing scale has 7+ steps
- [ ] Motion tokens defined (3 durations, 3 easings)
- [ ] All color combinations meet WCAG 2.1 AA
- [ ] WordPress theme.json mapping complete
- [ ] Migration plan documented

### Risk Assessment

1. **Breaking Changes:** Renaming tokens will break existing components
   - *Mitigation:* Phased migration, keep old tokens temporarily

2. **Font Loading:** Custom fonts may cause FOUT/FOIT
   - *Mitigation:* Use font-display: swap, provide fallbacks

3. **Contrast Failures:** Some organic colors may not meet AA
   - *Mitigation:* Adjust shades, test all combinations

### Dependency Mapping

- **Blocks:** None (Wave 1 prompt)
- **Blocked By:** None
- **Enables:**
  - 01-visual-design-analysis (tokens inform visual direction)
  - 08-svg-asset-generation (tokens provide color palette)

## Quality Standards

The report must:

- Provide complete, copy-paste-ready CSS
- Include hex values for all colors
- Calculate and verify all contrast ratios
- Include JSDoc-style comments for each token
- Map to WordPress theme.json completely
- Estimate migration effort (hours per component)

## Success Metrics

- [ ] 50+ tokens defined
- [ ] Complete globals.css rewrite provided
- [ ] All contrast ratios calculated and verified
- [ ] WordPress theme.json complete
- [ ] Migration plan with 20+ file references
- [ ] Zero hard-coded values remain in audit

# CSS Token System Analysis – Hand‑Drawn Redesign

**Executive summary**
1. **Value:** A robust token system unifies colours, typography, spacing, radii, shadows and motion across the application, enabling consistent theming, dark‑mode support and easier maintenance.  Mapping tokens to WordPress `theme.json` and Tailwind config ensures smooth integration with existing tooling.
2. **Risks:** Current tokens are incomplete and inconsistent: some values are hard‑coded or duplicated, dark‑mode variants don't always override correctly, and motion tokens are missing.  Without a comprehensive token architecture, the design cannot scale or remain accessible.
3. **Next step:** Audit all existing tokens, identify gaps, then define a complete set of design tokens (colour, typography, spacing, radii, shadows, motion) using semantic naming.  Implement them as CSS custom properties, Tailwind configuration and WordPress theme.json mappings, ensuring both light and dark modes meet contrast requirements.

## Scope and tasks

1. **Audit existing tokens**
   - Review the current Tailwind configuration, theme.json and any `styles/tokens` files.  Document all defined tokens (colours, spacing, radii, shadows, typography, z-index, breakpoints).
   - Identify unused or redundant tokens, hard‑coded values and inconsistent naming (e.g. `primary` vs `ink`).
   - Note where dark mode overrides rely on `dark:` classes instead of `[data-theme]` attributes.
2. **Define the token architecture**
   - Create semantic categories: Base surfaces (paper, panel), Text colours (ink, muted, inverse), Accents (vine, clay, gold), States (hover, active, disabled), Status (success, error, warning, info).
   - Outline typography tokens for families, weights and scales (e.g. `font-body`, `font-display`, `font-mono`, `text-sm`, `text-lg`, `leading-relaxed`, etc.).
   - Specify spacing tokens using a fluid scale with `clamp()` for responsive spacing (e.g. `space-1` through `space-8`).
   - Define radius tokens for small, medium and large curvature; include shapes appropriate for hand‑drawn elements (irregular pill shapes).
   - Create shadow tokens for base surfaces, elevated cards and overlay elements; ensure variations for light and dark themes.
   - Introduce motion tokens: durations (`fast`, `normal`, `slow`), easing curves (custom cubic‑bezier functions), distances (`translate-sm`, `translate-lg`) and opacity levels.
3. **Implementation integration**
   - Add the new tokens to a central CSS file as custom properties, scoped under `:root[data-theme="light"]` and `[data-theme="dark"]`.
   - Extend the Tailwind config to reference these variables (e.g. `colors: { paper: 'var(--color-paper)' }`) and include motion tokens via the `transition` and `animation` sections.
   - Update the WordPress theme.json to map token names to WordPress settings (e.g. `settings.color.palette.custom`).
   - Provide TypeScript definitions for token objects to ensure type safety.
4. **Migration strategy**
   - Develop a plan to replace hard‑coded values with tokens across the codebase.  Prioritise global styles, then component styles, then ad‑hoc utilities.
   - Provide search‑and‑replace patterns or codemods to assist with migration.
   - Ensure that dark mode overrides are implemented via the `[data-theme="dark"]` attribute.
5. **Validation and testing**
   - Use automated tools to verify contrast ratios for all colour combinations in both themes.
   - Provide a checklist to test tokens in Storybook/Chromatic: ensure spacing, typography and motion behave as expected at different breakpoints.
6. **Deliverables**
   - A complete token catalogue with semantic names, values for light and dark themes, and usage guidelines.
   - Sample code snippets demonstrating how to use tokens in CSS, Tailwind and WordPress.
   - A migration guide with step‑by‑step instructions and potential pitfalls.
   - Success metrics such as 100 % token coverage and zero contrast violations.

## Implementation notes

* Keep token values small and maintainable; avoid storing large arrays in a single token file.  Split tokens into logical files (colours, typography, spacing, motion).
* Document deprecations for old tokens and provide fallback values during migration.
* For fluid tokens, choose sensible min/max ranges; do not rely on `vw` units alone, as they may break in landscape mobile.
* Consider exporting tokens as JSON for compatibility with Figma and design tools.

## Acceptance criteria

- All existing tokens are audited; unused or redundant tokens are removed.
- A complete set of semantic tokens is defined and implemented for both light and dark themes.
- Tailwind, CSS and WordPress use the same token names and values.
- Migration guidelines are clear and allow incremental adoption.
- The new token system passes contrast checks and supports responsive design.

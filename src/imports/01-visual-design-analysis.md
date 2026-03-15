# Visual Design Analysis – Hand‑Drawn Redesign

**Executive summary**
1. **Value:** A thorough visual audit will align the site with the new hand‑drawn look, ensuring a cohesive palette, typography, spacing and organic elements.  This will make the redesign feel intentional and brand‑consistent across components and pages.
2. **Risks:** Existing dark‑mode and token usage are inconsistent; some components still rely on placeholder colours or inline styles.  Without a holistic inventory, new patterns may clash with the current system or break accessibility.
3. **Next step:** Conduct a full inventory of current styles, compare against the new brand direction, then define updated tokens and patterns (colours, typography, spacing, radii, shadows) that work across light and dark themes up to a max width of 1 440 px.  Use these findings to generate a detailed report and recommendations.

## Scope and tasks

1. **Current state inventory**
   - Extract every colour, typeface, font size, line height, spacing unit, border radius and shadow used in the current codebase (JS/TSX, CSS, Tailwind config).
   - Capture where each token is defined (theme.json, Tailwind tokens, inline styles) and note duplications or hard‑coded values.
   - Map all components and pages to their visual tokens to understand dependence.
2. **Gap analysis vs new brand**
   - Compare the inventory with the new palette and organic aesthetic defined in the Figma prototype.  Identify missing tokens for hand‑drawn strokes, textures or shapes.
   - Highlight conflicts such as low contrast combinations, overly sharp corners or rigid grids that clash with the hand‑drawn concept.
   - Note where dark‑mode support is incomplete or relies on system colour‑scheme rather than `[data-theme]` toggles.
3. **Token and pattern recommendations**
   - Propose a revised palette of neutral bases (paper, ink), accent hues (vine green, clay red, gold) and interactive tints that meet WCAG AA contrast for both light and dark themes.
   - Define a typographic scale using modular ratios, specifying font families (serif display, sans‑serif body, monospace for code), weights, sizes and line heights.
   - Establish spacing tokens using a fluid scale (e.g. `clamp(0.5rem, 1vw, 1rem)` increments) and define default radii for cards, buttons and badges.
   - Create shadow tokens for ambient depth and interactive elevation, ensuring subtlety in light mode and clarity in dark mode.
   - Document these tokens as CSS custom properties and Tailwind configuration entries, and map them into WordPress `theme.json`.
4. **Organic elements strategy**
   - Identify components that need hand‑drawn accents (e.g. hero backgrounds, section dividers, button outlines) and specify how to apply SVG patterns or textures without compromising performance.
   - Define guidelines for freeform shapes (blobs, waves) including permitted sizes, layering rules and appropriate colour use.
5. **Responsive and layout strategy**
   - Recommend a max page width of 1 440 px with adaptive columns (cards per row increase on wider screens).  Define breakpoints and grid behaviours for mobile, tablet and desktop.
   - Ensure spacing scales proportionally across breakpoints using the token system.
6. **Data‑first content integration**
   - Note all components or pages that currently hard‑code copy or images.  For each, specify the data needed (title, body, image, meta) and how to migrate it into `src/data/*.json` or `.ts` files.
   - Provide a template for a generic content object (e.g. `{ id, slug, title, subtitle, image, contentBlocks, meta }`) that components can consume.
7. **Report deliverables**
   - Compile an executive summary, current state inventory tables, gap analysis, recommended token definitions (with CSS/Tailwind code snippets), organic pattern guidelines, layout strategy and data‑first migration notes.
   - Include file‑specific notes and acceptance criteria for each recommendation, plus risk assessment and dependency mapping.
   - Provide success metrics (e.g. 100 % token coverage, contrast compliance across themes) and quality gates for review.

## Implementation notes

* Use the `[data-theme]` attribute on the `<html>` element for theme toggling instead of relying on `dark:` variants.  Apply classes such as `.dark` only as a fallback.
* All new colours and shadows must satisfy WCAG 2.1 AA contrast ratios against their background in both themes.
* Leverage Figma’s design tokens plugin to synchronise the palette and typographic scale with the codebase.
* When introducing hand‑drawn patterns, optimise SVG size (no unused groups or long path decimals) and provide dark‑mode variants where appropriate.
* Ensure that CSS variables are declared in a top‑level `:root` and overridden under `[data-theme="dark"]`.

## Acceptance criteria

- All current colours, fonts, spacings, radii and shadows are documented and mapped to their usage.
- A complete set of updated tokens and design patterns is proposed with code snippets and WordPress/Tailwind mappings.
- Light and dark modes are fully supported via `[data-theme]` attributes.
- Recommendations include guidelines for organic elements, responsive layouts and data‑driven content.
- The final report is clear, actionable and aligns with the new brand direction.
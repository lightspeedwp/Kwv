# SVG Asset Generation – Hand‑Drawn Redesign

**Executive summary**
1. **Value:** Hand‑drawn SVG assets (dividers, illustrations, stamps) reinforce the artisanal character of the brand without relying on raster images.  Well‑designed assets can be reused across pages and themes, improving consistency and performance.
2. **Risks:** Excessive decoration or inconsistent styles can distract users and increase page weight.  Large or unoptimised SVGs may impact performance, especially in dark mode if not properly tinted.
3. **Next step:** Define a curated set of SVG assets needed for the redesign, specifying style guidelines (line weight, roughness, colour usage), file naming conventions and integration patterns.  Plan for dark‑mode variants and optional subtle animations.

## Scope and tasks

1. **Asset catalogue**
   - List the types of SVG assets required: section dividers (waves, ripples), ornamental frames, badges/stamps, botanical illustrations (grapevines, leaves), abstract blobs and doodles.
   - Estimate the number of variants needed for each (e.g. 3 divider styles, 2 stamps).
   - Note specific sizes or aspect ratios based on layout designs.
2. **Style guidelines**
   - Define the visual style: hand‑drawn strokes with varied widths, slightly imperfect shapes, limited palette drawn from the token colours (ink, vine, clay, gold).
   - Ensure that assets are visually balanced and do not overpower content.  Use negative space effectively.
   - For dark mode, provide separate versions or ensure the strokes invert correctly via `currentColor`.
3. **File structure and naming**
   - Establish a file naming convention such as `divider-wave-01.svg`, `badge-organic-02.svg`, `illustration-vine-01.svg`.
   - Organise assets under `src/assets/svg` and export them via an index file for easy import.
   - Include metadata in comments (author, creation date, description) for attribution if required.
4. **Optimisation and accessibility**
   - Clean up SVGs to remove unnecessary metadata, groups and floats; simplify paths.  Use tools like SVGO.
   - Ensure that decorative SVGs have `aria-hidden="true"` and no `title` or `desc` unless necessary.
   - For interactive or informative SVGs, include proper `title` and `desc` elements and descriptive alt text when used in `<img>` tags.
5. **Optional animation**
   - Identify assets that could benefit from subtle animations (e.g. wave divider gently undulates).  Specify motion parameters (duration, easing) consistent with the motion analysis.
   - Provide animated versions as separate components or via CSS keyframes; ensure the static version displays when `prefers-reduced-motion` is enabled.
6. **Deliverables**
   - A list of asset prompts and style rules ready for designers or generative AI tools.
   - Example SVG files (static and animated) with proper optimisation and dark‑mode support.
   - A guideline document for integrating SVGs into React components with theme tokens.

## Implementation notes

* Use `currentColor` in SVG stroke and fill attributes to automatically adapt to theme colours.
* For icons used in buttons or lists, prefer FontAwesome or custom icon sets imported via React.
* Generate dark‑mode variants only when `currentColor` cannot adequately invert (e.g. multi‑coloured illustrations).
* Avoid embedding large SVGs inline; instead, import them as React components or reference them via `<img>` tags with lazy loading.

## Acceptance criteria

- A definitive list of required SVG assets is produced.
- Style guidelines ensure visual coherence across assets.
- Files are named, optimised and structured consistently.
- Accessibility considerations and dark‑mode variants are defined.
- Deliverables provide both assets and integration guidance.
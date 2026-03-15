# Component Architecture Analysis – Hand‑Drawn Redesign

**Executive summary**
1. **Value:** A coherent component architecture ensures that every UI element expresses the new hand‑drawn aesthetic, supports data‑first content and can be reused across pages.  It reduces technical debt and accelerates future enhancements.
2. **Risks:** Existing components may be tightly coupled to layouts or data, use inconsistent naming conventions and rely on ad‑hoc styling.  Without refactoring, they could impede theme switching, accessibility and responsive design.
3. **Next step:** Audit all current React components and WordPress blocks, catalogue them with usage contexts, then refactor into modular, data‑driven components that follow a unified naming convention and support both light and dark modes via tokens.

## Scope and tasks

1. **Inventory and categorisation**
   - Create a list of all components (Atoms, Molecules, Organisms, Templates) used across the site and note their props, states and dependencies.
   - Document which components map to Gutenberg blocks or custom WordPress shortcodes, and identify duplicates or near‑duplicates.
   - Record which components embed content versus those that accept data via props.
2. **Naming conventions and structure**
   - Adopt a clear naming scheme (e.g. PascalCase for React components, kebab-case for CSS classes) and ensure BEM naming where class names are needed.
   - Align component categories with the atomic design principles and WordPress block hierarchy; ensure each component resides in a logical folder.
3. **Refactoring for data‑driven content**
   - Decouple components from static copy: move copy, labels and images into data props.  Provide default prop values in case data is missing.
   - Create higher‑order or wrapper components to fetch data from `src/data` and pass it down to presentation components.
   - Where dynamic lists (e.g. product grids) exist, define generic `List` components that can receive item arrays and render appropriate cards.
4. **New components and patterns**
   - Specify new components required by the hand‑drawn aesthetic, such as patterned section dividers, textured card backgrounds, SVG‑framed images or decorative callouts.
   - Outline component interfaces (props, events) for the WebGL hero, interactive timelines, modal dialogs and multi‑step forms.
   - Plan reusable layout wrappers (e.g. `PageContainer`, `TwoColumnLayout`) with max width and responsive breakpoints defined by tokens.
5. **State management and logic**
   - Review existing state management (Redux, Context, local component state) and assess whether global state is needed for cart, theme toggling or user preferences.
   - Establish best practices for data fetching (SWR, React Query) and error handling; ensure skeleton loaders use the motion guidelines defined in the motion analysis.
6. **Accessibility and interaction**
   - Ensure that all interactive components support keyboard navigation, screen reader labels and focus management.
   - Document ARIA roles and attributes required for tabs, accordions, carousels, modals and tooltips.
7. **Deliverables**
   - A component catalogue with usage notes, required props and recommended refactoring steps.
   - Interface definitions (TypeScript) for new components and data structures.
   - A migration plan for decoupling content, including examples of updated code.
   - Success criteria such as full data separation, consistent naming and accessibility compliance.

## Implementation notes

* Use composition over inheritance: break complex UIs into small, testable parts.
* Place shared tokens and helpers in a central `ui` or `components` directory.
* For icons, use a central icon registry that maps names to imported SVGs; ensure icons adapt to theme colours via `currentColor`.
* When converting class names to data‑theme variants, remove reliance on `dark:` utilities and instead read CSS variables.

## Acceptance criteria

- All components are listed and categorised; duplicates are flagged for consolidation.
- Naming conventions are unified; file structure aligns with atomic design and WordPress block patterns.
- Components accept data via props; no static copy remains in template code.
- New components required by the hand‑drawn redesign are defined with clear interfaces.
- Accessibility considerations are documented and integrated into component refactoring.

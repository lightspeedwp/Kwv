# Accessibility Audit – Hand‑Drawn Redesign

**Executive summary**
1. **Value:** A rigorous accessibility audit ensures that the new design is inclusive and compliant with WCAG 2.1 AA standards, widening the audience and reducing legal risk.  Accessibility enhances usability for everyone and often improves SEO.
2. **Risks:** The existing site contains potential issues: missing focus states, insufficient colour contrast, non‑descriptive link text, and inconsistent ARIA patterns.  Dark‑mode inconsistencies may further reduce contrast or break keyboard navigation.
3. **Next step:** Conduct a comprehensive audit of every page and component, covering perceivable, operable, understandable and robust criteria.  Document all violations, prioritise fixes and provide recommendations to integrate accessibility into the design system and development workflow.

## Scope and tasks

1. **Perceivable**
   - **Contrast:** Verify that text and interactive elements meet contrast ratios against their backgrounds in both light and dark modes.  Adjust token values where necessary.
   - **Text alternatives:** Ensure all images, icons and SVGs provide appropriate alt text or `aria-hidden` attributes.  Check the Figma prototype for decorative vs informative graphics.
   - **Headings and structure:** Confirm proper heading hierarchy (H1–H6) on each page; ensure landmarks (header, nav, main, footer) are defined.
   - **Captions and transcripts:** For any video or audio content, provide captions or transcripts.
2. **Operable**
   - **Keyboard navigation:** Test all interactive elements (links, buttons, forms, modals, carousels, tabs, dropdowns) for keyboard accessibility.  Ensure focus order follows the visual flow.
   - **Focus visibility:** Define clear, theme‑aware focus styles using tokenised colours and outlines.  Avoid relying solely on colour; include visible outlines or underlines.
   - **Skip links:** Provide skip navigation links at the top of pages to allow users to bypass repetitive content.
   - **Timing:** Ensure no essential interactions are time‑limited; provide options to extend or turn off timeouts.
3. **Understandable**
   - **Readable text:** Use clear, concise language and avoid jargon.  Provide definitions for complex terms.
   - **Form labels and instructions:** Ensure every input has an associated label; include examples or placeholders where helpful.
   - **Error identification:** Present errors clearly with instructions to resolve them; ensure form validation messages are linked to inputs via `aria-describedby`.
   - **Consistent navigation:** Maintain consistent menus, breadcrumbs and layouts across pages.
4. **Robust**
   - **Semantic HTML:** Use appropriate elements (`button`, `a`, `label`, `fieldset`) and avoid div‑based controls.  Ensure ARIA roles are only used where necessary and do not override native semantics.
   - **ARIA patterns:** Follow WAI‑ARIA authoring practices for custom components such as tabs, accordions, modals and menus.
   - **Responsive content:** Ensure the site functions across devices, browsers and assistive technologies.  Test with screen readers (NVDA, VoiceOver), screen magnifiers and high‑contrast modes.
5. **Page‑specific audits**
   - For each template (home, product, subscription, experience, event, blog, cart, checkout, account), conduct targeted checks for headings, tab order, modals and dynamic content.
   - Include the /handdrawn-demo/ page and landing page to verify that complex elements (WebGL, animations, patterns) do not hinder accessibility.
6. **Motion and animation**
   - Confirm that all animations respect `prefers-reduced-motion: reduce` and provide fallbacks.
   - Avoid auto‑playing carousels or videos; require user initiation.
7. **Deliverables**
   - A detailed report listing all accessibility issues, grouped by severity and impact.
   - Recommendations for fixes, including token adjustments, component refactoring and content changes.
   - Test checklists and tools (e.g. Axe, Lighthouse, keyboard navigation script).
   - Success metrics such as 0 critical blockers and 100 % compliance with WCAG 2.1 AA.

## Implementation notes

* Use automated tools for baseline checks but always perform manual testing with real assistive technologies.
* Integrate accessibility testing into CI/CD using tools like jest‑axe.
* Train team members on accessibility best practices and incorporate them into the design tokens and component library.

## Acceptance criteria

- All pages and components have been audited against WCAG 2.1 AA.
- Issues are documented with severity and recommended fixes.
- Contrast ratios meet or exceed thresholds in both themes.
- Focus management, keyboard navigation and screen reader support are verified.
- Deliverables provide clear guidance for remediation and ongoing compliance.
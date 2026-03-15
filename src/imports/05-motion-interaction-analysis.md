# Motion & Interaction Analysis – Hand‑Drawn Redesign

**Executive summary**
1. **Value:** Thoughtfully designed motion brings life to the hand‑drawn aesthetic, guiding the user’s attention and reinforcing the narrative without distracting or causing discomfort.  A standardised motion system will make interactions feel cohesive across components.
2. **Risks:** Current animations are sparse or inconsistent, and some rely on libraries without clear easing parameters.  Excessive motion can harm accessibility, especially for users sensitive to motion or with cognitive impairments.
3. **Next step:** Audit existing motion and interaction patterns, define categories and principles for animations, create motion tokens (durations, easings, distances) and specify interactions for key components including the hero WebGL scene, carousels and modals.  Ensure all motion respects `prefers-reduced-motion` and is optimised for performance.

## Scope and tasks

1. **Inventory of current motion**
   - List all transitions, animations and interactive behaviours (hover effects, clicks, page loads) present in the codebase.
   - Note durations, delays, easing functions and whether they respect user preference for reduced motion.
   - Identify where motion is missing but could enhance the experience (e.g. filter dropdowns, accordion expansion).
2. **Motion principles**
   - Establish overarching principles: motion should support comprehension, feel organic and light, and never obstruct content.
   - Define categories:
     - *Ambient motion* for subtle background movements (e.g. parallax textures).
     - *Entrance animations* for elements entering the viewport (fade, slide, scale).
     - *Interactive motion* for hover and focus states (elevate cards, underline links).
     - *State change animations* for toggles, accordions or tab switches.
     - *Loading & progress animations* for asynchronous actions (skeleton shimmer, spinner).
   - Provide recommended durations (e.g. `fast` 100–150 ms, `normal` 200–300 ms, `slow` 400–600 ms) and cubic‑bezier curves.
3. **Motion tokens and implementation**
   - Define motion tokens (duration variables, easing variables) and integrate them into CSS custom properties and Tailwind configuration.
   - Create reusable keyframes for fade, slide, scale and staggered sequences; provide examples for both plain CSS and animation libraries (e.g. Framer Motion).
   - For WebGL scenes, specify easing curves for camera transitions, hover states and object rotations; ensure fallback animations for non‑WebGL browsers.
4. **Interaction specifications**
   - Specify motion for each key component:
     - **Hero section:** animate freeform shapes gently, fade in hero copy; allow interactive tilt or parallax on mouse move; provide reduced‑motion fallback.
     - **Product card:** scale slightly on hover, elevate shadow; show quick‑add button with slide/fade.
     - **Button:** underline or ripple effect on hover; subtle press motion on click.
     - **Accordion:** expand/collapse with height animation and easing; rotate indicator icons.
     - **Form inputs:** highlight field on focus; animate error messages sliding in.
   - Document how each motion should respond to `prefers-reduced-motion: reduce` by reducing duration or disabling animations.
5. **Performance and testing**
   - Ensure animations use hardware‑accelerated properties (`transform`, `opacity`) and avoid layout thrashing.
   - Provide guidelines to test motion at 60 fps and avoid blocking the main thread.
   - Include a testing checklist covering keyboard interactions, screen reader announcements and memory usage.
6. **Deliverables**
   - A motion system specification with tokens, keyframes and implementation examples.
   - Component‑specific interaction guidelines with code snippets.
   - Accessibility notes ensuring all motion can be reduced or disabled.
   - Success metrics such as performance budgets for animation and user testing feedback.

## Implementation notes

* Use a central `motion.ts` or `motion.js` to export duration and easing constants; import these into CSS‑in‑JS or Tailwind as needed.
* For third‑party libraries, configure consistent defaults (e.g. Framer Motion’s transition config).
* Provide fallback static states for environments where the Intersection Observer API is unavailable.
* Document known issues such as Safari’s performance with complex SVG animations.

## Acceptance criteria

- All current motions are catalogued; missing opportunities are identified.
- Motion principles and categories are defined with appropriate tokens and durations.
- Each key component has a specified motion pattern that degrades gracefully.
- Animations respect `prefers-reduced-motion` and use performant CSS properties.
- Deliverables include reusable code and accessibility guidance.
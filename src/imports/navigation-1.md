# Navigation Design Tokens

## Purpose
Define the token rules for navigation and keep them aligned with the live codebase.

## Brand and UI direction
Navigation should feel inviting and easy to scan. The interface can carry subtle hand-crafted personality, but information scent and orientation must stay stronger than decoration.

## Audit source of truth
Before treating this file as current, inspect:
- top-level nav components
- mobile navigation
- breadcrumbs
- pagination
- tabs or section navigation
- devtools and site map navigation surfaces if relevant

## Canonical token map
Document verified live tokens here.

| Token | Value | Usage | Source file |
|---|---|---|---|
| 

## Rules
- Keep interactive states consistent across nav types.
- Define spacing, typography, colour, active states, hover states, and focus states.
- Ensure the same destination does not present conflicting labels.
- Decorative styling must not obscure current location or affordance.

## Accessibility notes
- Keyboard navigation must remain reliable.
- Focus treatment must be obvious.
- Mobile tap targets must respect touch-target guidance.

## Related files
- `typography.md`
- `spacing.md`
- `colors.md`
- `touch-targets.md`
- `responsive.md`

## Update trigger
Review whenever routes, navigation components, or IA patterns change.

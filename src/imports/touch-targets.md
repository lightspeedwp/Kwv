# Touch Targets Design Tokens

## Purpose
Define target-size and interaction-spacing rules and keep them aligned with the live codebase.

## Brand and UI direction
The product should feel effortless to use. Friendly, tactile design only works if controls are comfortable to hit, especially on touch devices.

## Audit source of truth
Before treating this file as current, inspect:
- button sizes
- form controls
- icon buttons
- navigation items
- card actions
- mobile layouts

## Canonical token map
Document verified live tokens here.

| Token | Value | Usage | Source file |
|---|---|---|---|
| 

## Rules
- Document minimum target sizes.
- Document minimum spacing between adjacent interactive elements.
- Ensure icon-only controls receive explicit sizing rules.
- Keep tactile, hand-crafted UI cues supportive rather than cluttered.

## Accessibility notes
- Small touch targets are not acceptable.
- Dense control groupings must still be usable.
- Responsive layouts must not collapse targets below the minimum standard.

## Related files
- `buttons.md`
- `forms.md`
- `navigation.md`
- `responsive.md`

## Update trigger
Review whenever component sizing or mobile layout rules change.

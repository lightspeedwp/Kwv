# Colours Design Tokens

## Purpose
Define the colour token system and keep it aligned with the live codebase.

## Brand and UI direction
The palette should feel warm, welcoming, and premium without becoming heavy. It should support a brand voice that is casual, approachable, friendly, and clearly passionate about making incredible wine.

## Audit source of truth
Before treating this file as current, inspect:
- root token definitions
- CSS custom properties
- theme config
- dark/light mode config
- components that use semantic colour tokens

## Canonical token map
Document verified live tokens here.

| Token | Value | Usage | Source file |
|---|---|---|---|
| 

## Rules
- Prefer semantic tokens such as surface, text, border, accent, danger, success, warning, and muted.
- Avoid directly using raw palette values in component code unless the design system explicitly allows it.
- Ensure colours support both light and dark mode.
- Any hand-drawn accents or illustration styling must still preserve contrast and readability.

## Accessibility notes
- Text contrast must meet the project standard.
- Focus, error, success, and disabled states must remain distinct.
- Decorative colour use must not carry meaning alone.

## Related files
- `dark-light-mode.md`
- `buttons.md`
- `forms.md`
- `navigation.md`

## Update trigger
Review whenever palette, semantic mapping, or theme behaviour changes.

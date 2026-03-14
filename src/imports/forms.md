# Forms Design Tokens

## Purpose
Define the token rules for form controls and keep them aligned with the live codebase.

## Brand and UI direction
Forms should feel friendly, calm, and approachable. Hand-drawn styling can appear in borders, helper illustrations, or accent moments, but inputs must remain clean, legible, and easy to complete.

## Audit source of truth
Before treating this file as current, inspect:
- input, select, textarea, checkbox, radio, and switch components
- error and validation styles
- labels, helper text, and hints
- button and spacing tokens used by forms

## Canonical token map
Document verified live tokens here.

| Token | Value | Usage | Source file |
|---|---|---|---|
| 

## Rules
- Define tokens for field height, padding, label spacing, border treatment, focus state, error state, disabled state, and helper text.
- Keep validation messaging clear and calm.
- Ensure any decorative styling never hides the control state.

## Accessibility notes
- Inputs and controls must be easy to target and navigate.
- Focus state must be highly visible.
- Error handling must not rely on colour alone.

## Related files
- `buttons.md`
- `colors.md`
- `spacing.md`
- `touch-targets.md`

## Update trigger
Review whenever form components or validation patterns change.

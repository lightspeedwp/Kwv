# Buttons Design Tokens

## Purpose
Define button tokens and usage rules so button styling stays aligned with the live codebase.

## Brand and UI direction
Buttons should feel welcoming and tactile. They can include subtle hand-drawn qualities such as imperfect outlines, warm shadow treatment, or slightly organic decoration, but never at the expense of readability, target size, or interaction clarity.

## Audit source of truth
Before treating this file as current, inspect:
- button component files
- shared CTA styles
- CSS variables for colour, border, radius, shadow, spacing, and motion
- theme config and utility classes

## Canonical token map
Document verified live tokens here.

| Token | Value | Usage | Source file |
|---|---|---|---|
| 

## Rules
- Use semantic button tokens rather than hard-coded colours or radii.
- Define primary, secondary, tertiary, destructive, disabled, and focus-visible states.
- Ensure hover and active states remain clear in both light and dark themes.
- Preserve a friendly wine-led brand feel while keeping buttons obviously interactive.

## Implementation notes
Document size variants, icon spacing, border treatment, shadow behaviour, and motion rules.

## Accessibility notes
- Minimum comfortable target size should respect touch-target guidance.
- Focus-visible state must be obvious.
- Contrast must stay compliant in all states.

## Related files
- `forms.md`
- `colors.md`
- `spacing.md`
- `radii.md`
- `touch-targets.md`

## Update trigger
Review whenever button components, CTA patterns, or interaction styling changes.

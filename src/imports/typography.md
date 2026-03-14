# Typography Design Tokens

## Purpose
Define the typography token system and keep it aligned with the live codebase.

## Brand and UI direction
Typography should feel human, expressive, and easy to read. The tone is casual and friendly, but the system must still feel reliable and well-crafted. Any hand-drawn flavour should be used sparingly in accents or display moments, not in core body copy if it harms readability.

## Audit source of truth
Before treating this file as current, inspect:
- font imports and definitions
- text utility classes
- theme config
- heading and body styles in components and pages

## Canonical token map
Document verified live tokens here.

| Token | Value | Usage | Source file |
|---|---|---|---|
| 

## Rules
- Define tokens for display, heading, body, label, caption, and code if relevant.
- Document font families, sizes, line heights, weights, tracking, and responsive behaviour.
- Keep body copy highly readable.
- Use expressive styling for wine-led brand moments with discipline.

## Accessibility notes
- Maintain strong legibility across breakpoints.
- Avoid overly tight tracking or low-contrast decorative text.
- Do not rely on script or novelty faces for important UI copy.

## Related files
- `spacing.md`
- `responsive.md`
- `navigation.md`
- `forms.md`

## Update trigger
Review whenever typography tokens, font loading, or responsive text rules change.

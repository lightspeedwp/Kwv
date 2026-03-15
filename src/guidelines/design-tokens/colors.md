# Colour Tokens – Hand‑Drawn Redesign

This guide defines the colour palette for the hand‑drawn redesign and provides implementation details for CSS variables, Tailwind and WordPress integration.  Colours are split into semantic categories and support both light and dark themes.

## Semantic palette

### Base surfaces
| Token | Light value | Dark value | Description |
|------|-------------|------------|-------------|
| `--color-paper` | `#F9F6F1` | `#1A1816` | Primary background resembling textured paper. |
| `--color-panel` | `#FFFFFF` | `#23201D` | Secondary surfaces for cards and panels. |
| `--color-ink` | `#2C2924` | `#EAE6E0` | Primary text colour. |
| `--color-muted` | `#6D665C` | `#A39A8F` | Muted text for secondary copy. |

### Accents
| Token | Light value | Dark value | Description |
|------|-------------|------------|-------------|
| `--color-vine` | `#556B2F` | `#9BBF6F` | Rich green accent used for highlights, links and calls to action. |
| `--color-clay` | `#A04D33` | `#D58C76` | Earthy red accent for headers, badges and alerts. |
| `--color-gold` | `#C59D39` | `#FFD56F` | Golden accent for highlights, stamps and decorative elements. |

### Interactive states
| Token | Light value | Dark value | Description |
|------|-------------|------------|-------------|
| `--color-link` | var(--color-vine) | var(--color-vine) | Default link colour. |
| `--color-link-hover` | `#3C5222` | `#B0D47F` | Darker or lighter shade for hover state. |
| `--color-focus` | `#2B4F2A` | `#CFE7AA` | Focus ring colour that meets 3:1 contrast. |
| `--color-error` | `#B0303F` | `#E89A9F` | Error messages and invalid states. |
| `--color-success` | `#3B7D3A` | `#8BC17C` | Success messages and confirmations. |

### Utility colours
| Token | Light value | Dark value | Description |
|------|-------------|------------|-------------|
| `--color-border` | `#E0DDD9` | `#383330` | Borders and dividers. |
| `--color-overlay` | `rgba(0,0,0,0.3)` | `rgba(0,0,0,0.6)` | Backdrop overlays for modals. |

## Usage guidelines

* Use semantic tokens rather than specific hex values.  For example, assign `color: var(--color-ink)` for body text; never hard‑code `#2C2924`.
* Override variables under `[data-theme=\"dark\"]` to swap values seamlessly between themes.
* For gradients or shadows, compute colours using these base tokens rather than introducing new colours.
* Avoid using the gold token on large text blocks as its low contrast may reduce readability; reserve it for small accents.
* When combining vine and clay, ensure sufficient contrast or include a neutral separator.

## Implementation

Define the variables in a global CSS file:

```css
:root[data-theme="light"] {
  --color-paper: #F9F6F1;
  --color-panel: #FFFFFF;
  --color-ink: #2C2924;
  --color-muted: #6D665C;
  --color-vine: #556B2F;
  --color-clay: #A04D33;
  --color-gold: #C59D39;
  --color-link-hover: #3C5222;
  --color-focus: #2B4F2A;
  --color-error: #B0303F;
  --color-success: #3B7D3A;
  --color-border: #E0DDD9;
  --color-overlay: rgba(0,0,0,0.3);
}

:root[data-theme="dark"] {
  --color-paper: #1A1816;
  --color-panel: #23201D;
  --color-ink: #EAE6E0;
  --color-muted: #A39A8F;
  --color-vine: #9BBF6F;
  --color-clay: #D58C76;
  --color-gold: #FFD56F;
  --color-link-hover: #B0D47F;
  --color-focus: #CFE7AA;
  --color-error: #E89A9F;
  --color-success: #8BC17C;
  --color-border: #383330;
  --color-overlay: rgba(0,0,0,0.6);
}
```

In `tailwind.config.js`, reference these variables:

```js
const colors = {
  paper: 'var(--color-paper)',
  panel: 'var(--color-panel)',
  ink: 'var(--color-ink)',
  muted: 'var(--color-muted)',
  vine: 'var(--color-vine)',
  clay: 'var(--color-clay)',
  gold: 'var(--color-gold)',
  border: 'var(--color-border)',
  overlay: 'var(--color-overlay)',
};

module.exports = {
  theme: { colors },
};
```

Map these tokens to WordPress `theme.json` under `settings.color.palette.custom` using the same names.

## Validation

* Use automated tools such as Stark or Color Contrast Analyser to verify that text and UI elements meet AA contrast ratios in both themes.
* Review the palette with real content and adjust if certain combinations feel off‑brand or illegible.

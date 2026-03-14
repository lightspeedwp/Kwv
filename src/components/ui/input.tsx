/**
 * Input Component
 * 
 * Text input field component used across all forms in the Handcrafted Wines site.
 * Supports multiple input types with consistent styling and accessibility.
 * 
 * Features:
 * - All HTML5 input types supported (text, email, password, number, etc.)
 * - Design token integration (colors, spacing, radius, borders)
 * - Multiple states (default, focus, error, disabled)
 * - WCAG AA compliant (touch targets ≥ 44px, visible focus rings)
 * - File upload styling support
 * - Placeholder text styling
 * - Text selection styling
 * - Dark mode support via CSS variables
 * - Screen reader friendly
 * - WordPress theme.json aligned
 * 
 * Usage:
 * ```tsx
 * <Input type="text" placeholder="Enter your name" />
 * <Input type="email" placeholder="Email address" aria-invalid={hasError} />
 * <Input type="password" placeholder="Password" disabled />
 * <Input type="file" />
 * ```
 * 
 * States:
 * - Default - Normal interactive state
 * - Focus - Gold focus ring (WCAG compliant)
 * - Error - Red border and ring (aria-invalid)
 * - Disabled - Muted appearance, not interactive
 * 
 * Input Types Supported:
 * - text, email, password, number, tel, url
 * - search, date, time, datetime-local
 * - file (with custom file upload styling)
 * - All other HTML5 input types
 * 
 * Design Tokens:
 * - Background: var(--twb-color-bg-tertiary)
 * - Border: var(--twb-color-border-primary)
 * - Text: var(--twb-color-text-primary)
 * - Placeholder: var(--twb-color-text-secondary)
 * - Focus ring: var(--twb-color-gold)
 * - Radius: var(--twb-radius-input)
 * - Spacing: var(--twb-spacing-3)
 * 
 * Accessibility:
 * - Minimum height 44px (WCAG touch target)
 * - Visible focus ring
 * - Error states indicated with aria-invalid
 * - Placeholder text meets contrast requirements
 * - Disabled state clearly indicated
 * 
 * Props:
 * @param {string} type - HTML input type (default: 'text')
 * @param {string} placeholder - Placeholder text
 * @param {boolean} disabled - Disable the input
 * @param {string} className - Additional CSS classes
 * @param {...HTMLInputElement} props - All standard input HTML attributes
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import * as React from "react";

import { cn } from "./utils";

export interface InputProps extends React.ComponentProps<"input"> {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * Input
 * 
 * Renders a styled text input field with all HTML5 input type support.
 * 
 * @param {InputProps} props - Component props
 */
function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styles
        "flex w-full min-w-0 rounded-[var(--twb-radius-input)] border border-[var(--twb-color-border-primary)] bg-[var(--twb-color-bg-tertiary)] px-[var(--twb-spacing-3)] py-[var(--twb-spacing-2)] font-[family-name:var(--twb-font-sans)] text-[length:var(--twb-text-body)] text-[var(--twb-color-text-primary)] outline-none transition-[color,border-color,box-shadow] duration-200",
        
        // Height and touch targets
        "h-11 min-h-[44px]", // WCAG AA touch target minimum
        
        // Placeholder styling
        "placeholder:text-[var(--twb-color-text-secondary)] placeholder:opacity-70",
        
        // Text selection styling
        "selection:bg-[var(--twb-color-plum)] selection:text-white",
        
        // Focus state with gold ring
        "focus-visible:border-[var(--twb-color-gold)] focus-visible:ring-2 focus-visible:ring-[var(--twb-color-gold)] focus-visible:ring-offset-2",
        
        // Error state (aria-invalid)
        "aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/20",
        
        // Disabled state
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-[var(--twb-color-bg-secondary)] disabled:text-[var(--twb-color-text-secondary)] disabled:opacity-60",
        
        // File upload specific styling
        "file:inline-flex file:h-8 file:items-center file:rounded-[var(--twb-radius-sm)] file:border-0 file:bg-[var(--twb-color-bg-secondary)] file:px-[var(--twb-spacing-3)] file:font-[family-name:var(--twb-font-sans)] file:text-[length:var(--twb-text-caption)] file:font-medium file:text-[var(--twb-color-text-primary)] file:transition-colors file:hover:bg-[var(--twb-color-plum)] file:hover:text-white",
        
        // Responsive text sizing
        "text-base md:text-sm",
        
        className,
      )}
      {...props}
    />
  );
}

export { Input };

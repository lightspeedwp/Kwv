/**
 * HandDrawnCheckbox Component
 * 
 * Checkbox with hand-drawn check mark and sketch box.
 * Organic alternative to standard checkbox inputs.
 * 
 * Features:
 * - Hand-drawn checkbox box (irregular square)
 * - Brush stroke check mark (✓)
 * - Asymmetric corners
 * - Smooth check animation
 * - Focus ring (WCAG compliant)
 * - Error state styling
 * - Dark mode support
 * - Accessible label association
 * 
 * Usage:
 * ```tsx
 * <HandDrawnCheckbox
 *   name="terms"
 *   label="I agree to the terms and conditions"
 *   required
 * />
 * ```
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';

interface HandDrawnCheckboxProps {
  /** Checkbox name */
  name: string;
  /** Label text */
  label: React.ReactNode;
  /** Checked state (controlled) */
  checked?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Error message */
  error?: string;
  /** Required field */
  required?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Additional classes */
  className?: string;
}

/**
 * HandDrawnCheckbox - Organic checkbox with sketch aesthetic
 */
export const HandDrawnCheckbox: React.FC<HandDrawnCheckboxProps> = ({
  name,
  label,
  checked = false,
  onChange,
  error,
  required = false,
  disabled = false,
  className = '',
}) => {
  const checkboxId = `checkbox-${name}`;
  const errorId = `error-${name}`;
  const borderColor = error ? 'var(--twb-color-clay)' : 'var(--twb-color-plum)';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <div className={`mb-[var(--twb-spacing-4)] ${className}`}>
      <div className="flex items-start gap-[var(--twb-spacing-3)]">
        {/* Hidden Native Checkbox (for accessibility) */}
        <input
          type="checkbox"
          id={checkboxId}
          name={name}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : undefined}
          className="sr-only peer"
        />

        {/* Custom Hand-Drawn Checkbox */}
        <label
          htmlFor={checkboxId}
          className={`
            relative flex-shrink-0 w-6 h-6 cursor-pointer 
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {/* Hand-drawn box (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Pencil sketch filter */}
              <filter id={`sketch-${name}`}>
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" />
                <feDisplacementMap in="SourceGraphic" scale="0.3" />
              </filter>
            </defs>

            {/* Irregular box outline */}
            <path
              d="M3,5 Q2,3 4,2 L18,3 Q21,3 22,6 L21,18 Q21,21 18,22 L6,21 Q3,21 3,18 Z"
              fill="var(--twb-color-bg-tertiary)"
              stroke={borderColor}
              strokeWidth="1.5"
              opacity="0.6"
              filter={`url(#sketch-${name})`}
            />

            {/* Background fill when checked */}
            {checked && (
              <path
                d="M3,5 Q2,3 4,2 L18,3 Q21,3 22,6 L21,18 Q21,21 18,22 L6,21 Q3,21 3,18 Z"
                fill={borderColor}
                opacity="0.1"
              />
            )}

            {/* Hand-drawn check mark (brush stroke) */}
            {checked && (
              <g>
                <path
                  d="M6,12 L10,16 L18,7"
                  stroke={borderColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  filter={`url(#sketch-${name})`}
                  className="animate-[draw_0.3s_ease-out]"
                />
                {/* Double stroke for emphasis */}
                <path
                  d="M6,12.5 L10,16.5 L18,7.5"
                  stroke={borderColor}
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.4"
                  filter={`url(#sketch-${name})`}
                  className="animate-[draw_0.3s_ease-out_0.1s]"
                />
              </g>
            )}
          </svg>

          {/* Focus ring (appears when checkbox is focused) */}
          <div 
            className="
              absolute inset-0 -m-1 rounded-[4px] 
              peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--twb-color-gold)] 
              peer-focus-visible:ring-offset-2 
              pointer-events-none
            "
          />
        </label>

        {/* Label Text */}
        <label 
          htmlFor={checkboxId}
          className={`
            flex-1 text-sm text-[var(--twb-color-text-primary)] leading-relaxed cursor-pointer
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {label}
          {required && (
            <span className="text-[var(--twb-color-clay)] ml-1" aria-label="required">*</span>
          )}
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <p 
          id={errorId}
          className="mt-[var(--twb-spacing-2)] ml-9 text-sm text-[var(--twb-color-clay)] flex items-center gap-1"
          role="alert"
        >
          <span aria-hidden="true">⚠</span>
          {error}
        </p>
      )}
    </div>
  );
};

export default HandDrawnCheckbox;

/**
 * HandDrawnTextInput Component
 * 
 * Text input field with hand-drawn pencil sketch border aesthetic.
 * Replaces clinical form inputs with organic, handcrafted styling.
 * 
 * Features:
 * - Pencil sketch SVG border (irregular, organic)
 * - Paper texture background
 * - Asymmetric border radius
 * - Focus state with hand-drawn ring
 * - Error state with red sketch border
 * - WCAG AA compliant (contrast, focus indicators)
 * - Dark mode support
 * - Accessible labels and error messages
 * 
 * Usage:
 * ```tsx
 * <HandDrawnTextInput
 *   label="Your Name"
 *   name="name"
 *   placeholder="Enter your name..."
 *   required
 * />
 * ```
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';
import { PaperTexture } from '../decorative/PaperTexture';

interface HandDrawnTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Input field label */
  label: string;
  /** Field name */
  name: string;
  /** Input type (text, email, tel, etc.) */
  type?: 'text' | 'email' | 'tel' | 'url' | 'password' | 'search';
  /** Error message to display */
  error?: string;
  /** Help text below input */
  helpText?: string;
  /** Show required asterisk */
  required?: boolean;
  /** Additional classes for container */
  className?: string;
}

/**
 * HandDrawnTextInput - Organic form input with sketch borders
 */
export const HandDrawnTextInput: React.FC<HandDrawnTextInputProps> = ({
  label,
  name,
  type = 'text',
  error,
  helpText,
  required = false,
  className = '',
  ...inputProps
}) => {
  const inputId = `input-${name}`;
  const errorId = `error-${name}`;
  const helpId = `help-${name}`;
  const borderColor = error ? 'var(--twb-color-clay)' : 'var(--twb-color-vine)';

  return (
    <div className={`mb-[var(--twb-spacing-6)] ${className}`}>
      {/* Label */}
      <label 
        htmlFor={inputId}
        className="block mb-[var(--twb-spacing-2)] text-[var(--twb-color-text-primary)] font-[number:var(--twb-font-weight-medium)] text-sm"
      >
        {label}
        {required && (
          <span className="text-[var(--twb-color-clay)] ml-1" aria-label="required">*</span>
        )}
      </label>

      {/* Input Container */}
      <div className="relative">
        {/* Hand-drawn border (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            {/* Pencil texture filter */}
            <filter id={`pencil-${name}`}>
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" seed="1" />
              <feDisplacementMap in="SourceGraphic" scale="0.5" />
            </filter>
          </defs>

          {/* Irregular sketch border path */}
          <path
            d="M2,8 Q1,4 4,3 L92,2 Q96,2 97,6 L98,90 Q98,94 94,96 L8,97 Q4,97 2,93 Z"
            fill="none"
            stroke={borderColor}
            strokeWidth="0.8"
            opacity="0.5"
            filter={`url(#pencil-${name})`}
          />
          
          {/* Double line for emphasis (sketch aesthetic) */}
          <path
            d="M3,9 Q2,5 5,4 L91,3 Q95,3 96,7 L97,89 Q97,93 93,95 L9,96 Q5,96 3,92 Z"
            fill="none"
            stroke={borderColor}
            strokeWidth="0.4"
            opacity="0.3"
            filter={`url(#pencil-${name})`}
          />
        </svg>

        {/* Paper texture background */}
        <div className="absolute inset-0 rounded-[var(--twb-radius-organic-sm)] overflow-hidden pointer-events-none">
          <PaperTexture intensity="subtle" opacity={0.02} />
        </div>

        {/* Actual Input */}
        <input
          id={inputId}
          name={name}
          type={type}
          className={`
            relative z-10 w-full px-[var(--twb-spacing-4)] py-[var(--twb-spacing-3)]
            bg-[var(--twb-color-bg-tertiary)] 
            text-[var(--twb-color-text-primary)]
            rounded-[var(--twb-radius-organic-sm)]
            border-2 border-transparent
            transition-all duration-200
            placeholder:text-[var(--twb-color-text-muted)]
            focus:outline-none 
            focus:ring-2 
            focus:ring-[var(--twb-color-plum)] 
            focus:ring-offset-1
            disabled:opacity-50 
            disabled:cursor-not-allowed
            ${error ? 'ring-2 ring-[var(--twb-color-clay)]' : ''}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={`${error ? errorId : ''} ${helpText ? helpId : ''}`.trim() || undefined}
          required={required}
          {...inputProps}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p 
          id={errorId}
          className="mt-[var(--twb-spacing-2)] text-sm text-[var(--twb-color-clay)] flex items-center gap-1"
          role="alert"
        >
          <span aria-hidden="true">⚠</span>
          {error}
        </p>
      )}

      {/* Help Text */}
      {helpText && !error && (
        <p 
          id={helpId}
          className="mt-[var(--twb-spacing-2)] text-sm text-[var(--twb-color-text-muted)]"
        >
          {helpText}
        </p>
      )}
    </div>
  );
};

export default HandDrawnTextInput;

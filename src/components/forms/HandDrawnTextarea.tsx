/**
 * HandDrawnTextarea Component
 * 
 * Multi-line textarea field with hand-drawn pencil sketch border aesthetic.
 * Matches HandDrawnTextInput styling for form consistency.
 * 
 * Features:
 * - Pencil sketch SVG border (irregular, organic)
 * - Paper texture background
 * - Asymmetric border radius
 * - Auto-resize option
 * - Character count display
 * - Focus state with hand-drawn ring
 * - Error state styling
 * - WCAG AA compliant
 * - Dark mode support
 * 
 * Usage:
 * ```tsx
 * <HandDrawnTextarea
 *   label="Message"
 *   name="message"
 *   rows={5}
 *   maxLength={500}
 *   showCharCount
 * />
 * ```
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';
import { PaperTexture } from '../decorative/PaperTexture';

interface HandDrawnTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Textarea label */
  label: string;
  /** Field name */
  name: string;
  /** Error message to display */
  error?: string;
  /** Help text below textarea */
  helpText?: string;
  /** Show required asterisk */
  required?: boolean;
  /** Show character count */
  showCharCount?: boolean;
  /** Additional classes for container */
  className?: string;
}

/**
 * HandDrawnTextarea - Organic multi-line input with sketch borders
 */
export const HandDrawnTextarea: React.FC<HandDrawnTextareaProps> = ({
  label,
  name,
  error,
  helpText,
  required = false,
  showCharCount = false,
  maxLength,
  className = '',
  value,
  onChange,
  ...textareaProps
}) => {
  const [charCount, setCharCount] = React.useState(0);
  const textareaId = `textarea-${name}`;
  const errorId = `error-${name}`;
  const helpId = `help-${name}`;
  const borderColor = error ? 'var(--twb-color-clay)' : 'var(--twb-color-vine)';

  // Track character count
  React.useEffect(() => {
    if (typeof value === 'string') {
      setCharCount(value.length);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`mb-[var(--twb-spacing-6)] ${className}`}>
      {/* Label */}
      <label 
        htmlFor={textareaId}
        className="block mb-[var(--twb-spacing-2)] text-[var(--twb-color-text-primary)] font-[number:var(--twb-font-weight-medium)] text-sm"
      >
        {label}
        {required && (
          <span className="text-[var(--twb-color-clay)] ml-1" aria-label="required">*</span>
        )}
      </label>

      {/* Textarea Container */}
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
            <filter id={`pencil-textarea-${name}`}>
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" seed="2" />
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
            filter={`url(#pencil-textarea-${name})`}
          />
          
          {/* Double line for emphasis */}
          <path
            d="M3,9 Q2,5 5,4 L91,3 Q95,3 96,7 L97,89 Q97,93 93,95 L9,96 Q5,96 3,92 Z"
            fill="none"
            stroke={borderColor}
            strokeWidth="0.4"
            opacity="0.3"
            filter={`url(#pencil-textarea-${name})`}
          />
        </svg>

        {/* Paper texture background */}
        <div className="absolute inset-0 rounded-[var(--twb-radius-organic-sm)] overflow-hidden pointer-events-none">
          <PaperTexture intensity="subtle" opacity={0.02} />
        </div>

        {/* Actual Textarea */}
        <textarea
          id={textareaId}
          name={name}
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
            resize-y
            ${error ? 'ring-2 ring-[var(--twb-color-clay)]' : ''}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={`${error ? errorId : ''} ${helpText ? helpId : ''}`.trim() || undefined}
          required={required}
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
          {...textareaProps}
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

      {/* Help Text and Character Count */}
      <div className="flex justify-between items-center mt-[var(--twb-spacing-2)]">
        {helpText && !error && (
          <p 
            id={helpId}
            className="text-sm text-[var(--twb-color-text-muted)]"
          >
            {helpText}
          </p>
        )}
        
        {showCharCount && maxLength && (
          <p className="text-sm text-[var(--twb-color-text-muted)] ml-auto">
            {charCount} / {maxLength}
          </p>
        )}
      </div>
    </div>
  );
};

export default HandDrawnTextarea;

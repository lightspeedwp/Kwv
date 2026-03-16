import React from 'react';

interface LiveRegionProps {
  /**
   * Status message to announce to screen readers
   */
  message: string;
  
  /**
   * Urgency level of the announcement
   * - 'polite': Waits for user to pause (default, for most updates)
   * - 'assertive': Interrupts immediately (for critical errors/warnings)
   */
  level?: 'polite' | 'assertive';
}

/**
 * LiveRegion Component
 * 
 * Announces dynamic status messages to screen readers without moving focus.
 * Implements WCAG 2.1 Level AA Success Criterion 4.1.3 (Status Messages).
 * 
 * Use Cases:
 * - Cart additions/removals ("Item added to cart")
 * - Quantity changes ("Quantity updated to 3")
 * - Loading states ("Loading products...")
 * - Search results ("12 results found")
 * - Form feedback ("Form submitted successfully")
 * 
 * Features:
 * - Screen reader only (sr-only class - invisible but announced)
 * - Supports polite and assertive announcement levels
 * - aria-atomic="true" for complete message announcement
 * - Proper ARIA roles (status vs alert)
 * 
 * @param {string} message - Status message to announce (empty string = silent)
 * @param {'polite' | 'assertive'} level - Announcement urgency (default: 'polite')
 * 
 * @example
 * // Cart addition (polite)
 * <LiveRegion message="Estate Shiraz added to cart" level="polite" />
 * 
 * @example
 * // Error message (assertive)
 * <LiveRegion message="Payment failed. Please try again." level="assertive" />
 * 
 * @see https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html
 */
export const LiveRegion: React.FC<LiveRegionProps> = ({ 
  message, 
  level = 'polite' 
}) => {
  // Don't render if no message
  if (!message) return null;

  return (
    <div
      role={level === 'assertive' ? 'alert' : 'status'}
      aria-live={level}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
};

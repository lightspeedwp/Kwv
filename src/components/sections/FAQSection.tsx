import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { HandDrawnUnderline } from '../decorative/HandDrawnUnderline';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
  variant?: 'light' | 'dark';
  showUnderline?: boolean;
  className?: string;
  id?: string;
}

/**
 * FAQSection Component
 * 
 * A reusable accordion-style FAQ component using Radix UI Accordion primitive.
 * Used on Homepage, Shop pages, and Experience pages for common questions.
 * 
 * Features:
 * - Expandable/collapsible items with smooth animation
 * - Keyboard accessible (Tab, Enter, Arrow keys)
 * - Optional hand-drawn underline on title
 * - Light and dark background variants
 * - Supports HTML content in answers (for links)
 * - Design token integration (colors, spacing, borders, radii)
 * - WCAG AA compliant
 * - Screen reader friendly
 * - Dark mode support
 * 
 * @package HandcraftedWines
 * @version 2.0
 * 
 * @param {FAQSectionProps} props - Title, items array, and styling options
 * @returns {JSX.Element} Rendered FAQ section
 */
export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  items,
  variant = 'light',
  showUnderline = true,
  className = '',
  id
}) => {
  const isDark = variant === 'dark';
  const bgColor = isDark ? 'bg-[var(--twb-color-ink)]' : 'bg-[var(--twb-color-bg-secondary)]';
  const titleColor = isDark ? 'text-[var(--twb-color-text-on-dark)]' : 'text-[var(--twb-color-text-primary)]';
  const questionColor = isDark ? 'text-[var(--twb-color-text-on-dark)]' : 'text-[var(--twb-color-text-primary)]';
  const answerColor = isDark ? 'text-[var(--twb-color-text-on-dark)]/80' : 'text-[var(--twb-color-text-secondary)]';
  const questionHoverColor = isDark ? 'hover:text-[var(--twb-color-gold)]' : 'hover:text-[var(--twb-color-plum)]';
  const itemBg = isDark ? 'bg-[var(--twb-color-ink)]/80' : 'bg-[var(--twb-color-bg-primary)]';

  return (
    <section id={id} className={`py-[var(--twb-spacing-section-y)] ${bgColor} border-t border-[var(--twb-border-primary)] ${className}`}>
      <Container variant="content">
        <div className="text-center mb-[var(--twb-spacing-10)]">
          <Typography variant="h2" className={`${titleColor} font-[number:var(--twb-font-weight-bold)] mb-[var(--twb-spacing-2)]`}>
            {title}
          </Typography>
          
          {showUnderline && (
            <div className="flex justify-center mt-[var(--twb-spacing-2)]" aria-hidden="true">
              <HandDrawnUnderline variant="scribble" width={100} />
            </div>
          )}
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className={`${itemBg} border border-[var(--twb-border-secondary)] rounded-[var(--twb-radius-card)] mb-[var(--twb-spacing-4)] px-[var(--twb-spacing-6)] last:mb-0 shadow-[var(--twb-shadow-sm)] hover:shadow-[var(--twb-shadow-md)] transition-shadow`}
            >
              <AccordionTrigger className={`text-lg font-serif ${questionColor} ${questionHoverColor} hover:no-underline py-[var(--twb-spacing-6)]`}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className={`${answerColor} text-base leading-relaxed pb-[var(--twb-spacing-6)]`}>
                 <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};
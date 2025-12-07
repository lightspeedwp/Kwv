import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { COLORS } from '../../constants/theme';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
  className?: string;
  id?: string;
}

/**
 * FAQSection Component
 * 
 * A reusable accordion-style FAQ component.
 * 
 * Features:
 * - Expandable/Collapsible items using `shadcn/ui` Accordion.
 * - Supports HTML content in answers (e.g., for links).
 * - Customizable title and ID for anchor linking.
 * 
 * @param {FAQSectionProps} props - Title, items array, and styling.
 */
export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  items,
  className,
  id
}) => {
  return (
    <section id={id} className={`py-16 bg-[#F9F9F9] border-t border-gray-100 ${className}`}>
      <Container variant="content">
        <Typography variant="h2" color={COLORS.darkBrown} className="mb-10 text-center">
          {title}
        </Typography>
        
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-sm mb-4 px-6 last:mb-0 shadow-sm">
              <AccordionTrigger className="text-lg font-serif text-[#2C1810] hover:text-[#8B0000] hover:no-underline py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                 <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

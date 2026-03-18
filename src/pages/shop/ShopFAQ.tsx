import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/accordion';
import { SHOP_FAQ } from '../../data/shop-faq';

/**
 * Shop FAQ Page
 * 
 * Frequently asked questions about ordering, shipping, returns, etc.
 */

export const ShopFAQ: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <Container className="bg-[var(--twb-color-bg-tertiary)] py-12 px-4 md:px-8">
        <Typography variant="h2" className="text-center mb-4">Shop FAQ</Typography>
        <Typography variant="body1" className="text-center">Find answers to common questions about ordering, shipping, and returns.</Typography>
      </Container>

      <Container className="py-12 px-4 md:px-8">
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {SHOP_FAQ.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <div 
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Layout>
  );
};
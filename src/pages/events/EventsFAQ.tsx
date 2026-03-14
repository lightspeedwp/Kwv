import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { FAQSection } from '../../components/sections/FAQSection';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router';
import { COLORS } from '../../constants/theme';

const faqItems = [
  {
    question: "HOW DO I BOOK TICKETS FOR AN EVENT?",
    answer: "You can enquire about tickets directly through our website by clicking the 'Book Tickets' or 'Enquire Now' button on the specific event page. Alternatively, you can contact our events team via phone or email."
  },
  {
    question: "WHAT IS THE CANCELLATION POLICY FOR EVENTS?",
    answer: "Cancellation policies vary by event. Generally, cancellations made more than 48 hours in advance are eligible for a refund. Please check the specific terms and conditions for your ticket."
  },
  {
    question: "ARE EVENTS CHILD-FRIENDLY?",
    answer: "Some of our events are family-friendly, while others are strictly for adults (18+). Please check the specific event details for age restrictions."
  },
  {
    question: "IS THERE PARKING AVAILABLE FOR EVENTS?",
    answer: "Yes, ample secure parking is available at the KWV Emporium for all our event guests."
  },
  {
    question: "DIETARY REQUIREMENTS?",
    answer: "We cater for most dietary requirements. Please inform us of any allergies or dietary needs when booking your ticket or at least 48 hours before the event."
  }
];

/**
 * EventsFAQ Page Component
 * 
 * Displays Frequently Asked Questions related to events (Booking, policies, etc.).
 * Wraps `FAQSection` within the `events` layout variant.
 */
export const EventsFAQ: React.FC = () => {
  return (
    <Layout variant="events">
      {/* Hero Section */}
      <div className="bg-[#F5F5DC] py-16 md:py-24">
        <Container variant="content" className="text-center">
          <Typography variant="h1" className="mb-6" color={COLORS.darkBrown}>
            Events FAQ
          </Typography>
          <Typography variant="bodyLarge" className="max-w-2xl mx-auto text-gray-600">
            Answers to common questions about our events and festivals.
          </Typography>
        </Container>
      </div>

      <FAQSection items={faqItems} title="" className="border-t-0 pt-0 pb-20" />

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <Container variant="content" className="text-center">
          <Typography variant="h3" className="mb-4" color={COLORS.darkBrown}>
            Still have questions?
          </Typography>
          <Typography variant="body" className="mb-8 text-gray-600">
            Our events team is here to help.
          </Typography>
          <Link to="/contact">
            <Button variant="primary">Contact Us</Button>
          </Link>
        </Container>
      </section>
    </Layout>
  );
};
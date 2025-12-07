import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { FAQSection } from '../../components/sections/FAQSection';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants/theme';

const faqItems = [
  {
    question: "DO I NEED TO BOOK A TASTING IN ADVANCE?",
    answer: "We highly recommend booking in advance, especially for groups larger than 6 people and during weekends or peak holiday seasons. This ensures we can accommodate you and provide the best possible experience. Walk-ins are welcome subject to availability."
  },
  {
    question: "WHAT ARE THE OPENING HOURS?",
    answer: "The KWV Emporium is open Monday to Saturday from 09:00 to 16:30, and on Sundays from 10:00 to 15:00. Please note that hours may vary on public holidays."
  },
  {
    question: "IS THE VENUE CHILD-FRIENDLY?",
    answer: "Yes, children are welcome at the KWV Emporium. We offer non-alcoholic juice pairings so they can join in the fun. We also have designated areas where families can relax."
  },
  {
    question: "CAN I BUY WINE AT THE CELLAR?",
    answer: "Absolutely! The KWV Emporium features a fully stocked wine shop where you can purchase our full range of wines, brandies, and spirits, often including exclusive cellar-door releases."
  },
  {
    question: "DO YOU HOST PRIVATE EVENTS?",
    answer: "Yes, we have several venues including the Cathedral Cellar, House of Fire, and our Conference Facilities that are perfect for weddings, corporate functions, and private celebrations. Please contact our events team for more information."
  },
  {
    question: "IS THERE A DRESS CODE?",
    answer: "There is no strict dress code, but we recommend smart casual attire to match the premium setting of our experiences."
  },
  {
    question: "ARE THE EXPERIENCES WHEELCHAIR ACCESSIBLE?",
    answer: "Most of our visitor areas, including the main tasting room and shop, are wheelchair accessible. Please let us know in advance if you have specific accessibility requirements so we can assist you."
  }
];

export const ExperiencesFAQ: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#F5F5DC] py-16 md:py-24">
        <Container variant="content" className="text-center">
          <Typography variant="h1" className="mb-6" color={COLORS.darkBrown}>
            Experiences FAQ
          </Typography>
          <Typography variant="bodyLarge" className="max-w-2xl mx-auto text-gray-600">
            Everything you need to know about visiting the KWV Emporium and our world-class experiences.
          </Typography>
        </Container>
      </div>

      <FAQSection items={faqItems} title="" className="border-t-0 pt-0 pb-20" />

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <Container variant="content" className="text-center">
          <Typography variant="h3" className="mb-4" color={COLORS.darkBrown}>
            Can't find what you're looking for?
          </Typography>
          <Typography variant="body" className="mb-8 text-gray-600">
            Our team is happy to assist with any other enquiries regarding your visit.
          </Typography>
          <Link to="/contact">
            <Button variant="primary">Contact Us</Button>
          </Link>
        </Container>
      </section>
    </Layout>
  );
};

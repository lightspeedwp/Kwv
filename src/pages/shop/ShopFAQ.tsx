import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { FAQSection } from '../../components/sections/FAQSection';
import { Hero } from '../../components/sections/Hero';
import { ContactFollowSection } from '../../components/sections/shop/ContactFollowSection';
import { ServiceFeaturesSection } from '../../components/sections/shop/ServiceFeaturesSection';

const faqItems = [
  {
    question: "HOW LONG DOES SHIPPING TAKE? WHEN WILL I RECEIVE MY ORDER?",
    answer: "Orders are delivered within 5 working days"
  },
  {
    question: "DO YOU SHIP TO MY LOCATION?",
    answer: "We deliver to any location in South Africa"
  },
  {
    question: "HOW DO I RECEIVE UPDATES ON YOUR PROMOTIONS?",
    answer: "Receive promotional updates by subscribing to our Newsletter : <a href='#newsletter' class='text-[#8B0000] hover:underline'>Sign Up Here</a>"
  },
  {
    question: "MY ORDER HAS BEEN DISPATCHED, CAN I TRACK IT?",
    answer: "When your order is ready for shipment we’ll email you a waybill number with courier link to track your order"
  },
  {
    question: "CAN I CHANGE OR CANCEL MY ORDER?",
    answer: "To cancel your order email the request to: <a href='mailto:sales@kwv.co.za' class='text-[#8B0000] hover:underline'>sales@kwv.co.za</a> or call us on: 021 807 3007"
  },
  {
    question: "WHAT METHODS OF PAYMENT DO YOU TAKE?",
    answer: "Pay Gate Card payment, EFT, SnapScan"
  },
  {
    question: "DO YOU OFFER PROMOTIONAL OR AFFILIATE OPPORTUNITIES?",
    answer: "Sign up to join our Online Members Club <a href='/wine-club' class='text-[#8B0000] hover:underline'>Sign Up Here</a>"
  },
  {
    question: "WHAT DO I DO IF I NEVER RECEIVED MY ORDER?",
    answer: "Email your specific query to: <a href='mailto:sales@kwv.co.za' class='text-[#8B0000] hover:underline'>sales@kwv.co.za</a> or call us on: 021 807 3007"
  },
  {
    question: "FROM WHERE DO YOU OPERATE?",
    answer: "KWV Emporium; Kohler St, Southern Paarl, Paarl, 7646"
  }
];

/**
 * ShopFAQ Page Component
 * 
 * Frequently Asked Questions specific to the online shopping experience.
 * Covers Shipping, Returns, Payment Methods, and Tracking.
 * Distinct from the Corporate FAQ page.
 */
export const ShopFAQ: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero 
        title="Shop FAQ"
        subtitle="Find answers to common questions about ordering, shipping, and returns."
        height="medium"
        nextSectionId="shop-faq-content"
      />

      <FAQSection id="shop-faq-content" items={faqItems} title="" className="border-t-0 pt-12 pb-16" />

      <ContactFollowSection className="pt-12 md:pt-20 mb-16" />
      
      <ServiceFeaturesSection />
    </Layout>
  );
};

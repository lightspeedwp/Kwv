import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { FAQSection } from '../../components/sections/FAQSection';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { COLORS } from '../../constants/theme';
import { Facebook, Instagram, Twitter, Truck, ShieldCheck, CreditCard, Banknote, Store } from 'lucide-react';

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

const ContactInfo = () => (
  <div className="text-center mb-12">
    <Typography variant="h3" className="mb-8 uppercase tracking-widest text-sm font-bold" color={COLORS.darkBrown}>
      Contact Us
    </Typography>
    <div className="space-y-2 text-gray-600">
      <p>Tel: 021-807-3007/8</p>
      <p>Email: <a href="mailto:info@kwvemporium.co.za" className="hover:text-[#8B0000] transition-colors">info@kwvemporium.co.za</a></p>
      <p>GPS: 33°45′ 47.1″ S 18°57′ 59.0″ E</p>
    </div>
  </div>
);

const SocialIcons = () => (
  <div className="text-center mb-16">
    <Typography variant="h3" className="mb-8 uppercase tracking-widest text-sm font-bold" color={COLORS.darkBrown}>
      Follow Us
    </Typography>
    <div className="flex justify-center space-x-8">
      <a href="#" className="text-[#2C1810] hover:text-[#8B0000] transition-colors">
        <Facebook size={24} />
      </a>
      <a href="#" className="text-[#2C1810] hover:text-[#8B0000] transition-colors">
        <Instagram size={24} />
      </a>
      <a href="#" className="text-[#2C1810] hover:text-[#8B0000] transition-colors">
        <Twitter size={24} />
      </a>
    </div>
  </div>
);

const ServiceFeature = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="mb-4 p-3 bg-[#F5F5DC] rounded-full">
      <Icon size={24} className="text-[#2C1810]" />
    </div>
    <span className="text-sm font-medium text-gray-800 uppercase tracking-wide">{text}</span>
  </div>
);

export const ShopFAQ: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="bg-[#2C1810] text-white py-12">
        <Container variant="content" className="text-center">
          <Typography variant="h2" className="mb-0 text-white">
            Shop FAQ
          </Typography>
        </Container>
      </div>

      <FAQSection items={faqItems} title="" className="border-t-0 pt-12 pb-16" />

      <Container variant="content">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <ContactInfo />
          <SocialIcons />
        </div>

        <div className="border-t border-gray-200 pt-16 pb-20">
          <Typography variant="h3" className="mb-10 text-center uppercase tracking-widest text-sm font-bold" color={COLORS.darkBrown}>
            Our Excellent Service Includes
          </Typography>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <ServiceFeature icon={Truck} text="Delivery within 3-5 working days" />
            <ServiceFeature icon={ShieldCheck} text="Safe & Secure" />
            <ServiceFeature icon={CreditCard} text="3 ways to pay" />
            <ServiceFeature icon={Banknote} text="Affordable Delivery Fee" />
            <ServiceFeature icon={Store} text="Click & Collect after 72 hours" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

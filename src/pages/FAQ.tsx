import React from 'react';
import { Layout } from '../components/layout/Layout';
import { FAQSection } from '../components/sections/FAQSection';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';
import { COLORS } from '../constants/theme';

const faqItems = [
  {
    question: "WHAT DOES THE ABBREVIATION KWV STAND FOR?",
    answer: "KWV stands for Ko-operatiewe Wijnbouwers Vereniging van Zuid-Af rika (Co-operative Wine Growers Association of South Africa)."
  },
  {
    question: "WHAT IS THE DIFFERENCE BETWEEN COGNAC AND BRANDY?",
    answer: "Cognac is a type of brandy made in a particular way, governed and guided by the Bureau National Interprofessionnel du Cognac. Brandy, particularly South Af rican Brandy, is similar in that it also adheres to strict methods in production, as determined by the Liquor Products Act. The other difference is the region. Just like Champagne can only be called as such if made in the region and according to specific set standards, production of Cognac must be in the Cognac region of France. Production of Brandy can, however, be in any other area or place. One similarity they both have is that both Cognac and South Af rican Brandy must be made f rom grapes."
  },
  {
    question: "WHERE CAN I FIND KWV’S PRODUCTS?",
    answer: "Most of KWV’s products are widely available in leading liquor and supermarkets in South Af rica. South Af rican consumers can also access KWV’s products online via <a href='http://www.kwvemporium.co.za' target='_blank' rel='noopener noreferrer' class='text-[#8B0000] hover:underline'>www.kwvemporium.co.za</a>. KWV also exports to several global markets."
  },
  {
    question: "WHERE DOES KWV SOURCE ITS GRAPES FROM?",
    answer: "KWV is a commercial producer with access to grapes f rom more than 50 farms scattered across the Western Cape’s Paarl, Stellenbosch, Swartland, Perdeberg, Malmesbury, Darling, Elgin, Robertson and Wellington regions. KWV’s ability to source the finest quality grapes for a premium expression of the Cape Winelands is close to unrivalled and contributes to our ability to make the highest quality wines."
  },
  {
    question: "WHO IS THE CHIEF WINEMAKER?",
    answer: "Justin Corrans is KWV’s Chief Winemaker. He brings with him 20 years of local and international experience."
  },
  {
    question: "WHO ARE THE WINEMAKERS?",
    answer: "We have an esteemed team of winemakers who work in our cellars. These are Izele van Blerk, Kobus van der Merwe, James Ochse, Carla Cutting, Sacha Muller."
  },
  {
    question: "WHO IS THE VITICULTURIST?",
    answer: "Marco Ventrella is our Chief Viticulturist. He joined KWV in 2010, and has a fascination with vineyards, winemaking and the challenges associated with making great wine."
  },
  {
    question: "WHAT IS THE DIFFERENCE BETWEEN NEW AND OLD WORLD WINES?",
    answer: "Old world wines are f rom countries/regions where winemaking with Vitis vinifera grapes first originated. Old World wine regions are largely based in Europe whereas New World wines are f rom countries/regions where winemaking (and Vitis vinifera grapes) were imported during and after the development of each country/region. South Af rica is part of the New World Wine Heritage."
  },
  {
    question: "WHO IS THE BRANDY MASTER?",
    answer: "Pieter de Bod is our Master Distiller. He has over 25 years’ experience in the spirit business, and apart f rom making our award-winning brandies, Pieter also judges on many local and international tasting panels."
  }
];

export const FAQ: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#F5F5DC] py-16 md:py-24">
        <Container variant="content" className="text-center">
          <Typography variant="h1" className="mb-6" color={COLORS.darkBrown}>
            Corporate FAQ
          </Typography>
          <Typography variant="bodyLarge" className="max-w-2xl mx-auto text-gray-600">
            Find answers to common questions about our heritage, winemaking, and products.
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
            For any further questions, please contact us.
          </Typography>
          <Link to="/contact">
            <Button variant="primary">Contact Us</Button>
          </Link>
        </Container>
      </section>
    </Layout>
  );
};

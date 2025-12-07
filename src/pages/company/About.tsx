import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { FullWidthSection } from '../../components/sections/FullWidthSection';
import { BrandGrid } from '../../components/sections/BrandGrid';
import heroImage from 'figma:asset/fe3c1c394bedc4c207970e159acb3d745653037f.png';

// Images from Unsplash
const IMG_HISTORY = "https://images.unsplash.com/photo-1710041387800-22f1e14d0682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_AWARDS = "https://images.unsplash.com/photo-1754300681803-61eadeb79d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_EXEC = "https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_SUSTAINABILITY = "https://images.unsplash.com/photo-1623056739101-c561cb40c18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_CAREERS = "https://images.unsplash.com/photo-1657569748925-308b0690dcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

/**
 * About Page Component
 * 
 * "About Us" page detailing the history, quality, and legacy of KWV.
 * Uses `FullWidthSection` components for alternating layout blocks.
 * Includes a `BrandGrid` to showcase product portfolio.
 */
export const About: React.FC = () => {
  return (
    <Layout>
      <Hero 
        title="About Us"
        subtitle="KWV played a major role to unite wine producers during the industry’s fledgling years. KWV is privileged to feature prominently in the pages of South Africa’s history."
        imageSrc={heroImage}
        height="large"
      />

      {/* Introduction Content */}
      <section className="py-20 bg-white">
        <Container variant="content">
          <div className="space-y-12">
            <div>
              <Typography variant="h2" className="text-[#2C1810] font-bold mb-6">
                KWV was founded in 1918. This is the same year South Africa’s first democratically elected president, Nelson Mandela, was born.
              </Typography>
              <Typography variant="body" className="text-gray-600 leading-relaxed mb-6">
                In the space of just over a century, the country, along with its wine industry, has seen many changes. KWV played a major role to unite wine producers during the industry’s fledgling years. KWV is privileged to feature prominently in the pages of South Africa’s history.
              </Typography>
              <Typography variant="body" className="text-gray-600 leading-relaxed mb-6">
                Today South Africa is a global player in the world of wine. KWV remains an industry leader when it comes to innovation and quality. It also remains committed to its original objective of showcasing the quality of South Africa’s wine products to the world. This is evidenced by its numerous award-winning wines and spirits.
              </Typography>
              <Typography variant="body" className="text-gray-600 leading-relaxed">
                KWV celebrated its centenary in 2018 and, while firmly rooted in South Africa, it has penetrated international markets. KWV now now boasts a global footprint with a portfolio of brands in over 100 markets.
              </Typography>
            </div>

            <div className="border-t border-gray-100 pt-12">
              <Typography variant="h3" className="text-[#2C1810] font-bold mb-6">
                Quality Grapes
              </Typography>
              <Typography variant="body" className="text-gray-600 leading-relaxed mb-6">
                With access to grapes from more than 50 farms and 400 vineyard sites across the Western Cape’s Paarl, Stellenbosch, Swartland, Perdeberg, Malmesbury, Darling, Elgin, Robertson and Wellington regions, KWV’s ability as a commercial producer to source the finest quality grapes for a premium expression of the Cape Winelands is unrivalled. The winemaking team takes meticulous care when selecting grapes to ensure they meet KWV’s exact, quality standards.
              </Typography>
              <Typography variant="body" className="text-gray-600 leading-relaxed mb-6">
                KWV expertly handles and transport grapes to KWV’s cellar facilities in Paarl. This is an impressive site which covers nearly 32 hectares, at the heart of which stands KWV’s imposing Cathedral Cellar, built in 1930.
              </Typography>
              <Typography variant="body" className="text-gray-600 leading-relaxed">
                The ability to source from such a diverse landscape of sites undoubtedly gives KWV its award-winning edge. This is an advantage which starts in the vineyard. Guided by an ethos to give consumers only the absolute best, KWV continues to build on its reputation as a pioneer and innovator. Furthermore, with a mantra that puts the consumer first, KWV continues its lead into the next century.
              </Typography>
            </div>
          </div>
        </Container>
      </section>

      {/* 1. Our History */}
      <FullWidthSection
        title="Our History"
        description="Tracing our roots back to 1918, discover the milestones that shaped KWV into a global icon."
        linkText="Read More"
        linkTo="/history"
        imageSrc={IMG_HISTORY}
        align="left"
        variant="light"
      />

      {/* 2. Awards & Accolades */}
      <FullWidthSection
        title="Awards & Accolades"
        description="A testament to our quality, view our recent achievements on the international stage."
        linkText="Read More"
        linkTo="/awards"
        imageSrc={IMG_AWARDS}
        align="right"
        variant="dark"
      />

      {/* 3. Our Brands (Reusable Grid) */}
      <BrandGrid />

      {/* 4. Executive Team */}
      <FullWidthSection
        title="Executive Team"
        description="Meet the leadership team driving our vision and strategy forward."
        linkText="Read More"
        linkTo="/executive-team"
        imageSrc={IMG_EXEC}
        align="left"
        variant="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 p-4 border-l-4 border-[#8B0000]">
            <Typography variant="caption" className="uppercase tracking-widest text-gray-500 mb-1">CHIEF EXECUTIVE OFFICER</Typography>
            <Typography variant="h4" className="font-serif text-[#2C1810]">John Loomes</Typography>
          </div>
          <div className="bg-gray-50 p-4 border-l-4 border-[#DAA520]">
            <Typography variant="caption" className="uppercase tracking-widest text-gray-500 mb-1">DIRECTOR</Typography>
            <Typography variant="h4" className="font-serif text-[#2C1810]">Daniël Smit</Typography>
            <Typography variant="caption" className="text-gray-500 mt-1">Finance and Group Services</Typography>
          </div>
        </div>
      </FullWidthSection>

      {/* 5. Sustainability */}
      <FullWidthSection
        title="Sustainability"
        description="Our commitment to the environment, ethical farming, and community development."
        linkText="Read More"
        linkTo="/sustainability"
        imageSrc={IMG_SUSTAINABILITY}
        align="right"
        variant="dark"
      />

      {/* 6. Careers */}
      <FullWidthSection
        title="Careers"
        description="Join our team and be a part of our legacy of excellence."
        linkText="Read More"
        linkTo="/careers"
        imageSrc={IMG_CAREERS}
        align="left"
        variant="light"
      />

    </Layout>
  );
};

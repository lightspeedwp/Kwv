import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ShopHero } from '../components/shop/ShopHero';
import { ShopCategorySlider } from '../components/shop/ShopCategorySlider';
import { ShopBrandGrid } from '../components/shop/ShopBrandGrid';
import { ShopNewsletter } from '../components/shop/ShopNewsletter';
import { ShopSocialSection } from '../components/shop/ShopSocialSection';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';

export const ShopHome: React.FC = () => {
  return (
    <Layout variant="shop">
      {/* 1. Hero Carousel */}
      <ShopHero />

      {/* 2. Text Section */}
      <div id="shop-about-section" className="bg-white py-16 text-center">
        <Container variant="content" className="max-w-4xl mx-auto px-6">
           <Typography variant="h2" className="text-[#2C1810] font-serif text-3xl mb-8 uppercase tracking-wide">
             KWV Online Shop
           </Typography>
           <Typography variant="body" className="text-gray-600 mb-6 leading-relaxed">
             KWV Online Shop - Get your wine, brandy and spirit products delivered to your door or choose our click and collect option. Our range of brands include Roodeberg, The Mentors, KWV Brandy, Laborie, Cathedral Cellar, Classic Collection, Cruxland, Imagin, Wild Africa Cream and so much more spirits & wine.
           </Typography>
           <Typography variant="body" className="text-gray-600 mb-6 leading-relaxed">
             Our brands can be purchased on our online shop or at the KWV Emporium in Paarl and in addition to this, visitors can also enjoy our famous destination experiences. These not to be missed experiences include House of Fire, Cathedral Cellar and KWV Emporium for tastings and pairings.
           </Typography>
           <Typography variant="body" className="text-gray-600 leading-relaxed">
             The ability to source from such a diverse landscape of sites undoubtedly gives KWV its award-winning edge, an advantage which starts in the vineyard. Guided by an ethos to give consumers only the absolute best, KWV continues to build on its reputation as a pioneer and innovator, and with a mantra that puts the consumer first, KWV continues its lead into the next century.
           </Typography>
        </Container>
      </div>

      {/* 3. Category Slider */}
      <ShopCategorySlider />

      {/* 4. Brand Grid */}
      <ShopBrandGrid />

      {/* 5. Newsletter */}
      <ShopNewsletter />

      {/* 6. Social Section */}
      <ShopSocialSection />
    </Layout>
  );
};

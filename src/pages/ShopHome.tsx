import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ShopHero } from '../components/shop/ShopHero';
import { ShopCategorySlider } from '../components/shop/ShopCategorySlider';
import { ShopBrandGrid } from '../components/shop/ShopBrandGrid';
import { ShopNewsletter } from '../components/shop/ShopNewsletter';
import { ShopSocialSection } from '../components/shop/ShopSocialSection';
import { ProductCard } from '../components/shop/ProductCard';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';
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

      {/* 3. Promotions CTA */}
      <div className="bg-[#2C1810] py-20 text-center bg-[url('https://images.unsplash.com/photo-1597652392437-01389779df53?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center relative">
         <div className="absolute inset-0 bg-black/60"></div>
         <Container variant="content" className="relative z-10">
            <Typography variant="h2" className="text-white mb-6">Current Promotions</Typography>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
               Discover exceptional value on our award-winning wines and spirits. From seasonal bundles to limited-time offers.
            </p>
            <Link to="/shop/promotions">
               <Button className="bg-[#DAA520] text-[#2C1810] hover:bg-white border-none h-14 px-10 text-lg">
                  View All Specials
               </Button>
            </Link>
         </Container>
      </div>

      {/* 4. Featured Products */}
      <div className="bg-[#F9F9F9] py-20">
         <Container variant="site">
             <div className="text-center mb-12">
                 <Typography variant="h2" className="text-[#2C1810] mb-4">Shop Our Awarded Selection</Typography>
                 <Typography variant="body" className="text-gray-600 max-w-2xl mx-auto">
                     Explore the finest wines, brandies and spirits that have earned us our reputation as a world-class producer.
                 </Typography>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 <ProductCard product={{
                    id: '1', name: 'The Mentors Orchestra 2020', brand: 'The Mentors', price: 429.00, 
                    image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true, badges: ['Award Winner']
                 }} />
                 <ProductCard product={{
                    id: '5', name: 'Cruxland Gin', brand: 'Cruxland', price: 349.00, 
                    image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80', inStock: true, badges: ['Double Gold']
                 }} />
                 <ProductCard product={{
                    id: '6', name: 'KWV 10 Year Old Brandy', brand: 'KWV Brandy', price: 299.00, 
                    image: 'https://images.unsplash.com/photo-1757694907428-5ef2f3ff7854?auto=format&fit=crop&q=80', inStock: true, badges: ['Best in Class']
                 }} />
                 <ProductCard product={{
                    id: '3', name: 'Laborie Merlot 2022', brand: 'Laborie', price: 85.00, 
                    image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true
                 }} />
             </div>
             
             <div className="text-center mt-12">
                <Link to="/shop/all">
                   <Button variant="outline" className="border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-white px-8">
                      View All Products
                   </Button>
                </Link>
             </div>
         </Container>
      </div>

      {/* 5. Category Slider */}
      <ShopCategorySlider />

      {/* 6. Brand Grid */}
      <ShopBrandGrid />

      {/* 7. Newsletter */}
      <ShopNewsletter />

      {/* 8. Social Section */}
      <ShopSocialSection />
    </Layout>
  );
};

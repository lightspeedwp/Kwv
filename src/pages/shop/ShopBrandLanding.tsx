import React from 'react';
import { useParams, Navigate, Link } from 'react-router';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { FAQSection } from '../../components/sections/FAQSection';
import { SHOP_BRANDS_DATA } from '../../data/shopBrands';

/**
 * ShopBrandLanding Page Component
 * 
 * Dedicated landing page for a specific brand within the shop context (e.g., /shop/brand/roodeberg).
 * Features:
 * - Brand-specific Hero with storytelling.
 * - "Our Story" section.
 * - Brand specific features/USPs.
 * - Call to action to view the full collection.
 */
export const ShopBrandLanding: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !SHOP_BRANDS_DATA[slug]) {
    // Fallback or 404
    return <Navigate to="/shop/brands" replace />;
  }

  const brand = SHOP_BRANDS_DATA[slug];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] w-full bg-black text-white">
        <ImageWithFallback 
           src={brand.heroImage}
           alt={brand.name}
           className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center">
           <Container variant="content" className="text-center">
              <Typography variant="caption" className="text-[#DAA520] uppercase tracking-[0.2em] mb-4 font-bold">
                 Brand Spotlight
              </Typography>
              <Typography variant="h1" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-white drop-shadow-lg">
                 {brand.name}
              </Typography>
              <Typography variant="h3" className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto text-gray-200">
                 {brand.tagline}
              </Typography>
              <Link to={brand.shopLink}>
                 <Button variant="hero" size="lg" className="bg-[#DAA520] border-[#DAA520] text-[#2C1810] hover:bg-white hover:border-white">
                    Shop {brand.name}
                 </Button>
              </Link>
           </Container>
        </div>
      </div>

      {/* Brand Story */}
      <section className="py-20 md:py-32 bg-white">
         <Container variant="content" className="text-center">
            <Typography variant="h2" className="text-[#2C1810] mb-8 font-serif text-4xl">Our Story</Typography>
            <div className="w-24 h-1 bg-[#DAA520] mx-auto mb-12" />
            <Typography variant="bodyLarge" className="text-gray-600 leading-relaxed text-lg md:text-xl">
               {brand.story}
            </Typography>
         </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#F9F9F9]">
         <Container variant="site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {brand.features.map((feature, idx) => (
                  <div key={idx} className="bg-white p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                     <div className="w-12 h-12 bg-[#2C1810] rounded-full mx-auto mb-6 flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#DAA520] rounded-full" />
                     </div>
                     <Typography variant="h4" className="text-[#2C1810] uppercase tracking-wider text-sm font-bold">
                        {feature}
                     </Typography>
                  </div>
               ))}
            </div>
         </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2C1810] text-white text-center">
         <Container variant="content">
            <Typography variant="h2" className="text-white mb-6 font-serif">Experience {brand.name}</Typography>
            <Typography variant="body" className="text-gray-300 mb-10 max-w-xl mx-auto">
               Discover the full range of products available in our online shop.
            </Typography>
            <Link to={brand.shopLink}>
               <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2C1810]">
                  View Collection
               </Button>
            </Link>
         </Container>
      </section>

      <FAQSection items={[
        { question: `Is ${brand.name} available nationwide?`, answer: "Yes, we deliver nationwide across South Africa." },
        { question: "Can I buy mixed cases?", answer: "Absolutely. You can mix and match any products from our shop to create your perfect case." }
      ]} />
    </Layout>
  );
};
import React from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Layout } from '../components/layout/Layout';
import { COLORS } from '../constants/theme';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/common/Button';
import { FAQSection } from '../components/sections/FAQSection';
import { BRAND_DATA } from '../data/brands';

export const Brands: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // --- DETAIL VIEW ---
  if (id) {
    const brand = BRAND_DATA.find(b => b.id === id);

    if (!brand) {
      return (
        <Layout>
          <Container variant="content" className="py-20 text-center">
            <Typography variant="h2">Brand not found</Typography>
            <Link to="/brands" className="text-[#8B0000] hover:underline mt-4 inline-block">
              Return to all brands
            </Link>
          </Container>
        </Layout>
      );
    }

    return (
      <Layout>
        {/* Hero */}
        <div className="relative h-[60vh] min-h-[500px] w-full bg-gray-900">
           <ImageWithFallback 
              src={brand.image} 
              alt={brand.name} 
              className="w-full h-full object-cover opacity-70"
           />
           <div className="absolute inset-0 bg-black/30" />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <Typography variant="caption" color={COLORS.gold} className="uppercase tracking-widest mb-4 text-lg font-bold">
                 {brand.category}
              </Typography>
              <Typography variant="h1" color={COLORS.white} className="mb-6 text-5xl md:text-7xl font-serif">
                 {brand.name}
              </Typography>
              <p className="text-white/90 text-lg max-w-2xl leading-relaxed font-light">
                 {brand.desc}
              </p>
           </div>
        </div>

        {/* Content */}
        <Container variant="content" className="py-20">
           <div className="text-center max-w-3xl mx-auto">
              <Typography variant="h3" className="mb-6 text-[#2C1810]">About {brand.name}</Typography>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                 Experience the unique character and exceptional quality of {brand.name}. Crafted with passion and expertise, it represents the pinnacle of our {brand.category.toLowerCase()} portfolio.
              </p>
              
              <div className="flex justify-center gap-6">
                 <Link to="/brands">
                    <Button variant="outline" className="flex items-center gap-2">
                       <ChevronLeft size={16} /> All Brands
                    </Button>
                 </Link>
                 <Link to={`/shop/brands`}>
                    <Button className="bg-[#8B0000] hover:bg-[#600000] text-white border-none">
                       Shop {brand.name}
                    </Button>
                 </Link>
              </div>
           </div>
        </Container>
      </Layout>
    );
  }

  // --- LIST VIEW ---
  // Group brands by category
  const categories = ['Wine', 'Spirits', 'Ready to Drink', 'Non-alcoholic'];
  const groupedBrands = categories.reduce((acc, category) => {
    acc[category] = BRAND_DATA.filter(b => b.category === category);
    return acc;
  }, {} as Record<string, typeof BRAND_DATA>);

  return (
    <Layout>
      <div className="bg-[#2C1810] py-20 text-center">
        <Container variant="content">
          <Typography variant="h1" color={COLORS.white} className="mb-4">Our Brands</Typography>
          <Typography variant="bodyLarge" color={COLORS.beige} className="opacity-80">
            Discover the diverse portfolio of wines and spirits that make KWV a global icon of South African excellence.
          </Typography>
        </Container>
      </div>

      <Container variant="site" className="py-12">
        {categories.map((category) => {
           const brandsInCategory = groupedBrands[category];
           if (brandsInCategory.length === 0) return null;

           return (
              <div key={category} className="mb-20 last:mb-0">
                 <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-serif font-bold text-[#2C1810] uppercase tracking-wider">{category}</h2>
                    <div className="h-[1px] bg-gray-200 flex-grow"></div>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {brandsInCategory.map((brand) => (
                       <Link to={`/brands/${brand.id}`} key={brand.id} className="group block h-full">
                          <div className="relative h-full border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col rounded-sm overflow-hidden">
                             <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                <ImageWithFallback 
                                   src={brand.image} 
                                   alt={brand.name}
                                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                             </div>
                             
                             <div className="p-6 flex flex-col flex-grow">
                                <Typography variant="h4" className="mb-2 text-[#2C1810] group-hover:text-[#8B0000] transition-colors">
                                   {brand.name}
                                </Typography>
                                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
                                   {brand.desc}
                                </p>
                                <div className="flex items-center text-[#DAA520] font-bold uppercase tracking-widest text-xs mt-auto">
                                   Explore <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                             </div>
                          </div>
                       </Link>
                    ))}
                 </div>
              </div>
           );
        })}
      </Container>

      <FAQSection items={[
        { question: "Which is your oldest brand?", answer: "Roodeberg is one of our most iconic brands, with a legacy spanning over 70 years." },
        { question: "Do you produce brandy?", answer: "Yes, KWV is world-renowned for its award-winning brandies, ranging from 3-year-old to 20-year-old potstill brandies." },
        { question: "Where can I find the full range?", answer: "Our online shop stocks the most comprehensive collection of all our brands, including limited releases." }
      ]} />
    </Layout>
  );
};

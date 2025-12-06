import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { FAQSection } from '../components/sections/FAQSection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { COLORS } from '../constants/theme';

// Mock data representing the Terms Query result for Product Brands
const SHOP_BRANDS = [
  {
    id: 'roodeberg',
    name: 'Roodeberg',
    description: 'The Legendary Red. Roodeberg has been a part of the fabric of South African culture for over 70 years.',
    count: 12,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'mentors',
    name: 'The Mentors',
    description: 'Strictly Limited. Small batch, premium wines that showcase the absolute pinnacle of our winemaking capabilities.',
    count: 8,
    image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'kwv-brandy',
    name: 'KWV Brandy',
    description: 'World Class. Consistently crowned the best brandy in the world.',
    count: 15,
    image: 'https://images.unsplash.com/photo-1599309066463-b88307db3536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'laborie',
    name: 'Laborie',
    description: 'La Grande Vie. Wines and Cap Classique that celebrate the good life.',
    count: 10,
    image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'cruxland',
    name: 'Cruxland Gin',
    description: 'Kalahari Truffles. The world\'s first gin infused with rare Kalahari truffles.',
    count: 4,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'cathedral-cellar',
    name: 'Cathedral Cellar',
    description: 'Monumental Wine. Wines with a sense of place, aged in our historic Cathedral Cellar.',
    count: 6,
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'classic-collection',
    name: 'Classic Collection',
    description: 'Enjoyed by all. A range of wines that are easy to drink and perfect for any occasion.',
    count: 18,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'wild-africa',
    name: 'Wild Africa Cream',
    description: 'Untamed Elegance. A tantalizing blend of fresh cream and distilled spirit.',
    count: 3,
    image: 'https://images.unsplash.com/photo-1617006506594-2cb92954c3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  }
];

export const ShopBrands: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#2C1810] py-16 text-center">
        <Container variant="content">
          <Typography variant="h1" color={COLORS.white} className="mb-4">Shop by Brand</Typography>
          <Typography variant="bodyLarge" color={COLORS.beige} className="opacity-80">
             Explore our extensive portfolio of world-renowned wines and spirits.
          </Typography>
        </Container>
      </div>

      {/* Brands Grid (Terms Query Block simulation) */}
      <Container variant="site" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOP_BRANDS.map((brand) => (
            <Link 
              to={`/shop/brand/${brand.id}`} 
              key={brand.id} 
              className="group block bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Term Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <ImageWithFallback 
                  src={brand.image} 
                  alt={brand.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2C1810] shadow-sm rounded-sm">
                  {brand.count} Products
                </div>
              </div>

              {/* Term Content Template */}
              <div className="p-6 flex flex-col flex-grow">
                 <Typography variant="h3" className="mb-3 text-[#2C1810] group-hover:text-[#8B0000] transition-colors">
                   {brand.name}
                 </Typography>
                 
                 <div className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                   {brand.description}
                 </div>

                 <span className="inline-block text-sm font-bold uppercase tracking-widest text-[#DAA520] group-hover:translate-x-1 transition-transform">
                   View Products &rarr;
                 </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      <FAQSection items={[
        { question: "Can I mix cases from different brands?", answer: "Yes, you can build your own mixed case with any combination of our wines and spirits brands." },
        { question: "Are these the same prices as in store?", answer: "Our online shop offers competitive pricing, and we often have exclusive online-only promotions for our brands." },
        { question: "Do you ship internationally?", answer: "Currently, we only ship to addresses within South Africa. For international stockists, please visit our corporate contact page." }
      ]} />
    </Layout>
  );
};

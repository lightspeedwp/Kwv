import React from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Layout } from '../components/layout/Layout';
import { COLORS } from '../constants/theme';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

import { FAQSection } from '../components/sections/FAQSection';

const BRANDS = [
  {
    id: 'roodeberg',
    name: 'Roodeberg',
    tagline: 'The Legendary Red',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Roodeberg has been a part of the fabric of South African culture for over 70 years.'
  },
  {
    id: 'mentors',
    name: 'The Mentors',
    tagline: 'Strictly Limited',
    image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Small batch, premium wines that showcase the absolute pinnacle of our winemaking capabilities.'
  },
  {
    id: 'kwv-brandy',
    name: 'KWV Brandy',
    tagline: 'World Class',
    image: 'https://images.unsplash.com/photo-1599309066463-b88307db3536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Consistently crowned the best brandy in the world. A testament to patience and craftsmanship.'
  },
  {
    id: 'laborie',
    name: 'Laborie',
    tagline: 'La Grande Vie',
    image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Wines and Cap Classique that celebrate the good life, inspired by our French heritage.'
  },
  {
    id: 'cruxland',
    name: 'Cruxland Gin',
    tagline: 'Kalahari Truffles',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'The world\'s first gin infused with rare Kalahari truffles. A taste of the African wilderness.'
  },
  {
    id: 'cathedral-cellar',
    name: 'Cathedral Cellar',
    tagline: 'Monumental Wine',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    desc: 'Wines with a sense of place, aged in our historic Cathedral Cellar with its vaulted ceilings.'
  }
];

export const Brands: React.FC = () => {
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

      <Container variant="site" className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRANDS.map((brand) => (
            <Link to={`/brands/${brand.id}`} key={brand.id} className="group block h-full">
              <div className="relative h-full border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback 
                    src={brand.image} 
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <Typography variant="h3" color={COLORS.white} className="font-serif italic">{brand.name}</Typography>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <Typography variant="caption" color={COLORS.gold} className="uppercase tracking-widest mb-3 font-bold">
                    {brand.tagline}
                  </Typography>
                  <Typography variant="body" className="text-gray-600 mb-6 flex-grow">
                    {brand.desc}
                  </Typography>
                  <div className="flex items-center text-[#8B0000] font-medium uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform">
                    Explore Brand <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      <FAQSection items={[
        { question: "Which is your oldest brand?", answer: "Roodeberg is one of our most iconic brands, with a legacy spanning over 70 years." },
        { question: "Do you produce brandy?", answer: "Yes, KWV is world-renowned for its award-winning brandies, ranging from 3-year-old to 20-year-old potstill brandies." },
        { question: "Where can I find the full range?", answer: "Our online shop stocks the most comprehensive collection of all our brands, including limited releases." }
      ]} />
    </Layout>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { COLORS } from '../../constants/theme';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const BRANDS = [
  { 
    name: 'Roodeberg', 
    slug: 'roodeberg', 
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200' 
  },
  { 
    name: 'The Mentors', 
    slug: 'mentors', 
    image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200' 
  },
  { 
    name: 'KWV Brandy', 
    slug: 'kwv-brandy', 
    image: 'https://images.unsplash.com/photo-1599309066463-b88307db3536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200' 
  },
  { 
    name: 'Laborie', 
    slug: 'laborie', 
    image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200' 
  },
  { 
    name: 'Cruxland', 
    slug: 'cruxland', 
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200' 
  },
  { 
    name: 'Cathedral Cellar', 
    slug: 'cathedral-cellar', 
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200' 
  },
];

export const BrandGrid = () => {
  return (
    <section className="py-20 bg-[#F9F9F9]">
      <Container variant="site">
        <div className="text-center mb-12">
          <Typography variant="h2" color={COLORS.darkBrown} className="mb-4">Our Brands</Typography>
          <div className="w-24 h-1 bg-[#DAA520] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {BRANDS.map((brand) => (
            <Link 
              key={brand.slug} 
              to={`/brands/${brand.slug}`}
              className="group flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:shadow-lg group-hover:border-[#DAA520] transition-all">
                 <ImageWithFallback 
                   src={brand.image}
                   alt={brand.name}
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <Typography 
                variant="h4" 
                className="!text-sm font-bold uppercase tracking-widest text-[#2C1810] group-hover:text-[#8B0000]"
              >
                {brand.name}
              </Typography>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

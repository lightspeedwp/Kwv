import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { KWVLogo } from '../common/Logo';

const ENTRY_POINTS = [
  {
    id: 'about',
    title: 'ABOUT US',
    link: '/about',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    badgeTitle: 'OUR COMPANY',
    type: 'text'
  },
  {
    id: 'shop',
    title: 'SHOP ONLINE',
    link: '/shop',
    image: 'https://images.unsplash.com/photo-1543007629-00f37dfe03f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    badgeTitle: 'SHOP',
    type: 'text'
  },
  {
    id: 'experiences',
    title: 'KWV EXPERIENCES',
    link: '/experiences',
    image: 'https://images.unsplash.com/photo-1714106981010-c4cfc7c8c12d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    badgeTitle: 'EXPERIENCE',
    type: 'text'
  }
];

/**
 * HomeEntryPoints Component
 * 
 * Displays the three main user journey entry points on the Home Page:
 * 1. About Us (Corporate)
 * 2. Shop Online (Commerce)
 * 3. Experiences (Visit Us)
 * 
 * Features:
 * - Interactive cards with hover zoom effects.
 * - Overlay text and buttons.
 * - Responsive grid (1 column mobile, 3 columns desktop).
 */
export const HomeEntryPoints: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Container variant="site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ENTRY_POINTS.map((item) => (
            <div key={item.id} className="flex flex-col h-full group">
              {/* Card Image Area */}
              <div className="relative aspect-[4/5] w-full bg-gray-100 overflow-hidden mb-0">
                <ImageWithFallback 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Clean Overlay Badge - No complex ribbons */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end items-center text-center">
                   {item.type === 'logo' && (
                     <div className="mb-2">
                       <KWVLogo className="h-8 w-auto text-white" color="white" />
                     </div>
                   )}
                   <Typography variant="h3" className="text-2xl font-bold text-white uppercase tracking-widest drop-shadow-md">
                     {item.badgeTitle}
                   </Typography>
                </div>
              </div>

              {/* Button Area */}
              <Link to={item.link} className="w-full">
                <Button 
                   fullWidth 
                   className="bg-[#C5A059] hover:bg-[#b08d4a] text-white font-bold uppercase tracking-widest rounded-none py-5 text-lg border-none"
                >
                  {item.title}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

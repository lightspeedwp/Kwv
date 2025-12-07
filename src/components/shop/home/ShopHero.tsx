import React from 'react';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { Button } from '../../common/Button';
import { ScrollDownArrow } from '../../common/ScrollDownArrow';
import { useNavigate } from 'react-router-dom';

/**
 * ShopHero Component
 * 
 * The main hero banner for the Shop Homepage.
 * Features:
 * - Full-width/large height background image.
 * - Overlay text with "stretchy" responsive typography.
 * - Dual CTA buttons (Shop Now, Join Wine Club).
 * - Scroll Down indicator.
 */
export const ShopHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100dvh-90px)] md:min-h-[80vh] w-full flex items-center bg-black overflow-hidden">
      
      {/* Content */}
      <Container variant="site" className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 py-20 pb-32">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
            <Typography 
              variant="h1" 
              className="text-white font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 drop-shadow-lg"
              stretchy
            >
              World Class Wines & Spirits
            </Typography>
            
            <Typography 
              variant="body" 
              className="text-white text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              From our cellar to your door. Explore our range of award-winning products.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full sm:w-[200px]"
                  onClick={() => navigate('/shop/all')}
              >
                  Shop Now
              </Button>
              
              <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-[200px] uppercase tracking-wider font-bold shadow-lg !text-white !border-white hover:!bg-white hover:!text-black !bg-black/40"
                  style={{ borderColor: 'white', color: 'white' }}
                  onClick={() => navigate('/wine-club')}
              >
                  Join Wine Club
              </Button>
            </div>
        </div>
      </Container>
      
      {/* Scroll Down Arrow */}
      <ScrollDownArrow targetId="shop-about-section" className="z-30" />
    </div>
  );
};

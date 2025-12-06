import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { ScrollDownArrow } from '../common/ScrollDownArrow';

export const ShopHero: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] w-full flex items-center bg-black overflow-hidden">
      
      {/* Content */}
      <Container variant="site" className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
            <Typography 
              variant="h1" 
              className="text-white font-serif text-5xl md:text-7xl leading-tight mb-6 drop-shadow-lg"
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
                  variant="primary" 
                  size="lg"
                  className="min-w-[200px] uppercase tracking-wider font-bold shadow-lg"
                  onClick={() => window.location.href = '/shop'}
              >
                  Shop Now
              </Button>
              
              <Button 
                  variant="outline" 
                  size="lg"
                  className="min-w-[200px] uppercase tracking-wider font-bold shadow-lg !text-white !border-white hover:!bg-white hover:!text-black"
                  style={{ backgroundColor: 'transparent', borderColor: 'white', color: 'white' }}
                  onClick={() => window.location.href = '/wine-club'}
              >
                  Join Wine Club
              </Button>
            </div>
        </div>
      </Container>
      
      {/* Scroll Down Arrow */}
      <ScrollDownArrow targetId="shop-about-section" />
    </div>
  );
};

import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const CATEGORIES = [
  { name: 'Red Wines', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop', link: '/shop/wine/red' },
  { name: 'White Wines', image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800&auto=format&fit=crop', link: '/shop/wine/white' },
  { name: 'Brandy', image: 'https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=800&auto=format&fit=crop', link: '/shop/spirits/brandy' },
  { name: 'Gin', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop', link: '/shop/spirits/gin' },
  { name: 'Sparkling', image: 'https://images.unsplash.com/photo-1556676114-153014c12343?q=80&w=800&auto=format&fit=crop', link: '/shop/wine/sparkling' },
  { name: 'Liqueur', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop', link: '/shop/spirits/liqueur' },
];

const CustomArrow = ({ className, style, onClick, direction }: any) => (
  <button
    className={`${className} z-10 !flex items-center justify-center !w-10 !h-10 bg-white/80 hover:bg-[#DAA520] shadow-md rounded-full transition-colors before:!content-none after:!content-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--twb-color-focus-ring)] focus-visible:ring-offset-2`}
    style={{ ...style, [direction === 'left' ? 'left' : 'right']: '-20px' }}
    onClick={onClick}
    aria-label={direction === 'left' ? "Previous slide" : "Next slide"}
  >
    {direction === 'left' ? <ChevronLeft className="text-[#2C1810]" size={24} /> : <ChevronRight className="text-[#2C1810]" size={24} />}
  </button>
);

/**
 * ShopCategorySlider Component
 * 
 * A carousel displaying major product categories (Red Wine, White Wine, Brandy, etc.).
 * Features:
 * - React Slick slider.
 * - Responsive breakpoints (4 slides desktop, 1 slide mobile).
 * - Custom arrow navigation.
 * - Image zoom hover effect.
 */
export const ShopCategorySlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-[#F5F5DC] py-16">
      <style>{`
        .slick-dots li button:before {
          font-size: 10px;
          color: #2C1810;
          opacity: 0.25;
          transition: all 0.3s ease;
        }
        .slick-dots li.slick-active button:before {
          color: #DAA520;
          opacity: 1;
          font-size: 12px;
        }
        .slick-dots {
          bottom: -30px;
        }
        .slick-slider {
          padding-bottom: 20px;
        }
      `}</style>
      <Container variant="site">
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-[#2C1810] uppercase font-serif tracking-wide text-2xl md:text-3xl mb-2">
            Shop Our Awarded Wines, Brandies and Spirits
          </Typography>
          <div className="h-1 w-20 bg-[#DAA520] mx-auto mt-4"></div>
        </div>

        <div className="px-8">
          <Slider {...settings}>
            {CATEGORIES.map((cat, idx) => (
              <div key={idx} className="px-4">
                <Link to={cat.link} className="group block text-center">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4 bg-white shadow-sm group-hover:shadow-lg transition-all duration-300">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <Typography variant="h4" className="text-[#2C1810] uppercase tracking-widest text-sm font-bold group-hover:text-[#8B0000] transition-colors">
                    {cat.name}
                  </Typography>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};
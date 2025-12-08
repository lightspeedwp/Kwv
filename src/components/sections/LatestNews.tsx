import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { COLORS } from '../../constants/theme';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const NEWS_ITEMS = [
  {
    id: 1,
    title: 'KWV Wine Club Edition 11 – Pinotage Centenary',
    image: 'https://images.unsplash.com/photo-1606920301459-d66500c43ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwYm90dGxlcyUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzY1MDkwOTU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/news/1'
  },
  {
    id: 2,
    title: 'KWV secures top honours at 2024 Trophy Wine Show',
    image: 'https://images.unsplash.com/photo-1642104744809-14b986179927?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBob2xkaW5nJTIwYXdhcmRzfGVufDF8fHx8MTc2NTA5MDk1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/news/2'
  },
  {
    id: 3,
    title: 'Rare and vintage KWV wines sold at inaugural auction',
    image: 'https://images.unsplash.com/photo-1695641756804-0001035d63ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwd2luZSUyMGJvdHRsZXxlbnwxfHx8fDE3NjUwOTA5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/news/3'
  }
];

/**
 * LatestNews Component
 * 
 * A section displaying the 3 most recent news items.
 * Typically used on the Home Page.
 * 
 * Features:
 * - Responsive grid of news cards.
 * - Hover effects on images and titles.
 * - "View More" CTA button linking to the News Archive.
 */
export const LatestNews: React.FC = () => {
  return (
    <section className="py-20 bg-[#f9f9f9]">
      <Container variant="site">
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold text-[#2C1810] uppercase mb-4">
            LATEST NEWS
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {NEWS_ITEMS.map((item) => (
            <Link key={item.id} to={item.link} className="group block">
              <div className="bg-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col items-center text-center justify-center">
                  <Typography variant="h4" className="text-lg font-medium text-[#2C1810] group-hover:text-[#8B0000] transition-colors">
                    {item.title}
                  </Typography>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/news">
            <Button variant="outline" className="border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-white uppercase tracking-widest px-8 py-3 text-sm">
              VIEW MORE
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

/**
 * HomeEntryPoints Component
 * 
 * Main navigation cards for homepage - Shop, Visit, Events.
 * Three prominent cards guiding users to key sections of the site.
 * 
 * Features:
 * - Configurable entry point cards with icons
 * - Image backgrounds with overlay text
 * - Organic borders and styling
 * - Hover effects (scale on image, shadow elevation)
 * - Design token integration (colors, spacing, shadows, radii)
 * - WCAG AA accessible (contrast, keyboard navigation)
 * - Dark mode support
 * - Mobile-first responsive (1 col mobile, 2 col tablet, 3 col desktop)
 * 
 * Props:
 * @param {EntryPoint[]} items - Array of entry point items
 * @param {boolean} showBorders - Show organic borders on cards (default: true)
 * @param {string} variant - Background variant: 'light' | 'dark' (default: 'light')
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';
import { Link } from 'react-router';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { OrganicBorder } from '../decorative/OrganicBorder';
import { ShoppingBag, Wine, Calendar, LucideIcon } from 'lucide-react';

export interface EntryPoint {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  icon: LucideIcon;
  badge?: string;
}

interface HomeEntryPointsProps {
  items?: EntryPoint[];
  showBorders?: boolean;
  variant?: 'light' | 'dark';
}

const DEFAULT_ENTRY_POINTS: EntryPoint[] = [
  {
    id: 'shop',
    title: 'Shop Our Farm',
    description: 'Handcrafted wines, craft spirits, and artisan cheese from our Paarl Mountain farm.',
    link: '/shop',
    image: 'https://images.unsplash.com/photo-1543007629-00f37dfe03f7?auto=format&fit=crop&q=80',
    icon: ShoppingBag,
    badge: 'Online Store'
  },
  {
    id: 'visit',
    title: 'Visit & Taste',
    description: 'Experience tastings, farm tours, and vineyard walks. Come visit us on Paarl Mountain.',
    link: '/visit',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80',
    icon: Wine,
    badge: 'Farm Experiences'
  },
  {
    id: 'events',
    title: 'Host Your Event',
    description: 'Weddings, corporate events, and private functions in our historic farm setting.',
    link: '/events',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
    icon: Calendar,
    badge: 'Events & Venue'
  }
];

export const HomeEntryPoints: React.FC<HomeEntryPointsProps> = ({
  items = DEFAULT_ENTRY_POINTS,
  showBorders = true,
  variant = 'light'
}) => {
  const bgClass = variant === 'dark' 
    ? 'bg-[var(--twb-color-ink)]' 
    : 'bg-[var(--twb-color-bg-primary)]';

  return (
    <section className={`py-[var(--twb-spacing-section-y)] ${bgClass}`}>
      <Container variant="site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--twb-spacing-grid-gap)]">
          {items.map((item) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={item.id} 
                className="group relative bg-[var(--twb-color-bg-secondary)] rounded-[var(--twb-radius-organic-2)] overflow-hidden shadow-[var(--twb-shadow-md)] hover:shadow-[var(--twb-shadow-xl)] transition-all duration-500"
              >
                {/* Organic Border */}
                {showBorders && (
                  <div className="absolute inset-0 pointer-events-none z-20" aria-hidden="true">
                    <OrganicBorder variant="prominent" />
                  </div>
                )}

                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-[var(--twb-color-ink)] via-[var(--twb-color-ink)]/70 to-transparent" 
                    aria-hidden="true"
                  />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                    {/* Icon */}
                    <div className="mb-3">
                      <Icon 
                        size={32} 
                        className="text-[var(--twb-color-gold)]" 
                        aria-hidden="true"
                      />
                    </div>

                    {/* Badge */}
                    {item.badge && (
                      <Typography 
                        variant="caption" 
                        className="uppercase tracking-widest text-[var(--twb-color-gold)] mb-2"
                      >
                        {item.badge}
                      </Typography>
                    )}

                    {/* Title */}
                    <Typography 
                      variant="h3" 
                      className="text-2xl font-serif text-white mb-2 drop-shadow-lg"
                    >
                      {item.title}
                    </Typography>

                    {/* Description */}
                    <p className="text-sm text-white/90 line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-4 bg-[var(--twb-color-bg-secondary)]">
                  <Link to={item.link} className="block w-full">
                    <Button 
                      variant="secondary" 
                      fullWidth
                      className="group-hover:bg-[var(--twb-color-plum)] group-hover:text-white transition-colors"
                    >
                      Explore {item.title.split(' ')[0]}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

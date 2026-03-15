import React from 'react';
import { Link } from 'react-router';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { OrganicBorder } from '../decorative/OrganicBorder';
import { HandDrawnUnderline } from '../decorative/HandDrawnUnderline';
import { BrushStrokeBorder } from '../decorative/BrushStrokeBorder';
import { PaperTexture } from '../decorative/PaperTexture';

export interface NewsItem {
  id: number;
  title: string;
  excerpt?: string;
  image: string;
  date?: string;
  link: string;
}

interface LatestNewsProps {
  title?: string;
  items: NewsItem[];
  showUnderline?: boolean;
  showOrganicBorders?: boolean;
  viewMoreLink?: string;
  viewMoreText?: string;
}

/**
 * LatestNews Component
 * 
 * A section displaying recent news/blog posts in a responsive grid.
 * Used on Homepage to showcase latest farm updates and announcements.
 * 
 * Features:
 * - Responsive 3-column grid (1 col mobile, 2 col tablet, 3 col desktop)
 * - Card-based design with images and titles
 * - Optional organic borders on cards
 * - Optional hand-drawn underline on section title
 * - Image hover scale effect
 * - Card shadow elevation on hover
 * - Optional date display
 * - "View More" CTA button
 * - Design token integration (colors, spacing, shadows, radii)
 * - WCAG AA compliant
 * - Dark mode support
 * 
 * @package HandcraftedWines
 * @version 2.0
 * 
 * @param {LatestNewsProps} props - News items and configuration
 * @returns {JSX.Element} Rendered latest news section
 */
export const LatestNews: React.FC<LatestNewsProps> = ({
  title = "Latest News",
  items,
  showUnderline = true,
  showOrganicBorders = true,
  viewMoreLink = '/news',
  viewMoreText = 'View All News'
}) => {
  return (
    <section className="py-[var(--twb-spacing-section-y)] bg-[var(--twb-color-bg-secondary)] dark:bg-[var(--twb-color-bg-secondary)]">
      <Container variant="site">
        <div className="text-center mb-[var(--twb-spacing-12)]">
          <Typography variant="h2" className="text-[var(--twb-color-text-primary)] font-[number:var(--twb-font-weight-bold)] mb-[var(--twb-spacing-2)]">
            {title}
          </Typography>
          
          {showUnderline && (
            <div className="flex justify-center mt-[var(--twb-spacing-2)]" aria-hidden="true">
              <HandDrawnUnderline variant="scribble" width={100} />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--twb-spacing-grid-gap)] mb-[var(--twb-spacing-12)]">
          {items.map((item) => (
            <Link key={item.id} to={item.link} className="group block h-full">
              <div className="bg-[var(--twb-color-bg-tertiary)] shadow-[var(--twb-shadow-md)] hover:shadow-[var(--twb-shadow-lg)] transition-shadow h-full flex flex-col rounded-[var(--twb-radius-organic-md)] overflow-hidden relative">
                
                {/* Hand-drawn border */}
                <BrushStrokeBorder 
                  variant="smooth" 
                  color="var(--twb-color-plum)" 
                  opacity={0.35}
                  strokeWidth={1.5}
                />
                
                {/* Paper texture */}
                <PaperTexture intensity="subtle" opacity={0.04} />

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <ImageWithFallback 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-[var(--twb-spacing-6)] flex-1 flex flex-col items-center text-center justify-center relative z-10">
                  {item.date && (
                    <Typography variant="caption" className="text-[var(--twb-color-text-muted)] uppercase tracking-wider mb-[var(--twb-spacing-2)]">
                      {item.date}
                    </Typography>
                  )}
                  
                  <Typography 
                    variant="h4" 
                    className="text-[var(--twb-color-text-primary)] group-hover:text-[var(--twb-color-plum)] dark:group-hover:text-[var(--twb-color-gold)] transition-colors font-[number:var(--twb-font-weight-medium)]"
                  >
                    {item.title}
                  </Typography>

                  {item.excerpt && (
                    <Typography 
                      variant="body" 
                      className="text-[var(--twb-color-text-secondary)] mt-[var(--twb-spacing-3)] line-clamp-2"
                    >
                      {item.excerpt}
                    </Typography>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        {viewMoreLink && (
          <div className="text-center">
            <Link to={viewMoreLink}>
              <Button variant="outline" size="lg">
                {viewMoreText}
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};
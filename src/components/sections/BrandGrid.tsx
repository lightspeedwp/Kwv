import React from 'react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Link } from 'react-router';
import { OrganicBorder } from '../decorative/OrganicBorder';
import { HandDrawnUnderline } from '../decorative/HandDrawnUnderline';

interface BrandGridItem {
  title: string;
  description: string;
  link: string;
  imageSrc?: string;
}

interface BrandGridProps {
  title?: string;
  subtitle?: string;
  items: BrandGridItem[];
  columns?: 2 | 3 | 4;
  showOrganicBorders?: boolean;
  showUnderlines?: boolean;
}

/**
 * BrandGrid Component
 * 
 * Displays a responsive grid of category cards for navigation.
 * Used for Shop categories, Experience types, or any grouped navigation.
 * 
 * Features:
 * - Flexible grid layout (2, 3, or 4 columns)
 * - Card-based design with organic borders
 * - Optional hand-drawn underlines on titles
 * - Hover effects with shadow elevation
 * - Responsive breakpoints
 * - Design token integration (colors, spacing, shadows, radii)
 * - WCAG AA compliant
 * - Dark mode support
 * 
 * @package HandcraftedWines
 * @version 2.0
 * 
 * @param {BrandGridProps} props - Grid configuration and items
 * @returns {JSX.Element} Rendered brand grid section
 */
export const BrandGrid: React.FC<BrandGridProps> = ({
  title,
  subtitle,
  items,
  columns = 4,
  showOrganicBorders = true,
  showUnderlines = false
}) => {
  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <section className="py-[var(--twb-spacing-section-y)] bg-[var(--twb-color-bg-primary)] dark:bg-[var(--twb-color-bg-primary)]">
      <Container variant="site">
        {(title || subtitle) && (
          <div className="text-center mb-[var(--twb-spacing-12)] max-w-5xl mx-auto">
            {title && (
              <div className="relative inline-block mb-[var(--twb-spacing-4)]">
                <Typography variant="caption" className="uppercase tracking-widest text-[var(--twb-color-text-secondary)]">
                  {title}
                </Typography>
              </div>
            )}
            {subtitle && (
              <Typography variant="h2" className="text-[var(--twb-color-text-primary)] mb-[var(--twb-spacing-6)] font-[number:var(--twb-font-weight-bold)] leading-tight">
                {subtitle}
              </Typography>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridColsClass} gap-[var(--twb-spacing-grid-gap)]`}>
          {items.map((item) => (
            <Link to={item.link} key={item.title} className="group block h-full">
              <div className="flex flex-col h-full relative bg-[var(--twb-color-bg-primary)] rounded-[var(--twb-radius-card)] shadow-[var(--twb-shadow-md)] hover:shadow-[var(--twb-shadow-card-hover)] transition-all duration-300 overflow-hidden">
                
                {/* Organic Border */}
                {showOrganicBorders && (
                  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <OrganicBorder variant="subtle" />
                  </div>
                )}

                {/* Optional Image */}
                {item.imageSrc && (
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.imageSrc} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                
                {/* Card Content */}
                <div className="relative z-10 p-[var(--twb-spacing-6)] flex flex-col flex-grow">
                  <div className="mb-[var(--twb-spacing-4)]">
                    <Typography 
                      variant="h4" 
                      className="text-[var(--twb-color-text-primary)] font-[number:var(--twb-font-weight-bold)] uppercase tracking-wider mb-[var(--twb-spacing-2)]"
                    >
                      {item.title}
                    </Typography>
                    
                    {showUnderlines && (
                      <div className="mt-[var(--twb-spacing-1)]" aria-hidden="true">
                        <HandDrawnUnderline variant="scribble" width={80} />
                      </div>
                    )}
                  </div>
                  
                  <Typography variant="body" className="text-[var(--twb-color-text-secondary)] leading-relaxed text-sm">
                    {item.description}
                  </Typography>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
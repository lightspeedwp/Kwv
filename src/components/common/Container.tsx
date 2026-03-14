/**
 * Container Component
 * 
 * Layout utility component that constrains content width and provides consistent horizontal padding.
 * Essential for maintaining proper content width across all pages and sections.
 * 
 * Features:
 * - 4 width variants (site, content, wide, full)
 * - Responsive horizontal padding using design tokens
 * - Automatic horizontal centering
 * - Ref forwarding support for scroll/animation libraries
 * - Dark mode compatible
 * - Mobile-first responsive design
 * 
 * Usage:
 * ```tsx
 * <Container variant="site">Standard page content</Container>
 * <Container variant="content">Narrow text content</Container>
 * <Container variant="wide">Wide grids/galleries</Container>
 * <Container variant="full">Full-width breakout content</Container>
 * ```
 * 
 * Variants:
 * - `site` - Standard site container (max-w-[1440px], default for most pages)
 * - `content` - Narrow content container (max-w-[960px], optimized for reading ~60-80 chars/line)
 * - `wide` - Wide container (max-w-[1280px], for feature grids and visual-heavy content)
 * - `full` - Full viewport width (no max-width constraint, breakout sections)
 * 
 * Padding:
 * All variants (except full) use responsive horizontal padding:
 * - Mobile: clamp(1rem, 4vw, 3rem) via --twb-spacing-container-x
 * - Ensures content never touches viewport edges
 * - Scales fluidly between breakpoints
 * 
 * Props:
 * @param {'site' | 'content' | 'wide' | 'full'} variant - Container width variant (default: 'site')
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Container content
 * @param {React.Ref} ref - Forwarded ref to underlying div element
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'site' | 'content' | 'wide' | 'full';
  className?: string;
  children: React.ReactNode;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({
  variant = 'site',
  className = '',
  children,
  ...props
}, ref) => {
  // Container variant classes with design token padding
  const containerClasses = {
    site: 'max-w-[1440px] mx-auto px-[var(--twb-spacing-container-x)] w-full',
    content: 'max-w-[960px] mx-auto px-[var(--twb-spacing-container-x)] w-full',
    wide: 'max-w-[1280px] mx-auto px-[var(--twb-spacing-container-x)] w-full',
    full: 'w-full' // Full width, no padding or max-width
  };

  return (
    <div 
      ref={ref} 
      className={`${containerClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';

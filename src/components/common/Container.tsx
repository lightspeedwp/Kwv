import React from 'react';
import { CONTAINER } from '../../constants/theme';

interface ContainerProps {
  variant?: 'site' | 'content' | 'wide' | 'full';
  className?: string;
  children: React.ReactNode;
}

/**
 * Container Component
 * 
 * A layout utility to constrain content width based on design system breakpoints.
 * 
 * Variants:
 * - site: Standard site width (max-w-[1400px]).
 * - content: Narrower text width (max-w-[960px]).
 * - wide: Wide content width (max-w-[1200px]).
 * - full: Full viewport width (breakout).
 * 
 * @param {ContainerProps} props - Component props
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({
  variant = 'site',
  className = '',
  children,
}, ref) => {
  const containerClass = variant === 'full' 
    ? 'w-full ml-[calc(50%-50vw)]' 
    : CONTAINER[variant];

  return (
    <div ref={ref} className={`${containerClass} ${className}`}>
      {children}
    </div>
  );
});

Container.displayName = 'Container';

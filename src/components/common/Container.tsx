import React from 'react';
import { CONTAINER } from '../../constants/theme';

interface ContainerProps {
  variant?: 'site' | 'content' | 'wide' | 'full';
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  variant = 'site',
  className = '',
  children,
}) => {
  const containerClass = variant === 'full' 
    ? 'w-full ml-[calc(50%-50vw)]' 
    : CONTAINER[variant];

  return (
    <div className={`${containerClass} ${className}`}>
      {children}
    </div>
  );
};

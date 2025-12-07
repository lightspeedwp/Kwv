import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Typography } from '../../common/Typography';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ProductBreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * ProductBreadcrumbs Component
 * 
 * Specialized breadcrumb navigation for Product Detail pages.
 * Supports deep hierarchy navigation (Home > Category > Subcategory > Product).
 * 
 * @param {ProductBreadcrumbsProps} props - List of breadcrumb items.
 */
export const ProductBreadcrumbs: React.FC<ProductBreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
      <Link to="/" className="hover:text-[#8B0000] transition-colors">Home</Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} />
          {item.href ? (
            <Link to={item.href} className="hover:text-[#8B0000] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#8B0000] font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

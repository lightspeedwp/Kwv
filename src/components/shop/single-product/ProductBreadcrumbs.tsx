import React from 'react';
import { Link } from 'react-router';
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
/**
 * ProductBreadcrumbs Component
 * 
 * Breadcrumb navigation specifically for the Single Product page.
 * Features:
 * - Links back to Shop home and Category archives.
 * - Current product name (non-clickable).
 * - Styled with chevrons and hover effects.
 * 
 * @param {BreadcrumbItem[]} items - Array of breadcrumb links.
 */
export const ProductBreadcrumbs: React.FC<ProductBreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
      <Link to="/" className="hover:text-[var(--twb-color-plum)] transition-colors">Home</Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} />
          {item.href ? (
            <Link to={item.href} className="hover:text-[var(--twb-color-plum)] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--twb-color-plum)] font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
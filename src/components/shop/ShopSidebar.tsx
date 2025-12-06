import React, { useState } from 'react';
import { Typography } from '../common/Typography';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { COLORS } from '../../constants/theme';

interface FilterGroupProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 py-6 last:border-0">
      <button 
        className="flex items-center justify-between w-full mb-4 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography variant="h4" className="!text-lg">{title}</Typography>
        {isOpen ? <ChevronUp size={20} className="text-gray-400 group-hover:text-black" /> : <ChevronDown size={20} className="text-gray-400 group-hover:text-black" />}
      </button>
      
      {isOpen && (
        <div className="space-y-3">
          {children}
        </div>
      )}
    </div>
  );
};

export const ShopSidebar = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <Typography variant="h3" className="mb-4">Filters</Typography>
        <div className="h-[1px] bg-gray-200 w-full"></div>
      </div>

      <FilterGroup title="Product Type">
        {['Red Wine', 'White Wine', 'Rosé', 'Sparkling', 'Brandy', 'Gin', 'Vodka'].map(type => (
          <label key={type} className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#8B0000] focus:ring-[#8B0000]" />
            <span className="text-gray-600 group-hover:text-[#8B0000] transition-colors">{type}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Brand">
        {['Roodeberg', 'The Mentors', 'KWV Classic', 'Laborie', 'Cathedral Cellar', 'Cruxland'].map(brand => (
          <label key={brand} className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#8B0000] focus:ring-[#8B0000]" />
            <span className="text-gray-600 group-hover:text-[#8B0000] transition-colors">{brand}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Price Range">
        <div className="px-2">
           <input type="range" min="0" max="5000" className="w-full accent-[#8B0000]" />
           <div className="flex justify-between mt-2 text-sm text-gray-600">
             <span>R 0</span>
             <span>R 5000+</span>
           </div>
        </div>
      </FilterGroup>

      <FilterGroup title="Volume">
        {['750ml', '1.5L', '3L', '5L'].map(vol => (
          <label key={vol} className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#8B0000] focus:ring-[#8B0000]" />
            <span className="text-gray-600 group-hover:text-[#8B0000] transition-colors">{vol}</span>
          </label>
        ))}
      </FilterGroup>
    </div>
  );
};

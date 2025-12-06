import React, { useState } from 'react';
import { Typography } from '../common/Typography';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

interface FilterGroupProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ title, children, defaultOpen = true }) => {
  // In the reference, headers are just headers, not necessarily collapsible, but collapsible is good UX. 
  // Reference images just show Headers like "Category" followed by list.
  return (
    <div className="mb-8">
      <Typography variant="h4" className="!text-xl font-normal mb-4 text-[#333333]">{title}</Typography>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
};

export const ShopSidebar = () => {
  // Mock state for active filters to demonstrate the UI
  const [activeFilters, setActiveFilters] = useState([
     { type: 'Category', value: 'T-shirts' }
  ]);

  const removeFilter = (value: string) => {
     setActiveFilters(activeFilters.filter(f => f.value !== value));
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <Typography variant="h3" className="mb-6 !text-4xl font-normal text-[#333333]">Filters</Typography>
        
        {activeFilters.length > 0 && (
           <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                 {activeFilters.map((filter, idx) => (
                    <div key={idx} className="flex items-center gap-2 border border-gray-200 px-3 py-1 bg-white text-sm text-gray-600 rounded-sm">
                       <span>{filter.type}: {filter.value}</span>
                       <button onClick={() => removeFilter(filter.value)} className="hover:text-black">
                          <X size={14} />
                       </button>
                    </div>
                 ))}
              </div>
              <button 
                 className="w-full border border-gray-300 py-2 rounded-full text-gray-600 hover:border-gray-800 hover:text-black transition-colors text-sm"
                 onClick={() => setActiveFilters([])}
              >
                 Clear filters
              </button>
           </div>
        )}
      </div>

      <FilterGroup title="Category">
        {['Accessories', 'Hoodies', 'Music', 'T-shirts', 'Decor'].map(cat => (
          <label key={cat} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center">
              <input 
                  type="checkbox" 
                  className="peer w-5 h-5 bg-gray-100 border-gray-300 rounded-sm checked:bg-black checked:border-black focus:ring-0 focus:ring-offset-0" 
                  defaultChecked={activeFilters.some(f => f.value === cat)}
              />
            </div>
            <span className="text-gray-600 group-hover:text-black transition-colors text-base">{cat}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Color">
         {['Blue', 'Red', 'Green', 'Gray', 'Yellow'].map(color => (
          <label key={color} className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-5 h-5 bg-gray-100 border-gray-300 rounded-sm checked:bg-black checked:border-black focus:ring-0" />
            <span className="text-gray-600 group-hover:text-black transition-colors text-base">{color}</span>
          </label>
        ))}
      </FilterGroup>
      
      <FilterGroup title="Status">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-5 h-5 bg-gray-100 border-gray-300 rounded-sm checked:bg-black checked:border-black focus:ring-0" />
            <span className="text-gray-600 group-hover:text-black transition-colors text-base">In stock</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-5 h-5 bg-gray-100 border-gray-300 rounded-sm checked:bg-black checked:border-black focus:ring-0" />
            <span className="text-gray-600 group-hover:text-black transition-colors text-base">On sale</span>
          </label>
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="px-1">
           <input type="range" min="0" max="5000" className="w-full accent-black h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
           <div className="flex justify-between mt-2 text-sm text-gray-600">
             <div className="px-3 py-1 border border-gray-200 rounded-sm">R 0</div>
             <div className="px-3 py-1 border border-gray-200 rounded-sm">R 5000+</div>
           </div>
        </div>
      </FilterGroup>
    </div>
  );
};

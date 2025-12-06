import React, { useState } from 'react';
import { Typography } from '../common/Typography';
import { X, Star } from 'lucide-react';

interface FilterGroupProps {
  title: string;
  children: React.ReactNode;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ title, children }) => {
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

  const handleCheckboxChange = (type: string, value: string, checked: boolean) => {
    if (checked) {
      setActiveFilters([...activeFilters, { type, value }]);
    } else {
      setActiveFilters(activeFilters.filter(f => f.value !== value));
    }
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

      <FilterGroup title="Price">
        <div className="px-1">
           {/* Slider */}
           <div className="relative h-2 bg-gray-200 rounded-full mb-6">
              <div className="absolute top-0 left-0 h-full bg-black rounded-full" style={{ left: '0%', right: '0%' }}></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
           </div>
           
           {/* Inputs */}
           <div className="flex justify-between gap-4 mt-2">
             <div className="relative flex-1">
               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900 font-medium">R</span>
               <input 
                 type="text" 
                 defaultValue="0" 
                 className="w-full pl-7 pr-3 py-2 border border-gray-900 rounded-sm text-sm font-medium text-gray-900 focus:outline-none focus:border-[#DAA520]"
               />
             </div>
             <div className="relative flex-1">
               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900 font-medium">R</span>
               <input 
                 type="text" 
                 defaultValue="5000" 
                 className="w-full pl-7 pr-3 py-2 border border-gray-900 rounded-sm text-sm font-medium text-gray-900 focus:outline-none focus:border-[#DAA520]"
               />
             </div>
           </div>
        </div>
      </FilterGroup>

      <FilterGroup title="Rating">
        <div className="flex items-center gap-3 cursor-pointer group">
          <input 
            type="checkbox" 
            className="w-5 h-5 bg-gray-100 border-gray-300 rounded-sm checked:bg-black checked:border-black focus:ring-0" 
            onChange={(e) => handleCheckboxChange('Rating', '5 Stars', e.target.checked)}
          />
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className="fill-black text-black" 
              />
            ))}
          </div>
        </div>
      </FilterGroup>

      <FilterGroup title="Color">
         {['Blue', 'Red', 'Green', 'Gray', 'Yellow'].map(color => (
          <label key={color} className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-5 h-5 bg-gray-100 border-gray-300 rounded-sm checked:bg-black checked:border-black focus:ring-0" 
              checked={activeFilters.some(f => f.value === color)}
              onChange={(e) => handleCheckboxChange('Color', color, e.target.checked)}
            />
            <span className="text-gray-600 group-hover:text-black transition-colors text-base">{color}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Category">
        {['Accessories', 'Tshirts', 'Hoodies', 'Music', 'Clothing', 'Decor'].map(cat => (
          <label key={cat} className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center">
              <input 
                  type="checkbox" 
                  className="peer w-5 h-5 bg-gray-100 border-gray-300 rounded-sm checked:bg-black checked:border-black focus:ring-0 focus:ring-offset-0" 
                  checked={activeFilters.some(f => f.value === cat)}
                  onChange={(e) => handleCheckboxChange('Category', cat, e.target.checked)}
              />
            </div>
            <span className="text-gray-600 group-hover:text-black transition-colors text-base">{cat}</span>
          </label>
        ))}
      </FilterGroup>
      
      <FilterGroup title="Status">
        <div className="px-1 mb-6">
           {/* Slider for status? The image shows a slider under Status too. That seems odd but I will follow the image which shows a slider under Status as well. 
           Wait, looking closely at the image, under Status there is a slider and inputs similar to Price. This might be a mistake in the mockup or a generic "Price" filter repeated.
           However, usually Status is checkboxes. The image shows:
           Status (Heading)
           Slider
           Inputs $15 - $55
           
           Then "Rating" again.
           Then "color" again.
           
           It looks like the screenshot captured two filter blocks or duplicated content.
           The prompt says "The Product Filters block... Status Filter - Allows filtering by stock status... You can choose the display style...".
           Typically status is In Stock / On Sale.
           I will stick to Checkboxes for Status as that makes more semantic sense for WooCommerce, unless the user specifically wants the slider there too. 
           The user said "The mobile filters need to look like the following attached image".
           The image clearly shows "Status" followed by a slider.
           I will assume the image is showing a Price filter BUT labeled as Status or it's just a visual reference for "how filters look".
           But wait, there is a "Price" section at the top.
           Then "Rating".
           Then "color".
           Then "Category".
           Then "Status" -> Slider -> Inputs.
           Then "Rating" again.
           
           This looks like a concatenated screenshot or a long scroll.
           I will implement Status as Checkboxes as it functions in WooCommerce, but I will make sure the styling of ALL filters matches the clean look of the image.
           The "Status" section in the image having a slider is very likely a mistake in the mockup or it is actually a Price filter.
           I will keep Status as checkboxes for "In stock" and "On sale" as I had, but style them to match the other checkboxes.
           
           Wait, looking at the previous Status implementation, it was checkboxes.
           I'll stick to checkboxes for Status but make sure the Price filter inputs look exactly like the image.
           */}
          <label className="flex items-center gap-3 cursor-pointer group mb-3">
            <input 
              type="checkbox" 
              className="w-5 h-5 bg-gray-100 border-gray-300 rounded-sm checked:bg-black checked:border-black focus:ring-0" 
              checked={activeFilters.some(f => f.value === 'In stock')}
              onChange={(e) => handleCheckboxChange('Status', 'In stock', e.target.checked)}
            />
            <span className="text-gray-600 group-hover:text-black transition-colors text-base">In stock</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-5 h-5 bg-gray-100 border-gray-300 rounded-sm checked:bg-black checked:border-black focus:ring-0" 
              checked={activeFilters.some(f => f.value === 'On sale')}
              onChange={(e) => handleCheckboxChange('Status', 'On sale', e.target.checked)}
            />
            <span className="text-gray-600 group-hover:text-black transition-colors text-base">On sale</span>
          </label>
        </div>
      </FilterGroup>
    </div>
  );
};

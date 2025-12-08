import React, { useState } from 'react';
import { motion } from 'motion/react';

interface TabData {
  label: string;
  content: React.ReactNode;
}

interface ProductTabsProps {
  tabs: TabData[];
}

/**
 * ProductTabs Component
 * 
 * A tabbed interface for extended product information (Description, Specifications, Reviews).
 * Features:
 * - Animated indicator for active tab (using `motion/react`).
 * - Smooth switching between content panels.
 * 
 * @param {ProductTabsProps} props - Array of tab objects (label + content).
 */
/**
 * ProductTabs Component
 * 
 * Tabbed interface for detailed product information.
 * Features:
 * - Tabs: Description, Additional Information (Attributes), Reviews.
 * - Smooth switching between content sections.
 * - Responsive layout (stack or accordion on mobile if needed, but currently tabs).
 * 
 * @param {TabItem[]} tabs - Array of tab objects { label, content }.
 */
export const ProductTabs: React.FC<ProductTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="mt-12">
      {/* Tab Header */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto scrollbar-hide">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`
              px-8 py-4 font-serif text-lg whitespace-nowrap transition-colors relative
              ${activeTab === idx ? 'text-[#2C1810] font-bold' : 'text-gray-400 hover:text-gray-600'}
            `}
          >
            {tab.label}
            {activeTab === idx && (
              <motion.div 
                layoutId="productTabIndicator" 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B0000]" 
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

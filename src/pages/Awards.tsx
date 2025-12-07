import React, { useState, useRef } from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { ChevronDown, Search, Printer, FileText, FileSpreadsheet, Copy, Filter, X, ChevronUp, ArrowDown } from 'lucide-react';
import { COLORS } from '../constants/theme';
import exampleImage from 'figma:asset/dfa0e54405c973969c9c003c1ae5ef0e7a16880c.png';
import { AnimatePresence, motion } from 'motion/react';

// --- Mock Data ---
const WINE_AWARDS = [
  { id: 1, year: '2023', brand: 'KWV Classic', variety: 'Chardonnay', vintage: '2022', award: 'Double Gold', competition: 'Sakura Women Wine Awards' },
  { id: 2, year: '2023', brand: 'Cathedral Cellar', variety: 'Shiraz', vintage: '2019', award: 'Double Gold', competition: 'Sakura Women Wine Awards' },
  { id: 3, year: '2023', brand: 'The Mentors', variety: 'Canvas', vintage: '2019', award: 'Double Gold', competition: 'Sakura Women Wine Awards' },
  { id: 4, year: '2023', brand: 'KWV', variety: 'Cape Vin Blanc', vintage: 'NV', award: 'Gold', competition: 'Sakura Women Wine Awards' },
  { id: 5, year: '2023', brand: 'Cathedral Cellar', variety: 'Cabernet Sauvignon', vintage: '2019', award: 'Gold', competition: 'Sakura Women Wine Awards' },
  { id: 6, year: '2023', brand: 'Cathedral Cellar', variety: 'Chardonnay', vintage: '2021', award: 'Gold', competition: 'Sakura Women Wine Awards' },
  { id: 7, year: '2023', brand: 'KWV', variety: 'Cabernet Sauvignon', vintage: '2021', award: 'Gold', competition: 'Sakura Women Wine Awards' },
  { id: 8, year: '2023', brand: 'The Mentors', variety: 'Orchestra', vintage: '2019', award: 'Gold', competition: 'Sakura Women Wine Awards' },
  { id: 9, year: '2023', brand: 'KWV Classic', variety: 'Cape Ruby', vintage: 'NV', award: 'Gold', competition: 'Sakura Women Wine Awards' },
  { id: 10, year: '2023', brand: 'Big Bill', variety: 'Cabernet Sauvignon', vintage: '2021', award: 'Gold', competition: 'Sakura Women Wine Awards' },
];

const SPIRITS_AWARDS = [
  { id: 1, year: '2022', brand: 'Cruxland', variety: 'Gin', vintage: '-', award: 'Best South African London Dry Gin', competition: 'World Gin Awards' },
  { id: 2, year: '2022', brand: 'Cruxland', variety: 'Gin', vintage: '-', award: 'Silver', competition: 'International Wine & Spirits Competition' },
  { id: 3, year: '2022', brand: 'KWV 20', variety: 'Brandy', vintage: '-', award: 'Double Gold', competition: 'International Spirits Challenge' },
  { id: 4, year: '2022', brand: 'KWV 10', variety: 'Brandy', vintage: '-', award: 'Gold', competition: 'International Spirits Challenge' },
  { id: 5, year: '2022', brand: 'KWV 12', variety: 'Brandy', vintage: '-', award: 'Gold', competition: 'International Spirits Challenge' },
  { id: 6, year: '2022', brand: 'KWV 15', variety: 'Brandy', vintage: '-', award: 'Double Gold and Trophy', competition: 'International Spirits Challenge' },
  { id: 7, year: '2022', brand: 'KWV XO Cognac', variety: 'Brandy', vintage: '-', award: 'Double Gold and Trophy', competition: 'International Spirits Challenge' },
  { id: 8, year: '2022', brand: 'KWV Brandy', variety: 'Brandy', vintage: '-', award: 'Best Producer', competition: 'International Spirits Challenge' },
  { id: 9, year: '2022', brand: 'Wild Africa Cream', variety: 'Liqueur', vintage: '-', award: 'Gold', competition: 'World Liqueur Awards' },
  { id: 10, year: '2022', brand: 'KWV 5', variety: 'Brandy', vintage: '-', award: 'Silver', competition: 'World Brandy Awards' },
];

// --- Components ---

const FilterDropdown = ({ label, value, onChange, options }: { label: string, value: string, onChange: (val: string) => void, options: string[] }) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-xs font-bold text-gray-800 uppercase tracking-wide">{label} :</label>
    <div className="relative group">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-white border-b border-gray-300 py-2 pl-0 pr-8 text-sm text-gray-500 focus:outline-none focus:border-[#8B0000] cursor-pointer"
      >
        <option value="">Nothing selected</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-0 top-2.5 text-gray-400 pointer-events-none" size={14} />
    </div>
  </div>
);

const Pagination = () => (
  <div className="flex items-center justify-between pt-6 text-xs sm:text-sm text-gray-600 border-t border-gray-200 mt-4">
    <div>Showing 1 to 10 of 421 entries</div>
    <div className="flex items-center gap-1 sm:gap-2">
      <button className="p-1 px-2 text-gray-400 hover:text-gray-800 disabled:opacity-50">&laquo;</button>
      <button className="p-1 px-2 text-gray-400 hover:text-gray-800 disabled:opacity-50">&lsaquo;</button>
      <button className="px-3 py-1 bg-[#E0E0E0] text-gray-800 rounded-sm font-medium">1</button>
      <button className="px-3 py-1 hover:bg-gray-100 text-gray-600 rounded-sm">2</button>
      <button className="px-3 py-1 hover:bg-gray-100 text-gray-600 rounded-sm">3</button>
      <button className="px-3 py-1 hover:bg-gray-100 text-gray-600 rounded-sm">4</button>
      <button className="px-3 py-1 hover:bg-gray-100 text-gray-600 rounded-sm">5</button>
      <span className="px-1">...</span>
      <button className="px-3 py-1 hover:bg-gray-100 text-gray-600 rounded-sm">43</button>
      <button className="p-1 px-2 text-gray-600 hover:text-gray-800">&rsaquo;</button>
      <button className="p-1 px-2 text-gray-600 hover:text-gray-800">&raquo;</button>
    </div>
  </div>
);

const MobileCard = ({ item }: { item: any }) => (
  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 mb-4">
    <div className="flex justify-between items-start mb-3">
      <span className="bg-[#F5F5DC] text-[#8B0000] text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
        {item.year}
      </span>
      <span className="text-gray-400 text-xs font-medium text-right max-w-[50%]">{item.competition}</span>
    </div>
    <h3 className="text-xl font-serif font-bold text-[#2C1810] mb-1 leading-tight">
      {item.brand}
    </h3>
    <div className="text-sm text-gray-600 mb-4 italic">
      {item.variety} {item.vintage !== '-' && item.vintage !== 'NV' ? `• ${item.vintage}` : ''}
    </div>
    <div className="flex items-center gap-2 border-t border-dashed border-gray-200 pt-3 mt-2">
      {/* Award Badge */}
      <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
         <div className="w-2 h-2 rounded-full bg-[#DAA520]"></div>
         <span className="text-sm font-bold text-gray-800">{item.award}</span>
      </div>
    </div>
  </div>
);

export const Awards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'wine' | 'spirits'>('wine');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const data = activeTab === 'wine' ? WINE_AWARDS : SPIRITS_AWARDS;
  const tabsRef = useRef<HTMLDivElement>(null);

  // Mock Filter Options
  const filterOptions = {
    years: ['2023', '2022', '2021', '2020'],
    brands: ['KWV Classic', 'Cathedral Cellar', 'The Mentors', 'Laborie'],
    varieties: ['Chardonnay', 'Shiraz', 'Cabernet Sauvignon', 'Pinotage'],
    vintages: ['2022', '2021', '2019', 'NV'],
    awards: ['Double Gold', 'Gold', 'Silver', 'Bronze'],
    competitions: ['Veritas', 'Sakura Women Wine Awards', 'Micheangelo']
  };

  const [filters, setFilters] = useState({
    year: '', brand: '', variety: '', vintage: '', award: '', competition: ''
  });

  const updateFilter = (key: string, val: string) => setFilters(prev => ({ ...prev, [key]: val }));
  const clearFilters = () => setFilters({ year: '', brand: '', variety: '', vintage: '', award: '', competition: '' });

  const scrollToTabs = () => {
    tabsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src={exampleImage} 
          alt="KWV Awards" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay for text readability */}
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center h-full justify-center">
            <Typography variant="h4" className="text-white uppercase tracking-widest mb-6 font-normal text-sm md:text-base">
                Our Achievements
            </Typography>
            <Typography variant="h2" className="text-white font-serif md:text-5xl lg:text-6xl leading-tight drop-shadow-lg mb-8">
                Excellence Rewarded
            </Typography>
            <Typography variant="bodyLarge" className="text-white/90 max-w-2xl mx-auto mb-12">
                Driven by innovation and fuelled to make products our consumers can believe in, KWV is proud to feature locally and globally for its range of award-winning wines and spirits.
            </Typography>

            <motion.button 
                onClick={scrollToTabs}
                initial={{ y: 0 }}
                animate={{ y: 10 }}
                transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                className="absolute bottom-8 text-white hover:text-[#DAA520] transition-colors p-2"
                aria-label="Scroll to content"
            >
                <ChevronDown size={48} strokeWidth={1.5} />
            </motion.button>
        </div>
      </div>

      <Container variant="site" className="py-12" ref={tabsRef}>
        
        {/* Tabs */}
        <div className="flex justify-center gap-4 md:gap-8 mb-12 border-b border-gray-200 pb-1">
          <button 
            onClick={() => setActiveTab('wine')}
            className={`pb-4 px-4 text-sm md:text-lg font-bold uppercase tracking-widest transition-all relative ${
              activeTab === 'wine' ? 'text-[#C49A6C] border-b-4 border-[#C49A6C] -mb-[5px]' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Wine Awards
          </button>
          <button 
            onClick={() => setActiveTab('spirits')}
            className={`pb-4 px-4 text-sm md:text-lg font-bold uppercase tracking-widest transition-all relative ${
              activeTab === 'spirits' ? 'text-[#C49A6C] border-b-4 border-[#C49A6C] -mb-[5px]' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Spirits Awards
          </button>
        </div>

        {/* Title */}
        <div className="mb-8">
            <Typography variant="h3" className="font-serif text-[#2C1810] mb-6">
                {activeTab === 'wine' ? 'Wine Awards' : 'Spirits Awards'}
            </Typography>
            
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
               <Button 
                  onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                  variant="outline"
                  className="w-full flex justify-between items-center"
               >
                  <span className="flex items-center gap-2"><Filter size={16} /> Filter Awards</span>
                  {isMobileFiltersOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
               </Button>
            </div>

            {/* Filters Grid (Desktop: Always Visible, Mobile: Collapsible) */}
            <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
                <div className="bg-gray-50 p-6 rounded-lg lg:bg-transparent lg:p-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <FilterDropdown label="Award Year" value={filters.year} onChange={(v) => updateFilter('year', v)} options={filterOptions.years} />
                        <FilterDropdown label="Brand" value={filters.brand} onChange={(v) => updateFilter('brand', v)} options={filterOptions.brands} />
                        <FilterDropdown label="Variety" value={filters.variety} onChange={(v) => updateFilter('variety', v)} options={filterOptions.varieties} />
                        <FilterDropdown label="Vintage" value={filters.vintage} onChange={(v) => updateFilter('vintage', v)} options={filterOptions.vintages} />
                        <FilterDropdown label="Award" value={filters.award} onChange={(v) => updateFilter('award', v)} options={filterOptions.awards} />
                        <FilterDropdown label="Competition" value={filters.competition} onChange={(v) => updateFilter('competition', v)} options={filterOptions.competitions} />
                        
                        <div className="flex items-end pb-2">
                            <button 
                                onClick={clearFilters}
                                className="bg-[#C49A6C] hover:bg-[#B0895B] text-white text-sm font-bold px-4 py-2 rounded-sm flex items-center gap-2 transition-colors w-full lg:w-fit justify-center"
                            >
                                <Filter size={14} /> Clear filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Controls Bar (Show X entries / Search) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 bg-[#F9F9F9] p-4 rounded-md md:bg-transparent md:p-0">
            <div className="flex items-center gap-2 text-sm text-gray-600">
                Show 
                <select className="border border-gray-300 rounded p-1 bg-white focus:border-[#8B0000] outline-none">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select> 
                entries
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
                <label className="text-sm font-bold text-gray-700">Search:</label>
                <div className="relative flex-grow md:w-64">
                    <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:border-[#8B0000] outline-none"
                    />
                </div>
            </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-[#C49A6C] text-white text-xs uppercase tracking-wider font-bold">
                        <th className="p-4 rounded-tl-md">Award Year <ChevronDown size={12} className="inline ml-1"/></th>
                        <th className="p-4">Brand</th>
                        <th className="p-4">Variety</th>
                        <th className="p-4">Vintage</th>
                        <th className="p-4">Award</th>
                        <th className="p-4 rounded-tr-md">Competition</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                    {data.map((row, idx) => (
                        <tr key={row.id} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}>
                            <td className="p-4 font-medium">{row.year}</td>
                            <td className="p-4">{row.brand}</td>
                            <td className="p-4">{row.variety}</td>
                            <td className="p-4 text-gray-500">{row.vintage}</td>
                            <td className="p-4 font-medium text-[#8B0000]">{row.award}</td>
                            <td className="p-4">{row.competition}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
             {data.map((row) => (
                <MobileCard key={row.id} item={row} />
             ))}
        </div>

        {/* Pagination */}
        <Pagination />

        {/* Export Tools (Desktop only mostly) */}
        <div className="hidden md:flex justify-end gap-4 mt-6 text-gray-500 text-sm">
            <button className="flex items-center gap-1 hover:text-[#8B0000]"><Printer size={14}/> Print</button>
            <button className="flex items-center gap-1 hover:text-[#8B0000]"><FileSpreadsheet size={14}/> Excel</button>
            <button className="flex items-center gap-1 hover:text-[#8B0000]"><FileText size={14}/> CSV</button>
            <button className="flex items-center gap-1 hover:text-[#8B0000]"><Copy size={14}/> Copy</button>
        </div>

      </Container>
    </Layout>
  );
};

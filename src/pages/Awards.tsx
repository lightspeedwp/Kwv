import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Layout } from '../components/layout/Layout';
import { COLORS } from '../constants/theme';
import { Search, Filter, Trophy, Medal } from 'lucide-react';
import { FAQSection } from '../components/sections/FAQSection';

const AWARDS = [
  {
    year: '2024',
    competition: 'Trophy Wine Show',
    award: 'Best Producer',
    product: 'KWV Winery',
    type: 'Trophy'
  },
  {
    year: '2024',
    competition: 'Trophy Wine Show',
    award: 'Gold Medal',
    product: 'The Mentors Orchestra 2021',
    type: 'Gold'
  },
  {
    year: '2024',
    competition: 'International Spirits Challenge',
    award: 'Double Gold',
    product: 'KWV 12 Year Old Brandy',
    type: 'Double Gold'
  },
  {
    year: '2023',
    competition: 'Veritas Awards',
    award: 'Vertex Award (Overall Winner)',
    product: 'The Mentors Perold 2020',
    type: 'Trophy'
  },
  {
    year: '2023',
    competition: 'Michelangelo Awards',
    award: 'Platinum',
    product: 'Laborie Blanc de Blancs',
    type: 'Platinum'
  },
  {
    year: '2023',
    competition: 'Platter\'s Guide',
    award: '5 Stars',
    product: 'Roodeberg Dr Charles Niehaus 2019',
    type: '5 Stars'
  }
];

export const Awards: React.FC = () => {
  const [filterYear, setFilterYear] = useState('All');

  const filteredAwards = filterYear === 'All' 
    ? AWARDS 
    : AWARDS.filter(a => a.year === filterYear);

  return (
    <Layout>
      <div className="bg-[#F9F9F9] py-16">
        <Container variant="content" className="text-center">
          <Typography variant="h1" color={COLORS.wineRed} className="mb-4">Awards & Accolades</Typography>
          <Typography variant="bodyLarge" className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality is consistently recognised on the global stage. Here are some of our recent achievements.
          </Typography>
        </Container>
      </div>

      <Container variant="site" className="py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
           <div className="flex items-center gap-2 w-full sm:w-auto">
              <Search className="text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search awards..." 
                className="p-2 border-b border-gray-300 focus:border-[#8B0000] outline-none w-full sm:w-64"
              />
           </div>
           
           <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              {['All', '2024', '2023', '2022'].map(year => (
                <button
                  key={year}
                  onClick={() => setFilterYear(year)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    filterYear === year 
                      ? 'bg-[#8B0000] text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {year}
                </button>
              ))}
           </div>
        </div>

        {/* Awards List - Mobile Friendly */}
        <div className="grid grid-cols-1 gap-4">
           {filteredAwards.map((item, index) => (
             <div key={index} className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${
                   item.type.includes('Gold') || item.type.includes('Trophy') ? 'bg-[#FFF8E1] text-[#DAA520]' : 'bg-gray-100 text-gray-500'
                }`}>
                   {item.type.includes('Trophy') ? <Trophy size={32} /> : <Medal size={32} />}
                </div>
                
                <div className="flex-grow">
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 mb-2">
                      <Typography variant="h3" className="text-lg sm:text-xl font-serif text-[#2C1810]">
                        {item.product}
                      </Typography>
                      <span className="text-sm font-bold text-[#8B0000] bg-[#FFF0F0] px-3 py-1 rounded-full w-fit">
                        {item.award}
                      </span>
                   </div>
                   <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 text-sm text-gray-500">
                      <span>{item.competition}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{item.year}</span>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </Container>

      <FAQSection items={[
        { question: "What is the Veritas Award?", answer: "The Veritas Awards is South Africa's most prestigious wine competition, often described as the 'Oscars' of the industry." },
        { question: "Has KWV won international awards?", answer: "Yes, KWV regularly competes and wins top honors at international competitions like IWSC, Mundus Vini, and the Decanter World Wine Awards." },
        { question: "Where can I buy award-winning wines?", answer: "You can filter our online shop by 'Award Winners' to easily find our highly acclaimed wines and spirits." }
      ]} />
    </Layout>
  );
};

import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { COLORS } from '../../constants/theme';
import { cn } from '../../components/ui/utils';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

// Timeline Data
const TIMELINE_ERAS = [
  { id: '1918', label: '1918' },
  { id: '1930s', label: '1930s' },
  { id: '1940s', label: '1940s' },
  { id: '1950s', label: '1950s' },
  { id: '1960s', label: '1960s' },
  { id: '1970s', label: '1970s' },
  { id: '1980s', label: '1980s' },
  { id: '1990s', label: '1990s' },
  { id: '2000s', label: '2000s' },
  { id: '2008+', label: '2008 until present' },
];

const TIMELINE_EVENTS = [
  // 1918
  {
    era: '1918',
    year: '1918',
    title: 'KWV Founded',
    desc: 'Dr. Charles W. H. Kohler is elected as KWV’s Chairman and becomes one of the most important figures in the Cape Wine industry in the twentieth century.',
    image: 'https://images.unsplash.com/photo-1587651756806-b7795e183eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1918',
    year: '1924',
    title: 'KWV Act Passed',
    desc: 'The KWV Act is passed, and specific administrative responsibilities, as well as the sole exporting and importing of surplus alcohol, are assigned to KWV.',
    image: 'https://images.unsplash.com/photo-1764352104384-15621992b7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1918',
    year: '1926',
    title: 'First Brandy',
    desc: 'KWV becomes one of the first brandy producers in the Cape. In 1926, it bottled its first commercial brandy and exported it to the UK.',
    image: 'https://images.unsplash.com/photo-1638286629485-bb417ced482e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1918',
    year: '1928',
    title: 'Professor Perold Joins',
    desc: 'Professor Abraham Izak Perold, the legendary botanist, ampelograph and wine scientist who developed the Pinotage grape, joins KWV and becomes responsible for the experimentation of new cultivars and to improve quality control processes.',
    image: 'https://images.unsplash.com/photo-1605826135103-3b7fa88703ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  // 1930s
  {
    era: '1930s',
    year: '1930',
    title: 'Export Innovation',
    desc: 'KWV develops alternatives to wine for export, including a healthy grape juice drink and KWV Eau de Cologne crafted by the Master Distiller for use as marketing material.',
    image: 'https://images.unsplash.com/photo-1693216644630-2c475769ab56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1930s',
    year: '1930',
    title: 'Cathedral Cellar',
    desc: 'KWV completes its impressive main cellar, naming it the Cathedral Cellar due to its dome-like ceiling and the captivating play of light in the beautiful space.',
    image: 'https://images.unsplash.com/photo-1731101949843-4122f2232acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1930s',
    year: '1935',
    title: 'Crayfish Agreement',
    desc: 'France signs the Crayfish Agreement, granting exclusive rights to French geographical terms such as Champagne and Bordeaux on wine labels in exchange for importing South African crayfish.',
    image: 'https://images.unsplash.com/photo-1650081484817-582d41d82f8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1930s',
    year: '1939',
    title: 'World War II Impact',
    desc: 'The outbreak of World War II causes exports to decline and domestic brandy consumption to increase. KWV expands its export market to Africa and the East.',
    image: 'https://images.unsplash.com/photo-1660892506683-433477d44810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  // 1940s
  {
    era: '1940s',
    year: '1940',
    title: 'Minimum Price Regulation',
    desc: 'KWV’s responsibilities expand to include determining the minimum price for all wines.',
    image: 'https://images.unsplash.com/photo-1564986410613-97e0b371efe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1940s',
    year: '1942',
    title: 'The Great Fire',
    desc: 'A massive fire devastates the KWV cellars in Stellenbosch – a single barrel of prized KWV Brandy is salvaged and transported to Paarl.',
    image: 'https://images.unsplash.com/photo-1760017274949-df8b582a9e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1940s',
    year: '1949',
    title: 'Roodeberg Launched',
    desc: 'Roodeberg is officially launched in 1949 and becomes one of South Africa’s most iconic wines, largely due to its scarcity value and the fact that it isn’t widely available in South Africa.',
    image: 'https://images.unsplash.com/photo-1567196279979-3bf2f62e8d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  // 1950s
  {
    era: '1950s',
    year: '1951',
    title: 'Dr. Kohler’s Legacy',
    desc: 'The father of KWV, Dr. Charles Kohler, chairs his last meeting at KWV and sadly passes away the following year.',
    image: 'https://images.unsplash.com/photo-1672226405717-697c84f48f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1950s',
    year: '1955',
    title: '300 Years of Winemaking',
    desc: 'KWV celebrates 300 years of winemaking in the Cape with its fellow producers and winemakers.',
    image: 'https://images.unsplash.com/photo-1565029822254-7752d78d0aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1950s',
    year: '1958',
    title: 'La Concorde',
    desc: 'La Concorde, KWV’s head office, is completed by Louw & Louw Architects. This sees the beginning of KWV’s extensive art collection.',
    image: 'https://images.unsplash.com/photo-1764525983689-6f07d23111c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1950s',
    year: '1959',
    title: 'Modern Cellar Technology',
    desc: 'A modern cellar with cold fermentation – one of the first of its kind – is built in time for the 1962 harvest.',
    image: 'https://images.unsplash.com/photo-1710020355710-d87d57328517?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  // 1960s
  {
    era: '1960s',
    year: '1964',
    title: 'Wine Education',
    desc: 'KWV becomes a leader in wine education with a series of wine and food appreciation courses and films.',
    image: 'https://images.unsplash.com/photo-1762454016515-f29750071257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  // 1970s
  {
    era: '1970s',
    year: '1971',
    title: 'Shortages & Imports',
    desc: 'Serious natural wine shortages in the local industry force KWV to import large quantities of wine from Bordeaux.',
    image: 'https://images.unsplash.com/photo-1734510722516-5a558dc910d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1970s',
    year: '1972',
    title: 'Wine of Origin Scheme',
    desc: 'KWV makes a significant contribution to the highly acclaimed South African Wine of Origin (WO) scheme that was initiated by KWV in 1972 and officially implemented in 1973 – a certification system which is respected worldwide.',
    image: 'https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1970s',
    year: '1974',
    title: 'Wine House Concept',
    desc: 'The wine house concept is created by KWV to promote a culture around the appreciation of good food and wine in a social environment. Laborie Wine House is established in Paarl, Paddagang in Tulbagh, Kleinplasie in Worcester, Brandewyndraai in Robertson and Doornbosch in Stellenbosch.',
    image: 'https://images.unsplash.com/photo-1561668137-58955d51a5fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1970s',
    year: '1979',
    title: 'Industry Restructuring',
    desc: 'KWV purchases 30% of Stellenbosch Farmers’ Winery and Distillers Corporation, and together with Rembrandt, acquires the majority joint interest in Kaapwyn in a move to restructure the industry.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  // 1980s
  {
    era: '1980s',
    year: '1980',
    title: 'New Products',
    desc: 'A challenging political situation and consequent poor economy sees KWV developing new products such as flavoured wines to stimulate the local market. As a result, its grape concentrate business booms.',
    image: 'https://images.unsplash.com/photo-1719264637567-daf48c0eff03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1980s',
    year: '1984',
    title: 'Brandy Foundation',
    desc: 'KWV plays a vital role in the establishment of the South African Brandy Foundation.',
    image: 'https://images.unsplash.com/photo-1763316727676-3f3b96188def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1980s',
    year: '1989',
    title: 'Responsible Alcohol Use',
    desc: 'KWV is a founder member of the Industry Association for Responsible Alcohol Use (ARA).',
    image: 'https://images.unsplash.com/photo-1639256150782-ecdb00b01e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  // 1990s
  {
    era: '1990s',
    year: '1990',
    title: 'End of an Era',
    desc: 'KWV plays a central role in regulating the industry until the early 1990s when world markets opened to South African wine exports after apartheid.',
    image: 'https://images.unsplash.com/photo-1755465387788-65f74de8d184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1990s',
    year: '1992',
    title: 'House of Brandy',
    desc: 'The revamped KWV Brandy cellar in Worcester is opened to the public as the KWV House of Brandy. It becomes an important and popular tourist attraction.',
    image: 'https://images.unsplash.com/photo-1554668329-bee7191d83d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1990s',
    year: '1997',
    title: 'Company Conversion',
    desc: 'KWV converts from a co-operative to a company, with restrictions on trading of shares. It wins the President’s Award for export achievement.',
    image: 'https://images.unsplash.com/photo-1711720743865-10787dd6934a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '1990s',
    year: '1999',
    title: 'SAWIT Support',
    desc: 'KWV starts paying funds to support the South African Wine Industry Trust (SAWIT).',
    image: 'https://images.unsplash.com/photo-1726430957887-e61bac391b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  // 2000s
  {
    era: '2000s',
    year: '2003',
    title: 'Public Shares',
    desc: 'The authorities lifted restrictions on KWV share trading and made shares available to the general public.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '2000s',
    year: '2004',
    title: 'BBBEE Deal',
    desc: 'KWV negotiates the South African wine industry’s largest BBBEE deal with Phetogo (Pty) Ltd, attaining 25,1% shares. For the first time, KWV products enter the local market with its branded wines and brandies.',
    image: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '2000s',
    year: '2006',
    title: 'Diamond Jubilee',
    desc: 'KWV launches its Diamond Jubilee Brandy (a blend of 10, 12, 15 and 23 year old brandies), to celebrate Queen Elizabeth’s 60th anniversary on the throne.',
    image: 'https://images.unsplash.com/photo-1547738238-5ddb16bef15f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  // 2008+
  {
    era: '2008+',
    year: '2009',
    title: 'KWV Holdings Ltd',
    desc: 'KWV Ltd. becomes KWV Holdings Ltd. as part of an unbundling of its indirect interest in the Distell group.',
    image: 'https://images.unsplash.com/photo-1711720743865-10787dd6934a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '2008+',
    year: '2011',
    title: 'New Ownership & Awards',
    desc: 'KWV’s shareholder of reference, Zeder, sells its shares to Hosken Consolidated Investments (HCI). KWV makes history at the Veritas Wine Awards, winning the most Gold and Double Gold awards in show history.',
    image: 'https://images.unsplash.com/photo-1720592592437-0c679716ac48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '2008+',
    year: '2012',
    title: 'RTD Portfolio',
    desc: 'KWV further extends its RTD portfolio with the addition of KWV 3 & Cola.',
    image: 'https://images.unsplash.com/photo-1654139922535-45f6b4099806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '2008+',
    year: '2014',
    title: 'Heritage XO Cognac',
    desc: 'South Africa’s first Cognac is launched by KWV. The company unveils its KWV Heritage XO Cognac, as well as 30-year-old KWV Nexus.',
    image: 'https://images.unsplash.com/photo-1703775763396-ea5dd04673a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '2008+',
    year: '2015',
    title: 'Best Brandy Trophy',
    desc: 'KWV’s 15-year-old Potstill Brandy wins the Worldwide Trophy for Brandy at the IWSC – making it the company’s 10th claim to this coveted title.',
    image: 'https://images.unsplash.com/photo-1563908047211-e3a9ac7968d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '2008+',
    year: '2016',
    title: 'Vasari Acquisition',
    desc: 'Vasari, a leading consumer focused investment group acquires KWV from HCI. KWV is also named as the Highest Ranked South African Wine Brand in Drinks International’s World’s Top 50.',
    image: 'https://images.unsplash.com/photo-1681505531034-8d67054e07f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '2008+',
    year: '2018',
    title: 'Centenary Celebration',
    desc: 'KWV releases its KWV Centenary Brandy, a blend of the very first brandy made by KWV in 1926, as well as brandy from the only barrel rescued from a fire that razed KWV’s historic cellars in 1942.',
    image: 'https://images.unsplash.com/photo-1642498496883-56a096f98e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '2008+',
    year: '2019',
    title: 'Roodeberg 70th',
    desc: 'Roodeberg, the legendary red blend that has been bringing friends together the world over since 1949, celebrates its 70th anniversary.',
    image: 'https://images.unsplash.com/photo-1567196279979-3bf2f62e8d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '2008+',
    year: '2020',
    title: 'Veritas Vertex Award',
    desc: 'KWV is named Top Producer at the acclaimed Veritas Wine Awards and takes home the coveted Veritas Vertex Award for The Mentors Orchestra 2018.',
    image: 'https://images.unsplash.com/photo-1632679090212-612ac1f4d76f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    era: '2008+',
    year: '2021',
    title: 'Viticulturist of the Year',
    desc: 'KWV’s Chief Viticulturist, Marco Ventrella is named ‘Viticulturist of the Year’ by acclaimed UK wine critic, Tim Atkin.',
    image: 'https://images.unsplash.com/photo-1669719874174-169cbccd4c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  }
];

/**
 * History Page Component
 * 
 * Chronicles KWV's timeline from 1918 to present.
 * Features:
 * - Sticky "Eras" navigation for quick jumping between decades.
 * - ScrollSpy to highlight the current era in view.
 * - Visual timeline with "dot and line" connecting events.
 */
export const History: React.FC = () => {
  const [activeEra, setActiveEra] = useState('1918');

  // Handle Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      // Find the era currently in view
      const sections = TIMELINE_ERAS.map(era => document.getElementById(`era-${era.id}`));
      
      let current = '1918';
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) { // 150px offset for header + sticky nav
             current = section.id.replace('era-', '');
          }
        }
      }
      setActiveEra(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEra = (id: string) => {
    const element = document.getElementById(`era-${id}`);
    if (element) {
      const offset = 120; // Height of headers
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout>
      <Hero 
        title="Our History" 
        subtitle="In 1918, the year Nelson Mandela was born, South African wine farmers founded KWV. The aim was to stabilise a young, but promising, industry."
        imageSrc="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        height="large"
      />

      {/* Sticky Sub-Navigation */}
      <div className="sticky top-[80px] z-40 bg-white border-b border-gray-200 shadow-sm overflow-x-auto">
        <Container variant="site">
          <div className="flex items-center gap-8 min-w-max py-4">
             {TIMELINE_ERAS.map((era) => (
               <button
                 key={era.id}
                 onClick={() => scrollToEra(era.id)}
                 className={cn(
                   "text-sm font-bold uppercase tracking-wider transition-colors whitespace-nowrap px-2 py-1 border-b-2",
                   activeEra === era.id 
                     ? "text-[#8B0000] border-[#8B0000]" 
                     : "text-gray-500 border-transparent hover:text-[#2C1810]"
                 )}
               >
                 {era.label}
               </button>
             ))}
          </div>
        </Container>
      </div>

      {/* Timeline Content */}
      <div className="bg-[#F9F9F9] py-16 md:py-24">
        <Container variant="content">
          <div className="space-y-24">
            {TIMELINE_ERAS.map((era) => {
              const events = TIMELINE_EVENTS.filter(e => e.era === era.id);
              if (events.length === 0) return null;

              return (
                <div key={era.id} id={`era-${era.id}`} className="scroll-mt-40">
                  <div className="flex items-center gap-4 mb-12">
                     <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-[#DAA520] opacity-30">
                       {era.label}
                     </Typography>
                     <div className="h-px bg-[#DAA520] flex-1 opacity-30"></div>
                  </div>

                  <div className="relative border-l-2 border-[#DAA520]/20 ml-4 md:ml-8 space-y-16">
                    {events.map((event, index) => (
                      <div key={index} className="relative pl-8 md:pl-12">
                        {/* Dot */}
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#8B0000] border-2 border-white shadow-sm ring-4 ring-[#F9F9F9]"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                          <div className="md:col-span-3">
                            <Typography variant="h3" className="!text-3xl text-[#2C1810] font-bold font-serif leading-none">
                              {event.year}
                            </Typography>
                          </div>
                          
                          <div className="md:col-span-9 bg-white p-0 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="w-full md:w-1/3 h-48 md:h-auto md:min-h-[200px] shrink-0 bg-gray-100 relative">
                               <ImageWithFallback 
                                 src={event.image} 
                                 alt={event.title}
                                 className="w-full h-full object-cover absolute inset-0"
                               />
                            </div>
                            
                            {/* Content Section */}
                            <div className="p-6 md:p-8 flex-1">
                              <Typography variant="h4" className="text-lg font-bold text-[#8B0000] mb-3 uppercase tracking-wide">
                                {event.title}
                              </Typography>
                              <Typography variant="body" className="text-gray-600 leading-relaxed">
                                {event.desc}
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </Layout>
  );
};

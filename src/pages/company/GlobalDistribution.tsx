import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { COLORS } from '../../constants/theme';
import { Hero } from '../../components/sections/Hero';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import heroImage from 'figma:asset/53ad55318578b57a7024344599003e99e78be983.png';

// Images
const IMG_EUROPE = "https://images.unsplash.com/photo-1655122199387-871085adb175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_AMERICAS = "https://images.unsplash.com/photo-1711069260590-9f3dec0b9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_ASIA = "https://images.unsplash.com/photo-1730800328482-38d2d44e0428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_MIDDLE_EAST = "https://images.unsplash.com/photo-1645023631503-fde4f0333d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_AFRICA = "https://images.unsplash.com/photo-1715092603558-8c6a08c9e111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_DUTY_FREE = "https://images.unsplash.com/photo-1594243390941-a9fb34cdcc5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const SECTIONS = [
  {
    id: 'europe',
    title: 'EUROPE',
    image: IMG_EUROPE,
    description: "KWV has a longstanding relationship with the European market. Roodeberg has become a household name in Sweden, where it is available in the liquor chain Systembolaget. This iconic brand is one marketed by volume for Systembolaget. KWV has been working with sales and marketing company Arvid Nordquist in Finland since 1992. KWV has been working with our partner for Eggers and Franke in Germany since the 1990s. Golden Kaan, KWV Wines and Roodeberg are amongst the top 10 South African brands in German food retail.",
    countries: ['Germany', 'Sweden', 'Finland', 'United Kingdom', 'Netherlands', 'Belgium', 'Switzerland']
  },
  {
    id: 'americas',
    title: 'NORTH & SOUTH AMERICA',
    image: IMG_AMERICAS,
    description: "We have recently established new partnerships in the USA, Brazil and Paraguay, which hold very exciting promise.",
    countries: ['USA', 'Canada', 'Brazil', 'Paraguay']
  },
  {
    id: 'asia',
    title: 'THE FAR EAST',
    image: IMG_ASIA,
    description: "KWV has been visiting and trading in Japan since 1988. Our KWV Classic range and Wild Africa Cream are particularly popular with Japanese consumers. In character battering China, we are successfully extending and entrenching foot hold distribution and sales for our KWV Wines, Laborie and Classic hay in key monnupoing.",
    countries: ['Japan', 'China', 'South Korea', 'Singapore', 'Taiwan']
  },
  {
    id: 'middle-east',
    title: 'THE MIDDLE EAST',
    image: IMG_MIDDLE_EAST,
    description: "KWV continues to expand its footprint across the Middle East, bringing premium South African wines and spirits to luxury hotels, resorts, and retailers throughout the region.",
    countries: ['UAE', 'Qatar', 'Bahrain', 'Oman']
  },
  {
    id: 'africa',
    title: 'AFRICA',
    image: IMG_AFRICA,
    description: "KWV still services its South African customers through its own sales team. Our KWV Brandy is bucking the trend of a declining category, while our KWV Classic wine is one of the fastest growing in the market. New partnerships have recently been formed in Angola, Nigeria and Kenya, with all markets showing strong growth for our brands.",
    countries: ['South Africa', 'Namibia', 'Botswana', 'Angola', 'Nigeria', 'Kenya', 'Zimbabwe']
  },
  {
    id: 'duty-free',
    title: 'GLOBAL DUTY FREE',
    image: IMG_DUTY_FREE,
    description: "Our presence in Global Duty Free continues to grow, offering international travelers the opportunity to experience the best of South African wine and brandy at major airports and travel hubs worldwide.",
    countries: ['Dubai Duty Free', 'Heathrow', 'Frankfurt', 'Schiphol', 'Singapore Changi']
  }
];

/**
 * GlobalDistribution Page Component
 * 
 * Showcases KWV's global footprint across various regions (Europe, Americas, Asia, etc.).
 * Features a sticky sub-navigation for easy jumping between regions.
 * Includes a country selector for each region (visual only in prototype).
 */
export const GlobalDistribution: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Hero 
        title=""
        subtitle=""
        imageSrc={heroImage}
        height="large"
        className="items-end pb-20"
      >
        <div className="text-center max-w-4xl mx-auto px-4 mb-12">
           <Typography variant="caption" className="uppercase tracking-widest text-white/80 mb-4">GLOBAL DISTRIBUTION</Typography>
           <Typography variant="h2" className="text-white text-2xl md:text-4xl font-bold leading-tight">
             KWV brands are distributed in over 100 markets globally, with KWV Wines and Spirits having been available in these markets as far back as the 1920s.
           </Typography>
        </div>
      </Hero>

      {/* Sticky Navigation */}
      <div className="sticky top-[80px] z-40 bg-[var(--twb-color-ink)] text-white border-b border-gray-800 shadow-md overflow-x-auto">
        <Container variant="site">
          <div className="flex items-center justify-start md:justify-center gap-4 md:gap-6 lg:gap-12 py-4 px-4 md:px-0">
             {SECTIONS.map((section) => (
               <button
                 key={section.id}
                 onClick={() => scrollToSection(section.id)}
                 className="text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[var(--twb-color-gold)] transition-colors whitespace-nowrap flex-shrink-0"
               >
                 {section.title}
               </button>
             ))}
          </div>
        </Container>
      </div>

      <div className="bg-white">
        {SECTIONS.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-32">
            {/* Image Banner */}
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative">
               <img 
                 src={section.image} 
                 alt={section.title}
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <Container variant="content" className="py-12 md:py-16 lg:py-24 text-center">
              <Typography variant="h2" className="text-[var(--twb-color-ink)] font-bold mb-6 md:mb-8 uppercase text-2xl md:text-3xl lg:text-4xl">
                {section.title}
              </Typography>
              
              <Typography variant="bodyLarge" className="text-gray-600 mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto">
                {section.description}
              </Typography>

              <div className="max-w-md mx-auto px-4 md:px-0">
                <Select>
                  <SelectTrigger className="w-full h-12 border-2 border-gray-300 rounded-none text-gray-500 font-bold uppercase tracking-wider bg-white">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {section.countries.map((country) => (
                      <SelectItem key={country} value={country.toLowerCase()}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </Container>
          </section>
        ))}
      </div>
    </Layout>
  );
};
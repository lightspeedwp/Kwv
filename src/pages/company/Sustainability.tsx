import React from 'react';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Layout } from '../../components/layout/Layout';
import { Button } from '../../components/common/Button';
import { COLORS } from '../../constants/theme';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Download, CheckCircle, Leaf, Droplets, Zap, Recycle, ShieldCheck } from 'lucide-react';

// Mock Data
const BENEFICIARIES = [
  { name: 'The Pebbles Project', color: '#FFD700', icon: '🤲' },
  { name: 'Khula Development Group', color: '#4169E1', icon: '🌱' },
  { name: 'Athlone House of Strength', color: '#DC143C', icon: '🏠' },
  { name: 'Paarl Youth Initiative', color: '#FFA500', icon: '🤝' },
  { name: 'Elevation Programme', color: '#8B0000', icon: '☀️' },
];

const ENTERPRISES = [
  { 
    name: 'Let’s Go Shuttle Service', 
    image: 'https://images.unsplash.com/photo-1729574730201-9a4d3ae70db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    type: 'Shuttle Service'
  },
  { 
    name: 'Fleet Coffee Company', 
    image: 'https://images.unsplash.com/photo-1630439924740-b7cf5e98e7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    type: 'Barista-style Coffee Bar'
  },
];

const CERTIFICATIONS = [
  { area: 'PAARL', code: 'SANS 1841', body: 'NRCS', desc: 'Control of the quantity of contents in pre-packed packages (E-mark)' },
  { area: '', code: 'BRCGS', body: 'PROCERT', desc: 'British Retail Consortium Global Standard for Food Safety' },
  { area: '', code: 'IFS', body: 'PROCERT', desc: 'International Featured Standard (IFS) Food (version 6.1)' },
  { area: '', code: 'R 638', body: 'CAPE WINELANDS DISTRICT MUNICIPALITY', desc: 'Paarl – Certificate of acceptability for food premises' },
  { area: '', code: 'IPW', body: 'ENVIROSCIENTIFIC', desc: 'Integrated Production of Wine – KWV Cellar' },
  { area: '', code: 'KOSHER', body: 'BETH-DIN', desc: 'Kashrut Certificate' },
  { area: '', code: 'WOOLWORTHS', body: 'IBL', desc: 'Woolworths Wine Production and Hygiene Standard' },
  { area: '', code: 'ALDI', body: 'AIB International', desc: 'Aldi UK supplier audit' },
  { area: '', code: 'WIETA', body: 'NSF', desc: 'Wine Industry Ethical Trade Association' },
  { area: '', code: 'BSCI', body: 'UL', desc: 'Business Social Compliance Initiative' },
  { area: '', code: 'FAIRTRADE', body: 'FLO-CERT', desc: 'Fairtrade trader standard' },
  { area: '', code: 'WALMART', body: 'UL', desc: 'Supply Chain Security Audit' },
  { area: '', code: 'ROUTE C', body: 'SGS / Bureau Veritas', desc: 'Statement of licensure – Pre-export verification of conformity' },
  { area: 'WORCESTER', code: 'FSSC', body: 'PROCERT', desc: 'Food Safety Management Systems' },
  { area: '', code: 'R638', body: 'CAPE WINELANDS DISTRICT MUNICIPALITY', desc: 'Certificate of acceptability for food premises' },
];

/**
 * Sustainability Page Component
 * 
 * Comprehensive overview of KWV's sustainability initiatives.
 * Sections:
 * - Overview (Pillars).
 * - Integrity & Sustainability Seal.
 * - Social Sustainability (Socio-Economic & Enterprise Development).
 * - Environmental Sustainability (Carbon footprint, Water, Energy).
 * - Detailed Certification Table.
 */
export const Sustainability: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] md:min-h-[500px] w-full">
         <ImageWithFallback 
            src="https://images.unsplash.com/photo-1745657921940-d77b72096c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
            alt="Sustainability at KWV" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-black/40" />
         
         {/* Breadcrumbs are handled by Layout/BreadcrumbsBar but we might need to adjust App.tsx for correct path */}
         
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <Typography variant="caption" className="text-[#DAA520] uppercase tracking-widest font-bold mb-4">
               Sustainability
            </Typography>
            <Typography variant="h1" className="text-white text-2xl md:text-5xl lg:text-6xl font-serif max-w-5xl leading-tight">
               KWV is committed to make an impactful contribution to South Africa and its citizens.
            </Typography>
         </div>
      </div>

      {/* Overview Section */}
      <div className="py-12 md:py-20 bg-white">
        <Container variant="content" className="text-center">
          <Typography variant="h2" className="text-[#2C1810] uppercase tracking-widest mb-6 text-2xl font-bold">
            Sustainability Overview
          </Typography>
          <Typography variant="h3" className="text-[#DAA520] font-serif italic text-3xl mb-8">
            KWV’s three sustainability pillars
          </Typography>
          
          <div className="text-gray-600 space-y-6 leading-relaxed text-lg">
             <p>
                Human integrity, social equality and environmental protection are essential issues for businesses. A greater onus rests on businesses to act in a sustainable matter. KWV exemplifies this principle.
             </p>
             <p>
                KWV does this through sustainable business practices that serve and protect the future of our planet, while respecting human rights with fair labour practices and empowerment programmes.
             </p>
          </div>

          <div className="mt-16 text-left">
             <Typography variant="h4" className="text-[#2C1810] font-bold uppercase mb-4">Corporate social investment</Typography>
             <p className="text-gray-600 leading-relaxed mb-6">
                KWV is committed to the empowerment, development and upliftment of the communities in which it operates. Through both enterprise and socio-economic development, KWV strives to invest in initiatives that focusses on every stage of the lifecycle in order to create sustainable citizens. Focussing on a sustainable future, KWV sees it as its corporate social responsibility to develop sustainable citizens, while maintaining ethical and fair working conditions for all its employees in agriculture, and ensuring that we strive for green, environmentally friendly practices in all working environments – from the land to the cellar and to our boardrooms.
             </p>
          </div>
        </Container>
      </div>

      {/* Integrity Section */}
      <div className="bg-[#F9F9F9] py-12 md:py-16">
         <Container variant="site">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-gray-200 bg-white p-6 md:p-12 shadow-sm">
               <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-48 h-48 md:w-64 md:h-64">
                     <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1579678887674-33cf1809f5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                        alt="Integrity & Sustainability Seal"
                        className="w-full h-full object-contain grayscale"
                     />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-center bg-white/80 p-2">SEAL PLACEHOLDER</span>
                     </div>
                  </div>
               </div>
               <div className="w-full md:w-2/3">
                  <Typography variant="h3" className="text-[#2C1810] font-bold mb-2">Integrity & sustainability</Typography>
                  <Typography variant="caption" className="text-[#DAA520] font-bold uppercase mb-4 block">To read more about Wines of South Africa, click here.</Typography>
                  
                  <div className="h-1 w-20 bg-[#DAA520] mb-6"></div>
                  
                  <Typography variant="h4" className="text-[#2C1810] font-serif italic text-xl md:text-2xl mb-4">Integrity & sustainability seal explained</Typography>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                     Sustainable Wine South Africa (SWSA) is the alliance between the Wine and Spirit Board (WSB), the Integrated Production of Wine (IPW) scheme, the Biodiversity & Wine Initiative (BWI) and Wines of South Africa (WOSA). Together these organisations are driving the South African wine industry’s commitment to sustainable, eco-friendly production.
                  </p>
                  
                  <Button className="bg-[#C5A059] hover:bg-[#B08D45] text-white border-none rounded-none w-full md:w-auto px-6 py-3 uppercase tracking-wider font-bold text-xs md:text-sm flex items-center justify-center gap-2 whitespace-normal h-auto">
                     <Download size={18} className="shrink-0" /> Download Our Sustainability Summary
                  </Button>
               </div>
            </div>
         </Container>
      </div>

      {/* Social Sustainability - Socio Economic */}
      <div className="py-12 md:py-20 bg-white">
         {/* Divider Image */}
         <div className="w-full h-[200px] md:h-[300px] mb-8 md:mb-16 overflow-hidden">
            <ImageWithFallback 
               src="https://images.unsplash.com/photo-1761839257961-4dce65b72d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
               alt="Vineyard Aerial"
               className="w-full h-full object-cover"
            />
         </div>

         <Container variant="content">
            <div className="text-center mb-16">
               <Typography variant="h2" className="text-[#2C1810] uppercase tracking-widest text-2xl font-bold mb-4">
                  SOCIAL SUSTAINABILITY: SOCIO-ECONOMIC DEVELOPMENT
               </Typography>
               <div className="h-1 w-20 bg-[#DAA520] mx-auto mb-8"></div>
               
               <p className="text-gray-600 mb-6 text-left">
                  The KWV Foundation partners with Valcare as our social investment managers, to ensure optimal social impact in the communities within the Cape Winelands. Through Valcare, we support a range of registered non-profit organisations who run credible initiatives to improve the lives of vulnerable people.
               </p>
               <p className="text-gray-600 mb-6 text-left">
                  The KWV Foundation has three sustainability pillars to support every stage of the human life cycle, in order to create sustainable citizens. By partnering with Valcare and our member non-profit organisations, The KWV Foundation has the opportunity to invest in a number of credible community initiatives to enable social impact in each of these cycles.
               </p>
               
               <Typography variant="h4" className="text-[#2C1810] font-bold text-left mt-8 mb-4">The KWV Foundation beneficiary projects currently include:</Typography>
            </div>

            {/* Beneficiaries Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
               {BENEFICIARIES.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-6 border border-gray-100 hover:shadow-lg transition-shadow bg-white h-48 text-center group">
                     <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                     <Typography variant="caption" className="font-bold text-[#2C1810] uppercase text-xs">
                        {item.name}
                     </Typography>
                  </div>
               ))}
            </div>
         </Container>
      </div>

      {/* Social Sustainability - Enterprise */}
      <div className="bg-[#FDFBF7] py-12 md:py-20">
         <Container variant="content" className="text-center">
            <Typography variant="h2" className="text-[#2C1810] uppercase tracking-widest text-2xl font-bold mb-4">
               SOCIAL SUSTAINABILITY: ENTERPRISE & SUPPLIER DEVELOPMENT
            </Typography>
            <div className="h-1 w-20 bg-[#DAA520] mx-auto mb-8"></div>
            
            <p className="text-gray-600 mb-12">
               KWV is actively involved in the empowerment of people through enterprise development. Two enterprises that have grown into fully fledged businesses include LET’s GO Shuttle Services, as well as Fleet Coffee Company, a barista-style coffee bar which empowers unemployed youth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
               {ENTERPRISES.map((ent, idx) => (
                  <div key={idx} className="bg-white p-4 shadow-md group">
                     <div className="h-64 overflow-hidden mb-6 relative">
                        <ImageWithFallback 
                           src={ent.image}
                           alt={ent.name}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                     </div>
                     <Typography variant="h3" className="font-serif italic text-2xl text-[#2C1810] mb-2">{ent.name}</Typography>
                     <Typography variant="caption" className="text-[#DAA520] uppercase tracking-widest font-bold">{ent.type}</Typography>
                  </div>
               ))}
            </div>
         </Container>
      </div>

      {/* Environment Sustainability */}
      <div className="py-12 md:py-20 bg-white">
         {/* Divider Image */}
         <div className="w-full h-[200px] md:h-[300px] mb-8 md:mb-16 overflow-hidden">
            <ImageWithFallback 
               src="https://images.unsplash.com/photo-1689682609878-971c0b1f86b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
               alt="Vine Roots"
               className="w-full h-full object-cover"
            />
         </div>

         <Container variant="content">
            <div className="text-center mb-12">
               <Typography variant="caption" className="text-[#DAA520] uppercase tracking-widest font-bold mb-2">Sustainability</Typography>
               <Typography variant="h2" className="text-[#2C1810] font-serif italic text-3xl md:text-4xl mb-6">
                  KWV is driven by a mandate to make an impactful contribution to South Africa and its citizens.
               </Typography>
            </div>

            <div className="space-y-12 text-gray-600 leading-relaxed">
               <div>
                  <Typography variant="h3" className="text-[#2C1810] font-bold uppercase text-xl mb-4 flex items-center gap-2">
                     <Leaf className="text-[#DAA520]" size={24} /> Environment Sustainability
                  </Typography>
                  <p className="mb-4">
                     KWV is fully committed to a green future, and endeavours to ensure this sustainable approach is followed right through its supply chain. To further this goal, KWV’s emphasises the necessity of a lower carbon footprint with its suppliers, most of which have committed green practices in place.
                  </p>
                  <p className="mb-4">
                     A major step to lower KWV’s carbon footprint has been the introduction of lightweight glass, which reduces raw material usage, emissions, overall weight and energy consumption. Lightweight glass is now used in most of KWV’s mass ranges.
                  </p>
                  <p>
                     KWV is also a member of the Forest Stewardship Council (FSC). By subscribing to the FSC, KWV assures that its products such as wood and paper have been harvested in a socially and environmentally responsible manner.
                  </p>
               </div>

               <div className="bg-[#F9F9F9] p-8 border-l-4 border-[#DAA520]">
                  <Typography variant="h4" className="text-[#2C1810] font-bold mb-4">Adjustments to reduce environmental impact include:</Typography>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {[
                        "Glass recycling as part of The Glass Recycling Company",
                        "Replacement of incandescent light bulbs with energy saving bulbs",
                        "Electricity generation from KWV’s own 50KWP solar power plant",
                        "Using HFO fuel to generate steam in Paarl",
                        "Using borehole water",
                        "Reducing use of paper with digital solutions",
                        "Optimised routing models that save on fuel usage"
                     ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                           <CheckCircle className="text-[#DAA520] shrink-0 mt-1" size={16} />
                           <span>{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <Typography variant="h3" className="text-[#2C1810] font-bold uppercase text-xl mb-4 flex items-center gap-2">
                     <Recycle className="text-[#DAA520]" size={24} /> Biodiversity
                  </Typography>
                  <p>
                     KWV successfully passed both IPW and Biodiversity Wine Initiative (BWI) audits in 2017. Since then KWV has made IPW compliance a requirement in our grape and bulk wine procurement for all our grape farmers and bulk wine cellars.
                  </p>
               </div>

               <div>
                  <Typography variant="h3" className="text-[#2C1810] font-bold uppercase text-xl mb-4 flex items-center gap-2">
                     <Zap className="text-[#DAA520]" size={24} /> Water and Energy Management
                  </Typography>
                  <p className="mb-4">
                     The group installed real-time monitoring devices on electricity, water distribution networks and steam generation at the KWV production site in Paarl. The monitoring devices have been used to establish a consumption baseline for energy and water consumption.
                  </p>
                  <p>
                     KWV continues investigating and implementing techniques and technologies to improve operational efficiencies and, in the process, reducing the impact of its carbon footprint and fossil fuel consumption.
                  </p>
               </div>

               <div>
                  <Typography variant="h3" className="text-[#2C1810] font-bold uppercase text-xl mb-4 flex items-center gap-2">
                     <Droplets className="text-[#DAA520]" size={24} /> Effluent Treatment
                  </Typography>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                        <strong className="block text-[#2C1810] mb-2 uppercase">Paarl</strong>
                        <p className="text-sm">
                           As prescribed by the Drakenstein Municipality Water Supply, Sanitation Services and Industrial Effluent By-law, KWV applied for and obtained an Industrial Effluent Disposal permit which is valid for a period of five years.
                        </p>
                     </div>
                     <div>
                        <strong className="block text-[#2C1810] mb-2 uppercase">Worcester</strong>
                        <p className="text-sm">
                           Solamoyo Processing Company operates our effluent disposal project. KWV Worcester invested in a decanter unit which extracts solid particles from the distilling effluent water stream.
                        </p>
                     </div>
                  </div>
               </div>
               
               <div>
                  <Typography variant="h3" className="text-[#2C1810] font-bold uppercase text-xl mb-4 flex items-center gap-2">
                     <ShieldCheck className="text-[#DAA520]" size={24} /> Safety and Process Risk Management
                  </Typography>
                  <p>
                     KWV has realigned the safety and risk management structure of the group to ensure compliance with updates to legislation. The EHS Risks within all departments as well as the Security Risks are continuously evaluated.
                  </p>
               </div>
            </div>
         </Container>
      </div>

      {/* Certification Summary */}
      <div className="bg-[#F5F5DC] py-12 md:py-20">
         <Container variant="site">
            <Typography variant="h2" className="text-[#2C1810] text-center uppercase tracking-widest text-2xl font-bold mb-8 md:mb-12">
               Certification Summary
            </Typography>

            <div className="bg-white overflow-hidden shadow-sm border border-gray-200">
               {/* Header - Hidden on Mobile */}
               <div className="hidden md:grid grid-cols-12 bg-[#2C1810] text-white font-bold uppercase text-xs md:text-sm tracking-wider">
                  <div className="col-span-2 p-4">Area</div>
                  <div className="col-span-2 p-4 border-l border-white/20">Code</div>
                  <div className="col-span-8 p-4 border-l border-white/20">Certification Body / Description</div>
               </div>
               
               {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className={`grid grid-cols-1 md:grid-cols-12 text-sm text-gray-700 border-b border-gray-100 last:border-0 hover:bg-gray-50 ${cert.area ? 'bg-gray-50 font-medium' : ''}`}>
                     
                     {/* Mobile Labels are added for context or we just stack them nicely */}
                     <div className="md:col-span-2 p-3 md:p-4 font-bold text-[#2C1810] uppercase flex justify-between md:block">
                        <span className="md:hidden text-xs text-gray-400 font-normal">Area</span>
                        {cert.area || <span className="text-gray-300 italic md:hidden">N/A</span>}
                     </div>
                     
                     <div className="md:col-span-2 p-3 md:p-4 border-t md:border-t-0 md:border-l border-gray-100 font-mono text-[#DAA520] flex justify-between md:block">
                        <span className="md:hidden text-xs text-gray-400 font-normal font-sans">Code</span>
                        {cert.code}
                     </div>
                     
                     <div className="md:col-span-8 p-3 md:p-4 border-t md:border-t-0 md:border-l border-gray-100">
                         <div className="md:hidden text-xs text-gray-400 font-normal mb-1">Details</div>
                        <span className="font-bold text-[#2C1810] block">{cert.body}</span>
                        {cert.desc && <span className="block text-gray-500 text-xs mt-1">{cert.desc}</span>}
                     </div>
                  </div>
               ))}
            </div>
         </Container>
      </div>

      {/* Landscape Footer Image */}
      <div className="w-full h-[400px]">
         <ImageWithFallback 
            src="https://images.unsplash.com/photo-1745426867834-d6d3bf080195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="KWV Landscape"
            className="w-full h-full object-cover"
         />
      </div>
    </Layout>
  );
};

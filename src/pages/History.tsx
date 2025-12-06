import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { COLORS } from '../constants/theme';
import { Hero } from '../components/sections/Hero';
import { FAQSection } from '../components/sections/FAQSection';

const TIMELINE = [
  { year: '1918', title: 'Establishment', description: 'KWV is founded as a cooperative of wine farmers in South Africa.' },
  { year: '1926', title: 'Brandy Production', description: 'The first brandy is distilled, laying the foundation for KWV\'s award-winning spirits.' },
  { year: '1949', title: 'Roodeberg Launch', description: 'The iconic Roodeberg red blend is launched, becoming a symbol of South African wine.' },
  { year: '1990s', title: 'Global Expansion', description: 'With the end of Apartheid, KWV expands its export markets to the world.' },
  { year: '2016', title: 'New Era', description: 'Vasari Global acquires KWV, signaling a new chapter of growth and innovation.' },
];

export const History = () => {
  return (
    <Layout>
      <Hero 
        title="Our History" 
        subtitle="Over a century of craftsmanship and heritage."
        imageSrc="https://images.unsplash.com/photo-1701596061179-9c54d9a9eaa5?auto=format&fit=crop&q=80"
        height="medium"
      />

      <section className="py-20 relative">
        <Container variant="content">
           <div className="relative border-l-2 border-[#DAA520] ml-4 md:ml-0 md:pl-12 space-y-16">
             {TIMELINE.map((event, index) => (
               <div key={event.year} className="relative pl-8 md:pl-0">
                 {/* Dot */}
                 <div className="absolute -left-[9px] md:-left-[53px] top-2 w-4 h-4 rounded-full bg-[#8B0000] border-2 border-white shadow-sm"></div>
                 
                 <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                   <div className="md:w-32 flex-shrink-0">
                     <Typography variant="h2" className="!text-4xl text-[#DAA520] font-bold">{event.year}</Typography>
                   </div>
                   <div>
                     <Typography variant="h3" className="mb-2">{event.title}</Typography>
                     <Typography variant="body" className="text-gray-600">{event.description}</Typography>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </Container>
      </section>

      <FAQSection items={[
        { question: "Who was Dr. Charles Kohler?", answer: "Dr. Charles Kohler was the visionary founder who united wine farmers in 1918 to form KWV, stabilizing the industry." },
        { question: "When did KWV start exporting?", answer: "KWV began exporting fairly early in its history, but global distribution expanded significantly post-1990." },
        { question: "What is the Cathedral Cellar?", answer: "Built in 1930, the Cathedral Cellar is our historic barrel cellar in Paarl, featuring an impressive vaulted roof and giant carved vats." }
      ]} />
    </Layout>
  );
};

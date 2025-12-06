import React from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Layout } from '../components/layout/Layout';
import { COLORS } from '../constants/theme';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Briefcase, Globe, Users, Wine } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ScrollDownArrow } from '../components/common/ScrollDownArrow';
import { FAQSection } from '../components/sections/FAQSection';

const SECTIONS = [
  {
    title: 'Our History',
    path: '/history',
    icon: BookOpen,
    desc: 'Tracing our roots back to 1918, discover the milestones that shaped KWV into a global icon.',
    image: 'https://images.unsplash.com/photo-1560170433-10c9259186a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    title: 'Awards & Accolades',
    path: '/awards',
    icon: Award,
    desc: 'A testament to our quality, view our recent achievements on the international stage.',
    image: 'https://images.unsplash.com/photo-1579963333765-b4129b3250aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    title: 'Our Brands',
    path: '/brands',
    icon: Wine,
    desc: 'Explore our diverse portfolio of celebrated wines and spirits.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    title: 'Executive Team',
    path: '/executive-team',
    icon: Users,
    desc: 'Meet the leadership team driving our vision and strategy forward.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    title: 'Sustainability',
    path: '/sustainability',
    icon: Globe,
    desc: 'Our commitment to the environment, ethical farming, and community development.',
    image: 'https://images.unsplash.com/photo-1505217600922-07d3d904e1a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    title: 'Careers',
    path: '/careers',
    icon: Briefcase,
    desc: 'Join our team and be a part of our legacy of excellence.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  }
];

export const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#2C1810]">
        <div className="absolute inset-0 opacity-50">
          <ImageWithFallback
             src="https://images.unsplash.com/photo-1464638681273-0962e9b53566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
             alt="Vineyard Landscape"
             className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <Typography variant="h1" color={COLORS.white} className="mb-6">Our Company</Typography>
          <Typography variant="bodyLarge" color={COLORS.beige}>
            KWV is one of the leading wine and spirits producers in South Africa, with a distinguished heritage of product innovation and exceptional brands.
          </Typography>
        </div>
        <ScrollDownArrow targetId="hub-grid" />
      </div>

      {/* Hub Grid */}
      <Container variant="site" className="py-20" id="hub-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECTIONS.map((section, index) => (
            <Link to={section.path} key={index} className="group block bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden rounded-sm">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#2C1810]/20 group-hover:bg-[#2C1810]/10 transition-colors" />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-[#8B0000] shadow-md">
                  <section.icon size={20} />
                </div>
              </div>
              <div className="p-8">
                <Typography variant="h3" color={COLORS.wineRed} className="mb-3 group-hover:text-[#DAA520] transition-colors">
                  {section.title}
                </Typography>
                <Typography variant="body" className="text-gray-600 mb-6">
                  {section.desc}
                </Typography>
                <div className="flex items-center text-[#2C1810] font-medium uppercase tracking-wider text-sm">
                  Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      <FAQSection items={[
        { question: "What does KWV stand for?", answer: "KWV stands for <strong>Koöperatieve Wijnbouwers Vereeniging</strong>. It was founded in 1918." },
        { question: "Where is KWV located?", answer: "Our headquarters and main production facilities are located in Paarl, in the heart of the Cape Winelands, South Africa." },
        { question: "Is KWV still a cooperative?", answer: "No, KWV converted from a cooperative to a private company in 2002 and is now a commercially driven entity." }
      ]} />
    </Layout>
  );
};

import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { Button } from '../../components/common/Button';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router';

// Data derived from the user request
const TEAM_MEMBERS = [
  { 
    name: 'John Loomes', 
    title: 'CHIEF EXECUTIVE OFFICER', 
    image: 'https://images.unsplash.com/photo-1627776880085-8070322d8298?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    name: 'Daniël Smit', 
    title: 'DIRECTOR', 
    subtitle: 'Finance and Group Services', 
    image: 'https://images.unsplash.com/photo-1751568126273-99a28a11c1a4?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    name: 'Kay Pillay', 
    title: 'EXECUTIVE', 
    subtitle: 'International Sales', 
    image: 'https://images.unsplash.com/photo-1695037642839-ad92d088ce98?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    name: 'Jan de Wet', 
    title: 'EXECUTIVE', 
    subtitle: 'Sales South Africa', 
    image: 'https://images.unsplash.com/photo-1707742453461-6855f0b8238c?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    name: 'Nuno Fernandes', 
    title: 'EXECUTIVE', 
    subtitle: 'Marketing Spirits & Liqueurs', 
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    name: 'Johan Gericke', 
    title: 'EXECUTIVE', 
    subtitle: 'Strategic Projects & Bulk', 
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    name: 'Kobus Prins', 
    title: 'EXECUTIVE', 
    subtitle: 'Operations', 
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    name: 'Ahnel Wright', 
    title: 'EXECUTIVE', 
    subtitle: 'Human Resources', 
    image: 'https://images.unsplash.com/photo-1701286842710-5f37edc4b8b4?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    name: 'Sarah Mansfield', 
    title: 'EXECUTIVE', 
    subtitle: 'Marketing Wine', 
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600' 
  },
];

/**
 * ExecutiveTeam Page Component
 * 
 * Displays the KWV executive leadership team.
 * Uses a grid of profile cards with images and titles.
 */
export const ExecutiveTeam: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Top Image Section */}
      <div className="w-full h-[50vh] md:h-[70vh] relative">
         <ImageWithFallback 
           src="https://images.unsplash.com/photo-1662309376204-8d6bef792ade?auto=format&fit=crop&q=80&w=1920"
           alt="KWV Building"
           className="w-full h-full object-cover"
         />
      </div>

      <Container variant="site" className="py-16 md:py-24">
        {/* Intro Text */}
        <div className="text-center max-w-4xl mx-auto mb-20">
           <Typography variant="caption" className="uppercase tracking-widest text-gray-500 mb-4 block">
              Our Executive Team
           </Typography>
           <Typography variant="h2" className="text-[#2C1810] font-bold text-3xl md:text-5xl leading-tight">
              KWV leads with a dynamic team of industry professionals and experts.
           </Typography>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
           {TEAM_MEMBERS.map((member, idx) => (
             <div key={idx} className="flex flex-col items-center text-center">
                {/* Image - Black and White Filter */}
                <div className="w-full aspect-[4/5] md:aspect-square overflow-hidden mb-6 bg-gray-100 grayscale hover:grayscale-0 transition-all duration-500">
                   <ImageWithFallback 
                     src={member.image}
                     alt={member.name}
                     className="w-full h-full object-cover"
                   />
                </div>
                
                {/* Text */}
                <Typography variant="caption" className="uppercase tracking-widest text-gray-600 text-xs mb-1">
                   {member.title}
                </Typography>
                
                {member.subtitle && (
                  <Typography variant="caption" className="text-gray-500 text-xs mb-1">
                     {member.subtitle}
                  </Typography>
                )}

                <Typography variant="h4" className="text-[#2C1810] font-bold mt-1 text-xl">
                   {member.name}
                </Typography>
             </div>
           ))}
        </div>

        {/* Shop Button */}
        <div className="mt-24 text-center">
           <Button 
             onClick={() => navigate('/shop')}
             className="bg-[#C5A059] text-white hover:bg-[#B08D45] border-none px-12 py-4 uppercase font-bold tracking-widest text-sm rounded-none shadow-md"
           >
              Shop KWV
           </Button>
        </div>

      </Container>
    </Layout>
  );
};
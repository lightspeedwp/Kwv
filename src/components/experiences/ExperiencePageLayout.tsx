import React from 'react';
import { Layout } from '../layout/Layout';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface PricingItem {
  name: string;
  price?: string;
  description?: string;
  subItems?: string[];
}

export interface PricingSection {
  title: string;
  items: PricingItem[];
}

export interface ExperiencePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroDescription: string;
  ctaText?: string;
  ctaLink?: string;
  galleryImages: string[];
  mainContent: React.ReactNode;
  pricingSections?: PricingSection[];
  pairings?: PricingSection[]; // Similar structure
  infoSection?: {
    availableFrom?: string[];
    hours?: string[];
    address?: string[];
  };
  contact?: {
    tel?: string;
    email?: string;
  };
}

export const ExperiencePageLayout: React.FC<ExperiencePageProps> = ({
  title,
  subtitle,
  heroImage,
  heroDescription,
  ctaText = "BOOK NOW",
  ctaLink = "#",
  galleryImages,
  mainContent,
  pricingSections,
  pairings,
  infoSection,
}) => {
  const navigate = useNavigate();

  return (
    <Layout variant="experiences">
      {/* Hero Section */}
      <div className="relative w-full bg-black text-white">
        {/* Hero Background - Solid Black as per request */}
        <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center bg-black">
            
            {/* Hero Content Overlay */}
            <div className="flex flex-col items-center justify-center text-center p-6 max-w-4xl mx-auto z-10">
                {/* Logo Area - Simplified as text/shield for now if no specific logo provided */}
                <div className="mb-6 border border-white/30 p-4 bg-white/10 backdrop-blur-sm">
                    <div className="text-2xl font-serif font-bold tracking-widest uppercase">{title}</div>
                </div>

                <Typography variant="h1" className="text-[#DAA520] font-light text-sm tracking-[0.2em] mb-2 uppercase">
                    EXPERIENCE
                </Typography>
                
                <Typography variant="h2" className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 uppercase tracking-wider text-white">
                    {subtitle}
                </Typography>

                <p className="max-w-2xl text-sm md:text-base mb-8 text-gray-200 leading-relaxed font-light">
                    {heroDescription}
                </p>

                {ctaLink && (
                    <Button 
                        onClick={() => navigate(ctaLink)}
                        variant="heroGold"
                        className="hover:!bg-[#b08d4a] text-white border-none"
                    >
                        {ctaText}
                    </Button>
                )}
            </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
          {galleryImages.slice(0, 3).map((img, idx) => (
              <div key={idx} className="aspect-[4/3] w-full relative">
                  <ImageWithFallback src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
              </div>
          ))}
      </div>

      {/* Main Content Section */}
      <section className="py-16 bg-white text-center">
          <Container variant="content">
              <div className="text-gray-600 leading-relaxed space-y-6">
                  {mainContent}
              </div>
          </Container>
      </section>

      {/* Pricing / Menu Sections */}
      {(pricingSections || pairings) && (
          <section className="py-12 bg-[#FFFCF5] text-center">
              <Container variant="content">
                  
                  {/* Standard Pricing */}
                  {pricingSections?.map((section, idx) => (
                      <div key={idx} className="mb-12">
                          <Typography variant="h3" className="text-[#2C1810] text-3xl font-serif font-bold uppercase mb-8">
                              {section.title}
                          </Typography>
                          
                          <div className="space-y-8">
                              {section.items.map((item, itemIdx) => (
                                  <div key={itemIdx} className="flex flex-col items-center">
                                      <h4 className="text-[#DAA520] font-bold uppercase tracking-widest text-lg mb-2">
                                          {item.name} {item.price && `- ${item.price}`}
                                      </h4>
                                      {item.description && (
                                          <p className="text-gray-500 uppercase text-xs tracking-wider mb-2">{item.description}</p>
                                      )}
                                      {item.subItems && (
                                          <div className="text-gray-600 text-sm italic">
                                              {item.subItems.map((sub, i) => (
                                                  <div key={i}>{sub}</div>
                                              ))}
                                          </div>
                                      )}
                                  </div>
                              ))}
                          </div>
                      </div>
                  ))}

                  {/* Pairings */}
                  {pairings && pairings.length > 0 && (
                      <div className="mt-16">
                          <Typography variant="h3" className="text-[#2C1810] text-3xl font-serif font-bold uppercase mb-8">
                              PAIRINGS
                          </Typography>
                          {pairings.map((section, idx) => (
                               <div key={idx} className="space-y-8 mb-12">
                                  {section.items.map((item, itemIdx) => (
                                      <div key={itemIdx} className="flex flex-col items-center">
                                          <h4 className="text-[#DAA520] font-bold uppercase tracking-widest text-lg mb-2">
                                              {item.name} {item.price && `- ${item.price}`}
                                          </h4>
                                          {item.description && (
                                              <p className="text-gray-500 text-sm max-w-lg mx-auto mb-1">{item.description}</p>
                                          )}
                                          {item.subItems && (
                                              <div className="text-gray-500 text-xs italic mt-1">
                                                  {item.subItems.map((sub, i) => (
                                                      <div key={i}>{sub}</div>
                                                  ))}
                                              </div>
                                          )}
                                      </div>
                                  ))}
                               </div>
                          ))}
                      </div>
                  )}

                  {/* Info Section */}
                  {infoSection && (
                      <div className="mt-16 pt-12 border-t border-gray-200">
                           <Typography variant="h4" className="text-[#2C1810] font-bold uppercase tracking-widest text-xl mb-6">
                               TASTINGS ARE AVAILABLE FROM:
                           </Typography>
                           
                           {infoSection.availableFrom && (
                               <div className="mb-6 text-sm text-gray-600 uppercase tracking-wide">
                                   {infoSection.availableFrom.map((line, i) => <div key={i}>{line}</div>)}
                               </div>
                           )}

                           {infoSection.hours && (
                               <div className="mb-6 text-sm text-gray-600 font-bold uppercase tracking-wide">
                                   {infoSection.hours.map((line, i) => <div key={i}>{line}</div>)}
                               </div>
                           )}
                           
                           {infoSection.address && (
                               <div className="text-sm text-gray-600 uppercase tracking-wide">
                                   {infoSection.address.map((line, i) => <div key={i}>{line}</div>)}
                               </div>
                           )}
                      </div>
                  )}

                  {/* Social Share */}
                  <div className="mt-20 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] mb-4">
                          <Instagram size={24} />
                      </div>
                      <Typography variant="h5" className="text-[#2C1810] font-bold uppercase tracking-widest text-sm">
                          SHARE YOUR EXPERIENCES AND ADVENTURES WITH {title}
                      </Typography>
                      <p className="text-[#DAA520] text-xs font-bold uppercase tracking-widest mt-2">
                          #KWVONLINE #KWVEXPERIENCES #{title.replace(/\s+/g, '')}
                      </p>
                  </div>

              </Container>
          </section>
      )}
    </Layout>
  );
};

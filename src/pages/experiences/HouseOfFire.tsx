import React from 'react';
import { ExperiencePageLayout, PricingSection } from '../../components/experiences/ExperiencePageLayout';

const EXPERIENCES: PricingSection[] = [
  {
    title: 'BRANDY EXPERIENCES',
    items: [
      {
        name: 'BRANDY BLENDING EXPERIENCE',
        price: 'R1500',
        description: 'Create your own blend',
        subItems: ['Guided by our brandy master', 'Bottle your own creation', 'Personalised label', 'Includes canapés']
      },
      {
        name: 'CHOCOLATE & BRANDY PAIRING',
        price: 'R180',
        description: 'Decadent pairing',
        subItems: ['KWV 10yr, 12yr, 15yr & 20yr', 'Artisan chocolates']
      }
    ]
  }
];

/**
 * HouseOfFire Page Component
 * 
 * Highlights the brandy distillation experience.
 * Features Brandy Blending experiences and Chocolate & Brandy pairings.
 */
export const HouseOfFire: React.FC = () => {
  return (
    <ExperiencePageLayout
      title="HOUSE OF FIRE"
      subtitle="IGNITE YOUR SENSES"
      heroImage="https://images.unsplash.com/photo-1613325245242-1c5069a82383?auto=format&fit=crop&q=80"
      heroDescription="The House of Fire is where our award-winning brandies are distilled. It is a place of alchemy, patience, and craftsmanship."
      ctaText="VISIT HOF"
      ctaLink="/contact"
      galleryImages={[
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560146039-44567269168f?auto=format&fit=crop&q=80"
      ]}
      pricingSections={EXPERIENCES}
      infoSection={{
        availableFrom: ['Bookings Essential'],
        hours: ['Monday - Friday', '09h00 - 17h00'],
        address: ['KWV Production Complex', 'Main Road', 'Paarl']
      }}
      mainContent={
        <>
            <p>
                The House of Fire gets its name from the copper pot stills that glow when they are fired up to distil the base wine into spirit. It is here that the heart of our world-champion brandies is born.
            </p>
            <p>
               Join us for an exclusive tour of the distillery and learn about the double distillation process that makes South African brandy unique.
            </p>
        </>
      }
    />
  );
};

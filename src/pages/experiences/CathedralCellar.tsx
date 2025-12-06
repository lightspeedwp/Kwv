import React from 'react';
import { ExperiencePageLayout, PricingSection } from '../../components/experiences/ExperiencePageLayout';

const TOUR_PRICES: PricingSection[] = [
  {
    title: 'TOURS',
    items: [
      {
        name: 'CATHEDRAL CELLAR TOUR',
        price: 'R100',
        description: 'Duration: 75 Minutes',
        subItems: ['Includes a tour of the historic cellar', 'Tasting of 4 wines', 'Viewing of the Big Five Vats']
      },
      {
        name: 'PRIVATE TOUR',
        price: 'R200',
        description: 'Duration: 90 Minutes',
        subItems: ['Exclusive guide', 'Premium tasting', 'History talk']
      }
    ]
  }
];

export const CathedralCellar: React.FC = () => {
  return (
    <ExperiencePageLayout
      title="CATHEDRAL CELLAR"
      subtitle="A LEGACY ENGRAVED"
      heroImage="https://images.unsplash.com/photo-1597843797221-e0e1f74dd7e2?auto=format&fit=crop&q=80"
      heroDescription="Step into history. The Cathedral Cellar is one of the most spectacular cellar complexes in the world, home to our gigantic vats and award-winning wines."
      ctaText="BOOK A TOUR"
      ctaLink="#"
      galleryImages={[
        "https://images.unsplash.com/photo-1504279577054-9234796147a6?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&q=80"
      ]}
      pricingSections={TOUR_PRICES}
      infoSection={{
        availableFrom: ['Tours depart daily'],
        hours: ['Monday - Saturday', '10h00 & 14h00', 'Sunday', '11h00'],
        address: ['KWV Emporium (Meeting Point)', 'Kohler Street', 'Paarl']
      }}
      mainContent={
        <>
            <p>
                Built in 1930, the Cathedral Cellar is a visual marvel. With its high vaulted ceilings, stained glass windows, and rows of gigantic vats, it resembles a grand cathedral dedicated to the art of winemaking.
            </p>
            <p>
               Some of the vats in this cellar are carved with intricate reliefs depicting the history of the South African wine industry. It is also home to our premium Cathedral Cellar wine range.
            </p>
        </>
      }
    />
  );
};

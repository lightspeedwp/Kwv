import React from 'react';
import { ExperiencePageLayout, PricingSection } from '../../components/experiences/ExperiencePageLayout';

const MENU_HIGHLIGHTS: PricingSection[] = [
  {
    title: 'CULINARY OFFERING',
    items: [
      {
        name: 'CHEF\'S TABLE',
        price: 'From R500pp',
        description: 'Interactive dining experience',
        subItems: ['Seasonal 3-course menu', 'Wine pairing included', 'Meet the chef']
      },
      {
        name: 'PRIVATE FUNCTIONS',
        description: 'Tailored menus',
        subItems: ['Canapé selection', 'Harvest table', 'Plated dinners']
      }
    ]
  }
];

/**
 * CathedralCellarKitchen Page Component
 * 
 * Displays information about the culinary venue within the Cathedral Cellar.
 * Highlights Chef's Table and Private Functions.
 */
export const CathedralCellarKitchen: React.FC = () => {
  return (
    <ExperiencePageLayout
      title="KITCHEN VENUE"
      subtitle="CATHEDRAL CELLAR KITCHEN"
      heroImage="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
      heroDescription="A culinary venue nestled within our historic cellar complex. The Cathedral Cellar Kitchen offers bespoke dining experiences and serves as a premier venue for private functions."
      ctaText="ENQUIRE NOW"
      ctaLink="mailto:functions@kwv.co.za"
      galleryImages={[
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
      ]}
      pricingSections={MENU_HIGHLIGHTS}
      infoSection={{
        availableFrom: ['Available for private booking'],
        contact: ['functions@kwv.co.za'],
        address: ['Cathedral Cellar', 'KWV Emporium', 'Paarl']
      }}
      mainContent={
        <>
            <p>
                The Cathedral Cellar Kitchen is a modern culinary space that contrasts beautifully with the historic surroundings of the cellar. It is designed to host intimate chef's tables, cooking demonstrations, and exclusive dinners.
            </p>
            <p>
               Our culinary team creates menus that perfectly complement our award-winning wines and brandies, ensuring a harmonious gastronomic experience.
            </p>
        </>
      }
    />
  );
};

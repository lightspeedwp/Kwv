import React from 'react';
import { ExperiencePageLayout, PricingSection } from '../../components/experiences/ExperiencePageLayout';

const TASTINGS: PricingSection[] = [
  {
    title: 'TASTINGS',
    items: [
      {
        name: 'YOUR ESSENTIAL TASTING',
        price: 'R70',
        description: 'KWV CLASSIC COLLECTION',
        subItems: ['Sauvignon Blanc / Chardonnay', 'Merlot / Shiraz', 'Pinotage', 'Shiraz', 'Cabernet Sauvignon']
      },
      {
        name: 'YOUR PREMIUM TASTING',
        price: 'R80',
        description: 'ROODEBERG',
        subItems: ['Rosé', 'Red', 'Classic Red Blend', 'Reserve', 'Winemaker\'s Selection']
      },
      {
        name: 'YOUR EXCLUSIVE TASTING',
        price: 'R90',
        description: 'KWV THE MENTORS',
        subItems: ['Chenin Blanc', 'Grenache Blanc', 'Petit Verdot', 'Canvas', 'Orchestra']
      },
      {
        name: 'WORLD\'S BEST BRANDY',
        price: 'R110',
        description: 'KWV BRANDY TASTING',
        subItems: ['KWV 10 Year Old', 'KWV 12 Year Old', 'KWV 15 Year Old', 'KWV 20 Year Old']
      }
    ]
  }
];

const PAIRINGS: PricingSection[] = [
  {
    title: 'PAIRINGS',
    items: [
        {
            name: 'LABORIE CAP CLASSIQUE & MACARONS',
            price: 'R150',
            description: 'MCC Brut accompanied by Salted Caramel macaron. MCC Rosé accompanied by Strawberry & Cream macaron.'
        },
        {
            name: 'EXCLUSIVE WINES & ARTISAN PIES',
            price: 'R200',
            description: 'The Mentors Chenin Blanc with Spinach & Feta Pie. The Mentors Orchestra with Lamb & Rosemary Pie. KWV Classic Cape Tawny with Apple Crumble Pie.'
        },
        {
            name: 'KWV BRANDY & BELGIAN CHOCOLATES',
            price: 'R200',
            description: '10 Yr Brandy with Milk Chocolate. 12 Yr Brandy with Hazelnut Praline. 15 Yr Brandy with Dark Chocolate. 20 Yr Brandy with Dark Orange Chocolate.'
        }
    ]
  }
];

export const Emporium: React.FC = () => {
  return (
    <ExperiencePageLayout
      title="KWV EMPORIUM"
      subtitle="KWV EMPORIUM"
      heroImage="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80"
      heroDescription="Visit and experience KWV like never before. From cellar tours and special food and wine pairings, to simply enjoying our wide variety of wines and brandies."
      ctaText="BOOK A TASTING"
      ctaLink="#"
      galleryImages={[
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80"
      ]}
      pricingSections={TASTINGS}
      pairings={PAIRINGS}
      infoSection={{
        availableFrom: ['Closed on 25th December (Christmas Day)', 'Open 7 days a week'],
        hours: ['Monday to Saturday', '09h00 - 16h30', 'Sunday', '11h00 - 16h00'],
        address: ['KWV Emporium', 'Kohler Street', 'Paarl, 7646']
      }}
      mainContent={
        <>
            <p>
                Established in 1918, KWV has a distinguished heritage and celebrated history of innovation. We invite you to experience the best of South African wine and spirits at our world-renowned Emporium.
            </p>
            <p>
                Our famous Cathedral Cellar, with its high vaulted ceiling and stained glass windows, is a lasting memory of the people, stories and products that have created a legacy as one of the world's most admired wine brands.
            </p>
        </>
      }
    />
  );
};

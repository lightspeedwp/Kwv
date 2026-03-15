import React from 'react';
import { ExperiencePageLayout } from '../../components/experiences/ExperiencePageLayout';
import { TASTINGS } from '../../data/tastings';
import { SITE_CONTENT } from '../../data/site-content';

export const Emporium: React.FC = () => {
  return (
    <ExperiencePageLayout
      title="ESTATE TASTING ROOM"
      subtitle="HANDCRAFTED WINES"
      heroImage="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80"
      heroDescription="Visit and experience our family farm like never before. From cellar tours and special food and wine pairings, to simply enjoying our handcrafted wines, spirits, and farmstead cheese."
      ctaText="BOOK A TASTING"
      ctaLink="/contact"
      galleryImages={[
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1547308464-9e0e4c46d4e5?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1569831316838-2b3e50e0f55a?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515955853946-c6b67d959fac?auto=format&fit=crop&q=80"
      ]}
      infoSection={{
        availableFrom: [`Closed on ${SITE_CONTENT.hours.tastingRoom.holidays}`, 'Open 7 days a week'],
        hours: [SITE_CONTENT.hours.tastingRoom.weekdays, SITE_CONTENT.hours.tastingRoom.sundays],
        address: [SITE_CONTENT.brand.name, SITE_CONTENT.contact.address.street, `${SITE_CONTENT.contact.address.city}, ${SITE_CONTENT.contact.address.postalCode}`]
      }}
      mainContent={
        <>
            <p>
                Established in {SITE_CONTENT.brand.foundedYear}, our family has been handcrafting award-winning wines for over a century. We invite you to experience the best of our boutique winery at the Estate Tasting Room, nestled against Paarl Mountain in the heart of South Africa's Winelands.
            </p>
            <p>
                Our tasting room offers a warm, welcoming atmosphere where you can sample our full range of estate wines, craft spirits from our House of Fire distillery, and artisan cheese from our own goat dairy. Whether you're a wine connoisseur or just beginning your journey, our knowledgeable staff will guide you through an unforgettable tasting experience.
            </p>
        </>
      }
      tastingOptions={TASTINGS.wine}
      pairingOptions={TASTINGS.pairings}
    />
  );
};
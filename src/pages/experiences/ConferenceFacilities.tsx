import React from 'react';
import { ExperiencePageLayout } from '../../components/experiences/ExperiencePageLayout';

/**
 * ConferenceFacilities Page Component
 * 
 * Showcases KWV's conference and function venues (Sensorium, Cathedral Cellar, Laborie Room, Courtyard).
 * Provides booking information and venue highlights.
 */
export const ConferenceFacilities: React.FC = () => {
  return (
    <ExperiencePageLayout
      title="KWV CONFERENCES"
      subtitle="WORLD CLASS VENUES"
      heroImage="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80"
      heroDescription="Host your next corporate event, conference, or private function in the heart of the Winelands. Our versatile venues offer modern amenities with historic charm."
      ctaText="ENQUIRE NOW"
      ctaLink="mailto:events@kwv.co.za"
      galleryImages={[
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      ]}
      infoSection={{
        availableFrom: ['Bookings by appointment'],
        contact: ['events@kwv.co.za']
      }}
      mainContent={
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                <div>
                    <h3 className="text-xl font-serif font-bold mb-2">The Sensorium</h3>
                    <p className="text-sm mb-4">A state-of-the-art venue ideal for tastings, presentations, and workshops. Can accommodate up to 40 guests.</p>
                    <ul className="list-disc list-inside text-xs text-gray-500">
                        <li>Audio Visual Equipment</li>
                        <li>High-speed WiFi</li>
                        <li>Catering available</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-serif font-bold mb-2">The Cathedral Cellar</h3>
                    <p className="text-sm mb-4">An awe-inspiring setting for gala dinners and large conferences. Can accommodate up to 300 guests.</p>
                    <ul className="list-disc list-inside text-xs text-gray-500">
                        <li>Unique atmosphere</li>
                        <li>Stage and lighting</li>
                        <li>Full banqueting services</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Laborie Room</h3>
                    <p className="text-sm mb-4">Perfect for board meetings and intimate strategy sessions.</p>
                </div>
                <div>
                    <h3 className="text-xl font-serif font-bold mb-2">Courtyard</h3>
                    <p className="text-sm mb-4">Outdoor space for break-away sessions or pre-dinner drinks.</p>
                </div>
            </div>
        </>
      }
    />
  );
};

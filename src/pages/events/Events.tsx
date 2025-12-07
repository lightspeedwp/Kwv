import React from 'react';
import { ExperiencePageLayout } from '../../components/experiences/ExperiencePageLayout';
import { Button } from '../../components/common/Button';
import { useNavigate, Link } from 'react-router-dom';
import { KWVEventsLogo } from '../../components/common/Logo';

/**
 * Events Page Component
 * 
 * Lists upcoming events at KWV (e.g., Concerts, Festivals, Masterclasses).
 * Uses `ExperiencePageLayout` for consistent branding.
 */
export const Events: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ExperiencePageLayout
      title="KWV EVENTS"
      logoComponent={<KWVEventsLogo />}
      subtitle="UNFORGETTABLE MOMENTS"
      heroImage="https://images.unsplash.com/photo-1519671482538-eb2335b9ea9d?auto=format&fit=crop&q=80"
      heroDescription="Join us for our upcoming events. From music concerts in the Cathedral Cellar to food and wine festivals, there is always something happening at KWV."
      ctaText="VIEW CALENDAR"
      ctaLink="/events"
      galleryImages={[
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1533174072545-e8d98597f47f?auto=format&fit=crop&q=80"
      ]}
      mainContent={
        <div className="text-left max-w-4xl mx-auto">
            <h3 className="text-center text-2xl font-serif font-bold mb-8 uppercase">Upcoming Events</h3>
            
            {/* Event List */}
            <div className="space-y-6">
                {/* Event 1 */}
                <Link to="/events/classics-in-the-cellar" className="block group">
                  <div className="flex flex-col md:flex-row gap-6 border border-gray-200 p-6 hover:shadow-md transition-all group-hover:border-[#DAA520]">
                      <div className="w-full md:w-48 h-32 bg-gray-100 flex-shrink-0 overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80" alt="Concert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1">
                          <span className="text-[#DAA520] font-bold text-xs tracking-widest">DECEMBER 15, 2024</span>
                          <h4 className="text-xl font-bold mt-1 mb-2 group-hover:text-[#8B0000] transition-colors">Classics in the Cellar</h4>
                          <p className="text-sm text-gray-600 mb-4">Enjoy an evening of classical music performed by the Cape Philharmonic Orchestra in the acoustic perfection of our Cathedral Cellar.</p>
                          <Button size="sm" variant="outline" className="group-hover:bg-[#2C1810] group-hover:text-white group-hover:border-[#2C1810]">View Details</Button>
                      </div>
                  </div>
                </Link>

                {/* Event 2 */}
                <Link to="/events/harvest-festival-long-table" className="block group">
                  <div className="flex flex-col md:flex-row gap-6 border border-gray-200 p-6 hover:shadow-md transition-all group-hover:border-[#DAA520]">
                      <div className="w-full md:w-48 h-32 bg-gray-100 flex-shrink-0 overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80" alt="Dinner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1">
                          <span className="text-[#DAA520] font-bold text-xs tracking-widest">JANUARY 20, 2025</span>
                          <h4 className="text-xl font-bold mt-1 mb-2 group-hover:text-[#8B0000] transition-colors">Harvest Festival Long Table</h4>
                          <p className="text-sm text-gray-600 mb-4">Celebrate the start of the harvest with a traditional long table dinner under the stars.</p>
                          <Button size="sm" variant="outline" className="group-hover:bg-[#2C1810] group-hover:text-white group-hover:border-[#2C1810]">View Details</Button>
                      </div>
                  </div>
                </Link>

                {/* Event 3 */}
                <Link to="/events/valentines-chocolate-wine-masterclass" className="block group">
                  <div className="flex flex-col md:flex-row gap-6 border border-gray-200 p-6 hover:shadow-md transition-all group-hover:border-[#DAA520]">
                      <div className="w-full md:w-48 h-32 bg-gray-100 flex-shrink-0 overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80" alt="Masterclass" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1">
                          <span className="text-[#DAA520] font-bold text-xs tracking-widest">FEBRUARY 14, 2025</span>
                          <h4 className="text-xl font-bold mt-1 mb-2 group-hover:text-[#8B0000] transition-colors">Valentine's Chocolate & Wine Masterclass</h4>
                          <p className="text-sm text-gray-600 mb-4">A romantic masterclass featuring our limited edition wines paired with artisanal chocolates.</p>
                          <Button size="sm" variant="outline" className="group-hover:bg-[#2C1810] group-hover:text-white group-hover:border-[#2C1810]">View Details</Button>
                      </div>
                  </div>
                </Link>
            </div>
        </div>
      }
    />
  );
};

import React from 'react';
import { ExperiencePageLayout } from '../../components/experiences/ExperiencePageLayout';
import { Button } from '../../components/common/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '../../components/common/Typography';
import { KWVEventsLogo } from '../../components/common/Logo';

// Mock Data for Events
const EVENTS_DATA: Record<string, {
  title: string;
  date: string;
  image: string;
  description: string;
  longDescription: string;
  price: string;
  time: string;
  location: string;
}> = {
  'classics-in-the-cellar': {
    title: "Classics in the Cellar",
    date: "DECEMBER 15, 2024",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80",
    description: "Enjoy an evening of classical music performed by the Cape Philharmonic Orchestra.",
    longDescription: "Join us for a magical evening of classical music in the acoustic perfection of our world-renowned Cathedral Cellar. The Cape Philharmonic Orchestra will perform a selection of timeless classics, accompanied by our award-winning wines and a gourmet dinner.",
    price: "R950 per person",
    time: "18:00 for 18:30",
    location: "Cathedral Cellar, KWV Emporium"
  },
  'harvest-festival-long-table': {
    title: "Harvest Festival Long Table",
    date: "JANUARY 20, 2025",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
    description: "Celebrate the start of the harvest with a traditional long table dinner.",
    longDescription: "Celebrate the bounty of the harvest with a traditional long table dinner under the stars. Enjoy a feast of local produce, paired with our finest wines, and meet the winemakers behind the bottles. Live music and a festive atmosphere guaranteed.",
    price: "R750 per person",
    time: "19:00",
    location: "KWV Courtyard"
  },
  'valentines-chocolate-wine-masterclass': {
    title: "Valentine's Chocolate & Wine Masterclass",
    date: "FEBRUARY 14, 2025",
    image: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80",
    description: "A romantic masterclass featuring our limited edition wines paired with artisanal chocolates.",
    longDescription: "Treat your loved one to a romantic and educational experience this Valentine's Day. Our masterclass features a guided tasting of our limited edition wines, perfectly paired with artisanal chocolates from local chocolatiers.",
    price: "R450 per couple",
    time: "17:30 or 19:30",
    location: "The Sensorium"
  }
};

/**
 * EventDetail Page Component
 * 
 * Displays detailed information about a specific event.
 * Uses `slug` from the URL to fetch event data from `EVENTS_DATA`.
 * 
 * Features:
 * - Event Hero with background image and title.
 * - Key details (Date, Time, Location, Price).
 * - Long description.
 * - Booking CTA.
 */
export const EventDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const event = slug ? EVENTS_DATA[slug] : null;

  if (!event) {
    return (
        <ExperiencePageLayout
            title="EVENT NOT FOUND"
            subtitle="404"
            logoComponent={<KWVEventsLogo />}
            heroImage="https://images.unsplash.com/photo-1519671482538-eb2335b9ea9d?auto=format&fit=crop&q=80"
            heroDescription="The event you are looking for does not exist."
            ctaText="BACK TO EVENTS"
            ctaLink="/events"
            galleryImages={[]}
            mainContent={<div></div>}
        />
    );
  }

  return (
    <ExperiencePageLayout
      title="KWV EVENTS"
      logoComponent={<KWVEventsLogo />}
      subtitle={event.title}
      heroImage={event.image}
      heroDescription={event.description}
      ctaText="BOOK TICKETS"
      ctaLink="/contact"
      galleryImages={[
        event.image,
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1533174072545-e8d98597f47f?auto=format&fit=crop&q=80"
      ]}
      mainContent={
        <div className="text-left max-w-3xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-6">
                <div>
                    <h3 className="text-[#DAA520] font-bold text-sm tracking-widest uppercase mb-1">DATE & TIME</h3>
                    <p className="text-gray-800 text-lg">{event.date} at {event.time}</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <h3 className="text-[#DAA520] font-bold text-sm tracking-widest uppercase mb-1">LOCATION</h3>
                    <p className="text-gray-800 text-lg">{event.location}</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <h3 className="text-[#DAA520] font-bold text-sm tracking-widest uppercase mb-1">PRICE</h3>
                    <p className="text-gray-800 text-lg">{event.price}</p>
                </div>
            </div>

            <div>
                <Typography variant="h3" className="mb-4">About the Event</Typography>
                <Typography variant="body" className="text-gray-600 leading-relaxed">
                    {event.longDescription}
                </Typography>
            </div>

            <div className="bg-[#FFFCF5] p-8 border border-[#DAA520]/20 text-center">
                <Typography variant="h4" className="mb-4">Reserve Your Spot</Typography>
                <p className="mb-6 text-gray-600">Spaces are limited. Book now to avoid disappointment.</p>
                <Button onClick={() => navigate('/contact')}>Enquire Now</Button>
            </div>
        </div>
      }
    />
  );
};

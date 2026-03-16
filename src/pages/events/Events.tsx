import React from 'react';
import { Hero } from '../../components/sections/Hero';
import { Container } from '../../components/common/Container';
import { Button } from '../../components/common/Button';
import { Typography } from '../../components/common/Typography';
import { useNavigate, Link } from 'react-router';
import { Heart, Users, Calendar, MapPin, Phone, Mail, Wine, Utensils, Music, Camera } from 'lucide-react';
import { farmStory } from '../../data/farmStory';

/**
 * Events Page Component
 * 
 * Handcrafted Wines events landing page showcasing wedding and corporate event offerings.
 * Family farm venue with rustic charm and mountain views.
 * 
 * Features:
 * - Wedding packages and venue details
 * - Corporate event offerings
 * - Venue capacity and facilities
 * - Event contact and booking information
 * - Image gallery of past events
 * - Family-oriented hospitality voice
 * 
 * @package HandcraftedWines
 * @version 2.0
 */
export const Events: React.FC = () => {
  const navigate = useNavigate();

  const eventTypes = [
    {
      icon: Heart,
      title: "Weddings",
      description: "Celebrate your special day on our family farm with Paarl Mountain as your backdrop",
      features: ["Garden & Cellar ceremonies", "Reception for up to 120 guests", "Farm-to-table catering", "Wine tastings"],
      link: "/events/weddings"
    },
    {
      icon: Users,
      title: "Corporate Events",
      description: "Team-building experiences that blend wine, food, and the outdoors",
      features: ["Wine blending workshops", "Vineyard team challenges", "Private tastings", "Catered lunches"],
      link: "/events/corporate"
    },
    {
      icon: Music,
      title: "Private Functions",
      description: "Birthday celebrations, anniversaries, and milestone gatherings",
      features: ["Exclusive venue hire", "Custom menus", "Personalized wine labels", "Intimate atmosphere"],
      link: "/events/private"
    }
  ];

  const venueFeatures = [
    { icon: MapPin, label: "Stunning Mountain Views", detail: "Paarl Mountain backdrop" },
    { icon: Wine, label: "Award-Winning Wines", detail: "58+ international awards" },
    { icon: Utensils, label: "Farm-to-Table Catering", detail: "Fresh, local ingredients" },
    { icon: Camera, label: "Beautiful Photo Spots", detail: "Vineyard, cellar, gardens" }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Celebrate With Us"
        subtitle="Weddings, Corporate Events & Private Functions"
        description="Our family farm is more than just a venue—it's a place where memories are made. From intimate gatherings to grand celebrations, we'll help you create an unforgettable experience surrounded by vines, mountain views, and warm hospitality."
        imageSrc="https://images.unsplash.com/photo-1519167758481-83f29da8c9f0?auto=format&fit=crop&q=80"
        imageAlt="Wedding reception in vineyard setting"
        primaryCTA={{
          text: "Enquire About Your Event",
          href: "/contact?subject=Event Enquiry"
        }}
        secondaryCTA={{
          text: "View Our Venue",
          href: "#venue-details"
        }}
        height="lg"
        overlay="dark"
      />

      {/* Event Types Section */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)]">
        <Container variant="wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Typography variant="h2" className="mb-4">
              Events at Handcrafted Wines
            </Typography>
            <Typography variant="body-large" className="text-[var(--twb-color-text-muted)]">
              Whether you're planning a wedding, corporate retreat, or private celebration, our farm offers a unique blend of rustic charm, award-winning wine, and genuine family hospitality.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <Link
                  key={index}
                  to={event.link}
                  className="group block p-8 border border-[var(--twb-border-primary)] hover:border-[var(--twb-color-gold)] hover:shadow-lg transition-all bg-white dark:bg-[var(--twb-color-bg-secondary)]"
                >
                  <IconComponent 
                    size={40} 
                    className="text-[var(--twb-color-plum)] mb-6 group-hover:text-[var(--twb-color-gold)] transition-colors" 
                  />
                  <Typography variant="h3" className="mb-3 group-hover:text-[var(--twb-color-plum)] transition-colors">
                    {event.title}
                  </Typography>
                  <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-6">
                    {event.description}
                  </Typography>
                  <ul className="space-y-2 mb-6">
                    {event.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-[var(--twb-color-gold)] mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group-hover:bg-[var(--twb-color-ink)] group-hover:text-[var(--twb-color-paper)] group-hover:border-[var(--twb-color-ink)]"
                  >
                    Learn More
                  </Button>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Venue Details Section */}
      <section id="venue-details" className="py-20 bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">
              Our Venue
            </Typography>
            <Typography variant="body-large" className="text-[var(--twb-color-text-muted)]">
              A century-old family farm with rustic charm and modern amenities
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {venueFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <IconComponent 
                    size={32} 
                    className="text-[var(--twb-color-gold)] flex-shrink-0 mt-1" 
                  />
                  <div>
                    <Typography variant="h4" className="mb-1">
                      {feature.label}
                    </Typography>
                    <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                      {feature.detail}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white dark:bg-[var(--twb-color-bg-primary)] p-8 border border-[var(--twb-border-primary)] mb-8">
            <Typography variant="h3" className="mb-6">
              Venue Capacity
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Typography variant="h4" className="text-[var(--twb-color-plum)] mb-2">
                  Wine Cellar
                </Typography>
                <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                  Seated: 80 guests<br />
                  Standing: 120 guests<br />
                  Perfect for: Intimate weddings, wine dinners
                </Typography>
              </div>
              <div>
                <Typography variant="h4" className="text-[var(--twb-color-plum)] mb-2">
                  Garden Venue
                </Typography>
                <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                  Seated: 120 guests<br />
                  Standing: 200 guests<br />
                  Perfect for: Large weddings, corporate events
                </Typography>
              </div>
            </div>
          </div>

          <div className="bg-[var(--twb-color-plum)]/10 p-8 border-l-4 border-[var(--twb-color-plum)]">
            <Typography variant="h4" className="mb-3">
              What's Included
            </Typography>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <span className="text-[var(--twb-color-gold)] mt-1">✓</span>
                <span>Exclusive venue hire (6 hours)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--twb-color-gold)] mt-1">✓</span>
                <span>Event coordinator assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--twb-color-gold)] mt-1">✓</span>
                <span>Tables, chairs & table linens</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--twb-color-gold)] mt-1">✓</span>
                <span>Farm wine selection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--twb-color-gold)] mt-1">✓</span>
                <span>Secure parking for 50+ vehicles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--twb-color-gold)] mt-1">✓</span>
                <span>Restroom facilities</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Contact & Booking Section */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">
              Let's Plan Your Event
            </Typography>
            <Typography variant="body-large" className="text-[var(--twb-color-text-muted)]">
              We'd love to show you around the farm and discuss how we can make your event unforgettable
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone size={32} className="text-[var(--twb-color-plum)] mx-auto mb-4" />
              <Typography variant="h4" className="mb-2">
                Phone
              </Typography>
              <a 
                href={`tel:${farmStory.contact.phone}`}
                className="text-[var(--twb-color-gold)] hover:underline"
              >
                {farmStory.contact.phone}
              </a>
            </div>
            <div className="text-center">
              <Mail size={32} className="text-[var(--twb-color-plum)] mx-auto mb-4" />
              <Typography variant="h4" className="mb-2">
                Email
              </Typography>
              <a 
                href={`mailto:${farmStory.contact.email}`}
                className="text-[var(--twb-color-gold)] hover:underline"
              >
                {farmStory.contact.email}
              </a>
            </div>
            <div className="text-center">
              <Calendar size={32} className="text-[var(--twb-color-plum)] mx-auto mb-4" />
              <Typography variant="h4" className="mb-2">
                Book a Visit
              </Typography>
              <Link 
                to="/contact?subject=Event Venue Visit"
                className="text-[var(--twb-color-gold)] hover:underline"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>

          <div className="text-center bg-white dark:bg-[var(--twb-color-bg-secondary)] p-10 border border-[var(--twb-border-primary)]">
            <Typography variant="h3" className="mb-4">
              Ready to Book?
            </Typography>
            <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-8 max-w-2xl mx-auto">
              Contact us to check availability, discuss your vision, and receive a personalized quote for your event.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact?subject=Event Booking Enquiry')}
                size="lg"
              >
                Request a Quote
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/events/faq')}
                size="lg"
              >
                Events FAQs
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">
              Why Choose Handcrafted Wines?
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-[var(--twb-color-bg-primary)] border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3 text-[var(--twb-color-plum)]">
                Authentic Family Hospitality
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                This isn't just our venue—it's our home. We treat every event like we're welcoming family, with warmth, care, and genuine attention to detail.
              </Typography>
            </div>

            <div className="p-6 bg-white dark:bg-[var(--twb-color-bg-primary)] border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3 text-[var(--twb-color-plum)]">
                Award-Winning Wines
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                Toast your celebration with wines that have won 58+ international awards. We can even create custom wine labels for your special day.
              </Typography>
            </div>

            <div className="p-6 bg-white dark:bg-[var(--twb-color-bg-primary)] border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3 text-[var(--twb-color-plum)]">
                Farm-to-Table Excellence
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                Our catering partners use fresh, local ingredients—including our own artisan cheese and herbs from our farm garden.
              </Typography>
            </div>

            <div className="p-6 bg-white dark:bg-[var(--twb-color-bg-primary)] border border-[var(--twb-border-primary)]">
              <Typography variant="h4" className="mb-3 text-[var(--twb-color-plum)]">
                Breathtaking Setting
              </Typography>
              <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                Paarl Mountain's dramatic backdrop, century-old stone cellars, and vineyard rows create unforgettable photo opportunities.
              </Typography>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
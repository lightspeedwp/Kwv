/**
 * Full Farm Tour Experience Detail Page
 * 
 * Detailed information about the Full Farm Tour experience at Handcrafted Wines.
 * Complete 2-hour tour covering vineyard, distillery, goat dairy, and wine cellar.
 * 
 * Features:
 * - Hero with experience image
 * - Experience overview from farmStory.ts
 * - "What's Included" checklist
 * - Duration, price, availability details
 * - Minimum guest requirement (4 guests)
 * - Booking CTA with contact options
 * - Related experiences suggestions
 * - Family hospitality voice throughout
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';
import { Hero } from '../../components/sections/Hero';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { Newsletter } from '../../components/sections/Newsletter';
import { useNavigate } from 'react-router';
import { Check, Clock, Users, Calendar, Phone, Mail, MapPin, AlertCircle } from 'lucide-react';
import { farmStory } from '../../data/farmStory';
import { motion } from 'motion/react';

export const FarmTour: React.FC = () => {
  const navigate = useNavigate();
  const experience = farmStory.experiences.offerings.find(e => e.id === 'farm-tour')!;

  // Related experiences (exclude current one)
  const relatedExperiences = farmStory.experiences.offerings
    .filter(e => e.id !== 'farm-tour')
    .slice(0, 3);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Full Farm Tour Experience - Handcrafted Wines</title>
      <meta name="description" content={`${experience.description} Duration: ${experience.duration}. Price: ${experience.price}. See the vineyard, distillery, goat dairy, and wine cellar.`} />

      {/* Hero */}
      <Hero
        title={experience.title}
        subtitle={experience.tagline}
        description={experience.description}
        imageSrc="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        imageAlt="Vineyard and farm tour at Handcrafted Wines on Paarl Mountain"
        height="md"
        overlay="dark"
        primaryCTA={{ text: "Book This Experience", href: "#booking" }}
        secondaryCTA={{ text: "View All Experiences", href: "/experiences" }}
      />

      {/* Experience Details */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-primary)]">
        <Container variant="content">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h2" className="mb-6">
                What's Included
              </Typography>
              <ul className="space-y-4">
                {experience.includes.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--twb-color-plum)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={16} className="text-white" />
                    </div>
                    <Typography variant="body" className="text-[var(--twb-color-text-secondary)]">
                      {item}
                    </Typography>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 p-6 bg-[var(--twb-color-bg-secondary)] border border-[var(--twb-border-primary)] rounded-lg">
                <Typography variant="h4" className="mb-4">
                  Experience Highlights
                </Typography>
                <p className="text-[var(--twb-color-text-secondary)] leading-relaxed mb-4">
                  This is the complete Handcrafted Wines experience. Over two hours, you'll walk every part of our farm with the family members who know it best—Liezl in the vineyard, Hennie at the distillery, Annelie in the goat dairy, and Pieter in the wine cellar.
                </p>
                <p className="text-[var(--twb-color-text-secondary)] leading-relaxed mb-4">
                  You'll see how grapes become wine, how our copper pot stills turn pomace into grappa, how goat milk becomes cheese, and how four generations of knowledge shape every decision we make.
                </p>
                <p className="text-[var(--twb-color-text-secondary)] leading-relaxed">
                  We'll walk you through the vineyard rows (wear comfortable shoes), show you the old oak barrels in our cellar, introduce you to the goats, and end with a full wine tasting. It's a genuine farm experience—honest, personal, and deeply rooted in this place.
                </p>
              </div>

              {/* Minimum Guests Notice */}
              <div className="mt-6 p-4 bg-[var(--twb-color-gold)]/10 border-l-4 border-[var(--twb-color-gold)] rounded">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-[var(--twb-color-gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <Typography variant="h5" className="mb-1">
                      Minimum {experience.minGuests} Guests Required
                    </Typography>
                    <p className="text-sm text-[var(--twb-color-text-secondary)]">
                      This tour requires a minimum of {experience.minGuests} guests. Smaller groups can join scheduled public tours or opt for a shorter experience.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Booking Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-[var(--twb-color-bg-secondary)] border border-[var(--twb-border-primary)] rounded-lg">
                  <Clock size={24} className="text-[var(--twb-color-plum)] mb-2" />
                  <Typography variant="caption" className="text-[var(--twb-color-text-muted)] mb-1">
                    Duration
                  </Typography>
                  <Typography variant="h4">
                    {experience.duration}
                  </Typography>
                </div>

                <div className="p-4 bg-[var(--twb-color-bg-secondary)] border border-[var(--twb-border-primary)] rounded-lg">
                  <Users size={24} className="text-[var(--twb-color-plum)] mb-2" />
                  <Typography variant="caption" className="text-[var(--twb-color-text-muted)] mb-1">
                    Group Size
                  </Typography>
                  <Typography variant="h4">
                    Min {experience.minGuests}
                  </Typography>
                </div>

                <div className="p-4 bg-[var(--twb-color-bg-secondary)] border border-[var(--twb-border-primary)] rounded-lg col-span-2">
                  <Calendar size={24} className="text-[var(--twb-color-plum)] mb-2" />
                  <Typography variant="caption" className="text-[var(--twb-color-text-muted)] mb-1">
                    Availability
                  </Typography>
                  <Typography variant="body">
                    {experience.availability}
                  </Typography>
                </div>
              </div>

              {/* Pricing */}
              <div className="p-6 bg-gradient-to-br from-[var(--twb-color-plum)] to-[var(--twb-color-vine)] text-white rounded-lg mb-8">
                <Typography variant="caption" className="text-white/80 mb-2">
                  Price Per Person
                </Typography>
                <Typography variant="h1" className="text-white mb-4">
                  {experience.price}
                </Typography>
                <p className="text-white/90 text-sm leading-relaxed">
                  Includes vineyard walk, distillery visit, goat dairy tour, wine tasting, light refreshments, and take-home gift bag. Minimum {experience.minGuests} guests required.
                </p>
              </div>

              {/* Booking Info */}
              <div id="booking" className="p-6 border-2 border-[var(--twb-color-gold)] rounded-lg bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-bg-secondary)]">
                <Typography variant="h3" className="mb-4">
                  Book Your Tour
                </Typography>
                <p className="text-[var(--twb-color-text-secondary)] mb-6">
                  Call, email, or WhatsApp to reserve. Please book at least 1 week in advance to ensure all family members are available.
                </p>

                <div className="space-y-4 mb-6">
                  <a
                    href={`tel:${farmStory.contact.phone}`}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-[var(--twb-color-bg-primary)] border border-[var(--twb-border-primary)] rounded-lg hover:border-[var(--twb-color-gold)] transition-colors"
                  >
                    <Phone size={20} className="text-[var(--twb-color-plum)]" />
                    <div>
                      <Typography variant="caption" className="text-[var(--twb-color-text-muted)]">
                        Call Us
                      </Typography>
                      <Typography variant="body" className="font-semibold">
                        {farmStory.contact.phone}
                      </Typography>
                    </div>
                  </a>

                  <a
                    href={`mailto:${farmStory.contact.email}?subject=Full Farm Tour Booking Inquiry`}
                    className="flex items-center gap-3 p-3 bg-white dark:bg-[var(--twb-color-bg-primary)] border border-[var(--twb-border-primary)] rounded-lg hover:border-[var(--twb-color-gold)] transition-colors"
                  >
                    <Mail size={20} className="text-[var(--twb-color-plum)]" />
                    <div>
                      <Typography variant="caption" className="text-[var(--twb-color-text-muted)]">
                        Email Us
                      </Typography>
                      <Typography variant="body" className="font-semibold">
                        {farmStory.contact.email}
                      </Typography>
                    </div>
                  </a>
                </div>

                <Button onClick={() => navigate('/contact')} className="w-full" size="lg">
                  Book via Contact Form
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Location & Directions */}
      <section className="py-20 bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">
              Find Us on Paarl Mountain
            </Typography>
            <p className="text-[var(--twb-color-text-secondary)] max-w-2xl mx-auto">
              Our farm is located on the slopes of Paarl Mountain, about 60km from Cape Town. The tour starts at the tasting room.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white dark:bg-[var(--twb-color-bg-primary)] border border-[var(--twb-border-primary)] rounded-lg">
              <MapPin size={24} className="text-[var(--twb-color-plum)] mb-4" />
              <Typography variant="h4" className="mb-4">
                Address
              </Typography>
              <p className="text-[var(--twb-color-text-secondary)] leading-relaxed mb-4">
                {farmStory.location.address.street}<br />
                {farmStory.location.address.city}, {farmStory.location.address.postalCode}<br />
                {farmStory.location.address.country}
              </p>
              <a
                href={`https://www.google.com/maps?q=${farmStory.location.coordinates.lat},${farmStory.location.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--twb-color-plum)] hover:underline font-semibold"
              >
                Open in Google Maps →
              </a>
            </div>

            <div className="p-6 bg-white dark:bg-[var(--twb-color-bg-primary)] border border-[var(--twb-border-primary)] rounded-lg">
              <Typography variant="h4" className="mb-4">
                Directions from Cape Town
              </Typography>
              <ol className="space-y-2 text-[var(--twb-color-text-secondary)]">
                <li>1. Take the N1 North toward Paarl (60km, ~50 minutes)</li>
                <li>2. Take Exit 47 (Paarl/Wellington)</li>
                <li>3. Turn right onto Main Road</li>
                <li>4. Continue for 3km</li>
                <li>5. Turn left onto Paarl Mountain Road</li>
                <li>6. We're 2km up the mountain on the right</li>
                <li>7. Look for our sign and stone gate entrance</li>
              </ol>
              <p className="text-sm text-[var(--twb-color-text-muted)] mt-4">
                Free parking available. Wear comfortable walking shoes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Experiences */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-primary)]">
        <Container variant="wide">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">
              More Farm Experiences
            </Typography>
            <p className="text-[var(--twb-color-text-secondary)] max-w-2xl mx-auto">
              Prefer a shorter visit? Check out our other experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 bg-[var(--twb-color-bg-secondary)] border border-[var(--twb-border-primary)] rounded-lg hover:border-[var(--twb-color-gold)] transition-colors cursor-pointer"
                onClick={() => navigate(`/experiences/${exp.id}`)}
              >
                <Typography variant="h3" className="mb-2">
                  {exp.title}
                </Typography>
                <Typography variant="caption" className="text-[var(--twb-color-plum)] mb-4 block">
                  {exp.tagline}
                </Typography>
                <p className="text-[var(--twb-color-text-secondary)] mb-4 line-clamp-3">
                  {exp.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--twb-color-text-muted)]">{exp.duration}</span>
                  <span className="font-semibold text-[var(--twb-color-plum)]">{exp.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => navigate('/experiences')} variant="secondary" size="lg">
              View All Experiences
            </Button>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-4">
              Stay Connected
            </Typography>
            <p className="text-[var(--twb-color-text-secondary)] max-w-2xl mx-auto">
              Get harvest updates, farm news, and exclusive tour invitations.
            </p>
          </div>
          <Newsletter />
        </Container>
      </section>
    </>
  );
};

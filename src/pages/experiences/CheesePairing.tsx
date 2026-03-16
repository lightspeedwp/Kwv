/**
 * Cheese & Wine Pairing Experience Detail Page
 * 
 * Detailed information about the Cheese & Wine Pairing experience at Handcrafted Wines.
 * Features Annelie's farmstead cheeses paired with estate wines.
 * 
 * Features:
 * - Hero with experience image
 * - Experience overview from farmStory.ts
 * - "What's Included" checklist
 * - Duration, price, availability details
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
import { Check, Clock, Users, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { farmStory } from '../../data/farmStory';
import { motion } from 'motion/react';

export const CheesePairing: React.FC = () => {
  const navigate = useNavigate();
  const experience = farmStory.experiences.offerings.find(e => e.id === 'cheese-pairing')!;

  // Related experiences (exclude current one)
  const relatedExperiences = farmStory.experiences.offerings
    .filter(e => e.id !== 'cheese-pairing')
    .slice(0, 3);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Cheese & Wine Pairing Experience - Handcrafted Wines</title>
      <meta name="description" content={`${experience.description} Duration: ${experience.duration}. Price: ${experience.price}. Meet our goats and taste artisan cheese.`} />

      {/* Hero */}
      <Hero
        title={experience.title}
        subtitle={experience.tagline}
        description={experience.description}
        imageSrc="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        imageAlt="Artisan cheese and wine pairing at Handcrafted Wines"
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
                  Annelie has been making farmstead cheese from our own goat dairy for over 15 years. In this tasting, she'll share her knowledge about cheese-making while guiding you through four perfect pairings—each cheese carefully matched with one of our estate wines.
                </p>
                <p className="text-[var(--twb-color-text-secondary)] leading-relaxed mb-4">
                  You'll taste how fresh chèvre brightens Chenin Blanc, how aged cheese deepens the complexity of our Shiraz, and why our wine-washed rind is the ultimate expression of terroir.
                </p>
                <p className="text-[var(--twb-color-text-secondary)] leading-relaxed">
                  If the goats are home (and they usually are), you'll get to meet them before the tasting. They're friendly, curious, and always happy to say hello.
                </p>
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
                    {experience.minGuests ? `Min ${experience.minGuests}` : 'Any size'}
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
                  Booking required. Limited to 12 guests per session to ensure personalized attention from Annelie.
                </p>
              </div>

              {/* Booking Info */}
              <div id="booking" className="p-6 border-2 border-[var(--twb-color-gold)] rounded-lg bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-bg-secondary)]">
                <Typography variant="h3" className="mb-4">
                  Book Your Pairing
                </Typography>
                <p className="text-[var(--twb-color-text-secondary)] mb-6">
                  Call, email, or WhatsApp to reserve. We recommend booking at least 3 days in advance.
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
                    href={`mailto:${farmStory.contact.email}?subject=Cheese & Wine Pairing Booking Inquiry`}
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
              Our farm is located on the slopes of Paarl Mountain, about 60km from Cape Town. The goat dairy is right next to the tasting room.
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
                Free parking available on-site.
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
              Combine your pairing with another experience for the full Handcrafted Wines journey.
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
              Get harvest updates, new cheese releases, and exclusive tasting invitations.
            </p>
          </div>
          <Newsletter />
        </Container>
      </section>
    </>
  );
};

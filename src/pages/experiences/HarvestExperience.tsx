/**
 * Harvest Day Experience Detail Page
 * 
 * Detailed information about the seasonal Harvest Day Experience at Handcrafted Wines.
 * Available February-March only during vintage. Hands-on grape picking and crushing.
 * 
 * Features:
 * - Hero with experience image
 * - Experience overview from farmStory.ts
 * - Seasonal availability notice (February-March)
 * - "What's Included" checklist
 * - Duration, price, availability details
 * - Complimentary vintage bottle promise
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

export const HarvestExperience: React.FC = () => {
  const navigate = useNavigate();
  const experience = farmStory.experiences.offerings.find(e => e.id === 'harvest-experience')!;

  // Related experiences (exclude current one)
  const relatedExperiences = farmStory.experiences.offerings
    .filter(e => e.id !== 'harvest-experience')
    .slice(0, 3);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Harvest Day Experience - Handcrafted Wines</title>
      <meta name="description" content={`${experience.description} Duration: ${experience.duration}. Price: ${experience.price}. Available February-March only.`} />

      {/* Hero */}
      <Hero
        title={experience.title}
        subtitle={experience.tagline}
        description={experience.description}
        imageSrc="https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        imageAlt="Grape harvest at Handcrafted Wines vineyard on Paarl Mountain"
        height="md"
        overlay="dark"
        primaryCTA={{ text: "Book This Experience", href: "#booking" }}
        secondaryCTA={{ text: "View All Experiences", href: "/experiences" }}
      />

      {/* Seasonal Notice */}
      <section className="py-6 bg-[var(--twb-color-gold)]/20 border-b-2 border-[var(--twb-color-gold)]">
        <Container variant="content">
          <div className="flex items-center justify-center gap-3 text-center">
            <Calendar size={24} className="text-[var(--twb-color-plum)]" />
            <div>
              <Typography variant="h4" className="text-[var(--twb-color-plum)]">
                Seasonal Experience
              </Typography>
              <p className="text-[var(--twb-color-text-secondary)]">
                Available February - March only during harvest season. Book early—slots fill fast!
              </p>
            </div>
          </div>
        </Container>
      </section>

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
                  Harvest is the most exciting time on our farm. From late February through March, we hand-pick grapes at the perfect moment—when sugar, acid, and flavor are in balance. This experience lets you be part of that moment.
                </p>
                <p className="text-[var(--twb-color-text-secondary)] leading-relaxed mb-4">
                  You'll join Liezl and our harvest team in the vineyard, learning how to select the best bunches and cut them gently from the vine. Then you'll help sort the fruit, removing any imperfect grapes. And yes—you'll get to crush grapes with your feet, just like they did a hundred years ago. (We still do this for fun during harvest.)
                </p>
                <p className="text-[var(--twb-color-text-secondary)] leading-relaxed mb-4">
                  After all that work, we'll sit down for a traditional harvest lunch—simple farm food, good wine, and stories about vintages past. You'll leave with dirty hands, happy memories, and a promise: a complimentary bottle of the vintage you helped harvest, delivered to your door two years later when it's ready.
                </p>
              </div>

              {/* Special Gift Notice */}
              <div className="mt-6 p-4 bg-[var(--twb-color-plum)]/10 border-l-4 border-[var(--twb-color-plum)] rounded">
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--twb-color-plum)] flex-shrink-0 mt-0.5" />
                  <div>
                    <Typography variant="h5" className="mb-1">
                      Your Vintage, Delivered
                    </Typography>
                    <p className="text-sm text-[var(--twb-color-text-secondary)]">
                      In 2 years, when the wine you helped harvest is bottled and aged, we'll send you a complimentary bottle with a personalized note. You helped make this wine—you should taste it.
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
                  Includes full harvest experience, traditional lunch, wine tasting, and a complimentary bottle of your vintage (delivered in 2 years). Limited to 12 guests per day.
                </p>
              </div>

              {/* Booking Info */}
              <div id="booking" className="p-6 border-2 border-[var(--twb-color-gold)] rounded-lg bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-bg-secondary)]">
                <Typography variant="h3" className="mb-4">
                  Book Your Harvest Day
                </Typography>
                <p className="text-[var(--twb-color-text-secondary)] mb-6">
                  Harvest dates depend on when the grapes are ready. Join our mailing list or call us in January to book your spot for the upcoming vintage.
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
                    href={`mailto:${farmStory.contact.email}?subject=Harvest Experience Booking Inquiry`}
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
              Our vineyard is on the slopes of Paarl Mountain. Harvest days start early (8:00 AM) to avoid the midday heat.
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
                What to Bring
              </Typography>
              <ul className="space-y-2 text-[var(--twb-color-text-secondary)]">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[var(--twb-color-plum)] mt-1 flex-shrink-0" />
                  <span>Closed-toe shoes (vineyard can be muddy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[var(--twb-color-plum)] mt-1 flex-shrink-0" />
                  <span>Sun hat and sunscreen (we're outdoors for 2+ hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[var(--twb-color-plum)] mt-1 flex-shrink-0" />
                  <span>Clothes you don't mind getting grape-stained</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[var(--twb-color-plum)] mt-1 flex-shrink-0" />
                  <span>Camera (the vineyard is beautiful in February)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-[var(--twb-color-plum)] mt-1 flex-shrink-0" />
                  <span>Enthusiasm and a willingness to get your hands dirty!</span>
                </li>
              </ul>
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
              Visit us year-round with these other farm experiences.
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
              Get Harvest Updates
            </Typography>
            <p className="text-[var(--twb-color-text-secondary)] max-w-2xl mx-auto">
              Join our newsletter to get notified when harvest bookings open for the next vintage.
            </p>
          </div>
          <Newsletter />
        </Container>
      </section>
    </>
  );
};

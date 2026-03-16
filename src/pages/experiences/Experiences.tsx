/**
 * Experiences Landing Page Component
 * 
 * Main landing page for farm visits and experiences.
 * 
 * Features:
 * - 5 farm experiences (Wine Tasting, Cheese Pairing, Farm Tour, Harvest, Private)
 * - Booking information
 * - Hours and policies
 * - Contact CTAs
 * - Family hospitality voice
 * 
 * Data source: farmStory.experiences
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { Grape, Heart, Map, Clock, Calendar, Users, Phone, Mail, Check } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router';
import { farmStory } from '../../data/farmStory';
import { HandDrawnUnderline } from '../../components/decorative/HandDrawnUnderline';
import { OrganicBorder } from '../../components/decorative/OrganicBorder';
import { PaperTexture } from '../../components/decorative/PaperTexture';
import { BrushStrokeDivider } from '../../components/decorative/BrushStrokeDivider';
import { HandDrawnGrapeCluster, HandDrawnWineBottle } from '../../components/decorative/icons';
import heroImage from 'figma:asset/fe3c1c394bedc4c207970e159acb3d745653037f.png';

export const Experiences: React.FC = () => {
  return (
    <Layout>
      <Hero 
        title="Visit Our Farm"
        subtitle={farmStory.experiences.intro}
        imageSrc={heroImage}
        height="large"
      />

      {/* Introduction */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)] dark:bg-[var(--twb-color-bg-secondary)] relative">
        <PaperTexture opacity={0.03} />
        <Container variant="content">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
                Experience Handcrafted Hospitality
              </Typography>
              <HandDrawnUnderline variant="wave" color="var(--twb-color-gold)" className="bottom-0" />
            </div>
            <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                We're not a fancy winery with velvet ropes and stuffy tasting notes. We're a working farm 
                where real people make real wine, cheese, and spirits. When you visit, you'll meet the family, 
                walk the vineyard, and see exactly where your bottle comes from.
              </p>
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                Come for the wine. Stay for the stories. Leave feeling like family.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Experiences Grid */}
      <section className="py-20 bg-[var(--twb-color-plum)]/5">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4 text-[var(--twb-color-plum)]">
              Choose Your Experience
            </Typography>
            <p className="text-[var(--twb-color-text-muted)] text-lg">
              All experiences include personal time with our family and lots of laughs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {farmStory.experiences.offerings.map((experience, index) => {
              // Custom icon components for different experience types
              let IconComponent: React.ComponentType<any>;
              
              if (experience.id === 'wine-tasting' || experience.id === 'private-tasting') {
                // Use hand-drawn grape cluster for wine tastings
                IconComponent = () => (
                  <HandDrawnGrapeCluster 
                    size={32} 
                    color="var(--twb-color-plum)" 
                    showLeaf={true}
                  />
                );
              } else {
                // Fallback to lucide icons for other experiences
                const iconMap: Record<string, any> = {
                  'cheese-pairing': Heart,
                  'farm-tour': Map,
                  'harvest-experience': Calendar,
                };
                IconComponent = iconMap[experience.id] || Map;
              }

              return (
                <OrganicBorder
                  key={experience.id}
                  variant="subtle"
                  className="bg-[var(--twb-color-bg-primary)] dark:bg-[var(--twb-color-bg-secondary)] p-8 hover:shadow-xl transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--twb-color-plum)]/10 flex items-center justify-center">
                      <IconComponent size={32} className="text-[var(--twb-color-plum)]" />
                    </div>
                    <div className="flex-1">
                      <div className="relative inline-block">
                        <h3 className="font-serif text-2xl mb-1 text-[var(--twb-color-plum)]">
                          {experience.title}
                        </h3>
                        <HandDrawnUnderline variant="scribble" color="var(--twb-color-plum)" width="80%" className="-bottom-1" />
                      </div>
                      <p className="text-[var(--twb-color-gold)] italic text-sm">
                        {experience.tagline}
                      </p>
                      {experience.seasonal && (
                        <span className="inline-block mt-2 px-3 py-1 bg-[var(--twb-color-gold)]/20 text-[var(--twb-color-gold)] text-xs font-bold rounded-full">
                          SEASONAL
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--twb-color-text-muted)] leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-[var(--twb-border-tertiary)]">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={16} className="text-[var(--twb-color-plum)]" />
                      <span className="text-[var(--twb-color-text-muted)]">{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-bold text-[var(--twb-color-plum)]">{experience.price}</span>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-[var(--twb-color-text-primary)] mb-3">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {experience.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[var(--twb-color-text-muted)]">
                          <Check size={16} className="text-[var(--twb-color-vine)] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Availability */}
                  <div className="bg-[var(--twb-color-plum)]/5 p-4 rounded-lg mb-6">
                    <p className="text-sm text-[var(--twb-color-text-muted)]">
                      <strong>Availability:</strong> {experience.availability}
                    </p>
                    {experience.minGuests && (
                      <p className="text-sm text-[var(--twb-color-text-muted)] mt-1">
                        <strong>Minimum:</strong> {experience.minGuests} guests
                      </p>
                    )}
                  </div>

                  {/* CTA */}
                  <Link to="/contact">
                    <Button variant="primary" className="w-full">
                      Book This Experience
                    </Button>
                  </Link>
                </OrganicBorder>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Decorative Divider */}
      <BrushStrokeDivider 
        variant="grape-cluster" 
        color="var(--twb-color-plum)" 
        spacing="lg"
        showAccents={true}
      />

      {/* Hours & Policies */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)] dark:bg-[var(--twb-color-bg-secondary)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hours */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock size={32} className="text-[var(--twb-color-plum)]" />
                <Typography variant="h3" className="text-[var(--twb-color-plum)]">
                  Visiting Hours
                </Typography>
              </div>
              <div className="bg-[var(--twb-color-plum)]/5 p-6 rounded-lg border border-[var(--twb-border-tertiary)]">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[var(--twb-color-text-primary)] mb-2">
                      Tasting Room
                    </h4>
                    <p className="text-[var(--twb-color-text-muted)] text-sm">
                      {farmStory.hours.tastingRoom.weekdays}
                    </p>
                    <p className="text-[var(--twb-color-text-muted)] text-sm">
                      {farmStory.hours.tastingRoom.weekend}
                    </p>
                    <p className="text-[var(--twb-color-text-muted)] text-sm italic mt-2">
                      {farmStory.hours.tastingRoom.holidays}
                    </p>
                  </div>
                  <div className="border-t border-[var(--twb-border-tertiary)] pt-4">
                    <h4 className="font-semibold text-[var(--twb-color-text-primary)] mb-2">
                      Farm Tours
                    </h4>
                    <p className="text-[var(--twb-color-text-muted)] text-sm">
                      {farmStory.hours.tours.schedule}
                    </p>
                    <p className="text-[var(--twb-color-text-muted)] text-sm">
                      {farmStory.hours.tours.duration}
                    </p>
                    <p className="text-[var(--twb-color-gold)] text-sm font-medium mt-2">
                      {farmStory.hours.tours.booking}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Check size={32} className="text-[var(--twb-color-plum)]" />
                <Typography variant="h3" className="text-[var(--twb-color-plum)]">
                  Good to Know
                </Typography>
              </div>
              <div className="bg-[var(--twb-color-plum)]/5 p-6 rounded-lg border border-[var(--twb-border-tertiary)]">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Calendar size={20} className="text-[var(--twb-color-vine)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[var(--twb-color-text-primary)] text-sm">
                        Booking Required
                      </p>
                      <p className="text-[var(--twb-color-text-muted)] text-sm">
                        {farmStory.experiences.policies.booking}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-[var(--twb-color-vine)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[var(--twb-color-text-primary)] text-sm">
                        Cancellation Policy
                      </p>
                      <p className="text-[var(--twb-color-text-muted)] text-sm">
                        {farmStory.experiences.policies.cancellation}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users size={20} className="text-[var(--twb-color-vine)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[var(--twb-color-text-primary)] text-sm">
                        Children Welcome
                      </p>
                      <p className="text-[var(--twb-color-text-muted)] text-sm">
                        {farmStory.experiences.policies.children}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart size={20} className="text-[var(--twb-color-vine)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[var(--twb-color-text-primary)] text-sm">
                        Accessibility
                      </p>
                      <p className="text-[var(--twb-color-text-muted)] text-sm">
                        {farmStory.experiences.policies.accessibility}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users size={20} className="text-[var(--twb-color-vine)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[var(--twb-color-text-primary)] text-sm">
                        Group Rates
                      </p>
                      <p className="text-[var(--twb-color-text-muted)] text-sm">
                        {farmStory.experiences.policies.groups}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact & Directions */}
      <section className="py-20 bg-[var(--twb-color-ink)] text-[var(--twb-color-paper)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact */}
            <div>
              <Typography variant="h3" className="mb-6 text-[var(--twb-color-gold)]">
                Book Your Visit
              </Typography>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone size={24} className="text-[var(--twb-color-gold)]" />
                  <div>
                    <p className="text-sm text-[var(--twb-color-paper)]/70">Phone</p>
                    <a href={`tel:${farmStory.contact.phone}`} className="text-[var(--twb-color-paper)] hover:text-[var(--twb-color-gold)] transition-colors">
                      {farmStory.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={24} className="text-[var(--twb-color-gold)]" />
                  <div>
                    <p className="text-sm text-[var(--twb-color-paper)]/70">WhatsApp</p>
                    <a href={`https://wa.me/${farmStory.contact.whatsapp.replace(/\s/g, '')}`} className="text-[var(--twb-color-paper)] hover:text-[var(--twb-color-gold)] transition-colors">
                      {farmStory.contact.whatsapp}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={24} className="text-[var(--twb-color-gold)]" />
                  <div>
                    <p className="text-sm text-[var(--twb-color-paper)]/70">Email</p>
                    <a href={`mailto:${farmStory.contact.reservations}`} className="text-[var(--twb-color-paper)] hover:text-[var(--twb-color-gold)] transition-colors">
                      {farmStory.contact.reservations}
                    </a>
                  </div>
                </div>
              </div>
              <Link to="/contact">
                <Button variant="secondary" size="large" className="w-full lg:w-auto">
                  Send Us a Message
                </Button>
              </Link>
            </div>

            {/* Directions */}
            <div>
              <Typography variant="h3" className="mb-6 text-[var(--twb-color-gold)]">
                How to Find Us
              </Typography>
              <div className="space-y-4 text-[var(--twb-color-paper)]/90">
                <p className="leading-relaxed">
                  <strong>Address:</strong><br />
                  {farmStory.location.address}
                </p>
                <p className="leading-relaxed">
                  {farmStory.location.directions}
                </p>
                <div className="bg-[var(--twb-color-paper)]/10 p-4 rounded-lg border border-[var(--twb-color-paper)]/20">
                  <p className="text-sm text-[var(--twb-color-paper)]/70 mb-1">GPS Coordinates</p>
                  <p className="font-mono text-[var(--twb-color-gold)]">
                    {farmStory.location.gps.lat}, {farmStory.location.gps.lng}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--twb-color-plum)] to-[var(--twb-color-plum)]/80 text-[var(--twb-color-paper)]">
        <Container variant="content">
          <div className="text-center">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-paper)]">
              We Can't Wait to Meet You
            </Typography>
            <p className="text-xl text-[var(--twb-color-paper)]/90 mb-8 max-w-2xl mx-auto">
              Whether you're a wine connoisseur or just looking for a beautiful day in the countryside, 
              our farm has something special for everyone. Book your visit today and become part of our story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="large">
                  Book Now
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="large">
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </Layout>
  );
};
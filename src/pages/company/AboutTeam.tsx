/**
 * Our Team Page Component
 * 
 * Meet the family team at Handcrafted Wines.
 * 
 * Features:
 * - Individual bios for each family member
 * - Photos and roles
 * - Personal stories
 * - Family dynamics
 * 
 * Data source: farmStory.team
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { Users, Heart, Mail } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router';
import { farmStory } from '../../data/farmStory';
import heroImage from 'figma:asset/fe3c1c394bedc4c207970e159acb3d745653037f.png';

export const AboutTeam = () => {
  return (
    <Layout>
      <Hero 
        title="Meet the Family"
        subtitle="Four people, one farm, and a shared passion for making exceptional things by hand."
        imageSrc={heroImage}
        height="medium"
      />

      {/* Team Introduction */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
              We're a Small Team (By Design)
            </Typography>
            <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                We could hire more people. We could scale up, automate, and grow faster. But we don't. 
                Because handcrafted means <em>hand</em>crafted—and these are the hands that do it.
              </p>
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                Meet Pieter, Annelie, Hennie, and Liezl. Between the four of us, we've got over 100 years 
                of combined experience in winemaking, cheesemaking, distilling, and vineyard management. 
                But more importantly, we genuinely love what we do.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-[var(--twb-color-plum)]/5">
        <Container>
          <div className="space-y-20">
            {farmStory.team.map((member, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={member.name}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Photo */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-[var(--twb-color-plum)] to-[var(--twb-color-clay)] flex items-center justify-center shadow-xl">
                      <div className="text-center text-white p-8">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                          <Users size={64} className="text-white" />
                        </div>
                        <p className="text-sm opacity-80">Photo coming soon</p>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="mb-6">
                      <Typography variant="caption" className="uppercase tracking-widest text-[var(--twb-color-accent-primary)] mb-2">
                        {member.role}
                      </Typography>
                      <Typography variant="h2" className="text-[var(--twb-color-plum)] mb-2">
                        {member.name}
                      </Typography>
                      {member.title && (
                        <p className="text-[var(--twb-color-text-muted)] text-lg italic">
                          {member.title}
                        </p>
                      )}
                    </div>

                    <div className="space-y-4 text-[var(--twb-color-text-muted)] leading-relaxed mb-6">
                      {member.bio.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>

                    {member.specialties && member.specialties.length > 0 && (
                      <div className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-6 rounded-lg border border-[var(--twb-border-tertiary)]">
                        <h4 className="font-serif text-lg mb-3 text-[var(--twb-color-text-primary)]">
                          Specialties
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty) => (
                            <span 
                              key={specialty}
                              className="px-3 py-1 bg-[var(--twb-color-plum)]/10 text-[var(--twb-color-plum)] text-sm rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {member.email && (
                      <div className="mt-6">
                        <a 
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-2 text-[var(--twb-color-plum)] hover:text-[var(--twb-color-clay)] transition-colors"
                        >
                          <Mail size={18} />
                          <span>{member.email}</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Family Values */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-secondary)]">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
              What Unites Us
            </Typography>
            <p className="text-[var(--twb-color-text-muted)] text-lg max-w-2xl mx-auto">
              Four different people with one shared belief: quality over quantity, always.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {farmStory.values.map((value) => (
              <div 
                key={value.title}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--twb-color-plum)]/10 flex items-center justify-center group-hover:bg-[var(--twb-color-plum)]/20 transition-colors">
                  <Heart size={40} className="text-[var(--twb-color-plum)]" />
                </div>
                <h3 className="font-serif text-xl mb-3 text-[var(--twb-color-text-primary)]">
                  {value.title}
                </h3>
                <p className="text-[var(--twb-color-text-muted)] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Join the Team (Careers) */}
      <section className="py-20 bg-[var(--twb-color-ink)] text-white">
        <Container variant="content">
          <div className="text-center">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-gold)]">
              Want to Join Us?
            </Typography>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We occasionally hire for seasonal harvest help and specialized roles. 
              If you're passionate about wine, cheese, or spirits—and you believe in doing things 
              the slow, careful way—we'd love to hear from you.
            </p>
            <Link to="/careers">
              <Button variant="secondary" size="large">
                View Careers
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA - Meet in Person */}
      <section className="py-20 bg-gradient-to-br from-[var(--twb-color-plum)] to-[var(--twb-color-plum)]/80 text-white">
        <Container variant="content">
          <div className="text-center">
            <Typography variant="h2" className="mb-6 text-white">
              Meet Us in Person
            </Typography>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              The best way to meet the team is to visit the farm. We're usually around during tastings 
              and tours—Pieter loves talking about wine, Annelie loves sharing cheese stories, and 
              Hennie will happily explain the entire distillation process (he's very passionate).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/visit">
                <Button variant="secondary" size="large">
                  Plan Your Visit
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="large">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </Layout>
  );
};

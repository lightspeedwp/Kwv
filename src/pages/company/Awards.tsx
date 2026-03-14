/**
 * Awards Page Component
 * 
 * Showcase awards and recognition for Handcrafted Wines.
 * 
 * Features:
 * - Total awards count
 * - Category breakdown (Wines, Spirits, Cheese)
 * - Recent notable awards
 * - International recognition
 * - Family pride and storytelling
 * 
 * Data source: farmStory.awards
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { Award, Trophy, Star, Medal, Grape, FlaskConical, Heart } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router';
import { farmStory } from '../../data/farmStory';
import heroImage from 'figma:asset/dfa0e54405c973969c9c003c1ae5ef0e7a16880c.png';

export const Awards: React.FC = () => {
  return (
    <Layout>
      <Hero 
        title="Awards & Recognition"
        subtitle="Quality you can taste, excellence recognized worldwide. Our family's commitment to handcrafted perfection has earned us recognition from international competitions."
        imageSrc={heroImage}
        height="medium"
      />

      {/* Awards Summary */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-secondary)]">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-[var(--twb-color-gold)]/20">
              <Trophy size={48} className="text-[var(--twb-color-gold)]" />
            </div>
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
              {farmStory.awards.total}+ Awards and Counting
            </Typography>
            <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                We don't make wine, spirits, or cheese for awards. We make them because we love the craft. 
                But when international judges recognize the quality of what we're pouring our hearts into? 
                That's pretty special.
              </p>
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                Since 1918, four generations of our family have been perfecting the art of handcrafted winemaking. 
                These awards represent over a century of dedication, patience, and an obsessive attention to detail.
              </p>
            </div>
          </div>

          {/* Awards by Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Wine Awards */}
            <div className="text-center group">
              <div className="relative">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--twb-color-plum)] to-[var(--twb-color-plum)]/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                  <Grape size={56} className="text-white" />
                </div>
                <div className="absolute top-0 right-1/4 bg-[var(--twb-color-gold)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {farmStory.awards.byCategory.wines}
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-3 text-[var(--twb-color-plum)]">
                Wine Awards
              </h3>
              <p className="text-[var(--twb-color-text-muted)]">
                International recognition for our handcrafted wines
              </p>
            </div>

            {/* Spirits Awards */}
            <div className="text-center group">
              <div className="relative">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--twb-color-clay)] to-[var(--twb-color-clay)]/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                  <FlaskConical size={56} className="text-white" />
                </div>
                <div className="absolute top-0 right-1/4 bg-[var(--twb-color-gold)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {farmStory.awards.byCategory.spirits}
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-3 text-[var(--twb-color-clay)]">
                Spirits Awards
              </h3>
              <p className="text-[var(--twb-color-text-muted)]">
                Our craft grappa and brandy honored globally
              </p>
            </div>

            {/* Cheese Awards */}
            <div className="text-center group">
              <div className="relative">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--twb-color-gold)] to-[var(--twb-color-gold)]/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                  <Heart size={56} className="text-white" />
                </div>
                <div className="absolute top-0 right-1/4 bg-[var(--twb-color-gold)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {farmStory.awards.byCategory.cheese}
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-3 text-[var(--twb-color-gold)]">
                Cheese Awards
              </h3>
              <p className="text-[var(--twb-color-text-muted)]">
                Farmstead cheese winning national competitions
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Notable Awards */}
      <section className="py-20 bg-[var(--twb-color-plum)]/5">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
              Notable Recent Awards
            </Typography>
            <p className="text-[var(--twb-color-text-muted)] text-lg max-w-2xl mx-auto">
              Here are some of our proudest achievements from the past few years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {farmStory.awards.notable.map((award, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-8 rounded-lg border border-[var(--twb-border-tertiary)] hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--twb-color-gold)]/20 flex items-center justify-center">
                    <Medal size={32} className="text-[var(--twb-color-gold)]" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-[var(--twb-color-plum)]/10 text-[var(--twb-color-plum)] text-xs font-bold rounded-full mb-2">
                      {award.year}
                    </span>
                    <h3 className="font-serif text-xl mb-2 text-[var(--twb-color-text-primary)]">
                      {award.product}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-[var(--twb-color-gold)]" />
                    <span className="font-bold text-[var(--twb-color-gold)]">{award.award}</span>
                  </div>
                  <p className="text-sm text-[var(--twb-color-text-muted)] italic">
                    {award.competition}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* International Recognition */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
              International Recognition
            </Typography>
            <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed">
                Our wines, spirits, and cheese have been recognized by some of the world's most 
                prestigious competitions. From the Decanter World Wine Awards in London to the 
                International Wine & Spirits Competition, judges from around the globe have 
                validated what we've known all along: slow, handcrafted quality beats mass production 
                every time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Decanter World Wine Awards',
              'International Wine & Spirits Competition',
              'Veritas Awards (South Africa)',
              'Michelangelo International Wine Awards',
              'SA Cheese Festival Awards',
              'Cape Winemakers Guild',
            ].map((competition) => (
              <div 
                key={competition}
                className="flex items-center gap-3 p-4 bg-[var(--twb-color-plum)]/5 rounded-lg border border-[var(--twb-border-tertiary)]"
              >
                <Award size={24} className="text-[var(--twb-color-gold)] flex-shrink-0" />
                <span className="text-[var(--twb-color-text-primary)] font-medium">
                  {competition}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What Awards Mean to Us */}
      <section className="py-20 bg-[var(--twb-color-ink)] text-white">
        <Container variant="content">
          <div className="text-center">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-gold)]">
              What Awards Really Mean to Us
            </Typography>
            <div className="prose prose-lg max-w-3xl mx-auto mb-8">
              <p className="text-white/90 leading-relaxed text-lg">
                "We don't chase awards. We chase perfection in the vineyard, precision in the cellar, 
                and authenticity in every bottle. The awards are just confirmation that we're on the 
                right track."
              </p>
              <p className="text-white/70 text-base italic">
                — Pieter van der Berg, Winemaker (4th Generation)
              </p>
            </div>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Every award represents countless early mornings in the vineyard, careful barrel tastings, 
              and the collective expertise of our family team. But more than trophies, they're validation 
              that handcrafted, small-batch quality can compete with—and beat—the biggest producers in the world.
            </p>
            <Link to="/shop">
              <Button variant="secondary" size="large">
                Taste Our Award-Winning Products
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA - Visit and Taste */}
      <section className="py-20 bg-gradient-to-br from-[var(--twb-color-plum)] to-[var(--twb-color-plum)]/80 text-white">
        <Container variant="content">
          <div className="text-center">
            <Typography variant="h2" className="mb-6 text-white">
              Taste the Difference for Yourself
            </Typography>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Awards are nice, but your opinion is what really matters. Come visit our tasting room 
              and decide for yourself if we live up to the hype.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/visit">
                <Button variant="secondary" size="large">
                  Book a Tasting
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="large">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </Layout>
  );
};

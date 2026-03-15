/**
 * About Page Component
 * 
 * Main "About Us" page for Handcrafted Wines family farm.
 * 
 * Features:
 * - Family story and heritage (1918-2026)
 * - Links to sub-pages (Farm, Team, Awards, Sustainability)
 * - 4-generation legacy
 * - What makes us different
 * - Family values
 * 
 * Voice: Warm, personal, family-oriented
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { FullWidthSection } from '../../components/sections/FullWidthSection';
import { Heart, Users, Mountain, Award, Leaf, ArrowRight } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router';
import { farmStory } from '../../data/farmStory';
import { HandDrawnUnderline } from '../../components/decorative/HandDrawnUnderline';
import { PaperTexture } from '../../components/decorative/PaperTexture';
import { OrganicBorder } from '../../components/decorative/OrganicBorder';
import { BrushStrokeDivider } from '../../components/decorative/BrushStrokeDivider';
import { WaxSealStamp } from '../../components/decorative/WaxSealStamp';
import heroImage from 'figma:asset/fe3c1c394bedc4c207970e159acb3d745653037f.png';

export const About: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - farmStory.established;

  return (
    <Layout>
      <Hero 
        title="Our Family Story"
        subtitle={`${yearsInBusiness} years of winemaking, four generations of family, and one timeless passion: handcrafting exceptional wines, spirits, and cheese on Paarl Mountain.`}
        imageSrc={heroImage}
        height="large"
      />

      {/* Introduction - The Full Story */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="space-y-8">
            <div className="text-center mb-12">
              {/* Wax Seal Badge */}
              <div className="flex justify-center mb-6">
                <WaxSealStamp 
                  text="Since 1918" 
                  variant="plum" 
                  size="lg"
                />
              </div>
              
              <Typography variant="caption" className="uppercase tracking-widest text-[var(--twb-color-accent-primary)] mb-4">
                Since {farmStory.established}
              </Typography>
              <Typography variant="h2" className="text-[var(--twb-color-plum)] mb-6">
                Four Generations, One Farm, Endless Passion
              </Typography>
            </div>

            <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
              {farmStory.story.full.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-[var(--twb-color-text-primary)] leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Decorative Divider */}
      <BrushStrokeDivider 
        variant="double-stroke" 
        color="var(--twb-color-gold)" 
        spacing="md"
      />

      {/* Sub-Pages Grid */}
      <section className="py-20 bg-[var(--twb-color-ink)] text-white">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4 text-[var(--twb-color-gold)]">
              Learn More About Us
            </Typography>
            <p className="text-white/80 text-lg">
              Dive deeper into our story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* The Farm */}
            <Link 
              to="/about/farm"
              className="group bg-white/10 hover:bg-white/20 p-8 rounded-lg border border-white/20 hover:border-[var(--twb-color-gold)] transition-all"
            >
              <Mountain size={40} className="text-[var(--twb-color-gold)] mb-4" />
              <h3 className="font-serif text-2xl mb-3 text-white">
                The Farm
              </h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                Our vineyard, distillery, goat dairy, and the mountain we call home.
              </p>
              <div className="flex items-center text-[var(--twb-color-gold)] text-sm group-hover:translate-x-2 transition-transform">
                Explore the Farm <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>

            {/* Our Team */}
            <Link 
              to="/about/team"
              className="group bg-white/10 hover:bg-white/20 p-8 rounded-lg border border-white/20 hover:border-[var(--twb-color-gold)] transition-all"
            >
              <Users size={40} className="text-[var(--twb-color-gold)] mb-4" />
              <h3 className="font-serif text-2xl mb-3 text-white">
                Our Team
              </h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                Meet Pieter, Annelie, Hennie, and Liezl—the family behind every bottle.
              </p>
              <div className="flex items-center text-[var(--twb-color-gold)] text-sm group-hover:translate-x-2 transition-transform">
                Meet the Family <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>

            {/* Awards */}
            <Link 
              to="/about/awards"
              className="group bg-white/10 hover:bg-white/20 p-8 rounded-lg border border-white/20 hover:border-[var(--twb-color-gold)] transition-all"
            >
              <Award size={40} className="text-[var(--twb-color-gold)] mb-4" />
              <h3 className="font-serif text-2xl mb-3 text-white">
                Awards
              </h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                {farmStory.awards.total}+ awards and counting. Quality recognized worldwide.
              </p>
              <div className="flex items-center text-[var(--twb-color-gold)] text-sm group-hover:translate-x-2 transition-transform">
                View Awards <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>

            {/* Sustainability */}
            <Link 
              to="/about/sustainability"
              className="group bg-white/10 hover:bg-white/20 p-8 rounded-lg border border-white/20 hover:border-[var(--twb-color-gold)] transition-all"
            >
              <Leaf size={40} className="text-[var(--twb-color-gold)] mb-4" />
              <h3 className="font-serif text-2xl mb-3 text-white">
                Sustainability
              </h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                How we care for our land, animals, and the planet for generations to come.
              </p>
              <div className="flex items-center text-[var(--twb-color-gold)] text-sm group-hover:translate-x-2 transition-transform">
                Our Practices <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA - Visit Us */}
      <section className="py-20 bg-gradient-to-br from-[var(--twb-color-plum)] to-[var(--twb-color-plum)]/80 text-white">
        <Container variant="content">
          <div className="text-center">
            <Typography variant="h2" className="mb-6 text-white">
              Stories Are Better in Person
            </Typography>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Come visit our farm on Paarl Mountain. Taste our wines, meet the family, tour the vineyard, and see where the magic happens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/visit">
                <Button variant="secondary" size="large">
                  Plan Your Visit
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="large">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </Layout>
  );
};
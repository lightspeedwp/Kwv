/**
 * Home Page Component
 * 
 * Homepage for Handcrafted Wines boutique wine farm.
 * Family-owned farm established 1918 on Paarl Mountain.
 * 
 * Features:
 * - Hero with family story and farm imagery
 * - 4-generation timeline
 * - What we make (wines, spirits, cheese)
 * - Family values
 * - Featured products
 * - Visit/Experience CTAs
 * - Newsletter signup
 * 
 * Voice: Warm, family-oriented, hand-crafted aesthetic
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { Newsletter } from '../../components/sections/Newsletter';
import { FAQSection } from '../../components/sections/FAQSection';
import { Heart, Award, Grape, Mountain, Users, Leaf } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link, useNavigate } from 'react-router';
import { farmStory } from '../../data/farmStory';
import { HandDrawnUnderline } from '../../components/decorative/HandDrawnUnderline';
import { PaperTexture } from '../../components/decorative/PaperTexture';
import { WineLabelStamp } from '../../components/decorative/WineLabelStamp';
import { OrganicBorder } from '../../components/decorative/OrganicBorder';
import heroImage from 'figma:asset/41b3d8ee458f4aa234b644392aeceaf24abdff91.png';

export const Home = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - farmStory.established;

  return (
    <Layout>
      {/* Hero Section */}
      <Hero 
        title="Four Generations of Handcrafted Wines"
        subtitle={`Since ${farmStory.established}, our family has been making exceptional wines, spirits, and cheese on Paarl Mountain. Every bottle tells a story of love, tradition, and the timeless beauty of handmade things.`}
        imageSrc={heroImage}
        height="large"
        primaryAction={{ label: 'Shop Our Wines', onClick: () => navigate('/shop') }}
        secondaryAction={{ label: 'Visit Our Farm', onClick: () => navigate('/visit') }}
      />
      
      {/* Story Introduction */}
      <section className="relative py-20 bg-[var(--twb-color-bg-primary)]">
        <PaperTexture intensity="subtle" opacity={0.05} />
        <Container variant="content">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
                {yearsInBusiness} Years of Family Winemaking
              </Typography>
              <HandDrawnUnderline 
                variant="brush" 
                color="var(--twb-color-plum)" 
                width={90}
                offset={-4}
              />
            </div>
            <Typography variant="body" className="text-lg text-[var(--twb-color-text-muted)] leading-relaxed max-w-3xl mx-auto">
              {farmStory.story.short}
            </Typography>
            
            {/* Wine Label Stamp Badge */}
            <div className="mt-12 flex justify-center">
              <WineLabelStamp
                text={`Est. ${farmStory.established}`}
                variant="vintage"
                size="lg"
                rotation={-3}
                borderColor="var(--twb-color-plum)"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            {farmStory.story.full.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-[var(--twb-color-text-primary)] leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about">
              <Button variant="primary">
                Read Our Full Story
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[var(--twb-color-ink)] text-white">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4 text-[var(--twb-color-gold)]">
              Our Family Timeline
            </Typography>
            <p className="text-white/80 text-lg">
              Four generations, one passion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {farmStory.story.timeline.map((milestone, index) => (
              <div 
                key={milestone.year}
                className="relative text-center group"
              >
                {/* Timeline connector (not on last item for mobile, not on desktop) */}
                {index < farmStory.story.timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-[var(--twb-color-gold)]/30" />
                )}

                {/* Year circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--twb-color-gold)] flex items-center justify-center font-bold text-[var(--twb-color-ink)] group-hover:scale-110 transition-transform">
                  {milestone.year}
                </div>

                <h3 className="font-serif text-xl mb-2 text-[var(--twb-color-gold)]">
                  {milestone.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Make */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-secondary)]">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4 text-[var(--twb-color-plum)]">
              What We Handcraft
            </Typography>
            <p className="text-[var(--twb-color-text-muted)] text-lg max-w-2xl mx-auto">
              Small batches. Big heart. Every product made with care on our family farm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Wines */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--twb-color-plum)]/10 flex items-center justify-center group-hover:bg-[var(--twb-color-plum)]/20 transition-colors">
                <Grape size={40} className="text-[var(--twb-color-plum)]" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-[var(--twb-color-plum)]">
                {farmStory.products.wines.title}
              </h3>
              <p className="text-[var(--twb-color-text-muted)] mb-6 leading-relaxed">
                {farmStory.products.wines.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {farmStory.products.wines.varieties.map((variety) => (
                  <span 
                    key={variety}
                    className="px-3 py-1 bg-[var(--twb-color-plum)]/10 text-[var(--twb-color-plum)] text-sm rounded-full"
                  >
                    {variety}
                  </span>
                ))}
              </div>
              <Link to="/shop/wines">
                <Button variant="outline">Shop Wines</Button>
              </Link>
            </div>

            {/* Spirits */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--twb-color-clay)]/10 flex items-center justify-center group-hover:bg-[var(--twb-color-clay)]/20 transition-colors">
                <Award size={40} className="text-[var(--twb-color-clay)]" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-[var(--twb-color-clay)]">
                {farmStory.products.spirits.title}
              </h3>
              <p className="text-[var(--twb-color-text-muted)] mb-6 leading-relaxed">
                {farmStory.products.spirits.description}
              </p>
              <div className="space-y-2 mb-6">
                {farmStory.products.spirits.offerings.map((offering) => (
                  <div key={offering} className="text-sm text-[var(--twb-color-text-primary)]">
                    • {offering}
                  </div>
                ))}
              </div>
              <Link to="/shop/spirits">
                <Button variant="outline">Shop Spirits</Button>
              </Link>
            </div>

            {/* Cheese */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--twb-color-gold)]/10 flex items-center justify-center group-hover:bg-[var(--twb-color-gold)]/20 transition-colors">
                <Heart size={40} className="text-[var(--twb-color-gold)]" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-[var(--twb-color-gold)]">
                {farmStory.products.cheese.title}
              </h3>
              <p className="text-[var(--twb-color-text-muted)] mb-6 leading-relaxed">
                {farmStory.products.cheese.description}
              </p>
              <div className="space-y-2 mb-6">
                {farmStory.products.cheese.offerings.map((offering) => (
                  <div key={offering} className="text-sm text-[var(--twb-color-text-primary)]">
                    • {offering}
                  </div>
                ))}
              </div>
              <Link to="/shop/cheese">
                <Button variant="outline">Shop Cheese</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--twb-color-plum)]/5">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4 text-[var(--twb-color-plum)]">
              What We Believe
            </Typography>
            <p className="text-[var(--twb-color-text-muted)] text-lg">
              The values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {farmStory.values.map((value) => {
              const iconMap: Record<string, any> = {
                heart: Heart,
                users: Users,
                leaf: Leaf,
                award: Award
              };
              const IconComponent = iconMap[value.icon] || Heart;

              return (
                <OrganicBorder
                  key={value.title}
                  variant="card"
                  bgColor="var(--twb-color-bg-tertiary)"
                  borderColor="var(--twb-color-border)"
                  className="p-8 hover:shadow-lg transition-shadow"
                >
                  <IconComponent size={32} className="text-[var(--twb-color-plum)] mb-4" />
                  <h3 className="font-serif text-xl mb-3 text-[var(--twb-color-text-primary)]">
                    {value.title}
                  </h3>
                  <p className="text-[var(--twb-color-text-muted)] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </OrganicBorder>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Visit CTA */}
      <section className="py-20 bg-[var(--twb-color-ink)] text-white">
        <Container variant="content">
          <div className="text-center">
            <Mountain size={64} className="mx-auto mb-6 text-[var(--twb-color-gold)]" />
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-gold)]">
              Come Visit Our Farm
            </Typography>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {farmStory.location.farm}. Join us for wine tastings, farm tours, cheese pairings, and unforgettable experiences on Paarl Mountain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/visit">
                <Button variant="primary" size="large">
                  Plan Your Visit
                </Button>
              </Link>
              <Link to="/experiences">
                <Button variant="outline" size="large">
                  Browse Experiences
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Wine Club CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--twb-color-plum)] to-[var(--twb-color-plum)]/80 text-white">
        <Container variant="content">
          <div className="text-center">
            <Typography variant="h2" className="mb-6 text-white">
              Join Our Wine Club
            </Typography>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get exclusive access to limited releases, family recipes, harvest updates, and special member-only events. It's like being part of the family.
            </p>
            <Link to="/wine-club">
              <Button variant="secondary" size="large">
                Learn More About Wine Club
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <FAQSection items={[
        { 
          question: "Where can I buy your wines, spirits, and cheese?", 
          answer: "You can purchase our full range directly through our online shop, or visit us at our farm tasting room on Paarl Mountain. We also ship throughout South Africa." 
        },
        { 
          question: "Do I need to book for tastings and tours?", 
          answer: "Yes, we recommend booking at least 48 hours in advance to ensure availability. You can book online or call us at +27 21 807 3007." 
        },
        { 
          question: "Can you accommodate large groups or events?", 
          answer: "Absolutely! We host weddings, corporate events, and private functions. Contact our events team at events@handcraftedwines.co.za for more information." 
        },
        { 
          question: "How long does delivery take?", 
          answer: "Delivery typically takes 3-5 business days to main centers and 5-7 business days to regional areas within South Africa." 
        }
      ]} />

      {/* Newsletter */}
      <Newsletter />
    </Layout>
  );
};
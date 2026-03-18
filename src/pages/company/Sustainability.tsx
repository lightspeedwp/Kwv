/**
 * Sustainability Page Component
 * 
 * How Handcrafted Wines cares for the land, animals, and community.
 * 
 * Features:
 * - Family approach to sustainability
 * - Environmental practices
 * - Animal welfare (goats)
 * - Community involvement
 * - Long-term thinking (generational perspective)
 * 
 * Data source: farmStory.sustainability
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { Sprout, Droplet, Sun, Recycle, Heart, Users, Wind } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router';
import { farmStory } from '../../data/farmStory';
import heroImage from 'figma:asset/fe3c1c394bedc4c207970e159acb3d745653037f.png';

export const Sustainability: React.FC = () => {
  return (
    <Layout>
      <Hero 
        title="Caring for Our Land"
        subtitle="We don't own this farm—we're just taking care of it for the next generation. Sustainability isn't a buzzword for us. It's how we've farmed for over a century."
        imageSrc={heroImage}
        height="medium"
      />

      {/* Philosophy */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-vine)]">
              A Generational Perspective
            </Typography>
            <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                {farmStory.sustainability.commitment}
              </p>
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                When you're the fourth generation on the same land, you don't think in quarters or fiscal years. 
                You think in generations. Will the soil still be healthy for our grandchildren? Will the mountain 
                springs still flow? Will the goats still have good grazing land?
              </p>
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                These aren't abstract questions for us. They're personal. This farm has been in our family 
                since 1918, and we plan to keep it that way for the next century.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Practices */}
      <section className="py-20 bg-[var(--twb-color-vine)]/5">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-vine)]">
              How We Farm
            </Typography>
            <p className="text-[var(--twb-color-text-muted)] text-lg max-w-2xl mx-auto">
              These aren't just policies—they're how we've always done things
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {farmStory.sustainability.practices.map((practice, index) => {
              const icons = [Sprout, Droplet, Sun, Recycle, Wind, Heart];
              const IconComponent = icons[index % icons.length];
              
              return (
                <div 
                  key={index}
                  className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-8 rounded-lg border border-[var(--twb-border-tertiary)] hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 mb-6 rounded-full bg-[var(--twb-color-vine)]/10 flex items-center justify-center">
                    <IconComponent size={32} className="text-[var(--twb-color-vine)]" />
                  </div>
                  <p className="text-[var(--twb-color-text-primary)] leading-relaxed">
                    {practice}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Detailed Practices */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-secondary)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vineyard Care */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[var(--twb-color-vine)]/10 flex items-center justify-center">
                  <Sprout size={32} className="text-[var(--twb-color-vine)]" />
                </div>
                <Typography variant="h3" className="text-[var(--twb-color-vine)]">
                  Vineyard Care
                </Typography>
              </div>
              <div className="space-y-4 text-[var(--twb-color-text-muted)] leading-relaxed">
                <p>
                  <strong>No synthetic pesticides or herbicides.</strong> We use natural compost, 
                  beneficial insects, and manual weeding. It's more work, but it keeps the soil healthy 
                  and the vines strong.
                </p>
                <p>
                  <strong>Cover crops between vine rows</strong> prevent erosion, fix nitrogen naturally, 
                  and provide habitat for beneficial insects. We plant indigenous fynbos species that 
                  attract pollinators.
                </p>
                <p>
                  <strong>Hand-harvesting only.</strong> No machines. This protects the vines and allows 
                  us to sort grapes in the vineyard, selecting only the best fruit.
                </p>
                <p>
                  <strong>Dry-farming techniques</strong> stress the vines just enough to produce 
                  concentrated, flavorful grapes while conserving water.
                </p>
              </div>
            </div>

            {/* Water Conservation */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[var(--twb-color-vine)]/10 flex items-center justify-center">
                  <Droplet size={32} className="text-[var(--twb-color-vine)]" />
                </div>
                <Typography variant="h3" className="text-[var(--twb-color-vine)]">
                  Water Management
                </Typography>
              </div>
              <div className="space-y-4 text-[var(--twb-color-text-muted)] leading-relaxed">
                <p>
                  <strong>Mountain spring water</strong> feeds our vineyard through a gravity-fed system 
                  built in 1952. No pumps, no electricity—just natural flow from the mountain.
                </p>
                <p>
                  <strong>Drip irrigation</strong> delivers water directly to vine roots, reducing waste 
                  by 60% compared to overhead sprinklers.
                </p>
                <p>
                  <strong>Rainwater harvesting</strong> captures winter rains in natural catchments for 
                  summer use. The old stone cellar's roof channels water into underground cisterns.
                </p>
                <p>
                  <strong>Greywater recycling</strong> from the cheese dairy irrigates our fruit trees 
                  and vegetable garden. Nothing goes to waste.
                </p>
              </div>
            </div>

            {/* Energy Use */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[var(--twb-color-vine)]/10 flex items-center justify-center">
                  <Sun size={32} className="text-[var(--twb-color-vine)]" />
                </div>
                <Typography variant="h3" className="text-[var(--twb-color-vine)]">
                  Energy & Carbon
                </Typography>
              </div>
              <div className="space-y-4 text-[var(--twb-color-text-muted)] leading-relaxed">
                <p>
                  <strong>Solar panels</strong> on the distillery roof generate 80% of our electricity. 
                  Hennie installed them himself in 2015.
                </p>
                <p>
                  <strong>Passive cooling</strong> in the stone cellar eliminates the need for 
                  air conditioning. The thick granite walls maintain a constant 15°C year-round.
                </p>
                <p>
                  <strong>Minimal shipping</strong>—we sell most of our products directly from the 
                  farm or through local retailers. No cross-continental logistics chains.
                </p>
                <p>
                  <strong>Glass bottles only</strong>—recyclable, reusable, and far better for wine 
                  quality than plastic or bag-in-box alternatives.
                </p>
              </div>
            </div>

            {/* Animal Welfare */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[var(--twb-color-vine)]/10 flex items-center justify-center">
                  <Heart size={32} className="text-[var(--twb-color-vine)]" />
                </div>
                <Typography variant="h3" className="text-[var(--twb-color-vine)]">
                  Animal Welfare
                </Typography>
              </div>
              <div className="space-y-4 text-[var(--twb-color-text-muted)] leading-relaxed">
                <p>
                  <strong>Free-range goats</strong> graze on mountain fynbos during the day and sleep 
                  in a barn at night (to protect them from leopards—yes, we have leopards).
                </p>
                <p>
                  <strong>No growth hormones or antibiotics</strong> in our herd. If a goat gets sick, 
                  we treat it individually and don't use its milk for cheese until it's fully recovered.
                </p>
                <p>
                  <strong>Kidding season care:</strong> Annelie sleeps in the barn during kidding season 
                  (spring) to monitor births and ensure mothers and babies are healthy.
                </p>
                <p>
                  <strong>Retired goats</strong> live out their days on the farm. We don't sell or 
                  slaughter animals that have given us years of milk.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-[var(--twb-color-ink)] text-white">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-gold)]">
              Community & People
            </Typography>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Sustainability isn't just about the environment—it's about people too
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Users size={40} className="text-[var(--twb-color-gold)]" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-white">Fair Wages</h3>
              <p className="text-white/70 leading-relaxed">
                All our team members—including seasonal harvest workers—earn above South Africa's 
                minimum wage with health benefits and paid leave.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Sprout size={40} className="text-[var(--twb-color-gold)]" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-white">Local Sourcing</h3>
              <p className="text-white/70 leading-relaxed">
                Oak barrels from France, yes—but everything else comes from within 50km: 
                bottles, corks, labels, packaging. Support local businesses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Heart size={40} className="text-[var(--twb-color-gold)]" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-white">Farm Education</h3>
              <p className="text-white/70 leading-relaxed">
                We host school groups and agriculture students for farm tours, teaching 
                sustainable farming practices and sharing what we've learned over four generations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-[var(--twb-color-vine)]/10">
        <Container variant="content">
          <div className="text-center">
            <Sprout size={64} className="mx-auto mb-8 text-[var(--twb-color-vine)]" />
            <blockquote className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
              <p className="text-2xl text-[var(--twb-color-text-primary)] leading-relaxed italic mb-6">
                "My grandfather told me: 'The land doesn't belong to us—we belong to the land.' 
                That's stuck with me for 40 years. We're just caretakers for this mountain, 
                these vines, these goats. Our job is to leave it better than we found it."
              </p>
              <footer className="text-[var(--twb-color-text-muted)] text-lg not-italic">
                — Pieter van der Berg, Winemaker (4th Generation)
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Certifications (Simplified) */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-vine)]">
              Certifications & Standards
            </Typography>
            <p className="text-[var(--twb-color-text-muted)] text-lg max-w-2xl mx-auto mb-8">
              We're certified by South Africa's Wine & Spirit Board and adhere to 
              Integrated Production of Wine (IPW) standards for sustainable viticulture.
            </p>
            <p className="text-sm text-[var(--twb-color-text-muted)] italic">
              We're a small farm—we don't chase every certification. But we do follow 
              the highest standards for food safety, organic practices, and ethical farming.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--twb-color-plum)] to-[var(--twb-color-plum)]/80 text-white">
        <Container variant="content">
          <div className="text-center">
            <Typography variant="h2" className="mb-6 text-white">
              See Our Practices in Action
            </Typography>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              The best way to understand how we farm is to see it yourself. Join us for 
              a farm tour and walk the vineyard, visit the goats, and learn about our 
              sustainable practices firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/experiences/farm-tour">
                <Button variant="secondary" size="large">
                  Book a Farm Tour
                </Button>
              </Link>
              <Link to="/about/farm">
                <Button variant="outline" size="large">
                  Learn About the Farm
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </Layout>
  );
};
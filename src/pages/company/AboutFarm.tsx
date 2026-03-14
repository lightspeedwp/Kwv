/**
 * The Farm Page Component
 * 
 * Detailed page about the Handcrafted Wines farm location and facilities.
 * 
 * Features:
 * - Farm location on Paarl Mountain
 * - Vineyard details
 * - Distillery information
 * - Goat dairy details
 * - Farm amenities and facilities
 * - Sustainability practices
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { Mountain, Grape, FlaskConical, Heart, Trees, Droplet, Sun, MapPin } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router';
import { farmStory } from '../../data/farmStory';
import heroImage from 'figma:asset/fe3c1c394bedc4c207970e159acb3d745653037f.png';

export const AboutFarm = () => {
  return (
    <Layout>
      <Hero 
        title="The Farm"
        subtitle={`${farmStory.location.farm}. Our home for over a century.`}
        imageSrc={heroImage}
        height="medium"
      />

      {/* Farm Introduction */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
              Our Home on Paarl Mountain
            </Typography>
            <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                Our farm sits on the slopes of Paarl Mountain in the heart of South Africa's Cape Winelands. 
                The mountain's unique granite-based soils, Mediterranean climate, and natural spring water 
                create the perfect conditions for growing exceptional grapes.
              </p>
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                Since 1918, four generations of the van der Berg family have worked this land. We've added 
                buildings, planted vines, built a distillery, and started a goat dairy—but the mountain 
                remains unchanged, watching over everything we do.
              </p>
            </div>
          </div>

          {/* Location Details */}
          <div className="bg-[var(--twb-color-plum)]/5 p-8 rounded-lg border border-[var(--twb-border-tertiary)] mt-12">
            <div className="flex items-start gap-4 mb-4">
              <MapPin size={32} className="text-[var(--twb-color-plum)] flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl mb-2 text-[var(--twb-color-text-primary)]">
                  Visit Us
                </h3>
                <p className="text-[var(--twb-color-text-muted)] mb-2">
                  <strong>Address:</strong> {farmStory.location.address}
                </p>
                <p className="text-[var(--twb-color-text-muted)] mb-2">
                  <strong>Region:</strong> {farmStory.location.region}
                </p>
                <p className="text-[var(--twb-color-text-muted)]">
                  <strong>GPS:</strong> {farmStory.location.gps.lat}, {farmStory.location.gps.lng}
                </p>
              </div>
            </div>
            <Link to="/visit" className="inline-block mt-4">
              <Button variant="primary">Plan Your Visit</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* The Vineyard */}
      <section className="py-20 bg-[var(--twb-color-ink)] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Grape size={64} className="text-[var(--twb-color-gold)] mb-6" />
              <Typography variant="h2" className="mb-6 text-[var(--twb-color-gold)]">
                The Vineyard
              </Typography>
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  Our estate vineyard spans 12 hectares on the western slopes of Paarl Mountain. 
                  The vines are planted on decomposed granite soils that drain naturally and stress 
                  the vines just enough to produce small, concentrated berries.
                </p>
                <p>
                  We grow {farmStory.products.wines.varieties.join(', ')}. Each block is hand-tended, 
                  hand-harvested, and treated like the individual it is.
                </p>
                <p>
                  The old stone cellar, built in 1952 by Pieter's grandfather, keeps our wines cool 
                  as they age in French oak barrels. It's the same cellar we've used for over 70 years—
                  because if it ain't broke, why fix it?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                <Sun size={32} className="text-[var(--twb-color-gold)] mb-3" />
                <h4 className="font-serif text-lg mb-2">Mediterranean Climate</h4>
                <p className="text-white/70 text-sm">Hot, dry summers and cool, wet winters</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                <Mountain size={32} className="text-[var(--twb-color-gold)] mb-3" />
                <h4 className="font-serif text-lg mb-2">Granite Soils</h4>
                <p className="text-white/70 text-sm">Ancient decomposed granite with natural drainage</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                <Droplet size={32} className="text-[var(--twb-color-gold)] mb-3" />
                <h4 className="font-serif text-lg mb-2">Natural Springs</h4>
                <p className="text-white/70 text-sm">Mountain spring water for irrigation</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg border border-white/20">
                <Trees size={32} className="text-[var(--twb-color-gold)] mb-3" />
                <h4 className="font-serif text-lg mb-2">Sustainable Farming</h4>
                <p className="text-white/70 text-sm">Organic practices, no synthetic pesticides</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Distillery */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-secondary)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[var(--twb-color-clay)]/10 p-8 rounded-lg">
                <h4 className="font-serif text-xl mb-4 text-[var(--twb-color-clay)]">
                  What We Distill
                </h4>
                <ul className="space-y-3">
                  {farmStory.products.spirits.offerings.map((spirit) => (
                    <li key={spirit} className="flex items-start gap-3">
                      <span className="text-[var(--twb-color-clay)] mt-1">•</span>
                      <span className="text-[var(--twb-color-text-primary)]">{spirit}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/shop/spirits" className="inline-block mt-6">
                  <Button variant="outline">Shop Craft Spirits</Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <FlaskConical size={64} className="text-[var(--twb-color-clay)] mb-6" />
              <Typography variant="h2" className="mb-6 text-[var(--twb-color-clay)]">
                The Distillery
              </Typography>
              <div className="space-y-4 text-[var(--twb-color-text-muted)] leading-relaxed">
                <p>
                  In 1987, we added a small copper-pot distillery to the farm. Hennie, our distiller 
                  (and Pieter's cousin), makes grappa from our grape pomace and brandy from our wines.
                </p>
                <p>
                  Everything is distilled in tiny batches—sometimes just 50 bottles at a time. 
                  We age our brandies in the same French oak barrels we use for wine, which gives 
                  them a smooth, complex character you won't find in mass-produced spirits.
                </p>
                <p>
                  Our 10 Year Reserve Brandy is especially popular. It's won awards at international 
                  competitions, but honestly, we're just proud it tastes like liquid gold.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Goat Dairy */}
      <section className="py-20 bg-[var(--twb-color-plum)]/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Heart size={64} className="text-[var(--twb-color-gold)] mb-6" />
              <Typography variant="h2" className="mb-6 text-[var(--twb-color-gold)]">
                The Goat Dairy
              </Typography>
              <div className="space-y-4 text-[var(--twb-color-text-muted)] leading-relaxed">
                <p>
                  In 2003, Annelie (Pieter's wife) started a small goat dairy with just 6 Saanen goats. 
                  Today, we have a herd of 40, and Annelie makes the most incredible farmstead cheese 
                  you'll ever taste.
                </p>
                <p>
                  The goats graze on mountain fynbos (indigenous plants), which gives the milk a 
                  subtle herbaceous flavor. Annelie handcrafts every wheel of cheese, from fresh 
                  chèvre to 6-month aged varieties.
                </p>
                <p>
                  Our Wine-Washed Rind cheese—where Annelie washes the rinds with our Shiraz—pairs 
                  beautifully with our red wines. It's become a signature item at our tastings.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-[var(--twb-color-bg-secondary)] p-8 rounded-lg border border-[var(--twb-border-tertiary)] shadow-lg">
                <h4 className="font-serif text-xl mb-4 text-[var(--twb-color-gold)]">
                  Our Artisan Cheeses
                </h4>
                <ul className="space-y-3 mb-6">
                  {farmStory.products.cheese.offerings.map((cheese) => (
                    <li key={cheese} className="flex items-start gap-3">
                      <span className="text-[var(--twb-color-gold)] mt-1">•</span>
                      <span className="text-[var(--twb-color-text-primary)]">{cheese}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-[var(--twb-color-text-muted)] mb-6">
                  All cheese is made by hand, using milk from our own goats, and aged on-site.
                </p>
                <Link to="/shop/cheese">
                  <Button variant="primary">Shop Cheese</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Farm Sustainability */}
      <section className="py-20 bg-white dark:bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
              Caring for the Land
            </Typography>
            <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert mb-8">
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed">
                {farmStory.sustainability.commitment}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {farmStory.sustainability.practices.map((practice) => (
                <div key={practice} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--twb-color-vine)]/10 flex items-center justify-center">
                    <Leaf size={32} className="text-[var(--twb-color-vine)]" />
                  </div>
                  <p className="text-[var(--twb-color-text-primary)]">{practice}</p>
                </div>
              ))}
            </div>

            <Link to="/about/sustainability" className="inline-block mt-12">
              <Button variant="primary">Learn More About Our Practices</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA - Visit the Farm */}
      <section className="py-20 bg-gradient-to-br from-[var(--twb-color-plum)] to-[var(--twb-color-plum)]/80 text-white">
        <Container variant="content">
          <div className="text-center">
            <Typography variant="h2" className="mb-6 text-white">
              Come See It for Yourself
            </Typography>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us for a farm tour. Walk the vineyard, visit the distillery, meet the goats, 
              and taste wines straight from the barrel. This is how wine should be experienced.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/experiences/farm-tour">
                <Button variant="secondary" size="large">
                  Book a Farm Tour
                </Button>
              </Link>
              <Link to="/visit">
                <Button variant="outline" size="large">
                  Plan Your Visit
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </Layout>
  );
};

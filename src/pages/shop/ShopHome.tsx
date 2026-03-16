/**
 * Shop Home Landing Page Component
 * 
 * Main shop landing page for Handcrafted Wines.
 * 
 * Features:
 * - Hero with shop intro
 * - Product categories (Wines, Spirits, Cheese, Gifts)
 * - Featured products showcase
 * - Farm-to-bottle story
 * - Shipping & guarantee info
 * - CTA to browse or visit
 * 
 * Data source: products.ts
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { Grape, FlaskConical, Heart, Gift, Truck, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router';
import { products, featuredProducts, productCategories } from '../../data/products';
import { farmStory } from '../../data/farmStory';
import { HandDrawnUnderline } from '../../components/decorative/HandDrawnUnderline';
import { OrganicBorder } from '../../components/decorative/OrganicBorder';
import heroImage from 'figma:asset/dfa0e54405c973969c9c003c1ae5ef0e7a16880c.png';

export const ShopHome: React.FC = () => {
  const categoryIcons = {
    wine: Grape,
    spirit: FlaskConical,
    cheese: Heart,
    gift: Gift
  };

  return (
    <Layout>
      <Hero 
        title="Shop Our Farm"
        subtitle="Every bottle, every wheel of cheese, every spirit—handcrafted with four generations of passion. Order online and we'll ship our family's work straight to your door."
        imageSrc={heroImage}
        height="medium"
      />

      {/* Introduction */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)] dark:bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center mb-12">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
              From Our Farm to Your Table
            </Typography>
            <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                We're a small farm, so we can't make millions of bottles. What we can do is pour 
                everything we've learned over 100+ years into every single product. No mass production. 
                No cutting corners. Just honest, handcrafted quality.
              </p>
              <p className="text-[var(--twb-color-text-primary)] leading-relaxed text-lg">
                When you order from us, you're supporting a family farm and getting products made 
                with genuine care. That's a promise.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-[var(--twb-color-plum)]/5">
        <Container>
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <Typography variant="h2" className="mb-4 text-[var(--twb-color-plum)]">
                Shop by Category
              </Typography>
              <HandDrawnUnderline 
                variant="scribble" 
                color="var(--twb-color-plum)" 
                width={80}
                offset={-3}
              />
            </div>
            <p className="text-[var(--twb-color-text-muted)] text-lg">
              Everything we make, right here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(Object.keys(productCategories) as Array<keyof typeof productCategories>).map((key) => {
              const category = productCategories[key];
              const IconComponent = categoryIcons[key];
              const productCount = products.filter(p => p.category === key).length;

              return (
                <Link 
                  key={key}
                  to={`/shop/${key}`}
                  className="group"
                >
                  <OrganicBorder
                    variant="card"
                    bgColor="var(--twb-color-bg-tertiary)"
                    borderColor="var(--twb-border-tertiary)"
                    className="p-8 hover:shadow-xl transition-shadow h-full flex flex-col"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--twb-color-plum)]/10 flex items-center justify-center group-hover:bg-[var(--twb-color-plum)]/20 transition-colors">
                      <IconComponent size={40} className="text-[var(--twb-color-plum)]" />
                    </div>
                    <h3 className="font-serif text-2xl mb-3 text-center text-[var(--twb-color-plum)] group-hover:text-[var(--twb-color-plum)]/80 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-[var(--twb-color-text-muted)] text-center mb-4 flex-grow">
                      {category.description}
                    </p>
                    <div className="text-center">
                      <span className="text-sm text-[var(--twb-color-gold)] font-medium">
                        {productCount} {productCount === 1 ? 'product' : 'products'}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-4 text-[var(--twb-color-plum)] group-hover:gap-3 transition-all">
                      <span className="text-sm font-semibold">Browse</span>
                      <ArrowRight size={16} />
                    </div>
                  </OrganicBorder>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)] dark:bg-[var(--twb-color-bg-secondary)]">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-4 text-[var(--twb-color-plum)]">
              Our Favorites
            </Typography>
            <p className="text-[var(--twb-color-text-muted)] text-lg">
              The products we're most proud of (and drink ourselves)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 6).map((product) => (
              <Link 
                key={product.id}
                to={`/shop/product/${product.id}`}
                className="group"
              >
                <div className="bg-[var(--twb-color-bg-primary)] dark:bg-[var(--twb-color-bg-secondary)] rounded-lg border border-[var(--twb-border-tertiary)] overflow-hidden hover:shadow-xl transition-all">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-[var(--twb-color-plum)]/5">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    {product.awards && product.awards.length > 0 && (
                      <span className="inline-block px-3 py-1 bg-[var(--twb-color-gold)]/20 text-[var(--twb-color-gold)] text-xs font-bold rounded-full mb-3">
                        AWARD WINNER
                      </span>
                    )}
                    <h3 className="font-serif text-xl mb-2 text-[var(--twb-color-text-primary)] group-hover:text-[var(--twb-color-plum)] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[var(--twb-color-text-muted)] mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xl text-[var(--twb-color-plum)]">
                        R{product.price}
                      </span>
                      <span className="text-sm text-[var(--twb-color-gold)] font-medium flex items-center gap-1">
                        View Details
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop/wine">
              <Button variant="primary" size="large">
                Browse All Products
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Shop With Us */}
      <section className="py-20 bg-[var(--twb-color-ink)] text-[var(--twb-color-paper)]">
        <Container>
          <div className="text-center mb-16">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-gold)]">
              Why Shop With Us
            </Typography>
            <p className="text-[var(--twb-color-paper)]/90 text-lg max-w-2xl mx-auto">
              When you buy from us, you're getting more than just a product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--twb-color-paper)]/10 flex items-center justify-center">
                <Truck size={40} className="text-[var(--twb-color-gold)]" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-[var(--twb-color-paper)]">Free Shipping</h3>
              <p className="text-[var(--twb-color-paper)]/70 leading-relaxed">
                Free delivery on all orders over R500. We pack everything carefully and 
                ship within 2 business days.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--twb-color-paper)]/10 flex items-center justify-center">
                <ShieldCheck size={40} className="text-[var(--twb-color-gold)]" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-[var(--twb-color-paper)]">Quality Guarantee</h3>
              <p className="text-[var(--twb-color-paper)]/70 leading-relaxed">
                If you're not 100% happy with your purchase, we'll make it right. 
                That's our family promise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--twb-color-paper)]/10 flex items-center justify-center">
                <Heart size={40} className="text-[var(--twb-color-gold)]" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-[var(--twb-color-paper)]">Made with Love</h3>
              <p className="text-[var(--twb-color-paper)]/70 leading-relaxed">
                Every product is handcrafted by our family on our Paarl Mountain farm. 
                No middlemen, no mass production.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Farm Story */}
      <section className="py-20 bg-[var(--twb-color-plum)]/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Typography variant="h2" className="mb-6 text-[var(--twb-color-plum)]">
                Four Generations in Every Bottle
              </Typography>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-[var(--twb-color-text-primary)] leading-relaxed">
                  Since 1918, our family has been farming this land on Paarl Mountain. We've learned 
                  what works, what doesn't, and what makes truly exceptional wine, spirits, and cheese.
                </p>
                <p className="text-[var(--twb-color-text-primary)] leading-relaxed">
                  When you order from our shop, you're getting products made by people who genuinely 
                  care. Pieter tastes every barrel. Annelie makes cheese by hand every morning. 
                  Hennie personally checks every distillation run.
                </p>
                <p className="text-[var(--twb-color-text-primary)] leading-relaxed">
                  We're not trying to be the biggest. We're trying to be the best at what we do. 
                  And we think you'll taste the difference.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/about">
                  <Button variant="secondary" size="large">
                    Our Story
                  </Button>
                </Link>
                <Link to="/visit">
                  <Button variant="outline" size="large">
                    Visit the Farm
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage}
                alt="Handcrafted Wines farm"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--twb-color-gold)] text-[var(--twb-color-paper)] p-6 rounded-lg shadow-xl max-w-xs">
                <MapPin size={32} className="mb-2" />
                <p className="font-serif text-lg mb-1">Paarl Mountain</p>
                <p className="text-sm text-[var(--twb-color-paper)]/90">Cape Winelands, South Africa</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--twb-color-plum)] to-[var(--twb-color-plum)]/80 text-[var(--twb-color-paper)]">
        <Container variant="content">
          <div className="text-center">
            <Typography variant="h2" className="mb-6 text-[var(--twb-color-paper)]">
              Ready to Taste?
            </Typography>
            <p className="text-xl text-[var(--twb-color-paper)]/90 mb-8 max-w-2xl mx-auto">
              Start exploring our handcrafted wines, spirits, and cheese. 
              We'll ship straight from our farm to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop/wine">
                <Button variant="secondary" size="large">
                  Shop Wines
                </Button>
              </Link>
              <Link to="/shop/spirit">
                <Button variant="outline" size="large">
                  Shop Spirits
                </Button>
              </Link>
              <Link to="/shop/cheese">
                <Button variant="outline" size="large">
                  Shop Cheese
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </Layout>
  );
};
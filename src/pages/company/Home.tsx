import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';
import { BrandGrid } from '../../components/sections/BrandGrid';
import { HomeEntryPoints } from '../../components/sections/HomeEntryPoints';
import { Newsletter } from '../../components/sections/Newsletter';
import { WineClubCTA } from '../../components/sections/WineClubCTA';
import { ArrowRight, ExternalLink, Award, Users, Droplet, Leaf, TrendingUp, MapPin } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Link, useNavigate } from 'react-router';
import { LatestNews } from '../../components/sections/LatestNews';
import heroImage from 'figma:asset/41b3d8ee458f4aa234b644392aeceaf24abdff91.png';

// Mock data for featured products
const FEATURED_WINES = [
  { id: '1', name: 'The Mentors Orchestra 2020', brand: 'The Mentors', price: 429.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true, badges: ['Award Winner'] },
  { id: '2', name: 'Roodeberg Red Blend 2021', brand: 'Roodeberg', price: 119.00, salePrice: 99.00, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80', inStock: true, badges: [] },
  { id: '3', name: 'Laborie Merlot 2022', brand: 'Laborie', price: 85.00, image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80', inStock: true },
  { id: '4', name: 'Cathedral Cellar Cabernet Sauvignon', brand: 'Cathedral Cellar', price: 189.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true, badges: ['Top Pick'] },
];

/**
 * Home Page Component
 * 
 * The main entry point for the Corporate website.
 * Features:
 * - Hero with primary calls to action (Shop, Experiences).
 * - Entry points for diverse user journeys.
 * - Featured Brand Grid.
 * - Latest News summary.
 * - Featured Wines (Shop teasers).
 * - Newsletter signup.
 */
export const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Hero 
        title="Crafting Excellence Since 1918"
        subtitle="From the heart of the Cape Winelands to your glass. Discover over a century of passion, tradition, and innovation."
        imageSrc={heroImage}
        height="large"
        primaryAction={{ label: 'Shop Wines', onClick: () => navigate('/shop') }}
        secondaryAction={{ label: 'Plan Your Visit', onClick: () => navigate('/experiences') }}
      />
      
      <section className="py-16 text-center bg-white">
        <Container variant="content">
          <Typography variant="h2" className="text-2xl md:text-3xl font-bold text-[#2C1810] mb-6 max-w-3xl mx-auto">
            Leading South African wine and spirits producer with a distinguished heritage.
          </Typography>
          <Typography variant="body" className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
            KWV, Wine & Spirits producer in South Africa, is recognized across the globe for its pioneering efforts in the world of wine, and its award winning brands. Our range of brands include Roodeberg, The Mentors, KWV Brandy, Laborie, Cathedral Cellar, Classic Collection, Cruxland, Imagin, Wild Africa Cream and so much more spirits & wine. Our brands can be purchased on our online shop or at the KWV Emporium in Paarl and in addition to this, visitors can also enjoy our famous destination experiences. These not to be missed experiences include House of Fire, Cathedral Cellar and KWV Emporium for tastings and pairings.
          </Typography>
        </Container>
      </section>

      <HomeEntryPoints />

      <BrandGrid />

      <LatestNews />
      
      <section className="py-20">
        <Container variant="site">
          <div className="flex justify-between items-end mb-12">
            <div>
              <Typography variant="caption" className="uppercase tracking-widest mb-2 text-[#8B0000]">
                Shop Favorites
              </Typography>
              <Typography variant="h2" color={COLORS.darkBrown}>
                Featured Wines
              </Typography>
            </div>
            <Link to="/shop/wine" className="hidden md:block">
              <Button variant="outline">View All Wines</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_WINES.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/shop/wine">
              <Button variant="outline" fullWidth>View All Wines</Button>
            </Link>
          </div>
        </Container>
      </section>

      <WineClubCTA />
      
      <FAQSection items={[
        { question: "Where can I buy KWV products?", answer: "You can purchase our full range of wines and spirits directly through our online shop, or find them at leading retailers nationwide." },
        { question: "Do you offer wine tastings?", answer: "Yes, visit our Emporium in Paarl for exclusive wine and brandy tastings. Bookings are recommended." },
        { question: "How long does delivery take?", answer: "Delivery typically takes 3-5 working days to main centers and 5-7 working days to regional areas." }
      ]} />

      <Newsletter />
    </Layout>
  );
};
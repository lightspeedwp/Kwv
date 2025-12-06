import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/sections/Hero';
import { BrandGrid } from '../components/sections/BrandGrid';
import { Newsletter } from '../components/sections/Newsletter';
import { FAQSection } from '../components/sections/FAQSection';
import { WineClubCTA } from '../components/sections/WineClubCTA';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { ProductCard } from '../components/shop/ProductCard';
import { COLORS } from '../constants/theme';
import { Button } from '../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';

// Mock data for featured products
const FEATURED_WINES = [
  { id: '1', name: 'The Mentors Orchestra 2020', brand: 'The Mentors', price: 429.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true, badges: ['Award Winner'] },
  { id: '2', name: 'Roodeberg Red Blend 2021', brand: 'Roodeberg', price: 119.00, salePrice: 99.00, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80', inStock: true, badges: [] },
  { id: '3', name: 'Laborie Merlot 2022', brand: 'Laborie', price: 85.00, image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80', inStock: true },
  { id: '4', name: 'Cathedral Cellar Cabernet Sauvignon', brand: 'Cathedral Cellar', price: 189.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true, badges: ['Top Pick'] },
];

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Hero 
        title="Heritage in Every Bottle"
        subtitle="Experience over a century of South African winemaking excellence."
        imageSrc="https://images.unsplash.com/photo-1560463146-db8eff59e38e?auto=format&fit=crop&q=80"
        primaryAction={{ label: 'Shop Wines', onClick: () => navigate('/shop/wine') }}
        secondaryAction={{ label: 'Our Story', onClick: () => navigate('/history') }}
      />
      
      <BrandGrid />
      
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

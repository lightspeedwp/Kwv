import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { FAQSection } from '../components/sections/FAQSection';

// Single Product Components
import { ProductBreadcrumbs } from '../components/shop/single-product/ProductBreadcrumbs';
import { StoreNotices } from '../components/shop/single-product/StoreNotices';
import { ProductGallery } from '../components/shop/single-product/ProductGallery';
import { ProductTitle } from '../components/shop/single-product/ProductTitle';
import { ProductRating } from '../components/shop/single-product/ProductRating';
import { ProductPrice } from '../components/shop/single-product/ProductPrice';
import { ProductSummary } from '../components/shop/single-product/ProductSummary';
import { ProductAddToCart } from '../components/shop/single-product/ProductAddToCart';
import { ProductMeta } from '../components/shop/single-product/ProductMeta';
import { ProductTabs } from '../components/shop/single-product/ProductTabs';
import { RelatedProducts } from '../components/shop/single-product/RelatedProducts';

// Mock Product Data
const PRODUCT = {
  id: '1',
  name: 'The Mentors Orchestra 2020',
  brand: 'The Mentors',
  price: 429.00,
  description: 'This Bordeaux-style blend is a result of strict selection and meticulous attention to detail. The wine shows aromas of blackcurrant, plum and dried herbs. The palate is full-bodied with layers of concentrated fruit and integrated oak.',
  rating: 4.8,
  reviews: 124,
  sku: 'TM-ORCH-2020',
  categories: ['Red Wine', 'The Mentors'],
  images: [
    'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80',
  ],
  details: {
    'Tasting Notes': 'Aromatic layers of blackcurrant, plum and dried herbs. The palate is full-bodied with concentrated fruit.',
    'Vinification': 'Grapes were hand-harvested and sorted. Fermentation took place in stainless steel tanks.',
    'Analysis': 'Alc: 14.5% | TA: 5.8 g/l | pH: 3.5 | RS: 2.5 g/l'
  }
};

const RELATED_PRODUCTS = [
  { id: '2', name: 'The Mentors Chenin Blanc', brand: 'The Mentors', price: 399.00, image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80', inStock: true },
  { id: '3', name: 'The Mentors Canvas', brand: 'The Mentors', price: 349.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true },
  { id: '4', name: 'The Mentors Perold', brand: 'The Mentors', price: 2499.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true, badges: ['Icon'] },
];

export const Product = () => {
  const handleAddToCart = (qty: number, subscription: boolean) => {
    console.log(`Added ${qty} items (Subscription: ${subscription})`);
    // Ideally triggering a store action here
  };

  const tabs = Object.keys(PRODUCT.details).map(key => ({
    label: key,
    content: <p>{PRODUCT.details[key as keyof typeof PRODUCT.details]}</p>
  }));

  const breadcrumbs = [
    { label: 'Shop', href: '/shop' },
    { label: 'Red Wine', href: '/shop/wine/red' },
    { label: PRODUCT.name }
  ];

  return (
    <Layout>
      <Container variant="site" className="py-12">
        
        <ProductBreadcrumbs items={breadcrumbs} />
        
        <StoreNotices notices={[]} /> {/* Empty for now, but ready to use */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery Column */}
          <ProductGallery images={PRODUCT.images} productName={PRODUCT.name} />

          {/* Product Info Column */}
          <div>
            <ProductTitle title={PRODUCT.name} brand={PRODUCT.brand} />
            <ProductRating rating={PRODUCT.rating} reviewCount={PRODUCT.reviews} />
            <ProductPrice price={PRODUCT.price} />
            <ProductSummary summary={PRODUCT.description} />
            
            <ProductAddToCart 
              onAddToCart={handleAddToCart} 
              inStock={true} 
              isSubscriptionAvailable={true}
            />

            <ProductMeta sku={PRODUCT.sku} categories={PRODUCT.categories} />

            <ProductTabs tabs={tabs} />
          </div>
        </div>
        
        <RelatedProducts products={RELATED_PRODUCTS} />
        
      </Container>
      
      <FAQSection items={[
        { question: "What is the aging potential?", answer: "This wine can be enjoyed now but will continue to mature well for another 5-8 years if stored correctly." },
        { question: "What food pairs best with this wine?", answer: "This wine pairs excellently with grilled red meats, rich stews, and mature cheeses." },
        { question: "Does this wine contain sulphites?", answer: "Yes, like most wines, this product contains sulphites to preserve freshness and quality." }
      ]} />
    </Layout>
  );
};

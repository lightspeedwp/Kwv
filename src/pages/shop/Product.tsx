import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { FAQSection } from '../../components/sections/FAQSection';

// Single Product Components
import { ProductBreadcrumbs } from '../../components/shop/single-product/ProductBreadcrumbs';
import { StoreNotices } from '../../components/shop/single-product/StoreNotices';
import { ProductGallery } from '../../components/shop/single-product/ProductGallery';
import { ProductTitle } from '../../components/shop/single-product/ProductTitle';
import { ProductRating } from '../../components/shop/single-product/ProductRating';
import { ProductPrice } from '../../components/shop/single-product/ProductPrice';
import { ProductSummary } from '../../components/shop/single-product/ProductSummary';
import { ProductAddToCart, Variation } from '../../components/shop/single-product/ProductAddToCart';
import { ProductMeta } from '../../components/shop/single-product/ProductMeta';
import { ProductTabs } from '../../components/shop/single-product/ProductTabs';
import { RelatedProducts } from '../../components/shop/single-product/RelatedProducts';
import { PayflexWidget } from '../../components/shop/single-product/PayflexWidget';
import { ReviewsTab } from '../../components/shop/single-product/ReviewsTab';

// Extended Mock Product Data
const PRODUCTS_DB: Record<string, any> = {
  '1': {
    id: '1',
    name: 'The Mentors Orchestra 2020',
    brand: 'The Mentors',
    price: 429.00,
    description: 'This Bordeaux-style blend is a result of strict selection and meticulous attention to detail. The wine shows aromas of blackcurrant, plum and dried herbs. The palate is full-bodied with layers of concentrated fruit and integrated oak.',
    rating: 4.8,
    reviews: 124,
    sku: 'TM-ORCH-2020',
    categories: ['Red Wine', 'The Mentors'],
    tags: ['Premium', 'Award Winner'],
    images: [
      'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80',
    ],
    details: {
      'Tasting Notes': 'Aromatic layers of blackcurrant, plum and dried herbs. The palate is full-bodied with concentrated fruit.',
      'Vinification': 'Grapes were hand-harvested and sorted. Fermentation took place in stainless steel tanks.',
      'Analysis': 'Alc: 14.5% | TA: 5.8 g/l | pH: 3.5 | RS: 2.5 g/l'
    },
    type: 'simple'
  },
  'voucher': {
    id: 'voucher',
    name: 'KWV Gift Voucher',
    brand: 'Gifting',
    price: 250.00, // Starting price
    description: 'Give the gift of choice with a KWV Emporium Gift Voucher. Perfect for any occasion, allowing the recipient to choose from our wide range of premium wines, spirits, and experiences.',
    rating: 5.0,
    reviews: 12,
    sku: 'KWV-VOUCHER',
    categories: ['Gifting', 'Vouchers'],
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80', // Gift card like image
    ],
    details: {
      'Terms & Conditions': 'Valid for 3 years from date of purchase. Redeemable online or in-store at the KWV Emporium.',
      'Delivery': 'Digital voucher code sent via email immediately after purchase.'
    },
    type: 'variable',
    variationLabel: 'Value',
    variations: [
      { id: 'v250', name: 'R250.00', price: 250.00 },
      { id: 'v500', name: 'R500.00', price: 500.00 },
      { id: 'v1000', name: 'R1000.00', price: 1000.00 },
      { id: 'v2000', name: 'R2000.00', price: 2000.00 },
    ]
  },
  'beanie': {
    id: 'beanie',
    name: 'KWV Beanie',
    brand: 'Merchandise',
    price: 150.00,
    salePrice: 120.00,
    description: 'Stay warm in style with our branded KWV Beanie. Made from high-quality, soft-touch acrylic with a comfortable fit.',
    rating: 4.5,
    reviews: 8,
    sku: 'KWV-BEANIE-ORG',
    categories: ['Merchandise', 'Apparel'],
    images: [
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80', // Beanie image
    ],
    details: {
      'Material': '100% Acrylic',
      'Size': 'One size fits all'
    },
    type: 'simple'
  }
};

const RELATED_PRODUCTS = [
  { id: '2', name: 'The Mentors Chenin Blanc', brand: 'The Mentors', price: 399.00, image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80', inStock: true },
  { id: '3', name: 'The Mentors Canvas', brand: 'The Mentors', price: 349.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true },
  { id: '4', name: 'The Mentors Perold', brand: 'The Mentors', price: 2499.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true, badges: ['Icon'] },
];

/**
 * Product Page Component
 * 
 * Detailed view for a single product.
 * Features:
 * - Image Gallery.
 * - Product information (Title, Price, Rating, SKU).
 * - Add to Cart with quantity and variations.
 * - Payflex widget.
 * - Tabs for Description, Details, and Reviews.
 * - Related Products carousel.
 */
export const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(PRODUCTS_DB['1']);
  const [selectedVariation, setSelectedVariation] = useState<Variation | null>(null);
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    // Load product based on ID or default to '1'
    const loadedProduct = PRODUCTS_DB[id || '1'] || PRODUCTS_DB['1'];
    setProduct(loadedProduct);
    
    // Reset state for new product
    if (loadedProduct.type === 'variable') {
      setSelectedVariation(loadedProduct.variations[0]); // Default select first
      setCurrentPrice(loadedProduct.variations[0].price);
    } else {
      setSelectedVariation(null);
      setCurrentPrice(loadedProduct.salePrice || loadedProduct.price);
    }
  }, [id]);

  const handleVariationChange = (variation: Variation) => {
    setSelectedVariation(variation);
    setCurrentPrice(variation.price);
  };

  const handleAddToCart = (qty: number, subscription: boolean, variationId?: string) => {
    console.log(`Added ${qty} items (Subscription: ${subscription}, Variation: ${variationId})`);
    // Ideally triggering a store action here
    alert(`Added ${qty} x ${product.name} ${variationId ? `(${selectedVariation?.name})` : ''} to cart!`);
  };

  const tabs = [
    {
      label: 'Description',
      content: <p>{product.description}</p>
    },
    ...Object.keys(product.details).map(key => ({
      label: key,
      content: <p>{product.details[key as keyof typeof product.details]}</p>
    })),
    {
      label: `Reviews (${product.reviews})`,
      content: <ReviewsTab />
    }
  ];

  const breadcrumbs = [
    { label: 'Shop', href: '/shop' },
    { label: product.categories[0], href: `/shop/${product.categories[0].toLowerCase().replace(' ', '-')}` },
    { label: product.name }
  ];

  return (
    <Layout>
      <Container variant="site" className="py-12">
        
        <ProductBreadcrumbs items={breadcrumbs} />
        
        <StoreNotices notices={[]} /> 

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery Column */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Product Info Column */}
          <div>
            <ProductTitle title={product.name} brand={product.brand} />
            <ProductRating rating={product.rating} reviewCount={product.reviews} />
            
            <ProductPrice 
              price={product.type === 'simple' && product.salePrice ? product.price : currentPrice} 
              salePrice={product.type === 'simple' && product.salePrice ? currentPrice : undefined} 
            />
            
            <PayflexWidget price={currentPrice} />
            
            <ProductSummary summary={product.description} />
            
            <ProductAddToCart 
              onAddToCart={handleAddToCart} 
              inStock={true} 
              isSubscriptionAvailable={product.type !== 'variable'} // Disable subs for vouchers
              variations={product.variations}
              selectedVariation={selectedVariation}
              onVariationChange={handleVariationChange}
              variationLabel={product.variationLabel}
            />

            <ProductMeta 
              sku={product.sku} 
              categories={product.categories} 
              tags={product.tags} 
            />

            <ProductTabs tabs={tabs} />
          </div>
        </div>
        
        <RelatedProducts products={RELATED_PRODUCTS} />
        
      </Container>
      
      {/* FAQ Section only for non-merchandise products for now, or just generic */}
      <FAQSection items={[
        { question: "Shipping Information", answer: "Orders are shipped within 3-5 working days." },
        { question: "Returns Policy", answer: "We accept returns within 30 days of purchase if the item is unused and in original packaging." }
      ]} />
    </Layout>
  );
};

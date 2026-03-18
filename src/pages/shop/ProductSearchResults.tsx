import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { useSearchParams } from 'react-router';
import { Search } from 'lucide-react';
import { ShopSidebar } from '../../components/shop/layout/ShopSidebar';
import { ProductCard, Product } from '../../components/shop/common/ProductCard';

/**
 * ProductSearchResults Page Component
 * 
 * Displays search results specifically for the Shop section.
 * Features a sidebar filter and a grid of matching products.
 * Differentiates from the corporate `SearchResults` page.
 */
export const ProductSearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const hasResults = query.toLowerCase() !== 'no results';

  // Mock products (subset of ShopHome)
  const products: Product[] = [
    {
      id: '1',
      name: 'Roodeberg Classic Red 2021',
      brand: 'Roodeberg',
      price: 129.00,
      image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800',
      inStock: true
    },
    {
      id: '2',
      name: 'KWV 10 Year Old Brandy',
      brand: 'KWV Brandy',
      price: 349.00,
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=800',
      inStock: true
    },
    {
        id: '4',
        name: 'Mentors Orchestra 2020',
        brand: 'The Mentors',
        price: 299.00,
        image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80&w=800',
        inStock: true
    },
  ];

  return (
    <Layout>
      <div className="bg-[var(--twb-color-bg-tertiary)] border-b border-gray-200 py-8">
        <Container variant="site">
            <Typography variant="h2" className="mb-0">Search Results: "{query}"</Typography>
        </Container>
      </div>

      <Container variant="site" className="py-12">
        <div className="flex flex-col lg:flex-row gap-12">
           {/* Sidebar */}
           <aside className="w-full lg:w-64 flex-shrink-0">
              <ShopSidebar />
           </aside>

           {/* Content */}
           <div className="flex-1">
              {hasResults ? (
                <>
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                        <Typography variant="body" className="text-gray-500">
                            Showing all {products.length} results
                        </Typography>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Sort by</span>
                            <select className="border border-gray-300 rounded-sm p-2 text-sm bg-white focus:border-[var(--twb-color-gold)] outline-none cursor-pointer">
                                <option>Default</option>
                                <option>Popularity</option>
                                <option>Average Rating</option>
                                <option>Latest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-sm border border-gray-100">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6 text-gray-400">
                        <Search size={32} />
                    </div>
                    <Typography variant="h3" className="mb-4">No products found</Typography>
                    <Typography variant="body" className="text-gray-500 mb-8 max-w-md mx-auto">
                        Sorry, but no products matched your search criteria. Please try again with some different keywords or check your spelling.
                    </Typography>
                    
                    <div className="max-w-md mx-auto">
                        <div className="relative">
                           <input type="text" placeholder="Search for products..." className="w-full p-3 border border-gray-300 rounded-sm pr-12 focus:border-[var(--twb-color-gold)] outline-none" />
                           <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--twb-color-gold)]">
                              <Search size={20} />
                           </button>
                        </div>
                    </div>
                </div>
              )}
           </div>
        </div>
      </Container>
    </Layout>
  );
};
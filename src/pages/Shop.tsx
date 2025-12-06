import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { ShopSidebar } from '../components/shop/ShopSidebar';
import { ProductCard } from '../components/shop/ProductCard';
import { COLORS } from '../constants/theme';
import { ChevronDown, Filter } from 'lucide-react';
import { Button } from '../components/common/Button';
import { useParams } from 'react-router-dom';
import { FAQSection } from '../components/sections/FAQSection';

// Mock Data
const PRODUCTS = [
  { id: '1', name: 'The Mentors Orchestra 2020', brand: 'The Mentors', price: 429.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true, badges: ['Award Winner'], category: 'wine' },
  { id: '2', name: 'Roodeberg Red Blend 2021', brand: 'Roodeberg', price: 119.00, salePrice: 99.00, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80', inStock: true, category: 'wine' },
  { id: '3', name: 'Laborie Merlot 2022', brand: 'Laborie', price: 85.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true, category: 'wine' },
  { id: '4', name: 'Cathedral Cellar Cabernet Sauvignon', brand: 'Cathedral Cellar', price: 189.00, image: 'https://images.unsplash.com/photo-1702776095041-6b8bd4f292de?auto=format&fit=crop&q=80', inStock: true, category: 'wine' },
  { id: '5', name: 'Cruxland Gin', brand: 'Cruxland', price: 349.00, image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80', inStock: true, badges: ['Best Gin'], category: 'spirits' },
  { id: '6', name: 'KWV 10 Year Old Brandy', brand: 'KWV Brandy', price: 299.00, image: 'https://images.unsplash.com/photo-1757694907428-5ef2f3ff7854?auto=format&fit=crop&q=80', inStock: true, category: 'spirits' },
  { id: '7', name: 'KWV Classic Chenin Blanc', brand: 'KWV Classic', price: 65.00, image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80', inStock: true, category: 'wine' },
  { id: '8', name: 'Laborie Cap Classique', brand: 'Laborie', price: 149.00, image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80', inStock: true, category: 'wine' },
  { id: '9', name: 'The Mentors Chenin Blanc', brand: 'The Mentors', price: 399.00, image: 'https://images.unsplash.com/photo-1695048475495-6535686c473c?auto=format&fit=crop&q=80', inStock: false, category: 'wine' },
];

export const Shop = () => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = React.useState(false);
  const { category } = useParams();

  // Basic filtering based on category param
  const filteredProducts = category 
    ? PRODUCTS.filter(p => p.category === category || p.category === category.split('/')[0])
    : PRODUCTS;

  const pageTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products';

  return (
    <Layout>
      {/* Shop Hero / Header */}
      <div className="bg-[#F9F9F9] pt-12 pb-8 border-b border-gray-200">
        <Container variant="site">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <Typography variant="caption" className="uppercase tracking-widest mb-2 opacity-60">
                Home / Shop {category && `/ ${pageTitle}`}
              </Typography>
              <Typography variant="h1" color={COLORS.darkBrown}>
                {pageTitle}
              </Typography>
            </div>
            
            <div className="flex items-center gap-4">
              <Typography variant="body" className="text-gray-500 hidden md:block">
                Showing {filteredProducts.length} results
              </Typography>
              
              <div className="relative group">
                <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 bg-white hover:border-[#8B0000] transition-colors">
                  <span className="text-sm font-medium">Sort by: Featured</span>
                  <ChevronDown size={16} />
                </button>
                {/* Dropdown (Mock) */}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container variant="site" className="py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar (Desktop) */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <ShopSidebar />
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
             <Button 
               variant="outline" 
               fullWidth 
               className="flex items-center gap-2 justify-center"
               onClick={() => setIsMobileFiltersOpen(true)}
             >
               <Filter size={18} /> Filters
             </Button>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map(product => (
                     <ProductCard key={product.id} product={product} />
                  ))}
               </div>
            ) : (
               <div className="text-center py-20 border border-dashed border-gray-300 rounded-sm">
                  <Typography variant="h3" className="text-gray-400 mb-2">No products found</Typography>
                  <Typography variant="body" className="text-gray-500">Try adjusting your filters or search criteria.</Typography>
               </div>
            )}
            
            {/* Pagination */}
            {filteredProducts.length > 0 && (
               <div className="mt-12 flex justify-center gap-2">
                  {[1, 2, 3].map(page => (
                     <button 
                        key={page}
                        className={`w-10 h-10 flex items-center justify-center border ${page === 1 ? 'bg-[#8B0000] text-white border-[#8B0000]' : 'bg-white text-gray-600 border-gray-300 hover:border-[#8B0000]'}`}
                     >
                        {page}
                     </button>
                  ))}
               </div>
            )}
          </div>
        </div>
      </Container>
      
      <FAQSection items={[
        { question: "Do you deliver nationwide?", answer: "Yes, we deliver to all major centers and regional areas within South Africa." },
        { question: "How can I track my order?", answer: "Once your order is dispatched, you will receive an email with a tracking number to follow your shipment." },
        { question: "Is there a minimum order quantity?", answer: "No, there is no minimum order quantity, but ordering in cases of 6 often qualifies for better shipping rates." }
      ]} />
    </Layout>
  );
};

import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { ShopSidebar } from '../components/shop/ShopSidebar';
import { ProductCard } from '../components/shop/ProductCard';
import { COLORS } from '../constants/theme';
import { ChevronDown, Filter, ChevronLeft, ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '../components/common/Button';
import { useParams } from 'react-router-dom';
import { FAQSection } from '../components/sections/FAQSection';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from "../components/ui/sheet";

// Base products to generate from
const BASE_PRODUCTS = [
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

// Generate 100 products for pagination demo
const PRODUCTS = Array.from({ length: 100 }, (_, i) => {
  const template = BASE_PRODUCTS[i % BASE_PRODUCTS.length];
  return {
    ...template,
    id: `${i + 1}`,
    // Add a variation to the name so they don't look identical
    name: `${template.name} ${Math.floor(i / BASE_PRODUCTS.length) > 0 ? `(Batch ${Math.floor(i / BASE_PRODUCTS.length) + 1})` : ''}`,
  };
});

const ITEMS_PER_PAGE = 12;

export const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { category } = useParams();

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  // Basic filtering based on category param
  const allFilteredProducts = category 
    ? PRODUCTS.filter(p => p.category === category || p.category === category.split('/')[0])
    : PRODUCTS;

  const pageTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Shop';

  // Pagination Logic
  const totalResults = allFilteredProducts.length;
  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = allFilteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        // Simplified logic for now, just show first few
        if (currentPage <= 3) {
            pageNumbers.push(1, 2, 3, 4, '...', totalPages);
        } else if (currentPage >= totalPages - 2) {
            pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
            pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
        }
    }
    return pageNumbers;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      scrollToTop();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      scrollToTop();
    }
  };

  return (
    <Layout>
      {/* Shop Hero / Header */}
      <div className="bg-[#F9F9F9] pt-8 pb-8 border-b border-gray-200">
        <Container variant="site">
          <div className="flex flex-col gap-6">
            
            {/* Header Top: Title and Breadcrumbs */}
            <div>
              <Typography variant="caption" className="uppercase tracking-widest mb-2 opacity-60">
                Home / Shop {category && `/ ${pageTitle}`}
              </Typography>
              <Typography variant="h1" color={COLORS.darkBrown}>
                {pageTitle}
              </Typography>
            </div>

            <hr className="border-gray-200" />
            
            {/* Filter Button (Mobile Only) */}
            <div className="lg:hidden">
               <Sheet>
                 <SheetTrigger asChild>
                   <button className="flex items-center gap-2 text-base font-medium text-gray-800 hover:text-[#8B0000] transition-colors">
                      <SlidersHorizontal size={18} /> Filter products
                   </button>
                 </SheetTrigger>
                 <SheetContent side="left" className="w-full max-w-full sm:max-w-full overflow-y-auto [&>button]:hidden p-0">
                    <SheetHeader className="p-5 flex flex-row items-center justify-between border-b border-gray-100">
                      <SheetTitle className="text-2xl text-[#2C1810] font-normal m-0">
                        Filters
                      </SheetTitle>
                      <SheetClose asChild>
                        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                          <X size={24} className="text-gray-400" />
                        </button>
                      </SheetClose>
                      <SheetDescription className="sr-only">
                        Filter products by price, rating, and attributes.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="p-5">
                       <ShopSidebar />
                    </div>
                 </SheetContent>
               </Sheet>
            </div>

            {/* Controls Bar: Showing results + Sort */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
              <Typography variant="body" className="text-gray-500 whitespace-nowrap order-1 lg:order-none w-full lg:w-auto">
                Showing {indexOfFirstItem + 1}–{Math.min(indexOfLastItem, totalResults)} of {totalResults} results
              </Typography>
              
              <div className="flex items-center gap-3 w-full lg:w-auto order-2 lg:order-none">
                <span className="text-base text-gray-500 whitespace-nowrap min-w-fit">Sort by</span>
                <div className="relative group w-full lg:min-w-[180px]">
                  <select className="w-full appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 text-base font-medium hover:border-[#8B0000] focus:border-[#8B0000] outline-none cursor-pointer">
                    <option>Default</option>
                    <option>Featured</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                    <option>Latest</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
                </div>
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

          {/* Product Grid */}
          <div className="flex-1">
            {currentItems.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                  {currentItems.map(product => (
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
            {totalResults > 0 && (
               <div className="mt-16 flex justify-center items-center gap-2">
                  {/* Previous Button */}
                   {currentPage > 1 && (
                     <button 
                       onClick={handlePrevPage}
                       className="h-10 px-4 flex items-center gap-1 text-gray-600 hover:text-[#8B0000] transition-colors font-medium"
                     >
                        <ChevronLeft size={16} /> Previous
                     </button>
                   )}

                   {/* Page Numbers */}
                   <div className="flex gap-2 mx-4">
                      {getPageNumbers().map((page, index) => (
                         <button 
                            key={index}
                            onClick={() => typeof page === 'number' && handlePageChange(page)}
                            disabled={typeof page !== 'number'}
                            className={`
                                w-10 h-10 flex items-center justify-center border transition-colors rounded-sm
                                ${page === currentPage 
                                    ? 'bg-[#8B0000] text-white border-[#8B0000]' 
                                    : typeof page === 'number' 
                                        ? 'bg-white text-gray-600 border-gray-300 hover:border-[#8B0000] hover:text-[#8B0000]' 
                                        : 'border-transparent text-gray-400 cursor-default'}
                            `}
                         >
                            {page}
                         </button>
                      ))}
                   </div>

                   {/* Next Button */}
                   {currentPage < totalPages && (
                     <button 
                       onClick={handleNextPage}
                       className="h-10 px-4 flex items-center gap-1 text-gray-600 hover:text-[#8B0000] transition-colors font-medium"
                     >
                        Next <ChevronRight size={16} />
                     </button>
                   )}
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

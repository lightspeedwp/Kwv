import React, { useState, useEffect, useMemo } from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { ShopSidebar } from '../../components/shop/layout/ShopSidebar';
import { ProductCard } from '../../components/shop/common/ProductCard';
import { ChevronDown, ChevronLeft, ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { useParams } from 'react-router';
import { FAQSection } from '../../components/sections/FAQSection';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../components/ui/sheet';
import { products, productCategories } from '../../data/products';

const ITEMS_PER_PAGE = 12;

/**
 * Shop Page Component (PLP - Product Listing Page)
 * 
 * Main catalog page displaying products from /data/products.ts
 * 
 * Features:
 * - Dynamic product loading from data file
 * - Category and subcategory filtering via URL params
 * - Responsive product grid (1 col mobile, 2 col tablet, 3 col desktop)
 * - Filtering sidebar (Desktop) / Drawer (Mobile)
 * - Sorting options (price, name, newest)
 * - Pagination with page numbers
 * - Product cards with images, prices, add to cart
 * - WCAG AA accessible
 * - Design token integration
 * - Dark mode support
 * 
 * @package HandcraftedWines
 * @version 2.0
 */
export const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  const { category, subcategory, tag } = useParams();

  // Reset to page 1 when params change
  useEffect(() => {
    setCurrentPage(1);
  }, [category, subcategory, tag]);

  // Filter products based on URL params
  const allFilteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by tag (if present)
    if (tag) {
      const tagLower = tag.toLowerCase();
      filtered = filtered.filter(p => 
        p.awards?.some(award => award.toLowerCase().includes(tagLower)) ||
        p.name.toLowerCase().includes(tagLower)
      );
    }

    // Filter by category
    if (category && category !== 'all') {
      filtered = filtered.filter(p => {
        if (category === 'wines') return p.category === 'wine';
        if (category === 'spirits') return p.category === 'spirit';
        if (category === 'cheese') return p.category === 'cheese';
        if (category === 'gifts') return p.category === 'gift';
        return p.category === category;
      });
    }

    // Filter by subcategory
    if (subcategory) {
      const subLower = subcategory.toLowerCase().replace(/-/g, ' ');
      filtered = filtered.filter(p => 
        p.subcategory?.toLowerCase().includes(subLower) ||
        p.subcategory?.toLowerCase().replace(/\s+/g, '-').includes(subcategory.toLowerCase())
      );
    }

    // Sort products
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [category, subcategory, tag, sortBy]);

  const pageTitle = tag 
    ? `Tag: ${tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')}`
    : subcategory
        ? `${category?.charAt(0).toUpperCase() + category?.slice(1)}: ${subcategory.charAt(0).toUpperCase() + subcategory.slice(1).replace('-', ' ')}`
        : category 
            ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ') 
            : 'Shop';

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
              <Typography variant="h1" className="text-[var(--twb-color-text-primary)]">
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
                  <select className="w-full appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 text-base font-medium hover:border-[#8B0000] focus:border-[#8B0000] outline-none cursor-pointer"
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="price-low">Price Low to High</option>
                    <option value="price-high">Price High to Low</option>
                    <option value="name">Name</option>
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
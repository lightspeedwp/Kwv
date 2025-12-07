import React, { useState, useEffect } from 'react';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Layout } from '../../components/layout/Layout';
import { COLORS } from '../../constants/theme';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { FAQSection } from '../../components/sections/FAQSection';

const NEWS_POSTS = [
  {
    id: 'trophy-wine-show-2024',
    title: 'KWV Secures Top Honours at 2024 Trophy Wine Show',
    date: 'June 15, 2024',
    category: 'Awards',
    excerpt: 'KWV has once again demonstrated its winemaking prowess by taking home the trophy for Best Producer at this year\'s prestigious show.',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'harvest-report-2024',
    title: '2024 Harvest Report: A Vintage of Promise',
    date: 'May 02, 2024',
    category: 'Winemaking',
    excerpt: 'Chief Winemaker shares insights into the challenging yet rewarding 2024 harvest season across the Western Cape.',
    image: 'https://images.unsplash.com/photo-1597843797221-e0e1f74dd7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'sustainability-milestone',
    title: 'KWV Reaches New Sustainability Milestone',
    date: 'April 10, 2024',
    category: 'Sustainability',
    excerpt: 'Our solar installation project at the Paarl facility is now complete, reducing our carbon footprint by significant margins.',
    image: 'https://images.unsplash.com/photo-1566912130309-df865c95f197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'cathedral-cellar-event',
    title: 'An Evening at Cathedral Cellar',
    date: 'March 22, 2024',
    category: 'Events',
    excerpt: 'Join us for an exclusive dinner series featuring library vintages and gourmet pairings in our historic cellar.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'brandy-awards-2024',
    title: 'KWV Brandy Triumphs at International Spirits Challenge',
    date: 'February 28, 2024',
    category: 'Awards',
    excerpt: 'The 15 Year Alambic Blend wins Double Gold, cementing KWV\'s reputation as a world-class spirits producer.',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecd0758f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'community-outreach',
    title: 'Empowering Local Communities Through Education',
    date: 'February 10, 2024',
    category: 'Sustainability',
    excerpt: 'KWV launches a new scholarship program for children of farm workers in the Paarl region.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'new-release-mentors',
    title: 'The Mentors Range: New Vintages Released',
    date: 'January 15, 2024',
    category: 'Winemaking',
    excerpt: 'Taste the latest expressions of terroir from our premium Mentors range, available now online and at the Emporium.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'jazz-evening',
    title: 'Jazz & Wine Under the Stars',
    date: 'December 20, 2023',
    category: 'Events',
    excerpt: 'A magical evening of live jazz music and award-winning wines in the beautiful Cathedral Cellar courtyard.',
    image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'water-conservation',
    title: 'Innovating for Water Conservation',
    date: 'November 12, 2023',
    category: 'Sustainability',
    excerpt: 'Implementing new irrigation technologies to preserve our most precious resource in the vineyards.',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae5233271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'best-value-awards',
    title: 'Best Value Awards 2023',
    date: 'October 05, 2023',
    category: 'Awards',
    excerpt: 'KWV Classic Collection recognized for delivering exceptional quality at accessible price points.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'winemaker-dinner',
    title: 'Exclusive Winemaker Dinner with Izele van Blerk',
    date: 'September 18, 2023',
    category: 'Events',
    excerpt: 'An intimate dining experience showcasing The Mentors range paired with a bespoke menu.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 'harvest-preparation',
    title: 'Preparing for Harvest 2024',
    date: 'August 30, 2023',
    category: 'Winemaking',
    excerpt: 'The vineyards are awakening. A look at the crucial preparation steps before the harvest begins.',
    image: 'https://images.unsplash.com/photo-1595855709940-577888de8256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  }
];

const ITEMS_PER_PAGE = 6;

/**
 * News Page Component
 * 
 * Listing page for KWV corporate news, awards, and stories.
 * Features:
 * - Filterable news grid (Awards, Winemaking, Sustainability, Events).
 * - Pagination logic.
 * - Card-based post previews.
 */
export const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const categories = ['All', 'Awards', 'Winemaking', 'Sustainability', 'Events'];

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filteredPosts = activeCategory === 'All' 
    ? NEWS_POSTS 
    : NEWS_POSTS.filter(post => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <div className="bg-[#F5F5DC] py-20">
        <Container variant="content" className="text-center">
          <Typography variant="h1" color={COLORS.darkBrown} className="mb-4">News & Stories</Typography>
          <Typography variant="bodyLarge" className="text-gray-600">
            Stay up to date with the latest from KWV, including award wins, winemaking insights, and upcoming events.
          </Typography>
        </Container>
      </div>

      <Container variant="site" className="py-16">
        {/* Category Filter - Mobile Friendly */}
        <div className="flex justify-center mb-16">
           <div className="flex flex-wrap justify-center gap-2 md:gap-4 w-full px-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 md:px-6 py-2 uppercase tracking-wider text-xs md:text-sm font-medium transition-all rounded-full border ${
                    activeCategory === cat 
                      ? 'bg-[#8B0000] text-white border-[#8B0000]' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-[#8B0000] hover:text-[#2C1810]'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px] content-start">
           {currentPosts.length > 0 ? (
             currentPosts.map(post => (
               <Link to={`/news/${post.id}`} key={post.id} className="group block bg-white border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                     <ImageWithFallback 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#2C1810]">
                        {post.category}
                     </div>
                  </div>
                  <div className="p-8">
                     <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider mb-3">
                        <Calendar size={14} /> {post.date}
                     </div>
                     <Typography variant="h3" className="text-xl mb-4 group-hover:text-[#8B0000] transition-colors leading-tight">
                        {post.title}
                     </Typography>
                     <Typography variant="body" className="text-gray-600 mb-6 line-clamp-3">
                        {post.excerpt}
                     </Typography>
                     <div className="flex items-center text-[#DAA520] font-medium uppercase tracking-wider text-sm">
                        Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                     </div>
                  </div>
               </Link>
             ))
           ) : (
             <div className="col-span-full text-center py-20 text-gray-500">
               No news found in this category.
             </div>
           )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              {/* Previous Button */}
              <button 
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                  currentPage === 1 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-[#2C1810] hover:text-[#DAA520]'
                }`}
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all ${
                      currentPage === page
                        ? 'bg-[#8B0000] text-white'
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                  currentPage === totalPages 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-[#2C1810] hover:text-[#DAA520]'
                }`}
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </Container>

      <FAQSection items={[
        { question: "How can I subscribe to press releases?", answer: "You can sign up for our newsletter to receive the latest news, press releases, and event updates directly to your inbox." },
        { question: "Who do I contact for media inquiries?", answer: "Please contact our media relations team at <strong>media@kwv.co.za</strong> for any press-related queries or interview requests." }
      ]} />
    </Layout>
  );
};

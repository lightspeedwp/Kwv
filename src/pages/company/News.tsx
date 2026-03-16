import React, { useState, useEffect } from 'react';
import { Hero } from '../../components/sections/Hero';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Button } from '../../components/common/Button';
import { Link } from 'react-router';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { NEWS_POSTS, NEWS_CATEGORIES } from '../../data/newsPosts';

/**
 * News & Stories Page
 * 
 * Handcrafted Wines news, farm updates, harvest reports, and family stories.
 * Personal, storytelling approach showcasing family farm life and winemaking journey.
 * 
 * Features:
 * - Blog-style news posts with categories
 * - Featured story hero
 * - Category filtering
 * - Pagination
 * - Family voice and farm storytelling
 * 
 * @package HandcraftedWines
 * @version 2.0
 */

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
  const [activeCategory, setActiveCategory] = useState('All Stories');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filteredPosts = activeCategory === 'All Stories' 
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

  const featuredPost = NEWS_POSTS.find(post => post.featured);

  return (
    <>
      {/* Featured Story Hero */}
      {featuredPost && (
        <Hero
          title={featuredPost.title}
          subtitle="Latest from the Farm"
          description={featuredPost.excerpt}
          imageSrc={featuredPost.image}
          imageAlt={featuredPost.title}
          primaryCTA={{
            text: "Read Full Story",
            href: `/news/${featuredPost.id}`
          }}
          secondaryCTA={{
            text: "All Stories",
            href: "#all-stories"
          }}
          height="lg"
          overlay="dark"
        />
      )}

      {/* Category Filter */}
      <section id="all-stories" className="py-12 bg-[var(--twb-color-bg-secondary)] border-b border-[var(--twb-border-primary)]">
        <Container variant="wide">
          <div className="flex flex-wrap justify-center gap-3">
            {NEWS_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 uppercase tracking-wider text-sm font-medium transition-all rounded-full border ${
                  activeCategory === cat 
                    ? 'bg-[var(--twb-color-plum)] text-white border-[var(--twb-color-plum)]' 
                    : 'bg-white dark:bg-[var(--twb-color-bg-primary)] text-[var(--twb-color-text-muted)] border-[var(--twb-border-primary)] hover:border-[var(--twb-color-gold)] hover:text-[var(--twb-color-text-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-[var(--twb-color-bg-primary)]">
        <Container variant="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px] content-start">
            {currentPosts.length > 0 ? (
              currentPosts.map(post => (
                <Link 
                  to={`/news/${post.id}`} 
                  key={post.id} 
                  className="group block bg-white dark:bg-[var(--twb-color-bg-secondary)] border border-[var(--twb-border-primary)] hover:border-[var(--twb-color-gold)] hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[var(--twb-color-paper)] dark:bg-[var(--twb-color-ink)] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[var(--twb-color-ink)] dark:text-[var(--twb-color-paper)]">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[var(--twb-color-text-muted)] text-xs uppercase tracking-wider mb-3">
                      <Calendar size={14} /> {post.date}
                    </div>
                    <Typography variant="h3" className="mb-3 group-hover:text-[var(--twb-color-plum)] transition-colors">
                      {post.title}
                    </Typography>
                    <Typography variant="body" className="text-[var(--twb-color-text-muted)] mb-6 line-clamp-3">
                      {post.excerpt}
                    </Typography>
                    <div className="flex items-center text-[var(--twb-color-gold)] font-medium uppercase tracking-wider text-sm">
                      Read Story <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <Typography variant="body" className="text-[var(--twb-color-text-muted)]">
                  No stories found in this category yet. Check back soon!
                </Typography>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 pt-8 border-t border-[var(--twb-border-primary)]">
              <div className="flex items-center justify-between">
                {/* Previous Button */}
                <button 
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wider transition-colors min-w-[44px] min-h-[44px] px-4 ${
                    currentPage === 1 
                      ? 'text-[var(--twb-color-text-muted)] cursor-not-allowed' 
                      : 'text-[var(--twb-color-text-primary)] hover:text-[var(--twb-color-gold)]'
                  }`}
                  aria-label="Previous page"
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
                      className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-sm font-medium transition-all ${
                        currentPage === page
                          ? 'bg-[var(--twb-color-plum)] text-white'
                          : 'text-[var(--twb-color-text-muted)] hover:bg-[var(--twb-color-bg-secondary)]'
                      }`}
                      aria-label={`Page ${page}`}
                      aria-current={currentPage === page ? 'page' : undefined}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button 
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wider transition-colors min-w-[44px] min-h-[44px] px-4 ${
                    currentPage === totalPages 
                      ? 'text-[var(--twb-color-text-muted)] cursor-not-allowed' 
                      : 'text-[var(--twb-color-text-primary)] hover:text-[var(--twb-color-gold)]'
                  }`}
                  aria-label="Next page"
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Newsletter Signup CTA */}
      <section className="py-20 bg-[var(--twb-color-bg-secondary)]">
        <Container variant="content">
          <div className="text-center max-w-2xl mx-auto">
            <Typography variant="h2" className="mb-4">
              Never Miss a Story
            </Typography>
            <Typography variant="body-large" className="text-[var(--twb-color-text-muted)] mb-8">
              Subscribe to our newsletter for farm updates, harvest reports, new releases, and family stories delivered to your inbox.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 border border-[var(--twb-border-primary)] bg-white dark:bg-[var(--twb-color-bg-primary)] text-[var(--twb-color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-gold)] flex-1 max-w-md"
                aria-label="Email address"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
            <Typography variant="caption" className="text-[var(--twb-color-text-muted)] mt-4">
              We respect your privacy. Unsubscribe anytime.
            </Typography>
          </div>
        </Container>
      </section>
    </>
  );
};
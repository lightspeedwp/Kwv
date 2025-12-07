import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Search } from 'lucide-react';

/**
 * SearchResults Page Component
 * 
 * Displays search results for the global site search.
 * Handles "No Results" state and "Found Results" listing.
 * Uses query parameters (`?q=...`) to determine the search term.
 */
export const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const hasResults = query.toLowerCase() !== 'no results';

  return (
    <Layout>
      <Container variant="site" className="py-20">
        <Typography variant="h1" className="mb-8">Search Results</Typography>
        <Typography variant="body" className="mb-12 text-gray-600">
          Showing results for: <span className="font-bold text-black">"{query}"</span>
        </Typography>

        {hasResults ? (
          <div className="space-y-12 max-w-4xl">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="border-b border-gray-200 pb-8 last:border-0">
                <div className="text-sm text-[#8B0000] font-bold uppercase tracking-wider mb-2">News & Media</div>
                <Link to="/news/single" className="block group">
                  <Typography variant="h3" className="mb-3 group-hover:text-[#8B0000] transition-colors">
                    KWV Announces New Sustainable Farming Initiative
                  </Typography>
                </Link>
                <Typography variant="body" className="text-gray-600 mb-4">
                  KWV is proud to launch a comprehensive sustainability program aimed at reducing water usage and promoting biodiversity across all our vineyards...
                </Typography>
                <Link to="/news/single" className="text-[#8B0000] font-bold hover:underline">Read More</Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-sm">
            <Search size={48} className="mx-auto text-gray-300 mb-6" />
            <Typography variant="h3" className="mb-4">No results found</Typography>
            <Typography variant="body" className="text-gray-500 mb-8 max-w-md mx-auto">
              Sorry, but nothing matched your search terms. Please try again with some different keywords.
            </Typography>
            
            <div className="max-w-md mx-auto flex gap-4 justify-center">
               <Link to="/">
                  <Button>Return Home</Button>
               </Link>
               <Link to="/shop">
                  <Button variant="outline">Visit Shop</Button>
               </Link>
            </div>
          </div>
        )}
      </Container>
    </Layout>
  );
};

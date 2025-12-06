import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Layout } from '../components/layout/Layout';
import { COLORS } from '../constants/theme';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FAQSection } from '../components/sections/FAQSection';

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
  }
];

export const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Awards', 'Winemaking', 'Sustainability', 'Events'];

  const filteredPosts = activeCategory === 'All' 
    ? NEWS_POSTS 
    : NEWS_POSTS.filter(post => post.category === activeCategory);

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
        {/* Category Filter */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-4">
           <div className="flex gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 uppercase tracking-wider text-sm font-medium transition-all ${
                    activeCategory === cat 
                      ? 'text-[#8B0000] border-b-2 border-[#8B0000]' 
                      : 'text-gray-500 hover:text-[#2C1810]'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredPosts.map(post => (
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
           ))}
        </div>
      </Container>

      <FAQSection items={[
        { question: "How can I subscribe to press releases?", answer: "You can sign up for our newsletter to receive the latest news, press releases, and event updates directly to your inbox." },
        { question: "Who do I contact for media inquiries?", answer: "Please contact our media relations team at <strong>media@kwv.co.za</strong> for any press-related queries or interview requests." }
      ]} />
    </Layout>
  );
};

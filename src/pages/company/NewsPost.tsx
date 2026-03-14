import React from 'react';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Layout } from '../../components/layout/Layout';
import { Link, useParams } from 'react-router';
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { FAQSection } from '../../components/sections/FAQSection';

/**
 * NewsPost Page Component
 * 
 * Single view for a news article.
 * Displays the full content of a selected news item based on the `slug` parameter.
 * Includes social sharing buttons and "Related FAQ".
 */
export const NewsPost: React.FC = () => {
  const { slug } = useParams();

  // Mock data fetching based on slug
  const post = {
    title: 'KWV Secures Top Honours at 2024 Trophy Wine Show',
    date: 'June 15, 2024',
    category: 'Awards',
    content: `
      <p>KWV has once again demonstrated its winemaking prowess by taking home the trophy for Best Producer at this year's prestigious show. The annual competition, which judges thousands of entries from across the country, is widely regarded as the benchmark for South African wine excellence.</p>
      <p>In addition to the Best Producer trophy, KWV's The Mentors range secured three Double Gold medals, further solidifying its reputation as a collection of wines that stand shoulder-to-shoulder with the best in the world.</p>
      <h3>A Team Effort</h3>
      <p>"This award is a testament to the dedication of our entire team," said Chief Winemaker. "From the viticulturists who nurture the vines to the cellar team who tirelessly monitor every barrel, this is a shared victory."</p>
      <p>The judges praised the consistency and elegance of the wines, noting that KWV continues to innovate while respecting traditional techniques.</p>
      <h3>Looking Ahead</h3>
      <p>With the 2024 harvest showing immense promise, the team is already looking forward to the next vintage. "We never rest on our laurels," the Chief Winemaker added. "Every vintage is a new opportunity to strive for perfection."</p>
    `,
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
  };

  return (
    <Layout>
      {/* Hero Image */}
      <div className="h-[50vh] min-h-[400px] w-full relative">
        <ImageWithFallback 
           src={post.image} 
           alt={post.title}
           className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 bg-gradient-to-t from-black/80 to-transparent">
           <Container variant="content">
              <div className="text-white">
                 <div className="flex items-center gap-4 mb-4 text-sm font-bold uppercase tracking-widest">
                    <span className="bg-[#DAA520] text-[#2C1810] px-3 py-1">{post.category}</span>
                    <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                 </div>
                 <Typography variant="h1" className="text-white drop-shadow-md">{post.title}</Typography>
              </div>
           </Container>
        </div>
      </div>

      <Container variant="content" className="py-16 relative">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar / Social Share */}
            <div className="lg:col-span-2 hidden lg:flex flex-col gap-4 sticky top-24 h-fit">
               <Typography variant="caption" className="uppercase tracking-widest text-gray-500 font-bold mb-2">Share</Typography>
               <button className="p-3 bg-gray-100 rounded-full hover:bg-[#3b5998] hover:text-white transition-colors"><Facebook size={20} /></button>
               <button className="p-3 bg-gray-100 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-colors"><Twitter size={20} /></button>
               <button className="p-3 bg-gray-100 rounded-full hover:bg-[#0077b5] hover:text-white transition-colors"><Linkedin size={20} /></button>
               <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-800 hover:text-white transition-colors"><Share2 size={20} /></button>
            </div>

            {/* Content */}
            <div className="lg:col-span-8">
               <div 
                  className="prose prose-lg prose-headings:font-serif prose-headings:text-[#2C1810] prose-p:text-gray-600 prose-a:text-[#8B0000] max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
               />
               
               <div className="mt-16 pt-8 border-t border-gray-200">
                  <Link to="/news" className="inline-flex items-center text-[#2C1810] hover:text-[#8B0000] transition-colors font-medium uppercase tracking-wider text-sm">
                     <ArrowLeft size={16} className="mr-2" /> Back to News
                  </Link>
               </div>
            </div>
         </div>
      </Container>

      <FAQSection items={[
        { question: "Can I share this article?", answer: "Yes, you can use the social share buttons on the left (desktop) or bottom (mobile) to share this article on your preferred platform." },
        { question: "Are the images available for download?", answer: "High-resolution images are available in our media library for accredited press. Please contact our PR team." }
      ]} />
    </Layout>
  );
};
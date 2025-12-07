import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Layout } from '../../components/layout/Layout';
import { Button } from '../../components/common/Button';
import { Hero } from '../../components/sections/Hero';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

// Images
const gridImages = [
  "https://images.unsplash.com/photo-1646342029867-34f6ecb10161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0d28lMjBwZW9wbGUlMjB2aW5leWFyZCUyMHN0YWZmfGVufDF8fHx8MTc2NTExNDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1664176604116-2b61ceb1d7ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lcnklMjBjZWxsYXIlMjB3b3JrZXIlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzY1MTE0NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1572021335469-31706a17aaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwaGFwcHl8ZW58MXx8fHwxNzY1MTE0NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1741119337221-2651dbd51b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBsYWIlMjB3aW5lfGVufDF8fHx8MTc2NTExNDQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

// Data
const testimonials = [
  {
    quote: "I have been with KWV for almost 10 years, and the opportunities for growth and to become an expert in your work are tremendous.",
    author: "– Winemaker –"
  },
  {
    quote: "KWV is not only a great company, KWV is a family.",
    author: "– Sales Representative –"
  },
  {
    quote: "KWV gave me an opportunity to study further. As we speak, I'm studying management assistance at Boland college as a part-time student.",
    author: "– Member of Wine Tasting team –"
  },
  {
    quote: "“Ndiyathanda ukusebenza kwi-KWV kuba abantu banomdla, bayamkela, bayakhuthaza, bazimisele ukunceda, banomdla wokufunda, kwaye banokuguquguquka futhi kulula ukuguqula.” (I like working at KWV because the people are so nice, welcoming, motivating, willing to help, eager to learn, they are also flexible and easily adjusting.)",
    author: "– IT intern –"
  },
  {
    quote: "The people and the location in the CapeWinelands are great!",
    author: "– Member of Finance team –"
  }
];

const jobs = [
  { title: "Team Leader Sales Ref: TLS1124", date: "08 December 2025" },
  { title: "Machine Operator x2 Ref: MO1124", date: "08 December 2025" },
  { title: "Order Coordinator Ref: OC1104", date: "09 December 2025" },
  { title: "Financial Manager: Operations Ref: FMO1125", date: "09 December 2025" },
  { title: "Financial Controller – Spirits & Supply Chain Ref: FC1201", date: "12 December 2025" },
];

/**
 * Careers Page Component
 * 
 * Displays career opportunities, company culture, and testimonials.
 * Lists open job positions with a "scrollTo" interaction.
 */
export const Careers: React.FC = () => {
  const navigate = useNavigate();

  const scrollToJobs = () => {
    document.getElementById('jobs-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <Hero 
        title="Careers at KWV"
        height="large"
        className="bg-black"
        primaryAction={{
            label: "View Current Jobs",
            onClick: scrollToJobs
        }}
        secondaryAction={{
            label: "Contact Us",
            onClick: () => navigate('/contact')
        }}
      />

      <section className="py-16 md:py-24 bg-white text-center">
        <Container variant="content">
          <Typography variant="caption" className="uppercase tracking-[0.2em] mb-4 text-gray-500">
            CAREERS AT KWV
          </Typography>
          
          <Typography variant="h2" className="mb-12 font-bold leading-tight">
            KWV is a multi-award-winning producer of wine and spirits. What is more, with a portfolio of respected products in over 100 markets globally and based in Paarl in the Western Cape of South Africa, KWV is committed to sustainability and people empowerment.
          </Typography>

          <Typography variant="h3" className="mb-6 font-bold uppercase tracking-wide">
            CAREERS AT KWV
          </Typography>

          <Typography variant="body" className="mb-6 text-gray-600 max-w-4xl mx-auto">
            KWV offers exiting careers. Furthermore, as a medium sized organisation, we pride ourselves
            on creating opportunities for our people to make meaningful contributions within the business.
          </Typography>

          <Typography variant="body" className="mb-6 text-gray-600 max-w-4xl mx-auto">
            Furthermore, for an individual eager to grow and develop in a fast-paced dynamic environment, KWV offers a flat structured
            environment that exposes most roles to various facets within the organisation for great insight into an exciting industry.
          </Typography>

          <Typography variant="body" className="mb-12 text-gray-600 max-w-4xl mx-auto">
            What is more, when you start a career with KWV you become part of a family who takes pride in our brand and has a passion to succeed!
          </Typography>

          <div className="mb-20">
             <Button 
                onClick={scrollToJobs}
                className="bg-[#BFA15F] text-white hover:bg-[#a68b4f] px-10 py-3 rounded-none uppercase tracking-widest text-sm font-bold"
             >
                Find Jobs
             </Button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {gridImages.map((src, index) => (
              <div key={index} className="aspect-square bg-gray-100 overflow-hidden">
                <ImageWithFallback 
                  src={src} 
                  alt={`Employee ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <Typography variant="h3" className="mb-12 font-bold uppercase tracking-wide">
            WHY A CAREER WITH KWV
          </Typography>

          <Typography variant="body" className="mb-10 text-gray-600">
            Don’t take our word for it – let our employees tell you why they enjoy a career at KWV.
          </Typography>

          <div className="space-y-4 mb-20">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-[#EAEAEA] p-6 rounded-none">
                <Typography variant="body" className="italic mb-2 text-[#2C1810]">
                  "{item.quote}"
                </Typography>
                <Typography variant="caption" className="text-gray-500 font-medium">
                  {item.author}
                </Typography>
              </div>
            ))}
          </div>

          <div className="mb-20">
             <Button 
                onClick={scrollToJobs}
                className="bg-[#BFA15F] text-white hover:bg-[#a68b4f] px-10 py-3 rounded-none uppercase tracking-widest text-sm font-bold"
             >
                Find Jobs
             </Button>
          </div>

        </Container>
      </section>

      {/* Jobs Section */}
      <section id="jobs-section" className="py-20 bg-white border-t border-gray-100">
        <Container variant="content">
          <Typography variant="h3" className="mb-16 text-center font-normal uppercase tracking-[0.1em]">
            JOBS
          </Typography>

          <div className="hidden md:grid grid-cols-12 gap-4 mb-6 px-4">
             <div className="col-span-6">
                <Typography variant="h4" className="font-bold">Title</Typography>
             </div>
             <div className="col-span-3">
                <Typography variant="h4" className="font-bold">Date</Typography>
             </div>
             <div className="col-span-3">
                <Typography variant="h4" className="font-bold">Details</Typography>
             </div>
          </div>

          <div className="space-y-4">
             {jobs.map((job, index) => (
               <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 md:border-none pb-8 md:pb-4">
                  <div className="col-span-1 md:col-span-6">
                     <span className="md:hidden font-bold block mb-1 text-xs text-gray-400 uppercase">Title</span>
                     <Typography variant="body" className="font-bold text-[#BFA15F] text-lg md:text-xl">
                        {job.title}
                     </Typography>
                  </div>
                  <div className="col-span-1 md:col-span-3">
                     <span className="md:hidden font-bold block mb-1 text-xs text-gray-400 uppercase">Date</span>
                     <Typography variant="body" className="text-[#BFA15F] font-bold text-lg md:text-xl">
                        {job.date}
                     </Typography>
                  </div>
                  <div className="col-span-1 md:col-span-3">
                     <Button className="bg-[#BFA15F] hover:bg-[#a68b4f] text-white w-full md:w-auto px-6 rounded-sm">
                        Click here
                     </Button>
                  </div>
               </div>
             ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" className="border-[#BFA15F] text-[#BFA15F] hover:bg-[#BFA15F] hover:text-white rounded-none px-8 py-2 uppercase">
               Back
            </Button>
          </div>

        </Container>
      </section>
    </Layout>
  );
};

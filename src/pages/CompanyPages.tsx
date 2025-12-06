import React from 'react';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Layout } from '../components/layout/Layout';
import { COLORS } from '../constants/theme';
import { FAQSection } from '../components/sections/FAQSection';

export const Careers: React.FC = () => (
  <Layout>
    <Container variant="content" className="py-20 text-center">
      <Typography variant="h1" color={COLORS.wineRed} className="mb-6">Careers at KWV</Typography>
      <Typography variant="bodyLarge" className="text-gray-600 mb-12">
        Join a team passionate about crafting world-class wines and spirits.
      </Typography>
      <div className="p-12 bg-gray-50 border border-dashed border-gray-300 rounded-lg">
        <Typography variant="h3" className="mb-2 text-gray-500">No Current Openings</Typography>
        <Typography variant="body" className="text-gray-400">Please check back later for new opportunities.</Typography>
      </div>
    </Container>
    <FAQSection items={[
      { question: "How do I apply for a job?", answer: "You can apply directly through our careers portal by submitting your CV and cover letter for relevant openings." },
      { question: "Do you offer internships?", answer: "Yes, we offer annual harvest internships as well as graduate programs in marketing, finance, and operations." }
    ]} />
  </Layout>
);

export const ExecutiveTeam: React.FC = () => (
  <Layout>
    <Container variant="content" className="py-20 text-center">
      <Typography variant="h1" color={COLORS.wineRed} className="mb-6">Executive Team</Typography>
      <Typography variant="bodyLarge" className="text-gray-600 mb-12">
        Meet the visionary leaders guiding KWV into the future.
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white p-6 shadow-sm border border-gray-100">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <Typography variant="h4" className="mb-1">Executive Member {i}</Typography>
            <Typography variant="caption" className="uppercase tracking-widest text-gray-500">Title / Role</Typography>
          </div>
        ))}
      </div>
    </Container>
    <FAQSection items={[
      { question: "Who is the CEO of KWV?", answer: "KWV is led by a dynamic executive team. Please refer to the profiles above for current leadership information." },
      { question: "How is the board structured?", answer: "Our board consists of executive and non-executive directors committed to corporate governance and strategic oversight." }
    ]} />
  </Layout>
);

export const Sustainability: React.FC = () => (
  <Layout>
    <Container variant="content" className="py-20 text-center">
      <Typography variant="h1" color={COLORS.wineRed} className="mb-6">Sustainability</Typography>
      <Typography variant="bodyLarge" className="text-gray-600 mb-12">
        Our commitment to the earth is as deep as our roots in the soil.
      </Typography>
      <div className="text-left space-y-8">
        <div className="bg-[#F5F5DC] p-8 rounded-lg">
           <Typography variant="h3" className="mb-4 text-[#2C1810]">Environmental Responsibility</Typography>
           <Typography variant="body" className="text-gray-700">
             We are dedicated to sustainable farming practices, water conservation, and renewable energy initiatives to ensure we protect our environment for future generations.
           </Typography>
        </div>
        <div className="bg-[#F5F5DC] p-8 rounded-lg">
           <Typography variant="h3" className="mb-4 text-[#2C1810]">Social Impact</Typography>
           <Typography variant="body" className="text-gray-700">
             KWV is committed to the upliftment of our communities through education, health, and social development programs.
           </Typography>
        </div>
      </div>
    </Container>
    <FAQSection items={[
      { question: "Is KWV IPW accredited?", answer: "Yes, KWV is fully accredited by the Integrated Production of Wine (IPW), ensuring sustainable environmental practices." },
      { question: "Do you use solar energy?", answer: "We have implemented significant solar energy projects at our production facilities to reduce our carbon footprint." }
    ]} />
  </Layout>
);

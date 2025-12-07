import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';

/**
 * Terms Page Component
 * 
 * Displays the Terms and Conditions of Use for the KWV website.
 * Covers usage rules, privacy reference, and intellectual property.
 */
export const Terms: React.FC = () => {
  return (
    <Layout>
      <Hero 
        title="Terms and Conditions of Use"
        height="small"
        className="bg-[#2C1810]"
      />
      <Container variant="content" className="py-16">
        <div className="prose max-w-none text-gray-600">
          <p>Welcome to the KWV website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern KWV's relationship with you in relation to this website.</p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">1. Use of the Website</h3>
          <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">2. Privacy</h3>
          <p>Your use of this website is also subject to our Privacy Policy. Please review our Privacy Policy, which also governs the website and informs users of our data collection practices.</p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">3. Intellectual Property</h3>
          <p>All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of KWV or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.</p>
        </div>
      </Container>
    </Layout>
  );
};

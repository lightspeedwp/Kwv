import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { COLORS } from '../constants/theme';

export const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="bg-[#F5F5DC] py-16">
        <Container variant="content" className="text-center">
          <Typography variant="h1" color={COLORS.darkBrown} className="mb-4">Terms and Conditions of Use</Typography>
          <Typography variant="bodyLarge" className="text-gray-600">
            Please read these terms carefully before using our website.
          </Typography>
        </Container>
      </div>

      <Container variant="content" className="py-16">
        <div className="prose prose-lg max-w-none text-gray-600">
          <h3>1. Introduction</h3>
          <p>Welcome to the KWV website. By accessing and using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.</p>

          <h3>2. Age Restriction</h3>
          <p>This website is intended for use by persons who are of legal drinking age in their country of residence. By entering this site, you confirm that you are of legal drinking age.</p>

          <h3>3. Intellectual Property</h3>
          <p>All content, trademarks, logos, and data on this website, including but not limited to software, databases, text, graphics, icons, hyperlinks, private information, designs, and agreements, are the property of or licensed to KWV and are protected from infringement by local and international legislation.</p>

          <h3>4. Use of Content</h3>
          <p>You may view, download, and print content from this website for personal and non-commercial use only. Any other use, including the reproduction, modification, distribution, transmission, or display of the content is strictly prohibited.</p>

          <h3>5. Disclaimer</h3>
          <p>While KWV takes reasonable measures to ensure that the contents of this website are accurate and complete, KWV makes no representations or warranties, whether express or implied, as to the quality, timeliness, operation, integrity, availability, or functionality of this website or the data and information contained on it.</p>

          <h3>6. Limitation of Liability</h3>
          <p>KWV shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of or inability to use this website or the services or content provided from or through this website.</p>

          <h3>7. Governing Law</h3>
          <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of South Africa.</p>

          <h3>8. Changes to Terms</h3>
          <p>KWV reserves the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of such changes.</p>
        </div>
      </Container>
    </Layout>
  );
};

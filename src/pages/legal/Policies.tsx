import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { Container } from '../../components/common/Container';
import { Typography } from '../../components/common/Typography';
import { Hero } from '../../components/sections/Hero';

/**
 * Policies Page Component
 * 
 * Lists general corporate policies and guidelines (Privacy, Cookie, POPIA).
 * Uses a small Hero header and a content container for long-form text.
 */
export const Policies: React.FC = () => {
  return (
    <Layout>
      <Hero 
        title="Policies & Guidelines"
        height="small"
        className="bg-[#2C1810]"
      />
      <Container variant="content" className="py-16">
        <div className="prose max-w-none text-gray-600">
          <p>At KWV, we are committed to conducting our business with integrity and in compliance with all applicable laws and regulations. Our policies and guidelines provide the framework for our operations and ensure that we maintain the highest standards of corporate governance.</p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">Privacy Policy</h3>
          <p>We respect your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.</p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">Cookie Policy</h3>
          <p>This website uses cookies to improve your experience. By using our website, you agree to our use of cookies in accordance with this policy.</p>
          
          <h3 className="text-xl font-bold mt-8 mb-4">POPI Act Compliance</h3>
          <p>KWV is fully compliant with the Protection of Personal Information Act (POPIA). We have implemented measures to ensure that your personal information is processed lawfully and securely.</p>
        </div>
      </Container>
    </Layout>
  );
};

import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { COLORS } from '../constants/theme';

export const ComingSoon: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-white">
        <Container variant="content" className="text-center py-20">
            <Typography variant="h1" className="font-serif text-5xl md:text-7xl text-[#2C1810] mb-8 leading-tight">
              Great things are <br/>on the horizon
            </Typography>
            
            <div className="w-24 h-1 bg-[#DAA520] mx-auto mb-10"></div>
            
            <Typography variant="bodyLarge" className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Something big is brewing! Our new online experience is in the works and will be launching soon.
            </Typography>
        </Container>
      </div>
    </Layout>
  );
};

import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';

export const Jobs: React.FC = () => {
  return (
    <Layout>
      <Container variant="content" className="py-16">
        <Typography variant="h1" className="mb-8">Current Opportunities</Typography>
        <div className="bg-gray-50 p-8 rounded text-center">
            <Typography variant="h3" className="mb-4">Join Our Team</Typography>
            <p className="mb-8 text-gray-600">We are always looking for talented individuals to join the KWV family. Explore our current openings below.</p>
            
            <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="bg-white p-6 border border-gray-200 rounded hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-lg text-[#2C1810]">Senior Winemaker</h4>
                            <p className="text-sm text-gray-500">Paarl, Western Cape</p>
                        </div>
                        <span className="bg-[#DAA520] text-white text-xs px-2 py-1 rounded">Full Time</span>
                    </div>
                </div>
                
                 <div className="bg-white p-6 border border-gray-200 rounded hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-lg text-[#2C1810]">Marketing Manager</h4>
                            <p className="text-sm text-gray-500">Paarl, Western Cape</p>
                        </div>
                        <span className="bg-[#DAA520] text-white text-xs px-2 py-1 rounded">Full Time</span>
                    </div>
                </div>
                
                 <div className="bg-white p-6 border border-gray-200 rounded hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="font-bold text-lg text-[#2C1810]">Logistics Coordinator</h4>
                            <p className="text-sm text-gray-500">Paarl, Western Cape</p>
                        </div>
                        <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">Contract</span>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </Layout>
  );
};

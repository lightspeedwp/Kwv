import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { COLORS } from '../constants/theme';

export const ReturnsPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="bg-[#F9F9F9] py-12 border-b border-gray-200">
        <Container variant="content" className="text-center">
          <Typography variant="h1" className="text-[#2C1810] mb-0">Returns Policy</Typography>
        </Container>
      </div>

      <Container variant="content" className="py-16">
        <div className="prose max-w-none text-gray-600 leading-relaxed">
          <p className="mb-6">
            At KWV, we strive to ensure your complete satisfaction with every purchase. If you are not entirely satisfied with your purchase, we're here to help.
          </p>

          <Typography variant="h3" className="mt-10 mb-4 text-[#2C1810]">1. Returns Eligibility</Typography>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>You have 30 calendar days to return an item from the date you received it.</li>
            <li>To be eligible for a return, your item must be unused and in the same condition that you received it.</li>
            <li>Your item must be in the original packaging.</li>
            <li>Your item must have the receipt or proof of purchase.</li>
          </ul>

          <Typography variant="h3" className="mt-10 mb-4 text-[#2C1810]">2. Refunds</Typography>
          <p className="mb-6">
            Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.
          </p>
          <p className="mb-6">
            If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
          </p>

          <Typography variant="h3" className="mt-10 mb-4 text-[#2C1810]">3. Shipping</Typography>
          <p className="mb-6">
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
          </p>

          <Typography variant="h3" className="mt-10 mb-4 text-[#2C1810]">4. Damaged or Defective Items</Typography>
          <p className="mb-6">
            If you received a damaged or defective product, please contact us immediately at <a href="mailto:info@kwvemporium.co.za" className="text-[#8B0000] underline">info@kwvemporium.co.za</a> or call us at 021 807 3007/8 with details of the product and the defect. We will arrange for a replacement or refund.
          </p>

          <Typography variant="h3" className="mt-10 mb-4 text-[#2C1810]">Contact Us</Typography>
          <p>
            If you have any questions on how to return your item to us, contact us at <a href="mailto:info@kwvemporium.co.za" className="text-[#8B0000] underline">info@kwvemporium.co.za</a>.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

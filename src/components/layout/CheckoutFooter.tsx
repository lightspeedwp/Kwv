import React from 'react';
import { Container } from '../common/Container';
import { Link } from 'react-router-dom';

export const CheckoutFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <Container variant="site">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} KWV. All rights reserved.</p>
          
          <div className="flex gap-6">
            <Link to="/policies" className="hover:text-gray-900 underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900 underline">Terms & Conditions</Link>
            <Link to="/returns-policy" className="hover:text-gray-900 underline">Returns Policy</Link>
          </div>

          <div className="flex items-center gap-2 grayscale opacity-60">
             {/* Simple visual representation of secure payment icons text if images aren't available */}
             <span>Visa</span>
             <span>Mastercard</span>
             <span>Secure SSL</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

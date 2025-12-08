import React from 'react';
import { Container } from '../../common/Container';
import { Truck, ShieldCheck, RefreshCw, Gift } from 'lucide-react';

/**
 * ServiceFeaturesSection Component
 * 
 * Displays a row of service guarantees/features (Delivery, Security, Returns, Gifting).
 * Typically placed above the footer on Shop pages.
 * 
 * Features:
 * - 4-column grid.
 * - Icon + Title + Description format.
 */
export const ServiceFeaturesSection: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] py-16 border-t border-gray-200">
      <Container variant="site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
             <div className="mb-4 text-[#DAA520]">
                <Truck size={40} strokeWidth={1.5} />
             </div>
             <h4 className="text-[#2C1810] font-bold uppercase tracking-wider text-sm mb-2">Nationwide Delivery</h4>
             <p className="text-gray-500 text-sm">Reliable delivery to your door across South Africa.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
             <div className="mb-4 text-[#DAA520]">
                <ShieldCheck size={40} strokeWidth={1.5} />
             </div>
             <h4 className="text-[#2C1810] font-bold uppercase tracking-wider text-sm mb-2">Secure Payment</h4>
             <p className="text-gray-500 text-sm">100% secure checkout with multiple payment options.</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
             <div className="mb-4 text-[#DAA520]">
                <RefreshCw size={40} strokeWidth={1.5} />
             </div>
             <h4 className="text-[#2C1810] font-bold uppercase tracking-wider text-sm mb-2">Easy Returns</h4>
             <p className="text-gray-500 text-sm">Hassle-free returns within 30 days of purchase.</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
             <div className="mb-4 text-[#DAA520]">
                <Gift size={40} strokeWidth={1.5} />
             </div>
             <h4 className="text-[#2C1810] font-bold uppercase tracking-wider text-sm mb-2">Gift Wrapping</h4>
             <p className="text-gray-500 text-sm">Add a personal touch with our premium gift wrapping service.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

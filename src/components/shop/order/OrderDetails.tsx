import React from 'react';
import { Typography } from '../../common/Typography';
import { Link } from 'react-router-dom';

export const OrderDetails: React.FC = () => {
  return (
    <div className="mb-12">
       <Typography variant="h3" className="mb-6 !text-2xl font-normal text-[#333333]">Order details</Typography>
       
       <table className="w-full text-left border-collapse">
          <thead>
             <tr className="border-b-2 border-[#D3D3D3]">
                <th className="py-4 text-[#333333] font-bold text-base pl-0">Product</th>
                <th className="py-4 text-[#333333] font-bold text-base text-right pr-0">Total</th>
             </tr>
          </thead>
          <tbody className="divide-y divide-[#D3D3D3]">
             <tr>
                <td className="py-4 pl-0">
                   <Link to="#" className="text-[#333333] border-b border-black/20 hover:text-[#8B0000] hover:border-[#8B0000] transition-colors mr-1">
                    Album
                   </Link> 
                   <strong className="text-[#333333]">× 1</strong>
                </td>
                <td className="py-4 text-right text-[#333333] pr-0">$15.00</td>
             </tr>
             <tr>
                <td className="py-4 pl-0">
                   <Link to="#" className="text-[#333333] border-b border-black/20 hover:text-[#8B0000] hover:border-[#8B0000] transition-colors mr-1">
                    Cap
                   </Link> 
                   <strong className="text-[#333333]">× 1</strong>
                </td>
                <td className="py-4 text-right text-[#333333] pr-0">$16.00</td>
             </tr>
             <tr>
                <td className="py-4 pl-0">
                   <Link to="#" className="text-[#333333] border-b border-black/20 hover:text-[#8B0000] hover:border-[#8B0000] transition-colors mr-1">
                    Long Sleeve Tee
                   </Link> 
                   <strong className="text-[#333333]">× 1</strong>
                </td>
                <td className="py-4 text-right text-[#333333] pr-0">$25.00</td>
             </tr>
          </tbody>
          <tfoot className="border-t-2 border-[#D3D3D3]">
             <tr>
                <td className="py-4 pl-0 text-[#333333] font-bold">Shipping:</td>
                <td className="py-4 text-right text-[#333333] pr-0 leading-relaxed">
                    <div className="text-right">
                        Collection from Dispatch:<br/>
                        46 Devon Street, Cape Town, Western Cape, 7015<br/>
                        Local Pickup
                    </div>
                </td>
             </tr>
             <tr className="border-t-2 border-[#D3D3D3]">
                <td className="py-4 pl-0 text-[#333333] font-bold text-lg">Total:</td>
                <td className="py-4 text-right text-[#333333] font-bold text-lg pr-0">$56.00</td>
             </tr>
          </tfoot>
       </table>
    </div>
  );
};
import React from 'react';
import { Typography } from '../../common/Typography';
import { Button } from '../../common/Button';
import { Download } from 'lucide-react';

/**
 * DownloadsSection Component
 * 
 * Displays available digital downloads for the order.
 * Only renders if the order contains virtual/downloadable products.
 * Features a table layout with "Product", "Expires", and "Download" button.
 */
export const DownloadsSection: React.FC = () => {
  return (
    <div className="mb-12">
      <Typography variant="h3" className="mb-6 !text-2xl font-normal text-[#333333]">Downloads</Typography>
      
      <div className="border-2 border-[#D3D3D3] rounded-sm overflow-hidden">
         <div className="bg-white p-4 border-b-2 border-[#D3D3D3] grid grid-cols-3 text-sm font-bold text-[#333333]">
            <div>Product</div>
            <div>Expires</div>
            <div className="text-right">Download</div>
         </div>
         <div className="p-4 grid grid-cols-3 items-center text-sm text-gray-600">
            <div>
               <span className="font-medium text-[#333333]">Album</span>
            </div>
            <div>Never</div>
            <div className="text-right">
               <Button size="sm" className="bg-[#333333] text-white hover:bg-black inline-flex items-center gap-2">
                  <Download size={14} />
                  <span>Album.mp3</span>
               </Button>
            </div>
         </div>
      </div>
    </div>
  );
};
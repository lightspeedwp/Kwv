import React from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

interface Notice {
  type: 'success' | 'error' | 'info';
  message: string;
}

interface StoreNoticesProps {
  notices: Notice[];
}

export const StoreNotices: React.FC<StoreNoticesProps> = ({ notices }) => {
  if (notices.length === 0) return null;

  return (
    <div className="space-y-4 mb-8">
      {notices.map((notice, index) => (
        <div 
          key={index} 
          className={`
            p-4 rounded-sm border flex items-start gap-3
            ${notice.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : ''}
            ${notice.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' : ''}
            ${notice.type === 'info' ? 'bg-blue-50 border-blue-200 text-blue-800' : ''}
          `}
        >
          <div className="mt-0.5 shrink-0">
             {notice.type === 'success' && <CheckCircle size={18} />}
             {notice.type === 'error' && <AlertCircle size={18} />}
             {notice.type === 'info' && <Info size={18} />}
          </div>
          <span className="text-sm font-medium">{notice.message}</span>
        </div>
      ))}
    </div>
  );
};

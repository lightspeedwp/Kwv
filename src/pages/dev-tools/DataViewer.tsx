/**
 * Data Files Viewer
 * 
 * Browse and inspect all data files used in the application.
 * Displays structured data with syntax highlighting and search.
 * 
 * Features:
 * - View all data files (products, news, FAQs, farm story)
 * - Syntax-highlighted JSON display
 * - Search within data
 * - Copy data to clipboard
 * - Download as JSON
 * 
 * @version 1.0
 */

import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Copy, Check, Download, Search, ChevronRight } from 'lucide-react';
import { products } from '../../data/products';
import { newsPosts } from '../../data/newsPosts';
import { FAQ_CATEGORIES } from '../../data/faqData';
import { SHOP_FAQ } from '../../data/shop-faq';
import { farmStory } from '../../data/farmStory';
import { shopBrands } from '../../data/shopBrands';
import { jobs } from '../../data/jobs';

interface DataFile {
  id: string;
  name: string;
  description: string;
  data: any;
  icon: string;
}

const dataFiles: DataFile[] = [
  {
    id: 'products',
    name: 'Products',
    description: '17 products (wines, spirits, cheese, gifts)',
    data: products,
    icon: '🍷',
  },
  {
    id: 'news',
    name: 'News Posts',
    description: '12 blog posts and farm updates',
    data: newsPosts,
    icon: '📰',
  },
  {
    id: 'faqs',
    name: 'FAQs',
    description: '28 Q&A across 6 categories',
    data: FAQ_CATEGORIES,
    icon: '❓',
  },
  {
    id: 'shop-faq',
    name: 'Shop FAQs',
    description: 'Shop-specific FAQs',
    data: SHOP_FAQ,
    icon: '🛒',
  },
  {
    id: 'farmStory',
    name: 'Farm Story',
    description: 'Complete farm data (history, team, awards, experiences)',
    data: farmStory,
    icon: '🏡',
  },
  {
    id: 'brands',
    name: 'Shop Brands',
    description: 'Brand portfolio data',
    data: shopBrands,
    icon: '🏷️',
  },
  {
    id: 'jobs',
    name: 'Job Listings',
    description: '5 career opportunities',
    data: jobs,
    icon: '💼',
  },
];

export default function DataViewer() {
  const [selectedFile, setSelectedFile] = useState<DataFile | null>(null);
  const [copiedData, setCopiedData] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const copyToClipboard = () => {
    if (selectedFile) {
      const json = JSON.stringify(selectedFile.data, null, 2);
      navigator.clipboard.writeText(json);
      setCopiedData(true);
      setTimeout(() => setCopiedData(false), 2000);
    }
  };

  const downloadJSON = () => {
    if (selectedFile) {
      const json = JSON.stringify(selectedFile.data, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${selectedFile.id}.json`;
      a.click();
    }
  };

  const getDataPreview = (data: any): string => {
    const json = JSON.stringify(data, null, 2);
    if (searchTerm) {
      return json;
    }
    return json.length > 10000 ? json.substring(0, 10000) + '\n\n... (truncated)' : json;
  };

  const highlightSearch = (text: string): string => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-300 text-black">$1</mark>');
  };

  return (
    <div className="min-h-screen bg-[var(--twb-color-bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            to="/dev-tools"
            className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--twb-color-accent-primary)] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dev Tools
          </Link>
          <h1 className="text-3xl font-bold text-[var(--twb-color-text-primary)]">
            Data Files Viewer
          </h1>
          <p className="mt-2 text-[var(--twb-color-text-secondary)]">
            Browse and inspect all data files in the application
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* File List */}
          <div className="lg:col-span-1">
            <h2 className="mb-4 text-lg font-semibold text-[var(--twb-color-text-primary)]">
              Data Files ({dataFiles.length})
            </h2>
            <div className="space-y-2">
              {dataFiles.map((file) => (
                <button
                  key={file.id}
                  onClick={() => {
                    setSelectedFile(file);
                    setSearchTerm('');
                  }}
                  className={`w-full rounded-lg border p-4 text-left transition-all ${
                    selectedFile?.id === file.id
                      ? 'border-[var(--twb-color-accent-primary)] bg-[var(--twb-color-accent-primary)]/10'
                      : 'border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] hover:border-[var(--twb-color-accent-primary)]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{file.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-[var(--twb-color-text-primary)]">
                          {file.name}
                        </h3>
                        <ChevronRight className="h-4 w-4 text-[var(--twb-color-text-secondary)]" />
                      </div>
                      <p className="mt-1 text-sm text-[var(--twb-color-text-secondary)]">
                        {file.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Data Preview */}
          <div className="lg:col-span-2">
            {selectedFile ? (
              <motion.div
                key={selectedFile.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selectedFile.icon}</span>
                    <div>
                      <h2 className="text-xl font-bold text-[var(--twb-color-text-primary)]">
                        {selectedFile.name}
                      </h2>
                      <p className="text-sm text-[var(--twb-color-text-secondary)]">
                        {selectedFile.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] px-4 py-2 text-sm font-medium text-[var(--twb-color-text-primary)] hover:bg-[var(--twb-color-accent-primary)] hover:text-white"
                    >
                      {copiedData ? (
                        <>
                          <Check className="h-4 w-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy
                        </>
                      )}
                    </button>
                    <button
                      onClick={downloadJSON}
                      className="flex items-center gap-2 rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] px-4 py-2 text-sm font-medium text-[var(--twb-color-text-primary)] hover:bg-[var(--twb-color-accent-primary)] hover:text-white"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                  </div>
                </div>

                {/* Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--twb-color-text-secondary)]" />
                  <input
                    type="text"
                    placeholder="Search within this data file..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] py-2 pl-10 pr-4 text-sm text-[var(--twb-color-text-primary)] placeholder:text-[var(--twb-color-text-secondary)] focus:border-[var(--twb-color-accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--twb-color-accent-primary)]/20"
                  />
                </div>

                {/* JSON Display */}
                <div className="overflow-hidden rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)]">
                  <div className="max-h-[600px] overflow-auto p-4">
                    <pre
                      className="font-mono text-sm text-[var(--twb-color-text-primary)]"
                      dangerouslySetInnerHTML={{
                        __html: highlightSearch(getDataPreview(selectedFile.data))
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-lg border border-[var(--twb-border-primary)] bg-[var(--twb-color-bg-secondary)] p-12">
                <div className="text-center">
                  <span className="text-6xl">📁</span>
                  <p className="mt-4 text-[var(--twb-color-text-secondary)]">
                    Select a data file to view its contents
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { WHATSAPP_LINK } from '../../data/nav.data';

export const LuxuryMultiTabSearchBar = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'offplan'>('buy');
  const [location, setLocation] = useState('All Prime Communities');
  const [propertyType, setPropertyType] = useState('All Property Types');

  const handleSearch = () => {
    const query = `Hello White Caves! I am inquiring to ${activeTab.toUpperCase()} in ${location} (${propertyType}).`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(query)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-6 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-4 shadow-2xl">
      {/* Tabs */}
      <div className="flex gap-2 pb-3 mb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <button
          type="button"
          onClick={() => setActiveTab('buy')}
          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
            activeTab === 'buy' ? 'bg-[#EF4444] text-zinc-900 dark:text-white shadow-md' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:text-white'
          }`}
        >
          Buy Properties
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('rent')}
          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
            activeTab === 'rent' ? 'bg-[#EF4444] text-zinc-900 dark:text-white shadow-md' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:text-white'
          }`}
        >
          Rent Luxury
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('offplan')}
          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
            activeTab === 'offplan' ? 'bg-[#EF4444] text-zinc-900 dark:text-white shadow-md' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:text-white'
          }`}
        >
          Off-Plan Projects
        </button>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
            Location / District
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-red-500"
          >
            <option>All Prime Communities</option>
            <option>Palm Jumeirah</option>
            <option>Downtown Dubai</option>
            <option>Dubai Hills Estate</option>
            <option>DAMAC Hills 2</option>
            <option>Tilal Al Ghaf</option>
            <option>Dubai Marina & JBR</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
            Asset Class
          </label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-red-500"
          >
            <option>All Property Types</option>
            <option>Luxury Signature Villa</option>
            <option>Sky Penthouse</option>
            <option>Waterfront Mansion</option>
            <option>Branded Residence</option>
            <option>Commercial Tower</option>
          </select>
        </div>

        <div className="pt-4 sm:pt-0">
          <button
            type="button"
            onClick={handleSearch}
            className="w-full py-3 sm:mt-4 rounded-lg bg-[#EF4444] hover:bg-red-600 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 transition"
          >
            <Search size={15} />
            <span>Search Portfolio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

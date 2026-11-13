'use client';

import { useState, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../../data/nav.data';

const POPULAR_SEARCHES = [
  'Palm Jumeirah Villa',
  'Downtown Sky Penthouse',
  'DAMAC Hills 2 Cluster',
  'Dubai Hills Championship Golf',
  'Off-Plan Allocations',
  'Waterfront Luxury',
];

export const QuickSearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  // Keyboard shortcut Ctrl + K or Cmd + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchSubmit = (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    const msg = `Hello White Caves! I am searching for inventory regarding: "${searchTerm.trim()}".`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      {/* Quick Search Floating Trigger Hint */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/80 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:text-white text-xs shadow-xl backdrop-blur-md transition"
        >
          <Search size={14} className="text-[#EF4444]" />
          <span>Quick Search</span>
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
            Ctrl K
          </kbd>
        </button>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-zinc-100 dark:bg-zinc-900 border border-red-500/30 rounded-2xl p-6 shadow-2xl text-zinc-100"
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2.5">
                <Search size={18} className="text-[#EF4444]" />
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">Omni-Property Instant Query</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:text-white hover:bg-zinc-200 dark:bg-zinc-800"
              >
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchSubmit(query);
              }}
              className="mt-4"
            >
              <div className="relative">
                <input
                  type="text"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by community, villa type, developer (e.g. Palm Jumeirah, Emaar)..."
                  className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-red-500 shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-2 rounded-lg bg-[#EF4444] text-zinc-900 dark:text-white hover:bg-red-600 transition"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>

            <div className="mt-5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-2">
                Popular Inquiries
              </span>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleSearchSubmit(tag)}
                    className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 text-xs text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:text-white transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

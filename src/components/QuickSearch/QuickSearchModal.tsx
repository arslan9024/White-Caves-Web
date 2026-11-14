'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/data/nav.data';
import {
  POPULAR_SEARCH_DESTINATIONS,
  type QuickSearchDestination,
} from './quickSearch.data';

export const QuickSearchModal = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 40);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleInventorySearch = (searchTerm: string, communitySlug?: string) => {
    const trimmed = searchTerm.trim();
    if (!trimmed && !communitySlug) return;
    if (communitySlug) {
      router.push(`/properties?community=${encodeURIComponent(communitySlug)}`);
    } else {
      router.push(`/properties?q=${encodeURIComponent(trimmed)}`);
    }
    setIsOpen(false);
  };

  const handleWhatsAppConciergeSearch = (searchTerm: string) => {
    const trimmed = searchTerm.trim() || 'Prime Dubai Luxury Portfolio';
    const msg = `Hello White Caves! I am searching for DLD-verified inventory regarding: "${trimmed}".`;
    window.open(
      `${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setIsOpen(false);
  };

  return (
    <>
      {/* Quick Search Floating Trigger Hint */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Quick Property Search (Ctrl+K)"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-zinc-950/90 border border-zinc-200 dark:border-zinc-800 hover:border-[#EF4444]/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-xs shadow-xl backdrop-blur-md transition"
        >
          <Search size={14} className="text-[#EF4444]" />
          <span className="font-semibold">Quick Search</span>
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
            Ctrl K
          </kbd>
        </button>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Quick Property Search"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4 bg-zinc-950/75 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-white dark:bg-zinc-900 border border-[#EF4444]/30 rounded-3xl p-6 shadow-2xl shadow-red-500/10 text-zinc-900 dark:text-zinc-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white flex items-center gap-2">
                  <Search size={18} className="text-[#EF4444]" />
                  Luxury Property Omni-Search
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Press{' '}
                  <kbd className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 px-1.5 py-0.5 rounded text-[10px] font-mono">
                    ESC
                  </kbd>{' '}
                  to exit or{' '}
                  <kbd className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 px-1.5 py-0.5 rounded text-[10px] font-mono">
                    Ctrl + K
                  </kbd>{' '}
                  to toggle
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close search dialog"
                className="p-2 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-[#EF4444] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Search Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleInventorySearch(query);
              }}
              className="mt-5"
            >
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by community, villa name, penthouse, or RERA permit ID..."
                  className="w-full pl-4 pr-24 py-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm focus:outline-none focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444] shadow-inner"
                />
                <button
                  type="submit"
                  aria-label="Execute property search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-[#EF4444] text-white text-xs font-bold hover:bg-red-600 transition"
                >
                  Search
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>

            {/* Popular Luxury Destinations */}
            <div className="mt-5">
              <span className="text-[11px] uppercase font-bold tracking-wider text-[#EF4444] block mb-2.5">
                Popular Luxury Destinations
              </span>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCH_DESTINATIONS.map((dest: QuickSearchDestination) => (
                  <button
                    key={dest.label}
                    type="button"
                    onClick={() => handleInventorySearch(dest.query, dest.communitySlug)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-[#EF4444] hover:border-[#EF4444] hover:text-white transition-all duration-200"
                  >
                    {dest.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Concierge Escalation Footer */}
            <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Looking for an off-market trophy asset or private VIP allocation?
              </span>
              <button
                type="button"
                onClick={() => handleWhatsAppConciergeSearch(query)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <MessageCircle size={14} />
                Ask Linda AI Concierge directly
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

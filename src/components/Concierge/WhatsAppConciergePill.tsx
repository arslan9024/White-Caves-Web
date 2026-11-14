'use client';

import { useState } from 'react';
import { MessageSquare, PhoneCall, X } from 'lucide-react';
import {
  CONCIERGE_WHATSAPP_NUMBER,
  CONCIERGE_INQUIRY_OPTIONS,
} from './concierge.data';
import { captureWhatsAppLeadToLinda } from '../../lib/inventoryApi';

export const WhatsAppConciergePill = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (customMessage: string) => {
    void captureWhatsAppLeadToLinda({
      category: 'VIP_CONCIERGE_LEAD',
      inquiryText: customMessage,
    });
    const url = `https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <aside
      aria-label="VIP WhatsApp Concierge"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none"
    >
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="concierge-desk-title"
          className="mb-3 w-80 bg-white/95 dark:bg-zinc-950/95 border border-[#EF4444]/30 rounded-2xl p-4 shadow-2xl backdrop-blur-xl text-zinc-900 dark:text-zinc-100 animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <h4
                  id="concierge-desk-title"
                  className="text-sm font-bold text-zinc-900 dark:text-white"
                >
                  VIP Concierge Desk
                </h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  White Caves Real Estate LLC
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close concierge menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-2.5 flex flex-col gap-1.5">
            {CONCIERGE_INQUIRY_OPTIONS.map(opt => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.title}
                  type="button"
                  onClick={() => openWhatsApp(opt.message)}
                  className="flex items-center gap-3 w-full p-2.5 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 hover:bg-red-500/10 border border-zinc-200 dark:border-zinc-800 hover:border-[#EF4444]/40 text-left transition-all group"
                >
                  <div className="p-2 rounded-lg bg-red-500/10 text-[#EF4444] group-hover:bg-[#EF4444] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white">
                    {opt.title}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() =>
              openWhatsApp('Hello White Caves! I would like to speak directly with a luxury property advisor.')
            }
            className="mt-1 w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Open Direct WhatsApp Chat
          </button>
        </div>
      )}

      {/* Floating Pill Button */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-label="Open luxury property WhatsApp concierge — VIP Concierge"
        className="flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-[#EF4444] text-white py-3 px-4 rounded-full shadow-2xl shadow-red-500/30 border border-red-400/30 hover:brightness-110 hover:scale-105 active:scale-95 transition-all"
      >
        <div className="relative">
          <PhoneCall className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-zinc-900" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-100 leading-none">
            24/7 Sovereign Desk
          </span>
          <span className="text-xs font-black tracking-tight text-white leading-tight">
            WhatsApp Concierge
          </span>
        </div>
      </button>
    </aside>
  );
};

export default WhatsAppConciergePill;

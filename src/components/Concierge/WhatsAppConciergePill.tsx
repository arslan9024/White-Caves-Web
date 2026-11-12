"use client";

import { useState } from "react";
import { Calendar, Sparkles, Building, X, MessageSquare } from "lucide-react";
import { WHATSAPP_LINK } from "../../data/nav.data";

const INQUIRY_OPTIONS = [
  {
    icon: Calendar,
    title: "Book Private Villa Viewing",
    message:
      "Hello White Caves! I would like to schedule a private VIP viewing for a luxury property.",
  },
  {
    icon: Sparkles,
    title: "Off-Plan Investment Launches",
    message:
      "Hello! Please share latest developer off-plan launches (Emaar, Nakheel, Sobha) with payment plans.",
  },
  {
    icon: Building,
    title: "List My Property for Sale/Rent",
    message:
      "Hello White Caves, I am a landlord interested in listing my property with your RERA-licensed agency.",
  },
];

export const WhatsAppConciergePill = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (customMessage: string) => {
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(customMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 bg-zinc-950/95 border border-red-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-xl text-zinc-100 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <h4 className="text-sm font-bold text-white">
                  VIP Concierge Desk
                </h4>
                <p className="text-[11px] text-zinc-400">
                  White Caves Real Estate LLC
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close concierge menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-2.5 flex flex-col gap-1.5">
            {INQUIRY_OPTIONS.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.title}
                  type="button"
                  onClick={() => openWhatsApp(opt.message)}
                  className="flex items-center gap-3 w-full p-2.5 rounded-xl bg-zinc-900/80 hover:bg-red-500/15 border border-zinc-800 hover:border-red-500/40 text-left transition-all group"
                >
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400 group-hover:bg-[#EF4444] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-200 group-hover:text-white">
                    {opt.title}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() =>
              openWhatsApp(
                "Hello White Caves! I would like to speak directly with an advisor.",
              )
            }
            className="mt-1 w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            Direct WhatsApp Chat
          </button>
        </div>
      )}

      {/* Persistent Pill Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#EF4444] hover:bg-red-600 text-white font-bold text-xs shadow-2xl shadow-red-600/40 border border-red-400/30 transition-all hover:scale-105"
        aria-label="Open VIP Concierge WhatsApp Menu"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <MessageSquare className="w-4 h-4" />
        <span>VIP WhatsApp Desk</span>
      </button>
    </div>
  );
};

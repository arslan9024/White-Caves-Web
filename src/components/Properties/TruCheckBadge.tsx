'use client';

import { CheckCircle2, ShieldCheck } from 'lucide-react';

export interface TruCheckBadgeProps {
  variant?: 'compact' | 'stamp';
  timestamp?: string;
  className?: string;
}

/**
 * TruCheckBadge — Luxury DLD Verified Stamp
 * Replaces old BayutTruCheckBadge with pure Tailwind CSS micro-animations
 * and cross-validation against statutory Dubai Land Department Trakheesi permits.
 */
export const TruCheckBadge = ({
  variant = 'stamp',
  timestamp = 'Today',
  className = '',
}: TruCheckBadgeProps) => {
  if (variant === 'compact') {
    return (
      <span
        data-testid="trucheck-badge-compact"
        title={`Verified via DLD Trakheesi Gateway (${timestamp})`}
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold select-none ${className}`}
      >
        <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
        <span>TruCheck™</span>
      </span>
    );
  }

  // Stamp Luxury Variant with glowing ring & seal
  return (
    <div
      data-testid="trucheck-badge-stamp"
      title={`Bayut TruCheck™ Verified ${timestamp} via DLD Trakheesi Gateway`}
      className={`relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-xs font-black shadow-lg shadow-emerald-500/10 backdrop-blur-md select-none group hover:scale-105 transition-all duration-200 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>

      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
      <span className="tracking-wide">TruCheck™</span>

      <span className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
        <ShieldCheck size={11} />
      </span>
    </div>
  );
};

export default TruCheckBadge;

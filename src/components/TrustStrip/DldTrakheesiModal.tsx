'use client';

import { useEffect, useState } from 'react';
import { ShieldCheck, QrCode, ExternalLink, X, CheckCircle2 } from 'lucide-react';
import { DLD_LICENSE_RECORDS, DLD_VERIFY_URL } from './dldLicense.data';

export const DldTrakheesiModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Upgrade: Escape key closes + body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold transition-all group"
        title="Verify official Dubai Land Department Trakheesi License"
      >
        <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span>DLD / RERA Permit Verification</span>
        <QrCode className="w-3.5 h-3.5 text-zinc-400 ml-1" />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dld-modal-title"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-white dark:bg-zinc-900 border border-emerald-500/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition"
              aria-label="Close DLD verification modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-500 border border-emerald-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 id="dld-modal-title" className="text-base font-black text-zinc-900 dark:text-white">
                  Government of Dubai — Regulatory Compliance
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Dubai Land Department (DLD) &amp; Real Estate Regulatory Agency (RERA)
                </p>
              </div>
            </div>

            <dl className="bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 space-y-3 mb-5">
              {DLD_LICENSE_RECORDS.map((r, i) => (
                <div
                  key={r.label}
                  className={`flex justify-between items-center gap-3 text-xs ${i < DLD_LICENSE_RECORDS.length - 1 ? 'border-b border-zinc-200 dark:border-zinc-800/80 pb-2' : ''}`}
                >
                  <dt className="text-zinc-500 dark:text-zinc-400">{r.label}:</dt>
                  <dd
                    className={
                      r.highlight
                        ? 'font-mono text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30'
                        : 'font-mono font-semibold text-zinc-800 dark:text-zinc-200 text-right'
                    }
                  >
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 text-xs text-zinc-600 dark:text-zinc-300 mb-5">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>
                All luxury listings, off-plan allocations, and client deposits are protected under statutory UAE Escrow and goAML laws.
              </span>
            </div>

            <div className="flex gap-3">
              <a
                href={DLD_VERIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition shadow-lg shadow-emerald-600/30"
              >
                <span>Verify on DubaiLand.gov.ae</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="py-2.5 px-5 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-xs transition"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

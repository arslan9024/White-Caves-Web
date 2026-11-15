import Link from 'next/link';
import { FileCheck2, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import {
  TERMS_LAST_UPDATED,
  TERMS_OF_SERVICE_SECTIONS,
} from '@/data/legal.data';

export const metadata = {
  title: 'Terms of Service & RERA Disclaimer | White Caves Real Estate',
  description:
    'Review the statutory terms of service, DLD Trakheesi permit disclosures, and RERA brokerage conditions for White Caves Real Estate LLC.',
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Navbar />

      <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl mx-auto w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EF4444] hover:underline mb-6"
        >
          <ArrowLeft size={14} />
          Back to Sovereign Homepage
        </Link>

        <header className="pb-8 mb-10 border-b border-zinc-200 dark:border-zinc-800">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#EF4444] text-[11px] font-bold uppercase tracking-wider mb-3">
            <FileCheck2 size={14} /> Statutory Brokerage Terms &amp; RERA Disclaimer
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
            Terms of Service
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
            Last Updated: {TERMS_LAST_UPDATED} · Governed by the Laws of the Emirate of Dubai &amp; UAE
          </p>
        </header>

        <div className="space-y-8">
          {TERMS_OF_SERVICE_SECTIONS.map((section) => (
            <section
              key={section.id}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800"
            >
              <h2 className="text-lg font-extrabold text-zinc-900 dark:text-white mb-3">
                {section.heading}
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {section.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 list-disc pl-5">
                  {section.bullets.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}

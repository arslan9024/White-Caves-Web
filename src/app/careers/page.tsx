import { Briefcase, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppConciergePill } from '@/components/Concierge';
import { QuickSearchModal } from '@/components/QuickSearch';
import { CAREER_OPENINGS } from '@/data/corporate.data';
import { LOCKED_12_DIRECTORATE_OPENINGS } from '@/data/bhaktiDirectorateOpenings.data';
import { WHATSAPP_LINK } from '@/data/nav.data';

export const metadata = {
  title: 'Careers & 100% Commission Broker Partner Plans | White Caves',
  description:
    'Join White Caves Real Estate LLC in Dubai. Dynamic 60%–70% or 100% commission splits, full UAE residency visa & RERA card sponsorship, and Zoe/Linda AI lead distribution.',
};

export default function CareersPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Header */}
        <header className="pt-20 pb-14 px-6 lg:px-12 bg-gradient-to-b from-zinc-900/60 to-transparent border-b border-zinc-200/80 dark:border-zinc-800/80 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#EF4444] font-bold">
              <Sparkles size={14} /> Executive Broker &amp; AI Engineering Recruitment
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-white tracking-tight mt-3">
              Build Your Legacy With White Caves
            </h1>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-2xl mx-auto leading-relaxed">
              Earn industry-leading commission splits with 24-hour payouts, full UAE Residence Visa &amp; RERA Broker Card sponsorship, and direct access to 9,378+ verified Dubai mandates.
            </p>
          </div>
        </header>

        {/* 12 Locked Corporate Directorates & 108 Division Manager Positions */}
        <section className="px-6 lg:px-12 py-14 max-w-7xl mx-auto border-b border-zinc-200 dark:border-zinc-800">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#EF4444] font-bold">
              Bhakti 1-12-108 Executive Leadership Track
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mt-1">
              12 Corporate Directorates &amp; 108 Division Manager Openings
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {LOCKED_12_DIRECTORATE_OPENINGS.map((dir) => {
              const applyMsg = encodeURIComponent(
                `Hello White Caves Recruitment! I would like to apply for ${dir.directorTitle} (${dir.deptCode} — ${dir.departmentName}).`
              );
              return (
                <div
                  key={dir.deptCode}
                  className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold mb-2">
                      <span className="px-2 py-0.5 rounded bg-[#EF4444]/10 text-[#EF4444] font-mono">
                        {dir.deptCode} · {dir.dirCode}
                      </span>
                      <span className="text-zinc-500">{dir.managerOpeningsCount} Mgr Slots</span>
                    </div>
                    <h3 className="text-sm font-extrabold text-zinc-900 dark:text-white">
                      {dir.departmentName}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      {dir.directorTitle}
                    </p>
                  </div>
                  <a
                    href={`${WHATSAPP_LINK}?text=${applyMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#EF4444] hover:bg-red-600 text-white text-xs font-bold transition"
                  >
                    <MessageCircle size={13} /> Apply for Directorate
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* Open Positions */}
        <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto space-y-8">
          {CAREER_OPENINGS.map((job) => {
            const applyMessage = encodeURIComponent(
              `Hello White Caves Recruitment! I would like to apply for the "${job.title}" position (${job.department}).`
            );
            return (
              <article
                key={job.id}
                className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-xl"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] text-[11px] font-extrabold uppercase">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] font-bold">
                        {job.type} · {job.location}
                      </span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                      {job.title}
                    </h2>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      {job.splitDetails} · {job.visaPolicy}
                    </p>
                  </div>

                  <a
                    href={`${WHATSAPP_LINK}?text=${applyMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EF4444] hover:bg-red-600 text-white text-xs font-bold transition shadow-lg shadow-red-600/20"
                  >
                    <MessageCircle size={15} />
                    Fast-Track Apply via WhatsApp
                  </a>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-5 leading-relaxed">
                  {job.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#EF4444] mb-3">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                      {job.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2">
                          <Briefcase size={13} className="text-[#EF4444] shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#EF4444] mb-3">
                      Candidate Requirements
                    </h3>
                    <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-amber-500 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-extrabold text-[#EF4444] mb-3">
                      Sovereign Perks &amp; Visa
                    </h3>
                    <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                      {job.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>

      <Footer />
      <WhatsAppConciergePill />
      <QuickSearchModal />
    </div>
  );
}

import Image from 'next/image';
import { OffPlanProject } from '@/data/offplan.data';
import { Calendar, Building, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHATSAPP_LINK } from '@/data/nav.data';

interface OffPlanShowcaseProps {
  projects: OffPlanProject[];
}

export const OffPlanShowcase = ({ projects }: OffPlanShowcaseProps) => {
  const formatAED = (num: number) =>
    new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(num);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full space-y-16">
      {projects.map((project, idx) => (
        <article
          key={project.id}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 sm:p-8 hover:border-zinc-700 transition ${
            idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image Block */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-zinc-950">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg">
                {project.tag}
              </span>
              <span className="px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-700 text-emerald-400 font-semibold text-xs backdrop-blur-md">
                Pre-Launch Allocation
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 flex justify-between items-center text-xs">
              <span className="text-zinc-400">Starting From</span>
              <span className="text-lg font-black text-white">{formatAED(project.startingPrice)}</span>
            </div>
          </div>

          {/* Details Block */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#EF4444] uppercase tracking-wider mb-2">
                <Building size={14} />
                <span>{project.developer}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.name}
              </h2>
              <p className="text-xs text-zinc-400 mt-1">{project.location}</p>
            </div>

            {/* Spec highlights */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-zinc-800/80 text-xs">
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                <span className="text-[10px] uppercase font-bold text-zinc-500 block">Anticipated Handover</span>
                <span className="font-semibold text-white mt-0.5 block flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#EF4444]" />
                  {project.handoverDate}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                <span className="text-[10px] uppercase font-bold text-zinc-500 block">Payment Structure</span>
                <span className="font-semibold text-white mt-0.5 block">{project.paymentPlan}</span>
              </div>
            </div>

            {/* Bullet points */}
            <ul className="space-y-2 text-xs text-zinc-300">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <Sparkles size={13} className="text-amber-400 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex gap-3 pt-2">
              <a
                href={`${WHATSAPP_LINK}?text=Hello!%20Please%20send%20payment%20plan%20and%20brochure%20for%20${encodeURIComponent(
                  project.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#EF4444] hover:bg-red-600 text-white text-center shadow-lg shadow-red-600/20 transition flex items-center justify-center gap-2"
              >
                <span>Request Floor Plans</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

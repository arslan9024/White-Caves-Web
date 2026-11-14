'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { WIZARD_OPTIONS, WizardOption } from './wizard.data';

export const InterestWizard = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (option: WizardOption) => {
    setSelectedId(option.id);
    setTimeout(() => {
      if (option.targetHref.startsWith('http')) {
        window.open(option.targetHref, '_blank', 'noopener,noreferrer');
      } else {
        router.push(option.targetHref);
      }
    }, 400);
  };

  return (
    <section
      aria-label="Personalized Real Estate Interest Wizard"
      className="w-full max-w-7xl mx-auto px-6 lg:px-12 my-12"
    >
      <div className="bg-zinc-100/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 backdrop-blur-md">
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#EF4444] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Advisory Portal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            What is your primary investment objective?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Select your focus to let White Caves tailor market opportunities and direct developer allocations to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {WIZARD_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedId === opt.id;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt)}
                className={`relative text-left p-6 rounded-xl border transition-all duration-200 group flex flex-col justify-between ${
                  isSelected
                    ? 'bg-red-500/10 border-[#EF4444] shadow-lg shadow-red-500/10 dark:bg-red-950/20'
                    : 'bg-white dark:bg-zinc-950/70 border-zinc-200 dark:border-zinc-800 hover:border-red-500/40 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-[#EF4444] text-white'
                          : 'bg-red-500/10 text-[#EF4444] group-hover:bg-[#EF4444] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {opt.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
                    {opt.label}
                  </h3>
                  <div className="text-xs font-semibold text-[#EF4444] mb-2 font-mono">
                    {opt.headline}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {opt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-[#EF4444] transition-colors">
                  <span>{isSelected ? 'Launching...' : 'Continue'}</span>
                  {isSelected ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-pulse" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InterestWizard;

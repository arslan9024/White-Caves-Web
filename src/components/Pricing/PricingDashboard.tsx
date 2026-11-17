'use client';

// AEGIS V5.0 — Public Role-Scoped Fee & Consultation Request Dashboard
// Compliant with TURING-LAW-043 (Intro/Outro) & TURING-LAW-044 (Need-to-Know Information Security)
// AEG-042: Strictly < 350 lines

import { useState, type FormEvent } from 'react';
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  User,
  Info,
} from 'lucide-react';
import {
  PERSONA_STRUCTURES,
  type UserPersona,
} from './pricingPublic.data';

export function PricingDashboard() {
  const [selectedPersona, setSelectedPersona] = useState<UserPersona>('landlord');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const currentStructure = PERSONA_STRUCTURES[selectedPersona];
  const PersonaIcon = currentStructure.icon;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const redirectUrl = new URL(currentStructure.targetPortal);
    redirectUrl.searchParams.set('intent', 'fee-schedule');
    redirectUrl.searchParams.set('persona', selectedPersona);
    redirectUrl.searchParams.set('name', name);
    redirectUrl.searchParams.set('phone', phone);

    setTimeout(() => {
      window.location.href = redirectUrl.toString();
    }, 2000);
  };

  return (
    <div className="space-y-12">
      {/* Persona Tab Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 max-w-3xl mx-auto">
        {(Object.keys(PERSONA_STRUCTURES) as UserPersona[]).map((key) => {
          const item = PERSONA_STRUCTURES[key];
          const isSelected = selectedPersona === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => {
                setSelectedPersona(key);
                setSubmitted(false);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Regulatory Fee Card + Confidential Unlock Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Public Regulatory Fees & Value Pillars (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#EF4444] text-xs font-bold uppercase tracking-wider">
                <PersonaIcon className="w-3.5 h-3.5" />
                <span>{currentStructure.badge}</span>
              </div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                RERA Regulated Standards
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                {currentStructure.headline}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                {currentStructure.summary}
              </p>
            </div>

            {/* Public Statutory Rates */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Official Regulatory Rates & Baselines
              </div>
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/70 overflow-hidden">
                {currentStructure.standardFees.map((fee, idx) => (
                  <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="font-bold text-sm text-zinc-900 dark:text-white">{fee.item}</div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">{fee.note}</div>
                    </div>
                    <div className="text-sm font-mono font-black text-red-500">{fee.rate}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Confidential Role Benefits */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                <Lock className="w-3.5 h-3.5 text-amber-500" />
                <span>Confidential Role Inclusions (Unlocked via Portal)</span>
              </div>
              <div className="space-y-2">
                {currentStructure.privateBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Lead Intake & Portal Gateway (5 cols) */}
        <div className="lg:col-span-5">
          <div className="p-8 rounded-2xl bg-zinc-900 text-white border border-zinc-800 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold">Request Received</h3>
                <p className="text-xs text-zinc-300 leading-relaxed max-w-sm mx-auto">
                  Redirecting you to the private {currentStructure.label} gateway. Our Managing Director
                  and Linda Autonomous Concierge will provide your tailored terms.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Private & Confidential Access</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">
                    Access Tailored Commercial Terms
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Under White Caves Turing Law T23, detailed commission schedules and management fee
                    projections are tailored on a need-to-know basis.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      <User className="w-3.5 h-3.5 inline mr-1" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      placeholder="Your full legal name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      <Phone className="w-3.5 h-3.5 inline mr-1" />
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      placeholder="+971 50 XXX XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      <Mail className="w-3.5 h-3.5 inline mr-1" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50"
                      placeholder="name@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-800/50 border border-zinc-700/60 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    Your inquiry is directly routed to Managing Director Arslan Malik and the verified
                    White Caves sovereign operations desk.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 shadow-lg shadow-red-500/25 transition-all cursor-pointer"
                >
                  <span>{currentStructure.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

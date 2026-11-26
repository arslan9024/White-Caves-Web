'use client';

import { User, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import type { LandlordListingFormData } from './listing.data';

interface LandlordListingStepTwoProps {
  form: LandlordListingFormData;
  inputCls: string;
  labelCls: string;
  onUpdate: <K extends keyof LandlordListingFormData>(
    key: K,
    value: LandlordListingFormData[K]
  ) => void;
  onBack: () => void;
}

export const LandlordListingStepTwo = ({
  form,
  inputCls,
  labelCls,
  onUpdate,
  onBack,
}: LandlordListingStepTwoProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className={labelCls}>
        <User className="w-3.5 h-3.5 inline mr-1" />
        Owner Full Name
      </label>
      <input
        type="text"
        className={inputCls}
        placeholder="Your full legal name"
        value={form.ownerName}
        onChange={(e) => onUpdate('ownerName', e.target.value)}
        required
      />
    </div>
    <div>
      <label className={labelCls}>
        <Phone className="w-3.5 h-3.5 inline mr-1" />
        Phone (WhatsApp)
      </label>
      <input
        type="tel"
        className={inputCls}
        placeholder="+971 50 XXX XXXX"
        value={form.ownerPhone}
        onChange={(e) => onUpdate('ownerPhone', e.target.value)}
        required
      />
    </div>
    <div className="md:col-span-2">
      <label className={labelCls}>
        <Mail className="w-3.5 h-3.5 inline mr-1" />
        Email Address
      </label>
      <input
        type="email"
        className={inputCls}
        placeholder="owner@email.com"
        value={form.ownerEmail}
        onChange={(e) => onUpdate('ownerEmail', e.target.value)}
        required
      />
    </div>

    <div className="md:col-span-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 flex items-start gap-3">
      <ShieldCheck className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
      <div className="text-xs text-emerald-800 dark:text-emerald-300 space-y-1">
        <p className="font-bold">RERA Licensed Brokerage — BRN 56529</p>
        <p>
          Your information is secured under Dubai Land Department regulations. Our Managing
          Director will personally review your listing and contact you via WhatsApp within 24 hours
          for Title Deed verification and Ejari-compliant contract preparation.
        </p>
      </div>
    </div>

    <div className="md:col-span-2 flex items-center justify-between">
      <button
        type="button"
        onClick={onBack}
        className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
      >
        ← Back to Property Details
      </button>
      <button
        type="submit"
        className="flex items-center gap-2 px-8 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all"
      >
        Submit Listing
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

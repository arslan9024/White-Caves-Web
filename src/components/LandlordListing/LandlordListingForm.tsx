'use client';

// AEGIS V5.1 — LandlordListingForm
// TURING-LAW-043: Intro (validate owner identity intent) / Outro (redirect to portal with data)
// AEG-042: < 350 lines

import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { INITIAL_FORM_DATA, type LandlordListingFormData } from './listing.data';
import { LandlordListingStepOne } from './LandlordListingStepOne';
import { LandlordListingStepTwo } from './LandlordListingStepTwo';

const LANDLORD_PORTAL = 'https://landlord.whitecaves.com';

const INPUT_CLS =
  'w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/40 transition-all';
const LABEL_CLS =
  'block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wide';

export const LandlordListingForm = () => {
  const [form, setForm] = useState<LandlordListingFormData>(INITIAL_FORM_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  const update = <K extends keyof LandlordListingFormData>(
    key: K,
    value: LandlordListingFormData[K]
  ) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      intent: 'list-property',
      title: form.propertyTitle,
      type: form.propertyType,
      area: form.area,
      bedrooms: String(form.bedrooms),
      rent: String(form.annualRent),
      name: form.ownerName,
      phone: form.ownerPhone,
    });
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `${LANDLORD_PORTAL}?${params.toString()}`;
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 space-y-4">
        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Thank You, {form.ownerName}!
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
          Redirecting you to the Landlord Portal to complete verification and upload your Title
          Deed. Our Managing Director will review and publish your listing within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center justify-center gap-3 mb-6">
        {[1, 2].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStep(s as 1 | 2)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
              step === s
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/20'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
            }`}
          >
            {s === 1 ? 'Property Details' : 'Owner Information'}
          </button>
        ))}
      </div>

      {step === 1 && (
        <LandlordListingStepOne
          form={form}
          inputCls={INPUT_CLS}
          labelCls={LABEL_CLS}
          onUpdate={update}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <LandlordListingStepTwo
          form={form}
          inputCls={INPUT_CLS}
          labelCls={LABEL_CLS}
          onUpdate={update}
          onBack={() => setStep(1)}
        />
      )}
    </form>
  );
};

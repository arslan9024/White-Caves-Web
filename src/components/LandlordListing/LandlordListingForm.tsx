'use client';

// AEGIS V5.0 — LandlordListingForm
// TURING-LAW-043: Intro (validate owner identity intent) / Outro (redirect to portal with data)
// AEG-042: < 350 lines

import { useState, type FormEvent } from 'react';
import {
  Building2,
  User,
  Phone,
  Mail,
  MapPin,
  Bed,
  Bath,
  Square,
  DollarSign,
  FileText,
  Calendar,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import {
  PROPERTY_TYPES,
  POPULAR_AREAS,
  INITIAL_FORM_DATA,
  type LandlordListingFormData,
} from './listing.data';

const LANDLORD_PORTAL = 'https://landlord.whitecaves.com';

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
    // TURING-LAW-043 Outro: encode listing intent and redirect to landlord portal
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
          Redirecting you to the Landlord Portal to complete verification and
          upload your Title Deed. Our Managing Director will review and publish
          your listing within 24 hours.
        </p>
      </div>
    );
  }

  const inputCls =
    'w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/40 transition-all';
  const labelCls = 'block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wide';

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Step Indicator */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Property Title */}
          <div className="md:col-span-2">
            <label className={labelCls}>
              <Building2 className="w-3.5 h-3.5 inline mr-1" />
              Property Title
            </label>
            <input
              type="text"
              className={inputCls}
              placeholder="e.g. Luxury 2BR Apartment in Dubai Marina"
              value={form.propertyTitle}
              onChange={(e) => update('propertyTitle', e.target.value)}
              required
            />
          </div>

          {/* Type */}
          <div>
            <label className={labelCls}>Property Type</label>
            <select
              className={inputCls}
              value={form.propertyType}
              onChange={(e) => update('propertyType', e.target.value)}
            >
              {PROPERTY_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* Area */}
          <div>
            <label className={labelCls}>
              <MapPin className="w-3.5 h-3.5 inline mr-1" />
              Area / Community
            </label>
            <select
              className={inputCls}
              value={form.area}
              onChange={(e) => update('area', e.target.value)}
              required
            >
              <option value="">Select Area</option>
              {POPULAR_AREAS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <label className={labelCls}>Full Address / Building Name</label>
            <input
              type="text"
              className={inputCls}
              placeholder="e.g. Marina Heights Tower, Unit 2304"
              value={form.location}
              onChange={(e) => update('location', e.target.value)}
              required
            />
          </div>

          {/* Bedrooms / Bathrooms / Sqft */}
          <div className="grid grid-cols-3 gap-4 md:col-span-2">
            <div>
              <label className={labelCls}>
                <Bed className="w-3.5 h-3.5 inline mr-1" />
                Beds
              </label>
              <input
                type="number"
                className={inputCls}
                min={0}
                max={20}
                value={form.bedrooms}
                onChange={(e) => update('bedrooms', Number(e.target.value))}
              />
            </div>
            <div>
              <label className={labelCls}>
                <Bath className="w-3.5 h-3.5 inline mr-1" />
                Baths
              </label>
              <input
                type="number"
                className={inputCls}
                min={0}
                max={20}
                value={form.bathrooms}
                onChange={(e) => update('bathrooms', Number(e.target.value))}
              />
            </div>
            <div>
              <label className={labelCls}>
                <Square className="w-3.5 h-3.5 inline mr-1" />
                Sq.Ft
              </label>
              <input
                type="number"
                className={inputCls}
                min={0}
                value={form.sqft}
                onChange={(e) => update('sqft', Number(e.target.value))}
              />
            </div>
          </div>

          {/* Annual Rent */}
          <div>
            <label className={labelCls}>
              <DollarSign className="w-3.5 h-3.5 inline mr-1" />
              Annual Rent (AED)
            </label>
            <input
              type="number"
              className={inputCls}
              min={0}
              placeholder="e.g. 85000"
              value={form.annualRent || ''}
              onChange={(e) => update('annualRent', Number(e.target.value))}
              required
            />
          </div>

          {/* Available From */}
          <div>
            <label className={labelCls}>
              <Calendar className="w-3.5 h-3.5 inline mr-1" />
              Available From
            </label>
            <input
              type="date"
              className={inputCls}
              value={form.availableFrom}
              onChange={(e) => update('availableFrom', e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className={labelCls}>
              <FileText className="w-3.5 h-3.5 inline mr-1" />
              Description
            </label>
            <textarea
              className={`${inputCls} min-h-[100px] resize-y`}
              placeholder="Describe key features, furnishing, view, parking..."
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              rows={4}
            />
          </div>

          {/* Title Deed */}
          <div className="md:col-span-2 flex items-center gap-3">
            <input
              type="checkbox"
              id="hasTitleDeed"
              checked={form.hasTitleDeed}
              onChange={(e) => update('hasTitleDeed', e.target.checked)}
              className="w-4 h-4 accent-red-500"
            />
            <label
              htmlFor="hasTitleDeed"
              className="text-sm text-zinc-700 dark:text-zinc-300"
            >
              I have the Title Deed / Oqood ready for verification
            </label>
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
            >
              Next: Owner Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
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
              onChange={(e) => update('ownerName', e.target.value)}
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
              onChange={(e) => update('ownerPhone', e.target.value)}
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
              onChange={(e) => update('ownerEmail', e.target.value)}
              required
            />
          </div>

          <div className="md:col-span-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-emerald-800 dark:text-emerald-300 space-y-1">
              <p className="font-bold">RERA Licensed Brokerage — BRN 56529</p>
              <p>
                Your information is secured under Dubai Land Department
                regulations. Our Managing Director will personally review your
                listing and contact you via WhatsApp within 24 hours for Title
                Deed verification and Ejari-compliant contract preparation.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
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
      )}
    </form>
  );
};

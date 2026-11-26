'use client';

import {
  Building2,
  MapPin,
  Bed,
  Bath,
  Square,
  DollarSign,
  FileText,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import {
  PROPERTY_TYPES,
  POPULAR_AREAS,
  type LandlordListingFormData,
} from './listing.data';

interface LandlordListingStepOneProps {
  form: LandlordListingFormData;
  inputCls: string;
  labelCls: string;
  onUpdate: <K extends keyof LandlordListingFormData>(
    key: K,
    value: LandlordListingFormData[K]
  ) => void;
  onNext: () => void;
}

export const LandlordListingStepOne = ({
  form,
  inputCls,
  labelCls,
  onUpdate,
  onNext,
}: LandlordListingStepOneProps) => (
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
        onChange={(e) => onUpdate('propertyTitle', e.target.value)}
        required
      />
    </div>

    {/* Type */}
    <div>
      <label className={labelCls}>Property Type</label>
      <select
        className={inputCls}
        value={form.propertyType}
        onChange={(e) => onUpdate('propertyType', e.target.value)}
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
        onChange={(e) => onUpdate('area', e.target.value)}
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
        placeholder="e.g. Marina Heights Tower, Dubai Marina"
        value={form.location}
        onChange={(e) => onUpdate('location', e.target.value)}
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
          onChange={(e) => onUpdate('bedrooms', Number(e.target.value))}
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
          onChange={(e) => onUpdate('bathrooms', Number(e.target.value))}
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
          onChange={(e) => onUpdate('sqft', Number(e.target.value))}
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
        onChange={(e) => onUpdate('annualRent', Number(e.target.value))}
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
        onChange={(e) => onUpdate('availableFrom', e.target.value)}
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
        onChange={(e) => onUpdate('description', e.target.value)}
        rows={4}
      />
    </div>

    {/* Title Deed */}
    <div className="md:col-span-2 flex items-center gap-3">
      <input
        type="checkbox"
        id="hasTitleDeed"
        checked={form.hasTitleDeed}
        onChange={(e) => onUpdate('hasTitleDeed', e.target.checked)}
        className="w-4 h-4 accent-red-500"
      />
      <label htmlFor="hasTitleDeed" className="text-sm text-zinc-700 dark:text-zinc-300">
        I have the Title Deed / Oqood ready for verification
      </label>
    </div>

    <div className="md:col-span-2 flex justify-end">
      <button
        type="button"
        onClick={onNext}
        className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
      >
        Next: Owner Details
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

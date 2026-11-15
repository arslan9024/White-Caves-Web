'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '../../types/property.types';
import { PropertyBadge } from './PropertyBadge';
import { WHATSAPP_LINK } from '../../data/nav.data';
import { captureWhatsAppLeadToLinda } from '../../lib/inventoryApi';
import {
  FX_RATES_TO_AED,
  type SupportedCurrency,
  type SupportedUnit,
} from '../CurrencyUnitBar/currencyUnit.data';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const [currency, setCurrency] = useState<SupportedCurrency>('AED');
  const [unit, setUnit] = useState<SupportedUnit>('SqFt');

  useEffect(() => {
    const savedCurr = window.localStorage.getItem('wc_currency') as SupportedCurrency | null;
    const savedUnit = window.localStorage.getItem('wc_unit') as SupportedUnit | null;
    if (savedCurr && savedCurr in FX_RATES_TO_AED) setCurrency(savedCurr);
    if (savedUnit === 'SqFt' || savedUnit === 'SqM') setUnit(savedUnit);

    const handlePrefChange = (e: Event) => {
      const detail = (e as CustomEvent<{ currency?: SupportedCurrency; unit?: SupportedUnit }>)
        .detail;
      if (detail?.currency) setCurrency(detail.currency);
      if (detail?.unit) setUnit(detail.unit);
    };
    window.addEventListener('wc:preferences-change', handlePrefChange);
    return () => window.removeEventListener('wc:preferences-change', handlePrefChange);
  }, []);

  const convertedPrice = Math.round(property.price / (FX_RATES_TO_AED[currency] || 1));
  const formattedPrice = new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(convertedPrice);

  const displayArea =
    unit === 'SqM'
      ? `${Math.round(property.sqft * 0.092903).toLocaleString()} sqm`
      : `${property.sqft.toLocaleString()} sqft`;

  const handleWhatsAppLeadClick = () => {
    void captureWhatsAppLeadToLinda({
      propertyId: property.id,
      propertyTitle: property.title,
      location: property.location,
      price: property.price,
      category: 'HOT_LEAD_BUYER',
      inquiryText: `Inquiring about ${property.title} (${property.location}) — ${formattedPrice}`,
    });
  };

  return (
    <article className="group rounded-xl overflow-hidden bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:border-zinc-700 hover:shadow-2xl hover:shadow-red-950/20 transition-all duration-300 flex flex-col">
      {/* Image container */}
      <div className="relative h-64 w-full overflow-hidden bg-white dark:bg-zinc-950">
        <PropertyBadge
          status={property.status}
          featured={property.featured}
          dldValidated={property.dldValidated}
        />
        <Image
          src={property.images[0] || '/images/dubai-skyline.jpg'}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-3 left-3 text-zinc-900 dark:text-white font-bold text-xl drop-shadow-md">
          {formattedPrice}
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-1.5">
            <MapPin size={13} className="text-[#EF4444]" />
            <span>{property.location}</span>
          </div>
          <h3 className="font-bold text-base text-zinc-900 dark:text-white group-hover:text-red-400 transition-colors line-clamp-1">
            <Link href={`/properties/${property.id}`}>{property.title}</Link>
          </h3>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 py-4 my-4 border-y border-zinc-200/80 dark:border-zinc-800/80 text-xs text-zinc-600 dark:text-zinc-300">
          <div className="flex items-center gap-1.5">
            <Bed size={14} className="text-zinc-500 dark:text-zinc-400" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath size={14} className="text-zinc-500 dark:text-zinc-400" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square size={14} className="text-zinc-500 dark:text-zinc-400" />
            <span>{displayArea}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/properties/${property.id}`}
            className="text-center py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider border border-zinc-300 dark:border-zinc-700 hover:border-[#EF4444] text-zinc-900 dark:text-white transition-colors"
          >
            View Details
          </Link>
          <a
            href={`${WHATSAPP_LINK}?text=Inquiring%20about%20${encodeURIComponent(property.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppLeadClick}
            className="text-center py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 hover:bg-[#EF4444] hover:text-white text-zinc-900 dark:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
};

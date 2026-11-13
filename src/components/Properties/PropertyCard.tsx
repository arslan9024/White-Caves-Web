import Image from 'next/image';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '../../types/property.types';
import { PropertyBadge } from './PropertyBadge';
import { WHATSAPP_LINK } from '../../data/nav.data';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const formattedPrice = new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: property.currency || 'AED',
    maximumFractionDigits: 0,
  }).format(property.price);

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
            {property.title}
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
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={`${WHATSAPP_LINK}?text=Inquiring%20about%20${encodeURIComponent(property.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 hover:bg-[#EF4444] text-zinc-900 dark:text-white transition-colors"
        >
          Request Brochure & Details
        </a>
      </div>
    </article>
  );
};

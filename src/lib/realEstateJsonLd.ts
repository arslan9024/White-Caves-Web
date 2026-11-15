export interface RealEstateListingInput {
  id: string;
  title: string;
  description: string;
  url: string;
  priceAed: number;
  currency?: string;
  imageUrl?: string;
  addressLocality?: string;
  bedrooms?: number;
  bathrooms?: number;
  areaSqFt?: number;
}

/**
 * Generates schema.org RealEstateListing JSON-LD structured data (Point 75).
 */
export function buildRealEstateListingJsonLd(input: RealEstateListingInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    '@id': input.url,
    name: input.title,
    description: input.description,
    url: input.url,
    ...(input.imageUrl ? { image: input.imageUrl } : {}),
    offers: {
      '@type': 'Offer',
      price: input.priceAed,
      priceCurrency: input.currency ?? 'AED',
      availability: 'https://schema.org/InStock',
    },
    ...(input.addressLocality
      ? {
          address: {
            '@type': 'PostalAddress',
            addressLocality: input.addressLocality,
            addressCountry: 'AE',
          },
        }
      : {}),
    ...(input.bedrooms !== undefined ? { numberOfRooms: input.bedrooms } : {}),
    ...(input.bathrooms !== undefined ? { numberOfBathroomsTotal: input.bathrooms } : {}),
    ...(input.areaSqFt !== undefined
      ? {
          floorSize: {
            '@type': 'QuantitativeValue',
            value: input.areaSqFt,
            unitCode: 'FTK',
          },
        }
      : {}),
  };
}

export interface MapPropertyPin {
  id: string;
  title: string;
  community: string;
  developer: string;
  propertyType: 'Villa' | 'Apartment' | 'Penthouse' | 'Townhouse' | 'Off-Plan';
  status: 'Ready' | 'Off-Plan';
  priceAED: number;
  beds: number;
  baths: number;
  sqft: number;
  /** Normalized 0..100 viewport coordinates across the Dubai metropolitan map */
  xPct: number;
  yPct: number;
}

export const MAP_FILTER_TYPES = [
  'all',
  'Villa',
  'Apartment',
  'Penthouse',
  'Townhouse',
  'Off-Plan',
] as const;

export type MapFilterType = (typeof MAP_FILTER_TYPES)[number];

export const DUBAI_MAP_PINS: MapPropertyPin[] = [
  {
    id: 'pin-palm-1',
    title: 'Signature Frond G Beachfront Villa',
    community: 'Palm Jumeirah',
    developer: 'Nakheel',
    propertyType: 'Villa',
    status: 'Ready',
    priceAED: 38500000,
    beds: 6,
    baths: 7,
    sqft: 8500,
    xPct: 24,
    yPct: 52,
  },
  {
    id: 'pin-downtown-1',
    title: 'Burj Vista Sky Penthouse',
    community: 'Downtown Dubai',
    developer: 'Emaar',
    propertyType: 'Penthouse',
    status: 'Ready',
    priceAED: 24900000,
    beds: 4,
    baths: 5,
    sqft: 5200,
    xPct: 62,
    yPct: 32,
  },
  {
    id: 'pin-marina-1',
    title: 'Marina Gate Panoramic Residence',
    community: 'Dubai Marina',
    developer: 'Select Group',
    propertyType: 'Apartment',
    status: 'Ready',
    priceAED: 6400000,
    beds: 3,
    baths: 4,
    sqft: 2350,
    xPct: 21,
    yPct: 64,
  },
  {
    id: 'pin-hills-1',
    title: 'Fairways Golf Course Mansion',
    community: 'Dubai Hills Estate',
    developer: 'Emaar',
    propertyType: 'Villa',
    status: 'Ready',
    priceAED: 29500000,
    beds: 6,
    baths: 7,
    sqft: 9400,
    xPct: 52,
    yPct: 56,
  },
  {
    id: 'pin-bbay-1',
    title: 'Canal Front Branded Duplex',
    community: 'Business Bay',
    developer: 'Omniyat',
    propertyType: 'Penthouse',
    status: 'Off-Plan',
    priceAED: 19200000,
    beds: 4,
    baths: 5,
    sqft: 4600,
    xPct: 58,
    yPct: 39,
  },
  {
    id: 'pin-creek-1',
    title: 'Creek Waters Harbourfront Suite',
    community: 'Dubai Creek Harbour',
    developer: 'Emaar',
    propertyType: 'Off-Plan',
    status: 'Off-Plan',
    priceAED: 7200000,
    beds: 3,
    baths: 4,
    sqft: 2400,
    xPct: 76,
    yPct: 27,
  },
  {
    id: 'pin-damac-1',
    title: 'Water Town Lagoon Corner Townhouse',
    community: 'DAMAC Hills 2',
    developer: 'DAMAC',
    propertyType: 'Townhouse',
    status: 'Ready',
    priceAED: 2350000,
    beds: 4,
    baths: 4,
    sqft: 2750,
    xPct: 72,
    yPct: 78,
  },
  {
    id: 'pin-jvc-1',
    title: 'Binghatti Sovereign Sky Suite',
    community: 'Jumeirah Village Circle',
    developer: 'Binghatti',
    propertyType: 'Apartment',
    status: 'Off-Plan',
    priceAED: 1650000,
    beds: 2,
    baths: 3,
    sqft: 1380,
    xPct: 40,
    yPct: 68,
  },
];

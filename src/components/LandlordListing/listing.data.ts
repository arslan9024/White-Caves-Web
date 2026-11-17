// AEGIS V5.0 — LandlordListingForm Data
// Compliant with TURING-LAW-043 (Intro/Outro), AEG-042 (<350 lines)

export const PROPERTY_TYPES = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'villa', label: 'Villa' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'penthouse', label: 'Penthouse' },
  { value: 'studio', label: 'Studio' },
  { value: 'duplex', label: 'Duplex' },
  { value: 'office', label: 'Office Space' },
  { value: 'retail', label: 'Retail Shop' },
  { value: 'warehouse', label: 'Warehouse' },
] as const;

export const POPULAR_AREAS = [
  'Downtown Dubai',
  'Dubai Marina',
  'Business Bay',
  'JBR',
  'Palm Jumeirah',
  'JVC',
  'JLT',
  'Dubai Hills',
  'Arabian Ranches',
  'DIFC',
  'Al Barsha',
  'Deira',
  'Bur Dubai',
  'Silicon Oasis',
  'Sports City',
  'Motor City',
  'International City',
  'Al Quoz',
  'Discovery Gardens',
  'Other',
] as const;

export interface LandlordListingFormData {
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  propertyTitle: string;
  propertyType: string;
  area: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  annualRent: number;
  description: string;
  hasTitleDeed: boolean;
  availableFrom: string;
}

export const INITIAL_FORM_DATA: LandlordListingFormData = {
  ownerName: '',
  ownerPhone: '',
  ownerEmail: '',
  propertyTitle: '',
  propertyType: 'apartment',
  area: '',
  location: '',
  bedrooms: 1,
  bathrooms: 1,
  sqft: 0,
  annualRent: 0,
  description: '',
  hasTitleDeed: false,
  availableFrom: '',
};

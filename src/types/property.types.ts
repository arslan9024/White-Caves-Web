export interface Property {
  id: string;
  title: string;
  price: number;
  currency?: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  status: 'Ready' | 'Off-Plan' | 'Resale' | 'For Rent';
  featured?: boolean;
  dldValidated?: boolean;
  images: string[];
  rentalPeriod?: 'Yearly' | 'Monthly';
  cheques?: number;
  cluster?: string;
  furnished?: boolean;
}

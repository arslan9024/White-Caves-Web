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
  status: 'Ready' | 'Off-Plan' | 'Resale';
  featured?: boolean;
  dldValidated?: boolean;
  images: string[];
}

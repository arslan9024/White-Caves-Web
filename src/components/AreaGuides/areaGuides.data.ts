export interface Community {
  id: string;
  name: string;
  tagline: string;
  avgPrice: string;
  roi: string;
  image: string;
  badge?: string;
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const COMMUNITIES: Community[] = [
  {
    id: 'damac-hills-2',
    name: 'Life in DAMAC Hills 2',
    tagline: 'Water Town, Sports Town & Master Luxury Villas',
    avgPrice: 'AED 1.8M - 4.5M',
    roi: '8.4% Net Yield',
    image: img('photo-1613977257363-707ba9348227'),
    badge: 'Family Destination',
  },
  {
    id: 'downtown-dubai',
    name: 'Downtown Dubai',
    tagline: 'Burj Khalifa & Opera District Sky Residences',
    avgPrice: 'AED 3.2M - 45M',
    roi: '6.8% Gross Yield',
    image: img('photo-1512453979798-5ea266f8880c'),
    badge: 'Iconic Address',
  },
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    tagline: 'Beachfront Mansions & Signature Coastal Estates',
    avgPrice: 'AED 8.5M - 120M',
    roi: '7.2% Capital Growth',
    image: img('photo-1582268611958-ebfd161ef9cf'),
    badge: 'Ultra-Luxury Haven',
  },
  {
    id: 'dubai-marina',
    name: 'Dubai Marina & JBR',
    tagline: 'Waterfront Promenade & High-Rise Penthouses',
    avgPrice: 'AED 1.6M - 9.2M',
    roi: '7.8% Rental Yield',
    image: img('photo-1580674684081-7617fbf3d745'),
  },
  {
    id: 'business-bay',
    name: 'Business Bay & Canal',
    tagline: 'Dubai Canal-side Branded Penthouses',
    avgPrice: 'AED 1.4M - 7.5M',
    roi: '8.1% Rental Yield',
    image: img('photo-1546412414-8035e1776c9a'),
  },
  {
    id: 'dubai-hills',
    name: 'Dubai Hills Estate',
    tagline: '18-Hole Championship Golf Course Estates',
    avgPrice: 'AED 2.9M - 28M',
    roi: '7.5% Net Yield',
    image: img('photo-1600596542815-ffad4c1539a9'),
  },
];

export const communityHref = (c: Community) =>
  `/properties?community=${encodeURIComponent(c.name)}`;

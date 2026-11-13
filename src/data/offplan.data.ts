export interface OffPlanProject {
  id: string;
  name: string;
  developer: string;
  location: string;
  startingPrice: number;
  handoverDate: string;
  paymentPlan: string;
  units: string;
  image: string;
  tag: string;
  highlights: string[];
}

export const OFF_PLAN_PROJECTS: OffPlanProject[] = [
  {
    id: 'op-1',
    name: 'The Oasis by Emaar',
    developer: 'Emaar Properties',
    location: 'Dubailand / The Oasis',
    startingPrice: 8500000,
    handoverDate: 'Q4 2028',
    paymentPlan: '80 / 20 Flexible',
    units: '4, 5 & 6 Bedroom Mansions',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    tag: 'Master Resort Living',
    highlights: ['Crystal Water Lagoons', 'Private Swimmable Beaches', 'Architectural Water Villas'],
  },
  {
    id: 'op-2',
    name: 'DAMAC Riverside Water Community',
    developer: 'DAMAC Properties',
    location: 'Dubai Investment Park (DIP)',
    startingPrice: 1990000,
    handoverDate: 'Q2 2027',
    paymentPlan: '70 / 30 Post-Handover',
    units: '4 & 5 Bedroom Townhouses',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85',
    tag: 'High Rental Yield Hub',
    highlights: ['Culinary Arts District', 'Hydroponic Farm Towers', 'Riverside Amphitheater'],
  },
  {
    id: 'op-3',
    name: 'Sobha Siniya Island Beachfront',
    developer: 'Sobha Realty',
    location: 'Umm Al Quwain / Siniya Island',
    startingPrice: 4200000,
    handoverDate: 'Q4 2027',
    paymentPlan: '60 / 40 on Handover',
    units: 'Waterfront Villas & Condos',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
    tag: 'Private Island Sanctuary',
    highlights: ['Natural Mangrove Forests', 'Helipad Access', 'Yacht Marina Slips'],
  },
  {
    id: 'op-4',
    name: 'Palm Jebel Ali Frond Estates',
    developer: 'Nakheel Properties',
    location: 'Palm Jebel Ali, Dubai',
    startingPrice: 18500000,
    handoverDate: 'Q3 2028',
    paymentPlan: '80 / 20 Staged Plan',
    units: '5, 6 & 7 Bed Beachfront Mansions',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=85',
    tag: 'Iconic Global Reclamation',
    highlights: ['Double Waterfrontage', 'Private Infinity Pools', '110km Coastline Extension'],
  },
];

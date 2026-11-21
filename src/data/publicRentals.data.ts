/**
 * Public Rental DTO Types & Fallback Inventory — White Caves Web (:3001)
 */

export interface PublicRentalDto {
  id: string;
  slug: string;
  title: string;
  description: string;
  purpose: 'RENT';
  status: 'AVAILABLE' | 'RESERVED' | 'LEASED';
  type: string;
  community: string;
  subCommunity: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  annualRentAed: number;
  chequesCount: number;
  securityDepositAed: number;
  furnished: boolean;
  reraPermitNumber: string;
  amenities: string[];
  images: string[];
  assignedBroker: {
    id: string;
    name: string;
    brnNumber: string;
    phone: string;
    whatsappDeepLink: string;
  };
}

export const FALLBACK_WEB_RENTALS: PublicRentalDto[] = [
  {
    id: '673a10000000000000000101',
    slug: '3br-townhouse-camelia-damac-hills-2',
    title: '3BR Corner Townhouse with Private Garden in Camelia',
    description:
      'Verified 3-bedroom corner townhouse in Camelia, DAMAC Hills 2. DLD Trakheesi & Ejari ready with flexible 4-cheque payment terms.',
    purpose: 'RENT',
    status: 'AVAILABLE',
    type: 'townhouse',
    community: 'DAMAC Hills 2',
    subCommunity: 'Camelia',
    location: 'Camelia, DAMAC Hills 2, Dubai',
    bedrooms: 3,
    bathrooms: 4,
    areaSqFt: 1882,
    annualRentAed: 90000,
    chequesCount: 4,
    securityDepositAed: 4500,
    furnished: false,
    reraPermitNumber: '7148920194',
    amenities: ['Malibu Beach Access', 'Lazy River & Wave Pool', 'Covered Parking', 'Private Garden', '24/7 Security'],
    images: ['/images/dubai-skyline.jpg'],
    assignedBroker: {
      id: 'wc-agent-arslan',
      name: 'Arslan Malik (White Caves Leasing Desk)',
      brnNumber: 'BRN-62841',
      phone: '+971505760056',
      whatsappDeepLink:
        'https://wa.me/971505760056?text=Hi%20Linda%20(White%20Caves)%2C%20I%20want%20to%20view%20the%203BR%20Townhouse%20in%20Camelia%2C%20DAMAC%20Hills%202.',
    },
  },
  {
    id: '673a10000000000000000102',
    slug: '4br-villa-pacifica-damac-hills-2',
    title: '4BR Independent Family Villa with Roof Terrace in Pacifica',
    description:
      'Verified 4-bedroom family villa in Pacifica, DAMAC Hills 2. Features landscaped garden, maid room, and 4-cheque flexibility.',
    purpose: 'RENT',
    status: 'AVAILABLE',
    type: 'villa',
    community: 'DAMAC Hills 2',
    subCommunity: 'Pacifica',
    location: 'Pacifica, DAMAC Hills 2, Dubai',
    bedrooms: 4,
    bathrooms: 5,
    areaSqFt: 2450,
    annualRentAed: 115000,
    chequesCount: 4,
    securityDepositAed: 5750,
    furnished: false,
    reraPermitNumber: '7148920195',
    amenities: ['Sports Town Access', 'Private Landscaped Garden', 'Maid Room', 'Covered Parking', 'Community Pool'],
    images: ['/images/dubai-skyline.jpg'],
    assignedBroker: {
      id: 'wc-agent-arslan',
      name: 'Arslan Malik (White Caves Leasing Desk)',
      brnNumber: 'BRN-62841',
      phone: '+971505760056',
      whatsappDeepLink:
        'https://wa.me/971505760056?text=Hi%20Linda%20(White%20Caves)%2C%20I%20want%20to%20view%20the%204BR%20Villa%20in%20Pacifica%2C%20DAMAC%20Hills%202.',
    },
  },
  {
    id: '673a10000000000000000103',
    slug: '3br-villa-vardon-damac-hills-2',
    title: '3BR Park-Backing Eco Villa in Vardon',
    description:
      'Verified 3-bedroom park-backing villa in Vardon, DAMAC Hills 2. Steps from Community Center & Carrefour.',
    purpose: 'RENT',
    status: 'AVAILABLE',
    type: 'townhouse',
    community: 'DAMAC Hills 2',
    subCommunity: 'Vardon',
    location: 'Vardon, DAMAC Hills 2, Dubai',
    bedrooms: 3,
    bathrooms: 3,
    areaSqFt: 1750,
    annualRentAed: 82000,
    chequesCount: 2,
    securityDepositAed: 4100,
    furnished: false,
    reraPermitNumber: '7148920196',
    amenities: ['Green Park Backing', 'Carrefour Nearby', 'Kids Play Area', '24/7 Security', 'Covered Parking'],
    images: ['/images/dubai-skyline.jpg'],
    assignedBroker: {
      id: 'wc-agent-arslan',
      name: 'Arslan Malik (White Caves Leasing Desk)',
      brnNumber: 'BRN-62841',
      phone: '+971505760056',
      whatsappDeepLink:
        'https://wa.me/971505760056?text=Hi%20Linda%20(White%20Caves)%2C%20I%20want%20to%20view%20the%203BR%20Villa%20in%20Vardon%2C%20DAMAC%20Hills%202.',
    },
  },
  {
    id: '673a10000000000000000104',
    slug: '2br-apartment-downtown-dubai-boulevard',
    title: '2BR Burj View Residence on Sheikh Mohammed Bin Rashid Blvd',
    description:
      'Luxury furnished 2-bedroom apartment in Downtown Dubai with direct Dubai Mall link and Burj Khalifa views.',
    purpose: 'RENT',
    status: 'AVAILABLE',
    type: 'apartment',
    community: 'Downtown Dubai',
    subCommunity: 'Boulevard Point',
    location: 'Boulevard Point, Downtown Dubai',
    bedrooms: 2,
    bathrooms: 3,
    areaSqFt: 1420,
    annualRentAed: 195000,
    chequesCount: 2,
    securityDepositAed: 19500,
    furnished: true,
    reraPermitNumber: '7148920197',
    amenities: ['Direct Dubai Mall Link', 'Infinity Pool', 'Concierge', 'Gym & Spa', 'Valet Parking'],
    images: ['/images/dubai-skyline.jpg'],
    assignedBroker: {
      id: 'wc-agent-arslan',
      name: 'Arslan Malik (White Caves Leasing Desk)',
      brnNumber: 'BRN-62841',
      phone: '+971505760056',
      whatsappDeepLink:
        'https://wa.me/971505760056?text=Hi%20Linda%20(White%20Caves)%2C%20I%20want%20to%20view%20the%202BR%20Apartment%20in%20Downtown%20Dubai.',
    },
  },
];

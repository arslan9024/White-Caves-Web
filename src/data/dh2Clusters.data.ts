export interface Dh2ClusterSeo {
  slug: string;
  name: string;
  tagline: string;
  avgRentRangeAed: string;
  typicalLayouts: string;
  chequeNorms: string;
  highlights: string[];
  seoDescription: string;
}

export const LINDA_WHATSAPP_NUMBER = '971505760056';

export function buildLindaWhatsAppUrl(message: string): string {
  return `https://wa.me/${LINDA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DH2_CLUSTERS_SEO: Dh2ClusterSeo[] = [
  {
    slug: 'pacifica',
    name: 'Pacifica',
    tagline: 'Mature Family Villas & Single-Row Townhouses Near Community Centre',
    avgRentRangeAed: 'AED 82,000 – 125,000 / year',
    typicalLayouts: '3BR, 4BR & 5BR Townhouses & Standalone Villas',
    chequeNorms: '2 to 4 Cheques',
    highlights: ['Close to Carrefour & Community Hub', 'Large Private Gardens', 'High Family Occupancy', 'Fast Ejari Handover'],
    seoDescription: 'Rent verified 3BR, 4BR, and 5BR villas in Pacifica, DAMAC Hills 2 directly with White Caves Real Estate LLC. Zero portal markup, transparent RERA Ejari contracts, and instant WhatsApp viewing booking.',
  },
  {
    slug: 'camelia',
    name: 'Camelia',
    tagline: 'Modern New-Generation 3BR Townhouses Beside Water Town',
    avgRentRangeAed: 'AED 85,000 – 110,000 / year',
    typicalLayouts: '3BR Contemporary Townhouses (G+2 with Roof Terrace)',
    chequeNorms: '2 to 4 Cheques',
    highlights: ['Brand-New Modern Finishes', 'Walkable to Malibu Beach & Water Town', 'Spacious Roof Terraces', 'Direct Landlord Inventory'],
    seoDescription: 'Explore newly handed-over 3BR townhouses for rent in Camelia, DAMAC Hills 2. Verified units with private gardens, roof terraces, and direct viewing scheduling via WhatsApp.',
  },
  {
    slug: 'albizia',
    name: 'Albizia',
    tagline: 'Quiet Green Cluster With Single-Row 3BR Townhouses',
    avgRentRangeAed: 'AED 76,000 – 98,000 / year',
    typicalLayouts: '3BR R2-MB & R2-M Townhouses',
    chequeNorms: '2 to 4 Cheques',
    highlights: ['Peaceful Internal Streets', 'Minutes to Sports Town & Gym', 'Family-Friendly Parks', 'Flexible Cheque Options'],
    seoDescription: 'Find single-row 3BR townhouses for rent in Albizia, DAMAC Hills 2. Direct verified listings by White Caves Real Estate LLC with fast DLD Ejari registration.',
  },
  {
    slug: 'basswood',
    name: 'Basswood',
    tagline: 'Prime Park-Facing Townhouses With Quick Exit to Al Qudra Road',
    avgRentRangeAed: 'AED 78,000 – 105,000 / year',
    typicalLayouts: '3BR & 4BR Townhouses',
    chequeNorms: '2 to 4 Cheques',
    highlights: ['Easy Main Gate Access', 'Upgraded Landscaped Units', 'Close to Nursery & Retail', 'Move-In Ready Options'],
    seoDescription: 'Browse verified 3BR & 4BR villas for rent in Basswood, DAMAC Hills 2. Enjoy fast Al Qudra Road access, community pools, and direct WhatsApp viewing coordination.',
  },
  {
    slug: 'clivia',
    name: 'Clivia',
    tagline: 'High-Value 3BR Residences With Mature Landscaping',
    avgRentRangeAed: 'AED 74,000 – 95,000 / year',
    typicalLayouts: '3BR Back-to-Back & Single-Row Townhouses',
    chequeNorms: '4 Cheques',
    highlights: ['Best AED-per-SqFt Value in DH2', 'Dedicated Covered Parking', 'Community Swimming Pool', 'Verified Landlord Title Deeds'],
    seoDescription: 'Rent affordable upgraded 3BR townhouses in Clivia, DAMAC Hills 2. Verified listings from White Caves Real Estate LLC with flexible 4-cheque plans.',
  },
  {
    slug: 'amargo',
    name: 'Amargo',
    tagline: 'Spacious Corner-Plot 3BR & 4BR Family Villas',
    avgRentRangeAed: 'AED 90,000 – 130,000 / year',
    typicalLayouts: '3BR & 4BR Corner Villas & Townhouses',
    chequeNorms: '2 to 4 Cheques',
    highlights: ['Generous Corner Plots', 'Modern Closed & Open Kitchens', 'Near Sports Town & Cricket Field', 'Furnished & Unfurnished Choices'],
    seoDescription: 'Discover corner-plot 3BR and 4BR villas for rent in Amargo, DAMAC Hills 2. Direct verified inventory and same-day WhatsApp viewing booking.',
  },
  {
    slug: 'vardon',
    name: 'Vardon',
    tagline: 'Scenic Golf-Side & Park-Facing 3BR Townhouses',
    avgRentRangeAed: 'AED 78,000 – 102,000 / year',
    typicalLayouts: '3BR R2-MB & Corner Townhouses',
    chequeNorms: '2 to 4 Cheques',
    highlights: ['Serene Green Views', 'Close to Community Pool', 'Ideal for Young Families', 'Verified RERA Brokerage'],
    seoDescription: 'Rent 3BR townhouses in Vardon, DAMAC Hills 2 with White Caves Real Estate LLC. Direct landlord listings, transparent contracts, and instant WhatsApp viewings.',
  },
  {
    slug: 'zinnia',
    name: 'Zinnia',
    tagline: 'Vibrant Family Cluster Next to Community Retail & Pools',
    avgRentRangeAed: 'AED 80,000 – 115,000 / year',
    typicalLayouts: '3BR & 4BR Townhouses & Villas',
    chequeNorms: '2 to 4 Cheques',
    highlights: ['Walking Distance to Carrefour', 'Active Family Community', 'Upgraded Garden Units', 'Quick Move-In'],
    seoDescription: 'Verified 3BR and 4BR villas for rent in Zinnia, DAMAC Hills 2. Schedule a direct viewing on WhatsApp with White Caves Real Estate LLC.',
  },
  {
    slug: 'mimosa',
    name: 'Mimosa',
    tagline: 'Bright Sunlit 3BR Townhouses Near Water Town & Parks',
    avgRentRangeAed: 'AED 76,000 – 98,000 / year',
    typicalLayouts: '3BR Townhouses',
    chequeNorms: '2 to 4 Cheques',
    highlights: ['Quiet Cul-de-Sac Layout', 'Kids Play Areas & Jogging Tracks', 'Direct Owner Verification', 'Same-Day Viewings'],
    seoDescription: 'Rent verified 3BR townhouses in Mimosa, DAMAC Hills 2 with White Caves Real Estate LLC. Fast Ejari and zero hidden fees.',
  },
  {
    slug: 'juniper',
    name: 'Juniper',
    tagline: 'Established 3BR & 4BR Townhouses With Shaded Walkways',
    avgRentRangeAed: 'AED 78,000 – 108,000 / year',
    typicalLayouts: '3BR & 4BR Townhouses',
    chequeNorms: '2 to 4 Cheques',
    highlights: ['Mature Community Trees', 'Near Bus Stop & Gate', 'Spacious Living Areas', 'Verified Keys Ready'],
    seoDescription: 'Browse verified 3BR & 4BR rentals in Juniper, DAMAC Hills 2. Book a private viewing directly via WhatsApp with White Caves Real Estate LLC.',
  },
];

export function findDh2ClusterBySlug(slug: string): Dh2ClusterSeo | undefined {
  const clean = slug.trim().toLowerCase();
  return DH2_CLUSTERS_SEO.find(c => c.slug === clean);
}

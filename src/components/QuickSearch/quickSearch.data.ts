export interface QuickSearchDestination {
  label: string;
  query: string;
  communitySlug?: string;
}

export const POPULAR_SEARCH_DESTINATIONS: QuickSearchDestination[] = [
  {
    label: 'Palm Jumeirah Villa',
    query: 'Palm Jumeirah Villa',
    communitySlug: 'palm-jumeirah',
  },
  {
    label: 'Downtown Penthouse',
    query: 'Downtown Penthouse',
    communitySlug: 'downtown-dubai',
  },
  {
    label: 'Dubai Marina Waterfront',
    query: 'Dubai Marina',
    communitySlug: 'dubai-marina',
  },
  {
    label: 'DAMAC Hills 2 Cluster',
    query: 'DAMAC Hills 2',
    communitySlug: 'damac-hills-2',
  },
  {
    label: 'Dubai Hills Golf Sanctuary',
    query: 'Dubai Hills Estate',
    communitySlug: 'dubai-hills-estate',
  },
  {
    label: 'Off-Plan Investment',
    query: 'Off-Plan Investment',
  },
];

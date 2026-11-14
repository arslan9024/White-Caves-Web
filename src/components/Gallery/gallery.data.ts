export interface LuxurySunsetPhoto {
  id: string;
  title: string;
  location: string;
  communitySlug: string;
  imageUrl: string;
  goldenHourTime: string;
  tag: string;
  curatedBy: string;
}

export const CURATED_DUBAI_SUNSET_PHOTOS: LuxurySunsetPhoto[] = [
  {
    id: 'sunset-palm-01',
    title: 'Atlantis The Royal Sunset Horizon',
    location: 'Palm Jumeirah, Crescent',
    communitySlug: 'palm-jumeirah',
    imageUrl:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
    goldenHourTime: '17:42 GST',
    tag: 'Ultra-Prime Waterfront',
    curatedBy: 'White Caves Media Architecture',
  },
  {
    id: 'sunset-marina-02',
    title: 'Dubai Marina Twilight Yacht Promenade',
    location: 'Dubai Marina Channel',
    communitySlug: 'dubai-marina',
    imageUrl:
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=85',
    goldenHourTime: '17:50 GST',
    tag: 'Skyline Reflections',
    curatedBy: 'Victoria Chen (Luxury Lead)',
  },
  {
    id: 'sunset-hills-03',
    title: 'Emerald Fairways Golden Hour Vista',
    location: 'Dubai Hills Estate',
    communitySlug: 'dubai-hills-estate',
    imageUrl:
      'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1200&q=85',
    goldenHourTime: '17:38 GST',
    tag: 'Private Golf Sanctuary',
    curatedBy: 'White Caves Creative Guild',
  },
];

/**
 * Next.js ISR revalidation intervals (Point 73).
 */
export const ISR_REVALIDATE_SECONDS = {
  propertyListing: 300,
  communityGuide: 3600,
  projectLaunch: 900,
} as const;

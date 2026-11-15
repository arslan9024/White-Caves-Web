/**
 * Next.js RSC property feed cache tag builder (Point 72).
 */
export function buildPropertyFeedTag(communitySlug: string, locale: 'en' | 'ar'): string {
  return `properties:${locale}:${communitySlug.trim().toLowerCase()}`;
}

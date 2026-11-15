export type SupportedLocale = 'en' | 'ar';

/**
 * Multi-lingual property slug builder (/en/properties/... | /ar/properties/...) (Point 78).
 */
export function buildPropertyLocalePath(locale: SupportedLocale, slug: string): string {
  const cleanSlug = slug.trim().replace(/^\/+|\/+$/g, '');
  return `/${locale}/properties/${cleanSlug}`;
}

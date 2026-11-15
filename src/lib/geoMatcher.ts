import type { SupportedCurrency } from './currencyConverter.ts';
import type { SupportedLocale } from './localeSlug.ts';

/**
 * Edge geolocation currency & locale matcher (Point 81).
 */
export function matchGeoPreferences(countryCode: string): {
  currency: SupportedCurrency;
  locale: SupportedLocale;
} {
  const cc = countryCode.toUpperCase().trim();
  if (cc === 'AE' || cc === 'SA') return { currency: 'AED', locale: cc === 'SA' ? 'ar' : 'en' };
  if (cc === 'GB') return { currency: 'GBP', locale: 'en' };
  if (cc === 'IN') return { currency: 'INR', locale: 'en' };
  if (cc === 'DE' || cc === 'FR') return { currency: 'EUR', locale: 'en' };
  return { currency: 'USD', locale: 'en' };
}

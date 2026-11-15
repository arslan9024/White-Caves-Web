export type SupportedCurrency = 'AED' | 'USD' | 'EUR' | 'GBP' | 'INR';

const DEFAULT_RATES_FROM_AED: Record<SupportedCurrency, number> = {
  AED: 1,
  USD: 0.2723,
  EUR: 0.251,
  GBP: 0.214,
  INR: 22.85,
};

/**
 * Multi-currency converter from AED (Point 77).
 */
export function convertFromAed(
  amountAed: number,
  target: SupportedCurrency,
  rates: Partial<Record<SupportedCurrency, number>> = {}
): number {
  const rate = rates[target] ?? DEFAULT_RATES_FROM_AED[target];
  return Number((Math.max(0, amountAed) * rate).toFixed(2));
}

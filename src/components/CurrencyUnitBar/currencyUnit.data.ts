export type SupportedCurrency = 'AED' | 'USD' | 'EUR' | 'GBP';
export type SupportedUnit = 'SqFt' | 'SqM';

/** Fixed FX rates pegged / spot reference to AED */
export const FX_RATES_TO_AED: Record<SupportedCurrency, number> = {
  AED: 1,
  USD: 3.6725,
  EUR: 3.98,
  GBP: 4.65,
};

export const SUPPORTED_CURRENCIES: SupportedCurrency[] = ['AED', 'USD', 'EUR', 'GBP'];
export const SUPPORTED_UNITS: SupportedUnit[] = ['SqFt', 'SqM'];

// src/components/MarketStats/marketTicker.data.ts
export interface MarketTickerItem {
  label: string;
  value: string;
  unit?: string;
  up?: boolean;
  change?: string;
}

export const MARKET_PULSE_TICKS: MarketTickerItem[] = [
  { label: 'DLD Txns Today', value: '247', unit: '', up: undefined },
  { label: 'Palm Jumeirah PSF', value: 'AED 3,250', unit: '', up: true, change: '+2.1%' },
  { label: 'Dubai Marina PSF', value: 'AED 1,950', unit: '', up: true, change: '+1.4%' },
  { label: 'Downtown PSF', value: 'AED 2,840', unit: '', up: false, change: '-0.3%' },
  { label: 'JVC PSF', value: 'AED 980', unit: '', up: true, change: '+4.2%' },
  { label: 'YTD Volume', value: 'AED 186B', unit: '', up: true, change: '+18.4% YoY' },
  { label: 'Off-Plan Share', value: '62%', unit: '', up: true, change: '+8pp' },
  { label: 'Avg Mortgage Rate', value: '3.49%', unit: 'p.a.', up: undefined },
  { label: 'Active Listings', value: '48,220', unit: '', up: true, change: '+1,200 this wk' },
  { label: 'New Launches', value: '4', unit: 'projects today', up: undefined },
];

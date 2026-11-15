/**
 * Zero-layout-shift dark/light luxury theme resolver (Point 82).
 */
export type LuxuryTheme = 'light' | 'dark';

export function resolveInitialTheme(stored?: string | null, prefersDark = false): LuxuryTheme {
  if (stored === 'light' || stored === 'dark') return stored;
  return prefersDark ? 'dark' : 'light';
}

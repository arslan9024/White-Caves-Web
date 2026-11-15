/**
 * Lighthouse 95+ score gate (Point 71).
 */
export function passesLighthouseGate(scores: {
  performance: number;
  seo: number;
  accessibility: number;
  bestPractices: number;
}): boolean {
  return (
    scores.performance >= 95 &&
    scores.seo >= 95 &&
    scores.accessibility >= 95 &&
    scores.bestPractices >= 95
  );
}

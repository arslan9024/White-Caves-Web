/**
 * Virtual 360-degree tour embed URL validator (Point 84).
 */
const ALLOWED_TOUR_HOSTS = new Set(['my.matterport.com', 'kuula.co', 'app.cloudpano.com']);

export function isValidVirtualTourUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && ALLOWED_TOUR_HOSTS.has(parsed.hostname);
  } catch {
    return false;
  }
}

/**
 * Lightweight SVG blurDataURL placeholder for next/image (Point 74).
 */
export function buildBlurDataUrl(width = 16, height = 9): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#1f2937"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

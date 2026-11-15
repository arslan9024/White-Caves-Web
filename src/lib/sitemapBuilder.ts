/**
 * Automated XML Sitemap generator for active properties (Point 85).
 */
export function buildPropertySitemapXml(urls: Array<{ loc: string; lastmod: string }>): string {
  const entries = urls
    .map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
}

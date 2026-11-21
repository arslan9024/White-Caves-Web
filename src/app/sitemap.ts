import type { MetadataRoute } from 'next';
import { ALL_PROPERTIES } from '@/data/all-properties.data';
import { COMMUNITIES } from '@/components/AreaGuides/areaGuides.data';
import { DH2_CLUSTERS_SEO } from '@/data/dh2Clusters.data';
import { fetchPublicRentals } from '@/lib/inventoryApi';

const BASE_URL = 'https://whitecaves.ae';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();
  const liveRentals = await fetchPublicRentals();

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/rent',
    '/properties',
    '/rent/damac-hills-2',
    '/off-plan',
    '/services',
    '/tools',
    '/pricing',
    '/about',
    '/careers',
    '/contact',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency:
      route === '' || route === '/rent' || route === '/properties' || route === '/rent/damac-hills-2'
        ? 'daily'
        : 'weekly',
    priority:
      route === '' ? 1.0 : route === '/rent' || route === '/rent/damac-hills-2' ? 0.95 : route === '/properties' ? 0.9 : 0.8,
  }));

  const rentalSlugRoutes: MetadataRoute.Sitemap = liveRentals.map((rental) => ({
    url: `${BASE_URL}/rent/${rental.slug}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.92,
  }));

  const dh2ClusterRoutes: MetadataRoute.Sitemap = DH2_CLUSTERS_SEO.map((c) => ({
    url: `${BASE_URL}/rent/damac-hills-2/${c.slug}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  const propertyRoutes: MetadataRoute.Sitemap = ALL_PROPERTIES.map((prop) => ({
    url: `${BASE_URL}/properties/${prop.id}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.85,
  }));

  const communityRoutes: MetadataRoute.Sitemap = COMMUNITIES.map((community) => ({
    url: `${BASE_URL}/communities/${community.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...rentalSlugRoutes,
    ...dh2ClusterRoutes,
    ...communityRoutes,
    ...propertyRoutes,
  ];
}

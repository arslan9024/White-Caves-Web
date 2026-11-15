import type { MetadataRoute } from 'next';
import { ALL_PROPERTIES } from '@/data/all-properties.data';
import { COMMUNITIES } from '@/components/AreaGuides/areaGuides.data';

const BASE_URL = 'https://whitecaves.ae';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/properties',
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
    changeFrequency: route === '' || route === '/properties' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/properties' ? 0.9 : 0.8,
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

  return [...staticRoutes, ...communityRoutes, ...propertyRoutes];
}

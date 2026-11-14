/**
 * Live Inventory & Linda WhatsApp Lead Capture Service — White Caves Web (:3001)
 * Connects the Next.js Public Portal to White-Caves-Server (:5001) verified inventory
 * and routes direct WhatsApp property inquiries to Linda AI Agent.
 */

import { Property } from '@/types/property.types';
import { ALL_PROPERTIES } from '@/data/all-properties.data';
import { FEATURED_PROPERTIES } from '@/data/properties.data';

export const SERVER_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.WHITE_CAVES_SERVER_URL ||
  'http://localhost:5001';

interface ServerPropertyRecord {
  id?: string;
  title?: string;
  price?: number;
  currency?: string;
  location?: string;
  area?: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  type?: string;
  status?: string;
  featured?: boolean;
  buildingPermitNumber?: string | null;
  images?: string[];
}

export function mapServerPropertyToWebProperty(raw: ServerPropertyRecord, idx = 0): Property {
  const rawStatus = String(raw.status || '').toLowerCase();
  const status: Property['status'] =
    rawStatus === 'off-plan' || rawStatus === 'off_plan' || rawStatus === 'draft_collected'
      ? 'Off-Plan'
      : rawStatus === 'resale'
        ? 'Resale'
        : 'Ready';

  const images =
    Array.isArray(raw.images) && raw.images.length > 0
      ? raw.images
      : ['/images/dubai-skyline.jpg'];

  return {
    id: String(raw.id || `srv-prop-${idx + 1}`),
    title: String(raw.title || 'Dubai Prime Residence'),
    price: Number(raw.price || 15000000),
    currency: String(raw.currency || 'AED'),
    location: String(raw.location || raw.area || 'Dubai, UAE'),
    bedrooms: Number(raw.bedrooms ?? 4),
    bathrooms: Number(raw.bathrooms ?? 5),
    sqft: Number(raw.sqft ?? 4200),
    type: String(raw.type || 'Luxury Villa'),
    status,
    featured: Boolean(raw.featured ?? true),
    dldValidated: raw.buildingPermitNumber !== null,
    images,
  };
}

/**
 * Fetch verified properties from White-Caves-Server (:5001) with graceful fallback
 */
export async function fetchVerifiedInventory(options?: {
  featuredOnly?: boolean;
}): Promise<Property[]> {
  const fallback = options?.featuredOnly ? FEATURED_PROPERTIES : ALL_PROPERTIES;
  try {
    const endpoint = options?.featuredOnly
      ? `${SERVER_API_BASE_URL}/api/homepage/data`
      : `${SERVER_API_BASE_URL}/api/properties?pageSize=50`;

    const res = await fetch(endpoint, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      next: { revalidate: 60 },
    });

    if (!res.ok) return fallback;
    const json = await res.json();

    const list: ServerPropertyRecord[] = options?.featuredOnly
      ? json?.data?.featuredProperties || []
      : Array.isArray(json?.data)
        ? json.data
        : json?.data?.featuredProperties || [];

    if (!Array.isArray(list) || list.length === 0) {
      return fallback;
    }

    return list.map((item, idx) => mapServerPropertyToWebProperty(item, idx));
  } catch {
    return fallback;
  }
}

/**
 * Route a public portal WhatsApp lead or property inquiry directly to Linda on White-Caves-Server (:5001)
 */
export async function captureWhatsAppLeadToLinda(payload: {
  name?: string;
  phone?: string;
  email?: string;
  propertyId?: string;
  propertyTitle?: string;
  location?: string;
  price?: number;
  inquiryText: string;
  category?: string;
}): Promise<{ success: boolean; leadId?: string }> {
  try {
    const res = await fetch(`${SERVER_API_BASE_URL}/api/v1/webhooks/linda/lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: 'HOT_LEAD',
        name: payload.name || 'Web Portal VIP Visitor',
        phone: payload.phone || '+971585919024',
        category: payload.category || 'BUYER',
        project: payload.location || payload.propertyTitle || 'DUBAI_PRIME',
        unit: payload.propertyId || '',
        inquiry: payload.inquiryText,
        confidence: 0.92,
        source: 'white_caves_web_portal',
      }),
    });
    if (!res.ok) return { success: false };
    const data = await res.json();
    return { success: true, leadId: data?.leadId };
  } catch {
    return { success: false };
  }
}

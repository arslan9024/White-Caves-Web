/**
 * Instant lead capture payload normalizer for White-Caves-Server (Point 79).
 */
export function buildLeadCapturePayload(input: {
  name: string;
  phone: string;
  propertyId?: string;
}) {
  return {
    name: input.name.trim(),
    phone: input.phone.replace(/\s+/g, ''),
    ...(input.propertyId ? { propertyId: input.propertyId.trim() } : {}),
    source: 'white-caves-web',
  };
}

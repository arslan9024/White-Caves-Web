/**
 * Dynamic OpenGraph metadata generator per property (Point 80).
 */
export function buildPropertyOgMetadata(input: {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}) {
  return {
    title: `${input.title} | White Caves Real Estate`,
    description: input.description,
    openGraph: {
      title: input.title,
      description: input.description,
      url: input.url,
      images: [{ url: input.imageUrl, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [input.imageUrl],
    },
  };
}

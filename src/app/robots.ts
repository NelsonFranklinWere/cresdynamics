import { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog/', '/blog/*', '/insights/', '/insights/*', '/projects/', '/cresos/', '/ai-automation/'],
        disallow: ['/api/', '/_next/', '/management/', '/admin/'],
      },
    ],
    sitemap: 'https://cresdynamics.com/sitemap.xml',
    host: 'https://cresdynamics.com',
  };
}

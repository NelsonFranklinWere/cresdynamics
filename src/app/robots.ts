import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/management/'],
      },
    ],
    sitemap: 'https://cresdynamics.com/sitemap.xml',
    host: 'https://cresdynamics.com',
  };
}


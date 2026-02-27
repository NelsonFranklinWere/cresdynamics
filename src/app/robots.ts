import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://cresdynamics.com/sitemap.xml',
    host: 'https://cresdynamics.com',
  };
}


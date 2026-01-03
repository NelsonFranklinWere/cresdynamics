import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cresdynamics.com';
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Solutions pages
  const solutionsPages = [
    'web-growth',
    'ai-automation',
    'seo-visibility',
    'digital-sales',
    'content-brand',
    'consulting-strategy',
  ].map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Case study pages
  const caseStudyPages = [
    'florist-growth-system',
    'sacco-financial-services',
    'karen-boutique-retail',
    'car-rental-growth-system',
    'restaurant-automation-system',
    'consulting-seo-growth',
    'manufacturing-digital-transformation',
    'real-estate-brand-authority',
    'retail-sales-system',
  ].map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...solutionsPages, ...caseStudyPages];
}


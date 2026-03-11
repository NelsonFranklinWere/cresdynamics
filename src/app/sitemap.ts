import { MetadataRoute } from 'next';

const BASE = 'https://cresdynamics.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const entries: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/solutions/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/solutions/digital-sales/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/solutions/ai-automation/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/erp/`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/websites/`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/e-commerce/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/cresos/`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/case-studies/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/finance-platforms/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/operations-workflow/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/data-security/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/insights/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/solutions/web-growth/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/solutions/seo-visibility/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/solutions/content-brand/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/solutions/consulting-strategy/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/case-studies/florist-growth-system/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/case-studies/sacco-financial-services/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/case-studies/karen-boutique-retail/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/case-studies/car-rental-growth-system/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/case-studies/restaurant-automation-system/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/case-studies/consulting-seo-growth/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/case-studies/manufacturing-digital-transformation/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/case-studies/real-estate-brand-authority/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/case-studies/retail-sales-system/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/pricing/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/how-we-build/`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/who-we-are/`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/careers/`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/events/`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/book-strategy-call/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/marketing/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/automation/`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/services/finance/`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/services/operations/`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/services/websites/`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/proof-of-work/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/projects/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/terms/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/privacy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  return entries;
}

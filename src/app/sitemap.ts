import { MetadataRoute } from 'next';
import { listBlogPosts } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

const BASE = 'https://cresdynamics.com';

const STATIC_ENTRIES: MetadataRoute.Sitemap = [
  { url: `${BASE}/`, changeFrequency: 'daily', priority: 1.0 },
  { url: `${BASE}/solutions/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/solutions/digital-sales/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/solutions/ai-automation/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/erp/`, changeFrequency: 'monthly', priority: 0.95 },
  { url: `${BASE}/websites/`, changeFrequency: 'monthly', priority: 0.95 },
  { url: `${BASE}/e-commerce/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/cresos/`, changeFrequency: 'monthly', priority: 0.95 },
  { url: `${BASE}/case-studies/`, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${BASE}/finance-platforms/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/operations-workflow/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/data-security/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/contact/`, changeFrequency: 'monthly', priority: 1.0 },
  { url: `${BASE}/about/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/blog/`, changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE}/insights/`, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE}/insights/custom-erp-system-cost-kenya-2026/`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE}/insights/professional-website-cost-nairobi-2026/`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE}/insights/signs-business-outgrown-whatsapp-excel/`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE}/insights/mpesa-integration-business-software-kenya/`, changeFrequency: 'monthly', priority: 0.75 },
  { url: `${BASE}/solutions/web-growth/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/solutions/seo-visibility/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/solutions/content-brand/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/solutions/consulting-strategy/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/case-studies/the-stems-flowers/`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/case-studies/floral-whispers-gifts/`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/case-studies/whitelight-store/`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/case-studies/mohaa-finest/`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/case-studies/spark-lights-254/`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/case-studies/florist-growth-system/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/case-studies/sacco-financial-services/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/case-studies/karen-boutique-retail/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/case-studies/car-rental-growth-system/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/case-studies/restaurant-automation-system/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/case-studies/consulting-seo-growth/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/case-studies/manufacturing-digital-transformation/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/case-studies/real-estate-brand-authority/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/case-studies/retail-sales-system/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/pricing/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/how-we-build/`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/how-we-work/`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/who-we-are/`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/careers/`, changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE}/events/`, changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE}/book-strategy-call/`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE}/marketing/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/services/automation/`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/services/finance/`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/services/operations/`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/services/websites/`, changeFrequency: 'monthly', priority: 0.85 },
  { url: `${BASE}/proof-of-work/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/projects/`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/terms/`, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE}/privacy/`, changeFrequency: 'yearly', priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await listBlogPosts(false);
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: post.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  return [...STATIC_ENTRIES, ...blogEntries];
}

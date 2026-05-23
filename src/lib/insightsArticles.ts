/** Static insights articles — shown on /blog until CMS posts are published */

export type InsightsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  href: string;
  dateLabel: string;
  readTime: string;
};

export const INSIGHTS_ARTICLES: InsightsArticle[] = [
  {
    slug: 'custom-erp-system-cost-kenya-2026',
    title: 'How Much Does a Custom ERP System Cost in Kenya in 2026?',
    excerpt:
      'A practical pricing guide for Kenyan businesses planning ERP implementation, including what drives cost and timeline.',
    category: 'ERP',
    href: '/insights/custom-erp-system-cost-kenya-2026',
    dateLabel: 'April 28, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'professional-website-cost-nairobi-2026',
    title: 'How Much Does a Professional Website Cost in Nairobi in 2026?',
    excerpt:
      'Clear website pricing ranges in Nairobi and what influences final project scope for serious businesses.',
    category: 'SEO',
    href: '/insights/professional-website-cost-nairobi-2026',
    dateLabel: 'April 28, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'signs-business-outgrown-whatsapp-excel',
    title: '7 Signs Your Business Has Outgrown WhatsApp and Excel',
    excerpt:
      'The operational symptoms that show it is time to move from manual tools to integrated systems.',
    category: 'Operations',
    href: '/insights/signs-business-outgrown-whatsapp-excel',
    dateLabel: 'April 28, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'mpesa-integration-business-software-kenya',
    title: 'M-Pesa Integration — How to Connect Mpesa to Your Business Software',
    excerpt:
      'Step-by-step integration guide for Kenyan teams connecting M-Pesa into software, invoicing, and workflow systems.',
    category: 'Integration',
    href: '/insights/mpesa-integration-business-software-kenya',
    dateLabel: 'April 28, 2026',
    readTime: '8 min read',
  },
];

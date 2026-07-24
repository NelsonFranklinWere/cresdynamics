import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogActionCards from '@/components/blog/BlogActionCards';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { listBlogPosts } from '@/lib/db';
import { INSIGHTS_ARTICLES } from '@/lib/insightsArticles';
import { blogCardExcerpt, estimateReadTimeMinutes } from '@/lib/blog-utils';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog | AI, Logistics & Business Systems Kenya | Cres Dynamics',
  description:
    'Long-form guides from Cres Dynamics on AI workflows, logistics systems, ERP, realtime tracking, and field operations for Kenyan businesses.',
  alternates: { canonical: 'https://cresdynamics.com/blog/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Cres Dynamics Blog',
    description:
      'Practical writing on AI, logistics software, and business operating systems built for Kenya.',
    url: 'https://cresdynamics.com/blog/',
    type: 'website',
  },
};

type BlogListItem = {
  key: string;
  href: string;
  title: string;
  category: string | null;
  excerpt: string;
  meta: string;
  sortAt: string;
};

function formatDate(iso: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogIndexPage() {
  const cmsPosts = await listBlogPosts(false);
  const cmsSlugs = new Set(cmsPosts.map((p) => p.slug));

  const cmsItems: BlogListItem[] = cmsPosts.map((post) => {
    const readMin = estimateReadTimeMinutes(post.body);
    const date = formatDate(post.publishedAt);
    return {
      key: `cms-${post.id}`,
      href: `/blog/${post.slug}`,
      title: post.title,
      category: post.category,
      excerpt: blogCardExcerpt(post.excerpt, post.body),
      meta: [date, `${readMin} min read`].filter(Boolean).join(' · '),
      sortAt: post.publishedAt || post.createdAt,
    };
  });

  const insightItems: BlogListItem[] = INSIGHTS_ARTICLES.filter((a) => !cmsSlugs.has(a.slug)).map(
    (article) => ({
      key: `insight-${article.slug}`,
      href: article.href,
      title: article.title,
      category: article.category,
      excerpt: article.excerpt,
      meta: `${article.dateLabel} · ${article.readTime}`,
      sortAt: new Date(article.dateLabel).toISOString() || '1970-01-01',
    })
  );

  const articles = [...cmsItems, ...insightItems].sort((a, b) => b.sortAt.localeCompare(a.sortAt));
  const [featured, ...rest] = articles;
  const hasContent = articles.length > 0;

  const topics = [
    '#1 digital innovation Kenya',
    'AI & predictions',
    'Logistics systems',
    'Workflow automation',
    'Realtime tracking & alerts',
    'Field feedback',
    'ERP & finance',
  ];

  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Cres Dynamics Blog',
    description:
      'Guides on AI, logistics, and business systems for Kenyan companies from Cres Dynamics.',
    url: 'https://cresdynamics.com/blog/',
    isPartOf: { '@type': 'WebSite', name: 'Cres Dynamics', url: 'https://cresdynamics.com' },
  };

  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <main className="w-full pt-20 md:pt-24">
        <section className="relative w-full overflow-hidden border-b border-white/10">
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% -20%, rgba(47,166,179,0.18), transparent 60%), radial-gradient(ellipse 40% 30% at 100% 50%, rgba(232,117,40,0.08), transparent 50%)',
            }}
          />
          <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16 py-12 md:py-16">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--teal-accent)] mb-3">
              Cres Dynamics · Blog
            </p>
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-black leading-[1.08] mb-5 max-w-5xl tracking-tight">
              AI, logistics, and the systems that keep Kenyan operations moving
            </h1>
            <p className="text-white/75 max-w-3xl text-base md:text-xl leading-relaxed mb-7">
              Long-form writing from live projects — predictions, automation, realtime tracking, credits,
              and field feedback for sales, marketing, and procurement teams.
            </p>
            <ul className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold text-white/70"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16 py-12 md:py-16">
          {hasContent ? (
            <>
              <div className="mb-8 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-white">All articles</h2>
                  <p className="text-sm text-white/50 mt-1">
                    {articles.length} guides · roughly six-minute reads
                  </p>
                </div>
              </div>

              <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {featured ? (
                  <BlogPostCard
                    key={featured.key}
                    href={featured.href}
                    title={featured.title}
                    category={featured.category}
                    excerpt={featured.excerpt}
                    meta={featured.meta}
                    featured
                  />
                ) : null}
                {rest.map((item) => (
                  <BlogPostCard
                    key={item.key}
                    href={item.href}
                    title={item.title}
                    category={item.category}
                    excerpt={item.excerpt}
                    meta={item.meta}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-white/15 bg-black/30 p-10 text-center text-white/70">
              <p className="mb-4">No articles published yet.</p>
              <Link href="/contact" className="text-[var(--teal-accent)] font-semibold hover:underline">
                Contact us
              </Link>
            </div>
          )}

          {hasContent ? <BlogActionCards className="mt-12 w-full max-w-xl" /> : null}
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Link from 'next/link';
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
    'ERP & finance platforms',
    'M-Pesa & reconciliation',
    'Websites that convert',
    'Beyond WhatsApp & Excel',
  ];

  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />
      <main className="pt-24">
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% -20%, rgba(47,166,179,0.18), transparent 60%), radial-gradient(ellipse 40% 30% at 100% 50%, rgba(232,117,40,0.08), transparent 50%)',
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-16">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--teal-accent)] mb-3">
              Cres Dynamics · Nairobi
            </p>
            <h1 className="text-3xl md:text-[2.75rem] font-black leading-[1.12] mb-4 max-w-3xl">
              What it costs, what to integrate, and when manual ops stop working
            </h1>
            <p className="text-white/75 max-w-2xl text-base md:text-lg leading-relaxed mb-6">
              We publish the questions clients ask before we scope an ERP, wire M-Pesa into finance, or
              replace a spreadsheet workflow — with numbers, trade-offs, and Kenya-specific context from
              projects we deliver, not generic marketing tips.
            </p>
            <ul className="flex flex-wrap gap-2 mb-2">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold text-white/70"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          {hasContent ? (
            <>
              <div className="mb-8 border-b border-white/10 pb-6">
                <h2 className="text-lg font-bold text-white">Articles</h2>
                <p className="text-sm text-white/50 mt-1">
                  {articles.length} guide{articles.length === 1 ? '' : 's'} — pricing, payments, websites, operations
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

          {hasContent ? <BlogActionCards className="mt-12 max-w-md" /> : null}
        </section>
      </main>
      <Footer />
    </div>
  );
}

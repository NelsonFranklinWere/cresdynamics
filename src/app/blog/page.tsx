import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
          <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-20">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--teal-accent)] mb-3">Blog</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4 max-w-3xl">
              Systems, software & growth for Kenyan businesses
            </h1>
            <p className="text-white/75 max-w-2xl text-lg">
              Practical articles on ERP, websites, M-Pesa, SEO, and operational systems — from the Cres
              Dynamics team.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          {hasContent ? (
            <>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-white">Latest posts</h2>
                  <p className="text-sm text-white/55 mt-1">
                    {articles.length} article{articles.length === 1 ? '' : 's'} · ERP, payments, websites & operations
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-[var(--teal-accent)] hover:underline"
                >
                  Need a system built? Talk to us →
                </Link>
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

          <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-black/50 to-[var(--teal-accent)]/5 p-8 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-black mb-2">Ready to implement what you read?</h2>
            <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-6">
              Book a systems discovery session — we map your workflows and build ERP, finance, and web
              systems that fit how you operate.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-[var(--orange-energy)] px-6 py-3 text-sm font-bold uppercase tracking-wide hover:brightness-110 transition"
            >
              Book a discovery session
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

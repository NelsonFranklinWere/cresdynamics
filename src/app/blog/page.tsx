import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { listBlogPosts } from '@/lib/db';
import { INSIGHTS_ARTICLES } from '@/lib/insightsArticles';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 60;

function formatDate(iso: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function ArticleCard({
  href,
  category,
  title,
  excerpt,
  meta,
}: {
  href: string;
  category?: string | null;
  title: string;
  excerpt?: string | null;
  meta: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/15 bg-black/25 p-6 hover:border-[var(--teal-accent)]/40 hover:bg-black/40 transition-colors"
    >
      {category ? (
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[var(--teal-accent)] mb-2">
          {category}
        </span>
      ) : null}
      <h2 className="text-xl font-bold leading-snug mb-2 group-hover:text-[var(--teal-accent)] transition-colors">
        {title}
      </h2>
      {excerpt ? <p className="text-sm text-white/70 line-clamp-3 mb-4">{excerpt}</p> : null}
      <p className="text-xs text-white/50">{meta}</p>
    </Link>
  );
}

export default async function BlogIndexPage() {
  const cmsPosts = await listBlogPosts(false);
  const cmsSlugs = new Set(cmsPosts.map((p) => p.slug));
  const insightsOnly = INSIGHTS_ARTICLES.filter((a) => !cmsSlugs.has(a.slug));
  const hasContent = cmsPosts.length > 0 || insightsOnly.length > 0;

  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto px-6 py-14">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--teal-accent)] mb-3">Blog</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
            Systems, software & growth for Kenyan businesses
          </h1>
          <p className="text-white/75 max-w-2xl mb-10">
            Practical articles on ERP, websites, SEO, payments, and operational systems — from the Cres Dynamics
            team.
          </p>

          {cmsPosts.length > 0 ? (
            <div className="mb-12">
              <h2 className="text-lg font-bold text-white/90 mb-4">Latest posts</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {cmsPosts.map((post) => (
                  <ArticleCard
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    category={post.category}
                    title={post.title}
                    excerpt={post.excerpt}
                    meta={`${formatDate(post.publishedAt)} · ${post.author}`}
                  />
                ))}
              </div>
            </div>
          ) : null}

          {insightsOnly.length > 0 ? (
            <div>
              {cmsPosts.length > 0 ? (
                <h2 className="text-lg font-bold text-white/90 mb-4">Insights library</h2>
              ) : null}
              <div className="grid gap-6 md:grid-cols-2">
                {insightsOnly.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    href={article.href}
                    category={article.category}
                    title={article.title}
                    excerpt={article.excerpt}
                    meta={`${article.dateLabel} · ${article.readTime}`}
                  />
                ))}
              </div>
            </div>
          ) : null}

          {!hasContent ? (
            <div className="rounded-2xl border border-white/15 bg-black/30 p-8 text-white/70">
              No articles published yet. Sign in to{' '}
              <Link href="/management/blog" className="text-[var(--teal-accent)] underline">
                management → Blog
              </Link>{' '}
              to publish, or{' '}
              <Link href="/contact" className="text-[var(--teal-accent)] underline">
                contact us
              </Link>
              .
            </div>
          ) : null}

          <section className="mt-12 rounded-2xl border border-white/15 bg-black/30 p-6">
            <h2 className="text-lg font-bold mb-2">Publish new articles</h2>
            <p className="text-white/75 text-sm mb-4">
              Admins can create and publish posts from the management panel. Published posts appear above automatically.
            </p>
            <Link
              href="/management/blog"
              className="inline-flex rounded-lg border border-white/25 px-4 py-2 text-sm font-bold hover:bg-white/10"
            >
              Open blog admin →
            </Link>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

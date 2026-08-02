import Link from 'next/link';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { listBlogPosts } from '@/lib/db';
import { INSIGHTS_ARTICLES } from '@/lib/insightsArticles';
import { blogCardExcerpt, estimateReadTimeMinutes } from '@/lib/blog-utils';

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
    month: 'short',
    day: 'numeric',
  });
}

export default async function HomepageBlogSection() {
  let articles: BlogListItem[] = [];

  try {
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

    articles = [...cmsItems, ...insightItems]
      .sort((a, b) => b.sortAt.localeCompare(a.sortAt))
      .slice(0, 6);
  } catch {
    articles = INSIGHTS_ARTICLES.slice(0, 6).map((article) => ({
      key: `insight-${article.slug}`,
      href: article.href,
      title: article.title,
      category: article.category,
      excerpt: article.excerpt,
      meta: `${article.dateLabel} · ${article.readTime}`,
      sortAt: article.dateLabel,
    }));
  }

  if (articles.length === 0) return null;

  return (
    <section className="relative py-16 md:py-24 bg-[var(--cres-primary-bg)] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--teal-accent)] mb-2">
              From the blog
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-3">
              Ideas that keep systems working
            </h2>
            <p className="text-sm md:text-base text-white/75 leading-relaxed">
              Practical writing on AI, logistics, ERP, and how Kenyan businesses actually operate.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--teal-accent)] hover:text-white transition-colors"
          >
            View all posts
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {articles.map((post) => (
            <BlogPostCard
              key={post.key}
              href={post.href}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              meta={post.meta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

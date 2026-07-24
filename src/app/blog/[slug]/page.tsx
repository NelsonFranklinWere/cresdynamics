import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogBody from '@/components/blog/BlogBody';
import BlogActionCards from '@/components/blog/BlogActionCards';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { getBlogPostBySlug, listBlogPosts } from '@/lib/db';
import { blogCardExcerpt, estimateReadTimeMinutes, stripBlogMarkup } from '@/lib/blog-utils';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: 'Post not found | Cres Dynamics' };

  const title = post.metaTitle || `${post.title} | Cres Dynamics Blog`;
  const description = post.metaDescription || post.excerpt || post.title;
  const url = `https://cresdynamics.com/blog/${post.slug}/`;

  return {
    title,
    description,
    keywords: [
      post.category || 'Cres Dynamics',
      'Cres Dynamics blog',
      'business systems Kenya',
      'logistics software Kenya',
      'AI automation Nairobi',
    ],
    alternates: { canonical: url },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    openGraph: {
      title: post.metaTitle || post.title,
      description,
      url,
      type: 'article',
      publishedTime: post.publishedAt ?? undefined,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      siteName: 'Cres Dynamics',
      locale: 'en_KE',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description,
    },
  };
}

function formatDate(iso: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function extractHeadings(body: string): { id: string; label: string }[] {
  return body
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter((b) => b.startsWith('## '))
    .map((b) => {
      const label = b.slice(3).trim();
      return {
        label,
        id: label
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-'),
      };
    });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = (await listBlogPosts(false)).filter((p) => p.slug !== post.slug).slice(0, 3);
  const lead =
    post.excerpt && post.excerpt.length <= 320
      ? post.excerpt
      : blogCardExcerpt(post.excerpt, post.body, 280);
  const readMin = estimateReadTimeMinutes(post.body);
  const wordCount = stripBlogMarkup(post.body).split(/\s+/).filter(Boolean).length;
  const headings = extractHeadings(post.body);
  const url = `https://cresdynamics.com/blog/${post.slug}/`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.excerpt || post.title,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://cresdynamics.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cres Dynamics Ltd',
      url: 'https://cresdynamics.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cresdynamics.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: post.category || 'Insights',
    wordCount,
    timeRequired: `PT${readMin}M`,
    inLanguage: 'en-KE',
    url,
  };

  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full pt-20 md:pt-24">
        <header className="w-full border-b border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16 py-10 md:py-14">
            <Link
              href="/blog"
              className="text-sm text-[var(--teal-accent)] hover:underline mb-6 inline-flex items-center gap-2"
            >
              ← All blog posts
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {post.category ? (
                <span className="rounded-full border border-[var(--teal-accent)]/35 bg-[var(--teal-accent)]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--teal-accent)]">
                  {post.category}
                </span>
              ) : null}
              <span className="text-xs text-white/50">
                {formatDate(post.publishedAt)} · {post.author} · {readMin} min read · {wordCount.toLocaleString()} words
              </span>
            </div>
            <h1 className="max-w-5xl text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight mb-5">
              {post.title}
            </h1>
            {lead ? (
              <p className="max-w-4xl text-lg md:text-xl text-white/75 leading-relaxed">{lead}</p>
            ) : null}
          </div>
        </header>

        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16 py-10 md:py-14">
          <div className="grid w-full gap-10 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-14 items-start">
            <article className="min-w-0 w-full" itemScope itemType="https://schema.org/BlogPosting">
              <meta itemProp="headline" content={post.title} />
              <meta itemProp="datePublished" content={post.publishedAt || ''} />
              <meta itemProp="author" content={post.author} />
              <BlogBody body={post.body} />
              <div className="mt-12 border-t border-white/10 pt-10">
                <BlogActionCards className="w-full max-w-xl" />
              </div>
            </article>

            <aside className="hidden xl:block sticky top-28 space-y-6">
              {headings.length > 0 ? (
                <nav
                  aria-label="On this page"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 mb-3">
                    On this page
                  </p>
                  <ul className="space-y-2.5">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="text-sm text-white/65 hover:text-[var(--teal-accent)] leading-snug transition-colors"
                        >
                          {h.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ) : null}
              <div className="rounded-2xl border border-[var(--orange-energy)]/30 bg-[var(--orange-energy)]/10 p-5">
                <p className="text-sm font-bold text-white mb-2">Build this for your operation</p>
                <p className="text-xs text-white/65 leading-relaxed mb-4">
                  Cres Dynamics designs logistics and AI systems around how Kenyan teams actually work.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--orange-energy)] px-4 py-2.5 text-sm font-bold text-[#060B18] hover:bg-[#E87528] transition"
                >
                  Talk to us →
                </Link>
              </div>
            </aside>
          </div>

          {related.length > 0 ? (
            <section className="mt-16 md:mt-20 border-t border-white/10 pt-12 w-full">
              <h2 className="text-xl md:text-2xl font-black mb-6">Related posts</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full">
                {related.map((r) => (
                  <BlogPostCard
                    key={r.id}
                    href={`/blog/${r.slug}`}
                    title={r.title}
                    category={r.category}
                    excerpt={blogCardExcerpt(r.excerpt, r.body)}
                    meta={`${formatDate(r.publishedAt)} · ${estimateReadTimeMinutes(r.body)} min read`}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
}

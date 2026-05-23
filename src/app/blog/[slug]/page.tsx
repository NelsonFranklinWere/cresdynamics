import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogBody from '@/components/blog/BlogBody';
import BlogActionCards from '@/components/blog/BlogActionCards';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { getBlogPostBySlug, listBlogPosts } from '@/lib/db';
import { blogCardExcerpt, estimateReadTimeMinutes } from '@/lib/blog-utils';

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
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle || post.title,
      description,
      url,
      type: 'article',
      publishedTime: post.publishedAt ?? undefined,
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

  return (
    <div className="min-h-screen bg-[var(--navy-dark)] text-white">
      <Header />
      <main className="pt-24">
        <article className="max-w-4xl mx-auto px-6 py-14">
          <Link href="/blog" className="text-sm text-[var(--teal-accent)] hover:underline mb-6 inline-block">
            ← All blog posts
          </Link>

          {post.category ? (
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--teal-accent)] mb-3">{post.category}</p>
          ) : null}
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">{post.title}</h1>
          <p className="text-white/60 text-sm mb-8">
            {formatDate(post.publishedAt)} · {post.author} · {readMin} min read
          </p>
          {lead ? <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-3xl">{lead}</p> : null}

          <BlogBody body={post.body} />

          <BlogActionCards className="mt-10 max-w-md" />

          {related.length > 0 ? (
            <section className="mt-12 border-t border-white/10 pt-10">
              <h2 className="text-lg font-bold mb-5">Related posts</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        </article>
      </main>
      <Footer />
    </div>
  );
}

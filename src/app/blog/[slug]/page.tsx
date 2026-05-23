import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogBody from '@/components/blog/BlogBody';
import { getBlogPostBySlug, listBlogPosts } from '@/lib/db';

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
            {formatDate(post.publishedAt)} · {post.author}
          </p>
          {post.excerpt ? <p className="text-white/80 text-lg mb-10">{post.excerpt}</p> : null}

          <BlogBody body={post.body} />

          <section className="mt-12 rounded-2xl border border-white/15 bg-black/30 p-6">
            <h2 className="text-xl font-bold mb-2">Need help implementing this?</h2>
            <p className="text-white/80 mb-4">Book a systems discovery session with Cres Dynamics.</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/contact" className="rounded-lg bg-[var(--orange-energy)] px-4 py-2 text-sm font-bold">
                Contact us
              </Link>
              <Link href="/blog" className="rounded-lg border border-white/25 px-4 py-2 text-sm font-bold">
                More articles
              </Link>
            </div>
          </section>

          {related.length > 0 ? (
            <section className="mt-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-3">Related posts</p>
              <div className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/blog/${r.slug}`}
                    className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold hover:border-[var(--teal-accent)]"
                  >
                    {r.title}
                  </Link>
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

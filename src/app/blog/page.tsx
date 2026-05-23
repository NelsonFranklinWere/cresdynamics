import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { listBlogPosts } from '@/lib/db';

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

export default async function BlogIndexPage() {
  const posts = await listBlogPosts(false);

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
            Practical articles on ERP, websites, SEO, payments, and operational systems — published by the Cres
            Dynamics team.
          </p>

          {posts.length === 0 ? (
            <div className="rounded-2xl border border-white/15 bg-black/30 p-8 text-white/70">
              New articles are on the way. Check back soon or{' '}
              <Link href="/contact" className="text-[var(--teal-accent)] underline">
                contact us
              </Link>{' '}
              for a systems discovery session.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-white/15 bg-black/25 p-6 hover:border-[var(--teal-accent)]/40 hover:bg-black/40 transition-colors"
                >
                  {post.category ? (
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[var(--teal-accent)] mb-2">
                      {post.category}
                    </span>
                  ) : null}
                  <h2 className="text-xl font-bold leading-snug mb-2 group-hover:text-[var(--teal-accent)] transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt ? (
                    <p className="text-sm text-white/70 line-clamp-3 mb-4">{post.excerpt}</p>
                  ) : null}
                  <p className="text-xs text-white/50">
                    {formatDate(post.publishedAt)} · {post.author}
                  </p>
                </Link>
              ))}
            </div>
          )}

          <section className="mt-12 rounded-2xl border border-white/15 bg-black/30 p-6">
            <h2 className="text-lg font-bold mb-2">Also read our insights library</h2>
            <p className="text-white/75 text-sm mb-4">Long-form guides on ERP cost, M-Pesa, and operations.</p>
            <Link
              href="/insights"
              className="inline-flex rounded-lg border border-white/25 px-4 py-2 text-sm font-bold hover:bg-white/10"
            >
              View Insights →
            </Link>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

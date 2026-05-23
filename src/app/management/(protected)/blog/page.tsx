import Link from 'next/link';
import { listBlogPosts } from '@/lib/db';
import BlogListClient from './BlogListClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementBlogPage() {
  const posts = await listBlogPosts(true);
  const published = posts.filter((p) => p.status === 'published').length;

  return (
    <section className="w-full border border-white/10 bg-black/25">
      <div className="px-5 py-4 border-b border-white/10 md:px-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl md:text-2xl font-black">Blog</h1>
          <p className="text-white/70 text-sm mt-1">
            {posts.length} posts · {published} published
          </p>
        </div>
        <Link
          href="/management/blog/new"
          className="inline-flex rounded-lg bg-[var(--orange-energy)] px-4 py-2 text-xs font-bold uppercase tracking-wide"
        >
          New post
        </Link>
      </div>
      <BlogListClient posts={posts} />
    </section>
  );
}

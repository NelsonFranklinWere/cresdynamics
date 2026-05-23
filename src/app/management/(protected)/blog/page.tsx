import Link from 'next/link';
import { listBlogPosts } from '@/lib/db';
import { ManagementSection } from '@/components/management/ManagementUI';
import BlogListClient from './BlogListClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function ManagementBlogPage() {
  const posts = await listBlogPosts(true);
  const published = posts.filter((p) => p.status === 'published').length;

  return (
    <ManagementSection
      title="Blog"
      subtitle={`${posts.length} posts · ${published} published`}
      actions={
        <Link
          href="/management/blog/new"
          className="inline-flex rounded-lg bg-[var(--orange-energy)] px-4 py-2 text-xs font-bold uppercase tracking-wide"
        >
          New post
        </Link>
      }
    >
      <BlogListClient posts={posts} />
    </ManagementSection>
  );
}

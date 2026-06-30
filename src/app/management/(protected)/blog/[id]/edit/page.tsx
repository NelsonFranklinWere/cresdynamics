import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostById } from '@/lib/db';
import { ManagementSection } from '@/components/management/ManagementUI';
import BlogEditorClient from '../../BlogEditorClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ id: string }> };

export default async function EditBlogPostPage({ params }: Props) {
  const { id: idStr } = await params;
  const id = Number(idStr);
  if (!Number.isFinite(id)) notFound();

  const post = await getBlogPostById(id);
  if (!post) notFound();

  return (
    <ManagementSection
      title="Edit post"
      subtitle={post.title}
      fillScreen
      variant="neu"
      actions={
        post.status === 'published' ? (
          <Link
            href={`/blog/${post.slug}`}
            target="_blank"
            className="admin-neu-btn inline-flex rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-[var(--teal-accent)]"
          >
            View live ↗
          </Link>
        ) : undefined
      }
    >
      <BlogEditorClient post={post} />
    </ManagementSection>
  );
}

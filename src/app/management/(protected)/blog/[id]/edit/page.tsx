import { notFound } from 'next/navigation';
import { getBlogPostById } from '@/lib/db';
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
    <section className="w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-white/10 bg-black/25 p-4 sm:p-5 md:p-6">
      <BlogEditorClient post={post} />
    </section>
  );
}

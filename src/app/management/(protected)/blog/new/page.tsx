import BlogEditorClient from '../BlogEditorClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default function NewBlogPostPage() {
  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-white/10 bg-black/25 p-4 sm:p-5 md:p-6">
      <BlogEditorClient />
    </section>
  );
}

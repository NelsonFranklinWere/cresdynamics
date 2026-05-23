import BlogEditorClient from '../BlogEditorClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default function NewBlogPostPage() {
  return (
    <section className="w-full border border-white/10 bg-black/25 p-5 md:p-6">
      <BlogEditorClient />
    </section>
  );
}

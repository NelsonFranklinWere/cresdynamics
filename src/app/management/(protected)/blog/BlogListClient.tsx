'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { BlogPostRow } from '@/lib/blog-utils';

function formatDate(iso: string | null): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-KE', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function BlogListClient({ posts }: { posts: BlogPostRow[] }) {
  const router = useRouter();
  const [updating, setUpdating] = useState<number | null>(null);

  const togglePublish = async (post: BlogPostRow) => {
    setUpdating(post.id);
    try {
      const next = post.status === 'published' ? 'draft' : 'published';
      const res = await fetch(`/api/admin/blog/${post.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: next }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data.error || 'Update failed');
        return;
      }
      router.refresh();
    } finally {
      setUpdating(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px] text-left text-sm">
        <thead className="bg-black/35 text-white/70 text-xs uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Published</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-4 py-8 text-white/60">
                No posts yet.{' '}
                <Link href="/management/blog/new" className="text-[var(--teal-accent)] underline">
                  Create your first post
                </Link>
                .
              </td>
            </tr>
          ) : (
            posts.map((post) => (
              <tr key={post.id} className="border-t border-white/10 hover:bg-white/5">
                <td className="px-4 py-3">
                  <div className="font-semibold text-white">{post.title}</div>
                  <div className="text-xs text-white/50 font-mono">/blog/{post.slug}/</div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-bold ${
                      post.status === 'published'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-amber-500/20 text-amber-200'
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-white/70">{formatDate(post.publishedAt)}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/management/blog/${post.id}/edit`}
                      className="rounded border border-white/20 px-2 py-1 text-xs font-semibold hover:bg-white/10"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      disabled={updating === post.id}
                      onClick={() => togglePublish(post)}
                      className="rounded border border-white/20 px-2 py-1 text-xs font-semibold hover:bg-white/10 disabled:opacity-50"
                    >
                      {updating === post.id ? '…' : post.status === 'published' ? 'Unpublish' : 'Publish'}
                    </button>
                    {post.status === 'published' ? (
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="rounded border border-white/20 px-2 py-1 text-xs font-semibold hover:bg-white/10"
                      >
                        View
                      </Link>
                    ) : null}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

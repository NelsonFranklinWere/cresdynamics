'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { BlogPostRow } from '@/lib/blog-utils';
import {
  AdminCard,
  AdminCardHeader,
  AdminCardList,
  AdminEmpty,
  AdminField,
  AdminFields,
} from '@/components/management/ManagementUI';

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

  if (posts.length === 0) {
    return (
      <AdminEmpty>
        No posts yet.{' '}
        <Link href="/management/blog/new" className="text-[var(--teal-accent)] underline">
          Create your first post
        </Link>
        .
      </AdminEmpty>
    );
  }

  return (
    <AdminCardList>
      {posts.map((post) => (
        <AdminCard key={post.id}>
          <AdminCardHeader
            title={post.title}
            meta={<span className="font-mono">/blog/{post.slug}/</span>}
            badge={
              <span
                className={`inline-block rounded-full px-2 py-0.5 text-xs font-bold ${
                  post.status === 'published'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'bg-amber-500/20 text-amber-200'
                }`}
              >
                {post.status}
              </span>
            }
          />
          <AdminFields>
            <AdminField label="Published">{formatDate(post.publishedAt)}</AdminField>
            {post.category ? <AdminField label="Category">{post.category}</AdminField> : null}
          </AdminFields>
          <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-3">
            <Link
              href={`/management/blog/${post.id}/edit`}
              className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold hover:bg-white/10"
            >
              Edit
            </Link>
            <button
              type="button"
              disabled={updating === post.id}
              onClick={() => togglePublish(post)}
              className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold hover:bg-white/10 disabled:opacity-50"
            >
              {updating === post.id ? '…' : post.status === 'published' ? 'Unpublish' : 'Publish'}
            </button>
            {post.status === 'published' ? (
              <Link
                href={`/blog/${post.slug}`}
                target="_blank"
                className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-semibold hover:bg-white/10"
              >
                View
              </Link>
            ) : null}
          </div>
        </AdminCard>
      ))}
    </AdminCardList>
  );
}

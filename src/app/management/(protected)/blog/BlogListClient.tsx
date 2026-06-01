'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { BlogPostRow } from '@/lib/blog-utils';
import {
  AdminDataBody,
  AdminDataHead,
  AdminDataRow,
  AdminDataTable,
  AdminDataTd,
  AdminDataTh,
  AdminEmpty,
  AdminRowActions,
  adminBtnMuted,
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
        credentials: 'include',
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
    <AdminDataTable caption={`${posts.length} posts`}>
      <AdminDataHead>
        <tr>
          <AdminDataTh>#</AdminDataTh>
          <AdminDataTh>Title</AdminDataTh>
          <AdminDataTh>Slug</AdminDataTh>
          <AdminDataTh>Status</AdminDataTh>
          <AdminDataTh>Category</AdminDataTh>
          <AdminDataTh>Published</AdminDataTh>
          <AdminDataTh>Actions</AdminDataTh>
        </tr>
      </AdminDataHead>
      <AdminDataBody>
        {posts.map((post) => (
          <AdminDataRow key={post.id}>
            <AdminDataTd className="font-mono text-xs text-white/50">{post.id}</AdminDataTd>
            <AdminDataTd className="max-w-md font-semibold text-white">{post.title}</AdminDataTd>
            <AdminDataTd className="font-mono text-xs text-white/55">/blog/{post.slug}/</AdminDataTd>
            <AdminDataTd>
              <span
                className={`inline-block rounded-full px-2 py-0.5 text-xs font-bold ${
                  post.status === 'published'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'bg-amber-500/20 text-amber-200'
                }`}
              >
                {post.status}
              </span>
            </AdminDataTd>
            <AdminDataTd className="text-white/70">{post.category || '—'}</AdminDataTd>
            <AdminDataTd className="text-xs text-white/55">{formatDate(post.publishedAt)}</AdminDataTd>
            <AdminDataTd>
              <AdminRowActions>
                <Link href={`/management/blog/${post.id}/edit`} className={adminBtnMuted}>
                  Edit
                </Link>
                <button
                  type="button"
                  disabled={updating === post.id}
                  onClick={() => togglePublish(post)}
                  className={adminBtnMuted}
                >
                  {updating === post.id ? '…' : post.status === 'published' ? 'Unpublish' : 'Publish'}
                </button>
                {post.status === 'published' ? (
                  <Link href={`/blog/${post.slug}`} target="_blank" className={adminBtnMuted}>
                    View
                  </Link>
                ) : null}
              </AdminRowActions>
            </AdminDataTd>
          </AdminDataRow>
        ))}
      </AdminDataBody>
    </AdminDataTable>
  );
}

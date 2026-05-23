'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { slugifyBlogTitle } from '@/lib/blog-utils';
import type { BlogPostRow } from '@/lib/blog-utils';

type FormState = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  body: string;
  status: 'draft' | 'published';
  metaTitle: string;
  metaDescription: string;
  author: string;
};

function toFormState(post?: BlogPostRow): FormState {
  if (!post) {
    return {
      title: '',
      slug: '',
      excerpt: '',
      category: '',
      body: '',
      status: 'draft',
      metaTitle: '',
      metaDescription: '',
      author: 'CRES Dynamics',
    };
  }
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt ?? '',
    category: post.category ?? '',
    body: post.body,
    status: post.status,
    metaTitle: post.metaTitle ?? '',
    metaDescription: post.metaDescription ?? '',
    author: post.author,
  };
}

export default function BlogEditorClient({ post }: { post?: BlogPostRow }) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(() => toFormState(post));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === 'title' && !post && (!prev.slug || prev.slug === slugifyBlogTitle(prev.title))) {
        next.slug = slugifyBlogTitle(value);
      }
      return next;
    });
  };

  const save = async (publish = false) => {
    setSaving(true);
    setError('');
    const status = publish ? 'published' : form.status;
    const payload = { ...form, status };

    try {
      const res = post
        ? await fetch(`/api/admin/blog/${post.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })
        : await fetch('/api/admin/blog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Save failed');
        return;
      }

      router.push('/management/blog');
      router.refresh();
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!post) return;
    if (!confirm('Delete this post permanently?')) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/blog/${post.id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Delete failed');
        return;
      }
      router.push('/management/blog');
      router.refresh();
    } finally {
      setSaving(false);
    }
  };

  const fieldClass =
    'w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[var(--teal-accent)] focus:outline-none';

  return (
    <div className="max-w-3xl space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <Link href="/management/blog" className="text-sm text-white/60 hover:text-white">
          ← Back to blog list
        </Link>
        {post?.status === 'published' ? (
          <Link
            href={`/blog/${post.slug}`}
            target="_blank"
            className="text-sm text-[var(--teal-accent)] hover:underline"
          >
            View live ↗
          </Link>
        ) : null}
      </div>

      <h1 className="text-xl md:text-2xl font-black">{post ? 'Edit post' : 'New blog post'}</h1>

      {error ? <p className="text-sm text-red-400">{error}</p> : null}

      <label className="block space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/60">Title *</span>
        <input className={fieldClass} value={form.title} onChange={(e) => update('title', e.target.value)} />
      </label>

      <label className="block space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/60">URL slug *</span>
        <input className={fieldClass} value={form.slug} onChange={(e) => update('slug', e.target.value)} />
        <span className="text-xs text-white/45">/blog/{form.slug || 'your-slug'}/</span>
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/60">Category</span>
          <input className={fieldClass} value={form.category} onChange={(e) => update('category', e.target.value)} />
        </label>
        <label className="block space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/60">Author</span>
          <input className={fieldClass} value={form.author} onChange={(e) => update('author', e.target.value)} />
        </label>
      </div>

      <label className="block space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/60">Excerpt</span>
        <textarea
          className={`${fieldClass} min-h-[80px]`}
          value={form.excerpt}
          onChange={(e) => update('excerpt', e.target.value)}
        />
      </label>

      <label className="block space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/60">Body *</span>
        <p className="text-xs text-white/45 mb-1">
          Use blank lines between paragraphs. Start a line with ## for a heading, or - for bullet lists.
        </p>
        <textarea
          className={`${fieldClass} min-h-[280px] font-mono text-[13px]`}
          value={form.body}
          onChange={(e) => update('body', e.target.value)}
        />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/60">SEO title</span>
          <input className={fieldClass} value={form.metaTitle} onChange={(e) => update('metaTitle', e.target.value)} />
        </label>
        <label className="block space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-white/60">Status</span>
          <select
            className={fieldClass}
            value={form.status}
            onChange={(e) => update('status', e.target.value as 'draft' | 'published')}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
      </div>

      <label className="block space-y-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/60">SEO description</span>
        <textarea
          className={`${fieldClass} min-h-[72px]`}
          value={form.metaDescription}
          onChange={(e) => update('metaDescription', e.target.value)}
        />
      </label>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="button"
          disabled={saving}
          onClick={() => save(false)}
          className="rounded-lg border border-white/20 px-4 py-2 text-sm font-bold hover:bg-white/10 disabled:opacity-50"
        >
          {saving ? 'Saving…' : 'Save draft'}
        </button>
        <button
          type="button"
          disabled={saving}
          onClick={() => save(true)}
          className="rounded-lg bg-[var(--orange-energy)] px-4 py-2 text-sm font-bold disabled:opacity-50"
        >
          {saving ? 'Publishing…' : 'Publish'}
        </button>
        {post ? (
          <button
            type="button"
            disabled={saving}
            onClick={remove}
            className="rounded-lg border border-red-500/40 px-4 py-2 text-sm font-bold text-red-300 hover:bg-red-500/10 disabled:opacity-50"
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  );
}

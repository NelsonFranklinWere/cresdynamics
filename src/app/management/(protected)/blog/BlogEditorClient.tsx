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

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">{children}</span>
  );
}

function NeuInput({
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      className={`admin-neu-inset w-full rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none ${className}`}
      {...props}
    />
  );
}

function NeuTextarea({
  className = '',
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string }) {
  return (
    <textarea
      className={`admin-neu-inset w-full resize-y rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none ${className}`}
      {...props}
    />
  );
}

function EditorActions({
  saving,
  post,
  onSave,
  onPublish,
  onDelete,
  className = '',
}: {
  saving: boolean;
  post?: BlogPostRow;
  onSave: () => void;
  onPublish: () => void;
  onDelete: () => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      <button
        type="button"
        disabled={saving}
        onClick={onSave}
        className="admin-neu-btn w-full rounded-xl px-4 py-3 text-sm font-bold text-white disabled:opacity-50 sm:w-auto sm:py-2.5"
      >
        {saving ? 'Saving…' : 'Save draft'}
      </button>
      <button
        type="button"
        disabled={saving}
        onClick={onPublish}
        className="admin-neu-btn-primary w-full rounded-xl px-4 py-3 text-sm font-bold disabled:opacity-50 sm:w-auto sm:py-2.5"
      >
        {saving ? 'Publishing…' : 'Publish'}
      </button>
      {post ? (
        <button
          type="button"
          disabled={saving}
          onClick={onDelete}
          className="admin-neu-btn-danger w-full rounded-xl px-4 py-3 text-sm font-bold disabled:opacity-50 sm:w-auto sm:py-2.5"
        >
          Delete
        </button>
      ) : null}
    </div>
  );
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

  const actionProps = {
    saving,
    post,
    onSave: () => save(false),
    onPublish: () => save(true),
    onDelete: remove,
  };

  return (
    <div className="flex flex-col lg:min-h-0 lg:flex-1 lg:overflow-hidden">
      <div className="admin-neu-scroll px-3 py-3 sm:px-5 sm:py-5 lg:min-h-0 lg:flex-1 lg:px-6">
        <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5 sm:gap-3">
          <Link
            href="/management/blog"
            className="admin-neu-btn inline-flex rounded-xl px-3 py-1.5 text-xs font-semibold text-white/75 hover:text-white"
          >
            ← Back
          </Link>
          {post?.status === 'published' ? (
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              className="admin-neu-btn inline-flex rounded-xl px-3 py-1.5 text-xs font-semibold text-[var(--teal-accent)]"
            >
              View live ↗
            </Link>
          ) : null}
        </div>

        {error ? (
          <p className="mb-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        ) : null}

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,300px)] xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="order-2 space-y-4 sm:space-y-5 lg:order-1">
            <label className="block space-y-2">
              <FieldLabel>Title *</FieldLabel>
              <NeuInput value={form.title} onChange={(e) => update('title', e.target.value)} />
            </label>

            <label className="block space-y-2">
              <FieldLabel>URL slug *</FieldLabel>
              <NeuInput value={form.slug} onChange={(e) => update('slug', e.target.value)} />
              <span className="block break-all text-xs text-white/40">/blog/{form.slug || 'your-slug'}/</span>
            </label>

            <label className="block space-y-2">
              <FieldLabel>Excerpt</FieldLabel>
              <NeuTextarea
                className="min-h-[72px] sm:min-h-[96px]"
                value={form.excerpt}
                onChange={(e) => update('excerpt', e.target.value)}
              />
            </label>

            <label className="block space-y-2">
              <FieldLabel>Body *</FieldLabel>
              <p className="text-xs leading-relaxed text-white/40">
                Use blank lines between paragraphs. Start a line with ## for a heading, or - for bullet lists.
              </p>
              <NeuTextarea
                className="min-h-[180px] font-mono text-[13px] leading-relaxed sm:min-h-[280px] lg:min-h-[360px]"
                value={form.body}
                onChange={(e) => update('body', e.target.value)}
              />
            </label>
          </div>

          <aside className="order-1 space-y-4 sm:space-y-5 lg:order-2">
            <div className="admin-neu-surface space-y-4 rounded-2xl p-4 sm:p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">Publishing</p>

              <label className="block space-y-2">
                <FieldLabel>Status</FieldLabel>
                <select
                  className="admin-neu-inset w-full rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none"
                  value={form.status}
                  onChange={(e) => update('status', e.target.value as 'draft' | 'published')}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </label>

              <label className="block space-y-2">
                <FieldLabel>Category</FieldLabel>
                <NeuInput value={form.category} onChange={(e) => update('category', e.target.value)} />
              </label>

              <label className="block space-y-2">
                <FieldLabel>Author</FieldLabel>
                <NeuInput value={form.author} onChange={(e) => update('author', e.target.value)} />
              </label>
            </div>

            <div className="admin-neu-surface space-y-4 rounded-2xl p-4 sm:p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">SEO</p>

              <label className="block space-y-2">
                <FieldLabel>SEO title</FieldLabel>
                <NeuInput value={form.metaTitle} onChange={(e) => update('metaTitle', e.target.value)} />
              </label>

              <label className="block space-y-2">
                <FieldLabel>SEO description</FieldLabel>
                <NeuTextarea
                  className="min-h-[72px] sm:min-h-[88px]"
                  value={form.metaDescription}
                  onChange={(e) => update('metaDescription', e.target.value)}
                />
              </label>
            </div>
          </aside>
        </div>

        <div aria-hidden className="admin-blog-editor-spacer sm:hidden" />
      </div>

      {/* Desktop / tablet: pinned action bar inside the panel */}
      <div className="admin-neu-action-bar hidden px-4 sm:block sm:px-5 lg:px-6">
        <EditorActions {...actionProps} />
      </div>

      {/* Mobile: fixed bottom bar so Publish is never clipped */}
      <div className="admin-neu-action-bar admin-neu-action-bar--mobile-fixed px-3 sm:hidden">
        <EditorActions {...actionProps} />
      </div>
    </div>
  );
}

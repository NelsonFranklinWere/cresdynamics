import { NextRequest, NextResponse } from 'next/server';
import { getAdminSessionFromRequest } from '@/lib/adminAuth';
import { slugifyBlogTitle, type BlogPostStatus } from '@/lib/blog-utils';
import { deleteBlogPost, updateBlogPost } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Body = {
  title?: string;
  slug?: string;
  excerpt?: string | null;
  category?: string | null;
  body?: string;
  status?: BlogPostStatus;
  metaTitle?: string | null;
  metaDescription?: string | null;
  author?: string;
};

export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { id: idStr } = await ctx.params;
  const id = Number(idStr);
  if (!Number.isFinite(id) || id <= 0) {
    return NextResponse.json({ ok: false, error: 'Invalid id' }, { status: 400 });
  }

  try {
    const body = (await req.json()) as Body;
    const patch: Body = {};

    if (body.title !== undefined) patch.title = body.title.trim();
    if (body.slug !== undefined) patch.slug = body.slug.trim() || slugifyBlogTitle(body.title || '');
    if (body.excerpt !== undefined) patch.excerpt = body.excerpt?.trim() || null;
    if (body.category !== undefined) patch.category = body.category?.trim() || null;
    if (body.body !== undefined) patch.body = body.body.trim();
    if (body.status !== undefined) patch.status = body.status === 'published' ? 'published' : 'draft';
    if (body.metaTitle !== undefined) patch.metaTitle = body.metaTitle?.trim() || null;
    if (body.metaDescription !== undefined) patch.metaDescription = body.metaDescription?.trim() || null;
    if (body.author !== undefined) patch.author = body.author.trim() || 'CRES Dynamics';

    const ok = await updateBlogPost(id, patch);
    if (!ok) {
      return NextResponse.json({ ok: false, error: 'Post not found or slug conflict' }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('admin blog patch:', e);
    return NextResponse.json({ ok: false, error: 'Update failed' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { id: idStr } = await ctx.params;
  const id = Number(idStr);
  if (!Number.isFinite(id) || id <= 0) {
    return NextResponse.json({ ok: false, error: 'Invalid id' }, { status: 400 });
  }

  const ok = await deleteBlogPost(id);
  if (!ok) {
    return NextResponse.json({ ok: false, error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}

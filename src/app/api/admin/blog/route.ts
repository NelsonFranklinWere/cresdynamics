import { NextRequest, NextResponse } from 'next/server';
import { getAdminSessionFromRequest } from '@/lib/adminAuth';
import { slugifyBlogTitle, type BlogPostStatus } from '@/lib/blog-utils';
import { createBlogPost } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Body = {
  title?: string;
  slug?: string;
  excerpt?: string;
  category?: string;
  body?: string;
  status?: BlogPostStatus;
  metaTitle?: string;
  metaDescription?: string;
  author?: string;
};

export async function POST(req: NextRequest) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = (await req.json()) as Body;
    const title = body.title?.trim();
    const postBody = body.body?.trim();
    if (!title || !postBody) {
      return NextResponse.json({ ok: false, error: 'Title and body are required' }, { status: 400 });
    }

    const slug = (body.slug?.trim() || slugifyBlogTitle(title)).toLowerCase();
    if (!slug) {
      return NextResponse.json({ ok: false, error: 'Invalid slug' }, { status: 400 });
    }

    const status: BlogPostStatus = body.status === 'published' ? 'published' : 'draft';

    const id = await createBlogPost({
      slug,
      title,
      excerpt: body.excerpt?.trim() || null,
      category: body.category?.trim() || null,
      body: postBody,
      status,
      metaTitle: body.metaTitle?.trim() || null,
      metaDescription: body.metaDescription?.trim() || null,
      author: body.author?.trim() || 'CRES Dynamics',
    });

    if (!id) {
      return NextResponse.json({ ok: false, error: 'Could not create post (slug may already exist)' }, { status: 409 });
    }

    return NextResponse.json({ ok: true, id, slug });
  } catch (e) {
    console.error('admin blog create:', e);
    return NextResponse.json({ ok: false, error: 'Create failed' }, { status: 500 });
  }
}

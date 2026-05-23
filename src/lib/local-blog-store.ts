import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { BlogPostInput, BlogPostRow, BlogPostStatus } from '@/lib/blog-utils';

const DATA_DIR = join(process.cwd(), '.data');
const BLOG_FILE = join(DATA_DIR, 'blog_posts.json');

type StoreFile = { nextId: number; items: BlogPostRow[] };

async function readStore(): Promise<StoreFile> {
  try {
    const raw = await readFile(BLOG_FILE, 'utf8');
    return JSON.parse(raw) as StoreFile;
  } catch {
    return { nextId: 1, items: [] };
  }
}

async function writeStore(data: StoreFile): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(BLOG_FILE, JSON.stringify(data, null, 2), 'utf8');
}

export function isLocalBlogStoreEnabled(): boolean {
  if (process.env.DISABLE_LOCAL_BLOG_STORE === 'true') return false;
  return process.env.USE_LOCAL_BLOG_STORE === 'true' || !process.env.DATABASE_URL;
}

function mapRow(item: BlogPostRow): BlogPostRow {
  return { ...item };
}

export async function listBlogPostsLocal(includeDrafts: boolean): Promise<BlogPostRow[]> {
  const store = await readStore();
  const items = store.items.filter((p) => includeDrafts || p.status === 'published');
  return items
    .sort((a, b) => {
      const aDate = a.publishedAt || a.createdAt;
      const bDate = b.publishedAt || b.createdAt;
      return bDate.localeCompare(aDate);
    })
    .map(mapRow);
}

export async function getBlogPostBySlugLocal(slug: string): Promise<BlogPostRow | null> {
  const store = await readStore();
  const found = store.items.find((p) => p.slug === slug);
  return found ? mapRow(found) : null;
}

export async function getBlogPostByIdLocal(id: number): Promise<BlogPostRow | null> {
  const store = await readStore();
  const found = store.items.find((p) => p.id === id);
  return found ? mapRow(found) : null;
}

export async function createBlogPostLocal(input: BlogPostInput): Promise<number | null> {
  const store = await readStore();
  if (store.items.some((p) => p.slug === input.slug)) return null;
  const now = new Date().toISOString();
  const id = store.nextId++;
  const row: BlogPostRow = {
    id,
    slug: input.slug,
    title: input.title,
    excerpt: input.excerpt ?? null,
    category: input.category ?? null,
    body: input.body,
    status: input.status,
    metaTitle: input.metaTitle ?? null,
    metaDescription: input.metaDescription ?? null,
    author: input.author ?? 'CRES Dynamics',
    publishedAt:
      input.status === 'published'
        ? input.publishedAt ?? now
        : input.publishedAt ?? null,
    createdAt: now,
    updatedAt: now,
  };
  store.items.push(row);
  await writeStore(store);
  return id;
}

export async function updateBlogPostLocal(id: number, input: Partial<BlogPostInput>): Promise<boolean> {
  const store = await readStore();
  const idx = store.items.findIndex((p) => p.id === id);
  if (idx < 0) return false;
  const current = store.items[idx];
  if (input.slug && input.slug !== current.slug && store.items.some((p) => p.slug === input.slug)) {
    return false;
  }
  const now = new Date().toISOString();
  const nextStatus = (input.status ?? current.status) as BlogPostStatus;
  const publishedAt =
    nextStatus === 'published'
      ? input.publishedAt ?? current.publishedAt ?? now
      : input.publishedAt === null
        ? null
        : input.publishedAt ?? current.publishedAt;

  store.items[idx] = {
    ...current,
    slug: input.slug ?? current.slug,
    title: input.title ?? current.title,
    excerpt: input.excerpt !== undefined ? input.excerpt ?? null : current.excerpt,
    category: input.category !== undefined ? input.category ?? null : current.category,
    body: input.body ?? current.body,
    status: nextStatus,
    metaTitle: input.metaTitle !== undefined ? input.metaTitle ?? null : current.metaTitle,
    metaDescription:
      input.metaDescription !== undefined ? input.metaDescription ?? null : current.metaDescription,
    author: input.author ?? current.author,
    publishedAt,
    updatedAt: now,
  };
  await writeStore(store);
  return true;
}

export async function deleteBlogPostLocal(id: number): Promise<boolean> {
  const store = await readStore();
  const before = store.items.length;
  store.items = store.items.filter((p) => p.id !== id);
  if (store.items.length === before) return false;
  await writeStore(store);
  return true;
}

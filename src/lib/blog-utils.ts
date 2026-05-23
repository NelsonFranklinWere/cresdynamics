export function slugifyBlogTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export type BlogPostStatus = 'draft' | 'published';

export type BlogPostRow = {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  body: string;
  status: BlogPostStatus;
  metaTitle: string | null;
  metaDescription: string | null;
  author: string;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type BlogPostInput = {
  slug: string;
  title: string;
  excerpt?: string | null;
  category?: string | null;
  body: string;
  status: BlogPostStatus;
  metaTitle?: string | null;
  metaDescription?: string | null;
  author?: string;
  publishedAt?: string | null;
};

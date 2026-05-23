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

const CARD_EXCERPT_MAX = 200;

/** Plain text from markdown/HTML-ish blog content */
export function stripBlogMarkup(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/#{1,6}\s+/g, '')
    .replace(/[*_~]/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function estimateReadTimeMinutes(body: string): number {
  const words = stripBlogMarkup(body).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Short preview for index cards — never dump the full article */
export function blogCardExcerpt(
  excerpt: string | null | undefined,
  body: string,
  maxLen = CARD_EXCERPT_MAX
): string {
  const fromExcerpt = excerpt ? stripBlogMarkup(excerpt) : '';
  const fromBody = stripBlogMarkup(body);
  const candidate =
    fromExcerpt.length > 0 && fromExcerpt.length <= maxLen * 1.5
      ? fromExcerpt
      : fromExcerpt.length > maxLen
        ? fromExcerpt
        : fromBody || fromExcerpt;

  if (candidate.length <= maxLen) return candidate;
  const cut = candidate.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

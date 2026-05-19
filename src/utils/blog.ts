import fs from "fs";
import matter from "gray-matter";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
  coverImage: string | null;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => {
      const post = getPostBySlug(slug);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, ...meta } = post;
      return meta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ? String(data.date) : "",
    description: data.description ?? "",
    author: data.author ?? "Union Photo Co.",
    tags: Array.isArray(data.tags)
      ? data.tags
      : Array.isArray(data.topics)
      ? data.topics
      : [],
    coverImage: data.coverImage ?? null,
    content,
  };
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function tagToSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function getAllTags(): { tag: string; slug: string }[] {
  const posts = getAllPosts();
  const seen = new Map<string, string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      const slug = tagToSlug(tag);
      if (!seen.has(slug)) seen.set(slug, tag);
    });
  });
  return Array.from(seen.entries()).map(([slug, tag]) => ({ slug, tag }));
}

export function getPostsByTagSlug(
  tagSlug: string,
): { tag: string; posts: BlogPostMeta[] } | null {
  const posts = getAllPosts();
  const filtered = posts.filter((p) =>
    p.tags.some((t) => tagToSlug(t) === tagSlug),
  );
  if (filtered.length === 0) return null;
  const tag = filtered[0].tags.find((t) => tagToSlug(t) === tagSlug) ?? tagSlug;
  return { tag, posts: filtered };
}

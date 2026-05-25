import { blogPosts } from "@/lib/constants";
import type { BlogPostData } from "@/lib/constants";

export type { BlogPostData };

export function getBlogPosts(): BlogPostData[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPostData | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogCategories(): string[] {
  return ["الكل", ...new Set(blogPosts.map((p) => p.category))];
}

import type { MetadataRoute } from "next";
import { services, projects, blogPosts, aiSolutions } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://promksa.com";

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/ai-solutions", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  const servicePages = services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.7 }));
  const aiPages = aiSolutions.map((s) => ({ path: `/ai-solutions/${s.slug}`, priority: 0.7 }));
  const projectPages = projects.map((p) => ({ path: `/portfolio/${p.slug}`, priority: 0.6 }));
  const blogPages = blogPosts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.5 }));

  const allPages = [...staticPages, ...servicePages, ...aiPages, ...projectPages, ...blogPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));
}

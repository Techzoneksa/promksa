import { projects } from "@/lib/constants";
import type { ProjectData } from "@/lib/constants";

export type { ProjectData };

export function getProjects(): ProjectData[] {
  return projects;
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectFilters(): string[] {
  return ["الكل", ...new Set(projects.map((p) => p.category))];
}

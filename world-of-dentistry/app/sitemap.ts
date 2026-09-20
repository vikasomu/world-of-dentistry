import type { MetadataRoute } from "next";
import {
  treatments,
  doctors,
  blogPosts,
} from "@/data/clinic";

const baseUrl = "https://www.worldofdentistry.co.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/appointment",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
    "/disclaimer",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const treatmentPages = treatments.map((t) => ({
    url: `${baseUrl}/treatments/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const doctorPages = doctors.map((d) => ({
    url: `${baseUrl}/doctors/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt || p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...treatmentPages, ...doctorPages, ...blogPages];
}

import type { MetadataRoute } from "next";
import { getAllPosts } from "./lib/mdx";
import { SITE_URL } from "./lib/site";

// Fixed so lastmod only changes when a page really changes; bump it when you edit a page.
const SITE_UPDATED = new Date("2026-10-03");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/product`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/setup`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/terms-of-service`, lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/refund-policy`, lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/dmca`, lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    ...getAllPosts().map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

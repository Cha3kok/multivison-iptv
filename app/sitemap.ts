import type { MetadataRoute } from "next";
import { getAllPosts } from "./lib/mdx";
import { products } from "./lib/products";
import { SITE_URL } from "./lib/site";

// Fixed so lastmod only changes when a page really changes; bump it when you edit a page.
// changefreq and priority are left out on purpose: Google ignores both.
const SITE_UPDATED = new Date("2026-10-03");

const staticPages = [
  "",
  "/product",
  "/blog",
  "/setup",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/refund-policy",
  "/dmca",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map((path) => ({ url: `${SITE_URL}${path}`, lastModified: SITE_UPDATED })),
    ...products.map((product) => ({
      url: `${SITE_URL}/product/${product.slug}`,
      lastModified: SITE_UPDATED,
    })),
    ...getAllPosts().map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updated ?? post.date),
    })),
  ];
}

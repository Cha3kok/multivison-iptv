import type { MetadataRoute } from "next";

// Search and AI answer-engine crawlers are named explicitly so the site stays
// citable in Google AI Overviews, ChatGPT, Perplexity, Claude and Copilot even if
// the catch-all rule is tightened later.
const aiCrawlers = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Applebot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: aiCrawlers, allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://multivision-iptv.com/sitemap.xml",
    host: "https://multivision-iptv.com",
  };
}

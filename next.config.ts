import type { NextConfig } from "next";

// Old UK-focused article URLs → their US replacements. The bare root-level paths
// were linked by mistake from old articles, so they're redirected too.
const movedPosts: Record<string, string> = {
  "iptv-subscription-uk": "iptv-subscription-usa",
  "best-iptv-service-uk-2026": "best-iptv-service-usa",
  "cheap-iptv-subscription-uk": "cheap-iptv-usa",
  "best-iptv-app-firestick-2025": "best-iptv-apps-firestick",
  "iptv-android-box-uk": "best-android-box-for-iptv",
  "iptv-android-tv-uk": "iptv-android-tv-setup",
  "iptv-mag-box-setup-uk": "mag-box-iptv-setup",
  "how-to-watch-premier-league-iptv": "watch-live-sports-without-cable",
  "iptv-on-iphone-uk": "iptv-on-iphone-ipad",
  "iptv-vs-netflix-uk": "iptv-vs-streaming-apps",
  "watch-sky-sports-without-sky-subscription": "cut-the-cord-switch-to-iptv",
  "what-is-iptv-complete-guide": "what-is-iptv",
  "iptv-setup-guide-smart-tv-2025": "iptv-smart-tv-setup",
  "iptv-vs-satellite-tv-comparison": "iptv-vs-cable-tv",
};

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return Object.entries(movedPosts).flatMap(([from, to]) => [
      { source: `/blog/${from}`, destination: `/blog/${to}`, permanent: true },
      { source: `/${from}`, destination: `/blog/${to}`, permanent: true },
    ]);
  },
};

export default nextConfig;

// The host Vercel serves the site from. Canonicals, the sitemap and structured
// data must all use it, so a crawler never lands on a URL that redirects.
export const SITE_URL = "https://www.multivision-iptv.com";

// Mirrors /refund-policy (refund within 48 hours if the service doesn't work as described).
export const returnPolicySchema = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "US",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 2,
  returnFees: "https://schema.org/FreeReturn",
  refundType: "https://schema.org/FullRefund",
  merchantReturnLink: `${SITE_URL}/refund-policy`,
};

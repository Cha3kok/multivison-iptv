import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IptvUsaGuide from "./components/IptvUsaGuide";
import Features from "./components/Features";
import Devices from "./components/Devices";
import Setup from "./components/Setup";
import Channels from "./components/Channels";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import GuidesPreview from "./components/GuidesPreview";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyBar from "./components/StickyBar";
import JsonLd from "./components/JsonLd";
import { products } from "./lib/products";
import { homeFaqs } from "./lib/faqs";
import { SITE_URL, returnPolicySchema } from "./lib/site";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Multivision IPTV",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Multivision IPTV is an IPTV subscription service for the USA, streaming 50,000+ live channels and 200,000+ movies and series to any device.",
  areaServed: { "@type": "Country", name: "United States" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "multivisonsupport@gmail.com",
    telephone: "+212710141872",
    availableLanguage: "English",
    hoursAvailable: "Mo-Su 00:00-23:59",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Multivision IPTV",
  url: SITE_URL,
  inLanguage: "en-US",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Multivision IPTV USA Subscription",
  description:
    "IPTV subscription for the USA with 50,000+ live channels, 200,000+ movies and series on demand, up to 4K quality, 7-day catch-up and 24/7 support. No contract.",
  image: `${SITE_URL}/og-image.png`,
  brand: { "@type": "Brand", name: "Multivision IPTV" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: Math.min(...products.map((p) => p.price)).toFixed(2),
    highPrice: Math.max(...products.map((p) => p.price)).toFixed(2),
    offerCount: products.length,
    offers: products.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      hasMerchantReturnPolicy: returnPolicySchema,
      url: `${SITE_URL}/product/${p.slug}`,
      areaServed: { "@type": "Country", name: "United States" },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main>
        <Hero />
        <IptvUsaGuide />
        <Features />
        <Pricing />
        <Devices />
        <Setup />
        <Channels />
        <GuidesPreview />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyBar />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IptvUsaGuide from "./components/IptvUsaGuide";
import Features from "./components/Features";
import Devices from "./components/Devices";
import Setup from "./components/Setup";
import Channels from "./components/Channels";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyBar from "./components/StickyBar";
import JsonLd from "./components/JsonLd";
import OfferBanner from "./components/OfferBanner";
import SocialProof from "./components/SocialProof";
import { products } from "./lib/products";
import { homeFaqs } from "./lib/faqs";

const BASE_URL = "https://multivision-iptv.com";

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Multivision IPTV",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
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
  "@id": `${BASE_URL}/#website`,
  name: "Multivision IPTV",
  url: BASE_URL,
  inLanguage: "en-US",
  publisher: { "@id": `${BASE_URL}/#organization` },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Multivision IPTV USA Subscription",
  description:
    "IPTV subscription for the USA with 50,000+ live channels, 200,000+ movies and series on demand, up to 4K quality, 7-day catch-up and 24/7 support. No contract.",
  image: `${BASE_URL}/og-image.png`,
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
      url: `${BASE_URL}/product/${p.slug}`,
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
      <OfferBanner />
      <Navbar />
      <main>
        <Hero />
        <IptvUsaGuide />
        <Features />
        <Pricing />
        <Devices />
        <Setup />
        <Channels />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyBar />
      <SocialProof />
    </>
  );
}

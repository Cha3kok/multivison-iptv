export type WhoIsItForItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  period: string;
  badge?: string;
  highlight: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  whatsappMessage: string;
  whoIsItFor: WhoIsItForItem[];
  faq: FaqItem[];
  testimonials: Testimonial[];
};

export const products: Product[] = [
  {
    slug: "1-month-multivision-iptv",
    name: "1 Month Multivision IPTV",
    price: 19.99,
    period: "one-time payment",
    highlight: false,
    metaTitle: "1 Month IPTV USA Plan — $19.99 | 50,000+ Channels in 4K",
    metaDescription:
      "Try IPTV in the USA for one month: $19.99 for 50,000+ live channels, 4K Ultra HD and 7-day catch-up on any device. No contract, no auto-renewal. Free 3-hour trial.",
    h1: "1 Month IPTV USA Plan — $19.99 One-Time Payment",
    heroSubtitle:
      "The easiest way to try IPTV in the USA. Full access to 50,000+ live channels, 4K streaming and 7-day catch-up TV for $19.99. No contract, no recurring charges.",
    whatsappMessage: "multivision-iptv.com - I'd like to subscribe to the 1 Month Multivision IPTV plan ($19.99)",
    whoIsItFor: [
      {
        title: "First-Time IPTV Users",
        description:
          "Not sure if IPTV is right for you? The 1-month plan gives you a full month to explore all 50,000+ channels, test the 4K streams, and discover how IPTV compares to your current TV setup — completely commitment-free.",
      },
      {
        title: "Cord-Cutters Testing the Switch",
        description:
          "Thinking about canceling cable? Run Multivision IPTV alongside your current package for a month and compare picture quality, channel selection and reliability before you cancel anything.",
      },
      {
        title: "Seasonal or Event Viewers",
        description:
          "Want access for a specific event — a playoff run, a big fight night, or a TV season finale? A single month of Multivision IPTV covers you perfectly without locking you into a longer commitment.",
      },
    ],
    faq: [
      {
        q: "Is the 1-month plan really no contract?",
        a: "Yes, completely. You pay $19.99 once and get access for exactly 30 days. There is no automatic renewal, no recurring charge, and no cancellation needed. When your month expires, it simply stops — you choose whether to renew.",
      },
      {
        q: "Can I upgrade to a longer plan after my month ends?",
        a: "Absolutely. Once your 1-month period ends, you can subscribe to any of our longer plans — 3, 6, 12, or 24 months. Just message us on WhatsApp and we'll get you set up on the plan of your choice.",
      },
      {
        q: "Does the 1-month plan include all the same channels as longer plans?",
        a: "Yes — all plans include the full channel lineup. You get 50,000+ live channels, 200,000+ VODs, 4K quality, 7-day catch-up, and all features. The only difference between plans is the duration and price per month.",
      },
      {
        q: "How quickly will I get access after payment?",
        a: "Activation is instant. Once your payment is confirmed, we send your M3U credentials and setup guide via WhatsApp within minutes — typically under 10 minutes, 24 hours a day.",
      },
      {
        q: "Is there a refund if I'm not satisfied?",
        a: "Yes. We offer a 7-day refund guarantee on all plans. If you're not happy for any reason within the first 7 days, contact us on WhatsApp and we'll refund you without question.",
      },
    ],
    testimonials: [
      {
        name: "James T.",
        city: "Manchester",
        rating: 5,
        text: "I just wanted to test IPTV before committing and the 1-month plan was perfect. The picture quality on the sports channels was genuinely better than my old satellite. I've since upgraded to the 6-month plan.",
      },
      {
        name: "Priya S.",
        city: "Birmingham",
        rating: 5,
        text: "Signed up for one month while visiting family in the UK. Got set up in about 5 minutes and had hundreds of channels to watch. Brilliant value for £15 — I'll definitely subscribe again next visit.",
      },
      {
        name: "Daniel H.",
        city: "Leeds",
        rating: 5,
        text: "Used the 1-month plan to watch the Champions League knockout stages. Zero buffering on any game, even the late-night European ones. Support was fast when I had a question on day one.",
      },
    ],
  },
  {
    slug: "3-month-multivision-iptv",
    name: "3 Months Multivision IPTV",
    price: 39.99,
    period: "one-time payment",
    highlight: false,
    metaTitle: "3 Month IPTV USA Plan — $39.99 | Just $13.33/Month",
    metaDescription:
      "3 months of IPTV in the USA for $39.99 — just $13.33/month. 50,000+ live channels, 4K Ultra HD, 7-day catch-up. No contract, instant activation. Free 3-hour trial.",
    h1: "3 Month IPTV USA Plan — $39.99 One-Time Payment",
    heroSubtitle:
      "Three months of premium IPTV for $39.99 — saving you $19.98 compared with paying monthly. Ideal for casual viewers who want reliable live TV without a long-term commitment.",
    whatsappMessage: "multivision-iptv.com - I'd like to subscribe to the 3 Month Multivision IPTV plan ($39.99)",
    whoIsItFor: [
      {
        title: "Casual TV Viewers",
        description:
          "You don't watch TV every single day, but when you do, you want quality. The 3-month plan gives you full access to 50,000+ channels and 200,000+ VODs at a per-month cost that beats rolling monthly plans, without committing to half a year or more.",
      },
      {
        title: "College Students",
        description:
          "A college semester lasts roughly three months — and so does this plan. Cover the whole semester with live sports, entertainment channels and on-demand movies. Perfect for dorms and shared apartments where nobody wants a cable contract.",
      },
      {
        title: "Americans Traveling or Working Abroad",
        description:
          "On assignment overseas for a few months? This plan keeps you connected to American TV — entertainment, news and live sports — wherever you are in the world. Our service works globally without a VPN.",
      },
    ],
    faq: [
      {
        q: "How much does the 3-month plan save me vs monthly?",
        a: "At $39.99 for 3 months, you pay $13.33 per month. Three single months would cost $59.97, so you save $19.98 over the same period. It's the entry point for real savings.",
      },
      {
        q: "Can multiple people in my house use the same subscription?",
        a: "Yes. Our plans support 1 to 4 simultaneous connections. You can watch on your TV, your partner on a tablet, and kids on a phone — all at the same time, all from the same subscription.",
      },
      {
        q: "Will I lose access at the end of the 3 months or get auto-charged?",
        a: "There are no automatic renewals. When your 3 months are up, your access simply expires. We may send you a renewal reminder, but you'll never be charged without your explicit request.",
      },
      {
        q: "What happens if I have technical issues during my 3 months?",
        a: "Our 24/7 WhatsApp support is available throughout your entire subscription. Most issues are resolved within minutes. We also offer a 7-day refund guarantee if you're unhappy for any reason.",
      },
    ],
    testimonials: [
      {
        name: "Sophie R.",
        city: "Bristol",
        rating: 5,
        text: "The 3-month plan was exactly what I needed — I'm a student and wanted TV for the term. Loads of channels, brilliant sports coverage, and the setup guide was really clear. Worth every penny.",
      },
      {
        name: "Ahmed K.",
        city: "London",
        rating: 5,
        text: "I was sceptical but the trial convinced me. Signed up for 3 months and I've had no issues at all. Entertainment, news, all the sports channels — all working perfectly. Will probably go for 6 months next time.",
      },
      {
        name: "Claire W.",
        city: "Edinburgh",
        rating: 4,
        text: "Good value for 3 months. The catch-up TV feature is really useful — I work shifts so I can never watch things live. Being able to go back 7 days is a game changer. Solid service.",
      },
    ],
  },
  {
    slug: "6-month-multivision-iptv",
    name: "6 Months Multivision IPTV",
    price: 55.99,
    period: "one-time payment",
    badge: "Most Popular",
    highlight: true,
    metaTitle: "6 Month IPTV USA Plan — $55.99 | Most Popular, $9.33/Month",
    metaDescription:
      "6 months of IPTV in the USA for $55.99 — only $9.33/month. Our most popular plan: 50,000+ live channels, 4K Ultra HD, 7-day catch-up and anti-freeze servers. Instant setup.",
    h1: "6 Month IPTV USA Plan — $55.99 One-Time Payment",
    heroSubtitle:
      "Our most popular plan for good reason. Six months of premium IPTV for $55.99 — that's $9.33 per month. The best balance of savings and flexibility for regular viewers.",
    whatsappMessage: "multivision-iptv.com - I'd like to subscribe to the 6 Month Multivision IPTV plan ($55.99)",
    whoIsItFor: [
      {
        title: "Regular TV Watchers",
        description:
          "You watch TV most evenings and weekends. You want reliable access to live sports, drama, documentaries, and news without paying cable TV prices. At $9.33/month, the 6-month plan is the sweet spot — great savings, still flexible enough to reassess in six months.",
      },
      {
        title: "Sports Season Followers",
        description:
          "A pro football season runs from September to February, and basketball and hockey run from October into spring. A 6-month plan covers a full season from kickoff through the playoffs, so you never miss the games that matter.",
      },
      {
        title: "Families Replacing Cable TV",
        description:
          "For families thinking about ditching their satellite or cable subscription, 6 months is the ideal trial period. It's long enough to properly evaluate whether IPTV meets all your household's needs — kids' channels, sports, reality shows, news — before making a longer commitment.",
      },
    ],
    faq: [
      {
        q: "Why is the 6-month plan the most popular?",
        a: "It offers the best balance of savings and flexibility. At $9.33 per month you're saving 53% compared with the monthly plan, but you're not committing to a full year upfront. Most customers who try it either renew for another 6 months or upgrade to the 12-month plan.",
      },
      {
        q: "Does the 6-month plan support 4K streaming?",
        a: "Yes — all plans include our full quality tier. Where channels broadcast in 4K UHD, you'll receive 4K. Where they broadcast in FHD or HD, you'll receive those. Quality is never artificially limited on any plan.",
      },
      {
        q: "Can I use the service in another country for part of the 6 months?",
        a: "Absolutely. Our service works worldwide — on vacation in Mexico, on a work trip to Europe, or living abroad — your American channels travel with you. No VPN required.",
      },
      {
        q: "How does the 7-day catch-up work on this plan?",
        a: "Catch-up TV lets you replay any show from the last 7 days on supported channels. Browse the EPG guide, find what you missed, and play it back on demand. It works on all devices — TV, phone, tablet, or laptop.",
      },
      {
        q: "What if I want to add a second device connection?",
        a: "All plans include multi-device support (1-4 connections). If you want to connect additional devices simultaneously, just let us know when you subscribe. We'll configure your subscription for the number of screens you need.",
      },
    ],
    testimonials: [
      {
        name: "Mark B.",
        city: "Liverpool",
        rating: 5,
        text: "Been on the 6-month plan for over a year now — keep renewing it every time. Live sport in 4K with zero buffering. My mates can't believe how much I'm saving. Should have switched years ago.",
      },
      {
        name: "Emma F.",
        city: "Cardiff",
        rating: 5,
        text: "switched from satellite TV after 8 years and genuinely haven't missed it. Everything I was watching on satellite is here, plus loads more. The whole family uses it — different devices, different rooms, no issues.",
      },
      {
        name: "Tariq M.",
        city: "London",
        rating: 5,
        text: "Set up in under 10 minutes on my Firestick. The Arabic channels are incredible — far more selection than I had on satellite. The 6-month price is unbeatable. Customer service replied within minutes on WhatsApp.",
      },
    ],
  },
  {
    slug: "12-month-multivision-iptv",
    name: "12 Months Multivision IPTV",
    price: 79.99,
    period: "one-time payment",
    highlight: false,
    metaTitle: "12 Month IPTV USA Plan — $79.99 | Only $6.67/Month",
    metaDescription:
      "A full year of IPTV in the USA for $79.99 — just $6.67/month. 50,000+ live channels, 4K streaming and 7-day catch-up for committed viewers. Instant setup.",
    h1: "12 Month IPTV USA Plan — $79.99 One-Time Payment",
    heroSubtitle:
      "A full year of premium IPTV for $79.99. At $6.67 per month, this is the plan for viewers who know they love IPTV and want guaranteed access across every sports season and TV schedule for the year ahead.",
    whatsappMessage: "multivision-iptv.com - I'd like to subscribe to the 12 Month Multivision IPTV plan ($79.99)",
    whoIsItFor: [
      {
        title: "Committed TV Households",
        description:
          "You and your family watch TV every day. You've already tried IPTV and know it works for you. The 12-month plan gives you an entire year of uninterrupted access for $79.99 — about what many households pay for a single month of cable — with zero admin for 12 months.",
      },
      {
        title: "Sports Superfans",
        description:
          "A full year covers every season: pro and college football in the fall, basketball and hockey through the winter, baseball all summer, plus soccer, motorsport, golf, tennis and every big fight night. Subscribe once and never renew mid-season.",
      },
      {
        title: "Families Wanting the Best Value",
        description:
          "For families with children, a year-round subscription at $6.67 per month is far cheaper than any cable or satellite alternative. Kids' channels, educational content, family movies, and live sports — all covered for every member of the family throughout the year.",
      },
    ],
    faq: [
      {
        q: "Is $6.67/month really the total cost with no hidden fees?",
        a: "Yes. $79.99 is the complete cost — you pay once and get 365 days of access. No setup fee, no hardware cost, no installation charge, no hidden extras. What you see is what you pay.",
      },
      {
        q: "What happens when my 12 months expire?",
        a: "Your subscription simply ends. There is no auto-renewal and no surprise charges. Around the time your subscription is ending, we'll send a reminder so you can renew if you wish — on whichever plan suits you at that point.",
      },
      {
        q: "Does the 12-month plan cover all sports seasons?",
        a: "Yes. A 12-month subscription runs from your activation date, covering all sporting events in that period. Football, basketball, baseball, hockey, soccer, motorsport, golf, tennis, boxing and MMA — if it's broadcast on the channels in our lineup, you'll have access.",
      },
      {
        q: "Can I share my 12-month subscription with family?",
        a: "Yes — our plans support up to 4 simultaneous connections. Your whole household can watch on different devices at the same time. One subscription, multiple screens.",
      },
      {
        q: "What internet speed do I need for reliable 12-month access?",
        a: "We recommend 10Mbps minimum for HD and 25Mbps for 4K. Most US home internet plans easily exceed this. If you're in a rural area with slower speeds, SD streams work at just 5Mbps.",
      },
    ],
    testimonials: [
      {
        name: "Gareth P.",
        city: "Swansea",
        rating: 5,
        text: "Been on the 12-month plan for two years running. At £5 a month I can't justify going back to satellite TV. The whole football season covered, all the boxing, F1 — everything. Genuinely the best TV decision I've made.",
      },
      {
        name: "Naomi A.",
        city: "Nottingham",
        rating: 5,
        text: "Signed up as a family and we've never looked back. The kids love the cartoon channels, my husband watches football, and I catch up on dramas. All on different devices at the same time. Amazing at this price.",
      },
      {
        name: "Robert C.",
        city: "Glasgow",
        rating: 5,
        text: "I was spending £85/month on satellite TV. Now I pay £60 once a year. Same channels, better picture on 4K, and I actually get more content. The setup guide was brilliant — had it running on my Samsung TV in minutes.",
      },
    ],
  },
  {
    slug: "24-month-multivision-iptv",
    name: "24 Months Multivision IPTV",
    price: 129.99,
    period: "one-time payment",
    badge: "Best Value",
    highlight: false,
    metaTitle: "24 Month IPTV USA Plan — $129.99 | Best Value, $5.42/Month",
    metaDescription:
      "Two years of IPTV in the USA for $129.99 — just $5.42/month, our best value plan. 50,000+ live channels, 4K streaming and 7-day catch-up with one payment. Instant setup.",
    h1: "24 Month IPTV USA Plan — $129.99 One-Time Payment",
    heroSubtitle:
      "Our best value IPTV subscription. Two full years of premium Multivision IPTV for $129.99 — just $5.42 per month. One payment, two years of 50,000+ channels, 4K streaming, and zero hassle.",
    whatsappMessage: "multivision-iptv.com - I'd like to subscribe to the 24 Month Multivision IPTV plan ($129.99)",
    whoIsItFor: [
      {
        title: "Long-Term IPTV Users",
        description:
          "You've been using IPTV for a while — maybe you're already on a 6 or 12-month plan — and you know it's your permanent TV solution. The 24-month plan is the logical next step: pay once, forget about renewals for two years, and enjoy the lowest per-month cost we offer.",
      },
      {
        title: "Large Households and Extended Families",
        description:
          "Multi-device households with grandparents, parents, and kids all watching different things benefit most from the 24-month plan. You're maximizing the value of every device connection over two years, making the already-low monthly cost even more impressive per viewer.",
      },
      {
        title: "Budget-Conscious Streamers",
        description:
          "If your priority is absolute lowest cost without sacrificing quality, 24 months is the plan. At $5.42/month you're getting the same 4K channels, the same 7-day catch-up, the same 24/7 support — for less than the cost of a weekly coffee. Nothing else comes close.",
      },
    ],
    faq: [
      {
        q: "What makes the 24-month plan the best value?",
        a: "At $5.42 per month, it's our lowest per-month price. Compared with paying $19.99 every month, you save $349.77 over the same two-year period. You also have the convenience of not renewing for two full years — pay once and you're done.",
      },
      {
        q: "Is the service guaranteed to work for the full 24 months?",
        a: "Yes. We have been operating for years with 99.9% uptime. Your subscription is fully supported for the entire 24-month period. If any technical issue arises, our 24/7 support team will resolve it — we have every incentive to keep you happy for the long term.",
      },
      {
        q: "Do I get access to new channels added during my 24 months?",
        a: "Yes. Our channel lineup is continuously updated with new channels and content at no extra cost. When we add new channels or improve the service, existing subscribers benefit automatically — no upgrade needed.",
      },
      {
        q: "What devices will I be able to use over 24 months?",
        a: "Our service uses standard M3U/Xtream Codes format that works with all major IPTV players. As new devices and apps are released over your 24 months, you'll be able to use them. Your login credentials remain valid regardless of which device or app you use.",
      },
      {
        q: "Can I gift the 24-month plan to someone else?",
        a: "Yes. The 24-month plan makes an excellent gift for family members — particularly parents or grandparents who want to stop paying for cable. We can configure the subscription and provide a simple setup guide tailored to their specific device.",
      },
    ],
    testimonials: [
      {
        name: "Kevin O.",
        city: "Dublin",
        rating: 5,
        text: "I'm an Irish lad who loves British TV — Premier League, Bake Off, the lot. The 24-month plan means I don't think about renewing for two years. At £4.58 a month it's a no-brainer. Best purchase I've made.",
      },
      {
        name: "Linda M.",
        city: "Newcastle",
        rating: 5,
        text: "I got this for my mum who was paying £70/month for satellite TV. We set it up on her Smart TV and she hasn't noticed any difference in quality — except she can now watch MORE channels. She's saving over £1,500 over two years.",
      },
      {
        name: "Hassan B.",
        city: "Leicester",
        rating: 5,
        text: "Third time on the 24-month plan. Every time it expires I just renew immediately — it's that good. The Arabic and Asian channel selection is unmatched. My whole family watches together. Never had a single outage.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}

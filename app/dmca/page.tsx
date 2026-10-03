import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "DMCA & Copyright Policy",
  description: "Multivision IPTV DMCA and copyright policy: how to submit a takedown notice, what to include, counter-notifications and our repeat infringer policy.",
  alternates: { canonical: "https://multivision-iptv.com/dmca" },
  openGraph: {
    title: "DMCA Policy — Multivision IPTV",
    description: "How to report copyright infringement to Multivision IPTV.",
    url: "https://multivision-iptv.com/dmca",
  },
};

export default function DmcaPolicy() {
  return (
    <LegalPage
      badge="Legal"
      title="DMCA & Copyright Policy"
      subtitle="We respect the intellectual property rights of others. Here's how to report content you believe infringes your copyright."
      lastUpdated="3 October 2026"
      sections={[
        {
          heading: "Our Commitment",
          body: "Multivision IPTV respects the rights of copyright holders and expects its users to do the same. We respond to notices of alleged copyright infringement that comply with the Digital Millennium Copyright Act (17 U.S.C. § 512), the UK Copyright, Designs and Patents Act 1988, and other applicable laws. When we receive a valid notice, we act promptly to remove or disable access to the material in question.",
        },
        {
          heading: "How to Submit a Takedown Notice",
          body: "If you are a copyright owner, or are authorized to act on behalf of one, and you believe that material made available through our website or service infringes your copyright, please send a written notice to our designated copyright agent by email at multivisonsupport@gmail.com with the subject line \"DMCA Takedown Notice\".",
        },
        {
          heading: "What Your Notice Must Include",
          body: [
            "A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.",
            "Identification of the copyrighted work you claim has been infringed.",
            "Identification of the material you claim is infringing, with enough information for us to locate it (for example, a URL or a description of where it appears).",
            "Your contact information: full name, postal address, telephone number and email address.",
            "A statement that you have a good-faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.",
            "A statement that the information in your notice is accurate and, under penalty of perjury, that you are the copyright owner or authorized to act on the owner's behalf.",
          ],
        },
        {
          heading: "What Happens Next",
          body: "Once we receive a complete notice, we will review it, remove or disable access to the identified material where appropriate, and where possible notify the user responsible. Incomplete notices may delay our response, so please make sure every item above is included.",
        },
        {
          heading: "Counter-Notification",
          body: [
            "If you believe material was removed by mistake or misidentification, you may send a counter-notification to multivisonsupport@gmail.com.",
            "It must include your physical or electronic signature, identification of the removed material and where it appeared, and a statement under penalty of perjury that you have a good-faith belief it was removed by mistake or misidentification.",
            "It must also include your name, address and telephone number, and a statement that you consent to the jurisdiction of the appropriate court and will accept service of process from the person who submitted the original notice.",
            "On receiving a valid counter-notification, we may restore the material unless the original complainant informs us that they have filed a court action.",
          ],
        },
        {
          heading: "Repeat Infringers",
          body: "In appropriate circumstances, we will terminate the accounts of users who are found to be repeat infringers, without refund.",
        },
        {
          heading: "False or Misleading Notices",
          body: "Please be aware that under 17 U.S.C. § 512(f), anyone who knowingly makes a material misrepresentation that material is infringing, or that it was removed by mistake, may be liable for damages, including costs and legal fees. If you are unsure whether material infringes your rights, we recommend seeking legal advice before submitting a notice.",
        },
        {
          heading: "Trademarks",
          body: "Any third-party names, logos or trademarks that may be referenced in our content belong to their respective owners. Their use is for identification purposes only and does not imply any affiliation with or endorsement by those owners.",
        },
      ]}
    />
  );
}

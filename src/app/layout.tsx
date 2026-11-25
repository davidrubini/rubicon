import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leaptherubicon.com"),
  title: {
    default: "Rubicon Leap Advisory | Strategic Product Management & Fractional CPO",
    template: "%s | Rubicon Leap Advisory",
  },
  description:
    "Strategy without execution is hallucination. Execution without strategy is chaos. Led by Dave Rubini, Rubicon Leap Advisory bridges executive product vision with hands-on sprint delivery through UCD, AI insights, and Agile rigor.",
  keywords: [
    "Fractional CPO",
    "Product Management Consultant",
    "Dave Rubini",
    "Rubicon Leap Advisory",
    "Strategic Product Management",
    "UCD",
    "Ambient Commerce",
    "Retail Media Monetization",
    "Agile Leadership",
  ],
  authors: [{ name: "Dave Rubini", url: "https://linkedin.com/in/daverubini/" }],
  creator: "Dave Rubini",
  alternates: {
    canonical: "https://leaptherubicon.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leaptherubicon.com",
    siteName: "Rubicon Leap Advisory",
    title: "Rubicon Leap Advisory | Strategic Product Management & Fractional CPO",
    description:
      "Strategy without execution is hallucination. Execution without strategy is chaos. Dave Rubini embeds as a Player-Coach to transform your product organization into an autonomous growth engine.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubicon Leap Advisory | Strategic Product Management & Fractional CPO",
    description:
      "Strategy without execution is hallucination. Execution without strategy is chaos. Player-Coach product leadership by Dave Rubini.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://leaptherubicon.com/#website",
      url: "https://leaptherubicon.com",
      name: "Rubicon Leap Advisory",
      description:
        "Strategic Product Management and Fractional CPO consulting practice led by Dave Rubini.",
      publisher: { "@id": "https://leaptherubicon.com/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://leaptherubicon.com/#organization",
      name: "Rubicon Leap Advisory",
      url: "https://leaptherubicon.com",
      logo: "https://leaptherubicon.com/logo.svg",
      slogan:
        "Strategy without execution is hallucination. Execution without strategy is chaos.",
      description:
        "Strategic product management, Fractional CPO leadership, and 1-Week Roadmap Diagnostics led by Dave Rubini. Virtual-first and globally flexible.",
      email: "dave@leaptherubicon.com",
      telephone: "+1-404-386-5722",
      areaServed: "Worldwide",
      founder: { "@id": "https://leaptherubicon.com/#person" },
      sameAs: [
        "https://linkedin.com/in/daverubini/",
        "https://daverubini.substack.com",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Executive Inquiries",
        email: "dave@leaptherubicon.com",
        telephone: "+1-404-386-5722",
        url: "https://leaptherubicon.com/contact",
        availableLanguage: "English",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Product Leadership Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "1-Week Roadmap Diagnostic",
              description:
                "Fixed-scope 5-business-day operational audit delivering an Executive Friction Map and prioritized 90-Day Outcome Roadmap.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fractional CPO",
              description:
                "Embedded 1–3 days/week product leadership for scale-ups with 5–30 engineers.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Strategic Advisory Retainer",
              description:
                "Bi-weekly executive strategy sessions, roadmap stress-testing, board prep, and senior PM hiring rubrics.",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://leaptherubicon.com/#person",
      name: "Dave Rubini",
      jobTitle: "Principal & Fractional CPO",
      worksFor: { "@id": "https://leaptherubicon.com/#organization" },
      url: "https://leaptherubicon.com/about",
      email: "dave@leaptherubicon.com",
      telephone: "+1-404-386-5722",
      sameAs: [
        "https://linkedin.com/in/daverubini/",
        "https://daverubini.substack.com",
      ],
      knowsAbout: [
        "Strategic Product Management",
        "Fractional CPO Leadership",
        "User-Centered Design (UCD)",
        "Ambient Commerce",
        "Retail Media Monetization",
        "Physical-Digital IoT Analytics",
        "Hypothesis-Driven Experimentation",
        "AI-Driven Product Discovery",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-obsidian antialiased selection:bg-ruby-light selection:text-ruby">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

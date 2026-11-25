import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-obsidian antialiased selection:bg-ruby-light selection:text-ruby">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

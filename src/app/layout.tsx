import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://TactiqoAI.com"),
  title: "TactiqoAI | AI Engineering Company",
  description: "TactiqoAI builds complete intelligent systems using Agentic AI, AI agents, RAG, automation, analytics, computer vision, knowledge platforms, and modern software engineering.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "TactiqoAI | Beyond Software. Into Intelligence.",
    description: "Complete intelligent systems built to think and designed to scale.",
    url: "https://TactiqoAI.com",
    siteName: "TactiqoAI",
    images: [{ url: "/og.png", width: 1680, height: 945, alt: "TactiqoAI intelligence network" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "TactiqoAI | AI Engineering Company", description: "Beyond Software. Into Intelligence.", images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#030712", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TactiqoAI",
    url: "https://TactiqoAI.com",
    description: "AI engineering company building complete intelligent systems.",
  };
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}

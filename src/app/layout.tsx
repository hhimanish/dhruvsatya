import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { BackToTop } from "@/components/layout/BackToTop";
import { SkipLink } from "@/components/layout/SkipLink";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thecpt.co.in'),
  title: "DhruvSatya | Center for Personal Transformation",
  description: "Transforming Lives | Reinventing Organisations | Generating Breakthroughs. 25 years of world-class training and consulting.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "DhruvSatya | Center for Personal Transformation",
    description: "Transforming Lives | Reinventing Organisations | Generating Breakthroughs.",
    url: "https://thecpt.co.in",
    siteName: "DhruvSatya",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DhruvSatya Center for Personal Transformation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased font-sans bg-brand-foundation text-brand-ivory overflow-x-hidden w-full`}
      >
        <NextTopLoader
          color="#FFD700"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #FFD700,0 0 5px #FFD700"
        />
        {/* JSON-LD Structured Data for Enterprise SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DhruvSatya Center for Personal Transformation",
              "url": "https://thecpt.co.in",
              "logo": "https://thecpt.co.in/images/logo-vertical.png",
              "description": "Transforming Lives | Reinventing Organisations | Generating Breakthroughs. 25 years of world-class training and consulting.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              }
            })
          }}
        />
        <SkipLink />
        <div id="main-content" className="min-h-screen">
          {children}
        </div>
        <CookieConsent />
        <WhatsAppWidget />
        <BackToTop />
      </body>
    </html>
  );
}

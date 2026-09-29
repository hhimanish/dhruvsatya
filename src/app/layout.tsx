import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { CookieConsent } from "@/components/layout/CookieConsent";
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
  title: "DhruvSatya | Center for Personal Transformation",
  description: "Transforming Lives | Reinventing Organisations | Generating Breakthroughs. 25 years of world-class training and consulting.",
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
        className={`${inter.variable} ${montserrat.variable} antialiased font-sans bg-brand-foundation text-brand-ivory`}
      >
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
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}

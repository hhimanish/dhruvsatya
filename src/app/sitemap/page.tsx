import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Sitemap | DhruvSatya",
  description: "Directory of all pages on the DhruvSatya platform."
};

const sitemapGroups = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", url: "/" },
      { label: "About Us", url: "/about" },
      { label: "The Method", url: "/method" },
      { label: "The Founder", url: "/founder" },
      { label: "Impact", url: "/impact" },
      { label: "AI Analyzer", url: "/analyzer" },
      { label: "Contact", url: "/contact" },
    ]
  },
  {
    title: "Solutions",
    links: [
      { label: "Solutions Overview", url: "/solutions" },
      { label: "For Organisations", url: "/solutions/organisations" },
      { label: "For Leaders", url: "/solutions/leaders" },
      { label: "For Institutions", url: "/solutions/institutions" },
      { label: "Programs", url: "/programs" },
    ]
  },
  {
    title: "Insights",
    links: [
      { label: "Insights Hub", url: "/insights" },
      { label: "Rethinking Leadership Post-Pandemic", url: "/insights/rethinking-leadership-post-pandemic" },
      { label: "The Myth of Motivation", url: "/insights/the-myth-of-motivation" },
      { label: "Building a Safety Culture", url: "/insights/building-safety-culture" },
      { label: "Awakening the Giant Within You", url: "/insights/awakening-the-giant-within-you" },
      { label: "The Psychology of Sales", url: "/insights/the-psychology-of-sales" },
      { label: "Institutional Excellence for Faculty", url: "/insights/institutional-excellence-faculty" },
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Terms of Service", url: "/terms" },
    ]
  }
];

export default function SitemapPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <section className="pt-40 pb-20 bg-brand-foundation text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Sitemap</h1>
          <p className="text-gray-300">A complete directory of the DhruvSatya platform.</p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sitemapGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-2xl font-display font-bold text-brand-foundation mb-6 border-b pb-2 border-gray-200">
                  {group.title}
                </h2>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.url}>
                      <Link href={link.url} className="text-gray-600 hover:text-brand-accent transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

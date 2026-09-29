import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GenericPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-ivory/30">
      <Navbar />
      
      <section className="pt-40 pb-24 text-center px-6 min-h-[60vh] flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-display font-medium text-brand-foundation mb-6">
          Coming Soon
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          This section of the digital transformation journey is currently under development. Please explore our Founder page, Programs, or Contact us.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-brand-accent text-white font-medium rounded-full hover:bg-brand-foundation transition-colors"
          >
            RETURN HOME
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service | DhruvSatya",
  description: "Terms of Service for DhruvSatya Center for Personal Transformation Pvt. Ltd."
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <section className="pt-40 pb-20 bg-brand-foundation text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-300">Last updated: {new Date().toLocaleDateString('en-IN')}</p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl prose prose-lg prose-headings:font-display prose-headings:text-brand-foundation text-gray-700">
          <p>
            Welcome to DhruvSatya Center for Personal Transformation Pvt. Ltd. By accessing our website, you agree to these Terms of Service.
          </p>
          
          <h2>1. Intellectual Property</h2>
          <p>
            All content, frameworks (including VMOSA), text, graphics, and methodologies displayed on this website are the intellectual property of DhruvSatya Center for Personal Transformation Pvt. Ltd. Unauthorized use, reproduction, or distribution is strictly prohibited.
          </p>

          <h2>2. AI Analyzer Disclaimer</h2>
          <p>
            The DhruvSatya AI Analyzer is provided for informational and exploratory purposes only. The insights and reports generated do not constitute professional advisory, legal, or consulting advice. We do not guarantee the accuracy or applicability of the AI-generated recommendations to your specific business context.
          </p>

          <h2>3. Limitation of Liability</h2>
          <p>
            DhruvSatya shall not be held liable for any direct, indirect, or consequential damages arising from your use of the website, its content, or tools.
          </p>

          <h2>4. Governing Law & Jurisdiction</h2>
          <p>
            These terms are governed by the laws of India. Any disputes arising out of or in connection with the use of this website shall be subject to the exclusive jurisdiction of the courts located in <strong>Kolkata, West Bengal</strong>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

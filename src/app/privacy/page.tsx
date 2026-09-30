import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | DhruvSatya",
  description: "Privacy Policy for DhruvSatya Center for Personal Transformation Pvt. Ltd."
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <section className="pt-40 pb-20 bg-brand-foundation text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: {new Date().toLocaleDateString('en-IN')}</p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl prose prose-lg prose-headings:font-display prose-headings:text-brand-foundation text-gray-700">
          <p>
            DhruvSatya Center for Personal Transformation Pvt. Ltd. ("we", "our", or "us") is committed to protecting your privacy in compliance with the Digital Personal Data Protection Act, 2023 (DPDPA).
          </p>
          
          <h2>1. Data Collection & Usage</h2>
          <ul>
            <li><strong>Contact & Newsletter Forms:</strong> We collect your name, email, phone number, and organisation to respond to inquiries and deliver our newsletter.</li>
            <li><strong>AI Analyzer Inputs:</strong> Data submitted via the AI Analyzer is processed to generate insights. Note that this data is securely transmitted to a third-party AI provider (e.g., OpenAI) solely for generating your report.</li>
            <li><strong>Cookies & Analytics:</strong> We use essential and analytics cookies to monitor site performance and improve user experience.</li>
          </ul>

          <h2>2. Data Retention</h2>
          <p>
            We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations. AI Analyzer inputs are not used to train our AI models and are purged periodically.
          </p>

          <h2>3. Your Rights under DPDPA 2023</h2>
          <p>
            You have the right to access, correct, or request the erasure of your personal data. You may withdraw consent for marketing communications at any time.
          </p>

          <h2>4. Grievance Officer</h2>
          <p>
            For any privacy-related concerns or to exercise your data rights, please contact our Grievance Officer at:<br />
            <strong>Email:</strong> legal@thecpt.co.in<br />
            <strong>Address:</strong> 27-A Gariahat Road (South), Dhakuria, Kolkata 700031
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

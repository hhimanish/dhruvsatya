import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-foundation text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block font-display font-black text-2xl tracking-widest uppercase mb-6 text-white">
              DHRUVSATYA
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
              Center for Personal Transformation. <br />
              Transforming Lives. Reinventing Organisations. Generating Breakthroughs.
            </p>
            <div className="text-brand-accent font-medium text-sm tracking-widest uppercase">
              Transform. Achieve. Contribute.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-medium mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-brand-accent transition-colors">Why DhruvSatya</Link></li>
              <li><Link href="/solutions" className="hover:text-brand-accent transition-colors">Solutions</Link></li>
              <li><Link href="/programs" className="hover:text-brand-accent transition-colors">Programs</Link></li>
              <li><Link href="/founder" className="hover:text-brand-accent transition-colors">Soumitra Chatterjee</Link></li>
              <li><Link href="/impact" className="hover:text-brand-accent transition-colors">Impact & Case Studies</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-medium mb-6">Capabilities</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/solutions/leaders" className="hover:text-brand-accent transition-colors">Leadership Development</Link></li>
              <li><Link href="/solutions/organizations" className="hover:text-brand-accent transition-colors">Organizational Development</Link></li>
              <li><Link href="/solutions/institutions" className="hover:text-brand-accent transition-colors">Education Transformation</Link></li>
              <li><Link href="/solutions/organizations#safety" className="hover:text-brand-accent transition-colors">Behavioral Safety</Link></li>
              <li><Link href="/founder" className="hover:text-brand-accent transition-colors">Executive Coaching</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-400 text-sm mb-8">
              <li>27-A, Gariahat Road (South)<br />Dhakuria, Kolkata - 700031</li>
              <li>+91 9830426007</li>
              <li>033 40004753</li>
              <li>schatterjee@thecpt.co.in</li>
            </ul>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-brand-accent font-medium hover:text-white transition-colors group"
            >
              Start the Conversation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} DhruvSatya Center for Personal Transformation Pvt. Ltd.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

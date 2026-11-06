import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-20 pb-12 border-t border-slate-200 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src="/images/logo-horizontal.png"
                alt="DhruvSatya Center for Personal Transformation"
                width={240}
                height={74}
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 pr-4 font-normal">
              Center for Personal Transformation. <br />
              Transforming Lives. Reinventing Organisations. Generating Breakthroughs.
            </p>
            <div className="text-xs font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent">
              Transform. Achieve. Contribute.
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-5">Explore</h4>
            <ul className="space-y-3.5 text-slate-600 text-sm font-medium">
              <li><Link href="/about" className="hover:text-brand-cyan transition-colors">Why DhruvSatya</Link></li>
              <li><Link href="/solutions" className="hover:text-brand-cyan transition-colors">Solutions</Link></li>
              <li><Link href="/programs" className="hover:text-brand-cyan transition-colors">Programs</Link></li>
              <li><Link href="/founder" className="hover:text-brand-cyan transition-colors">Soumitra Chatterjee</Link></li>
              <li><Link href="/impact" className="hover:text-brand-cyan transition-colors">Impact & Case Studies</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-5">Capabilities</h4>
            <ul className="space-y-3.5 text-slate-600 text-sm font-medium">
              <li><Link href="/solutions/leaders" className="hover:text-brand-cyan transition-colors">Leadership Development</Link></li>
              <li><Link href="/solutions/organisations" className="hover:text-brand-cyan transition-colors">Organisational Development</Link></li>
              <li><Link href="/solutions/institutions" className="hover:text-brand-cyan transition-colors">Education Transformation</Link></li>
              <li><Link href="/solutions/organisations#safety" className="hover:text-brand-cyan transition-colors">Behavioural Safety (BBS)</Link></li>
              <li><Link href="/analyzer" className="hover:text-brand-cyan transition-colors">AI Transformation Diagnostic</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-5">Get In Touch</h4>
            <div className="space-y-3.5 text-sm text-slate-600 font-medium">
              <p>Ready to spark transformation across your leadership and workforce?</p>
              <Link 
                href="/contact"
                className="inline-flex items-center text-brand-accent font-bold tracking-wider uppercase text-xs hover:text-brand-cyan transition-colors mt-2"
              >
                Start A Conversation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} DhruvSatya Center for Personal Transformation Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex space-x-6 font-medium">
            <Link href="/privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-slate-800 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

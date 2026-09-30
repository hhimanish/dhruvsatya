import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { CredibilityBand } from "@/components/home/CredibilityBand";
import { Footer } from "@/components/layout/Footer";
import dynamic from 'next/dynamic';

const DiagnosticTool = dynamic(() => import('@/components/home/DiagnosticTool').then(mod => mod.DiagnosticTool), {
  loading: () => <div className="h-screen bg-brand-foundation animate-pulse" />
});

const PhilosophySection = dynamic(() => import('@/components/home/PhilosophySection').then(mod => mod.PhilosophySection), {
  loading: () => <div className="h-[50vh] bg-white animate-pulse" />
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-ivory/30">
      <Navbar />
      <Hero />
      <CredibilityBand />
      
      {/* The Big Idea / Transformation Statement */}
      <section className="py-20 md:py-48 bg-brand-ivory px-4 md:px-6 relative overflow-hidden text-brand-foundation">
        {/* Subtle grid background */}
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.2] md:leading-[1.1] mb-8 md:mb-12 tracking-tight">
            Organisations change when people change.
            <br className="hidden md:block" />
            <span className="text-gray-400 block md:inline mt-2 md:mt-0">People change when perspective changes.</span>
            <br className="hidden md:block" />
            <span className="inline-block bg-brand-accent text-brand-foundation px-4 py-2 md:px-6 md:py-3 mt-6 transform -skew-x-6 shadow-xl text-lg sm:text-xl md:text-3xl lg:text-4xl max-w-full">
              <span className="block transform skew-x-6">Perspective changes when we challenge ourselves.</span>
            </span>
          </h2>
          <div className="inline-block relative px-2">
            <p className="text-lg sm:text-xl md:text-3xl text-brand-foundation font-black tracking-widest uppercase">
              That is where transformation begins.
            </p>
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-brand-accent scale-x-50 opacity-50" />
          </div>
        </div>
      </section>

      <DiagnosticTool />
      <PhilosophySection />
      
      {/* Placeholder for Solutions, Programs, Founder, Impact */}
      
      <Footer />
    </main>
  );
}

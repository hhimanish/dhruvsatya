import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { CredibilityBand } from "@/components/home/CredibilityBand";
import { FeaturedSolutions } from "@/components/home/FeaturedSolutions";
import { FeaturedPrograms } from "@/components/home/FeaturedPrograms";
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
      <section className="py-24 md:py-44 bg-gradient-to-b from-brand-foundation via-brand-secondary to-brand-foundation px-4 md:px-6 relative overflow-hidden text-white border-y border-white/5">
        {/* Atmospheric ambient glows inspired by official logo */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-accent/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.2] md:leading-[1.1] mb-8 md:mb-12 tracking-tight">
            Organisations change when people change.
            <br className="hidden md:block" />
            <span className="text-gray-400 block md:inline mt-2 md:mt-0 font-light">People change when perspective changes.</span>
            <br className="hidden md:block" />
            <span className="inline-block bg-gradient-to-r from-brand-accent via-amber-400 to-[#E08A00] text-brand-foundation font-black px-6 py-3 mt-6 transform -skew-x-6 shadow-[0_10px_35px_rgba(248,166,18,0.35)] text-lg sm:text-xl md:text-3xl lg:text-4xl max-w-full">
              <span className="block transform skew-x-6">Perspective changes when we challenge ourselves.</span>
            </span>
          </h2>
          <div className="inline-block relative px-2">
            <p className="text-lg sm:text-xl md:text-3xl text-white font-black tracking-widest uppercase">
              That is where <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-sky-300 to-brand-accent">transformation begins</span>.
            </p>
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan via-brand-accent to-brand-cyan scale-x-75 opacity-70" />
          </div>
        </div>
      </section>

      <FeaturedSolutions />
      <FeaturedPrograms />
      <DiagnosticTool />
      <PhilosophySection />
      
      <Footer />
    </main>
  );
}

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
      <section className="py-24 md:py-44 bg-gradient-to-b from-brand-foundation via-brand-secondary to-brand-foundation px-4 md:px-6 relative overflow-hidden text-white">
        {/* Animated Boundary Hairlines */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] gradient-hairline-animated" />
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] gradient-hairline-animated" />

        {/* Living Atmospheric Aurora System */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full aurora-sphere-cyan pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full aurora-sphere-gold pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] rounded-full aurora-sphere-violet pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.2] md:leading-[1.1] mb-8 md:mb-12 tracking-tight">
            Organisations change when people change.
            <br className="hidden md:block" />
            <span className="text-gray-400 block md:inline mt-2 md:mt-0 font-light">People change when perspective changes.</span>
            <br className="hidden md:block" />
            <span className="inline-block btn-gradient-animated text-brand-foundation font-black px-8 py-3.5 mt-6 transform -skew-x-6 shadow-[0_15px_40px_rgba(248,166,18,0.4)] text-lg sm:text-xl md:text-3xl lg:text-4xl max-w-full rounded-2xl">
              <span className="block transform skew-x-6">Perspective changes when we challenge ourselves.</span>
            </span>
          </h2>
          <div className="inline-block relative px-2">
            <p className="text-lg sm:text-xl md:text-3xl text-white font-black tracking-widest uppercase">
              That is where <span className="text-gradient-animated">transformation begins</span>.
            </p>
            <div className="absolute -bottom-4 left-0 w-full h-[2px] gradient-hairline-animated scale-x-75" />
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

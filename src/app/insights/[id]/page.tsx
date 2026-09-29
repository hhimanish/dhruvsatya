import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { notFound } from "next/navigation";

async function getInsight(id: string) {
  try {
    const filePath = path.join(process.cwd(), 'content', 'insights.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const insights = JSON.parse(fileContents);
    return insights.find((article: any) => article.id === id) || null;
  } catch (error) {
    console.error("Error reading insights.json:", error);
    return null;
  }
}

export default async function InsightArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getInsight(id);

  if (!article) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Article Header */}
      <section className="pt-40 pb-20 bg-brand-foundation text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/faith-banner.jpg"
            alt="Faith Background"
            fill
            className="object-cover opacity-20 mix-blend-luminosity grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-brand-foundation/50 to-brand-foundation pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
          <Link 
            href="/insights" 
            className="inline-flex items-center text-gray-400 hover:text-brand-accent transition-colors mb-10 text-sm font-bold tracking-widest uppercase"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
          
          <div className="text-brand-accent font-bold tracking-widest uppercase mb-6">
            {article.category}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            <span className="inline-block bg-brand-accent text-brand-foundation px-6 py-2 transform -skew-x-6 shadow-[0_0_20px_rgba(252,163,17,0.3)]">
              {article.title}
            </span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-300 border-t border-white/10 pt-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-brand-accent" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-brand-accent" />
              {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-brand-accent" />
              {article.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-24 px-6 bg-brand-ivory/30">
        <div className="container mx-auto max-w-3xl">
          <article className="prose prose-lg md:prose-xl prose-slate max-w-none">
            <p className="lead text-2xl text-brand-foundation font-display font-medium mb-12">
              {article.excerpt}
            </p>
            
            {/* Placeholder body content since the JSON only has excerpts */}
            <p className="mb-8 text-gray-600 leading-relaxed">
              When we observe the patterns of high-performing individuals and organizations, a distinct truth emerges: transformation is rarely the result of a single tactical shift. Rather, it is the culmination of systemic, psychological, and behavioral alignment. In addressing the core issues highlighted in this insight, we must first look at the foundational beliefs that drive our daily execution.
            </p>
            
            <h2 className="text-3xl font-display font-bold text-brand-foundation mt-12 mb-6">
              The Architecture of Change
            </h2>
            
            <p className="mb-8 text-gray-600 leading-relaxed">
              Most interventions fail because they attempt to modify the output without reprogramming the source code. Whether you are leading a Fortune 500 company or striving for personal mastery, the mechanics remain identical. You cannot out-strategize a flawed belief system. The very essence of the DhruvSatya methodology dictates that sustainable results demand rigorous introspection followed by relentless, disciplined action.
            </p>
            
            <blockquote className="border-l-4 border-brand-accent pl-6 py-2 my-12 bg-white/50 rounded-r-lg italic text-xl md:text-2xl font-serif text-brand-foundation/80">
              "You cannot out-strategize a flawed belief system. Sustainable results demand rigorous introspection followed by relentless, disciplined action."
            </blockquote>
            
            <p className="mb-8 text-gray-600 leading-relaxed">
              As leaders, our primary responsibility is to curate environments where both safety and high expectations coexist. This requires emotional intelligence, absolute clarity of vision, and the courage to dismantle what no longer serves the ultimate goal. Moving forward, the organizations that dominate their sectors will be those that treat culture not as an HR initiative, but as the ultimate operational strategy.
            </p>
          </article>
          
          {/* Share / Action */}
          <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="font-bold tracking-widest text-brand-foundation uppercase text-sm">
              Share this insight
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-accent text-brand-foundation font-bold text-sm tracking-widest uppercase hover:bg-brand-foundation hover:text-white transition-colors rounded-full"
            >
              DISCUSS WITH OUR TEAM
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { notFound } from "next/navigation";

export const revalidate = 3600; // ISR revalidate every hour

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
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
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
            
            {/* Map through dynamic content paragraphs */}
            {article.content && article.content.slice(0, 3).map((paragraph: string, idx: number) => (
              <p key={idx} className="mb-8 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <h2 className="text-3xl font-display font-bold text-brand-foundation mt-12 mb-6">
              {article.subheading || "The Architecture of Change"}
            </h2>
            
            {article.content && article.content.slice(3, 5).map((paragraph: string, idx: number) => (
              <p key={`mid-${idx}`} className="mb-8 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <blockquote className="border-l-4 border-brand-accent pl-6 py-2 my-12 bg-white/50 rounded-r-lg italic text-xl md:text-2xl font-serif text-brand-foundation/80">
              "{article.quote}"
            </blockquote>
            
            {article.content && article.content.slice(5).map((paragraph: string, idx: number) => (
              <p key={`end-${idx}`} className="mb-8 text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
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

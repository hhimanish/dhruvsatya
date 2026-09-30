import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-brand-foundation text-white px-6">
      <div className="text-brand-accent font-display font-black text-9xl mb-4">404</div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Perspective Not Found</h1>
      <p className="text-gray-400 text-lg mb-10 max-w-md text-center">
        The page you are looking for has been moved or no longer exists. Let's get you back on the path to transformation.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-8 py-4 bg-brand-accent text-brand-foundation font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-3" />
        Return Home
      </Link>
    </main>
  );
}

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-brand-foundation z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Animated Brand Core */}
        <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-brand-accent/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-brand-accent rounded-full border-t-transparent animate-spin" />
          <div className="w-12 h-12 bg-white/10 rounded-full animate-pulse" />
        </div>
        
        {/* Loading Text */}
        <div className="text-white font-display font-bold tracking-[0.2em] uppercase text-sm animate-pulse">
          Loading
        </div>
      </div>
    </div>
  );
}

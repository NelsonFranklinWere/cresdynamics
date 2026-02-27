import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24">
        <h1 className="text-6xl md:text-8xl font-black text-white/90 mb-2">404</h1>
        <p className="text-xl md:text-2xl text-white/70 mb-2">Page not found</p>
        <p className="text-white/60 text-center max-w-md mb-10">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[var(--cres-orange-primary)] hover:bg-[var(--cres-orange-hover)] text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide transition-colors"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 border border-white/40 hover:bg-white/5 text-white font-bold text-sm px-6 py-3 rounded-lg uppercase tracking-wide transition-colors"
          >
            Case Studies
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

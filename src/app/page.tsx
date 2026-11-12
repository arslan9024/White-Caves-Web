import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-zinc-950 text-white selection:bg-[#EF4444] selection:text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80 px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 flex items-center justify-center">
            <Image
              src="/company-logo.jpg"
              alt="White Caves Logo"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white block leading-none">
              WHITE CAVES
            </span>
            <span className="text-[10px] tracking-widest text-[#EF4444] font-semibold uppercase">
              Real Estate LLC • Dubai
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <Link href="#properties" className="hover:text-white transition-colors">
            Featured Listings
          </Link>
          <Link href="#offplan" className="hover:text-white transition-colors">
            Off-Plan Projects
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://app.whitecaves.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md border border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-600 transition"
          >
            Agent Portal
          </a>
          <a
            href="https://wa.me/971500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#EF4444] text-white hover:bg-red-600 shadow-lg shadow-red-500/20 transition"
          >
            Inquire Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <section className="relative px-6 lg:px-12 py-24 lg:py-32 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-zinc-950 to-zinc-950" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-medium uppercase tracking-widest mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            Dubai Ultra-Prime Real Estate
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-6">
            Curated Luxury Estates & Iconic Dubai Living.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Exclusive residences, luxury beachfront villas, and strategic off-plan investment portfolios across Palm Jumeirah, Downtown Dubai, and Dubai Hills Estate.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="#properties"
              className="w-full sm:w-auto px-8 py-3.5 rounded-md font-semibold text-sm bg-[#EF4444] text-white hover:bg-red-600 shadow-xl shadow-red-600/25 transition"
            >
              Explore Listings
            </Link>
            <a
              href="/White-Caves-Company-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-md font-semibold text-sm border border-zinc-800 bg-zinc-900/80 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-700 transition"
            >
              Company Profile (PDF)
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full mt-20 pt-12 border-t border-zinc-800/80">
            <div>
              <p className="text-3xl font-extrabold text-white">AED 2.4B+</p>
              <p className="text-xs uppercase tracking-wider text-zinc-500 mt-1">Transaction Volume</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">100%</p>
              <p className="text-xs uppercase tracking-wider text-zinc-500 mt-1">DLD / RERA Verified</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">Top 1%</p>
              <p className="text-xs uppercase tracking-wider text-zinc-500 mt-1">Off-Plan Allocations</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">24/7</p>
              <p className="text-xs uppercase tracking-wider text-zinc-500 mt-1">VIP Concierge & Advisory</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 px-6 lg:px-12 py-8 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <p>© 2026 White Caves Real Estate LLC. All rights reserved. RERA Registered.</p>
        <div className="flex items-center gap-6">
          <a href="https://whitecaves.ae" className="hover:text-zinc-300">Privacy Policy</a>
          <a href="https://whitecaves.ae" className="hover:text-zinc-300">Terms of Service</a>
          <a href="https://app.whitecaves.ae" className="text-[#EF4444] hover:underline">CRM Portal</a>
        </div>
      </footer>
    </div>
  );
}

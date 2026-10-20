import { MessageCircle, ArrowDown, ShieldCheck, MapPin } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/27000000000?text=Hi%20AquaLope%2C%20I%27d%20like%20to%20place%20an%20order!';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-water.jpg"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-water/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-water/5 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Pill badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 bg-water/10 border border-water/20 rounded-full mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-water opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-water" />
          </span>
          <span className="text-sm font-medium text-water">Now Serving Burgersfort & Surrounds</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up animation-delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-offwhite leading-tight tracking-tight">
          Pure, Refreshing Water
          <br />
          <span className="text-water">for Burgersfort & Beyond.</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up animation-delay-400 mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Premium purified water refills at just R1 per litre. Clean, safe, and cold water for your home, business, or event.
        </p>

        {/* Trust badges */}
        <div className="animate-fade-in-up animation-delay-600 flex flex-wrap items-center justify-center gap-4 mt-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-slate-700 rounded-full text-sm text-slate-300">
            <ShieldCheck className="w-4 h-4 text-water" />
            100% Reverse Osmosis Purified
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-slate-700 rounded-full text-sm text-slate-300">
            <MapPin className="w-4 h-4 text-water" />
            Praktiseer Local Hub
          </span>
        </div>

        {/* CTAs */}
        <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-whatsapp/20 hover:shadow-xl hover:shadow-whatsapp/30 text-base"
          >
            <MessageCircle className="w-5 h-5" />
            Order via WhatsApp
          </a>
          <a
            href="#bottled"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/5 hover:bg-white/10 border border-slate-600 hover:border-slate-500 text-offwhite font-semibold rounded-full transition-all duration-200 text-base"
          >
            View Bottled Pricing
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Price highlight */}
        <div className="animate-fade-in-up animation-delay-600 mt-14 inline-flex items-center gap-3 px-6 py-3 bg-water/10 border border-water/20 rounded-2xl">
          <div className="flex items-center justify-center w-10 h-10 bg-water rounded-xl">
            <span className="text-lg font-bold text-white">R1</span>
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-offwhite">Refills starting at R1 / Litre</p>
            <p className="text-xs text-slate-400">Bring your own container & save</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-slate-500" />
      </div>
    </section>
  );
}

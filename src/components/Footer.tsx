import { Droplets, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/27000000000?text=Hi%20AquaLope!';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Refill Station', href: '#refill' },
  { label: 'Bottled Water', href: '#bottled' },
  { label: 'Location', href: '#location' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-light border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-water/10 border border-water/20">
                <Droplets className="w-4 h-4 text-water" />
              </div>
              <span className="text-lg font-bold text-offwhite tracking-tight">
                Aqua<span className="text-water">Lope</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Premium purified water for Burgersfort and surrounding communities. Clean, safe, and affordable hydration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-offwhite uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-water transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-offwhite uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                +27 (0) 00 000 0000
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                info@aqualope.co.za
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                Praktiseer Township, Burgersfort, Limpopo
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-offwhite uppercase tracking-wider mb-4">Order Now</h4>
            <p className="text-sm text-slate-400 mb-4">
              Ready to order? Reach us instantly on WhatsApp for quick service.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white text-sm font-semibold rounded-full transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {year} AquaLope Water Purification. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Praktiseer Township, Burgersfort, Limpopo, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}

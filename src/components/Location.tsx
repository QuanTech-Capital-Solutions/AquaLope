import { MapPin, Clock, Phone, Mail, Navigation, MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/27000000000?text=Hi%20AquaLope%2C%20I%27d%20like%20to%20get%20directions!';
const MAPS_LINK = 'https://maps.google.com/?q=Praktiseer+Township+Burgersfort+Limpopo+South+Africa';

export default function Location() {
  return (
    <section id="location" className="relative py-20 sm:py-28 bg-navy overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-water/20 to-transparent" />
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-water/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-water/10 border border-water/20 rounded-full mb-4">
            <MapPin className="w-3.5 h-3.5 text-water" />
            <span className="text-sm font-medium text-water">Find Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-offwhite tracking-tight">
            Visit Our Station
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Located in the heart of Praktiseer Township, easily accessible for all Burgersfort residents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-navy-mid h-80 lg:h-auto lg:min-h-[400px]">
            <iframe
              title="AquaLope Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28948.041834!2d30.18!3d-24.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eba0d67aa57c5c7%3A0xrandom!2sPraktiseer%2C+Burgersfort!5e0!3m2!1sen!2sza!4v1700000000000"
              className="absolute inset-0 w-full h-full opacity-70"
              style={{ border: 0, filter: 'grayscale(0.3)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Fallback overlay if iframe doesn't load */}
            <div className="absolute inset-0 flex items-center justify-center bg-navy-mid/80 pointer-events-none">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-water mx-auto mb-3" />
                <p className="text-lg font-semibold text-offwhite">Praktiseer Township</p>
                <p className="text-sm text-slate-400">Burgersfort, Limpopo</p>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="p-6 bg-white/5 border border-slate-800 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 bg-water/10 rounded-xl flex-shrink-0">
                  <MapPin className="w-5 h-5 text-water" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-offwhite">Our Address</h3>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                    ERF 2760<br />
                    Police Station Street<br />
                    Praktiseer Township<br />
                    Burgersfort<br />
                    1150<br />
                    <br />
                    Next to Hyrdo Petrol Station
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-6 bg-white/5 border border-slate-800 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 bg-water/10 rounded-xl flex-shrink-0">
                  <Clock className="w-5 h-5 text-water" />
                </div>
                <div className="w-full">
                  <h3 className="text-base font-bold text-offwhite">Operating Hours</h3>
                  <div className="mt-3 space-y-2">
                    {[
                      { day: 'Monday – Friday', time: '07:00 – 18:00' },
                      { day: 'Saturday', time: '07:00 – 16:00' },
                      { day: 'Sunday', time: '08:00 – 14:00' },
                    ].map((h) => (
                      <div key={h.day} className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">{h.day}</span>
                        <span className="font-medium text-offwhite">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="p-6 bg-white/5 border border-slate-800 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 bg-water/10 rounded-xl flex-shrink-0">
                  <Phone className="w-5 h-5 text-water" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-offwhite">Contact</h3>
                  <div className="mt-2 space-y-1.5">
                    <p className="text-sm text-slate-400 flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-500" />
                      +27 (0) 73 945 0000
                    </p>
                    <p className="text-sm text-slate-400 flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      info@aqualope.co.za
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-water hover:bg-water-dark text-white font-semibold rounded-full transition-colors text-sm shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full transition-colors text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

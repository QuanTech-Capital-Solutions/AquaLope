import { Droplets, Beaker, ThermometerSun, Coins } from 'lucide-react';

export default function RefillStation() {
  return (
    <section id="refill" className="relative py-20 sm:py-28 bg-navy overflow-hidden">
      {/* Subtle decorative blobs */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-water/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-water/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-water/10 border border-water/20 rounded-full mb-4">
            <Droplets className="w-3.5 h-3.5 text-water" />
            <span className="text-sm font-medium text-water">Refill Station</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-offwhite tracking-tight">
            Walk-In Refill Station
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Bring your own container and fill up with ultra-pure water at our Praktiseer refill point. Quick, hygienic, and affordable.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Beaker,
              title: 'Multi-Stage Filtration',
              desc: '7-stage reverse osmosis system removes 99.9% of impurities, heavy metals, and bacteria.',
            },
            {
              icon: ThermometerSun,
              title: 'Cold & Ambient',
              desc: 'Choose between refreshing ice-cold water or ambient temperature for cooking and daily use.',
            },
            {
              icon: Coins,
              title: 'Only R1 / Litre',
              desc: 'Premium quality water at community-friendly pricing. No hidden charges, pay per litre.',
            },
            {
              icon: Droplets,
              title: 'Any Container',
              desc: 'Bring your own bottles, jugs, or buckets. Our station accommodates all container sizes.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group p-6 bg-white/5 border border-slate-800 rounded-2xl hover:bg-white/[0.07] hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-water/10 rounded-xl mb-4 group-hover:bg-water/15 transition-colors">
                <item.icon className="w-6 h-6 text-water" />
              </div>
              <h3 className="text-lg font-bold text-offwhite">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-white/5 border border-slate-800 rounded-2xl p-8 sm:p-10">
          <h3 className="text-xl font-bold text-offwhite text-center mb-8">How It Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Bring Container', desc: 'Any clean bottle, jug, or bucket from 500ml to 25L.' },
              { step: '02', title: 'Fill & Measure', desc: 'Our digital meter accurately measures every litre you fill.' },
              { step: '03', title: 'Pay & Go', desc: 'Cash or mobile payment. R1 per litre — simple as that.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-water rounded-xl mb-4">
                  <span className="text-lg font-extrabold text-white">{s.step}</span>
                </div>
                <h4 className="text-base font-bold text-offwhite">{s.title}</h4>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

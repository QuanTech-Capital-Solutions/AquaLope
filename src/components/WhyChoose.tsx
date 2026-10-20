import { Shield, Sparkles, Users, Truck } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Multi-Stage Filtration',
    description:
      'Our advanced 7-stage reverse osmosis system ensures every drop meets the highest purity standards. Removes chlorine, heavy metals, bacteria, and more.',
  },
  {
    icon: Sparkles,
    title: 'Hygienic Refill Stations',
    description:
      'Our Praktiseer station is regularly sanitized and maintained to medical-grade cleanliness standards. Your health is our priority.',
  },
  {
    icon: Users,
    title: 'Affordable Local Rates',
    description:
      'We believe every community deserves clean water. Our pricing is designed to be accessible — premium quality without the premium price tag.',
  },
  {
    icon: Truck,
    title: 'Bulk & Event Supply',
    description:
      'Planning a wedding, sports event, or need office supply? We offer bulk orders with custom pricing and delivery within Burgersfort.',
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-20 sm:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-water/10 border border-water/20 rounded-full mb-4">
            <Shield className="w-3.5 h-3.5 text-water-dark" />
            <span className="text-sm font-medium text-water-dark">Why AquaLope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-light tracking-tight">
            Why Choose AquaLope?
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Trusted by families and businesses across Praktiseer Township for clean, safe, and affordable water.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:shadow-water/5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-water/10 rounded-2xl group-hover:bg-water/15 transition-colors">
                  <feature.icon className="w-7 h-7 text-water-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-light">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: 'R1', label: 'Per Litre' },
            { value: '7', label: 'Stage Filtration' },
            { value: '99.9%', label: 'Purity Rate' },
            { value: '6/7', label: 'Days Open' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-water">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MessageCircle, Droplets, Package } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/27000000000?text=Hi%20AquaLope%2C%20I%27d%20like%20to%20inquire%20about%20bulk%20pricing!';

interface WaterProduct {
  sizes: string;
  label: string;
  description: string;
  priceRange: string;
  tags: string[];
  popular?: boolean;
}

const products: WaterProduct[] = [
  {
    sizes: '500ml',
    label: 'On-the-Go',
    description: 'Perfect for sports, school, and pocket-sized hydration. Ideal for quick refreshment anywhere.',
    priceRange: 'From R6',
    tags: ['Portable', 'Individual'],
  },
  {
    sizes: '1.5L',
    label: 'Daily Essential',
    description: 'Your everyday hydration companion. Great for the desk, gym bag, or household use.',
    priceRange: 'From R10',
    tags: ['Everyday', 'Best Seller'],
  },
  {
    sizes: '5L Bottle',
    label: 'Family Pack',
    description: 'Convenient family-size purified water. Perfect for cooking, drinking, and small gatherings.',
    priceRange: 'From R25',
    tags: ['Family', 'Value'],
    popular: true,
  },
  {
    sizes: '10L Bottle',
    label: 'Home & Office',
    description: 'Large format for water dispensers. Keep your home or office fully stocked with pure water.',
    priceRange: 'From R35',
    tags: ['Dispenser', 'Bulk'],
  },
];

export default function BottledWater() {
  return (
    <section id="bottled" className="relative py-20 sm:py-28 bg-offwhite">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-water/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-water/10 border border-water/20 rounded-full mb-4">
            <Package className="w-3.5 h-3.5 text-water-dark" />
            <span className="text-sm font-medium text-water-dark">Product Range</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-light tracking-tight">
            Our Bottled Water Range
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            From on-the-go bottles to home and office packs — pure, reverse osmosis filtered water in every size you need.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.sizes}
              className={`relative group bg-white rounded-2xl border transition-all duration-300 hover:shadow-lg hover:shadow-water/5 hover:-translate-y-1 ${
                product.popular
                  ? 'border-water/30 shadow-md shadow-water/10'
                  : 'border-slate-200 shadow-sm'
              }`}
            >
              {/* Popular badge */}
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 bg-water text-white text-xs font-bold rounded-full shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Icon area */}
                <div className={`flex items-center justify-center w-14 h-14 rounded-xl mb-5 ${
                  product.popular
                    ? 'bg-water/10'
                    : 'bg-slate-50'
                }`}>
                  <Droplets className={`w-7 h-7 ${product.popular ? 'text-water' : 'text-water-dark'}`} />
                </div>

                {/* Size */}
                <h3 className="text-xl font-bold text-navy-light">{product.sizes}</h3>
                <p className="text-sm font-medium text-water-dark mt-1">{product.label}</p>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{product.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <span className="text-2xl font-extrabold text-navy-light">{product.priceRange}</span>
                  <span className="text-sm text-slate-400 ml-1">per unit</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-navy rounded-2xl border border-slate-800">
            <div className="text-center sm:text-left">
              <p className="text-base font-semibold text-offwhite">Need bulk supply for events or business?</p>
              <p className="text-sm text-slate-400 mt-1">Bulk orders available. Contact us for a quote.</p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full transition-colors text-sm whitespace-nowrap shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Inquire Bulk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

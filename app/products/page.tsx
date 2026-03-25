'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ShoppingCart } from 'lucide-react';

type Category = 'All' | 'MT' | 'PT' | 'CL';

const categories: { id: Category; label: string }[] = [
  { id: 'All', label: 'All Products' },
  { id: 'MT', label: 'MT – Microbiological Testing' },
  { id: 'PT', label: 'PT – Physico-chemical Testing' },
  { id: 'CL', label: 'CL – Custom-Lab Boxes' },
];

const products = [
  {
    name: 'Microbiological Field Test Kit',
    category: 'MT' as Category,
    price: 'UGX 280,000',
    description: 'Rapid on-site detection of coliform bacteria and E.coli in water sources with easy-to-read results.',
    features: ['Detects coliforms & E.coli', 'Results in 24 hours', 'No lab equipment needed', 'Includes 50 tests'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Portable Bacteria Detector',
    category: 'MT' as Category,
    price: 'UGX 520,000',
    description: 'Handheld device for real-time microbial contamination screening in field conditions.',
    features: ['Real-time screening', 'Rechargeable battery', 'Waterproof housing', 'Data logging via USB'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'E.coli Rapid Test Strips',
    category: 'MT' as Category,
    price: 'UGX 95,000',
    description: 'Single-use test strips for fast qualitative detection of E.coli contamination in drinking water.',
    features: ['Results in 15 minutes', 'Pack of 100 strips', 'High sensitivity', 'Suitable for field use'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'pH & TDS Meter',
    category: 'PT' as Category,
    price: 'UGX 145,000',
    description: 'Dual-function digital meter for measuring pH and total dissolved solids in water samples.',
    features: ['±0.01 pH accuracy', 'TDS range 0–9999 ppm', 'Auto temperature compensation', 'Waterproof design'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Multi-Parameter Water Analyzer',
    category: 'PT' as Category,
    price: 'UGX 890,000',
    description: 'Benchtop analyzer for comprehensive physico-chemical water quality profiling in one device.',
    features: ['12 parameters tested', 'Turbidity, hardness, conductivity', 'Bluetooth data export', 'Calibration included'],
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Chemical Testing Kit',
    category: 'PT' as Category,
    price: 'UGX 175,000',
    description: 'Complete reagent-based kit for testing chlorine, nitrates, iron, fluoride and more.',
    features: ['10 chemical parameters', 'Color comparison method', 'Includes test tubes & vials', '100+ tests per kit'],
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Custom-Lab Box Basic',
    category: 'CL' as Category,
    price: 'UGX 650,000',
    description: 'Pre-configured portable lab box for basic field water quality testing in remote areas.',
    features: ['pH, TDS & turbidity', 'Rugged carry case', 'Full reagent supply', 'User manual included'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Custom-Lab Box Advanced',
    category: 'CL' as Category,
    price: 'UGX 1,450,000',
    description: 'Advanced field lab covering both microbiological and physico-chemical testing in one compact box.',
    features: ['Microbio + physicochemical', 'Solar charging option', '20+ parameters', 'Training guide included'],
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Custom-Lab Box Enterprise',
    category: 'CL' as Category,
    price: 'Contact for pricing',
    description: 'Fully customised laboratory box built to your exact specifications for large-scale programs.',
    features: ['Fully configurable', 'Branded packaging available', 'Bulk pricing', 'Dedicated support'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop',
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative w-full bg-white min-h-[550px] sm:min-h-[450px] flex items-center justify-center"
        style={{ minHeight: '550px' }}
      >
        <img
          src="/products-hero.jpg"
          alt="Our Products Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <p className="mt-6 text-white font-[Inter,sans-serif] font-semibold text-5xl sm:text-6xl tracking-tight leading-tight">
            Our Products
          </p>
          <p className="text-lg text-white/90 max-w-2xl drop-shadow text-left">
            High-quality water testing and treatment equipment for field, laboratory, and remote applications
          </p>
        </div>
      </section>

      {/* Intro Section - Image left, text right */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1200&auto=format&fit=crop"
                alt="Water testing equipment"
                className="w-full h-80 md:h-[26rem] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-snug font-[Inter,sans-serif]">
                Lasting solutions made in Germany
              </h2>
              <p className="text-base text-gray-600 leading-7 font-[Inter,sans-serif]">
                Robustness, independence, reliability and simplicity are the essential ingredients for equipment, when it comes to successful and continuous water testing activities in remote locations.
              </p>
              <p className="text-base text-gray-600 leading-7 font-[Inter,sans-serif]">
                Our products focus on these factors and provide you with solutions that fulfill their task under harsh conditions — delivering the quality and dependability your community deserves.
              </p>
              <div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0077b6] border border-[#0077b6] px-5 py-2.5 rounded-md hover:bg-black hover:border-black transition-colors font-[Inter,sans-serif]"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-colors border font-[Inter,sans-serif] ${
                  activeCategory === cat.id
                    ? 'bg-[#0077b6] text-white border-[#0077b6]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#0077b6] hover:text-[#0077b6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filtered.map((product, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col grow">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077b6] mb-2">
                    {product.category} — {categories.find(c => c.id === product.category)?.label.split('–')[1]?.trim()}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2 font-[Inter,sans-serif]">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-4 grow leading-relaxed">{product.description}</p>
                  <ul className="space-y-1 mb-5 border-t border-gray-100 pt-4">
                    {product.features.map((feature, fidx) => (
                      <li key={fidx} className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0077b6] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-base font-bold text-gray-900 font-[Inter,sans-serif]">{product.price}</span>
                    <button className="flex items-center gap-2 bg-[#0077b6] hover:bg-[#005f8a] transition-colors text-white text-xs font-semibold px-4 py-2 rounded-md">
                      <ShoppingCart size={14} />
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gray-50 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Inter,sans-serif]">Need a Custom Solution?</h2>
            <p className="text-base text-gray-500 mb-6 font-[Inter,sans-serif]">
              Our product specialists are ready to recommend the perfect solution for your needs
            </p>
            <a href="/contact" className="inline-block bg-[#0077b6] hover:bg-[#005f8a] text-white px-8 py-3 rounded-md font-semibold transition-colors font-[Inter,sans-serif]">
              Get Expert Recommendation
            </a>
          </div>

        </div>
      </main>

      {/* Why Our Products Section */}
      <section className="py-16 bg-gray-50 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center font-[Inter,sans-serif]">
            Why professionals trust our products
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto font-[Inter,sans-serif]">
            From remote field missions to accredited laboratories, our equipment is designed to deliver accurate, reliable results — every time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
                title: 'Certified Accuracy',
                description: 'All products meet ISO and WHO water quality standards, ensuring results you can present with confidence.',
              },
              {
                image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
                title: 'Built for the Field',
                description: 'Rugged, portable, and solar-compatible — our kits perform under harsh conditions where lab infrastructure is unavailable.',
              },
              {
                image: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=800&auto=format&fit=crop',
                title: 'Made in Germany',
                description: 'German engineering heritage means precision manufacturing, long product lifespan, and consistent quality batch after batch.',
              },
              {
                image: 'https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=800&auto=format&fit=crop',
                title: 'Trusted by NGOs & Governments',
                description: 'Used by international development organisations, public health agencies, and water utilities across East Africa.',
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-gray-900 font-[Inter,sans-serif]">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-[Inter,sans-serif]">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

import { CtaSection } from '@/components/cta-section';

type Category = 'All' | 'MT' | 'PT' | 'CL' | 'GP';

const categories: { id: Category; label: string }[] = [
  { id: 'All', label: 'All Products' },
  { id: 'MT', label: 'MT – Microbiological Testing' },
  { id: 'PT', label: 'PT – Physico-chemical Testing' },
  { id: 'CL', label: 'ML – Mobile Laboratory' },
  { id: 'GP', label: 'GP – General Products' },
];

const products = [
  {
    name: 'LETZTEST Test Tube',
    category: 'MT' as Category,
    description: 'Rapid on-site detection of coliform bacteria and E.coli in water sources with easy-to-read results.',
    features: ['Detects coliforms & E.coli', 'Results in 24 hours', 'No lab equipment needed', 'Includes 50 tests'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'MT LETZTEST Household Water Test Kit',
    category: 'MT' as Category,
    description: 'Handheld device for real-time microbial contamination screening in field conditions.',
    features: ['Real-time screening', 'Rechargeable battery', 'Waterproof housing', 'Data logging via USB'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'LETZTEST Portable Membrane Filtration Kit',
    category: 'MT' as Category,
    description: 'Single-use test strips for fast qualitative detection of E.coli contamination in drinking water.',
    features: ['Results in 15 minutes', 'Pack of 100 strips', 'High sensitivity', 'Suitable for field use'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'LETZTEST Portable Electricity-Free Incubator -37°C',
    category: 'MT' as Category,
    description: 'Single-use test strips for fast qualitative detection of E.coli contamination in drinking water.',
    features: ['Results in 15 minutes', 'Pack of 100 strips', 'High sensitivity', 'Suitable for field use'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'LETZTEST Water Sampler',
    category: 'MT' as Category,
    description: 'Single-use test strips for fast qualitative detection of E.coli contamination in drinking water.',
    features: ['Results in 15 minutes', 'Pack of 100 strips', 'High sensitivity', 'Suitable for field use'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'LETZTEST Laboratory Membrane Filtration Kit',
    category: 'MT' as Category,
    description: 'Single-use test strips for fast qualitative detection of E.coli contamination in drinking water.',
    features: ['Results in 15 minutes', 'Pack of 100 strips', 'High sensitivity', 'Suitable for field use'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'LETZTEST Big Electricity-Free Incubator – 37°C',
    category: 'MT' as Category,
    description: 'Single-use test strips for fast qualitative detection of E.coli contamination in drinking water.',
    features: ['Results in 15 minutes', 'Pack of 100 strips', 'High sensitivity', 'Suitable for field use'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'PC Turbidity Tube',
    category: 'PT' as Category,
    description: 'Dual-function digital meter for measuring pH and total dissolved solids in water samples.',
    features: ['±0.01 pH accuracy', 'TDS range 0–9999 ppm', 'Auto temperature compensation', 'Waterproof design'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'PC Visual Color Comparator – pH and chlorine',
    category: 'PT' as Category,
    description: 'Benchtop analyzer for comprehensive physico-chemical water quality profiling in one device.',
    features: ['12 parameters tested', 'Turbidity, hardness, conductivity', 'Bluetooth data export', 'Calibration included'],
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'LETZTESTER – Ultimate Visual Color Comparator Kit',
    category: 'PT' as Category,
    description: 'Complete reagent-based kit for testing chlorine, nitrates, iron, fluoride and more.',
    features: ['10 chemical parameters', 'Color comparison method', 'Includes test tubes & vials', '100+ tests per kit'],
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'LETZTEST Multimeter',
    category: 'PT' as Category,
    description: 'Complete reagent-based kit for testing chlorine, nitrates, iron, fluoride and more.',
    features: ['10 chemical parameters', 'Color comparison method', 'Includes test tubes & vials', '100+ tests per kit'],
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'LETZTEST Photometer',
    category: 'PT' as Category,
    description: 'Complete reagent-based kit for testing chlorine, nitrates, iron, fluoride and more.',
    features: ['10 chemical parameters', 'Color comparison method', 'Includes test tubes & vials', '100+ tests per kit'],
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'LETZTEST Visual Arsenic Test Kit',
    category: 'PT' as Category,
    description: 'Complete reagent-based kit for testing chlorine, nitrates, iron, fluoride and more.',
    features: ['10 chemical parameters', 'Color comparison method', 'Includes test tubes & vials', '100+ tests per kit'],
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'LETZTEST Water Monitoring Box BASIC',
    category: 'CL' as Category,
    description: 'Pre-configured portable lab box for basic field water quality testing in remote areas.',
    features: ['pH, TDS & turbidity', 'Rugged carry case', 'Full reagent supply', 'User manual included'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'LETZTEST Water Monitoring Box ADVANCED',
    category: 'CL' as Category,
    description: 'Advanced field lab covering both microbiological and physico-chemical testing in one compact box.',
    features: ['Microbio + physicochemical', 'Solar charging option', '20+ parameters', 'Training guide included'],
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Water Storage Tank – 1000L',
    category: 'GP' as Category,
    description: 'Durable, food-grade polyethylene water storage tank suitable for household and institutional use.',
    features: ['Food-grade material', 'UV-resistant', 'Easy installation', '10-year warranty'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Activated Carbon Filter Cartridge',
    category: 'GP' as Category,
    description: 'High-quality activated carbon filter for removing chlorine, odors, and organic contaminants from water.',
    features: ['Reduces chlorine & taste', 'High adsorption capacity', 'Standard 10" size', 'Lasts 6 months'],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Sediment Pre-Filter – 5 Micron',
    category: 'GP' as Category,
    description: 'Spun polypropylene sediment filter for removing sand, rust, and suspended particles from water.',
    features: ['5 micron rating', 'High dirt-holding capacity', 'Universal fit', 'Washable & reusable'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Reverse Osmosis Membrane – 50 GPD',
    category: 'GP' as Category,
    description: 'High-rejection thin-film composite RO membrane for residential and commercial water purification.',
    features: ['50 gallons per day', '99% rejection rate', 'Thin-film composite', 'Standard 1812 size'],
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'UV Sterilization Chamber – 12W',
    category: 'GP' as Category,
    description: 'Ultraviolet water sterilizer that eliminates 99.9% of bacteria, viruses, and pathogens without chemicals.',
    features: ['12W UV lamp', '99.9% pathogen kill', 'No chemical residue', 'Low power consumption'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop',
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
        className="relative w-full bg-white min-h-[300px] sm:min-h-[550px] flex items-center justify-center"
      >
        <img
          src="/filtration.jpg"
          alt="Our Products Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start justify-center py-10 sm:py-28 px-4 sm:px-6 lg:px-8">
          <p className="mt-6 text-white font-[Inter,sans-serif] font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Official Supplier of Laboratory <br/> Equipment Across East Africa <br/> & Sole Authorized LETZTEST <br/>Distributor in Uganda.
          </p>
        </div>
      </section>

      {/* Intro Section - Image left, text right */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 shrink-0">
              <img
                src="/letztest steel.png"
                alt="Water testing equipment"
                className="w-full h-130 md:h-104 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-snug font-[Inter,sans-serif]">
                Lasting solutions made in Germany
              </h2>
              <p className="text-base text-gray-600 leading-7 font-[Inter,sans-serif]">
                Robustness, independence, reliability and simplicity are the essential ingredients for equipment, when it comes to successful and continuous water testing activities in remote locations.
              </p>
              <p className="text-base text-gray-600 leading-7 font-[Inter,sans-serif]">
                Our products focus on these factors and provide you with solutions that fulfill their task under harsh conditions, delivering the quality and dependability your community deserves.
              </p>
              <p className="text-base text-gray-600 leading-7 font-[Inter,sans-serif]">
                As the <strong>sole authorized LETZTEST distributor in Uganda</strong>, we bring German-engineered water testing solutions directly to you, backed by local support, training, and certified after-sales service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Category Filter */}
          <div className="mb-10 relative w-fit">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value as Category)}
              className="w-full sm:w-auto px-5 py-2.5 pr-10 appearance-none rounded-md text-sm font-semibold border border-gray-200 bg-white text-gray-700 focus:outline-none focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] font-[Inter,sans-serif]"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
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
                  <div className="flex items-center gap-2 mt-auto">
                    <a
                      href={`https://wa.me/256700000000?text=${encodeURIComponent('Hello! I am interested in the ' + product.name + '. Please send me more details.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white hover:bg-[#25D366] border border-gray-300 hover:border-[#25D366] text-black hover:text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 00.611.612l6.088-1.456A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.892a9.877 9.877 0 01-5.032-1.378l-.36-.214-3.733.893.912-3.65-.235-.375A9.856 9.856 0 012.108 12C2.108 6.533 6.533 2.108 12 2.108S21.892 6.533 21.892 12 17.467 21.892 12 21.892z"/>
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:info@aquasolutionsinternational.com?subject=${encodeURIComponent('Enquiry: ' + product.name)}&body=${encodeURIComponent('Hello! I am interested in the ' + product.name + '. Please send me more details.')}`}
                      className="flex items-center gap-2 bg-white hover:bg-[#0077b6] border border-gray-300 hover:border-[#0077b6] text-black hover:text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Why Our Products Section */}
      <section className="py-16 bg-gray-50 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4 text-center font-[Inter,sans-serif]">
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

      <CtaSection />
      <Footer />
    </div>
  );
}


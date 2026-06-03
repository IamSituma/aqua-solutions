'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { CtaSection } from '@/components/cta-section';
import { Category, categories, products } from '@/lib/products';

export default function Products() {
  useEffect(() => { document.title = 'Products | Aqua Solutions International'; }, []);
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
              <Link key={idx} href={`/products/${product.slug}`} className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-base font-bold text-gray-900 mb-2 font-[Inter,sans-serif] group-hover:text-[#0077b6] transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500 grow leading-relaxed line-clamp-2">{product.description}</p>
                </div>
              </Link>
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


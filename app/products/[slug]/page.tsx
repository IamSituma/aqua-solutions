'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CtaSection } from '@/components/cta-section';
import { products, categories } from '@/lib/products';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
            <Link href="/products" className="text-[#0077b6] hover:underline">
              Back to products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryLabel = categories.find((c) => c.id === product.category)?.label;

  const related = products.filter((p) => p.category === product.category && p.slug !== slug);

  const [activeTab, setActiveTab] = useState<'specifications' | 'advantages' | 'features'>('specifications');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077b6] mb-3">
                {product.category} — {categoryLabel?.split('–')[1]?.trim()}
              </span>
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 font-[Inter,sans-serif]">
                {product.name}
              </h1>
              <p className="text-base text-gray-600 leading-7 mb-8 font-[Inter,sans-serif]">
                {product.description}
              </p>

              <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-200">
                <a
                  href={`https://wa.me/256700000000?text=${encodeURIComponent('Hello! I am interested in the ' + product.name + '. Please send me more details.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 00.611.612l6.088-1.456A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.892a9.877 9.877 0 01-5.032-1.378l-.36-.214-3.733.893.912-3.65-.235-.375A9.856 9.856 0 012.108 12C2.108 6.533 6.533 2.108 12 2.108S21.892 6.533 21.892 12 17.467 21.892 12 21.892z"/>
                  </svg>
                  Enquire on WhatsApp
                </a>
                <a
                  href={`mailto:info@aquasolutionsinternational.com?subject=${encodeURIComponent('Enquiry: ' + product.name)}&body=${encodeURIComponent('Hello! I am interested in the ' + product.name + '. Please send me more details.')}`}
                  className="flex items-center gap-2 bg-white hover:bg-[#0077b6] border border-gray-300 hover:border-[#0077b6] text-black hover:text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="border-b border-gray-200">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
                    activeTab === 'specifications'
                      ? 'border-[#0077b6] text-[#0077b6]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Product Specification
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
                    activeTab === 'features'
                      ? 'border-[#0077b6] text-[#0077b6]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('advantages')}
                  className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
                    activeTab === 'advantages'
                      ? 'border-[#0077b6] text-[#0077b6]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Advantages
                </button>
              </div>
            </div>
            <div className="mt-6">
              {activeTab === 'specifications' && (
                <ul className="space-y-3">
                  {product.specifications?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-[#0077b6]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === 'features' && (
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-[#0077b6]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === 'advantages' && (
                <ul className="space-y-3">
                  {product.advantages?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-20">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 font-[Inter,sans-serif]">
                More in {categoryLabel?.split('–')[1]?.trim() || 'this category'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col group"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-5 flex flex-col grow">
                      <h3 className="text-sm font-bold text-gray-900 mb-2 font-[Inter,sans-serif] group-hover:text-[#0077b6] transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <CtaSection />
      <Footer />
    </div>
  );
}

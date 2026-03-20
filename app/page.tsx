'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const carouselImages = [
    { src: 'https://placehold.co/900x500/e0f2fe/0077b6?text=Clean+Drinking+Water', alt: 'Clean drinking water' },
    { src: 'https://placehold.co/900x500/bae6fd/005f8a?text=Water+Filtration', alt: 'Water filtration' },
    { src: 'https://placehold.co/900x500/cffafe/0e7490?text=Safe+Water+Supply', alt: 'Safe water supply' },
    { src: 'https://placehold.co/900x500/dbeafe/1d4ed8?text=Borehole+Water', alt: 'Borehole water' },
    { src: 'https://placehold.co/900x500/e0f2fe/0077b6?text=Purification+Plant', alt: 'Purification plant' },
    { src: 'https://placehold.co/900x500/f0f9ff/0369a1?text=Community+Water', alt: 'Community water' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-black sm:pt-40 lg:pt-48 lg:pb-32">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/hero/3/background.png"
            alt=""
          />
        </div>

        {/* Content */}
        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="w-full lg:w-2/3 xl:w-1/2">
              <p className="mt-6 text-white font-[Inter,sans-serif] font-semibold text-5xl sm:text-6xl tracking-tight leading-tight">
                Clean water for every home
              </p>
              <p className="mt-12 font-[Inter,sans-serif] text-base font-normal leading-7 text-white/70">
                Aqua Solutions provides comprehensive water treatment, purification, and supply
                services across Kampala and Uganda. Reliable, safe, and sustainable water for
                residential and commercial needs.
              </p>
              <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-2.5 font-[Inter,sans-serif] text-base font-semibold transition-all duration-200 rounded-md bg-white text-black hover:bg-gray-100"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2.5 font-[Inter,sans-serif] text-base font-semibold transition-all duration-200 rounded-md border-2 border-white text-white hover:bg-white hover:text-black"
                >
                  Get a Quotation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white sm:py-20">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-black tracking-tight">Services We Offer</h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#0077b6] border border-[#0077b6] px-4 py-2 rounded-md hover:bg-[#0077b6] hover:text-white transition-colors"
            >
              View all services
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Water Purification',
                description:
                  'Advanced filtration and purification systems that remove contaminants, bacteria, and impurities to deliver safe, clean drinking water for homes and businesses.',
                img: 'https://placehold.co/600x400/e0f2fe/0077b6?text=Water+Purification',
              },
              {
                title: 'Borehole Drilling',
                description:
                  'Professional borehole drilling services to access underground water sources. We handle site assessment, drilling, casing, and pump installation from start to finish.',
                img: 'https://placehold.co/600x400/e0f2fe/0077b6?text=Borehole+Drilling',
              },
              {
                title: 'Water Treatment Systems',
                description:
                  'Installation and maintenance of commercial and residential water treatment systems including reverse osmosis, UV sterilisation, and softening units.',
                img: 'https://placehold.co/600x400/e0f2fe/0077b6?text=Treatment+Systems',
              },
            ].map((service) => (
              <div key={service.title} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-1 mt-4 w-fit text-sm font-medium text-black hover:text-[#0077b6] transition-colors"
                  >
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Gallery Section */}
      <section className="py-16 bg-gray-50 sm:py-20">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

            {/* Left: text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight leading-snug mb-6">
                Safe &amp; clean water for healthier communities
              </h2>
              <p className="text-gray-600 text-base leading-7 mb-4">
                Access to clean water is a fundamental human right. At Aqua Solutions, we work every day to bring safe, purified water to homes, schools, and businesses across Kampala and Uganda.
              </p>
              <p className="text-gray-600 text-base leading-7 mb-8">
                Our systems are designed for reliability and long-term sustainability — because clean water isn't a luxury, it's a necessity. From borehole drilling to advanced filtration, we deliver end-to-end water solutions trusted by thousands of families.
              </p>
              <ul className="space-y-3 mb-8">
                {['Certified water treatment specialists', 'Over 500 installations across Uganda', '24/7 maintenance and support', 'Eco-friendly and sustainable methods'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-[#0077b6] flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="w-fit inline-flex items-center gap-1 text-sm font-semibold text-[#0077b6] border border-[#0077b6] px-5 py-2.5 rounded-md hover:bg-[#0077b6] hover:text-white transition-colors"
              >
                Learn about us
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right: main image + thumbnail carousel */}
            <div className="flex flex-col h-full">
              {/* Main image */}
              <div className="rounded-lg overflow-hidden mb-3 flex-1" style={{minHeight: '300px'}}>
                <img
                  src={carouselImages[activeIndex].src}
                  alt={carouselImages[activeIndex].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-6 gap-2">
                {carouselImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`rounded overflow-hidden border-2 transition-all ${
                      activeIndex === i ? 'border-[#0077b6]' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-14 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

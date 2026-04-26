'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CtaSection } from '@/components/cta-section';
import Link from 'next/link';
import { useState } from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

export default function Home() {
  const carouselImages = [
    { src: '/borehole water.jpg', alt: 'Borehole water' },
    { src: '/community.jpg', alt: 'Community water' },
    { src: '/drinking.jpg', alt: 'Clean drinking water' },
    { src: '/filtration.jpg', alt: 'Water filtration' },
    { src: '/purification.jpg', alt: 'Purification plant' },
    { src: '/safe water.jpg', alt: 'Safe water supply' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const whyItems = [
    {
      title: 'Certified & Trusted',
      description: 'All our systems and installations meet national and international water safety standards, giving you peace of mind.',
      header: (
        <div className="flex flex-1 w-full h-full min-h-24 rounded-xl overflow-hidden">
          <img src="https://placehold.co/600x300/e0f2fe/0077b6?text=Certified+%26+Trusted" alt="Certified & Trusted" className="w-full h-full object-cover" />
        </div>
      ),
      icon: (
        <svg className="h-4 w-4 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Fast Installation',
      description: 'Our experienced teams deliver and install systems quickly with minimal disruption to your home or business.',
      header: (
        <div className="flex flex-1 w-full h-full min-h-24 rounded-xl overflow-hidden">
          <img src="https://placehold.co/600x300/cffafe/0e7490?text=Fast+Installation" alt="Fast Installation" className="w-full h-full object-cover" />
        </div>
      ),
      icon: (
        <svg className="h-4 w-4 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: '24/7 Customer Support',
      description: 'Our support team is available round the clock to handle maintenance requests, emergencies, and general enquiries.',
      header: (
        <div className="flex flex-1 w-full h-full min-h-24 rounded-xl overflow-hidden">
          <img src="https://placehold.co/600x300/dbeafe/1d4ed8?text=24%2F7+Support" alt="24/7 Customer Support" className="w-full h-full object-cover" />
        </div>
      ),
      icon: (
        <svg className="h-4 w-4 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Eco-Friendly Methods',
      description: 'We use sustainable practices and materials to safeguard Uganda\'s natural resources and protect the environment for future generations.',
      header: (
        <div className="flex flex-1 w-full h-full min-h-24 rounded-xl overflow-hidden">
          <img src="https://placehold.co/600x300/d1fae5/059669?text=Eco-Friendly+Methods" alt="Eco-Friendly Methods" className="w-full h-full object-cover" />
        </div>
      ),
      icon: (
        <svg className="h-4 w-4 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
    },
    {
      title: 'Affordable Pricing',
      description: 'Quality water solutions at competitive prices, with flexible payment options to suit every budget.',
      header: (
        <div className="flex flex-1 w-full h-full min-h-24 rounded-xl overflow-hidden">
          <img src="https://placehold.co/600x300/e0f2fe/0077b6?text=Affordable+Pricing" alt="Affordable Pricing" className="w-full h-full object-cover" />
        </div>
      ),
      icon: (
        <svg className="h-4 w-4 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-black sm:py-32 lg:py-40">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="/sparkling water.jpg"
            alt="Sparkling Water"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Content */}
        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="w-full lg:w-2/3 xl:w-1/2">
              <p className="mt-6 text-white font-[Inter,sans-serif] font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                Clean Water For Every Home
              </p>
              <p className="mt-6 sm:mt-12 font-[Inter,sans-serif] text-sm sm:text-base font-normal leading-7 text-white/70">
                Aqua Solutions International provides comprehensive water treatment, purification, and supply
                services across Kampala and Uganda. Reliable, safe, and sustainable water for
                residential and commercial needs.
              </p>
              <div className="flex items-center mt-5 space-x-2 sm:space-x-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-2.5 font-[Inter,sans-serif] text-sm sm:text-base font-semibold transition-all duration-200 rounded-md bg-white text-black hover:bg-gray-100"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-2.5 font-[Inter,sans-serif] text-sm sm:text-base font-semibold transition-all duration-200 rounded-md border-2 border-white text-white hover:bg-white hover:text-black"
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
            <h2 className="text-xl sm:text-3xl font-bold text-black tracking-tight">Services We Offer</h2>
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
                img: '/water treatment.jpg',
              },
              {
                title: 'Borehole Drilling',
                description:
                  'Professional borehole drilling services to access underground water sources. We handle site assessment, drilling, casing, and pump installation from start to finish.',
                img: '/borehole.jpg',
              },
              {
                title: 'Water Treatment Systems',
                description:
                  'Installation and maintenance of commercial and residential water treatment systems including reverse osmosis, UV sterilisation, and softening units.',
                img: '/water treatment system.jpg',
              },
            ].map((service) => (
              <div key={service.title} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-contain"
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
              <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight leading-snug mb-6">
                Safe &amp; Clean Water For Healthier Communities
              </h2>
              <p className="text-gray-600 text-base leading-7 mb-4">
                Access to clean water is a fundamental human right. At Aqua Solutions International, we work every day to bring safe, purified water to homes, schools, and businesses across Kampala and Uganda.
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
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href="/about"
                  className="w-fit inline-flex items-center gap-1 text-sm font-semibold text-[#0077b6] border border-[#0077b6] px-5 py-2.5 rounded-md hover:bg-[#0077b6] hover:text-white transition-colors"
                >
                  Learn about us
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="w-fit inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0077b6] border border-[#0077b6] px-5 py-2.5 rounded-md hover:bg-black hover:border-black transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact us
                </Link>
              </div>
            </div>

            {/* Right: main image + thumbnail carousel */}
            <div className="flex flex-col h-full">
              {/* Main image */}
              <div className="rounded-lg overflow-hidden mb-3 flex-1" style={{minHeight: '300px'}}>
                <img
                  src={carouselImages[activeIndex].src}
                  alt={carouselImages[activeIndex].alt}
                  className="w-full h-full object-contain"
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
                      className="w-full h-14 object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white sm:py-20">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-xl sm:text-3xl font-bold text-black tracking-tight">Our Products</h2>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#0077b6] border border-[#0077b6] px-4 py-2 rounded-md hover:bg-[#0077b6] hover:text-white transition-colors"
            >
              View all products
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Domestic Water Filter',
                description: 'Compact under-sink or countertop filter for home use. Removes chlorine, sediment, and heavy metals for clean, great-tasting drinking water.',
                price: 'UGX 350,000',
                img: '/filter.png',
                message: 'Hello! I am interested in the Domestic Water Filter. Please send me more details.',
              },
              {
                title: 'Reverse Osmosis System',
                description: 'Advanced 5-stage RO system for homes and offices. Delivers up to 99% purification, removing bacteria, dissolved solids, and contaminants.',
                price: 'UGX 1,200,000',
                img: '/osmosis.png',
                message: 'Hello! I am interested in the Reverse Osmosis System. Please send me more details.',
              },
              {
                title: 'UV Water Steriliser',
                description: 'Ultraviolet sterilisation unit that eliminates 99.9% of bacteria, viruses, and pathogens without chemicals. Ideal for boreholes and tanks.',
                price: 'UGX 780,000',
                img: '/uv.png',
                message: 'Hello! I am interested in the UV Water Steriliser. Please send me more details.',
              },
            ].map((product) => {
              const waNumber = '256700000000';
              const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(product.message)}`;
              return (
                <div key={product.title} className="rounded-lg overflow-hidden border border-gray-200 bg-white">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-black mb-1">{product.title}</h3>
                    <p className="text-sm font-medium text-[#0077b6] mb-3">{product.price}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{product.description}</p>
                    <div className="flex items-center gap-3">
                      <Link
                        href="/products"
                        className="group inline-flex items-center gap-1 text-sm font-medium text-black hover:text-[#0077b6] transition-colors w-fit"
                      >
                        More details
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#25D366] px-4 py-1.5 rounded-md hover:bg-[#1ebe5d] transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 00.611.612l6.088-1.456A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.892a9.877 9.877 0 01-5.032-1.378l-.36-.214-3.733.893.912-3.65-.235-.375A9.856 9.856 0 012.108 12C2.108 6.533 6.533 2.108 12 2.108S21.892 6.533 21.892 12 17.467 21.892 12 21.892z"/>
                        </svg>
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 sm:py-20">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight">Why choose Aqua Solutions?</h2>
            <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto leading-7">
              We combine local expertise with world-class technology to deliver water solutions that are safe, reliable, and built to last.
            </p>
          </div>
          <BentoGrid className="max-w-7xl mx-auto">
            {whyItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 ? 'md:col-span-2' : ''}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      

      {/* CTA Section */}
      <CtaSection />

      
      {/* Contact Form Section removed from landing page. */}

      <Footer />
    </div>
  );
}

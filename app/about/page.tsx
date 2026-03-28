
'use client';



import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { useState } from 'react';
import LayoutGrid from '@/components/layout-grid';
import { aboutGridCards } from '@/components/about-grid-data';



export default function About() {
  const carouselImages = [
    { src: 'https://picsum.photos/seed/carousel1/800/600', alt: 'Borehole water' },
    { src: 'https://picsum.photos/seed/carousel2/800/600', alt: 'Community water' },
    { src: 'https://picsum.photos/seed/carousel3/800/600', alt: 'Clean drinking water' },
    { src: 'https://picsum.photos/seed/carousel4/800/600', alt: 'Water filtration' },
    { src: 'https://picsum.photos/seed/carousel5/800/600', alt: 'Purification plant' },
    { src: 'https://picsum.photos/seed/carousel6/800/600', alt: 'Safe water supply' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen flex flex-col grow bg-white">
      <Navigation />

      {/* Hero Section with full-width background image */}
      <section
        className="relative w-full bg-white min-h-[300px] sm:min-h-[550px] flex items-center justify-center"
      >
        <img
          src="/community.jpg"
          alt="About Aqua Solutions Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start justify-center py-10 sm:py-28 px-4 sm:px-6 lg:px-8">
          <p className="mt-6 text-white font-[Inter,sans-serif] font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            About Us
          </p>
          <p className="text-sm sm:text-lg text-white/90 max-w-2xl drop-shadow text-left">
            Leading provider of water treatment and supply solutions in Kampala, Uganda since 2015
          </p>
        </div>
      </section>

      {/* Vision & Mission Section with image */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Image on the left */}
            <div className="w-full md:w-1/2 shrink-0">
              <img
                src="/clean water.jpg"
                alt="Aqua Solutions Vision"
                className="w-full h-100 md:h-128 object-cover rounded-lg shadow-md border border-gray-200"
              />
            </div>
            {/* Vision & Mission on the right */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              <p className="text-base font-[Inter,sans-serif] leading-7 text-gray-600">
                At Aqua Solutions, our vision and mission drive every project we undertake. We are dedicated to delivering innovative, sustainable, and reliable water solutions that transform lives and communities across Uganda and East Africa.
              </p>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Our Vision</h3>
                <p className="text-base font-[Inter,sans-serif] leading-7 text-gray-600">
                  To be the most trusted and innovative water solutions provider in East Africa, setting industry standards for quality and sustainability.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Our Mission</h3>
                <p className="text-base font-[Inter,sans-serif] leading-7 text-gray-600">
                  To provide safe, clean, and reliable water solutions that improve the quality of life for communities across Kampala and Uganda.
                </p>
              </div>
            </div>
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
                Our Story
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

      {/* Image Gallery Grid Section */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight leading-snug mb-3">
              Our Gallery
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              A glimpse into our projects, installations, and the communities we serve across Uganda.
            </p>
          </div>
        </div>
        <div className="h-187.5 w-full">
          <LayoutGrid cards={aboutGridCards} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-3xl font-bold text-primary mb-4 text-center">Why Communities Trust Us</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              From advanced technology to round-the-clock support, here's what sets Aqua Solutions apart.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=800&auto=format&fit=crop',
                  title: 'Certified Technology',
                  description: 'ISO-certified water purification systems built to international quality standards.',
                },
                {
                  image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
                  title: '15+ Years Experience',
                  description: 'Our expert engineers bring over 15 years of hands-on water solutions expertise.',
                },
                {
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
                  title: '24/7 Support',
                  description: 'Round-the-clock emergency response and maintenance to keep your water flowing.',
                },
                {
                  image: '/purification.jpg',
                  title: 'Eco-Friendly Methods',
                  description: "Sustainable, environmentally responsible practices that protect Uganda's natural resources.",
                },
                {
                  image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop',
                  title: 'Affordable Pricing',
                  description: 'Transparent, competitive pricing with flexible packages suited for every budget.',
                },
                {
                  image: '/safe water.jpg',
                  title: 'Water Testing',
                  description: 'Comprehensive on-site and lab water quality testing to ensure safety at every stage.',
                },
                {
                  image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&auto=format&fit=crop',
                  title: 'Full Maintenance',
                  description: 'End-to-end maintenance and support packages keeping systems running at peak performance.',
                },
                {
                  image: 'https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=800&auto=format&fit=crop',
                  title: '500+ Installations',
                  description: 'Over 500 successful water system installations across homes, schools, and businesses in Uganda.',
                },
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      <main className="grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Team Section */}
          <div>
            <h2 className="text-xl sm:text-3xl font-bold text-primary mb-4 text-center">Our Team</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Our dedicated team of water quality experts, engineers, and customer service professionals are committed to delivering excellence every day.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
                  name: 'Dr. Jacintha Nayebare',
                  role: 'Director of Research and Development',
                },
                {
                  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
                  name: 'Claire Kowalewski',
                  role: 'Water Scientist',
                },
                {
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
                  name: 'Janepher Turinawe',
                  role: 'Director and Chief Laboratory Technician',
                },
                {
                  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
                  name: 'Claire Natukunda',
                  role: 'Director at Aqua Solutions International Limited',
                },
              ].map((member, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="p-5 flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#about-cta-gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="about-cta-gradient">
                  <stop stopColor="#0077b6" />
                  <stop offset={1} stopColor="#00b4d8" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-4xl font-[Inter,sans-serif]">
                Ready for clean, safe water in your home or business?
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300 font-[Inter,sans-serif]">
                Get in touch with our team today for a free consultation and quote. We serve homes, schools, hospitals, and businesses across Kampala and Uganda.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="/contact"
                  className="rounded-md bg-[#0077b6] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#005f8a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-[Inter,sans-serif]"
                >
                  Get a Free Quote
                </Link>
                <Link href="/services" className="text-sm font-semibold text-white hover:text-gray-100 font-[Inter,sans-serif]">
                  Explore Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="Aqua Solutions water treatment"
                src="https://placehold.co/1824x1080/0077b6/ffffff?text=Aqua+Solutions"
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
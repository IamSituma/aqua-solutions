'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Retailing of Water Testing Kits & Equipment',
    description:
      'Aqua Uganda is a retailer and distributor of water quality testing equipment and laboratory consumables. We are the sole distributors of Letztest water testing equipment and offer both chemical and microbiological water testing kits from LETZTEST. These kits are manufactured by the ISO 9001:2015 certified company Letzner Pharmawasseraufbereitung GmbH. The equipment is delivered safely right where you need it.',
    features: [
      'Sole distributors of Letztest equipment',
      'Chemical & microbiological test kits',
      'ISO 9001:2015 certified products',
      'Safe delivery to your location',
    ],
    images: [
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=900&auto=format&fit=crop',
    ],
  },
  {
    title: 'Water Quality Management',
    description:
      'We provide comprehensive water quality management services including conducting regular tests to assess water quality from various sources, chemical analysis for contaminants and pollutants, and microbiological testing for harmful microorganisms. We also specialise in setting up and operationalising off-grid water testing laboratories to help remote facilities run efficiently.',
    features: [
      'Water testing services',
      'Chemical analysis',
      'Microbiological testing',
      'Off-grid lab setup & operationalisation',
    ],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=900&auto=format&fit=crop',
    ],
  },
  {
    title: 'Quality Water Tests',
    description:
      'With our potable water testing kits, we are able to test your water for both physico-chemical and microbiological parameters qualitatively in situ. We also offer quantitative laboratory services for precise measurement of different water quality parameters in our fully equipped labs.',
    features: [
      'Physico-chemical parameter testing',
      'Microbiological parameter testing',
      'In-situ field testing',
      'Quantitative lab measurements',
    ],
    images: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=900&auto=format&fit=crop',
    ],
  },
  {
    title: 'Water Treatment',
    description:
      'We implement water treatment processes for small-scale industries to ensure water meets the required quality standards. Our solutions are tailored to the specific needs of each client, using proven technologies to remove contaminants and deliver consistently safe, clean water.',
    features: [
      'Small-scale industry treatment',
      'Custom treatment process design',
      'Contaminant removal',
      'Ongoing quality monitoring',
    ],
    images: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=900&auto=format&fit=crop',
    ],
  },
  {
    title: 'Borehole Drilling & Installation',
    description:
      'We offer end-to-end borehole solutions: geological site assessments to determine the most suitable drilling locations, professional borehole drilling using appropriate equipment, installation of casings to prevent contamination, and pump installation for reliable groundwater extraction.',
    features: [
      'Geological site assessment',
      'Professional borehole drilling',
      'Casing & completion',
      'Pump installation',
    ],
    images: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=900&auto=format&fit=crop',
    ],
  },
  {
    title: 'Water Tank Cleaning',
    description:
      'Our tank cleaning services cover thorough inspection of water storage tanks, removal of sediments, algae, and other contaminants, application of disinfectants to eliminate bacteria and ensure water safety, and ongoing maintenance and repair to keep your storage infrastructure in peak condition.',
    features: [
      'Tank inspection & assessment',
      'Sediment & algae removal',
      'Disinfection treatment',
      'Tank maintenance & repair',
    ],
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584622781867-1a2f91cf1c34?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584991870880-5a40a5a4e6b0?q=80&w=900&auto=format&fit=crop',
    ],
  },
  {
    title: 'Community Education & Training',
    description:
      'We run water quality awareness programmes to educate communities about the importance of safe water. Our training covers water conservation, sanitation practices, and point-of-use filtration systems for homes and businesses — empowering communities to take ownership of their water health.',
    features: [
      'Water quality awareness programmes',
      'Water management training',
      'Sanitation & conservation practices',
      'Point-of-use filtration systems',
    ],
    images: [
      'https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=900&auto=format&fit=crop',
    ],
  },
  {
    title: 'Environmental Protection',
    description:
      'In our commitment to protecting the environment, we seek to reduce consumable usage and use recyclable materials wherever possible. We currently offer a recycling programme for Letztest tubes, helping our clients minimise waste and operate more sustainably.',
    features: [
      'Reduced consumable usage',
      'Recyclable material sourcing',
      'Letztest tube recycling programme',
      'Sustainable operational practices',
    ],
    images: [
      'https://images.unsplash.com/photo-1542601906897-62563aa791b5?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=900&auto=format&fit=crop',
    ],
  },
];

export default function Services() {
  const [slides, setSlides] = useState<number[]>(services.map(() => 0));

  const prev = (idx: number) =>
    setSlides((s) => s.map((v, i) => (i === idx ? (v - 1 + 4) % 4 : v)));
  const next = (idx: number) =>
    setSlides((s) => s.map((v, i) => (i === idx ? (v + 1) % 4 : v)));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative w-full bg-white min-h-[300px] sm:min-h-[550px] flex items-center justify-center"
      >
        <img
          src="/water treatment.jpg"
          alt="Our Services Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start justify-center py-10 sm:py-28 px-4 sm:px-6 lg:px-8">
          <p className="mt-6 text-white font-[Inter,sans-serif] font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Our Services
          </p>
          <p className="text-sm sm:text-lg text-white/90 max-w-2xl drop-shadow text-left">
            Comprehensive water solutions tailored to meet the needs of homes, businesses, and communities across Kampala
          </p>
        </div>
      </section>

      {/* Services */}
      <main className="grow">
        {services.map((service, idx) => (
          <section
            key={idx}
            className={`w-full border-b border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
              <div
                className={`flex flex-col gap-12 items-center ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Carousel */}
                <div className="w-full md:w-1/2 shrink-0">
                  <div className="relative overflow-hidden rounded-xl aspect-4/3 bg-gray-100 shadow-md">
                    {service.images.map((src, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={src}
                        alt={`${service.title} ${imgIdx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          slides[idx] === imgIdx ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                    {/* Arrows */}
                    <button
                      onClick={() => prev(idx)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => next(idx)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>
                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                      {service.images.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() =>
                            setSlides((s) => s.map((v, i) => (i === idx ? dotIdx : v)))
                          }
                          className={`w-2 h-2 rounded-full transition-colors ${
                            slides[idx] === dotIdx ? 'bg-white' : 'bg-white/40'
                          }`}
                          aria-label={`Go to image ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col gap-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0077b6] font-[Inter,sans-serif]">
                    Service {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-snug font-[Inter,sans-serif]">
                    {service.title}
                  </h2>
                  <p className="text-base text-gray-600 leading-7 font-[Inter,sans-serif]">
                    {service.description}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-gray-100">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-3 text-sm text-gray-600 font-[Inter,sans-serif]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0077b6] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0077b6] border border-[#0077b6] px-5 py-2.5 rounded-md hover:bg-black hover:border-black transition-colors font-[Inter,sans-serif]"
                    >
                      Enquire
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}


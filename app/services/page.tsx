'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const services = [
  {
    title: 'Supply of Water Testing Kits & Equipment',
    description:
      'Aqua Solutions International Limited is a supplier and distributor of water quality testing equipment and laboratory consumables. We are the sole distributors of Letztest water testing equipment and offer both chemical and microbiological water testing kits from LETZTEST. These kits are manufactured by the ISO 9001:2015 certified company Letzner Pharmawasseraufbereitung GmbH. The equipment is delivered safely right where you need it.',
    features: [
      'Sole distributors of Letztest equipment',
      'Chemical & microbiological test kits',
      'ISO 9001:2015 certified products',
      'Safe delivery to your location',
    ],
    image:
      '/testink-kits.jpg',
  },
  {
    title: 'Water Quality Management',
    description:
      'We provide comprehensive water quality management services including conducting regular tests to assess water quality from various sources, chemical analysis for contaminants and pollutants, and microbiological testing for harmful microorganisms. We also specialise in setting up and operationalising off-grid water testing laboratories to help remote facilities run efficiently.',
    features: [
      'Water testing services',
      'Tank Cleaning & maintenance',
      'Quality Water Tests',
    ],
    image:
      '/water-quality.webp',
  },
  {
    title: 'Water Sampling & Analysis',
    description:
      'Our water sampling service involves professionally collecting water samples from your source for laboratory testing and analysis to determine water quality, safety, and possible contamination. We ensure proper sampling procedures are followed to provide accurate results for drinking water, boreholes, wells, tanks, rivers, and other water sources.',
    features: [
      'Professional water sample collection',
      'Accurate water quality testing',
      'Safe sampling procedures',
      'Suitable for all water sources',
    ],
    image:
      '/water-testing-kit.jpeg',
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
    image:
      '/water treatment.jpg',
  },
  {
    title: 'Borehole Drilling & Installation',
    description:
      'We offer end-to-end borehole solutions: hydrogeological site assessments to determine the most suitable drilling locations, professional borehole drilling using appropriate equipment, installation of casings to prevent contamination, and pump installation for reliable groundwater extraction.',
    features: [
      'Hydrogeological site assessment',
      'Professional borehole drilling',
      ' Installation of casings',
      'Pump installation',
    ],
    image:
      '/borehole.jpeg',
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
    image:
      '/water-tank.jpeg',
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
    image:
      '/community training.jpeg',
  },
  {
    title: 'Mobile Water Testing Laboratories',
    description:
      'We set up and operationalise mobile water testing laboratories to provide on-site water quality analysis in remote or underserved areas. Our mobile labs are equipped with advanced testing equipment and staffed by trained professionals to deliver accurate results wherever you need them. ',
    features: [
      'School-to-school mobile water testing services',
      'Home-to-home water quality sampling and analysis',
      'On-site testing for organizations and institutions',
      'Flexible deployment for any location or community',
    ],
    image:
      '/mobile lab.jpeg',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full bg-white min-h-[300px] sm:min-h-[550px] flex items-center justify-center">
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
                {/* Image */}
                <div className="w-full md:w-1/2 shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] rounded-xl shadow-md object-cover"
                  />
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
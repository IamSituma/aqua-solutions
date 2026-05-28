
'use client';



import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import TeamMemberCard from '@/components/team-member-card';
import { CtaSection } from '@/components/cta-section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
export default function About() {

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
                className="w-full h-[40rem] md:h-[35rem] object-cover rounded-lg shadow-md border border-gray-200"
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

            {/* Right: single image */}
            <div className="rounded-lg overflow-hidden" style={{minHeight: '500px'}}>
              <img
                src="/aqua-expo.jpeg"
                alt="Aqua Solutions"
                className="w-full h-[500px] object-cover"
              />
            </div>

          </div>
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
                  image: 'https://images.pexels.com/photos/30218643/pexels-photo-30218643.jpeg?auto=compress&cs=tinysrgb&w=800',
                  title: 'Eco-Friendly Methods',
                  description: "Sustainable, environmentally responsible practices that protect Uganda's natural resources.",
                },
                {
                  image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop',
                  title: 'Affordable Pricing',
                  description: 'Transparent, competitive pricing with flexible packages suited for every budget.',
                },
                {
                  image: 'https://images.pexels.com/photos/3825377/pexels-photo-3825377.jpeg?auto=compress&cs=tinysrgb&w=800',
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
            <Carousel opts={{ loop: true, align: 'center' }}>
              <CarouselContent>
                {[
                  {
                    image: '/dr-jacinta.jpeg',
                    name: 'Dr. Jacintha Nayebare',
                    role: 'Director of Research and Development',
                    description: 'Dr. Jacintha Nayebare Gumoteyo is a distinguished hydrogeologist and currently serves as the Director of Research and Development at Aqua Solutions International Limited. With more than fifteen years of expertise in water resources and environmental management, she has established herself as a leading authority in geohydrology. Her career spans diverse projects, including groundwater development, environmental stewardship, and advancing sustainable water resource utilization.Dr. Jacintha’s academic achievements further underscore her professional excellence. She earned her Ph.D. in Water Resource Management from Makerere University, complementing her MSc in Hydrogeology, Engineering Geology, and Environmental Management from the Technical University of Darmstadt, Germany, and her BSc in Geological Resources Management from Makerere University, Uganda. These qualifications, combined with her extensive field experience, position her as a trusted expert in the sustainable management of water and environmental systems.',
                  },
                  {
                    image: '/kowalewski.jpeg',
                    name: 'Claire Kowalewski',
                    role: 'Water Scientist',
                    description: 'She is a water scientist by profession. She is a director and co-founder at Aqua Solutions International Limited as well a project manager at Letztest. Her passion is in instructing customers on how to use the companies products. She is incharge of training and capacity development. She obtained her BSc. and MSc. at the University of Duisburg-Essen, Germany, in Water Science. She currently teaches at the Rhine-Waal University of Applied Sciences, Germany, in the faculty of  Communication and Environment.',
                  },
                  {
                    image: '/janepher.jpg',
                    name: 'Janepher Turinawe',
                    role: 'Director and Chief Laboratory Technician',
                    description: 'serves as the Director and Chief Laboratory Technician at Aqua Solutions International Limited. With extensive experience and expertise in laboratory operations, Jenifer oversees all aspects of the company’s laboratory operations while ensuring the highest standards of laboratory practices and protocols are maintained. Her role allows for seamless integration of technical knowledge and executive management, driving innovation and excellence within the organization.',
                  },
                  {
                    image: '/claire.jpeg',
                    name: 'Claire Natukunda',
                    role: 'Director at Aqua Solutions International Limited',
                    description: 'Claire is a Director at Aqua Solutions International Limited. Claire holds a bachelor’s degree in Community Psychology and brings a unique blend of compassion and practicality to the operations of Aqua Solutions International Limited. With a deep-rooted commitment to community welfare and environmental stewardship, Claire provides strategic leadership by guiding the company with a vision that prioritizes ethical business practices and sustainable solutions as well as community engagement through collaborating with NGOs, government agencies, and grassroots organizations to advocate for safe water initiatives.',
                  },
                ].map((member, idx) => (
                  <CarouselItem key={idx}>
                    <TeamMemberCard
                      position="left"
                      name={member.name}
                      jobPosition={member.role}
                      imageUrl={member.image}
                      description={member.description}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0 size-10 rounded-full border-gray-300" />
                <CarouselNext className="static translate-y-0 size-10 rounded-full border-gray-300" />
              </div>
            </Carousel>
          </div>
        </div>
      </main>

      <CtaSection />

      <Footer />
    </div>
  );
}
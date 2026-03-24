'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: typeof formData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section with full-width background image */}
        <section
          className="relative w-full bg-white min-h-[550px] sm:min-h-[450px] flex items-center justify-center"
          style={{ minHeight: '550px' }}
        >
        <img
          src="/contact-hero.jpg"
          alt="Contact Us Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
            <p className="mt-6 text-white font-[Inter,sans-serif] font-semibold text-5xl sm:text-6xl tracking-tight leading-tight">
              Contact Us
            </p>
          <p className="text-lg text-white/90 max-w-2xl drop-shadow text-left">
            Reach out to our team for questions, support, or a free quote. We're here to help you with all your water needs.
          </p>
        </div>
      </section>

      <main className="grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Contact Form Section (moved from landing page) */}
          <section className="py-16 bg-white sm:py-20">
            <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight font-[Inter,sans-serif]">We&apos;re Here to Help</h2>
                <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto leading-7 font-[Inter,sans-serif]">
                  Whether it&apos;s a question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 h-full min-h-100">
                  <iframe
                    src="https://maps.google.com/maps?q=Kawempe+Police+Station,+Mbogo+Road,+Kampala,+Uganda&output=embed"
                    width="100%"
                    height="100%"
                    style={{ minHeight: '400px', border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aqua Solutions location"
                  />
                </div>
                {/* Form */}
                <form className="flex flex-col gap-5">
                  <div className="flex gap-3 flex-wrap">
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md text-gray-700 hover:border-[#0077b6] hover:text-[#0077b6] transition-colors font-[Inter,sans-serif]"
                    >
                      General Inquiry
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md text-gray-700 hover:border-[#0077b6] hover:text-[#0077b6] transition-colors font-[Inter,sans-serif]"
                    >
                      Product Support
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md text-gray-700 hover:border-[#0077b6] hover:text-[#0077b6] transition-colors font-[Inter,sans-serif]"
                    >
                      Get a Quote
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-gray-900 font-[Inter,sans-serif]">First Name</label>
                      <input
                        type="text"
                        name="first-name"
                        placeholder="First Name"
                        className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077b6] focus:border-transparent font-[Inter,sans-serif]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-gray-900 font-[Inter,sans-serif]">Last Name</label>
                      <input
                        type="text"
                        name="last-name"
                        placeholder="Last Name"
                        className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077b6] focus:border-transparent font-[Inter,sans-serif]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-900 font-[Inter,sans-serif]">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@email.com"
                      className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077b6] focus:border-transparent font-[Inter,sans-serif]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-900 font-[Inter,sans-serif]">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+256 700 000 000"
                      className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077b6] focus:border-transparent font-[Inter,sans-serif]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-900 font-[Inter,sans-serif]">Your Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077b6] focus:border-transparent resize-none font-[Inter,sans-serif]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0077b6] text-white text-sm font-semibold py-3 rounded-md hover:bg-[#005f8a] transition-colors font-[Inter,sans-serif]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: 'How soon can you deliver water?',
                  a: 'We offer same-day delivery for urgent orders placed before 2 PM. Regular deliveries can be scheduled within 24-48 hours.',
                },
                {
                  q: 'What areas do you service?',
                  a: 'We primarily serve Kampala and surrounding districts. Contact us to check if your location is within our service area.',
                },
                {
                  q: 'Are your products environmentally friendly?',
                  a: 'Yes! All our products and processes follow eco-friendly standards. We focus on sustainable water solutions.',
                },
                {
                  q: 'Do you offer installation services?',
                  a: 'Absolutely. Our expert technicians provide professional installation for all water treatment systems.',
                },
                {
                  q: 'What warranty do you provide?',
                  a: 'All our products come with a 2-year warranty covering manufacturing defects and free repairs.',
                },
                {
                  q: 'How often should water be tested?',
                  a: 'We recommend quarterly testing for residential users and monthly for commercial customers.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-secondary rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-primary mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

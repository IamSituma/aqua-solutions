'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import FAQ from '@/components/faq';
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
          className="relative w-full bg-white min-h-[300px] sm:min-h-[550px] flex items-center justify-center"
        >
        <img
          src="/drinking.jpg"
          alt="Contact Us Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start justify-center py-10 sm:py-28 px-4 sm:px-6 lg:px-8">
            <p className="mt-6 text-white font-[Inter,sans-serif] font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Contact Us
            </p>
          <p className="text-sm sm:text-lg text-white/90 max-w-2xl drop-shadow text-left">
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
                <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight font-[Inter,sans-serif]">We&apos;re Here to Help</h2>
                <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto leading-7 font-[Inter,sans-serif]">
                  Whether it&apos;s a question about our services, a request for technical assistance, or suggestions for improvement, our team is eager to hear from you.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                {/* Contact Info */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8 bg-gray-50 rounded-xl p-8 border border-gray-100">
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-[#0077b6] mt-1 shrink-0" size={22} />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide font-[Inter,sans-serif] mb-1">Address</h3>
                      <p className="text-sm text-gray-600 font-[Inter,sans-serif] leading-relaxed">
                        Aqua Solutions International Ltd.<br />
                        Mbogo Road<br />
                        Opposite Kawempe Police Station<br />
                        P.O. Box 103773<br />
                        Kampala – Uganda – East Africa
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Mail className="text-[#0077b6] mt-1 shrink-0" size={22} />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide font-[Inter,sans-serif] mb-1">E-Mail</h3>
                      <a
                        href="mailto:info@aqua-uganda.com"
                        className="text-sm text-[#0077b6] hover:underline font-[Inter,sans-serif]"
                      >
                        info@aqua-uganda.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone className="text-[#0077b6] mt-1 shrink-0" size={22} />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide font-[Inter,sans-serif] mb-1">Telephone</h3>
                      <ul className="text-sm text-gray-600 font-[Inter,sans-serif] space-y-1">
                        <li><a href="tel:+256772606898" className="hover:text-[#0077b6]">+256 772 606898</a></li>
                        <li><a href="tel:+256751121286" className="hover:text-[#0077b6]">+256 751 121286</a></li>
                        <li><a href="tel:+256782608104" className="hover:text-[#0077b6]">+256 782 608104</a></li>
                        <li><a href="tel:+4917640449558" className="hover:text-[#0077b6]">+49 176 4044 9558</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Form */}
                <form className="flex flex-col gap-5 w-full lg:w-1/2">
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
          <FAQ />
        </div>

        {/* Full-width Map */}
        <div className="w-full">
          <iframe
            src="https://maps.google.com/maps?q=Kawempe+Police+Station,+Mbogo+Road,+Kampala,+Uganda&output=embed"
            width="100%"
            height="600"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aqua Solutions location"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

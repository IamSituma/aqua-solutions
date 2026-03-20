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
    setFormData(prev => ({ ...prev, [name]: value }));
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions? Our team is ready to help. Contact us today for more information about our services and products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4">
                  <MapPin className="text-accent flex-shrink-0 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      Kampala, Uganda<br />
                      East Africa
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4">
                  <Phone className="text-accent flex-shrink-0 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+256700000000" className="hover:text-primary transition-colors">+256 (0) 700 000 000</a><br />
                      <a href="tel:+256785000000" className="hover:text-primary transition-colors">+256 (0) 785 000 000</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4">
                  <Mail className="text-accent flex-shrink-0 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@aquasolutions.ug" className="hover:text-primary transition-colors">info@aquasolutions.ug</a><br />
                      <a href="mailto:support@aquasolutions.ug" className="hover:text-primary transition-colors">support@aquasolutions.ug</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-4">
                  <Clock className="text-accent flex-shrink-0 w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed<br />
                      <span className="font-semibold text-primary block mt-2">Emergency: 24/7 Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                
                {submitted && (
                  <div className="bg-accent/20 border border-accent text-accent-foreground p-4 rounded-lg mb-6">
                    Thank you! We've received your message and will get back to you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                        placeholder="+256 700 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      >
                        <option value="">Select a service</option>
                        <option value="purification">Water Purification</option>
                        <option value="delivery">Water Delivery</option>
                        <option value="installation">System Installation</option>
                        <option value="testing">Water Testing</option>
                        <option value="maintenance">Maintenance & Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                      placeholder="Tell us about your water needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

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

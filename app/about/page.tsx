import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Aqua Solutions International — our mission, team, and commitment to delivering clean water across Uganda.',
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col grow">
      <Navigation />

      <main className="grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">About Aqua Solutions</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Leading provider of water treatment and supply solutions in Kampala, Uganda since 2015
            </p>
          </div>

          {/* Mission Vision Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide safe, clean, and reliable water solutions that improve the quality of life for communities across Kampala and Uganda.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted and innovative water solutions provider in East Africa, setting industry standards for quality and sustainability.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, sustainability, customer-first service, and continuous innovation drive every decision we make.
              </p>
            </div>
          </div>

          {/* Company Story */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Aqua Solutions was founded with a simple mission: to ensure every household and business in Kampala has access to clean, pure water. Starting from a small team of water quality experts, we've grown into a trusted name in the water treatment industry.
              </p>
              <p>
                Over the years, we've invested heavily in advanced purification technologies, trained our staff to the highest standards, and built strong relationships with our customers. Today, we proudly serve thousands of households and businesses across Kampala.
              </p>
              <p>
                Our commitment to excellence hasn't wavered. We continue to innovate, improve our services, and expand our reach to bring clean water to more communities in Uganda.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Communities Trust Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Advanced water purification technology',
                'Expert team with 15+ years of experience',
                'ISO certified quality standards',
                'Affordable and transparent pricing',
                '24/7 emergency response service',
                'Eco-friendly sustainable practices',
                'Comprehensive water testing',
                'Full maintenance and support packages',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="text-accent shrink-0 w-6 h-6 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Team</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our dedicated team of water quality experts, engineers, and customer service professionals are committed to delivering excellence every day.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'James Mutebi', role: 'Chief Executive Officer' },
                { name: 'Dr. Sarah Omondi', role: 'Chief Technical Officer' },
                { name: 'David Kasigwa', role: 'Operations Manager' },
                { name: 'Grace Namukasa', role: 'Customer Service Lead' },
              ].map((member, idx) => (
                <div key={idx} className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="w-20 h-20 bg-linear-to-br from-primary to-accent rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg text-primary">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
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

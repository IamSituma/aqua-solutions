'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Droplets, Wrench, Zap, TestTubes, Truck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Droplets,
      title: 'Water Purification',
      description: 'Advanced filtration and purification systems using state-of-the-art technology to remove contaminants and ensure pure drinking water.',
      features: ['Multi-stage filtration', 'Activated carbon treatment', 'UV sterilization', 'Mineral balance optimization'],
    },
    {
      icon: Truck,
      title: 'Water Supply & Delivery',
      description: 'Reliable water delivery services for residential and commercial customers with flexible scheduling and bulk options.',
      features: ['Regular delivery schedules', '24/7 emergency delivery', 'Bulk quantity discounts', 'Flexible container sizes'],
    },
    {
      icon: Wrench,
      title: 'System Installation',
      description: 'Professional installation of water treatment systems tailored to your specific needs and property requirements.',
      features: ['Site assessment', 'Custom system design', 'Expert installation', 'System testing & certification'],
    },
    {
      icon: TestTubes,
      title: 'Water Testing',
      description: 'Comprehensive water quality testing and analysis using laboratory standards to ensure safety and purity.',
      features: ['Bacterial testing', 'Chemical analysis', 'Mineral content assessment', 'Detailed reports'],
    },
    {
      icon: Zap,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance packages to keep your water systems running efficiently and effectively.',
      features: ['Regular servicing', 'Filter replacements', 'System optimization', 'Technical support 24/7'],
    },
    {
      icon: Droplets,
      title: 'Emergency Response',
      description: 'Quick response team available round the clock for urgent water issues and emergency repairs.',
      features: ['Rapid response', '24/7 availability', 'Expert diagnostics', 'Quick repairs'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive water solutions tailored to meet the needs of homes, businesses, and communities across Kampala
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <Icon className="text-accent w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="text-sm text-muted-foreground">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Service Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Service Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Basic Package',
                  price: 'From UGX 150,000/month',
                  features: ['Monthly water delivery (500L)', 'Basic water testing quarterly', 'Email support'],
                },
                {
                  name: 'Professional Package',
                  price: 'From UGX 350,000/month',
                  features: ['Weekly water delivery (1000L)', 'Advanced water testing monthly', 'System maintenance quarterly', 'Priority phone support'],
                },
                {
                  name: 'Enterprise Package',
                  price: 'From UGX 750,000/month',
                  features: ['Custom water delivery schedule', 'Weekly water testing', 'Full system maintenance & monitoring', '24/7 premium support', 'Custom solutions'],
                },
              ].map((pkg, idx) => (
                <div key={idx} className={`rounded-lg p-8 ${idx === 1 ? 'bg-primary text-primary-foreground ring-2 ring-accent' : 'bg-card border border-border'}`}>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className={`text-lg font-semibold mb-6 ${idx === 1 ? 'text-accent' : 'text-accent'}`}>{pkg.price}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex gap-2">
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${idx === 1 ? 'bg-accent text-primary' : 'bg-accent text-accent-foreground'}`}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-2 rounded-lg font-semibold transition-colors ${idx === 1 ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
                    Choose Package
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-secondary rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our team can create a tailored water solution for your specific requirements
            </p>
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block">
              Request Custom Package
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

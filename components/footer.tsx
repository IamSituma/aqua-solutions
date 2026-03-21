import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Aqua Solutions</h3>
            <p className="text-sm opacity-90">Premium water treatment and supply solutions for Kampala and surrounding areas.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/products" className="hover:underline">Products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>Kampala, Uganda</span>
              </li>
              <li className="flex gap-2">
                <Phone size={18} className="shrink-0 mt-0.5" />
                <span>+256 (0) 700 000 000</span>
              </li>
              <li className="flex gap-2">
                <Mail size={18} className="shrink-0 mt-0.5" />
                <span>info@aquasolutions.ug</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Service Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 8 AM - 6 PM</li>
              <li>Saturday: 9 AM - 4 PM</li>
              <li>Sunday: Closed</li>
              <li className="pt-2">Emergency: 24/7 Available</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>&copy; 2024 Aqua Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden w-full text-sm text-slate-500 bg-white pt-8 sm:pt-10 pb-3 font-[Inter,sans-serif]">
      {/* Background watermark SVG */}
      <svg
        className="hidden md:block absolute -bottom-30 -left-80 opacity-5 w-full h-full pointer-events-none"
        width="68" height="26" viewBox="0 0 68 26" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_footer)">
          <path d="M16.141 0C13.4854 0 10.9387 1.04871 9.06091 2.91543L2.93268 9.00761C1.05492 10.8743 0 13.4061 0 16.0461C0 21.5435 4.48289 26 10.0128 26C12.6684 26 15.2152 24.9512 17.0929 23.0845L21.3319 18.8705C21.3319 18.8705 21.3319 18.8706 21.3319 18.8705L33.6827 6.59239C34.5795 5.70086 35.7958 5.2 37.0641 5.2C39.1874 5.2 40.9876 6.57576 41.6117 8.47953L45.5096 4.60457C43.7314 1.83589 40.6134 0 37.0641 0C34.4085 0 31.8617 1.04871 29.984 2.91543L13.3943 19.4076C12.4974 20.2992 11.2811 20.8 10.0128 20.8C7.37176 20.8 5.23077 18.6716 5.23077 16.0461C5.23077 14.7852 5.73459 13.5761 6.63139 12.6845L12.7596 6.59239C13.6564 5.70086 14.8727 5.2 16.141 5.2C18.2645 5.2 20.0645 6.57582 20.6887 8.47965L24.5866 4.60466C22.8084 1.83595 19.6904 0 16.141 0Z" fill="#364153" />
          <path d="M34.3188 19.4076C33.422 20.2992 32.2056 20.8 30.9373 20.8C28.8143 20.8 27.0143 19.4246 26.39 17.5211L22.4922 21.396C24.2705 24.1643 27.3883 26 30.9373 26C33.5929 26 36.1397 24.9512 38.0175 23.0845L54.6072 6.59239C55.504 5.70086 56.7203 5.2 57.9886 5.2C60.6297 5.2 62.7707 7.32839 62.7707 9.95393C62.7707 11.2148 62.2669 12.4239 61.37 13.3155L55.2419 19.4076C54.345 20.2992 53.1287 20.8 51.8604 20.8C49.7372 20.8 47.9371 19.4243 47.3129 17.5207L43.4151 21.3957C45.1933 24.1642 48.3112 26 51.8604 26C54.516 26 57.0628 24.9512 58.9405 23.0845L65.0687 16.9924C66.9465 15.1257 68.0014 12.5939 68.0014 9.95393C68.0014 4.45652 63.5186 0 57.9886 0C55.333 0 52.7863 1.04871 50.9085 2.91543L34.3188 19.4076Z" fill="#364153" />
        </g>
        <defs>
          <clipPath id="clip0_footer">
            <rect width="68" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-14 py-6 sm:py-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/aqua.png"
                alt="Aqua Solutions International Logo"
                width={100}
                height={20}
                className="h-auto w-30"
                priority
              />
            </Link>
            <p className="text-xs sm:text-sm/7 mt-2">
              Premium water treatment and supply solutions for homes, schools, hospitals, and businesses across Kampala and Uganda since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex flex-col text-xs sm:text-sm space-y-1.5 sm:space-y-2.5">
              <h2 className="font-semibold mb-3 sm:mb-5 text-gray-800">Company</h2>
              <Link className="hover:text-slate-600 transition" href="/">Home</Link>
              <Link className="hover:text-slate-600 transition" href="/about">About Us</Link>
              <Link className="hover:text-slate-600 transition" href="/services">Services</Link>
              <Link className="hover:text-slate-600 transition" href="/products">Products</Link>
            </div>
          </div>

          {/* Contact Information & Social Media */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-3 sm:mb-5 text-xs sm:text-base">Contact Information</h2>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm mb-4 sm:mb-6">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="shrink-0 mt-0.5 text-[#0077b6]" />
                <span>Kampala, Uganda</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="shrink-0 mt-0.5 text-[#0077b6]" />
                <span>+256 772 606898</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="shrink-0 mt-0.5 text-[#0077b6]" />
                <span>info@aquasolutionsinternational.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="pt-3 sm:pt-4 border-t border-slate-200">
              <div className="flex gap-2 sm:gap-3">

                {/* X Official Icon */}
                <a
                  href="https://x.com/aquasolutionsug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-full bg-slate-100 text-[#0077b6] hover:bg-[#0077b6] hover:text-white transition-colors duration-200"
                  aria-label="X"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.654l-5.207-6.807-5.967 6.807H2.428l7.723-8.835L1.235 2.25h6.821l4.713 6.231 5.486-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@aquasolutionsinternational"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-full bg-slate-100 text-[#0077b6] hover:bg-[#0077b6] hover:text-white transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/aqua-solutions-international/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-full bg-slate-100 text-[#0077b6] hover:bg-[#0077b6] hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 py-2 sm:py-4 border-t mt-4 sm:mt-6 border-slate-200">
          <p className="text-center text-xs sm:text-sm">
            Copyright 2025 &copy; Aqua Solutions International. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
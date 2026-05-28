import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Aqua Solutions International Limited privacy policy to understand how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <section className="w-full bg-gray-50 border-b border-gray-100 py-8 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6] mb-3 font-[Inter,sans-serif]">Legal</p>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight font-[Inter,sans-serif]">Privacy Policy</h1>
          <p className="mt-3 text-sm text-gray-500 font-[Inter,sans-serif]">Last updated: March 25, 2026</p>
        </div>
      </section>

      {/* Content */}
      <main className="grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-700 font-[Inter,sans-serif] leading-7">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Who we are</h2>
            <p>
              Aqua Solutions International Limited(&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a water treatment and supply company based in Kampala, Uganda.
              This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website or
              interact with our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data we collect</h2>
            <p className="mb-3">We may collect the following categories of personal data:</p>
            <ul className="space-y-2 pl-4 list-disc">
              <li><strong>Contact information</strong> — name, email address, phone number, and message content submitted via our contact form.</li>
              <li><strong>Usage data</strong> — pages visited, time spent on pages, browser type, device type, and general geographic location (country/city level) via Vercel Analytics. No personally identifiable information is captured.</li>
              <li><strong>Cookie data</strong> — your cookie consent preference. See our <a href="/cookies" className="text-[#0077b6] underline hover:text-[#005f8a]">Cookie Policy</a> for details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How we use your data</h2>
            <p className="mb-3">We use the data we collect to:</p>
            <ul className="space-y-2 pl-4 list-disc">
              <li>Respond to enquiries and service requests submitted through the contact form.</li>
              <li>Improve the performance and content of our website using aggregated, anonymised analytics.</li>
              <li>Remember your cookie preferences.</li>
              <li>Comply with our legal and regulatory obligations.</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Legal basis for processing</h2>
            <p className="mb-3">We process your personal data under the following legal bases:</p>
            <ul className="space-y-2 pl-4 list-disc">
              <li><strong>Consent</strong> — for optional cookies and marketing communications.</li>
              <li><strong>Legitimate interests</strong> — for website analytics and improving our services.</li>
              <li><strong>Contract performance</strong> — to respond to service enquiries.</li>
              <li><strong>Legal obligation</strong> — where required by applicable law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Data retention</h2>
            <p>
              We retain contact form submissions for up to 24 months for the purpose of responding to enquiries and maintaining
              records. Analytics data is aggregated and anonymised — no individual records are retained beyond 90 days.
              Cookie consent preferences are stored for 1 year.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Third-party services</h2>
            <p className="mb-3">We use the following third-party services that may process data on our behalf:</p>
            <ul className="space-y-2 pl-4 list-disc">
              <li>
                <strong>Vercel</strong> — hosts our website and provides anonymised analytics. See{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#0077b6] underline hover:text-[#005f8a]">
                  Vercel&apos;s Privacy Policy
                </a>.
              </li>
              <li>
                <strong>Unsplash</strong> — external image URLs are referenced to display placeholder content. No personal data is shared with Unsplash.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Your rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="space-y-2 pl-4 list-disc">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Object to or restrict processing of your data.</li>
              <li>Withdraw consent at any time (where processing is based on consent).</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:info@aquauganda.com" className="text-[#0077b6] underline hover:text-[#005f8a]">
                info@aquauganda.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Security</h2>
            <p>
              We take appropriate technical and organisational measures to protect your personal data against unauthorised access,
              loss, or disclosure. Our website is served over HTTPS and we rely on Vercel&apos;s security infrastructure for hosting.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision
              date. We recommend reviewing this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact us at:
            </p>
            <address className="not-italic mt-3 space-y-1 text-gray-600">
              <p className="font-semibold text-gray-900">Aqua Solutions International</p>
              <p>Kampala, Uganda</p>
              <p>
                Email:{' '}
                <a href="mailto:info@aquauganda.com" className="text-[#0077b6] underline hover:text-[#005f8a]">
                  info@aquauganda.com
                </a>
              </p>
              <p>
                Phone: <a href="tel:+256700000000" className="text-[#0077b6] hover:text-[#005f8a]">+256 700 000 000</a>
              </p>
            </address>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

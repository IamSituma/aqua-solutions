import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn how Aqua Solutions International  Limiteduses cookies on its website.',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero */}
      <section className="w-full bg-gray-50 border-b border-gray-100 py-8 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0077b6] mb-3 font-[Inter,sans-serif]">Legal</p>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight font-[Inter,sans-serif]">Cookie Policy</h1>
          <p className="mt-3 text-sm text-gray-500 font-[Inter,sans-serif]">Last updated: March 25, 2026</p>
        </div>
      </section>

      {/* Content */}
      <main className="grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-700 font-[Inter,sans-serif] leading-7">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">What are cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They are widely used to make websites
              work, operate more efficiently, and to provide information to website owners. Cookies do not give us access to your device
              or any information beyond what you choose to share with us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How we use cookies</h2>
            <p>
              Aqua Solutions International  Limiteduses cookies to improve your browsing experience, analyse how our site is used, and
              to remember your preferences. We do not use cookies to collect personally identifiable information without your
              explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Types of cookies we use</h2>

            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-5 py-3 font-semibold text-gray-900">Cookie name</th>
                    <th className="text-left px-5 py-3 font-semibold text-gray-900">Type</th>
                    <th className="text-left px-5 py-3 font-semibold text-gray-900">Purpose</th>
                    <th className="text-left px-5 py-3 font-semibold text-gray-900">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      name: 'aqua-cookie-consent',
                      type: 'Essential',
                      purpose: 'Stores your cookie consent preference so we do not show the banner on every visit.',
                      duration: '1 year',
                    },
                    {
                      name: '_vercel_analytics',
                      type: 'Analytics',
                      purpose: 'Vercel Analytics — measures page views, traffic sources, and general usage patterns. No personally identifiable data is stored.',
                      duration: 'Session',
                    },
                    {
                      name: '__vercel_live_token',
                      type: 'Functional',
                      purpose: 'Used by Vercel for deployment previews. Not set on the live production site.',
                      duration: 'Session',
                    },
                    {
                      name: 'next-auth.session-token',
                      type: 'Essential',
                      purpose: 'Maintains your authenticated session if you log in to any protected area of the site.',
                      duration: 'Session',
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="bg-white">
                      <td className="px-5 py-4 font-mono text-xs text-gray-800">{row.name}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          row.type === 'Essential' ? 'bg-green-50 text-green-700' :
                          row.type === 'Analytics' ? 'bg-blue-50 text-blue-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {row.type}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-600 text-sm">{row.purpose}</td>
                      <td className="px-5 py-4 text-gray-500 text-sm whitespace-nowrap">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Essential vs. non-essential cookies</h2>
            <p className="mb-3">
              <strong>Essential cookies</strong> are necessary for the website to function and cannot be switched off. They are usually
              only set in response to actions you take, such as setting your privacy preferences or filling in forms.
            </p>
            <p>
              <strong>Non-essential cookies</strong> (such as analytics) are only set after you give your consent via the cookie banner.
              You can withdraw consent at any time by clearing your browser cookies or using the opt-out link below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Third-party cookies</h2>
            <p>
              We use <strong>Vercel Analytics</strong> to understand how visitors interact with our site. Vercel processes data in
              accordance with its own privacy policy. No personal data such as names or email addresses is collected through analytics
              cookies. For more information, visit{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077b6] underline hover:text-[#005f8a]"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Managing and disabling cookies</h2>
            <p className="mb-3">
              You can control and delete cookies through your browser settings. Below are links to cookie management instructions
              for common browsers:
            </p>
            <ul className="space-y-1 pl-4 list-disc text-[#0077b6]">
              {[
                { label: 'Google Chrome', href: 'https://support.google.com/chrome/answer/95647' },
                { label: 'Mozilla Firefox', href: 'https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop' },
                { label: 'Safari', href: 'https://support.apple.com/en-gb/guide/safari/sfri11471/mac' },
                { label: 'Microsoft Edge', href: 'https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#005f8a] underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Please note that disabling cookies may affect the functionality of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to this policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated
              revision date. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at{' '}
              <a href="mailto:info@aquauganda.com" className="text-[#0077b6] underline hover:text-[#005f8a]">
                info@aquauganda.com
              </a>{' '}
              or visit our{' '}
              <a href="/contact" className="text-[#0077b6] underline hover:text-[#005f8a]">
                contact page
              </a>
              .
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

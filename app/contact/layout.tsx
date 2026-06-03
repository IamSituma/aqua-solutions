import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Aqua Solutions International Limited for a free consultation, quote, or support request.',
  openGraph: {
    title: 'Contact Us | Aqua Solutions International',
    description: 'Get in touch with Aqua Solutions International Limited for a free consultation, quote, or support request.',
  },
  twitter: {
    title: 'Contact Us | Aqua Solutions International',
    description: 'Get in touch with Aqua Solutions International Limited for a free consultation, quote, or support request.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

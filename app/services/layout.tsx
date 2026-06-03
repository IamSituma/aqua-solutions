import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Discover Aqua Solutions International Limited\'s professional water services — testing, treatment, drilling, and consultancy in Kampala, Uganda.',
  openGraph: {
    title: 'Services | Aqua Solutions International',
    description: 'Discover Aqua Solutions International Limited\'s professional water services — testing, treatment, drilling, and consultancy in Kampala, Uganda.',
  },
  twitter: {
    title: 'Services | Aqua Solutions International',
    description: 'Discover Aqua Solutions International Limited\'s professional water services — testing, treatment, drilling, and consultancy in Kampala, Uganda.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

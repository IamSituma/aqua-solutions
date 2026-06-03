import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Aqua Solutions International Limited\'s range of water testing products — microbiological, physico-chemical, and mobile laboratory solutions.',
  openGraph: {
    title: 'Products | Aqua Solutions International',
    description: 'Explore Aqua Solutions International Limited\'s range of water testing products — microbiological, physico-chemical, and mobile laboratory solutions.',
  },
  twitter: {
    title: 'Products | Aqua Solutions International',
    description: 'Explore Aqua Solutions International Limited\'s range of water testing products — microbiological, physico-chemical, and mobile laboratory solutions.',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

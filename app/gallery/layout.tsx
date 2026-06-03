import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse photos of Aqua Solutions International Limited in action — fieldwork, community training, exhibitions, and team members.',
  openGraph: {
    title: 'Gallery | Aqua Solutions International',
    description: 'Browse photos of Aqua Solutions International Limited in action — fieldwork, community training, exhibitions, and team members.',
  },
  twitter: {
    title: 'Gallery | Aqua Solutions International',
    description: 'Browse photos of Aqua Solutions International Limited in action — fieldwork, community training, exhibitions, and team members.',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

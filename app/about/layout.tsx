import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Aqua Solutions International Limited — our mission, vision, team, and commitment to providing clean water solutions across Uganda.',
  openGraph: {
    title: 'About Us | Aqua Solutions International',
    description: 'Learn about Aqua Solutions International Limited — our mission, vision, team, and commitment to providing clean water solutions across Uganda.',
  },
  twitter: {
    title: 'About Us | Aqua Solutions International',
    description: 'Learn about Aqua Solutions International Limited — our mission, vision, team, and commitment to providing clean water solutions across Uganda.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

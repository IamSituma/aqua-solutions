import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { HeroUIProvider } from '@heroui/system'
import { CookieConsentBanner } from '@/components/cookie-consent'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const siteUrl = 'https://aquauganda.com';

export const metadata: Metadata = {
  title: {
    default: 'Aqua Solutions International Limited | Water Treatment Services in Kampala',
    template: '%s | Aqua Solutions International',
  },
  description: 'Aqua Solutions International Limited provides comprehensive water treatment, purification, and supply services in Kampala, Uganda.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: '/',
    siteName: 'Aqua Solutions International',
    title: 'Aqua Solutions International Limited | Water Treatment Services in Kampala',
    description: 'Aqua Solutions International Limited provides comprehensive water treatment, purification, and supply services in Kampala, Uganda.',
    images: [{ url: '/logoheader.png', width: 512, height: 512, alt: 'Aqua Solutions International Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aqua Solutions International Limited | Water Treatment Services in Kampala',
    description: 'Aqua Solutions International Limited provides comprehensive water treatment, purification, and supply services in Kampala, Uganda.',
    images: ['/logoheader.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <HeroUIProvider>
          {children}
          <Analytics />
          <CookieConsentBanner />
          <WhatsAppFloat />
        </HeroUIProvider>
      </body>
    </html>
  )
}

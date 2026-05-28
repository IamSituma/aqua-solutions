import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { HeroUIProvider } from '@heroui/system'
import { CookieConsentBanner } from '@/components/cookie-consent'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Aqua Solutions International Limited | Water Treatment Services in Kampala',
    template: '%s | Aqua Solutions International',
  },
  description: 'Aqua Solutions International Limited provides comprehensive water treatment, purification, and supply services in Kampala, Uganda.',
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

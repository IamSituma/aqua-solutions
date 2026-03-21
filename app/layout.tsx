import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { HeroUIProvider } from '@heroui/system'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Aqua Solutions International | Water Treatment Services in Kampala',
    template: '%s | Aqua Solutions International',
  },
  description: 'Aqua Solutions International provides comprehensive water treatment, purification, and supply services in Kampala, Uganda.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <HeroUIProvider>
          {children}
          <Analytics />
        </HeroUIProvider>
      </body>
    </html>
  )
}

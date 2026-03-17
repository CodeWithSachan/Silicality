import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// ── FONTS ──────────────────────────────────────────
const syne = Syne({
  subsets:  ['latin'],
  weight:   ['400', '600', '700', '800'],
  variable: '--font-syne',
  display:  'swap',
})

const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['300', '400', '500'],
  variable: '--font-dm',
  display:  'swap',
})

// ── METADATA ───────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default:  'Silicality — AI Product Lab',
    template: '%s | Silicality',
  },
  description:
    'Silicality partners with founders and teams to design, build, and scale AI-powered digital products. Startup MVPs, AI tools, and web platforms.',
  keywords: [
    'AI product development',
    'startup MVP',
    'AI tools',
    'web development agency',
    'Next.js',
    'Silicality',
  ],
  authors:  [{ name: 'Silicality' }],
  creator:  'Silicality',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://silicality.com'
  ),
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://silicality.com',
    title:       'Silicality — AI Product Lab',
    description: 'We build intelligent digital products powered by AI, design, and engineering.',
    siteName:    'Silicality',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Silicality — AI Product Lab',
    description: 'We build intelligent digital products powered by AI, design, and engineering.',
    creator:     '@silicality',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

// ── ROOT LAYOUT ────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable}`}
    >
      <body className="bg-bg text-primary font-dm antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
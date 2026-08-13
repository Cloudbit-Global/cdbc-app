import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Geist_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Cloudbit — Futuristic Android App',
  description:
    'Download Cloudbit for Android. A modern, futuristic cloud experience — fast, secure, and beautiful. Direct APK download from GitHub Releases.',
  generator: 'v0.app',
  keywords: ['Cloudbit', 'Android app', 'APK download', 'cloud', 'futuristic'],
  openGraph: {
    title: 'Cloudbit — Futuristic Android App',
    description:
      'Download Cloudbit for Android. Fast, secure, and beautiful. Direct APK download.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#05070d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/CookieConsent"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"
import ScrollProgress from "@/components/ScrollProgress"
import { ThemeProvider } from "@/components/ThemeProvider"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://opstack.uk'),
  title: {
    default: "OpStack - Business Operating Systems for SMEs",
    template: "%s | OpStack",
  },
  description: "One login. Your entire business. Custom operating systems that replace spreadsheets, scattered tools, and manual processes with one unified platform.",
  keywords: ["SME", "digital transformation", "automation", "AI", "business operating system", "CTO", "OpStack"],
  authors: [{ name: "OpStack" }],
  creator: "OpStack",
  publisher: "OpStack",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://opstack.uk',
    siteName: 'OpStack',
    title: 'OpStack - Business Operating Systems for SMEs',
    description: 'One login. Your entire business. Custom operating systems that replace spreadsheets, scattered tools, and manual processes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpStack - Business Operating Systems for SMEs',
    description: 'One login. Your entire business. Custom operating systems that replace spreadsheets, scattered tools, and manual processes.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1628' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://app.cal.com" />
        <link rel="dns-prefetch" href="https://app.cal.com" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Skip link for keyboard navigation */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Skip to main content
          </a>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <CookieConsent />
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  )
}
